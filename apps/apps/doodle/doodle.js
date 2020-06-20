/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem doodle - CPC Doodle
2 rem
3 rem
10 ' ********************************
20 ' *                              *
30 ' *   CPCDoodle - Main program   *
40 ' *  (c)2018 by Markus Hohmann   *
50 ' *                              *
60 ' ********************************
70 '
74 '
75 ' Title screen
76 '
77 ON ERROR GOTO 5000:GRAPHICS PAPER 0
80 MODE 1:INK 0,26:INK 1,0:INK 2,13:INK 3,6:BORDER 13:DEFINT a-z:DIM xf(1000),yf(1000)
90 OPENIN "doodle.drw" :'"doodle.drd"
95 move 0,55:draw 639,260:move 0,0:fill 1
100 WHILE NOT EOF
110 INPUT #9,x:INPUT #9,y:INPUT #9,p:INPUT #9,cmd
120 IF cmd=0 THEN MOVE x,y
130 IF cmd=1 THEN DRAW x,y,p
140 IF cmd=2 THEN PLOT x,y,p
150 IF cmd=3 THEN MOVE x,y:GRAPHICS PAPER p:FILL p
151 IF cmd>3 AND cmd<10 THEN yy=y:xx=x:GOSUB 4000
160 IF cmd>9 THEN cmd=cmd-10:INK 0,x:INK 1,y:INK 2,p:INK 3,cmd
170 WEND:CLOSEIN
175 move 0,55:draw 639,260,2:move 0,0:fill 2
180 PEN 3:LOCATE 3,8:PRINT"D O O D L E";:PEN 2:PRINT" v1.3"
190 PEN 2:LOCATE 1,13:PRINT CHR$(164);" 2018 by Markus Hohmann"
200 PEN 1:LOCATE 4,23:PRINT"Instructions? (Y/N)"
210 a$=UPPER$(INKEY$):IF a$="" THEN GOTO 210
220 IF a$="N" THEN GOTO 1000
230 IF a$="Y" THEN GOSUB 250:GOTO 1000
240 GOTO 210
244 '
245 ' Infotext
246 '
250 CLS:INK 0,26:INK 1,0:INK 2,13:INK 3,6:PEN 2:PRINT"CPC Doodle ";CHR$(164);" by Markus Hohmann":PEN 1
260 PRINT"Q - this information":PRINT"C - display # of commands used"
270 PEN 2:PRINT"MOVE around with W,A,S,D or joystick"
280 PRINT"V,B,N,M - Cursor step (2-8)"
290 PRINT"H - Toggle help line or simple dot"
300 PRINT"U - Store MOVE point"
310 PRINT"I - DRAW line from last point"
320 PRINT"O - PLOT a dot"
330 PRINT"P - FILL (!Closed forms in 1 PEN only!)
340 PRINT "FIRE 1: Command (DRAW or PLOT)"
350 PRINT"FIRE 2: MOVE to Cursor (Like U)"
360 PEN 3:PRINT"1 - PEN 1":PRINT"2 - PEN 2"
370 PRINT"3 - PEN 3"
380 PRINT"0 - PEN 0             9 - Define palette";
390 PEN 1:PRINT"R - Redraw screen"
400 PRINT"T - Turn back last action"
410 PRINT"ESC - SAVE or EXIT (Press twice)"
420 PEN 2:PRINT"Screens are limited to 3000 commands!"
430 PRINT"If BORDER is dark red: 50 commands left":PRINT"If light red: 10 commands left"
440 PEN 3:PRINT"L - Load doodle"
450 PEN 1:PRINT:PRINT"Now find this any key and press it, ok?"
460 CALL &BB18:INK 0,i0:INK 1,i1:INK 2,i2:INK 3,i3:RETURN
464 '
465 ' Change palette
466 '
470 CLS:a$="INK 0 (Is "+MID$(STR$(i0),2)+")":PRINT a$;:INPUT i0
480 a$="INK 1 (Is "+MID$(STR$(i1),2)+")":PRINT a$;:INPUT i1
490 a$="INK 2 (Is "+MID$(STR$(i2),2)+")":PRINT a$;:INPUT i2
500 a$="INK 3 (Is "+MID$(STR$(i3),2)+")":PRINT a$;:INPUT i3
510 INK 0,i0:INK 1,i1:INK 2,i2:INK 3,i3:x(index)=i0:y(index)=i1:p(index)=i2:c(index)=i3+10:index=index+1:RETURN
994 '
995 ' Initialize doodle part
996 '
1000 MODE 1:PEN 1:DIM x(3000),y(3000),p(3000),c(3000):helpline=1:i0=26:i1=0:i2=13:i3=20:INK 0,i0:INK 1,i1:INK 2,i2:INK 3,i3:x(0)=320:y(0)=200:p(0)=1:cmd(0)=0
1010 GOSUB 1300:xx=320:yy=200:pp=1:cmd=0:lastcmd=-1:xm=320:ym=200:sp=2
1020 GOSUB 1320:index=0:SPEED KEY 8,2:ON BREAK GOSUB 1350
1030 a$=LOWER$(INKEY$):IF a$="" AND JOY(0)=0 THEN GOTO 1030
1040 IF a$="w" OR JOY(0)=1 OR JOY(0)=5 OR JOY(0)=9 AND yy<398 THEN GOSUB 1320:yy=yy+sp:WHILE yy>398:yy=398:WEND:GOSUB 1320
1050 IF a$="s" OR JOY(0)=2 OR JOY(0)=6 OR JOY(0)=10 AND yy >0 THEN GOSUB 1320:yy=yy-sp:WHILE yy<0:yy=0:WEND:GOSUB 1320
1060 IF a$="a" OR JOY(0)=4 OR JOY(0)=5 OR JOY(0)=6 AND xx>0 THEN GOSUB 1320:xx=xx-sp:WHILE xx<0:xx=0:WEND:GOSUB 1320
1070 IF a$="d" OR JOY(0)=8 OR JOY(0)=9 OR JOY(0)=10 AND xx<638 THEN GOSUB 1320:xx=xx+sp:WHILE xx>638:xx=638:WEND:GOSUB 1320
1080 IF a$="1" THEN GOSUB 1320:pp=1:GOSUB 1320
1090 IF a$="2" THEN GOSUB 1320:pp=2:GOSUB 1320
1100 IF a$="3" THEN GOSUB 1320:pp=3:GOSUB 1320
1110 IF a$="0" THEN GOSUB 1320:pp=0:GOSUB 1320
1120 IF a$="9" THEN GOSUB 1320:GOSUB 470:GOSUB 1580:GOSUB 1320
1130 IF a$="u" THEN cmd=0:GOSUB 1320:GOSUB 1490:GOSUB 1320
1140 IF a$="i" THEN cmd=1:GOSUB 1320:GOSUB 1490:GOSUB 1320
1150 IF a$="o" THEN cmd=2:GOSUB 1320:GOSUB 1490:GOSUB 1320
1160 IF a$="p" THEN cmd=3:GOSUB 1320:GOSUB 1490:GOSUB 1320
1161 IF a$="!" THEN cmd=4:GOSUB 1320:GOSUB 1490:GOSUB 1320
1162 IF a$=CHR$(34) THEN cmd=5:GOSUB 1320:GOSUB 1490:GOSUB 1320
1163 IF a$="#" THEN cmd=6:GOSUB 1320:GOSUB 1490:GOSUB 1320
1164 IF a$="$" THEN cmd=7:GOSUB 1320:GOSUB 1490:GOSUB 1320
1165 IF a$="%" THEN cmd=8:GOSUB 1320:GOSUB 1490:GOSUB 1320
1166 IF a$="&" THEN cmd=9:GOSUB 1320:GOSUB 1490:GOSUB 1320
1170 IF JOY(0)=16 THEN GOSUB 1700:GOSUB 1320:GOSUB 1490:GOSUB 1320
1180 IF JOY(0)=32 THEN cmd=0:GOSUB 1320:GOSUB 1490:GOSUB 1320:GOTO 1030
1190 IF a$="l" THEN GOSUB 1650
1200 IF a$="r" THEN GOSUB 1320:GOSUB 1580:GOSUB 1320
1210 IF a$="h" THEN GOSUB 1320:IF helpline=1 THEN helpline=0:GOSUB 1320 ELSE helpline=1:GOSUB 1320
1220 IF a$="q" THEN GOSUB 1320:GOSUB 250:GOSUB 1580:GOSUB 1320
1230 IF a$="v" THEN sp=2
1240 IF a$="b" THEN sp=4
1250 IF a$="n" THEN sp=6
1260 IF a$="m" THEN sp=8
1270 IF a$="t" AND index>0 THEN GOSUB 1320:index=index-1:GOSUB 1580:GOSUB 1320
1280 IF a$="c" THEN GOSUB 1320:LOCATE 1,1:PRINT index-1:CALL &BB18:GOSUB 1580:GOSUB 1320
1290 GOTO 1030
1294 '
1295 ' XOR mode
1296 '
1300 LOCATE 1,1:PRINT CHR$(23);CHR$(1):RETURN
1304 '
1305 ' AND mode
1306 '
1310 LOCATE 1,1:PRINT CHR$(23);CHR$(0):RETURN
1314 '
1315 ' Draw cursor
1316 '
1320 IF helpline=1 THEN MOVE xm,ym:DRAW xx,yy,pp
1330 MOVE xx-8,yy:DRAW xx-4,yy,1:MOVE xx+4,yy:DRAW xx+8,yy:MOVE xx,yy-8:DRAW xx,yy-4:MOVE xx,yy+4:DRAW xx,yy+8:IF helpline=0 THEN PLOT xx,yy,pp
1340 RETURN
1344 '
1345 ' EXIT or Save picture
1346 '
1350 SPEED KEY 20,2:GOSUB 1310:CLS
1360 INPUT "Store image? (Y/N)",a$
1370 IF UPPER$(a$)="N" THEN END
1380 IF UPPER$(a$)="Y" THEN |DIR,"*.drw":INPUT"Save - Filename without extension:      ",a$
1390 CLS:LOCATE 1,1:PRINT"Saving command:"
1400 OPENOUT a$+".drw"
1410 FOR i=0 TO index-1
1420 WRITE #9,x(i)
1430 WRITE #9,y(i)
1440 WRITE #9,p(i)
1450 WRITE #9,c(i)
1460 LOCATE 16,1:PRINT i
1470 NEXT:CLOSEOUT
1480 SPEED KEY 8,2:CLS:GOSUB 1580:GOSUB 1300:GOSUB 1320:RETURN
1484 '
1485 ' Execute command
1486 '
1490 IF index>3000 THEN GOSUB 1300:RETURN ELSE GOSUB 1310:IF index<1 THEN GOTO 1500 ELSE IF x(index-1)=xx AND y(index-1)=yy AND c(index-1)=cmd THEN GOSUB 1300:RETURN
1500 BORDER 2
1510 IF cmd=0 THEN xm=xx:ym=yy
1520 IF cmd=1 THEN MOVE xm,ym:DRAW xx,yy,pp:xm=xx:ym=yy
1530 IF cmd=2 THEN PLOT xx,yy,pp:xm=xx:ym=yy
1540 IF cmd=3 THEN MOVE xx,yy:GRAPHICS PAPER pp:FILL pp:xm=xx:ym=yy
1545 IF cmd>3 AND cmd<10 THEN GOSUB 4000
1550 IF cmd>9 THEN cmd=cmd-10:INK 0,x:INK 1,y:INK 2,p:INK 3,cmd
1560 GOSUB 1300:IF index<2950 THEN BORDER 13 ELSE IF index<2990 THEN BORDER 3 ELSE BORDER 6
1570 x(index)=xx:y(index)=yy:p(index)=pp:c(index)=cmd:index=index+1:RETURN
1580 CLS:GOSUB 1310:FOR t=0 TO index-1:IF c(t)<10 THEN xx=x(t):yy=y(t)
1590 IF c(t)=0 THEN MOVE x(t),y(t)
1600 IF c(t)=1 THEN DRAW x(t),y(t),p(t)
1610 IF c(t)=2 THEN PLOT x(t),y(t),p(t)
1620 IF c(t)=3 THEN MOVE x(t),y(t):GRAPHICS PAPER p(t):FILL p(t)
1625 IF c(t)>3 AND c(t)<10 THEN cmd=c(t):GOSUB 4000
1630 IF c(t)>9 THEN i0=x(t):i1=y(t):i2=p(t):i3=c(t)-10:INK 0,x(t):INK 1,y(t):INK 2,p(t):INK 3,c(t)-10 ELSE xm=x(t):ym=y(t)
1640 NEXT:GOSUB 1300:RETURN
1644 '
1645 ' Load picture
1646 '
1650 SPEED KEY 20,2:CLS:|DIR,"*.drw":INPUT"Load - Filename without extension:      ",a$:IF a$="" THEN GOTO 1480 ELSE index=0:OPENIN a$+".drw":CLS:PRINT"Loading command:"
1660 WHILE NOT EOF
1670 INPUT #9,x(index):INPUT #9,y(index):INPUT #9,p(index):INPUT #9,c(index)
1680 LOCATE 17,1:PRINT index:index=index+1:WEND:CLOSEIN
1690 xx=x(index-1):yy=y(index-1):GOTO 1480
1700 IF cmd=0 OR cmd=3 THEN cmd=1
1710 RETURN
4000 IF cmd=4 THEN p1=0:p2=1
4010 IF cmd=5 THEN p1=0:p2=2
4020 IF cmd=6 THEN p1=0:p2=3
4030 IF cmd=7 THEN p1=1:p2=2
4040 IF cmd=8 THEN p1=1:p2=3
4050 IF cmd=9 THEN p1=2:p2=3
4060 '*** Identification of background color
4070 jp=0:xl=-2:yf=yy:xf=xx:f=p1:z=0:hf=TEST(xf,yf):IF hf=f THEN jp=1:p3=p1:p1=p2:p2=p3:f=p1:IF hf=f THEN jp=1:RETURN
4080 '*** Coord. on the screen ?
4090 IF xf<0 OR xf>639 OR yf<0 OR yf>399 THEN 4310
4100 '*** Search UP
4110 WHILE TEST(xf,yf)=hf AND yf<399:yf=yf+2:WEND
4120 yf=yf-2:fl=-1:fr=-1
4130 '*** Draw line down
4140 WHILE yf>=0 AND TEST(xf,yf)=hf
4150 IF rgt=1 AND lft=0 AND jp=1 AND xl>-1 THEN PLOT xl,yl,p2:xl=-2:GOTO 4200
4160 '*** Check to the left
4170 vfl=fl:fl=TEST(xf-2,yf)
4180 IF vfl<>hf AND fl=hf THEN xf(z)=xf-2:yf(z)=yf:z=z+1:rgt=0:lft=1
4190 '*** Check to the right
4200 IF lft=1 AND rgt=0 AND jp=1 AND xl>-1 THEN PLOT xl,yl,p2:xl=-2:GOTO 4240
4210 vfr=fr:fr=TEST(xf+2,yf)
4220 IF vfr<>hf AND fr=hf THEN xf(z)=xf+2:yf(z)=yf:z=z+1:lft=0:rgt=1
4230 '*** Set point
4240 IF ((xf/2)AND 1)=1 THEN ap=1 ELSE ap=0
4250 IF ((yf/2) AND 1)=1 THEN IF ap=1 THEN ap=0 ELSE ap=1
4260 IF jp=1 AND ap=1 THEN xl=xf:yl=yf
4270 IF jp=0 THEN IF ap=1 THEN f=p1 ELSE f=p2
4280 PLOT xf,yf,f:yf=yf-2
4290 WEND
4300 '*** Get new coordinates
4310 z=z-1:rgt=0:lft=0:IF jp=1 AND xl>-1 THEN PLOT xl,yl,p2:xl=-2
4320 IF xl>-1 THEN PLOT xl,yl,p2:xl=-2
4330 IF z>=0 THEN xf=xf(z):yf=yf(z):GOTO 4090
4340 '*** Return if there are no more
4350 IF jp=1 AND xl>-1 THEN PLOT xl,yl,p2
4360 RETURN
5000 LOAD"!emu.bin",&A200:CALL &A200:RUN
*/ });
