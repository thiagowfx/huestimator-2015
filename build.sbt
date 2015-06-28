// program name
name := "huestimator"

// program version
version := "0.1"

// programming language version
scalaVersion := "2.10.5"

// spark version
val sparkVersion = "1.3.1"

// spark
libraryDependencies += "org.apache.spark" %% "spark-core" % sparkVersion % "provided"
libraryDependencies += "org.apache.spark" %% "spark-mllib" % sparkVersion % "provided"
