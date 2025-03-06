/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 REM matrixra - Matrix digital rain
5 REM https://rosettacode.org/wiki/Matrix_digital_rain#Locomotive_Basic
6 REM GNU FDL 1.2 (https://www.gnu.org/licenses/fdl-1.2.html)
10 mode 3:defint a-z:randomize time:ink 0,0:ink 1,26:ink 2,19:border 0
20 dim p(80):mm=12:dim act(mm):for i=1 to mm:act(i)=rnd*79+1:next
30 md=mm-2:dim del(md):for i=1 to md:del(i)=rnd*79+1:next
40 for i=1 to mm:x=act(i):locate x,p(x)+1:pen 1:print chr$(rnd*55+145);
50 if p(x)>0 then locate x,p(x):pen 2:print chr$(rnd*55+145);
60 p(x)=p(x)+1:if p(x)=50 then locate x,50:pen 2:print chr$(rnd*55+145);:p(x)=0:act(i)=rnd*79+1
70 next
80 for i=1 to md:x=del(i):locate x,p(x)+1:print " ";
90 p(x)=p(x)+1:if p(x)=50 then p(x)=0:del(i)=rnd*79+1
100 next:frame
110 goto 40
*/ });
