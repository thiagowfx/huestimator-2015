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
      val classifier = new Classifier;
      val precision = classifier.queryModel(params("data"))
      classifier.stopSpark()
      
      val successMessage = "A probabilidade de que você tenha câncer de mama é de: <b>" + precision.toString() + "</b>"
      json = ("response" -> successMessage)
    }

    contentType = " application/json"
    compact(render(json))
  }

}
