/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
994 rem funcplot - Function Plotting (Funktionsplotting)
995 rem Hannes Frank
996 rem http://www.basicode.de/download/neue.zip
997 rem Modifications:
998 chain merge "basicode"
1000 A=100:GOTO 20:REM            Funktionsplotting
1010 GOTO 10000
1015 GOSUB 100:HO=7:VE=0:SR$="FUNKTIONSPLOTTING":GOSUB 110
1020 GOSUB 150:GOSUB 250:PRINT :PRINT :PRINT 
1025 PRINT "Def.: Unter einer rellen Funktion einer ";
1030 PRINT "reellen unabhaengigen Variablen versteht man ";
1040 PRINT "eine Teilmenge der geordneten Zahlenpaare ";
1050 PRINT "[(x,y)/x<R;y<R]."
1060 PRINT :PRINT "Mit dem folgenden Programm koennen ";
1070 PRINT "Sie sich den Graphen solch einer Funktion ";
1080 PRINT "zeichnen lassen."
1090 PRINT :PRINT "Die darzustellende Funktion muessen ";
1100 PRINT "Sie auf Zeile 2010 eingeben!"
1110 PRINT :PRINT "Falls Sie dies schon getan haben ";
1120 PRINT "druecken Sie bitte 'W'+ Enter !"
1130 INPUT A$:GOSUB 250:IF A$<> "w" THEN GOTO 950
1150 PRINT :PRINT "Geben Sie nun bitte den gewuenschten ";
1160 PRINT "Definitions- und Wertebereich ein!"
1170 INPUT " x1 ?";X1:GOSUB 250:INPUT " x2 ?";X2:GOSUB 250
1180 INPUT " y1 ?";Y1:GOSUB 250:INPUT " y2 ?";Y2:GOSUB 250
1190 INPUT "Ist die Eingabe korrekt ? (j/n)";A$:
1195 IF A$="n" THEN GOTO 1150
1200 XX=(X2-X1):SX=XX/256:YY=(Y2-Y1):SY=YY/192
1210 YA=-X1/XX:XA=Y2/YY
1220 GOTO 1600
1290 REM           ***UNTERPROGRAMME***
1300 IF (HO>= 1) OR (HO<= 0) OR (VE>= 1) OR (VE<= 0) THEN RETURN 
1310 GOSUB 620:RETURN 
1350 IF (HO>= 1) OR (HO<= 0) OR (VE>= 1) OR (VE<= 0) THEN RETURN 
1360 GOSUB 630:RETURN 
1400 HO=YA-2*SX/XX:GOSUB 1300:HO=YA+2*SX/XX:GOSUB 1350
1410 RETURN 
1450 VE=XA-2*SY/YY:GOSUB 1300:VE=XA+2*SY/YY:GOSUB 1350
1460 RETURN 
1500 GOSUB 2000:HO=(X-X1)/XX:VE=(Y2-Y)/YY
1520 RETURN 
1530 IF (VE<= 0) THEN VE=0.01
1535 IF (VE>= 1) THEN VE=0.99
1540 RETURN 
1550 IF (SX>0) AND (X>= X2) THEN GOTO 1780
1560 IF (SX<0) AND (X<= X2) THEN GOTO 1780
1570 RETURN 
1580 IF (Y>Y2) AND (Y>Y1) THEN GOTO 1732
1585 IF (Y<Y2) AND (Y<Y1) THEN GOTO 1732
1590 RETURN 
1600 GOSUB 600:REM           **GRAFIK***
1605 CN=0
1610 HO=YA:VE=0.99:GOSUB 1300:VE=0.01:GOSUB 1350
1620 HO=0.01:VE=XA:GOSUB 1300:HO=0.99:GOSUB 1350
1630 SR$="Graph der Funktion":HO=3:VE=0:GOSUB 650
1650 GOSUB 250:FOR I=38 TO -38 STEP -1
1655 Z=10^I:XZ=XX/30:YZ=YY/30
1660 IF (Z>XZ) THEN A=I
1670 IF (Z>YZ) THEN B=I
1675 IF (I<A) AND (I<B) THEN I=-38
1680 NEXT I
1690 GOSUB 250:FOR I=-10 TO 10
1700 VE=(Y2+I*(10^B))/YY:GOSUB 1400
1710 HO=(-X1+I*(10^A))/XX:GOSUB 1450
1720 NEXT I
1730 GOSUB 250:X=X1+SX
1732 GOSUB 1500
1735 GOSUB 1530
1736 GOSUB 1300:X=X+SX:GOSUB 1550
1738 GOSUB 1580
1740 GOSUB 1500
1745 GOSUB 1530
1750 GOSUB 1350:X=X+SX
1760 GOSUB 1550
1770 GOTO 1740
1780 GOSUB 250
1790 GOSUB 210
1795 GOTO 1010
2000 REM           ***Funktionen***
2010 Y=EXP (-2*X*SIN (3*X))
2020 RETURN 
2030 REM         *Funktionenstapel*
2040 REM         *zur Auswahl *
2050 Y=SIN (X)
2060 Y=(EXP (-1/X))/(1+EXP (-1/X))
2070 Y=1/(1+X*X):REM        Ableitung (arctan x)
2080 Y=EXP (-2*X*SIN (3*X))
2090 Y=LN (ATN (X))
2100 Y=2*COS (3*X)
2110 Y=X*X
2120 Y=EXP (-2*X*SIN (3*X))*LN (ATN (X))
2130 Y=EXP (-2*X*SIN (3*X))*LN (ATN (X))+2*COS (3*X)
2140 Y=EXP (-2*X*SIN (3*X))*LN (ATN (X))+2*COS (3*X)+X*X
3000 REM     *** DREIECKSBERECHNUNG**
3010 GOSUB 100:HO=7:VE=0:SR$="Dreiecksberechnung":GOSUB 110
3015 GOSUB 250
3020 GOSUB 150:DIM D(4,2):DIM V(4)
3025 DIM H(4,2):DIM W(4)
3028 P2=3.1415926:E1=0.000001:PRINT :PRINT 
3030 PRINT :PRINT "Mit dem folgenden Programm koennen ";
3040 PRINT "Sie ein beliebiges Dreieck in einer ";
3050 PRINT "Ebene berechnen."
3060 PRINT :PRINT "Geben Sie nun bitte 3 Punkte an."
3070 GOTO 3300
3100 REM     *** Unterprogramme ***
3110 HO=0:VE=17:GOSUB 110
3120 RETURN 
3150 REM     *** Flaecheninhalt ***
3160 F1=((V(1))*(V(2))*(SIN (W(1)*P2/180)))/2
3170 RETURN 
3300 FOR K=1 TO 3
3310 PRINT 
3320 PRINT " Punkt ";K;
3330 INPUT "       X-Koordinate?";D(K,1):GOSUB 250
3340 INPUT "               Y-Koordinate?";D(K,2):GOSUB 250
3350 NEXT K
3360 GOSUB 3700:GOSUB 3750:GOSUB 3150
3365 GOSUB 250:GOSUB 100
3370 FOR I=1 TO 3
3380 PRINT "Punkt ";I;" = ";D(I,1);" , ";D(I,2)
3390 NEXT I
3400 PRINT :PRINT "Seite a= ";V(1)
3410 PRINT "Seite b= ";V(2)
3420 PRINT "Seite c= ";V(3)
3510 PRINT :PRINT "Winkel A= ";W(3)
3520 PRINT "Winkel B= ";W(1)
3530 PRINT "Winkel C= ";W(2)
3550 PRINT 
3560 PRINT "Flaecheninhalt = ";F1
3600 GOSUB 3100
3605 PRINT :PRINT "w-Wiederholung Berechnung"
3610 PRINT "g-Grafische Darstellung"
3620 PRINT "q-zum Hauptmenue"
3630 INPUT A$
3640 IF A$="w" THEN GOTO 3000
3645 IF A$="g" THEN GOTO 3900
3650 IF A$="q" THEN GOTO 10000
3680 GOTO 10000
3700 REM    *** Vektoren,Betraege ***
3705 D(4,1)=D(1,1):D(4,2)=D(1,2)
3710 FOR I=1 TO 3
3720 H(I,1)=D(I,1)-D(I+1,1):H(I,2)=D(I,2)-D(I+1,2)
3730 V(I)=SQR (H(I,1)*H(I,1)+H(I,2)*H(I,2))
3735 NEXT I
3738 H(4,1)=H(1,1):H(4,2)=H(1,2)
3739 V(4)=V(1)
3740 RETURN 
3750 REM    ** Winkelberechnung **
3760 FOR I=1 TO 3
3765 IF (ABS (V(I)))<E1 THEN PRINT "keine Linie !":RETURN 
3766 IF (ABS (V(I+1)))<E1 THEN PRINT "keine Linie !":RETURN 
3770 WH=((H(I,1)*H(I+1,1)+H(I,2)*H(I+1,2))/V(I)/V(I+1))
3775 GOSUB 3800:W(I)=WC/P2*180
3780 NEXT I
3790 RETURN 
3800 REM    *** Arccos ***
3810 IF (ABS (WH))<(0.00001) THEN WC=P2/2:RETURN 
3820 WC=(ATN (SQR ((1-WH*WH)/(WH*WH))))
3830 RETURN 
3850 REM     *** Skalenstriche ***
3860 HO=0.49:GOSUB 1300:HO=0.51:GOSUB 1350
3870 RETURN 
3880 VE=0.49:GOSUB 1300:VE=0.51:GOSUB 1350
3890 RETURN 
3900 REM    ** grafische Darstellungsart **
3910 GOSUB 100:PA=0
3920 PRINT :PRINT "Die folgende Routine stellt das Dreieck ";
3930 PRINT "in der X-Y-Ebene dar."
3935 PRINT :PRINT "Wollen Sie, dass es sich dabei noch ";
3940 PRINT "dreht? j/n":INPUT A$
3945 IF A$<> "j" THEN GOTO 4000
3950 PRINT :PRINT "Geben Sie bitte Ihren gewuenschten ";
3955 PRINT "Drehpunkt ein."
3960 INPUT "X-Koordinate? ";P0:INPUT "Y-Koordinate? ";P1
3970 DIM S(4):PA=1
3980 GOSUB 4400:L3=0
4000 GOSUB 600:REM    **GRAFIsches Dreieck***
4005 CN=0
4010 HO=0.5:VE=0.99:GOSUB 1300:VE=0.01:GOSUB 1350
4020 HO=0.01:VE=0.5:GOSUB 1300:HO=0.99:GOSUB 1350
4030 HO=3:VE=0:SR$="grafisches Dreieck":GOSUB 650
4100 REM    ** Normierung **
4110 FOR I=1 TO 3:FOR K=1 TO 2
4115 MB=ABS (D(I,K))
4120 IF MA<MB THEN MA=MB
4130 NEXT K
4140 NEXT I
4150 GOSUB 250:FOR I=38 TO -38 STEP -1
4155 Z=5^I
4160 IF (Z>MA) THEN A=I
4175 IF (I<A) THEN I=-38
4180 NEXT I
4200 GOSUB 250:FOR I=0 TO 10
4210 VE=I*0.2+0.1:GOSUB 3850
4220 HO=I*0.2+0.1:GOSUB 3880
4230 NEXT I
4290 D(4,1)=D(1,1):D(4,2)=D(1,2):Z=5^A
4300 HO=0.5+D(1,1)/Z:VE=0.5-D(1,2)/Z
4310 GOSUB 1300
4320 FOR I=2 TO 4
4330 HO=0.5+D(I,1)/Z:VE=0.5-D(I,2)/Z
4340 GOSUB 1350
4350 NEXT I
4360 IF PA=0 THEN GOTO 4800
4370 GOSUB 4440
4380 GOTO 4300
4400 REM    ** UP-Abstandsberechnung **
4410 FOR I=1 TO 3
4420 S(I)=SQR ((P0-D(I,1))^2+(P1-D(I,2))^2)
4430 NEXT I
4432 S(4)=S(1)
4435 RETURN 
4438 REM     ** Koordinatenberechnung **
4440 FOR I=1 TO 4
4450 D(I,1)=D(I,1)+SIN (L3)*S(I)
4460 D(I,2)=D(I,2)+COS (L3)*S(I)
4470 NEXT I
4480 L3=L3+0.2
4490 RETURN 
4800 GOSUB 3100:GOSUB 210:GOTO 3365
5000 INPUT "STOP";A
10000 GOSUB 100:HO=7:VE=0:SR$="MATHEMATISCHE GRAFIKEN"
10010 GOSUB 250
10020 GOSUB 110:GOSUB 150
10030 PRINT :PRINT :PRINT "HAUPTMENUE"
10050 PRINT :PRINT "1-FUNKTIONSPLOTTING"
10060 PRINT "2-DREIECKSBERECHNUNG"
10090 GOSUB 3100
10100 INPUT "Waehlen Sie!";A
10110 IF A=1 THEN GOTO 1015
10120 IF A=2 THEN GOTO 3000
10130 GOTO 10000
30000 REM         Funktionsplotprogramm
30010 REM         mit Skalierung
30012 REM        
30015 REM          Version 4
30018 REM        
30020 REM         eventuelle Divisionen
30030 REM         durch Null muessen auf
30040 REM         Zeile 2000 ausgeschlossen
30050 REM         werden
30060 REM         
30070 REM         1300 UP-Pixel setzen
30080 REM         1350 UP-Strich ziehen
30090 REM         1400 UP-Y-Skalenstrich
30100 REM         1450 UP-X-Skalenstrich
30110 REM         1500 Pixelberechnung
30115 REM         1530 Vertikal auf 0<1
30120 REM         1550 Intervalltest
30130 REM         1580 UP-Bereichsueberschreitg
30210 REM         1735 Routine Anfangspunkt
30220 REM         1740 Plotroutine
30225 REM         3100 UP-unten Ausdrucken
30226 REM         3150 UP-Flaecheninhalt
30230 REM         3700 UP-Vektoren H(x,y)
30235 REM         3700 UP-Betraege V
30240 REM         3750 UP-Winkel W
30250 REM         3800 UP-Arccos
30260 REM         3850 UP-Skalenstriche
30295 REM    
30390 REM       
30400 REM        nach Anregung von der 
30410 REM        Mathematik-Vorlesung
30420 REM        bei Prof.Dennler
30430 REM       
30500 REM    
30510 REM     Mit wenig Aufwand kann man
30520 REM     das Programm auch fuer ein
30530 REM     Dreieck im 3-dimensionalen
30540 REM     Raum umschreiben.
31995 REM    
32000 REM         auf einem Sinclair-Spectrum
32010 REM         am 3.02.1990 geschrieben
32050 REM         Autor:
32060 REM           Hannes Frank
32070 REM           Goethestr.19
32080 REM           Ilmenau/Thuer.
32090 REM           6300  DDR
32100 REM    
32110 REM    
*/ });
