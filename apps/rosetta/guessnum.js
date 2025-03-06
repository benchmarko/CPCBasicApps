/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 REM guessnum - Guess the number
5 REM https://rosettacode.org/wiki/Guess_the_number#Locomotive_Basic
6 REM GNU FDL 1.2 (https://www.gnu.org/licenses/fdl-1.2.html)
10 RANDOMIZE TIME:num=INT(RND*10+1):guess=0
20 PRINT "Guess the number between 1 and 10."
30 WHILE num<>guess
40 INPUT "Your guess? ", guess
50 WEND
60 PRINT "That's correct!"
*/ });
