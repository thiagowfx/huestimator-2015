package br.ufrj.huestimator

import org.apache.spark.mllib.regression.LabeledPoint
import org.apache.spark.mllib.linalg.Vectors
import org.apache.spark.rdd.RDD
import org.apache.spark.mllib.classification.{ LogisticRegressionWithLBFGS, LogisticRegressionModel }
import org.apache.spark.SparkConf
import org.apache.spark.SparkContext
import org.apache.spark.mllib.evaluation.MulticlassMetrics

import org.apache.log4j.Logger
import org.apache.log4j.Level

class Classifier {

  // upstream documentation: https://spark.apache.org/docs/latest/configuration.html
  val sc: SparkContext = new SparkContext(
    new SparkConf()
      .setMaster("local[*]")
      .setAppName("huestimator")
      .set("spark.logConf", "true"))

  def Classifier() {
    // turn logging off
    Logger.getLogger("org").setLevel(Level.OFF)
    Logger.getLogger("akka").setLevel(Level.OFF)
  }

  private def trainModel(): Double = {

    def train(data: RDD[LabeledPoint]): LogisticRegressionModel = {
      // Run training algorithm to build the model
      new LogisticRegressionWithLBFGS()
        .setNumClasses(2)
        .run(data)
    }

    // Load and parse the data
    val data = sc.textFile("data/wdbc.data")

    val parsedData = parseData(data).cache()

    // Split data into training (70%) and test (30%).
    val splits = parsedData.randomSplit(Array(0.7, 0.3), seed = 11L)
    val training = splits(0).cache()
    val test = splits(1)

    val model = train(training)

    // Compute raw scores on the test set.
    val predictionAndLabels = test.map {
      case LabeledPoint(label, features) =>
        val prediction = model.predict(features)
        (prediction, label)
    }

    // Get evaluation metrics.
    val metrics = new MulticlassMetrics(predictionAndLabels)

    metrics.precision
  }

  def stopSpark(): Unit = {
    sc.stop()
  }

  private def parseData(rawData: RDD[String]): RDD[LabeledPoint] = {
    rawData.map {
      line =>
        val parts = line.split(',')
        val label = if (parts(1) == "M") 1.0 else 0.0
        LabeledPoint(label, Vectors.dense(parts.drop(2).map(_.toDouble)))
    }
  }

  def queryModel(input: String): (Double, Boolean) = {
    val precision = trainModel()
    var diagnosis = true
    
    (precision, diagnosis)
  }

}
