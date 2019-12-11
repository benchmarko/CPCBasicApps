/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
5 rem sultan - Sultan's Maze: Amsoft Logo
10 REM "AMSOFT" LOGO
20 DEFINT a-z:SPEED INK 40,10
30 title$="Sultan's Maze"
40 INK 0,0:INK 1,24,0:INK 2,0:INK 3,0
50 PAPER 0:PEN 1:BORDER 0,0:MODE 1
60 LOCATE 15,21:PRINT "Please Wait..";
70 PLOT 162,292,2:GOSUB 230:RESTORE
80 PLOT 158,294,3:GOSUB 230
90 chars=LEN(title$):pixels=chars*8
100 x=(639-chars*32)/2
110 LOCATE 1,1:PEN 3:PRINT title$;:PEN 1
120 tx=x:y=220:y2=398
130 FOR f=1 TO 8:x2=0:FOR g=1 TO pixels
140  IF TEST(x2,y2)=3 THEN PLOT x,y,2:PLOT x,y-2:PLOT x+2,y:PLOT x+2,y-2
150  x=x+4:x2=x2+2
160 NEXT g:y=y-4:y2=y2-2:x=tx:NEXT f
170 LOCATE 1,1:PRINT SPACE$(chars)
180 INK 1,6,6:INK 2,2,2:INK 3,19,19
190 LOCATE 17,10:PRINT "PRESENTS";
200 LOCATE 11,16:PRINT CHR$(164);" 1984  GEM SOFTWARE"
210 LOCATE 14,21:PEN 3:PRINT "LOADING ......";
220 GOTO 560
230 READ t,x,y:IF t=0 THEN RETURN
240 IF t=1 THEN DRAWR x,y ELSE MOVER x,y
250 GOTO 230
260 REM "A"
270 DATA 1,-41,0,2,0,2,1,41,0,2,2,2,1,-41,0,2,0,2,1,41,0,2,-3,2
280 DATA 1,34,70,2,2,0,1,-34,-70,2,2,0,1,34,70,2,2,0,1,-34,-70,2,30,72
290 DATA 1,47,0,2,0,2,1,-47,0,2,2,2,1,47,0,2,0,2,1,-47,0,2,37,-8
300 DATA 1,-34,-70,2,2,0,1,34,70,2,2,0,1,-34,-70,2,2,0,1,34,70,2,-57,-38
310 DATA 1,32,0,2,0,2,1,-32,0,2,2,2,1,32,0,2,0,2,1,-32,0,2,12,-46
320 REM "M"
330 DATA 1,30,0,2,0,2,1,-30,0,2,2,2,1,30,0,2,0,2,1,-30,0,2,25,2
340 DATA 1,18,38,2,2,0,1,-18,-38,2,2,0,1,18,38,2,2,0,1,-18,-38,2,12,24
350 DATA 1,0,-32,2,2,0,1,0,36,2,2,4,1,0,-40,2,2,0,1,0,44,2,2,-36
360 DATA 1,39,39,2,0,-2,1,-39,-39,2,0,-2,1,37,37,2,0,-2,1,-37,-37,2,20,6
370 DATA 1,18,38,2,2,0,1,-18,-38,2,2,0,1,18,38,2,2,0,1,-18,-38,2,-10,-8
380 REM "S"
390 DATA 1,57,0,2,0,2,1,-57,0,2,2,2,1,57,0,2,0,2,1,-57,0,2,51,2
400 DATA 1,7,0,2,0,2,1,-7,0,2,2,2,1,7,0,2,0,2,1,-7,0,2,2,2,1,7,0,2,0,2,1,-7,0,2,9,2
410 DATA 1,-29,0,2,0,2,1,29,0,2,2,2,1,-29,0,2,0,2,1,29,0,2,-27,2
420 DATA 1,7,0,2,0,2,1,-7,0,2,2,2,1,7,0,2,0,2,1,-7,0,2,2,2,1,7,0,2,0,2,1,-7,0,2,2,2
430 DATA 1,29,0,2,0,2,1,-29,0,2,2,2,1,29,0,2,0,2,1,-29,0,2,46,-8
440 REM "O"
450 DATA 1,-15,-30,2,2,0,1,15,30,2,2,0,1,-15,-30,2,2,0,1,15,30,2,-25,-38
460 DATA 1,29,0,2,0,2,1,-29,0,2,2,2,1,29,0,2,0,2,1,-29,0,2,39,32
470 DATA 1,-15,-30,2,2,0,1,15,30,2,2,0,1,-15,-30,2,2,0,1,15,30,2,-27,2
480 REM "F"
490 DATA 1,117,0,2,0,2,1,-117,0,2,2,2,1,117,0,2,0,2,1,-117,0,2,63,32
500 DATA 1,-39,-78,2,2,0,1,39,78,2,2,0,1,-39,-78,2,2,0,1,39,78,2,-4,2
510 DATA 1,29,0,2,0,2,1,-29,0,2,2,2,1,29,0,2,0,2,1,-29,0,2,46,0
520 REM "T"
530 DATA 1,-39,-78,2,2,0,1,39,78,2,2,0,1,-39,-78,2,2,0,1,39,78,2,-49,-86
540 DATA 1,69,0,2,0,2,1,-69,0,2,2,2,1,69,0,2,0,2,1,-69,0
550 DATA 0,0,0
560 t$="":t!=time+200*6:while time<t! and t$="":call &bd19:t$=inkey$:wend
570 CHAIN"!sultan2"
*/ });