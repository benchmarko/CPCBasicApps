/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 POKE 352,PEEK(&160):ON BREAK GOSUB 10:IF PEEK(&AC08)=201 THEN v%=&B4E8:POKE-21503,195:POKE-21502,148:POKE-21501,202:ON ERROR GOTO 15:GOTO 20000 ELSE 40
2 DATA 2,TEXTEINGABE,3,Text laden,3,Text speichern,2,TEXT DRUCKEN,3,Text fuer Editor definieren,3,aktuelle Zeile neu waehlen,3,linken / rechten Rand waehlen,3,Text loeschen / PRG ENDE
3 DATA 2,ZEILEN LOESCHEN,3,Zeilen duplizieren,3,Zeilen einfuegen,3,Text links- & rechtsbuendig,3,Text zentrieren,3,Text suchen und zeigen,3,Text suchen und ersetzen,2,TEXTEINGABE
8 DATA 1,1,1,0,0,1,72,123,0,0,124,0,0,125,0,0,91,0,0,92,0,0,93,0,0,126,0,0,60,0,0,62,0,0,35,0,0
10 RETURN
13 DATA &e1,&e5,&7c,&fe,&c4,&28,3,&cf,&b,&9e,&c3,&58,&cb,&c3,&62,&01
15 IF d=0 THEN 20070 ELSE 30
20 IF d=0 THEN RESUME 20070 ELSE 30
30 PRINT:PRINT"
Fehler Nr."ERR" !!":CLOSEOUT:CLOSEIN:GOSUB 420:RESUME 21000
40 v%=&B632:ON ERROR GOTO 20:RESTORE 13:FOR j=0 TO 12:READ d:POKE &162+j,d:NEXT:READ d,h,i:j=&BB48:POKE j,d:POKE j+1,h:POKE j+2,i:GOTO 20000
400 a$=INKEY$:IF a$<>CHR$(13)AND a$<CHR$(32)GOTO 400 ELSE IF a$=CHR$(94)GOTO 21000 ELSE RETURN
420 r=TIME+2800
421 a$=INKEY$:IF a$<>""THEN RETURN ELSE IF r>TIME GOTO 421 ELSE RETURN
430 MODE 2:PRINT""SPACE$(80):LOCATE 2,1:PRINT"Modus : "a$ TAB(39)"  hoechste Zeile:"f TAB(62)"  ^ = Hauptmenue";:WINDOW 2,80,3,25:RETURN
500 r=POS(#0):PRINT a$"";:LOCATE r+g-1,VPOS(#0)
505 t=LEFT$(MID$(a$,g,1)+" ",1):PRINT""t"";
510 g$=INKEY$:IF g$=""GOTO 510 ELSE IF g$="^"AND d<>0 GOTO 21000 ELSE IF((g$>=" "AND g$<="~")OR g$="£")AND g<h THEN a$=a$+STRING$(MAX(g-LEN(a$),0),CHR$(32)):MID$(a$,g,1)=g$:g=g+1:PRINT g$;:GOTO 505
515 IF g$=CHR$(242)AND g>1 THEN g=g-1:PRINT t"";:GOTO 505 ELSE IF g$=CHR$(243)AND g<h THEN g=g+1:PRINT t;:GOTO 505 ELSE IF g$=CHR$(127)AND g>1 THEN g=g-1:a$=LEFT$(a$,g-1)+RIGHT$(a$,MAX(LEN(a$)-g,0)):LOCATE r,VPOS(#0):GOTO 500
520 IF g$=CHR$(13)THEN PRINT t;:GOTO 530 ELSE 510
530 g=LEN(a$):IF g=0 THEN RETURN ELSE WHILE MID$(a$,g,1)=" ":g=g-1:IF g=0 THEN a$="":g=1
531 WEND:a$=LEFT$(a$,g):RETURN
555 g=LEN(t(a)):IF g=0 GOTO 557 ELSE WHILE MID$(t(a),g,1)=" ":g=g-1:IF g=0 THEN t(a)="":g=1
556 WEND
557 t(a)=LEFT$(t(a),g):WHILE t(f)="":f=f-1:WEND:RETURN
900 LOCATE#3,1,24:PRINT#3,"";:IF PEEK(&AC00)=0 THEN PRINT#3," SHIFT & ð Textanfang  ñ Textende  ó Z.-Ende  ò Z.-Anfang    (TAB)ulator setzen":PRINT#3," CTRL  & (H)aupt-(T)ext-(D)iskmenu (N)achl. (L)oesch. (E)inf. (R)ech. (B)laett.";:RETURN
910 FOR i=1 TO 9:PRINT#3,"f"RIGHT$(STR$(i),1)" "LEFT$(w(i)+SPACE$(12),12)" ";:NEXT:PRINT#3,"COPY "LEFT$(w(0)+SPACE$(10),10)""CHR$(24);:RETURN
1000 REM
1010 r=0:POKE fc,0:WINDOW#1,1,80,3,23:PRINT" Modus : Texteingabe"SPC(11)"Spalte"SPC(6)"Zeile"SPC(6)"hoechste besch. Zeile"t(0)"
1011 POKE &AC00,0:GOSUB 900
1015 WINDOW SWAP 0,1:PEN 1:PAPER 0
1020 FOR i=c TO MIN(c+20,f):LOCATE 1,i-c+1:PRINT t(i);:NEXT
1040 IF a-c=21 THEN LOCATE 1,22:c=c+1:PRINT LEFT$(t(a)+CHR$(32),80);:LOCATE b,a-c+1
1041 IF a-c<0 THEN LOCATE 1,1:c=c-1:PRINT CHR$(11)t(a):LOCATE b,a-c+1
1045 LOCATE b,a-c+1:CALL &BB8A
1050 WINDOW SWAP 0,1:LOCATE 39,1:PRINT USING"##";b:LOCATE 50,1:PRINT USING"###";a:LOCATE 77,1:PRINT USING"###";f:WINDOW SWAP 0,1
1060 t=INKEY$:IF t=""GOTO 1060
1065 IF b=d-5 AND t>=" "AND t<="~"THEN SOUND 1,30,0,10,1
1070 IF(t>=" "AND t<="~")OR t="£"THEN PRINT t;:t(a)=t(a)+SPACE$(MAX(b-LEN(t(a)),0)):MID$(t(a),b,1)=t:IF b=d THEN GOTO 1300 ELSE b=b+1:f=MAX(a,f):GOTO 1045
1100 IF t="ó"AND(a<e OR b<d)THEN CALL &BB8D:IF b<d THEN b=b+1:GOTO 1040 ELSE GOSUB 555:b=dl:a=a+1:GOTO 1040
1110 IF t="ò"AND(a>1 OR b>dl)THEN CALL &BB8D:IF b>dl THEN b=b-1:GOTO 1040 ELSE GOSUB 555:b=d:a=a-1:GOTO 1040
1120 IF t="ñ"AND a<e THEN GOSUB 555:CALL &BB8D:a=a+1:GOTO 1040
1130 IF t="ð"AND a>1 THEN GOSUB 555:CALL &BB8D:a=a-1:GOTO 1040
1140 IF t=CHR$(13)AND a<e THEN GOSUB 555:CALL &BB8D:a=a+1:b=dl:GOTO 1040
1150 IF t=CHR$(127)AND b>dl THEN CALL &BB8D:b=b-1:IF b<=LEN(t(a))THEN t(a)=LEFT$(t(a),b-1)+MID$(t(a),b+1,d-b)+" "+MID$(t(a),d+1):GOSUB 555:PRINT""MID$(t(a),b,d-b)" ";:GOTO 1045 ELSE PRINT" ";:GOTO 1045
1160 IF t=""AND LEN(t(a))>=b AND b<d THEN t(a)=LEFT$(LEFT$(t(a),b-1)+" "+MID$(t(a),b,d-b)+MID$(t(a),d+1),80):PRINT MID$(t(a),b);:GOTO 1045
1170 IF t=CHR$(16)AND b<d THEN CALL &BB8D:b=b+1:PRINT"	";:CALL &BB8A:t=CHR$(127):GOTO 1150
1180 IF t=""THEN 1440
1190 IF t=""AND f>=a THEN 1450
1200 IF t="	"AND b<d THEN CALL &BB8D:g=b+1:WHILE MID$(t(0),g,1)=CHR$(154):g=g+1:WEND:b=MIN(g,d):GOTO 1045
1205 IF t="à"AND b<=LEN(t(a))THEN CALL &BB8D:MID$(t(a),b,MIN(d-b,LEN(t(a))-b)+1)=SPACE$(MIN(d-b,LEN(t(a))-b)+1):GOSUB 555:PRINT CHR$(13)t(a)SPACE$(80-LEN(t(a)));:a=MIN(a+1,e):b=dl:GOTO 1040
1210 IF t="á"AND b>dl AND b<d THEN MID$(t(0),b,1)=CHR$(154+77*(1-INT((ASC(MID$(t(0),b,1)))/231))):LOCATE#6,2,1:PRINT#6,t(0):GOTO 1060
1215 IF t=""THEN POKE &AC00,1-PEEK(&AC00):GOSUB 900:GOTO 1060
1220 GOSUB 555:IF t=""THEN GOTO 1400
1230 IF t=""AND t(a)<>""THEN g=a:k=d-dl:l=2:GOSUB 2650:PRINT CHR$(13)t(a)SPACE$(80-LEN(t(a)));:a=MIN(a+1,e):b=dl:GOTO 1040
1240 IF t="ú"AND b<d-4 THEN i=b:g=d:GOSUB 2960 ELSE IF t="û"AND b>dl+4 THEN i=dl:g=b:GOSUB 2960 ELSE IF t="ù"THEN GOSUB 2950
1241 IF INSTR("úûùá",t)<>0 THEN LOCATE#6,2,1:PRINT#6,t(0):GOTO 1060
1275 IF t="÷"THEN CALL &BB8D:b=MAX(MIN(LEN(t(a))+1,d),dl):GOTO 1045
1276 IF t="ö"THEN CALL &BB8D:b=dl:GOTO 1045
1279 IF t=""THEN k=-1:GOTO 10001
1280 IF t=""GOTO 21000
1281 IF t=""AND f>0 GOTO 22000 ELSE IF t=""GOTO 23000
1282 IF t="ô"AND a>1 THEN c=1:a=c:CLS:GOTO 1020
1283 IF t="õ"AND a<f THEN c=MAX(1,MIN(e-20,f-10)):a=f:CLS:GOTO 1020
1284 IF t=""AND a<e-20 THEN c=MIN(e-20,c+20):a=c:CLS:GOTO 1020
1289 IF t=CHR$(27)THEN LOCATE#3,25,1:IF PEEK(v%)=0 THEN PRINT#3,"CAPS":POKE v%,255 ELSE PRINT#3,"    ":POKE v%,0
1290 SOUND 1,1250,10:GOTO 1060
1299 REM
1300 IF a=e THEN SOUND 1,88:SOUND 2,84:GOTO 1045 ELSE j=0:FOR i=d TO MAX(d-30,dl)STEP-1:t=MID$(t(a),i,1):IF t=" "OR t="-"OR t=","OR t="."OR t="?"OR t="!"THEN j=i:i=-1
1310 NEXT:IF j=0 OR j=d THEN a=a+1:b=dl:GOTO 1040 ELSE t=MID$(t(a),j+1,d-j):MID$(t(a),j+1,d-j)=SPACE$(d-j):GOSUB 555:a=a+1:f=MAX(a,f):LOCATE j+1,a-c:PRINT SPACE$(d-j);:t(a)=t(a)+SPACE$(MAX(dl+LEN(t)-LEN(t(a)),0)):MID$(t(a),dl,LEN(t))=t
1320 LOCATE 1,a-c+1:PRINT t(a)SPACE$(80-LEN(t(a)));:b=dl+LEN(t):IF a-c=21 THEN c=c+1
1330 GOTO 1045
1399 REM
1400 a$=INKEY$:g=INSTR("+-*%/=n ",a$):IF a$=""OR g=0 GOTO 1400
1405 IF g=8 GOTO 1060 ELSE IF g=7 THEN r=0:GOTO 1060
1410 IF g=6 THEN t(a)=t(a)+SPACE$(MAX(b-LEN(t(a)),0)):t(a)=LEFT$(LEFT$(t(a),b-1)+STR$(r)+RIGHT$(t(a),LEN(t(a))-b+1),d):PRINT CHR$(13)t(a);:f=MAX(a,f):b=MIN(d,b+LEN(STR$(r))):GOTO 1045
1415 t=MID$(t(a),b,20):i=1:WHILE i<20 AND MID$(t,i,1)=" ":i=i+1:WEND:WHILE i<20 AND MID$(t,i,1)<>" ":i=i+1:WEND:o=VAL(LEFT$(t,i)):IF g=1 THEN r=r+o ELSE IF g=2 THEN r=r-o ELSE IF g=3 THEN r=r*o ELSE IF g=4 AND o<>0 THEN r=r/o ELSE IF g=5 THEN r=r*o/100
1420 GOTO 1060
1440 j=b:IF dl>1 THEN b=1
1442 CALL &BB8D:f=MIN(f+1,e):i=f-1:WHILE i>a:t(i+1)=t(i):i=i-1:WEND:t(a+1)=MID$(t(a),b):t(a)=LEFT$(t(a),b-1):WINDOW#7,1,80,a-c+3,23:PRINT#7,"":PRINT#7,t(a+1)SPACE$(80-LEN(t(a+1)));:PRINT CHR$(13)t(a)SPACE$(80-LEN(t(a)));:b=j:GOTO 1045
1450 j=b:IF dl>1 THEN b=1
1452 t(e+1)="":t(a)=LEFT$(LEFT$(t(a),b-1)+t(a+1),80):i=a:WHILE i<f:i=i+1:t(i)=t(i+1):WEND:GOSUB 555:WINDOW#7,1,80,a-c+3,23:LOCATE#7,1,22-a+c:PRINT#7,t(c+20)SPACE$(80-LEN(t(c+20)));:PRINT CHR$(13)t(a)SPACE$(80-LEN(t(a)));:b=j:GOTO 1045
1500 MODE 1:PEN 3
1510 MOVE 8,38:DRAW 8,390,3:DRAW 630,390:DRAW 630,38
1520 MOVE 6,40:DRAW 6,388:DRAW 632,388:DRAW 632,40
1530 FOR g=328 TO 38 STEP-32:MOVE 8,g:DRAW 630,g,3:MOVER 0,-2:DRAW 8,g-1,3:NEXT
1540 MOVE 112,328:DRAW 112,74,3:MOVER 2,0:DRAW 114,328,3
1550 PAPER 1:LOCATE 2,2:PRINT SPC(38):LOCATE 4,2:PEN 0:PRINT"MULTITEXT CPC"SPC(12)g$:PAPER 2:PRINT"	"SPC(38):PAPER 3:PRINT:PRINT"	 "SPC(7)"¤1985 BY RAINBOW ARTS"SPC(9):PEN 2:PAPER 0:LOCATE 4,22:PRINT v1$"Hauptmenue"SPC(7)v2$"Textmenue"
1560 RETURN
1570 SPEED KEY 13,10:PEN 1
1580 LOCATE 3,2*g+6:PRINT"___"CHR$(246)
1590 a$=INKEY$:IF a$=CHR$(240)AND g=0 OR a$=CHR$(241)AND g=7 THEN 1590
1591 IF a$="1"GOTO 21000 ELSE IF a$="2"AND f>0 GOTO 22000 ELSE IF a$=CHR$(240)THEN h=g:g=g-1:GOTO 1600 ELSE IF a$=CHR$(241)THEN h=g:g=g+1:GOTO 1600
1595 IF a$=CHR$(13)THEN SPEED KEY 10,3:g=g+1:RETURN ELSE GOTO 1590
1600 LOCATE 3,2*h+6:PRINT SPC(4):GOTO 1580
2000 a$="Text definieren":GOSUB 430:PRINT v1$"COPY-Taste belegen      "v2$"Taste aus Zehnerblock belegen"
2001 PRINT"
 3  Definitionen/TAB laden   4  Def./TAB speichern"
2002 GOSUB 400:IF a$<"1"OR a$>"4"THEN 2002
2003 IF a$="2"THEN 2050 ELSE IF a$="3"THEN 2090 ELSE IF a$="4"THEN 2080
2010 PRINT"

Neuer Text ? ";:a$=w(0):h=33:g=1:GOSUB 500:KEY 140,a$:w(0)=a$:GOTO 2000
2050 PRINT"

Welche Taste ?  "v1$"-  9 "
2060 GOSUB 400:i=VAL(a$):IF i<1 OR i>9 THEN 2060
2061 a$=w(i):IF a$=""THEN a$=RIGHT$(STR$(i),1)
2070 PRINT"

Text fuer diese Taste ? ";:g=1:h=33:GOSUB 500:IF a$=""THEN a$=RIGHT$(STR$(i),1)
2071 KEY 128+i,a$:w(i)=a$::GOTO 2000
2080 PRINT"

Name ? ";:a$="def-tab":h=9:g=1:GOSUB 500:PRINT:PRINT:OPENOUT a$
2081 PRINT#9,t(0):PRINT#9,d:PRINT#9,dl:FOR g=0 TO 9:IF w(g)<>""THEN PRINT#9,w(g)ELSE PRINT#9,RIGHT$(STR$(g),1)
2082 NEXT:CLOSEOUT:GOTO 2000
2090 PRINT"

Name ? ";:a$="def-tab":h=9:g=1:GOSUB 500:PRINT:PRINT:OPENIN a$
2091 INPUT#9,t(0):INPUT#9,d:INPUT#9,dl:b=dl:FOR g=0 TO 9:LINE INPUT#9,w(g):NEXT:CLOSEIN
2092 IF w(0)<>"0"THEN KEY DEF 9,1,140:KEY 140,w(0)
2093 FOR g=1 TO 9:KEY 128+g,w(g):NEXT:GOTO 2000
2100 a$="Loeschen / Ende":GOSUB 430:PRINT"Sind Sie sicher ? ( j / n ) ";:a$="":g=1:h=2:GOSUB 500:IF a$<>CHR$(106)GOTO 21000
2105 PRINT:PRINT"

"v1$"ganzen Text loeschen":PRINT:PRINT v2$"Text ab aktueller Zeile loeschen":PRINT:PRINT v3$"Text bis aktuelle Zeile loeschen":PRINT:PRINT" 4  PROGRAMM BEENDEN"
2110 GOSUB 400:IF a$<CHR$(49)OR a$>CHR$(52)GOTO 2110
2115 IF a$=CHR$(49)THEN ERASE t:GOTO 20100 ELSE IF a$=CHR$(50)THEN i=a:j=f:f=a-1 ELSE IF a$=CHR$(51)THEN i=1:j=a-1 ELSE IF a$=CHR$(52)THEN CALL 0
2120 FOR g=i TO j:t(g)="":NEXT:PRINT:PRINT"TEXT IST GELOESCHT":GOSUB 420:GOTO 21000
2150 PEN 2:LOCATE 1,25:PRINT"> Nr der aktuellen Zeile ? ";:a$=RIGHT$(STR$(a),LEN(STR$(a))-1):h=4:g=1:GOSUB 500:i=VAL(a$):IF i<1 OR i>e THEN 2150 ELSE a=i:c=MIN(i,e-20):LOCATE 2,16:PRINT"     ":GOTO 21010
2200 a$="Zeilen loeschen":GOSUB 430:PRINT
2205 PRINT"Erste zu loeschende Zeile ?  ";:a$="1":h=4:g=1:GOSUB 500:i=VAL(a$):IF i<1 OR i>f THEN PRINT"":GOTO 2205 ELSE PRINT
2210 PRINT"
Letzte zu loeschende Zeile ? ";:a$="":g=1:GOSUB 500:j=VAL(a$):IF j<i OR j>f THEN PRINT"":GOTO 2210 ELSE FOR g=i TO f:t(g)=t(MIN(e+1,j+g-i+1)):NEXT:f=f-j+i-1:IF g>e GOTO 22000 ELSE FOR h=g TO e:t(h)="":NEXT:GOTO 22000
2300 a$="Duplizieren":GOSUB 430:PRINT
2305 PRINT"Erste zu duplizierende Zeile  ? ";:a$="1":g=1:h=4:GOSUB 500:i=VAL(a$):PRINT:PRINT"
Letzte zu duplizierende Zeile ? ";:a$="":g=1:GOSUB 500:j=VAL(a$):PRINT:PRINT"
zu duplizieren nach Zeile Nr ?  ";:a$="":g=1:GOSUB 500:h=VAL(a$)
2310 IF i<1 OR j<i OR j>e OR j-i+h>e OR h<1 THEN PRINT"":GOTO 2305 ELSE FOR g=i TO j:t(h+g-i)=t(g):NEXT:f=MAX(h+j-i,f):GOTO 22000
2400 a$="Einfuegen":GOSUB 430:PRINT
2405 PRINT"Anzahl einzufuegender Zeilen ? ";:a$="":g=1:h=4:GOSUB 500:j=VAL(a$):PRINT:PRINT"
Ab Zeile Nr ? ";:a$="1":g=1:GOSUB 500:i=VAL(a$)
2410 IF j<1 OR i<1 OR i>f THEN PRINT"":GOTO 2405
2415 IF f+j>e THEN PRINT:PRINT"
Am Textende gehen"f+j-e" Zeilen verloren. Trotzdem durchfuehren ? ( j / n )":GOSUB 400:IF a$<>"j"GOTO 22000
2420 FOR g=f TO i STEP-1:t(MIN(e,g+j))=t(g):NEXT:FOR g=i TO i+j-1:t(g)="":NEXT:f=MIN(f+j,e):GOTO 22000
2500 a$="Blocksatz":GOSUB 430:PRINT
2505 PRINT i$;:g=1:a$="1":h=4:GOSUB 500:i=VAL(a$):IF i<1 OR i>f THEN PRINT"":GOTO 2505 ELSE PRINT
2510 PRINT:PRINT j$;:g=1:a$="":GOSUB 500:j=VAL(a$):IF j<1 OR j<i OR j>f THEN PRINT"":GOTO 2510 ELSE PRINT
2515 PRINT"

Auffuellung auf wieviel Zeichen ? ";:g=1:a$=RIGHT$(STR$(d),2):h=3:GOSUB 500:k=VAL(a$):IF k<20 OR k>80 THEN PRINT"":GOTO 2515 ELSE PRINT:PRINT
2520 PRINT"Ab wieviel Zeichen soll eine Zeile bearbeitet werden ? ";:g=1:a$="40":GOSUB 500:l=VAL(a$):IF l<1 OR l>=k THEN PRINT"":GOTO 2520 ELSE PRINT:PRINT
2530 q(0)="e":ERASE q:DIM q(d-1):FOR g=i TO j:h=LEN(t(g)):IF h<l OR h>=k GOTO 2570
2535 PRINT"bearbeitete Zeile :"g""
2540 m=0:WHILE LEN(t(g))>0:n=1:WHILE MID$(t(g),n,1)<>" "AND n<LEN(t(g)):n=n+1:WEND:q(m)=LEFT$(t(g),n):t(g)=RIGHT$(t(g),LEN(t(g))-n):m=m+1:WEND
2550 IF m<>1 THEN FOR n=1 TO k-h:r=RND(1)*(m-2):q(r)=q(r)+" ":NEXT
2560 t(g)="":FOR n=0 TO m-1:t(g)=t(g)+q(n):NEXT:t(g)=LEFT$(t(g),k)
2570 NEXT:ERASE q:PRINT"

TEXT LINKS & RECHTSB]NDIG":GOSUB 420:GOTO 22000
2600 a$="Text zentrieren":GOSUB 430:PRINT
2601 PRINT v1$"Text mittig zentrieren":PRINT:PRINT v2$"Text linksbuendig ausrichten":PRINT:PRINT v3$"Text rechtsbuendig ausrichten":PRINT:PRINT
2602 GOSUB 400:IF a$<"1"OR a$>"3"THEN 2602
2603 IF a$="1"THEN k=d-dl:l=2 ELSE IF a$="2"THEN k=80:l=81 ELSE IF a$="3"THEN k=d-dl:l=1
2605 PRINT i$;:g=1:a$="1":h=4:GOSUB 500:i=VAL(a$):IF i<1 OR i>f THEN PRINT"":GOTO 2605 ELSE PRINT
2610 PRINT:PRINT j$;:a$="":g=1:GOSUB 500:j=VAL(a$):IF j<i OR j>f THEN PRINT"":GOTO 2610
2620 PRINT:PRINT:FOR g=i TO j:GOSUB 2650:PRINT"bearbeitete Zeile :"g"":NEXT
2630 PRINT"TEXT AUSGERICHTET":GOSUB 420:GOTO 22000
2650 IF t(g)=""THEN RETURN ELSE h=1:WHILE h<LEN(t(g))AND MID$(t(g),h,1)=" ":h=h+1:WEND:t(g)=SPACE$(INT((k-LEN(t(g))+h)/l)+dl-1)+MID$(t(g),h):RETURN
2700 a$="Text suchen":GOSUB 430:WINDOW 1,80,3,25
2705 PRINT" Zu suchende Textstelle ? ";:h=51:g=1:a$="":GOSUB 500:PRINT:PRINT:PRINT
2710 FOR g=1 TO f:WHILE INKEY(47)<>-1:WEND:IF INSTR(t(g),a$)<>0 THEN PRINT" "g" ":PRINT t(g)
2715 NEXT:PRINT:PRINT"

 E N D E ":CALL 47896:GOTO 22000
2800 a$="Text ersetzen":GOSUB 430:PRINT
2801 PRINT i$;:a$="1":g=1:h=4:GOSUB 500:i=VAL(a$):IF i<1 OR i>f THEN PRINT"":GOTO 2801 ELSE PRINT
2803 PRINT:PRINT j$;:a$=STR$(f):a$=RIGHT$(a$,LEN(a$)-1):g=1:GOSUB 500:j=VAL(a$):IF j<i OR j>f THEN PRINT"":GOTO 2803 ELSE PRINT
2805 PRINT"
alter Text ? ";:a$="":g=1:h=21:GOSUB 500:c$=a$:PRINT:PRINT"
neuer Text ? ";:a$="":g=1:GOSUB 500
2810 PRINT"

":FOR g=i TO j:h=INSTR(t(g),c$):IF h=0 GOTO 2870
2815 PRINT"Text vertauscht in Zeile"g"":WHILE h<=LEN(t(g))AND LEN(t(g))<200:IF MID$(t(g),h,LEN(c$))=c$ THEN t(g)=LEFT$(t(g),h-1)+a$+RIGHT$(t(g),LEN(t(g))-h-LEN(c$)+1):h=h+LEN(a$)ELSE h=h+1
2820 WEND:t(g)=LEFT$(t(g),d)
2870 NEXT:PRINT"

 E N D E ":GOSUB 420:GOTO 22000
2900 PEN 2:LOCATE 1,25:PRINT"> Linker Rand ? ";:a$=MID$(STR$(dl),2):g=1:h=3:GOSUB 500:i=VAL(a$):IF i<1 OR i>75 THEN 2900
2910 LOCATE 1,25:PRINT"> Rechter Rand ? ";:a$=MID$(STR$(d),2):g=1:h=3:GOSUB 500:g=VAL(a$):IF g<i+5 OR g>80 GOTO 2910 ELSE GOSUB 2960:LOCATE 2,18:PRINT"     ":b=dl:GOTO 21010
2950 d=80:dl=1:t(0)="ççççççç":RETURN
2960 MID$(t(0),dl,1)="ç":dl=i:MID$(t(0),dl,1)="":MID$(t(0),d,1)="ç":d=g:MID$(t(0),d,1)="":RETURN
10000 k=0
10001 a$="Laden":GOSUB 430:PRINT
10010 PRINT"Text ab welcher Zeile laden ? ";:g=1:h=4:a$="1":GOSUB 500:i=VAL(a$):IF i<1 OR i>e THEN PRINT"":GOTO 10010 ELSE PRINT:PRINT"
Textname ? ";:h=17:g=1:a$="":GOSUB 500:PRINT:PRINT:ta=a$:OPENIN a$
10020 IF i>e OR EOF THEN 10040 ELSE LINE INPUT#9,a$:IF INSTR(a$,CHR$(&1A))<>0 THEN 10040 ELSE t(i)=a$:i=i+1:GOTO 10020
10040 CLOSEIN:f=MAX(f,i):PRINT:PRINT"Text bis Zeile"i-1"geladen":GOSUB 420:IF k=-1 THEN MODE 2:GOTO 1000 ELSE 21000
10500 a$="Speichern":GOSUB 430
10510 PRINT v1$"ganzen Text speichern":PRINT:PRINT v2$"Teil des Textes speichern":WHILE a$<>CHR$(49)AND a$<>CHR$(50):GOSUB 400:WEND:PRINT:PRINT
10520 i=1:j=f:IF a$="1"GOTO 10550
10530 PRINT"Erste zu speichernde Zeile ? ";:h=4:a$="1":g=1:GOSUB 500:i=VAL(a$):IF i>f OR i<1 THEN PRINT"":GOTO 10530 ELSE PRINT:PRINT
10540 PRINT"Letzte zu speichernde Zeile ? ";:g=1:a$="":GOSUB 500:j=VAL(a$):IF j<i OR j>f THEN PRINT"":GOTO 10540 ELSE PRINT:PRINT
10550 PRINT"Textname ? ";:g=1:h=17:a$=ta:GOSUB 500:PRINT:PRINT:ta=a$:OPENOUT a$:FOR g=i TO j:PRINT#9,t(g):NEXT:CLOSEOUT:PRINT:PRINT"Text gespeichert":GOSUB 420:GOTO 21000
11999 REM
12000 a$="Druck":GOSUB 430:MID$(p,2,1)=CHR$(f):PRINT v1$"Druck  "v2$"Werte aendern"SPC(5)"Druckparameter "v3$"aendern   4  laden
"
12050 PRINT"Erste zu druckende Zeile"STRING$(3,"."):PRINT"Letzte zu druckende Zeile..":PRINT"Anzahl Exemplare"STRING$(11,"."):PRINT"Zeilenabstand doppelt"STRING$(6,".")
12055 PRINT"Tabulator"STRING$(18,"."):PRINT"Seitenvorschub"STRING$(13,"."):PRINT"Druckzeilen"STRING$(16,".")
12060 PRINT"
  D R U C K P A R A M E T E R  ":PRINT"Zeichen"SPC(6)"Code
":PRINT"{
|
}
[
\
]
~
<
>
#
12070 FOR g=1 TO 7:LOCATE 29,g+2:PRINT ASC(MID$(p,g,1)):NEXT:FOR g=0 TO 9:FOR h=0 TO 2:LOCATE 13+h*8,g+14:PRINT ASC(MID$(p,g*3+h+8,1)),:NEXT:NEXT
12075 GOSUB 400:i=VAL(a$):IF i<1 OR i>4 GOTO 12075 ELSE ON i GOTO 13000,12080,12110,12107
12080 DATA 220,220,255,1,70,1,220
12090 WINDOW 2,80,3,25:RESTORE 12080:FOR i=0 TO 6:READ j
12100 LOCATE 30,i+3:g=1:h=4:a$=STR$(ASC(MID$(p,i+1,1))):a$=RIGHT$(a$,LEN(a$)-1):GOSUB 500:k=VAL(a$):IF k<0 OR k>j GOTO 12100
12105 p=LEFT$(p,i)+CHR$(k)+RIGHT$(p,36-i):NEXT:GOTO 12075
12107 WINDOW 40,80,5,25:PRINT w$:OPENIN"druparam":p=LEFT$(p,7):FOR i=8 TO 37:INPUT#9,j:p=p+CHR$(j):NEXT:CLOSEIN:GOTO 12000
12110 FOR i=0 TO 9:FOR j=0 TO 2
12120 WINDOW 15+j*8,22+j*8,i+16,i+17:g=1:h=4:a$=STR$(ASC(MID$(p,i*3+j+8,1))):a$=RIGHT$(a$,LEN(a$)-1):GOSUB 500:k=VAL(a$):IF k<0 OR k>128 GOTO 12120
12130 p=LEFT$(p,i*3+j+7)+CHR$(k)+RIGHT$(p,29-i*3-j):NEXT:NEXT:WINDOW 40,80,5,25:PRINT"Param. speichern ? ( j/n )":GOSUB 400:IF a$="j"THEN PRINT:PRINT w$:OPENOUT"druparam":FOR i=8 TO 37:PRINT#9,ASC(MID$(p,i,1)):NEXT:CLOSEOUT:GOTO 12000 ELSE CLS:GOTO 12075
13000 WINDOW 40,80,8,25:PRINT"Datei aus MD/MA ? ( j/n )":GOSUB 400:a$=LOWER$(a$):IF a$="j"THEN q(0)="e":ERASE q:DIM q(60):PRINT"
Dateiname ? ";:a$="":g=1:h=17:GOSUB 500:OPENIN a$:INPUT#9,k:FOR h=1 TO k:LINE INPUT#9,g$:NEXT:a$="j"
13010 FOR g=1 TO ASC(MID$(p,3,1))
13020 IF a$="j"THEN FOR h=1 TO k:IF EOF THEN g=9999:GOTO 13120 ELSE LINE INPUT#9,q(h):IF INSTR(q(h),CHR$(&1A))<>0 THEN g=9999:GOTO 13120 ELSE NEXT
13030 i=0:FOR h=ASC(MID$(p,1,1))TO ASC(MID$(p,2,1)):i=i+1:IF INKEY$="^"GOTO 15000
13050 IF t(h)<>""THEN PRINT#8,SPC(ASC(MID$(p,5,1)));
13055 FOR j=1 TO LEN(t(h)):t=MID$(t(h),j,1):l=INSTR("{|}[\]~<>#^£",t):IF l=0 THEN PRINT#8,t;:GOTO 13100
13060 IF l<11 THEN PRINT#8,MID$(p,l*3+5,3);
13080 IF t="^"THEN IF a$="j"THEN j=j+2:PRINT#8,q(VAL(MID$(t(h)+" ",j-1,2)));ELSE PRINT#8,"^";
13082 IF t="£"THEN g$=MID$(t(h),j+1,12):GOTO 15100
13100 NEXT:PRINT#8:IF MID$(p,4,1)<>CHR$(0)THEN PRINT#8
13110 NEXT:GOSUB 15050
13120 NEXT
15000 IF a$="j"THEN CLOSEIN
15001 GOTO 21000
15050 IF MID$(p,6,1)<>CHR$(0)THEN j=ASC(MID$(p,7,1)):FOR h=i MOD j TO j-1:PRINT#8:NEXT
15060 RETURN
15100 GOSUB 15050:PRINT#8:FOR h=1 TO f:t(h)="":NEXT
15110 j=0:WHILE j<LEN(g$):j=j+1:IF MID$(g$,j,1)=" "THEN g$=LEFT$(g$,j-1)
15120 WEND:PRINT:PRINT" Nachladen : "g$" "CHR$(13);:f=1:OPENIN g$:WHILE f<=e AND NOT EOF:LINE INPUT#9,t(f):f=f+1:WEND:CLOSEIN:MID$(p,2,1)=CHR$(f):GOTO 13010
20000 DEFINT a-n:DEFSTR t,p,q,w:i$=" zu bearbeitende Zeile":j$="Letzte"+i$+" ? ":i$="Erste"+i$+"  ? ":w$="bitte warten":f1=22:RESTORE 8:FOR g=1 TO 37:READ h:p=p+CHR$(h):NEXT:ENV 1,10,-1,6:v1$=" 1  ":v2$=" 2  ":v3$=" 3  "
20005 a$=SPACE$(7)+"M U L T I T E X T   C P C"+SPACE$(8):BORDER 0:INK 0,0:INK 1,6:INK 2,24:INK 3,11:MODE 1:PAPER 0:CLS:t=STRING$(40,CHR$(154)):PEN 0:PAPER 1:PRINT SPC(13)"Multitext  CPC"SPC(13);
20010 PAPER 2:PRINT SPACE$(40);:PAPER 3:PRINT"   ¤1985 BY ARIOLASOFT & RAINBOW ARTS   ":g$="by Marc A. Ullrich / Thomas Wixforth":PEN 3:PAPER 0:LOCATE 1,6:PRINT:PRINT:PRINT:PRINT:PRINT t:PRINT:PRINT:PRINT t:PRINT:PRINT:PRINT t:PRINT:PRINT:PRINT t
20020 PEN 2:PRINT SPC(5)"
"v1$"DIN -   "v2$"ASCII Tastatur":PEN 2:LOCATE 1,8:FOR g=1 TO 40:FOR f=1 TO 170:NEXT:PRINT MID$(a$,g,1);:NEXT:LOCATE 3,12:FOR g=1 TO 37:FOR f=1 TO 190:NEXT:PRINT MID$(g$,g,1);:NEXT
20030 LOCATE 6,16:PRINT"umfangreiche Textverarbeitung":LOCATE 11,20:PRINT"CASSETTE VERSION V2"
20040 call &bd19:call &bd19: a$=RIGHT$(a$+LEFT$(a$,1),40):LOCATE 8,7:PRINT a$:t=LOWER$(INKEY$):IF t="1"THEN 20050 ELSE IF t="2"THEN 20060 ELSE 20040
20050 CLS:SYMBOL AFTER 91:SYMBOL 91,102,24,60,102,126,102,102,0:SYMBOL 92,102,56,108,198,198,108,56,0:SYMBOL 93,102,0,102,102,102,102,60,0:SYMBOL 123,108,0,120,12,124,204,118,0:SYMBOL 124,108,0,60,102,102,102,60,0:SYMBOL 125,0,108,0,102,102,102,62,0
20052 SYMBOL 126,0,124,102,124,102,102,124,96:KEY DEF 28,1,123,91:KEY DEF 29,1,124,92:KEY DEF 26,1,125,93:KEY DEF 43,1,122,90:KEY DEF 71,1,121,89:KEY DEF 19,1,58,59:KEY DEF 17,1,43,42:KEY DEF 32,1,48,126:KEY DEF 22,1,64,96
20060 KEY DEF 18,1,13,19,224:KEY DEF 70,0,27,27:KEY DEF 79,1,127,17:KEY DEF 68,1,9,225,249:KEY DEF 9,1,140:KEY 140,""
20070 CLS:|TAPE:OPENOUT"!d":MEMORY HIMEM-1:CLOSEOUT:|DISC:MODE 1:INK 1,22:PEN 1:IF t="2"THEN 20080 ELSE PRINT:PRINT" NEUE TASTENBELEGUNG :":PRINT:PRINT:a$="":FOR i=1 TO 12:a$=a$+"":NEXT:c$="":FOR i=1 TO 12:c$=c$+"":NEXT
20075 PRINT a$;"";:PRINT"!"CHR$(34)"#$%&'()~=£ ";:PRINT"1234567890-^ "c$"";
20076 PRINT""a$"";:PRINT"QWERTZUIOP]*  ";:PRINT"qwertzuiop}+  "c$""
20077 PRINT""a$"":PRINT" ASDFGHJKL\[;  asdfghjkl|{: "c$"";
20078 PRINT""LEFT$(a$,35)"";:PRINT"  YXCVBNM<>?`":PRINT"  yxcvbnm,./@":PRINT""LEFT$(c$,35)""
20080 PRINT" Farbeinstellung":PRINT:PRINT" "v1$"Schrift  "v2$"Bildschirm  "v3$"weiter"
20085 a$=INKEY$:IF a$="1"THEN f1=f1+1 ELSE IF a$="2"THEN f0=f0+1 ELSE IF f0>26 THEN f0=0 ELSE IF f1>26 THEN f1=0 ELSE IF f0=f1 THEN f0=f0+1 ELSE IF a$="3"GOTO 20100
20090 BORDER f0:INK 0,f0:INK 1,f1:GOTO 20085
20100 ta="":a=1:b=a:c=a:d=0:MODE 2:a$="Textformat":GOSUB 430:LOCATE#3,39,1:PRINT#3,""SPC(40)"":PRINT:PRINT SPC(8)"30-220 Zeilen moeglich"
20105 PRINT SPC(8)"gewuenschte max. Zeilenzahl ? ";:a$="72":g=1:h=4:GOSUB 500:e=VAL(a$):IF e<30 OR e>220 THEN PRINT"":GOTO 20105
20120 DIM t(e+1):f=0:GOSUB 2950
21000 g=1:GOTO 25000
21001 DI:BORDER 0:INK 0,0:INK 1,6:g$="Hauptmenue":GOSUB 1500
21010 RESTORE:FOR h=6 TO 20 STEP 2:LOCATE 10,h:READ g:PEN g:READ a$:PRINT a$:NEXT:g=0:LOCATE 1,25:PRINT SPACE$(35);
21020 PRINT"":h=0:GOSUB 1570:IF f<1 AND(g>2 AND g<5 OR g=10)THEN LOCATE 11,24:PEN 2:PRINT" KEIN TEXT VORHANDEN ":PEN 3:EI:AFTER 100 GOSUB 21050:LOCATE 3,h*2+8:PRINT SPC(4):g=0:GOTO 21020
21030 IF g<6 OR g>7 THEN MODE 2:DI:BORDER f0:INK 0,f0:INK 1,f1
21040 ON g GOTO 1000,10000,10500,12000,2000,2150,2900,2100
21050 LOCATE 8,24:PRINT SPC(25):RETURN
22000 g=2:GOTO 25000
22001 DI:BORDER 0:INK 0,0:INK 1,6:g$="Textmenue":GOSUB 1500
22010 RESTORE 3:FOR h=6 TO 20 STEP 2:LOCATE 10,h:READ g:PEN g:READ g$:PRINT g$:NEXT:g=0
22020 PRINT"":GOSUB 1570
22030 MODE 2:BORDER f0:INK 1,f1:INK 0,f0:ON g GOTO 2200,2300,2400,2500,2600,2700,2800,1000
23000 ?"line 23000 was missing!":call &bb18:g=1
25000 POKE v%,0:IF v%=&B4E8 THEN POKE 45195,140:POKE 45196,174 ELSE POKE 45167,112:POKE 45168,174
25010 ON g GOTO 21001,22001
27000 '
27010 rem mtext - Multitext CPC
27020 rem (c) 1985 BY ARIOLASOFT & RAINBOW ARTS; by Marc A. Ullrich / Thomas Wixforth
27030 rem
27040 rem Modifications: line 23000 was missing; delay in 20040
27050 '
*/ });
