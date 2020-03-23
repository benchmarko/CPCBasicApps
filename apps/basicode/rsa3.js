/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
994 rem rsa3 - RSA 3 (Decode)
995 rem Friedrich Dormeier
996 rem http://www.basicode.de/download/neue.zip
997 rem Modifications:
998 chain merge "basicode"
1000 A=1000:GOTO 20:REM  RSA - TEIL 3
1010 REM 
1020 REM  Variable A in Z.1000 evtl. dem rechnerspezif.
1030 REM  Speicherplatz anpassen !!
1040 REM 
1050 DIM T$(2),ZC(1200),Z$(1200):EZ=0:JE=0:KT$=""
1060 REM 
1070 U1$=" Eingabe - Tastatur - codiert "
1080 U2$=" Decodierung "
1090 U4$=" Anzeige / Ausdruck "
1100 U3$=" Speichern (WRITE) "
1110 REM 
1120 REM  --- SCHIRMGROESSE
1130 REM 
1140 H=HO:SP=HO-1:ZE=VE-1:ZG=INT (H/9)
1150 REM 
1160 REM  --- TITEL
1170 REM 
1180 T$(0)="                         "
1190 T$(1)=" Die RSA - Codierung - 3 "
1200 T$(2)="                         "
1210 GOSUB 100
1220 FOR VE=0 TO 2
1230 L=LEN (T$(VE)):HO=INT ((H-6-L)/2):GOSUB 110
1240 SR$=T$(VE):GOSUB 150:PRINT 
1250 NEXT VE
1260 REM 
1270 REM  --- MENU
1280 REM 
1290 HO=2:VE=7:GOSUB 110
1300 SR$="D":GOSUB 150:PRINT "- Eingabe / Decodierung"
1310 HO=2:VE=9:GOSUB 110
1320 SR$="A":GOSUB 150:PRINT "- Anzeige / Ausdruck"
1330 HO=2:VE=11:GOSUB 110
1340 SR$="S":GOSUB 150:PRINT "- Speichern (WRITE)"
1350 HO=2:VE=13:GOSUB 110
1360 SR$="X":GOSUB 150:PRINT "- Ende"
1370 HO=34:VE=13:GOSUB 110
1380 GOSUB 210
1390 IF IN=68 THEN GOSUB 1880:GOTO 1220
1400 IF IN=65 THEN GOSUB 2980:GOTO 1220
1410 IF IN=83 THEN GOSUB 3960:GOTO 1220
1420 IF IN=88 THEN GOTO 950
1430 GOSUB 250:GOTO 1380
1440 REM 
1450 REM  --- EINGABE CODIERTER TEXT
1460 REM 
1470 GOSUB 100
1480 L=LEN (U1$):HO=INT ((H-6-L)/2):VE=0:GOSUB 110
1490 SR$=U1$:GOSUB 150
1500 REM 
1510 HO=0:VE=2:GOSUB 110
1520 PRINT "Die codierte Nachricht liegt als Folge"
1530 PRINT "von Ziffern vor. Jede Gruppe erfasst"
1540 PRINT "ein alphanumerisches Zeichen. Ueber"
1550 PRINT "die INPUT-Anweisung sind die Ziffern-"
1560 PRINT "gruppen jeweils einzeln einzugeben.":PRINT 
1570 PRINT "Die Eingabe ist mit '*' abzuschliessen.":PRINT 
1580 PRINT "Zum Beginn: Taste druecken ! ";
1590 GOSUB 210:GOSUB 100
1600 REM 
1610 L=LEN (U1$):HO=INT ((H-6-L)/2):VE=0:GOSUB 110
1620 SR$=U1$:GOSUB 150
1630 REM 
1640 NN=1
1650 HO=0:VE=2:GOSUB 110:GOTO 1670
1660 GOSUB 120:HO=0:VE=VE+1:GOSUB 110
1670 SR=NN:GOSUB 300:PRINT SR$;:ZC$="":INPUT ": ";ZC$
1680 IF ZC$="*" THEN EZ=NN-1:GOTO 1820
1690 ZC(NN)=VAL (ZC$)
1700 HO=15:VE=VE:GOSUB 110
1710 SR$="O.K.(j/n)":GOSUB 150:GOSUB 210
1720 IF IN=74 THEN NN=NN+1:GOTO 1760
1730 IF IN=78 THEN GOTO 1790
1740 GOTO 1700
1750 REM 
1760 HO=15:VE=VE:GOSUB 110:FOR N=15 TO H:PRINT " ";:NEXT N
1770 GOSUB 120:IF VE>= 20 THEN GOSUB 5110:GOSUB 5230:GOTO 1660
1780 GOTO 1660
1790 HO=0:VE=VE:GOSUB 110:FOR N=0 TO H:PRINT " ";:NEXT N
1800 HO=0:GOSUB 120:VE=VE-1:GOSUB 110:GOTO 1670
1810 REM 
1820 PRINT :PRINT "Eingabe beendet !"
1830 PRINT :PRINT "Verschluesselter Text im RAM !"
1840 GOSUB 4980:RETURN 
1850 REM 
1860 REM  --- DECODIERUNG
1870 REM 
1880 GOSUB 100:GOSUB 5070
1890 IF EZ=0 THEN GOTO 2520
1900 GOSUB 100:GOSUB 5070
1910 HO=0:VE=2:GOSUB 110
1920 PRINT "Eingabe: Modul und Decodierschluessel":PRINT 
1930 PRINT "Tastatur oder File      <T/F> ";
1940 GOSUB 210
1950 IF IN=70 THEN GOTO 1980
1960 IF IN=84 THEN GOTO 2200
1970 GOTO 1910
1980 HO=0:VE=6:GOSUB 110
1990 INPUT "Name des Schluessel-Files: ";NF$:PRINT 
2000 PRINT "Cassette (BASICODE) oder      "
2010 PRINT "Diskette                <C/D> ";
2020 GOSUB 210
2030 IF IN=68 THEN NF=4:GOTO 2060
2040 IF IN=67 THEN NF=0:GOTO 2060
2050 GOTO 2020
2060 GOSUB 500:GOSUB 5020
2070 GOSUB 540:M=VAL (IN$):GOSUB 5020
2080 GOSUB 540:PM=VAL (IN$):GOSUB 5020:PM=0
2090 GOSUB 540:C=VAL (IN$):GOSUB 5020:C=0
2100 GOSUB 540:D=VAL (IN$):GOSUB 5020
2110 GOSUB 580:GOSUB 5020
2120 HO=0:VE=11:GOSUB 110
2130 PRINT "Schluesselzahlen geladen; der"
2140 PRINT "Schluessel lautet:":PRINT 
2150 PRINT "             Modul (M) =";M:PRINT 
2160 PRINT "Decodierschluessel (D) =";D
2170 NF$=""
2180 GOSUB 4980:GOTO 2280
2190 REM 
2200 GOSUB 100:GOSUB 5070
2210 HO=0:VE=2:GOSUB 110
2220 PRINT "Eingabe:";
2230 INPUT "     Modul M ";M:PRINT 
2240 INPUT "Decodierschluessel D ";D
2250 REM 
2260 GOSUB 4980
2270 REM 
2280 GOSUB 100:GOSUB 5070
2290 HO=0:VE=2:GOSUB 110
2300 PRINT "Decodiert:"
2310 HO=0:VE=4:GOSUB 110
2320 REM 
2330 FOR NN=1 TO EZ
2340 X=ZC(NN):Y=D:N=1
2350 IF Y=2*INT (Y/2) THEN GOSUB 2460:GOTO 2370
2360 Y=Y-1:N=N*X:N=N-INT (N/M)*M
2370 IF Y<> 0 THEN GOTO 2350
2380 IF (N>= 65) AND (N<= 90) THEN N=N+128:GOTO 2400
2390 IF (N>= 97) AND (N<= 122) THEN N=N-32
2400 PRINT CHR$ (N);
2410 J=NN:Z$(J)=CHR$ (N)
2420 NEXT NN
2430 JE=EZ
2440 PRINT :GOTO 2480
2450 REM 
2460 Y=Y/2:X=X*X:X=X-INT (X/M)*M:RETURN 
2470 REM 
2480 GOSUB 120:VE=VE+2:HO=0:GOSUB 110
2490 PRINT "Decodierung beendet !":GOSUB 250
2500 GOSUB 4980:RETURN 
2510 REM 
2520 HO=0:VE=2:GOSUB 110
2530 SR$=" Kein codierter Text gespeichert ! ":GOSUB 150
2540 HO=2:VE=4:GOSUB 110
2550 SR$="E":GOSUB 150:PRINT "- Eingabe-Tastatur"
2560 HO=2:VE=6:GOSUB 110
2570 SR$="L":GOSUB 150:PRINT "- Laden (Cass/Disk)"
2580 HO=2:VE=8:GOSUB 110
2590 SR$="M":GOSUB 150:PRINT "- Menu       ";
2600 GOSUB 210
2610 IF IN=69 THEN GOTO 1470
2620 IF IN=76 THEN GOTO 2650
2630 IF IN=77 THEN GOSUB 100:RETURN 
2640 GOTO 2580
2650 HO=2:VE=10:GOSUB 110
2660 PRINT "Verschluesselten Text"
2670 PRINT "  einlesen von"
2680 HO=2:VE=13:GOSUB 110
2690 PRINT "Cassette / Disk <C/D> ";:GOSUB 210
2700 IF IN=68 THEN NF=4:GOTO 2730
2710 IF IN=67 THEN NF=0:GOTO 2730
2720 GOTO 2650
2730 HO=2:VE=15:GOSUB 110
2740 INPUT "File - Name ";NF$:KT$=NF$
2750 IF RIGHT$(NF$,2)="-c" THEN GOTO 2790
2760 PRINT :PRINT "  Kein codierter Text !"
2770 HO=19:VE=15:GOSUB 110:PRINT "       ":GOTO 2730
2780 REM 
2790 HO=0:VE=17:GOSUB 110
2800 PRINT "                       "
2810 GOSUB 500:GOSUB 5020
2820 GOSUB 540:EZ=VAL (IN$):GOSUB 5020
2830 FOR NN=1 TO EZ
2840 GOSUB 540:ZC(NN)=VAL (IN$):GOSUB 5020
2850 NEXT NN
2860 GOSUB 580:GOSUB 5020
2870 HO=2:VE=15:GOSUB 110
2880 PRINT "File ";KT$;" gelesen !"
2890 REM 
2900 HO=2:VE=17:GOSUB 110
2910 PRINT "Anzeige / Decodieren <A/D> ";:GOSUB 210
2920 IF IN=68 THEN GOTO 1890
2930 IF IN=65 THEN GOSUB 2980:RETURN 
2940 GOTO 2900
2950 REM 
2960 REM  --- ANZEIGE/AUSDRUCK
2970 REM 
2980 GOSUB 100
2990 L=LEN (U4$):HO=INT ((H-6-L)/2):VE=0:GOSUB 110
3000 SR$=U4$:GOSUB 150
3010 REM 
3020 HO=0:VE=2:GOSUB 110
3030 PRINT "Anzeige auf Bildschirm"
3040 PRINT "          oder Drucker   <B/D> ";:GOSUB 210
3050 IF (IN<> 66) AND (IN<> 68) THEN GOTO 3020
3060 W=IN:IF W=66 THEN GOTO 3100
3070 HO=0:VE=5:GOSUB 110
3080 PRINT "Drucker betriebsbereit ? <J/N> ";:GOSUB 210
3090 IF (IN<> 74) AND (IN<> 78) THEN GOTO 3070
3100 PP=0:IF IN=74 THEN PP=1
3110 SR$=CHR$ (W):GOSUB 330:HO=29:VE=3:GOSUB 110:GOSUB 150
3120 REM 
3130 HO=0:VE=7:GOSUB 110
3140 SR$="K":GOSUB 150:PRINT "- Klartext"
3150 HO=0:VE=9:GOSUB 110
3160 SR$="V":GOSUB 150:PRINT "- Verschluesselter Text ";
3170 GOSUB 210
3180 IF IN=75 THEN GOTO 3220
3190 IF IN=86 THEN GOTO 3550
3200 GOTO 3150
3210 REM 
3220 IF JE<> 0 THEN GOTO 3280
3230 HO=0:VE=11:GOSUB 110
3240 PRINT "  Kein Klartext im RAM !":PRINT 
3250 PRINT "  Zurueck zum Menu !"
3260 GOSUB 4980:GOSUB 100:RETURN 
3270 REM 
3280 IF PP=1 THEN GOTO 3430
3290 PRINT :PRINT 
3300 PRINT "K l a r t e x t: "
3310 PRINT "----------------------"
3320 S=1
3330 FOR J=1 TO JE:PRINT Z$(J);:S=S+1
3340 IF (S>= H-10) AND (Z$(J)=" ") THEN S=0:GOSUB 3410
3350 GOSUB 120
3360 IF VE>= 20 THEN GOSUB 4980:GOSUB 5190
3370 NEXT J:PRINT 
3380 REM 
3390 GOSUB 4980:GOSUB 100:RETURN 
3400 REM 
3410 GOSUB 120:HO=0:VE=VE+1:GOSUB 110:RETURN 
3420 REM 
3430 GOSUB 360:GOSUB 360:S=0
3440 SR$="K l a r t e x t: "
3450 GOSUB 350:GOSUB 360
3460 SR$="----------------------"
3470 GOSUB 350:GOSUB 360
3480 FOR J=1 TO JE
3490 SR$=Z$(J):S=S+1:GOSUB 350
3500 IF (S>= 70) AND (Z$(J)=" ") THEN GOSUB 360:S=0
3510 NEXT J
3520 GOSUB 360:GOSUB 360
3530 GOSUB 4980:GOSUB 100:RETURN 
3540 REM 
3550 IF EZ<> 0 THEN GOTO 3610
3560 HO=0:VE=11:GOSUB 110
3570 PRINT "  Kein verschluesselter Text":PRINT 
3580 PRINT "  im RAM - Zurueck zum Menu !"
3590 GOSUB 4980:GOSUB 100:RETURN 
3600 REM 
3610 IF PP=1 THEN GOTO 3770
3620 HO=0:VE=11:GOSUB 110
3630 PRINT "Verschluesselter Text: ";KT$
3640 PRINT "------------------------------"
3650 Z=0
3660 FOR NN=1 TO EZ
3670 IF ZC(NN)=0 THEN GOTO 3740
3680 SR=ZC(NN):GOSUB 300
3690 S$="":FOR S=1 TO 8-LEN (SR$):S$=S$+" ":NEXT S
3700 PRINT S$+LEFT$(SR$,LEN (SR$));:Z=Z+1
3710 IF Z=ZG THEN PRINT :PRINT :Z=0
3720 GOSUB 120
3730 IF VE>= 20 THEN GOSUB 250:GOSUB 4980:GOSUB 5190
3740 NEXT NN
3750 GOSUB 4980:GOSUB 100:RETURN 
3760 REM 
3770 GOSUB 360
3780 SR$="Verschluesselter Text: "+KT$
3790 GOSUB 350:GOSUB 360
3800 SR$="------------------------------"
3810 GOSUB 350:GOSUB 360
3820 Z=0
3830 FOR NN=1 TO EZ
3840 IF ZC(NN)=0 THEN GOTO 3900
3850 SR=ZC(NN):GOSUB 300
3860 S$="":FOR S=1 TO 8-LEN (SR$):S$=S$+" ":NEXT S
3870 SR$=S$+LEFT$(SR$,LEN (SR$)):Z=Z+1:GOSUB 350
3880 IF Z=8 THEN GOSUB 360:GOSUB 360:Z=0
3890 GOSUB 120
3900 NEXT NN
3910 GOSUB 360:GOSUB 360
3920 GOSUB 4980:GOSUB 100:RETURN 
3930 REM 
3940 REM  --- SPEICHERN
3950 REM 
3960 GOSUB 100
3970 L=LEN (U3$):HO=INT ((H-6-L)/2):VE=0:GOSUB 110
3980 SR$=U3$:GOSUB 150
3990 REM 
4000 HO=0:VE=2:GOSUB 110
4010 PRINT "Speichern:"
4020 HO=0:VE=4:GOSUB 110
4030 SR$="K":GOSUB 150:PRINT "- Klartext"
4040 HO=0:VE=6:GOSUB 110
4050 SR$="V":GOSUB 150:PRINT "- Verschluesselter Text"
4060 HO=32:VE=6:GOSUB 110
4070 GOSUB 210
4080 IF IN=75 THEN GOTO 4120
4090 IF IN=86 THEN GOTO 4500
4100 GOTO 4060
4110 REM 
4120 IF JE<> 0 THEN GOTO 4170
4130 HO=0:VE=8:GOSUB 110
4140 PRINT "Kein Klartext im RAM !"
4150 GOSUB 4980:RETURN 
4160 REM 
4170 HO=0:VE=2:GOSUB 110
4180 PRINT "Speichern des Klartextes:"
4190 HO=2:VE=4:GOSUB 110
4200 SR$="D":GOSUB 150:PRINT "- Diskette"
4210 HO=2:VE=6:GOSUB 110
4220 SR$="C":GOSUB 150:PRINT "- Cassette (BASICODE)"
4230 HO=2:VE=8:GOSUB 110
4240 SR$="N":GOSUB 150:PRINT "- NEIN"
4250 HO=29:VE=8:GOSUB 110:GOSUB 210
4260 IF IN=68 THEN NF=5:GOTO 4310
4270 IF IN=67 THEN NF=1:GOTO 4310
4280 IF IN=78 THEN GOSUB 100:RETURN 
4290 GOSUB 250:GOTO 4170
4300 REM 
4310 HO=0:VE=10:GOSUB 110
4320 NF$="":INPUT "Name des Files (max. 5 Zch.) ";NF$
4330 KT$=NF$:IF LEN (NF$)>5 THEN GOTO 4310
4340 GOSUB 500:GOSUB 5020
4350 SR=JE:GOSUB 300:GOSUB 560:GOSUB 5020
4360 REM 
4370 FOR J=1 TO JE
4380 SR$=Z$(J):GOSUB 560:GOSUB 5020
4390 NEXT J
4400 GOSUB 580:GOSUB 5020
4410 HO=0:VE=12:GOSUB 110
4420 PRINT "Klartext auf ";
4430 IF NF=5 THEN PRINT "Diskette "
4440 IF NF=1 THEN PRINT "Cassette (BASICODE) "
4450 PRINT "gespeichert.":PRINT 
4460 PRINT "Name:";:SR$=NF$:GOSUB 150
4470 REM 
4480 GOSUB 4980:RETURN 
4490 REM 
4500 GOSUB 100
4510 L=LEN (U3$):HO=INT ((H-6-L)/2):VE=0:GOSUB 110
4520 SR$=U3$:GOSUB 150
4530 REM 
4540 IF EZ<> 0 THEN GOTO 4600
4550 HO=0:VE=2:GOSUB 110
4560 PRINT " Kein verschluesselter "
4570 PRINT " Text im RAM !"
4580 GOSUB 4980:RETURN 
4590 REM 
4600 HO=0:VE=2:GOSUB 110
4610 PRINT "Speichern des verschluess. Textes:"
4620 HO=2:VE=4:GOSUB 110
4630 SR$="D":GOSUB 150:PRINT "- Diskette"
4640 HO=2:VE=6:GOSUB 110
4650 SR$="C":GOSUB 150:PRINT "- Cassette (BASICODE)"
4660 HO=2:VE=8:GOSUB 110
4670 SR$="N":GOSUB 150:PRINT "- NEIN"
4680 HO=29:VE=8:GOSUB 110:GOSUB 210
4690 IF IN=68 THEN NF=5:GOTO 4740
4700 IF IN=67 THEN NF=1:GOTO 4740
4710 IF IN=78 THEN GOSUB 100:RETURN 
4720 GOSUB 250:GOTO 4680
4730 REM 
4740 HO=0:VE=10:GOSUB 110
4750 NF$="":INPUT "Name des Files (max. 5 Zch.) ";NF$
4760 IF LEN (NF$)>5 THEN GOTO 4740
4770 NF$=NF$+"-c"
4780 GOSUB 500:GOSUB 5020
4790 REM 
4800 SR=EZ:GOSUB 300:GOSUB 560:GOSUB 5020
4810 FOR NN=1 TO EZ
4820 SR=ZC(NN):GOSUB 300:GOSUB 560:GOSUB 5020
4830 NEXT NN
4840 GOSUB 580:GOSUB 5020
4850 GOSUB 250
4860 HO=0:VE=12:GOSUB 110
4870 PRINT "Codierter Text auf ";
4880 IF NF=5 THEN PRINT "Diskette "
4890 IF NF=1 THEN PRINT "Cassette (BASICODE) "
4900 PRINT "gespeichert.":PRINT 
4910 PRINT "Name:";:SR$=NF$:GOSUB 150
4920 REM 
4930 GOSUB 4980:RETURN 
4940 REM 
4950 REM  --- SUBROUTINEN
4960 REM 
4970 REM  ------------------------------------------------
4980 HO=0:VE=24:GOSUB 110
4990 SR$="Taste druecken =>":GOSUB 150
5000 GOSUB 210:GOSUB 100:RETURN 
5010 REM  ------------------------------------------------
5020 IF (IN=0) OR (IN=1) THEN RETURN 
5030 HO=0:VE=22:GOSUB 110
5040 SR$=" Schreib- / Lesefehler ! ":GOSUB 150
5050 GOSUB 210:RETURN 
5060 REM  ------------------------------------------------
5070 L=LEN (U2$):HO=INT ((H-6-L)/2):VE=0:GOSUB 110
5080 SR$=U2$:GOSUB 150:RETURN 
5090 REM 
5100 REM  ------------------------------------------------
5110 GOSUB 100:GOSUB 5070
5120 HO=0:VE=2:GOSUB 110
5130 PRINT "Fortsetzung:";:PRINT :RETURN 
5140 REM  ------------------------------------------------
5150 L=LEN (U4$):HO=INT ((H-6-L)/2):VE=0:GOSUB 110
5160 SR$=U4$:GOSUB 150:RETURN 
5170 HO=0:VE=2:GOSUB 110:RETURN 
5180 REM  ------------------------------------------------
5190 GOSUB 100:GOSUB 5150
5200 HO=0:VE=2:GOSUB 110
5210 PRINT "Fortsetzung:":PRINT :RETURN 
5220 REM  ------------------------------------------------
5230 L=LEN (U1$):HO=INT ((H-6-L)/2):VE=0:GOSUB 110
5240 SR$=U1$:GOSUB 150
5250 HO=0:VE=3:GOSUB 110:RETURN 
5260 REM 
30000 REM  ------------------------------------------------
30010 REM  GRUNDLAGE DIESES PROGRAMMS UND DER TEILE 1 UND 2
30020 REM  IST FOLGENDER BEITRAG:
30030 REM 
30040 REM    MARCEL SUTTER
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
32090 REM -spezial 911016
*/ });
