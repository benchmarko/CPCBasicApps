/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
100 REM abelian - Abelian sandpile model
110 REM based on: https://rosettacode.org/wiki/Abelian_sandpile_model#Locomotive_Basic
120 'defint a-z: ink 0,0:ink 1,18:ink 2,8:ink 3,24
130 m=1
150 MODE m
160 FOR rows=3 TO 15
170   cols=rows
180   FOR fact=1 TO 2
190     height=4*cols*rows * fact
210     t0=TIME
220     DIM grid(cols,rows)
230     GOSUB 400
240     t=TIME-t0
250     CLS
260     GOSUB 610
270     GOSUB 740
280     ERASE grid
290     PRINT
300     ?"cols="; cols
310     ?"rows="; rows
320     ?"hght="; height
330     ?"time="; ROUND(t*10/3,3)
340     t=t0+400: WHILE TIME<t AND INKEY$="":FRAME:WEND
350   NEXT
360 NEXT
370 END
380 '
390 ' calculate
400 grid(ROUND(cols/2),ROUND(rows/2))=height
410 moretodo=1
420 WHILE moretodo
430   moretodo=0
440   FOR x=1 TO cols
450     FOR y=1 TO rows
460       IF grid(x,y)>=4 THEN moretodo=1: GOSUB 520
470     NEXT
480   NEXT
490 WEND
500 RETURN
510 '
520 overspill=INT(grid(x,y)/4)
530 grid(x,y)=grid(x,y) MOD 4
540 IF x>1 THEN grid(x-1,y)=grid(x-1,y)+overspill
550 IF y>1 THEN grid(x,y-1)=grid(x,y-1)+overspill
560 IF x<cols THEN grid(x+1,y)=grid(x+1,y)+overspill
570 IF y<rows THEN grid(x,y+1)=grid(x,y+1)+overspill
580 RETURN
590 '
600 ' textual output
610 FOR y=1 TO rows
620   FOR x=1 TO cols
630     c1=grid(x,rows+1-y)
640     PAPER c1: PEN 4-c1
650     PRINT CHR$(48+c1);
660   NEXT
670   PRINT
680 NEXT
690 PEN 1
700 PAPER 0
710 RETURN
720 '
730 ' graphical output
740 FOR x=1 TO cols
750   FOR y=1 TO rows
760     x4=4*x:y4=4*y
770     PLOT x4,y4,grid(x,y)
780     PLOT x4+2,y4
790     PLOT x4,y4+2
800     PLOT x4+2,y4+2
810   NEXT
820 NEXT
830 RETURN
840 '
*/ });
