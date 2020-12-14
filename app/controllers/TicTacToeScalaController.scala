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
   * TUI Page
   *
   * @return the TUI + Status message
   */
  def tictactoe = Action {
    gameToJson
    Ok(views.html.tictactoe(gameController))
  }

  /**
   * Setting players names
   *
   * @param player1 name
   * @param player2 name
   * @return TUI + status message
   */
  def players(player1: String, player2: String) = Action {
    gameController.setPlayers(player1, player2)
    Redirect(controllers.routes.TicTacToeScalaController.tictactoe());
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
          "gridArray" -> createOneGridArray(gridIndex)
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
    Redirect(controllers.routes.TicTacToeScalaController.tictactoe());
  }

  /**
   * restart the game
   *
   * @return TUI + status message
   */
  def restart = Action {
    println(Json.obj())
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
      "statusMessage" -> gameController.statusMessage
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
      "statusMessage" -> gameController.statusMessage
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

  /**
   * Instead of a normal Action, call Websocket.accept and create the actor
   * @return
   */
  def socket: WebSocket = WebSocket.accept[String, String] { _ =>
    ActorFlow.actorRef {
      out => Props(new TictactoeWebSocketActor(out))
    }
  }

  /**
   *reacting to events from the game, the actor become an observer to the gamecontroller
   * @param out
   */
  class TictactoeWebSocketActor(out: ActorRef) extends Actor with Observer {
    gameController.add(this)

    override def update: Boolean = {
      if (gameController.won(0) || gameController.won(1)) {
        out ! Json.obj(
          "statusMessage" -> gameController.statusMessage,
          "gridArray" -> ""
        ).toString()
      } else {
        out ! Json.obj(
          "statusMessage" -> gameController.statusMessage,
          "gridArray" -> createGameArrays
        ).toString()
      }
      true
    }

    def receive: Receive = {
      case message: String => {
        val jsonObj = Json.parse(message)
        val row = (jsonObj \ "row").as[Int]
        val col = (jsonObj \ "col").as[Int]
        val gridIndex = (jsonObj \ "grid").as[Int]
        if (!gameController.won(0) && !gameController.won(1)) {
          gameController.setValue(row, col, gridIndex)
        }
      }
    }
  }
}

