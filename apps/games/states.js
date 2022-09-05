/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem states: States of the Earth
2 rem
3 rem Modifications: put in one file, RSX removed, input frames in BASIC; currently no title screen
4 rem
10  ' ***************************
11  ' **   Staaten  der Erde   **
12  ' **                       **
13  ' **     Marco  Vieth      **
14  ' **  Atteln , Okt. 1988   **
15  ' ***************************
16 '
17 CLEAR:DEFINT i-z:DEFSTR a-h: 'gosub 1800
18 'SYMBOL AFTER 255
19 SYMBOL 255,0,0,0,0,0,0,0,126
20 MODE 1:BORDER 2:PAPER 0:PEN 1
21 INK 0,2:INK 1,24:INK 2,14:INK 3,9
22 LOCATE 13,2:PRINT"STAATEN ";:PEN 1:PRINT"DER";:PEN 3:PRINT" ERDE"
23 PEN 2:PRINT TAB(13)CHR$(10)"Marco Vieth,1988"
24 PEN 1:LOCATE 4,8:PRINT"Bei diesem Spiel koennen bis zu 4"
25 PRINT CHR$(10)TAB(4)"Mitspieler mitmachen !"
26 PEN 3:PRINT CHR$(10)CHR$(10)TAB(4)"Beim  Loesen der  Aufgaben  hilft"
27 PRINT CHR$(10)TAB(4)"die COPY - Taste , Buchstaben des"
28 PRINT CHR$(10)TAB(4)"Loesungswortes anzeigt ."
29 '
30 REM ***************
31 REM ** TITELBILD **
32 REM ***************
33 MEMORY &75FF
34 'CLEAR:DEFINT i-z:DEFSTR a-h
35 'LOAD"!STAATEN.BIN",&A000:CALL &A000
36 load"!STATESFX",&8000:'LOAD"!STAATEN.SCN",&8000
37 LOCATE 7,25:PEN 3:PRINT"(Bitte eine Taste druecken)":PEN 1:CALL &BB18
38 'FOR i=&a000 TO &a030:READ c:POKE i,VAL("&"+c):NEXT
39 cls:gosub 4610:'|SHOW,&C000:'Karte zeigen
40 FOR i=0 TO 6 STEP 2:PLOT 0+i,0+i,3-i/2:DRAW 0+i,399-i:DRAW 639-i,399-i
41 DRAW 639-i,0+i:DRAW 0+i,0+i:NEXT i
42 PRINT CHR$(23)+CHR$(1);:TAG:PLOT 182,355,2
43 PRINT"S  T  A  A  T  E  N";:MOVE 150,320
44 PRINT"D  E  R     E  R  D  E";
45 MOVE 180,270:PRINT"Marco Vieth, 1988";
46 TAGOFF:PRINT CHR$(23)+CHR$(0);
47 call &bb18:'RUN"!STAATEN2"
48 '
100 REM STAATEN(2)
110 CLEAR:DEFINT h-y:DEFSTR a-g
120 r1=0:r2=0:pl=0:ma=0:q=0:q1=1
130 n=164
140 DIM a(n,1),x(n),y(n),ri(n),b(1),c(4),wa(4),sc(4),px(4),py(4)
150 b(0)="LAND":b(1)="STADT"
160 px(1)=44:px(2)=94:px(3)=572:px(4)=622
170 '
180 MODE 1:SPEED INK 30,30:GOSUB 2090
190 RESTORE 2720
200 FOR i=1 TO n:READ a(i,0),a(i,1),x(i),y(i):PLOT x(i),y(i),1:NEXT
210 j=8:RESTORE 2310:GOSUB 2140:'Menue
220 m1=1:m2=7:GOSUB 2210
230 IF w=7 THEN MODE 2:PRINT"Bis zum naechsten Mal...":PRINT:STOP
240 ON w GOSUB 770,280,380,460,530,630
250 MODE 1:GOTO 210
260 '
270 REM *** Fragenbereich waehlen ***
280 j=6:RESTORE 2400:GOSUB 2140
290 m1=1:m2=5:GOSUB 2210
300 ON w GOTO 310,320,330,340,350
310 r1=1:r2=n:RETURN:'Erd
320 r1=1:r2=34:RETURN:'Eur
330 r1=35:r2=55:RETURN:'Afr
340 r1=90:r2=34:RETURN:'Ame
350 r1=124:r2=41:RETURN:'Asi
360 '
370 REM *** Fragenanzahl ***
380 j=2:RESTORE 2470:GOSUB 2140
390 LOCATE 15,7:IF r2>0 THEN PRINT"(ENTER="r2")";
400 INPUT d:ma=0:IF d>="0" THEN IF d<="9" THEN ma=VAL(d)
410 IF ma=0 OR ma>200 THEN ma=r2
420 IF ma<1 THEN 390
430 RETURN
440 '
450 REM *** Fragenart
460 j=3:RESTORE 2500:GOSUB 2140
470 m1=1:m2=2:GOSUB 2210
480 q=w-1:'Frage
490 q1=q XOR 1:'Antwort
500 RETURN
510 '
520 REM *** Schwierigkeitsgrad ***
530 IF pl<1 THEN GOSUB 630
540 j=4:RESTORE 2540:GOSUB 2140
550 FOR i=1 TO pl
560 LOCATE 12,7:PEN 2:PAPER 1:PRINT c(i)" ist ..."
570 m1=1:m2=3:GOSUB 2210
580 wa(i)=w*22
590 NEXT
600 RETURN
610 '
620 REM *** Mitspieler ***
630 j=1:RESTORE 2590:GOSUB 2140
640 i=1:h1=7
650 PEN 1:PAPER 2
660 LOCATE 12,h1:PRINT i;:INPUT") ",c(i)
670 IF c(i)="" THEN pl=i-1:IF pl=0 THEN 630 ELSE RETURN
680 c(i)=UPPER$(LEFT$(c(i),1))+MID$(c(i),2,10)+STRING$(11-LEN(LEFT$(c(i),11)),32)
690 LOCATE 17,h1:PRINT c(i)
700 IF i<4 THEN h1=h1+2:i=i+1:GOTO 660
710 IF pl<>i THEN wa(1)=0
720 pl=i:RETURN
730 '
740 REM  *********************
750 REM  ***    T E S T    ***
760 REM  *********************
770 IF pl<1 OR wa(1)<1 THEN GOSUB 530:'Mitsp.+Schw.
780 IF r1=0 THEN GOSUB 280:'Bereich
790 IF ma=0 THEN GOSUB 380:'Anz.
800 MODE 1:PAPER 0:PEN 1
810 RANDOMIZE TIME
820 WINDOW#1,10,30,7,7:WINDOW#2,10,30,12,12:WINDOW#3,10,30,15,15:WINDOW#4,10,30,20,22:WINDOW#5,9,31,4,9
830 PAPER#1,2:PAPER#2,2:PAPER#5,2
840 FOR i=1 TO pl:sc(i)=0:py(i)=48:NEXT:'Score 0/ypos Balken
850 GOSUB 1600
860 o=r2
870 m=9:FOR sch=1 TO ma
880 FOR p=1 TO pl
890 LOCATE 20,2:PRINT c(p):LOCATE 19,3:PRINT sc(p)
900 CLS#1:CLS#2:IF o=r2 THEN o=0:FOR i=r1 TO r1+r2-1:ri(i)=0:NEXT
910 r=INT(r2*RND)+r1:IF ri(r)<>0 THEN 910
920 PRINT#1,a(r,q):l=LEN(a(r,q1))
930 CLS#2:FOR t=1 TO l:PRINT#2,CHR$(255);:SOUND 4,100,30,5
940 IF (SQ(4) AND 128)=128 THEN 940 ELSE NEXT t
950 d="":e="":CALL &BCA7:CALL &BB03:wa=wa(p)
960 LOCATE#2,1,1:CLS#3:ti=0:EVERY wa GOSUB 1420
970 FOR t=1 TO l
980 d=INKEY$:IF d="" THEN call &bd19:goto 980 ELSE d=UPPER$(d)
990 IF INKEY(9)=0 THEN IF sc(p)>=5 THEN sc(p)=sc(p)-5:LOCATE 19,3:PRINT sc(p):d=MID$(a(r,q1),t,1)
1000 IF ti=10 THEN 1050
1010 IF INKEY(79)=0 AND t>1 THEN PRINT #2,CHR$(8);CHR$(255);CHR$(8);:e=LEFT$(e,LEN(e)-1):t=t-1:GOTO 980
1020 IF d="-" OR d=" " OR d="'" OR d="." THEN PRINT#2,d;:GOTO 1040
1030 IF ASC(d)>90 OR ASC(d)<65 THEN 980 ELSE PRINT#2,d;
1040 SOUND 2,30+r,15,5:e=e+d:NEXT t
1050 ti=REMAIN(0):CLS#3:CLS#4
1060 IF e<>a(r,q1) THEN GOSUB 1330 ELSE GOSUB 1150:GOSUB 1605:'|PUT,1,48,&7600:|PUT,7,48,&7880:|PUT,67,48,&7B00:|PUT,73,48,&7D80
1070 NEXT p
1080 NEXT
1090 PEN 3:LOCATE 10,25:PRINT"BITTE TASTE DRUECKEN":CALL &BB18
1100 CLS#3:GOTO 1710:'ENDE
1110 '
1120 REM *************
1130 REM ** KORREKT **
1140 REM *************
1150 sc(p)=sc(p)+20:LOCATE 19,3:PRINT sc(p)
1160 PRINT#3,"K O R R E C K T";:pe1=3:pe2=1:ri(r)=1:o=o+1:GOSUB 1520
1170 '|GET,1,48,&7600:|GET,7,48,&7880:|GET,67,48,&7B00:|GET,73,48,&7D80
1180 while inkey$<>"":wend:'FOR i=1 TO 500:d=INKEY$:NEXT
1190 gosub 4610:'|SHOW,&C000
1200 LOCATE 1,25:PRINT a(r,q):LOCATE 20,25:PRINT a(r,q1);
1210 PLOT x(r)-10,y(r)-10,1:DRAWR 20,20:PLOT x(r)-10,y(r)+10:DRAWR 20,-20
1220 INK 1,16,24
1230 RESTORE 2000:la=32:note=0
1240 d="":WHILE d="" and note<>-1:d=INKEY$:gosub 1900
1250 wend
1260 sound 135,0,0:INK 1,24
1270 IF UPPER$(d)="E" THEN LOCATE 1,1:STOP
1280 CALL &BCA7:RETURN
1290 '
1300 REM ************
1310 REM ** FEHLER **
1320 REM ************
1330 PRINT #3,"F E H L E R  !";:PEN #4,3
1340 PRINT #4,"DIE RICHTIGE":PRINT#4,"ANTWORT LAUTET :":PEN #4,1
1350 PRINT #4,a(r,q1);:pe1=1:pe2=3:GOSUB 1520
1360 IF sch<ma THEN LOCATE 15,24:PRINT"TASTE druecken...":d="X":WHILE d<>"":d=INKEY$:WEND:CALL &BB18:LOCATE 15,24:PRINT SPACE$(17);:CLS#4
1370 RETURN
1380 '
1390 REM  ********************
1400 REM  **  Zeitansprung  **
1410 REM  ********************
1420 PRINT#3,CHR$(ti+48);" ";:SOUND 1,600,10,5
1430 ti=ti+1:IF ti<10 THEN RETURN
1440 ti=REMAIN(0):ti=0
1450 PRINT#4,CHR$(10)"Zeit ueberschritten !"
1460 FOR i=100 TO 500 STEP 20:SOUND 1,i,10,5:SOUND 2,i+20,10,5:NEXT i
1470 ti=10:RETURN
1480 '
1490 REM  ****************************
1500 REM  *** Zeichnen des Balkens ***
1510 REM  ****************************
1520 py(0)=248/ma+py(p):h1=px(p)
1530 FOR i=py(p) TO py(0) STEP 2
1540 PLOT px(p),i,pe1:DRAWR -25,0,pe1:DRAWR -10,5,pe2:NEXT
1550 FOR i=i TO i+5 STEP 2:PLOT h1,i,2:h1=h1-4:DRAWR -25,0,2:NEXT
1560 py(p)=py(0)
1570 RETURN
1580 '
1590 REM *** BILDMASKE ***
1600 CLS
1605 LOCATE 10,2:PEN 2:PRINT"Spieler:":LOCATE 10,3:PRINT"Punkte :"
1610 LOCATE 2,5:PRINT"1":IF pl>1 THEN LOCATE 5,5:PRINT"2":IF pl>2 THEN LOCATE 35,5:PRINT"3":IF pl>3 THEN LOCATE 38,5:PRINT"4"
1620 PEN 1
1630 LOCATE 16,5:PRINT b(q):LOCATE 16,10:PRINT b(q1)
1640 '|RAHMEN,9,6,21,1:|RAHMEN,9,11,21,1
1641 xw=21:yw=1:x1=9:y1=6:GOSUB 1692:y1=11:GOSUB 1692
1650 '|RAHMEN,9,14,21,1:|RAHMEN,9,19,21,3
1651 y1=14:GOSUB 1692:yw=3:y1=19:GOSUB 1692
1660 LOCATE 2,24:PEN 3:PRINT CHR$(143);"= ok"
1670 LOCATE 2,2:PEN 1:PRINT CHR$(143);"= ko"
1680 RETURN
1690 '
1691 REM Rahmen
1692 PEN 1:LOCATE x1,y1:PRINT CHR$(150)STRING$(xw,154)CHR$(156)
1693 FOR i=1 TO yw:LOCATE x1,y1+i:PRINT CHR$(149)SPC(xw)CHR$(149):NEXT
1694 LOCATE x1,y1+yw+1:PRINT CHR$(147)STRING$(xw,154)CHR$(153)
1695 RETURN
1696 '
1700 REM  ****************
1710 REM  ***  E N D E ***
1720 REM  ****************
1730 MODE 1:GOSUB 2090
1740 PEN 1:PAPER 2
1750 LOCATE 12,3:PRINT"G A M E  O V E R"
1760 LOCATE 12,6:PRINT"Von"ma*20" Punkten:"
1770 LOCATE 12,10:PRINT"Scores:"
1780 FOR p=1 TO pl:LOCATE 12,p*2+10:PRINT c(p)+" ";sc(p):NEXT
1790 LOCATE 12,24:PRINT "Taste druecken ..."
1800 PAPER 0:RESTORE 2000:la=40:note=-1
1810 d="":WHILE d="":d=INKEY$:gosub 1900
1820 IF note=-1 THEN while sq(4)<>4:call &bd19:wend:FOR i=1 TO 7000/1000: call &bd19:NEXT:RESTORE 2000
1830 call &bd19:WEND
1836 sound 135,0,0
1840 CALL &BCA7
1850 RETURN
1860 '
1870 REM *******************
1880 REM ***  S O U N D  ***
1890 REM *******************
1900 la1=la
1910 READ note:IF note<0 THEN 1950
1920 SOUND 1,note,la1-2,10:SOUND 2,note,la1,8:SOUND 4,note,la1,6
1930 RETURN
1940 '
1950 IF note=-4 THEN la1=la*2:GOTO 1910:'1/2 Note
1960 IF note=-3 THEN la1=la*1.5:GOTO 1910:'3/8 Note
1970 IF note=-2 THEN la1=la/2:GOTO 1910:'1/8 Note
1980 RETURN:'-1=Ende
1990 '
2000 DATA 426,319,319,284,253,319
2010 DATA -4,213,-3,253,-2,253,239,-2,213,-2,239
2020 DATA -2,253,-2,239,213,-2,284,-2,319,-2,284
2030 DATA -2,253,284,426,319,-2,319,-2,284,253,319
2040 DATA -4,213,-3,253,-2,253,-2,239,-2,213
2050 DATA -2,253,-2,239,-3,284,319,-4,319
2060 DATA -1
2070 '
2080 REM *** Karte zeigen ***
2090 INK 0,2:INK 1,2:INK 2,2:INK 3,2
2100 CALL &BD19:cls:gosub 4610:'|SHOW,&C000
2110 INK 0,2:INK 1,24:INK 2,14:INK 3,9
2120 BORDER 2:RETURN
2130 REM *** Menue ausgeben ***
2140 GOSUB 2090:'Karte
2150 FOR i=1 TO j
2160 READ h1,h2,h3,h4,d
2170 LOCATE h1,h2:PEN h3:PAPER h4:PRINT d
2180 NEXT
2190 RETURN
2200 REM *** Menuepunkt auswaehlen ***
2210 PEN 0:PAPER 2:LOCATE 5,25:PRINT "(BITTE GEWUENSCHTES WAEHLEN) !";:PEN 1:PAPER 0
2220 PLOT 536,2,1:ph=1:EVERY 5 GOSUB 2280
2230 d=INKEY$:w=VAL(d):IF w>m2 OR w<m1 THEN call &bd19: goto 2230
2240 ph=REMAIN(0)
2250 PRINT w;
2260 RETURN
2270 REM Stadtpunkte
2280 IF TEST(x(ph),y(ph))<>2 THEN PLOT x(ph),y(ph):SOUND 1,x(ph),2,5:SOUND 2,y(ph),5,5
2290 ph=ph+1:IF ph>n THEN ph=1:PLOT 536,2,TEST(536,2) XOR 1
2300 RETURN
2310 DATA 12,4,3,1," M E N U E :"
2320 DATA 12,7,1,2,1) SPIELEN
2330 DATA 12,9,1,2,2) FRAGENBEREICH
2340 DATA 12,11,1,2,3) FRAGENANZAHL
2350 DATA 12,13,1,2,4) FRAGENART
2360 DATA 12,16,1,2,5) SCHWIERIGKEIT
2370 DATA 12,18,1,2,6) MITSPIELER
2380 DATA 12,21,3,1,7) ENDE
2390 '
2400 DATA 12,4,3,1,"FRAGENBEREICH:"
2410 DATA 12,7,1,2,1) Erde
2420 DATA 12,9,1,2,2) Europa
2430 DATA 12,11,1,2,3) Afrika
2440 DATA 12,13,1,2,4) Amerika
2450 DATA 12,15,1,2,5) Asien
2460 '
2470 DATA 12,4,3,1,"FRAGENANZAHL:"
2480 DATA 12,7,1,2,-->
2490 '
2500 DATA 12,4,3,1,"FRAGE NACH:"
2510 DATA 12,9,1,2,1) Hauptstadt
2520 DATA 12,11,1,2,2) Land
2530 '
2540 DATA 12,4,3,1,"Schwierigkeitsgrad:"
2550 DATA 12,9,1,2,1) Profi
2560 DATA 12,11,1,2,2) Fortgeschrittener
2570 DATA 12,13,1,2,3) Anfaenger
2580 '
2590 DATA 12,4,3,1,"Mitspieler:"
2600 '
2610 REM  *****************************
2620 REM  *****                   *****
2630 REM  *****     D A T E N     *****
2640 REM  *****                   *****
2650 REM  *****************************
2660 '
2670 REM  ***************************
2680 REM  ***     E U R O P A     ***
2690 REM  ***************************
2700 REM  ** 34  LAENDER IN EUROPA **
2710 REM  ***************************
2720 DATA BRD,BONN,310,276
2730 DATA DDR,OSTBERLIN,318,282
2740 DATA ALBANIEN,TIRANA,336,252
2750 DATA ANDORRA,ANDORRA LA VELLA,296,260
2760 DATA BELGIEN,BRUESSEL,304,278
2770 DATA BULGARIEN,SOFIA,340,260
2780 DATA CSSR,PRAG,322,272
2790 DATA DAENEMARK,KOPENHAGEN,314,296
2800 DATA FINNLAND,HELSINKI,336,308
2810 DATA FRANKREICH,PARIS,300,274
2820 DATA GRIECHENLAND,ATHEN,340,248
2830 DATA GROENLAND,GODTHAB,212,318
2840 DATA GROSSBRITANNIEN,LONDON,294,284
2850 DATA IRLAND,DUBLIN,288,292
2860 DATA ISLAND,REYKJAVIK,266,332
2870 DATA ITALIEN,ROM,324,252
2880 DATA JUGOSLAWIEN,BELGRAD,338,256
2890 DATA LIECHTENSTEIN,VADUZ,312,264
2900 DATA LUXEMBURG,LUXEMBURG,308,272
2910 DATA MALTA,LA VALLETTA,324,240
2920 DATA MONACO,MONACO,308,260
2930 DATA NIEDERLANDE,AMSTERDAM,306,284
2940 DATA NORWEGEN,OSLO,306,308
2950 DATA OESTERREICH,WIEN,326,264
2960 DATA POLEN,WARSCHAU,336,280
2970 DATA PORTUGAL,LISSABON,286,248
2980 DATA RUMAENIEN,BUKAREST,340,266
2990 DATA SAN MARINO,SAN MARINO,326,256
3000 DATA SCHWEDEN,STOCKHOLM,328,304
3010 DATA SCHWEIZ,BERN,304,264
3020 DATA SPANIEN,MADRID,290,254
3030 DATA TUERKEI,ANKARA,354,256
3040 DATA UDSSR,MOSKAU,360,294
3050 DATA UNGARN,BUDAPEST,334,264
3060 '
3070 REM  ***************************
3080 REM  ***     A F R I K A     ***
3090 REM  ***************************
3100 REM  ** 55  LAENDER IN AFRIKA **
3110 REM  ***************************
3120 DATA AEGYPTEN,KAIRO,358,226
3130 DATA AEQUATORIAL-GUINEA,MALABO,312,164
3140 DATA AETHIOPIEN,ADDIS ABEBA,370,176
3150 DATA ALGERIEN,ALGIER,306,244
3160 DATA ANGOLA,LUANDA,322,140
3170 DATA BENIN,CONONOU,304,168
3180 DATA BOTSWANA,GABORONE,346,102
3190 DATA BURUNDI,BUJUMBURA,362,158
3200 DATA DSCHIBUTI,DSCHIBUTI,382,182
3210 DATA ELFENBEINKUESTE,ABIDJAN,288,164
3220 DATA GABUN,LIBREVILLE,316,156
3230 DATA GAMBIA,BANJUL,270,186
3240 DATA GHANA,ACCRA,296,164
3250 DATA GUINEA,CONAKRY,270,176
3260 DATA GUINEA-BISSAU,BISSAU,270,180
3270 DATA KAMERUN,JAUNDE,322,170
3280 DATA KAP VERDE,PRAIA,258,188
3290 DATA KENIA,NAIROBI,374,164
3300 DATA KOMOREN,MORONI,382,134
3310 DATA KONGO,BRAZZAVILLE,326,152
3320 DATA LESOTHO,MASERU,346,88
3330 DATA LIBERIA,MONROVIA,274,166
3340 DATA LIBYEN,TRIPOLIS,322,234
3350 DATA MADAGASKAR,ANTANANARIVO,390,116
3360 DATA MALAWI,LILONGWE,362,122
3370 DATA MALI,BAMAKO,284,182
3380 DATA MAROKKO,RABAT,282,236
3390 DATA MAURETANIEN,NUAKSCHOTT,268,200
3400 DATA MAURITIUS,PORT LOUIS,406,110
3410 DATA MAYOTTE,DZAOUDZI,386,132
3420 DATA MOSAMBIK,MAPUTO,362,100
3430 DATA NAMIBIA,WINDHUK,326,102
3440 DATA NIGER,NIAMEY,304,182
3450 DATA NIGERIA,LAGOS,310,170
3460 DATA OBERVOLTA,WAGADUGU,296,180
3470 DATA REUNION,SAINT-DENIS,398,110
3480 DATA RUANDA,KIGALI,362,162
3490 DATA SAMBIA,LUSAKA,350,120
3500 DATA SAO TOME,SAO TOME,310,158
3510 DATA SENAGAL,DAKAR,268,190
3520 DATA SESCHELLEN,VICTORIA,394,156
3530 DATA SIERRA LEONE,FREETOWN,272,170
3540 DATA SIMBABWE,HARARE,356,112
3550 DATA SOMALIA,MOGADISCHU,386,186
3560 DATA ST.HELENA,JAMESTOWN,284,122
3570 DATA SUDAN,KHARTUM,358,194
3580 DATA SUEDAFRIKA,PRETORIA,352,100
3590 DATA SWASILAND,MBABANE,356,98
3600 DATA TANSANIA,DARESSALAM,376,144
3610 DATA TOGO,LOME,300,166
3620 DATA TSCHAD,N'DJAMENA,328,184
3630 DATA TUNESIEN,TUNIS,314,242
3640 DATA UGANDA,KAMPALA,366,170
3650 DATA ZAIRE,KINSHASA,318,150
3660 DATA ZENTRALAFRIK.REP.,BANGUI,338,172
3670 '
3680 REM  *********************
3690 REM  ***    AMERIKA    ***
3700 REM  *********************
3710 REM  ** 34 L.in Amerika **
3720 REM  *********************
3730 DATA ANTIGUA,ST.JOHN'S,168,200
3740 DATA BAHAMAS,NASSAU,150,216
3750 DATA BARBADOS,BRIDGETOWN,174,194
3760 DATA BELIZE,BELIZE,126,200
3770 DATA COSTA RICA,SAN JOSE,130,182
3780 DATA DOMINICA,ROSEAU,170,198
3790 DATA DOMINIKAN.REP.,SANTO DOMINGO,158,204
3800 DATA EL SALVADOR,SAN SALVADOR,126,190
3810 DATA GRENADA,ST.GEORGE'S,174,188
3820 DATA GUATEMALA,GUATEMALA,126,194
3830 DATA HAITI,PORT-AU-PRINCE,154,206
3840 DATA HONDURAS,TEGUCIGALPA,130,192
3850 DATA JAMAIKA,KINGSTON,146,202
3860 DATA KANADA,OTTAWA,154,266
3870 DATA KUBA,HAVANNA,138,212
3880 DATA MEXIKO,MEXIKO,104,210
3890 DATA NICARAGUA,MANAGUA,128,186
3900 DATA PANAMA,PANAMA,124,184
3910 DATA ST.LUCIA,CASTRIES,174,194
3920 DATA ST.VINCENT,KINGSTOWN,174,190
3930 DATA TRINIDAT,PORT OF SPAIN,174,186
3940 DATA USA,WASHINGTON,146,250
3950 '
3960 DATA ARGENTINIEN,BUENOS AIRES,186,80
3970 DATA BOLIVIEN,LA PAZ,168,122
3980 DATA BRASILIEN,BRASILIA,204,126
3990 DATA CHILE,SANTIAGO,164,80
4000 DATA ECUADOR,QUITO,150,162
4010 DATA GUYANA,GEORGETOWN,182,180
4020 DATA KOLUMBIEN,BOGOTA,156,174
4030 DATA PARAGUAY,ASUNCION,184,110
4040 DATA PERU,LIMA,148,134
4050 DATA SURINAM,PARAMARIBO,186,176
4060 DATA URUGUAY,MONTEVIDEO,188,84
4070 DATA VENEZUELA,CARACAS,164,186
4080 '
4090 REM  *************************
4100 REM  ***     A S I E N     ***
4110 REM  *************************
4120 REM  ** 41 Laender in Asien **
4130 REM  *************************
4140 DATA AFGANISTAN,KABUL,424,238
4150 DATA BAHRAIN,MANAMA,402,218
4160 DATA BANGLADESCH,DACCA,466,206
4170 DATA BHUTAN,THIMBU,466,224
4180 DATA BIRMA,RANGUN,484,196
4190 DATA TAIWAN,TAIPEH,530,210
4200 DATA CHINA,PEKING,520,252
4210 DATA INDIEN,NEU-DELHI,454,226
4220 DATA INDONESIEN,JAKARTA,512,146
4230 DATA IRAK,BAGDAD,386,234
4240 DATA IRAN,TEHERAN,404,238
4250 DATA ISRAEL,JERUSALEM,362,234
4260 DATA JAPAN,TOKIO,564,244
4270 DATA JEMEN,SANA,386,194
4280 DATA SUEDJEMEN,ADEN,390,186
4290 DATA JORDANIEN,AMMAN,366,234
4300 DATA KAMPUTSCHEA,PHNOM PENH,504,190
4310 DATA KATAR,DOHA,404,214
4320 DATA NORDKOREA,PJOENGJANG,534,248
4330 DATA SUEDKOREA,SEOUL,538,244
4340 DATA KUWAIT,KUWAIT,390,226
4350 DATA LAOS,VIENTIANE,502,198
4360 DATA LIBANON,BEIRUT,362,238
4370 DATA MALAYSIA,KUALA LUMPUR,500,168
4380 DATA MALEDIVEN,MALE,446,180
4390 DATA MONGOLEI,ULAN-BATOR,506,268
4400 DATA NEPAL,KATMANDU,462,226
4410 DATA OMAN,MASKAT,410,212
4420 DATA PAKISTAN,ISLAMABAD,442,232
4430 DATA PHILIPPINEN,MANILA,538,190
4440 DATA SAUDI-ARABIEN,RIAD,390,214
4450 DATA SINGAPUR,SINGAPUR,502,162
4460 DATA SRI LANKA,COLOMBO,456,178
4470 DATA SYRIEN,DAMASKUS,364,236
4480 DATA THAILAND,BANGKOK,498,190
4490 DATA ARABISCHE EMIRATE,ABU DHABI,406,212
4500 DATA VIETNAM,HANOI,504,204
4510 DATA ZYPERN,NIKOSIA,354,234
4520 '
4530 DATA AUSTRALIEN,CANBERRA,584,66
4540 DATA FIDSCHI,SUVA,638,96
4550 DATA NEUSEELAND,WELLINGTON,614,38
4560 '
4570 '
4600 REM Decode
4610 rhl=&8000:rbc=&1724:rde=&c000
4611 ra=peek(rhl)
4612 rhl=rhl+1:rbc=rbc-1
4613 ra2=peek(rhl):if ra=ra2 then 4620
4614 poke rde,ra2
4615 rhl=rhl+1:rde=rde+1:rbc=rbc-1
4616 if rbc>0 then 4613
4617 return
4618 '
4620 rhl=rhl+1:rbc=rbc-3
4621 ra3=peek(rhl):rhl=rhl+1
4622 ra4=peek(rhl):rhl=rhl+1
4630 poke rde,ra4
4631 rde=rde+1
4632 ra3=ra3-1:if ra3>0 then 4630
4633 if rbc>0 then 4613
4640 return
4680 rem
*/ });
