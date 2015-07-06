import br.ufrj.huestimator._
import org.scalatra._
import javax.servlet.ServletContext

import org.apache.log4j.Logger
import org.apache.log4j.Level

// This class should be in the default package. See web.xml.
class ScalatraBootstrap extends LifeCycle {
  override def init(context: ServletContext) {
    Logger.getLogger("org").setLevel(Level.OFF)
    Logger.getLogger("akka").setLevel(Level.OFF)
    context.mount(new MainServlet, "/*")
  }
}
