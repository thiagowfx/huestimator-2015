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

Instructions
============

To compile the project, you will need to have `sbt` (Scala's Simple Build Tool) installed.

On Arch Linux, simply do a:

    sudo pacman -S sbt scala

On Ubuntu, do a:

    echo "deb http://dl.bintray.com/sbt/debian /" | sudo tee -a /etc/apt/sources.list.d/sbt.list
    sudo apt-get update
    sudo apt-get install sbt scala

Upstream (sbt): http://www.scala-sbt.org/0.13/tutorial/Installing-sbt-on-Linux.html

then `cd` into the project directory root, and:

    sbt package
    ./runApp.sh
    
Additional information:

- To compile the project: `sbt compile`
- To clean the build: `sbt clean`
- To package the project so it can be easily runned from another machine: `sbt package`
