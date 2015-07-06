Huestimator
===========

Final Project  
Big Data @ Federal University of Rio de Janeiro @ 2015.1  
Prof. Sérgio Barbosa Villas-Boas <sbvb@sbvb.com.br>  
sbVB - http://www.sbvb.com.br

Group members:

- Bernardo Dornellas <bamorim2@gmail.com>
- Bruno Tourinho <brunottomas@gmail.com>
- Thiago Perrotta <perrotta.thiago@poli.ufrj.br>

Dependencies
============

Building & Running
==================

Using eclipse
-------------

Run `./sbt eclipse` then import the project root directory into eclipse's workspace.
Should you update the project build, run this command again then refresh the project on eclipse.

Using the sbt pack plug-in
--------------------------

**RECOMMENDED**

Run `./sbt pack` then run the generated executable on `${PROJECT_ROOT}/target/pack/bin/`.

Using spark-submit
------------------

Generate a `.jar` with `./sbt package`, then do a:

    files=$(ls -1 $(pwd)/target/scala-*/huestimator*.jar)
    file=${files[0]}
    spark-submit $file

Scalatra
========

To start scalatra, run:

    $ ./sbt
    > container:start
    > browse

If `browse` doesn't launch your browser, then manually open [http://localhost:8080/](http://localhost:8080/) in your web browser.
