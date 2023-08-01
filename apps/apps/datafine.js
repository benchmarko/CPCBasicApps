/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem datafine - Datafine Database
2 rem (C) ms-Software, 1986
3 '
7 SYMBOL 255,0,0,0,0,2,10,27,58:SYMBOL 254,3,26,59,170,186,170,170,170:SYMBOL 253,128,176,184,42,58,35,32,35:SYMBOL 252,0,0,0,0,128,160,176,184:SYMBOL 251,0,221,149,149,149,221,0,0:SYMBOL 250,0,247,85,87,84,84,0,0:SYMBOL 249,0,87,82,82,82,114,0,0:SYMBOL 248,0,110,74,110,76,106,0,0:MODE 1:PEN 1:PAPER 2:INK 0,1:INK 1,24:INK 2,6:LOCATE 35,1:PRINT "      ":LOCATE 35,2:PRINT " "CHR$(255)CHR$(254)CHR$(253)CHR$(252)" ";:LOCATE 35,3:PRINT " "CHR$(251)CHR$(250)CHR$(249)CHR$(248)" ";:LOCATE 35,4:PRINT "      ";:PAPER 0:LOCATE 1,1:
10 ' DATAFINE V1.4
11 ' -------------
12 '
15 ' relative Dateiverwaltung fuer CPC464/664/6128
20 ' (C) 1986 by ms-Software
30 ' M. Strasser, Rottalstr.5, 8 Muenchen 80
91 '
95 ' aus Happy Computer, Sonderheft 13 S.66
96 '
97 '
110 IF PEEK(&A000)=&1 AND PEEK(&A001)=&A THEN 190
130 MEMORY 39999: 'LOAD "DATAFINE.BIN",&A000:CALL &A000:CLOSEIN
140 OPENOUT "d":MEMORY HIMEM-1:CLOSEOUT
150 DATA CD,60,BB,32,4A,9C,C9
160 RESTORE 150
170 FOR n=40000 TO 40006:READ a$:POKE n,VAL("&"+a$):NEXT
180 SYMBOL 255,136,216,175,152,152,142,1,30:dinit=0 ' Druckerflag
190 DIM feld$(5),i$(5),a$(5),dr$(3):|A:drive$="A":|USER,0:user=0:INK 0,0:BORDER 0:INK 1,24:INK 2,15:INK 3,6
200 GOTO 3760
210 ' ******************                                                              * Daten eingeben *                                                              ******************
220 CLS:korr=1
230 PRINT#1,"*********** DATEN EINGEBEN ***********";
240 PEN 1:PRINT:PRINT"  1  in bestehende Datei schreiben":PRINT"
  9  Neue Datei eroeffnen"
250 jn$="":WHILE jn$<>"1" AND jn$<>"9":jn$=INKEY$:WEND:IF jn$="9" THEN GOSUB 2450:daz=0:GOTO 280
260 GOSUB 3290:IF dat$="" OR er=1 THEN 3760
270 IF daz<>0 AND daz=anz THEN daz=daz-1:GOTO 370
280 MODE 2:GOSUB 3500:OPENIN ""+dat$
290 CLS:PRINT#2,"Datei: ";dat$:PRINT#2,"
Groesse: "anz:PRINT#2,"
Daten: ";daz
300 FOR n=1 TO feld:l=VAL("&"+LEFT$(feld$(n),2)):t=VAL("&"+MID$(feld$(n),3,2)):x=VAL("&"+MID$(feld$(n),5,2)):y=VAL("&"+MID$(feld$(n),7,2))
310 feld$=RIGHT$(feld$(n),LEN(feld$(n))-8):LOCATE x,y:PRINT feld$;": ";:GOSUB 3400:IF ret THEN 390
320 i$(n)=in$:IF LEN(i$(n))<l THEN i$(n)=LEFT$(i$(n)+SPACE$(l),l)
330 NEXT
340 PRINT#1,"
Alles richtig? (J/N)":jn$="":WHILE jn$<>"J" AND jn$<>"N":jn$=UPPER$(INKEY$):WEND:CLS #1:IF jn$="N" THEN num=daz:GOTO 630
350 a$="":FOR n=1 TO feld:a$=a$+i$(n):NEXT:po=daz*laenge 
360 |W,@po,@a$
370 daz=daz+1:IF daz=anz THEN CLS:PRINT"




Datei voll!!!":FOR n=1 TO 2000:NEXT:GOTO 390
380 GOTO 290
390 CLOSEIN:CLS:OPENOUT ""+dat$+".ind":PRINT#9,anz:PRINT#9,daz:CLOSEOUT:GOTO 3760
400 ' *****************                                                               * Datei pflegen *                                                               *****************
410 IF dat$="" OR er=1 THEN GOSUB 3290:IF dat$="" OR er=1 THEN 3760
420 MODE 2:korr=2:GOSUB 3500
430 PRINT#2,"*****************Datei  pflegen*****************" 
440 PRINT#2,"
 "CHR$(240)"  - vor":PRINT#2,"
 "CHR$(241)"  - zurueck"
450 PRINT#2,"
 1  - Korrektur":PRINT#2,"
 2  - Loeschen":PRINT#2,"
 3  - Nr.eingabe";
460 PRINT#2,"
 4  - Suchen":PRINT#2,"
 5  - Drucken":PRINT#2,"
 9  - ENDE"
470 fr=FRE(""):num=0:OPENIN ""+dat$
480 PRINT#1,"Dateiname: ";UPPER$(dat$);TAB(35);USING "Groesse der Datei: ####";anz:PRINT#1,USING "Eingegebene Daten: ####";daz;:PRINT#1,TAB(35);USING "Freie Datensaetze: ####";anz-daz
490 PRINT#1,TAB(13);"DATAFINE CPC "CHR$(164)" 1986 by Happy-Computer"CHR$(255)
500 CLS
510 a$=SPACE$(laenge):po=num*laenge:|R,@po,@a$
520 GOSUB 3390:GOSUB 3250
530 jn=ASC(INKEY$+CHR$(0))
540 IF jn=240 OR jn=241 THEN 590 ELSE IF jn-48<1 OR jn-48>9 THEN 530
550 jn=jn-48:IF jn>5 AND jn<9 THEN 530 ELSE IF jn=9 THEN GOTO 3760
560 ON jn GOTO 630,810,890,970,1130
570 GOTO 570
580 ' ***********************************                                             * Datensatz vor-/zurueckblaettern *                                             ***********************************
590 IF jn=240 THEN num=num+(1 AND num<daz-1)
600 IF jn=241 THEN num=num-(1 AND num>0)
610 GOTO 510
620 ' *************************                                                       * Datensatz korrigieren *                                                       *************************
630 PRINT#1,"
  Bewegen Sie mit "CHR$(240)" und "CHR$(241)" den  Pointer , dann >ENTER<."
640 z=1
650 WHILE INKEY$<>"":WEND 
660 x=VAL("&"+MID$(feld$(z),5,2)):y=VAL("&"+MID$(feld$(z),7,2))
670 feld$=RIGHT$(feld$(z),LEN(feld$(z))-8)
680 LOCATE x,y:PRINT feld$;": ";i$(z);""
690 IF INKEY(0)>-1 THEN LOCATE x,y:PRINT feld$;": ";i$(z):z=z-(1 AND z>1):GOTO 660
700 IF INKEY(2)>-1 THEN LOCATE x,y:PRINT feld$;": ";i$(z):z=z+(1 AND z<feld):GOTO 660
710 IF INKEY(18)>-1 OR INKEY(6)>-1 THEN CALL &BB03 ELSE GOTO 690
720 l=VAL("&"+LEFT$(feld$(z),2)):t=VAL("&"+MID$(feld$(z),3,2))
730 LOCATE x,y:PRINT feld$;": ";
740 GOSUB 3400:IF ret THEN CLS#1:ON korr GOTO 350,480
750 i$(z)=in$+SPACE$(l-LEN(in$))
760 PRINT#1,"
  Weiteres Feld korrigieren? (J/N)
"
770 jn$="":WHILE jn$<>"J" AND jn$<>"N":jn$=UPPER$(INKEY$):WEND
780 IF jn$="J" THEN 630
790 a$="":FOR n=1 TO feld:a$=a$+i$(n):NEXT:po=num*laenge:|W,@po,@a$:CLS #1:ON korr GOTO 370,480
800 ' ******************                                                              * Daten loeschen *                                                              ******************
810 PRINT#1,"
Wollen Sie wirklich loeschen? (J/N)";:INPUT #1,jn$
820 IF UPPER$(jn$)="N" THEN 480
830 PRINT#1," Datensatz"num" wird geloescht ";
840 IF num=daz-1 THEN a$=SPACE$(laenge):po=num*laenge:|W,@po,@a$:daz=daz-1:num=num-1:PRINT:GOTO 870
850 PRINT#1,"und mit  Datensatz"daz-1"":PRINT#1,"ueberschrieben."
860 a$=SPACE$(laenge):po=(daz-1)*laenge:|R,@po,@a$:po=num*laenge:|W,@po,@a$:daz=daz-1
870 OPENOUT ""+dat$+".ind":PRINT#9,anz:PRINT#9,daz:CLOSEOUT:GOTO 480
880 ' ******************                                                              * Nummerneingabe *                                                              ******************
890 CLS:PRINT"




"CHR$(150)STRING$(23,154)CHR$(156)
900 PRINT CHR$(149)TAB(25)CHR$(149):PRINT CHR$(147)STRING$(23,154)CHR$(153)
910 PRINT"		Datensatznummer: ";:l=4:t=2:GOSUB 3400
920 IF ret THEN 500
930 in=VAL(in$):in=INT(in)
940 IF in<0 THEN in=0 ELSE IF in>daz-1 THEN in=daz-1
950 num=in:PRINT"":GOTO 510
960 ' ****************                                                                * Datei suchen *                                                                ****************
970 CLS:PRINT"

Suchbegriff: ";:l=35:GOSUB 3400:IF ret THEN 480 ELSE su$=in$
980 PRINT"

Suchen von Datensatz ";:l=4:t=2:GOSUB 3400
990 IF ret THEN 480 ELSE sua=VAL(in$):IF sua<0 THEN sua=0 ELSE IF sua>daz-1 THEN sua=daz-1
1000 PRINT"

Suchen bis Datensatz ";:l=4:t=2:GOSUB 3400
1010 IF ret THEN 480 ELSE sue=VAL(in$):IF sue<sua THEN sue=sua ELSE IF sue>daz-1 THEN sue=daz-1
1020 CLS #1
1030 FOR num=sua TO sue:a$=SPACE$(laenge):po=num*laenge:|R,@po,@a$
1040 LOCATE #1,1,2:PRINT#1,USING "Datensatz ####";num
1050 IF INSTR(a$,su$) THEN 1080
1060 NEXT num:num=num-1
1070 PRINT"

Ende der Suche":FOR n=1 TO 2500:NEXT:GOTO 480
1080 CLS:GOSUB 3390:GOSUB 3250
1090 PRINT#1,"
Weitersuchen ?  (J/N)"
1100 jn$="":WHILE jn$<>"J" AND jn$<>"N":jn$=UPPER$(INKEY$):WEND
1110 IF jn$="J" THEN CLS #1:GOTO 1060 ELSE 480
1120 ' *********************************                                               * Angezeigten Datensatz drucken *                                               *********************************
1130 IF dinit=0 THEN CLS:PRINT"






Bitte erst  Drucker einstellen  !!":FOR n=1 TO 2000:NEXT:GOTO 480
1140 GOSUB 3170
1150 num=num+(1 AND num<daz-1):GOTO 510
1160 ' ******************                                                              * Datei wechseln *                                                              ******************
1170 CLS:PRINT"

Name der neuen Datei: ";:l=8:GOSUB 3400:IF ret THEN 3760
1180 er=0:dat$=in$:GOSUB 3660
1190 IF er=1 THEN PEN 1:PRINT"

Datei nicht vorhanden":FOR n=1 TO 2000:NEXT:GOTO 1170 ELSE GOSUB 3330
1200 dinit=0:GOTO 3760
1210 ' *************                                                                   * Diskmenue *                                                                   *************
1220 MODE 2:GOSUB 3500:PRINT#2,"*****************  Disk-menue  *****************"
1230 PRINT#2,"
 1  - Drive":PRINT#2,"
 2  - CAT":PRINT#2,"
 3  - loeschen"
1240 PRINT#2,"
 4  - umbenennen";:PRINT#2,"
 5  - USER":PRINT#2,"

 9  - Ende"
1250 PRINT#1,"
";USING "Laufwerk: \ \                                       User: ##";drive$;user
1260 CLS:CAT
1270 jn=ASC(INKEY$+CHR$(0))-48
1280 IF jn=9 THEN 3760 ELSE IF jn<1 OR jn>5 THEN 1270
1290 IF jn=1 THEN 1380
1300 IF jn=2 THEN 1260
1310 IF jn=3 THEN 1410
1320 IF jn=4 THEN 1460
1330 ' *****************                                                               * USER wechseln *                                                               *****************
1340 IF jn=5 THEN l=2:t=2:PRINT"
Usernummer: ";:GOSUB 3400
1350 IF ret THEN 1260 ELSE user=VAL(in$):IF user>15 THEN user=15 ELSE IF user<0 THEN user=0
1360 |USER,user:GOTO 1250
1370 ' ******************                                                              * DRIVE wechseln *                                                              ******************
1380 IF drive$="A" THEN |B:drive$="B":GOTO 1250
1390 |A:drive$="A":GOTO 1250
1400 ' *****************                                                               * File loeschen *                                                               *****************
1410 PRINT"
Name des zu loeschenden Files: ";:l=12:GOSUB 3400:IF ret THEN 1260
1420 PRINT"
Sind Sie SICHER? (J/N)":jn$=""
1430 WHILE jn$<>"J" AND jn$<>"N":jn$=UPPER$(INKEY$):WEND:IF jn$="N" THEN 1260
1440 |ERA,@in$:GOTO 1260
1450 ' *******************                                                             * File umbenennen *                                                             *******************
1460 PRINT"
Name des alten Files: ";:l=12:GOSUB 3400:IF ret THEN 1260
1470 o$=in$
1480 PRINT"
Name des neuen Files: ";:l=12:GOSUB 3400:IF ret THEN 1260
1490 n$=in$
1500 |REN,@n$,@o$
1510 GOTO 1260
1520 ' ****************                                                                * Druckermenue *                                                                ****************
1530 IF dat$="" THEN PRINT"":GOTO 3760
1540 dinit=0:CLS:PRINT#1,"************ Druckerinit *************";
1550 PRINT"

Feldnamen:":FOR n=1 TO feld
1560 LOCATE 1,6:PRINT" "RIGHT$(feld$(n),LEN(feld$(n))-8)"  drucken? ";
1570 jn$="":WHILE jn$<>"J" AND jn$<>"N":jn$=UPPER$(INKEY$):WEND:PRINT jn$:dr$(n)=jn$
1580 LOCATE 1,6:PRINT SPACE$(40):NEXT
1590 CLS:PRINT"Feldinhalt:":PEN 1
1600 FOR n=1 TO feld:LOCATE 1,6:IF n<>feld THEN PRINT#2,RIGHT$(feld$(n+1),LEN(feld$(n+1))-8)
1610 PRINT" "RIGHT$(feld$(n),LEN(feld$(n))-8)"  : ";
1620 GOSUB 1680:IF ret THEN 3760 ELSE dr$(n)=dr$(n)+in$
1630 LOCATE 1,6:PRINT SPACE$(40):NEXT
1640 CLS:PRINT"


Zeilenvorschub: ";:l=4:t=2
1650 GOSUB 3400:IF ret THEN 3760 ELSE vor=VAL(in$)
1660 dinit=1:GOTO 3760
1670 ' ****************                                                                * Inkeyroutine *                                                                ****************
1680 ret=0:y=VPOS(#0):x=POS(#0):in$="":l=0
1690 LOCATE x,y:PRINT STRING$(5,95)
1700 a$="":WHILE a$="":a$=INKEY$:WEND
1710 IF a$=CHR$(224) THEN ret=1:RETURN
1720 IF a$=CHR$(13) THEN RETURN
1730 IF a$=CHR$(127) AND l>0 THEN l=l-1:LOCATE x+l,y:PRINT"_":in$=LEFT$(in$,LEN(in$)-1):GOTO 1700
1740 IF l=5 THEN SOUND 1,0,1,7,,,10:GOTO 1700
1750 IF a$=CHR$(243) THEN LOCATE x+l,y:PRINT CHR$(243):in$=in$+CHR$(243):l=l+1:GOTO 1700
1760 IF a$=CHR$(241) THEN LOCATE x+l,y:PRINT CHR$(241):in$=in$+CHR$(241):l=l+1:GOTO 1700
1770 SOUND 1,50,3,7,,,1:GOTO 1700
1780 ' *****************                                                               * Daten drucken *                                                               *****************
1790 PRINT#1,"*********** Daten drucken ************";
1800 CLS
1810 IF dat$="" OR er=1 THEN 3760
1820 IF dinit=0 THEN CLS:PRINT"






Bitte erst  Drucker einstellen  !!":FOR n=1 TO 2000:NEXT:GOTO 3760
1830 CLS:PRINT"Wollen Sie:
"
1840 PRINT" 1  - alle Daten drucken?
"
1850 PRINT" 2  - nach Suchbegriff drucken?
"
1860 PRINT" 3  - best. Datensatz drucken?
"
1870 PRINT" 9  - Beenden?"
1880 jn=ASC(INKEY$+CHR$(0)):jn=jn-48
1890 IF jn=9 THEN 3760 ELSE IF jn<1 OR jn>3 THEN 1880
1900 ON jn GOTO 1910,1990,2180
1910 '
1920 MODE 2:GOSUB 3500
1930 OPENIN ""+dat$
1940 FOR num=0 TO daz-1:a$=SPACE$(laenge):po=num*laenge:|R,@po,@a$
1950 GOSUB 3390:LOCATE 1,1:GOSUB 3250
1960 GOSUB 3170
1970 IF INKEY$=CHR$(224) THEN num=daz
1980 NEXT num:GOTO 3760
1990 '
2000 CLS:PRINT"

Suchbegriff:":l=35
2010 GOSUB 3400:IF ret THEN 3760 ELSE su$=in$
2020 PRINT"

Suchen von Datensatz ";:l=4:t=2:GOSUB 3400
2030 IF ret THEN 3760 ELSE sua=VAL(in$):IF sua<0 THEN sua=0 ELSE IF sua>daz-1 THEN sua=daz-1
2040 PRINT"

Suchen bis Datensatz ";:l=4:t=2:GOSUB 3400
2050 IF ret THEN 3760 ELSE sue=VAL(in$):IF sue<sua THEN sue=sua ELSE IF sue>daz-1 THEN sue=daz-1
2060 MODE 2:GOSUB 3500:OPENIN ""+dat$
2070 FOR num=sua TO sue:a$=SPACE$(laenge):po=num*laenge:|R,@po,@a$
2080 LOCATE #1,1,1:PRINT#1,USING "Datensatz ####";num
2090 IF INSTR(a$,su$) THEN 2120
2100 NEXT num
2110 PRINT"

Ende der Suche":FOR n=1 TO 2500:NEXT:GOTO 3760
2120 CLS:GOSUB 3390:GOSUB 3250:PRINT#1,"Drucken? (J/N)":jn$=""
2130 WHILE jn$<>"J" AND jn$<>"N":jn$=UPPER$(INKEY$):WEND:IF jn$="N" THEN 2150
2140 GOSUB 3170
2150 PRINT#1,"
Weitersuchen ?  (J/N)"
2160 jn$="":WHILE jn$<>"J" AND jn$<>"N":jn$=UPPER$(INKEY$):WEND
2170 IF jn$="J" THEN CLS #1:GOTO 2100 ELSE 3760
2180 MODE 2:GOSUB 3500:OPENIN ""+dat$
2190 CLS:PRINT"
Datensatznummer: ";:l=4:t=2:GOSUB 3400:IF ret THEN 3760
2200 CLS:num=VAL(in$):IF num<0 THEN num=0 ELSE IF num>daz-1 THEN num=daz-1
2210 a$=SPACE$(laenge):po=num*laenge:|R,@po,@a$
2220 GOSUB 3390:GOSUB 3250:PRINT#1,"
Drucken? (J/N)"
2230 jn$="":WHILE jn$<>"J" AND jn$<>"N":jn$=UPPER$(INKEY$):WEND
2240 IF jn$="N" THEN 2260
2250 GOSUB 3170
2260 PRINT#1,"
Weiteren Datensatz drucken? (J/N)"
2270 jn$="":WHILE jn$<>"J" AND jn$<>"N":jn$=UPPER$(INKEY$):WEND:IF jn$="N" THEN 3760 ELSE 2190
2280 ' *******************                                                             * Daten sortieren *                                                             *******************
2290 IF dat$="" OR er=1 THEN GOSUB 3290:IF dat$="" OR er=1 THEN 3760
2300 CLS:CLS #1:PRINT#1,"********** Daten sortieren ***********";
2310 PRINT"Nach welchem Feld sortieren:"
2320 FOR n=1 TO feld:feld$=RIGHT$(feld$(n),LEN(feld$(n))-8):PRINT" ";n;"  - ";feld$:NEXT
2330 PRINT"
Bitte Feldnummer eingeben: ";:l=2:t=2:GOSUB 3400:IF ret THEN 3760 ELSE sort=VAL(in$):IF sort<1 OR sort>feld THEN PRINT"":GOTO 2330
2340 GOSUB 2350:GOTO 3760
2350 OPENIN ""+dat$
2360 FOR i=1 TO daz-1:fl=0
2370 FOR j=daz-1 TO i STEP -1
2380 a$=SPACE$(laenge):po=(j-1)*laenge:|R,@po,@a$:x1$=a$:GOSUB 3390
2390 a1$=i$(sort):a$=SPACE$(laenge):po=j*laenge:|R,@po,@a$:x2$=a$:GOSUB 3390:a2$=i$(sort)
2400 IF a1$>a2$ THEN po=(j-1)*laenge:|W,@po,@x2$:po=j*laenge:|W,@po,@x1$:fl=1
2410 IF INKEY$=CHR$(224) THEN j=i:fl=0
2420 NEXT j:IF fl=0 THEN RETURN
2430 NEXT i:RETURN
2440 ' *************************                                                       * Neue Datei einrichten *                                                       *************************
2450 CLS:PEN 3:PRINT"Datei einrichten:"
2460 PRINT"

 1  - neue Maske definieren":PRINT"
 2  - Maske aus Datei laden?"
2470 jn=0:WHILE jn<1 OR jn>2:jn=ASC(INKEY$+CHR$(0))-48:WEND:IF jn=1 THEN mas=0:GOTO 2600
2480 CLS:PEN 1:PRINT"Maske aus Datei laden:"
2490 PRINT:PEN 2:PRINT"Name der Datei:";:l=8:PEN 1:GOSUB 3400
2500 IF ret THEN 3760 ELSE dat$=UPPER$(in$):er=0:GOSUB 3670
2510 IF er=1 THEN PRINT"

Datei nicht vorhanden!!":FOR n=1 TO 2000:NEXT:GOTO 2490
2520 CLS:PRINT"
Maskendatei wird geladen!":GOSUB 3340
2530 MODE 2:num=0:GOSUB 3510
2540 a$=STRING$(laenge,95):GOSUB 3390:GOSUB 3250
2550 PRINT#1,"Maske in Ordnung (J/N)?":jn$=""
2560 WHILE jn$<>"J" AND jn$<>"N":jn$=UPPER$(INKEY$):WEND
2570 MODE 1:GOSUB 3610
2580 IF jn$="N" THEN 2450
2590 mas=1
2600 PEN 2:PRINT"
Name der neuen Datei:":PEN 1:l=8:GOSUB 3400
2610 IF ret THEN 3760 ELSE dat$=UPPER$(in$)
2620 PEN 2:PRINT"
Groesse der Datei: ";:PEN 1:l=4:t=2:GOSUB 3400
2630 IF ret THEN 3760 ELSE anz=VAL(in$):IF anz<1 OR anz>1000 THEN PRINT"":CLS:GOTO 2620
2640 GOSUB 2690:ERASE dr$:DIM dr$(feld):CLS:PRINT"



   Bitte warten!"
2650 OPENOUT ""+dat$+".ind":PRINT#9,anz:PRINT#9,0:CLOSEOUT
2660 OPENOUT ""+dat$:FOR n=1 TO anz:PRINT#9,SPACE$(laenge):LOCATE 16,8
2670 PRINT USING "####";n:NEXT:PRINT#9,SPACE$(128):PRINT#9,SPACE$(128):CLOSEOUT:CLS:RETURN
2680 ' ***************************                                                     * Eingabemaske definieren *                                                     ***************************
2690 IF mas=1 THEN 3080 ELSE MODE 2:GOSUB 3500
2700 x=1:y=1:LOCATE 1,1:PRINT" ":c$=" "
2710 PRINT#1,"Cursortasten: Cursor steuern":PRINT#1,"CTRL+E: Eingabe beenden - Definition"
2720 ' ******************                                                              * Maske aufbauen *                                                              ******************
2730 jn=ASC(INKEY$+CHR$(0)):IF jn=0 THEN 2730 ELSE IF jn=5 THEN LOCATE x,y:PRINT MID$(c$,2,1);:GOTO 2870
2740 IF jn<240 OR jn>243 THEN 2820
2750 x1=x:y1=y:c1$=MID$(c$,2,1)
2760 x=x+(1 AND jn=243)-(1 AND jn=242):IF x>58 THEN x=1:y=y+(1 AND y<18) ELSE IF x<1 THEN x=58:y=y-(1 AND y>1)
2770 y=y+(1 AND jn=241)-(1 AND jn=240):IF y>18 THEN y=1 ELSE IF y<1 THEN y=18
2780 IF x=x1 AND y=y1 THEN 2730 ELSE LOCATE x,y:CALL 40000:c$=""+CHR$(PEEK(40010))+""
2790 LOCATE x1,y1:PRINT c1$;:LOCATE x,y:PRINT c$;
2800 LOCATE #2,1,1:PRINT#2,USING "x:## y:##";x;y
2810 GOTO 2730
2820 IF jn=127 THEN c$=" ":jn=242:GOTO 2750
2830 IF jn=13 THEN LOCATE x,y:PRINT" ":c$=" ":x=58:jn=243:GOTO 2750
2840 c$=""+CHR$(jn)+"":jn=243:GOTO 2750
2850 GOTO 2730
2860 ' ********************                                                            * Maskendefinition *                                                            ********************
2870 ERASE feld$:DIM feld$(20):glang=255:feld=0:er=0:PRINT#1,"
Bitte warten. Maske wird definiert!":CLS #2
2880 FOR y=1 TO 18:FOR x=1 TO 58
2890 LOCATE x,y:CALL 40000:c=PEEK(40010)
2900 IF c=58 AND feld>=20 THEN er=1:x=58:y=18:PRINT#1,"
Mehr als 20 Felder definiert!!":GOTO 2930
2910 IF c=58 THEN feld=feld+1:GOSUB 2960:GOSUB 3000:IF er=1 THEN PRINT#1,"
Falsches Format!!":x=58:y=18:GOTO 2930
2920 glang=glang-lang:LOCATE #1,1,1:PRINT#1,glang:lang=0:IF glang<0 THEN PRINT#1,"
Laenge der Felder zu gross (>255)!!"::x=58:y=18:er=1:GOTO 2930
2930 NEXT x,y:IF er=1 THEN x=1:y=1:LOCATE x,y:CALL 40000:c$=""+CHR$(PEEK(40010))+"":LOCATE x,y:PRINT c$:CLS #2:GOTO 2750
2940 GOTO 3080
2950 ' **** Feld erfassen ****
2960 FOR x1=x-1 TO 1 STEP -1
2970 LOCATE x1,y:CALL 40000:c1=PEEK(40010):IF c1=32 THEN x1=1:GOTO 2980 ELSE feld$(feld)=CHR$(c1)+feld$(feld)
2980 NEXT:PRINT#2,feld$(feld):RETURN
2990 ' **** Laenge und Typ des Feldes ****
3000 lang=0:typ=0:FOR x1=x+1 TO 58
3010 LOCATE x1,y:CALL 40000:c1=PEEK(40010):IF x1=x+1 AND c1<>32 THEN er=1:x1=58:GOTO 3050
3020 IF c1=35 THEN lang=lang+1:IF typ=0 THEN typ=2 ELSE IF typ=1 THEN er=1:x1=58:GOTO 3050
3030 IF c1=36 THEN lang=lang+1:IF typ=0 THEN typ=1 ELSE IF typ=2 THEN er=1:x1=58:GOTO 3050
3040 IF c1=32 AND x1>x+1 THEN x1=58:GOTO 3050
3050 NEXT x1:IF er=1 THEN 3070
3060 feld$(feld)=HEX$(lang,2)+HEX$(typ,2)+HEX$(x-LEN(feld$(feld)),2)+HEX$(y,2)+feld$(feld)
3070 RETURN
3080 MODE 1:PRINT"Folgende Felder sind definiert:
"
3090 FOR n=1 TO feld:PRINT feld$(n):NEXT
3100 PRINT"
Maske wird gespeichert!"
3110 laenge=0:FOR n=1 TO feld:laenge=laenge+VAL("&"+LEFT$(feld$(n),2)):NEXT
3120 OPENOUT ""+dat$+".msk"
3130 PRINT#9,feld:PRINT#9,laenge:FOR n=1 TO feld:PRINT#9,feld$(n):NEXT
3140 CLOSEOUT
3150 ERASE i$:DIM i$(feld):RETURN
3160 ' *****************                                                               * Daten drucken *                                                               *****************
3170 FOR n=1 TO feld:feld$=RIGHT$(feld$(n),LEN(feld$(n))-8)
3180 IF LEFT$(dr$(n),1)="J" AND LEN(dr$(n))>1 THEN PRINT#8,feld$;": ";
3190 d$=RIGHT$(dr$(n),LEN(dr$(n))-1)
3200 IF d$="" THEN 3220 ELSE PRINT#8,i$(n);" ";:FOR nn=1 TO LEN(d$):IF MID$(d$,nn,1)=CHR$(241) THEN PRINT#8
3210 NEXT
3220 NEXT:FOR n=1 TO vor:PRINT#8:NEXT
3230 RETURN
3240 ' **********************                                                          * Datensatz anzeigen *                                                          **********************
3250 FOR n=1 TO feld:x=VAL("&"+MID$(feld$(n),5,2)):y=VAL("&"+MID$(feld$(n),7,2))
3260 feld$=RIGHT$(feld$(n),LEN(feld$(n))-8):LOCATE x,y:PRINT feld$;": ";i$(n):NEXT
3270 LOCATE #2,1,22:PRINT#2,USING "Ds.: ####";num:RETURN
3280 ' *******************                                                             * Datei eroeffnen *                                                             *******************
3290 CLS:PEN 1:PRINT"Datei noch nicht geoeffnet!!":PRINT:PEN 2
3300 PRINT"Dateiname: ";:PEN 1:l=8:GOSUB 3400
3310 IF ret THEN 3370 ELSE dat$=in$:er=0:GOSUB 3660
3320 IF er=1 THEN PEN 1:PRINT"

Datei nicht vorhanden!!":FOR n=1 TO 2000:NEXT:GOTO 3290
3330 CLS:OPENIN ""+dat$+".ind":INPUT #9,anz:INPUT #9,daz:CLOSEIN
3340 ERASE feld$,i$,dr$:OPENIN ""+dat$+".msk":INPUT#9,feld:INPUT#9,laenge
3350 DIM feld$(feld),i$(feld),dr$(feld)
3360 FOR n=1 TO feld:LINE INPUT#9,feld$(n):NEXT n:CLOSEIN
3370 RETURN
3380 ' *******************                                                             * Stringzuweisung *                                                             *******************
3390 FOR n=1 TO feld:l=VAL("&"+LEFT$(feld$(n),2)):i$(n)=LEFT$(a$,l):a$=RIGHT$(a$,LEN(a$)-l):NEXT n:RETURN
3400 ' *** Inputroutine ***                                                            *Uebergabeparameter*                                                            * l=Laenge  t=typ **
3410 ret=0:y=VPOS(#0):x=POS(#0):ll=0:in$=""
3420 LOCATE x,y:PRINT STRING$(l,"_")
3430 a$="":WHILE a$="":a$=INKEY$:WEND:a=ASC(a$):IF a=224 THEN ret=1:t=1:RETURN ELSE IF a=13 THEN t=1:RETURN
3440 IF a$=CHR$(127) AND ll>0 THEN 3490 ELSE IF a$=CHR$(127) AND ll=0 THEN 3430
3450 IF t=2 AND (a<48 OR a>57) THEN SOUND 2,500,3,7,,,10:GOTO 3430
3460 IF ll=l THEN SOUND 1,2500,3,7:GOTO 3430
3470 in$=in$+a$:ll=ll+1:LOCATE x+ll-1,y:PRINT a$
3480 GOTO 3430
3490 in$=LEFT$(in$,ll-1):ll=ll-1:LOCATE x+ll,y:PRINT"_":SOUND 1,1000,1,7:GOTO 3430
3500 ' **************************                                                      * Bildschirmmaske MODE 2 *                                                      **************************
3510 ol$=CHR$(150):ore$=CHR$(156):ul$=CHR$(147):ur$=CHR$(153):wa$=CHR$(154):se$=CHR$(149)
3520 LOCATE 1,1:PRINT ol$;STRING$(60,wa$);ore$;ol$;STRING$(16,wa$);ore$
3530 FOR n=2 TO 19:LOCATE 1,n:PRINT se$:LOCATE 62,n:PRINT se$;se$:LOCATE 80,n:PRINT se$:NEXT
3540 LOCATE 1,20:PRINT ul$;STRING$(60,wa$);ur$;se$;TAB(80);se$
3550 LOCATE 1,21:PRINT ol$;STRING$(60,wa$);ore$;se$;TAB(80);se$
3560 FOR n=22 TO 24:LOCATE 1,n:PRINT se$:LOCATE 62,n:PRINT se$;se$:LOCATE 80,n:PRINT se$:NEXT
3570 LOCATE 1,25:PRINT ul$;STRING$(60,wa$);ur$;ul$;STRING$(16,wa$);ur$;
3580 WINDOW 2,61,2,19:WINDOW #1,2,61,22,24:WINDOW #2,64,79,2,24
3590 PEN #1,1:PEN #2,1:RETURN
3600 ' *************************                                                       * Bildschirmmaske MODE 1*                                                       *************************
3610 a1$=CHR$(194)+STRING$(38,154)+CHR$(195):a2$=CHR$(193)+STRING$(38,154)+CHR$(192):a3$=CHR$(149)
3620 PEN#3,3:LOCATE #3,1,1:PRINT#3,a1$;a3$;TAB(40)a3$;a2$;:PRINT#3,a1$;
3630 FOR n=5 TO 20:LOCATE #3,1,n:PRINT#3,a3$;:LOCATE #3,40,n:PRINT #3,a3$;:NEXT
3640 PRINT#3,a2$;a1$;a3$ TAB(40);a3$;a3$ TAB(40)a3$;a2$;
3650 WINDOW 2,39,5,20:WINDOW #1,2,39,2,2:WINDOW #2,2,39,23,24:FOR n=0 TO 2:CLS #n:NEXT:PEN #1,2:RETURN
3660 ' *******************                                                             * Directory lesen *                                                             *******************
3670 ERASE a$:DIM a$(65):dat1$=LEFT$(UPPER$(dat$)+SPACE$(8),8)+".   "
3680 a=PEEK(&BB5A):POKE &BB5A,&C9:CAT:POKE &BB5A,a
3690 anz=PEEK(&A912):a=PEEK(&A79C)*256+PEEK(&A79B)+1
3700 FOR an=0 TO anz:FOR n=a TO a+10:x=PEEK(n):a$(an)=a$(an)+CHR$(x):NEXT:a=a+14:NEXT
3710 FOR n=0 TO (anz AND anz<64)+(63 AND anz>=64):IF ASC(LEFT$(a$(n),1))=0 THEN a=n:n=anz:GOTO 3730
3720 a$(n)=LEFT$(a$(n),8)+"."+RIGHT$(a$(n),3)
3730 NEXT:anz=a
3740 FOR n=0 TO anz:IF dat1$=a$(n) THEN 3750 ELSE NEXT:er=1
3750 RETURN
3760 ' *********                                                                       * Menue *                                                                       *********
3770 CLOSEIN
3780 MODE 1:GOSUB 3600:PRINT#1,"************ DATAFINE CPC ************";
3790 CLS:RESTORE 3970:FOR n=1 TO 8:READ a$:LOCATE 8,n*2-1
3800 IF n<8 THEN PEN 1:PRINT""n" - "; ELSE PAPER 1:PEN 3:PRINT" 9 ";:PAPER 0:PEN 1:PRINT" - ";
3810 PEN 2:PRINT a$:PRINT:NEXT
3820 ' ******************************                                                  * Tastaturabfrage Zahlen 1-9 *                                                  ******************************
3830 PRINT#2,TAB(9);CHR$(164);" 1986 by ms-Software "CHR$(255)
3840 IF NOT(dat$="") AND er=0 THEN PRINT#2,TAB(9);"Geoeffnete Datei: ";dat$;"";
3850 a$=INKEY$:IF a$="" THEN 3850
3860 a=ASC(a$+CHR$(0))-48:IF a<1 OR a>9 OR a=8 THEN SOUND 1,500,2,5:GOTO 3850
3870 IF a=9 THEN a=8
3880 LOCATE 5,(a-1)*2+1:PEN 3:PRINT STRING$(3,243)
3890 ' **********************                                                          * Sicherheitsabfrage *                                                          **********************
3900 PRINT#2,"
        Sind Sie sicher? (J/N)":a$=""
3910 WHILE a$<>"J" AND a$<>"N":a$=UPPER$(INKEY$):WEND:CLS #2:IF a$="J" THEN 3930
3920 LOCATE 5,(a-1)*2+1:PRINT"   ":GOTO 3850
3930 ON a GOTO 210,410,1170,1220,1530,1790,2290,3940
3940 MODE 2:BORDER 1:INK 0,1:INK 1,24:PEN 1:PAPER 0:END
3950 GOTO 3950
3960 ' ********************                                                            * Datas fuer Menue *                                                            ********************
3970 DATA Daten eingeben,Datei pflegen,Datei wechseln,Diskmenue,Drucker einstellen,Daten drucken,Daten sortieren,var? ENDE
*/ });
