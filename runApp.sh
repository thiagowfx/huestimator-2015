#!/bin/bash
# Script to easily launch our spark application
files=$(ls -1 $(pwd)/target/scala-*/huestimator*.jar)
file=${files[0]}
dataFile=$(readlink -f $1)
shift
echo "Submitting $file..."
spark-submit --properties-file "$(pwd)/spark.conf" $file $dataFile "$@"
