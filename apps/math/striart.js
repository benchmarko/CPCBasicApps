/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
10 REM striart - String Art
20 REM (c) Marco Vieth, 01/2023
50 '
51 INK 1,0:INK 0,26
60 CLEAR:DEG
90 m=3:on error goto 110:'detect mode 3
100 mode m:goto 120
110 m=2:resume 120
120 on error goto 0
130 mx=m:m=1
140 '
141 r=180:'radius
150 p=48:d=15:a=0
151 s=360/p:'step size
152 DEF FNx(i)=SIN(s*i)*r:DEF FNy(i)=COS(s*i)*r
160 '
170 MODE m:ORIGIN 320,200
180 PRINT"String Art";
200 PRINT
230 PRINT
240 PRINT"Menu"
250 PRINT
260 PRINT"1) Points:";p
270 PRINT"2) Distance:";d
280 PRINT"3) Dist add:";a
290 PRINT"4) Screen mode";m
300 PRINT"5) Animation";dt;"sec"
310 PRINT"6) Draw"
315 PRINT"7) Quit"
320 PRINT
330 PRINT"Please select: ";
340 re=0:if dt>=2 then after dt*50*2 gosub 440:'autostart
350 t$=INKEY$:IF t$="" and re=0 THEN 350
360 if re>0 then t$="6"
370 t=VAL(t$):IF t<1 OR t>7 THEN 350
380 re=remain(0):re=1
390 PRINT t$
400 ON t GOSUB 480,492,501,610,650,980,1700
410 GOTO 170
420 '
430 REM After timeout => autostart
440 re=remain(0):re=1
450 return
460 '
470 REM points
480 PRINT"Points:";:INPUT p
490 return
491 REM Distance
492 PRINT"Distance:";:INPUT d
493 return
500 rem Dist add
501 PRINT"Dist add:";:INPUT a
502 return
590 '
600 REM toogle screen mode
610 m=m+1:if m>mx then m=0
620 return
630 '
640 REM animation delay
650 ?:?"Animation delay:";
660 input dt
670 return
740 '
820 'PRINT"Number (1 to";dcnt;"): ";:INPUT didx
860 '
960 '
970 REM draw
980 CLS
985 s=360/p:'step size
990 FOR i=0 TO p-1:PLOT FNx(i),FNy(i):NEXT
1150 d0=d
1160 FOR i=0 TO p-1
1170 MOVE FNx(i),FNy(i):DRAW FNx(i+d0),FNy(i+d0):d0=d0+a
1180 'GOSUB 1300
1190 NEXT
1200 'return
1300 t$="":WHILE t$="":t$=INKEY$:WEND
1500 return
1510 '
1600 REM end
1700 mode 2
1710 ?"Bye"
1720 stop
1730 return
2000 REM 5 3 0 - 5 pointed star
2010 REM 
2020 REM 7 5 0 - 7-pointed star, slanted "squares"
2030 REM 
2040 REM 18 7 0 - twine star
2050 REM 
2060 REM 48 15 0 - ring, or stop at drop
2070 REM 48 15 1 - rounded heart
2080 REM 48 15 -1 - Fan / "Rays" starting at point 15
2090 REM 48 24 -1 - fans / "rays" starting at point 24 (below)
2100 REM 48 15 -2 - Diagonally hatched
2110 REM 48 15 -3 - diagonal "triangulated"
2120 REM 48 15 -4 - Diagonally irregular "checkered"
2130 REM 48 15 -10 - skeins with thin stripes
2140 REM 
2150 REM 48 24 0 - "Sun" (rays from the center)
2160 REM 49 24 0 - "flower" (points from center with center hole)
2170 REM 49 24 -3 - network of triangles and rhombuses (hatched)
2180 REM
*/ });
