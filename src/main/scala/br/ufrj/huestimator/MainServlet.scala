package br.ufrj.huestimator

import org.scalatra._
import scalate.ScalateSupport
import org.json4s._
import org.json4s.JsonDSL._
import org.json4s.jackson.JsonMethods._

case class Model(val data: String) {

  def isValid(): Boolean = {
    def isNumeric(str: String): Boolean = {
      def throwsNumberFormatException(f: => Any): Boolean = {
        try { f; false } catch { case e: NumberFormatException => true }
      }
      !throwsNumberFormatException(str.toLong) || !throwsNumberFormatException(str.toDouble)
    }

    val parts = data.split(',')

    parts.length == 30 && parts.forall(isNumeric)
  }

}

class MainServlet extends ScalatraServlet {

  post("/predict") {
    val model: Model = Model(params("data"));
    var json: JValue = ""

    if (!model.isValid()) {
      json = ("error" -> "Todos os dados devem ser numéricos.")
    } else {
      // TODO: pass the model to our application, use it and return something useful to the user
      json = ("response" -> "<b>HTML legal</b>")
    }

    contentType = " application/json"
    compact(render(json))
  }

}
