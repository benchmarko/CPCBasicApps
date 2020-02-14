/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem canabalt - CPC Anabalt
2 rem (c) Logiker, BASIC 10Liners 2019, https://gkanold.wixsite.com/homeputerium/kopie-von-games-list-2019-2 ; https://www.dropbox.com/sh/zj7u96etduyq6bv/AACp5K0eKXPKg2r1e-I7wXCYa/CPC/68%20CPCanabalt
3 rem Modifications: renumbered lines to start with 4; replaced CR and LF with n$=chr$(10), r$=chr$(13); comment in line 2019
4 INK 0,13:INK 1,0:h=207:w=440:v=54:p=45:q=75:g=24:n$=chr$(10):r$=chr$(13):g$=" GAME OVER":PRINT ""r$r$"! CPCanabalt":b=&BC00:d=&BD00:r=MAX(r,t)
5 z=104:ORIGIN z,0:MOVE 0,z:DRAW w,z:DRAW w,300:DRAW 0,300:DRAW 0,z:FOR i=1 TO 300:OUT b,2:OUT d,45+2*(i MOD 2):NEXT:t=0
6 o=u:SOUND 1,0,17,7,0,0,5+2*ABS(o-4):IF u=0 AND INKEY$=" " THEN u=1 ELSE IF u=7 THEN u=0 ELSE IF u>0 THEN u=u+1
7 LOCATE 20,8+MAX(1,ABS(o-4)):PRINT " ":LOCATE 20,8+MAX(1,ABS(u-4)):PRINT CHR$(250+s):s=1-s:PRINT ""r$""t
8 g=g-1:IF g<0 THEN g=MAX(q+4+INT(RND(1)*l*2),f):PRINT " ":MOVE 0,h:DRAW 0,230:ELSE IF g<f-1 THEN LOCATE g+14,12:PRINT "Ï ";
9 MOVE 1,h:DRAW MAX(1,MIN(w,p*8)),h:DRAW MIN(w,(p+4)*8),h,0:DRAW MIN(w,q*8),h,1:DRAW MIN(w,(q+4)*8),h,0:DRAW w,h,1
10 IF (g=6 OR g=7) AND (u<1 OR u>7) THEN LOCATE 20,12:PRINT "•Ÿ"g$:INPUT"",a:GOTO 4 ELSE PRINT"A"r
11 IF p<7 THEN IF p>2 AND u=0 THEN FOR i=1 TO 6:LOCATE 20,11+i:PRINT " "n$"ú";:NEXT:PRINT "Ÿ"n$"ƒ"g$:INPUT"",a:GOTO 4
12 t=t+1:l=MAX(3,10-t\50):q=q-1:p=p-1:IF p<-3 THEN p=q:q=MAX(INT(v),MAX(p+4,g)+l+INT(RND(1)*(20-l*2)))
13 IF t MOD 2 THEN w=w-1:DRAW w,104:DRAW w,300:v=v-0.125:f=INT(v):IF t=199 THEN BORDER 5,24:GOTO 6 ELSE 6 ELSE 6
2019 '(c) Logiker (BASIC 10 Liners - PUR-120)
*/ });
