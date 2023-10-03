/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
100 REM mousepa - Mouse Painting
110 REM CPCBasic only
120 m=1
130 MODE m
140 xd=2^(2-MIN(m,2)):yd=((m=3)+2)
150 WINDOW #1,2,20,50/yd,50/yd
160 dm=4:d$(0)="move":d$(1)="plot":d$(2)="draw":d$(3)="rect":d$(4)="fill":d=1
170 cm=3:c=1
180 x0=0:y0=0
190 '
200 MOVE x0,y0:LOCATE #1,1,1:PRINT #1,CHR$(241);CHR$(15)+CHR$(c);CHR$(233);CHR$(15)+CHR$(1);CHR$(240);" ";CHR$(242);d$(d);CHR$(243); 'drawing mode
210 '
220 x0=XPOS:y0=YPOS
230 LOCATE #1,12,1:PRINT #1,USING "### ";x0;y0; 'show coordinates
240 MOVE 1000,1000 'activate move on mouse click
250 '
260 CALL &BD19
270 t$=INKEY$:x=XPOS:y=YPOS
280 IF t$="" AND x=1000 AND y=1000 THEN 260
290 'there is also a side effect when clicking on a character
300 'check for drawing mode select
310 i=0:IF t$<>"" THEN i=INSTR("MPDRF"+CHR$(241)+CHR$(240)+CHR$(242)+CHR$(243),UPPER$(t$))
320 IF i>=1 AND i<=(dm+1) THEN d=i-1:GOTO 200:'direct select: move plot draw fill rect
330 IF i=dm+2 THEN c=c+1:c=c MOD (cm+1):GOTO 200:'down arrow
340 IF i=dm+3 THEN c=c+cm:c=c MOD (cm+1):GOTO 200:'up arrow
350 IF i=dm+4 THEN d=d+dm:d=d MOD (dm+1):GOTO 200:'left arrow
360 IF i=dm+5 THEN d=d+1:d=d MOD (dm+1):GOTO 200:'right arrow
370 IF t$<>" " THEN PEN c:PRINT t$;:PEN 1:'click on character
380 IF x=1000 AND y=1000 THEN 260
390 IF d=0 THEN MOVE x,y
400 IF d=1 THEN PLOT x,y,c
410 IF d=2 THEN MOVE x0,y0:DRAW x,y,c
420 IF d=3 THEN MOVE x0,y0:DRAW x,y0,c:DRAW x,y:DRAW x0,y:DRAW x0,y0:MOVE x,y
430 IF d=4 THEN FILL c
440 GOTO 220
450 '
*/ });
