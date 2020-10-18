/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem lifespan - Lifespan (Lebenserwartung)
2 rem (c) ...
10 REM Lebenserwartung
20 MODE 1:q$="Lebenserwartung":GOSUB 2020
30 q$="CPC  464/664/6128":GOSUB 2020
40 q$="
Dieses ist ein Lebenserwartungstest.":GOSUB 2020
50 q$="Anweisungen erforderlich ? (J/N)":GOSUB 2020
60 GOSUB 2000:IF t$="N" THEN 470 ELSE IF t$<>"J" THEN 60
200 CLS:LOCATE 1,12:q$="Keine Anweisungen vorhanden":GOSUB 2020
460 LOCATE 1,25:q$="Taste druecken ...":GOSUB 2020:CALL &BB18
470 CLS:r5=1:z=72
490 a$="ABCDEMGHIJKLFNO"
500 GOTO 1700
510 r5=r5+1:IF r5 MOD 3 THEN CLS
520 IF r5>21 THEN 1900
530 DATA *** Geschlecht ***
540 DATA Bist Du maennlich oder weiblich ?
550 DATA M=maennlich.
560 DATA " F=weiblich."
570 DATA MF
580 DATA *** Lebensstil ***
590 DATA Wo wohnst du ?
600 DATA G=in einer Stadt mit mehr als,2 Mill. Einwohnern.
610 DATA K=in einer Stadt unter 100000,Einw. oder in einem Dorf
620 DATA " I=weder noch."
630 DATA GKI
640 DATA ++ Wie arbeitest Du ? ++
650 DATA M=am Schreibtisch
660 DATA L=koerperlich schwer
670 DATA " I=keines von beiden"
680 DATA MLI
690 DATA Wie lange treibst Du intensiv Sport ?
700 DATA "(Tennis, Laufen, Schwimmen, usw.)"
710 DATA F= 5 mal pro Woche ca. 1/2 Stunde
720 DATA K= ca. 2 oder 3 mal pro Woche
730 DATA " I=ich trainiere nicht auf solche Art"
740 DATA FKI
750 DATA ++ Mit wem wohnst Du ? ++
760 DATA "N=mit Frau, Freund oder Familie"
770 DATA Ich lebe seit meinem,25.Lebensjahr alleine:
780 DATA H=die letzten 1-10 Jahre
790 DATA G= die letzten 11-20 Jahre
800 DATA M= die letzten 21-30 Jahre
810 DATA E= die letzten 31-40 Jahre
815 DATA " D= mehr als 40 Jahre"
820 DATA NHGMED
830 DATA *** Schlaf ***
840 DATA Schlaefst Du mehr als,10 Std. pro Nacht ?
850 DATA I= Nein
860 DATA " E= Ja"
870 DATA IE
880 DATA *** geistiger Zustand ***
890 DATA "M= gespannt,aggresiv,veraergert"
900 DATA "L= sorglos,entspannt oder ruhig"
910 DATA " I= weder noch"
920 DATA MLI
930 DATA *** Wie fuehlst Du Dich ? ***
940 DATA Bist Du gluecklich oder ungluecklich ?
950 DATA J= gluecklich
960 DATA G= ungluecklich
970 DATA " I=weder noch"
980 DATA JGI
990 DATA *** Fahren ***
1000 DATA Hattest du letztes Jahr einen Straf-
1005 DATA zettel fuer zu schnelles Fahren ?
1010 DATA I= Nein
1020 DATA " H= Ja"
1030 DATA IH
1040 DATA *** Einkommen ***
1050 DATA Verdienst Du mehr als,"25000,- pro Jahr ?"
1060 DATA I= Nein
1070 DATA " G= Ja"
1080 DATA IG
1090 DATA *** Schulbildung ***
1100 DATA J= Gymnasium absolviert
1110 DATA L= Universitaetsdiplom
1120 DATA " I=nichts dergleichen"
1130 DATA JLI
1140 DATA *** Alter ***
1150 DATA 65 oder aelter und noch am arbeiten ?
1160 DATA L= Ja
1170 DATA " I= Nein"
1180 DATA LI
1190 DATA *** Abstammung ***
1195 DATA ( Alter der Grossaeltern )
1200 DATA K= manche 85 Jahre oder aelter
1210 DATA O= alle vier ueber 80 Jahre
1220 DATA " I= alle starben juenger"
1230 DATA KOI
1240 DATA Ist ein Elternteil an Herzinfakt,oder Schlag vor
1250 DATA dem 50. Lebensjahr gestorben ?
1270 DATA E= Ja
1280 DATA " I= Nein"
1290 DATA EI
1300 DATA *** Familienkrankheiten ***
1310 DATA "Hat Bruder, Schwester unter 50 Krebs,"
1320 DATA Herzbeschwerden od.Zucker,schon als Kind?
1330 DATA M= Ja
1340 DATA " I=Nein"
1350 DATA MI
1360 DATA *** Gesundheit ***
1370 DATA ++ Wieviel rauchst Du ? ++
1380 DATA A= mehr als 2 Schachteln pro Tag
1390 DATA C= ein bis zwei Schachteln pro Tag
1400 DATA M= eine halbe Schachtel pro Tag
1405 DATA " I= ich rauche nicht"
1410 DATA ACMI
1420 DATA ++ Trinken ++
1430 DATA Trinkst Du das Entsprechende einer
1440 DATA 1/4 Flasche pro Tag ?
1450 DATA H= Ja
1460 DATA " I=Nein"
1470 DATA HI
1480 DATA ++ Gewicht ++
1490 DATA A= mehr als 25 kg Uebergewicht
1500 DATA E= 15-25 kg Uebergewicht
1510 DATA G= 5 -15 kg Uebergewicht
1520 DATA " I= kein Uebergewicht"
1530 DATA AEGI
1540 DATA *** Gesundheitstest ***
1550 DATA "Machst Du,falls maennlich und ueber 40,"
1555 DATA einen jaehrlichen Test ?
1560 DATA K= Ja
1570 DATA " I= Nein(nicht maennlich,unter 40)"
1580 DATA KI
1590 DATA "Suchst Du, falls weiblich, jaehrlich"
1595 DATA einen Gynaekologen auf ?
1600 DATA K= Ja
1610 DATA " I= Nein (oder keine Frau)"
1620 DATA KI
1630 DATA *** Gegenwaertiges Alter ***
1640 DATA K= zwischen 30 und 40 Jahren
1650 DATA L= zwischen 40 und 50
1660 DATA F= zwischen 50 und 70
1670 DATA N= ueber 70
1680 DATA " I= unter 30"
1690 DATA KLFNI
1700 q$="":WHILE LEFT$(q$,1)<>" ":READ q$:GOSUB 2020:WEND
1760 READ c$
1770 PRINT"
 Waehle einen der obrigen Buchstaben !
"
1780 GOSUB 2000:c2=INSTR(c$,t$):IF c2=0 THEN 1780
1840 m=INSTR(a$,t$)-9
1850 z=z+m
1860 GOTO 510
1900 q$="Du kannst erwarten, ein Alter von":GOSUB 2020
1910 PRINT TAB(8)z;"Jahren zu erreichen.


"
1920 IF z<60 THEN 1980
1930 FOR y=60 TO z STEP 5:READ m$,f$:NEXT
1940 q$="Du ueberlebst "+m$+"% der Maenner":GOSUB 2020
1950 q$="und "+f$+"% der Frauen.":GOSUB 2020
1960 DATA 26,15,36,20,48,30,61,39
1970 DATA 75,53,87,70,96,88,99.9,99.6
1980 PRINT"Ende.":END
2000 t$=INKEY$:IF t$="" THEN 2000
2010 t$=UPPER$(t$):RETURN
2020 LOCATE 40/2-LEN(q$)/2,VPOS(#0):PRINT q$:RETURN
*/ });
