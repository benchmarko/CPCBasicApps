/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 REM keyboyn - Keyboard input: Obtain a Y or N response
5 REM https://rosettacode.org/wiki/Keyboard_input/Obtain_a_Y_or_N_response#Locomotive_Basic
10 CLEAR INPUT
20 PRINT "Press Y or N to continue"
30 a$=LOWER$(INKEY$)
40 IF a$="" THEN 30
50 IF a$="y" THEN PRINT "Yes":END
60 IF a$="n" THEN PRINT "No":END
70 PRINT "Try again"
80 GOTO 30
*/ });
