/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
994 rem rotation - Rotation
995 rem Thomas Rademacher
996 rem http://www.basicode.de/download/neue.zip
997 rem
998 chain merge "basicode"
1000 A=50:GOTO 20:REM Rotation (aehnl. Schiebefix)
1010 REM
1020 ZE=0:SP=0:S1=0:Z1=0:GOSUB 100
1030 GOSUB 7030:GOSUB 6030:GOSUB 5240
1040 GOSUB 5030
1050 IF Z1<>0 THEN 1070
1060 IF M1$<>M4$ THEN 1040
1070 HO=21:VE=9:GOSUB 110
1080 SR$="  Abbruch  "
1090 IF Z1<>0 THEN 1110
1100 SR$="Gratuliere!"
1110 GOSUB 150
1120 HO=21:VE=11:GOSUB 110
1130 SR$="Noch mal ? ":GOSUB 150
1140 GOSUB 210
1150 IF IN<>78 THEN 1020
1160 GOSUB 100:GOTO 950
2000 REM #
2010 REM # (einmaliger) Tausch von nur zwei Buchstaben
2020 REM #
2030 IF M5=1 THEN 2140
2040 VE=3+2*ZE:HO=3+4*SP
2050 GOSUB 110:GOSUB 220
2060 M3$=CHR$(IN)
2070 HO=HO+4
2080 GOSUB 110:GOSUB 220
2090 PRINT M3$;
2100 HO=HO-4:GOSUB 110
2110 PRINT CHR$(IN);:GOSUB 3200
2120 M5=1:HO=32:VE=7:GOSUB 110
2130 PRINT "nein";
2140 RETURN
3000 REM #
3010 REM # Ringtausch eines Viererblocks
3020 REM #
3030 VE=3+2*ZE:HO=3+4*SP
3040 GOSUB 110:GOSUB 220
3050 M3$=CHR$(IN)
3060 HO=HO+4
3070 GOSUB 110:GOSUB 220
3080 PRINT M3$;:M3$=CHR$(IN)
3090 VE=VE+2
3100 GOSUB 110:GOSUB 220
3110 PRINT M3$;:M3$=CHR$(IN)
3120 HO=HO-4
3130 GOSUB 110:GOSUB 220
3140 PRINT M3$
3150 VE=VE-2
3160 GOSUB 110
3170 PRINT CHR$(IN);
3180 REM HO=31:VE=5:GOSUB 110
3190 S1=S1+1:REM PRINT S1;
3200 M2$=""
3210 FOR J2=0 TO 4
3220 VE=3+2*J2
3230 FOR I2=0 TO 4
3240 HO=4*I2+3
3250 GOSUB 110:GOSUB 220
3260 M2$=M2$+CHR$(IN)
3270 NEXT I2
3280 NEXT J2
3290 M1$=M2$
3300 RETURN
4000 REM #
4010 REM # Zeichnen des aktuellen Spielfelds
4020 REM #
4030 FOR J=0 TO 4
4040 VE=3+2*J
4050 FOR I=0 TO 4
4060 HO=4*I
4070 GOSUB 110
4080 PRINT "   ";MID$(M1$,5*J+I+1,1);"   ";
4090 NEXT I
4100 NEXT J
4110 HO=31:VE=5:GOSUB 110
4120 PRINT S1;:GOSUB 270
4130 RETURN
5000 REM #
5010 REM # Hauptroutine (Tastaturabfrage)
5020 REM #
5030 GOSUB 210
5040 IF IN<>28 THEN 5070
5050 IF SP=0 THEN 5070
5060 SP=SP-1
5070 IF IN<>29 THEN 5100
5080 IF SP=3 THEN 5100
5090 SP=SP+1
5100 IF IN<>30 THEN 5130
5110 IF ZE=3 THEN 5130
5120 ZE=ZE+1
5130 IF IN<>32 THEN 5150
5140 GOSUB 3030
5150 IF IN<>13 THEN 5170
5160 GOSUB 2030
5170 IF IN<>90 THEN 5190
5180 Z1=1
5190 IF IN<>49 THEN 5210
5200 GOSUB 2030
5210 IF IN<>31 THEN 5240
5220 IF ZE=0 THEN 5240
5230 ZE=ZE-1
5240 GOSUB 4030:VE=3+2*ZE:HO=3+4*SP
5250 GOSUB 110
5260 GOSUB 220:SR$=CHR$(IN)
5270 HO=HO-3:GOSUB 110:GOSUB 150
5280 HO=HO+7
5290 GOSUB 110
5300 GOSUB 220:SR$=CHR$(IN)
5310 HO=HO-3:GOSUB 110:GOSUB 150
5320 VE=VE+2:HO=HO+3
5330 GOSUB 110
5340 GOSUB 220:SR$=CHR$(IN)
5350 HO=HO-3:GOSUB 110:GOSUB 150
5360 HO=HO-1
5370 GOSUB 110
5380 GOSUB 220:SR$=CHR$(IN)
5390 HO=HO-3:GOSUB 110:GOSUB 150
5400 GOSUB 4110
5410 RETURN
6000 REM #
6010 REM # Erzeugen der zufaelligen Anordnung
6020 REM #
6030 M1$="........................."
6040 FOR I1=65 TO 89
6050 IF I1<>65 THEN 6100
6060 HO=23:VE=9:GOSUB 110
6070 SR$=" Geduld  ":GOSUB 150
6080 VE=11:GOSUB 110
6090 SR$="bitte ...":GOSUB 150
6100 IF I1<>84 THEN 6150
6110 HO=23:VE=9:GOSUB 110
6120 SR$="Momentchen":GOSUB 150
6130 VE=11:GOSUB 110
6140 SR$=" noch ... ":GOSUB 150
6150 GOSUB 4030:GOSUB 260
6160 J1=INT(RV*25+1)
6170 IF MID$(M1$,J1,1)<>"." THEN 6150
6180 M2$=LEFT$(M1$,J1-1)+CHR$(I1)
6190 M2$=M2$+RIGHT$(M1$,LEN(M1$)-J1)
6200 M1$=M2$
6210 NEXT I1
6220 M4$="":FOR I4=65 TO 89
6230 M4$=M4$+CHR$(I4)
6240 NEXT I4:M5=0:S1=0
6245 sd=3:gosub 450:'short delay
6250 HO=23:VE=9:GOSUB 110
6260 PRINT"                ";
6270 HO=23:VE=11:GOSUB 110
6280 PRINT"                ";
6290 RETURN
7000 REM #
7010 REM # Vorbereitung des Spielfelds
7020 REM #
7030 HO=13:VE=0:GOSUB 110
7040 SR$="ROTATION":GOSUB 150
7050 HO=0:VE=14:GOSUB 110
7060 IF M4$<>"" THEN 7350
7070 PRINT "Spielanleitung ( J/N ): ";
7080 GOSUB 210
7090 IF IN<>74 THEN 7350
7100 GOSUB 110
7110 PRINT "Die Buchstaben  sollen in  die richtige"
7120 PRINT "Reihenfolge  gebracht werden.  Hierfuer"
7130 PRINT "koennen  die vier  invers dargestellten"
7140 PRINT "durch Druck  auf die Leertaste  im Uhr-"
7150 PRINT "zeigersinn   gegeneinander   vertauscht"
7160 PRINT "werden.  Mit  den Cursortasten  koennen"
7170 PRINT "andere zum Tauschen ausgewaehlt werden."
7180 PRINT:PRINT "                    < Taste >"
7190 GOSUB 210:GOSUB 110
7200 PRINT "In etwa der Haelfte der Spiele  wird es"
7210 PRINT "nur   aufgehen  koennen,   wenn  einmal"
7220 PRINT "waehrend  des  Spiels  nur  die  oberen"
7230 PRINT "zwei  markierten Buchstaben miteinander"
7240 PRINT "vertauscht werden - hierfuer  steht ein"
7250 PRINT "einziges Mal der Druck auf die Ziffer 1"
7260 PRINT "zur Verfuegung. Durch Druck auf ";
7270 PRINT CHR$(34);"Z";CHR$(34);" kann"
7280 PRINT "das Spiel abgebrochen werden.         "
7290 GOSUB 210
7300 FOR J=23 TO 14 STEP -1
7310 FOR I=39 TO 0 STEP -1
7320 HO=I:VE=J:GOSUB 110:PRINT " ";
7330 NEXT I
7340 NEXT J
7350 HO=25:VE=5:GOSUB 110
7360 PRINT "Zuege:        ";
7370 HO=23:VE=7:GOSUB 110
7380 PRINT CHR$(34);"1";CHR$(34);"-Zug: ja  ";
7390 HO=0:VE=14:GOSUB 110
7400 PRINT "Cursor-Tasten: Auswahl  "
7410 HO=4:VE=16:GOSUB 110
7420 PRINT "Leertaste: Tausch (4)"
7430 HO=10:VE=18:GOSUB 110
7440 PRINT "<1>: Tausch (nur obere zwei)"
7450 HO=10:VE=20:GOSUB 110
7460 PRINT "<Z>: Spiel-Abbruch"
7470 RETURN
32000 REM #################################################
32010 REM ##                                             ##
32020 REM ##  THOMAS RADEMACHER                          ##
32030 REM ##  FRIEDRICH-ENGELS-STR. 44                   ##
32040 REM ##  D-99086 ERFURT                             ##
32050 REM ##                                             ##
32060 REM ##  SEPTEMBER 2003                             ##
32070 REM ##                                             ##
32080 REM ##  ERSTELLT AUF EMULIERTEM AMSTRAD PCW        ##
32090 REM ##  (PCWEMU V2.01 FUER WINDOWS                 ##
32100 REM ##                     VON JOHN ELLIOT)        ##
32110 REM ##  SPIELIDEE: "Rotation" AUS DEM BUCH         ##
32120 REM ##  "Basic Computer Spiele                     ##
32130 REM ##            Mikrocomputer-Ausgabe"  BAND 2   ##
32140 REM ##  HERAUSGEGEBEN VON DAVID H. AHL             ##
32150 REM ##  SYBEX-VERLAG GMBH, DUESSELDORF             ##
32160 REM ##                                             ##
32170 REM #################################################
*/ });
