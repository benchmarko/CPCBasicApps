/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 REM forest - Forest fire
5 REM https://rosettacode.org/wiki/Forest_fire#Locomotive_Basic
6 REM GNU FDL 1.2 (https://www.gnu.org/licenses/fdl-1.2.html)
7 REM modifications: delay loop in line 1035
10 randomize time:mode 1:ink 0,0:ink 1,9:ink 2,15:defint a-o,r-z
20 pfire=0.00002:ptree=0.002
30 dimx=90:dimy=90
40 dim forest(dimx,dimy), forest2(dimx,dimy)
50 for y=1 to dimy-1:for x=1 to dimx-1
60 if rnd<.5 then forest(x,y)=1
70 next:next
80 gosub 1000
100 for y=1 to dimy-1
110 for x=1 to dimx-1
120 on forest(x,y)+1 gosub 500,600,700
130 next:next
140 for y=1 to dimy-1
150 for x=1 to dimx-1
160 forest(x,y)=forest2(x,y)
170 next:next
180 gosub 1000
190 goto 100
500 if rnd<ptree then forest2(x,y)=1
510 return
600 if rnd<pfire then forest2(x,y)=2:return
610 for yy=y-1 to y+1
620 for xx=x-1 to x+1
630 if forest(xx,yy)=2 then forest2(x,y)=2:return
640 next:next:forest2(x,y)=1
650 return
700 forest2(x,y)=0
710 return
1000 for y=1 to dimy-1
1010 for x=1 to dimx-1
1020 plot 4*x,4*y,forest(x,y)
1030 next:next
1035 pt1=time+25:while time<pt1:frame:wend
1040 return
*/ });
