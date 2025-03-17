/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 REM videomod - Video display modes 
5 REM https://rosettacode.org/wiki/Video_display_modes#Locomotive_Basic
6 REM GNU FDL 1.2 (https://www.gnu.org/licenses/fdl-1.2.html)
7 REM modifications: print text in modes 0..3
10 mode 0   ' switch to mode 0
20 for i=0 to 3
30 mode i
40 print "Mode ";i
50 t=time+300:while time<t and inkey$="":wend
80 next i
*/ });
