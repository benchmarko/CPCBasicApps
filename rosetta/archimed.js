/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 REM archimed - Archimedean spiral
5 REM https://rosettacode.org/wiki/Archimedean_spiral#Locomotive_Basic
6 REM GNU FDL 1.2 (https://www.gnu.org/licenses/fdl-1.2.html)
10 a=1.5:b=2
20 mode 2:rad:move 320,200
30 for t=0 to 40*pi step 0.2
40 r=a+b*t
50 draw r*sin(t)+320,r*cos(t)+200
60 next
70 while inkey$="":wend
*/ });
