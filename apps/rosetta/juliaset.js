/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 REM juliaset - Julia set
5 REM https://rosettacode.org/wiki/Julia_set#Locomotive_Basic
10 MODE 3    ' Note the CPCBasic-only screen mode!
20 FOR xp = 0 TO 639
30 FOR yp = 0 TO 399
40 x0 = -0.512511498387847167 : y0 = 0.521295573094847167
50 x = xp / 213 - 1.5 : y = yp / 200 - 1
60 iteration = 0
70 maxIteration = 100
80 WHILE (x * x + y * y <= (2 * 2) AND iteration < maxIteration)
90 xtemp = x * x - y * y + x0
100 y = 2 * x * y + y0
110 x = xtemp
120 iteration = iteration + 1
130 WEND
140 IF iteration <> maxIteration THEN c = iteration ELSE c = 0
150 PLOT xp, yp, c MOD 16
160 NEXT
170 NEXT
*/ });
