/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 REM chaos - Chaos game
5 REM https://rosettacode.org/wiki/Chaos_game#Locomotive_Basic
6 REM GNU FDL 1.2 (https://www.gnu.org/licenses/fdl-1.2.html)
10 mode 1:randomize time:defint a-z
20 x = 640 * rnd
30 y = 400 * rnd
40 for i=1 to 20000
50 v = rnd * 2 + 1
60 on v goto 70,100,130
70 x = x/2
80 y = y/2
90 goto 150
100 x = 320 + (320-x)/2
110 y = 400 - (400-y)/2
120 goto 150
130 x = 640 - (640-x)/2
140 y = y/2
150 plot x,y,v
160 next i
*/ });
