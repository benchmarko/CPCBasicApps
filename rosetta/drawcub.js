/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 REM drawcub - Draw a cuboid
5 REM https://rosettacode.org/wiki/Draw_a_cuboid#Locomotive_Basic
6 REM GNU FDL 1.2 (https://www.gnu.org/licenses/fdl-1.2.html)
10 mode 2: origin 100,0: w=120:  height=w*1.5:  depth=w*2
20 x=80:  y=10
30 plot x,y
40 drawr 0,height: drawr w,0: drawr 0,-height: drawr -w,0: rem front
50 plot x,y+height: drawr depth/2,height: drawr w,0: drawr 0,-height: drawr -w,-height
60 plot x+w,y+height: drawr depth/2,height
*/ });
