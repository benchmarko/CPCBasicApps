/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 REM barnsley - Barnsley fern
5 REM https://rosettacode.org/wiki/Barnsley_fern#Locomotive_Basic
6 REM GNU FDL 1.2 (https://www.gnu.org/licenses/fdl-1.2.html)
10 mode 2:ink 0,0:ink 1,18:randomize time
20 scale=38
30 maxpoints=20000: x=0: y=0
40 for z=1 to maxpoints
50 p=rnd*100
60 if p<=1 then nx=0: ny=0.16*y: goto 100
70 if p<=8 then nx=0.2*x-0.26*y: ny=0.23*x+0.22*y+1.6: goto 100
80 if p<=15 then nx=-0.15*x+0.28*y: ny=0.26*x+0.24*y+0.44: goto 100
90 nx=0.85*x+0.04*y: ny=-0.04*x+0.85*y+1.6
100 x=nx: y=ny
110 plot scale*x+320,scale*y
120 next
*/ });
