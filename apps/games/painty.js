/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
100 REM painty - Painty
110 REM (c)
120 REM Modifications: delays
130 REM
1000 '
1010 '
1020 '
1030 '
1040 SYMBOL AFTER 254
1050 SYMBOL 255,&7E,&DB,&FF,&DB,&66,&3C,&66,&E7
1060 SYMBOL 254,&3C,&7E,&99,&FF,&E7,&5A,&7E,&3C
1070 DEFINT a-z
1080 CLS:GOSUB 4000:GOSUB 4340
1090 FOR t=1 TO 1000
1100 a$=INKEY$:IF a$<>"" THEN t=1000
1110 NEXT
1120 DIM nam$(11),sco(11),bild(20,23)
1130 MODE 1:LOCATE 2,5
1140 PRINT"Soll mit dem Joystick (J) oder"
1150 PRINT:PRINT" mit der Tastatur (T) gesteuert werden?"
1160 ein$=INKEY$
1170 IF ein$="" THEN 1160
1180 ein$=LEFT$(UPPER$(ein$),1)
1190 IF ein$<>"J" AND ein$<>"T" THEN 1130
2000 '
2010 '
2020 '
2030 '
2040 '
2050 LOCATE 2,15:PRINT "Wird eine Spielanleitung benoetigt? J/N"
2060 a$=INKEY$:IF a$="" THEN 2060
2070 a$=LEFT$(UPPER$(a$),1)
2080 IF a$="J" THEN 2110
2090 IF a$="N" THEN 3160
2100 LOCATE 1,15:PRINT CHR$(20):GOTO 2000
2110 CLS:PRINT CHR$(10)
2120 PEN 3:PRINT " "STRING$(6,143)
2130 PRINT STRING$(2,143)" "STRING$(2,143)" "STRING$(2,143)
2140 PRINT STRING$(8,143)
2150 PRINT STRING$(2,143)" "STRING$(2,143)" "STRING$(2,143) 
2160 PRINT" " STRING$(2,143)"  "STRING$(2,143)
2170 PRINT"  " STRING$(4,143)
2180 PRINT" " STRING$(2,143)"  "STRING$(2,143) 
2190 PRINT STRING$(3,143)"  "STRING$(3,143)
2200 WINDOW #2,11,40,1,13:PAPER #2,0:WINDOW SWAP 2
2210 PEN 3:PRINT CHR$(24)"    Hallo, ich bin Painty!    "CHR$(24);
2220 PEN 3:PRINT
2230 PRINT"So schnell ich kann, rase ich ueber den Bildschirm und hin-";
2240 PRINT"terlasse eine Spur.":PRINT
2250 PRINT"Je mehr ich ausmale, umso mehrPunkte  erhalte  ich.  Ist der";
2260 PRINT "Bildschirm  voellig ausgemalt,komme  ich  in  eine neue  undschnellere Ebene."
2270 PEN 3:PRINT
2280 PRINT"Hui, das macht Spass!";
2290 WINDOW SWAP 2
2300 FOR t=1 TO 3000
2310 a$=INKEY$:IF a$<>"" THEN t=3000
2320 NEXT
2330 WINDOW #3,32,40,17,25:PAPER #3,0
2340 WINDOW SWAP 3:PEN 2
2350 PRINT"  "STRING$(4,143)
2360 PRINT" "STRING$(6,143)
2370 PRINT CHR$(143)"  "STRING$(2,143)"  "CHR$(143)
2380 PRINT STRING$(8,143)
2390 PRINT STRING$(3,143)"  "STRING$(3,143)
2400 PRINT " "CHR$(143)" "STRING$(2,143)" "CHR$(143)
2410 PRINT " "STRING$(6,143)
2420 PRINT "  "STRING$(4,143)
2430 WINDOW SWAP 3
2440 WINDOW #4,1,30,14,25:PAPER #4,0
2450 WINDOW SWAP 4:PEN 2
2460 PRINT:PRINT:PRINT CHR$(24)"       Und ich bin Eaty!      "CHR$(24);
2470 PEN 3:PRINT
2480 PRINT "Ich verfolge  Painty  und malemeine  eigene  Spur,  damit er";
2490 PRINT "moeglichst  wenig  Punkte  er-haelt. Wenn ich ihn fange, en-";
2500 PRINT "det die Spielrunde."
2510 PEN 2:PRINT:PRINT "So, und nun sieh zu, ob Du mirdavonkommst!";
2520 WINDOW SWAP 4
2530 FOR t=1 TO 3000
2540 a$=INKEY$:IF a$<>"" THEN t=3000
2550 NEXT
2560 IF ein$<>"T" THEN 3160
3000 '
3010 '
3020 '
3030 '
3040 '
3050 CLS:PEN 1:LOCATE 10,5
3060 PRINT "So bewegst Du Painty:"
3070 PEN 3:LOCATE 2,10
3080 PRINT"leertaste";TAB(14)"Fire (Start)"
3090 PRINT:PRINT TAB(6)"Q";TAB(14)"Painty malt nach oben"
3100 PRINT:PRINT TAB(6)"Z";TAB(14)"Painty malt nach unten"
3110 PRINT:PRINT TAB(6)"O";TAB(14)"Painty malt nach links"
3120 PRINT:PRINT TAB(6)"P";TAB(14)"Painty malt nach rechts"
3130 LOCATE 20,24:PEN 1
3140 PRINT"Taste druecken"
3150 CALL &BB18
3160 score=0:score1=0
3170 GOSUB 4000:GOTO 4370
4000 '
4010 '
4020 '
4030 '
4040 '
4050 MODE 0
4060 INK 0,0:PAPER 0
4070 BORDER 0:INK 1,2
4080 INK 2,6:INK 3,24
4090 CLS:PEN 1:LOCATE 6,2
4100 PRINT CHR$(150)STRING$(6,154)CHR$(156)
4110 LOCATE 6,3:PRINT CHR$(149);
4120 PEN 2:PRINT"Painty";
4130 PEN 1:PRINT CHR$(149)
4140 LOCATE 6,4
4150 PRINT CHR$(147)STRING$(6,154)CHR$(153)
4160 PRINT:PRINT:PRINT:PRINT
4170 PEN 3:PRINT" "STRING$(6,143)"      ";
4180 PEN 2:PRINT STRING$(4,143)
4190 PEN 3:PRINT STRING$(2,143)" "STRING$(2,143)" "STRING$(2,143)"   ";
4200 PEN 2:PRINT" "STRING$(6,143):PEN 3
4210 PRINT STRING$(8,143)"   ";:PEN 2
4220 PRINT CHR$(143)"  "STRING$(2,143)"  "CHR$(143)
4230 PEN 3:PRINT STRING$(2,143)" "STRING$(2,143)" "STRING$(2,143)"   ";
4240 PEN 2:PRINT STRING$(8,143)
4250 PEN 3:PRINT" "STRING$(2,143)"  "STRING$(2,143)"    ";
4260 PEN 2:PRINT STRING$(3,143)"  "STRING$(3,143)
4270 PEN 3:PRINT"  "STRING$(4,143)"     ";:PEN 2
4280 PRINT" "CHR$(143)" "STRING$(2,143)" "CHR$(143)
4290 PEN 3:PRINT" "STRING$(2,143)"  "STRING$(2,143)"    ";  
4300 PEN 2:PRINT" "STRING$(6,143)
4310 PEN 3:PRINT STRING$(3,143)"  "STRING$(3,143)"   ";   
4320 PEN 2:PRINT"  "STRING$(4,143)
4340 '
4350 '
4360 RETURN
4370 LOCATE 1,22:PEN 2
4380 PRINT"Druecke "CHR$(24)" Fire "CHR$(24)" zum Spielen"
4390 call &bd19:IF JOY(0)<>16 AND INKEY(47)=-1 THEN 4390
4500 '
4510 '
4520 '
4530 '
4540 '
4550 fertig=0:aUS=0
4560 abstand=10:level=1
4570 farbe1=2:farbe2=18
5000 '
5010 '
5020 '
5030 '
5040 '
5050 MODE 0:INK 0,0:BORDER 0
5060 PAPER 0:INK 1,24:INK 3,6
5070 zaehler=0
5080 ERASE bild:DIM bild(20,23)
5090 INK 2,farbe1:INK 4,farbe2
5100 WINDOW 1,20,1,23
5110 WINDOW #1,1,20,24,25
5120 CLS:CLS #1
5130 zeit=200
5140 s=10:z=12
5150 x=1:y=1
5160 LOCATE s,z:PEN 1
5170 PRINT CHR$(255);
5180 EVERY 50 GOSUB 7000
5190 EVERY 13-level,1 GOSUB 7500
6000 '
6010 '
6020 '
6030 '
6040 '
6050 IF zaehler>=460 THEN 9000
6060 IF ein$="T" THEN 12000
6070 while time<t!:call &bd19:wend:t!=time+50:a=JOY(0)
6080 IF fertig OR aus THEN GOSUB 8000
6100 IF a=0 THEN 6070
6110 DI:LOCATE s,z
6120 PEN 2:PRINT CHR$(143);
6130 IF bild(s,z)<>0 THEN 6200
6140 bild(s,z)=1
6150 score=score+abstand
6160 LOCATE#1,1,2
6170 PRINT#1,"Score:";score-zeit-CINT(score1/10)
6180 SOUND 2,478,2,15
6190 zaehler=zaehler+1
6200 IF bild(s,z)=2 THEN PEN 4:LOCATE s,z:PRINT CHR$(143);
6210 EI
6220 IF a=1 THEN z=z-1
6230 IF a=2 THEN z=z+1   
6240 IF a=4 THEN s=s-1     
6250 IF a=8 THEN s=s+1  
6260 IF s<1 THEN s=1   
6270 IF s>20 THEN s=20
6280 IF z<1 THEN z=1    
6290 IF z>23 THEN z=23
6300 DI:LOCATE s,z:PEN 1
6310 PRINT CHR$(255);:EI
6320 GOTO 6000
7000 '
7050 IF zeit>0 THEN zeit=zeit-1 ELSE aus=-1
7060 PEN 2:LOCATE #1,1,1
7070 PRINT#1,"ZEIT:";:zeit$="000"
7080 zei$=STR$(zeit)
7090 zei$=RIGHT$(zei$,LEN(zei$)-1)
7100 zeit$=RIGHT$(zeit$+zei$,3)
7110 PRINT#1,zeit$
7120 RETURN
7500 '
7550 DI:LOCATE x,y
7560 PEN 4:PRINT CHR$(143);
7570 IF bild(x,y)<>0 THEN 7620
7580 bild(x,y)=2
7590 score1=score1+10
7600 SOUND 2,319,2,15
7610 zaehler=zaehler+1
7620 IF bild(x,y)=1 THEN PEN 2:LOCATE x,y:PRINT CHR$(143);
7630 EI
7640 IF x=s AND y=z THEN fertig=-1
7650 i=INT(RND*2)+1
7660 IF i=2 THEN 7680
7670 IF s<x THEN x=x-1:GOTO 7690:ELSE IF s>x THEN x=x+1:GOTO 7690
7680 IF z<y THEN y=y-1 ELSE IF z>y THEN y=y+1
7690 DI:LOCATE x,y:PEN 3
7700 PRINT CHR$(254);:EI
7710 IF x=s AND y=z THEN fertig=-1
7720 RETURN
8000 '
8060 AFTER 0 GOSUB 7720
8070 AFTER 0,1 GOSUB 7720
8080 FOR i=1 TO 200
8090 MOVE 0,i:DRAW 640,i,0
8100 MOVE 0,400-i:DRAW 640,400-i,0
8110 SOUND 1,i+300,1,15
8120 NEXT
8130 GOTO 3160
9000 '
9050 AFTER 0 GOSUB 7720
9060 AFTER 0,1 GOSUB 7720
9070 abstand=abstand+5
9080 level=level+1
9090 score=score-zeit-CINT(score1/10)
9100 IF level=2 THEN farbe1=7:farbe2=8
9110 IF level=3 THEN farbe1=18:farbe2=15
9120 IF level=4 THEN farbe1=11:farbe2=17
9130 IF level=5 THEN farbe1=16:farbe2=13
9140 IF level=6 THEN farbe1=19:farbe2=9
9150 MODE 0:CLS
9160 INK 1,2,0:INK 2,24,6:INK 3,6,24
9170 FOR i=4 TO 15 STEP 2:LOCATE i,11
9180 PEN 2:PRINT CHR$(255);
9190 PEN 3:PRINT CHR$(255);:NEXT
9200 PEN 2:PRINT CHR$(255)
9210 LOCATE 4,12:PEN 3:PRINT CHR$(255)
9220 LOCATE 16,12:PRINT CHR$(255)
9230 score=score+500
9240 LOCATE 4,13:PEN 2:PRINT CHR$(255);
9250 PEN 1:PRINT" S U P E R ";
9260 PEN 2:PRINT CHR$(255)
9270 LOCATE 4,14:PEN 3:PRINT CHR$(255)
9280 LOCATE 16,14:PRINT CHR$(255);
9290 FOR i=4 TO 15 STEP 2
9300 LOCATE i,15:PEN 2:PRINT CHR$(255);
9310 PEN 3:PRINT CHR$(255);:NEXT
9320 PEN 2:PRINT CHR$(255)
9330 FOR i=1 TO 30
9340 FOR j=1 TO 3
9350 SOUND 1,500*j,5,15
9360 NEXT j,i
9370 '
9380 CLS:INK 2,2:INK 3,6
9390 LOCATE 3,8:PEN 3
9400 PRINT"Score:      ";RIGHT$("00000"+RIGHT$(STR$(score-500),LEN(STR$(score-500))-1),5)      
9410 PEN 3:PRINT
9420 PRINT"  Bonus:      00500"
9430 PEN 2:PRINT
9440 PRINT " "STRING$(17,154)
9450 PRINT:PEN 1
9460 PRINT"  New Score:  ";RIGHT$("00000"+RIGHT$(STR$(score),LEN(STR$(score))-1),5)
9470 FOR i=1 TO 1000
9480 SOUND 1,1500-i,1,15
9490 NEXT
9500 IF level=7 THEN CLS:GOTO 4500
9510 CLS:GOTO 5000
12000 '
12010 '
12050 a$=INKEY$
12060 IF aus OR fertig THEN 8000
12070 IF a$="" THEN 12050
12090 DI:LOCATE s,z
12100 pen 2:PRINT CHR$(143);
12110 IF bild(s,z)<>0 THEN 12180
12120 bild(s,z)=1
12130 score=score+abstand
12140 LOCATE#1,1,2
12150 PRINT#1,"Score:";score-zeit-CINT(score1/10)
12160 SOUND 2,478,2,15
12170 zaehler=zaehler+1
12180 IF bild(s,z)=2 THEN PEN 4:LOCATE s,z:PRINT CHR$(143);
12190 EI
12200 a$=UPPER$(a$)
12210 IF a$="Q" THEN z=z-1
12220 IF a$="Z" THEN z=z+1
12230 IF a$="O" THEN s=s-1
12240 IF a$="P" THEN s=s+1
12250 GOTO 6260
*/ });