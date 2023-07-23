/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem mchess - Mini Chess (Mini-Schach)
2 rem (c) 1986 Matthias Uphoff
3 rem http://cpctech.cpc-live.com/docs/dse/softex06.html
4 rem Das Software Experiment - Kapitel 6: Der Computer lernt
5 rem
6 '
10 '***********************************
20 '********** Mini - Schach **********
30 '***** (c) 1986 Matthias Uphoff ****
40 '***********************************
50 '
60 '********** Initialisierung
70 '
80 IF HIMEM>40000 THEN GOSUB 2630
90 OPENOUT"x":MEMORY HIMEM-1:CLOSEOUT
100 MODE 1
110 INK 0,0:INK 1,9:INK 2,15:INK 3,23:BORDER 3
120 WINDOW#1,11,40,23,24
130 DEFINT a-z
140 DIM dx(7),dy(7),b(5,5)
150 DIM l.psn1(2000),l.psn2(2000),l.zliste$(2000)
160 DIM k.psn1(20),k.psn2(20),k.zliste$(20),k.znr(20),k.index(20)
162 bruder=0
163 PRINT:PRINT"Simulation Bruder (j/n)?"
164 a$=LOWER$(INKEY$):if a$="j" then bruder=1:PRINT"Waehrend der Simulation: DEL=Stop&Save" else if a$<>"n" then 164
170 PRINT
180 PRINT"Wurde bereits eine Datei erstellt (j/n)?"
190 a$=LOWER$(INKEY$)
200 IF a$="j" THEN GOSUB 960 ELSE IF a$<>"n" THEN 190
210 CLS
220 SYMBOL 240,0,0,0,3,7,7,3,14
230 SYMBOL 241,0,0,0,192,224,224,192,112
240 SYMBOL 242,3,3,3,7,12,31,15,0
250 SYMBOL 243,192,192,192,224,48,248,240,0
260 SYMBOL 244,0,0,21,31,31,27,12,7
270 SYMBOL 245,0,0,168,248,248,216,48,224
280 SYMBOL 246,7,7,7,15,28,63,31,0
290 SYMBOL 247,224,224,224,240,56,252,248,0
300 RESTORE 360
310 FOR i=0 TO 7:READ dx(i):NEXT
320 FOR i=0 TO 7:READ dy(i):NEXT
330 FOR i=1 TO 7:READ c:frei$=frei$+CHR$(c):NEXT
340 FOR i=1 TO 7:READ c:bauer$=bauer$+CHR$(c):NEXT
350 FOR i=1 TO 7:READ c:dame$=dame$+CHR$(c):NEXT
360 DATA 0,0,-1,1,1,1,-1,-1
370 DATA 1,-1,0,0,1,-1,1,-1
380 DATA 32,32,10,8,8,32,32
390 DATA 240,241,10,8,8,242,243
400 DATA 244,245,10,8,8,246,247
410 PEN 1:LOCATE 16,4:PRINT CHR$(150)STRING$(8,154)CHR$(156)
420 FOR y=5 TO 12:LOCATE 16,y:PRINT CHR$(149)SPACE$(8)CHR$(149):NEXT
430 LOCATE 16,13:PRINT CHR$(147)STRING$(8,154)CHR$(153)
440 '
450 '********** Spielstart
460 '
470 zz=0:rz=0
480 RESTORE 510
490 FOR y=0 TO 5:FOR x=0 TO 5
500 READ b(x,y):NEXT x,y
510 DATA -1,-1,-1,-1,-1,-1
520 DATA -1,1,1,1,1,-1
530 DATA -1,0,0,0,0,-1
540 DATA -1,0,0,0,0,-1
550 DATA -1,3,3,3,3,-1
560 DATA -1,-1,-1,-1,-1,-1
570 GOSUB 1250
580 spieler=1
590 '
600 '********** Spielablauf
610 '
620 erg=0
630 WHILE erg=0
640 ON spieler GOSUB 1380,1780
650 spieler=3-spieler
660 WEND
670 '
680 '********** Spielende
690 '
700 zz=zz-1
710 ON erg GOSUB 810,870,930
720 LOCATE 1,1:PRINT mp
725 a$="":if bruder=1 then if INKEY$=CHR$(127) then a$="n":goto 750 else a$="j":goto 750
730 PRINT#1,"Noch ein Spiel (j/n) ?" 
740 a$=LOWER$(INKEY$)
750 IF a$="j" THEN CLS#1:GOTO 450
760 IF a$="n" THEN GOSUB 1070:CLS:END
770 GOTO 740
780 '
790 '********** Auswertung
800 '
810 PRINT#1,"Ich habe gewonnen !"
820 IF LEN(k.zliste$(zz))=1 THEN RETURN
830 IF k.index(zz)>-1 THEN i=k.index(zz) ELSE l.psn1(mp)=k.psn1(zz):l.psn2(mp)=k.psn2(zz):i=mp:mp=mp+1
840 l.zliste$(i)=MID$(k.zliste$(zz),k.znr(zz),1)
850 RETURN
860 '
870 PRINT#1,"Ich habe verloren !"
880 IF k.index(zz)>-1 THEN i=k.index(zz) ELSE l.psn1(mp)=k.psn1(zz):l.psn2(mp)=k.psn2(zz):i=mp:mp=mp+1
890 l.zliste$(i)=LEFT$(k.zliste$(zz),k.znr(zz)-1)+MID$(k.zliste$(zz),k.znr(zz)+1)
900 IF zz>0 AND l.zliste$(i)="" THEN zz=zz-1:GOTO 880
910 RETURN
920 '
930 PRINT#1,"Unentschieden !"
940 RETURN
950 '
960 '********** Datei lesen
970 '
980 mp=0:CLS
990 OPENIN"mchess.dat" '"mschach.dat"
1000 WHILE NOT EOF
1010 INPUT#9,l.psn1(mp),l.psn2(mp),l.zliste$(mp)
1020 mp=mp+1
1030 WEND
1040 CLOSEIN
1050 RETURN
1060 '
1070 '********** Datei schreiben
1080 '
1090 CLS
1100 OPENOUT"mchess.dat" '"mschach.dat"
1110 FOR i=0 TO mp-1
1120 WRITE#9,l.psn1(i),l.psn2(i),l.zliste$(i)
1130 NEXT
1140 CLOSEOUT
1150 RETURN
1160 '
1170 '********** Zug ausfuehren
1180 '
1190 IF b(sp,re)=1 OR b(sp,re)=3 OR b(x,y)>0 THEN rz=0 ELSE rz=rz+1
1200 IF rz>3 THEN erg=3
1210 b(x,y)=b(sp,re):b(sp,re)=0
1220 IF y=4 AND b(x,y)=1 THEN b(x,y)=2
1230 IF y=1 AND b(x,y)=3 THEN b(x,y)=4
1240 '
1250 '********** Brett ausgeben
1260 '
1270 FOR x=1 TO 4:FOR y=1 TO 4
1280 IF b(x,y)>2 THEN PEN 0 ELSE PEN 3
1290 PAPER (x+y) MOD 2 +1
1300 LOCATE 15+x*2,3+y*2
1310 IF b(x,y)=0 THEN PRINT frei$
1320 IF b(x,y)=1 OR b(x,y)=3 THEN PRINT bauer$
1330 IF b(x,y)=2 OR b(x,y)=4 THEN PRINT dame$
1340 NEXT y,x
1350 PEN 1:PAPER 0
1360 RETURN
1370 '
1380 '********** Zug Computer
1390 '
1400 'Feldcodierung
1410 p1!=0:p2!=0
1420 FOR sp=1 TO 4:FOR re=1 TO 4
1430 p1!=p1!*2
1440 IF b(sp,re)>0 THEN p1!=p1!+1:p2!=p2!*4+b(sp,re)-1
1450 NEXT re,sp
1460 psn1=UNT(p1!):psn2=UNT(p2!)
1470 p1!=0:p2!=0
1480 FOR sp=4 TO 1 STEP -1:FOR re=1 TO 4
1490 p1!=p1!*2
1500 IF b(sp,re)>0 THEN p1!=p1!+1:p2!=p2!*4+b(sp,re)-1
1510 NEXT re,sp
1520 psx1=UNT(p1!):psx2=UNT(p2!)
1530 '
1540 'Position schon im Langzeitged. ?
1550 flag=0:xflag=0
1560 'CALL &A600,@l.psn2(0),@l.psn1(0),psx2,psx1,psn2,psn1
1570 'IF PEEK(&A66D)<255 THEN flag=-1:i=PEEK(&A66C)+256*PEEK(&A66D):xflag=PEEK(&A66E)
1575 gosub 3030
1580 '
1590 'Zugliste holen
1600 IF flag THEN zliste$=l.zliste$(i) ELSE GOSUB 2060
1610 IF zliste$="" THEN erg=2:RETURN
1620 '
1630 'Eintragung ins Kurzzeitged.
1640 k.psn1(zz)=psn1:k.psn2(zz)=psn2
1650 k.zliste$(zz)=zliste$
1660 IF flag THEN k.index(zz)=i ELSE k.index(zz)=-1
1670 k.znr(zz)=INT(RND*LEN(zliste$)+1)
1680 '
1690 'Zug decodieren u. ausfuehren
1700 zug=ASC(MID$(zliste$,k.znr(zz)))
1710 IF xflag THEN zug=zug XOR &CC
1720 sp=(zug AND &C0)\64+1:re=(zug AND &30)\16+1
1730 x=(zug AND &C)\4+1:y=(zug AND 3)+1
1740 GOSUB 1170 'Zug ausfuehren
1750 zz=zz+1
1760 RETURN
1770 '
1780 '********** Zug Gegner
1790 '
1795 if bruder=1 then 5800
1800 GOSUB 2060 'Zugliste holen
1810 IF zliste$="" THEN erg=1:RETURN
1820 x=1:y=4
1830 GOSUB 1920 'Startkoord. holen
1840 IF b(x,y)<3 THEN PRINT CHR$(7):GOTO 1830
1850 sp=x:re=y
1860 GOSUB 1920 'Zielkoord. holen
1870 z=(sp-1)*64+(re-1)*16+(x-1)*4+y-1
1880 IF INSTR(zliste$,CHR$(z))=0 THEN PRINT CHR$(7):GOTO 1830
1890 GOSUB 1170 'Zug ausfuehren
1900 RETURN
1910 '
1920 '********** Koordinateneingabe
1930 '
1940 PEN 2:a$=""
1950 WHILE a$<>CHR$(13) AND a$<>CHR$(224)
1960 LOCATE 15+x*2,4+y*2:CALL &BB81
1970 a$=INKEY$:IF a$="" THEN 1970
1980 CALL &BB84
1990 IF a$=CHR$(240) THEN y=MAX(1,y-1)
2000 IF a$=CHR$(241) THEN y=MIN(4,y+1)
2010 IF a$=CHR$(242) THEN x=MAX(1,x-1)
2020 IF a$=CHR$(243) THEN x=MIN(4,x+1)
2030 WEND
2040 RETURN
2050 '
2060 '********** Zuggenerator
2070 '
2080 IF spieler=1 THEN seite=0 ELSE seite=2
2090 zliste$=""
2100 FOR sp=1 TO 4
2110 FOR re=1 TO 4
2120 IF b(sp,re)=2+seite THEN GOSUB 2220 'Damen-Schlagzuege
2130 NEXT re,sp
2140 IF zliste$<>"" THEN RETURN
2150 FOR sp=1 TO 4
2160 FOR re=1 TO 4
2170 IF b(sp,re)=1+seite THEN GOSUB 2330 'Bauernzuege
2180 IF b(sp,re)=2+seite THEN GOSUB 2410 'Damenzuege
2190 NEXT re,sp
2200 RETURN
2210 '
2220 '********** Damen-Schlagzuege
2230 '
2240 FOR ri=0 TO 7
2250 x=sp+dx(ri):y=re+dy(ri)
2260 WHILE b(x,y)=0
2270 x=x+dx(ri):y=y+dy(ri)
2280 WEND
2290 GOSUB 2520 'Test auf Schlagzug
2300 NEXT ri
2310 RETURN
2320 '
2330 '********** Bauernzuege
2340 '
2350 y=re+1-seite:x=sp
2360 IF b(x,y)=0 THEN GOSUB 2570 'Eintragung in Zugliste
2370 x=sp-1:GOSUB 2520 'Test auf Schlagzug
2380 x=sp+1:GOSUB 2520
2390 RETURN
2400 '
2410 '********** Damenzuege
2420 '
2430 FOR ri=0 TO 7
2440 x=sp+dx(ri):y=re+dy(ri)
2450 WHILE b(x,y)=0
2460 GOSUB 2570 'Eintragung in Zugliste
2470 x=x+dx(ri):y=y+dy(ri)
2480 WEND
2490 NEXT ri
2500 RETURN
2510 '
2520 '********* Schlagzug moeglich ?
2530 '
2540 IF seite=0 AND b(x,y)<>3 AND b(x,y)<>4 THEN RETURN
2550 IF seite=2 AND b(x,y)<>1 AND b(x,y)<>2 THEN RETURN
2560 '
2570 '********* Eintragung in Zugliste
2580 '
2590 zug=(sp-1)*64+(re-1)*16+(x-1)*4+y-1
2600 zliste$=zliste$+CHR$(zug)
2610 RETURN
2620 '
2630 '******** M-Code Suchroutine
2640 '
2650 MEMORY &A5FF
2660 RESTORE 2730
2670 FOR adr=&A600 TO &A65F
2680 READ a$:a$="&"+a$:v=VAL(a$):s=s+v:POKE adr,v
2690 NEXT
2700 IF s<>12235 THEN PRINT"DATAFEHLER !":END
2710 RETURN
2720 '
2730 DATA 21,FF,FF,22,6C,A6,AF,32
2740 DATA 6E,A6,DD,E5,E1,01,0C,00
2750 DATA 11,60,A6,ED,B0,DD,2A,68
2760 DATA A6,FD,2A,6A,A6,DD,7E,00
2770 DATA DD,B6,01,C8,21,60,A6,CD
2780 DATA 49,A6,28,18,21,64,A6,CD
2790 DATA 49,A6,28,0B,DD,23,DD,23
2800 DATA FD,23,FD,23,03,18,DE,3E
2810 DATA FF,32,6E,A6,ED,43,6C,A6
2820 DATA C9,7E,DD,BE,00,C0,23,7E
2830 DATA DD,BE,01,C0,23,7E,FD,BE
2840 DATA 00,C0,23,7E,FD,BE,01,C9
2990 '
3000 'new: search in BASIC
3010 '1560 CALL &A600,@l.psn2(0),@l.psn1(0),psx2,psx1,psn2,psn1
3020 '1570 IF PEEK(&A66D)<255 THEN flag=-1:i=PEEK(&A66C)+256*PEEK(&A66D):xflag=PEEK(&A66E)
3030 'flag=0:i=-1:xflag=0
3040 for i=0 to mp
3050 if psn1=l.psn1(i) and psn2=l.psn2(i) then flag=-1:return else if psx1=l.psn1(i) and psx2=l.psn2(i) then flag=-1:xflag=1:return
3060 next
3070 i=-1
3080 return
3090 '
5740 'renum 5740
5750 '***** Modifikation "Kleiner Bruder"
5760 '
5770 'IF INKEY$=CHR$(127) THEN GOSUB 1070:CLS:END ELSE 450 '730
5780 '********** Zug Gegner V2 '1780
5790 '
5800 GOSUB 2060 'Zugliste holen
5810 IF zliste$="" THEN erg=1:RETURN
5820 zug=ASC(MID$(zliste$,INT(RND*LEN(zliste$)+1)))
5830 sp=(zug AND &C0)\64+1:re=(zug AND &30)\16+1
5840 x=(zug AND &C)\4+1:y=(zug AND 3)+1
5850 GOSUB 1170 'Zug ausfuehren
5860 RETURN
5870 '
*/ });
