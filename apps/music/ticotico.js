/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem ticotico - Tico-Tico no Fubá (Zequinha de Abreu)
2 rem
4 rem Modifications: some delay
5 rem
100 gosub 860
110 stop
120 '
860 'Tico-Tico
870 MODE 1
880 ENV 1,5,-0.5,20
890 RESTORE 1220
900 INK 0,0:INK 1,15:INK 2,0:INK 3,13:BORDER 0
910 REM
920 GOTO 980
930 REM
940 PEN 2:LOCATE 1,25:PRINT CHR$(24)" SOUND-DEMO "CHR$(24);:FOR X=0 TO 192:FOR Y=0 TO 16 STEP 2
950 IF TEST(X,Y)<>2 THEN 970
960 PLOT x*2+128,y+336,1
970 NEXT y,x
980 LOCATE 1,25:PRINT SPACE$(40);
990 LOCATE 15,11:PRINT CHR$(47)CHR$(92)CHR$(47)CHR$(92)CHR$(47)CHR$(92)CHR$(47)CHR$(92)CHR$(47)CHR$(92)
1000 LOCATE 15,12:PRINT CHR$(92)"TICO-TICO"CHR$(92)
1010 LOCATE 16,13:PRINT CHR$(92)CHR$(47)CHR$(92)CHR$(47)CHR$(92)CHR$(47)CHR$(92)CHR$(47)CHR$(92)CHR$(47)
1020 PEN 3:LOCATE 11,20:PRINT "Press Space to stop!"
1030 REM
1040 REM
1050 REM
1060 INK 2,c:c=c+1:IF c=27 THEN c=1
1070 at=t:READ t,ht:IF t=-1 THEN 1180
1080 IF at<>0 THEN l2=13:hht=at 
1090 IF ht<>0 THEN l=15:ht1=ht  
1100 FOR i=15 TO 10 STEP -2.5
1110 IF p=20 THEN p=10 ELSE p=20
1120 IF t>1 THEN SOUND 1,t,6,i ELSE IF t=0.1 THEN SOUND 1,t,6,0 ELSE SOUND 1,t,6,i-2,,,p
1130 IF ht1<>0 THEN SOUND 2,ht1*4,6,l:l=l-0.2 ELSE SOUND 2,0,6,0
1140 l2=l2-0.05*(12>0):SOUND 4,hht,6,12 
1150 IF INKEY(47)>=0 THEN RETURN
1160 NEXT i
1170 GOTO 1060
1180 WHILE SQ(2)>127:call &bd19:WEND: t!=time+132:while time<t!:call &bd19:wend: 'FOR i=1 TO 1000:NEXT:RUN 1060
1185 RUN 1060
1190 REM
1200 REM 
1210 REM
1220 DATA 0,0,0,0,0,0,0,0,0,0,94,0,100,0,94,0
1230 DATA 90,232,94,0,0,0,70,0,0,304,94,0,100,0,94,0
1240 DATA 90,304,94,0,0,0,74,0,0,134,94,0,100,0,94,0
1250 DATA 90,304,94,0,52,0,62,0,74,134,94,0,106,0,114,0
1260 DATA 120,232,0,0,0,0,0,0,0,304,70,0,74,0,80,0
1270 DATA 90,352,70,0,0,0,52,0,0,232,58,0,70,0,90,0
1280 DATA 94,232,70,0,0,0,58,0,0,304,58,0,62,0,66,0
1290 DATA 62,134,128,0,100,0,84,0,70,134,58,0,62,0,70,0
1300 DATA 74,304,46,0,0,0,62,0,46,134,94,0,100,0,94,0
1310 DATA 90,232,94,0,0,0,70,0,0,304,94,0,100,0,94,0
1320 DATA 90,304,94,0,0,0,74,0,0,134,94,0,100,0,94,0
1330 DATA 90,304,94,0,52,0,62,0,74,134,94,0,106,0,114,0
1340 DATA 120,232,0,0,0,0,0,0,0,304,70,0,74,0,80,0
1350 DATA 90,352,70,0,0,0,52,0,0,232,58,0,70,0,90,0
1360 DATA 94,232,70,0,0,0,58,0,0,304,58,0,62,0,66,0
1370 DATA 62,304,94,0,74,0,62,0,46,134,52,0,58,0,62,0
1380 DATA 70,232,0,292,0,304,0,400,0,460,62,0,70,0,74,0
1390 DATA 80,400,120,0,94,0,80,0,120,256,94,0,80,0,74,0
1400 DATA 70,256,0,0,90,0,0,0,0,352,62,0,70,0,74,0
1410 DATA 80,256,128,0,106,0,90,0,128,352,105,0,90,0,80,0
1420 DATA 70,400,0,0,94,0,0,0,0,256,58,0,58,0,58,0
1430 DATA 58,400,62,0,62,0,62,0,62,316,70,0,70,0,70,0
1440 DATA 62,352,90,0,90,0,90,0,90,232,62,0,62,0,62,0
1450 DATA 62,256,70,0,70,0,70,0,70,352,80,0,80,0,80,0
1460 DATA 80,256,0,0,0,0,0,0,0,400,62,0,70,0,74,0
1470 DATA 80,400,120,0,94,0,80,0,120,256,94,0,80,0,74,0
1480 DATA 70,256,0,0,90,0,0,0,0,352,62,0,70,0,74,0
1490 DATA 80,256,128,0,106,0,90,0,128,352,106,0,90,0,80,0
1500 DATA 70,400,0,0,94,0,0,0,0,256,58,0,62,0,66,0
1510 DATA 70,292,74,0,70,0,62,0,52,280,58,0,62,0,58,0
1520 DATA 46,256,80,0,58,0,46,0,38,232,42,0,44,0,46,0
1530 DATA 52,352,58,0,62,0,70,0,80,232,90,0,94,0,106,0
1540 DATA 120,400,94,0,0,0,80,0,58,0,0,0,0,0,0,0
1550 DATA 70,232,144,0,114,0,74,0,0,304,144,0,114,0,94,0
1560 DATA 84,232,144,0,114,0,94,0,0,304,144,0,114,0,94,0
1570 DATA 84,232,144,0,114,0,94,0,0,304,144,0,114,0,94,0
1580 DATA 84,305,128,0,106,0,94,0,0,134,106,0,94,0,84,0
1590 DATA 70,304,106,0,94,0,74,0,0,134,106,0,94,0,84,0
1600 DATA 84,304,128,0,106,0,94,0,0,134,106,0,94,0,84,0
1610 DATA 70,304,106,0,94,0,74,0,0,134,106,0,94,0,84,0
1620 DATA 84,232,144,0,114,0,94,0,0,304,144,0,114,0,94,0
1630 DATA 70,232,144,0,114,0,74,0,0,304,144,0,114,0,94,0
1640 DATA 84,232,144,0,114,0,94,0,0,304,144,0,114,0,94,0
1650 DATA 84,280,94,0,114,0,136,0,84,280,94,0,114,0,136,0
1660 DATA 128,134,136,0,128,0,114,0,106,280,0,0,0,0,0,0
1670 DATA 216,134,228,0,216,0,192,0,170,352,152,0,144,0,128,0
1680 DATA 114,232,106,0,100,0,94,0,84,280,94,0,106,0,114,0
1690 DATA 128,134,144,0,152,0,170,0,192,304,216,0,228,0,256,0
1700 DATA 288,232,228,0,0,0,192,0,144,0,94,0,100,0,94,0
1710 DATA 90,232,94,0,0,0,70,0,0,304,94,0,100,0,94,0
1720 DATA 90,304,94,0,0,0,74,0,0,134,94,0,100,0,94,0
1730 DATA 90,304,94,0,52,0,62,0,74,134,94,0,106,0,114,0
1740 DATA 120,232,0,0,0,0,0,0,0,304,90,0,74,0,80,0
1750 DATA 90,352,70,0,0,0,52,0,0,232,58,0,70,0,90,0
1760 DATA 94,352,70,0,0,0,58,0,0,304,58,0,62,0,66,0
1770 DATA 62,134,128,0,100,0,84,0,70,134,58,0,62,0,70,0
1780 DATA 74,304,46,0,0,0,62,0,46,134,94,0,100,0,94,0
1790 DATA 90,232,94,0,0,0,70,0,0,304,94,0,100,0,94,0
1800 DATA 90,304,94,0,0,0,74,0,0,134,94,0,100,0,94,0
1810 DATA 90,304,94,0,52,0,62,0,74,134,94,0,106,0,114,0
1820 DATA 120,232,0,0,0,0,0,0,0,304,70,0,74,0,80,0
1830 DATA 90,352,70,0,0,0,52,0,0,232,58,0,70,0,90,0
1840 DATA 94,232,70,0,0,0,58,0,0,304,58,0,62,0,66,0
1850 DATA 62,304,94,0,74,0,62,0,46,134,52,0,58,0,62,0
1860 DATA 70,232,0.1,292,0.1,304,0.1,400,0.1,460,0.1,460
1870 DATA -1,0
*/ });
