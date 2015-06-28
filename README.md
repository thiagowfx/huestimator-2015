Huestimator
===========

Final Project  
Big Data @ Federal University of Rio de Janeiro @ 2015.1  
Prof. Sérgio Barbosa Villas-Boas <sbvb@sbvb.com.br>
sbVB - http://www.sbvb.com.br

Members of the group:

- Bernardo Dornellas <bamorim2@gmail.com>
- Bruno Tourinho <brunottomas@gmail.com>
- Thiago Perrotta <perrotta.thiago@poli.ufrj.br>

Dependencies
============

To compile the project, you will need to have `sbt` (Scala's Simple Build Tool) installed.

On Arch Linux, simply do a:

    sudo pacman -S sbt scala

On Ubuntu, do a:

    echo "deb http://dl.bintray.com/sbt/debian /" | sudo tee -a /etc/apt/sources.list.d/sbt.list
    sudo apt-get update
    sudo apt-get install sbt scala

Upstream (sbt): http://www.scala-sbt.org/0.13/tutorial/Installing-sbt-on-Linux.html

Running
=======

Using Eclipse
-------------

Run `sbt eclipse` then import the project root into eclipse.

Using the sbt pack plug-in
--------------------------

*RECOMMENDED*

Run `sbt pack` then run the executable on `${PROJECT_ROOT}/target/pack/bin/`.

Using spark-submit
------------------

Generate a `.jar` with `sbt package`, then do a:

    files=$(ls -1 $(pwd)/target/scala-*/huestimator*.jar)
    file=${files[0]}
    spark-submit $file

Additional information about `sbt`:

- To compile the project: `sbt compile`
- To clean the build: `sbt clean`
