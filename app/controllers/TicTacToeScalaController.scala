package controllers

import javax.inject._
import de.htwg.se.ticTacToe3D.TicTacToe
import play.api.libs.json.{JsValue, Json}
import play.api.mvc._
import de.htwg.se.ticTacToe3D.util.Observer
import play.api.libs.streams.ActorFlow
import akka.actor.{Actor, ActorRef, ActorSystem, Props}
import akka.stream.Materializer


@Singleton
class TicTacToeScalaController @Inject()(cc: ControllerComponents)(implicit system: ActorSystem, mat: Materializer) extends AbstractController(cc) {
  val gameController = TicTacToe.controller
  // def tictactoeAsText =  gameController.toString + gameController.statusMessage

  /**
   * the About Page
   *
   * @return the about page
   */
  def about = Action {
    Ok(views.html.index(gameController))
  }
  /**
   * Vuejs Index
   *
   * @return the about page
   */
  def vueIndex(name: String = null) = Action {
    Ok(views.html.vueIndex())
  }

  /**
   * TUI Page
   *
   * @return the TUI + Status message
   */
  def tictactoe = Action {
    Ok(views.html.tictactoe(gameController))
  }

  /**
   * Setting players names
   *
   * @return TUI + status message
   */
  def players = Action(parse.json) {
    playersRequest: Request[JsValue] => {
      val player1 = (playersRequest.body \ "player1").as[String]
      val player2 = (playersRequest.body \ "player2").as[String]
      gameController.setPlayers(player1, player2)
      Ok(Json.obj(
        "statusMessage" -> gameController.statusMessage,
        "gridArray" -> createGameArrays
      ))
    }
  }

  /**
   * Making a game move
   *
   * @return TUI + status message
   */
  def move = Action(parse.json) {
    moveRequest: Request[JsValue] => {
      val row = (moveRequest.body \ "row").as[Int]
      val col = (moveRequest.body \ "col").as[Int]
      val gridIndex = (moveRequest.body \ "grid").as[Int]
      if (gameController.won(0) || gameController.won(1)) {
        Ok(Json.obj(
          "statusMessage" -> gameController.statusMessage,
          "gridArray" -> ""
        ))
      } else {
        gameController.setValue(row, col, gridIndex)
        Ok(Json.obj(
          "statusMessage" -> gameController.statusMessage,
          "gridArray" -> createGameArrays
        ))
      }
    }
  }


  /**
   * reset the game --> reset players
   *
   * @return TUI + status message
   */
  def reset = Action {
    gameController.reset
    Ok(Json.obj(
      "statusMessage" -> gameController.statusMessage,
      "gridArray" -> ""
    ))
  }

  /**
   * restart the game
   *
   * @return TUI + status message
   */
  def restart = Action {
    gameController.restart
    Ok(Json.obj(
      "statusMessage" -> gameController.statusMessage,
      "gridArray" -> createGameArrays
    ))
  }

  /**
   * redo the last step
   *
   * @return TUI + status message
   */
  def redo = Action {
    gameController.redo
    Ok(Json.obj(
      "statusMessage" -> gameController.statusMessage,
            "gridArray" -> createGameArrays
    ))
  }

  /**
   * undo the the last step
   *
   * @return TUI + status message
   */
  def undo = Action {
    gameController.undo
    Ok(Json.obj(
      "statusMessage" -> gameController.statusMessage,
            "gridArray" -> createGameArrays
    ))
  }

  /**
   * Creates an array of arrays for the whole game with cell value - is its empty and the corresponded O or X if its not
   *
   * @return Array of Arrays depending on the game size
   */
  def createGameArrays = gameController.game.grids.map(grid => {
    grid.cells.map(row => {
      row.map(cell => {
        if (!cell.isSet) "-" else cell.value
      })
    })
  })

  /**
   * Creates one Grid array with cell value - is its empty and the corresponded O or X if its not
   *
   * @param grid grid index
   * @return array of the one Grid
   */
  def createOneGridArray(grid: Int) = gameController.game.grids(grid).cells.map(row => {
    row.map(cell => {
      if (!cell.isSet) "-" else cell.value
    })
  })

  /**
   * Create the json Object with the status message and the game
   *
   * @return
   */
  def gameToJson = Action {
    Ok(Json.obj(
      "statusMessage" -> gameController.statusMessage,
      "gridArray" -> createGameArrays
    ))
  }

  def socket: WebSocket = WebSocket.accept[String, String] { _ =>
    ActorFlow.actorRef {
      out => Props(new TictactoeWebSocketActor(out))
    }
  }

  class TictactoeWebSocketActor(out: ActorRef) extends Actor with Observer {
    gameController.add(this)

    override def update: Boolean = {
      out ! Json.obj(
        "statusMessage" -> gameController.statusMessage,
        "gridArray" -> createGameArrays
      ).toString()
      true
    }

    def receive: Receive = {
      case message: String => {
        val jsonObj = Json.parse(message)
        val row = (jsonObj \ "row").as[Int]
        val col = (jsonObj \ "col").as[Int]
        val gridIndex = (jsonObj \ "grid").as[Int]
        if (gameController.won(0) || gameController.won(1)) {
          out ! Json.obj(
            "statusMessage" -> gameController.statusMessage,
            "gridArray" -> ""
          ).toString()
        } else {
          gameController.setValue(row, col, gridIndex)
          out ! Json.obj(
            "statusMessage" -> gameController.statusMessage,
            "gridArray" -> createGameArrays
          ).toString()
        }
      }
    }
  }

  def isLoggedIn() = Action {
    Ok(Json.obj({
      "isLoggedIn" -> !(gameController.game.players.contains(null)
        || "".equals(gameController.game.players(0).name)
        || "".equals(gameController.game.players(1).name))
    }))
  }
}

