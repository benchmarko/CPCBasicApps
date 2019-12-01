/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem isgdemo - Interrupt & Sound & Grafik Demo
2 rem (c) Günter Woigk, Das Schneider CPC Systembuch, S. 418ff
4 rem Modifications: some delay
5 rem
100 ' ***************************************************************
110 ' **                                                           **
120 ' **    Interrupt & Sound & Grafik --- Demo      vs. 29.5.86   **
130 ' **                                                           **
140 ' ***************************************************************
150 '
160 KEY DEF 66,0,140,140,140:KEY 140,CHR$(&EF)+CHR$(252)    ' Breaktaste
170 DEFINT a-z
180 BORDER 0:INK 0,0:MODE 0:PAPER 0:PEN#1,15:PEN#2,15:PEN#3,15:INK 15,26
190 ORIGIN 320,200
200 WINDOW 2,19,2,24
210 DEF FNz$(z)=CHR$(48+z\10)+CHR$(48+z MOD 10)
220 '
230 GOSUB 1920                              ' After#0 --> Farben-Wechsel starten
240 t=INT(TIME/300):st=t\3600:t=t MOD 3600  '    Zeit seit letztem Reset
250 mn=t\60:sk=t MOD 60                     '    berechnen.
260 EVERY 50,2 GOSUB 1850                   ' Every#2 --> mitlaufende Uhr
270 s=1:EVERY 5,3 GOSUB 1790                ' Every#3 --> INKs zyklisch färben
280 ON BREAK GOSUB 1510                     ' Break-Event
290 xx=1:yy=1:EVERY 7,1 GOSUB 1980          ' Every#1 --> Sternchengimmik
300 '
310 GOSUB 390      ' Allgemeine Sound-Initialisierungen
320 GOSUB 870      ' initialisiere:  Good King Wenceslas
330 GOTO 1580      ' Grafik-Demo
340 '
350 ' +------------------------------------------------------+
360 ' !   **********   SOUND-Initialisierung   ***********   !
370 ' +------------------------------------------------------+
380 '
390 ENV 1,  4,2,1,  2,-1,2,  1,0,50, 5,-1,15      ' Amplitudenhüllkurven für
400 ENV 2,  3,-1,2, 3,-1,20                       ' Musikstimmen und Percussion
410 '
420 i=7*12+1:DIM plen(i)                ' 7 Oktaven mit je 12 Toenen
430 pause=i:plen(i)=0                   ' Pause = kein Ton -> Periodenlaenge = 0
440 kton.A!=1/440 * 1000000/16          ' Kammerton A (Ton 9 in Oktave 3)
450 '
460 ' +------------------------------------------------------+
470 ' !   **********   Halbtöne einer Oktave:   *********   !
480 ' !   C  CIS  D  DIS  E  F  FIS  G  GIS  A  AIS  H  C    !
490 ' +------------------------------------------------------+
500 '
510 FOR halbton = 0 TO 7*12                       ' Berechnung aller
520   plen(halbton)=kton.A!*2^(3+(9-halbton)/12)  ' Periodenlaengen
530 NEXT                                          ' in sieben Oktaven
540 '
550 ' +------------------------------------------------------+
560 ' ! *** Function zur Berechnung des Halbtonschrittes *** !
570 ' ! ***   Halbton = FNhalbton (tonart,oktave,note)   *** !
580 ' +------------------------------------------------------+
590 '
600 DEF FNhalbton(t,o,n)=(o+INT(n/7))*12+ht(t,(n+70)MOD 7)
610 '
620 DIM ht(1,7):RESTORE 710                       ' ht() enthält die
630 dur=0:moll=1                                  ' Halbtonnummern für
640 FOR tonart=dur TO moll                        ' die ganzen Noten
650   FOR note=0 TO 7                             ' in C-Dur und C-Moll
660     READ ht(tonart,note)
670   NEXT
680 NEXT
690 RETURN
700 '          <----- Dur ------>    <----- Moll ---->
710 DATA       0,2,4,5,7,9,11,12,    0,2,3,5,7,8,10,12
720 '
730 ' +------------------------------------------------------+
740 ' ! ******** Kanon durch Umkehrung der TonHöhe: ******* !
750 ' ! ******** Good King Wenceslas (Scott E. Kim) ******** !
760 ' +------------------------------------------------------+
770 '
780 DATA 0,0,0,1,  0,0,-3,  -2,-3,-2,-1,  0,0,  0,0,0,1,  0,0,-3,  99
790 DATA 1,1,1,1,  1,1, 2,   1, 1, 1, 1,  2,2,  1,1,1,1,  1,1, 2,  99
800 '
810 DATA -2,-3,-2,-1,  0,0,  4,3,2,1,  2,1,0,  -2,-3,-2,-1,  0,0, 99
820 DATA  1, 1, 1, 1,  2,2,  1,1,1,1,  1,1,2,   1, 1, 1, 1,  2,2, 99
830 '
840 DATA -3,-3,-2,-1,  0,0,1,  4,3,2,1,  0,0,   99
850 DATA  1, 1, 1, 1,  1,1,2,  1,1,1,1,  2,2,   100
860 '
870 RESTORE 780:GOSUB 1400                     ' Auslesen der Datazeilen
880 tempo=45:oktave=3:tonart=dur               ' Einstellungen
890 t1=1:l1=0:GOSUB 980                        ' Init Oberstimme:  Kanal A
900 t2=1:l2=2:GOSUB 1100                       ' Init Gegenstimme: Kanal B
910 t3=0     :GOSUB 1210                       ' Init Percussion: Kanal C
920 RETURN
930 '
940 ' +------------------------------------------------------+
950 ' !   ***********   Kanal A (Oberstimme)   ***********   !
960 ' +------------------------------------------------------+
970 '
980  status=1:IF l1=2 THEN status=33           ' Rendevous mit Gegenstimme
990           IF l1=0 THEN status=17           ' Rendevous mit Percussion
1000 laenge=l(t1):note=t(t1):t1=t1 MOD pw +1
1010 l1=(l1+laenge)MOD 4:laut=5
1020 GOSUB 1320                                ' Tonausgabe
1030 ON SQ(1) GOSUB 980                        ' Re-Init
1040 RETURN
1050 '1060 ' +------------------------------------------------------+
1070 ' !   **********   Kanal C (Gegenstimme)   ***********   !
1080 ' +------------------------------------------------------+
1090 '
1100 status=4:IF l2=2 THEN status=12            ' Rendevous mit Oberstimme
1110 laenge=l(t2):note=-7-t(t2):t2=t2 MOD pw +1
1120 l2=(l2+laenge)MOD 4:laut=7
1130 GOSUB 1320                                ' Tonausgabe
1140 ON SQ(4) GOSUB 1100                       ' Re-Init
1150 RETURN
1160 '
1170 ' +------------------------------------------------------+
1180 ' !   ***********   Kanal B (Percussion)   ***********   !
1190 ' +------------------------------------------------------+
1200 '
1210 status=2:IF t3=2 THEN status=10           ' Rendevous mit Oberstimme
1220 noise=(2 - t3 MOD 2)*10                   ' Rausch-Höhe (dum-dah)
1230 SOUND status,0,tempo,13,2,0,noise
1240 t3=(t3+1) MOD 4
1250 ON SQ(2) GOSUB 1210                       ' Re-Init
1260 RETURN
1270 '
1280 ' +------------------------------------------------------+
1290 ' !   ***********    Ausgabe einer Note    ***********   !
1300 ' +------------------------------------------------------+
1310 '
1320 halbton=FNhalbton(tonart,oktave,note)
1330 SOUND status,plen(halbton),tempo*laenge,laut,1
1340 RETURN
1350 '
1360 ' +------------------------------------------------------+
1370 ' !  Auslesen der TonHöhen und -laengen aus Datazeilen  !
1380 ' +------------------------------------------------------+
1390 '
1400 DIM t(100),l(100)
1410 t=1:l=1
1420 READ t(t):IF t(t)<99 THEN t=t+1:GOTO 1420 ' TonHöhen
1430 READ l(l):IF l(l)<99 THEN l=l+1:GOTO 1430 ' Notenlaengen
1440 IF l(l)=99 THEN 1420
1450 pw=t-1:RETURN                             ' laenge der Wiederholungsperiode
1460 '
1470 ' +------------------------------------------------------+
1480 ' !  ******  Unterprogramm bei Break-Erkennung  *******  !
1490 ' +------------------------------------------------------+
1500 '
1505 '1510 RUN           ' CPC 464: Neustart. Sorry, anders geht's nicht. Sonst gehen
1506 '1520               ' irgendwie programmierte Interrupts verloren.
1510 brk=1:RETURN  ' beim CPC 664 und 6128 gibt's keine Probleme. Die Musik-
1520 '             ' Ausgabe muss nicht erneut initialisiert werden.
1530 '
1540 ' +------------------------------------------------------+
1550 ' ! ******* das Hauptprogramm: Grafik-Animation *******  !
1560 ' +------------------------------------------------------+
1570 '
1580 CLS:i1=5+RND*20:i2=5+RND*20        ' Frequenzverhaeltnis x zu y
1590 f!=i1/i2:zfa=1:brk=0
1600 '
1610 DEF FNx(i!)=SIN(i!)*285            ' X-Y-Überlagerung
1620 DEF FNy(i!)=COS(i!*f!)*180         ' zweier Sinus-Schwingungen
1630 PLOT FNx(0),FNy(0)
1640 FOR i!=0 TO i2*2*PI STEP 2*PI/INT(3+20*RND)/14
1650   DRAW FNx(i!),FNy(i!),zfa:zfa=zfa MOD 14+1:IF brk THEN 1580
1655   call &bd19
1660 NEXT
1670 '                                  ' Abschließend Laufschrift:
1680 '
1690 t$=" *** reines Basic-Demo *** 100% Maschinencode-frei"
1700 t$=SPACE$(16)+t$+t$+t$+t$+" ***"+SPACE$(16)
1710 FOR i=1 TO LEN(t$)-16
1720   LOCATE#3,3,12:PRINT #3,MID$(t$,i,16):call &bd19:IF brk THEN 1580
1725   t!=time+50:while time<t!:call &bd19:wend
1730 NEXT: GOTO 1580
1740 '
1750 ' +------------------------------------------------------+
1760 ' ! Interrupt-Programm: Farbe fa durch die Inks schieben !
1770 ' +------------------------------------------------------+
1780 '
1790 INK s,fa:s=s MOD 14+1:INK (s+2)MOD 14+1,0:RETURN
1800 '
1810 ' +------------------------------------------------------+
1820 ' !  ****** Interrupt-Programm: Uhrzeit ausgeben ******  !
1830 ' +------------------------------------------------------+
1840 '
1850 sk=sk+1:IF sk=60 THEN sk=0:mn=mn+1:IF mn=60 THEN mn=0:st=(st+1)MOD 24
1860 LOCATE#1,7,1:PRINT#1,FNz$(st);":";FNz$(mn);":";FNz$(sk):RETURN
1870 '
1880 ' +------------------------------------------------------+
1890 ' !  *******  Interrupt-Programm: Farbe ändern  ******* !
1900 ' +------------------------------------------------------+
1910 '
1920 fa=7+INT(RND*20):AFTER 10+RND*20,0 GOSUB 1920:RETURN
1930 '
1940 ' +------------------------------------------------------+
1950 ' ! *** Interrupt-Programm: Sternchengimmik am Rande *** !
1960 ' +------------------------------------------------------+
1970 '
1980 LOCATE#2,xx,yy:PRINT#2," ";
1990 LOCATE#2,21-xx,26-yy:PRINT#2," ";
2000 IF xx<20 THEN xx=xx+1 ELSE yy=yy+1:IF yy=26 THEN xx=1:yy=1
2010 LOCATE#2,xx,yy:PRINT#2,"*";
2020 LOCATE#2,21-xx,26-yy:PRINT#2,"*";
2030 RETURN
*/ });
