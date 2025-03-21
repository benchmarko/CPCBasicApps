/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 REM musscale - Musical scale
5 REM https://rosettacode.org/wiki/Musical_scale#Locomotive_Basic
6 REM GNU FDL 1.2 (https://www.gnu.org/licenses/fdl-1.2.html)
10 mode 1
20 print "Note","Freq. (Hz)","Period"
30 ' program loop:
40 if sq(1)<128 then gosub 70  ' play next note if channel is inactive
50 goto 40
60 ' play next note
70 read n
80 if n<0 then end
90 note=note+1
100 ' calculation from chapter 7, page 26 of the CPC manual:
110 f=440*(2^((n-10)/12))
120 p=round(62500/f)
130 print mid$("cdefgabc",note,1),round(f,2),p
140 sound 1,p,100
150 return
160 data 1,3,5,6,8,10,12,13,-1
*/ });
