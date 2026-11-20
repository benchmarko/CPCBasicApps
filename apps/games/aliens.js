/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 REM aliens - Aliens Attack
2 REM (c) Ross "Out Bush" Simpson, 2018
3 REM https://gkanold.wixsite.com/homeputerium/gameslist2018
4 REM https://www.dropbox.com/scl/fo/tr4tbbgo609flcpkb2ihg/AMAQHzFPBwZe7z5OHJjeuHY/CPC/27%20-%20Aliens%20Attack?dl=0&rlkey=3lnvpqwufybz3de6uottmvxjc
5 REM BASIC 10-Liner Contest 2018, Category: WILD
6 REM Modifications: call &bd19
7 REM CPCBasic-keys: [11,"\u2191",10,"\u2193",332,"Fire"]
8 REM
10 MODE 0:DEFINT a-z:DIM g(25),d(8):p=1:a$="0002081022252838445455585D696C747C7E8081838B93A5AA":FOR z=1 TO 25:g(z)=VAL("&"+MID$(a$,p,2)):p=p+2:NEXT z:b$="AADLOGAAQDNXWJGQRUTTVKYJAQRRPAAAABFMTRAAAABEJAAAAADHAAAAAAGAHAAAAHIIIHAAAIAAAIAACASABADA":p=1
20 FOR c=245 TO 255:FOR q=1 TO 8:d(q)=g(ASC(MID$(b$,p,1))-64):p=p+1:NEXT q:SYMBOL c,d(1),d(2),d(3),d(4),d(5),d(6),d(7),d(8):NEXT c:PRINT"Ĝ0@@Ĝ1ZZĜ2MMĜ3CCĜ4@@Ĝ5@@Ĝ6MMĜ:NNĜ;ZZĜ<YYĜ=XXĜ>FFĜ?CCĝ@@":wn$=CHR$(22)+CHR$(1):wf$=CHR$(22)+CHR$(0):PRINT wn$;:GOSUB 150
30 p=2:GOSUB 130:ENT 1,9,7,2,0,0,0:i=1:s=5:x=14:y=10:v=y:b=245:e=246:p=1:GOSUB 140:w=6:z=INT(RND*6)+9:i=10:s=1:b=249:e=250:x=w:y=z:GOSUB 140:SOUND 1,10,5,15,0,1,0:l=90:sc=220:a=0:f=0:WHILE (l<>999) AND (f=0):WHILE (a<10) AND (f=0):p=1:GOSUB 120:h=0
40 IF JOY(0)=16 AND t<>1 THEN SOUND 2,0,10,15,0,1,31:t=1:q=13:r=v:LOCATE q,r:PEN 1:PRINT"-";
50 i=1:s=5:b=245:e=246:WHILE (JOY(0)=1) AND (h=0):x=14:y=v:p=2:GOSUB 140:v=v-1:y=v:p=1:GOSUB 140:h=1:WEND:WHILE (JOY(0)=2) AND (h=0):x=14:y=v:p=2:GOSUB 140:v=v+1:y=v:p=1:GOSUB 140:h=1:WEND
60 IF v=8 THEN p=4:GOSUB 140:x=14:y=v:p=2:GOSUB 140:i=11:s=1:b=251:e=255:p=1:GOSUB 140:SOUND 1,0,50,15,,,31:f=1:ELSE IF v=15 THEN p=3:GOSUB 140:x=14:y=v:p=2:GOSUB 140:i=11:s=1:b=251:e=255:p=1:GOSUB 140:SOUND 1,0,50,15,,,31:f=1
70 IF w=14 THEN IF z=v THEN p=3:GOSUB 140:x=w:y=z:p=2:GOSUB 140:i=11:s=1:b=251:e=255:p=1:GOSUB 140:SOUND 1,0,50,15,,,31:f=1
80 IF t=1 THEN x=q:y=r:p=2:GOSUB 140:p=1:GOSUB 130
90 WEND:l=l-10:a=0:WHILE l=40:l=999:WEND:WEND:WHILE f=1:PRINT"ď1ğĆēGame Over!ğĉĕ";(sc-220)/2;"%":f=2:WEND:WHILE l=999 AND f=0:p=3:GOSUB 140:PRINT"ď1ğăēCongratulations!":l=0:WEND:WHILE INKEY$<>"":WEND:CALL &BB18:RUN
100 IF q=w THEN IF r=z THEN sc=sc+4:p=2:GOSUB 120:a=a+1:t=0:x=q:y=r:q=0:r=0:p=2:GOSUB 140:i=11:s=1:b=251:e=255:p=1:GOSUB 140:w=5:z=INT(RND*6)+9:d=0:WHILE d<12:SOUND 1,0,3,15,,,31:d=d+1:WEND:p=2:GOSUB 140:SOUND 1,10,5,15,0,1,0
110 RETURN
120 IF p=1 THEN x=w:y=z:p=2:GOSUB 140:w=w+1:i=10:s=1:b=249:e=250:x=w:y=z:p=1:GOSUB 140:CALL &BD19:GOSUB 100:WHILE w=15:p=2:GOSUB 140:w=0:f=1:p=3:GOSUB 140:WEND:FOR d=1 TO l/9:call &bd19:NEXT d:RETURN:ELSE IF p=2 THEN PLOT sc,128,1:DRAW sc,114:RETURN
130 IF p=1 THEN q=q-1:LOCATE q,r:PEN 1:PRINT"-":WHILE q=6:x=q:y=r:p=2:GOSUB 140:t=0:q=0:WEND:GOSUB 100:RETURN:ELSE IF p=2 THEN PLOT -2,-2,1:FOR x=224 TO 392 STEP 24:MOVE x,128:TAG:PRINT"Ï";:TAGOFF:NEXT x:RETURN
140 IF p=1 THEN FOR c=b TO e:PEN i:LOCATE x,y:PRINT CHR$(c);:i=i+s:NEXT c:RETURN:ELSE IF p=2 THEN PRINT"ğāā";wf$;:LOCATE x,y:PRINT" ";"ğāā";wn$;:RETURN:ELSE IF p=3 THEN PRINT"Ĝ2MMĜ3CCĜ4@@Ĝ5@@":RETURN:ELSE PRINT"Ĝ2@@Ĝ3@@Ĝ4MMĜ5CC":RETURN
150 i3=4:i4=2:y=7:s=1:WHILE y<17:FOR x=6 TO 15:i=i3:b=247:e=248:p=1:GOSUB 140:x=x+1:i=i4:GOSUB 140:NEXT x:i3=2:i4=4:WHILE y=8:y=14:i3=4:i4=2:WEND:y=y+1:WEND:PEN 1:SPEED INK 5,5:INK 2,13,0:INK 3,3,0:INK 4,0,13:INK 5,0,3:RETURN
*/ });
