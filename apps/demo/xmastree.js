/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
10 REM xmastree - Xmas Tree
20 REM
30 m=3:ON ERROR GOTO 32:'detect mode 3
31 MODE m:GOTO 33
32 m=0:MODE m:RESUME 33
33 ON ERROR GOTO 0
40 'MODE m:'3 or 0
50 INK 0,0
60 INK 1,24    ' star
70 INK 2,9     ' green
80 INK 3,12    ' trunk
90 'INK 4,24    ' ornaments
100 BORDER 0
110 width1=640
120 height=400
130 cx=width1/2
140 topY=50
150 bottomY=height-70
160 layers=6
170 layerH=(bottomY-topY)/layers
180 maxW=200
190 REM ---- STAR ----
200 MOVE cx,height-25,1
210 DRAW cx+7,height-42
220 DRAW cx+24,height-42
230 DRAW cx+10,height-54
240 DRAW cx+15,height-72
250 DRAW cx,height-60
260 DRAW cx-15,height-72
270 DRAW cx-10,height-54
280 DRAW cx-24,height-42
290 DRAW cx-7,height-42
300 DRAW cx,height-25
305 MOVER 0,-10:FILL 1
306 REM ---- TREE LAYERS ----
310 'GRAPHICS PEN 2
320 FOR i=0 TO layers-1
330 yTop=topY+i*layerH
340 yBot=yTop+layerH
350 wTop=(i/layers)*maxW*0.45
360 wBot=((i+1)/layers)*maxW
370 yt=height-yTop
380 yb=height-yBot
390 MOVE cx-wTop,yt,2
400 DRAW cx+wTop,yt
410 DRAW cx+wBot,yb
420 DRAW cx-wBot,yb
430 DRAW cx-wTop,yt
440 MOVER 0,-4:FILL 2
442 REM ---- ORNAMENTS ----
445 GRAPHICS PEN 4
450 FOR j=0 TO 4
460 ox=cx+(RND-0.5)*wBot*1.6
470 oy=yTop+layerH*(0.45+RND*0.2)
480 col=int(rnd*15)+1
490 r=4:MOVE ox,height-(oy+r),col
495 DEG:FOR a=0 TO 360 STEP 60: DRAW ox+r*SIN(a),height-(oy+r*COS(a)): NEXT
496 MOVER 0,2:FILL col
500 NEXT j
510 NEXT i
515 REM ---- TRUNK ----
520 GRAPHICS PEN 3
530 MOVE cx-16,height-bottomY
540 DRAW cx+16,height-bottomY
550 DRAW cx+16,height-(bottomY+45)
560 DRAW cx-16,height-(bottomY+45)
570 DRAW cx-16,height-bottomY
580 MOVER 4,-4:FILL 3
590 AFTER 300 GOSUB 620
600 flg=0:WHILE INKEY$="" AND flg=0:WEND
610 GOSUB 620:GOTO 30
620 flg=REMAIN(0)+1:RETURN
*/ });
