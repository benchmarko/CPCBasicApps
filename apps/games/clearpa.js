/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem clearpa - Clear Path
2 rem The Amstrad Program Book, 1984 Peter Goode
3 rem https://archive.org/details/Amstrad_Program_Book_The_1984_Phoenix_Publishing_Associates/mode/2up
5 rem https://www.cpc-power.com/index.php?page=detail&onglet=dumps&num=7049 (taken from here)
4 rem (http://cpc-live.com/forum/index.php/topic,958.0.html)
6 rem
7 rem Modifications: delays; hold "F" to speed up; set pen for CPC 664/6128 before use copychr$ or call &bb60
8 rem
10 REM CLEAR PATH
20 GOSUB 440
30 ENT 1,200,2,1
40 BY=-1
50 GOSUB 620
60 LOCATE 1,1:PAPER 5:PEN 10
70 PRINT "     SCORE :        ";
80 X=1:Y=3
90 t!=time+((inkey(53)>=0)+2)*25:while time<t!:call &bd19:wend:LOCATE 11,1
100 PAPER 5:PEN 10:PRINT SCORE;
110 PAPER 0
120 TX=X+1:TY=Y
130 IF TX=20 THEN TX=1:TY=Y+1
140 IF TY=25 AND TX=10 THEN LOCATE 5,4:PEN 13:PRINT "LANDED SAFELY":SC=SC+200:FOR W=1 TO 1300/10:call &bd19:NEXT W:MODE 0:GOTO 50
150 XX=TX+1:YY=TY:IF XX=21 THEN XX=1:YY=YY+1
160 pen 3:GOSUB 580:pen 10
170 IF DD=32 THEN GOTO 250
180 PEN 8:LOCATE 5,4:PRINT "YOU CRASHED"
190 IF INKEY$=" " or inkey(47)>=0 THEN GOTO 190
200 IF INKEY$<>" " THEN GOTO 200
210 RUN
220 SOUND 129,0:SOUND 130,0
230 FOR L=15 TO 0 STEP -1
240 SOUND &129,0,3,5,0,0,L:NEXT L
250 LOCATE X,Y:PRINT "  ";
260 LOCATE TX,TY:PRINT CHR$(197);CHR$(202);
270 X=TX:Y=TY
280 IF INKEY(47)<>0 OR BY<>-1 THEN GOTO 330
290 SOUND 1,10,280,4,0,1,0
300 BX=X+1
310 BY=Y+1
320 IF BY=26 THEN BY=-1
330 IF BY=-1 THEN GOTO 430
340 IF BY=25 THEN LOCATE BX,BY:PRINT " ";:BY=-1:SOUND 130,0:SOUND 129,0:GOTO 430
350 XX=BX:YY=BY+1
360 pen 3:GOSUB 580:pen 10:'TTT
370 IF DD=32 THEN LOCATE BX,BY:PRINT " ";:LOCATE BX,BY+1:PEN 9:PRINT CHR$(252);:BY=BY+1:GOTO 430
380 SOUND 129,0
390 SOUND 130,0,100,3,0,0,RND(1)*4+10
400 SCORE=SCORE+10
410 LOCATE BX,BY:PRINT " ";
420 BY=BY+1:LOCATE BX,BY:PEN 9:PRINT CHR$(252);
430 GOTO 90
440 REM PUT MACHINE CODE JUST ABOVE RE-ADJUSTED HIMEM
450 MEMORY FRE(0)-&80
460 MC=HIMEM+1
470 TA=HIMEM+&7F
480 TH=INT(TA/256)
490 TL=TA-256*TH
500 POKE MC,&CD
510 POKE MC+1,&60
520 POKE MC+2,&BB
530 POKE MC+3,&32
540 POKE MC+4,TL
550 POKE MC+5,TH
560 POKE MC+6,&C9
570 RETURN
580 LOCATE XX,YY
590 if PEEK(&BB60)<>&CF THEN DD=asc(copychr$(#0)):goto 610 else CALL MC
600 DD=PEEK(TA)
610 RETURN
620 REM DRAW THE CITY-SCAPE
630 MODE 0
640 BORDER 7
650 PEN 3
660 PAPER 1
670 FOR L=1 TO 20
680 FOR Q=25 TO 24-RND(1)*4 STEP -1
690 LOCATE L,Q
700 PRINT CHR$(207);
710 NEXT Q
720 NEXT L
730 RETURN
*/ });
