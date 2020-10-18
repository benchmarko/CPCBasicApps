/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem connect4 - Connect 4 (Tower: 4 Gewinnt)
2 rem (c) O. Zabel
3 rem
4 rem Modifications:
5 rem
10 '***********************************
20 '*                                 * 
30 '*  T O W E R   fuer Schneider CPC * 
40 '*                                 * 
50 '* Denkspiel fuer 1 oder 2 Spieler *
60 '*                                 *  
70 '*     Copyright O.Zabel           * 
80 '*                                 *  
90 '***********************************   
100 '
110 REM *** Farben festlegen ***
120 '
130 INK 0,0:'Hintergrund schwarz      
140 INK 1,6:'hellrot    
150 INK 2,12:'(normal soll blau)
160 INK 3,26:'weiss
170 BORDER 4
180 MODE 0
190 PEN 1:LOCATE 6,3:PRINT"T O W E R":PEN 2
200 FOR x=50 TO 600 STEP 40:y=300:GOSUB 640:NEXT x
210 LOCATE 2,10:PRINT"1 Spieler/Spieler"
220 LOCATE 2,12:PRINT"2 Spieler/Computer"
230 LOCATE 2,14:PRINT"3 Computer/Computer" 
240 PEN 3:LOCATE 4,18:PRINT"(c) O.Zabel 85" 
245 GOSUB 1720:LOCATE 4,18:PEN 9:PRINT"Waehle Modus !"
250 e$=INKEY$   
260 IF e$="1" THEN modus=1:GOTO 290
270 IF e$="2" THEN modus=2:GOTO 290 
280 IF e$="3" THEN modus=3:GOTO 290 
285 GOTO 250
290 MODE 1:CLS:GOSUB 810
300 LOCATE 3,1:PRINT" T O W E R          (C) O.Zabel"
310 '
320 REM *** Spieler 1 rot ***
330 '
340 LOCATE 10,24:PEN 1:PRINT"Zug von Spieler 1"
350 GOSUB 2320
360 SOUND 1,200,20
370 IF modus=2 OR modus=3 THEN e$="c":GOTO 400
380 e$=INKEY$:IF e$="" THEN 380   
390 e=ASC(e$)-48
400 IF e$="c" THEN GOSUB 1930:GOTO 430
410 IF e<0 OR e>9 THEN 330
420 IF feld(e,5)<>0 THEN 330
430 GOSUB 1040
440 GOSUB 1260:IF rot>2 THEN BORDER 12,6:GOSUB 1720:LOCATE 5,24:PRINT"*** Spieler 1 hat gesiegt ***" ELSE 470
450 e$=INKEY$:IF e$="" THEN 450
460 RUN
470 '
480 REM *** Spieler 2 blau ***
490 '
500 LOCATE 10,24:PEN 2:PRINT"Zug von Spieler 2" 
510 GOSUB 2320  
520 SOUND 1,200,20   
530 IF modus=3 THEN e$="c":GOTO 550
535 e$=INKEY$:IF e$="" THEN 535
540 e=ASC(e$)-48  
550 IF e$="c" THEN GOSUB 1930:GOTO 580
560 IF e<0 OR e>9 THEN 490
570 IF feld(e,5)<>0 THEN 490
580 GOSUB 1150
590 GOSUB 1260:IF blau>2 THEN BORDER 12,6:GOSUB 1720:LOCATE 5,24:PRINT"*** Spieler 2 hat gesiegt ***" ELSE 620
600 e$=INKEY$:IF e$="" THEN 600
610 RUN
620 GOTO 330
630 '
640 REM *** Wuerfel zeichnen ***
650 REM Koordinaten in Variablen x/y
660 '
670 c1=1:c2=2:GOTO 690  
680 c1=2:c2=1
690 MOVE x,y
700 SOUND 1,30,20
710 FOR i=0 TO 24
720 f=c1:IF i=24 THEN f=3
730 DRAWR 0,i,f:DRAWR -i,0:DRAWR 0,-i:DRAWR i,0
740 NEXT i
750 FOR i=2 TO 8   
760 f=c2:IF i=8 THEN f=3  
770 DRAWR i,i,f:DRAWR 0,24:DRAWR -i,-i:DRAWR i,i:DRAWR -24,0:DRAWR -i,-i:DRAWR 24,-24,c1
780 NEXT i
790 RETURN
800 '
810 REM *** Gitter zeichnen ***   
820 '
830 FOR x=16 TO 550 STEP 50
840 MOVE x,40:DRAW x,340,3
850 MOVE x+1,40:DRAW x+1,340
860 MOVE x+2,40:DRAW x+2,340  
870 NEXT x
880 FOR y=40 TO 340 STEP 50
890 MOVE 16,y:DRAW 518,y
900 NEXT y
910 FOR x=16 TO 550 STEP 50
920 MOVE x,340:DRAWR 30,30,3 
930 MOVE x+1,340:DRAWR 30,30,3 
940 NEXT x
950 MOVE 46,370:DRAW 544,370
960 FOR i=0 TO 30
970 MOVE 548-i,368-i:DRAWR 0,-300,2
980 NEXT i
990 TAG:FOR x=44 TO 530 STEP 50
1000 PLOT x,360,1:PRINT USING"#";z;:z=z+1
1010 NEXT x:TAGOFF
1020 RETURN
1030 '
1040 REM *** Spieler 1 setzt Stein ***
1050 REM e=Spalte (0-9)
1060 '
1070 frei=0:FOR y=5 TO 0 STEP -1
1080 IF feld(e,y)<>0 THEN frei=y+1:y=0
1090 NEXT y
1100 x=50+(e*50):y=50+(frei*50)   
1110 GOSUB 640:' roten Stein setzen  
1120 feld(e,frei)=1
1130 RETURN
1140 '
1150 REM *** Spieler 2 setzt Stein ***   
1160 REM e=Spalte (0-9) 
1170 '
1180 frei=0:FOR y=5 TO 0 STEP -1 
1190 IF feld(e,y)<>0 THEN frei=y+1:y=0
1200 NEXT y  
1210 x=50+(e*50):y=50+(frei*50)  
1220 GOSUB 680:' blauen Stein setzen      
1230 feld(e,frei)=2
1240 RETURN     
1250 '
1260 REM *** Feld beurteilen ***
1270 REM e    = x-Position
1280 REM frei = y-Position 
1290 REM ergebnis in :
1300 REM rot  = maximale Reihe
1310 REM blau = maximale Reihe  
1320 '
1330 c=1:GOSUB 1370:m1=rot:m2=rotmax
1340 c=2:GOSUB 1370:blau=rot:blaumax=rotmax:rot=m1:rotmax=m2
1350 RETURN
1360 '
1370 rot=0:rotmax=0
1380 FOR i=e+1 TO 9:'rechts Kontrolle  
1390 IF feld(i,frei)=c THEN rot=rot+1 ELSE i=9
1400 NEXT i:IF rot>2 THEN RETURN
1410 REM
1420 FOR i=e-1 TO 0 STEP -1:'links Kontrolle 
1430 IF feld(i,frei)=c THEN rot=rot+1 ELSE i=0 
1440 NEXT i:IF rot>2 THEN RETURN 
1450 IF rot>rotmax THEN rotmax=rot
1460 rot=0
1470 FOR i=frei-1 TO 0 STEP -1:' unten
1480 IF feld(e,i)=c THEN rot=rot+1 ELSE i=0  
1490 NEXT i:IF rot>2 THEN RETURN    
1500 IF rot>rotmax THEN rotmax=rot   
1510 rot=0
1520 y=frei:FOR i=e+1 TO 9:' rechts oben
1530 y=y+1:IF feld(i,y)=c THEN rot=rot+1 ELSE i=9
1540 NEXT i:IF rot>2 THEN RETURN  
1550 IF rot>rotmax THEN rotmax=rot 
1560 y=frei:FOR i=e-1 TO 0 STEP -1:'links unten
1570 y=y-1:IF y<0 OR y>5 THEN i=0 ELSE IF feld(i,y)=c THEN rot=rot+1 ELSE i=0  
1580 NEXT i:IF rot>2 THEN RETURN  
1590 IF rot>rotmax THEN rotmax=rot  
1600 rot=0   
1610 y=frei:FOR i=e-1 TO 0 STEP -1:'links oben
1620 y=y+1:IF feld(i,y)=c THEN rot=rot+1 ELSE i=0
1630 NEXT i:IF rot>2 THEN RETURN     
1640 IF rot>rotmax THEN rotmax=rot   
1650 REM
1660 y=frei:FOR i=e+1 TO 9:'rechts unten
1670 y=y-1:IF y<0 OR y>5 THEN i=9 ELSE IF feld(i,y)=c THEN rot=rot+1 ELSE i=9
1680 NEXT i:IF rot>2 THEN RETURN 
1690 IF rot>rotmax THEN rotmax=rot 
1700 RETURN
1710 '
1720 REM *** Melodie spielen
1730 '
1740 RESTORE
1750 READ a,b:b=b/2
1760 IF a=-1 OR INKEY$<>"" THEN RETURN
1770 SOUND 1,a,b:SOUND 2,0.5*a,b
1780 SOUND 4,0.25*a,b:GOTO 1750
1790 DATA 478,50,379,50,358,50,319,200,0,5,319,50,478,50,379,50,358,50,319,200,0,5,319,100
1800 DATA 478,50,379,50,358,50,319,100,379,100,478,100,379,100,426,200
1810 DATA 0,5,426,50,379,50,0,5,379,50,426,50,478,150,0,5,478,50
1820 DATA 379,100,319,100,0,5,319,50,358,150,0,5,358,100,379,50,358,50,319,100,379,100
1830 DATA 478,100,426,100,478,200,0,5,478,50,-1,1
1840 '
1850 REM *** freies Feld suchen ***
1860 REM e= Spalte 0-9
1870 '
1880 frei=0:FOR y=5 TO o STEP -1
1890 IF feld(e,y)<>0 THEN frei=y+1:y=0
1900 NEXT y
1910 RETURN
1920 '
1930 REM *** Computer zieht fuer rot ***
1940 '
1950 LOCATE 10,24:PRINT" Computer zieht"
1960 zug=-1:z=-1
1970 FOR wahl=0 TO 9
1980 IF feld(wahl,5)<>0 THEN 2010
1990 e=wahl:GOSUB 1850   
2000 GOSUB 1260:IF blau>2 THEN zug=wahl:wahl=9
2005 IF blau=2 THEN z=wahl
2010 NEXT wahl
2020 IF zug>-1 THEN 2100
2030 rmax=0
2040 FOR wahl=0 TO 9
2050 IF feld(wahl,5)<>0 THEN 2090
2060 e=wahl:GOSUB 1850  
2070 GOSUB 1260:IF rot>rotmax THEN rotmax=rot
2080 IF rotmax>rmax THEN rmax=rotmax:zug=wahl
2090 NEXT wahl
2100 e=zug:IF e<0 THEN IF z>-1 THEN e=z ELSE e=INT(9*RND(1))
2110 RETURN
2120 '
2130 REM *** Computer zieht fuer blau ***
2140 '
2150 LOCATE 10,24:PRINT" Computer zieht" 
2160 zug=-1:z=-1
2170 FOR wahl=0 TO 9    
2180 IF feld(wahl,5)<>0 THEN 2210 
2190 e=wal:GOSUB 1850 
2200 GOSUB 1260:IF rot >2 THEN zug=wahl:wahl=9 
2205 IF rot=2 THEN z=wahl
2210 NEXT wahl   
2220 IF zug>-1 THEN 2300  
2230 bmax=0  
2240 FOR wahl=0 TO 9 
2250 IF feld(wahl,5)<>0 THEN 2290
2260 e=wahl:GOSUB 1850  
2270 GOSUB 1260:IF blau>blaumax THEN blaumax=blau
2280 IF blaumax>bmax THEN bmax=blaumax:zug=wahl
2290 NEXT wahl
2300 e=zug:IF e<0 THEN IF z>-1 THEN e=z ELSE e=INT(9*RND(1))    
2310 RETURN
2320 '
2330 REM *** Unentschieden ***
2340 '
2350 u=0:FOR x=0 TO 9:IF feld(x,5)=0 THEN u=1
2360 NEXT x
2370 IF u=0 THEN LOCATE 2,24:PRINT"------  unentschieden ---------" ELSE RETURN
2380 e$=INKEY$:IF e$="" THEN 2380
2390 RUN
*/ });
