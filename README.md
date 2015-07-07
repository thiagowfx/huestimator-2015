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

Building & Running
==================

**RECOMMENDED**

To start scalatra, run:

    $ ./sbt
    > compile
    > container:start
    > browse

If `browse` doesn't launch your web browser, then manually open [http://localhost:8080/](http://localhost:8080/) in it.

Using eclipse
=============

Run `./sbt eclipse` then import the project root directory into eclipse's workspace.
Should you update the project build, run this command again then refresh the project on eclipse.
