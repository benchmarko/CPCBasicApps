/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 REM swtunnel - Spiders-Web Tunnel
2 REM (c) Dino
3 REM Modifications: replaced 4xCALL &BD19 by timing loop 
8 ' ANIMATED SPIDERS-WEB TUNNEL
9 ' BY DINO FOR SCULL PD
10 MODE 1:DEG
20 INK 0,0:BORDER 0
30 c=1
40 r=10:WHILE r<500
50 PLOT -100,0,c
60 FOR m=0 TO 360 STEP 10-r/100
70 MOVE 320+r*SIN(m),200+r*COS(m)
80 DRAW 320+r*SIN(m+90),200+r*COS(m+90)
90 NEXT m
100 c=c MOD 3+1
110 r=R+r/3:WEND
120 c=0
130 c=c MOD 3+1
140 INK c,26:INK c MOD 3+1,14:INK (c+1) MOD 3+1,2
150 t!=TIME+25:while TIME<t!:CALL &BD19:WEND:GOTO 130
*/ });
