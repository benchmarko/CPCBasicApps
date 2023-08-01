/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem helicop - Helicopter
2 rem '
10 '    ****************************************
20 '    **    Copyright by                    **
30 '    **             Thomas Barndt          **
40 '    **             Mutzer Heide 45        **
50 '    **             5060 Berg.Gladbach 2   ** 
60 '    ****************************************
70 '
80 SYMBOL AFTER 199
90 GOSUB 1530:GOSUB 1430  
100 ENV 1,15,8,15,1,1,0
110 MODE 1
120 INK 0,0:INK 1,26:INK 2,17:INK 3,22
130 PEN 1:BORDER 0:PAPER 0  
140 LOCATE 10,12:PRINT"H E L I C O P T E R"
150 LOCATE 20,15:PRINT"by THBCS"
160 PEN 3
170 LOCATE 1,23:PRINT CHR$(164);" 4/85"
180 LOCATE 15,10:PRINT"N.Y.City"
190 FOR i=0 TO 2000:NEXT 
200 CLS
210 FOR i=1 TO 24
220   READ inst$
230   PRINT inst$
240 NEXT
250 WHILE INKEY$<>" ":WEND
260 CLS
270 LOCATE 3,5:PRINT"Schwierigkeitsstufe        Zeit"
280 LOCATE 3,9:PRINT"            1             11 sec"  
290 LOCATE 3,11:PRINT"            2              9 sec"
300 LOCATE 3,13:PRINT"            3              7 sec"
310 PEN 1
320 LOCATE 13,23:PRINT"Ihre Wahl ?"
330 '
340 '
350 '   *** Variablen initialisieren ***
360 '
370 DEFINT a-g,i-z 
380 DEFSTR h
390 WHILE htest$>"3" OR htest$<"1":htest$=INKEY$:WEND 
400 ON VAL(htest$) GOTO 410,420,430
410 zeit=550:GOTO 440 
420 zeit=450:GOTO 440 
430 zeit=350
440 CLS
450 '
460 DIM bild(39,25)
470 anzscreen=4
480 maxhub=3
490 FOR screen=0 TO anzscreen
500    FOR i=0 TO 7
510      READ li(i,screen)
520      READ re(i,screen)
530      READ ob(i,screen)
540      READ un(i,screen)
550    NEXT i
560 NEXT screen
570 FOR i=0 TO anzscreen
580    READ x(i),y(i)
590 NEXT
600 FOR i=0 TO anzscreen
610    READ xm(i),ym(i)
620 NEXT
630 FOR i=0 TO anzscreen
640    READ anz(i)
650 NEXT
660 screen=0:anzhub=0:konto=0
670 h$=hub$(2)
680 htex$="SCREEN"
690 '
700 '        *** Screen aufbauen *** 
710 '
720 DI
730 IF screen>anzscreen GOTO 2660
740 ERASE bild
750 DIM bild(39,25)
760 FOR i=0 TO 34 
770   bild(i,1)=-1
780   bild(i,2)=-1
790 NEXT
800 FOR j=0 TO 25
810   bild(0,j)=-1
820   bild(34,j)=-1
830 NEXT 
840 CLS
850 '
860 '        Ausgabe der Informationen
870 PEN 3
880 LOCATE 1,2:PRINT STRING$(40,CHR$(227))
890 PEN 1
900 LOCATE 2,1:PRINT CHR$(250);gerettet
910 LOCATE 8,1:PRINT hub$(2);anzhub+1
920 LOCATE 15,1:PRINT"Money ";konto
930 LOCATE 29,1:PRINT"Minimum";anz(screen)
940 FOR i=2 TO 12 STEP 2
950   LOCATE 40,i+4
960   PRINT MID$(htex$,i/2,1)
970   LOCATE 40,i+5
980   PRINT " "
990 NEXT 
1000 LOCATE 40,19:PRINT USING"#";screen+1
1010 '
1020 '            Haeuser aufbauen
1030 FOR z=0 TO 7
1040    IF z>3 THEN PEN 3:ELSE PEN 2
1050    links=li(z,screen) 
1060    rechts=re(z,screen)
1070    oben=ob(z,screen)  
1080    unten=un(z,screen)
1090    GOSUB 2560  
1100 NEXT z
1110 BORDER 10
1120 FOR i=1 TO 34
1130   bild(i,25)=0
1140 NEXT
1150 PEN 1
1160 x=x(screen):y=y(screen)
1170 GOSUB 1930
1180 EI
1190 '
1200 '        ***************************
1210 '        ****   HAUPTPROGRAMM   ****
1220 '        ***************************
1230 '
1240 LOCATE x,y:PRINT h$
1250 x1=x:y1=y
1260 jo=JOY(0)
1270 v=(1 AND jo=2)-(1 AND jo=1)+(1 AND jo=6)-(1 AND jo=5)+(1 AND jo=10)-(1 AND jo=9)
1280 w=(1 AND jo=8)-(1 AND jo=4)+(1 AND jo=9)-(1 AND jo=5)+(1 AND jo=10)-(1 AND jo=6)
1290 hub$(1)=h$
1300 h$=hub$(w+1)
1310 y=y+v
1320 x=x+w
1330 IF y>24 THEN y=24
1340 SOUND 1,700+v*300,8,0,1,,1 
1350 IF bild(x,y) OR bild(x+1,y) OR bild(x+2,y) OR bild(x,y+1) OR bild(x+1,y+1) OR bild(x+2,y+1) THEN GOTO 2300
1360 IF jo=16 THEN 2110
1370 LOCATE x1,y1:PRINT hub$
1380 GOTO 1240
1390 '
1400 '
1410 '     ****  HUBSCHRAUBER ZUSAMMENSETZEN  ****
1420 '
1430 ht$=CHR$(10)+STRING$(3,CHR$(8))
1440 hub$=STRING$(3,CHR$(32))+ht$+STRING$(3,CHR$(32)) 
1450 hub$(2)=CHR$(200)+CHR$(201)+CHR$(202)+ht$+CHR$(203)+CHR$(204)+CHR$(205)
1460 hub$(0)=CHR$(207)+CHR$(208)+CHR$(209)+ht$+CHR$(210)+CHR$(211)+CHR$(212)
1470 '
1480 '     *** EXPLOSION ZUSAMMENSETZEN ***
1490 '
1500 hx$(0)=CHR$(213)+CHR$(214)+CHR$(215)+ht$+CHR$(216)+CHR$(217)+CHR$(218)
1510 hx$(1)=CHR$(219)+CHR$(220)+CHR$(221)+ht$+CHR$(222)+CHR$(223)+CHR$(224)
1520 RETURN
1530 '
1540 '
1550 '    ****   SYMBOLE DEFINIEREN   ****
1560 '
1570 '    HUBSCHRAUBER RECHTS
1580  SYMBOL 200,1,0,0,192,160,144,143,128
1590  SYMBOL 201,255,1,3,12,48,192,0,0     
1600  SYMBOL 202,255,0,224,88,68,34,18,13
1610  SYMBOL 203,127,0,0,0,0,1,0,0     
1620  SYMBOL 204,0,128,127,16,16,255,0,0
1630  SYMBOL 205,1,6,248,32,33,254,0,0
1640 '
1650 '    HAUS 
1660  SYMBOL 206,255,255,195,195,195,195,255,255
1670 '
1680 '    HUBSCHRAUBER LINKS 
1690  SYMBOL 207,255,0,7,26,34,68,72,176
1700  SYMBOL 208,255,128,192,48,12,3,0,0
1710  SYMBOL 209,128,0,0,3,5,9,241,1
1720  SYMBOL 210,128,96,31,4,132,127,0,0  
1730  SYMBOL 211,0,1,254,8,8,255,0,0
1740  SYMBOL 212,254,0,0,0,0,128,0,0
1750 '
1760 '    EXPLOSION
1770  SYMBOL 213,8,68,34,17,8,4,0,1
1780  SYMBOL 214,0,0,0,24,36,129,153,36
1790  SYMBOL 215,32,72,144,32,64,0,0,159
1800  SYMBOL 216,249,0,0,2,4,9,18,4
1810  SYMBOL 217,36,153,129,36,24,0,0,0
1820  SYMBOL 218,128,0,32,16,136,68,34,16
1830  SYMBOL 219,4,18,9,4,2,0,0,124
1840  SYMBOL 220,0,0,0,0,24,36,66,153
1850  SYMBOL 221,16,34,68,136,16,32,0,0
1860  SYMBOL 222,0,0,4,8,17,34,68,8
1870  SYMBOL 223,153,66,36,24,0,0,0,0
1880  SYMBOL 224,62,0,0,64,32,144,72,32
1890 RETURN
1900 '
1910 '    ***  MANN AUF's DACH  ***
1920 '
1930 LOCATE #1,xm(screen),ym(screen):PRINT #1,CHR$(251)
1940 bild(xm(screen),ym(screen))=-1
1950 mann=-1 
1960 RETURN
1970 '
1980 '         *** Mann aufnehmen ***  
1990 '
2000 '
2010 IF inhalt THEN GOSUB 2950:RETURN   
2020 SOUND 3,500,30,12
2030 mann=0:inhalt=-1
2040 LOCATE #1,xm(screen),ym(screen):PRINT #1,CHR$(32)
2050 AFTER zeit GOSUB 1930
2060 bild(xm(screen),ym(screen))=0
2070 RETURN
2080 '
2090 '        *** Mannpos. testen ***   
2100 '
2110 IF (x=xm(screen)-3 AND h$=hub$(2) OR x=xm(screen)+1 AND h$=hub$(0)) AND y=ym(screen)-1 AND mann THEN GOSUB 2000
2120 IF y<>24 OR NOT inhalt THEN 1370 
2130 IF h$=hub$(0) THEN xm=x-1:ELSE xm=x+3
2140 IF bild(xm,y+1)=-1 THEN GOSUB 2950:GOTO 1370 
2150 '
2160 '        *** Mann aussetzen ***  
2170 '
2180 LOCATE xm,y:PRINT CHR$(22)+CHR$(1)
2190 LOCATE xm,y+1:PRINT CHR$(250);
2200 bild(xm,y+1)=-1 
2210 PRINT CHR$(22)+CHR$(0);
2220 inhalt=0
2230 gerettet=gerettet+1
2240 konto=konto+200
2250 LOCATE 3,1:PRINT gerettet
2260 LOCATE 21,1:PRINT konto
2270 IF gerettet>=anz(screen) AND NOT mann THEN screen=screen+1:GOTO 720
2280 GOTO 1370
2290 '
2300 '   **** EXPLOSION **** 
2310 ' 
2320 LOCATE x1,y1:PRINT hx$(1)
2330 inhalt=0
2340 SOUND 2,2000,50,15,,,5
2350 LOCATE x1,y1:PRINT hx$(0)
2360 SOUND 3,700,40,15,,,1  
2370 LOCATE x1,y1:PRINT hx$(1) 
2380 ex=0
2390 FOR n=15 TO 1 STEP -1
2400 SOUND 1,426,4,10,,,n
2410 LOCATE x1,y1:PRINT hx$(ex)  
2420 ex=1-ex
2430 NEXT
2440 LOCATE x1,y1:PRINT hub$
2450 anzhub=anzhub+1 
2460 konto=konto-1500
2470 LOCATE 21,1:PRINT konto  
2480 IF anzhub=maxhub THEN 2640
2490 LOCATE 11,2:PRINT anzhub+1
2500 x=x(screen):y=y(screen)-1
2510 GOTO 1240
2520 '
2530 '   
2540 '       **** HAEUSER SETZEN ****
2550 '
2560 FOR i=links TO rechts 
2570    FOR j=oben TO unten
2580      bild(i,j)=-1
2590      LOCATE i,j
2600      PRINT CHR$(206)
2610    NEXT 
2620 NEXT
2630 RETURN
2640 '
2650 '
2660 '   **** GAME OVER ****
2670 '
2680 '
2690 DI
2700 BORDER 10,15
2710 LOCATE 12,11
2720 PRINT"G A M E   O V E R"
2730 GOSUB 2950:GOSUB 2950:GOSUB 2950
2740 FOR i=1 TO 3000:NEXT
2750 CLS
2760 BORDER 0
2770 LOCATE 3,8:PRINT"Wollen Sie weiterspielen (j/n) ?"
2780 '
2790 htest$=""
2800 WHILE htest$="":htest$=INKEY$:WEND 
2810 htest$=LOWER$(htest$)
2820 IF htest$="j" THEN screen=0:anzhub=0:gerettet=0:GOTO 700
2830 IF htest$<>"n" THEN 2790
2840 '
2850 CLS
2860 PRINT:PRINT:PRINT:PRINT
2870 IF konto>0 THEN 2900
2880 PRINT"Bitte ueberweisen Sie"ABS(konto)"DM auf"
2890 PRINT:PRINT"Konto.Nr.: 14519  Blz.: 37069600":GOTO 2910
2900 PRINT"Lassen Sie sich"konto"DM auszahlen !"
2910 FOR i=0 TO 3000:NEXT
2920 LOCATE 1,20
2930 END
2940 '
2950 FOR i=0 TO 30
2960   SOUND 2,100+i*20,3,12
2970 NEXT 
2980 RETURN 
2990 '
3000 DATA"Sie verdienen Ihr Geld als Pilot eines"
3010 DATA"Rettungshubschraubers  in  New  York !"
3020 DATA""
3030 DATA""
3040 DATA"Ihre Aufgabe ist es,  die Menschen von"
3050 DATA"den Daechern zu holen und auf der Erde"
3060 DATA"abzusetzen."
3070 DATA"Dieses   erreichen   Sie   durch   das"
3080 DATA"Betaetigen des Feuerknopfes."  
3090 DATA""
3100 DATA"Wenn    Sie      die     erforderliche"
3110 DATA"Mindestanzahl  von  Menschen  gerettet"
3120 DATA"haben  und  sich Niemand mehr  auf dem"
3130 DATA"Dach  befindet,  wechselt  die  Szene."
3140 DATA""
3150 DATA"Sie erhalten fuer jede gerettete Seele"
3160 DATA"200,-DM Praemie."
3170 DATA""
3180 DATA"Jeder  zerstoerte  Helicopter   kostet"
3190 DATA"1500,-DM."
3200 DATA""
3210 DATA""
3220 DATA""  
3230 DATA"                         <Leertaste>"
3240 '
3250 '    *** Werte fuer Haeuser ***
3260 '
3270 DATA 9,14,20,25,34,38,3,11,22,31,15,25,1,3,9,25 
3280 DATA 33,39,12,25,1,2,5,8,22,26,12,19,35,37,6,8
3290 '
3300 DATA 1,2,7,25,7,21,18,25,34,38,4,25,11,16,7,17
3310 DATA 33,39,11,15,15,20,9,19,9,12,10,17,10,12,6,9 
3320 '
3330 DATA 1,1,5,25,8,15,12,22,13,21,8,12,30,35,11,25
3340 DATA 5,7,9,23,16,26,13,23,16,19,5,7,25,39,3,10
3350 '
3360 DATA 1,4,5,25,15,24,13,25,25,33,5,7,32,39,18,25
3370 DATA 3,16,21,25,3,39,3,4,8,17,9,16,34,37,5,20
3380 '
3390 DATA 1,3,20,25,7,15,5,17,18,39,19,25,19,30,11,13
3400 DATA 6,30,6,8,20,23,12,16,27,30,16,25,34,37,4,21
3410 '
3420 '     *** Startpos.Hubschrauber ***
3430 '
3440 DATA 6,24,25,24,21,5,25,24,14,24
3450 '
3460 '     *** Dachpos. Mann ***
3470 '
3480 DATA 28,14,9,9,19,4,8,20,30,10
3490 '
3500 '     *** Maenner pro Screen ***
3510 '
3520 'DATA 1,1,1,1,1,1,1,1
3530 DATA 7,15,24,30,38
3540 '
*/ });
