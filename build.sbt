// program name
name := "huestimator"

// organization name
organization := "br.ufrj"

// program version
version := "0.1.0"

// programming language version
scalaVersion := "2.10.5"

// spark version
val sparkVersion = "1.3.1"

// scalatra version
val scalatraVersion = "2.4.0-RC2-2"

// spark
libraryDependencies += "org.apache.spark" %% "spark-core" % sparkVersion
libraryDependencies += "org.apache.spark" %% "spark-mllib" % sparkVersion
libraryDependencies += "javax.servlet" % "javax.servlet-api" % "3.1.0"
libraryDependencies += "org.eclipse.jetty" % "jetty-webapp" % "9.1.5.v20140505" % "container"
libraryDependencies += "org.eclipse.jetty" % "jetty-plus" % "9.1.5.v20140505" % "container"
libraryDependencies += "ch.qos.logback" % "logback-classic" % "1.1.2" % "runtime"
libraryDependencies += "org.scalatra" %% "scalatra" % scalatraVersion
libraryDependencies += "org.scalatra" %% "scalatra-scalate" % scalatraVersion
libraryDependencies += "org.json4s" %% "json4s-native" % "3.2.11"

// automatically find def main(args:Array[String]) methods from classpath
// upstream documentation: https://github.com/xerial/sbt-pack
packAutoSettings
