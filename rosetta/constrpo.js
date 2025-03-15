/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 REM constrpo - Constrained random points on a circle
5 REM https://rosettacode.org/wiki/Constrained_random_points_on_a_circle#Locomotive_Basic
6 REM GNU FDL 1.2 (https://www.gnu.org/licenses/fdl-1.2.html)
10 MODE 1:RANDOMIZE TIME
20 FOR J=1 TO 100
30 X=INT(RND*30-15)
40 Y=INT(RND*30-15)
50 D=X*X+Y*Y
60 IF D<100 OR D>225 THEN GOTO 40
70 PLOT 320+10*X,200+10*Y:LOCATE 1,1:PRINT J
80 NEXT
90 CALL &BB06 ' wait for key press
*/ });
