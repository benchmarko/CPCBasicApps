/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 REM sierpin - Sierpinski triangle
5 REM https://rosettacode.org/wiki/Sierpinski_triangle#Locomotive_Basic
6 REM GNU FDL 1.2 (https://www.gnu.org/licenses/fdl-1.2.html)
100 MODE 2
110 order = 4
120 size = 2 ^ order
130 FOR y = size - 1 TO 0 STEP -1
140   PRINT SPACE$(y);
150   FOR x = 0 TO size - y - 1
160     IF (x AND y) <> 0 THEN PRINT "  "; ELSE PRINT "* ";
170   NEXT
180   PRINT
190 NEXT
*/ });
