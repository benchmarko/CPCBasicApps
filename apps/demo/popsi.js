/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem popsi - Popsi (Screen)
2 rem (c)
3 rem https://www.cpcwiki.eu/forum/programming/basic-files/ (BASIC02.DSK)
4 ' POPSI
5 '
6 ' SCULL PD LIBRARY 1990
7 '
10 FOR m=0 TO 3:INK m,26:NEXT:BORDER 26:INK 1,6,11:SPEED INK 100,100
20 MODE 1
30 DEG
40 PRINT CHR$(23)CHR$(0);
50 WINDOW #1,1,20,1,25:PAPER #1,3:CLS#1
60 WINDOW #1,21,40,1,25:PAPER #1,2:CLS#1
70 PAPER#1,0
80 LOCATE 14,13:PRINT"Please Wait..."
81 OUT &BC00,6:CALL &BD19:OUT &BD00,14
90 m=0
100 m=m+ABS(COS(m))
110 a=SIN(m)*200:b=200*COS(m):MOVE 320-a,200+b:DRAW 320+a,200+b,0
120 MOVE 320-a,200-b:DRAW 320+a,200-b,0
130 MOVE 320-b,200-a:DRAW 320-b,200+a,0
140 MOVE 320+b,200-a:DRAW 320+b,200+a,0
150 IF m<45 THEN 100
160 FOR m=142 TO 128 STEP -2
170 MOVE 320-m,200-m:DRAWR m*2,0:DRAWR 0,m*2:DRAWR -m*2,0:DRAWR 0,-m*2
180 NEXT m
190 WINDOW #1,12,29,5,21:CLS#1:WINDOW #1,1,40,1,25
200 LOCATE 14,13:PRINT"Please Wait..."
210 m=0
220 m=m+ABS(COS(m))
230 a=SIN(m)*180:b=180*COS(m):MOVE 320-a,200+b:DRAW 320+a,200+b,3
240 MOVE 320-a,200-b:DRAW 320+a,200-b,1
250 IF m<45 THEN 220
260 PRINT CHR$(23)CHR$(1);
270 FOR m=0 TO 360 STEP 2.8:MOVE m/1.4+190,74
280 IF SIN(m)<0 THEN MOVER 0,2
290 DRAWR 0,-20*SIN(m),1:NEXT
300 FOR m=0 TO 360 STEP 2.8:MOVE m/1.4+190,398-74
310 IF SIN(m)<0 THEN MOVER 0,2
320 DRAWR 0,-20*SIN(m),3:NEXT
330 INK 1,26
340 LOCATE 10,9 :PRINT"				
350 LOCATE 10,10:PRINT"				
360 LOCATE 10,11:PRINT"						
370 LOCATE 10,12:PRINT"			 
380 LOCATE 10,13:PRINT"    
390 LOCATE 10,14:PRINT"			 
400 LOCATE 10,15:PRINT"									 
410 LOCATE 10,16:PRINT"								
420 LOCATE 10,17:PRINT"								
425 OUT &BC00,6:CALL &BD19:OUT &BD00,25
426 LOCATE 1,1:PRINT"                                        ";:LOCATE 1,25:PRINT"                                        ";:LOCATE 1,1
430 INK 3,6:INK 2,2:INK 0,26:BORDER 26:INK 1,1
440 CALL &BB18
450 SAVE"!POPSI.PIC",B,&C000,&4000
*/ });
