package br.ufrj.huestimator

import org.apache.spark.SparkContext._
import org.apache.spark.SparkContext
import org.apache.spark.SparkConf

import org.apache.spark.mllib.evaluation.MulticlassMetrics
import org.apache.spark.mllib.regression.LabeledPoint

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
    val data = sc.textFile("data/wdbc.data")
    
    val parsedData = Classifier.parseData(data).cache()

    // Split data into training (70%) and test (30%).
    val splits = parsedData.randomSplit(Array(0.7, 0.3), seed = 11L)
    val training = splits(0).cache()
    val test = splits(1)

    val model = Classifier.train(training)

    // Compute raw scores on the test set.
    val predictionAndLabels = test.map { case LabeledPoint(label, features) =>
      val prediction = model.predict(features)
      (prediction, label)
    }

    // Get evaluation metrics.
    val metrics = new MulticlassMetrics(predictionAndLabels)
    val precision = metrics.precision
    println("Precision = " + precision)

    sc.stop()
  }
}

