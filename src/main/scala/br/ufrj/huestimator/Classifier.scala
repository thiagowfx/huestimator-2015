package br.ufrj.huestimator

import org.apache.spark.mllib.regression.LabeledPoint
import org.apache.spark.mllib.linalg.Vectors
import org.apache.spark.rdd.RDD
import org.apache.spark.mllib.classification.{LogisticRegressionWithLBFGS, LogisticRegressionModel}

object Classifier {
  def parseData(rawData: RDD[String]):RDD[LabeledPoint] = {
    rawData.map {
      line =>
      val parts = line.split(',')
      val label = if ( parts(1) == "M" ) 1.0 else 0.0
      LabeledPoint(label, Vectors.dense(parts.drop(2).map(_.toDouble)))
    }
  }

  def train(data: RDD[LabeledPoint]): LogisticRegressionModel = {
    // Run training algorithm to build the model
    new LogisticRegressionWithLBFGS()
      .setNumClasses(2)
      .run(data)
  }
}
