/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 REM cards - Card Games: Blackjack (17 und 4) and Memory
2 rem
3 rem Modifications: removed trailing spaces; inserted some delays
10 MODE 1
20 CALL &BC02:BORDER 1:PAPER 0:INK 0,1:PEN 1:INK 1,24:PEN 1
30 SYMBOL AFTER 32
40 WINDOW 1,40,1,25:PAPER 2:CLS:PAPER 0
50 WINDOW#1,6,35,6,20:CLS#1
60 LOCATE 9,11:PRINT"17 und 4            - 1"
70 LOCATE 9,13:PRINT"MEMORY              - 2"
80 LOCATE 9,15:PRINT"ENDE                - 3"
90 h$=INKEY$
100 IF h$="1" THEN 4240
110 IF h$="2" THEN 140
120 IF h$="3" THEN CALL 0
130 GOTO 90
140 GOSUB 2810
150 RANDOMIZE TIME
160 CLS
170 MODE 1
180 LOCATE 14,7:PRINT"Wieviel Karten"
190 LOCATE 12,12:PRINT"40 Karten     -  1"
200 LOCATE 12,14:PRINT"80 Karten     -  2"
210 h$=INKEY$
220 IF h$="1" THEN eing=40
230 IF h$="2" THEN eing=80
240 IF eing=0 THEN 210
250 CLS
260 DIM a$(eing),k$(eing),k1$(eing),waag(eing),senk(eing),speicher$(eing/2,2)
270 IF eing=40 THEN INK 2,18:INK 3,0:INK 1,26:INK 0,10:BORDER 10:PAPER 0 ELSE INK 0,0:INK 1,26:BORDER 0
280 IF eing=40 THEN GOSUB 3310 ELSE GOSUB 3780
290 MODE 1
300 LOCATE 16,6
310 PRINT"Memory";
320 LOCATE 16,7:PRINT"======";
330 GOSUB 2260
340 IF eing=40 THEN MODE 1 ELSE MODE 2
350 FOR i=1 TO eing
360 LOCATE waag(i),senk(i)
370 IF eing=40 THEN PRINT USING"\                                                                    \";b$(5);ELSE PRINT USING"\                 \";b$(5);
380 NEXT
390 FOR i=1 TO eing
400 IF eing=40 THEN LOCATE waag(i)+1,senk(i)+4 ELSE LOCATE waag(i)+1,senk(i)+3
410 PRINT USING"##";i;
420 NEXT
430 LOCATE 1,22
440 PRINT"Mensch/Computer 1";
450 LOCATE 1,24:PRINT"Mensch/Mensch   2";
460 h$=INKEY$
470 IF h$="1" OR h$="2" THEN 490
480 GOTO 460
490 spieler=VAL(h$)
500 LOCATE 1,24:PRINT"                  ";
510 LOCATE 1,22
520 PRINT"                      ";
530 LOCATE 1,22
540 IF spieler=2 THEN 670
550 PRINT"Stufe:  ( 1-2-3-4-5 )";
560 h$=INKEY$
570 IF h$="1" OR h$="2" OR h$="3" OR h$="4" OR h$="5" THEN 590
580 GOTO 560
590 stufe=VAL(h$)
600 LOCATE eing-11,25:PRINT"Stufe: ";stufe;
610 LOCATE 1,22:PRINT"                       ";
620 LOCATE 1,24:PRINT"Wer beginnt (I/D)";
630 h$=INKEY$
640 IF h$="i" THEN LOCATE 1,24:PRINT"                       ";:GOTO 670
650 IF h$="d" THEN LOCATE 1,24:PRINT"                       ";:GOTO 1590
660 GOTO 630
670 ' ******************************
680 ' **        Spieler 1         **
690 ' ******************************
700 LOCATE 1,22:PRINT"                   ";
710 LOCATE 1,22
720  PRINT"1. Spieler:";
730  LOCATE 1,24
740  PRINT"                     ";
750  LOCATE 1,24
760 kart1=0:kart2=0
770  LINE INPUT "1. Karte: ";kart$
780 kart1=VAL(kart$)
790  IF kart1>eing OR kart1<1 THEN 730
800  IF k$(kart1)="" THEN 730
810 GOSUB 1350
820 GOSUB 3010
830 LOCATE 1,24
840 PRINT"                     ";
850 LOCATE 1,24
860 LINE INPUT "2. Karte: ";kart$
870 kart2=VAL(kart$)
880 IF kart2>eing OR kart2<1 THEN 830
890 IF k$(kart2)="" THEN 830
900 IF kart1=kart2 THEN 830
910 GOSUB 1470
920 GOSUB 3100
930 LOCATE 1,24:PRINT"                     ";
940 t!=time+940:while time<t! and inkey$="":wend:'FOR za=1 TO 3000:NEXT
950 GOSUB 2400
960 IF ja=1 THEN ja=0:punkt1=punkt1+1:ges=ges+1:noch=noch+1
970 LOCATE eing-15,23
980 PRINT"Spieler 1: ";USING"##";punkt1;
990 IF ges=eing/2 THEN 2560
1000 IF noch=1 THEN noch=2: GOTO 670
1010 noch=0
1020 IF spieler=2 THEN 1030 ELSE 1590
1030 ' ******************************
1040 '**        Spieler 2         **
1050 '******************************
1060 LOCATE 1,22:PRINT"                   ";
1070 LOCATE 1,22
1080 PRINT"2. Spieler:";
1090 LOCATE 1,24
1100 PRINT"                     ";
1110 LOCATE 1,24
1120 LINE INPUT "1. Karte: ";kart$
1130 kart1=VAL(kart$)
1140 IF kart1>eing OR kart1<1 THEN 1090
1150 IF k$(kart1)="" THEN 1090
1160 GOSUB 1350
1170 LOCATE 1,24
1180 PRINT"                     ";
1190 LOCATE 1,24
1200 LINE INPUT "2. Karte: ";kart$
1210 kart2=VAL(kart$)
1220 IF kart2>eing OR kart2<1 THEN 1180
1230 IF k$(kart2)="" THEN 1180
1240 IF kart1=kart2 THEN 1180
1250 GOSUB 1470
1260 t!=time+940:while time<t! and inkey$="":wend:'FOR za=1 TO 3000:NEXT
1270 GOSUB 2400
1280 IF ja=1 THEN ja=0:punkt2=punkt2+1:ges=ges+1:noch=noch+1
1290 LOCATE eing-15,24
1300 PRINT"Spieler 2: ";USING"##";punkt2;
1310 IF ges=eing/2 THEN 2560
1320 IF noch=1 THEN noch=2:GOTO 1030
1330 noch=0
1340 GOTO 670
1350 ' *****************************
1360 ' **     1. Karte drehen     **
1370 ' *****************************
1380 PRINT CHR$(7)
1390 LOCATE waag(kart1),senk(kart1)
1400 IF eing=40 THEN PRINT USING"\                                      \";b$(VAL(MID$(k$(kart1),1,1))) ELSE PRINT USING"\                                \";b$(VAL(MID$(k$(kart1),1,1)))
1410 PAPER 1
1420 LOCATE waag(kart1)+1,senk(kart1)+1
1430 PRINT CHR$(VAL(MID$(k$(kart1),2,3)));:IF eing=80 THEN 1460
1440 LOCATE waag(kart1)+1,senk(kart1)+2
1450 PRINT CHR$(VAL(MID$(k$(kart1),5,3)));
1460 PAPER 0:PEN 1:RETURN
1470 ' *****************************
1480 ' **      2. Karte drehen    **
1490 ' *****************************
1500 PRINT CHR$(7)
1510 LOCATE waag(kart2),senk(kart2)
1520 IF eing=40 THEN PRINT USING"\                                      \";b$(VAL(MID$(k$(kart2),1,1))) ELSE PRINT USING"\                                \";b$(VAL(MID$(k$(kart2),1,1)))
1530 PAPER 1
1540 LOCATE waag(kart2)+1,senk(kart2)+1
1550 PRINT CHR$(VAL(MID$(k$(kart2),2,3)));:IF eing=80 THEN 1580
1560 LOCATE waag(kart2)+1,senk(kart2)+2
1570 PRINT CHR$(VAL(MID$(k$(kart2),5,3)));
1580 PAPER 0:PEN 1:RETURN
1590 ' *****************************
1600 ' **        Computer         **
1610 ' *****************************
1620 LOCATE 1,22:PRINT"Spieler C:  ";
1630 kart1=0:kart2=0
1640 a=INT(RND*4)
1650 IF stufe=5 THEN 1720
1660 IF stufe=2 AND a=1 THEN 1820
1670 IF stufe=2 AND (a=0 OR a=2 OR a=3) THEN 2110
1680 IF stufe=3 THEN 1820
1690 IF stufe=4 AND a=1 THEN 1720
1700 IF stufe=4 AND (a=0 OR a=2 OR a=3) THEN 1820
1710 IF stufe=1 THEN 2110
1720 FOR t=1 TO eing/2
1730 IF speicher$(t,1)<>"" AND speicher$(t,2)<>"" THEN kart1=VAL(MID$(speicher$(t,1),5,3)):kart2=VAL(MID$(speicher$(t,2),5,3)):t=eing/2:scg=1
1740 NEXT
1750 IF scg=0 THEN 1820
1760 scg=0
1770 GOSUB 1350
1780 t!=time+620:while time<t! and inkey$="":wend:'FOR za=1 TO 2000:NEXT
1790 GOSUB 1470
1800 t!=time+940:while time<t! and inkey$="":wend:'FOR za=1 TO 3000:NEXT
1810 GOTO 2030
1820 kart1=INT(RND*eing)+1
1830 IF k$(kart1)="" THEN 1820
1840 GOSUB 1350
1850 GOSUB 3010
1860 t!=time+620:while time<t! and inkey$="":wend:'FOR za=1 TO 2000:NEXT
1870 FOR i=1 TO eing/2
1880 IF LEFT$(speicher$(i,1),4)=LEFT$(k$(kart1),4) AND VAL(MID$(speicher$(i,1),5,3))<>kart1 THEN kart2=VAL(MID$(speicher$(i,1),5,3)):scg=1:i=eing/2:GOTO 1900
1890 IF LEFT$(speicher$(i,2),4)=LEFT$(k$(kart1),4) AND VAL(MID$(speicher$(i,2),5,3))<>kart1 THEN kart2=VAL(MID$(speicher$(i,2),5,3)):scg=1:i=eing/2
1900 NEXT
1910 IF scg=0 THEN 1960
1920 scg=0
1930 GOSUB 1470
1940 t!=time+940:while time<t! and inkey$="":wend:'FOR za=1 TO 3000:NEXT
1950 GOTO 2030
1960 kart2=INT(RND*eing)+1
1970 IF k$(kart2)="" THEN 1960
1980 IF kart1=kart2 THEN 1960
1990 GOSUB 1470
2000 GOSUB 3100
2010 t!=time+940:while time<t! and inkey$="":wend:'FOR za=1 TO 3000:NEXT
2020 GOTO 2030
2030 GOSUB 2400
2040 IF ja=1 THEN ja=0:punktc=punktc+1:ges=ges+1:noch=noch+1
2050 LOCATE eing-15,24
2060 PRINT"Spieler C: ";USING"##";punktc;
2070 IF ges=eing/2 THEN 2560
2080 IF noch=1 THEN noch=2:GOTO 1590
2090 noch=0
2100 GOTO 670
2110 ' ***************************
2120 ' **       Stufe 0         **
2130 ' ***************************
2140 kart1=INT(RND*40)+1
2150 IF k$(kart1)="" THEN 2110
2160 GOSUB 1350
2170 GOSUB 3010
2180 t!=time+620:while time<t! and inkey$="":wend:'FOR za=1 TO 2000:NEXT
2190 kart2=INT(RND*eing)+1
2200 IF k$(kart2)="" THEN 2190
2210 IF kart1=kart2 THEN 2190
2220 GOSUB 1470
2230 GOSUB 3100
2240 t!=time+940:while time<t! and inkey$="":wend:'FOR za=1 TO 3000:NEXT
2250 GOTO 2030
2260 ' ****************************
2270 ' **      Karten mischen    **
2280 ' ****************************
2290 LOCATE 8,15:PRINT"Karten werden gemischt";
2300 FOR i=1 TO eing
2310 k1$(i)=a$(i)
2320 NEXT
2330 FOR i=1 TO eing
2340 s=INT(RND*eing)+1
2350 IF k1$(s)="" THEN 2340
2360 k$(i)=k1$(s):k1$(s)=""
2370 NEXT
2380 LOCATE 7,24:PRINT"                      ";
2390 RETURN
2400 ' ****************************
2410 ' **       Vergleich        **
2420 ' ****************************
2430 IF k$(kart1)<> k$(kart2) THEN 2510
2440 ja=1
2450 k$(kart1)="":k$(kart2)="":GOSUB 3190
2460 LOCATE waag(kart1),senk(kart1)
2470 IF eing=40 THEN PRINT USING"\                             \";b$(6) ELSE PRINT USING"\                       \";b$(6)
2480 LOCATE waag(kart2),senk(kart2)
2490 IF eing=40 THEN PRINT USING"\                             \";b$(6) ELSE PRINT USING"\                       \";b$(6)
2500 RETURN
2510 LOCATE waag(kart1),senk(kart1)
2520 IF eing=40 THEN PRINT USING"\                                                                    \";b$(5) ELSE PRINT USING"\                \";b$(5)
2530 LOCATE waag(kart2),senk(kart2)
2540 IF eing=40 THEN PRINT USING"\                                                                    \";b$(5) ELSE PRINT USING"\                \";b$(5)
2550 RETURN
2560 ' ****************************
2570 ' **       Spiel aus        **
2580 ' ****************************
2590 MODE 1
2600 FOR i=1 TO 6
2610 PRINT STRING$(39,227);
2620 NEXT
2630 FOR i=1 TO 12
2640 PRINT STRING$(10,227);SPACE$(19);STRING$(10,227);
2650 NEXT
2660 FOR i=1 TO 6
2670 PRINT STRING$(39,227);
2680 NEXT
2690 LOCATE 14,8:PRINT"Stufe:     ";USING"##";stufe;
2700 IF spieler=1 THEN 2740
2710 LOCATE 14,10:PRINT"Spieler 1: ";USING"##";punkt1;
2720 LOCATE 14,12:PRINT"Spieler 2: ";USING"##";punkt2;
2730 GOTO 2760
2740 LOCATE 14,10:PRINT"Spieler 1: ";USING"##";punkt1;
2750 LOCATE 14,12:PRINT"Spieler C: ";USING"##";punktc;
2760 LOCATE 12,17:PRINT"Noch einmal (J/N)";
2770 h$=INKEY$
2780 IF h$="j" THEN CLEAR:FOR i=1 TO 25:LOCATE 1,1:PRINT CHR$(11):NEXT:GOTO 160
2790 IF h$="n" THEN CALL &BC02:CLS:RUN
2800 GOTO 2770
2810 MODE 1:LOCATE 16,1:PRINT"MEMORY";
2820 LOCATE 1,5
2830 PRINT"Du kannst gegen einen menschlichen Part-ner  oder  den  Computer  spielen. Jeder";
2840 PRINT"Spieler  deckt abwechselnd  2 Karten auf";
2850 PRINT"Wenn es  2 Gleiche  sind, gehoeren diese";
2860 PRINT"dem Spieler und  er darf  erneut aufdek-";
2870 PRINT"ken. ( Jedoch hoechstens  2 mal nachein-";
2880 PRINT"ander.) Die so  erhaltenen Paerchen wer-";
2890 PRINT"den  gezaehlt. Gewonnen  hat der Spieler";
2900 PRINT"mit den meisten Paerchen. -Unentschieden";
2910 PRINT"moeglich.- Es ist  dabei  sehr  wichtig,";
2920 PRINT"sich bereits aufgedeckte  Karten zu mer-";
2930 PRINT"ken.  Der Computer  spielt in  5 Schwie-";
2940 PRINT"rigkeitsstufen,  wobei  Stufe 1  nur Zu-";
2950 PRINT"fallszuege sind. Stufe 4 und 5 sind eineechte Herausforderung."
2960 LOCATE 12,23
2970 PRINT"Taste druecken";
2980 h$=INKEY$
2990 IF h$="" THEN 2980 ELSE RETURN
3000 MODE 2:END
3010 '
3020 '=== 1. Karte speichern (aufgedeckte) ===
3030 '
3040 FOR i=1 TO eing/2
3050 IF LEFT$(speicher$(i,1),4)=LEFT$(k$(kart1),4) AND VAL(MID$(speicher$(i,1),5,3))=kart1 THEN i=eing/2:GOTO 3080
3060 IF LEFT$(speicher$(i,1),4)=LEFT$(k$(kart1),4) AND VAL(MID$(speicher$(i,1),5,3))<>kart1 THEN speicher$(i,2)=LEFT$(k$(kart1),4)+STR$(kart1):i=eing/2:GOTO 3080
3070 IF speicher$(i,1)="" THEN speicher$(i,1)=LEFT$(k$(kart1),4)+STR$(kart1):i=eing/2
3080 NEXT
3090 RETURN
3100 '
3110 '=== 2. Karte speichern (aufgedeckte) ===
3120 '
3130 FOR i=1 TO eing/2
3140 IF LEFT$(speicher$(i,1),4)=LEFT$(k$(kart2),4) AND VAL(MID$(speicher$(i,1),5,3))=kart2 THEN i=eing/2:GOTO 3170
3150 IF LEFT$(speicher$(i,1),4)=LEFT$(k$(kart2),4) AND VAL(MID$(speicher$(i,1),5,3))<>kart2 THEN speicher$(i,2)=LEFT$(k$(kart2),4)+STR$(kart2):i=eing/2:GOTO 3170
3160 IF speicher$(i,1)="" THEN speicher$(i,1)=LEFT$(k$(kart2),4)+STR$(kart2):i=eing/2
3170 NEXT
3180 RETURN
3190 '
3200 '===  Speicher loeschen  ===
3210 '
3220 FOR i=1 TO eing/2-1
3230 IF VAL(MID$(speicher$(i,1),5,3))=kart1 OR VAL(MID$(speicher$(i,1),5,3))=kart2 THEN speicher$(i,1)="":speicher$(i,2)=""
3240 IF speicher$(i,1)="" AND speicher$(i+1,1)<>"" THEN speicher$(i,1)=speicher$(i+1,1):speicher$(i,2)=speicher$(i+1,2):speicher$(i+1,1)="":speicher$(i+1,2)=""
3250 IF speicher$(i,1)="" THEN i=eing/2-1
3260 NEXT
3270 RETURN
3280 ' *******************************
3290 ' **        Zuweisungen        **
3300 ' *******************************
3310 LOCATE 8,12:WRITE "Z U W E I S U N G E N"
3320 SYMBOL AFTER 200
3330 RESTORE 3390:FOR i=1 TO 42
3340 FOR x=1 TO 9
3350 READ sy(x)
3360 NEXT x
3370 SYMBOL sy(1),sy(2),sy(3),sy(4),sy(5),sy(6),sy(7),sy(8),sy(9)
3380 NEXT i
3390 DATA 200,60,60,24,24,60,126,255,255,201,255,129,181,173,129,255,255,126,202,0,0,0,120,132,255,253,253,203,253,253,253,254,252,120,0,0,204,0,0,0,24,60,126,255,255
3400 DATA 205,255,126,60,255,126,255,0,0,206,0,64,224,64,64,224,224,160,208,191,255,235,171,191,255,0,0,209,8,28,60,24,60,60,60,60,210,60,60,60,60,255,36,66,231
3410 DATA 211,0,102,153,129,126,24,24,24,212,24,24,30,24,30,24,30,0,213,0,24,24,126,126,24,24,24,214,153,90,189,126,126,255,255,0,215,0,255,126,60,60,60,126,255
3420 DATA 216,24,60,60,24,24,60,60,0,217,0,0,0,66,255,66,90,74,218,82,90,66,255,66,0,0,0,219,66,126,66,126,66,126,66,126,220,66,126,66,126,66,126,66,66
3430 DATA 246,0,12,12,63,63,12,12,30,245,0,0,54,127,127,62,28,8,244,0,8,28,62,62,28,8,28,243,0,8,28,62,127,62,28,8,239,16,56,124,254,124,56,16,0
3440 DATA 242,120,48,48,252,252,48,48,0,241,16,56,124,254,254,108,0,0,240,56,16,56,124,124,56,16,0,236,206,219,219,219,219,219,206,0,235,63,85,170,213,170,213,170,213
3450 DATA 234,170,213,170,213,170,213,170,213,233,252,86,171,85,171,85,171,85,232,255,85,170,85,170,85,170,85,231,170,85,170,85,170,85,170,255,230,171,85,171,85,171,85,171,85
3460 DATA 228,171,85,171,85,171,85,170,252,229,170,213,170,213,170,213,106,63,252,63,127,255,255,255,255,255,255,253,252,254,255,255,255,255,255,255,254,255,255,255,255,255,255,127,63
3470 DATA 255,255,255,255,255,255,255,254,252,251,255,255,255,255,255,255,255,255
3480 RESTORE 3720:FOR i=1 TO 40:READ c:b$(4)=b$(4)+CHR$(c):NEXT
3490 RESTORE 3730:FOR i=1 TO 40:READ c:b$(3)=b$(3)+CHR$(c):NEXT
3500 RESTORE 3740:FOR i=1 TO 40:READ c:b$(2)=b$(2)+CHR$(c):NEXT
3510 RESTORE 3750:FOR i=1 TO 40:READ c:b$(1)=b$(1)+CHR$(c):NEXT
3520 RESTORE 3760:FOR i=1 TO 70:READ c:b$(5)=b$(5)+CHR$(c):NEXT
3530 RESTORE 3770:FOR i=1 TO 31:READ c:b$(6)=b$(6)+CHR$(c):NEXT
3540 DATA 1200201,1202203,1204205,1206208,1209210,1200201,1202203,1204205,1206208,1209210
3550 DATA 2211212,2213214,2215216,2217218,2219220,2211212,2213214,2215216,2217218,2219220
3560 DATA 3200201,3202203,3204205,3206208,3209210,3200201,3202203,3204205,3206208,3209210
3570 DATA 4211212,4213214,4215216,4217218,4219220,4211212,4213214,4215216,4217218,4219220
3580 DATA 1,5,9,13,17,21,25,29,33,37
3590 DATA 1,6,11,16
3600 RESTORE 3540:FOR i=1 TO 40:READ a$(i):NEXT
3610 FOR i=1 TO 40
3620 IF i>10 AND i MOD 10=1 THEN RESTORE 3580
3630 READ waag(i)
3640 NEXT
3650 FOR x=1 TO 10
3660 FOR i=x TO x+30 STEP 10
3670 READ senk(i)
3680 NEXT
3690 RESTORE 3590
3700 NEXT
3710 RETURN
3720 DATA 22,1,15,1,252,251,253,8,8,8,15,2,243,15,1,8,10,251,251,251,8,8,8,10,251,251,251,8,8,8,10,254,251,255,8,15,2,239,22,0
3730 DATA 22,1,15,1,252,251,253,8,8,8,15,2,245,15,1,8,10,251,251,251,8,8,8,10,251,251,251,8,8,8,10,254,251,255,8,15,2,241,22,0
3740 DATA 22,1,15,1,252,251,253,8,8,8,15,3,244,15,1,8,10,251,251,251,8,8,8,10,251,251,251,8,8,8,10,254,251,255,8,15,3,240,22,0
3750 DATA 22,1,15,1,252,251,253,8,8,8,15,3,246,15,1,8,10,251,251,251,8,8,8,10,251,251,251,8,8,8,10,254,251,255,8,15,3,242,22,0
3760 DATA 22,1,15,1,252,251,253,8,8,8,15,2,235,232,233,8,8,8,10,15,1,251,251,251,8,8,8,15,2,234,207,230,8,8,8,10,15,1,251,251,251,8,8,8,15,2,234,207,230,8,8,8,10,15,1,254,251,255,15,2,8,8,8,229,231,228,15,1,22,0
3770 DATA 32,32,32,8,8,8,10,32,32,32,8,8,8,10,32,32,32,8,8,8,10,32,32,32,8,8,8,10,32,32,32
3780 LOCATE 8,12:WRITE "Z U W E I S U N G E N"
3790 SYMBOL AFTER 200
3800 RESTORE 3860:FOR i=1 TO 22
3810 FOR x=1 TO 9
3820 READ sy(x)
3830 NEXT x
3840 SYMBOL sy(1),sy(2),sy(3),sy(4),sy(5),sy(6),sy(7),sy(8),sy(9)
3850 NEXT i
3860 DATA 246,0,12,12,63,63,12,12,30,242,120,48,48,252,252,48,48,0,245,0,0,54,127,127,62,28,8,244,0,8,28,62,62,28,8,28,243,0,8,28,62,127,62,28,8
3870 DATA 239,16,56,124,254,124,56,16,0,241,16,56,124,254,254,108,0,0,240,56,16,56,124,124,56,16,0,251,255,255,255,255,255,255,255,255,252,63,127,255,255,255,255,255,255
3880 DATA 253,252,254,255,255,255,255,255,255,254,255,255,255,255,255,255,127,63,255,255,255,255,255,255,255,254,252,236,206,219,219,219,219,219,206,0,235,63,85,170,213,170,213,170,213
3890 DATA 234,170,213,170,213,170,213,170,213,233,252,86,171,85,171,85,171,85,232,255,85,170,85,170,85,170,85,231,170,85,170,85,170,85,170,255,230,171,85,171,85,171,85,171,85
3900 DATA 229,170,213,170,213,170,213,106,63,228,171,85,171,85,171,85,170,252
3910 RESTORE 3920:FOR i=1 TO 33:READ c:b$(4)=b$(4)+CHR$(c):NEXT
3920 DATA 22,1,15,1,252,251,253,8,8,8,15,0,243,15,1,8,10,251,251,251,8,8,8,10,254,251,255,8,15,0,239,22,0
3930 RESTORE 3940:FOR i=1 TO 33:READ c:b$(3)=b$(3)+CHR$(c):NEXT
3940 DATA 22,1,15,1,252,251,253,8,8,8,15,0,245,15,1,8,10,251,251,251,8,8,8,10,254,251,255,8,15,0,241,22,0
3950 RESTORE 3960:FOR i=1 TO 33:READ c:b$(2)=b$(2)+CHR$(c):NEXT
3960 DATA 22,1,15,1,252,251,253,8,8,8,15,0,244,15,1,8,10,251,251,251,8,8,8,10,254,251,255,8,15,0,240,22,0
3970 RESTORE 3980:FOR i=1 TO 33:READ c:b$(1)=b$(1)+CHR$(c):NEXT
3980 DATA 22,1,15,1,252,251,253,8,8,8,15,0,246,15,1,8,10,251,251,251,8,8,8,10,254,251,255,8,15,0,242,22,0
3990 b$(5)=CHR$(235)+CHR$(232)+CHR$(233)+STRING$(3,8)+CHR$(10)+CHR$(234)+CHR$(207)+CHR$(230)+STRING$(3,8)+CHR$(10)+CHR$(229)+CHR$(231)+CHR$(228)
4000 b$(6)="   "+STRING$(3,8)+CHR$(10)+"   "+STRING$(3,8)+CHR$(10)+"   "+STRING$(3,8)+CHR$(10)+"   "+STRING$(3,8)+CHR$(10)+"   "
4010 DATA 1053,1054,1055,1056,1057,1236,1066,1068,1075,1065
4020 DATA 1053,1054,1055,1056,1057,1236,1066,1068,1075,1065
4030 DATA 2053,2054,2055,2056,2057,2236,2066,2068,2075,2065
4040 DATA 2053,2054,2055,2056,2057,2236,2066,2068,2075,2065
4050 DATA 3053,3054,3055,3056,3057,3236,3066,3068,3075,3065
4060 DATA 3053,3054,3055,3056,3057,3236,3066,3068,3075,3065
4070 DATA 4053,4054,4055,4056,4057,4236,4066,4068,4075,4065
4080 DATA 4053,4054,4055,4056,4057,4236,4066,4068,4075,4065
4090 DATA 1,5,9,13,17,21,25,29,33,37,41,45,49,53,57,61,65,69,73,77
4100 DATA 1,6,11,16
4110 RESTORE 4010:FOR i=1 TO 80:READ a$(i):NEXT
4120 RESTORE 4090
4130 FOR i=1 TO 80
4140 IF i>20 AND i MOD 20=1 THEN RESTORE 4090
4150 READ waag(i)
4160 NEXT
4170 RESTORE 4100:FOR x=1 TO 20
4180 FOR i=x TO x+60 STEP 20
4190 READ senk(i)
4200 NEXT
4210 RESTORE 4100
4220 NEXT
4230 RETURN
4240 RANDOMIZE TIME
4250 MODE 1
4260 LOCATE 5,10
4270 PRINT"Moechtest Du Anweisungen  (J/N)";
4280 h$=INKEY$
4290 IF h$="j" THEN 4320
4300 IF h$="n" THEN 4330
4310 GOTO 4280
4320 GOSUB 6550
4330 INK 2,18:INK 3,0:INK 1,26:INK 0,10:BORDER 10
4340 start=1
4350 DIM a$(52),k$(52),k1$(52),dopp$(18)
4360 REM   ***   a$=Kartenstapel  ***  k$=gem. Kartenstapel  ***  dopp$=Karten, die waehrend des Mischens auf dem Tisch liegen
4370 MODE 1
4380 GOSUB 6830
4390 DATA 0212,0313,0414,0515,0616,0717,0818,0919,101Z,021B,031D,041K,111A
4400 DATA 0222,0323,0424,0525,0626,0727,0828,0929,102Z,022B,032D,042K,112A
4410 DATA 0232,0333,0434,0535,0636,0737,0838,0939,103Z,023B,033D,043K,113A
4420 DATA 0242,0343,0444,0545,0646,0747,0848,0949,104Z,024B,034D,044K,114A
4430 RESTORE 4390:FOR i=1 TO 52:READ a$(i):NEXT
4440 MODE 1
4450 LOCATE 10,10:PRINT"Es wird gemischt.";
4460 GOSUB 5550
4470 MODE 1:IF start=1 THEN LOCATE 25,22:PRINT"Gewinn/Verlust";:GOTO 4550
4480 LOCATE 3,21:PRINT"           ";
4490 FOR za=loem*4-3 TO 1 STEP-4
4500 LOCATE za,5:PRINT USING"\                             \";b$(6);
4510 NEXT
4520 FOR za=loec*4-3 TO 1 STEP-4
4530 LOCATE za,13:PRINT USING"\                             \";b$(6);
4540 NEXT
4550 loec=0:loem=0:start=0:verl=0:dop=1:FOR i=1 TO 18:dopp$(i)="":NEXT
4560 durchl=durchl+1:LOCATE 32,1:PRINT"Nr. ";:PRINT USING"####";durchl;
4570 LOCATE 13,1
4580 PRINT"17  UND  4"
4590 '+++++++++++++++++++++++++++++++++
4600 '++       Erste  Karte          ++
4610 '+++++++++++++++++++++++++++++++++
4620 IF ausgabe=52 THEN GOSUB 5550
4630 x=1:y=5:x1=1:y1=13
4640 ausgabe=ausgabe+1
4650 LOCATE x,y:GOSUB 5520
4660 LOCATE x+1,y+2
4670 GOSUB 5430
4680 dopp$(dop)=k$(ausgabe):dop=dop+1
4690 mspielpunkt=mspielpunkt+VAL(MID$(k$(ausgabe),1,2)):mkart=mkart+1:IF MID$(k$(ausgabe),4,1)="B" OR MID$(k$(ausgabe),4,1)="D" OR MID$(k$(ausgabe),4,1)="K" THEN mkartb=mkartb+1
4700 IF ausgabe=52 THEN GOSUB 5550
4710 ausgabe=ausgabe+1
4720 t!=time+160:while time<t! and inkey$="":wend:'FOR za=1 TO 500:NEXT
4730 SOUND 1,100,10,2:LOCATE x1,y1:PRINT b$(5);
4740 dopp$(dop)=k$(ausgabe):dop=dop+1
4750 cspielpunkt=cspielpunkt+VAL(MID$(k$(ausgabe),1,2)):ckart=ckart+1:IF MID$(k$(ausgabe),4,1)="B" OR MID$(k$(ausgabe),4,1)="D" OR MID$(k$(ausgabe),4,1)="K" THEN ckartb=ckartb+1
4760 merk$=MID$(k$(ausgabe),4,1):merkf=VAL(MID$(k$(ausgabe),3,1))
4770 IF ausgabe=52 THEN GOSUB 5550
4780 '*********************************
4790 '**         Spielen             **
4800 '*********************************
4810 GOSUB 5120
4820 IF ausgabe=52 THEN GOSUB 5550
4830 IF verl=0 THEN 4920
4840 verl=0
4850 t!=time+160:while time<t! and inkey$="":wend:'FOR za=1 TO 500:NEXT
4860 LOCATE 25,24:PRINT"            ";:LOCATE 25,24:PRINT USING"#####.##";mgewinn;:PRINT" DM";
4870 LOCATE 3,21:PRINT"                 ";:LOCATE 3,21:PRINT"Weiter J/Q";
4880 h$=INKEY$
4890 IF h$="j" THEN 4480
4900 IF h$="q" THEN 6430
4910 GOTO 4880
4920 GOSUB 6020
4930 IF mspielpunkt>cspielpunkt THEN GOSUB 5910
4940 IF mspielpunkt<cspielpunkt THEN GOSUB 5790
4950 IF mspielpunkt=cspielpunkt AND mspielpunkt<>0 THEN GOSUB 5030
4960 t!=time+160:while time<t! and inkey$="":wend:'FOR za=1 TO 500:NEXT
4970 LOCATE 25,24:PRINT"            ";:LOCATE 25,24:PRINT USING"#####.##";mgewinn;:PRINT" DM";
4980 LOCATE 3,21:PRINT"                 ";:LOCATE 3,21:PRINT"Weiter J/Q";
4990 h$=INKEY$
5000 IF h$="j" THEN 4480
5010 IF h$="q" THEN 6430
5020 GOTO 4990
5030 '*********************************
5040 '**       Unentschieden         **
5050 '*********************************
5060 LOCATE 3,21
5070 PRINT"               ";
5080 LOCATE 3,21
5090 PRINT"Bank zieht";
5100 GOSUB 5790
5110 RETURN
5120 '********************************
5130 '**      Menschl. Karten       **
5140 '********************************
5150 ausgabe=ausgabe+1
5160 x=x+4
5170 IF mkart=1 THEN 5250
5180 LOCATE 3,24
5190 FOR za=1 TO 100:h$=INKEY$:NEXT
5200 PRINT"Noch eine Karte ?";
5210 h$=INKEY$
5220 IF h$="j" THEN 5250
5230 IF h$="n" THEN ausgabe=ausgabe-1:GOTO 5400
5240 GOTO 5210
5250 LOCATE 3,24
5260 PRINT"                   ";
5270 t!=time+160:while time<t! and inkey$="":wend:'FOR za=1 TO 500:NEXT
5280 LOCATE x,y
5290 GOSUB 5520
5300 LOCATE x+1,y+2
5310 GOSUB 5450
5320 dopp$(dop)=k$(ausgabe):dop=dop+1
5330 mspielpunkt=mspielpunkt+VAL(MID$(k$(ausgabe),1,2)):mkart=mkart+1:IF MID$(k$(ausgabe),4,1)="B" OR MID$(k$(ausgabe),4,1)="D" OR MID$(k$(ausgabe),4,1)="K" THEN mkartb=mkartb+1
5340 IF mkart=2 AND mspielpunkt=22 THEN 5910
5350 IF mkart=5 AND mkartb=5 THEN 5910
5360 IF mspielpunkt=21 THEN 5910
5370 IF mspielpunkt>21 THEN 5790
5380 IF ausgabe=52 THEN GOSUB 5550
5390 GOTO 5120
5400 LOCATE 3,24:PRINT"                  ";
5410 RETURN
5420 '********************************
5430 '**       Werte drucken        **
5440 '********************************
5450 PAPER 1
5460 IF MID$(k$(ausgabe),1,2)="10" THEN PRINT CHR$(236);:GOTO 5480
5470 PRINT MID$(k$(ausgabe),4,1);
5480 PAPER 0:PEN 1:RETURN
5490 '*******************************
5500 '**       Karten drucken      **
5510 '*******************************
5520 SOUND 1,100,10,2
5530 PRINT USING"\                                             \";b$(VAL(MID$(k$(ausgabe),3,1)));
5540 RETURN
5550 '*******************************
5560 '**       Karten mischen      **
5570 '*******************************
5580 ausgabe=0
5590 IF start=1 THEN 5610
5600 LOCATE 3,19:PRINT"Es wird gemischt.";
5610 FOR i=1 TO 52
5620 k1$(i)=a$(i)
5630 NEXT
5640 FOR i=1 TO 52
5650 s=INT(RND*52)+1
5660 IF k1$(s)="" THEN 5650
5670 k$(i)=k1$(s):k1$(s)=""
5680 NEXT
5690 LOCATE 3,19:PRINT"                      ";
5700 IF dopp$(1)="" THEN 5780
5710 t=1
5720 FOR i=1 TO 52
5730 IF k$(i)=dopp$(t) THEN k$(i)=k$(t):k$(t)=dopp$(t)
5740 NEXT
5750 t=t+1
5760 IF t<= dop THEN 5720
5770 ausgabe=dop-1
5780 RETURN
5790 '********************************
5800 '**      Mensch verliert       **
5810 '********************************
5820 LOCATE 3,21
5830 mgewinn=mgewinn-5
5840 IF mspielpunkt=cspielpunkt THEN PRINT"Bank zieht";:GOTO 5860
5850 PRINT"Leider verloren";
5860  t!=time+470:while time<t! and inkey$="":wend:'FOR za=1 TO 1500:NEXT
5870 loem=mkart:loec=ckart
5880 mkart=0:ckart=0:gewonnen=0:mspielpunkt=0:cspielpunkt=0:mkartb=0:ckartb=0:merk$="":merkf=0
5890 verl=1
5900 RETURN
5910 '********************************
5920 '**       Mensch gewinnt       **
5930 '********************************
5940 LOCATE 3,21
5950 PRINT"Du gewinnst";
5960 mgewinn=mgewinn+5
5970 t!=time+320:while time<t! and inkey$="":wend:'FOR za=1 TO 1000:NEXT
5980 loem=mkart:loec=ckart
5990 mkart=0:ckart=0:gewonnen=0:mspielpunkt=0:cspielpunkt=0:mkartb=0:ckartb=0:merk$="":merkf=0
6000 verl=1
6010 RETURN
6020 '********************************
6030 '**      1. Karte Computer     **
6040 '********************************
6050 LOCATE x1,y1
6060 SOUND 1,100,10,2
6070 PRINT b$(merkf);
6080 LOCATE x1+1,y1+2
6090 PAPER 1
6100 IF merk$="Z" THEN PRINT CHR$(236);:GOTO 6120
6110 PRINT merk$;
6120 laenge=500
6130 PAPER 0:PEN 1
6140 schlusswert=INT(RND*3)+1
6150 merk$="":merkf=0
6160 '********************************
6170 '**      Computer spielt       **
6180 '********************************
6190 laenge=laenge+500
6200 t!=time+laenge/3.2:while time<t! and inkey$="":wend:'FOR za=1 TO laenge:NEXT
6210 IF ckart=2 AND cspielpunkt=22 THEN 5790
6220 IF ckart=5 AND ckartb=5 THEN 5790
6230 IF cspielpunkt=21 THEN 5790
6240 IF cspielpunkt>21 THEN 5910
6250 IF cspielpunkt>=15+schlusswert THEN 6390
6260 IF ausgabe=52 THEN GOSUB 5550
6270 ausgabe=ausgabe+1
6280 x1=x1+4
6290 LOCATE x1,y1
6300 SOUND 1,100,10,2
6310 PRINT USING"\                                             \";b$(VAL(MID$(k$(ausgabe),3,1)));
6320 LOCATE x1+1,y1+2
6330 PAPER 1
6340 IF MID$(k$(ausgabe),1,2)="10" THEN PRINT CHR$(236);:GOTO 6360
6350 PRINT MID$(k$(ausgabe),4,1);
6360 cspielpunkt=cspielpunkt+VAL(MID$(k$(ausgabe),1,2)):ckart=ckart+1:IF MID$(k$(ausgabe),4,1)="B" OR MID$(k$(ausgabe),4,1)="D" OR MID$(k$(ausgabe),4,1)="K" THEN ckartb=ckartb+1
6370 dopp$(dop)=k$(ausgabe):dop=dop+1
6380 PAPER 0:PEN 1:GOTO 6170
6390 RETURN
6400 '********************************
6410 '**           ENDE             **
6420 '********************************
6430 FOR i=19 TO 24
6440 LOCATE 1,i
6450 PRINT SPACE$(39);
6460 NEXT
6470 LOCATE 5,21
6480 PRINT"Du hast ";
6490 IF mgewinn>0 THEN PRINT USING"####.##";ABS(mgewinn);:PRINT" DM gewonnen."
6500 IF mgewinn<0 THEN PRINT USING"####.##";ABS(mgewinn);:PRINT" DM verloren."
6510 IF mgewinn=0 THEN PRINT" nichts gewonnen - nichts verloren."
6520 PRINT
6530 t!=time+8000/3.2:while time<t! and inkey$="":wend:'FOR za=1 TO 8000:NEXT
6540 RUN
6550 MODE 2
6560 LOCATE 35,1
6570 PRINT"17 UND 4";
6580 LOCATE 4,4
6590 PRINT"Du spielst gegen den  Computer  und  musst  versuchen, eine hoehere Augen-";
6600 LOCATE 4,6
6610 PRINT"zahl zu  erreichen  als dieser. Der  Computer  teilt erst  einmal 3 Karten";
6620 LOCATE 4,8
6630 PRINT"aus (Du-Er-Du).  Danach  wirst Du  gefragt, ob Du eine weitere Karte haben";
6640 LOCATE 4,10
6650 PRINT"moechtest (J/N). Ziel  ist es,  entweder 21, 2 Asse  oder 5 Bilder  zu er-";
6660 LOCATE 4,12
6670 PRINT"reichen. Mit 21, 2  Assen  oder  5 Bildern hast Du sofort gewonnen. Kommst";
6680 LOCATE 4,14
6690 PRINT"Du  ueber 21  Augen, hast  Du verloren. Willst  Du keine Karte mehr nehmen";
6700 LOCATE 4,16
6710 PRINT"gib'  (N) ein. Danach  zieht der  Commputer ( =Bank ). Bei Gleichstand ge-";
6720 LOCATE 4,18
6730 PRINT"winnt  die Bank  ( Bank zieht ),  ansonsten  der  Spieler mit den  meisten";
6740 LOCATE 4,20
6750 PRINT"Augen, wobei 21, 2 Asse und 5 Bilder ebenfalls Gewinne fuer die Bank sind.";
6760 LOCATE 4,22
6770 PRINT"Bei jedem Spiel geht es um 5,- DM Einsatz.     > Q < - beendet das Spiel.";
6780 LOCATE 32,25
6790 PRINT"Taste druecken";
6800 h$=INKEY$:IF h$="" THEN 6800
6810 MODE 1
6820 RETURN
6830 SYMBOL AFTER 220
6840 SYMBOL 246,0,12,12,63,63,12,12,30
6850 SYMBOL 245,0,0,54,127,127,62,28,8
6860 SYMBOL 244,0,8,28,62,62,28,8,28
6870 SYMBOL 243,0,8,28,62,127,62,28,8
6880 SYMBOL 239,16,56,124,254,124,56,16,0
6890 SYMBOL 242,120,48,48,252,252,48,48,0
6900 SYMBOL 241,16,56,124,254,254,108,0,0
6910 SYMBOL 240,56,16,56,124,124,56,16,0
6920 SYMBOL 236,206,219,219,219,219,219,206,0
6930 SYMBOL 235,63,85,170,213,170,213,170,213
6940 SYMBOL 234,170,213,170,213,170,213,170,213
6950 SYMBOL 233,252,86,171,85,171,85,171,85
6960 SYMBOL 232,255,85,170,85,170,85,170,85
6970 SYMBOL 231,170,85,170,85,170,85,170,255
6980 SYMBOL 230,171,85,171,85,171,85,171,85
6990 SYMBOL 228,171,85,171,85,171,85,170,252
7000 SYMBOL 229,170,213,170,213,170,213,106,63
7010 SYMBOL 252,63,127,255,255,255,255,255,255
7020 SYMBOL 253,252,254,255,255,255,255,255,255
7030 SYMBOL 254,255,255,255,255,255,255,127,63
7040 SYMBOL 255,255,255,255,255,255,255,254,252
7050 SYMBOL 251,255,255,255,255,255,255,255,255
7060 RESTORE 7130:FOR i=1 TO 47:READ c:b$(4)=b$(4)+CHR$(c):NEXT
7070 RESTORE 7140:FOR i=1 TO 47:READ c:b$(3)=b$(3)+CHR$(c):NEXT
7080 RESTORE 7150:FOR i=1 TO 47:READ c:b$(2)=b$(2)+CHR$(c):NEXT
7090 RESTORE 7160:FOR i=1 TO 47:READ c:b$(1)=b$(1)+CHR$(c):NEXT
7100 RESTORE 7170:FOR i=1 TO 79:READ c:b$(5)=b$(5)+CHR$(c):NEXT
7110 b$(6)="   "+STRING$(3,8)+CHR$(10)+"   "+STRING$(3,8)+CHR$(10)+"   "+STRING$(3,8)+CHR$(10)+"   "+STRING$(3,8)+CHR$(10)+"   "
7120 RETURN
7130 DATA 22,1,15,1,252,251,253,8,8,8,15,2,243,15,1,8,10,251,251,251,8,8,8,10,251,251,251,8,8,8,10,251,251,251,8,8,8,10,254,251,255,8,15,2,239,22,0
7140 DATA 22,1,15,1,252,251,253,8,8,8,15,2,245,15,1,8,10,251,251,251,8,8,8,10,251,251,251,8,8,8,10,251,251,251,8,8,8,10,254,251,255,8,15,2,241,22,0
7150 DATA 22,1,15,1,252,251,253,8,8,8,15,3,244,15,1,8,10,251,251,251,8,8,8,10,251,251,251,8,8,8,10,251,251,251,8,8,8,10,254,251,255,8,15,3,240,22,0
7160 DATA 22,1,15,1,252,251,253,8,8,8,15,3,246,15,1,8,10,251,251,251,8,8,8,10,251,251,251,8,8,8,10,251,251,251,8,8,8,10,254,251,255,8,15,3,242,22,0
7170 DATA 22,1,15,1,252,251,253,8,8,8,,10,251,251,251,8,8,8,10,251,251,251,8,8,8,10,251,251,251,8,8,8,10,254,251,255,11,11,11,11,8,8,8,15,2,235,232,233,8,8,8,10,234,207,230,8,8,8,10,234,207,230,8,8,8,10,234,207,230,8,8,8,10,229,231,228,15,1,22,0
*/ });
