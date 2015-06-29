package br.ufrj.huestimator

import org.apache.spark.SparkContext._
import org.apache.spark.SparkContext
import org.apache.spark.SparkConf

import org.apache.spark.mllib.regression.LabeledPoint
import org.apache.spark.mllib.regression.LinearRegressionModel
import org.apache.spark.mllib.regression.LinearRegressionWithSGD
import org.apache.spark.mllib.linalg.Vectors

import org.apache.log4j.Logger
import org.apache.log4j.Level

object Hello {

  def main(args: Array[String]) {

    // log
    Logger.getLogger("org").setLevel(Level.OFF)
    Logger.getLogger("akka").setLevel(Level.OFF)

    // application properties
    // upstream documentation: https://spark.apache.org/docs/latest/configuration.html
    val conf = new SparkConf()
      .setMaster("local[*]")
      .setAppName("huestimator")
      .set("spark.logConf", "true")

    // init spark context
    val sc = new SparkContext(conf)

    // Load and parse the data
    val data = sc.textFile("data/lpsa.data")
    
    val parsedData = data.map {
      line =>
      val parts = line.split(',')
      LabeledPoint(parts(0).toDouble, Vectors.dense(parts(1).split(' ').map(_.toDouble)))
    }.cache()

    // Building the model
    val numIterations = 100
    val model = LinearRegressionWithSGD.train(parsedData, numIterations)

    // Evaluate model on training examples and compute training error
    val valuesAndPreds = parsedData.map {
      point =>
      val prediction = model.predict(point.features)
      (point.label, prediction)
    }
    val MSE = valuesAndPreds.map{case(v, p) => math.pow((v - p), 2)}.mean()
    println("training Mean Squared Error = " + MSE)

    // Save and load model
    // model.save(sc, "myModelPath")
    // val sameModel = LinearRegressionModel.load(sc, "myModelPath")

    // terminate spark context
    sc.stop()
  }
}

