/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 REM drawclk - Draw a clock
5 REM https://rosettacode.org/wiki/Draw_a_clock#Locomotive_Basic
6 REM GNU FDL 1.2 (https://www.gnu.org/licenses/fdl-1.2.html)
7 REM modifications: inserted FRAME in line 200
10 mode 1:defint a-y:deg
20 input "Current time (HH:MM)";t$
30 h=val(mid$(t$,1,2))
40 m=val(mid$(t$,4,2))
50 cls
60 r=150:s=-1
70 ph=0:pm=0
80 origin 320,200
90 for a=0 to 360 step 6
100 if a mod 30>0 then z=.9 else z=.8
110 move z*r*sin(a),z*r*cos(a)
120 draw r*sin(a),r*cos(a)
130 next
140 move 0,r
150 for a=0 to 360 step 6
160 draw r*sin(a),r*cos(a)
170 next
180 every 50 gosub 220
190 ' ENDLESS_LOOP
200 FRAME: goto 200
210 ' NEW_SEC
220 s=s+1
230 if s=60 then s=0:m=m+1
240 if m=60 then m=0:h=h+1
250 if h=24 then h=0
260 if s=0 then gosub 300
270 if s>0 then gosub 420
280 return
290 ' DRAW_ALL
300 locate 1,1
310 print using "##";h;
320 print ":";
330 print using "##";m;
340 frame:move 0,0:draw .5*r*sin(ph),.5*r*cos(ph),0,0
350 frame:move 0,0:draw .7*r*sin(pm),.7*r*cos(pm),0,0
360 frame:move 0,0:draw .8*r*sin(6*59),.8*r*cos(6*59),0,0
370 pm=6*m
380 frame:move 0,0:draw .7*r*sin(pm),.7*r*cos(pm),1,0
390 ph=30*h+.5*m
400 frame:move 0,0:draw .5*r*sin(ph),.5*r*cos(ph),1,0
410 ' DRAW_SEC
420 a=6*s
430 ' uses "frame" and XOR ink mode for drawing -- requires BASIC 1.1
440 if a>0 then frame:move 0,0:draw .8*r*sin(a-6),.8*r*cos(a-6),3,1
450 frame:move 0,0:draw .8*r*sin(a),.8*r*cos(a),3,1
460 return
*/ });
