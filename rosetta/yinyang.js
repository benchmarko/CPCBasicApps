/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 REM yinyang - Yin and yang
5 REM https://rosettacode.org/wiki/Yin_and_yang#Locomotive_Basic
6 REM GNU FDL 1.2 (https://www.gnu.org/licenses/fdl-1.2.html)
10 mode 2:deg:defint a-z:ink 0,26:ink 1,0:border 26
20 xp=320:yp=200:size=150:gosub 100
30 xp=550:yp=350:size=40:gosub 100
40 while inkey$="":wend
50 end
100 cx=xp:cy=yp:cr=size:gosub 1000
110 cy=yp+size/2:cr=size/8:gosub 1000
120 cr=size/2:half=0:gosub 2000
130 cy=yp-size/2:cr=size/8:gosub 1000
140 cr=size/2:half=1:gosub 2000
150 move xp, yp+size/2:fill 1
160 move xp+size/2, yp:fill 1
170 return
1000 plot cx,cy+cr
1010 for i=0 to 360 step 10
1020 draw cx+cr*sin(i),cy+cr*cos(i)
1030 next
1040 return
2000 p=180*half
2010 plot cx+cr*sin(p),cy+cr*cos(p)
2020 for i=p to p+180 step 10
2030 draw cx+cr*sin(i),cy+cr*cos(i)
2040 next
2050 return
*/ });
