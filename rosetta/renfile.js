/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 REM renfile - Rename a file
5 REM https://rosettacode.org/wiki/Rename_a_file#Locomotive_Basic
6 REM GNU FDL 1.2 (https://www.gnu.org/licenses/fdl-1.2.html)
7 REM modification: corrected order of parameters for |REN; create the file before renaming it; checking afterwards
8 openout"input.txt":print#9,"Hello, World!":closeout
9 PRINT "before REN (no output.txt):": |dir,"output.txt"
10 |ren,"output.txt","input.txt"
11 PRINT "after REN (output.txt exists):": |dir,"output.txt"
12 |era,"output.txt"
*/ });
