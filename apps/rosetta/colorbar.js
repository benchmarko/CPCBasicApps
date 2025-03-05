/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 REM colorbar - Colour bars/Display
5 REM https://rosettacode.org/wiki/Colour_bars/Display#Locomotive_Basic
10 MODE 0:BORDER 23
20 FOR x=0 TO 15
30 ORIGIN x*40,0
40 FOR z=0 TO 39 STEP 4:MOVE z,0:DRAW z,400,x:NEXT z
50 NEXT x
60 CALL &bb06 ' wait for key press
*/ });
