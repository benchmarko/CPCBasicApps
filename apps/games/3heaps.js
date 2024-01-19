/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem 3heaps - 3 Heaps (3 Haufen)
2 rem (c) Jens Uwe Timm, 1985
3 rem
10 GOTO 4000 ' DREI HAUFEN  c1985 by Jens Uwe Timm , Hannover 
100 '*****  Computerzugberechnung 
110 lauf=0:LOCATE 9,25:PRINT"Bitte warten,ich denke nach !";CHR$(20)
120 lauf=lauf+1:rst(1)=stap(1):rst(2)=stap(2):rst(3)=stap(3)
130 csta=INT(RND*3)+1:IF stap(csta)=0 THEN 130
140 sub=INT(RND*stap(csta))+1:rst(csta)=rst(csta)-sub:r1$=BIN$(rst(1),5)
150 r2$=BIN$(rst(2),5):r3$=BIN$(rst(3),5):FOR x=1 TO 5
160 z=ASC(MID$(r1$,x,1))+ASC(MID$(r2$,x,1))+ASC(MID$(r3$,x,1))-144
170 IF z=3 OR z=1 AND lauf<120 THEN 120 ELSE NEXT x
180 PEN 2:stap(csta)=stap(csta)-sub:LOCATE csta*10+1,23
190 PRINT USING"##";stap(csta):x=csta:GOSUB 8000
200 IF stap(1)+stap(2)+stap(3)<>0 THEN 2000 ELSE LOCATE 9,25:PEN 1
210 PRINT"   Ich habe gewonnen !";CHR$(20):GOSUB 7000:sieg=-1:com=com+1
220 LOCATE 9,25:PRINT"Es steht";spi;"zu";com;
230 IF com>spi THEN PRINT"gegen"; ELSE PRINT"f";CHR$(251);"r";
240 PRINT" Dich !":GOSUB 7000:LOCATE 10,5:PEN 3
250 PRINT"Weiter mit jeder Taste ...":WHILE INKEY$="":WEND
260 LOCATE 8,5:PRINT SPACE$(30)
1000 '*****  Spielanfang - Stapel per Zufall
1010 PEN 2:FOR x=1 TO 3:stap(x)=INT(RND*15)+5:LOCATE 10*x+1,23
1020 PRINT USING"##";stap(x):GOSUB 8000:NEXT x:PEN 1
1030 LOCATE 1,25:PRINT STRING$(36," "):LOCATE 12,25
1040 IF NOT sieg THEN PRINT"Ich fange an !";CHR$(20):GOSUB 7000:GOTO 110
1050 PRINT"Du f";CHR$(254);"ngst an !";CHR$(20):GOSUB 7000
2000 '*****  Spielerzugeingabe
2010 PEN 2:zahl=0:ez=0:LOCATE 9,25:PRINT" Bitte Zug eingeben :";CHR$(20):PEN 1
2020 e$=INKEY$:IF e$="" OR e$=" " THEN 2020
2030 e$=UPPER$(e$):LOCATE 31,25:PRINT e$;
2040 IF e$="A" OR e$="B" OR e$="C" THEN stas=ASC(e$)-64:GOTO 2060
2050 LOCATE 9,25:PRINT"Falsche Eingabe !";CHR$(20):GOSUB 7000:GOTO 2000
2060 i$=INKEY$:IF i$="" OR i$=" " THEN 2060
2070 IF ASC(i$)=127 THEN 2010
2080 IF ASC(i$)=13 THEN PRINT CHR$(7):GOTO 2110
2090 IF ASC(i$)<48 OR ASC(i$)>57 THEN 2050
2100 PRINT i$;:ez=ASC(i$)-48:zahl=zahl*10+ez:GOTO 2060
2110 IF zahl>stap(stas) OR zahl<1 THEN 2050
2120 stap(stas)=stap(stas)-zahl:LOCATE 10*stas+1,23:PEN 2
2130 PRINT USING"##";stap(stas):x=stas:GOSUB 8000
2140 IF stap(1)+stap(2)+stap(3)<>0 THEN 110
2150 PEN 1:LOCATE 9,25:PRINT"   Du hast gewonnen !";CHR$(20):GOSUB 7000
2160 sieg=0:spi=spi+1:LOCATE 9,25:PRINT"Es steht";spi;"zu";com;
2170 IF com>spi THEN PRINT"gegen"; ELSE PRINT"f";CHR$(251);"r";
2180 PRINT" Dich !":GOSUB 7000:LOCATE 10,5:PEN 3
2190 PRINT"Weiter mit jeder Taste ...":WHILE INKEY$="":WEND
2200 LOCATE 8,5:PRINT SPACE$(30):GOTO 1000
3000 '*****  Spielanleitung
3010 MODE 1:INK 0,0:BORDER 1:INK 1,24:INK 2,15
3020 LOCATE 15,2:PEN 1:PRINT"DREI HAUFEN":LOCATE 8,6:PEN 2
3030 PRINT"Jeder   Spieler   mu";CHR$(252);"  ab-":LOCATE 8,8
3040 PRINT"wechselnd mindestens einen":LOCATE 8,10
3050 PRINT"Stein und  h";CHR$(253);"chstens einen"
3060 LOCATE 8,12:PRINT"ganzen Stapel nehmem.":LOCATE 8,14
3070 PRINT"Wer den letzten Zug macht,":LOCATE 8,16
3080 PRINT"hat gewonnen.":LOCATE 8,18:PRINT"Eingaben  bitte mit  ";
3090 PEN 1:PRINT"ENTER ":LOCATE 8,20:PEN 2
3100 PRINT"abschlie";CHR$(252);"en.":LOCATE 4,23:PEN 1
3110 LOCATE 4,23:PEN 1::PRINT CHR$(164);"1985 by ";
3120 PRINT"Jens Uwe Timm , Hannover":GOSUB 7010
3130 LOCATE 8,25:PEN 3:PRINT"Weiter mit jeder Taste ..."
3140 WHILE INKEY$="":WEND:RETURN
4000 '*****  Programmanfang
4010 '**    Symbol  Stapel,ae,oe,sz,ue
4020 BORDER 0:SYMBOL 255,&FF,&FF,&FF,&FF,&FF,&FF,&FF,0
4030 SYMBOL 254,&CC,0,&78,&C,&7C,&CC,&76,0
4040 SYMBOL 253,&66,0,&3C,&66,&66,&66,&3C,0 
4050 SYMBOL 252,&3C,&66,&66,&6C,&66,&66,&6C,&60
4060 SYMBOL 251,&66,0,&66,&66,&66,&66,&3E,0
4070 INK 0,0:INK 2,14:INK 3,20,10:SPEED INK 20,20:GOSUB 5000
4080 GOSUB 3000:random=TIME:DEFINT a-z
4090 l$=SPACE$(6):z$=STRING$(6,255):MODE 1:PEN 1:sieg=-1
4100 LOCATE 9,23:PRINT"A=":LOCATE 19,23:PRINT"B="
4110 LOCATE 29,23:PRINT"C=":GOTO 1010
5000 '*****  Spielekopf
5010 MODE 1:PEN 1:LOCATE 1,23:PRINT CHR$(164);" 1985 by Jens Uwe Timm  ";
5020 PRINT"Tel.0511/795396":LOCATE 14,4:PEN 1:PRINT"DREI HAUFEN"
5030 ORIGIN 1,100:DRAW 640,0,2:ORIGIN 1,120:bis=38:GOSUB 6010:ORIGIN 150,100
5040 RESTORE 5080:bis=28:GOSUB 6010:ORIGIN 350,120:RESTORE:bis=38:GOSUB 6010
5050 GOSUB 7010:GOSUB 7010:RETURN
5060 DATA 44,-18,144, 46,-16,140, 46,-14,138, 48,-12,134, 50,-10,130
5070 DATA 52,-8,126, 56,-6,122, 58,-4,118, 58,-2,116, 60,0,112
5080 DATA 60,2,112, 62,4,108, 62,6,106, 64,8,104, 64,10,102
5090 DATA 66,12,100, 66,14,98, 68,16,94, 70,18,92, 70,20,90, 72,22,86
5100 DATA 74,24,84, 74,26,82, 76,28,78, 78,30,74, 80,32,72, 82,34,68
5110 DATA 84,36,66, 84,38,64, 86,40,62, 88,42,58  
5120 DATA 90,44,54, 92,46,50, 94,48,46, 98,50,40, 102,52,34
5130 DATA 106,54,26, 112,56,16 
6000 '*****  UP waag. Linie zeichnen
6010 FOR l=1 TO bis:READ ax,az,bx:MOVE ax,az:DRAWR bx,0
6020 FOR w=1 TO 20:NEXT w:NEXT l:RETURN
7000 '***** UP Warteschleife
7010 call &bb18:return: 'FOR w=1 TO 1800:w$=INKEY$:NEXT w:RETURN 
8000 '***** UP Stapel zeichnen
8010 PEN 2:FOR i=1 TO 20:LOCATE x*10-2,i
8020 IF ABS(i-21)<=stap(x) THEN PRINT z$ ELSE PRINT l$
8030 NEXT i:RETURN
*/ });
