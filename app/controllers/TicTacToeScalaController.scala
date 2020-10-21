package controllers
import javax.inject._

import play.api.mvc._
import de.htwg.se.ticTacToe3D.TicTacToe

@Singleton
class TicTacToeScalaController @Inject()(cc: ControllerComponents) extends AbstractController(cc) {
  val gameController = TicTacToe.controller
  def tictactoAsText =  gameController.toString + gameController.statusMessage

  def about= Action {
    Ok(views.html.index())
  }

  def tictactoe = Action {
    Ok(tictactoAsText)
  }

}