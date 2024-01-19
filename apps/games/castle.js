/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 REM castle - Castle Crystal
2 rem (c) Frak Eilts
3 rem
10 SC=0
20 L=3
30 MODE 1
40 PAPER 0
50 PEN 13
60 CLS
70 '
80 ' ZEICHEN DEFINIEREN 
90 '
100 SYMBOL AFTER 96
110 SYMBOL 97,255,24,24,255,255,129,129,255
120 SYMBOL 98,0,255,0,0,0,255,0,0
130 SYMBOL 99,66,126,66,126,66,126,66,126
140 SYMBOL 100,0,63,96,192,96,63,0
150 SYMBOL 101,0,252,6,3,6,252,0,0
160 SYMBOL 102,0,255,48,48,48,255,0,0
170 SYMBOL 103,0,255,12,12,12,255,0,0
180 SYMBOL 104,0,63,48,48,48,63,0,0
190 SYMBOL 105,0,252,12,12,12,252,0,0 
200 SYMBOL 106,0,3,3,3,3,3,0,0
210 SYMBOL 107,0,192,192,192,192,192,0,0
220 SYMBOL 108,62,91,73,127,127,85,85,0
230 SYMBOL 109,255,255,195,195,195,195,255
240 SYMBOL 110,0,0,60,36,36,60,0,0
250 SYMBOL 111,124,130,146,170,146,146,130,124
260 '
270 ' ANLEITUNG
280 '
290 PRINT "         aaa aaa aaa aaa a   aaa                 a   a a a    a  a   a                   a   aaa aaa  a  a   aaa"
300 PRINT "         a   a a   a  a  a   a                   aaa a a aaa  a  aaa aaa"
310 PRINT
320 PRINT
330 PRINT "    aaaa aaaa aaa a  a aaa aaa aaa a        a    a  a a a a  a a   a   a a a        a aa aaaa aaa  aa  aaa a   aaa a"
340 PRINT "    a  a aaa  a a  aa    a a   a a a        aaaa a  a a a  aa  aaa aaa a a aaa"
350 PRINT
360 PRINT "             BY FRANK EILTS                                                                 ZUR STEUERUNG MIT                  JOYSTICK ODER COURSORTASTEN" 
370 WHILE INKEY$=""
380 WEND
390 '
400 ' INITALISIERUNG
410 '
420 DIM Bild$(24),RX(2),RY(2)
430 A=2
440 B=20
450 A1=A
460 B1=B
470 BILD$(1)="aa  aa  aa  aa  aa  aa  aa  aa  aa  aa"
480 BILD$(2)="aa  aa  aa  aa  aa  aa  aa  aa  aa  aa"
490 BILD$(3)="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
500 BILD$(4)="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
510 BILD$(5)="acdbbfbgbbbbbfbgbbbbecdbbbbbfbgbbbbeca"
520 BILD$(6)="acaaaaaaaaaaaaaaaaaaacaaaaaaaaaaaaaaca"
530 BILD$(7)="acaaaaaaaaaaaaaaaaaaacaaaaaaaaaaaaaaca"
540 BILD$(8)="acdbbbbbbfbgbbbbecdbbbfbgbbbbbfbgbbeca"
550 BILD$(9)="acaaaaaaaaaaaaaaacaaaaaaaaaaaaaaaaaaca"
560 BILD$(10)="acaaaaaaaaaaaaaaacaaaaaaaaaaaaaaaaaaca"
570 BILD$(11)="acdbbfbgbbbbbfbgbbbbecdbbbbbfbgbbbbeca"
580 BILD$(22)="acaaaaaaaaaaaaaaacaoaaaaaaaaaaaaaaaaca"
590 BILD$(23)="acdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeca"
600 BILD$(24)="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
610 '
620 ' BILDSCHIRMAUFBAU
630 '
640 CLS
650 FOR i=12 TO 21
660 BILD$(I)=BILD$(I-6)
670 NEXT 
680 FOR i=1 TO 24
690 FOR c=1 TO 40
700 IF MID$(BILD$(i),c,1)="a" THEN PEN 12:PAPER 3 ELSE PAPER 0:PEN 13
710 LOCATE c,i
720 PRINT MID$(BILD$(i),c,1)
730 NEXT
740 NEXT  
750 PEN 12
760 PAPER 3
770 LOCATE 1,25
780 PRINT STRING$(&26,"a")
790 GOSUB 2420
800 '
810 ' HAUPTPROGRAMM
820 '
830 XR(1)=2
840 XR(2)=37
850 YR(1)=4
860 YR(2)=4
870 A$=INKEY$
880 IF MID$(BILD$(B+1),A,1)="a" THEN D=A:GOSUB 1150
890 IF MID$(BILD$(B),A,1)="o" AND ANZ>=18 THEN GOTO 2280
900 IF A>2 AND(INKEY(74)=0 OR  INKEY(8)=0) THEN A=A-1:M$=CHR$(250)
910 IF A<37 AND (INKEY(75)=0 OR  INKEY(1)=0) THEN A=A+1:M$=CHR$(251)
920 IF MID$(BILD$(B),A,1)="c" AND(INKEY(0)=0 OR INKEY(72)=0) THEN B=B-1:M$=CHR$(249)
930 IF MID$(BILD$(B+1),A,1)="c" AND B<22 AND(INKEY(2)=0 OR INKEY(73)=0) THEN B=B+1:M$=CHR$(249)
940 IF MID$(BILD$(B+1),A,1)="g" AND(INKEY(9)=0 OR INKEY(76)=0) THEN ABT=-2:GOSUB 1230
950 IF MID$(BILD$(B+1),A,1)="f" AND(INKEY(9)=0 OR INKEY(76)=0) THEN ABT=0:GOSUB 1230
960 IF A1<>A OR B1<>B THEN GOSUB 1020
970 GOSUB 1550
975 while time<t!:call &bd19:wend:t!=time+50
980 GOTO 870
990 '
1000 ' UNTERPROGRAMM : ZEICHNET MAENCHEN
1010 '
1020 IF MID$(BILD$(B1),A1,1)="a" THEN PEN 12:PAPER 3 ELSE PAPER 0:PEN 13 
1030 LOCATE A1,B1
1040 PRINT MID$(BILD$(B1),A1,1)
1050 PAPER 0
1060 PEN 13
1070 LOCATE A,B
1080 PRINT M$
1090 A1=A
1100 B1=B
1110 RETURN
1120 '
1130 ' UNTERPROGRAMM : MAENCHEN DURCH LOCH GEFALLEN
1140 '
1150 WHILE MID$(BILD$(B+1),A,1)="a"
1160 GOSUB 1020
1170 B=B+1
1180 WEND
1190 RETURN
1200 '
1210 ' UNTERPROGRAMM : MAENCHEN SCHLAEGT LOCH
1220 '
1230 LOCATE A+ABT,B+1
1240 PEN 13
1250 PAPER 0
1260 PRINT "i h"
1270 PEN 12
1280 PAPER 3
1290 IF ABT=0 THEN LOCATE A+1,B+1:MID$(BILD$(B+1),A,3)="iah"
1300 IF ABT=-2 THEN LOCATE A-1,B+1:MID$(BILD$(B+1),A-2,3)="iah" 
1310 PRINT "a"
1320 ANZ=ANZ+1
1330 D=B+2
1340 WHILE MID$(BILD$(D),A,1)="a"
1350 PAPER 0
1360 PEN 13
1370 LOCATE A+ABT,D
1380 PRINT "jbk"
1390 LOCATE A+ABT,D
1400 PEN 12
1410 PAPER 3
1420 SOUND 1,253-A
1430 FOR PAU=1 TO 50/10:call &bd19
1440 NEXT
1450 PRINT "aaa"
1460 D=D+1
1470 FOR I=1 TO 2
1480 IF D=YR(I) AND (A+ANT-2=XR(I) OR A+ANT-1=XR(I) OR A+ANT=XR(I)) THEN LOCATE A+ABT,D:PAPER 0:PEN 13:PRINT "200":FOR PAU=100 TO 1 STEP -2:SOUND 1,253-PAU,2:NEXT:PEN 12:PAPER 3:SC=SC+200:GOSUB 2010:IF I=1 THEN XR(1)=2:YR(1)=4 ELSE XR(2)=37:YR(2)=4 
1490 NEXT
1500 WEND
1510 RETURN
1520 '
1530 ' UNTERPROGRAMM : BEWEGT GEISTER
1540 '
1550 IF I=1 THEN I=2 ELSE I=1
1560 X1=XR(I)
1570 Y1=YR(I)
1580 LOCATE X1,Y1
1590 IF MID$(BILD$(Y1),X1,1)="a" THEN PEN 12:PAPER 3 ELSE PAPER 0:PEN 13
1600 PRINT MID$(BILD$(Y1),X1,1)
1610 PAPER 0
1620 PEN 13
1630 IF MID$(BILD$(YR(I)+1),XR(I),1)="a" THEN GOSUB 2550
1640 YR(I)=YR(I)-(YR(I)<B AND MID$(BILD$(YR(I)+1),XR(I),1)="c")+(YR(I)>B AND MID$(BILD$(YR(I)),XR(I),1)="c")
1650 IF YR(I)<>Y1 THEN GOTO 1670
1660 XR(I)=XR(I)+(XR(I)>A)-(XR(I)<A)
1670 LOCATE XR(I),YR(I)
1680 PRINT "l"
1690 IF XR(I)=A AND YR(I)=B THEN 1740
1700 RETURN
1710 '
1720 ' UNTERPROGRAMM : MAENCHEN GEFANGEN
1730 '
1740 FOR Y=1 TO 30
1750 PAPER 0
1760 PEN 13
1770 LOCATE A,B
1780 PRINT "m"
1790 FOR PAU=1 TO 15/10:call &bd19
1800 NEXT
1810 LOCATE A,B
1820 PRINT "n"
1830 FOR PAU=1 TO 15/10:call &bd19
1840 NEXT
1850 LOCATE A,B
1860 PRINT CHR$(144)
1870 FOR PAU=1 TO 15/10:call &bd19
1880 NEXT
1890 LOCATE A,B
1900 PRINT CHR$(144)
1910 FOR PAU=1 TO 15/10:call &bd19
1920 NEXT
1930 LOCATE A,B
1940 PRINT " "
1950 NEXT
1960 L=L-1
1970 IF l=0 THEN GOTO 2070 ELSE GOSUB 2160:GOTO 750
1980 '
1990 ' UNTERPROGRAMM : PRINTET SCORE
2000 '
2010 LOCATE 28,25
2020 PRINT SC
2030 RETURN
2040 '
2050 ' UNTERPROGRAMM : MAENCHEN ZERSTOERT
2060 '
2070 CLS
2080 PRINT "        SIE SIND VON DEN GEISTERN                    ZERSTOERT WORDEN"
2090 PRINT
2100 PRINT   "      SIE HABEN ";SC;"PUNKTE GESCHAFFT"
2110 PRINT
2120 PRINT
2130 INPUT "     WOLLEN SIE NOCH EINMAL SPIELEN";ANT$
2140 IF ANT$="J" OR ANT$="j" THEN SC=0:L=3:GOTO 470
2150 RUN
2160 IF MID$(BILD$(B),A,1)="a" THEN PEN 12:PAPER 3 ELSE PEN 13:PAPER 0 
2170 LOCATE A,B
2180 PRINT MID$(BILD$(B),A,1)
2190 FOR I=1 TO 2
2200 IF MID$(BILD$(YR(I)),XR(I),1)="a" THEN PEN 12:PAPER 3 ELSE PEN 13:PAPER 0
2210 LOCATE XR(I),YR(I)
2220 PRINT MID$(BILD$(YR(I)),XR(I),1)
2230 NEXT
2240 RETURN
2250 '
2260 ' UNTERPROGRAMM : MAENCHEN ERHAELT BONUS
2270 '
2280 FOR I=119 TO 63 STEP -2
2290 SOUND 1,I,5
2300 NEXT I
2310 FOR I=1 TO 10010 STEP 100
2320 SOUND 1,3822,1
2330 LOCATE 27,25
2340 PRINT SC+I
2350 NEXT
2360 L=L+1
2370 LOCATE 12,25
2380 PRINT L
2390 ANZ=0
2400 SC=SC+10001
2410 GOTO 470
2420 PAPER 0
2430 PEN 13
2440 '
2450 ' UNTERPROGRAMM : PRINTET SCORE + LEBEN
2460 '
2470 LOCATE 5,25
2480 PRINT "LEBEN :";L
2490 LOCATE 20,25
2500 PRINT "SCORE :";SC
2510 RETURN
2520 '
2530 ' UNTERPROGRAMM : GEIST DURCH LOCH GEFALLEN
2540 '
2550 WHILE MID$(BILD$(YR(I)+1),XR(I),1)="a"
2560 PAPER 0
2570 PEN 13
2580 LOCATE XR(I),YR(I)
2590 PRINT "l"
2600 FOR PAU=1 TO 100/10:call &bd19
2610 NEXT
2620 IF MID$(BILD$(YR(I)),XR(I),1)="a" THEN PEN 12:PAPER 3 ELSE PAPER 0:PEN 13
2630 LOCATE XR(I),YR(I)
2640 PRINT MID$(BILD$(YR(I)),XR(I),1)
2650 YR(I)=YR(I)+1
2660 IF MID$(BILD$(YR(I)),XR(I)-1,3)="iah" THEN PEN 13:PAPER 0:LOCATE XR(I)-1,YR(I):PRINT "100":FOR PAU=50 TO 1 STEP -2:SOUND 1,253-PAU,2:NEXT:LOCATE XR(I)-1,YR(I):PRINT "fbg":MID$(BILD$(YR(I)),XR(I)-1,3)="fbg":SC=SC+100:GOSUB 2010:ANZ=ANZ-1
2670 WEND
2680 RETURN
*/ });