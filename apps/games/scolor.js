/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 DEFINT a-z:RANDOMIZE TIME :h=0:l$="3555557062222220611244707117117055571110744711603447557 07111111035575570355711100004004044444040355755503444447065555570344744703445556055575550222222204444447057555550465555503555557035565550344211705555552055555750"
2 MODE 0:BORDER 0:la$=CHR$(8)+CHR$(10):FOR i=0 TO 15:INK i,0:NEXT:SYMBOL AFTER 48:p=1:FOR i=1 TO 27:FOR j=1 TO 8:u(j)=VAL(MID$(l$,p,1))*16:p=p+1:NEXT j:SYMBOL i+47,u(1),u(2),u(3),u(4),u(5),u(6),u(7), u(8):NEXT i:SYMBOL 255,108,238,254,254,254,254,254,254
3 SPEED INK 20,20:CLS:FOR i=0 TO 15:INK i,0:NEXT:INK 1,24:FOR i=2 TO 5:INK i,13:NEXT:INK 10,16:INK 11,7:SYMBOL 254,124,124,124,56,56,16,16,0:SYMBOL 253,124,124,254,254,254,146,146,146:SYMBOL 252,254,238,238,254,124,84,84,84:v$=" "+la$+" "
4 e$=CHR$(255)+la$+CHR$(254):m$=CHR$(253)+la$+CHR$(252):c$=CHR$(154):a$="H=FG?: 0":f=0:g=399:n=0: GOSUB 9:a$="AB:"+STR$(h):f=0:g=375:GOSUB 9:a$="HAB?C>BE@ =FCFG":f=180:g=14: GOSUB 9:d(0)=24: d(1)=2:d(2)=6:d(3)=18:d(4)=12:d(5)=1:d(6)=3:d(7)=9:r=0:s=0:k=0
5 t=20:FOR i=0 TO 3:PEN i+2:LOCATE 2*i+7,6:PRINT m$:PLOT i*64+204,272,i+6:DRAW i*64+204,136:NEXT: PEN 10:FOR i=7 TO 13 STEP 2:LOCATE i,20:?e$:NEXT:n=0:GOSUB 10:x=10:y=18:PEN 1:n=1:GOSUB 10: WHILE s=0:n=2:GOSUB 9:GOSUB 6:n=2:GOSUB 7:n=1:GOSUB 9:WEND:GOTO 3
6 IF (INKEY(8)<>-1 AND x>6) THEN PEN 0:n=1:GOSUB 10:x=x-1:PEN 1:n=1:GOSUB 10:RETURN ELSE IF (INKEY(1)<>-1 AND x<14) THEN PEN 0:n=1:GOSUB 10:x=x+1:PEN 1:n=1:GOSUB 10:RETURN ELSE IF INKEY(47)<>-1 THEN k=(k+1)MOD 4:INK 1,d(k):n=1:GOSUB 9:RETURN ELSE RETURN
7 IF n=0 THEN FOR i=100 TO 500 STEP 100:SOUND 2,i:NEXT:FOR i=1 TO 3:SOUND 2,600:SOUND 2,0:NEXT: RETURN ELSE IF n=1 THEN LOCATE 2*b+3,20:?v$:RETURN ELSE q=q-3:IF q>0 THEN RETURN ELSE p=p-4:q=t:IF p>0 THEN SPEED INK p,p:RETURN ELSE INK b+4,d(o):n=1:GOSUB 9
8 IF o=k AND x=2*b+3 THEN SOUND 2,80:r=r+50:t=t-1:a$=STR$(r):f=96:g=399:n=0:GOSUB 9:INK b+4,0:SPEED INK 20,20:INK b,13:GOSUB 10:RETURN ELSE n=2:GOSUB 10:n=3:GOSUB 10:a$="@<D? FI?G":f=232:g=207: n=0:GOSUB 9:GOSUB 7:n=1:FOR j=1 TO 20:GOSUB 9:NEXT:s=1:RETURN
9 IF n=0 THEN w=0:FOR i=1 TO LEN(a$):PLOT -2,-2,11:TAG:MOVE f+(4*w),g:PRINT MID$(a$,i,1);:w=w+4: TAGOFF:NEXT i:RETURN ELSE IF n=1 THEN FOR i=1 TO 100/10:call &bd19:NEXT:RETURN ELSE IF q=t AND p=20 THEN INK b,d(o),d(o+4):RETURN ELSE RETURN
10 IF n=0 THEN b=RND*3+2:o=RND*3:p=20:q=t:RETURN ELSE IF n=1 THEN LOCATE x,y:PRINT c$;:RETURN ELSE IF n=2 THEN SOUND 2,0,40,15,1,1,31:n=1:GOSUB 7:GOSUB 9:CLS:RETURN ELSE IF r>h THEN h=r: a$="E?J G?=FG>;":f=220:g=231:n=0:GOSUB 9:RETURN ELSE RETURN
70 '
80 'And the same program with coments...
90 '
100 REM scolor - Shielding Color
110 REM (c) Antonio "acorpascuenca" Corpas Cuenca
115 rem https://gkanold.wixsite.com/homeputerium/kopie-von-games-list-2019-2
117 rem https://www.dropbox.com/sh/zj7u96etduyq6bv/AACNkYnzVRNK_Y-hFTjEpG9fa/CPC/33%20Shielding%20Color?dl=0
118 rem Modifications: line 9: :i=i => /10:call &bd19
120 '
200 ' Machine initialization (video mode, font style...)
210 DEFINT a-z:RANDOMIZE TIME:h=0:l$="355555706222222061124470711711705557111074471160344755707111111035575570355711100004004044444040355755503444447065555570344744703445556055575550222222204444447057555550465555503555557035565550344211705555552055555750"
220 MODE 0:BORDER 0:la$=CHR$(8)+CHR$(10):FOR i=0 TO 15:INK i,0:NEXT:SYMBOL AFTER 48:p=1:FOR i=1 TO 27:FOR j=1 TO 8:u(j)=VAL(MID$(l$,p,1))*16:p=p+1:NEXT j:SYMBOL i+47,u(1),u(2),u(3),u(4),u(5),u(6),u(7),u(8):NEXT i:SYMBOL 255,108,238,254,254,254,254,254,254
225 ' Game initialization (inks, pens, q clock, t difficult, p levels...)
230 SPEED INK 20,20:CLS:FOR i=0 TO 15:INK i,0:NEXT:INK 1,24:FOR i=2 TO 5:INK i,13:NEXT:INK 10,16:INK 11,7:SYMBOL 254,124,124,124,56,56,16,16,0:SYMBOL 253,124,124,254,254,254,146,146,146:SYMBOL 252,254,238,238,254,124,84,84,84:v$=" "+la$+" "
240 e$=CHR$(255)+la$+CHR$(254):m$=CHR$(253)+la$+CHR$(252):c$=CHR$(154):a$="H=FG?: 0":f=0:g=399:n=0:GOSUB 290:a$="AB:"+STR$(h):f=0:g=375:GOSUB 290:a$="HAB?C>BE@ =FCFG":f=180:g=14:GOSUB 290:d(0)=24:d(1)=2:d(2)=6:d(3)=18:d(4)=12:d(5)=1:d(6)=3:d(7)=9:r=0:s=0:k=0
245 ' Game loop 
250 t=20:FOR i=0 TO 3:PEN i+2:LOCATE 2*i+7,6:PRINT m$:PLOT i*64+204,272,i+6:DRAW i*64+204,136:NEXT:PEN 10:FOR i=7 TO 13 STEP 2:LOCATE i,20:?e$:NEXT:n=0:GOSUB 300:x=10:y=18:PEN 1:n=1:GOSUB 300:WHILE s=0:n=2:GOSUB 290:GOSUB 260:n=2:GOSUB 270:n=1:GOSUB 290:WEND:GOTO 230
255 ' Keyboard scanning and moving player (left, right, space bar)
260 IF (INKEY(8)<>-1 AND x>6) THEN PEN 0:n=1:GOSUB 300:x=x-1:PEN 1:n=1:GOSUB 300:RETURN ELSE IF (INKEY(1)<>-1 AND x<14) THEN PEN 0:n=1:GOSUB 300:x=x+1:PEN 1:n=1:GOSUB 300:RETURN ELSE IF INKEY(47)<>-1 THEN k=(k+1)MOD 4:INK 1,d(k):n=1:GOSUB 290:RETURN ELSE RETURN
265 ' Enemies routine and functions (crash, collision...)
270 IF n=0 THEN FOR i=100 TO 500 STEP 100:SOUND 2,i:NEXT:FOR i=1 TO 3:SOUND 2,600:SOUND 2,0:NEXT:RETURN ELSE IF n=1 THEN LOCATE 2*b+3,20:?v$:RETURN ELSE q=q-3:IF q>0 THEN RETURN ELSE p=p-4:q=t:IF p>0 THEN SPEED INK p,p:RETURN ELSE INK b+4,d(o):n=1:GOSUB 290
280 IF o=k AND x=2*b+3 THEN SOUND 2,80:r=r+50:t=t-1:a$=STR$(r):f=96:g=399:n=0:GOSUB 290:INK b+4,0:SPEED INK 20,20:INK b,13:GOSUB 300:RETURN ELSE n=2:GOSUB 300:n=3:GOSUB 300:a$="@<D? FI?G":f=232:g=207:n=0:GOSUB 290:GOSUB 270:n=1:FOR j=1 TO 20:GOSUB 290:NEXT:s=1:RETURN
285 ' Misc functions for multiple use
290 IF n=0 THEN w=0:FOR i=1 TO LEN(a$):PLOT -2,-2,11:TAG:MOVE f+(4*w),g:PRINT MID$(a$,i,1);:w=w+4:TAGOFF:NEXT i:RETURN ELSE IF n=1 THEN FOR i=1 TO 100/10:call &bd19:NEXT:RETURN ELSE IF q=t AND p=20 THEN INK b,d(o),d(o+4):RETURN ELSE RETURN
300 IF n=0 THEN b=RND*3+2:o=RND*3:p=20:q=t:RETURN ELSE IF n=1 THEN LOCATE x,y:PRINT c$;:RETURN ELSE IF n=2 THEN SOUND 2,0,40,15,1,1,31:n=1:GOSUB 270:GOSUB 290:CLS:RETURN ELSE IF r>h THEN h=r:a$="E?J G?=FG>;":f=220:g=231:n=0:GOSUB 290:RETURN ELSE RETURN
310 '
*/ });
