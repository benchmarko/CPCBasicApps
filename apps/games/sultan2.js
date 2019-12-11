/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
10 REM sultan2 - Sultan's Maze for the Amstrad
20 REM Copyright 1984 Gem Software
21 'Modifications: some delay; use PRINT instead of MC setting SCR ACCESS; accept also "Y" on German keyboard
22 '
30 'MEMORY &A9FF
35 DEFINT a-z:RANDOMIZE TIME:MODE 1:BORDER 0:PAPER 0:PEN 1:FOR i=0 TO 15:INK i,0,0:NEXT:INK 1,24,12:LOCATE 7,12:PRINT "Initialisation - Please Wait"
40 RESTORE 3370:words=-1:x$=""
50 WHILE x$<>"zzzzzz"
60  READ x$:words=words+1
70 WEND
80 RESTORE 100:FOR i=&AA00 TO &AA14:READ a:POKE i,a:NEXT i
90 ' (&aa00) xor a,a  jp &BC59 (SCR ACCESS: chr$(23)+chr$(0))
100 DATA &af,&c3,&59,&bc
110 ' (&aa04) ld a,1   jp &BC59 (SCR ACCESS: chr$(23)+chr$(1))
120 DATA &3e,&01,&c3,&59,&bc
130 ' (&aa09) ld hl,&C000  jp &BC05 (SCR SET OFFSET)
140 DATA &21,&00,&c0,&c3,&05,&bc
150 ' (&aa0F) ld hl,&C004  jp &BC05
160 DATA &21,&04,&c0,&c3,&05,&bc
170 DIM bm[143],bx[6],by[6],notes[70],m[6],a[4],b[4],jx[6],jy[6],lx[6],ly[6]
180 FOR i=1 TO 4:READ a,b,c:m[i]=a:a[i]=b:b[i]=c:NEXT i:m[5]=8:m[6]=1:DATA 8,0,-1,1,1,0,2,0,1,4,-1,0
190 FOR i=0 TO 6:READ a,b:bx[i]=a:by[i]=b:NEXT i:DATA 0,40,62,71,172,126,240,160,280,180,302,191,318,199
200 FOR i=15 TO 84:notes[i-14]=4095/2^(i/12):NEXT i
210 SYMBOL 244,0,0,195,36,28,16,0,0
220 SYMBOL 245,0,2,1,17,8,4,64,49
230 SYMBOL 246,16,16,8,8,129,60,255,255
240 SYMBOL 247,0,64,128,136,16,32,2,140
250 SYMBOL 248,11,3,7,55,199,7,3,11
260 SYMBOL 249,255,153,153,255,231,126,0,231
270 SYMBOL 250,208,192,224,227,236,224,192,208
280 SYMBOL 251,49,64,4,8,17,1,2,0
290 SYMBOL 252,255,255,60,129,16,16,8,8
300 SYMBOL 253,140,2,32,16,136,128,64,0
310 SYMBOL 254,0,3,15,255,255,15,3,0
320 SYMBOL 255,192,134,14,252,248,0,128,192
330 MODE 0:INK 1,0:PAPER 4:CLS:WINDOW 1,20,1,11:PAPER 3:CLS:WINDOW 1,20,1,25:PAPER 4
340 FOR i=202 TO 270 STEP 2:MOVE 188,i:DRAWR 265,0,6:NEXT i
350 FOR i=272 TO 278 STEP 2:MOVE 188,i:DRAWR 19,0:MOVER 21,0:DRAWR 19,0:MOVER 147,0:DRAWR 19,0:MOVER 21,0:DRAWR 19,0:NEXT i
360 FOR i=272 TO 280 STEP 2:MOVE 268,i:DRAWR 107,0:NEXT i
370 FOR i=282 TO 314 STEP 2:MOVE 276,i:DRAWR 91,0:NEXT i
380 FOR i=316 TO 320 STEP 2:MOVE 276,i:DRAWR 7,0:MOVER 13,0:DRAWR 7,0:MOVER 13,0:DRAWR 11,0:MOVER 13,0:DRAWR 7,0:MOVER 13,0:DRAWR 7,0:NEXT i
390 s!=2:RESTORE 550:GOSUB 4520
400 MOVE 100,0:DRAW 300,200:MOVE 340,200:DRAW 540,0
410 s!=1:x=280:y=230:GOSUB 5950
420 s!=1.5:x=250:y=220:GOSUB 5950
430 s!=2.4:x=210:y=205:GOSUB 5950
440 s!=3.3:x=152:y=180:GOSUB 5950
450 s!=4.4:x=80:y=140:GOSUB 5950
460 PAPER 3:PEN 8
470 LOCATE 2,5:PRINT CHR$(136);STRING$(2,143);CHR$(141);
480 LOCATE 2,6:PRINT CHR$(139);STRING$(4,143);
490 LOCATE 4,7:PRINT CHR$(131);
500 LOCATE 13,4:PRINT CHR$(142);CHR$(135)
510 LOCATE 18,5:PRINT STRING$(2,140);
520 LOCATE 17,6:PRINT CHR$(142);STRING$(2,143);CHR$(141);
530 LOCATE 17,7:PRINT CHR$(139);STRING$(3,143);
540 LOCATE 18,8:PRINT STRING$(2,131);
550 DATA 1,1,1,3,-68,0,3,0,40,3,12,0,3,0,-5,3,8,0,3,0,5,3,12,0,3,0,-5,3,8,0,3,0,5,3,12,0,3,0,-5,3,8,0,3,0,10,3,16,0,3,0,-10,3,8,0,3,0,5,3,12,0,3,0,-5,3,8,0,3,0,5,3,12,0,3,0,-5,3,8,0,3,0,5,3,12,0,3,0,-40,3,-68,0
560 DATA 1,-24,40,3,0,20,3,6,0,3,0,-3,3,4,0,3,0,3,3,6,0,3,0,-3,3,4,0,3,0,3,3,8,0,3,0,-3,3,4,0,3,0,3,3,6,0,3,0,-3,3,4,0,3,0,3,3,6,0,3,0,-20,1,-36,-40,3,0,16,3,12,6,3,12,-6,3,0,-16,1,-4,0,3,0,15,3,-8,4,3,-8,-4,3,0,-15
570 DATA 1,0,12,3,16,0,1,0,2,3,-16,0,1,4,2,3,8,0,3,0,-5,1,-4,0,3,0,7,1,-4,-2,3,0,-5,1,-46,10,3,2,1,3,4,0,3,0,5,3,2,1,3,2,-1,3,0,-5,3,4,0,3,2,-1,3,-2,-1,3,-4,0,3,0,-5,3,-2,-1,3,-2,1,3,0,5,3,-4,0,3,-2,1
580 DATA 1,84,0,3,2,1,3,4,0,3,0,5,3,2,1,3,2,-1,3,0,-5,3,4,0,3,2,-1,3,-2,-1,3,-4,0,3,0,-5,3,-2,-1,3,-2,1,3,0,5,3,-4,0,3,-2,1,0,0,0
590 s!=1:RESTORE 600:GOSUB 4590
600 DATA 1,12,-22,3,8,0,3,-8,10,3,0,-10,1,-16,0,3,-8,0,3,8,10,3,0,-10,1,-4,-8,3,0,-8,3,4,2,3,4,-2,3,4,2,3,4,-2,3,4,2,3,4,-2,3,0,8,3,-4,-2,3,-4,2,3,-4,-2,3,-4,2,3,-4,-2,3,-4,2
610 DATA 1,-20,-72,3,-8,50,3,-40,40,3,16,4,3,40,-4,3,8,12,3,8,4,3,16,0,3,8,-4,3,8,-12,3,40,4,3,16,-4,3,-40,-40,3,-8,-50,3,-8,8,3,-8,-8,3,-8,8,3,-8,-8,3,-8,8,3,-8,-8,3,-8,8,3,-8,-8,0,0,0
620 MOVE 8,188:DRAW 8,240,6:MOVE 0,208:DRAW 0,260,7:MOVE 4,210:DRAW 4,256:MOVE 8,210:DRAW 8,262:MOVE 12,208:DRAW 12,256:MOVE 16,210:DRAW 16,250
630 MOVE 24,196:DRAW 24,214,6:MOVE 20,214:DRAW 20,254,7:MOVE 24,214:DRAW 24,260:MOVE 28,214:DRAW 28,258:MOVE 32,216:DRAW 32,254
640 MOVE 40,192:DRAW 40,210,6:MOVE 36,212:DRAW 36,252,7:MOVE 40,210:DRAW 36,260:MOVE 40,210:DRAW 40,254:MOVE 44,212:DRAW 44,248:MOVE 48,216:DRAW 48,240
650 MOVE 64,36:DRAW 572,36,0:MOVE 64,34:DRAW 572,34:MOVE 64,32:DRAW 572,32:MOVE 64,14:DRAW 572,14:MOVE 64,12:DRAW 572,12:MOVE 64,10:DRAW 572,10
660 MOVE 320,300:DRAW 320,351,1
670 MOVER 9,0:DRAWR 43,-12,0:DRAWR 0,-4:DRAWR -43,-4:DRAWR 0,20:MOVER 0,-2:DRAWR -4,0:MOVER 0,-16:DRAWR 4,0
680 MOVER 4,0:DRAWR 0,16,1:MOVER 4,-2:DRAWR 0,-14:MOVER 4,0:DRAWR 0,12:MOVER 4,0:DRAWR 0,-10:MOVER 4,0:DRAWR 0,8:MOVER 4,0:DRAWR 0,-8:MOVER 4,0:DRAWR 0,6:MOVER 4,-2:DRAWR 0,-2:MOVER 4,0:DRAWR 0,2:MOVER 4,-2:DRAWR -1,0:MOVER -9,1:DRAWR -20,2,8
690 FOR y=222 TO 240:MOVE 556,222:DRAW 639,y,4:NEXT y
700 MOVE 552,223:DRAWR 23,-13,2:DRAWR 4,-10:DRAWR 20,-8:MOVER -20,8:DRAWR 24,-8:DRAWR 24,-20:MOVER 4,0:DRAWR -24,20:DRAWR 16,-20:DRAWR 16,-8:MOVER 4,0:DRAWR -16,8:MOVER 4,0:DRAWR 12,-8
710 MOVE 540,220:DRAWR 0,4,7:MOVER 4,-2:DRAWR 0,-2
720 MOVE 576,214:DRAWR 0,6:MOVER 4,-2:DRAWR 0,-4
730 MOVE 596,206:DRAWR 0,8:MOVER 4,2:DRAWR 0,-12:MOVER 4,0:DRAWR 0,14:MOVER 4,-4:DRAWR 0,-10:MOVER 4,-2:DRAWR 0,8
740 MOVER 16,-12:DRAWR 0,12:MOVER 4,4:DRAWR 0,-18:MOVER 4,-4:DRAWR 0,22
750 PAPER 3:PEN 5:GOSUB 5890
760 PEN 0:LOCATE 18,3:PRINT CHR$(244):LOCATE 16,4:PRINT CHR$(244):LOCATE 2,2:PRINT CHR$(244):LOCATE 4,10:PRINT CHR$(244)
770 LOCATE 11,21:PAPER 4:PEN 13:PRINT CHR$(227):LOCATE 13,22:PEN 14:PRINT CHR$(227):LOCATE 8,22:PEN 15:PRINT CHR$(227)
780 PAPER 0:c=0:LOCATE 3,24:PRINT " Sultan's  Maze "
790 BORDER 4:FOR i=1 TO 15:READ c:INK i,c:NEXT i:DATA 6,2,23,18,24,12,9,26,9,10,11,12,13,14,15
800 GOSUB 6530
810 WHILE INKEY$=""
820  FOR i=1 TO 16
830   PEN 0.5+12*RND:LOCATE 2+i,24:PRINT MID$(" Sultan's  Maze ",i,1);
840   INK 13,15*RND:INK 14,15*RND:INK 15,15*RND
845   call &bd19
850  NEXT i
860 WEND
870 '
880 MODE 1:BORDER 0:INK 0,0:INK 1,6:INK 2,18:PAPER 1:PEN 0
890 WINDOW #0,1,40,1,5:CLS:?chr$(23)+chr$(0);: 'CALL &AA00
900 LOCATE 11,2:PRINT "** Sultan's Maze **";
910 LOCATE 11,3:PRINT CHR$(164);" 1984 Gem Software";
920 LOCATE 3,4:PRINT "Coding & Design by J. Line & C. Hunt"
930 WINDOW #0,1,40,6,25:WINDOW #1,3,38,4,4:PAPER 0:PEN 2
940 LOCATE 4,6:PRINT "Do You Want Instructions ? (Y/N) ";CHR$(143):GOSUB 6530
950 call &bd19:IF INKEY(43)>-1 or inkey(71)>-1 THEN CLS:GOSUB 6060     ELSE IF INKEY(46)=-1 THEN 950
960 CLS:WINDOW #0,1,40,1,25:WINDOW #1,3,38,25,25:WINDOW #7,1,1,5,21:PAPER #1,0:PEN #1,1
970 '
980 GOSUB 2890 'maze
990 GOSUB 3220 'jewel
1000 by=10:bx=1:bf=1
1010 IF 4 AND bm[120+bx]                      THEN bx=bx+1:GOTO 1010
1020 f=1:be=102:bg=0:bb=0
1030 '
1040 LOCATE 8,21:PRINT "Difficulty Level (1-9) ? ";CHR$(143);:GOSUB 6530
1050 p$=INKEY$:IF p$<"1" OR p$>"9" THEN 1050 ELSE PRINT CHR$(8);p$:bp=ASC(p$)-48
1060 w=970-bp*140-560*(bp>5):bv=(bp>5):FOR i=1 TO 1000/100:call &bd19:NEXT i
1070 dummy=REMAIN(0):dummy=REMAIN(1)
1080 dummy=REMAIN(2):dummy=REMAIN(3)
1090 EVERY w,0 GOSUB 4110 'move ghost
1100 EVERY 5,1 GOSUB 5790 'move plane
1110 ON BREAK GOSUB 6590
1120 p=0.5+10*RND:q=5.5+3*RND 
1130 GOSUB 2280 'print
1140 score=0
1150 ' main loop
1160 IF bp THEN bp=ASC(INKEY$+CHR$(0)):GOTO 1160 ELSE bp=ASC(INKEY$+CHR$(0))
1170 IF be<1         THEN i=1:GOTO 1360
1180 IF by=11        THEN i=3:GOTO 1360
1190 IF INKEY(67)>-1 THEN i=4:GOTO 1360
1200 IF bx=p AND by=q THEN i=2:GOTO 1360
1210 IF be<bg*20 THEN GOSUB 4020
1220 IF bp=49 THEN GOSUB 4270:GOTO 1160
1230 IF bp=50 THEN GOSUB 2280:GOTO 1160
1240 IF bp=51 THEN GOSUB 4020:GOTO 1160
1250 IF bp=52 OR bp=54 THEN 1320
1260 IF bp=53 THEN GOSUB 5050:GOTO 1160
1270 IF bp=13 THEN GOSUB 5480
1280 IF bp<55 OR bp>57 THEN 1160 
1290 IF m[bf+1] AND bm[bx+by*12] THEN 1160
1300 by=by+(bf=1)-(bf=3)
1310 bx=bx+(bf=4)-(bf=2):be=be-1-bg
1320 bf=bf-(bp=54 OR bp=57)                       +(bp=52 OR bp=55)
1330 bf=bf+4*((bf=5)-(bf=0)):ghost.drawn!=0:face.drawn=0:GOSUB 3670 '3d
1340 GOTO 1160
1350 'the end
1360 dummy=REMAIN(0):dummy=REMAIN(1):dummy=REMAIN(2):dummy=REMAIN(3)
1370 ON i GOSUB 1490,1580,1670,2240
1380 LOCATE 2,5:PRINT"Your score on this occasion was ";score
1390 IF score>hiscore THEN LOCATE 2,7:PRINT"Well done !!  That's a new Hi-Score !!":FOR i=1 TO 6:FOR j=1 TO 10:SOUND 1,200-j*5,3:NEXT j:NEXT i:hiscore=score
1400 LOCATE 12,9:PRINT"Hi-Score :- ";hiscore
1410 LOCATE 9,21:PRINT"Another game (Y/N) ? ";CHR$(143);CHR$(8);
1420 call &bd19:IF INKEY(46)>-1 THEN GOSUB 6530:PAPER 0:PEN 2:MODE 1:END ELSE IF INKEY(43)=-1 and inkey(71)=-1 THEN 1420
1430 PRINT "Yes":LOCATE 11,23:PRINT"Same maze (Y/N) ? ";CHR$(143);CHR$(8);:GOSUB 6530
1440 call &bd19:IF INKEY(46)>-1 THEN PRINT "No":GOTO 980
1450 IF INKEY(43)>-1 THEN PRINT "Yes":GOTO 990
1460 GOTO 1440
1470 '
1480 'exhausted  
1490 FOR i=1 TO 25
1500  SOUND 1,100+10*i,10
1510  CALL &AA0F:FOR z=1 TO 50/10:call &bd19:NEXT z
1520  CALL &AA09:FOR z=1 TO 50/10:call &bd19:NEXT z
1530 NEXT i
1540 CLS:PRINT "Too bad !! You died of exhaustion before        completing your task !!":score=0
1550 RETURN
1560 '
1570 'dead
1580 FOR i=1 TO 25
1590 SOUND 1,100+200*RND,10
1600  CALL &AA0F:FOR z=1 TO 50/10:call &bd19:NEXT z
1610  CALL &AA09:FOR z=1 TO 50/10:call &bd19:NEXT z
1620 NEXT i
1630 CLS:PRINT "Too bad !!  The Guardian's Ghost got you before you could complete your task !!":score=0
1640 RETURN
1650 '
1660 'got 'em all
1670 LOCATE 10,21:PRINT"Congratulations !! You":LOCATE 6,22:PRINT"have retrieved all the jewels !"
1680 RESTORE 1730
1690 READ c,n,d:IF c=0 THEN GOTO 2000
1700 IF c AND 1 THEN v=13 ELSE v=12
1710 SOUND c,notes[n],d,v
1720 GOTO 1690
1730 DATA 131,30,50,         132,30,150
1740 DATA  1,32,50, 2,29,50
1750 DATA  1,34,50, 2,28,50
1760 DATA  1,35,60, 2,27,60,   4,23,30
1770 DATA  4,30,30
1780 DATA  1,30,90, 2,23,90,   4,27,30
1790 DATA  4,30,30,4,23,30
1800 DATA  1,35,30, 2,32,30,   4,30,30
1810 DATA  1,34,30, 2,31,30,   4,27,30
1820 DATA  1,35,30, 2,30,30,   4,30,30
1830 DATA  1,37,60, 2,29,60,   4,25,30
1840 DATA  4,32,30
1850 DATA  1,32,90, 2,25,90,   4,29,30
1860 DATA  4,32,30,4,25,30
1870 DATA  1,32,30, 4,32,30
1880 DATA  1,34,30, 4,29,30
1890 DATA  1,35,30, 4,32,30
1900 DATA  1,39,45, 4,25,30
1910 DATA  1,37,12, 1,0,3, 4,32,30
1920 DATA  1,37,30, 4,28,30
1930 DATA  1,35,27, 1,0,3, 4,32,30
1940 DATA  1,35,30, 4,18,30
1950 DATA  1,34,30, 4,25,30
1960 DATA  1,32,30, 4,22,30
1970 DATA  1,34,30, 4,25,30
1980 DATA  1,35,120,4,23,120
1990 DATA  0,0 ,0 
2000 LOCATE 2,24:PRINT "The secret word letters are :- ";word1$
2010 LOCATE 7,25:PRINT "Enter guess #";
2020 PLOT 700,500,2
2030 FOR i=1 TO 5
2040  word1$="??????":c=1
2050  LOCATE 20,25:PRINT USING "# ";i;:PRINT word1$;
2060  PRINT CHR$(23);CHR$(5);:TAG:MOVE 320+c*16,15:PRINT CHR$(143);:TAGOFF:PRINT CHR$(23);CHR$(4);
2070  c$=INKEY$:IF c$="" THEN 2070
2080  c$=UPPER$(c$)
2090  IF c$=CHR$(13) THEN 2160
2100  IF c$=CHR$(16) THEN word1$=LEFT$(word1$,c-1)+RIGHT$(word1$+"?",7-c):GOTO 2050
2110  IF c$=CHR$(127) AND c>1 THEN word1$=LEFT$(word1$,c-2)+RIGHT$(word1$+"?",8-c):c=c-1:GOTO 2050
2120  IF c$=CHR$(242) THEN c=c+(c>1):GOTO 2050
2130  IF c$=CHR$(243) THEN c=c-(c<6):GOTO 2050
2140  IF c$>="A" AND c$<="Z" THEN MID$(word1$,c,1)=c$:c=c-(c<6):GOTO 2050
2150  SOUND 3,200,5:GOTO 2070
2160  IF INSTR(1,word1$,"?") THEN 2150
2170  IF word$=word1$ THEN i=9:score=score*2:GOTO 2190
2180  SOUND 3,200,15:SOUND 3,0,1:SOUND 3,250,50
2190 NEXT i
2200 IF i<8 THEN FOR z=200 TO 400:SOUND 3,z,1:NEXT z ELSE FOR z=400 TO 200 STEP -1:SOUND 3,z,1:NEXT z
2210 CLS:RETURN
2220 '
2230 'quit
2240 CLS:PRINT "Chicken !!! I didn't think you'd quit !!":score=score/2
2250 RETURN 
2260 '
2270 'print subroutine 
2280 no.ghost=1:no.plane=1:ghost.drawn!=0:face.drawn!=0:CLS #0:LOCATE 9,1
2290 PRINT"Map of Hampton Court Maze";
2300 MOVE 124,379:DRAWR 400,0,1:MOVE 40,40:DRAW 40,360,2:DRAW 360,360
2310 FOR i=1 TO 10:y=360-i*32:yy=y+32 
2320  FOR j=1 TO 10:x=8+j*32+32:xx=x-32
2330   n=bm[i*12+j]
2340   IF n AND 2 THEN MOVE x,y:DRAW x,yy
2350   IF n AND 4 THEN MOVE x,y:DRAW xx,y
2360 NEXT j,i
2370 '
2380 be=be-2:PEN 1
2390 FOR bi=1 TO 6
2400  IF jx[bi]>0 THEN LOCATE 2+2*jx[bi],2+2*jy[bi]:PRINT CHR$(227);
2410 NEXT bi
2420 FOR bi=1 TO 6
2430  IF MID$(word$,bi,1)>"Z" THEN 2480
2440  FOR ci=1 TO 6
2450   IF jx[ci]=lx[bi] AND jy[ci]=ly[bi] THEN 2480
2460  NEXT ci
2470  LOCATE 2+2*lx[bi],2+2*ly[bi]:PRINT MID$(word$,bi,1)
2480 NEXT bi
2490 LOCATE 2+2*bx,2+2*by:INK 3,24,0:PEN 3:PRINT CHR$(249); 
2500 old.p=p:old.q=q
2510 LOCATE 2+2*old.p,2+2*old.q:PRINT CHR$(225);:PEN 2
2520 MOVE 408,360:GOSUB 2790:LOCATE 29,4:PRINT"Retrieved";
2530 IF bb=0 AND bg=0 THEN 2570
2540 LOCATE 28,6
2550 IF bb>0 THEN PEN 1:FOR i=1 TO bb:PRINT CHR$(227);" ";:NEXT i
2560 IF bg>0 THEN PEN 3:FOR i=1 TO bg:PRINT CHR$(227);" ";:NEXT i
2570 PEN 2:LOCATE 29,9:PRINT"You are ";:PEN  3:PRINT CHR$(249);:PEN 2
2580 MOVE 408,232:GOSUB 2790:LOCATE 28,12:PRINT"Energy Left";
2590 LOCATE 31,14:PRINT be;
2600 LOCATE 27,17:PRINT "Guardian is ";:PEN 3:PRINT CHR$(225);:PEN 2
2610 MOVE 408,104:GOSUB 2790:LOCATE 28,20:PRINT"Time So Far";
2620 GOSUB 2800
2630 LOCATE 3,25:PRINT "You are facing ";
2640 ON bf GOSUB 2750,2760,2770,2780
2650 LOCATE 25,25:PRINT"Press any key.";
2660 LOCATE #7,1,17:PRINT #7,"Difficulty :";(970-w)/140-4*bv
2670 FOR bi=1 TO w/6
2675 t!=time+20
2680  IF INKEY$<>"" THEN bi=w
2690  IF p<>old.p OR q<>old.q THEN LOCATE 2+2*old.p,2+2*old.q:PRINT " ";:old.p=p:old.q=q:LOCATE 2+2*p,2+2*q:PEN 3:PRINT CHR$(225);:PEN 2
2700  GOSUB 2800
2710  IF p=bx AND q=by THEN bi=w
2715 while time<t!:call &bd19:wend
2720 NEXT bi
2730 INK 3,24:GOSUB 3670
2740 RETURN
2750 PRINT "North.":RETURN
2760 PRINT "East.":RETURN 
2770 PRINT "South.":RETURN  
2780 PRINT "West.":RETURN 
2790 DRAWR 220,0,1:DRAWR 0,-32:DRAWR -220,0:DRAWR 0,32:DRAWR 0,-64:DRAWR 220,0:DRAWR 0,32:RETURN
2800 LOCATE 28,22:IF time.ind=0 THEN start.time!=TIME:time.ind=1 
2810 time.so.far=(TIME-start.time!)/300
2820 hours=INT(time.so.far/3600)
2830 mins=INT(time.so.far/60)-60*hours
2840 secs=time.so.far-hours*3600-mins*60
2850 PRINT USING"##h ##m ##s";hours,mins,secs
2860 RETURN
2870 '
2880 'maze subroutine 
2890 LOCATE 9,13
2900 PRINT "Making Maze, Please Wait"
2910 FOR bi=0 TO 143:bm[bi]=15:NEXT bi
2920 FOR bi=0 TO 11:bm[bi]=16:bm[bi+132]=16:bm[bi*12]=16:bm[bi*12+11]=16:NEXT bi
2930 by=5:bx=5:GOSUB 3080
2940 bi=0:bf=0
2950 bi=bi+1:bj=0
2960  bj=bj+1:bk=bi+bj*12:bl=0
2970   IF bm[bk]<15 THEN 3030
2980   IF bm[bk+1]<15                           THEN bm[bk+1]=bm[bk+1]-8:bm[bk]=13:bl=1
2990   IF bm[bk-1]<15 AND bl=0                  THEN bm[bk-1]=bm[bk-1]-2:bm[bk]=7:bl=1
3000   IF bm[bk+12]<15 AND bl=0                  THEN bm[bk+12]=bm[bk+12]-1:bm[bk]=11:bl=1
3010   IF bm[bk-12]<15 AND bl=0 THEN bm[bk-12]=bm[bk-12]-4:bm[bk]=14:bl=1
3020   IF bl THEN bx=bi:by=bj:GOSUB 3080:bi=10:bj=10:bf=1 
3030  IF bj<10 THEN 2960 
3040 IF bi<10 THEN 2950
3050 IF bf THEN 2940
3060 bi=0.5+10*RND:bm[bi+120]=bm[bi+120]-4
3070 RETURN
3080 bk=bx+by*12
3090 IF bm[bk-1]=15 OR bm[bk+1]=15 OR bm[bk-12]=15 OR bm[bk+12]=15 THEN 3110
3100 RETURN
3110 ON 1+INT(4*RND) GOTO 3120,3140,3160,3180 
3120 IF bm[bk-12]=15 THEN bm[bk]=bm[bk]-1:bm[bk-12]=11:by=by-1
3130 GOTO 3080
3140 IF bm[bk+1]=15 THEN bm[bk]=bm[bk]-2:bm[bk+1]=7:bx=bx+1
3150 GOTO 3080 
3160 IF bm[bk+12]=15 THEN bm[bk]=bm[bk]-4:bm[bk+12]=14:by=by+1
3170 GOTO 3080
3180 IF bm[bk-1]=15 THEN bm[bk]=bm[bk]-8:bm[bk-1]=13:bx=bx-1
3190 GOTO 3080 
3200 '
3210 'jewel subroutine
3220 jx[1]=0.5+10*RND:jy[1]=0.5+10*RND
3230 FOR bi=2 TO 6
3240  i=0.5+10*RND:j=0.5+7*RND
3250  FOR bj=1 TO bi-1
3260   IF jx[bj]=i AND jy[bj]=j THEN 3240
3270  NEXT bj
3280  jx[bi]=i:jy[bi]=j
3290 NEXT bi
3300 FOR bi=1 TO 6
3310  lx[bi]=jx[bi]:ly[bi]=jy[bi]
3320 NEXT bi
3330 RESTORE 3370:word1$=""
3340 FOR bi=1 TO 0.5+words*RND
3350  READ word$
3360 NEXT bi
3370 DATA abacus,abduct,abject,ablaze,abloom,ablush,aboard,abound,abroad,abrupt,abseil,absent,absorb,absurd,accent,accept,access,accuse,acquit,across,acting,action,active,actual,acumen
3380 DATA bicker,bigamy,bikini,binary,bionic,bitter,bleach,blouse,boffin,boiler,bomber,border,borrow,bounce,branch,brandy,breeze,bright,bubble,bucket,buckle,bundle,burrow,butter,buzzer
3390 DATA cactus,cajole,calico,calory,camber,camera,canary,candid,candle,canine,cannon,canter,captor,carbon,caress,casket,caster,cattle,celery,chance,charge,cheese,choose,church,cinema,colour
3400 DATA dabble,dagger,damsel,dangle,dawdle,dazzle,deadly,decade,decent,decoke,deface,defect,deform,delete,demist,dental,depend,deputy,desert,desire,detach,detail,devour,diesel,digest,dimple,dinghy,direct,donate,double,dredge
3410 DATA eclair,editor,elapse,eldest,eleven,emblem,encore,energy,enlist,equate,escape,excess,excite,excuse,export
3420 DATA fabric,factor,falter,famous,father,feeble,feline,fiddle,figure,finish,flaunt,flight,flower,follow,freeze,funnel,future
3430 DATA galaxy,gallop,garter,gentle,ginger,glance,global,golden,govern,gravel,growth,gurgle,gutter,gyrate
3440 DATA haggle,halter,handle,health,helmet,hinder,hollow,honest,huddle,hunger,hurdle,hustle
3450 DATA ignore,impact,impose,income,indent,ingest,inside,insult,insert,invert,island
3460 DATA jacket,jerkin,jockey,judder,juggle,jumble,jungle,junior,junket
3470 DATA karate,kernel,kestal,kettle,kindle,kipper,knight
3480 DATA ladder,launch,lavish,letter,legend,length,lethal,lintel,liquid,locker,loosen,lumber,lounge,luxury,lunacy
3490 DATA maggot,magnet,mallet,medium,member,memory,middle,mingle,mirage,mitten,moment,mortal,mousse,muddle,murder,musket,mystic,mutual,mutton
3500 DATA napkin,native,needle,nestle,nipper,normal,notion,number,nutmeg,nuzzle
3510 DATA object,oblong,obtuse,octane,office,oppose,orchid,orphan,outfit,oxygen,oyster
3520 DATA pacify,paddle,pantry,parcel,pebble,pedlar,pelmet,pepper,permit,photon,pickle,pillar,pinion,piston,placid,plenty,plunge,policy,ponder,postal,priest,profit,proper,pseudo,public,punnet
3530 DATA quaint,quartz,quench,quiver,quinta
3540 DATA rabbit,radial,raffle,rather,reason,recite,record,refuge,remedy,ribbon,riffle,rocket,rubber,rustic
3550 DATA sachet,sacred,saddle,sailor,salute,sample,savage,savour,scheme,scotch,scrape,secret,sector,senior,settle,shiver,shrink,sketch,sleeve,snatch,speech,square,stable,stitch,suffer,sullen,switch
3560 DATA tangle,target,temple,tender,thirst,throat,timber,tongue,tragic,trench,tunnel,turnip,twelve,tyrant
3570 DATA unjust,unreal,urchin,useful,unwind,uproar,uplift
3580 DATA vacant,vacuum,valour,velvet,verbal,verify,vigour,visual,volume,vortex
3590 DATA waiter,wallet,wander,watery,weapon,weight,whilst,wigwam,window,wisdom,wooden,writhe,wreath
3600 DATA xylene
3610 DATA yearly,yellow,yonder
3620 DATA zenith,zodiac
3630 DATA zzzzzz
3640 RETURN
3650 '
3660 '3d subroutine
3670 no.plane=1:no.ghost=1:CLS:bi=-1:x=bx:y=by:GOTO 3690
3680 x=x+a[bf]:y=y+b[bf]
3690 bi=bi+1
3700 IF bi<3 THEN j$=CHR$(227) ELSE j$=CHR$(144)
3710 FOR i=1 TO 6
3720  IF x=jx[i] AND y=jy[i] THEN TAG:PLOT 312,(by[bi]+by[bi+1])/2+4,1:PRINT j$;:TAGOFF
3730 NEXT i
3740 bk=x+y*12:IF bm[bk]=16 THEN 3880
3750 'left
3760 IF m[bf] AND bm[bk]                      THEN x1=bx[bi]:y1=by[bi]:x2=bx[bi+1]:y2=by[bi+1]:GOSUB 4410:GOTO 3800
3770 IF bf=3 AND y=10 AND (bm[bk+1] AND 4)<>4 THEN 3800
3780 IF bm[bk+(bf=1)-(bf=3)+12*(bf=2)-12*(bf=4)]<16 THEN x1=bx[bi]:y1=by[bi+1]:x2=bx[bi+1]:y2=by[bi+1]:GOSUB 4410             ELSE MOVE bx[bi],by[bi+1]:DRAW bx[bi+1],by[bi+1],1
3790 'right
3800 IF m[bf+2] AND bm[bk]                    THEN x1=639-bx[bi]:y1=by[bi]:x2=639-bx[bi+1]:y2=by[bi+1]:GOSUB 4410:GOTO 3840
3810 IF bf=3 AND y=10 AND (bm[bk-1] AND 4)<>4 THEN 3840
3820 IF bm[bk-(bf=1)+(bf=3)-12*(bf=2)+12*(bf=4)]<16 THEN x1=639-bx[bi]:y1=by[bi+1]:x2=639-bx[bi+1]:y2=by[bi+1]:GOSUB 4410     ELSE MOVE 639-bx[bi],by[bi+1]:DRAW 639-bx[bi+1],by[bi+1],1
3830 'forwards
3840 IF m[bf+1] AND bm[bk]                    THEN x1=bx[bi+1]:y1=by[bi+1]:x2=639-bx[bi+1]:y2=by[bi+1]:GOSUB 4410             ELSE IF bi<5 THEN 3680
3850 IF bf=3 THEN PEN 3:GOSUB 5890:PEN 2
3860 GOTO 3940
3870 ' draw path, trees and house
3880 MOVE bx[bi],by[bi]:DRAW 319,199,1:DRAW 639-bx[bi],by[bi]
3890 IF bi=5 THEN 3910 
3900 s!=2^(1+(4-bi)*0.7925):bi=bi+1:RESTORE 4740:GOSUB 4530:IF bi<5 THEN 3900
3910 IF by>8 THEN RESTORE 4760:GOSUB 4520
3920 GOTO 3850
3930 ' draw ghost if present
3940 no.ghost=0:GOSUB 4160
3950 IF by=11 THEN GOSUB 4880:IF by=11 THEN GOTO 3990 ELSE GOTO 3670
3960 IF s<>10 THEN LOCATE 14,2:PRINT"Which Way Now ?";
3970 SOUND 2,200,10
3980 IF ABS (bx-p)<3 AND ABS (by-q)<3         THEN GOSUB 5850
3990 no.plane=0:RETURN
4000 '
4010 'drop subroutine
4020 IF bp=51 AND bg=0 THEN bp=REMAIN(3):PRINT #1,CHR$(7);"   No jewels are being carried !!   ";:GOSUB 5750:RETURN ELSE bi=1
4030 IF jx[bi]=0 THEN jx[bi]=bx:jy[bi]=by:bg=bg-1:score=score-50 ELSE bi=bi+1:IF bi<7 THEN 4030
4040 IF bp<>51 THEN PRINT #1,"   Energy Low !! Jewel dropped !!   ";
4050 no.plane=1:no.ghost=1
4060 TAG:PLOT 312,(by[0]+by[1])/2+4,1:PRINT CHR$(227);:TAGOFF
4070 PEN 2:no.plane=0:no.ghost=0
4080 PRINT CHR$(7);:RETURN
4090 '
4100 'move ghost subroutine 
4110 IF ghosting THEN RETURN ELSE f=f+2
4120 f=f-1:f=f+4*((f=5)-(f=0)) 
4130 IF m[f+1] AND bm[p+q*12] OR 16=bm[p+(f=4)-(f=2)+12*(q+(f=1)-(f=3))]              THEN 4120
4140 p=p+(f=4)-(f=2):q=q+(f=1)-(f=3):t=0
4150 ' if facing ghost can we see him ?
4160 ghost.in.sight=0
4170 IF (bf=1 AND by>q AND bx=p)             OR (bf=2 AND by=q AND bx<p)             OR (bf=3 AND by<q AND bx=p)             OR (bf=4 AND by=q AND bx>p)              THEN GOSUB 5190 'look
4180 IF ghost.in.sight=1 OR (bx=p AND by=q)   THEN GOSUB 5300:GOTO 4230  
4190 IF ghost.drawn!=0 THEN GOTO 4230
4200 IF face.drawn=1 THEN RESTORE 4680 ELSE RESTORE 4710
4210 s!=ghost.drawn!:no.plane=1:?chr$(23)+chr$(1);:GOSUB 4520:?chr$(23)+chr$(0);: 'CALL &AA04:GOSUB 4520:CALL &AA00
4220 no.plane=0:ghost.drawn!=0:face.drawn!=0
4230 IF ABS (bx-p)<3 AND ABS (by-q)<3         THEN GOSUB 5850
4240 RETURN
4250 '
4260 'pick subroutine
4270 PRINT CHR$(7);:bi=1
4280 IF bx=jx[bi] AND by=jy[bi]               THEN i=bi:GOTO 4300                    ELSE bi=bi+1:IF bi<7 THEN 4280
4290 bp=REMAIN(3):PRINT #1,"       There's nothing here !!      ";:GOSUB 5750:RETURN
4300 IF be<20+20*bg THEN bp=REMAIN(3):PRINT #1,"         That's too heavy !         ";:GOSUB 5750:RETURN 
4310 jx[i]=0:jy[i]=0:bg=bg+1:bi=1:score=score+50
4320 IF bx<>lx[bi] OR by<>ly[bi]              THEN bi=bi+1:IF bi<7 THEN 4320                       ELSE 4350
4330 IF MID$(word$,bi,1)>"Z" THEN word1$=word1$+UPPER$(MID$(word$,bi,1))
4340 MID$(word$,bi,1)=UPPER$(MID$(word$,bi,1))
4350 bi=1
4360 IF bx=jx[bi] AND by=jy[bi]               THEN RETURN                            ELSE bi=bi+1:IF bi<7 THEN 4360
4370 LOCATE 20,22:PRINT "  ";
4380 RETURN
4390 '
4400 'block subroutine
4410 MOVE x1,y1:DRAW x2,y2,1:DRAW x2,399-y2:DRAW x1,399-y1:DRAW x1,y1
4420 IF ABS(399-y1-y1)<6 THEN RETURN
4430 xinc=4+8*(x1>x2):yinc=2*SGN(y2-y1):y1=y1+4
4440 x1=x1+xinc:x2=x2-xinc:y1=y1+1
4450 IF x1<319 AND x2>319 THEN x2=x2-1
4460 x1=x1+xinc:y1=y1+yinc
4470 MOVE x1,y1:DRAW x1,399-y1,2
4480 IF ABS(x1-x2)>2 THEN GOTO 4460 
4490 RETURN
4500 '
4510 'sketch subroutine   
4520 POKE &AA15,1:GOTO 4600
4530 POKE &AA15,2:GOTO 4600
4540 POKE &AA15,3:GOTO 4600
4550 POKE &AA15,4:GOTO 4600
4560 POKE &AA15,5:GOTO 4600
4570 POKE &AA15,6:GOTO 4600
4580 POKE &AA15,7:GOTO 4600
4590 POKE &AA15,8:GOTO 4600
4600 MOVE 319,199
4610 READ a,b!,c!:IF a=0 THEN RETURN
4620 b!=b!*s!:c!=c!*s!
4630 ON a GOTO 4640,4650,4660,4670
4640 MOVER b!,c!:GOTO 4610
4650 DRAW b!,c!,PEEK(&AA15):GOTO 4610
4660 DRAWR b!,c!,PEEK(&AA15):GOTO 4610
4670 MOVE b!,c!:GOTO 4610
4680 'guardians face
4690 DATA 1,2.5,8,3,2.5,0,3,-2.5,3.2,3,0,-3.2,1,-5,0,3,0,3.2,3,-2.5,-3.2,3,2.5,0
4700 DATA 1,-2.5,-1.6,3,1.25,-1.6,3,1.25,1.6,3,1.25,-1.6,3,1.25,1.6,3,1.25,-1.6,3,1.25,1.6,3,1.25,-1.6,3,1.25,1.6,3,0,-4,3,-1.25,1.6,3,-1.25,-1.6,3,-1.25,1.6,3,-1.25,-1.6,3,-1.25,1.6,3,-1.25,-1.6,3,-1.25,1.6,3,-1.25,-1.6,3,0,4,1,5,-6.4
4710 'guardians body
4720 DATA 1,-12.5,-16,3,-2.5,14.4,3,-12.5,11.2,3,5,1.6,3,15,-1.6,3,2.5,4.8,3,2.5,1.6,3,5,0,3,2.5,-1.6,3,2.5,-4.8,3,15,1.6,3,5,-1.6,3,-12.5,-11.2,3,-2.5,-14.4
4730 DATA 3,-2.5,3.2,3,-2.5,-3.2,3,-2.5,3.2,3,-2.5,-3.2,3,-2.5,3.2,3,-2.5,-3.2,3,-2.5,3.2,3,-2.5,-3.2,3,-2.5,3.2,3,-2.5,-3.2,0,0,0 
4740 'trees
4750 DATA 1,15,-6.4,3,0,1.6,3,2.5,1.6,3,-2.5,8,3,-2.5,-8,3,2.5,-1.6,1,-30,0,3,2.5,1.6,3,-2.5,8,3,-2.5,-8,3,2.5,-1.6,3,0,-1.6,1,15,6.4,0,0,0
4760 'hampton court
4770 DATA 3,-12,0,1,-6,0,3,-4,0,1,-8,0,3,-10,0,1,-10,0,3,-16,0,3,0,40  
4780 DATA 3,10,0,3,0,-5,3,10,0,3,0,5,3,10,0,3,0,-5,3,10,0,3,0,5,3,10,0,3,0,-5,3,10,0,3,0,10,3,12,0,3,0,-10,3,10,0,3,0,5,3,10,0,3,0,-5,3,10,0,3,0,5,3,10,0,3,0,-5,3,10,0,3,0,5,3,10,0
4790 DATA 3,0,-40,3,-16,0,1,-10,0,3,-10,0,1,-8,0,3,-4,0,1,-6,0,3,-12,0 
4800 DATA 1,-21,40,3,0,20,3,5,0,3,0,-3,3,5,0,3,0,3,3,5,0,3,0,-3,3,4,0,3,0,3,3,4,0,3,0,-3,3,4,0,3,0,3,3,4,0,3,0,-3,3,5,0,3,0,3,3,5,0,3,0,-20
4810 DATA 1,-32,-40,3,0,16,3,12,6,3,12,-6,3,0,-16,1,-2,0,3,0,15,3,-10,5,3,-10,-5,3,0,-15
4820 DATA 1,0,12,3,20,0,1,0,2,3,-20,0,1,4,2,3,12,0,1,-4,2,3,-4,0,1,-6,-3,3,0,-5,1,2,0,3,0,6,1,2,1,3,0,-7,1,2,0,3,0,8,1,2,1,3,0,-9,1,2,0,3,0,8,1,2,-1,3,0,-7,1,2,0,3,0,6,1,2,-1,3,0,-5
4830 DATA 1,-55,10,3,2,1,3,5,0,3,0,5,3,2,1,3,2,-1,3,0,-5,3,5,0,3,2,-1,3,-2,-1,3,-5,0,3,0,-5,3,-2,-1,3,-2,1,3,0,5,3,-5,0,3,-2,1
4840 DATA 1,77,0,3,2,1,3,5,0,3,0,5,3,2,1,3,2,-1,3,0,-5,3,5,0,3,2,-1,3,-2,-1,3,-5,0,3,0,-5,3,-2,-1,3,-2,1,3,0,5,3,-5,0,3,-2,1 
4850 DATA 0,0,0
4860 '
4870 'exit subroutine
4880 score=score+150*bg-100+be
4890 LOCATE 16,17:PRINT "Maze Exit.";
4900 LOCATE 11,19:IF bg THEN 4940
4910 PRINT "Oh Dear ! No Jewels !";
4920 LOCATE 10,20:PRINT"Better luck next time !";
4930 GOTO 4970
4940 PRINT "Well Done !";bg;"Jewel";:IF bg>1 THEN PRINT "s."; ELSE PRINT " !";
4950 IF 6=(bb+bg) THEN RETURN 'game over
4960 LOCATE 10,20:PRINT"But there's more yet !!"; 
4970 LOCATE 6,22:PRINT"Rest and restore your energy !" 
4980 FOR i=0 TO w*10:NEXT i
4990 LOCATE 4,24:PRINT"Hit any key to re-enter the Maze..";:GOSUB 6530
5000 IF INKEY$="" THEN 5000
5010 o=o+be:bf=1:by=10:be=100:bb=bb+bg:bg=0
5020 RETURN
5030 '
5040 'jump subroutine 
5050 no.plane=1:no.ghost=1
5060 IF m[bf+1]<>(m[bf+1] AND bm[bx+by*12])   THEN 5160
5070 IF bm[bx-(bf=2)+(bf=4)+12*(by-(bf=3)+(bf=1))]=16 OR bv THEN bp=REMAIN(3):PRINT #1,"       That is not allowed !!       ";:GOSUB 5750:GOTO 5160
5080 IF be<10 THEN bp=REMAIN(3):PRINT #1,"        Not enough Energy !!        ";:GOSUB 5750:GOTO 5160
5090 by=by-(bf=3)+(bf=1):bx=bx-(bf=2)+(bf=4):be=be-8-bg*4
5100 FOR bi=2 TO 70 STEP 2 
5110  MOVE 321-bi,328:DRAW 319,71,0:DRAW 317+bi,328
5120  MOVE 319-bi,328:DRAW 319,71,1:DRAW 319+bi,328
5130 NEXT bi
5140 FOR bi=1 TO 2000/10:call &bd19:NEXT bi
5150 GOSUB 3670 '3d 
5160 no.plane=0:RETURN
5170 '
5180 'look subroutine
5190 look.count=0 
5200 i=bx+look.count*((bf=4)-(bf=2))
5210 j=by+look.count*((bf=1)-(bf=3))
5220 IF i>10 OR i<1 OR j>10 OR j<1            THEN RETURN 
5230 IF p=i AND q=j                           THEN ghost.in.sight=1:RETURN
5240 IF m[bf+1] AND bm[i+j*12]                THEN RETURN
5250 look.count=look.count+1
5260 IF look.count<5 THEN 5200
5270 RETURN
5280 '
5290 'draw ghost subroutine
5300 IF no.ghost THEN RETURN
5310 ghosting=1:no.plane=1:?chr$(23)+chr$(1);: 'CALL &AA04
5320 IF ghost.drawn!=0 THEN 5370
5330 s!=ghost.drawn!
5340 IF s!=10 OR face.drawn THEN RESTORE 4680 ELSE RESTORE 4710 
5350 GOSUB 4520 'sketch 
5360 '
5370 s!=8-2*ABS(bx-p)-2*ABS(by-q)
5380 IF s!=0 THEN s!=1
5390 IF s!=8 THEN s!=10:GOTO 5430
5400 next.f=f+2
5410 next.f=next.f-1:next.f=next.f+4*((next.f=5)-(next.f=0))
5420 IF m[next.f+1] AND bm[p+q*12] OR 16=bm[p+(next.f=4)-(next.f=2)+12*(q+(next.f=1)-(next.f=3))] THEN 5410
5430 IF s!=10 OR ((bf+f)=4 OR (bf+f)=6) AND bf<>f OR ((bf+next.f)=4 OR (bf+next.f)=6) AND bf<>next.f THEN face.drawn=1:RESTORE 4680 ELSE face.drawn=0:RESTORE 4710 
5440 GOSUB 4520 'sketch
5450 ghost.drawn!=s!:?chr$(23)+chr$(0);:ghosting=0:no.plane=0:RETURN:' CALL &AA00
5460 '
5470 'control keys subroutine
5480 no.ghost=1:no.plane=1:CLS
5490 LOCATE 7,1:PRINT "Numeric Keypad Control Keys";:MOVE 92,380:DRAW 526,380,3
5500 MOVE 8,40:DRAW 631,40,1:DRAW 631,359:DRAW 8,359:DRAW 8,40
5510 MOVE 8,120:DRAW 631,120:MOVE 8,200:DRAW 631,200:MOVE 8,280:DRAW 631,280
5520 MOVE 216,40:DRAW 216,359:MOVE 424,40:DRAW 424,359
5530 PRINT CHR$(22);"1";
5540 LOCATE 2,4:PRINT "7            8            9"
5550 LOCATE 2,9:PRINT "4            5            6"
5560 LOCATE 2,14:PRINT "1            2            3"
5570 LOCATE 2,19:PRINT "0            .            Enter"
5580 PEN 3
5590 LOCATE 4,5:PRINT "Forwards     Forwards.    Forwards"
5600 LOCATE 4,6:PRINT "and turn                  and turn"
5610 LOCATE 4,7:PRINT "Left.                     Right."
5620 LOCATE 4,10:PRINT "Turn to      Jump         Turn to"
5630 LOCATE 4,11:PRINT "the Left.    through      the Right."
5640 LOCATE 17,12:PRINT "a hedge."
5650 LOCATE 4,15:PRINT "Pick up a    Display      Drop a"
5660 LOCATE 4,16:PRINT "Jewel.       the Map.     Jewel."
5670 LOCATE 30,20:PRINT"Display"
5680 LOCATE 30,21:PRINT"this"
5690 LOCATE 30,22:PRINT"screen."
5700 LOCATE 6,25:PEN 2:PRINT "Press any key to continue ....";CHR$(22);"0";:GOSUB 6530
5710 IF INKEY$="" THEN 5710
5720 IF instruc THEN RETURN
5730 GOSUB 3670:RETURN
5740 '
5750 AFTER 70,3 GOSUB 5770:RETURN
5760 '
5770 CLS #1:RETURN
5780 '
5790 IF bf=1 AND no.plane THEN RETURN
5800 sx=MAX(-2,sx-2):IF bf<>1 OR no.plane OR sx>632 THEN RETURN
5810 IF sx<0 THEN TAG:PLOT 0,398,0:PRINT "   ";:TAGOFF:sx=650+50*RND
5820 TAG:PLOT 700,0,3:MOVE sx,398:PRINT CHR$(254);CHR$(255);" ";:TAGOFF
5830 RETURN
5840 '
5850 IF SQ(1)<128 THEN FOR dummy=1 TO 6:SOUND 1,50+50*RND,5:NEXT dummy
5860 RETURN
5870 '
5880 'draw sun subroutine
5890 LOCATE 5,1:PRINT CHR$(245);CHR$(246);CHR$(247);
5900 LOCATE 5,2:PRINT CHR$(248);CHR$(249);CHR$(250);
5910 LOCATE 5,3:PRINT CHR$(251);CHR$(252);CHR$(253);
5920 RETURN
5930 '
5940 'draw filled tree
5950 FOR x1=x-8*s! TO x+8*s! STEP 4
5960  MOVE x,y:DRAW x1,y-20*s!,7:DRAW x,y-30*s!
5970 NEXT x1
5980 DRAWR 0,-6
5990 FOR x1=640-x-8*s! TO 640-x+8*s! STEP 4
6000  MOVE 640-x,y:DRAW x1,y-20*s!,7:DRAW 640-x,y-30*s!
6010 NEXT x1
6020 DRAWR 0,-6
6030 RETURN
6040 '
6050 ' instructions
6060 instruc=1
6070 PAPER #1,1:PEN #1,0:CLS #1:LOCATE #1,9,1:PRINT #1,"  ** SCENARIO **";
6080 PRINT:PRINT"   The  Sultan of Bagdhad,  whilst  on astate  visit  to  England  in  the  14thcentury,  had  the very bad  misfortune,to be set upon by a  band  of  cutthroatvagabonds."
6090 PRINT:PRINT "   They stole the poor Sultan's treasurechest, containing his youngest daughtersdowry of 6 priceless rubies."
6100 PRINT:PRINT "   The Sultan's personal champion, loyaland muscular as he was, chased the groupof robbers into Hampton Court maze. Herehe was savagely attacked, then murdered.During the fight the rubies were droppedat various points about the maze."
6110 GOSUB 6480
6120 PRINT:PRINT "   The  Ghost of the Bodyguard now roamsthe maze and attacks anyone who dares toenter.  However, the bodyguard was neverof great intelligence, and his ghost hasretained this problem."
6130 PRINT:PRINT "   You may therefore, avoid the Ghost ifyou are able to discover his weakness !"
6140 PRINT:PRINT "   The hazardous task  before you, is toenter the Maze in search of the jewels."
6150 PRINT:PRINT "   Having collected the jewels, you willbe given five attempts, in which to workout a magic word that will transport youback in time, to even greater riches !!"
6160 GOSUB 6480
6170 CLS #1:LOCATE #1,5,1:PRINT #1,"  ** RULES OF THE GAME **";
6180 PRINT:PRINT "1. You are not permitted to jump through   the outer hedges of the maze, but may   jump through the inner hedges when on   levels of difficulty between 1 & 5."
6190 PRINT:PRINT "2. Your energy level  will determine how   many jewels you may carry at a time."
6200 PRINT:PRINT "3. You will be given an audible warning,   should the Guardian be  nearer than 3   squares away."
6210 PRINT:PRINT "4. Jumping through a hedge will cost you   a lot more energy than normal."
6220 PRINT:PRINT "5. Looking at the map of the maze,  will   also reduce your energy."
6230 GOSUB 6480
6240 PRINT:PRINT "6. Carrying jewels will also reduce your   energy by more than normal."
6250 PRINT:PRINT "7. The level of difficulty, affects both   the speed of the Ghost,  and the time   for which the map is displayed."
6260 PRINT:PRINT "8. You may  leave the maze,  at any time   you want, by means of the exit in the   southern hedge.   Your energy will be   made up and any jewels being carried,   will be safely stored away."
6270 PRINT:PRINT "9. BE WARNED ! The Guardian's Ghost will   be moving at ALL times during play !"
6280 GOSUB 6480
6290 LOCATE #1,5,1:PRINT #1,"  ** DIFFICULTY LEVELS **";
6300 PRINT:PRINT "Levels 1-5 :- These represent increasing              difficulty levels in which              jumping through the inside              hedges is allowed."
6310 PRINT:PRINT "Levels 6-9 :- These represent increasing              difficulty also, but jumps              are not permitted."
6320 PRINT:PRINT:PRINT "Levels 5 & 9 are the same, in regards tothe Guardian's speed of movement and themap display time."
6330 PRINT:PRINT:PRINT "N.B.!!  At any time during the game, youcan quit by pressing the Q key !!" 
6340 GOSUB 6480
6350 CLS #1:LOCATE #1,6,1:PRINT #1,"  ** SCORING  SYSTEM **";
6360 PRINT:PRINT"   Every jewel you take out of the maze,gains you 200 points. Each jewel you arecarrying, whilst in the maze, counts for50 points." "
6370 PRINT:PRINT"   Leaving the maze, reduces your score,by 100 points.  You do however receive 1point, per unit of energy left."
6380 PRINT:PRINT"   Moving reduces your energy level by 1point per square, plus 1 point for everyjewel that you are carrying."
6390 PRINT:PRINT"   Jumping, costs you 8 units of energy,plus a further 4, per jewel that you arecarrying.   Looking at the map will cost2 units."
6400 GOSUB 6480
6410 PRINT:PRINT"   If you Quit the game, your score willbe halved."
6420 PRINT:PRINT"   If you die from exhaustion or runningfoul of the Guardian, you will receive ascore of 0."
6430 PRINT:PRINT"   Should you be succesful in retreivingall the jewels and in guessing the magicword, your score will be doubled."
6440 GOSUB 6480
6450 WINDOW 1,40,1,25:GOSUB 5480 'keys
6460 instruc=0
6470 RETURN
6480 LOCATE 13,20:PRINT "Hit any key ...";:GOSUB 6530
6490 IF INKEY$="" THEN 6490
6500 CLS:RETURN
6510 '
6520 'soak up keystrokes
6530 WHILE INKEY$<>"":FOR i=1 TO 70/10:call &bd19:NEXT i:WEND
6540 FOR i=1 TO 500/20:call &bd19:NEXT i
6550 WHILE INKEY$<>"":FOR i=1 TO 70/10:call &bd19:NEXT i:WEND
6560 RETURN
6570 '
6580 'on break return
6590 RETURN
*/ });
