package controllers
import javax.inject._

import play.api.mvc._
import de.htwg.se.ticTacToe3D.TicTacToe

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
    Ok(views.html.tictactoe(gameController))
  }

  /**
   * Making a game move
   * @param step move
   * @return TUI + status message
   */
  def move(step: String) = Action { // "123" --> ["1", "2", "3"] --> [1, 2, 3]
    step.toList.filter(c => c != ' ').map(c => c.toString.toInt) match {
      case row :: column :: grid :: Nil => gameController.setValue(row, column, grid)
      case _ => None
    }
    Ok(views.html.tictactoe(gameController))
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

}