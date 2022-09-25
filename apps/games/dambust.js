/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
10 REM DAMBUSTERS
20 REM @ PAUL STANLEY.
22 rem https://cpcrulez.fr/GamesTest/dambusters.htm
25 rem Modification: delay in 295 and 445
30 MODE 1:BORDER 4:INK 0,16:INK 1,0:INK 2,20:INK 3,6:WINDOW #1,1,40,1,25:PAPER #1, 0:PEN #1,1:CLS
40 HS=0
50 GOSUB 960
60 GOSUB 770
70 GOSUB 620
80 BORDER 1:INK 0,0:INK 1,24:INK 2,20:INK 3,6:WINDOW #0,5,36,1,25:PAPER #0, 0:PEN #0,1:CLS #0
90 PEN 2:LOCATE 1,1:PRINT"SCORE:0":PEN 1
100 PEN 3:LOCATE 19,1:PRINT"HI-SCORE:";:PEN 2:PRINT HS:PEN 1
110 LOCATE 1,22:PRINT CHR$(24); STRING$(64,58);CHR$(24)
120 FOR F=1 TO 150 :PLOT 64+RND*506,RND*400+128,2:NEXT
130 G=0:FOR F=1 TO 5:PLOT G*2+64,15+F*2+48,2:DRAWR 508-4*G,0:G=G+2:NEXT
140 PLOT 100,72,2:DRAWR 216,40:PLOT 532,72:DRAWR -216,40
150 PLOT 64,64,3:DRAWR 0,32:DRAWR 8,0:DRAWR 16,16:DRAWR 4,- 4:DRAWR -16,-16:DRAWR 0,-20
160 PLOT 572,64,3:DRAWR 0,32:DRAWR -8,0:DRAWR -16,16:DRAWR -4,-4:DRAWR 16,-16:DRAWR 0,-20
170 D=1:S=0:A=1:P=17
180 Y=9
190 X=INT(RND*20)+6
200 PRINT CHR$(22);CHR$(1);:FOR F=1 TO 5 STEP 2:PEN 1:LOCATE X+1,6:PRINT MID$(B$,F,1);MID$(B$,F+1,1);:SOUND 1,120,4:PEN 0:LOCATE X+1,6:PRINT MID$(B$,F,1);MID$(B$,(F+1),1);:NEXT F
210  FOR F= 1 TO 4:PEN 1:LOCATE X+1,6-F:PRINT MID$(B$,5,1);MID$(B$,6,1):LOCATE X+1,6+F:PRINT CHR$(232);
220 SOUND 1,180,4:PEN 0:LOCATE X+1,6-F:PRINT MID$(B$,5,1);MID$(B$,6,1);: LOCATE X+1,6+F:PRINT CHR$(232);:NEXT F:PEN 1:PRINT CHR$(22);CHR$(0);
230 F=INT(RND*25)+3:G=5+INT(RND*11)
240 A$=CHR$(231)+CHR$(232)+CHR$(233)+CHR$(234)+CHR$(235)+CHR$(235)+CHR$(236):HT=10
250 PEN 1: LOCATE X+1,Y+1:PRINT  CHR$(22);CHR$(1);MID$(A$,A,1);CHR$(22);CHR$(0);
260 F=F-(INKEY(1)=0 AND F<29)+(INKEY(8)=0 AND F>2):G=G-(INKEY(2)=0 AND G<17)+(INKEY(0)=0 AND G>3)
270 PEN 2:LOCATE F+1,G+1:PRINT CHR$(22);CHR$(1);"+";CHR$(22);CHR$(0);:PEN 1
280 LOSS=LOSS+LEEK
290 IF LOSS>1000 THEN 550
295 t!=time+50:while time<t!:call &bd19:wend
300 IF INKEY (47)=0 THEN IF S<10 THEN GOSUB 430
310 SOUND 1,100,4
320 PEN 0: LOCATE X+1,Y+1:PRINT CHR$(22);CHR$(1);MID$(A$,A,1);CHR$(22);CHR$(0);
330 PEN 0: LOCATE F+1,G+1:PRINT CHR$(22);CHR$(1);"+";CHR$(22);CHR$(0);:PEN 1
340 PLOT 100,72,2:DRAWR 216,40:PLOT 532,72:DRAWR -216,40
350 Y=Y+D
360 IF RND>0.6 THEN F=F+INT(RND*1.5)-INT(RND*1.5)
370 IF F<0 THEN F=0
380 IF RND<0.4 THEN G=G+INT(RND*1.5 AND G<18)-INT(RND*1.5)
390 IF Y=HT THEN P=P+1:D=1:A=A+1
400 IF Y=P THEN SOUND 1,180,4:A=A+1:D=-1:HT=HT-3
410 IF A=7 THEN 490
420 GOTO 250
430  PLOT 90,112,2:DRAW (F+1)*16+54,(24-G)*16+8,2:PLOT 546,110,2:DRAW (F+1)*16+54,(24-G)*16+8,2
440 S=S+1
445 t!=time+40:while time<t!:call &bd19:wend
450 PLOT 90,112,0:DRAW (F+1)*16+54,(24-G)*16+8,0:PLOT 546,110,0:DRAW (F+1)*16+54,(24-G)*16+8,0
460 IF G=Y THEN IF X=F THEN 480
470 RETURN
480 SC=SC+10: LOCATE 7,1:PRINT SC;:LOCATE F+1,G+1:PRINT CHR$(238);:SOUND 1,180,4:SOUND 1,120,4:SOUND 1,90,4:SOUND 1,50,4:LOCATE F+1,G+1:PRINT" ";: GOTO 170
490 FOR A=1 TO 5:SOUND 1,220,4:SOUND 1,90,4:NEXT A:LOCATE X+1,20:CALL 360:K= PEEK(367):IF K=32 THEN 510
500 LOCATE X+1,20:PRINT"  ";:GOTO 170
510 LOCATE X+1,21:CALL 360:K=PEEK(367):IF K<>58 THEN 540
520 LEEK=LEEK +1
530 LOCATE X+1,21:PRINT" ";:LOCATE X+1,22:PRINT CHR$(237);:GOTO 170
540 LET LEEK = LEEK +2:LOCATE X,20:PRINT"   ";:LOCATE X,21:PRINT"   ";:LOCATE X,22:PRINT CHR$(237);CHR$(237);CHR$(237);:GOTO 170
550 LOCATE 6,11:PRINT"- G A M E  O V E R -":LOCATE 3,14:PRINT"PRESS ANY KEY TO PLAY AGAIN": FOR F= 1 TO 20:SOUND 1,(F+100),4:NEXT
560 IF SC>HS THEN HS=SC
570 LOSS=0:SC=0:LEEK=0
580 IF INKEY$<>"" THEN 580
590 IF INKEY$ = "" THEN 590
600 CLS: RESTORE: GOTO 80
610 GOTO 610
620 SYMBOL AFTER 230
630 SYMBOL 231,0,0,0,16,0,0,0,0
640 SYMBOL 232,0,0,0,24,24,0,0,0
650 SYMBOL 233,0,0,0,56,56,0,0,0
660 SYMBOL 234,0,0,0,60,60,60,0,0
670 SYMBOL 235,0,0,126,126,126,126,0,0
680 SYMBOL 236,0,0,254,254,254,254,254,0
690 SYMBOL 237,73,145,73,37,74,145,74,73
700 SYMBOL 238,153,58,36,219,219,36,58,153
710 SYMBOL 239,0,0,0,8,62,0,0,0
720 SYMBOL 240,0,0,24,255,66,0,0,0
730 SYMBOL 241,0,0,1,255,37,0,0,0
740 SYMBOL 242,0,0,128,255,164,0,0,0
750 B$=CHR$(239)+" "+CHR$(240)+" "+CHR$(242)+CHR$(242)
760 RETURN
770 LOCATE 11,1:PRINT CHR$(24);"D A M B U S T E R S":LOCATE 11,2:PRINT"  @ PAUL  STANLEY  ";CHR$(24)
780 PRINT:PRINT"The year is 1943.You are in charge of a powerful Beam weapon with which you are to protect a Dam from the bouncing bombsof the British attackers."
790 PRINT
800 PRINT"They  have  several  Lancaster  bombers which fly towards you and release their dangerous bombs, which might miss their target."
810 PRINT
820 PRINT"However,your task is not all that simplefor your weapon is unable to reach the  Lancasters so you must just shoot at thebombs instead.                          You can move your cross-hair sights withthe cursor keys."
830 PRINT:PRINT:PRINT"        PRESS ANY KEY TO CONTINUE."
840 IF INKEY$="" THEN 840 ELSE CLS
850 LOCATE 11,1:PRINT CHR$(24);"D A M B U S T E R S":LOCATE 11,2:PRINT"  @ PAUL  STANLEY  ";CHR$(24)
860 PRINT:PRINT:PRINT
870 PRINT"Even adjusting the sights is difficult  because there is a strong Wind which    causes  your  sights  to move  about."
880 PRINT
890 PRINT"USE THE SPACE BAR TO FIRE."
900 PRINT:PRINT
910 PRINT"Because  of  the power of your weapon,  after 10 shots it is drained of power   and will only be ready by the next time an aeroplane attacks.Your battle is over";
920 PRINT"when too much water has poured through  the broken Dam."
930 PRINT:PRINT:PRINT:PRINT"         PRESS ANY KEY TO START."
940 IF INKEY$="" THEN 940 ELSE CLS
950 RETURN
960 RESTORE 970:FOR x=360 TO 366:READ a:POKE x,a:NEXT:RESTORE: RETURN
970 DATA 205,96,187,50,111,1,201
*/ });