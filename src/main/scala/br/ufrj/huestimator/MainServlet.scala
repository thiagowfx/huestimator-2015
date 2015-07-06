package br.ufrj.huestimator

import org.scalatra._
import scalate.ScalateSupport

class MainServlet extends MainStack {

  def isNumeric(input: String): Boolean = input.forall(_.isDigit)

  post("/predict") {
    params("radius")
  }

}
