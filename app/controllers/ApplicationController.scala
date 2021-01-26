package controllers

import akka.actor._
import akka.stream.Materializer
import com.mohiva.play.silhouette.api.LogoutEvent
import com.mohiva.play.silhouette.impl.providers.GoogleTotpInfo
import javax.inject.Inject
import utils.route.Calls
import com.mohiva.play.silhouette.api.actions.SecuredRequest
import de.htwg.se.ticTacToe3D.TicTacToe
import de.htwg.se.ticTacToe3D.util.Observer
import org.webjars.play.WebJarsUtil
import play.api.libs.json.{ JsValue, Json }
import play.api.libs.streams.ActorFlow
import play.api.mvc._
import utils.auth.DefaultEnv

import scala.concurrent.{ ExecutionContext, Future }

/**
 * The basic application controller.
 */
class ApplicationController @Inject() (
  scc: SilhouetteControllerComponents,
  home: views.html.home
)(implicit
  ex: ExecutionContext,
  webJarsUtil: WebJarsUtil,
  assets: AssetsFinder,
  system: ActorSystem,
  mat: Materializer) extends SilhouetteController(scc) {
  val controller = TicTacToe.controller

  def about = silhouette.UnsecuredAction { implicit request: Request[AnyContent] =>
    Ok(views.html.about(controller))
  }

  def vueIndex() = silhouette.SecuredAction.async { implicit request: SecuredRequest[DefaultEnv, AnyContent] =>
    Future.successful(Ok(views.html.vueIndex()))
  }
  def gameOver() = silhouette.SecuredAction.async { implicit request: SecuredRequest[DefaultEnv, AnyContent] =>
    Future.successful(Ok(views.html.vueIndex()))
  }

  /*
  def setPlayer(firstName: String) = {
    controller.setPlayers(firstName, "maschine")
  }

   */

  def players = Action(parse.json) {
    playersRequest: Request[JsValue] =>
      {
        val player1 = (playersRequest.body \ "player1").as[String]
        val player2 = (playersRequest.body \ "player2").as[String]
        controller.setPlayers(player1, player2)
        Ok(Json.obj(
          "statusMessage" -> controller.statusMessage,
          "gridArray" -> createGameArrays
        ))
      }
  }

  /*def setPlayer(user) = {
  }*/

  def move(row: Int, column: Int, grid: Int) = silhouette.SecuredAction.async { implicit request: SecuredRequest[DefaultEnv, AnyContent] =>
    if (controller.won(0) || controller.won(1)) {
      Future.successful(Ok(Json.obj(
        "statusMessage" -> controller.statusMessage,
        "gridArray" -> ""
      )))
    } else {
      controller.setValue(row, column, grid)
      Future.successful(Ok(Json.obj(
        "statusMessage" -> controller.statusMessage,
        "gridArray" -> createGameArrays
      )))
    }
  }

  def undo = silhouette.SecuredAction.async { implicit request: SecuredRequest[DefaultEnv, AnyContent] =>
    controller.undo
    Future.successful(Ok(Json.obj(
      "statusMessage" -> controller.statusMessage,
      "gridArray" -> createGameArrays
    )))
  }

  def restart = silhouette.SecuredAction.async { implicit request: SecuredRequest[DefaultEnv, AnyContent] =>
    controller.reset
    Future.successful(Ok(Json.obj(
      "statusMessage" -> controller.statusMessage,
      "gridArray" -> createGameArrays
    )))
  }

  def reset = silhouette.SecuredAction.async { implicit request: SecuredRequest[DefaultEnv, AnyContent] =>
    controller.reset
    Future.successful(Ok(Json.obj(
      "statusMessage" -> controller.statusMessage,
      "gridArray" -> ""
    )))
  }

  def redo = silhouette.SecuredAction.async { implicit request: SecuredRequest[DefaultEnv, AnyContent] =>
    controller.redo
    Future.successful(Ok(Json.obj(
      "statusMessage" -> controller.statusMessage,
      "gridArray" -> createGameArrays
    )))
  }

  def createGameArrays = controller.game.grids.map(grid => {
    grid.cells.map(row => {
      row.map(cell => {
        if (!cell.isSet) "-" else cell.value
      })
    })
  })

  def createOneGridArray(grid: Int) = controller.game.grids(grid).cells.map(row => {
    row.map(cell => {
      if (!cell.isSet) "-" else cell.value
    })
  })

  def gameToJson = silhouette.SecuredAction.async { implicit request: SecuredRequest[DefaultEnv, AnyContent] =>
    Future.successful(Ok(Json.obj(
      "statusMessage" -> controller.statusMessage,
      "gridArray" -> createGameArrays
    )))
  }

  def socket: WebSocket = WebSocket.accept[String, String] { _ =>
    ActorFlow.actorRef {
      out => Props(new TictactoeWebSocketActor(out))
    }
  }

  class TictactoeWebSocketActor(out: ActorRef) extends Actor with Observer {
    controller.add(this)

    override def update: Boolean = {
      out ! Json.obj(
        "statusMessage" -> controller.statusMessage,
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
        if (controller.won(0) || controller.won(1)) {
          out ! Json.obj(
            "statusMessage" -> controller.statusMessage,
            "gridArray" -> ""
          ).toString()
        } else {
          controller.setValue(row, col, gridIndex)
        }
      }
    }
  }
  /**
   * Handles the index action.
   *
   * @return The result to display.
   */
  def index = SecuredAction.async { implicit request: SecuredRequest[EnvType, AnyContent] =>
    authInfoRepository.find[GoogleTotpInfo](request.identity.loginInfo).map { totpInfoOpt =>
      Ok(home(request.identity, totpInfoOpt))
    }
  }

  /**
   * Handles the Sign Out action.
   *
   * @return The result to display.
   */
  def signOut = SecuredAction.async { implicit request: SecuredRequest[EnvType, AnyContent] =>
    val result = Redirect(Calls.home)
    eventBus.publish(LogoutEvent(request.identity, request))
    authenticatorService.discard(request.authenticator, result)
  }

}
