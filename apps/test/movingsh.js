/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 REM movingsh - Attack of the Moving Shapes #2
2 REM (c) AMSDOS, 2017
3 REM https://www.cpcwiki.eu/forum/programming/silly-programming-ideas-turning-text-into-graphics/msg147087/#msg147087
4 REM modificatons: inserted 275 call &bd19
5 '
10 ' ------------------------------------------------------------------
20 ' Attack of the Moving Shapes #2!
30 '
40 ' Simulate the Movement of 3 Shapes using ORIGIN.
50 ' In this version the 3 Shapes positions are stored into 4 Arrays to
60 ' represent Current and Old positions. 1,2 & 3 represent each Shape.
70 ' The p% variable is used to point to the relevant position of the
80 ' array and print the relevant shape subroutine.
90 ' ------------------------------------------------------------------
100 MODE 0:BORDER 11:INK 0,11:INK 1,26
110 DIM x%(3),y%(3),ox%(3),oy%(3)
120 PRINT CHR$(23)+CHR$(1); ' XOR Mode
130 a%=4:b%=4:c%=8:d%=2
140 x%(1)=100:y%(1)=100
150 x%(2)=296:y%(2)=300
160 x%(3)=304:y%(3)=12
170 FOR p%=1 TO 3
180   ORIGIN x%(p%),y%(p%)
190   ON p% GOSUB 1010,1110,1210
200 NEXT p%
210 WHILE INKEY(47)=-1
220   FOR p%=1 TO 3
230    ox%(p%)=x%(p%):oy%(p%)=y%(p%)
240   NEXT p%
250   x%(1)=x%(1)+a%:y%(1)=y%(1)+b%
260   x%(2)=x%(2)+c%
270   y%(3)=y%(3)+d%
275   call &bd19
280   FOR p%=1 TO 3
290     ORIGIN ox%(p%),oy%(p%)
300     ON p% GOSUB 1010,1110,1210
310     ORIGIN x%(p%),y%(p%)
320     ON p% GOSUB 1010,1110,1210
330   NEXT p%
340   IF x%(1)=200 THEN a%=-4
350   IF y%(1)=200 THEN b%=-4
360   IF x%(1)=0 THEN a%=4
370   IF y%(1)=0  THEN b%=4
380   IF x%(2)=600 THEN c%=-8
390   IF x%(2)=0 THEN c%=8
400   IF y%(3)>370 THEN d%=-INT(RND*7)+2
410   IF y%(3)<10 THEN d%=INT(RND*7)+2
420 WEND:WHILE INKEY$<>"":WEND:MODE 2:END
1000 ' Draw Box
1010 PLOT 0,0,1
1020 DRAW 25,0
1030 DRAW 25,25
1040 DRAW 0,25
1050 DRAW 0,0
1060 RETURN
1100 ' Draw Triangle
1110 PLOT 0,0,2
1120 DRAW 25,0
1130 MOVE 25,2:DRAW 12,25
1140 MOVE 10,18:DRAW 0,0
1150 RETURN
1200 ' Draw Rectangle
1210 PLOT 0,0,3
1220 DRAW 50,0
1230 DRAW 50,25
1240 DRAW 0,25
1250 DRAW 0,2
1260 RETURN
*/ });
