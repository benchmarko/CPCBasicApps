/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem sygen - Symbol Generator
2 rem (c) ...
3 rem https://www.cpcwiki.eu/forum/programming/sygen-symbol-generator-v0-0001/
5 MODE 1:BORDER 0
6 LOCATE 1,4:PRINT"Use Cursor + Space to draw, C to clear, ENTER to finish input":CALL &BB06:CLS
7 x(1)=0:y(1)=0:x(2)=1:y(2)=25
10 MOVE x(1),y(1)
20 DRAWR 14,0,2:DRAWR 0,14,2:DRAWR -14,0,2:DRAWR 0,-14,2
30 MOVE 0,130:DRAW 130,130,1:DRAW 130,0,1
50 FOR l=1 TO 50:NEXT
100 IF INKEY(0)=0 THEN 500
110 IF INKEY(1)=0 THEN 510
120 IF INKEY(2)=0 THEN 520
130 IF INKEY(8)=0 THEN 530
140 IF INKEY(47)=0 THEN 540
150 IF INKEY(18)=0 THEN 1100
160 IF INKEY(62)=0 THEN 560
170 GOTO 50
500 IF y(2)=18 THEN 100 ELSE GOSUB 1000:y(1)=y(1)+16:y(2)=y(2)-1:GOTO 10
510 IF x(2)=8 THEN 100 ELSE GOSUB 1000:x(1)=x(1)+16:x(2)=x(2)+1:GOTO 10
520 IF y(2)=25 THEN 100 ELSE GOSUB 1000:y(1)=y(1)-16:y(2)=y(2)+1:GOTO 10
530 IF x(2)=1 THEN 100 ELSE GOSUB 1000:x(1)=x(1)-16:x(2)=x(2)-1:GOTO 10
540 LOCATE x(2),y(2):PRINT CHR$(143):GOTO 10
560 LOCATE x(2),y(2):PRINT" ":GOTO 10
1000 MOVE x(1),y(1):DRAWR 14,0,0:DRAWR 0,14,0:DRAWR -14,0,0:DRAWR 0,-14,0
1010 RETURN
1100 CALL &BB03:LOCATE 1,1:PRINT"BASIC CODE : "
1110 t=128:FOR z=1 TO 8:a(z)=t:b(z)=t:c(z)=t:d(z)=t:e(z)=t:f(z)=t:g(z)=t:h(z)=t:t=t/2:NEXT z:y=2
1120 x=2:FOR t=1 TO 8:g=TEST(x,y):IF g=0 THEN GOSUB 2000
1130 x=x+16
1140 NEXT
1150 y=18:x=2:FOR t=1 TO 8:g=TEST(x,y):IF g=0 THEN GOSUB 2010
1160 x=x+16
1170 NEXT
1180 y=34:x=2:FOR t=1 TO 8:g=TEST(x,y):IF g=0 THEN GOSUB 2020
1190 x=x+16
1200 NEXT
1210 y=50:x=2:FOR t=1 TO 8:g=TEST(x,y):IF g=0 THEN GOSUB 2030
1220 x=x+16
1230 NEXT
1240 y=66:x=2:FOR t=1 TO 8:g=TEST(x,y):IF g=0 THEN GOSUB 2040
1250 x=x+16
1260 NEXT
1270 y=82:x=2:FOR t=1 TO 8:g=TEST(x,y):IF g=0 THEN GOSUB 2050
1280 x=x+16
1290 NEXT
1300 y=98:x=2:FOR t=1 TO 8:g=TEST(x,y):IF g=0 THEN GOSUB 2060
1310 x=x+16
1320 NEXT
1330 y=114:x=2:FOR t=1 TO 8:g=TEST(x,y):IF g=0 THEN GOSUB 2070
1340 x=x+16
1350 NEXT
1500 a=a(1)+a(2)+a(3)+a(4)+a(5)+a(6)+a(7)+a(8)
1510 b=b(1)+b(2)+b(3)+b(4)+b(5)+b(6)+b(7)+b(8)
1520 c=c(1)+c(2)+c(3)+c(4)+c(5)+c(6)+c(7)+c(8)
1530 d=d(1)+d(2)+d(3)+d(4)+d(5)+d(6)+d(7)+d(8)
1540 e=e(1)+e(2)+e(3)+e(4)+e(5)+e(6)+e(7)+e(8)
1550 f=f(1)+f(2)+f(3)+f(4)+f(5)+f(6)+f(7)+f(8)
1560 g=g(1)+g(2)+g(3)+g(4)+g(5)+g(6)+g(7)+g(8)
1570 h=h(1)+h(2)+h(3)+h(4)+h(5)+h(6)+h(7)+h(8)
1600 SYMBOL 255,h,g,f,e,d,c,b,a
1700 LOCATE 10,10:PRINT"Preview :  ";:PRINT CHR$(255)
1800 a$=STR$(a):a=LEN(a$):a$=RIGHT$(a$,(a-1))
1810 b$=STR$(b):b=LEN(b$):b$=RIGHT$(b$,(b-1))
1820 c$=STR$(c):c=LEN(c$):c$=RIGHT$(c$,(c-1))
1830 d$=STR$(d):d=LEN(d$):d$=RIGHT$(d$,(d-1))
1840 e$=STR$(e):e=LEN(e$):e$=RIGHT$(e$,(e-1))
1850 f$=STR$(f):f=LEN(f$):f$=RIGHT$(f$,(f-1))
1860 g$=STR$(g):g=LEN(g$):g$=RIGHT$(g$,(g-1))
1870 h$=STR$(h):h=LEN(h$):h$=RIGHT$(h$,(h-1))
1900 LOCATE 1,2:PRINT "SYMBOL 255,";h$;",";g$;",";f$;",";e$;",";d$;",";c$;",";b$;",";a$:LOCATE 1,4:PRINT"Press Key":CALL &BB06
1999 END
2000 a(t)=0:RETURN
2010 b(t)=0:RETURN
2020 c(t)=0:RETURN
2030 d(t)=0:RETURN
2040 e(t)=0:RETURN
2050 f(t)=0:RETURN
2060 g(t)=0:RETURN
2070 h(t)=0:RETURN
*/ });
