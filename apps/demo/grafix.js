/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem grafix - Grafix Demo
2 rem (c) Dino, 1990
5 rem
6 rem
7 ' GRAFIX DEMO
8 ' (C)'90 DINO
9 '  SCULL  PD
10 MODE 1
20 INK 0,0:BORDER 0
30 INK 1,26:PEN 1:LOCATE 14,5:PRINT"GRAFIX'S  DEMO"
40 LOCATE 15,10:PRINT"by DINO 1990"
50 LOCATE 19,15:PRINT"from"
60 LOCATE 13,20:PRINT"SCULL PD LIBRARY"
70 FOR M=1 TO 1500:NEXT
80 MODE 0:CALL &BC02:INK 0,0:BORDER 0:INK 1,26
90 FOR m=0 TO 400 STEP 9.1
100 MOVE 520-m,398
110 c=c+1:DRAW m+120,0,c MOD 15+1
120 MOVE 60,200:DRAW 120,400-m
130 DRAW 520,m:DRAW 580,200
140 NEXT
150 GOSUB 440
160 FOR m=0 TO 400 STEP 4
170 MOVE 0,m:DRAW 640,m
180 MOVE 0,398-m:DRAW 640,398-m
190 NEXT
200 MODE 0:CALL &BC02:INK 0,0:BORDER 0:INK 1,26
210 FOR m=0 TO 200 STEP 4:MOVE m,m:c=c+1:DRAW 638-m,m,c MOD 15+1:DRAW 638-m,398-m:DRAW m,398-m:DRAW m,m:MOVER 0,2:DRAW 638-m,m+2:DRAW 638-m,396-m:DRAW m,396-m:NEXT
220 GOSUB 440
230 FOR m=0 TO 640 STEP 8:MOVE m,0:DRAW m,400,0:MOVE 636-m,0:DRAW 636-m,400:NEXT
240 MODE 0:CALL &BC02:INK 0,0:BORDER 0:INK 1,26
250 DEG
260 DIM s(36),c(36):FOR m=0 TO 36:s(m)=SIN(m*10):c(m)=COS(m*10):NEXT
270 r=200:m=0:MOVE 320+r*s(m),200+r*c(m):WHILE r>0:r=r-0.5
280 c=c MOD 15+1
290 m=m MOD 36+1
300 DRAW 320+r*s(m),200+r*c(m),c
310 WEND:GOSUB 440
320 FOR m=1 TO 25 STEP 0.2:WINDOW 1,20,m,m:CLS:NEXT
330 MODE 0:CALL &BC02:INK 0,0:BORDER 0:INK 1,26
340 r=100:FOR m=0 TO 36:c=c MOD 15+1:MOVE 0,0:DRAW 320+r*s(m),200+r*c(m),c:NEXT
350 r=50:FOR m=0 TO 36:c=c MOD 15+1:MOVE 640,400:DRAW 320+r*s(m),200+r*c(m),c:NEXT
360 GOSUB 440:FOR m=1 TO 15:INK m,26:CALL &BD19:NEXT:FOR m=1 TO 15:INK m,0:CALL &BD19:NEXT:MODE 0:CALL &BC02:INK 0,0:BORDER 0:INK 1,26
370 DEG:x=-10:c=0:FOR r=198 TO 20 STEP -12.5:c=c+1:MOVE 0,200:x=0:FOR m=1 TO 36:x=x+8.8:DRAW x,S(m)*r+200,c:NEXT m
380 FOR m=1 TO 36:x=x+8.8:DRAW x,S(m)*r+200:NEXT m:NEXT
390 DEG:x=-10:c=0:FOR r=198 TO 20 STEP -12.5:c=c+1:MOVE 0,200:x=0:FOR m=1 TO 36:x=x+8.8:DRAW x,s(m)*-r+200,16-c:NEXT m
400 FOR m=1 TO 36:x=x+8.8:DRAW x,s(m)*-r+200:NEXT m:NEXT
410 GOSUB 440
420 FOR m=1 TO 20 STEP 0.2:WINDOW m,m,1,25:CLS:NEXT
430 RUN
440 c2=0:c3=0:c=0:FOR m=1 TO 250:c3=c2:c2=c:c=c MOD 15+1:INK c3,0:INK c,26:CALL &BD19:NEXT::RETURN
*/ });
