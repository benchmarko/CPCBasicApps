/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem smily - Smily
2 rem (c) Medi-Software, 1985
3 rem
4 rem
10 ' *****************************
20 ' *                           *
30 ' *                           *
40 ' *       S M I L Y           *
50 ' *                           *
60 ' *                           *
70 ' *****************************
100 DEFINT a-o,q-z
110 FOR i=0 TO 79:KEY DEF i,0:NEXT i 
120 RANDOMIZE TIME 
130 DIM ta(320),tc(322),M(20,21),s1(8),s2(8),s3(23),ton1(24),ton2(36)
140 REM *** Tonberechnung ***
150 FOR i=1 TO 24:ton1(i)=ROUND(125000/(261.626*(2^(1/12))^i)):NEXT i  
160 FOR i=0 TO 36:ton2(i)=ROUND(125000/(130.813*(2^(1/12))^i)):NEXT i
170 RESTORE 4630
180 REM *** SOUND aus DATAs lesen ***A
190 FOR i=1 TO 320 
200 da=da-1:IF da>0 THEN ta (i)=0 ELSE READ da,ton:ta(i)=ton1(ton)
210 NEXT i
220 FOR i=3 TO 319 STEP 4
230 da=da-1:IF da=0 THEN READ da,dur 
240 IF dur=1 THEN tc(i)=ton2(12): tc(i+1)=ton2(16):tc(i+2)=ton2(19):tc(i+3)=ton2(16):GOTO 260
250 IF dur=2 THEN tc(i)=ton2(7):tc(i+1)=ton2(11):tc(i+2)=ton2(14):tc(i+3)=ton2(11)ELSE tc(i)=ton2(17):tc(i+1)=ton2(21):tc(i+2)=ton2(24):tc(i+3)=ton2(21)
260 NEXT i
270 FOR i=1 TO 8:READ s1(i):NEXT i:FOR i=1 TO 8:READ s2(i):NEXT i:FOR i=1 TO 23:READ s3(i):NEXT i
280 REM *** Huellkurven fuer Sound ***
290 ENV 1,3,5,1,1,0,10,2,-1,9,13,-1,20:ENV 2,10,0,100:ENV 3,7,2,1,1,0,2,1,-14,1:ENV 4,15,1,5,1,-15,1:ENV 5,1,15,3,8,-1,5,7,-1,1:ENV 6,3,5,1,1,0,10,1,-15,1
300 ENT-1,1,1,5,2,-1,5,1,1,5:ENT-2,1,-1,4,2,1,3,1,-1,4:ENT-5,20,-1,1,20,1,1,1,0,10:ENT-6,1,1,1,1,0,2,2,-1,1,1,0,2,1,1,1:ENT-7,1,-1,3,2,1,5,1,-1,3
310 GOTO 590
320 REM *** Sound spielen ***
330 tonz=tonz+1:IF tonz>320 THEN tonz=1
340 ta=ta(tonz)
350 SOUND 129,tc(tonz),0,0,2,2
360 IF ta=0 THEN RETURN
370 SOUND 132,ta,0,0,1,1:RETURN
380 REM *** Titelbildsmily laden ***
390 DEG 
400 ORIGIN 320,208
410 FOR i=-127 TO 127 STEP 2
420 y=SQR(16384-i*i)
430 PLOT i*2,y,1:DRAW i*2,-y,1
440 NEXT i
450 FOR i=-192 TO 192 STEP 4
460 y=SQR(37249-i*i)
470 PLOT i,0,0:DRAW i,-y/2,0
480 NEXT i
490 FOR i=-23 TO 23 STEP 2
500 y=SQR(576-i*i)
510 PLOT i*2-95,y+48,0:DRAW i*2-95,-y+48,0
520 PLOT i*2+96,y+48,0:DRAW i*2+96,-y+48,0
530 NEXT i
540 PLOT 1000,1000,7:MOVE-72,-40:TAG:PRINT smily$;:TAGOFF
550 RETURN
560 tc(1)=tc(321):tc(2)=tc(322):ENV 2,2,6,2,1,0,20,12,-1,25
570 RETURN 
580 REM *** Zeichen definieren ***
590 SYMBOL AFTER 32
600 SYMBOL 33,&33,&FE,&FE,&6C,&FE,&FE,&EE
610 SYMBOL 64,&3C,&42,&99,&A1,&A1,&99,&42,&3C
620 SYMBOL 88,&0,&0,&0,&18,&18
630 SYMBOL 96,&18,&3C,&7E,&DB,&FF,&FF,&24,&E7 
640 SYMBOL 106,0,0,0,0,0,0,&66,&66
650 SYMBOL 112,&0,&FF,&0,&0,&0,&0,&FF
660 SYMBOL 113,&42,&42,&42,&42,&42,&42,&42,&42
670 SYMBOL 116,&0,&7E,&42,&42,&42,&42,&42,&42
680 SYMBOL 117,&42,&42,&42,&42,&42,&42,&7E
690 SYMBOL 118,&0,&FE,&2,&2,&2,&2,&C2,&42
700 SYMBOL 119,&0,&7F,&40,&40,&40,&40,&43,&42
710 SYMBOL 120,&42,&C2,&2,&2,&2,&2,&FE
720 SYMBOL 121,&42,&43,&40,&40,&40,&40,&7F
730 SYMBOL 122,&42,&43,&40,&40,&40,&40,&43,&42
740 SYMBOL 123,&42,&C2,&2,&2,&2,&2,&C2,&42
750 SYMBOL 124,&42,&C3,&0,&0,&0,&0,&FF
760 SYMBOL 125,&0,&FF,&0,&0,&0,&0,&C3,&42
770 SYMBOL 126,&0,&7E,&42,&42,&42,&42,&7E
780 SYMBOL 128,&3C,&7E,&C3,&81,&FF,&DB,&7E,&3C 
790 SYMBOL 129,&18,&A4,&78,&21,&22,&A4,&78
800 SYMBOL 130,&0,&0,&0,&6C,&92,&92,&93
810 SYMBOL 131,&0,&8,&0,&10,&30,&50,&8F
820 SYMBOL 132,&20,&50,&50,&61,&42,&CC,&30
830 SYMBOL 133,&0,&0,&0,&C9,&4A,&7C,&8,&70
840 SYMBOL 143,&66,&99,&81,&81,&42,&24,&18
850 REM *** TITELBILD ***
860 smily$=CHR$(129)+CHR$(130)+CHR$(131)+CHR$(132)+CHR$(133)
870 INK 0,0:INK 1,0:INK 3,0:INK 7,0:INK 12,0:INK 14,0:INK 15,0:PAPER 0:MODE 0:CLS:BORDER 0
880 SPEED INK 48,48
890 PEN 3:PRINT:PRINT:PRINT" M E D I - SOFTWARE":PRINT 
900 GOSUB 390
910 PEN 14:LOCATE 1,22:PRINT"       @ 1985"                    
920 PEN 15:PRINT"  M.Meier  C.Disch
930 PEN 12:LOCATE 1,1:PRINT"!!!!!!!!!!!!!!!!!!!!"
940 FOR i=1 TO 24:LOCATE 1,i:PRINT"!":LOCATE 20,i:PRINT"!":NEXT i
950 LOCATE 1,25:PRINT"!!!!!!!!!!!!!!!!!!!!";:LOCATE 1,1
960 INK 1,24:INK 3,6:INK 7,17:INK 12,18:INK 14,0,8:INK 15,26,0
970 AFTER 35,2 GOSUB 560 
980 EVERY 12,3 GOSUB 330
990 uw$=INKEY$:IF uw$<>""THEN 990
1000 IF INKEY$=""THEN 1000
1010 INK 13,26
1020 REM *** weiter Zeichen umdefinieren ***  
1030 SYMBOL 104,&3C,&7E,&DB,&FF,&81,&C3,&66,&3C 
1040 SYMBOL 105,&3C,&7E,&DB,&FF,&BD,&C3,&7E,&3C
1050 SYMBOL 114,&0,&FE,&2,&2,&2,&2,&FE
1060 SYMBOL 115,&0,&7F,&40,&40,&40,&40,&7F
1070 REM *** Schwierigkeitsgrad waehlen ***
1080 MODE 1:INK 2,20:INK 3,0:PAPER 3:PEN 2:CLS
1090 PRINT:PRINT:PRINT:PRINT TAB(11)"S P I E L S T U F E":PRINT TAB(11)STRING$(19,CHR$(154)):PRINT:PRINT:PRINT:PRINT TAB(22)"j"
1100 PRINT TAB(14)"A -> ANFANGER":PRINT:PRINT TAB(20)"j"
1110 PRINT TAB(14)"K -> KONNER":PRINT:PRINT
1120 PRINT TAB(14)"P -> PROFI"
1130 I$=UPPER$(INKEY$):IF I$=""THEN 1130
1140 IF I$="A"THEN FA=11:F=0:punb=500:ag=100:apz=10:GOTO 1180
1150 IF I$="K"THEN FA=11:F=2:punb=1000:ag=50:apz=8:GOTO 1180
1160 IF I$="P"THEN FA=0:F=2:punb=2000:ag=25:apz=6 ELSE 1130
1170 REM *** Musikbegleitung Abfrage ***
1180 CLS:LOCATE 4,13:PRINT"MUSIKBEGLEITUNG ?  J ODER N"
1190 i$=UPPER$(INKEY$):IF I$=""THEN 1190
1200 IF I$="J"THEN ENV 1,2,4,1,1,0,10,1,-1,9,7,-1,20:ENV 2,2,3,2,1,0,20,6,-1,25:GOTO 1230
1210 IF i$="N" THEN LA=0:LC=0:ENV 1,1,0,100:ENV 2,1,0,100 ELSE 1190
1220 REM *** Labyrinth aufbauen
1230 MODE 0:PAPER 0:SPEED INK 10,10
1240 CLS:R=R+1:LB=LB+1
1250 IF LB>10 THEN APZ=APZ-1:LB=1
1260 IF APZ<1 THEN APZ=1
1270 ON lb GOTO 1280,1290,1300,1310,1320,1330,1340,1350,1360,1370
1280 RESTORE 1440:GOTO 1380
1290 RESTORE 1640:GOTO 1380
1300 RESTORE 1840:GOTO 1380 
1310 RESTORE 2040:GOTO 1380 
1320 RESTORE 2240:GOTO 1380 
1330 RESTORE 2440:GOTO 1380
1340 RESTORE 2640:GOTO 1380
1350 RESTORE 2840:GOTO 1380 
1360 RESTORE 3040:GOTO 1380
1370 RESTORE 3240
1380 INK 11,fa:INK 12,18:LOCATE 8,1:PEN 7:PRINT smily$:PRINT
1390 fpu=0:FOR I=3 TO 21:FOR J=1 TO 19:READ L$
1400 IF L$="X"THEN PEN 12:FPU=FPU+1:M(J,I)=88 ELSE PEN 11:M(J,I)=1
1410 PRINT L$;:NEXT J:PRINT:NEXT I
1420 REM *** DATAs fuer Labyrinthe ***
1430 REM *** 1. Labyrinth ***
1440 DATA " "," ",w,p,p,p,p,p,p,p,p,p,p,p,p,p,v," "," " 
1450 DATA " "," ",q,X,X,X,X,X,X,X,X,X,X,X,X,X,q," "," "
1460 DATA " "," ",q,X,t,X,s,p,p,p,p,p,r,X,t,X,q," "," "
1470 DATA " "," ",q,X,q,X,X,X,X,X,X,X,X,X,q,X,q," "," " 
1480 DATA " "," ",q,X,q,X,w,p,r,X,s,p,v,X,q,X,q," "," "
1490 DATA " "," ",q,X,q,X,q,X,X,X,X,X,q,X,q,X,q," "," "
1500 DATA " "," ",q,X,q,X,q,X,s,p,r,X,q,X,q,X,q," "," "
1510 DATA " "," ",q,X,q,X,q,X,X,X,X,X,q,X,q,X,q," "," "
1520 DATA s,p,x,X,q,X,u,X,w,p,v,X,u,X,q,X,y,p,r
1530 DATA X,X,X,X,q,X,X,X,q," ",q,X,X,X,q,X,X,X,X
1540 DATA s,p,v,X,q,X,t,X,y,p,x,X,t,X,q,X,w,p,r
1550 DATA " "," ",q,X,q,X,q,X,X,X,X,X,q,X,q,X,q," "," "
1560 DATA " "," ",q,X,q,X,q,X,s,p,r,X,q,X,q,X,q," "," "
1570 DATA " "," ",q,X,q,X,q,X,X,X,X,X,q,X,q,X,q," "," "
1580 DATA " "," ",q,X,q,X,y,p,r,X,s,p,x,X,q,X,q," "," "
1590 DATA " "," ",q,X,q,X,X,X,X,X,X,X,X,X,q,X,q," "," "
1600 DATA " "," ",q,X,u,X,s,p,p,p,p,p,r,X,u,X,q," "," "
1610 DATA " "," ",q,X,X,X,X,X,X,X,X,X,X,X,X,X,q," "," "
1620 DATA " "," ",y,p,p,p,p,p,p,p,p,p,p,p,p,p,x," "," "
1630 REM *** 2. Labyrinth ***
1640 DATA " "," ",w,p,p,p,},p,p,p,p,p,},p,p,p,v," "," "
1650 DATA " "," ",q,X,X,X,u,X,X,X,X,X,u,X,X,X,q," "," "
1660 DATA " "," ",q,X,t,X,X,X,s,p,r,X,X,X,t,X,q," "," "
1670 DATA " "," ",q,X,z,p,r,X,X,X,X,X,s,p,{,X,q," "," "
1680 DATA " "," ",q,X,q,X,X,X,t,X,t,X,X,X,q,X,q," "," "
1690 DATA " "," ",q,X,q,X,s,p,{,X,z,p,r,X,q,X,q," "," "
1700 DATA " "," ",q,X,q,X,X,X,u,X,u,X,X,X,q,X,q," "," "
1710 DATA " "," ",q,X,q,X,t,X,X,X,X,X,t,X,q,X,q," "," "
1720 DATA " "," ",q,X,q,X,q,X,w,p,v,X,q,X,q,X,q," "," "
1730 DATA " "," ",q,X,q,X,q,X,q," ",q,X,q,X,q,X,q," "," "
1740 DATA " "," ",q,X,q,X,q,X,y,p,x,X,q,X,q,X,q," "," "
1750 DATA " "," ",q,X,q,X,u,X,X,X,X,X,u,X,q,X,q," "," "
1760 DATA " "," ",q,X,q,X,X,X,t,X,t,X,X,X,q,X,q," "," "
1770 DATA " "," ",q,X,q,X,s,p,{,X,z,p,r,X,q,X,q," "," "
1780 DATA " "," ",q,X,q,X,X,X,u,X,u,X,X,X,q,X,q," "," "
1790 DATA " "," ",q,X,z,p,r,X,X,X,X,X,s,p,{,X,q," "," "
1800 DATA s,p,x,X,u,X,X,X,s,p,r,X,X,X,u,X,y,p,r  
1810 DATA X,X,X,X,X,X,t,X,X,X,X,X,t,X,X,X,X,X,X 
1820 DATA s,p,p,p,p,p,"|",p,p,p,p,p,"|",p,p,p,p,p,r
1830 REM *** 3. Labyrinth ***  
1840 DATA s,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,r 
1850 DATA X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X 
1860 DATA w,p,p,p,},p,p,p,r,X,s,p,p,p,},p,p,p,v 
1870 DATA q,X,X,X,q,X,X,X,X,X,X,X,X,X,q,X,X,X,q  
1880 DATA q,X,t,X,q,X,w,p,r,X,s,p,v,X,q,X,t,X,q
1890 DATA q,X,q,X,u,X,q,X,X,X,X,X,q,X,u,X,q,X,q 
1900 DATA q,X,q,X,X,X,q,X,s,p,r,X,q,X,X,X,q,X,q
1910 DATA q,X,y,r,X,s,x,X,X,X,X,X,y,r,X,s,x,X,q  
1920 DATA q,X,X,X,X,X,X,X,w,p,v,X,X,X,X,X,X,X,q
1930 DATA z,p,r,X,s,p,r,X,q," ",q,X,s,p,r,X,s,p,{
1940 DATA q,X,X,X,X,X,X,X,y,p,x,X,X,X,X,X,X,X,q
1950 DATA q,X,w,r,X,s,v,X,X,X,X,X,w,r,X,s,v,X,q
1960 DATA q,X,q,X,X,X,q,X,s,p,r,X,q,X,X,X,q,X,q 
1970 DATA q,X,q,X,t,X,q,X,X,X,X,X,q,X,t,X,q,X,q 
1980 DATA q,X,u,X,q,X,y,p,r,X,s,p,x,X,q,X,u,X,q 
1990 DATA q,X,X,X,q,X,X,X,X,X,X,X,X,X,q,X,X,X,q
2000 DATA y,p,p,p,"|",p,p,p,r,X,s,p,p,p,"|",p,p,p,x 
2010 DATA X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X 
2020 DATA s,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,r 
2030 REM *** 4. Labyrinth ***
2040 DATA s,p,p,p,p,p,},p,p,p,p,p,},p,p,p,},p,r 
2050 DATA X,X,X,X,X,X,q,X,X,X,X,X,q,X,X,X,q,X,X 
2060 DATA s,p,v,X,t,X,u,X,s,p,r,X,u,X,t,X,q,X,t 
2070 DATA " "," ",q,X,u,X,X,X,X,X,X,X,X,X,u,X,q,X,q
2080 DATA " "," ",q,X,X,X,~,X,~,X,~,X,~,X,X,X,q,X,q
2090 DATA " "," ",z,p,r,X,X,X,X,X,X,X,X,X,s,p,{,X,q
2100 DATA " "," ",q,X,X,X,w,r,X,~,X,s,v,X,X,X,q,X,q
2110 DATA " "," ",q,X,s,p,x,X,X,X,X,X,y,p,r,X,q,X,q
2120 DATA " "," ",q,X,X,X,X,X,w,p,v,X,X,X,X,X,q,X,q
2130 DATA " "," ",z,p,r,X,~,X,q," ",q,X,~,X,s,p,{,X,q
2140 DATA " "," ",q,X,X,X,X,X,y,p,x,X,X,X,X,X,q,X,q
2150 DATA " "," ",q,X,s,p,v,X,X,X,X,X,w,p,r,X,q,X,q
2160 DATA " "," ",q,X,X,X,y,r,X,~,X,s,x,X,X,X,q,X,q
2170 DATA " "," ",z,p,r,X,X,X,X,X,X,X,X,X,s,p,{,X,q
2180 DATA " "," ",q,X,X,X,~,X,~,X,~,X,~,X,X,X,q,X,q
2190 DATA " "," ",q,X,t,X,X,X,X,X,X,X,X,X,t,X,q,X,q
2200 DATA " "," ",q,X,u,X,t,X,s,p,r,X,t,X,u,X,u,X,q
2210 DATA " "," ",q,X,X,X,q,X,X,X,X,X,q,X,X,X,X,X,q
2220 DATA " "," ",y,p,p,p,"|",p,p,p,p,p,"|",p,p,p,p,p,x
2230 REM *** 5. Labyrinth *** 
2240 DATA w,p,p,p,p,p,p,p,p,p,v," "," "," "," "," "," "," "," "
2250 DATA q,X,X,X,X,X,X,X,X,X,q," "," "," "," "," "," "," "," "
2260 DATA q,X,w,p,p,p,p,p,v,X,z,p,p,p,p,p,v," "," "
2270 DATA q,X,q,X,X,X,X,X,u,X,u,X,X,X,X,X,q," "," "
2280 DATA q,X,q,X,t,X,~,X,X,X,X,X,~,X,t,X,q," "," "
2290 DATA q,X,q,X,q,X,X,X,t,X,t,X,X,X,q,X,q," "," "
2300 DATA q,X,q,X,z,r,X,s,x,X,y,r,X,s,{,X,q," "," "
2310 DATA q,X,q,X,u,X,X,X,X,X,X,X,X,X,u,X,q," "," "
2320 DATA u,X,q,X,X,X,~,X,w,p,v,X,~,X,X,X,z,p,r
2330 DATA X,X,z,p,r,X,X,X,q," ",q,X,X,X,s,p,{,X,X
2340 DATA s,p,{,X,X,X,~,X,y,p,x,X,~,X,X,X,q,X,t
2350 DATA " "," ",q,X,t,X,X,X,X,X,X,X,X,X,t,X,q,X,q
2360 DATA " "," ",q,X,z,r,X,s,v,X,w,r,X,s,{,X,q,X,q
2370 DATA " "," ",q,X,q,X,X,X,u,X,u,X,X,X,q,X,q,X,q
2380 DATA " "," ",q,X,u,X,~,X,X,X,X,X,~,X,u,X,q,X,q
2390 DATA " "," ",q,X,X,X,X,X,t,X,t,X,X,X,X,X,q,X,q
2400 DATA " "," ",y,p,p,p,p,p,{,X,y,p,p,p,p,p,x,X,q
2410 DATA " "," "," "," "," "," "," "," ",q,X,X,X,X,X,X,X,X,X,q
2420 DATA " "," "," "," "," "," "," "," ",y,p,p,p,p,p,p,p,p,p,x
2430 REM *** 6. Labyrinth ***
2440 DATA s,p,},p,p,p,p,p,p,},p,p,p,p,p,p,},p,r
2450 DATA X,X,q,X,X,X,X,X,X,q,X,X,X,X,X,X,q,X,X
2460 DATA t,X,q,X,w,r,X,~,X,u,X,~,X,s,v,X,q,X,t
2470 DATA q,X,q,X,u,X,X,X,X,X,X,X,X,X,u,X,q,X,q
2480 DATA q,X,q,X,X,X,w,r,X,~,X,s,v,X,X,X,q,X,q
2490 DATA q,X,q,X,s,p,x,X,X,X,X,X,y,p,r,X,q,X,q
2500 DATA q,X,q,X,X,X,X,X,~,X,~,X,X,X,X,X,q,X,q
2510 DATA q,X,z,p,r,X,~,X,X,X,X,X,~,X,s,p,{,X,q
2520 DATA q,X,u,X,X,X,X,X,w,p,v,X,X,X,X,X,u,X,q
2530 DATA q,X,X,X,~,X,s,p,{," ",z,p,r,X,~,X,X,X,q
2540 DATA q,X,t,X,X,X,X,X,y,p,x,X,X,X,X,X,t,X,q
2550 DATA q,X,z,p,r,X,~,X,X,X,X,X,~,X,s,p,{,X,q
2560 DATA q,X,q,X,X,X,X,X,~,X,~,X,X,X,X,X,q,X,q
2570 DATA q,X,q,X,s,p,v,X,X,X,X,X,w,p,r,X,q,X,q
2580 DATA q,X,q,X,X,X,y,r,X,~,X,s,x,X,X,X,q,X,q
2590 DATA q,X,q,X,t,X,X,X,X,X,X,X,X,X,t,X,q,X,q
2600 DATA u,X,q,X,y,r,X,~,X,t,X,~,X,s,x,X,q,X,q
2610 DATA X,X,q,X,X,X,X,X,X,q,X,X,X,X,X,X,q,X,X
2620 DATA s,p,"|",p,p,p,p,p,p,"|",p,p,p,p,p,p,"|",p,r
2630 REM *** 7. Labyrinth ***
2640 DATA " ",w,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,v," "
2650 DATA " ",q,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,q," "
2660 DATA " ",q,X,s,p,},p,p,p,p,p,p,p,},p,r,X,q," "
2670 DATA " ",q,X,X,X,u,X,X,X,X,X,X,X,u,X,X,X,q," "
2680 DATA " ",q,X,t,X,X,X,t,X,~,X,t,X,X,X,t,X,q," "
2690 DATA " ",q,X,z,r,X,s,{,X,X,X,z,r,X,s,{,X,q," "
2700 DATA " ",q,X,q,X,X,X,u,X,~,X,u,X,X,X,q,X,q," "
2710 DATA " ",q,X,q,X,t,X,X,X,X,X,X,X,t,X,q,X,q," "
2720 DATA s,x,X,q,X,y,r,X,w,p,v,X,s,x,X,q,X,y,r
2730 DATA X,X,X,q,X,X,X,X,q," ",q,X,X,X,X,q,X,X,X
2740 DATA s,v,X,q,X,w,r,X,y,p,x,X,s,v,X,q,X,w,r
2750 DATA " ",q,X,q,X,u,X,X,X,X,X,X,X,u,X,q,X,q," "
2760 DATA " ",q,X,q,X,X,X,t,X,~,X,t,X,X,X,q,X,q," "
2770 DATA " ",q,X,z,r,X,s,{,X,X,X,z,r,X,s,{,X,q," "
2780 DATA " ",q,X,u,X,X,X,u,X,~,X,u,X,X,X,u,X,q," "
2790 DATA " ",q,X,X,X,t,X,X,X,X,X,X,X,t,X,X,X,q," "
2800 DATA " ",q,X,s,p,"|",p,p,p,p,p,p,p,"|",p,r,X,q," "
2810 DATA " ",q,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,q," "
2820 DATA " ",y,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,x," "
2830 REM *** 8. Labyrinth ***
2840 DATA w,p,p,p,p,},p,p,p,},p,p,p,},p,p,p,p,v
2850 DATA q,X,X,X,X,u,X,X,X,q,X,X,X,u,X,X,X,X,q
2860 DATA q,X,w,r,X,X,X,~,X,u,X,~,X,X,X,s,v,X,q
2870 DATA q,X,u,X,X,t,X,X,X,X,X,X,X,t,X,X,u,X,q
2880 DATA q,X,X,X,w,x,X,s,r,X,s,r,X,y,v,X,X,X,q
2890 DATA q,X,~,X,u,X,X,X,X,X,X,X,X,X,u,X,~,X,q
2900 DATA q,X,X,X,X,X,~,X,~,X,~,X,~,X,X,X,X,X,q
2910 DATA y,p,p,p,r,X,X,X,X,X,X,X,X,X,s,p,p,p,x
2920 DATA X,X,X,X,X,X,t,X,w,p,v,X,t,X,X,X,X,X,X
2930 DATA s,r,X,~,X,s,{,X,q," ",q,X,z,r,X,~,X,s,r
2940 DATA X,X,X,X,X,X,q,X,y,p,x,X,u,X,X,X,X,X,X
2950 DATA w,p,p,p,r,X,X,X,X,X,X,X,X,X,s,p,p,p,v
2960 DATA q,X,X,X,X,X,~,X,~,X,~,X,~,X,X,X,X,X,q
2970 DATA q,X,~,X,t,X,X,X,X,X,X,X,X,X,t,X,~,X,q
2980 DATA q,X,X,X,y,v,X,s,r,X,s,r,X,w,x,X,X,X,q
2990 DATA q,X,t,X,X,u,X,X,X,X,X,X,X,u,X,X,t,X,q
3000 DATA q,X,y,r,X,X,X,~,X,t,X,~,X,X,X,s,x,X,q
3010 DATA q,X,X,X,X,t,X,X,X,q,X,X,X,t,X,X,X,X,q
3020 DATA y,p,p,p,p,"|",p,p,p,"|",p,p,p,"|",p,p,p,p,x
3030 DATA REM *** 9. Labyrinth *** 
3040 DATA w,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,v
3050 DATA u,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,u
3060 DATA X,X,s,p,p,p,p,p,p,p,p,p,p,p,p,p,r,X,X
3070 DATA t,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,t
3080 DATA z,p,r,X,w,p,p,p,p,p,p,p,p,p,v,X,s,p,{
3090 DATA q,X,X,X,u,X,X,X,X,X,X,X,X,X,u,X,X,X,q
3100 DATA q,X,t,X,X,X,t,X,~,X,~,X,t,X,X,X,t,X,q
3110 DATA q,X,y,v,X,s,x,X,X,X,X,X,y,r,X,w,x,X,q
3120 DATA q,X,X,u,X,X,X,X,w,p,v,X,X,X,X,u,X,X,q 
3130 DATA z,r,X,X,X,~,X,s,{," ",z,r,X,~,X,X,X,s,{
3140 DATA q,X,X,t,X,X,X,X,y,p,x,X,X,X,X,t,X,X,q
3150 DATA q,X,w,x,X,s,v,X,X,X,X,X,w,r,X,y,v,X,q
3160 DATA q,X,u,X,X,X,u,X,~,X,~,X,u,X,X,X,u,X,q
3170 DATA q,X,X,X,t,X,X,X,X,X,X,X,X,X,t,X,X,X,q
3180 DATA z,p,r,X,y,p,p,p,p,p,p,p,p,p,x,X,s,p,{
3190 DATA u,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,u
3200 DATA X,X,s,p,p,p,p,p,p,p,p,p,p,p,p,p,r,X,X
3210 DATA t,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,t
3220 DATA y,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,x
3230 REM *** 10. Labyrinth ***
3240 DATA " "," "," "," "," ",w,p,p,p,},p,p,p,v," "," "," "," "," "
3250 DATA " "," "," "," "," ",q,X,X,X,u,X,X,X,q," "," "," "," "," "
3260 DATA " "," "," "," ",w,x,X,~,X,X,X,~,X,y,v," "," "," "," "
3270 DATA " "," "," "," ",q,X,X,X,X,~,X,X,X,X,q," "," "," "," "
3280 DATA " "," "," ",w,x,X,s,r,X,X,X,s,r,X,y,v," "," "," "
3290 DATA " "," "," ",q,X,X,X,X,X,t,X,X,X,X,X,q," "," "," "
3300 DATA " "," ",w,x,X,~,X,s,p,"|",p,r,X,~,X,y,v," "," "
3310 DATA " "," ",q,X,X,X,X,X,X,X,X,X,X,X,X,X,q," "," "
3320 DATA " ",w,x,X,~,X,~,X,w,p,v,X,~,X,~,X,y,v," "
3330 DATA " ",q,X,X,X,X,X,X,q," ",q,X,X,X,X,X,X,q," "
3340 DATA w,x,X,~,X,s,r,X,y,p,x,X,s,r,X,~,X,y,v
3350 DATA q,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,q
3360 DATA q,X,~,X,~,X,~,X,~,X,~,X,~,X,~,X,~,X,q
3370 DATA q,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,q
3380 DATA y,p,p,p,p,v,X,~,X,~,X,~,X,w,p,p,p,p,x
3390 DATA " "," "," "," "," ",q,X,X,X,X,X,X,X,q," "," "," "," "," "
3400 DATA s,p,p,p,p,x,X,w,p,p,p,v,X,y,p,p,p,p,r
3410 DATA X,X,X,X,X,X,X,q," "," "," ",q,X,X,X,X,X,X,X   
3420 DATA s,p,p,p,p,p,p,x," "," "," ",y,p,p,p,p,p,p,r
3430 REM *** Spielablauf *** 
3440 FOR i=3 TO 9-f*2 STEP 2:LOCATE I,23:PEN 1:PRINT "h":NEXT
3450 INK 6,15:PEN 6
3460 uw=REMAIN(3):FOR I=1 TO APZ 
3470 SFA=INT(RND(1)*17)+4:SFB=INT(RND(1)*13)+4:IF M(SFB,SFA)=88 THEN LOCATE SFB,SFA:PRINT CHR$(143);:M(SFB,SFA)=143 ELSE 3470   
3480 NEXT i
3490 SOUND 2,0,0,0,4,0,1:WHILE SQ(2)>127:WEND:SOUND 2,119,0,0,5,5:WHILE SQ(2)>127:WEND 
3500 ptime=0
3510 FPU=FPU+APZ*0
3520 GOSUB 4560 
3530 SIG=1
3540 AN=18:A=18:BN=10:B=10
3550 GOTO 3770
3560 t!=time+50:while time<t!:call &bd19:wend:FOR i=1 TO ag-r*2:NEXT i:X=0:Y=0:call &bd19:JO=JOY(0)
3570 IF JO=1 OR INKEY(0)>-1 THEN Y=-1:GOTO 3610 
3580 IF JO=2 OR INKEY(2)>-1 THEN Y=1:GOTO 3610  
3590 IF JO=4 OR JO=5 OR JO=6 OR INKEY(8)>-1 THEN X=-1:GOTO 3610
3600 IF JO=8 OR JO=9 OR JO=10 OR INKEY(1)>-1 THEN X=1
3610 BN=B+X
3620 AN=A+Y
3630 IF BN<1 THEN BN=19
3640 IF BN>19 THEN BN=1
3650 IF AN<>ZN OR BN<>SN THEN 3770
3660 IF SIG<0 THEN 3740
3670 PEN 7:F=F+1:LOCATE B,A:PRINT" ";:LOCATE BN,AN:PRINT CHR$(128);
3680 GOSUB 5110
3690 IF F>4 THEN 4410
3700 PEN 1:LOCATE 1,23:PRINT"                  ":FOR I=3 TO 9-F*2 STEP 2:LOCATE I,23:PRINT"h":NEXT
3710 LOCATE BN,AN: IF M(BN,AN)=88 THEN PEN 12 ELSE PEN 6
3720 PRINT CHR$(M(BN,AN));
3730 GOSUB 4560:GOTO 3540
3740 PEN 1:LOCATE B,A:PRINT" ";:LOCATE BN,AN:PRINT"h";
3750 GOSUB 5130
3760 pun=PUN+R*50:PEN 6 :LOCATE 4,25:PRINT USING"####### PUNKTE";PU*r+pun:GOSUB 4560
3770 IF M(BN,AN)=88 THEN SOUND 130,0,0,5,3,0,25:LOCATE b,a:PRINT" ":LOCATE bn,a:PEN 1:PRINT"i":PU=PU+1:PEN 6:LOCATE 4,25:PRINT USING"####### PUNKTE ";PU*r+pun:M(BN,AN)=32:GOTO 3830
3780 IF M(BN,AN)<>143 THEN 3830
3790 LOCATE b,a:PRINT" ";:LOCATE BN,AN:PEN 1:PRINT"i",;:SOUND 2,239,0,0,5,2:PU=PU+10:PEN 6:LOCATE 4,25:PRINT USING"####### PUNKTE";PU*r+pun:M(BN,AN)=32
3800 INK 11,11,17:SIG=-1:sr=0
3810 ZR=SGN(AN-Z)*(-1):IF ZR=0 THEN SR=SGN(BN-S)*SIG
3820 IF TIME<ptime THEN ptime=ptime+1800+300*(fa=0) ELSE ptime=TIME+1800+300*(fa=0)
3830 IF X=0 AND Y=0 THEN 3880
3840 IF M(BN,AN)<>1 THEN 3870
3850 AN=A:BN=B:IF FA=0 AND sig>0 THEN INK 11,11:FOR I=1 TO 400/15:call &bd19:NEXT:INK 11,0
3860 GOTO 3880
3870 LOCATE B,A:PRINT" ";
3880 LOCATE BN,AN:PEN 1:PRINT"h";:A=AN:B=BN
3890 IF SIG>0 THEN 3940 
3900 IF TIME<ptime THEN 3940
3910 sig=1:INK 11,fa:sr=0
3920 zr=SGN(an-z):IF zr<>0 THEN 3940
3930 sr=SGN(bn-s)
3940 IF pun+pu*r<punb THEN 4010
3950 LOCATE 6,2:PRINT"! BONUS !"
3960 GOSUB 5150
3970 IF f>-4 THEN f=f-1 ELSE pun=pun+300:LOCATE 4,25:PEN 6:PRINT USING"####### PUNKTE";PU*r+pun
3980 punb=punb*2
3990 LOCATE 6,2:PRINT"        "             
4000 PEN 1:LOCATE 3,23:PRINT"                   ":FOR i=3 TO 9-f*2 STEP 2:LOCATE i,23:PRINT"h":NEXT i
4010 IF pu>=fpu THEN pun=pun+(pu+10)*r:pu=0:LOCATE 4,25:PEN 6:PRINT USING"####### PUNKTE";pun:GOTO 1240
4020 IF zr<>0 THEN 4080 
4030 zrp=SGN(an-z)*sig:IF zrp=0 THEN 4130 
4040 IF m(s,z+zrp)<>1 THEN 4070
4050 IF m(s+sr,z)<>1 THEN 4210
4060 zr=-zrp:sr=0:GOTO 4210
4070 zr=zrp:sr=0:GOTO 4210
4080 srp=SGN(bn-s)*sig:IF srp=0 THEN 4170
4090 IF m(s+srp,z)<>1 THEN 4120
4100 IF m(s,z+zr)<>1 THEN 4210
4110 sr=-srp:zr=0:GOTO 4210
4120 sr=srp:zr=0:GOTO 4210
4130 IF m(s+sr,z)<>1 THEN 4210 
4140 zr=SGN(INT(2*RND(1))-0.5):sr=0
4150 IF m(s,z+zr)<>1 THEN 4210
4160 zr=-zr:GOTO 4210
4170 IF m(s,z+zr)<>1 THEN 4210
4180 sr=SGN(INT(2*RND(1))-0.5):ZR=0
4190 IF m(s+sr,z)<>1 THEN 4210
4200 SR=-SR
4210 ZN=Z+ZR:SN=S+SR
4220 IF SN<1 THEN SN=19
4230 IF SN>19 THEN SN=1
4240 IF M(S,Z)=88 THEN PEN 12 ELSE PEN 6
4250 LOCATE S,Z:PRINT CHR$(M(S,Z));
4260 LOCATE SN,ZN:PEN 13:PRINT"`";
4270 IF ZN<>AN OR SN<>BN THEN 4390
4280 IF SIG<0 THEN 4360
4290 F=F+1:LOCATE SN,ZN:PEN 7:PRINT CHR$(128);
4300 GOSUB 5110
4310 IF F>4 THEN 4410
4320 PEN 1:LOCATE 1,23:PRINT"                   ":FOR I=3 TO 9-F*2 STEP 2:LOCATE 1,23:PRINT"h":NEXT i
4330 LOCATE SN,ZN:PRINT" ";
4340 GOSUB 4560
4350 GOTO 3450
4360 LOCATE BN,AN:PEN 1:PRINT"h";:GOSUB 5130:pun=PUN+R*50:PEN 6:LOCATE 4,25:PRINT USING"####### PUNKTE";PU*r+pun
4370 GOSUB 4560
4380 GOTO 3560
4390 Z=ZN:S=SN:GOTO 3560
4400 REM *** Spielende ***
4410 PUN=PUN+PU*r:LOCATE 4,25:PEN 6:PRINT USING"####### PUNKTE";PUN
4420 INK 14,26,8:INK 15,8,26:SPEED INK 24,24:PEN 14:LOCATE 2,1:PRINT"***           ***":PEN 15:LOCATE 6,1:PRINT"GAME OVER"
4430 ENV 1,3,5,1,1,0,10,2,-1,9,13,-1,20:ENV 2,2,6,2,1,0,20,12,-1,25:EVERY 12,3 GOSUB 330
4440 INK 9,16:PEN 9:LOCATE 1,23:PRINT"@ 1985 MEDI-SOFTWARE"
4450 uw$=INKEY$:IF uw$<>""THEN 4450
4460 i$=INKEY$:IF i$="E"OR i$="e"THEN 4600
4470 IF JOY(0)<>16 AND INKEY(9)<0 THEN 4460
4480 PEN 1:FOR i=1 TO 17:LOCATE i,1:PRINT" h":FOR j=1 TO 150/12:call &bd19:NEXT j:SOUND 130,0,0,5,3,0,25:LOCATE i,1:PRINT" i":FOR j=1 TO 50/12:call &bd19:NEXT j:NEXT i
4490 SYMBOL 104,&E0,&60,&6C,&76,&66,&66,&E6
4500 SYMBOL 105,&18,&0,&38,&18,&18,&18,&3C
4510 SYMBOL 114,&0,&0,&DC,&76,&60,&60,&F0
4520 SYMBOL 115,&0,&0,&3C,&60,&3C,&6,&7C
4530 PUN=0:PU=0:R=0:LB=0
4540 GOTO 870
4550 REM *** Gespenst kommt heraus***
4560 Z=10:ZN=10:S=10:SN=10:ZR=0:SR=SGN(INT(RND(1)*2)-0.5)
4570 PEN 13:LOCATE 10,12:PRINT"`";
4580 LOCATE 10,12:PRINT" ";:LOCATE 10,10:PRINT"`";:EVERY 12,3 GOSUB 330
4590 RETURN
4600 uw=REMAIN(3):SOUND 133,0:SYMBOL AFTER 32:FOR i=0 TO 79:KEY DEF i,1:NEXT:PAPER 0:PEN 1:MODE 2
4610 END
4620 REM *** DATA ***
4630 DATA 2,7,2,12,1,12,1,14,2,16,2,12
4640 DATA 2,14,4,19,2,7
4650 DATA 2,11,1,11,1,12,2,14,2,11
4660 DATA 2,12,4,7,2,7
4670 DATA 2,12,1,12,1,14,2,16,2,12
4680 DATA 2,17,2,19,4,21
4690 DATA 4,19,4,11
4700 DATA 7,12,1,19
4710 DATA 2,24,2,23,3,21,1,19
4720 DATA 2,24,2,23,3,21,1,19
4730 DATA 2,24,2,23,2,21,2,19
4740 DATA 7,17,1,19
4750 DATA 2,23,2,19,3,21,1,17
4760 DATA 2,19,2,16,3,17,1,14
4770 DATA 2,16,2,19,2,16,2,14
4780 DATA 7,12,1,19
4790 DATA 2,24,2,23,3,21,1,19
4800 DATA 2,24,2,23,3,21,1,19
4810 DATA 2,24,2,23,2,21,2,19
4820 DATA 7,17,1,19
4830 DATA 2,23,2,19,3,21,1,17
4840 DATA 2,19,2,16,3,17,1,14
4850 DATA 2,16,2,19,2,16,2,14
4860 DATA 6,12,2,7
4870 DATA 2,12,1,12,1,14,2,16,2,12
4890 DATA 2,11,1,11,1,12,2,14,2,11
4900 DATA 2,12,4,7,2,7
4910 DATA 2,12,1,12,1,14,2,16,2,12
4920 DATA 2,17,2,19,3,21,1,17
4930 DATA 3,19,1,16,3,17,1,14
4940 DATA 8,12
4950 DATA 3,12,1,14,1,16,1,14,3,12
4960 DATA 2,17,1,12,1,17,1,16,1,14,1,12
4970 DATA 6,19,1,14,1,16
4980 DATA 8,12
4990 DATA 3,12,1,14,1,16,1,14,3,12
5000 DATA 2,17,1,12,1,17,1,16,1,14,1,12
5010 DATA 6,19,1,14,1,16
5020 DATA 6,12
5030 DATA 2,1,4,2,4,1,2,3,1,1,1,2,2,1
5040 DATA 6,1,8,2,8,1,8,2,2,1
5050 DATA 2,1,4,2,4,1,2,3,1,1,1,2,2,1
5060 DATA 2,1,2,3,2,2,4,1,2,3,2,2,2,1
5070 DATA 379,319,426,358,478,379,426,638
5080 DATA 638,426,379,478,358,426,319,379
5090 DATA 478,379,319,239,190,239,253,213,253,284,239,284,319,253,319,284,239,284,253,213,253,239,478,,,,,,
5100 REM *** FEHLERSOUND ***
5110 uw=REMAIN(3):SOUND 133,0:FOR so=1 TO 8:SOUND 2,s1(so),0,0,6,6:NEXT so:WHILE SQ(2)>127:WEND:RETURN  
5120 REM *** Sound fuer gefangenes Gespenst ***
5130 uw=REMAIN(3):SOUND 133,0:FOR so=1 TO 8:SOUND 2,s2(so),0,0,6,6:NEXT so:WHILE SQ(2)>127:WEND:ptime=ptime+900:RETURN
5140 REM *** Bonussound ***
5150 uw=REMAIN(3):SOUND 133,0:FOR so=1 TO 23:SOUND 130,s3(so),0,0,5,7:FOR j=1 TO 300:NEXT j,so:WHILE SQ(2)>127:WEND:EVERY 12,3 GOSUB 330:ptime=prime-1500*(sig=-1):RETURN
5160 rem
*/ });
