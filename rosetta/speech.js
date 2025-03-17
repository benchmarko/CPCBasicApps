/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 REM speech - Speech synthesis
5 REM https://rosettacode.org/wiki/Speech_synthesis#Locomotive_Basic
6 REM GNU FDL 1.2 (https://www.gnu.org/licenses/fdl-1.2.html)
7 REM modification: added RSX module and loader, works with CPCBaiscTS (benchmarko.github.io/CPCBasicTS/)
8 PRINT "Speech synthesis": gosub 13000:sound 1,1,0
9 PRINT "This is an example of speech synthesis."
10 |say,"This is an example of speech synthesis."
20 a$="Goodbye."
30 PRINT a$
40 |say,@a$
50 STOP
12980 '
12990 'load rsx
13000 on error goto 13020
13010 |say,""
13020 resume 13030
13030 on error goto 0
13040 openin "!speech.rsx":closein
13060 return
*/ });
