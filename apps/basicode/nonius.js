/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
994 rem nonius - Nonius (Vernier Scale)
995 rem H.J. Pootjes
996 rem http://www.basicode.de/download/neue.zip
997 rem Modifications: - ; https://en.wikipedia.org/wiki/Vernier_scale
998 chain merge "basicode"
1000 A=500:GOTO 20:REM ** NONIUS (SCHUIFMAAT) **
1010 AG=0:REM aantal goede antwoorden
1020 XG=0:REM extra aantal goede antwoorden
1030 AF=0:REM aantal foute antwoorden
1040 EN=0:REM ervaringsniveau
1050 VF=0:REM vorige was fout
1060 IF EN=0 THEN GOSUB 3510:REM uitleg
1070 GOSUB 600:CN=0
1080 X=1/32:VU=10/24
1090 Y=0.12:REM hoogte schaal
1100 HO=0:VE=Y:GOSUB 620:HO=.9999:GOSUB 630
1110 REM ** schaalverdeling langs hoofdschaal
1120 FOR I=0 TO 15
1130 HO=X+I/16:VE=Y:GOSUB 620:VE=Y-1/32:GOSUB 630
1140 NEXT I
1150 REM ** getallen langs hoofdschaal
1160 GOSUB 260:Z=5+5*INT (15*RV):REM basisgetal
1170 FOR I=0 TO 15 STEP 5
1180 HO=X+I/16-.022:VE=0:SR=Z+I:GOSUB 300:GOSUB 650
1190 HO=X+I/16:VE=Y:GOSUB 620:VE=Y-1/16:GOSUB 630
1200 NEXT I
1210 GOSUB 2030:REM ** random zoekwaarde in X **
1220 REM ** teken schuif **
1230 HO=X:VE=Y+2/VG:GOSUB 620
1240 HO=X-1/64:VE=VE+.02:GOSUB 630
1250 VE=VE+.15:GOSUB 630
1260 HO=HO+19/32:GOSUB 630
1270 VE=VE-.15:GOSUB 630
1280 HO=HO-1/64:VE=Y+2/VG:GOSUB 630
1290 HO=X:GOSUB 630
1300 REM ** teken schaal nonius **
1310 FOR I=0 TO 10
1320 HO=X+I*9/160:VE=Y+2/VG:GOSUB 620
1330 VE=VE+1/32:IF I=5*INT (I/5) THEN VE=VE+1/32
1340 GOSUB 630
1350 NEXT I
1360 HO=X-.01:SR$="0":GOSUB 650
1370 HO=X+.25:SR$="0.5":GOSUB 650
1380 HO=X+.55:SR$="1":GOSUB 650
1390 REM * instellen op niveau *
1400 ON EN GOTO 1430,1510,1610,1560,1610,1560,1590
1410 REM EN=1 dus 'SCHUIF' en pijl
1420 REM ** teken pijl **
1430 HO=X:VE=Y+.29:GOSUB 620
1440 VE=Y+.19:GOSUB 630
1450 HO=X-.02:VE=Y+.25:GOSUB 630
1460 HO=X+.02:GOSUB 630
1470 HO=X:VE=Y+.19:GOSUB 630
1480 REM print SCHUIF
1490 GOTO 1610
1500 REM ** EN=2 dus hulpschaal **
1510 FOR I=1 TO 5
1520 HO=X-I/160:VE=Y+2/VG:GOSUB 620:VE=VE+1/64:GOSUB 630
1530 NEXT I
1540 GOTO 1610
1550 REM ** EN=4 of EN=6 dus zo nodig extra uitleg **
1560 IF VF=1 THEN GOSUB 4530:REM extra uitleg-2
1570 GOTO 1610
1580 REM ** EN=7 dus zo nodig extra uitleg **
1590 IF VF=1 THEN GOSUB 5030:REM extra uitleg-4
1600 REM ** EN=3 of EN=5 dus geen hulp **
1610 SR$="Tik het goede antwoord in:"
1620 HO=0:VE=21/24:GOSUB 650
1630 REM ** INPUT-simulatie **
1640 HO=0:VE=22/24
1650 SR$=""
1660 GOSUB 210:IF IN=13 THEN GOTO 1720
1670 IF IN<> 127 THEN GOTO 1700
1680 CN=1:GOSUB 650:CN=0:IF LEN (SR$)<2 THEN GOTO 1650
1690 SR$=LEFT$(SR$,LEN (SR$)-1):GOTO 1710
1700 SR$=SR$+IN$
1710 GOSUB 650:GOTO 1660
1720 AW=VAL (SR$):VE=23/24
1730 IF ABS (AW-Z-GA)<.01 THEN GOSUB 2530:GOTO 1750
1740 GOSUB 3030:REM fout antwoord
1750 SD=30:GOSUB 450:REM even pauze
1760 IF XG<4 THEN GOTO 1060:REM volgende poging
1770 GOSUB 100:GOSUB 5530
1780 PRINT :PRINT 
1790 PRINT "Nog eens?";:GOSUB 210:IF IN<> 78 THEN GOTO 1060
1800 GOTO 950:REM einde
2000 REM
2010 REM subroutine random zoekwaarde
2020 REM
2030 GOSUB 260:REM random in RV
2040 ON EN GOTO 2060,2080,2100,2140,2170,2190
2050 REM ** EN=1 dus uitleg-1 + gehele waarde **
2060 GOSUB 4030:X=1+INT (RV*5):GOTO 2200
2070 REM ** EN=2 dus uitleg-2 + halve waarde **
2080 GOSUB 4530:X=1.5+INT (RV*5):GOTO 2200
2090 REM ** EN=3 dus tiende<>half **
2100 X=1+INT (RV*5)
2110 GOSUB 260:IF RV>.5 THEN X=X+.5
2120 GOSUB 260:X=X+INT (RV*4)/5:GOTO 2200
2130 REM ** EN=4 dus uitleg-4 + tussenwaarde **
2140 GOSUB 5030:X=0.05+INT (RV*12)/2
2150 GOSUB 260:X=X+INT (RV*4)/5:GOTO 2200
2160 REM ** EN=5 dus decimale tussenwaarde **
2170 X=INT (RV*61)/10:GOTO 2200
2180 REM ** EN=6 dus 1/20 tussenwaarde **
2190 X=0.05+INT (RV*60)/10
2200 GA=X:X=(1+2*X)/32:RETURN 
2500 REM
2510 REM subroutine goed antwoord
2520 REM
2530 IF EN<> 5 THEN GOTO 2560
2540 I=LEN (SR$)-1:IF I<1 THEN I=1
2550 IF MID$(SR$,I,1)<> "." THEN GOTO 3030:REM geen punt
2560 SR$="  Goed zo":GOSUB 650:AG=AG+1
2570 IF EN>4 THEN XG=XG+1
2580 EN=EN+1:IF EN>6 THEN EN=5
2590 VF=0
2600 RETURN 
3000 REM
3010 REM subroutine fout antwoord
3020 REM
3030 CT=5:CN=1:SR=Z+GA:GOSUB 310
3040 SR$="Het juiste antwoord is:"+SR$
3050 CN=0:GOSUB 650:GOSUB 250
3060 AF=AF+1
3070 XG=XG-1:IF XG<0 THEN XG=0
3080 IF VF=0 THEN GOTO 3100
3090 IF XG=0 THEN EN=EN-1:IF EN=4 THEN EN=3
3100 VF=1
3110 SD=20:GOSUB 450
3120 RETURN 
3500 REM
3510 GOSUB 100:REM ** subroutine uitleg **
3520 REM
3530 HO=11:VE=2:GOSUB 110
3540 SR$="N O N I U S":GOSUB 150
3550 PRINT :PRINT :PRINT 
3560 PRINT "Een NONIUS, zoals o.a. op schuifmaten"
3570 PRINT "voorkomt, geeft de mogelijkheid kleine"
3580 PRINT "lengtematen tot in tienden van"
3590 PRINT "millimeters af te lezen."
3600 PRINT :PRINT 
3610 PRINT "Denk eraan dat de computer een decimale"
3620 PRINT "punt gebruikt in plaats van een komma."
3630 PRINT :PRINT "Geef na elk antwoord <RETURN>."
3640 PRINT :PRINT "LET OP! De afbeelding op het scherm is"
3650 PRINT "sterk vergroot."
3660 HO=25:VE=23:GOSUB 110:PRINT "druk <RETURN>";:GOSUB 210
3670 EN=1
3680 RETURN 
4000 REM
4010 REM subroutine uitleg-1
4020 REM
4030 HO=0:VE=VU
4040 SR$="Lees de stand van de SCHUIF af. ":GOSUB 5120
4050 SR$="De 0-streep van de noniusverde- ":GOSUB 5120
4060 SR$="ling geeft deze stand aan.      ":GOSUB 5120
4070 SR$="Kijk op de bovenste schaal bij  ":GOSUB 5120
4080 SR$="welke mm-streep deze 0-streep   ":GOSUB 5120
4090 SR$="zich bevindt.":GOSUB 5120
4100 SR$="Vergeet <RETURN> niet!":GOSUB 5120
4110 RETURN 
4500 REM
4510 REM subroutine uitleg-2
4520 REM
4530 HO=0:VE=VU
4540 SR$="Zoek op de SCHUIF een streep die":GOSUB 5120
4550 SR$="PRECIES tegenover een mm-streep ":GOSUB 5120
4560 SR$="staat. Het getal op de SCHUIF   ":GOSUB 5120
4570 SR$="dat daarbij hoort geeft het     ":GOSUB 5120
4580 SR$="aantal 10-de mm dat de schuif   ":GOSUB 5120
4590 SR$="voorbij de hele-mm-streep staat.":GOSUB 5120
4600 SR$="Lees af in helen en tienden.    ":GOSUB 5120
4610 SR$="Denk aan de decimale punt!      ":GOSUB 5120
4620 RETURN 
5000 REM
5010 REM subroutine uitleg-4
5020 REM
5030 HO=0:VE=VU
5040 SR$="Als er geen enkele noniusstreep ":GOSUB 5120
5050 SR$="PRECIES tegenover een mm-streep ":GOSUB 5120
5060 SR$="staat, moet er een zijn die net ":GOSUB 5120
5070 SR$="voorbij een mm-streep staat,    ":GOSUB 5120
5080 SR$="terwijl de volgende er nog juist":GOSUB 5120
5090 SR$="voor staat. Reken 0.05 mm meer  ":GOSUB 5120
5100 SR$="dan bij de eerste streep hoort. ":GOSUB 5120
5110 RETURN 
5120 GOSUB 650:VE=VE+1/24:RETURN 
5500 REM
5510 REM subroutine laatste uitleg
5520 REM
5530 PRINT :PRINT "Aantal goede antwoorden: ";AG
5540 PRINT "Aantal foute antwoorden: ";AF
5550 PRINT :PRINT :PRINT 
5560 PRINT "Tenslotte nog een uitleg van de werking:"
5570 PRINT "De mm-strepen op de vaste schaalverde-"
5580 PRINT "ling staan precies 1 mm uit elkaar."
5590 PRINT :PRINT "De noniusstrepen op de schuif staan"
5600 PRINT "echter maar 0.9 mm uit elkaar."
5610 PRINT "Als een bepaalde noniusstreep precies"
5620 PRINT "tegenover een mm-streep staat, staat de"
5630 PRINT "volgende dus 0.1 mm voor een mm-streep."
5640 PRINT :PRINT "Deze tweede streep komt op zijn beurt"
5650 PRINT "precies tegenover die mm-streep te staan"
5660 PRINT "als de schuif 0.1 mm verder schuift."
5670 RETURN 
30000 REM Dit programma geeft instruktie
30010 REM en oefeningen in het aflezen
30020 REM van een SCHUIFMAAT
30030 REM
32000 REM De eerste versie van dit
32010 REM programma werd geschreven door
32020 REM  H.J. Pootjes
32030 REM  Eerste Chr. Lyceum
32040 REM  Zuider Emmakade 43
32050 REM  HAARLEM
32060 REM
32070 REM De bewerking naar BASICODE-3
32080 REM gebeurde door de
32090 REM Stichting BASICODE
32100 REM
32110 REM februari 1990
*/ });
