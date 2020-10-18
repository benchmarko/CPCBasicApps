/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem cardrive - Car Drive (Autofahren)
2 rem (c)
3 rem
60 MODE 1
90 PRINT"Bitte beliebige Taste druecken"
130 CALL &BB18
170 RANDOMIZE TIME
190 CLS
200 PRINT"Einstellen der Geschwindigkeit :"
210 PRINT:PRINT:PRINT"     Langsam --->  <1>":PRINT 
220   PRINT"     Mittel  --->  <2>":PRINT
230   PRINT"     Schnell --->  <3>":PRINT:PRINT
260 PRINT"          Eingabe + <ENTER> :";
270 T$=INKEY$:IF t$="" THEN 270 ELSE t$=UPPER$(T$):ge=VAL(t$)
280 IF ge>3 OR ge<1 THEN GOSUB 2000:GOTO 190 
290 sp=400/ge:IF ge=3 THEN sp=0
300 GOTO 410
410 CLS:PRINT"Einstellen der Strassenbreite :":PRINT:PRINT
420 PRINT"     Breit   ---->  <1>":PRINT
430 PRINT"     Mittel  ---->  <2>":PRINT 
440 PRINT"     Schmal  ---->  <3>":PRINT:PRINT
480 PRINT"          Eingabe + <ENTER> :"
490 T$=INKEY$:IF t$="" THEN 490 ELSE t$=UPPER$(T$):ge=VAL(t$) 
500 IF ge>3 OR ge<1 THEN GOSUB 2000:GOTO 410
510 IF ge=1 THEN br=10 ELSE IF ge=2 THEN br=6
520 IF ge=3 THEN br=3
530 GOTO 630
630 CLS:PRINT"Hinweise zur Richtungssteuerung :":PRINT:PRINT
640 PRINT"Joystick links  : Linksfahren":PRINT
650 PRINT"Joystick rechts : Rechtsfahren":PRINT
660 PRINT"keine Eingabe   : Geradeausfahren":PRINT 
690 FOR i=1 TO 3000:IF INKEY$<>"" THEN 720 ELSE NEXT i:GOTO 720
720 st=-1:MODE 2:PRINT"Fertigmachen ! !":PRINT 
760 t=25:tg=25:b1=t-INT(br/2+0.5):b2=b1+br:s=0:m=0  
820 IF st>0 THEN 850 ELSE IF st=0 THEN 870  
840 PRINT"Zu Beginn 4 mal FEUER !":GOTO 870
850 PRINT"Zum Starten 2 mal FEUER !"
870 st=st+1
880 IF INKEY(76)=0 THEN s=s+1 
900 IF s<2 THEN 880 ELSE IF st=0 THEN 1160
920 IF JOY(0)=4 OR INKEY(8)=0 THEN sb=1:GOSUB 1090:GOTO 960
930 IF JOY(0)=8 OR INKEY(1)=0 THEN sb=2:GOSUB 1110
960 IF b1>=t OR b2<=t THEN 1370
980 PRINT TAB(b1);d$;TAB(t);"+";TAB(b2);d$;:GOSUB 1860 
1000 a=INT(5*RND(1))+1:ON a GOSUB 1050,1070,1070,1070,1050
1020 ON b GOSUB 1160,1130
1030 m=m+1:GOTO 870
1050 b=1:RETURN
1070 b=2:RETURN
1090 tg=t:t=t-1:RETURN
1110 tg=t:t=t+1:RETURN
1130 GOSUB 1280:RETURN
1160 y=INT(3*RND(1)+1):IF x=y THEN 1160 ELSE x=y
1190 IF x=1 THEN d$="<" ELSE IF x=2 THEN d$="#" ELSE d$=">"
1220 GOSUB 1280:IF st=0 THEN 760 ELSE IF st<32765 THEN 1260
1250 st=1
1260 RETURN
1280 b1=b1+x-2
1300 IF b1>=1 THEN 1320
1310 b1=1
1320 b2=b1+br:IF b2<=78 THEN 1360
1350 b1=50-br:GOTO 1320
1360 RETURN
1370 PRINT TAB(t);"*   CRASH!!"
1380 STOP
1860 REM Geschwindigkeitssteuerung
1870 FOR k=1 TO sp
1880 REM
1890 NEXT k
1900 RETURN
2000 PRINT"Falsche Eingabe ! ! !"
2010 FOR i=1 TO 1000:IF INKEY$<>"" THEN 2020 ELSE NEXT i 
2020 RETURN
*/ });
