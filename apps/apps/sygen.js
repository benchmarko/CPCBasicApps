/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem sygen - Symbol Generator 2x2
2 rem (c) SkulleateR
3 rem https://www.cpcwiki.eu/forum/programming/sygen-symbol-generator-v0-0001/
4 rem Modifications: delay
5 MODE 1:BORDER 0:PRINT"Symbol Generator 2x2"
6 LOCATE 1,4:PRINT"Use Cursor + Space to draw, C to clear, ENTER to finish input":CALL &BB06:CLS
7 x(1)=0:y(1)=0:x(2)=1:y(2)=25
8 DIM a(20),b(20),c(20),d(20),e(20),f(20),g(20),h(20),i(20),j(20),k(20),l(20),m(20),n(20),o(20),p(20)
10 MOVE x(1),y(1)
20 DRAWR 14,0,2:DRAWR 0,14,2:DRAWR -14,0,2:DRAWR 0,-14,2
30 MOVE 0,260:DRAW 260,260,1:DRAW 260,0,1
50 FOR z=1 TO 50/10:call &bd19:NEXT
100 IF INKEY(0)=0 THEN 500
110 IF INKEY(1)=0 THEN 510
120 IF INKEY(2)=0 THEN 520
130 IF INKEY(8)=0 THEN 530
140 IF INKEY(47)=0 THEN 540
150 IF INKEY(18)=0 THEN 1100
160 IF INKEY(62)=0 THEN 560
170 GOTO 50
500 IF y(2)=10 THEN 100 ELSE GOSUB 1000:y(1)=y(1)+16:y(2)=y(2)-1:GOTO 10
510 IF x(2)=16 THEN 100 ELSE GOSUB 1000:x(1)=x(1)+16:x(2)=x(2)+1:GOTO 10
520 IF y(2)=25 THEN 100 ELSE GOSUB 1000:y(1)=y(1)-16:y(2)=y(2)+1:GOTO 10
530 IF x(2)=1 THEN 100 ELSE GOSUB 1000:x(1)=x(1)-16:x(2)=x(2)-1:GOTO 10
540 LOCATE x(2),y(2):PRINT CHR$(143):GOTO 10
560 LOCATE x(2),y(2):PRINT" ":GOTO 10
1000 MOVE x(1),y(1):DRAWR 14,0,0:DRAWR 0,14,0:DRAWR -14,0,0:DRAWR 0,-14,0
1010 RETURN
1100 CALL &BB03:LOCATE 1,1:PRINT"BASIC CODE : "
1110 t=128:FOR z=1 TO 8:a(z)=t:b(z)=t:c(z)=t:d(z)=t:e(z)=t:f(z)=t:g(z)=t:h(z)=t:t=t/2:NEXT
1111 t=128:FOR z=9 TO 16:a(z)=t:b(z)=t:c(z)=t:d(z)=t:e(z)=t:f(z)=t:g(z)=t:h(z)=t:t=t/2:NEXT z
1112 t=128:FOR z=1 TO 8:i(z)=t:j(z)=t:k(z)=t:l(z)=t:m(z)=t:n(z)=t:o(z)=t:p(z)=t:t=t/2:NEXT z
1113 t=128:FOR z=9 TO 16:i(z)=t:j(z)=t:k(z)=t:l(z)=t:m(z)=t:n(z)=t:o(z)=t:p(z)=t:t=t/2:NEXT z
1120 y=2:x=2:FOR t=1 TO 16:g=TEST(x,y):IF g=0 THEN GOSUB 2000
1130 x=x+16
1140 NEXT
1150 y=18:x=2:FOR t=1 TO 16:g=TEST(x,y):IF g=0 THEN GOSUB 2010
1160 x=x+16
1170 NEXT
1180 y=34:x=2:FOR t=1 TO 16:g=TEST(x,y):IF g=0 THEN GOSUB 2020
1190 x=x+16
1200 NEXT
1210 y=50:x=2:FOR t=1 TO 16:g=TEST(x,y):IF g=0 THEN GOSUB 2030
1220 x=x+16
1230 NEXT
1240 y=66:x=2:FOR t=1 TO 16:g=TEST(x,y):IF g=0 THEN GOSUB 2040
1250 x=x+16
1260 NEXT
1270 y=82:x=2:FOR t=1 TO 16:g=TEST(x,y):IF g=0 THEN GOSUB 2050
1280 x=x+16
1290 NEXT
1300 y=98:x=2:FOR t=1 TO 16:g=TEST(x,y):IF g=0 THEN GOSUB 2060
1310 x=x+16
1320 NEXT
1330 y=114:x=2:FOR t=1 TO 16:g=TEST(x,y):IF g=0 THEN GOSUB 2070
1340 x=x+16
1350 NEXT
1360 y=130:x=2:FOR t=1 TO 16:g=TEST(x,y):IF g=0 THEN GOSUB 2080
1370 x=x+16
1380 NEXT
1390 y=146:x=2:FOR t=1 TO 16:g=TEST(x,y):IF g=0 THEN GOSUB 2090
1400 x=x+16
1410 NEXT
1420 y=162:x=2:FOR t=1 TO 16:g=TEST(x,y):IF g=0 THEN GOSUB 2100
1421 x=x+16
1422 NEXT
1430 y=178:x=2:FOR t=1 TO 16:g=TEST(x,y):IF g=0 THEN GOSUB 2110
1431 x=x+16
1432 NEXT
1440 y=194:x=2:FOR t=1 TO 16:g=TEST(x,y):IF g=0 THEN GOSUB 2120
1441 x=x+16
1442 NEXT
1450 y=210:x=2:FOR t=1 TO 16:g=TEST(x,y):IF g=0 THEN GOSUB 2130
1451 x=x+16
1452 NEXT
1460 y=226:x=2:FOR t=1 TO 16:g=TEST(x,y):IF g=0 THEN GOSUB 2140
1461 x=x+16
1462 NEXT
1470 y=242:x=2:FOR t=1 TO 16:g=TEST(x,y):IF g=0 THEN GOSUB 2150
1471 x=x+16
1472 NEXT
1490 LOCATE 1,2
1499 w=9:q=255:FOR z=1 TO 2
1500 a=a(w)+a(w+1)+a(w+2)+a(w+3)+a(w+4)+a(w+5)+a(w+6)+a(w+7)
1505 b=b(w)+b(w+1)+b(w+2)+b(w+3)+b(w+4)+b(w+5)+b(w+6)+b(w+7)
1510 c=c(w)+c(w+1)+c(w+2)+c(w+3)+c(w+4)+c(w+5)+c(w+6)+c(w+7)
1515 d=d(w)+d(w+1)+d(w+2)+d(w+3)+d(w+4)+d(w+5)+d(w+6)+d(w+7)
1520 e=e(w)+e(w+1)+e(w+2)+e(w+3)+e(w+4)+e(w+5)+e(w+6)+e(w+7)
1525 f=f(w)+f(w+1)+f(w+2)+f(w+3)+f(w+4)+f(w+5)+f(w+6)+f(w+7)
1530 g=g(w)+g(w+1)+g(w+2)+g(w+3)+g(w+4)+g(w+5)+g(w+6)+g(w+7)
1535 h=h(w)+h(w+1)+h(w+2)+h(w+3)+h(w+4)+h(w+5)+h(w+6)+h(w+7)
1600 SYMBOL q,h,g,f,e,d,c,b,a
1800 a$=STR$(a):a=LEN(a$):a$=RIGHT$(a$,(a-1))
1810 b$=STR$(b):b=LEN(b$):b$=RIGHT$(b$,(b-1))
1820 c$=STR$(c):c=LEN(c$):c$=RIGHT$(c$,(c-1))
1830 d$=STR$(d):d=LEN(d$):d$=RIGHT$(d$,(d-1))
1840 e$=STR$(e):e=LEN(e$):e$=RIGHT$(e$,(e-1))
1850 f$=STR$(f):f=LEN(f$):f$=RIGHT$(f$,(f-1))
1860 g$=STR$(g):g=LEN(g$):g$=RIGHT$(g$,(g-1))
1870 h$=STR$(h):h=LEN(h$):h$=RIGHT$(h$,(h-1))
1880 q$=STR$(q):q=LEN(q$):q$=RIGHT$(q$,(q-1))
1900 PRINT "SYMBOL ";q$;",";h$;",";g$;",";f$;",";e$;",";d$;",";c$;",";b$;",";a$
1910 w=1:q=254:NEXT
1950 GOSUB 3000
1990 LOCATE 18,10:PRINT"Preview : ";:LOCATE 28,10:PRINT CHR$(252);CHR$(253):LOCATE 28,11:PRINT CHR$(254);CHR$(255)
1995 LOCATE 18,14:PRINT"Press ANY key !":CALL &BB06
1999 END
2000 a(t)=0:RETURN
2010 b(t)=0:RETURN
2020 c(t)=0:RETURN
2030 d(t)=0:RETURN
2040 e(t)=0:RETURN
2050 f(t)=0:RETURN
2060 g(t)=0:RETURN
2070 h(t)=0:RETURN
2080 i(t)=0:RETURN
2090 j(t)=0:RETURN
2100 k(t)=0:RETURN
2110 l(t)=0:RETURN
2120 m(t)=0:RETURN
2130 n(t)=0:RETURN
2140 o(t)=0:RETURN
2150 p(t)=0:RETURN
2999 END
3000 REM 1234
3010 w=9:q=253:FOR z=1 TO 2
3020 i=i(w)+i(w+1)+i(w+2)+i(w+3)+i(w+4)+i(w+5)+i(w+6)+i(w+7)
3030 j=j(w)+j(w+1)+j(w+2)+j(w+3)+j(w+4)+j(w+5)+j(w+6)+j(w+7)
3040 k=k(w)+k(w+1)+k(w+2)+k(w+3)+k(w+4)+k(w+5)+k(w+6)+k(w+7)
3050 l=l(w)+l(w+1)+l(w+2)+l(w+3)+l(w+4)+l(w+5)+l(w+6)+l(w+7)
3060 m=m(w)+m(w+1)+m(w+2)+m(w+3)+m(w+4)+m(w+5)+m(w+6)+m(w+7)
3070 n=n(w)+n(w+1)+n(w+2)+n(w+3)+n(w+4)+n(w+5)+n(w+6)+n(w+7)
3080 o=o(w)+o(w+1)+o(w+2)+o(w+3)+o(w+4)+o(w+5)+o(w+6)+o(w+7)
3090 p=p(w)+p(w+1)+p(w+2)+p(w+3)+p(w+4)+p(w+5)+p(w+6)+p(w+7)
3100 SYMBOL q,p,o,n,m,l,k,j,i
3110 i$=STR$(i):i=LEN(i$):i$=RIGHT$(i$,(i-1))
3120 j$=STR$(j):j=LEN(j$):j$=RIGHT$(j$,(j-1))
3130 k$=STR$(k):k=LEN(k$):k$=RIGHT$(k$,(k-1))
3140 l$=STR$(l):l=LEN(l$):l$=RIGHT$(l$,(l-1))
3150 m$=STR$(m):m=LEN(m$):m$=RIGHT$(m$,(m-1))
3160 n$=STR$(n):n=LEN(n$):n$=RIGHT$(n$,(n-1))
3170 o$=STR$(o):o=LEN(o$):o$=RIGHT$(o$,(o-1))
3180 p$=STR$(p):p=LEN(p$):p$=RIGHT$(p$,(p-1))
3190 q$=STR$(q):q=LEN(q$):q$=RIGHT$(q$,(q-1))
3200 PRINT "SYMBOL ";q$;",";p$;",";o$;",";n$;",";m$;",";l$;",";k$;",";j$;",";i$
3210 w=1:q=252:NEXT
3220 RETURN
*/ });
