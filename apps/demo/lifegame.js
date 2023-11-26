/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem lifegame - Game of Life
2 rem
50 REM Lifegame
100 MODE 1:ze=10:sp=10:DIM al(ze,sp+1):DIM ne(ze,sp+1)
105 LOCATE 15,5:PRINT"L I F E G A M E":PAPER 3
107 FOR w=1 TO 18
108 X=INT(7*RND(1)+1):Y=INT(7*RND(1)+1):IF al(x,y)=1 THEN 109 ELSE al(x,y)=1
109 NEXT w
110 al(5,4)=1::al(5,5)=1:al(5,6)=1
130 while time<t!:call &bd19:wend:FOR i=1 TO ze-1:FOR j=1 TO sp:LOCATE i,j
140 IF al(i,j)=0 THEN PRINT " "; ELSE PRINT CHR$(224);
150 NEXT j,i
160 FOR i=1 TO ze-1:FOR j=1 TO sp:an=0:ne(i,j)=0
170 an=al(i-1,j-1)+al(i-1,j)+al(i-1,j+1)+al(i,j-1)+al(i,j+1)+al(i+1,j-1)+al(i+1,j)+al(i+1,j+1)
190 IF al(i,j)=0 THEN 205
200 IF an=2 THEN ne(i,j)=1
205 IF an=3 THEN ne(i,j)=1
210 NEXT j,i
220 FOR i=1 TO ze-1:FOR j=1 TO sp:al(i,j)=ne(i,j):NEXT j,i:t!=time+50:GOTO 130
*/ });
