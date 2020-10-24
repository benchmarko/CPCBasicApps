/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem canyons - Canyons of Cannons
2 rem (c) Computer Kontakt Nr 14, August/September 1985
3 rem https://www.cpc-power.com/index.php?page=detail&num=2903
4 rem Modifications: delays; speed up drawing with WINDOW#1; inks adapted for better contrast
5 rem
900 '**********************
901 '* CANYONS OF CANNONS *
902 '*(c) 1985 by Ingo Pax*
903 '* Karl-Marx-Allee 45 *
904 '*   5000 Koeln 71    *
905 '*  Tel.0221/7088733  *
906 '**********************
907 '<===Vorinitialisierung===>
1000 ENV 1,4,0,10,15,-1,75
1010 ENT -1,1,0,10,10,10,1,10,-10,1,10,10,1,10,-10,1
1020 ENV 2,10,-1,25
1030 ENT 2,5,25,1
1040 MODE 1
1050 BORDER 9:INK 0,0:INK 1,3:INK 2,2:INK 3,14
1060 PAPER 0:PEN 2
1070 '<===Titelbild===>
1080 WINDOW#1,8,33,4,18
1090 LOCATE 8,1:PRINT CHR$(150);STRING$(24,154);CHR$(156)
1100 LOCATE 8,3:PRINT CHR$(147);STRING$(24,154);CHR$(153)
1110 LOCATE 8,2:PRINT CHR$(157)
1120 LOCATE 33,2:PRINT CHR$(151)
1130 PEN 3
1140 LOCATE 12,2:PRINT"Canyons of Cannons"
1150 FOR rand=4 TO 100 STEP 8
1160 MOVE rand,400
1170 DRAW rand,rand,3
1180 DRAW 639-rand,rand,3
1190 DRAW 639-rand,400,3
1200 NEXT rand
1210 PAPER#1,1:PEN#1,3:CLS#1
1220 PRINT#1,"Namen der Spieler(max. 10 Buchstaben)"
1230 PRINT#1:INPUT#1,"1.Spieler:",name1$
1240 IF LEN(name1$)>10 THEN name1$=LEFT$(name1$,10)
1250 PRINT#1:INPUT#1,"2.Spieler:",name2$
1260 IF LEN(name2$)>10 THEN name2$=LEFT$(name2$,10)
1270 LOCATE#1,7,15:PRINT#1,"Spielerklaerung"
1280 PRINT#1
1290 PRINT#1,"Bei diesem Spiel geht es  darum,durch Eingabe des   Abschusswinkels und der   Geschwindigkeit,eine Kano-nenkugel so abzufeuern,"
1300 PRINT#1,"dass der Gegner schnell   getroffen wird. Erst wird der Abschusswinkel und    dann die Geschwindigkeit  eingegeben."
1310 PRINT#1
1320 PRINT#1,"[TASTE]"
1330 WHILE INKEY$<>"":WEND:WHILE INKEY$="":WEND
1340 CLS#1
1350 PRINT#1,"Es koennen nur Zahlen ein-gegeben werden. Bei Fehl- eingabe koennen Sie nach  Eingabe von vier Zahlen   und [DEL] die Eingabe wie-";
1360 PRINT#1,"derholen. Ansonsten wird  mit [ENTER] die Kanonenku-gel abgefeuert."
1370 PRINT#1
1380 PRINT#1,"Geben Sie nun an,bei wie- vielen Treffern einer der Spieler gewonnen hat.Die  Zahl kann zwischen 01 und 99 liegen.";CHR$(243);
1390 ende$=""
1400 FOR eingabe=1 TO 2
1410 e$=INKEY$:IF e$<"0" OR e$>"9" THEN GOTO 1410
1420 ende$=ende$+e$:PRINT#1,e$;
1430 NEXT eingabe
1440 PRINT#1," Wert ok j/n"
1450 WHILE INKEY(45)<>0
1460 IF INKEY(46)=0 THEN GOTO 1370
1470 call &bd19:WEND
1480 ende=VAL(ende$)
1490 IF ende <1 THEN PEN#1,2:PRINT#1," UNKORREKT":PEN#1,3:GOTO 1380
1500 ende=ende-1
1510 LOCATE#1,1,1:PRINT#1,STRING$(15,11)
1520 '<===Zahlendefinierung===>
1530 SYMBOL AFTER 48
1540 SYMBOL 48,0,28,34,34,68,68,56,0
1550 SYMBOL 49,0,8,24,8,16,16,16,0
1560 SYMBOL 50,0,28,34,12,16,32,124,0
1570 SYMBOL 51,0,28,34,12,4,68,56,0
1580 SYMBOL 52,0,12.2,36,126,8,8,0
1590 SYMBOL 53,0,30,32,120,4,68,56,0
1600 SYMBOL 54,0,14,16,44,68,68,56,0
1610 SYMBOL 55,0,62,2,4,8,16,32,0
1620 SYMBOL 56,0,24,36,56,72,72,48,0
1630 SYMBOL 57,0,28,34,34,28,8,112,0
1640 SYMBOL 255,195,129,129,129,129,129,129,255
1650 INK 0,2:INK 1,12:INK 2,26:INK 3, 20:INK 4,3,15:INK 5,26:INK 6,26:SPEED INK 10,5: 'ink 3,0=>20
1660 BORDER 0
1670 '<===Loeschen Bildschirm===>
1680 FOR loesch=0 TO 400 STEP 2
1690 MOVE 0,loesch:DRAW 639,loesch,0
1700 NEXT loesch
1710 MODE 0
1720 sp=INT(RND*2)+1
1730 '<===Anzeige Siege===>
1740 PEN 6
1750 LOCATE 6,1:PRINT sieg1:LOCATE 18,1:PRINT sieg2
1760 IF sieg1>ende OR sieg2>ende THEN 3100
1770 GOSUB 2520
1780 '<===Hauptschleife===>
1790 IF sp=2 THEN 2100
1800 '<===Spieler 1===>
1810 PEN 6:LOCATE 1,1
1820 GOSUB 2910
1830 winkel=a
1840 PRINT",";
1850 GOSUB 2910
1860 gesch=a
1870 WHILE INKEY(18)<>0
1880 IF INKEY(79)=0 THEN GOTO 1810
1890 call &bd19:WEND
1900 GOSUB 2300
1910 xneu=kx1+20
1920 yneu=ky1+19
1930 GOSUB 2360
1940 IF pruef<2 OR pruef>3 THEN sp=0:GOSUB 3010:GOTO 2100
1950 IF xalt<320 THEN 2260
1960 sieg1=sieg1+1
1970 sp=1
1980 '<===Explosion===>
1990 SOUND 130,300,1000-500,15,1,1,15
2000 MOVE xalt,yalt
2010 FOR radius=2 TO 20
2020 FOR kreis=0 TO 2*PI STEP PI/5
2030 x=radius*SIN(kreis)+xalt:y=radius*COS(kreis)+yalt
2040 IF INT(RND*300)<10 THEN farbe=2 ELSE farbe=4
2050 DRAW x,y,farbe
2060 NEXT kreis
2070 NEXT radius
2075 while sq(2)<>4:call &bd19:wend
2080 GOTO 1740
2090 '<===Spieler 2===>
2100 PEN 6:LOCATE 13,1
2110 GOSUB 2910
2120 winkel=a
2130 PRINT",";
2140 GOSUB 2910
2150 gesch=a
2160 WHILE INKEY(18)<>0
2170 IF INKEY(79)=0 THEN GOTO 2100
2180 call &bd19:WEND
2190 GOSUB 2300
2200 xzus=-xzus
2210 xneu=kx2-2
2220 yneu=ky2+19
2230 GOSUB 2360
2240 IF pruef<2 OR pruef>3 THEN sp=0:GOSUB 3010:GOTO 1810
2250 IF xalt>320 THEN 1960
2260 sieg2=sieg2+1
2270 sp=2
2280 GOTO 1990
2290 '<===SIN/COS-Berechnung===>
2300 DEG:winkel=-winkel
2310 xzus=gesch/10*COS(winkel)
2320 yzus=-gesch/10*SIN(winkel)
2330 RAD
2340 RETURN
2350 '<===Plotten der Kugel===>
2360 IF yneu>500 THEN 2410
2370 pruef=TEST(xneu,yneu)
2380 PLOT xneu,yneu,5
2390 xalt=xneu
2400 yalt=yneu
2410 xneu=xneu+xzus
2420 yneu=yneu+yzus
2430 yzus=yzus-0.1
2440 IF xneu<320 THEN st=129 ELSE st=132
2450 call &bd19: 'FOR warte=1 TO 25:NEXT warte
2460 PLOT xalt,yalt,0
2470 IF xneu<0 OR xneu>640 OR yneu<0 THEN RETURN
2480 SOUND st,yneu,4,3
2490 IF pruef=0 THEN 2360
2500 RETURN
2510 '<===Bildaufbau===>
2520 RANDOMIZE TIME
2525 WINDOW#1,1,20,7,25:PAPER#1,0:CLS#1
2530 kx1=INT(RND*300)+1
2540 kx2=INT(RND*290)+330
2550 y=INT(RND*10)+50
2560 y=y*15
2570 y1=INT(RND*20)-20
2580 FOR x=0 TO 639 step 4
2590 IF x<320 THEN st=129 ELSE st=132
2600 SOUND st,y/10,1,2 :'SOUND st,y/10,2,2
2605 'if x<>0 then draw x,y/15:goto 2650 else plot x,y/15,1:goto 2650: 'CPC 6128 FILL speedup, see 2405
2610 MOVE x,0
2620 DRAW x,y/15,1
2630 'DRAW x,200,0
2640 'RANDOMIZE TIME
2650 IF x-kx1<20 THEN IF x-kx1>-1 THEN ky1=y/15:GOTO 2680
2660 IF x-kx2<20 THEN IF x-kx2>-1 THEN ky2=y/15:GOTO 2680
2670 IF y+y1>80 THEN IF y+y1<2200 THEN y=y+y1
2680 IF INT(RND*100)+1<10 THEN y1=INT(RND*100)-49
2690 NEXT x
2695 'move 1,1:fill 1: 'CPC 6128 FILL speedup
2700 x=kx1:y=ky1
2710 GOSUB 2790
2720 x=kx2:y=ky2
2730 GOSUB 2850
2740 FOR y3=370 TO 378 STEP 2
2750 MOVE 0,y3:DRAW 639,y3,1
2760 NEXT y3
2770 RETURN
2780 '<===Kanone 1===>
2790 FOR z=0 TO 8
2800 MOVE x+z*2,y+z*2
2810 DRAW x+6,y+z*2,2
2820 NEXT z
2830 RETURN
2840 '<===Kanone 2===>
2850 FOR z=0 TO 8
2860 MOVE x+20-z*2,y+z*2
2870 DRAW x+14,y+z*2,3
2880 NEXT z
2890 RETURN
2900 '<===Eingabe===>
2910 x1$="00"
2920 FOR s=1 TO 2
2930 GOSUB 2990:x$=INKEY$:IF x$<"0" OR x$>"9" THEN 2930
2940 x1$=x1$+x$:PRINT x$;
2950 NEXT s
2960 a=VAL(x1$)
2970 RETURN
2980 '<===Cursor===>
2990 PEN 8:PRINT CHR$(22);CHR$(1);CHR$(255);CHR$(22);CHR$(0);CHR$(8);:PEN 6:RETURN :'pen 3=>8
3000 '<===Nicht getroffen===>
3010 farbe=4
3020 SOUND 130,4000,600,10,2,0,15
3030 FOR kreis=0 TO 2*PI STEP PI/10
3040 x=7*COS(kreis)+xalt:y=7*SIN(kreis)+yalt
3050 MOVE xalt,yalt
3060 DRAW x,y,farbe
3070 NEXT kreis
3080 IF farbe=0 THEN RETURN ELSE farbe=0:GOTO 3030
3090 '<===Spielende===>
3100 RESTORE:GOSUB 3310
3110 IF sieg1>sieg2 THEN INK 2,26,0:sieg$=name1$ ELSE INK 3,0,26:sieg$=name2$
3120 WINDOW#1,6,15,7,14:PAPER#1,0:PEN#1,6
3130 PRINT#1,sieg$
3140 PRINT#1,"ist Sieger"
3150 PRINT#1,"Noch ein"
3160 PRINT#1,"Spiel ???"
3170 PRINT#1,"(j/n)
3180 f$=INKEY$:IF f$<>"j" AND f$<>"n" THEN 3180
3190 IF f$="n" THEN LOCATE 1,1:PRINT STRING$(25,11):SYMBOL AFTER 0:END
3200 SYMBOL AFTER 0:RUN
3210 '<===Melodie===>
3220 DATA 568,8,426,4,358,8,568,8,426,4,358,8,426,8,379,4
3230 DATA 379,5,379,16,379,0.5,358,8,319,4,319,8,319,8,284,4
3240 DATA 319,4,358,8,379,8,358,4,426,5,426,16,426,0.5,426,8
3250 DATA 319,2,319,4,319,4,319,4,253,4,319,4,358,2,358,4
3260 DATA 426,4,358,4,284,4,358,8,426,8,568,4,478,8,379,8
3270 DATA 319,4,379,8,478,8,426,4,426,4,426,1,426,2,426,8,319,2
3280 DATA 319,4,319,4,319,4,253,4,319,4,358,2,358,4,426,4
3290 DATA 358,4,284,4,358,8,426,8,568,4,478,8,379,8,319,4
3300 DATA 379,8,478,8,426,4,426,4,426,8,426,1
3310 FOR mel=1 TO 71
3320 IF mel=12 OR mel=24 OR mel=48 THEN GOSUB 3380
3330 READ no,la
3340 ENV 3,7,-1,60/la
3350 SOUND 1,no+100,25,11,3,2:SOUND 4,no-100,25,11,3,2
3360 NEXT mel
3370 RETURN
3380 FOR st=1 TO 2:SOUND st^2,400,30,0:NEXT st:RETURN
*/ });
