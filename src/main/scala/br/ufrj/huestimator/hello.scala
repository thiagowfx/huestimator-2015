package br.ufrj.huestimator

import org.apache.spark.SparkContext._
import org.apache.spark.SparkContext
import org.apache.spark.SparkConf

object Hello {

  def main(args: Array[String]) {

    // init spark context
    val conf = new SparkConf().setAppName("huestimator")
    val sc = new SparkContext(conf)

    println("Hello World")

    // terminate spark context
    sc.stop()
  }
}

