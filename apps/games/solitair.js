/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem solitair - Solitaire
2 rem (c) Uwe Ganter
3 rem
4 rem
10 '************************************
20 '*****    S O L I T A I R E     *****
30 '*****    =================     *****
40 '*****    (c) by Uwe Ganter     *****
50 '*****       Januar 1985        *****
60 '************************************
70 '
80 '>>>>>>>>>> vorbereitung <<<<<<<<<<
90 '
100 e=1:t=13
110 CLS:MODE 1
120 WINDOW #1,4,20,22,24:WINDOW #2,22,38,2,25
130 SYMBOL AFTER 200
140 SYMBOL 200,&0,&8,&14,&22,&49,&22,&14,&8
150 SYMBOL 201,&0,&0,&1C,&3E,&36,&3E,&1C 
160 PRINT TAB(t);STRING$(13,CHR$(210));TAB(t);CHR$(211);" SOLITAIRE ";CHR$(209);TAB(t);STRING$(13,CHR$(208))
170 IF e<>0 THEN 960
180 '
190 '>>>>>>>>>> spielbrettaufbau <<<<<<<<<<
200 '
210 WINDOW SWAP 0,2:PAPER 3:CLS
220 PRINT CHR$(150);STRING$(15,CHR$(154));CHR$(156):FOR j=1 TO 17 STEP 16:FOR i=2 TO 23:LOCATE j,i:PRINT CHR$(149):NEXT:NEXT
230 LOCATE 1,24:PRINT CHR$(147);STRING$(15,CHR$(154));CHR$(153);:WINDOW SWAP 2,0
240 MOVE 68,330:DRAW 301,330,3:DRAW 301,99:DRAW 68,99:DRAW 68,330 
250 MOVE 44,355:DRAW 323,355:DRAW 323,76:DRAW 44,76:DRAW 44,355
260 MOVE 44,355:DRAW 68,330:MOVE 323,355:DRAW 299,330:MOVE 323,76:DRAW 301,99:MOVE 44,77:DRAW 68,101
270 FOR i=0 TO 2 STEP 2:MOVE 136,326-i*16:DRAW 232,326-i*16:NEXT:FOR i=0 TO 6 STEP 2:MOVE 72,262-i*16:DRAW 296,262-i*16:NEXT:FOR i=0 TO 2 STEP 2:MOVE 136,134-i*16:DRAW 232,134-i*16:NEXT
280 FOR i=0 TO 2 STEP 2:MOVE 72+i*16,262:DRAW 72+i*16,166:NEXT:FOR i=0 TO 6 STEP 2:MOVE 136+i*16,326:DRAW 136+i*16,102:NEXT:FOR i=0 TO 2 STEP 2:MOVE 264+i*16,262:DRAW 264+i*16,166:NEXT
290 FOR j=6 TO 18 STEP 2:FOR i=10 TO 14 STEP 2:LOCATE j,i:PRINT CHR$(200):NEXT:NEXT
300 FOR j=6 TO 18 STEP 2:FOR i=10 TO 14 STEP 2:LOCATE i,j:PRINT CHR$(200):NEXT:NEXT  
310 PEN 3:LOCATE 12,12:PRINT CHR$(201):PEN 1
320 FOR j=4 TO 20 STEP 16:FOR i=6 TO 18 STEP 2:LOCATE i,j:PRINT CHR$(i/2+46):NEXT:NEXT
330 FOR j=4 TO 20 STEP 16:FOR i=6 TO 18 STEP 2:LOCATE j,i:PRINT CHR$(i/2+62):NEXT:NEXT
340 IF d=1 THEN 400
350 '
360 '>>>>>>>>>> zug von-nach <<<<<<<<<<
370 '
380 GOSUB 1410
390 PAPER #1,3:PEN #1,2:CLS #1:PRINT #1,"Dein Zug:"
400 p=32:LOCATE #2,2,3:PRINT#2,n$:LOCATE #2,2,5:PRINT #2,"Du hast":LOCATE #2,2,7:PRINT#2,"noch 32 Steine!"
410 IF d=1 THEN 1130
420 LOCATE #1,1,3:PRINT#1,"von:  ":SOUND 1,300,10,5
430 FOR i=5 TO 6:LOCATE #1,i,3:PRINT#1,CHR$(207)     
440 GOSUB 1370
450 IF i=5 THEN IF e$<"A" OR e$>"G" THEN 440 ELSE 470
460 IF e$<"1" OR e$>"7" THEN 440 ELSE 480 
470 y=ASC(e$)-64:LOCATE #1,i,3:PRINT#1,e$:GOTO 500
480 x=ASC(e$)-48:LOCATE #1,i,3:PRINT#1,e$
490 IF f(y,x)<>1 THEN GOSUB 910:GOTO 420
500 NEXT
510 LOCATE #1,10,3:PRINT#1,"nach:  ":SOUND 1,300,10,5
520 FOR i=15 TO 16:LOCATE #1,i,3:PRINT#1,CHR$(207)
530 GOSUB 1370
540 IF i=15 THEN IF e$<"A" OR e$>"G" THEN 530 ELSE 560
550 IF e$<"1" OR e$>"7" THEN 530 ELSE 570
560 y1=ASC(e$)-64:LOCATE #1,i,3:PRINT#1,e$:NEXT
570 x1=ASC(e$)-48:LOCATE #1,i,3:PRINT#1,e$
580 '
590 '>>>>>>>>>> gueltiger zug? <<<<<<<<<<
600 '
610 IF y+x=y1+x1 THEN 910
620 IF (y+x+y1+x1)/2<>INT((y+x+y1+x1)/2) THEN 910
630 IF f((y+y1)/2,x)=-1 OR f(y,(x+x1)/2)=-1 THEN 910
640 IF f(y,(x+x1)/2)=f(y1,x1) OR f((y+y1)/2,x)=f(y1,x1) THEN 910
650 GOSUB 1250:IF d=1 THEN 1170
660 '
670 '>>>>>>>>>> spiel aus? <<<<<<<<<<
680 '
690 RESTORE 1460:FOR i=1 TO 33:READ s,r
700 IF f(s,r)=-1 THEN 770
710 IF (f(s+1,r)=1)+(f(s+2,r)=-1)=-2 THEN 420
720 IF (f(s,r+1)=1)+(f(s,r+2)=-1)=-2 THEN 420
730 IF s=1 THEN s=2
740 IF (f(s-1,r)=1)+(f(s-2,r)=-1)=-2 THEN 420
750 IF r=1 THEN r=2
760 IF (f(s,r-1)=1)+(f(s,r-2)=-1)=-2 THEN 420
770 NEXT:WINDOW SWAP 0,2
780 LOCATE 2,12:PRINT "Spiel aus!":LOCATE 2,15
790 IF p>10 THEN PRINT "Das war schwach":GOTO 850
800 IF p>5 THEN PRINT "Ein kleiner":LOCATE 2,16:PRINT"Stratege,was!!":GOTO 850
810 IF p>=3 THEN PRINT "Hervorragend!!!":GOTO 850
820 IF p=2 THEN PRINT "Spitze!":LOCATE 2,17:PRINT"Fast geschafft":GOTO 850
830 IF f(4,4)=1 THEN PRINT "Einfach toll!":LOCATE 2,16:PRINT"Ein neuer":LOCATE 2,17:PRINT"SUPERSTRATEGE":LOCATE 2,18:PRINT"*************":GOTO 850
840 PRINT "SUPER":LOCATE 2,17:PRINT"WEITER UEBEN!"
850 LOCATE 2,20:PRINT "Ein neues Spiel":LOCATE 6,21:PRINT"(J/N)":GOSUB 1370
860 IF e$="J" THEN WINDOW SWAP 2,0:GOTO 210
870 MODE 0:LOCATE 3,12:PRINT "B I S  B A L D !":PRINT:PRINT:END
880 '
890 '>>>>>>>>>> ungueltiger zug! <<<<<<<<<<
900 '
910 LOCATE 4,25:PRINT CHR$(24);" UNGUELTIGER ZUG ";CHR$(24)
920 SOUND 2,1000,40,7:FOR t=1 TO 1000:NEXT:LOCATE 4,25:PRINT SPC(17):GOTO 420
930 '
940 '>>>>>>>>>> anleitung <<<<<<<<<<
950 '
960 LOCATE 8,5:PRINT"Brauchst Du Anweisungen?";CHR$(7)
970 GOSUB 1370:IF e$="J" THEN 1010
980 CLS:LOCATE 11,10:PRINT "Name des Spielers:",CHR$(7):LOCATE 11,12:INPUT "",n$
990 CLS:d=0:e=0:t=6
1000 GOSUB 1200:GOTO 160
1010 RESTORE 1510:FOR i=1 TO 17:READ a$:GOSUB 1080:NEXT
1020 LOCATE 10,25:PRINT CHR$(24);" BITTE TASTE DRUECKEN! ";CHR$(24);CHR$(7):GOSUB 1370
1030 FOR j=5 TO 23 STEP 2:LOCATE 1,j:PRINT SPACE$(40):NEXT
1040 RESTORE 1540:FOR i=1 TO 16:READ a$:GOSUB 1080:NEXT
1050 LOCATE 10,25:PRINT CHR$(24);" BITTE (J/N) DRUECKEN ";CHR$(24);CHR$(7)
1060 e=0:t=6:GOSUB 1370
1070 IF e$="J" THEN 1120 ELSE 980
1080 LOCATE INT((40-LEN(a$))/2)+1,i+4:PRINT a$:RETURN
1090 '
1100 '>>>>>>>>>> demo-spiel <<<<<<<<<<
1110 '
1120 CLS:d=1:n$="CPC 464":GOSUB 1200:GOTO 160
1130 LOCATE #1,2,3:PRINT#1,">>DEMO-SPIEL<<"
1140 RESTORE 1590:FOR i=1 TO 31:READ x,y,x1,y1
1150 FOR j=1 TO 1500:NEXT
1160 SOUND 1,150,10,7:GOSUB 1250
1170 NEXT:CLS #2:LOCATE #2,2,5:PRINT#2,"Jetzt musst Du",," es versuchen!"
1180 PRINT#2,,,," Dein Name:";CHR$(7):LOCATE #2,1,11:INPUT #2," ",n$
1190 d=0:GOSUB 1200:GOTO 210
1200 n$=LEFT$(n$,12):n1=INT((15-LEN(n$))/2):n1$=STRING$(n1,"*"):n$=n1$+n$+n1$
1210 RETURN
1220 '
1230 '>>>>>>>>>> neue position <<<<<<<<<<
1240 '
1250 LOCATE x*2+4,y*2+4:PEN 3:PRINT CHR$(201):PEN 1
1260 LOCATE x1*2+4,y1*2+4:PRINT CHR$(200)
1270 IF x<x1 THEN f(y,x+1)=-1:LOCATE (x+1)*2+4,y*2+4
1280 IF x>x1 THEN f(y,x-1)=-1:LOCATE (x-1)*2+4,y*2+4
1290 IF y<y1 THEN f(y+1,x)=-1:LOCATE x*2+4,(y+1)*2+4
1300 IF y>y1 THEN f(y-1,x)=-1:LOCATE x*2+4,(y-1)*2+4
1310 f(y,x)=-1:f(y1,x1)=1:PEN 3:PRINT CHR$(201):PEN 1
1320 p=p-1:LOCATE #2,6,7:PEN #2,2:PRINT #2,p:PEN #2,1
1330 RETURN
1340 '
1350 '>>>>>>>>>> tastatur-abfrage <<<<<<<<<<
1360 '
1370 e$=INKEY$:IF e$="" THEN 1370 ELSE e$=UPPER$(e$):RETURN
1380 '
1390 '>>>>>>>>>> feldbestimmung <<<<<<<<<<
1400 '
1410 RESTORE 1460:FOR i=1 TO 33:READ s,r:f(s,r)=1:NEXT
1420 f(4,4)=-1:RETURN
1430 '
1440 '>>>>>>>>>> data's fuer felder <<<<<<<<<<
1450 '
1460 DATA 1,3,1,4,1,5,2,3,2,4,2,5,3,1,3,2,3,3,3,4,3,5,3,6,3,7,4,1,4,2,4,3,4,4
1470 DATA 4,5,4,6,4,7,5,1,5,2,5,3,5,4,5,5,5,6,5,7,6,3,6,4,6,5,7,3,7,4,7,5
1480 '
1490 '>>>>>>>>>> data's fuer anleitung <<<<<<<<<<
1500 '
1510 DATA "Solitaire ist ein Ein-Mann-Logik-Spiel.",,"Das Spielbrett ist wie ein Kreuz geformt",,"In jedem Loch, ausser dem mittleren,"
1520 DATA ,"befinden sich Stifte.",,"Das Ziel ist es, moeglichst viele Stifte",,"zu entfernen.Durch Huepfen in ein leeres"
1530 DATA ,"Loch wird der uebersprungene Stift ent-",,"fernt. Es sind keine diagonalen",,"Spruenge erlaubt."
1540 DATA ,"Das hoechste Ziel ist es, nur noch",,"einen Stift zu behalten.",,"Sollte dieser letzte Stift in der Mitte",,"stehen, dann bist Du ein"
1550 DATA ,"'SUPERSTRATEGE'","***************",,,,,"Moechtest Du ein DEMO-SPIEL?"
1560 '
1570 '>>>>>>>>>> data's fuer demo-spiel <<<<<<<<<<
1580 '
1590 DATA 2,4,4,4,3,6,3,4,1,5,3,5,4,4,2,4,1,4,3,4,3,4,3,6,3,7,3,5,5,7,3,7,3,2
1600 DATA 3,4,3,4,3,6,3,7,3,5,5,3,3,3,5,1,5,3,3,1,5,1,5,4,5,2,5,1,5,3,6,3,4,3
1610 DATA 3,3,5,3,5,6,5,4,1,3,3,3,7,5,5,5,4,5,6,5,7,3,7,5,7,5,5,5,5,4,5,6
1620 DATA 5,6,3,6,3,6,3,4,3,4,3,2,3,2,5,2,5,2,5,4,6,4,4,4
*/ });
