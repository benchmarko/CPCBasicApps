/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem goldrush - Goldrush (Goldrausch)
2 rem
3 rem Modifications: TODO
4 REM GOLDRAUSCH
5 CLEAR:DEFINT a-z:ON ERROR GOTO 1780
10 MODE 1:PAPER 0:INK 0,0:BORDER 0:INK 1,25:PEN 2:INK 2,24
20 PLOT 420,170:DRAW 420,360:DRAW 640,360:DRAW 640,340:DRAW 450,340:DRAW 450,170:DRAW 460,180:DRAW 460,340:PLOT 460,200:DRAW 530,270:PLOT 530,340:DRAW 530,260:DRAW 540,260:DRAW 540,340:PLOT 540,260
21 DRAW 550,270:DRAW 550,340:PLOT 550,290:DRAW 600,340:PLOT 640,340:DRAW 300,0:PLOT 440,0:DRAW 640,200:PLOT 640,200:PLOT 500,200:DRAW 640,200:PLOT 600,160:DRAW 460,160:PLOT 420,120:DRAW 560,120
22 PLOT 520,80:DRAW 380,80:PLOT 340,40:DRAW 480,40:PLOT 440,0:DRAW 300,0:PLOT 540,240:DRAW 640,240:PLOT 580,280:DRAW 640,280:PLOT 620,320:DRAW 640,320:PLOT 450,170:DRAW 420,170:PLOT 420,360
23 DRAW 440,380:DRAW 640,380:PLOT 430,370:DRAW 430,380:DRAW 440,390:DRAW 440,400:PLOT 280,150:DRAW 150,150:DRAW 150,200:DRAW 280,200:DRAW 280,150:DRAW 310,180:PLOT 310,180:PLOT 280,200:DRAW 310,230
24 DRAW 310,180:PLOT 310,230:DRAW 180,230:DRAW 150,200:PLOT 150,200:DRAW 160,210:DRAW 270,210:DRAW 280,200:PLOT 270,210:DRAW 290,230:PLOT 270,190:DRAW 160,190:DRAW 160,160:DRAW 270,160:DRAW 270,190
25 PRINT CHR$(150);STRING$(18,154);CHR$(156)
26 PRINT CHR$(149);STRING$(18,32);CHR$(149)
27 PRINT CHR$(149);"    GOLDRAUSCH    ";CHR$(149)
28 PRINT CHR$(149);STRING$(18,32);CHR$(149)
29 PRINT CHR$(149);"  ein 2-teiliges  ";CHR$(149)
30 PRINT CHR$(149);"    Adventure     ";CHR$(149)
31 PRINT CHR$(149);STRING$(18,32);CHR$(149)
32 PRINT CHR$(147);STRING$(18,154);CHR$(153)
33 LOCATE 3,25:PRINT"Bitte Taste druecken..."
110 ar=31
120 ao=45
130 av=11
140 af=7
150 spieler=1
160 wortlaenge=4
170 wmax=60
171 wertung=0
180 zug=0
185 imax=4
186 lm=0:licht=-1:lw=1:l1=20
190 DIM raum$(ar),durchgang(ar,6),ob$(ao),rufname$(ao),ob(ao),verb$(av)
200 '
201 DATA untersuche
202 DATA nimm
203 DATA "leg "
204 DATA oeffne
205 DATA benutze
206 DATA zerstoehre
207 DATA zuende 
208 DATA fuelle
209 DATA betrete
210 DATA loesche
211 DATA befestige 
300 '
301 DATA viele grosse Baeume,Baeume,1
302 DATA viele grosse Baeume,Baeume,2
303 DATA einige Felsbrocken,Felsen,2
304 DATA eine verfallene Holzhuette,Huette,3
305 DATA eine verschmutzte Korbflasche,Flasche,0
306 DATA Honig,Honig,0
307 DATA eine Holzkiste,Kiste,3
308 DATA ein klappriges Regal,Regal,0
309 DATA etwas Sprengstoff,Sprengstoff,0
310 DATA ein duesteres Erdloch,Erdloch,0
311 DATA eine rostige Eisentruhe,Truhe,0
312 DATA *Silbermuenzen*,Silber,0
313 DATA eine dunkle Felsenhoehle,Hoehle,5
314 DATA einen grimmig dreinblickenden Baer,Baer,0
315 DATA zahllose niedrige Buesche,Buesche,4
316 DATA mehrere Eisenstangen,Eisenstangen,6
317 DATA *Nuggets*,Nuggets,5
318 DATA eine Eisenstange,Eisen,0
319 DATA eine Eisenkette,Kette,0
320 DATA verrottere Schienenstraenge,Schienen,7
321 DATA ein Seil,Seil,0
322 DATA eine schwere Spitzhacke,Hacke,8
323 DATA eine alte Laterne,Laterne,8
324 DATA das Gangende,Gangende,9
325 DATA einen eisenhaken,Haken,0
326 DATA einen Schacht,Schacht,9
327 DATA eine Bretterwand,Bretterwand,10
328 DATA Abbauschutt,Schutt,11
329 DATA alte Saecke,Saecke,0
330 DATA feuchte Steinwaende,Waende,13
331 DATA eine uebelriechende Fluessigkeit,Fluessigkeit,17
332 DATA eine Leiche,Leiche,18
333 DATA *Silberklumpen*,Klumpen,0
334 DATA *Goldmuenzen*,Muenzen,0
335 DATA Spinnweben,Spinnweben,20
336 DATA eine goldene Wand,Wand,22
337 DATA ein Schild,Schild,22
338 DATA *Gold*,Gold,31
339 DATA ein Seeufer,Ufer,30
340 DATA den See,See,30
341 DATA goldene Steine,Steine,0
342 DATA Zuendschnur,Zuendschnur,0
343 DATA ein Luntero,Luntero,-1
344 DATA -,Paradies,0
345 DATA eine alte Lore,Lore,7
500 '
501 DATA im Wald,1,1,1,2,0,0
502 DATA im Wald,2,1,1,3,0,0
503 DATA im Wald vor einem Felshang,0,4,2,0,0,0
504 DATA auf einer Waldlichtung,3,0,5,0,0,0
505 DATA auf einer Waldlichtung,0,0,6,4,0,0
506 DATA vor einem Bergwerksstollen,7,0,1,5,0,0
507 DATA am Eingangsstollen,8,6,0,0,0,0
508 DATA in einer Nische des Ganges,9,7,8,10,0,0
509 DATA am Ende des Ganges,0,8,0,0,0,0
510 DATA in einem Seitengang,11,0,8,0,0,0
511 DATA in einer alten Abbaustelle,0,10,0,0,0,0
512 DATA in der Hoehle,0,5,0,13,0,0
513 DATA in der Hoehle,0,0,12,14,0,0
514 DATA in der Hoehle,0,16,13,15,0,0
515 DATA in der Hoehle,0,0,14,0,0,0
516 DATA auf einem Gang,14,0,0,17,0,0
517 DATA in einer Nebenhoehle,0,0,16,0,0,0
518 DATA auf dem Boden des Schachtes,0,0,19,0,0,0
519 DATA auf einem kurvenreichen Gang,24,0,20,18,0,0
520 DATA in einem breiten Gang,0,0,21,19,0,0
521 DATA in einer alten Abbaustrecke,22,11,11,20,11,0
522 DATA in einem Felsendom,0,21,0,0,27,0
523 DATA in einem unterirdischen Paradies,0,0,0,0,0,0
524 DATA auf einem kurvenreichen Gang,26,19,24,24,24,24
525 DATA auf einem kurvenreichen Gang,27,24,24,29,26,24
526 DATA auf einem kurvenreichen Gang,27,24,26,27,27,24
527 DATA auf einem kurvenreichen Gang,25,24,26,27,26,24
528 DATA auf einem kurvenreichen Gang,24,26,26,27,0,0
529 DATA auf einem kurvenreichen Gang,0,27,30,27,0,0
530 DATA vor einem unterirdischen See,28,0,0,0,0,0
531 DATA in einer kleinen Hoehle,30,0,0,0,0,0
600 '
601 m$(1)="Ich sehe nichts besonderes."
602 m$(2)="So stark bin ich nicht !"
603 m$(3)="Wie stellst du dir das vor ?"
604 m$(4)="Der Baer greift sich den Honig und"
605 m$(5)="verschwindet in der Tiefe der Hoehle."
690 ok$="O.K."
810 FOR i=1 TO av
815 READ verb$(i):verb$(i)=UPPER$(LEFT$(verb$(i),wortlaenge))
820 NEXT
830 FOR objekt=1 TO ao
835 READ ob$(objekt),rufname$(objekt),ob(objekt):rufname$(objekt)=UPPER$(LEFT$(rufname$(objekt),wortlaenge))
840 NEXT
845 FOR raum=1 TO ar
850 READ raum$(raum)
855 FOR richtung=1 TO 6
860 READ durchgang(raum,richtung)
865 NEXT
870 NEXT
895 IF INKEY$=""THEN 895 ELSE GOSUB 900:GOTO 1000
900 MODE 1:PAPER 0:INK 0,0:BORDER 0:INK 1,6:INK 2,14:INK 3,24:PEN 1
905 PRINT"         Herzlich Willkommen zu":PRINT:PEN 2:PRINT TAB(15)CHR$(34);"GOLDRAUSCH";CHR$(34):PRINT:PEN 3
910 PRINT STRING$(40,208)
920 PRINT"Auf  der Suche  nach  dem Glueck in  derneuen  Welt  begegneten Sie  vor einigenTagen einem  alten  todkranken Mann, demSie in  seinen letzten  Stunden Beistandleisteten."
930 PRINT"Aus Dankbarkeit  berichtete er Ihnen vonseiner Goldmine und den dort verstecktenResten seines Vermoegens."
940 PRINT"Zahllosen Gefahren  widerstanden Sie aufdem  Weg  dorthin;  bald  werden Sie IhrZiel erreicht  haben, und  es  wird sichzeigen,  ob  der  Alte  die Wahrheit ge-sprochen   oder  im  Fiebertraum geredethatte."
950 PRINT STRING$(40,210):PEN 1
980 LOCATE 9,25:PRINT"(Taste druecken ...)"
990 IF INKEY$=""THEN 990
995 RETURN
1000 CLS:PEN 3
1010 leerz$=STRING$(40," ")
1020 DATA Norden,Sueden,Westen,Osten,Oben,Unten
1030 FOR richtung=1 TO 6
1040 READ richtung$(richtung)
1050 NEXT
1070 CLS:PEN 3:LOCATE 1,10:PRINT STRING$(40,"-")
1075 PEN 1:WINDOW 1,40,1,9:WINDOW#1,1,40,11,25
1076 WINDOW SWAP 1,0:LOCATE 1,12:GOTO 1081
1080 zug=zug+1:lw=lw+1
1081 PRINT:PRINT:WINDOW SWAP 1,0
1084 IF lw=lm THEN GOSUB 3000
1085 IF wertung=wmax THEN 4800
1092 IF licht=-1 THEN 1130
1093 PRINT"Ich weiss nicht genau, wo ich bin.":PRINT"Es ist zu dunkel, um etwas zu sehen."
1095 PRINT"Auch die Ausgaenge sehe ich nicht mehr !":GOTO 1330
1130 CLS:PEN 1
1140 PRINT"Ich bin ";
1150 PRINT raum$(spieler);:PRINT"."
1160 PRINT"Ich sehe ";:gedruckt=0
1170 FOR i=1 TO ao
1180 IF ob(i)<>spieler THEN 1210
1185 gedruckt=-1
1190 IF POS(#0)+LEN(ob$(i))+2<=39 THEN PRINT ob$(i);", ";:GOTO 1210
1200 IF POS(#0)+LEN(ob$(i))+2>39 THEN PRINT:GOTO 1190
1210 NEXT i
1215 IF gedruckt=0 THEN PRINT"nichts besonderes  ";
1220 PRINT CHR$(8);CHR$(8);"."
1230 LOCATE 1,8:PEN 2
1240 PRINT"Ich kann nach ";:gedruckt=0
1250 FOR richtung=1 TO 6
1260 IF durchgang(spieler,richtung)=0 THEN 1300 ELSE gedruckt=-1
1270 IF POS(#0)=15 THEN PRINT richtung$(richtung);:GOTO 1300
1280 IF POS(#0)+LEN(richtung$(richtung))<38 THEN PRINT", ";richtung$(richtung);:GOTO 1300
1290 PRINT",":PRINT richtung$(richtung);:GOTO 1300
1300 NEXT
1310 IF gedruckt=0 THEN PRINT"nirgendwo";
1320 PRINT".":PEN 3
1330 WINDOW SWAP 1,0
1340 IF wertung=wmax THEN 4800
1350 IF spieler=15 THEN m$(0)="Leider war dort der Baer.":FOR i=1 TO 1000:NEXT:GOTO 4500
1360 IF lw<=0 THEN licht=0
1370 IF ex=zug THEN IF spieler=20 THEN m$(0)="rrrumms ! - Auch mich hats zerrissen.":GOTO 4500
1380 IF spieler>18 THEN IF ob(23)<>-1 THEN licht=0
1390 PEN 3:LOCATE 1,25:INPUT"Was soll ich tun";eingabe$:eingabe$=UPPER$(eingabe$):PEN 2
1395 rl=lm-lw:IF rl>0 THEN IF lr<15 THEN PRINT"in";lm-lw;"Zuegen stehe ich im Dunkeln !"
1400 IF LEN(eingabe$)>2 THEN 1500
1410 IF eingabe$="N"THEN IF durchgang(spieler,1)<>0 THEN spieler=durchgang(spieler,1):GOTO 1475
1420 IF eingabe$="S"THEN IF durchgang(spieler,2)<>0 THEN spieler=durchgang(spieler,2):GOTO 1475
1430 IF eingabe$="W"THEN IF durchgang(spieler,3)<>0 THEN spieler=durchgang(spieler,3):GOTO 1475
1440 IF eingabe$="O"THEN IF durchgang(spieler,4)<>0 THEN spieler=durchgang(spieler,4):GOTO 1475
1450 IF eingabe$="OB"THEN IF durchgang(spieler,5)<>0 THEN spieler=durchgang(spieler,5):GOTO 1475
1460 IF eingabe$="U"THEN IF durchgang(spieler,6)<>0 THEN spieler=durchgang(spieler,6):GOTO 1475
1470 PRINT"DAHIN FUEHRT KEIN WEG !":GOTO 1081
1475 PRINT"O.K.":GOTO 1080
1480 IF LEN(eingabe$,3)>8 THEN 2000
1499 '
1500 IF LEFT$(eingabe$,3)<>"INV"THEN 1560
1510 PRINT"Ich trage folgendes bei mir:"
1520 FOR objekt=1 TO ao
1530 IF ob(objekt)=-1 THEN PRINT ob$(objekt)
1540 NEXT
1550 GOTO 1081
1560 IF LEFT$(eingabe$,3)<>"SCO"THEN 1600
1561 GOSUB 1565:GOTO 1081
1565 PRINT"Von";wmax;"Punkten hast Du in";zug;"Zuegen":PRINT wertung;"Punkte erreicht !"
1566 IF zug<>0 THEN PRINT"Das entspricht einem Schnitt von";wertung/zug;"Punkten."
1567 RETURN
1600 IF LEFT$(eingabe$,3)<>"SAV"THEN 1700
1610 PRINT"REC & PLAY druecken ...":PRINT"Unter welchem Namen speichern ..........";STRING$(10,8);:INPUT eingabe$
1620 IF LEN(eingabe$)>10 THEN PRINT"Bitte etwas kuerzer !":GOTO 1610 ELSE eingabe$="!"+eingabe$+".spiel":CLOSEOUT:SPEED WRITE 1:OPENOUT eingabe$
1625 PRINT#9,spieler
1630 FOR objekt=1 TO ao
1631 PRINT#9,ob(objekt)
1632 NEXT
1635 FOR raum=1 TO ar
1636 FOR richtung=1 TO 6
1637 PRINT#9,durchgang(raum,richtung)
1638 NEXT
1639 NEXT
1645 FOR flag=1 TO af
1646 PRINT#9,fl(flag)
1647 NEXT
1650 CLOSEOUT
1660 PRINT ok$
1670 GOTO 1081
1700 IF LEFT$(eingabe$,3)<>"LOA"THEN 1800
1710 PRINT"Cassette rueckspulen & PLAY druecken ...":PRINT"Welches Spiel laden ..........";STRING$(10,8);:INPUT eingabe$
1720 IF LEN(eingabe$)>10 THEN PRINT"Das kann nicht sein !":GOTO 1710 ELSE eingabe$="!"+eingabe$+".spiel":CLOSEIN:OPENIN eingabe$
1725 INPUT#9,spieler
1730 FOR objekt=1 TO ao
1731 INPUT#9,ob(objekt)
1732 NEXT
1735 FOR raum=1 TO ar
1736 FOR richtung=1 TO 6
1737 INPUT#9,durchgang(raum,richtung)
1738 NEXT
1739 NEXT
1745 FOR flag=1 TO af
1746 INPUT#9,fl(flag)
1747 NEXT
1750 CLOSEIN
1760 PRINT ok$
1770 GOTO 1081
1780 PRINT"Achtung Fehler !":BORDER 3:RESUME NEXT
1800 IF LEFT$(eingabe$,3)<>"VOK"THEN 1900
1805 CLS:PRINT"Ich verstehe folgende Verben:
":RESTORE
1810 FOR i=1 TO av:READ word$:PRINT word$
1830 NEXT:GOSUB 1890
1840 CLS:PRINT"und folgende Gegenstaende sind mir":PRINT"bekannt:":PRINT
1850 FOR i=1 TO ao:READ word$,word$,x:PRINT word$
1860 IF VPOS(#0)=14 THEN GOSUB 1890:CLS
1870 NEXT i
1880 GOSUB 1890:CLS:GOTO 1081
1890 LOCATE 1,15:PRINT"Taste druecken ...."
1895 eingabe$=INKEY$:IF eingabe$=""THEN 1895 ELSE CLS:RETURN
1900 IF LEFT$(eingabe$,3)<>"INS"THEN 1950
1910 GOSUB 900
1920 MODE 1:GOTO 1070
1950 IF LEFT$(eingabe$,3)<>"END"THEN 1970 ELSE CLS
1960 PRINT"Der Autor wuenscht Ihnen mehr Glueck":PRINT"beim naechsten Mal !":PRINT"


":PEN 1:INK 1,24:END
1970 IF LEFT$(eingabe$,4)<>"HELP"THEN 2000
1971 IF spieler=4 THEN IF ob(10)=0 THEN PRINT"Fast waehre ich in eine Grube gefallen.":GOTO 1080
1972 IF spieler=4 THEN IF ob(11)<>spieler THEN IF NOT fl(2)THEN PRINT"Ich brauche etwas, um die Kette zu":PRINT"zerreissen !":GOTO 1080
1975 PRINT"Erst sehen, dann denken !":PRINT"Und zuletzt handeln.":GOTO 1080
2000 laenge=LEN(eingabe$)
2010 FOR buchst=1 TO laenge
2020 pruef$=MID$(eingabe$,buchst,1)
2030 IF pruef$<>" "THEN NEXT
2040 everb$=LEFT$(eingabe$,wortlaenge)
2050 rl=laenge-buchst
2060 IF rl<0 THEN 2090
2070 eobjekt$=RIGHT$(eingabe$,rl)
2080 eobjekt$=LEFT$(eobjekt$,wortlaenge)
2090 FOR verbnr=1 TO av
2100 IF everb$=verb$(verbnr)THEN 2130
2110 NEXT
2120 PRINT"Das Verb verstehe ich nicht ":GOTO 1080
2130 FOR o=1 TO ao
2140 IF eobjekt$=rufname$(o)THEN 2200
2150 NEXT
2160 PRINT"Ich verstehe das Objekt nicht !":GOTO 1080
2190 'Verben
2200 ON verbnr GOTO 5000,2210,7000,8000,9000,10000,11000,12000,13000,14000,15000
2210 anzahl=0:FOR i=1 TO ao
2220 IF ob(i)=-1 THEN anzahl=anzahl+1
2230 IF anzahl=imax THEN PRINT"Nein danke. - Ich trage schon genug.":GOTO 1080
2240 NEXT
2250 GOTO 6000
3000 IF licht=-1 THEN licht=0:GOTO 3020
3010 IF licht=0 THEN licht=-1
3020 lw=0:RETURN
4500 CLS:'Tod
4600 PRINT"Auch das noch !":PRINT:PRINT m$(0)
4610 PRINT:PRINT"ich bin tot !":PRINT
4620 INPUT"Soll ich es noch einmal versuchen ";eingabe$:eingabe$=UPPER$(eingabe$)
4630 IF LEFT$(eingabe$,1)="J"THEN RUN
4640 GOTO 1960
4800 MODE 1:'Sieg
4810 PRINT"Herzlichen Glueckwunsch !"
4820 PRINT:PRINT"Sie haben die Ihnen gestellte Aufgabe":PRINT:PRINT"geloest und duerfen sich nun an einem anderen Adventure versuchen."
4830 PRINT:GOSUB 1565:PRINT"

":END
5000 IF ob(o)<>spieler THEN IF ob(o)<>-1 THEN 5900
5002 IF o=1 THEN PRINT m$(1):GOTO 1080
5003 IF o=3 THEN PRINT m$(1):GOTO 1080
5004 IF o=4 THEN PRINT"In der Ecke steht ein Regal.":ob(8)=spieler:GOTO 1080
5005 IF o=5 THEN PRINT"Die Flasche ist gefuellt mit Honig.":GOTO 1080
5006 IF o=6 THEN PRINT m$(1):GOTO 1080
5007 IF o=7 THEN IF ob(9)=0 THEN PRINT"In der Kiste liegt Sprengstoff.":GOTO 1080
5008 IF o=8 THEN IF ob(5)=0 THEN PRINT"Auf dem Regal steht eine Korbflasche.":ob(5)=spieler:GOTO 1080
5009 IF o=8 THEN IF ob(5)<>0 THEN PRINT m$(1):GOTO 1080
5010 IF o=10 THEN PRINT"In dem Erdloch liegt eine Eisentruhe.":ob(11)=spieler:GOTO 1080
5011 IF o=11 THEN IF NOT fl(1)THEN PRINT"Sie ist mit einer Eisenkette ver-":PRINT"schlossen.":GOTO 1080
5012 IF o=11 THEN IF fl(1)THEN IF NOT fl(2)THEN PRINT"Aussen sehe ich nichts besonderes.":GOTO 1080
5013 IF o=11 THEN IF fl(1)THEN IF fl(2)THEN IF ob(12)=0 THEN PRINT"Sie ist voller Silbermuenzen.":ob(12)=spieler:GOTO 1080
5014 IF o=12 THEN PRINT"Genau das suche ich !":GOTO 1080
5015 IF o=13 THEN PRINT"Ich habe einen Baeren aufgeschreckt !":ob(14)=spieler:fl(3)=0:GOTO 1080
5017 IF o=15 THEN PRINT"Zwischen den Bueschen ist ein Erdloch.":ob(10)=spieler:GOTO 1080
5018 IF o=16 THEN PRINT"Sie sehen sehr stabil aus.":ob(18)=spieler:GOTO 1080
5019 IF o=17 THEN PRINT"Es handelt sich um pures Gold !":GOTO 1080
5020 IF o=45 THEN IF ob(21)=0 THEN PRINT"Daran haengt immer noch das Zugseil.":ob(21)=spieler:GOTO 1080
5021 IF o=23 THEN PRINT"Es ist eine alte Oellampe.":GOTO 1080
5022 IF o=24 THEN PRINT"In der Wand steckt ein Haken.":ob(25)=spieler:GOTO 1080
5023 IF o=25 THEN PRINT"Tut mir leid - er steckt zu fest.":GOTO 1080
5024 IF o=26 THEN m$(0)="Er ist zu tief - und ich war          zu dicht am Rand.":GOTO 4500
5025 IF o=27 THEN PRINT"Ihr Tischler war ein Koenner.":GOTO 1080
5026 IF o=28 THEN IF ob(29)=0 THEN PRINT"Ich habe zwei Saecke entdeckt.":ob(29)=spieler:GOTO 1080
5027 IF o=29 THEN PRINT"Sie ist gefuellt mit Goldstaub !":GOTO 1080
5028 IF o=31 THEN PRINT"Sie ist oelig schmierig und klebt an":PRINT"den Fingern.":GOTO 1080
5029 IF o=32 THEN PRINT"Sie stinkt !"
5030 IF o=32 THEN IF ob(34)=0 THEN PRINT"In der Jackentasche sind Goldmuenzen.":ob(34)=spieler:GOTO 1080
5031 IF o=35 THEN PRINT"Es sind gar keine Spinnweben.":ob(o)=0:ob(42)=spieler:PRINT"Es ist eine Zuendschnur.":GOTO 1080
5033 IF o=36 THEN PRINT"Es ist tatsaechlich reines Gold.":GOTO 1080
5034 IF o=37 THEN PRINT"Darauf steht:":PRINT"Wenn erst mal die Gier erwacht":PRINT"der Tod auch oft Geschaefte macht.":GOTO 1080
5036 IF o=42 THEN PRINT"Sie fuehrt hinauf zur Decke.":GOTO 1080
5037 IF o=43 THEN PRINT"Es ist eins der ueblichen Western-":PRINT"feuerzeuge.":GOTO 1080
5038 IF o=32 THEN IF fl(4)=-1 THEN IF ob(33)<>-2 THEN PRINT"Sie lag auf Silberstuecken.":ob(33)=spieler:GOTO 1080
5800 PRINT m$(1):GOTO 1080
5900 '
5901 IF o=1 THEN IF spieler=2 THEN PRINT m$(1):GOTO 1080
5902 IF o=6 THEN IF ob(5)=-1 THEN PRINT"Er ist suess und gut.":GOTO 1080
5903 IF o=6 THEN IF ob(5)<>-1 THEN PRINT"Ich habe keinen Honig !":GOTO 1080
5904 IF o=9 THEN IF ob(7)=spieler OR ob(7)=-1 THEN PRINT"Er sieht sehr explosiv aus !":GOTO 1080
5905 IF o=16 THEN IF ob(18)=-1 THEN PRINT"Kaum angerostet - wirklich stabil !":GOTO 1080
5910 IF o=14 THEN IF spieler=5 THEN IF ob(14)=5 THEN PRINT"Ich scheine seinen Appetit anzuregen.":GOTO 1080
5911 IF o=20 THEN IF spieler=22 THEN PRINT"Wenn erst mal die Gier erwacht":PRINT"der Tod auch oft Geschaefte macht.":GOTO 1080
5912 IF o=44 THEN IF spieler=23 THEN m$(0)="Ich bin im Totenreich.":GOTO 4500
5990 PRINT"So etwas sehe ich hier nicht !":GOTO 1080
6000 IF ob(o)<>spieler THEN IF ob(o)<>-1 THEN 6900
6001 IF o=1 THEN PRINT m$(2):GOTO 1080
6002 IF o=3 THEN PRINT m$(2):GOTO 1080
6003 IF o=4 THEN PRINT m$(3):GOTO 1080
6004 IF o=8 THEN PRINT m$(2):GOTO 1080
6005 IF o=11 THEN PRINT m$(2):GOTO 1080
6006 IF o=10 THEN PRINT m$(3):GOTO 1080
6007 IF o=13 THEN PRINT m$(3):GOTO 1080
6008 IF o=15 THEN PRINT m$(2):GOTO 1080
6010 IF o=5 THEN ob(5)=-1:PRINT ok$:GOTO 1080
6011 IF o=6 THEN ob(5)=-1:PRINT ok$:GOTO 1080
6012 IF o=7 THEN ob(o)=-1:PRINT ok$:GOTO 1080
6014 IF o=12 THEN ob(o)=-2:wertung=wertung+10:PRINT ok$:GOTO 1080
6015 IF o=14 THEN IF spieler=5 THEN m$(0)="Der Baer hat mich erschlagen.":GOTO 4500
6017 IF o=17 THEN IF fl(3)THEN PRINT ok$:wertung=wertung+10:ob(o)=-2:GOTO 1080
6018 IF o=17 THEN IF NOT fl(3)THEN m$(0)="Ein Baer stuerzt auf mich.":PRINT"Er hat mich erschlagen.":GOTO 4500
6019 IF o=12 THEN IF ob(o)=-2 THEN PRINT"Das Silber habe ich bereits.":GOTO 1080
6020 IF o=17 THEN IF ob(o)=-2 THEN PRINT"Das Gold habe ich bereits.":GOTO 1080
6021 IF o=45 THEN PRINT m$(2):GOTO 1080
6022 IF o=21 THEN IF fl(4)=-1 THEN PRINT ok$:ob(o)=-1:GOTO 1080
6023 IF o=22 THEN PRINT ok$:ob(o)=-1:GOTO 1080
6024 IF o=24 THEN PRINT ok$:ob(o)=-1:GOTO 1080
6025 IF o=25 THEN PRINT"Er steckt zu tief im Fels.":GOTO 1080
6026 IF o=27 THEN PRINT m$(3):GOTO 1080
6027 IF o=28 THEN PRINT"Und was soll ich damit ?":GOTO 1080
6030 IF o=31 THEN IF ob(5)<>-1 THEN PRINT"Womit denn ?":GOTO 1080
6031 IF o=31 THEN IF ob(5)=-1 THEN PRINT ok$;" - die Flasche ist voll.":fl(6)=-1:GOTO 1080
6032 IF o=32 THEN PRINT ok$;" - oh, was ist das denn ?":fl(5)=-1:GOTO 1080
6033 IF o=33 THEN IF ob(o)=spieler THEN PRINT ok$:ob(o)=-2:wertung=wertung+10:GOTO 1080
6034 IF o=34 THEN IF ob(o)=spieler THEN PRINT ok$:ob(o)=-2:wertung=wertung+10:GOTO 1080
6035 IF o=35 THEN PRINT"Es sind gar keine Spinnweben, es war":PRINT"eine Zuendschnur.":ob(o)=0:ob(42)=-1:GOTO 1080
6037 IF o=37 THEN PRINT ok$:ob(o)=-1:GOTO 1080
6038 IF o=41 THEN PRINT ok$:ob(o)=-1:GOTO 1080
6039 IF o=42 THEN PRINT ok$:ob(o)=-1:GOTO 1080
6040 IF o=43 THEN PRINT ok$:ob(o)=-1:GOTO 1080
6041 IF o=21 THEN IF NOT fl(4)THEN PRINT"Es ist an der Lore befestigt.":GOTO 1080
6042 IF o=23 THEN PRINT ok$:ob(o)=-1:GOTO 1080
6043 IF o=29 THEN IF ob(o)=spieler THEN PRINT ok$:ob(o)=-2:wertung=wertung+10:GOTO 1080
6044 IF o=38 THEN IF ob(o)=spieler THEN PRINT ok$:ob(o)=-2:wertung=wertung+10:GOTO 1080
6900 IF o=9 THEN IF ob(7)=spieler OR ob(7)=-1 THEN m$(0)="Bei der Beruehrung ist der Sprengstoff  explodiert !":GOTO 4500
6901 IF o=16 THEN IF ob(18)=spieler THEN PRINT ok$:ob(18)=-1:GOTO 1080
6910 IF o=1 THEN IF spieler=2 THEN PRINT m$(2):GOTO 1080
6911 IF o=20 THEN IF spieler=22 THEN PRINT"Wenn erst mal die Gier erwacht":PRINT"der Tod auch oft Geschaefte macht.":GOTO 1080
6999 PRINT"So etwas sehe ich hier nicht !":GOTO 1080
7000 IF o=16 THEN IF ob(18)=-1 THEN PRINT ok$:ob(18)=spieler:GOTO 1080
7001 IF ob(o)<>-1 THEN PRINT"So etwas habe ich doch gar nicht !":GOTO 1080
7010 IF o=6 THEN IF spieler=5 THEN ob(6)=0:fl(3)=-1:PRINT m$(4):PRINT m$(5):ob(14)=0:GOTO 1080
7020 IF o=5 THEN IF spieler=5 THEN ob(5)=0:fl(3)=-1:PRINT m$(4):PRINT m$(5):ob(14)=0:GOTO 1080
7900 ob(o)=spieler:PRINT ok$:GOTO 1080
8000 IF ob(o)<>spieler THEN IF ob(o)<>-1 THEN PRINT"So etwas ist hier nicht.":GOTO 1080
8005 IF o=4 THEN IF spieler=3 THEN PRINT"Die Huette ist bereits offen.":GOTO 1080
8010 IF o=5 THEN PRINT ok$:GOTO 1080
8020 IF o=11 THEN IF NOT fl(1)THEN PRINT"Das laesst die Kette nicht zu.":GOTO 1080
8025 IF o=11 THEN IF fl(1)THEN PRINT ok$;" - der Deckel klappt nach hinten.":fl(2)=-1:GOTO 1080
8030 IF o=23 THEN PRINT ok$:GOTO 1080
8035 IF o=29 THEN PRINT ok$:GOTO 1080
8040 IF o=32 THEN PRINT"Tut mir leid - ich bin nicht Frankenstein !":GOTO 1080
8045 IF o=36 THEN PRINT"Wie ??":GOTO 1080
8999 PRINT"ich verstehe nicht,was Du meinst.":GOTO 1080
9000 IF o=16 THEN IF ob(18)=-1 THEN IF spieler=4 THEN PRINT"Die Kette zerspringt.":fl(1)=-1:GOTO 1080
9005 IF ob(o)<>spieler THEN IF ob(o)<>-1 THEN 9900
9010 IF o=16 THEN IF spieler=4 THEN PRINT"Die Kette zerspringt.":fl(1)=-1:GOTO 1080
9020 IF o=45 THEN PRINT"Wie und wozu ?":GOTO 1080
9030 IF o=21 THEN PRINT"Wie und wozu ?":GOTO 1080
9999 PRINT"Ich verstehe nicht, was Du meinst.":GOTO 1080
10000 IF o=16 THEN IF spieler=4 THEN IF ob(18)=-1 THEN PRINT"Die Kette zerspringt.":fl(1)=-1:GOTO 1080
10010 IF o=16 THEN IF spieler=4 THEN IF ob(18)<>-1 THEN PRINT"Womit ?":GOTO 1080
10020 IF o=36 THEN IF ob(22)=-1 THEN PRINT ok$:durchgang(22,1)=23:GOTO 1080
10030 IF o=21 THEN IF ob(o)=spieler OR ob(o)=-1 THEN PRINT ok$:fl(4)=-1:GOTO 1080
10040 IF o=27 THEN IF ob(22)=-1 THEN PRINT ok$:durchgang(10,2)=12:GOTO 1080
10050 IF o=27 THEN IF ob(22)<>-1 THEN PRINT"Womit ?":GOTO 1080
10999 PRINT"Ich verstehe nicht, was Du meinst.":GOTO 1080
11000 IF ob(43)<>-1 THEN PRINT"Ich habe nichts zum Zuenden.":GOTO 1080
11010 IF o=8 THEN IF lz<=0 THEN PRINT"In der Lampe ist kein Oel mehr !":GOTO 1080
11020 IF o=42 THEN IF ob(43)=-1 OR licht=-1 THEN PRINT"zzzisch !":fl(7)=-1:ex=zug+3:ob(o)=0:durchgang(30,2)=31:durchgang(31,1)=30:GOTO 1080
11030 IF o=23 THEN IF ob(23)=-1 THEN PRINT ok$;" - die Lampe brennt.":lm=l1:lw=1:GOTO 1080
11040 IF o=43 THEN PRINT ok$;" - der Docht glimmt.":GOTO 1080
11098 PRINT"Ich verstehe Dich nicht.":GOTO 1080
12000 IF o=23 THEN IF fl(6)AND ob(23)=-1 THEN lm=60:fl(6)=0:lw=0:PRINT ok$:GOTO 1080
12020 IF o=5 THEN spieler=17 THEN fl(6)=-1:PRINT"Die Flasche ist voll.":GOTO 1080
12030 IF o=43 THEN IF ob(o)=-1 THEN PRINT"Der Docht glimmt.":GOTO 1080
12998 PRINT"Ich verstehe nicht, was Du meinst.":GOTO 1080
13000 IF o=13 THEN IF spieler=5 THEN spieler=12:PRINT ok$:GOTO 1080
13998 PRINT"Ich weiss nicht, was Du willst.":GOTO 1080
14000 IF o=23 THEN IF ob(o)=-1 THEN l1=lm-lw:PRINT ok$:GOTO 1080
14998 PRINT"Ich weiss nicht, was Du willst.":GOTO 1080
15000 IF o=21 THEN IF spieler=9 THEN PRINT ok$:ob(o)=9:durchgang(9,6)=18:durchgang(18,5)=9:GOTO 1080
15998 PRINT"Ich weiss nicht, was Du willst.":GOTO 1080
*/ });
