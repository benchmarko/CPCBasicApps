/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem olicrown - Olli's Crown
2 rem (c) O.Felchner, 1985
3 rem Modifications: some delays
4 rem
10 '******************************
20 '*        OLLI'S Crown        *
30 '* Amstrad/Schneider  CPC-464 *
40 '* (c) O.Felchner        1985 *
50 '*Lanferschlade 4  5990 Altena*
60 '******************************
70 REM ****SYMBOLS****
80 SYMBOL AFTER 200
90 SYMBOL 224,3,7,7,15,15,15,15,15
100 SYMBOL 225,255,249,253,252,254,254,254,254
110 SYMBOL 226,192,224,224,240,240,240,240,240
120 SYMBOL 227,15,15,31,31,63,127,255,0
130 SYMBOL 228,254,254,255,255,255,255,255,60
140 SYMBOL 229,240,240,120,56,188,158,255,0
150 SYMBOL 231,0,0,0,0,61,126,255,255
160 SYMBOL 232,0,0,56,68,130,2,2,2
170 SYMBOL 233,1,1,0,0,0,0,0,0
180 SYMBOL 234,249,249,254,124,56,0,0,0
190 SYMBOL 235,2,5,1,0,0,0,0,0 
200 SYMBOL 230,0,0,0,0,0,0,0,0
210 SYMBOL 200,224,224,64,112,56,60,30,31
220 SYMBOL 201,28,28,8,24,60,60,126,255
230 SYMBOL 202,14,14,4,12,28,32,72,208
240 SYMBOL 203,15,15,15,15,0,0,0,0
250 SYMBOL 204,255,255,255,255,0,0,0,0
260 SYMBOL 205,160,96,96,96,0,0,0,0
270 SYMBOL 206,0,127,224,239,224,224,224,224
280 SYMBOL 207,0,255,0,242,18,34,66,130
290 SYMBOL 208,0,254,2,242,154,138,154,242
300 SYMBOL 209,225,226,228,232,239,224,255,255
310 SYMBOL 210,2,2,2,2,242,0,255,255
320 SYMBOL 211,194,194,194,194,194,2,254,252
330 SYMBOL 212,0,0,96,112,120,124,125,125
340 SYMBOL 213,0,0,0,0,0,0,255,255
350 SYMBOL 214,0,0,0,3,6,118,254,255
360 SYMBOL 215,125,125,124,120,112,96,0,0
370 SYMBOL 216,255,255,4,6,2,3,0,0
380 SYMBOL 217,255,251,53,91,213,251,21,63
390 SYMBOL 218,31,15,15,31,31,31,31,31
400 SYMBOL 219,255,255,255,255,255,231,195,129
410 SYMBOL 220,240,240,240,240,240,240,240,240
420 SYMBOL 221,31,31,31,31,31,31,31,31
430 SYMBOL 222,129,129,195,231,253,231,231,255
440 SYMBOL 223,240,240,240,240,240,240,240,240
450 SYMBOL 236,60,66,130,192,192,224,127,63
460 SYMBOL 237,252,126,71,71,126,124,207,199
470 SYMBOL 238,60,126,135,131,131,131,194,255
480 SYMBOL 239,35,99,97,101,109,109,109,255
490 SYMBOL 240,60,62,39,35,35,35,227,227
500 SYMBOL 241,240,96,96,96,96,112,241,255
510 SYMBOL 242,60,28,24,24,24,28,28,254
520 SYMBOL 243,62,30,12,24,16,0,0,0
530 SYMBOL 244,28,62,115,96,60,3,67,254
540 SYMBOL 245,15,63,109,115,115,109,63,15
550 SYMBOL 246,240,252,134,190,142,246,140,240
560 SPEED INK 5,5
570 INK 0,0:BORDER 0:INK 1,11:INK 2,24:INK 3,6:INK 4,18:INK 5,1:INK 6,26:INK 7,13:INK 8,18,1:INK 9,8:INK 10,15:INK 11,4:INK 12,7:INK 13,16
580 DIM ge(3)
590 cred=5:bonus=1
600 ENV 1,1,120,1,120,-1,10
610 co(1)=200:co(2)=200:co(3)=200:sucha=0
620 REM***Bildschirm***
630 MODE 0
640 DRAWR 638,0,3:DRAWR 0,398:DRAWR -638,0:DRAWR 0,-398
650 PLOT 0,380,4:DRAWR 638,0:PLOT 0,250,4:DRAWR 638,0:PLOT 212,250:DRAWR 0,128:PLOT 428,250:DRAWR 0,128
660 PLOT 200,200,6:DRAWR 240,0:DRAWR 0,30:DRAWR -240,0:DRAWR 0,-30
670 PLOT 10,10,10:DRAWR 400,0:DRAWR 0,80:DRAWR -400,0:DRAWR 0,-80:LOCATE 2,21:PEN 11:PRINT"COMBINATION"
680 PEN 1:FOR n=1 TO 9:LOCATE 16,n+14:PRINT n:NEXT:LOCATE 14,24:PRINT"CHANCE"
690 LOCATE 2,15:PEN 13:PRINT CHR$(238)+CHR$(241)+CHR$(241)+CHR$(242)+CHR$(243)+CHR$(244)+" ";:PEN 7:PRINT CHR$(236)+CHR$(237)+CHR$(238)+CHR$(239)+CHR$(240)
700 LOCATE 5,17:PEN 2:PRINT"RISIKO":LOCATE 3,19:PEN 6:PRINT"0 1 2 3 4"
710 GOTO 1050
720 REM****WALZENSIMULATION****
730 PEN 9:LOCATE 3,5:PRINT " "+CHR$(159)+" ":LOCATE 3,6:PRINT" "+" "+" "::PEN 6:LOCATE 16,5:PRINT " "+CHR$(159)+" ":LOCATE 16,6:PRINT" "+" "+" "
740 REM
750 a=206:zuf=INT(RND*16)
760 PEN 2
770 t!=time+60:LOCATE 10,5:PRINT CHR$(a)+CHR$(a+1)+CHR$(a+2):LOCATE 10,6:PRINT CHR$(a+3)+CHR$(a+4)+CHR$(a+5)
780 a$=INKEY$:a$=""
790 IF INKEY(47)=0 THEN ge(1)=a:GOTO 820
800 IF A<230 THEN A=A+6 ELSE a=200
810 while time<t!:call &bd19:wend:GOTO 770
820 kill$=INKEY$:kill$="":IF con=0 THEN FOR loop=1 TO 80:LOCATE 2,12:PEN 3:PRINT"START" ELSE 870
830 IF INKEY(18)=0 THEN con=1:LOCATE 2,12:PEN 0:PRINT"     ":GOTO 760
840 IF INKEY(47)=0 AND loop>10 THEN 860
850 NEXT
860 LOCATE 2,12:PEN 0:PRINT"     "
870 FOR lo=1 TO 100/10:call &bd19:NEXT
880 a=212:con=0:PEN 9
890 t!=time+60:LOCATE 3,5:PRINT CHR$(a)+CHR$(a+1)+CHR$(a+2):LOCATE 3,6:PRINT CHR$(a+3)+CHR$(a+4)+CHR$(a+5)
900 a$=INKEY$:a$=""
910 IF INKEY(47)=0 THEN ge(2)=a:GOTO 940
920 IF a<230 THEN a=a+6 ELSE a=200
930 while time<t!:call &bd19:wend:GOTO 890 
940 FOR lo=1 TO 100/10:call &bd19:NEXT
950 a=224:PEN 6
960 t!=time+60:LOCATE 16,5:PRINT CHR$(a)+CHR$(a+1)+CHR$(a+2):LOCATE 16,6:PRINT CHR$(a+3)+CHR$(a+4)+CHR$(a+5)
970 a$=INKEY$:a$=""
980 IF INKEY(47)=0 THEN ge(3)=a:GOTO 1250
990 IF a<230 THEN A=A+6 ELSE a=200
1000 while time<t!:call &bd19:wend:GOTO 960
1010 REM****KREDIT ABFRAGE****
1020 FOR loop =1 TO 500
1030 IF INKEY$="" THEN NEXT
1040 FOR l=1 TO 50:a$=INKEY$:a$="":NEXT:cred=cred-1:PEN 12:LOCATE 8,12:PRINT USING "##.##";cred;:PRINT"$":GOTO 730
1050 IF cred<1 THEN LOCATE 6,12:PEN 7:PRINT"No Credit!":SOUND 128,0,0,0:SOUND 1,20,100,5,1:SOUND 4,60,100,5,1:SOUND 2,140,100,5,1:GOTO 1370
1060 IF cred>=99.9 THEN cred=50
1070  PEN 12:LOCATE 8,12:PRINT USING "##.##";cred;:PRINT"$"
1080 IF bonus>=10 THEN LOCATE 14,24:PEN 8:PRINT"CHANCE":cha=1:bonus=1:ENT -1,5,-1,1:SOUND 1,200,200,5,0,1:ELSE FOR t=1 TO 9: LOCATE 16,t+14:PEN 1:PRINT t:NEXT:LOCATE 16,bonus+14:PEN 8:PRINT bonus
1090 IF cha=1 THEN BORDER 22,15:ELSE BORDER 0
1100 REM****COMBINATION****
1110 FOR j=1 TO 3
1120 zu=INT(RND*7):IF zu=1 THEN co(j)=200
1130 IF zu=2 THEN co(j)=206
1140 IF zu=3 THEN co(j)=212
1150 IF zu=4 THEN co(j)=218
1160 IF zu=5 THEN co(j)=224
1170 IF zu=6 THEN co(j)=230
1180 NEXT
1190 PEN 9:LOCATE 2,23:PRINT CHR$(co(2))+CHR$(co(2)+1)+CHR$(co(2)+2):LOCATE 2,24:PRINT CHR$(co(2)+3)+CHR$(co(2)+4)+CHR$(co(2)+5)
1200 PEN 2:LOCATE 6,23:PRINT CHR$(co(1))+CHR$(co(1)+1)+CHR$(co(1)+2):LOCATE 6,24:PRINT CHR$(co(1)+3)+CHR$(co(1)+4)+CHR$(co(1)+5)
1210 PEN 6:LOCATE 10,23:PRINT CHR$(co(3))+CHR$(co(3)+1)+CHR$(co(3)+2):LOCATE 10,24:PRINT CHR$(co(3)+3)+CHR$(co(3)+4)+CHR$(co(3)+5)
1220 IF cha=1 THEN LOCATE 16,12:PEN 7:PRINT CHR$(245)+CHR$(246) ELSE LOCATE 16,12:PEN 0:PRINT"  "
1230 FOR l=1 TO 50:a$=INKEY$:a$="":NEXT
1240 GOTO 1010
1250 REM****RISIKO****
1260 IF zuf=5 THEN ENT -1,5,-1,1:SOUND 1,200,200,5,0,1:FOR x=1 TO 200:NEXT:GOSUB 1400
1270 REM****AUSWERTUNG****
1280 IF cha=1 THEN kro=50:glei=25:aukro=12.5:auglei=10:nebglei=2.5:LOCATE 14,24:PEN 1:PRINT"CHANCE" ELSE kro=10:glei=5:aukro=2.5:auglei=2:nebglei=0.5
1290 IF ge(1)=co(1) AND ge(2)=co(2) AND ge(3)=co(3) THEN cred=(2*cred):cha=0:SOUND 1,25,100,5,1:bonus=bonus+1:GOTO 1050
1300 IF ge(1)=200 AND ge(2)=200 AND ge(3)=200 THEN SOUND 1,25,100,5,1:cha=0:cred=cred+kro:bonus=bonus+2:GOTO 1050
1310 IF ge(1)=ge(2) AND ge(2)=ge(3) THEN SOUND 1,25,100,5,1:cha=0:cred=cred+glei:bonus=bonus+1:GOTO 1050
1320 IF ge(1)=200 THEN bonus=bonus+1:SOUND 1,25,100,5,1
1330 IF ge(2)=200 AND ge(3)=200 THEN SOUND 1,25,100,5,1:cred=cred+aukro:cha=0:GOTO 1050
1340 IF ge(2)=ge(3) THEN SOUND 1,25,100,5,1:cred=cred+auglei:cha=0:GOTO 1050
1350 IF ge(2)=ge(1) OR ge(1)=ge(3) THEN SOUND 1,25,100,5,1:cha=0:cred=cred+nebglei:GOTO 1050
1360 GOTO 1050
1370 IF INKEY$="" THEN 1370
1380 RUN
1390 REM****RISIKO****
1400 con=2:LOCATE 5,17:PEN 8:PRINT"RISIKO"
1410 FOR con=0 TO 8 STEP 2
1420  IF INKEY(47)=0 THEN 1440
1430 NEXT:GOTO 1410
1440 LOCATE con+2,19:PEN 3:PRINT con/2:cred=cred+(1.5*(con/2)):FOR hi=1 TO 700:NEXT:LOCATE con+2,19:PEN 6:PRINT con/2:LOCATE 5,17:PEN 2:PRINT"RISIKO"
1450 RETURN
*/ });