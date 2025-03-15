/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 REM abelian - Abelian sandpile model
5 REM https://rosettacode.org/wiki/Abelian_sandpile_model#Locomotive_Basic
6 REM GNU FDL 1.2 (https://www.gnu.org/licenses/fdl-1.2.html)
10 mode 1:defint a-z
20 height=15000:size=100
30 ink 0,0:ink 1,18:ink 2,8:ink 3,24
40 dim grid(size+1,size+1)
50 grid(size/2,size/2)=height
60 moretodo=1
70 while moretodo
80 moretodo=0
90 for x=1 to size
100 for y=1 to size
110 if grid(x,y)<4 then 190
120 overspill=int(grid(x,y)/4)
130 grid(x,y)=grid(x,y) mod 4
140 moretodo=1
150 if x>1 then grid(x-1,y)=grid(x-1,y)+overspill
160 if y>1 then grid(x,y-1)=grid(x,y-1)+overspill
170 if x<size then grid(x+1,y)=grid(x+1,y)+overspill
180 if y<size then grid(x,y+1)=grid(x,y+1)+overspill
190 next:next
200 wend
300 for x=1 to size
310 for y=1 to size
320 plot 4*x,4*y,grid(x,y)
330 plot 4*x+2,4*y,grid(x,y)
340 plot 4*x,4*y+2,grid(x,y)
350 plot 4*x+2,4*y+2,grid(x,y)
360 next:next
*/ });
