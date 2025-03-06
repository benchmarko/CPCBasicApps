/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 REM animate - Animate a pendulum
5 REM https://rosettacode.org/wiki/Animate_a_pendulum#Locomotive_Basic
6 REM GNU FDL 1.2 (https://www.gnu.org/licenses/fdl-1.2.html)
10 mode 1
20 theta=pi/2
30 g=9.81
40 l=1
50 sp=0 : px=320 : py=300 : bx=px : by=py
100 move bx-4,by+4:graphics pen 0:tag:print chr$(231);:tagoff
110 move px,py:draw bx,by
120 bx=px+l*250*sin(theta)
130 by=py+l*250*cos(theta)
140 move bx-4,by+4:graphics pen 1:tag:print chr$(231);:tagoff
150 move px,py:draw bx,by
160 accel=g*sin(theta)/l/100
170 sp=sp+accel/100
180 theta=theta+sp
190 frame
200 goto 100
*/ });
