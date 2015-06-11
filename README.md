Huestimator
===========

Final Project  
Big Data @ Federal University of Rio de Janeiro @ 2015.1  
Prof. Sérgio Barbosa Villas-Boas (sbVB - http://www.sbvb.com.br)  

Members of the group:

- Bernardo Dornellas
- Bruno Tourinho
- Thiago Perrotta

Instructions
============

To compile the project, you will need to have `sbt` (Scala's Simple Build Tool) installed.

On Arch Linux:

    sudo pacman -S sbt

then `cd` into the project directory root, and:

- To compile the project: `sbt compile`
- To package the project so it can be easily runned from another machine: `sbt package`
- To clean the build: `sbt clean`

To run the project:

    sbt package
    ./runApp
