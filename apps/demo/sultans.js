/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem sultans - Sultan's Maze Demo Screen
2 rem
3 rem
4 rem
1100 CLEAR:T=TIME 
1110 IF TIME-T<450 THEN 1110
1120 RESTORE 1120:BORDER 4:INK 0,0:SPEED INK 10,10:FOR i=1 TO 15:READ c:INK i,c:NEXT i:DATA 6,2,23,18,24,12,9,26,9,10,11,12,13,14,15
1125 SYMBOL AFTER 0
1130 SYMBOL 227,16,56,124,254,124,56,16,0
1140 SYMBOL 244,0,0,195,36,28,16,0,0
1150 SYMBOL 136,0,0,0,0,15,15,15,15
1160 SYMBOL 143,255,255,255,255,255,255,255,255
1170 SYMBOL 141,240,240,240,240,255,255,255,255
1180 SYMBOL 139,255,255,255,255,15,15,15,15
1190 SYMBOL 131,255,255,255,255,0,0,0,0
1200 SYMBOL 142,15,15,15,15,255,255,255,255
1210 SYMBOL 135,255,255,255,255,240,240,240,240
1220 SYMBOL 140,0,0,0,0,255,255,255,255
1230 SYMBOL 245,0,2,1,17,8,4,64,49
1240 SYMBOL 246,16,16,8,8,129,60,255,255
1250 SYMBOL 247,0,64,128,136,16,32,2,140
1260 SYMBOL 248,11,3,7,55,199,7,3,11
1270 SYMBOL 249,255,153,153,255,231,126,0,231
1280 SYMBOL 250,208,192,224,227,236,224,192,208
1290 SYMBOL 251,49,64,4,8,17,1,2,0
1300 SYMBOL 252,255,255,60,129,16,16,8,8
1310 SYMBOL 253,140,2,32,16,136,128,64,0
1320 SYMBOL 254,0,3,15,255,255,15,3,0
1330 SYMBOL 255,192,134,14,252,248,0,128,192
1340 MODE 0:INK 1,0:PAPER 4:CLS:WINDOW 1,20,1,11:PAPER 3:CLS:WINDOW 1,20,1,25:PAPER 4
1350 FOR i=202 TO 270 STEP 2:MOVE 188,i:DRAWR 265,0,6:NEXT i
1360 FOR i=272 TO 278 STEP 2:MOVE 188,i:DRAWR 19,0:MOVER 21,0:DRAWR 19,0:MOVER 147,0:DRAWR 19,0:MOVER 21,0:DRAWR 19,0:NEXT i
1370 FOR i=272 TO 280 STEP 2:MOVE 268,i:DRAWR 107,0:NEXT i
1380 FOR i=282 TO 314 STEP 2:MOVE 276,i:DRAWR 91,0:NEXT i
1390 FOR i=316 TO 320 STEP 2:MOVE 276,i:DRAWR 7,0:MOVER 13,0:DRAWR 7,0:MOVER 13,0:DRAWR 11,0:MOVER 13,0:DRAWR 7,0:MOVER 13,0:DRAWR 7,0:NEXT i
1400 s!=2:RESTORE 1560:i=1:GOSUB 1910
1410 MOVE 100,0:DRAW 300,200:MOVE 340,200:DRAW 540,0
1420 s!=1:x=280:y=230:GOSUB 2070
1430 s!=1.5:x=250:y=220:GOSUB 2070
1440 s!=2.40000000037253:x=210:y=205:GOSUB 2070
1450 s!=3.29999999981374:x=152:y=180:GOSUB 2070
1460 s!=4.40000000037253:x=80:y=140:GOSUB 2070
1470 PAPER 3:PEN 8
1480 LOCATE 2,5:PRINT CHR$(136);STRING$(2,143);CHR$(141);
1490 LOCATE 2,6:PRINT CHR$(139);STRING$(4,143);
1500 LOCATE 4,7:PRINT CHR$(131);
1510 LOCATE 13,4:PRINT CHR$(142);CHR$(135)
1520 LOCATE 18,5:PRINT STRING$(2,140);
1530 LOCATE 17,6:PRINT CHR$(142);STRING$(2,143);CHR$(141);
1540 LOCATE 17,7:PRINT CHR$(139);STRING$(3,143);
1550 LOCATE 18,8:PRINT STRING$(2,131);
1560 DATA 1,1,1,3,-68,0,3,0,40,3,12,0,3,0,-5,3,8,0,3,0,5,3,12,0,3,0,-5,3,8,0,3,0,5,3,12,0,3,0,-5,3,8,0,3,0,10,3,16,0,3,0,-10,3,8,0,3,0,5,3,12,0,3,0,-5,3,8,0,3,0,5,3,12,0,3,0,-5,3,8,0,3,0,5,3,12,0,3,0,-40,3,-68,0
1570 DATA 1,-24,40,3,0,20,3,6,0,3,0,-3,3,4,0,3,0,3,3,6,0,3,0,-3,3,4,0,3,0,3,3,8,0,3,0,-3,3,4,0,3,0,3,3,6,0,3,0,-3,3,4,0,3,0,3,3,6,0,3,0,-20,1,-36,-40,3,0,16,3,12,6,3,12,-6,3,0,-16,1,-4,0,3,0,15,3,-8,4,3,-8,-4,3,0,-15
1580 DATA 1,0,12,3,16,0,1,0,2,3,-16,0,1,4,2,3,8,0,3,0,-5,1,-4,0,3,0,7,1,-4,-2,3,0,-5,1,-46,10,3,2,1,3,4,0,3,0,5,3,2,1,3,2,-1,3,0,-5,3,4,0,3,2,-1,3,-2,-1,3,-4,0,3,0,-5,3,-2,-1,3,-2,1,3,0,5,3,-4,0,3,-2,1
1590 DATA 1,84,0,3,2,1,3,4,0,3,0,5,3,2,1,3,2,-1,3,0,-5,3,4,0,3,2,-1,3,-2,-1,3,-4,0,3,0,-5,3,-2,-1,3,-2,1,3,0,5,3,-4,0,3,-2,1,0,0,0
1600 s!=1:RESTORE 1610:i=8:GOSUB 1910
1610 DATA 1,12,-22,3,8,0,3,-8,10,3,0,-10,1,-16,0,3,-8,0,3,8,10,3,0,-10,1,-4,-8,3,0,-8,3,4,2,3,4,-2,3,4,2,3,4,-2,3,4,2,3,4,-2,3,0,8,3,-4,-2,3,-4,2,3,-4,-2,3,-4,2,3,-4,-2,3,-4,2
1620 DATA 1,-20,-72,3,-8,50,3,-40,40,3,16,4,3,40,-4,3,8,12,3,8,4,3,16,0,3,8,-4,3,8,-12,3,40,4,3,16,-4,3,-40,-40,3,-8,-50,3,-8,8,3,-8,-8,3,-8,8,3,-8,-8,3,-8,8,3,-8,-8,3,-8,8,3,-8,-8,0,0,0
1630 MOVE 8,188:DRAW 8,240,6:MOVE 0,208:DRAW 0,260,7:MOVE 4,210:DRAW 4,256:MOVE 8,210:DRAW 8,262:MOVE 12,208:DRAW 12,256:MOVE 16,210:DRAW 16,250
1640 MOVE 24,196:DRAW 24,214,6:MOVE 20,214:DRAW 20,254,7:MOVE 24,214:DRAW 24,260:MOVE 28,214:DRAW 28,258:MOVE 32,216:DRAW 32,254
1650 MOVE 40,192:DRAW 40,210,6:MOVE 36,212:DRAW 36,252,7:MOVE 40,210:DRAW 36,260:MOVE 40,210:DRAW 40,254:MOVE 44,212:DRAW 44,248:MOVE 48,216:DRAW 48,240
1660 MOVE 64,36:DRAW 572,36,0:MOVE 64,34:DRAW 572,34:MOVE 64,32:DRAW 572,32:MOVE 64,14:DRAW 572,14:MOVE 64,12:DRAW 572,12:MOVE 64,10:DRAW 572,10
1670 MOVE 320,300:DRAW 320,351,1
1680 MOVER 9,0:DRAWR 43,-12,0:DRAWR 0,-4:DRAWR -43,-4:DRAWR 0,20:MOVER 0,-2:DRAWR -4,0:MOVER 0,-16:DRAWR 4,0
1690 MOVER 4,0:DRAWR 0,16,1:MOVER 4,-2:DRAWR 0,-14:MOVER 4,0:DRAWR 0,12:MOVER 4,0:DRAWR 0,-10:MOVER 4,0:DRAWR 0,8:MOVER 4,0:DRAWR 0,-8:MOVER 4,0:DRAWR 0,6:MOVER 4,-2:DRAWR 0,-2:MOVER 4,0:DRAWR 0,2:MOVER 4,-2:DRAWR -1,0:MOVER -9,1:DRAWR -20,2,8
1700 FOR y=222 TO 240:MOVE 556,222:DRAW 639,y,4:NEXT y
1710 MOVE 552,223:DRAWR 23,-13,2:DRAWR 4,-10:DRAWR 20,-8:MOVER -20,8:DRAWR 24,-8:DRAWR 24,-20:MOVER 4,0:DRAWR -24,20:DRAWR 16,-20:DRAWR 16,-8:MOVER 4,0:DRAWR -16,8:MOVER 4,0:DRAWR 12,-8
1720 MOVE 540,220:DRAWR 0,4,7:MOVER 4,-2:DRAWR 0,-2
1730 MOVE 576,214:DRAWR 0,6:MOVER 4,-2:DRAWR 0,-4
1740 MOVE 596,206:DRAWR 0,8:MOVER 4,2:DRAWR 0,-12:MOVER 4,0:DRAWR 0,14:MOVER 4,-4:DRAWR 0,-10:MOVER 4,-2:DRAWR 0,8
1750 MOVER 16,-12:DRAWR 0,12:MOVER 4,4:DRAWR 0,-18:MOVER 4,-4:DRAWR 0,22
1760 PAPER 3:PEN 5:GOSUB 2010
1770 PEN 0:LOCATE 18,3:PRINT CHR$(244):LOCATE 16,4:PRINT CHR$(244):LOCATE 2,2:PRINT CHR$(244):LOCATE 4,10:PRINT CHR$(244)
1780 LOCATE 11,21:PAPER 4:PEN 13:PRINT CHR$(227):LOCATE 13,22:PEN 14:PRINT CHR$(227):LOCATE 8,22:PEN 15:PRINT CHR$(227)
1790 PAPER 0:c=0:LOCATE 3,24:PRINT " Sultan's  Maze "
1800 BORDER 4:FOR i=1 TO 15:READ c:INK i,c:NEXT i:DATA 6,2,23,18,24,12,9,26,9,10,11,12,13,14,15
1810 t=TIME
1820 WHILE TIME<t+1500
1830  FOR i=1 TO 16
1840   PEN 0.5+12*RND:LOCATE 2+i,24:PRINT MID$(" Sultan's  Maze ",i,1);
1850   INK 13,15*RND:INK 14,15*RND:INK 15,15*RND
1860  NEXT i
1870 WEND
1880 PEN 1:GOTO 2160
1890 MODE 1:BORDER 0:INK 0,0:INK 1,6:INK 2,18:PAPER 1:PEN 0
1900 '
1910 MOVE 319,199
1920 READ a,b!,c!:IF a=0 THEN RETURN
1930 b!=b!*s!:c!=c!*s!
1940 ON a GOTO 1950,1960,1970,1980
1950 MOVER b!,c!:GOTO 1920
1960 DRAW b!,c!,i:GOTO 1920
1970 DRAWR b!,c!,i:GOTO 1920
1980 MOVE b!,c!:GOTO 1920
1990 '
2000 'draw sun subroutine
2010 LOCATE 5,1:PRINT CHR$(245);CHR$(246);CHR$(247);
2020 LOCATE 5,2:PRINT CHR$(248);CHR$(249);CHR$(250);
2030 LOCATE 5,3:PRINT CHR$(251);CHR$(252);CHR$(253);
2040 RETURN
2050 '
2060 'draw filled tree
2070 FOR x1=x-8*s! TO x+8*s! STEP 4
2080  MOVE x,y:DRAW x1,y-20*s!,7:DRAW x,y-30*s!
2090 NEXT x1
2100 DRAWR 0,-6
2110 FOR x1=640-x-8*s! TO 640-x+8*s! STEP 4
2120  MOVE 640-x,y:DRAW x1,y-20*s!,7:DRAW 640-x,y-30*s!
2130 NEXT x1
2140 DRAWR 0,-6
2150 RETURN
2160 'home runner runner
2170 FOR n=1 TO 20:FOR m=0 TO 255:CALL &BD23,m:NEXT m
2175 FOR m=0 TO 40:OUT  46359,m:CALL &BD19:NEXT m,n
2180 LOCATE 1,1:CALL &BB18
2190 INK 1,24:INK 0,0:BORDER 0:MODE 2:PEN 1:PAPER 0
*/ });
