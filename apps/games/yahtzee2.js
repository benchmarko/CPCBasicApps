/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem yahtzee2 - Yahtzee 2 (Kniffel)
2 rem (c) Veb Mikroelektronik Muehlhausen
3 rem https://www.cpc-power.com/index.php?page=detail&num=11927
4 rem Modification: put in one file; typo in 1790; skip intro music; 210 delay
6 rem This version is based on Yahtzee 1 and uses MODE 1 and BASIC 1.1
8 gosub 5000:'part1
9 rem part2
10 st=0:'---Programm-init---
20 DIM bp(5):KEY 130,"mode 2:paper 0:pen 1:ink 0,20:ink 1,0:border 10:list"+CHR$(13)
30 MODE 1:SPEED WRITE 1
40 ENV 1,10,-1,10
50 SYMBOL 255,0,0,60,126,126,60,0,0
60 RANDOMIZE TIME
70 DEF FNp$(xx,yy)=CHR$(31)+CHR$(yy)+CHR$(xx)
80 INK 0,1
90 mon$="J":MODE 1
100 DIM wuerfel%(5,2):WINDOW #0,5,36,9,17
110  INK 1,26:BORDER 0
120 FOR spv=0 TO 390 STEP 70:FOR sph=0 TO 640 STEP 74:wwt=INT(RND*6)+1
130 if skip=0 then if inkey$="" then GOSUB 330 else skip=1
135 GOSUB 430:NEXT:NEXT:CLS #0
140 if skip=0 then FOR i=1 TO 12:GOSUB 330:NEXT
150 INK 0,1:BORDER 2 
160 GOTO 570
180 IF cor%=0 GOTO 190 ELSE IF jyw=99 THEN 310
190 IF maus(am)=0 GOTO 250
200 wl=maus(am)-1
210 c.t!=time+50:while time<c.t!:call &bd19:wend:jyw=JOY(wl)
220 IF jyw=32 THEN jyw=16
230 IF jyw=1 OR jyw=2 OR jyw=4 OR jyw=8 OR jyw=16 GOTO 310 ELSE jyw=0
240 GOTO 310
250 jyw=0
260 e$=INKEY$:IF e$=CHR$(240) THEN jyw=1:GOTO 310
270 IF e$=CHR$(243) THEN jyw=8:GOTO 310 
280 IF e$=CHR$(241) THEN jyw=2:GOTO 310 
290 IF e$=CHR$(242) THEN jyw=4:GOTO 310  
300 IF INKEY(47)>-1 THEN jyw=16:GOTO 310  
310 RETURN
330 GRAPHICS PEN 1:PEN 1
340 READ ks,ton,tim
350 IF ton=0 THEN RESTORE 400:GOTO 340
360 SOUND ks,ton,tim,15,1
370 SOUND ks,ton*2,5,0
380 RETURN
390 DATA 2,239,25,2,190,25,2,179,25
400 DATA 2,159,100,2,239,25,2,190,25,2,179,25,2,159,100,2,239,25,2,190,25,2,179,25,2,159,50,2,190,50,2,239,50,2,190,50,2,213,100
410 DATA 2,190,25,2,190,25,2,213,25,2,239,75,2,239,25,2,190,50,2,159,25,2,159,25,2,159,25,2,179,100,2,142,25,2,142,25,2,159,75,2,190,25,2,239,50,2,213,50,2,239,125,2,239,25,2,190,25,2,179,25,0,0,0
430 TAG
440 IF wwt=1 OR wwt=3 OR wwt=5 THEN MOVE sph+14,spv+28:PRINT CHR$(144);
450 IF wwt>1 THEN MOVE sph+4,spv+20:PRINT CHR$(144);:MOVE sph+24,spv+34:PRINT CHR$(144);
460 IF wwt>3 THEN MOVE sph+24,spv+20:PRINT CHR$(144);:MOVE sph+4,spv+34:PRINT CHR$(144);
470 IF wwt=6 THEN MOVE sph+14,spv+20:PRINT CHR$(144);:MOVE sph+14,spv+34:PRINT CHR$(144);
480 TAGOFF
490 MOVE sph,spv+40:DRAW sph,spv:DRAW sph+40,spv  
500 DRAW sph+40,spv+40:DRAW sph,spv+40
510 FOR loop=0 TO 3 STEP 0.5:MOVE sph+loop*4,spv+(10+loop)*4
520 DRAW sph+(10+loop)*4,spv+(10+loop)*4
530 DRAW sph+(10+loop)*4,spv+loop*4
540 NEXT
550 RETURN
570 PEN#1,1:PAPER#1,0
580 DEF FNp$(xx,yy)=CHR$(31)+CHR$(yy)+CHR$(xx):GOSUB 2860:INK 2,24:PEN 2:LOCATE 12,1:IF st=1 THEN 620
590 PRINT"Kniffel":LOCATE 1,3:PRINT"Kniffel ist ein W^rfelspiel  f^rmehrere Mannschaften.  Das  Zieldes  Spieles besteht darin,  diegew^rfelten  Augenzahlen richtigzu  bewerten  und  einzuordnen .";
595 PRINT "Wer die meisten  Punkte hat, istSieger.     Weiter mit";:SYMBOL AFTER 256:PRINT" [SPACE]";:GOSUB 2860
600 h$=INKEY$: IF h$=" " THEN GOTO 620
610 GOTO 600
620 PEN 1:CLS#0:LOCATE 2,8:SOUND 2,127:INPUT "Anzahl Mannschaften (2-5)? ",anzman:IF anzman<2 OR anzman>5 THEN SOUND 2,568,50:GOTO 620
630 PRINT:PRINT:PRINT:LOCATE 2,8:SOUND 2,127:INPUT "Spieler je Mannschaft (1-3)? ",anzsp
640 IF anzsp>3 OR anzsp=0 THEN SOUND 2,568,50:GOTO 630
660 DIM spnam$(anzman,anzsp):DIM lin(19):DIM lst(anzman,anzsp,18):DIM suman(anzman)
670 FOR i=1 TO anzman:geld(i)=0:FOR j=1 TO anzsp:FOR k=1 TO 18:IF (k>0 AND k<7) OR (k>8 AND k<18) THEN lst(i,j,k)=-1 ELSE lst(i,j,k)=0
680 NEXT:NEXT:NEXT
690 FOR i=1 TO anzman:CLS#0:LOCATE 2,2:PRINT "Steuerung f^r Mannschaft"i
700 LOCATE 2,4:PRINT "0 --> Tastatur"
710 LOCATE 2,6:PRINT "1 --> Joystick "
720 LOCATE 9,8:INPUT maus(i):IF maus(i)<0 OR maus(i)>1 GOTO 720
730 CLS#0:FOR j=1 TO anzsp
740 SOUND 2,127:spnam$(i,j)="sp"
750 spnam$(i,j)=UPPER$(LEFT$(spnam$(i,j),1))+LOWER$(RIGHT$(spnam$(i,j),LEN(spnam$(i,j))-1))
760 NEXT:NEXT
770 CLG
780 WINDOW #0,30,40,1,25:WINDOW #1,1,29,1,25:WINDOW #2,29,29,1,25
790 GOSUB 1750
800 FOR am=1 TO anzman:FOR as=1 TO anzsp:FOR i=1 TO 17: IF lst(am,as,i)=-1 GOTO 810 ELSE NEXT:NEXT:GOTO 1000  
810 PRINT#1,FNp$(1,1);"Mannschaft";am:GOSUB 1910:FOR i=1 TO anzsp:PRINT#1,FNp$(1,12+i*4);SPACE$(3):PRINT#1,FNp$(1,12+i*4);USING "###";i:PRINT#1,FNp$(1,12+i*4);spnam$(am,i)::NEXT:FOR as=1 TO anzsp
820 PEN#1,0:PAPER#1,1::PRINT#1,FNp$(1,12+as*4);spnam$(am,as):PEN#1,1:PAPER#1,0
830 CLS#0:FOR i=0 TO 4:wuerfel%(i,2)=0:NEXT
840 wurf=0
850 GOSUB 1170:GOSUB 2800
860 GOSUB 1970:IF jyw=99 AND wurf<3 GOTO 850
870 GOSUB 2800:GOSUB 180:IF jyw>0 GOTO 870
880 IF jm=17 AND aug>0 GOTO 970
890 PRINT#1,FNp$(25,1);SPACE$(25);:PRINT#1,FNp$(25,1);"Eintrag best[tigt ?";
900 PRINT#1,FNp$(25,21);CHR$(242):cor%=1
905 IF INKEY(79)>-1 THEN jyw=99
910 GOSUB 180:IF jyw=16 OR jyw=32 OR jyw=99 GOTO 920 ELSE GOTO 905
920 PRINT#1,FNp$(25,1);SPACE$(22);:PRINT#1,FNp$(25,1);"Summe Mannschaft";:PRINT#1,FNp$(25,18);USING "#####";suman(am)
930 cor%=0:IF jyw<99 GOTO 970 ELSE lst(am,j,im)=-1:PRINT#1,FNp$(lin(im),12+j*4);SPACE$(3);:lst(am,j,18)=lst(am,j,18)-aug
940 IF im<7 THEN lst(am,j,7)=lst(am,j,7)-aug
950 IF lst(am,j,7)<63 THEN lst(am,j,8)=0
960 GOSUB 2730:GOTO 860
970 SOUND 2,190,50,7:PRINT#1,FNp$(1,12+as*4);spnam$(am,as)
980 FOR ct=1 TO anzsp:FOR i=1 TO 17:IF lst(am,ct,i)=-1 GOTO 990 ELSE NEXT:NEXT:GOTO 1000   
990 NEXT
1000 NEXT
1010 FOR am=1 TO anzman:FOR as=1 TO anzsp:FOR i=1 TO 17:IF lst(am,as,i)=-1 GOTO 800 ELSE NEXT:NEXT:NEXT
1030 FOR i=1 TO anzman:bp(i)=i:NEXT
1040 FOR j=1 TO 5:FOR i=anzman TO 2 STEP-1:IF suman(i)>suman(i-1) THEN zw=suman(i-1):za=bp(i-1):suman(i-1)=suman(i):bp(i-1)=bp(i):suman(i)=zw:bp(i)=za
1050 NEXT i,j
1060 z=0:MODE 1:LOCATE 14,2:PRINT"Bestenliste"
1070 FOR i=1 TO anzman:LOCATE 1,6:PRINT "Platz        Mannschaft   Punkte":LOCATE 1,8+i+z:PRINT i;".             ";bp(i):LOCATE 29,8+i+z:PRINT suman(i):z=z+1:NEXT i 
1080 PEN 1
1090 IF LEN(INKEY$)>0 THEN 1090
1100 LOCATE 2,20:INPUT"Neues Spiel (J/N)";n$:n$=UPPER$(n$)
1110 IF n$="N" GOTO 1130 ELSE IF n$="J" THEN BORDER 0:MODE 1:WINDOW #0,5,36,9,17:CLS #0:FOR i=1 TO anzman:suman(i)=0:NEXT:CLEAR:st=1:GOTO 570
1120 GOTO 1090
1130 WINDOW SWAP 0,2:CLS:END
1140 FOR i=1 TO anzman:suman(i)=0:FOR j=1 TO anzsp:FOR k=1 TO 18:IF (k>0 AND k<7)OR(k>8 AND k<18) THEN lst(i,j,k)=-1 ELSE lst(i,j,k)=0
1150 NEXT:NEXT:NEXT:GOTO 770
1170 IF jyw=99 THEN wurf=wurf+1:PRINT FNp$(1,3);SPACE$(15);:PRINT FNp$(2,3);SPACE$(15);: GOTO 1220
1180 wurf=wurf+1
1190 GOSUB 180:IF jyw>0 GOTO 1190
1200 cl=1:GOSUB 2800
1210 IF wurf=1 GOTO 1230 ELSE cor%=1
1220 IF jyw<99 GOTO 1230 ELSE PRINT FNp$(1,5);"Korrektur...";:FOR vz=0 TO 1000:      NEXT:wurf=wurf-1:PRINT FNp$(1,5);space(12);:GOTO 1360
1230 PEN 1:PRINT FNp$(1,cl);CHR$(241);:cl=cl+1:IF cl<12 GOTO 1210
1240 PRINT FNp$(1,1);SPACE$(11);:GOSUB 180:IF jyw=16 GOTO 1260 ELSE cl=1:GOTO 1210
1250 GOTO 1210
1260 PRINT FNp$(1,5);SPACE$(10);
1270 FOR lp1=0 TO 4:IF wuerfel%(lp1,2)=0 THEN wuerfel%(lp1,1)=INT(RND*6)+1
1280 NEXT
1290 INK 2,24:GRAPHICS PEN 2:PEN 2:FOR lp1=0 TO 4:zuf=INT(RND*1000)+1:IF wuerfel%(lp1,2)=0 THEN wuerfel%(lp1,1)=INT(RND(zuf)*6)+1
1300 GOSUB 180:IF jyw<16 GOTO 1330
1310 SOUND 2,INT(RND*200)+200,2,INT(RND*5)+2
1320 NEXT:GOTO 1290
1330 FOR lp1=0 TO 3:FOR lp2=lp1 TO 4:IF wuerfel%(lp2,1)<=wuerfel%(lp1,1) GOTO 1350
1340 wuerfel%(5,1)=wuerfel%(lp1,1):wuerfel%(lp1,1)=wuerfel%(lp2,1):wuerfel%(lp2,1)=wuerfel%(5,1):wuerfel%(5,2)=wuerfel%(lp1,2):wuerfel%(lp1,2)=wuerfel%(lp2,2):wuerfel%(lp2,2)=wuerfel%(5,2)
1350 NEXT:NEXT:CLS#0
1360 GRAPHICS PEN 3:PEN 3:INK 3,18:cor%=0:TAG:MOVE 504,395
1370 aug=0:FOR lp1=0 TO 4:aug=aug+wuerfel%(lp1,1):NEXT:MOVE 530,395:PRINT aug;:      TAGOFF
1380 MOVE 496,399:DRAW 598,399:DRAW 598,375:DRAW 496,375:DRAW 496,399
1390 ton=478
1400 FOR lp1=0 TO 4:sph=65*8:spv=lp1*60+55:wwt=wuerfel%(lp1,1)
1410 FOR vz=0 TO 30:SOUND 2,ton-vz,1,7:NEXT:ton=ton-vz
1420 INK 2,24:GRAPHICS PEN 2:PEN 2:GOSUB 430
1430 IF wuerfel%(lp1,2)>0 THEN MOVE sph-20,spv+18:PRINT CHR$(5)+"*"
1440 grphz(lp1+1)=spv+20
1450 NEXT
1460 FOR lp1=1 TO 4:IF wuerfel%(lp1,1)<wuerfel%(0,1) GOTO 1540 ELSE NEXT
1470 RESTORE 1500
1480 SPEED INK INT(RND*20)+1,INT(RND*20)+1:BORDER INT(RND*27),INT(RND*27):INK 0,INT(RND*27),INT(RND*27):INK 1,INT(RND*27),INT(RND*27)
1490 READ ton,tim:IF ton=0 AND tim=0 GOTO 1510 ELSE SOUND 2,ton,tim,7:SOUND 2,ton,5,0:GOTO 1480
1500 DATA 239,100,179,100,179,50,142,100,142,50,119,150,142,200,0,0
1510 FOR tim=0 TO 2000:NEXT
1520 INK 0,1:INK 1,26:BORDER 2 
1530 RETURN
1540 IF wurf=3 THEN RETURN
1550 FOR lp1=1 TO 4:IF wuerfel%(lp1,1)<wuerfel%(0,1) GOTO 1560 ELSE NEXT
1560 PRINT FNp$(23,5);"... WEITER";
1570 grphz(0)=40
1580 TAG:lp1=5
1590 MOVE 464,grphz(lp1):PRINT CHR$(243);
1600 FOR i=1 TO 300:NEXT:lp2=lp1
1610 GOSUB 180
1620 IF jyw=1 THEN lp1=lp1+1:GOTO 1690
1630 IF jyw=2 THEN GOTO 1640 ELSE GOTO 1650
1640 lp1=lp1-1:GOTO 1690
1650 IF jyw=16 OR jyw=32 THEN 1660 ELSE GOTO 1610
1660 IF lp1=0 THEN MOVE 464,grphz(lp2):PRINT CHR$(32);:GOTO 1710
1670 IF wuerfel%(lp1-1,2)=0 THEN wuerfel%(lp1-1,2)=1:MOVE 500,grphz(lp1):PRINT"*"; ELSE wuerfel%(lp1-1,2)=0:MOVE 500,grphz(lp1):PRINT" ";
1680 GOSUB 180:IF jyw>0 GOTO 1680 ELSE lp1=lp1-1:GOTO 1690
1690 MOVE 464,grphz(lp2):PRINT CHR$(32);:IF lp1<0 THEN lp1=0 ELSE IF lp1>5 THEN lp1=5
1700 SOUND 2,179:GOTO 1590
1710 TAGOFF:z=0:FOR i=0 TO 4:IF wuerfel%(i,2)>0 THEN z=z+1
1720 NEXT:IF z=5 THEN RETURN
1730 PRINT FNp$(23,5);SPACE$(15):PRINT FNp$(1,1);SPACE$(19);:PRINT FNp$(2,1);SPACE$(19);:GOTO 1180
1750 DATA 1-er,2-er,3-er,4-er,5-er,6-er, ,Zw. Summe,Pr[mie, ,1 Paar,2 Paare,3-Pasch,4-Pasch,kl. Stra\e,gr. Stra\e,Full House,Chance,Kniffel, ,Summe Spieler, ,Summe Mannschaft
1760 RESTORE 1750:CLS#1
1770 j=1
1780 FOR i=3 TO 25:READ tx$
1790 IF LEFT$(tx$,1)="."THEN tx$=RIGHT$(tx$,LEN(tx$)-1):PRINT#1,FNp$(i,15);STRING$(anzp*8,".");
1800 IF LEN(tx$)<2 GOTO 1810 ELSE lin(j)=i:j=j+1
1810 PRINT#1,FNp$(i,1);tx$:NEXT
1820 MOVE 230,400:DRAW 230,24
1830 FOR i=1 TO anzsp:MOVE 230+i*64,400:DRAW 230+i*64,24:NEXT
1840 MOVE 0,376:DRAW 230+anzsp*64,376
1850 MOVE 0,264:DRAW 230+anzsp*64,264
1860 MOVE 0,216:DRAW 230+anzsp*64,216
1870 MOVE 0,56:DRAW 230+anzsp*64,56
1880 MOVE 0,24:DRAW 230+anzsp*64,24
1890 RETURN
1910 FOR i=1 TO 18:FOR j=1 TO anzsp:IF lst(am,j,i)=-1 THEN PRINT#1,FNp$(lin(i),12+j*4);SPACE$(3):GOTO 1930
1920 PRINT#1,FNp$ (lin(i),12+j*4);USING "###";lst(am,j,i);
1930 NEXT:NEXT
1940 PRINT#1,FNp$(lin(i),18);USING "#####";suman(am);
1950 RETURN
1970 FOR i=1 TO 4:IF wuerfel%(0,1)>wuerfel%(i,1) GOTO 2070
1980 NEXT:jm=17:IF lst(am,as,17)=-1 THEN aug=50:lst(am,as,17)=aug:GOTO 2000
1990 IF lst(am,as,17)=0 GOTO 2010 ELSE aug=100:lst(am,as,17)=lst(am,as,17)+aug
2000 PRINT#1,FNp$(21,12+as*4);USING "###";lst(am,as,17);:j=as:GOTO 2710
2010 FOR i=1 TO anzsp:IF lst(am,as,17)>0 THEN aug=100:GOTO 2040 ELSE NEXT
2020 FOR i=1 TO anzsp:IF lst(am,i,17)=-1 THEN aug=51:GOTO 2040 ELSE NEXT
2030 GOTO 2070
2040 lst(am,i,17)=lst(am,i,17)+aug:PRINT#1,FNp$(21,7+i*8);USING "#######";lst(am,i,17);:IF aug=51 THEN aug=50
2050 j=i
2060 GOTO 2710
2070 i=1:j=0:r=-1:IF wurf<3 THEN cor%=1 ELSE cor%=0
2080 FOR pr=1 TO anzsp:IF lst(am,pr,i)=-1 GOTO 2100 ELSE NEXT:IF i=1 OR i=17 THEN r=-r
2090 i=i+r:GOTO 2080
2100 im=i:jm=j:PRINT#1,FNp$(lin(i),13);CHR$(243);
2110 FOR k=1 TO 200:NEXT
2120 GOSUB 180:IF jyw=99 THEN PRINT#1,FNp$(lin(im),13);CHR$(32):RETURN ELSE IF jyw=8 GOTO 2200
2130 IF jyw=2 THEN i=i+1:r=1:GOTO 2160
2140 IF jyw=1 THEN i=i-1:r=-1:GOTO 2160
2150 GOTO 2120
2160 PRINT#1,FNp$(lin(im),13);CHR$(32)  
2170 IF i>6 AND i<9 THEN i=i+r:GOTO 2170
2180 IF i<1 THEN i=1 ELSE IF i>17 THEN i=17
2190 GOTO 2080
2200 PRINT#1,FNp$(lin(im),13);CHR$(32):j=1 
2210 IF lst(am,j,i)=-1 GOTO 2230 ELSE j=j+1:IF j>anzsp THEN j=1
2220 GOTO 2210
2230 jm=j:PRINT#1,FNp$(lin(i),12+j*4);CHR$(243);:FOR k=1 TO 100:NEXT
2240 GOSUB 180:IF jyw=99 GOTO 2300 ELSE IF jyw=16 OR jyw=32 GOTO 2250 ELSE GOTO 2260 
2250 IF lst(am,j,i)=-1 GOTO 2330 ELSE SOUND 2,478:GOTO 2270 
2260 GOSUB 180:IF jyw=99 GOTO 2300 ELSE IF jyw=4 GOTO 2270 ELSE GOTO 2280
2270 j=0:PRINT#1,FNp$(lin(i),12+jm*4);CHR$(32);:GOTO 2080   
2280 GOSUB 180:IF jyw=99 GOTO 2300 ELSE IF jyw=8 THEN j=j+1:GOTO 2310
2290 GOTO 2210
2300 PRINT#1,FNp$(lin(i),12+jm*4);CHR$(32);:RETURN
2310 IF j>anzsp THEN j=anzsp
2320 PRINT#1,FNp$(lin(i),12+jm*4);CHR$(32);:GOTO 2210
2330 wurf=3:cor%=0:PRINT#1,FNp$(lin(im),12+jm*4);CHR$(32):aug=0
2340 IF i>6 GOTO 2390 ELSE FOR k=0 TO 4:IF wuerfel%(k,1)=i THEN aug=aug+i
2350 NEXT
2360 lst(am,j,i)=aug:lst(am,j,7)=lst(am,j,7)+aug
2370 IF lst(am,j,7)>62 AND lst(am,j,8)=0 THEN lst(am,j,8)=35:lst(am,j,18)=lst(am,j,18)+35
2380 GOTO 2700
2390 IF i=17 THEN aug=0:lst(am,j,17)=0:GOTO 2700
2400 aug=0:FOR k=0 TO 4:aug=aug+wuerfel%(k,1):NEXT
2410 IF i=16 THEN lst(am,j,16)=aug:GOTO 2700
2420 FOR k=1 TO 6:xx(k)=0:NEXT
2430 FOR k=0 TO 4:yy=wuerfel%(k,1):xx(yy)=xx(yy)+1:NEXT
2440 ON i-8 GOSUB 2460,2480,2510,2530,2550,2600,2640
2450 lst(am,j,i)=aug:GOTO 2700
2460 IF MAX(xx(1),xx(2),xx(3),xx(4),xx(5),xx(6))<2 THEN aug=0
2470 RETURN
2480 yy=0:FOR k=1 TO 6:IF xx(k)>3 GOTO 2500 ELSE IF xx(k)>1 THEN yy=yy+1
2490 NEXT:IF yy<2 THEN aug=0
2500 RETURN
2510 IF MAX(xx(1),xx(2),xx(3),xx(4),xx(5),xx(6))<3 THEN aug=0     
2520 RETURN
2530 IF MAX(xx(1),xx(2),xx(3),xx(4),xx(5),xx(6))<4 THEN aug=0
2540 RETURN
2550 FOR k=1 TO 4:IF xx(k)>0 THEN NEXT:aug=30:GOTO 2590
2560 FOR k=2 TO 5:IF xx(k)>0 THEN NEXT:aug=30:GOTO 2590  
2570 FOR k=3 TO 6:IF xx(k)>0 THEN NEXT:aug=30:GOTO 2590  
2580 aug=0
2590 RETURN
2600 FOR k=1 TO 5:IF xx(k)=1 THEN NEXT:aug=40:GOTO 2630 
2610 FOR k=2 TO 6:IF xx(k)=1 THEN NEXT:aug=40:GOTO 2630 
2620 aug=0
2630 RETURN
2640 IF MAX(xx(1),xx(2),xx(3),xx(4),xx(5),xx(6))=5 GOTO 2680
2650 IF MAX(xx(1),xx(2),xx(3),xx(4),xx(5),xx(6))<>3 THEN aug=0:GOTO 2690
2660 FOR k=1 TO 6:IF xx(k)=3 THEN xx(k)=0 ELSE NEXT
2670 IF MAX(xx(1),xx(2),xx(3),xx(4),xx(5),xx(6))<>2 THEN aug=0:GOTO 2690 
2680 aug=25
2690 RETURN
2700 PRINT#1,FNp$(lin(i),12+j*4);USING "###";lst(am,j,i)
2710 lst(am,j,18)=lst(am,j,18)+aug
2720 GOSUB 2730:RETURN
2730 PRINT#1,FNp$(10,12+j*4);USING "###";lst(am,j,7) 
2740 PRINT#1,FNp$(11,12+j*4);USING "###";lst(am,j,8) 
2750 PRINT#1,FNp$(23,12+j*4);USING "###";lst(am,j,18)
2760 suman(am)=0:FOR i=1 TO anzsp:suman(am)=suman(am)+lst(am,i,18):NEXT
2770 PRINT#1,FNp$(25,18);USING "#####";suman(am);
2780 RETURN
2800 RESTORE 2820
2810 READ ton,tim:IF ton=0 AND tim=0 THEN RETURN ELSE SOUND 2,ton,tim,7:             SOUND 2,ton*2,12-tim,3:GOTO 2810
2820 DATA 190,10,239,10,142,5,142,5,142,5,0,0
2860 SYMBOL AFTER 256:SYMBOL AFTER 0:SYMBOL 91,204,0,120,12,124,204,118,0:SYMBOL 92,60,102,102,108,102,102,108,224:SYMBOL 93,102,0,60,102,102,102,60,0:SYMBOL 94,102,0,102,102,102,102,62,0:RETURN
4990 '
5000 rem part 1
5010 MODE 1: BORDER 2
5020 SYMBOL 255,102,0,102,102,102,102,62,0:REM ue
5030 WINDOW 1,40,1,25
5040 PAPER 0: CLS
5050 WINDOW 3,38,3,12: PAPER 2:CLS
5060 PEN 3:INK 3,0: LOCATE 12,5: PRINT"K N I F F E L"
5070 MOVE 29,204,1:DRAWR 582,0:DRAWR 0,166:DRAWR -582,0:DRAWR 0,-166
5080 MOVER 2,-2:DRAWR 582,0:DRAWR 0,166
5090 MOVER -580,-168:DRAWR 582,0:DRAWR 0,166
5100 WINDOW 1,40,1,25
5110 PAPER 0:LOCATE 4,15
5120 PEN 1
5130 LOCATE 8,17: PRINT "veb"
5140 LOCATE 10,19:PRINT "mikroelektronik"
5150 LOCATE 24,21:PRINT "m"CHR$(255)"hlhausen"
5160 FOR n=0 TO 26 STEP 2:INK 1,n:FOR i=0 TO 200/20:call &bd19 :NEXT:NEXT:INK 1,24
5170 WINDOW 7,40,22,25:PRINT:PRINT
5180 'RUN"kniffel1.bas"
5190 return
5200 '
*/ });
