/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem circlewr - Circle Writer
2 rem (c) COMTEC, 19xx (Amstrad Computer User)
3 rem https://cpcrulez.fr/coding_src-list-graphic-circle_writer__ACU.htm
4 rem
10 MODE 1:mo=16:INK 0,0:INK 1,26:INK 2,6:INK 3,24:BORDER 0:PAPER 0:PEN 1:TEXT$="CIRCLE WRITEr by COMTEC"
20 le=120:he=120:th=64:x=320:y=200:col=1
30 length=LEN(text$):steps=360/length:sti=steps/mo:thi=th/mo
40 LOCATE 1,25:PRINT TEXT$
50 FOR nu=0 TO length-1
60 FOR i=0 TO mo-1:FOR o=0 TO mo-1
70 IF TEST((nu*mo)+i,o)<>0 THEN 90
80 NEXT o,i,nu:WHILE INKEY$<>"":WEND:CALL &BB18:END
90 de=-(nu*steps)-sti*i-180:th=thi*o:DEG
100 PLOT x+(le+th)*COS(de),y+(he+th)*SIN(de),col:GOTO 80
*/ });
