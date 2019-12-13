/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem 100demo - 100% BASIC Demo
2 rem (c) Markus Hohmann (Devilmarkus)
3 rem https://www.cpc-power.com/index.php?page=detail&num=16125
4 rem Modifications: some delays; press key to skip to next part
5 rem
10 MODE 1:INK 0,0:BORDER 0:INK 1,26:INK 2,3:INK 3,6:OUT &BC00,6:OUT &BD00,24:PAPER 1:PEN 0
20 a$="Hello CPC freaks! Welcome to the ultimate 100% BASIC demo!    "
30 LOCATE 8,10:PRINT"Hold on! Calculating..."
40 mx=LEN(a$)*8*8:DIM pix(mx)
50 FOR t=1 TO LEN(a$):LOCATE 1,25:PRINT CHR$(24);MID$(a$,t,1);CHR$(24)
60 FOR y=14 TO 0 STEP -2:FOR x=0 TO 14 STEP 2:pix(pt)=TEST(x,y):pt=pt+1:LOCATE 31,10:PRINT LEN(a$)-t:NEXT:NEXT
70 NEXT
80 TAGOFF:LOCATE 1,1:PRINT CHR$(23);CHR$(0);:PAPER 1:PEN 0:pt=0:MODE 0:CLS:TAG:tk=200:tt=8:cl=2:RESTORE 150:FOR t=1 TO 15:READ a:INK t,a:NEXT
85 '
90 t!=time+10:PLOT -2,-2,cl:FOR k=0 TO 7:IF pix(pt)=1 THEN MOVE tk+k*16,14:PRINT CHR$(133);
100 pt=pt+1:NEXT:MOVE tk,14:DRAW tk+128,14,1:TAGOFF:LOCATE 1,25:PRINT CHR$(10):TAG
110 IF pt=mx THEN GOTO 152
120 tk=tk+tt:IF tk>240 THEN tt=tt-1 ELSE IF tk<200 THEN tt=tt+1
130 cl=cl+1:IF cl=16 THEN cl=2
140 while time<t!:call &bd19:wend:if inkey$="" then GOTO 90
145 '
150 DATA 1,2,11,23,22,18,9,12,24,25,15,6,3,4,5
151 '
152 FOR t=1 TO 10:WINDOW #1,t,t,1,25:WINDOW #2,21-t,21-t,1,25:CLS #1:CLS #2:CALL &BD19:NEXT
160 PAPER 0:PEN 1:MODE 1:INK 0,0:INK 1,2:INK 2,18:INK 3,6:BORDER 0:OUT &BC00,6:OUT &BD00,24:a$=CHR$(207)+CHR$(207)+CHR$(143)+CHR$(143)+CHR$(143)+CHR$(207)+CHR$(207):xp=15:xs=4:xpa=15:xsa=3:xpb=15:xsb=2
165 '
170 t!=time+10:PEN 2:LOCATE 34-xp/2,25:PRINT a$;:PEN 3:LOCATE xpa,25:PRINT a$;:PEN 1:LOCATE xpb,25:PRINT a$;CHR$(10)
180 xp=xp+xs:IF xp>20 THEN xs=xs-1
190 xpa=xpa+xsa:IF xpa>25 THEN xsa=xsa-1
200 xpb=xpb+xsb:IF xpb>30 THEN xsb=xsb-1
210 IF xp<8 THEN xs=xs+1
220 IF xpa<8 THEN xsa=xsa+1
230 IF xpb<5 THEN xsb=xsb+1
240 pr=pr+1:IF pr=100 THEN GOTO 260
250 while time<t!:call &bd19:wend:if inkey$="" then GOTO 170
255 '
260 pr=0:MODE 1:INK 0,0:INK 1,24:INK 2,6:INK 3,18:a$=CHR$(207)+CHR$(143)+CHR$(207):pps2=300:pt2=4:pps=300:pt=8:xp=15:xs=4:xpa=15:xsa=3:xpb=15:xsb=2:LOCATE 1,1:PRINT CHR$(23);CHR$(1)
265 '
270 t!=time+10:TAG:PLOT -4,-4,2:MOVE ((34-xp/2)*2)+pps,14:PRINT a$;:PLOT -4,-4,3:MOVE (xpa*2)+pps2,14:PRINT a$;:TAGOFF:LOCATE 1,25:PRINT CHR$(10)
280 xp=xp+xs:IF xp>20 THEN xs=xs-1 ELSE IF xp<8 THEN xs=xs+1
290 xpa=xpa+xsa:IF xpa>25 THEN xsa=xsa-1 ELSE IF xpa<8 THEN xsa=xsa+1
300 pps=pps+pt:IF pps>400 THEN pt=pt-4 ELSE IF pps<100 THEN pt=pt+4
310 pps2=pps2+pt2:IF pps2>400 THEN pt2=pt2-2 ELSE IF pps2<100 THEN pt2=pt2+2
320 pr=pr+1:IF pr=200 THEN pr=0:GOTO 80
330 while time<t!:call &bd19:wend:if inkey$="" then GOTO 270
335 goto 80
*/ });
