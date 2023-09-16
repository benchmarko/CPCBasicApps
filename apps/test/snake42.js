/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem snake42 - Snake 4 Two
2 rem Marco Vieth
3 rem
100 REM (Springer)
110 REM verbessert : 22.10.1989
120 '
130 REM variablen : spg=spieler,der gewonnen hat
140 REM sp=Spieler,der an der Reihe ist
150 REM x(1),y(1)=1.Spieler pos. - x(2),y(2)=2. Sp. position
160 REM pu(1),pu(2)=punkte der Spieler
170 REM p(1),p(2)=figurenfarben der Spieler
180 REM cr=Grafikzeichen entspr. der Richtung
190 REM f(x,y)=3:Feld frei:f(x,y)=0:Feld nicht begehbar
200 REM xg,yg: max.Anzahl der Zeichen in einer Zeile/Spalte
210 REM j=joystick/tasten-Abfrage
220 REM x,y=Positions-Hilfsvariablen
230 REM Hilfsvariablen: i,j,t$,t,
240 REM a,b=x,y-Werte der Zufallsposition(vom Computer)
250 REM ARENAUDO.CPC
260 CLEAR:DEFINT a-y:DIM x(2),y(2),pu(2),p(2)  
270 XG=20:YG=23 : cr=239 : ENT 1,20,5,1,20,-5,1:ENV 1,12,-1,6
280 MODE 0:PAPER 7:PEN 1:DIM F(XG,YG)
290 SYMBOL AFTER 250:SYMBOL 255,12,30,99,205,86,141,111,50
300 i=0
310 I=I+1:FOR J=1 TO YG
320 F(I,J)=3
330 NEXT J
340 IF I<>XG THEN 310 
350 CLS:X(1)=1:Y(1)=1:X(2)=XG:Y(2)=1 : f(1,1)=0:f(xg,1)=0
360 WINDOW #1,1,XG,24,25:PAPER 0:CLS#1
370 LOCATE 1,24:PRINT"Spieler 1:";:LOCATE 1,25:PRINT"Spieler 2:"; 
380 sp=1:GOSUB 920:sp=2:GOSUB 920
390 PEN 10:LOCATE 1,1:PRINT CHR$(cr);:PEN 12:LOCATE XG,1:PRINT CHR$(cr);:PEN 1
400 sp=1:GOSUB 460:P(1)=10:X=X(1):Y=Y(1):GOSUB 490:X(1)=X:Y(1)=Y 
410 sp=2:GOSUB 430:P(2)=12:X=X(2):Y=Y(2):GOSUB 490:X(2)=X:Y(2)=Y  
420 GOTO 400
430 zeit=TIME
440 call &bd19:J=JOY(0):IF J=0 THEN 440 ELSE J=INT(LOG(J)/LOG(2))+1
450 zeit=TIME-zeit:RETURN
460 zeit=TIME
470 call &bd19:IF INKEY(0)=0 THEN j=1 ELSE IF INKEY(2)=0 THEN j=2 ELSE IF INKEY(8)=0 THEN j=3 ELSE IF INKEY(1)=0 THEN j=4 ELSE IF INKEY(9)=0 THEN j=5 ELSE 470
480 zeit=TIME-zeit:RETURN
490 PAPER 0:IF zeit<20 THEN pu(sp)=pu(sp)+2 ELSE pu(sp)=pu(sp)+1
500 GOSUB 920
510 LOCATE X,Y:PRINT" ";
520 ON J GOSUB 560,580,600,620,640
530 PEN P(sp):LOCATE X,Y:PRINT CHR$(cr);:PEN 1 
540 IF F(X,Y)=3 THEN f(x,y)=0 ELSE GOTO 670
550 RETURN
560 Y=Y-1:IF Y<1 THEN Y=23
570 cr=239:RETURN 
580 Y=Y+1:IF Y>23 THEN Y=1
590 cr=241:RETURN
600 X=X-1:IF X<1 THEN X=XG
610 cr=242:RETURN
620 X=X+1:IF X>XG THEN X=1
630 cr=243:RETURN
640 A=INT(XG*RND(1)+1):B=INT(YG*RND(1)+1)
650 LOCATE A,B:PEN P:PRINT CHR$(cr); 
660 IF F(A,B)=0 THEN 670 ELSE X=A:Y=B:RETURN
670 REM ENDE 
680 IF sp=1 THEN spg=2 ELSE spg=1
690 x(sp)=x:y(sp)=y
700 FOR t=1 TO 10
710 LOCATE x(sp),y(sp):PEN p(sp):PRINT CHR$(cr); 
720 IF t=1 OR t=3 THEN SOUND 3,0,25,14,0,0,10
730 LOCATE x(sp),y(sp):PRINT CHR$(255);
740 IF t=4 THEN SOUND 2,0,20,15,0,0,4
750 NEXT t:LOCATE x(sp),y(sp):PRINT" ";
760 LOCATE x(spg),y(spg):PEN p(spg):PRINT CHR$(241);:FOR i=1 TO 500:NEXT i
770 LOCATE x(spg),y(spg):PEN p(spg):PRINT " "; 
780 '
790 pu(spg)=pu(spg)+40:sp=spg:GOSUB 920
800 i=10
810 pu(spg)=pu(spg)+1:GOSUB 920:IF pu(spg)>=600 THEN 930
820 A=INT(XG*RND(1)+1):B=INT(YG*RND(1)+1):LOCATE X,Y:PAPER 0:PRINT" ";:X=A:Y=B
830 LOCATE A,B:PRINT CHR$(241);
840 SOUND 1,650-pu(spg),5,5
850 IF F(A,B)<>0 THEN i=i-1:IF i>0 THEN f(a,b)=0:GOTO 810
860 LOCATE 1,25
870 PAPER 0:PEN 1:PRINT"NOCH EIN SPIEL(J/N)";:t=TIME/100
880 T$=UPPER$(INKEY$):IF TIME/100-t>=7 THEN t$="J":GOTO 900
890 IF T$="" THEN 880 ELSE T$=UPPER$(T$) 
900 IF T$="J" THEN ERASE F:t=0:A=0:B=0:I=0:GOTO 270
910 IF T$="N" THEN MODE 1:STOP ELSE 880
920 LOCATE 11,23+sp:PRINT pu(sp):RETURN
930 RESTORE 960:SOUND 4,0,50,0:FOR i=1 TO 17:READ t,d
940 SOUND 4,t,d*6,0,1:NEXT i:PAPER 0:PEN 1:MODE 1
950 PRINT"Spieler";spg;"hat gewonnen ! !":PRINT:PRINT:END
960 DATA 239,8,319,6,239,4,319,3,190,3,159,5,190,4,159,3
970 DATA 190,3,159,3,127,6,319,6,0,0.5,319,4,0,0.5,319,4,239,8
980 REM
*/ });
