/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem clearpa - Clear Path
2 rem The Amstrad Program Book, 1984 Peter Goode
3 rem https://archive.org/details/Amstrad_Program_Book_The_1984_Phoenix_Publishing_Associates/mode/2up
4 rem https://www.cpc-power.com/index.php?page=detail&onglet=dumps&num=7049 (taken from here)
5 rem http://cpc-live.com/forum/index.php/topic,958.msg8133.html#msg8133
6 rem Adapted by "Im Wald": Replaced call &bb60 (TXT RD CHAR) by TEST; start buildings in column 2; location of score
7 rem Other Modifications: delays; hold "F" to speed up
8 rem
10 REM Clear Path
30 ENT 1,200,2,1
40 BY=-1
50 GOSUB 620
60 LOCATE 1,1:PAPER 5:PEN 10
70 PRINT"SCORE :             ";
80 X=1:Y=3:GX=32:GY=366
90 t!=time+((inkey(53)>=0)+2)*25:while time<t!:call &bd19:wend:LOCATE 10,1
100 PAPER 5:PEN 10: PRINT SC;
110 PAPER 0
120 TX=X+1:TY=Y:GX=GX+32
130 IF TX=20 THEN TX=1:TY=Y+1:GX=0:GY=GY-16:LOCATE x,y:PRINT"  ";
140 IF TY=25 AND TX=10 THEN LOCATE 5,4:PEN 13:PRINT"LANDED SAFELY":SC=SC+200:FOR w=1 TO 1300/10:call &bd19:NEXT W:MODE 0:GOTO 50
150 XX=GX+32:YY=GY:IF XX=640 THEN XX=0:YY=YY-16
170 IF TEST(XX,YY)=0 THEN GOTO 250
180 PEN 8: LOCATE 5,4:PRINT"YOU CRASHED"
190 IF INKEY$=" " or inkey(47)>=0 THEN GOTO 190
200 IF INKEY$<>" " THEN GOTO 200
210 RUN
250 LOCATE X,Y:PRINT"  ";
260 LOCATE TX,TY:PRINT CHR$(197);CHR$(202);
270 X=TX:Y=TY
280 IF INKEY(47)<>0 OR BY<>-1 THEN GOTO 330
290 SOUND 1,10,280,4,0,1,0
300 BX=GX+32
310 BY=GY-16
320 IF BY<0 THEN BY=-1
330 IF BY=-1 THEN GOTO 430
340 IF BY=14 THEN MOVE BX,BY:TAG:PRINT" ";:TAGOFF:BY=-1:SOUND 130,0:SOUND 129,0:GOTO 430
350 XX=BX:YY=BY-16
370 IF TEST(XX,YY)=0 THEN MOVE BX,BY:TAG:PRINT" ";:PLOT -2,-2,9:MOVE BX,BY-16:PRINT CHR$(252);:TAGOFF:BY=BY-16:GOTO 430
380 SOUND 129,0
390 SOUND 139,0,100,3,0,0,RND(1)*4+10
400 SC=SC+10
410 MOVE BX,BY:TAG:PRINT" ";:TAGOFF
420 BY=BY-16:PLOT -2,-2,8:MOVE BX,BY:TAG:PRINT CHR$(252);:TAGOFF
430 GOTO 90
620 REM DRAW THE CITY SCAPE
630 MODE 0
640 BORDER 7
650 PEN 3
660 PAPER 1
670 FOR L=2 TO 20
680 FOR Q=25 TO 24-RND(1)*4 STEP -1
690 LOCATE L,Q
700 PRINT CHR$(207);
710 NEXT Q
720 NEXT L
730 RETURN
*/ });
