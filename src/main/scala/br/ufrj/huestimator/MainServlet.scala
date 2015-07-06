package br.ufrj.huestimator

import org.scalatra._
import scalate.ScalateSupport
import org.json4s._
import org.json4s.JsonDSL._
import org.json4s.jackson.JsonMethods._

// TODO: complete this class with all parameters
case class Model (
      val radius: String,
      val texture: String
    ) 
 {
  
  def isNumeric(input: String): Boolean = input.forall(_.isDigit)
  
  def isValid() : Boolean = {
    isNumeric(radius) &&
    isNumeric(texture)
  }
  
}

class MainServlet extends ScalatraServlet {
  
  post("/predict") {
    contentType = " application/json"
    var json : JValue = ""
    
    val model : Model = Model(params("radius"), params("texture"))
    
    if(!model.isValid()) {
      json = ("error" -> "Todos os dados devem ser numéricos.")
    }
    
    else {
      // TODO: validate more input
      // TODO: pass the model to our application, use it and return something useful to the user
      json = "TODO: simple json string"
    }
     
    compact(render(json))
  }

}
