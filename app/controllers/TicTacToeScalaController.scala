package controllers
import javax.inject._
import play.api.mvc._
import de.htwg.se.ticTacToe3D.TicTacToe
import play.api.libs.json.{JsValue, Json}
import play.api.mvc._

import scala.util.{Failure, Success}

@Singleton
class TicTacToeScalaController @Inject()(cc: ControllerComponents) extends AbstractController(cc) {
  val gameController = TicTacToe.controller
  // def tictactoeAsText =  gameController.toString + gameController.statusMessage

  /**
   * the About Page
   * @return the about page
   */
  def about= Action {
    Ok(views.html.index(gameController))
  }

  /**
   * TUI Page
   * @return the TUI + Status message
   */
  def tictactoe = Action {
    gameToJson
    Ok(views.html.tictactoe(gameController))
  }

  /**
   * Setting players names
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
   * @param step move
   * @return TUI + status message
   */
  def move = Action(parse.json) {
      moveRequest: Request[JsValue] => {
        val row = (moveRequest.body \ "row").as[Int]
        val col = (moveRequest.body \ "col").as[Int]
        val gridIndex = (moveRequest.body \ "grid").as[Int]
        if(gameController.won(0) || gameController.won(1)) {
          Ok(Json.obj(
            "statusMessage" -> gameController.statusMessage,
            "gridArray" ->  ""
          ))
        } else {
          gameController.setValue(row, col, gridIndex)
          Ok(Json.obj(
            "statusMessage" -> gameController.statusMessage,
            "gridArray" ->  createOneGridJson(gridIndex)
          ))
        }
      }
    }



  /**
   * reset the game --> reset players
   * @return TUI + status message
   */
  def reset = Action {
    gameController.reset
    Redirect(controllers.routes.TicTacToeScalaController.tictactoe());
  }

  /**
   * restart the game
   * @return TUI + status message
   */
  def restart = Action {
    gameController.restart
    Redirect(controllers.routes.TicTacToeScalaController.tictactoe());
  }

  /**
   * redo the last step
   * @return TUI + status message
   */
  def redo = Action {
    gameController.redo
    Redirect(controllers.routes.TicTacToeScalaController.tictactoe());
  }

  /**
   * undo the the last step
   * @return TUI + status message
   */
  def undo = Action {
    gameController.undo
    Redirect(controllers.routes.TicTacToeScalaController.tictactoe());
  }

  def createJson = gameController.game.grids.map(grid => {
    grid.cells.map(row => {
      row.map(cell => {
        if (!cell.isSet) "-" else cell.value
      })
    })
  })
  def createOneGridJson (grid: Int) = gameController.game.grids(grid).cells.map(row => {
      row.map(cell => {
        if (!cell.isSet) "-" else cell.value
      })
  })

  def gameToJson = Action {
    Ok(Json.obj(
      "statusMessage" -> gameController.statusMessage,
      "gridArray" -> createJson
    ))
  }

}

