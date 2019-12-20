/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem spacera - Space Race
2 rem (c) 1986 Peter Pekarek
3 rem
4 rem Modifications: scrolling MC replaced by ?chr$(11)
5 rem
10 REM ***************************
20 REM *                         *
30 REM *       SPACE RACE        *
40 REM *        (c) 1986         *
50 REM *      Peter Pekarek      *
80 REM *                         *
90 REM ***************************
100 SPEED INK 8,2
110 INK 3,2,26
120 INK 1,24:INK 2,16,6:BORDER 0:INK 0,0
130 GOSUB 1810
140 GOSUB 580
150 GOSUB 2020
160 REM ***************************
170 REM *     START               *
180 REM *************************** 
190 MODE 1:leben=5:punkte=0:t=1:m=0:a=224
200 INK 3,t*2+1:EI:EVERY 250,0 GOSUB 1150
210 PLOT 1,399,2:PLOT 460,399,2
215 t1!=time+25:while time<t1!:call &bd19:wend
220 DI:ON t GOSUB 730,800,730,860,730,920,730,1000,730,1070,730
230 PEN 1:IF m=50 THEN SPEED INK 8,2:INK 3,t*2+1
240 IF m=2 THEN SPEED INK 20,20:INK 3,t*2+1,(t-1)*2+1
250 IF a<445 THEN IF INKEY(1)=0 OR JOY(0)=8 THEN a=a+8
260 IF a>1 THEN IF INKEY(8)=0 OR JOY(0)=4 THEN a=a-8
270 locate #1,1,1:?#1,chr$(11): 'or: CALL mc
280 IF TEST(a,8)=3 OR TEST(a+7,8)=3 OR TEST(a+14,8)=3 THEN leben=leben-1:GOTO 390
290 IF TEST(a+8,8)=1 THEN LOCATE 32,1:PRINT CHR$(7):punkte=punkte+t*25
300 TAG:MOVE a,16:PRINT CHR$(239);:TAGOFF
310 SOUND 1,m,12,5,0,0,5
320 IF m>=1000 THEN t=t+1:LOCATE 31,3:PRINT"TEIL"t:m=0:GOTO 210
330 IF CINT(m/100)=m/100 THEN LOCATE 32,1:PRINT m
340 m=m+2:punkte=punkte+2
350 EI
355 GOTO 210
360 REM ***************************
370 REM *    ZUSAMMENSTOSS        *
380 REM ***************************
390 re=REMAIN(0):TAG:PRINT CHR$(238);
400 FOR i=1 TO 31
410 MOVE a,16
420 INK 0,31-i
430 BORDER 31-i
440 INK 1,i
450 TAG:PRINT CHR$(238);
460 SOUND 2,1,5,7,0,0,i
470 MOVE a,16
480 PRINT CHR$(203);:TAGOFF
490 NEXT i
500 INK 0,0:INK 1,24
510 MODE 0:LOCATE 3,2
520 GOSUB 1330
530 IF leben>0 THEN MODE 1:GOTO 200 ELSE GOTO 1590
540 REM *************************** 
550 REM *    INITIALISIERUNG      *
560 REM *    M-CODE TOP-FIVE      *
570 REM ***************************
580 mc=&8000
590 MEMORY &7FFF:RESTORE
600 FOR i=&8000 TO &8005:READ wert
610 POKE i,wert:NEXT i
620 DATA 6,0,205,77,188,201
630 FOR i=1 TO 5:READ name$(i),punkte(i):NEXT
640 DATA "..........FANTASTISCH",20000
650 DATA ".............SEHR GUT",15000
660 DATA "..................GUT",10000
670 DATA ".........BEFRIEDIGEND",5000
680 DATA "............GENUEGEND",2500
690 RETURN
700 REM ***************************
710 REM *   TEIL 1,3,5,7,9,11     *
720 REM *************************** 
730 IF t<>11 THEN PEN 3 ELSE PEN 2:re=REMAIN(0):IF m>=250 THEN locate #1,1,1:?#1,chr$(11):GOTO 1200: 'or: CALL mc
740 PRINT"|":LOCATE 29,1:PRINT"|"
750 IF m>=250 THEN m=1000
760 RETURN
770 REM ***************************
780 REM *   TEIL 2                *
790 REM ***************************
800 ba=INT(RND*29)+1
810 PEN 3:LOCATE ba,1:PRINT CHR$(231)
820 RETURN
830 REM ***************************
840 REM *   TEIL 4                *
850 REM ***************************
860 ba=INT(RND*14)+1:bb=INT(RND*15)+15
870 PEN 3:LOCATE ba,1:PRINT CHR$(252):LOCATE bb,1:PRINT CHR$(252)
880 RETURN
890 REM ***************************
900 REM *   TEIL 6                *
910 REM ***************************
920 ba=INT(RND*6):bb=INT(RND*29)+1
930 PEN 3:LOCATE bb,1
940 IF bb>24 THEN ba=30-bb
950 PRINT STRING$(ba,CHR$(143))
960 RETURN
970 REM ***************************
980 REM *   TEIL 8                *
990 REM ***************************
1000 ba=INT(RND*28)+1:bb=INT(RND*29)+1
1010 PEN 3:LOCATE ba,1:PRINT CHR$(226)CHR$(226)
1020 LOCATE bb,1:PRINT CHR$(253)
1030 RETURN
1040 REM ***************************
1050 REM *   TEIL 10               *
1060 REM ***************************
1070 bd=bd-1:IF bd<=0 THEN bd=INT(RND*59)+1:ba=INT(RND*29)+1:bb=INT(RND*29)+1:bc=INT(RND*29)+1
1080 PEN 3:LOCATE ba,1:PRINT CHR$(143)
1090 LOCATE bb,1:PRINT CHR$(143)
1100 LOCATE bc,1:PRINT CHR$(143)
1110 RETURN
1120 REM ***************************
1130 REM *    BONUS                *
1140 REM ***************************
1150 LOCATE INT(RND*29)+1,1:PEN 1:PRINT CHR$(35)
1160 RETURN
1170 REM ***************************
1180 REM *   SUPERLEISTUNG         *
1190 REM *************************** 
1200 FOR i=1 TO 300:SOUND 1,i,1,5,0,0,i/30:NEXT:FOR i=300 TO 1 STEP-1:SOUND 1,i,1,5,0,0,i/30:NEXT:WHILE INKEY$<>"":WEND
1210 LOCATE 4,2:PEN 1:PRINT"SUPERLEISTUNG  !!!"
1220 LOCATE 4,4:PRINT"BONUS: 2500 Punkte"
1230 punkte=punkte+2500
1240 LOCATE 4,7:PRINT"PUNKTE :"punkte
1250 LOCATE 4,9:PRINT"SCHIFFE:"leben
1260 t2!=time+5000/3:while time<t2! and inkey$="":wend: 'FOR i=1 TO 5000:NEXT
1270 LOCATE 4,20:PRINT"BEREIT <j>"
1280 WHILE UPPER$(INKEY$)<>"J":WEND
1290 MODE 1:m=0:t=1:GOTO 200
1300 REM ***************************
1310 REM *   STAND (Punkte,etc.)   *
1320 REM ***************************
1330 LOCATE 3,2:PRINT"PUNKTE :"punkte
1340 LOCATE 3,4:PRINT"SCHIFFE:"leben
1350 INK 3,1
1360 FOR i=5 TO 14
1370 INK i,(i-4)*2+1
1380 NEXT
1390 MOVE 50,100:FOR i=100 TO 200
1400 DRAW 50,i,3:DRAW 550,i,3
1410 NEXT
1420 j=50:MOVE 50,100
1430 FOR i=5 TO 14
1440 IF i-4>T THEN GOTO 1490
1450 MOVE j,100
1460 DRAW j,100,i:DRAW j,200,i
1470 j=j+2.5:IF j/50<>INT(j/50)THEN 1460
1480 NEXT
1490 MOVER-12,-110:TAG
1500 MOVER(1000-m)/-20,0
1510 PRINT"^";:TAGOFF
1520 LOCATE 3,23:PRINT"Ihre Position"
1530 LOCATE 3,25:PRINT"in Abschnitt"T
1535 while inkey$<>"":call &bd19:wend
1540 t2!=time+2000/3:while time<t2! and inkey$="":wend: 'FOR i=1 TO 2000:NEXT
1550 RETURN
1560 REM ***************************
1570 REM *    ENDE                 *
1580 REM ***************************
1590 MODE 1:IF punkte>punkte(5)THEN punkte(5)=punkte:name$(5)=name$
1600 FOR j=2 TO 5
1610 FOR i=5 TO j STEP-1
1620 IF punkte(i)<=punkte(i-1)THEN 1650
1630 h$=name$(i):name$(i)=name$(i-1):name$(i-1)=h$
1640 h=punkte(i):punkte(i)=punkte(i-1):punkte(i-1)=h
1650 NEXT i
1660 NEXT j
1670 MODE 1:INK 2,26,2:PEN 2:PRINT"PLACE   NAME                 SCORE"
1680 PEN 1
1690 FOR i=1 TO 5
1700 PRINT:PRINT i;".";name$(i):LOCATE 30,i*2+1:PRINT USING"######";punkte(i)
1710 NEXT
1720 LOCATE 15,18:PRINT"Ihre Punkte:";:PRINT USING"######";punkte
1730 PRINT:PRINT:PRINT"Neues Spiel ?  (j/n)"
1740 z$=INKEY$:z$=UPPER$(z$)
1750 IF z$="J"THEN CLS:INK 2,16,6:GOTO 150
1760 IF z$<>"N"THEN 1740
1770 INK 0,1:BORDER 1:INK 1,24:PEN 1:PAPER 0:MODE 1:END
1780 REM ***************************
1790 REM *        TITELBILD        *
1800 REM ***************************
1810 MODE 1
1820 FOR i=1 TO 150
1830 PLOT RND*640,RND*400,RND*2+1
1840 NEXT
1850 FOR i=30 TO 610 STEP 30
1855 if inkey$="" then snd1=1 else snd1=0
1860 FOR j=1 TO 400 STEP 20
1870 IF j>i THEN k=j-i ELSE k=j
1880 if snd1=1 then SOUND RND*2+1,k,1.3,6
1890 MOVE i,j
1900 f=CINT(RND*2+1)
1910 DRAWR-10,-10,f:DRAWR 20,0,f:DRAWR-10,10,f
1920 NEXT j,i
1930 WINDOW 10,30,9,11:CLS
1940 PEN 3:PRINT:PRINT" S P A C E   R A C E "
1950 WINDOW 5,36,23,25:CLS
1960 PEN 1:PRINT:PRINT" "CHR$(164)" 1985           PETER PEKAREK"
1970 t2!=time+4000/3:while time<t2! and inkey$="":wend: 'FOR i=1 TO 4000:NEXT
1980 RETURN
1990 REM ***************************
2000 REM *        NAME             *
2010 REM ***************************
2020 WINDOW 6,35,15,17:CLS
2030 PRINT:LINE INPUT"NAME:",name$
2040 IF LEN(name$)>20 THEN 2020
2050 name$=STRING$(21-LEN(name$),".")+UPPER$(name$)
2060 PRINT:PRINT:PRINT SPC(10)"SPACE RACE"SPC(10):PRINT
2070 t2!=time+4000/3:while time<t2! and inkey$="":wend: 'FOR i=1 TO 4000:NEXT
2080 RETURN
*/ });
