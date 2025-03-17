/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 REM write3d - Write language name in 3D ASCII
5 REM https://rosettacode.org/wiki/Write_language_name_in_3D_ASCII#Locomotive_Basic
6 REM GNU FDL 1.2 (https://www.gnu.org/licenses/fdl-1.2.html)
10 mode 2:defint a-z
20 locate 1,25
30 print "Basic";
40 ' add some kerning so the characters will fit in 80 columns:
50 off(2)=1:off(4)=-2:off(5)=-4
60 for c=0 to 4
70 for y=7 to 0 step -1
80 for x=0 to 7
90 v=test(x+8*c,2*y)
100 plot x+8*c,2*y,0
110 if v>0 then gosub 180
120 next x
130 next y
140 next c
150 call &bb06  ' wait for key press
160 end
170 ' print pixel
180 xp=16*c+2*x+1+y+off(c+1)
190 yp=8-y
200 if xp>77 then return
210 locate xp,yp
220 print "//\";
230 locate xp,yp+1
240 print "\\/";
250 return
*/ });
