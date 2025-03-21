/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 REM pinstrip - Pinstripe: Display
5 REM https://rosettacode.org/wiki/Pinstripe/Display#Locomotive_Basic
6 REM GNU FDL 1.2 (https://www.gnu.org/licenses/fdl-1.2.html)
10 MODE 2 ' finest resolution
20 sh=400 ' screen height
30 sw=640 ' screen width
40 INK 0,26 ' white ink for background pen (0)
50 INK 1,0  ' black ink for foreground pen (1)
60 FOR sn=1 TO 4 ' four sections
70 bh=INT (sh/4) ' bar height
80 bb=(4-sn)*bh  ' bar baseline
90 dw=0  ' currently drawn bar width
100 dc=0 ' current drawing colour
110 FOR l=0 TO sw -1 ' pan width for each section
120 PLOT l,bb,dc
130 DRAWR 0,bh-1,dc ' subtract 1 pixel (already plotted)
140 dw=dw+1
150 ' section number corresponds to maximum bar width
160 ' change bar colour, if maximum bar width exceeded
170 IF dw>sn THEN dw=0:dc=dc+1 ' next colour
180 IF dc>1 THEN dc=0
190 NEXT l
200 NEXT sn
*/ });
