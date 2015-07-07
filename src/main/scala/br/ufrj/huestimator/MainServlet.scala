package br.ufrj.huestimator

import org.scalatra._
import scalate.ScalateSupport
import org.json4s._
import org.json4s.JsonDSL._
import org.json4s.jackson.JsonMethods._

case class Model(val data: String) {

  def isValid(): (Boolean, String) = {
    def isNumeric(str: String): Boolean = {
      def throwsNumberFormatException(f: => Any): Boolean = {
        try { f; false } catch { case e: NumberFormatException => true }
      }
      !throwsNumberFormatException(str.toLong) || !throwsNumberFormatException(str.toDouble)
    }

    val parts = data.split(',')

    if(parts.length != 30) {
      return (false, "Todos os campos devem ser preenchidos.")
    }
    
    else if(!parts.forall(isNumeric)) {
      return (false, "Todos os campos devem ser numéricos.")
    }
    
    return (true, "")
  }

}

class MainServlet extends ScalatraServlet {

  post("/predict") {
    val model: Model = Model(params("data"));
    val (isValid, errorMessage) = model.isValid()
    var json: JValue = ""

    if (!isValid) {
      json = ("error" -> errorMessage)
    } else {
      // TODO: pass the model to our application, use it and return something useful to the user
      json = ("response" -> "<b>HTML legal</b>")
    }

    contentType = " application/json"
    compact(render(json))
  }

}
