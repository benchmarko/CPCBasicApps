/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
994 rem rsa1 - RSA 1 (Intro, Key)
995 rem Friedrich Dormeier
996 rem http://www.basicode.de/download/neue.zip
997 rem Modifications:
998 chain merge "basicode"
1000 A=1000:GOTO 20:REM  RSA - TEIL 1
1010 DIM T$(2)
1020 REM 
1030 U1$=" Einfuehrung "
1040 U2$=" Oeffentlicher Schluessel "
1050 U3$=" Speichern (WRITE) "
1060 REM 
1070 REM  --- SCHIRMGROESSE
1080 REM 
1090 H=HO:SP=HO-1:ZE=VE-1
1100 REM 
1110 REM  --- TITEL
1120 T$(0)="                         "
1130 T$(1)=" Die RSA - Codierung - 1 "
1140 T$(2)="                         "
1150 GOSUB 100
1160 FOR VE=0 TO 2
1170 L=LEN (T$(VE)):HO=INT ((H-6-L)/2):GOSUB 110
1180 SR$=T$(VE):GOSUB 150:PRINT 
1190 NEXT VE
1200 REM 
1210 REM  --- MENU
1220 REM 
1230 HO=2:VE=6:GOSUB 110
1240 SR$="E":GOSUB 150:PRINT "- Einfuehrung"
1250 HO=2:VE=8:GOSUB 110
1260 SR$="B":GOSUB 150:PRINT "- Berechnen des"
1270 HO=9:VE=9:GOSUB 110
1280 PRINT "  Schluessels"
1290 HO=2:VE=11:GOSUB 110
1300 SR$="S":GOSUB 150:PRINT "- Speichern des"
1310 HO=9:VE=12:GOSUB 110
1320 PRINT "  Schluessels"
1330 HO=2:VE=14:GOSUB 110
1340 SR$="X":GOSUB 150:PRINT "- Ende"
1350 HO=23:VE=14:GOSUB 110
1360 GOSUB 210
1370 IF IN=69 THEN GOSUB 1450:GOTO 1160
1380 IF IN=66 THEN GOSUB 1680:GOTO 1160
1390 IF IN=83 THEN GOSUB 2540:GOTO 1160
1400 IF IN=88 THEN GOTO 950
1410 GOSUB 250:GOTO 1360
1420 REM 
1430 REM  --- EINFUEHRUNG
1440 REM 
1450 GOSUB 100:RESTORE 
1460 L=LEN (U1$):HO=INT ((H-6-L)/2):VE=0:GOSUB 110
1470 SR$=U1$:GOSUB 150
1480 HO=0:VE=1:GOSUB 110
1490 READ R$:IF R$<> "*" THEN GOTO 1480
1500 PR$=""
1510 READ R$:IF R$="*" THEN GOSUB 1550:GOTO 1500
1520 IF R$="xxx" THEN GOSUB 1550:GOSUB 3030:RETURN 
1530 PR$=PR$+R$:GOTO 1510
1540 REM 
1550 H0=0:H1=1:PRINT 
1560 FOR I=1 TO LEN (PR$):H0=H0+1
1570 IF MID$(PR$,I,1)<> " " THEN GOTO 1590
1580 GOSUB 1600
1590 NEXT I:GOSUB 1600:PRINT :RETURN 
1600 IF H0>SP-1 THEN PRINT :H0=I-H1
1610 GOSUB 120:IF VE<ZE-3 THEN GOTO 1640
1620 HO=0:VE=ZE-1:GOSUB 110
1630 GOSUB 3030
1640 PRINT MID$(PR$,H1,I-H1);" ";:H1=I+1:RETURN 
1650 REM 
1660 REM  --- PRIMZAHLEN
1670 REM 
1680 GOSUB 100
1690 L=LEN (U2$):HO=INT ((H-6-L)/2):VE=0:GOSUB 110
1700 SR$=U2$:GOSUB 150
1710 REM 
1720 HO=0:VE=2:GOSUB 110
1730 PRINT "Die Wahl der Primzahlen unterliegt"
1740 PRINT "zwei Bedingungen:":PRINT 
1750 PRINT "   1. beide Primzahlen > 50"
1760 PRINT "(kleinere koennen evtl. zu Fehlern"
1770 PRINT "bei der Codierung fuehren !)"
1780 PRINT "   2. ihr Produkt < 1 Million"
1790 PRINT "(Genauigkeit der Zahlendarstellung)"
1800 PRINT 
1810 PRINT "Anzahl der darstellbaren Ziffern (z.B. 6):";:L=0:INPUT L
1820 L=INT (L/2):IF L<2 THEN GOSUB 3110:GOTO 1830
1830 HO=2:VE=14:GOSUB 110
1840 P$="":PRINT "Primzahl p (z.B.103):";:INPUT P$:LP=LEN (P$)
1850 P=INT (VAL (P$)):IF P<3 THEN GOTO 1830
1860 HO=2:VE=16:GOSUB 110
1870 Q$="":PRINT "Primzahl q (z.B.107):";:INPUT Q$:LQ=LEN (Q$)
1880 Q=INT (VAL (Q$)):IF Q<3 THEN GOTO 1860
1890 IF (LP>L) OR (LQ>L) THEN GOSUB 3110:GOTO 1830
1900 T=0:F1=0:Z=P:GOSUB 3180:T=1:F2=0:Z=Q:GOSUB 3180
1910 IF (F1=1) AND (F2=1) THEN GOSUB 3320:GOSUB 3070:GOTO 2000
1920 IF F1<> 1 THEN HO=2:VE=20:GOSUB 110:PRINT "p nicht prim !"
1930 IF F2<> 1 THEN HO=2:VE=21:GOSUB 110:PRINT "q nicht prim !"
1940 HO=0:VE=23:GOSUB 110
1950 PRINT "Eingabe wiederholen !"
1960 GOSUB 3070:GOSUB 3350:GOTO 1830
1970 REM 
1980 REM  --- BERECHNUNG DES SCHLUESSELS
1990 REM 
2000 GOSUB 100
2010 L=LEN (U2$):HO=INT ((H-6-L)/2):VE=0:GOSUB 110
2020 SR$=U2$:GOSUB 150
2030 REM 
2040 HO=0:VE=2:GOSUB 110
2050 PRINT "Die zwei eingegebenen Primzahlen sind"
2060 PRINT "geheim, ihr Produkt (der Modul) dagegen"
2070 PRINT "oeffentlich. Um fuer Sie einen Zugriff"
2080 PRINT "auf die Grundlagen der Bildung des"
2090 PRINT "Schluessels moeglich zu machen, ist es"
2100 PRINT "ratsam, diese Daten auf Diskette oder"
2110 PRINT "als BASICODE-File unter dem Namen"
2120 PRINT "'key' zu speichern.":PRINT 
2130 PRINT "Aus den Zahlen p und q ergibt sich der"
2140 PRINT "Modul M = p*q und die Eulersche"
2150 PRINT "Funktion Phi(m) = (p-1)*(q-1).":PRINT 
2160 PRINT "Schliesslich ist zur Decodierung der"
2170 PRINT "Schluessel D (geheim) zu waehlen."
2180 PRINT "Diese Zahl muss teilerfremd zu Phi(m),"
2190 PRINT "p und q sein. Diese Bedingung ist z.B."
2200 PRINT "erfuellt, wenn D > Phi(m) und eine"
2210 PRINT "Primzahl ist."
2220 GOSUB 3070
2230 GOSUB 100
2240 L=LEN (U2$):HO=INT ((H-6-L)/2):VE=0:GOSUB 110
2250 SR$=U2$:GOSUB 150
2260 HO=0:VE=2:GOSUB 110
2270 PRINT "Berechnung:"
2280 PRINT "----------":PRINT 
2290 M=P*Q:PM=(P-1)*(Q-1)
2300 PRINT "Modul                         (M) =";M
2310 PRINT "Eulersche Funkt.         (Phi(m)) =";PM
2320 INPUT "Decodierschluessel (z.B. 157) (D) ";D
2325 if D=0 then 2320
2330 A=PM:B=D:C=0:E=1
2340 Q=INT (A/B):R1=A-Q*B:R2=C-Q*E
2350 A=B:B=R1:C=E:E=R2
2360 IF R1=0 THEN GOTO 2380
2370 GOTO 2340
2380 IF C<0 THEN C=C+PM:GOTO 2380
2390 PRINT "Codierschluessel     (C) =";C
2400 PRINT 
2410 PRINT "Von diesen Zahlen werden M und C (Modul"
2420 PRINT "und Codierschluessel) oeffentlich"
2430 PRINT "bekannt gemacht. Mit ihnen ist die Ver-"
2440 PRINT "schluesselung der Nachricht moeglich."
2450 PRINT 
2460 PRINT "Die M zugrunde liegenden Primzahlen"
2470 PRINT "bleiben geheim; der Decodierschluessel"
2480 PRINT "ist nur dem Empfaenger der Nachricht"
2490 PRINT "zugaenglich."
2500 GOSUB 3070:GOSUB 100:RETURN 
2510 REM 
2520 REM  --- SPEICHERN
2530 REM 
2540 GOSUB 100
2550 L=LEN (U3$):HO=INT ((H-6-L)/2):VE=0:GOSUB 110
2560 SR$=U3$:GOSUB 150
2570 HO=0:VE=2:GOSUB 110
2580 PRINT "Speichern des Schluessels:"
2590 HO=2:VE=4:GOSUB 110
2600 SR$="D":GOSUB 150:PRINT "- Diskette"
2610 HO=2:VE=6:GOSUB 110
2620 SR$="C":GOSUB 150:PRINT "- Cassette (BASICODE)"
2630 HO=2:VE=8:GOSUB 110
2640 SR$="N":GOSUB 150:PRINT "- NEIN"
2650 HO=31:VE=8:GOSUB 110
2660 GOSUB 210
2670 HO=0:VE=12:GOSUB 110
2680 PRINT "                       "
2690 HO=31:VE=10:GOSUB 110
2700 PRINT "        "
2710 IF IN=68 THEN NF=5:GOSUB 2750:GOTO 1160
2720 IF IN=67 THEN NF=1:GOSUB 2750:GOTO 1160
2730 IF IN=78 THEN GOSUB 100:GOTO 1160
2740 GOSUB 250:GOTO 2650
2750 HO=0:VE=10:GOSUB 110
2760 NF$="":INPUT "Name des Files (max. 7 Zch.) ";NF$
2770 IF LEN (NF$)>7 THEN GOTO 2750
2780 GOSUB 500
2790 SR=M:GOSUB 300:GOSUB 560:GOSUB 3400
2800 SR=PM:GOSUB 300:GOSUB 560:GOSUB 3400
2810 SR=C:GOSUB 300:GOSUB 560:GOSUB 3400
2820 SR=D:GOSUB 300:GOSUB 560:GOSUB 3400
2830 GOSUB 580
2840 HO=0:VE=12:GOSUB 110
2850 PRINT "Fuer die Codierung bzw. Decodierung"
2860 PRINT "notwendige Schluesselzahlen auf"
2870 IF NF=5 THEN PRINT "Diskette ";:GOTO 2890
2880 IF NF=1 THEN PRINT "Cassette (BASICODE)";
2890 PRINT "gespeichert.    ";
2900 GOSUB 210:GOSUB 100:RETURN 
2910 REM 
3000 REM  --- SUBROUTINEN
3010 REM 
3020 REM  --------------------------------------------------
3030 HO=H-17:VE=23:GOSUB 110
3040 SR$=" Taste => "
3050 GOSUB 150:GOSUB 210:GOSUB 100:RETURN 
3060 REM  --------------------------------------------------
3070 HO=20:VE=23:GOSUB 110
3080 SR$=" Taste => "
3090 GOSUB 150:GOSUB 210:RETURN 
3100 REM  --------------------------------------------------
3110 PRINT :PRINT "Zahlen auf";L;"Stellen begrenzen !"
3120 HO=2:VE=14:GOSUB 110
3130 PRINT "                                 "
3140 HO=2:VE=16:GOSUB 110
3150 PRINT "                                 "
3160 RETURN 
3170 REM  --------------------------------------------------
3180 HO=0:VE=18:GOSUB 110
3190 PRINT "Test auf Primeigenschaft - warten !"
3200 Z1=Z
3210 IF Z/2=INT (Z/2) THEN Z=Z/2:GOTO 3210
3220 F=3
3230 PP=0:IF Z/F=INT (Z/F) THEN PP=1:IF F=Z1 THEN GOTO 3280
3240 IF PP=1 THEN Z=Z/F:GOTO 3230
3250 F=F+2
3260 IF F<= Z THEN GOTO 3230
3270 RETURN 
3280 IF T=0 THEN HO=24:VE=14:F1=1
3290 IF T=1 THEN HO=24:VE=16:F2=1
3300 GOSUB 110:PRINT " o.k.":GOTO 3270
3310 REM  --------------------------------------------------
3320 HO=0:VE=18:GOSUB 110
3330 PRINT "                                   ":RETURN 
3340 REM  --------------------------------------------------
3350 L$=""
3360 FOR N=1 TO H:L$=L$+" ":NEXT N
3370 FOR VE=14 TO 24:HO=0:GOSUB 110:PRINT L$;:NEXT VE
3380 RETURN 
3390 REM  --------------------------------------------------
3400 IF (IN=0) OR (IN=1) THEN RETURN 
3410 HO=0:VE=12:GOSUB 110
3420 SR$=" Schreibfehler ! ":GOSUB 150
3430 GOSUB 210:RETURN 
3440 REM  --------------------------------------------------
25000 DATA "*","Das RSA-Verfahren wurde 1978 von R. Rivest, "
25010 DATA "A. Shamir und L. Adleman entwickelt. ","*"
25020 DATA "Es gehoert zu den modernen kryptographischen "
25030 DATA "Verfahren, die eine praktisch sichere Methode "
25040 DATA "zur Verschluesselung von Nachrichten bieten.","*"
25050 DATA "Es gilt als 'public key system', das auf bis zu "
25060 DATA "200-stelligen Primzahlen aufbaut.","*"
25070 DATA "Infolge der geringen Rechengenauigkeit und der "
25080 DATA "Anzahl der dargestellten Ziffern einer Zahl "
25090 DATA "auf den am BASICODE-System beteiligten "
25100 DATA "Computern kann nur eine 'Demo' geboten werden."
25110 DATA "*"
25120 DATA "Das Programmpaket besteht aus drei Programen:"
25130 DATA "*"
25140 DATA " - Berechnung des oeffentl. Schluessels,","*"
25150 DATA " - Codierung einer Nachricht und","*"
25160 DATA " - ihre Decodierung.","*"
25170 DATA "Fuer den, der sich mit den Grundlagen der RSA-"
25180 DATA "Codierung beschaeftigen will, empfehlen sich "
25190 DATA "*"
25200 DATA " - Patrick Horster, Kryptologie, "
25210 DATA "B.I. Wissenschaftsverlag, Mannheim, 1985","*"
25220 DATA " - DUDEN-Informatik, Ein Sachlexikon ..., "
25230 DATA "Duden-Verlag, Mannheim, 1989","*"
25240 DATA " - Albrecht Beutelspacher, Kryptologie, "
25250 DATA "Verlag Vieweg, Braunschweig, 1991","*"
25260 DATA " - Sgarro/Wuermli, Geheimschriften, "
25270 DATA "Weltbild Verlag, Augsburg, 1991","*"
25280 DATA " - Thiagar Devendran, Das Beste aus dem "
25290 DATA "Mathematischen Kabinett, Deutsche Verlags-"
25300 DATA "Anstalt, Stuttgart, 1990","*"
25310 DATA " - Marcel Sutter, Ein Streifzug durch die "
25320 DATA "Kryptologie, M+K Computer, Luzern, 1990-4","*"
25330 DATA " - Eckart Winkler, Dreifach genaeht, "
25340 DATA "MC, Muenchen, Heft 3/1988","*"
25350 DATA "Im uebrigen lohnt es, sich fuer ein besseres "
25360 DATA "Verstaendnis mit Fragen der Zahlentheorie zu "
25370 DATA "beschaeftigen. ","*"
25380 DATA "Dies und die folgenden Programme koennen "
25390 DATA "natuerlich nur ein Beispiel geben.","*"
25400 DATA "xxx"
25410 REM 
30000 REM  -------------------------------------
30010 REM  GRUNDLAGE DIESES PROGRAMMES UND DER TEILE 2UND 3
30020 REM  IST FOLGENDER BEITRAG:
30030 REM 
30040 REM    MARCEL SUTTER,
30050 REM    EIN STREIFZUG DURCH DIE KRYPTOLOGIE
30060 REM    M+K COMPUTER, LUZERN, 1990, HEFT 4
30070 REM 
32000 REM  -------------------------------------
32010 REM  FRIEDRICH DORMEIER
32020 REM  BISMARCKSTR. 11A
32030 REM  D-1000 BERLIN 39
32040 REM  (030) 803 31 11
32050 REM 
32060 REM  C-128 - 9/1991
32070 REM  -------------------------------------
32080 REM  Erstausstrahlung: DS-Kultur
32090 REM -spezial:911016
*/ });
