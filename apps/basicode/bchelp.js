/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
994 rem bchelp - BC Help (BC Hilfe)
995 rem
996 rem http://www.basicode.de/download/neue.zip
997 rem Modifications:
998 chain merge "basicode"
1000 A=100:GOTO 20:REM      ## BASICODE-Hilfsprogramm ##
1010 GOSUB 100:HA=HO:VA=VE
1020 H2=HG:V2=VG
1050 GOSUB 100
1180 VE=0:HO=8
1200 SR$=" HAUPTMENUE ":GOSUB 110:GOSUB 150
1210 PRINT :PRINT :PRINT "1-Allgemeine Erklaerung"
1220 PRINT "2-Anzeige der speziellen"
1222 PRINT "  Zeilen/Spalten"
1230 PRINT "3-einfache Befehle im Textmode"
1240 PRINT "4-weiterhin Textmode"
1250 PRINT "5-Grafik-Mode"
1260 PRINT "6-die Tonausgabe"
1270 PRINT "7-Umgang mit Daten-Files"
1280 PRINT "8-Ergaenzungen zum Bascoder"
1290 PRINT "9-Ergaenzungen zu GOSUB-"
1292 PRINT "  Routinen"
1300 PRINT "10-Hinweise zu den Variablen"
1310 PRINT "11-Auffuehrung der erlaubten"
1312 PRINT "   Befehle"
1350 INPUT A
1360 IF A<= 3 THEN MA=(A*1000+2000)
1370 IF A>= 4 THEN MA=(A*1000+3000)
1380 ON A GOTO 3000,4000,5000,7000,8000,9000,10000
1385 ON A-7 GOTO 11000,12000,13000,14000
3000 GOSUB 100
3020 PRINT "Allgemeine Erklaerung"
3030 PRINT :PRINT "BASICODE ist eine einheitliche"
3035 PRINT "Programmiersprache, die an"
3037 PRINT "BASIC angelehnt ist."
3040 PRINT :PRINT "Sie verwendet reichlich 50"
3045 PRINT "BASIC-Befehle, aber auch 30"
3050 PRINT "GOSUB-Routinen, die spezielle"
3052 PRINT "Befehle nachbilden. "
3055 PRINT :PRINT "Dadurch muss sich der Program-"
3060 PRINT "mierer die speziellen Funktio-"
3065 PRINT "nen mit ihren Hilfsvariablen"
3067 PRINT "erst einpraegen."
3070 PRINT :PRINT "Dieses Programm soll Ihnen bei "
3075 PRINT "der Erstellung eines BASICODE-"
3077 PRINT "Programmes helfen!"
3080 PRINT :PRINT "Am Besten ist es, dass Sie Ihr"
3085 PRINT "Programm auf dem Papier vorbe-"
3090 PRINT "reiten und bei speziellen Be-"
3091 PRINT "fehlen dieses Programm zu Rate"
3092 PRINT "ziehen."
3100 GOSUB 210:GOSUB 100
3120 PRINT "Der blockmaessige Aufbau eines"
3125 PRINT "BASICODE-Programms ist genau "
3130 PRINT "festgelegt."
3135 PRINT :PRINT " 1010-19999: BASICODE-"
3137 PRINT "             Hauptprogramm"
3140 PRINT "20000-24999: spezielle"
3142 PRINT "             Routinen"
3145 PRINT "25000-29999: DATA-Zeilen"
3150 PRINT "30000-31999: REM-Programm-"
3152 PRINT "             beschreibung"
3155 PRINT "32000-32767: REM-Autorenadresse"
3950 GOSUB 210:GOTO 1050
4000 GOSUB 100
4020 PRINT "  Bildschirmdaten"
4030 PRINT :PRINT "Textmodus: Spalten*Zeile = "
4032 PRINT "             ";(HA+1);"*";(VA+1)
4040 PRINT :PRINT "Grafikmodus:  X*Y Pixel = "
4042 PRINT "             ";H2;"*";V2
4050 PRINT :PRINT 
4900 GOSUB 210:GOTO 1050
5000 GOSUB 100:HO=6:VE=0
5020 SR$="Befehle im Textmode":GOSUB 110:GOSUB 150
5090 PRINT :PRINT :PRINT "1-Programminitialisierung"
5100 PRINT "2-statische und dynamische"
5102 PRINT "  Eingaberoutinen"
5110 PRINT "3-Aufruf der Zufallsfunktion"
5120 PRINT "4-PRINT AT"
5130 PRINT "5-Loeschen des Bildschirms"
5140 PRINT "6-auffaellige Anzeige"
5150 PRINT "7-BEEP"
5170 PRINT "8-Unterbrechungsverbot"
5180 PRINT "9-PAUSE"
5190 PRINT "10-Hauptmenue"
5200 INPUT A:IF A=10 THEN GOTO 1050
5300 ON A GOTO 5400,5500,5600,5700,5800,5900,6000,6100,6200
5400 GOSUB 100
5410 PRINT :PRINT "Auf Programmzeile 1000 steht"
5420 PRINT "die Initialisierung:"
5430 PRINT "A=100:GOTO 20:REM Programmname ."
5432 PRINT "  (A: Zahl der reservierten"
5434 PRINT "      Bytes fuer Strings)"
5440 PRINT :PRINT "Im Programm darf kein RUN,"
5445 PRINT "END, STOP stehen."
5450 PRINT :PRINT "Nach BRK kann mit CONT"
5455 PRINT "fortgesetzt werden."
5460 PRINT :PRINT "Am Ende des Programmes muss"
5465 PRINT "man  GOTO 950  programmieren."
5490 GOSUB 210:GOTO 5000
5500 GOSUB 100
5520 PRINT "statische und dynamische"
5522 PRINT "Eingaberoutinen"
5540 PRINT :PRINT "Mit GOSUB 210 wartet das"
5545 PRINT "Programm, bis eine Taste"
5547 PRINT "betaetigt wird."
5550 PRINT :PRINT "Die Variable IN enthaelt den"
5555 PRINT "ASCII-Code des eingegebenen"
5560 PRINT "Zeichens die Variable IN$"
5562 PRINT "das Zeichen selbst."
5565 PRINT :PRINT "GOSUB 200 wartet die Eingabe"
5570 PRINT "nicht ab, benutzt aber die"
5572 PRINT "selben Variablen."
5590 GOSUB 210:GOTO 5000
5600 GOSUB 100
5620 PRINT "Zufallsfunktion"
5630 PRINT :PRINT "Bei GOSUB 260 wird die Variable"
5635 PRINT "Variable RV mit"
5637 PRINT "(0<=RV<1) belegt."
5690 GOSUB 210:GOTO 5000
5700 GOSUB 100
5720 PRINT "PRINT AT wird durch GOSUB 110 "
5725 PRINT "realisiert."
5730 PRINT :PRINT "In Variable HO muss die"
5735 PRINT "Spalte (X) stehen."
5740 PRINT :PRINT "In Variable VE muss die"
5745 PRINT "Zeilennummer (Y) stehen."
5790 GOSUB 210:GOTO 5000
5800 GOSUB 100
5820 PRINT "Das Loeschen des Bildschirms"
5825 PRINT "kann mit  GOSUB 100  erfolgen."
5830 PRINT :PRINT "Die Variablen HO (X) und"
5835 PRINT "VE (Y) werden nicht"
5837 PRINT "beeinflusst."
5840 PRINT :PRINT "Beim Loeschen wird automatisch"
5845 PRINT "der Textmodus eingeschaltet."
5890 GOSUB 210:GOTO 5000
5900 GOSUB 100
5920 PRINT "Eine auffaellige Darstellung"
5925 PRINT "erreicht man mit GOSUB 150."
5930 PRINT :PRINT "Vorher muss allerdings der"
5935 PRINT "Text an SR$ uebergeben und"
5940 PRINT "HO (X) und VE (Y) definiert"
5942 PRINT "werden!"
5990 GOSUB 210:GOTO 5000
6000 GOSUB 100
6020 PRINT "Mit GOSUB 250 wird ein kurzer"
6025 PRINT "Ton erzeugt."
6030 GOSUB 250
6090 GOSUB 210:GOTO 5000
6100 GOSUB 100
6120 PRINT "Das UP GOSUB 280 sperrt die"
6125 PRINT "BRK-Taste, wenn die Variable"
6127 PRINT "FR=1 ist. (FR nicht 0)"
6190 GOSUB 210:GOTO 5000
6200 GOSUB 100
6220 PRINT "Programm wartet SD*0.1 Sekunden"
6222 PRINT "mit GOSUB 450."
6290 GOSUB 210:GOTO 5000
7000 GOSUB 100
7020 PRINT "weitere TEXT-Mode-Routinen"
7030 PRINT :PRINT "1-Lesen eines Zeichens vom"
7032 PRINT "  Bildschirm"
7035 PRINT "2-Umwandlung von Klein- in"
7037 PRINT "  Grossbuchstaben"
7040 PRINT "3-Formatierung von Zahlen"
7050 PRINT "4-Hauptmenue"
7060 INPUT A
7070 IF A=4 THEN GOTO 1050
7080 ON A GOSUB 7100,7200,7300:  ',7400
7100 GOSUB 100
7120 PRINT "Die Bildschirmposition wird mit"
7125 PRINT "HO (X) und VE (Y) bestimmt."
7130 PRINT :PRINT "Nach GOSUB 220 steht in der"
7132 PRINT "Variablen IN der ASCII-Code des"
7135 PRINT "Grossbuchstabens."
7190 GOSUB 210:GOTO 7000
7200 GOSUB 100
7220 PRINT "Mit GOSUB 330 werden alle"
7225 PRINT "Buchstaben des SR$ in"
7227 PRINT "Grossbuchstaben verwandelt."
7290 GOSUB 210:GOTO 7000
7300 GOSUB 100
7320 PRINT "CT enthaelt die Anzahl aller"
7325 PRINT "darzustellenden Ziffern"
7327 PRINT "(Laenge von SR$)"
7330 PRINT :PRINT "CN die Anzahl der"
7332 PRINT "Nachkommastellen"
7340 PRINT :PRINT "Die Zahl soll in SR stehen."
7345 PRINT :PRINT "In SR$ steht nach GOSUB 310"
7350 PRINT "die formatierte Zahl."
7390 GOSUB 210:GOTO 7000
8000 GOSUB 100
8020 PRINT "Grafik-Modus"
8030 PRINT :PRINT "1-Einschalten des Grafik-Modus"
8040 PRINT "2-Setzen eines Pixels"
8050 PRINT "3-Zeichnen einer Linie"
8060 PRINT "4-Einblenden von Schrift"
8070 PRINT "5-Hauptmenue"
8080 INPUT A:IF A=5 THEN GOTO 1050
8090 ON A GOTO 8100,8200,8300,8400
8100 GOSUB 100
8120 PRINT "Der Grafikmodus wird mit"
8125 PRINT "GOSUB 600 eingeschaltet."
8130 PRINT :PRINT "Die Befehle des Textmodus sind"
8135 PRINT "nicht mehr moeglich."
8140 PRINT :PRINT "Der Textmodus kann nur wieder"
8145 PRINT "ueber GOSUB 100 (Bildschirm-"
8150 PRINT "loeschen) erreicht werden."
8190 GOSUB 210:GOTO 8000
8200 GOSUB 100
8220 PRINT "Links bedeutet fuer HO (X) =0,"
8225 PRINT "rechts ist HO = 1"
8230 PRINT :PRINT "Oben ist VE=0 zu setzen"
8235 PRINT "unten ist VE = 1"
8240 PRINT :PRINT "Mit GOSUB 620 wird der Punkt"
8242 PRINT "gesetzt."
8250 PRINT :PRINT "Der unsichtbare Grafikkursor"
8255 PRINT "wird positioniert."
8290 GOSUB 210:GOTO 8000
8300 GOSUB 100
8320 PRINT "Mit dem durch GOSUB 620"
8325 PRINT "gesetzten Kursor wird eine"
8327 PRINT "Linie zu HO, VE gezogen."
8330 PRINT :PRINT "CN=0 bedeutet Farbe 'weiss'"
8335 PRINT "CN=1 bedeutet Farbe 'schwarz'"
8340 PRINT :PRINT "GOSUB 630 zeichnet die Linie."
8350 PRINT :PRINT "Fuer echte Farbdarstellungen"
8355 PRINT "duerfen nur Unterprogramme ab"
8357 PRINT "20000-24999 sein!"
8360 PRINT :PRINT "Aktualisierung:":PRINT
8362 PRINT "Verwendung der Norm "
8364 PRINT "        BasiCode-3C"
8390 GOSUB 210:GOTO 8000
8400 GOSUB 100
8420 PRINT "Die einzublendende Schrift muss"
8425 PRINT "in SR$ stehen."
8440 PRINT :PRINT "Die Position wird in HO (X)"
8445 PRINT "und VE (Y) festgelegt."
8460 PRINT :PRINT "Zur Durchfuehrung wird"
8465 PRINT "GOSUB 650 programmiert."
8490 GOSUB 210:GOTO 8000
9000 GOSUB 100
9020 PRINT "Tonausgabe"
9030 PRINT :PRINT "Die Tonausgabe erfolgt nur"
9032 PRINT "mono."
9040 PRINT :PRINT "SP ="
9042 PRINT "  Tonhoehe in Halbtonschritten"
9045 PRINT "SD = Tondauer * 0.1 s"
9050 PRINT "SV = Lautstaerke (0<=SV<=15)"
9060 PRINT :PRINT "Aufruf der Tonausgabe ueber"
9062 PRINT "GOSUB 400"
9070 PRINT :PRINT "Mit GOSUB 250 wird ein BEEP"
9072 PRINT "erzeugt."
9090 GOSUB 210:GOTO 1050
10000 GOSUB 100
10020 PRINT "Umgang mit Datenfiles"
10030 PRINT :PRINT "Neben Programmen koennen in"
10035 PRINT "BASICODE auch Datenfiles"
10037 PRINT "gespeichert werden, die"
10040 PRINT "eventuell durch ein Programm "
10045 PRINT "dann verarbeitet werden."
10050 PRINT :PRINT "Diese Dateien koennen auf"
10055 PRINT "Kassette, Disketten oder"
10057 PRINT "anderen Speichermedien"
10060 PRINT " gespeichert sein."
10062 PRINT :PRINT "Der Rechner arbeitet intern"
10064 PRINT "mit Feldern (Arrays), die auf"
10066 PRINT "diese Weise ausgelagert werden"
10067 PRINT "koennen."
10068 GOSUB 210:GOSUB 100
10070 PRINT :PRINT "Bei Belegung des NF$ mit einem"
10075 PRINT "maximal siebenbuchstabigen"
10080 PRINT "Namen wird die Datei eroeffnet."
10090 PRINT :PRINT "Die Variable NF bestimmt, ob in"
10093 PRINT "die Datei geschrieben oder aus"
10095 PRINT "ihr gelesen wird."
10100 PRINT :PRINT "NF = gerade Zahl heisst LESEN"
10105 PRINT "NF = ungerade Zahl heisst"
10107 PRINT "     SCHREIBEN"
10110 PRINT :PRINT "GOSUB 500"
10112 PRINT "aktiviert die Dateiarbeit."
10115 PRINT :PRINT "  SCHREIBEN einer Datei"
10120 PRINT :PRINT "Die Daten koennen an SR$"
10125 PRINT "uebergeben und mit GOSUB 560"
10127 PRINT "parameter wird das Einlesen"
10130 PRINT :PRINT "Die Datei wird abgeschlossen"
10135 PRINT "mit GOSUB 580."
10140 PRINT :PRINT "Bei dieser Routine muss der"
10145 PRINT "Rekorder in Aufnahmestellung"
10147 PRINT "mitlaufen."
10150 GOSUB 210:GOSUB 100
10155 PRINT " LESEN einer Datei"
10160 PRINT :PRINT "Bei dem Einlesen eines Files"
10165 PRINT "wird die Variable NF mit"
10170 PRINT "gerader Zahl belegt und"
10172 PRINT "GOSUB 500 aufgerufen."
10173 PRINT :PRINT "Vorher muss der Dateiname in"
10174 PRINT "NF$ eingegeben sein."
10180 PRINT :PRINT "In einer Zaehlschleife kann nun"
10185 PRINT "ein vorher dimensioniertes "
10190 PRINT "String-Feld schrittweise nach"
10195 PRINT "GOSUB 450 mit dem File belegt"
10197 PRINT "werden."
10200 PRINT :PRINT "Uebergabestring ist IN$."
10220 PRINT :PRINT "Nach der vollstaendigen"
10225 PRINT "Uebernahme bis zum Abbruch-"
10230 PRINT "mit GOSUB 580 beendet."
10290 GOSUB 210:GOTO 1050
11000 GOSUB 100
11020 PRINT "Ergaenzungen zum Bascoder"
11030 PRINT :PRINT "BASICODE benutzt ein einheit-"
11035 PRINT "liches Kassetteninterface."
11040 PRINT :PRINT "Hierbei wird eine 0 durch eine"
11045 PRINT "1200-Hertz-Welle und die 1 mit"
11050 PRINT "zwei 2400-Hertz-Wellen darge-"
11052 PRINT "stellt."
11060 PRINT :PRINT "Durch diese Betriebsart ist"
11065 PRINT "die Uebertragungssicherheit"
11067 PRINT "sehr hoch."
11070 PRINT :PRINT "Bei dennoch auftretenden"
11075 PRINT "Fehlern ist es leicht"
11080 PRINT "moeglich, sie noch zu"
11082 PRINT "verbessern."
11100 PRINT :PRINT "Befehle des BASICODE werden"
11105 PRINT "buchstabenweise codiert (keine"
11107 PRINT "Token)."
11120 PRINT :PRINT "Dadurch muss nach dem Laden"
11125 PRINT "eines BASICODE-Programmes"
11130 PRINT "dieses erst in ein rechner-"
11132 PRINT "internes Programm umgewandelt "
11135 PRINT "werden."
11150 GOSUB 210:GOSUB 100
11200 PRINT "BASICODE hat Nachteile durch"
11220 PRINT "die speziellen namenlosen Rou-"
11230 PRINT "tinen, aber auch Vorteile, z.B."
11235 PRINT "grosse Zeilenzahlen und vor"
11240 PRINT "allem der Programmaustausch"
11242 PRINT "verschiedener Rechner."
11260 PRINT :PRINT "Man erhaelt eine einheitliche "
11265 PRINT "Programmieroberflaeche."
11290 GOSUB 210:GOTO 1050
12000 GOSUB 100
12020 PRINT "GOSUB-Routinen"
12030 PRINT :PRINT "In vielen Faellen wollen Sie"
12035 PRINT "ein BASICODE-Programm rueck-"
12040 PRINT "uebersetzen, um den Algorithmus"
12050 PRINT "zu verstehen und es vielleicht"
12052 PRINT "zu veraendern."
12060 PRINT :PRINT "Doch dazu muessen Sie die"
12065 PRINT "GOSUB-Routinen erst verstehen."
12080 PRINT :PRINT "Mit dieser Tabelle wird es"
12085 PRINT "Ihnen leicht moeglich sein."
12090 GOSUB 210
12200 GOSUB 100
12220 PRINT " 20 = Initialisierung"
12225 PRINT "100 = Bildschirm loeschen"
12230 PRINT "110 = PRINT AT"
12235 PRINT "120 = HO,VE"
12237 PRINT "    = aktuelle Kursorposition"
12240 PRINT "150 = auffaellige Anzeige"
12245 PRINT "200 = dynam. Tastenabfrage"
12250 PRINT "210 = stat. Tastenabfrage"
12255 PRINT "220 = Zeichen vom Bildschirm"
12260 PRINT "250 = BEEP"
12265 PRINT "260 = RANDOMIZE"
12270 PRINT "270 = FR :Garbage collection"
12275 PRINT "280 = BRK-Erlaubnis/Verbot"
12280 PRINT "300 = Zahl =>String"
12285 PRINT "310 = Zahlenformatierung"
12290 PRINT "330 = Klein- in Grossbuchstaben"
12295 PRINT "350 = SR$ => Drucker"
12300 PRINT "360 = Drucker Zeilenvorschub"
12305 PRINT "400 = Tonerzeugung"
12320 PRINT "450 = PAUSE"
12330 PRINT "500 = Dateibeginn"
12340 PRINT "540 = Datei Lesen (LOAD)"
12350 PRINT "560 = Datei Schreiben (SAVE)"
12360 PRINT "580 = Dateiarbeitsende"
12370 PRINT "600 = Einschalten Grafikmodus"
12380 PRINT "620 = Pixel setzen (PLOT)"
12390 PRINT "630 = Linie zeichnen (DRAW)"
12400 PRINT "650 = Einblenden von Schrift"
12420 PRINT "950 = Programmende"
12490 GOSUB 210:GOTO 1050
13000 GOSUB 100
13020 PRINT "Es gibt skalare Variablen und"
13025 PRINT "Stringvariablen."
13030 PRINT :PRINT "Sie duerfen aus einem oder zwei"
13035 PRINT "Buchstaben bestehen."
13050 PRINT :PRINT "Alle skalaren Variablen sind"
13055 PRINT "vom Typ real und haben je nach"
13060 PRINT "Rechner mindestens eine"
13062 PRINT "Genauigkeit von 6 Ziffern."
13080 PRINT :PRINT "Bestimmte Variablen werden von"
13085 PRINT "BASICODE verwendet, sind also"
13087 PRINT "nicht frei verfuegbar."
13090 PRINT :PRINT "Das sind folgende Variablen:"
13100 PRINT :PRINT "A, CN, CT, FR, HG, HO, IN, IN$,"
13110 PRINT :PRINT "NF, NF$, RV, SD, SP, SR, SR$,"
13112 PRINT :PRINT "SV, VE, VG"
13150 GOSUB 210
13200 GOSUB 100
13220 PRINT "Diese Variablen sind verboten."
13230 PRINT :PRINT "* alle Variablen mit"
13232 PRINT "       'O' am Anfang"
13240 PRINT :PRINT "* AS, AT, DI, EI, FN, GO, GR,"
13250 PRINT :PRINT "* IF, LN, SQ, ST, TI, TI$, TO,"
13252 PRINT :PRINT "* DI$, EI$, SQ$"
13260 PRINT :PRINT "* PI enthaelt nicht 3.1415"
13290 GOSUB 210:GOTO 1050
14000 GOSUB 100
14020 PRINT "In BASICODE sind folgende"
14025 PRINT "BASIC-Befehle erlaubt:"
14100 PRINT :PRINT "ABS, AND, ASC, ATN, CHR$, COS,"
14120 PRINT :PRINT "DATA, DIM, EXP, FOR, GOSUB,"
14140 PRINT :PRINT "GOTO, IF, INPUT, INT, LEFT$,"
14160 PRINT :PRINT "LEN, LET, LOG, MID$, NEXT,"
14180 PRINT :PRINT "NOT, ON, OR, PRINT, READ, REM,"
14182 PRINT :PRINT "RESTORE, RETURN, RIGHT$, SGN,"
14190 PRINT :PRINT "SIN, SQR, STEP, TAB, TAN,"
14192 PRINT :PRINT "THEN, TO, VAL"
14200 PRINT :PRINT :PRINT "Folgende Operationszeichen:"
14220 PRINT :PRINT "+ - * / ^ = < > <= >= <>"
14290 GOSUB 210:GOTO 1050
30000 REM     dieses Programm entstand weitgehend
30010 REM     aus dem COMPUTERMAGAZIN von 
30020 REM     JUGENDRADIO DT 64
30030 REM     ueber BASICODE-3
30040 REM     Das Arbeiten mit schriftlicher
30050 REM     Bedienungsanweisung ist mit viel
30060 REM     Suchen und wenig Ueberblick 
30070 REM     verbunden. Deshalb schrieb 
30080 REM     ich dieses Programm. 
30200 REM     Ausserdem kann man ja auch dieses
30210 REM     Programm als "Bedienhandbuch"
30220 REM     verwenden.
30230 REM     Es ist nur nicht verwendbar,
30240 REM     wenn das zu entwickelnde
30250 REM     Programm auf dem Rechner
30260 REM     implementiert wird.
30270 REM     Man sollte sowieso das Programm
30280 REM     auf dem Papier entwickeln,
30290 REM     das wird dadurch vieleicht gefoerdert.
32000 REM     nach den BASICODE-Unterlagen
32010 REM     von DT 64
32020 REM     umgesetzt in BASICODE 
32030 REM     am 25.01.1990
32040 REM     auf einem Sinclair 48 kRAM
32100 REM     Adresse:
32110 REM       Hannes Frank
32120 REM       Goethestr.19
32130 REM     6300 Ilmenau/Thuer.
32140 REM       DDR
*/ });
