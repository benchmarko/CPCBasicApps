/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 REM mandelbr - Mandelbrot set
5 REM https://rosettacode.org/wiki/Mandelbrot_set#Locomotive_Basic
10 MODE 3    ' Note the CPCBasic-only screen mode!
20 FOR xp = 0 TO 639
30 FOR yp = 0 TO 399
40 x = 0 : y = 0
50 x0 = xp / 213 - 2 : y0 = yp / 200 - 1
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
