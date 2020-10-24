/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem yahtzee - Yahtzee (Kniffel)
2 rem (c) J. E. Muschik
3 rem
4 rem Modification: put in one file; typo in 2040; skip intro music in 250;
6 rem Bug fixes: xx(3) (=number of 3's) inserted in 6 MAX conditions; 2720: yy=yy+1; 2520: jm; 1320: PRINT#1
7 rem (other version: https://www.cpc-power.com/index.php?page=detail&num=11927 BASIC 1.1, mode 1 version)
8 rem
9 rem Part 1
130 REM ***PROGRAMM-INIT
140 KEY 139,"MODE 2:PAPER 0:PEN 1:INK 0,20:INK 1,0:BORDER 10:LIST"+CHR$(13)
150 MODE 1:SPEED WRITE 1
160 ENV 1,10,-1,10
170 SYMBOL 255,0,0,60,126,126,60,0,0
180 RANDOMIZE TIME
190 DEF FNp$(xx,yy)=CHR$(31)+CHR$(yy)+CHR$(xx)
200 INK 0,1:INK 1,15,24:BORDER 24,15:PRINT FNp$(12,9);"Color Monitor (J/N)";
210 PRINT FNp$(12,31);SPACE$(10);:LOCATE 31,12:LINE INPUT mon$:mon$=UPPER$(mon$)  :IF mon$="Y" or mon$="J" OR mon$="N"THEN MODE 2 ELSE GOTO 210
215 if mon$="J" then mon$="Y"
220 DIM wuerfel%(5,2):WINDOW #0,18,64,9,17
230 if mon$="Y" then ink 0,1:ink 1,15:border 2 else ink 0,0:ink 1,26:border 0: 'INK 0,0:BORDER 0:INK 1,0
240 FOR spv=0 TO 390 STEP 70:FOR sph=0 TO 640 STEP 74:wwt=INT(RND*6)+1
250 if skip=0 then if inkey$="" then GOSUB 490 else skip=1
255 GOSUB 580:NEXT :NEXT:CLS #0
260 if skip=0 then FOR i=1 TO 12 : GOSUB 490:NEXT
270 PRINT FNp$(2,8);"C P C 4 6 4  -  K N I F F E L"
280 PRINT FNp$(4,20);"(c)  by"
290 PRINT FNp$(6,17);"J. E. Muschik"
300 PRINT FNp$(8,19);"Germering"
310 IF mon$="Y" THEN INK 0,1:INK 1,15:BORDER 2 ELSE INK 0,0:INK 1,26:BORDER 0
330 CLEAR:goto 740: 'CHAIN MERGE"!KNIFFEL2",740
340 REM *** joyst-input
350 call &bd19: IF cor%=0 THEN 360 ELSE IF INKEY(79)>-1 THEN jyw=99:GOTO 480
360 IF maus(am)=0 THEN 420
370 wl=maus(am)-1
380 jyw=JOY(wl)
390 IF jyw=32 THEN jyw=16
400 IF jyw=1 OR jyw=2 OR jyw=4 OR jyw=8 OR jyw=16 THEN 480 ELSE jyw=0
410 GOTO 480
420 jyw=0
430 IF INKEY(0)>-1 THEN jyw=1:GOTO 480
440 IF INKEY(1)>-1 THEN jyw=8:GOTO 480 
450 IF INKEY(2)>-1 THEN jyw=2:GOTO 480 
460 IF INKEY(8)>-1 THEN jyw=4:GOTO 480 
470 IF INKEY(9)>-1 THEN jyw=16:GOTO 480 
480 RETURN
490 REM *** titelmelodie
500 READ ks,ton,tim
510 IF ton=0 THEN RESTORE 560:GOTO 500  
520 SOUND ks,ton,tim,15,1
530 SOUND ks,ton*2,5,0
540 RETURN
550 DATA 2,239,25,2,190,25,2,179,25
560 DATA 2,159,100,2,239,25,2,190,25,2,179,25,2,159,100,2,239,25,2,190,25,2,179,25,2,159,50,2,190,50,2,239,50,2,190,50,2,213,100
570 DATA 2,190,25,2,190,25,2,213,25,2,239,75,2,239,25,2,190,50,2,159,25,2,159,25,2,159,25,2,179,100,2,142,25,2,142,25,2,159,75,2,190,25,2,239,50,2,213,50,2,239,125,2,239,25,2,190,25,2,179,25,0,0,0
580 REM ***up wuerfel zeichnen- params: sph/spv=startpunkt hor/vert                  wwt=wuerfelwert
590 MOVE sph,spv+40:DRAW sph,spv:DRAW sph+40,spv
600 DRAW sph+40,spv+40:DRAW sph,spv+40
610 FOR loop=0 TO 3 STEP 0.5:MOVE sph+loop*4,spv+(10+loop)*4
620 DRAW sph+(10+loop)*4,spv+(10+loop)*4 
630 DRAW sph+(10+loop)*4,spv+loop*4
640 NEXT
650 TAG
660 IF wwt=1 OR wwt=3 OR wwt=5 THEN MOVE sph+16,spv+28:PRINT CHR$(255); 
670 IF wwt>1 THEN MOVE sph+6,spv+20:PRINT CHR$(255);:MOVE sph+26,spv+34:                 PRINT CHR$(255);
680 IF wwt>3 THEN MOVE sph+26,spv+20:PRINT CHR$(255);:MOVE sph+6,spv+34:                 PRINT CHR$(255);
690 IF wwt=6 THEN MOVE sph+16,spv+20:PRINT CHR$(255);:MOVE sph+16,spv+34:                 PRINT CHR$(255);   
700 TAGOFF
710 RETURN
735 rem
736 rem Part 2
740 REM *** main program
750 PEN #1,1:PAPER #1,0
760 DEF FNp$(xx,yy)=CHR$(31)+CHR$(yy)+CHR$(xx)
770 CLS #0:LOCATE 13,8:SOUND 2,12,7:INPUT "Anzahl der Mannschaften? ",anzman 
780 PRINT:PRINT:PRINT:LOCATE 13,8:SOUND 2,127:INPUT" Spieler je Mannschaft? ",anzsp
790 IF anzman<2 OR anzman>6 OR anzsp>5 THEN SOUND 2,568,50:GOTO 770  
800 DIM spnam$(anzman,anzsp):DIM lin(19)
810 DIM lst(anzman,anzsp,18):DIM suman(anzman)
820 FOR i=1 TO anzman:geld(i)=0:FOR j=1 TO anzsp:FOR k=1 TO 18:IF (k>0 AND k<7)     OR (k>8 AND k<18) THEN lst(i,j,k)=-1 ELSE lst(i,j,k)=0
830 NEXT:NEXT:NEXT
840 FOR i=1 TO anzman:CLS#0:PRINT FNp$(1,9);"Steuerung fuer Mannschaft"i  
850 PRINT FNp$(4,9);"0 --> Cursor-Steuertasten"
860 PRINT FNp$(5,9);"1 --> Joystik 1"
870 PRINT FNp$(6,9);"2 --> Joystik 2" 
880 LOCATE 9,8:INPUT maus(i):IF maus(i)<0 OR maus(i)>2 THEN 880
890 CLS#0:FOR j=1 TO anzsp
900 LOCATE 1,8:PRINT"Name Spieler"j"in Mannschaft"i"? ";
910 SOUND 2,127:INPUT "",spnam$(i,j):IF LEN(spnam$(i,j))<2 THEN SOUND 2,568,50:     GOTO 900
920 IF LEN(spnam$(i,j))>7 THEN spnam$(i,j)=LEFT$(spnam$(i,j),7)
930 spnam$(i,j)=UPPER$(LEFT$(spnam$(i,j),1))+LOWER$(RIGHT$(spnam$(i,j),LEN(spnam$(i,j))-1))
940 PRINT:PRINT:PRINT:NEXT:NEXT
950 CLG
960 WINDOW #0,60,80,1,25:WINDOW #1,1,58,1,25:WINDOW #2,59,59,1,25
970 GOSUB 1990
980 FOR am=1 TO anzman:FOR as=1 TO anzsp:FOR i=1 TO 17:IF lst(am,as,i)=-1 THEN      990 ELSE NEXT:NEXT:GOTO 1180
990 PRINT#1,FNp$(1,1);"Mannschaft";am:GOSUB 2150:FOR i=1 TO anzsp:PRINT#1,FNp$(1,7+i*8);    SPACE$(7):PRINT#1,FNp$(1,7+i*8);spnam$(am,i):NEXT:FOR as=1 TO anzsp
1000 PEN #1,0:PAPER #1,1:PRINT#1,FNp$(1,7+as*8);spnam$(am,as):PEN #1,1:PAPER #1,0
1010 CLS #0:FOR i=0 TO 4: wuerfel%(i,2)=0:NEXT
1020 wurf=0
1030 GOSUB 1410:GOSUB 3040
1040 GOSUB 2210:IF jyw=99 AND wurf<3 THEN 1030
1050 GOSUB 3040:GOSUB 340:IF jyw>0 THEN 1050
1060 IF jm=17 AND aug>0 THEN 1150
1070 PRINT#1,FNp$(25,1);SPACE$(25);:PRINT#1,FNp$(25,1);"Eintrag bestaetigt ?";
1080 PRINT#1,FNp$(25,21);CHR$(242):cor%=1
1090 GOSUB 340:IF jyw=16 OR jyw=32 OR jyw=99 THEN 1100 ELSE GOTO 1090
1100 PRINT#1,FNp$(25,1);SPACE$(22);:PRINT#1,FNp$(25,1);"Summe Mannschaft";:PRINT#1,FNp$(25,18);USING"####";suman(am)
1110 cor%=0:IF JYW<99 THEN 1150 ELSE LST(AM,J,IM)=-1:PRINT#1,FNp$(LIN(IM),7+J*8);SPACE$(7);:LST(AM,J,18)=LST(AM,J,18)-AUG
1120 IF IM<7 THEN LST(AM,J,7)=LST(AM,J,7)-AUG
1130 IF LST(AM,J,7)<63 THEN LST(AM,J,8)=0
1140 GOSUB 2980:GOTO 1040
1150 SOUND 2,190,50,7:PRINT#1,FNp$(1,7+AS*8);SPNAM$(AM,AS)
1160 FOR CT=1 TO ANZSP:FOR I=1 TO 17:IF LST(AM,J,I)=-1 THEN 1170 ELSE NEXT:NEXT:     GOTO 1180
1170 NEXT
1180 NEXT
1190 FOR AM=1 TO ANZMAN:FOR AS=1 TO ANZSP:FOR I=1 TO 17:IF LST(AM,AS,I)=-1 THEN      980 ELSE NEXT:NEXT:NEXT
1200 REM *** SPIELENDE-ROUTINE
1210 CLG:score=0:FOR i=1 TO anzman:IF suman(i)>score THEN score=suman(i)
1220 NEXT:WINDOW #0,1,80,1,10:WINDOW#1,1,80,12,21:WINDOW #2,1,80,24,24
1230 PRINT FNp$(2,31);"Mannschaftswertung":PRINT FNp$(2,31);"=================="
1240 FOR i=1 TO anzman:PRINT FNp$(3+i,1);"Mannschaft"i"(";
1250 FOR j=1 TO anzsp:PRINT spnam$(i,j);",";:NEXT:PRINT CHR$(8);")";
1260 PRINT FNp$(3+i,60);USING"####";suman(i);:PRINT FNp$(3+i,65);"Punkte";
1270 ga=(score-suman(i))*0.2:IF ga>INT(ga) THEN ga=INT(ga+1)
1280 geld(i)=geld(i)+ga:PRINT FNp$(3+i,72);USING"##.##";ga/10;:PRINT FNp$(3+i,78);"DM";
1290 NEXT
1300 PRINT#1,FNp$(1,33);"Gesamtwertung":PRINT#1,FNp$(2,33);"============="
1310 FOR i=1 TO anzman:PRINT#1,FNp$(3+i,1);"Mannschaft"i"(";
1320 FOR j=1 TO anzsp:PRINT#1,spnam$(i,j);",";:NEXT:PRINT#1,CHR$(8);")"; 
1330 PRINT#1,FNp$(3+i,66);"zalt";:PRINT#1,FNp$(3+i,72);USING"##.##";geld(i)/10;:PRINT#1,FNp$(3+i,78);"DM";
1340 NEXT
1350 IF LEN (INKEY$)>0 THEN 1350
1360 INPUT #2,"Neues Spiel (Y/N)";n$:n$=UPPER$(n$)
1370 IF n$="N" THEN 1380 ELSE IF n$="Y" THEN 1390 ELSE PRINT#2,FNp$(1,1);SPACE$(80):GOTO 1360
1380 WINDOW SWAP 0,1:END
1390 FOR i=1 TO anzman:suman(i)=0:FOR j=1 TO anzsp:FOR k=1 TO 18:IF (k>0 AND k<7)    OR (k>8 AND k<18) THEN lst(i,j,k)=-1 ELSE lst(i,j,k)=0
1400 NEXT:NEXT:NEXT:GOTO 950
1410 REM *** UP WUERFELN
1420 IF jyw=99 THEN wurf=wurf+1:PRINT FNp$(1,3);SPACE$(15);:PRINT FNp$(2,3);SPACE$(15);:GOTO 1470
1430 wurf=wurf+1
1440 GOSUB 340:IF jyw>0 THEN 1440
1450 cl=5:GOSUB 3040
1460 call &bd19:IF wurf=1 THEN 1480 ELSE cor%=1
1470 IF jyw<99 THEN 1480 ELSE PRINT FNp$(1,5);"Korrektur...";:FOR vz=0 TO 1000/10:call &bd19:NEXT:      wurf=wurf-1:PRINT FNp$(1,5);SPACE$(12);:GOTO 1610
1480 PRINT FNp$(1,cl);CHR$(241);:cl=cl+1:IF cl<16 THEN 1460
1490 PRINT FNp$(1,5);SPACE$(11);:GOSUB 340:IF jyw=16 THEN 1510 ELSE cl=5:GOTO 1460
1500 GOTO 1460
1510 PRINT FNp$(1,5);SPACE$(10);
1520 FOR lp1=0 TO 4:IF wuerfel%(lp1,2)=0 THEN wuerfel%(lp1,1)=INT(RND*6)+1  
1530 NEXT
1540 FOR lp1=0 TO 4:zuf=INT(RND*1000)+1:IF wuerfel%(lp1,2)=0 THEN wuerfel%(lp1,1)=INT(RND(zuf)*6)+1
1550 GOSUB 340:IF jyw<16 THEN 1580
1560 SOUND 2,INT(RND*200)+200,2,INT(RND*5)+2
1570 NEXT:GOTO 1540
1580 FOR lp1=0 TO 3 :FOR lp2=lp1 TO 4:IF wuerfel%(lp2,1)<=wuerfel%(lp1,1) THEN 1600
1590 wuerfel%(5,1)=wuerfel%(lp1,1):wuerfel%(lp1,1)=wuerfel%(lp2,1):wuerfel%(lp2,1)=wuerfel%(5,1):wuerfel%(5,2)=wuerfel%(lp1,2):wuerfel%(lp1,2)=wuerfel%(lp2,2):wuerfel%(lp2,2)=wuerfel%(5,2)
1600 NEXT:NEXT:CLS#0
1610 cor%=0:TAG:MOVE 504,395:PRINT STRING$(wurf,CHR$(228));
1620 aug=0:FOR lp1=0 TO 4:aug=aug+wuerfel%(lp1,1):NEXT:MOVE 570,395:PRINT aug;:           TAGOFF
1630 MOVE 496,399:DRAW 598,399:DRAW 598,380:DRAW 496,380:DRAW 496,399
1640 ton=478
1650 FOR lp1=0 TO 4:sph=65*8:spv=lp1*60+70:wwt=wuerfel%(lp1,1)
1660 GOSUB 580 
1670 FOR vz=0 TO 30:SOUND 2,ton-vz,1,7:NEXT:ton=ton-vz  
1680 IF wuerfel%(lp1,2)>0 THEN MOVE sph-20,spv+18:PRINT CHR$(5)+"*"
1690 grphz(lp1+1)=spv+20
1700 NEXT
1710 FOR lp1=1 TO 4:IF wuerfel%(lp1,1)<wuerfel%(0,1) THEN 1790 ELSE NEXT
1720 RESTORE 1750
1730 SPEED INK INT(RND*20)+1,INT(RND*20)+1:BORDER INT(RND*27),INT(RND*27):INK 0,INT(RND*27),INT(RND*27):INK 1,INT(RND*27),INT(RND*27)
1740 READ ton,tim:IF ton=0 AND tim=0 THEN 1760 ELSE SOUND 2,ton,tim,7:SOUND 2,ton,5,0:GOTO 1730
1750 DATA 239,100,179,100,179,50,142,100,142,50,119,150,142,200,0,0
1760 FOR tim=0 TO 2000/20:call &bd19:NEXT
1770 IF mon$="Y" THEN INK 0,1:INK 1,15 :BORDER 2 ELSE INK 0,0:INK 1,26:BORDER 0
1780 RETURN
1790 IF wurf=3 THEN RETURN
1800 FOR lp1=1 TO 4:IF wuerfel%(lp1,1)<wuerfel%(0,1) THEN 1810 ELSE NEXT
1810 PRINT FNp$(23,5);"...W E I T E R";
1820 GRPHZ(0)=40 
1830 TAG:lp1=5
1840 MOVE 464,grphz(lp1):PRINT CHR$(243);  
1850 FOR i=1 TO 300/30:call &bd19:NEXT:lp2=lp1
1860 GOSUB 340
1870 IF jyw=1 THEN lp1=lp1+1:GOTO 1940
1880 IF jyw=2 THEN 1890 ELSE GOTO 1900
1890 lp1=lp1-1:GOTO 1940
1900 IF jyw=16 OR jyw=32 THEN 1910 ELSE GOTO 1860
1910 IF lp1=0 THEN MOVE 464,grphz(lp2):PRINT CHR$(32);:GOTO 1960    
1920 IF wuerfel%(lp1-1,2)=0 THEN wuerfel%(lp1-1,2)=1:MOVE 500,grphz(lp1):      PRINT"*"; ELSE wuerfel%(lp1-1,2)=0 :MOVE 500,grphz(lp1):PRINT" ";     
1930 GOSUB 340:IF jyw>0 THEN 1930 ELSE lp1=lp1-1:GOTO 1940
1940 MOVE 464,grphz(lp2):PRINT CHR$(32);:IF lp1<0 THEN lp1=0 ELSE IF lp1>5 THEN          lp1=5    
1950 SOUND 2,179:GOTO 1840
1960 TAGOFF:z=0:FOR i=0 TO 4:IF wuerfel%(i,2)>0 THEN z=z+1
1970 NEXT:IF z=5 THEN RETURN
1980 PRINT FNp$(23,5);SPACE$(15):PRINT FNp$(1,1);SPACE$(19);:PRINT FNp$(2,1);SPACE$(19);:GOTO 1430
1990 REM *** up formular
2000 DATA 1-er,2-er,3-er,4-er,5-er,6-er, ,Zw. Summe,Praemie, ,1 Paar,2 Paare,3-Pasch,4-Pasch,kl. Strasse,gr. Strasse,Full House,Chance,Kniffel, , Summe Spieler, ,Summe Mannschaft
2010 RESTORE 2000:CLS#1
2020 j=1
2030 FOR i=3 TO 25:READ tx$
2040 IF LEFT$(tx$,1)="." THEN tx$=RIGHT$(tx$,LEN(tx$)-1):PRINT#1,FNp$(i,15);STRING$(anzsp*8,".");
2050 IF LEN (tx$)<2 THEN 2060 ELSE lin(j)=i:j=j+1
2060 PRINT#1,FNp$(i,1);tx$:NEXT
2070 MOVE 110,400:DRAW 110,24
2080 FOR i=1 TO anzsp:MOVE 110+i*64,400:DRAW 110+i*64,24:NEXT
2090 MOVE 0,376:DRAW 110+anzsp*64,376
2100 MOVE 0,264:DRAW 110+anzsp*64,264
2110 MOVE 0,216:DRAW 110+anzsp*64,216
2120 MOVE 0,56:DRAW 110+anzsp*64,56
2130 MOVE 0,24:DRAW 110+anzsp*64,24
2140 RETURN
2150 REM *** rem list-werte
2160 FOR i=1 TO 18:FOR j=1 TO anzsp:IF lst(am,j,i)=-1 THEN PRINT#1,FNp$(lin(i),7+j*8);SPACE$(7);:GOTO 2180
2170 PRINT#1,FNp$(lin(i),7+j*8);USING"#######";lst(am,j,i);    
2180 NEXT:NEXT
2190 PRINT#1,FNp$(lin(i),18);USING"####";suman(am);
2200 RETURN
2210 REM *** wuerfel-werte eintragen
2220 FOR i=1 TO 4:IF wuerfel%(0,1)>wuerfel%(i,1) THEN 2320
2230 NEXT:jm=17:IF lst(am,as,17)=-1 THEN aug=50:lst(am,as,17)=aug:GOTO 2250
2240 IF lst(am,as,17)=0 THEN 2260 ELSE aug=100:lst(am,as,17)=lst(am,as,17)+aug
2250 PRINT#1,FNp$(21,7+as*8);USING"#######";lst(am,as,17);:j=as:GOTO 2960
2260 FOR i=1 TO anzsp:IF lst(am,i,17)>0 THEN aug=100:GOTO 2290 ELSE NEXT 
2270 FOR i=1 TO anzsp:IF lst(am,1,17)=-1 THEN aug=51::GOTO 2290 ELSE NEXT   
2280 GOTO 2320
2290 lst(am,i,17)=lst(am,i,17)+aug :PRINT #1,FNp$(21,7+i*8);USING"#######";lst(am,i,17);:IF aug=51 THEN aug=50
2300 j=i
2310 GOTO 2960
2320 i=1:j=0:r=-1:IF wurf<3 THEN cor%=1 ELSE cor%=0
2330 FOR pr=1 TO anzsp:IF lst(am,pr,i)=-1 THEN 2350 ELSE NEXT:IF i=1 OR i=17 THEN r=-r
2340 i=i+r:GOTO 2330
2350 im=i:jm=j:PRINT#1,FNp$(lin(i),13);CHR$(243);
2360 FOR k=1 TO 200/20:call &bd19:NEXT
2370 GOSUB 340:IF jyw=99 THEN PRINT#1,FNp$(lin(im),13);CHR$(32):RETURN ELSE IF jyw=8 THEN 2450
2380 IF jyw=2 THEN i=i+1:r=1:GOTO 2410
2390 IF jyw=1 THEN i=i-1:r=-1:GOTO 2410  
2400 GOTO 2370
2410 PRINT#1,FNp$(lin(im),13);CHR$(32)
2420 IF i>6 AND i<9 THEN i=i+r:GOTO 2420
2430 IF i<1 THEN i=1 ELSE IF i>17 THEN i=17
2440 GOTO 2330
2450 PRINT#1,FNp$(lin(im),13);CHR$(32):j=1
2460 IF lst(am,j,i)=-1 THEN 2480 ELSE j=j+1:IF j>anzsp THEN j=1
2470 GOTO 2460
2480 jm=j:PRINT#1,FNp$(lin(i),7+j*8);CHR$(243);:FOR k=1 TO 300/20:call &bd19:NEXT
2490 GOSUB 340:IF jyw=99 THEN 2550 ELSE IF jyw=16 OR jyw=32 THEN 2500 ELSE GOTO 2510
2500 IF lst(am,j,i)=-1 THEN 2580 ELSE SOUND 2,478:GOTO 2520
2510 GOSUB 340:IF jyw=99 THEN 2550 ELSE IF jyw=4 THEN 2520 ELSE GOTO 2530
2520 j=0:PRINT#1,FNp$(lin(i),7+jm*8);CHR$(32);:GOTO 2330
2530 GOSUB 340:IF jyw=99 THEN 2550 ELSE IF jyw=8 THEN j=j+1:GOTO 2560
2540 GOTO 2460
2550 PRINT#1,FNp$(lin(i),7+jm*8);CHR$(32);:RETURN
2560 IF j>anzsp THEN j=anzsp
2570 PRINT#1,FNp$(lin(i),7+jm*8);CHR$(32);:GOTO 2460
2580 wurf=3:cor%=0:PRINT#1,FNp$(lin(im),7+jm*8);CHR$(32):aug=0
2590 IF i>6 THEN 2640 ELSE FOR k=0 TO 4:IF wuerfel%(k,1)=i THEN aug=aug+i
2600 NEXT
2610 lst(am,j,i)=aug:lst(am,j,7)=lst(am,j,7)+aug
2620 IF lst(am,j,7)>62 AND lst(am,j,8)=0 THEN lst(am,j,8)=35:lst(am,j,18)=lst(am,j,18)+35
2630 GOTO 2950
2640 IF i=17 THEN aug=0:lst(am,j,17)=0:GOTO 2950
2650 aug=0:FOR k=0 TO 4:aug=aug+wuerfel%(k,1):NEXT
2660 IF i=16 THEN lst(am,j,16)=aug:GOTO 2950  
2670 FOR k=1 TO 6:xx(k)=0:NEXT
2680 FOR k=0 TO 4:yy=wuerfel%(k,1):xx(YY)=xx(YY)+1:NEXT
2690 ON i-8 GOSUB 2710,2730,2760,2780,2800,2850,2890
2700 lst(am,j,i)=aug:GOTO 2950
2710 IF MAX(xx(1),xx(2),xx(3),xx(4),xx(5),xx(6))<2 THEN aug=0
2720 RETURN
2730 yy=0:FOR k=1 TO 6:IF xx(k)>3 THEN 2750 ELSE IF xx(k)>1 THEN yy=yy+1
2740 NEXT:IF yy<2 THEN aug=0
2750 RETURN
2760 IF MAX(xx(1),xx(2),xx(3),xx(4),xx(5),xx(6))<3 THEN aug=0
2770 RETURN
2780 IF MAX(xx(1),xx(2),xx(3),xx(4),xx(5),xx(6))<4 THEN aug=0 
2790 RETURN
2800 FOR k=1 TO 4:IF xx(k)>0 THEN NEXT:aug=30:GOTO 2840
2810 FOR k=2 TO 5:IF xx(k)>0 THEN NEXT:aug=30:GOTO 2840  
2820 FOR k=3 TO 6:IF xx(k)>0 THEN NEXT:aug=30:GOTO 2840 
2830 aug=0
2840 RETURN
2850 FOR k=1 TO 5:IF xx(k)=1 THEN NEXT:aug=40:GOTO 2880
2860 FOR k=2 TO 6:IF xx(k)=1 THEN NEXT:aug=40:GOTO 2880   
2870 aug=0
2880 RETURN
2890 IF MAX(xx(1),xx(2),xx(3),xx(4),xx(5),xx(6))=5 THEN 2930
2900 IF MAX(xx(1),xx(2),xx(3),xx(4),xx(5),xx(6))<>3  THEN aug=0:GOTO 2940
2910 FOR k=1 TO 6:IF xx(k)=3 THEN xx(k)=0 ELSE NEXT
2920 IF MAX(xx(1),xx(2),xx(3),xx(4),xx(5),xx(6))<>2  THEN aug=0:GOTO 2940  
2930 aug=25
2940 RETURN
2950 PRINT#1,FNp$(lin(i),7+j*8);USING"#######";lst(am,j,i)
2960 lst(am,j,18)=lst(am,j,18)+aug
2970 GOSUB 2980:RETURN
2980 PRINT#1,FNp$(10,7+j*8);USING"#######";lst(am,j,7)
2990 PRINT#1,FNp$(11,7+j*8);USING"#######";lst(am,j,8) 
3000 PRINT#1,FNp$(23,7+j*8);USING"#######";lst(am,j,18) 
3010 suman(am)=0:FOR i=1 TO anzsp:suman(am)=suman(am)+lst(am,i,18):NEXT
3020 PRINT#1,FNp$(25,18);USING"####";suman(am);
3030 RETURN
3040 REM *** accept-sound
3050 RESTORE 3070
3060 READ ton,tim:IF ton=0 AND tim=0 THEN RETURN ELSE SOUND 2,ton,tim,7:             SOUND 2,ton*2,12-tim,3:GOTO 3060 
3070 DATA 190,10,239,10,142,5,142,5,142,5,0,0
*/ });
