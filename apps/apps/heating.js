/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem heating - Efficiency calculation of heating
2 rem
3 rem
10 n=0:GOTO 100
80 CLS:BORDER 12,24:LOCATE 20,10:PRINT "Sie haben falsch gewaehlt?" 
90 FOR t=1 TO 2000:NEXT t:BORDER 0:CLS:RETURN  
100 REM ********************************************************************
110 REM ************* umrandung erstellen ***********************************
115 MODE 2:GOSUB 120:GOTO 200
120 FOR y=1 TO 4:PLOT 1,y:DRAWR 639,0:NEXT y
130 FOR y=396 TO 400:PLOT 1,y:DRAWR 639,0:NEXT y
140 FOR x=1 TO 4:PLOT x,1:DRAWR 0,399:NEXT x
150 FOR x=636 TO 640:PLOT x,1:DRAWR 0,399:NEXT x
160 FOR y=358 TO 362:PLOT 1,y:DRAWR 639,0:NEXT y
170 FOR y=70 TO 74:PLOT 1,y:DRAWR 639,0:NEXT y
180 RETURN
190 REM *********** ende umrandung erstellen ***************************
200 REM 
210 REM ueberschrift im ersten window
220 REM im zweiten window bearbeitungsteil
230 REM im dritten window steuerung
240 WINDOW #1,2,79,2,2:WINDOW SWAP 1
250 PRINT SPC(20)"Nutzungsgradberechnung Ihrer Heizung"  
260 WINDOW SWAP 0:WINDOW #3,2,79,22,24:WINDOW SWAP 3:CLS
280 PRINT SPC(5)"Beantworten Sie die o.g.Fragen!Wenn Sie keine eigenen Werte"
290 PRINT SPC(5)"kennen dann geben Sie die Vorschlagswerte ein.Es werden dann"
295 PRINT SPC(5)"die Durchschnittswerte uebernommen!"
300 WINDOW SWAP 0:WINDOW #2,2,79,4,20:WINDOW SWAP 2:CLS
320 PRINT:PRINT SPC(25)"Sie haben folgende Heizung:"
330 PRINT:PRINT SPC(25)"Oelheizung............... 1"
340 PRINT:PRINT SPC(25)"Gasheizung............... 2"
350 PRINT:PRINT:PRINT SPC(25)"Meine Wahl ist..........";:INPUT Heizung
353 IF heizung<1 OR heizung>2 THEN GOTO 355 ELSE 360 
355 GOSUB 80:GOTO 300
360 ON heizung GOTO 370,380
370 oelh=heizung:GOTO 400    
380 gash=heizung:GOTO 400
400 REM *****************************************************************
402 WINDOW SWAP 0:WINDOW #3,3,78,22,24:WINDOW SWAP 3
405 CLS
407 PRINT SPC(10)"Diese Angabe ist wichtig fuer die Ermittlung"
409 PRINT SPC(20)"des Abstrahlverlustes!"
410 WINDOW SWAP 0:WINDOW #2,3,78,4,20:WINDOW SWAP 2:CLS   
420 PRINT:PRINT SPC(20)"Die Kesselwassertemperatur ist:"
430 PRINT:PRINT SPC(20)"gleitend........................... 1"  
440 PRINT:PRINT SPC(20)"ueberwiegend bei 60 Grad Celsius... 2" 
450 PRINT:PRINT SPC(20)"ueberwiegend bei 80 Grad Celsius... 3"   
460 PRINT:PRINT
470 PRINT SPC(20)"Meine Wahl ist.....................";:INPUT Temperatur
473 IF temperatur<1 OR temperatur>3 THEN GOTO 475 ELSE 480
475 GOSUB 80:GOTO 410
480 ON Temperatur GOTO 490,500,510
490 gleittemp=Temperatur:GOTO 540
500 sechzigtemp=Temperatur:GOTO 540
510 achtzigtemp=Temperatur:GOTO 540
532 WINDOW SWAP 0:WINDOW #3,2,78,22,24:WINDOW SWAP 3:CLS
535 WINDOW SWAP 0:WINDOW #2,2,78,4,20:WINDOW SWAP 2
540 REM ************** eingabe heizoelverbrauch pro jahr ********************
545 IF oelh GOTO 550 ELSE 580
550 CLS:PRINT:PRINT SPC(20)"Der Heizoelverbrauch pro Jahr ist:"    
560 PRINT
570 PRINT SPC(25)" Liter/Jahr";:INPUT oelverbr:IF oelverbr=0 THEN GOTO 575 ELSE     600
575 BORDER 0,24:CLS:LOCATE 20,10:PRINT "Laeuft Ihr Kessel ohne Oel?":FOR t=1 TO     2000:NEXT t:BORDER 0:CLS:GOTO 550
580 CLS:PRINT:PRINT SPC(20)"Der Gasverbrauch pro Jahr ist:" 
590  PRINT:PRINT SPC(25)" m^3/Jahr";:INPUT gasverbr:IF gasverbr=0 THEN GOTO 595 ELSE    600     
595 BORDER 0,24:CLS:LOCATE 20,10:PRINT "Laeuft Ihr Kessel ohne Gas?":FOR t=1 TO     2000:NEXT t:BORDER 0:CLS:GOTO 580
600 REM *******************************************************************
610 REM****** eingabe schornsteinfegerprotokoll *******************************
620 CLS:PRINT:GOSUB 700   
630 PRINT SPC(15)"Folgende Werte koennen Sie dem Schornsteinfeger-"    
640 PRINT SPC(20)"protokoll entnehmen:"
650 PRINT:PRINT
660 PRINT SPC(20)"Abgasverlust in %.....";:INPUT abgverl
665 IF abgverl =0 OR abgverl >16 THEN GOTO 666 ELSE 670
666 BORDER 0,24:CLS:LOCATE 20,10:PRINT "Ihr Abgasverlust ist unrealistisch!" 
667 FOR t=1 TO 2000:NEXT t:BORDER 0:CLS:GOTO 630
670 PRINT SPC(20)"Nennleistung in kW....";:INPUT nennl
675 IF nennl <12 OR nennl >125 THEN GOTO 676 ELSE 680
676 BORDER 0,24:CLS:LOCATE 20,10:PRINT "Der Wertebereich ist ueberschritten" 
677 FOR t=1 TO 2000:NEXT t:BORDER 0:CLS:GOTO 630    
680 PRINT SPC(20)"Baujahr des Kessels...";:INPUT bauj
685 IF bauj <40 THEN GOTO 686 ELSE 690
686 BORDER 0,24:CLS:LOCATE 20,10:PRINT "Das Baujahr ist unrealistisch"  
687 FOR t=1 TO 2000:NEXT t:BORDER 0:CLS:GOTO 630  
690 REM *********************************************************************
695 GOTO 760
700 REM loeschen des dritten fensters
710 WINDOW #3,2,78,22,24:WINDOW SWAP 3:CLS
720 PRINT SPC(10)"Geben Sie den Abgasverlust in Prozent ein!"
725 PRINT SPC(10)"Leistungsbereich 12 kW bis 120 kW" 
730 PRINT SPC(10)"Geben Sie als Baujahr nur die zwei letzten Ziffern ein!" 
740 WINDOW SWAP 0:WINDOW #2,2,78,4,20:WINDOW SWAP 2:CLS:RETURN
760 REM **************** berechnen kesselwirkungsgrad ************************
765 WINDOW SWAP 0:WINDOW #3,2,78,22,24:WINDOW SWAP 3:CLS
768 WINDOW #2,2,78,4,20:WINDOW SWAP 2
770 IF nennl >12 AND nennl<25 THEN nennl=24 ELSE 780:GOTO 810  
780 IF nennl >24 AND nennl<50 THEN nennl=49 ELSE 790:GOTO 810   
790 IF nennl >49 AND nennl<120 THEN nennl=119 ELSE 800:GOTO 810   
800 IF nennl >119 THEN nennl=120:GOTO 810     
810 IF bauj<66 THEN bauj=65 ELSE 820:GOTO 860    
820 IF bauj>65 AND bauj<74 THEN bauj=73 ELSE 830:GOTO 860
830 IF bauj>73 AND bauj<79 THEN bauj=78 ELSE 840:GOTO 860    
840 IF bauj>78 AND bauj<81 THEN bauj=80 ELSE 850:GOTO 860   
850 IF bauj>80 THEN bauj=81 :GOTO 860   
860 IF nennl=24 AND bauj=65 THEN abstverl=8 ELSE 870:GOTO 1010
870 IF nennl=24 AND bauj=73 THEN abstverl=6 ELSE 880:GOTO 1010
880 IF nennl=24 AND bauj=78 THEN abstverl=5 ELSE 890:GOTO 1010
890 IF nennl=24 AND bauj=80 THEN abstverl=3.5 ELSE 900:GOTO 1010
900 IF nennl=24 AND bauj=81 THEN abstverl=3 ELSE 910:GOTO 1010
910 IF nennl=49 AND bauj=65 THEN abstverl=6 ELSE 920:GOTO 1010
920 IF nennl=49 AND bauj=73 THEN abstverl=5 ELSE 930:GOTO 1010
930 IF nennl=49 AND bauj=78 THEN abstverl=4 ELSE 940:GOTO 1010
940 IF nennl=49 AND bauj=80 THEN abstverl=3 ELSE 950:GOTO 1010
950 IF nennl=49 AND bauj=81 THEN abstverl=2.5 ELSE 960:GOTO 1010
960 IF nennl=119 AND bauj=65 THEN abstverl=4.5 ELSE 970:GOTO 1010
970 IF nennl=119 AND bauj=73 THEN abstverl=4 ELSE 980:GOTO 1010
980 IF nennl=119 AND bauj=78 THEN abstverl=3 ELSE 990:GOTO 1010
990 IF nennl=119 AND bauj=80 THEN abstverl=2 
1000 IF nennl=119 AND bauj=81 THEN abstverl=1.5 :GOTO 1010
1010 REM *********** abfrage kesseltemperatur ****************************
1020 IF gleittemp THEN abstverl=abstverl/2 ELSE 1030:GOTO 1050
1030 IF sechzigtemp THEN abstverl=abstverl*0.75 ELSE 1040:GOTO 1050
1040 IF achtzigtemp THEN abstverl=abstverl :GOTO 1050
1050 REM ************
1060 kwirkgr=100-abgverl-abstverl:GOTO 1070
1062 WINDOW SWAP 0:WINDOW #3,3,78,22,24:WINDOW SWAP 3:CLS
1064 PRINT SPC(10)"Haben Sie keine eigene Zahl,dann geben Sie bitte die"
1066 PRINT SPC(24)"die Vorschlagszahl ein!"
1068 WINDOW SWAP 0:WINDOW #2,2,78,4,20:WINDOW SWAP 2:RETURN
1070 CLS
1080 PRINT:PRINT SPC(35)"Sie haben eine":PRINT:PRINT
1090 PRINT:PRINT:PRINT SPC(25)"Heizung ohne Brauchwasser.. 1"
1100 PRINT:      PRINT SPC(25)"Heizung mit Brauchwasser... 2"
1110 PRINT:PRINT SPC(25)"Meine Wahl ist..";:INPUT wahl
1115 IF wahl<1 OR wahl>2 THEN GOTO 1117 ELSE 1120
1117 GOSUB 80:GOTO 1070
1120 ON wahl GOTO 1130,1140
1130 tageob=275:GOTO 1170  
1135 PRINT TAB(15)"Heizung ohne Brauchwasser..";:RETURN     
1140 tagemb=365:GOTO 1230  
1145 PRINT TAB(15)"Heizung mit Brauchwasser...";:RETURN    
1170 CLS:PRINT :GOSUB 1062
1180 PRINT SPC(20)"Wieviele Tage im Jahr war der Kessel in Betrieb?"  
1190 PRINT:PRINT:PRINT
1200 PRINT TAB(40)"Vorschlag:";:PRINT TAB(55)"Ihre Angabe:"    
1210 PRINT:GOSUB 1135:PRINT tageob;:PRINT TAB(58);:INPUT tageob 
1215 IF tageob=0 OR tageob>366 THEN GOTO 1216 ELSE 1220
1216 BORDER 0,24:CLS:LOCATE 20,10:PRINT "Ihre Angabe ist unrealistisch!"
1217 FOR t=1 TO 2000:NEXT t:BORDER 0:CLS:GOTO 1130 
1220 GOTO 1300
1230 CLS:PRINT:GOSUB 1062
1240 PRINT SPC(20)"Wieviele Tage im Jahr war der Kessel in Betrieb?"
1250 PRINT:PRINT:PRINT
1260 PRINT TAB(40)"Vorschlag:";:PRINT TAB(55)"Ihre Angabe:"
1270 PRINT:GOSUB 1145:PRINT tagemb;:PRINT TAB(58);:INPUT tagemb
1275 IF tagemb=0 OR tagemb>366 THEN GOTO 1276 ELSE 1280
1276 BORDER 0,24:CLS:LOCATE 20,10:PRINT "Ihre Angabe ist unrealistisch!" 
1277 FOR t=1 TO 2000:NEXT t:BORDER 0:CLS:GOTO 1140
1280 GOTO 1400  
1300 REM ***************************************************
1310 stundenob=tageob*24
1330 CLS
1340 PRINT SPC(15)"Wieviele Stunden war der Brenner in Betrieb?"
1350 PRINT:PRINT
1360 PRINT TAB(40)"Vorschlag:";:PRINT TAB(55)"Ihre Angabe:"  
1370 PRINT
1380 GOSUB 1135:PRINT "1600";:PRINT TAB(58);:INPUT fstundob  
1385 IF fstundob=0 OR fstundob>8784 THEN GOTO 1386 ELSE 1390
1386 BORDER 0,24:CLS:LOCATE 20,10:PRINT "Ihre Angabe ist unrealistisch!"
1387 FOR t=1 TO 2000:NEXT t:CLS:BORDER 0:GOTO 1330
1390 GOTO 1500
1400 REM *********************** heizung mit brauchwasser *****************
1410 stundenmb=tagemb*24
1430 CLS:PRINT:fstundmb=0    
1440 PRINT SPC(15)"Wieviele Stunden war der Brenner in Betrieb?"   
1450 PRINT:PRINT
1460 PRINT TAB(40)"Vorschlag:";:PRINT TAB(55)"Ihre Angabe:"  
1470 PRINT
1480 GOSUB 1145:PRINT "1800";:PRINT TAB(58);:INPUT fstundmb   
1485 IF fstundmb=0 OR fstundmb>8784 THEN GOTO 1486 ELSE 1550
1486 BORDER 0,24:CLS:LOCATE 20,10:PRINT "Ihre Angabe ist unrealistisch!"   
1487 FOR t=1 TO 2000:NEXT t:CLS:BORDER 0:GOTO 1430
1490 GOTO 1550
1500 REM ***************************************************************
1510 qstundob=(stundenob/fstundob)-1
1520 GOTO 1600
1550 REM ************
1560 qstundmb=(stundenmb/fstundmb)-1
1570 GOTO 1650
1600 REM ****************** berechnung jahresnutzungsgrad **************
1610 abstverl=abstverl*0.01:kwirkgr=kwirkgr*0.01
1620 quotient=1+(abstverl*qstundob)
1630 nutzungsgr=(kwirkgr/quotient)*100
1640 GOTO 1700
1650 REM *************** berechung jahresnutzungsgrad **************
1660 abstverl=abstverl*0.01:kwirkgr=kwirkgr*0.01
1670 quotient=1+(abstverl*qstundmb)
1680 nutzungsgr=(kwirkgr/quotient)*100   
1690 REM
1700 REM **************** ausdrucken nutzungsgrad *******************  
1702 WINDOW SWAP 0:WINDOW #3,2,78,22,24:WINDOW SWAP 3:CLS
1705 WINDOW SWAP 0:WINDOW #2,2,78,4,20:WINDOW SWAP 2
1710 CLS
1720 PRINT SPC(20)"Ihre Heizungsanlage hat einen:"
1730 PRINT:PRINT
1740 PRINT SPC(20)"Kesselwirkungsgrad von ";:PRINT USING "##.#";kwirkgr*100;:PRINT " %"
1760 PRINT SPC(20)"Jahresnutzungsgrad von ";:PRINT USING "##.#";nutzungsgr;:PRINT " %"
1770 WINDOW SWAP 0:WINDOW #3,2,78,22,24:WINDOW SWAP 3:CLS
1780 PRINT SPC(10)"Der Jahresnutzungsgrad ist wichtig fuer die "
1790 PRINT SPC(15)"Ausnutzung des Brennstoffs!"   
1800 WINDOW SWAP 0:WINDOW #2,2,78,4,20:WINDOW SWAP 2
1810 IF oelverbr THEN 1830 ELSE 1820
1820 gaswirkg=100-nutzungsgr:gasverl=(gasverbr/100)*gaswirkg
1822 PRINT:PRINT:PRINT:PRINT:PRINT:PRINT:PRINT:PRINT:PRINT:PRINT SPC(20)"Sie haben von ":PRINT 
1824 PRINT SPC(20);:PRINT USING "######.#";gasverbr;:PRINT " m^3 Gas":PRINT
1826 PRINT SPC(20);:PRINT USING "######.#";gasverl;:PRINT " m^3 Gas"
1828 PRINT:PRINT SPC(20)"durch den Kamin geblasen"  
1829 GOTO 1900
1830 oelwirkg=100-nutzungsgr:oelverl=(oelverbr/100)*oelwirkg
1840 PRINT:PRINT:PRINT:PRINT:PRINT:PRINT:PRINT:PRINT:PRINT:PRINT SPC(20)"Sie haben von ":PRINT
1850 PRINT SPC(20);:PRINT USING "######.#";oelverbr;:PRINT " Liter Heizoel" 
1855 PRINT
1860 PRINT SPC(20);:PRINT USING "######.#";oelverl;:PRINT " Liter Heizoel " 
1870 PRINT:PRINT SPC(20)"durch den Kamin geblasen"
1900 REM******************************
1905 GOSUB 1910:GOTO 1930
1910 WINDOW SWAP 0:WINDOW #3,2,78,22,24:WINDOW SWAP 3:CLS
1920 PRINT SPC(20) "L E E R T A S T E  bringt den naechsten Schritt!" 
1925 w$=INKEY$:IF w$="" THEN 1925   
1927 IF w$=CHR$(32) THEN 1928 ELSE 1925   
1928 CLS:RETURN
1930 WINDOW SWAP 0:WINDOW #2,2,78,4,20:WINDOW SWAP 2:CLS
1950 PRINT:PRINT
1960 PRINT SPC(10)"Die soeben angezeigten Werte sind abgespeichert und"
1970 PRINT SPC(10)"koennen durch Tastendruck im unteren Fenster wieder"
1980 PRINT SPC(30)"angezeigt werden!"
1990 PRINT:PRINT
2000 PRINT SPC(10)"Sie koennen jetzt einige Werte variieren um den Ein-"
2010 PRINT SPC(10)"fluss verschiedener Variablen zu erkennen!"
2020 PRINT:PRINT
2030 GOSUB 2900
2050 WINDOW #3,3,78,22,24:WINDOW SWAP 3:CLS:PRINT:PRINT  
2055 IF oelverl THEN GOTO 2060 ELSE 2070
2060 PRINT SPC(3)"Kesselwirkungsgrad:";:PRINT USING "##.#";kwirkgr*100;:PRINT " %";:PRINT "   Nutzungsgrad:";:PRINT USING "##.#";nutzungsgr;:PRINT " %"; 
2065 PRINT "  Verlust:";:PRINT USING "#####.#";oelverl;:PRINT " Liter"  
2068 GOTO 2080
2070 PRINT SPC(3)"Kesselwirkungsgrad:";:PRINT USING "##.#";kwirkgr*100;:PRINT " %";:PRINT "   Nutzungsgrad:";:PRINT USING "##.#";nutzungsgr;:PRINT " %"; 
2075 PRINT "  Verlust:";:PRINT USING "#####.#";gasverl;:PRINT " M^3"
2080 WINDOW SWAP 0:WINDOW #2,2,78,4,20:WINDOW SWAP 2:CLS:PRINT:PRINT  
2090 '
2100 PRINT SPC(20)"Welchen Wert wollen Sie variieren?":PRINT:PRINT
2110 PRINT SPC(20)"Abgasverlust.................... 1"
2120 PRINT SPC(20)"Bereitschaftsverlust............ 2"
2130 PRINT SPC(20)"Beenden des Programms........... 3"  
2140 PRINT:PRINT:wahl=0:n=0
2150 PRINT SPC(20)"Meine Wahl ist.................. ";:INPUT wahl 
2155 IF wahl=0 OR wahl>3 THEN GOTO 2158 ELSE 2180
2158 GOSUB 80:GOTO 2090
2160 n=n+1:IF n=4 THEN GOTO 2165 ELSE 2170   
2165 CLS:LOCATE 20,10:PRINT "Sie haben schon zweimal gewaehlt!"
2167 END
2170 RETURN:REM ***************************
2180 ON wahl GOTO 2200,2400,3000    
2200 CLS:GOSUB 2160 
2210 PRINT:PRINT:PRINT
2220 PRINT SPC(10)"Um wieviel Prozent soll der Abgasverlust verringert werden?"
2230 PRINT:PRINT
2240 PRINT SPC(10);:PRINT "Alter Abgasverl:";abgverl;:INPUT "   Neuer Abgasverlust:";nabgverl 
2245 abstverl=abstverl*100
2250 nkwirkgr=100-nabgverl-abstverl
2255 nkwirkgr=nkwirkgr*0.01
2260 nnutzungsgr=(nkwirkgr/quotient)*100
2270 nkwirkgr=nkwirkgr*100
2272 noelwirkg=100-nnutzungsgr:noelverl=(oelverbr/100)*noelwirkg
2274 ngaswirkg=100-nnutzungsgr:ngasverl=(gasverbr/100)*ngaswirkg
2280 WINDOW SWAP 0:WINDOW #3,3,78,22,24:WINDOW SWAP 3:PRINT
2290 PRINT wahl;:PRINT "Kesselwirkungsgrad:";:PRINT USING "##.#";nkwirkgr;:PRINT " %";:PRINT "   Nutzungsgrad:";:PRINT USING "##.#";nnutzungsgr;:PRINT " %";:PRINT "  Verlust:";
2292 IF noelverl THEN PRINT USING "#####.#";noelverl; ELSE 2294
2293 PRINT " Liter":GOTO 2300
2294 PRINT USING "#####.#";ngasverl;:PRINT " M^3"     
2300 WINDOW SWAP 0:WINDOW #2,2,78,4,20:WINDOW SWAP 2:CLS
2335 PRINT:PRINT SPC(20)"Welchen Wert wollen Sie variieren?"
2340 PRINT:PRINT SPC(20)"Bereitschaftsverlust........... 1" 
2350 PRINT SPC(20)"Beenden des Programms.......... 2" 
2360 PRINT:PRINT:wahl=0:PRINT SPC(20):INPUT "Meine Wahl ist.........",wahl 
2364 IF wahl<1 OR wahl>2 THEN GOTO 2365 ELSE 2370
2365 GOSUB 80:GOTO 2300 
2370 ON wahl GOTO 2400,3000    
2400 REM ***************************** bereitschaftsverlust
2410 CLS:wahl=wahl+1:GOSUB 2160    
2420 IF gleittemp THEN GOTO 2430 ELSE 2425    
2425 IF sechzigtemp THEN GOTO 2470 ELSE 2427   
2427 IF achtzigtemp THEN GOTO 2510
2430 PRINT SPC(20)"Sie haben eine gleitende Kesselwassertemperatur."
2440 PRINT SPC(20)"Der Bereitschaftsverlust ist niedrig.":PRINT:PRINT
2450 PRINT:PRINT SPC(20)"Sie koennen das Programm beenden!"
2465 GOSUB 2900:GOTO 3000  
2470 IF temperatur=2 THEN PRINT ELSE 2520:PRINT:PRINT
2480 PRINT SPC(20)"Ihr Kesselwasser hat ueberwiegend 60 Grad Celsius":PRINT
2490 PRINT SPC(20)"Wenn Sie einen Kessel mit gleitender Kesselwasser"
2495 PRINT SPC(20)"temperatur haetten,dann wuerden sich die Wirkungs"
2496 PRINT SPC(20)"grade wie folgt veraendern:
2497 GOSUB 2900
2500 GOTO 2600:REM sechzigtemperatur
2510 PRINT:PRINT SPC(20)"Ihr Kesselwasser hat ueberwiegend 80 Grad Celsius":PRINT
2520 PRINT SPC(20)"Beim Uebergang auf 6O Grad Kesselwassertemperatur"
2530 PRINT SPC(20)"aendert sich die Wirkungsgrad wie folgt:"
2535 GOSUB 2900
2540 GOTO 2660
2600 REM ************************ sechzigtemp ***************************
2610 nabstverl=(abstverl/3)*2
2620 IF nabgverl=0 THEN nabgverl=abgverl ELSE 2625
2625 nabgverl=nabgverl
2630 nnkwirkgr=100-nabgverl-nabstverl     
2640 nnnutzungsgr=(nnkwirkgr/quotient)  
2642 nngaswirkg=100-nnnutzungsgr:nngasverl=(gasverbr/100)*nngaswirkg  
2645 nnoelwirkg=100-nnnutzungsgr:nnoelverl=(oelverbr/100)*nnoelwirkg   
2650 GOTO 2700
2660 nabstverl=(abstverl/4)*3:nabgverl=nabgverl:IF nabgverl=0 THEN nabgverl=abgverl  
2670 nnkwirkgr=100-nabgverl-nabstverl   
2680 nnnutzungsgr=(nnkwirkgr/quotient)   
2685 nnoelwirkg=100-nnnutzungsgr:nnoelverl=(oelverbr/100)*nnoelwirkg   
2687 nngaswirkg=100-nnnutzungsgr:nngasverl=(gasverbr/100)*nngaswirkg   
2700 REM ************************ anzeigen ***********************************
2710 WINDOW SWAP 0:WINDOW #3,3,78,22,24:WINDOW SWAP 3
2720 PRINT wahl;:PRINT "Kesselwirkungsgrad:";:PRINT USING "##.#";nnkwirkgr;:PRINT " %";:PRINT "   Nutzungsgrad:";:PRINT USING "##.#";nnnutzungsgr;:PRINT " %";:PRINT "  Verlust:"; 
2722 IF nnoelverl THEN PRINT USING "#####.#";nnoelverl;ELSE 2726  
2724 PRINT " Liter":GOTO 2730
2726 PRINT USING "#####.#";nngasverl;:PRINT " M^3"    
2730 WINDOW SWAP 0:WINDOW #2,2,78,4,20:WINDOW SWAP 2:CLS
2740 LOCATE 20,5:PRINT "Sie haben Nr.";wahl;"gewaehlt!"  
2750 LOCATE 20,6:PRINT "Bitte nicht mehr waehlen"   
2770 PRINT:PRINT
2780 PRINT SPC(20)"Welchen Wert wollen Sie variieren?"
2790 PRINT
2800 PRINT SPC(20)"Abgasverlust................... 1"
2810 PRINT SPC(20)"Beenden des Programms.......... 2"  
2830 PRINT SPC(20):INPUT "Meine Wahl ist........",wahl
2835 IF wahl<0 OR wahl >2 THEN GOTO 2836 ELSE 2840
2836 GOSUB 80:GOTO 2730
2840 ON wahl GOTO 2850,3000    
2850 GOSUB 2160:GOTO 2200
2900 PRINT:PRINT
2910 PRINT SPC(20) "L E E R T A S T E  bringt den naechsten Schritt!"  
2920 w$=INKEY$:IF w$="" THEN 2920
2930 IF w$=CHR$(32) THEN 2940 ELSE 2920
2940 CLS:RETURN
3000 REM *******************************
3010 WINDOW SWAP 0:WINDOW #2,2,78,4,20:WINDOW SWAP 2:CLS
3020 LOCATE 20,10:PRINT "Sie wollen das Programm beenden?"
3030 GOSUB 2900:END
*/ });
