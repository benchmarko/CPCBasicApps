/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem stardodg - Stardodger Game (2D Star Dodge)
2 rem (c) Stewart C. Russell (SCR)
3 rem https://scruss.com/blog/2012/09/08/2d-star-dodge-flies-again/
4 rem https://scruss.com/wordpress/wp-content/uploads/2012/09/AmstradComputerUser198809-StarDodger1-BASIC.pdf
5 rem Amstrad User, September 1988
6 rem Modifications: Use space key; delay with call &bd19
7 rem
8 ' Basic Stardodger by SCR.
9 '
10 ' ** Initialise **
20 MODE 1
30 INK 0,0
40 BORDER 0
50 INK 1,26
60 INK 3,0
70 q=5 'set initial asteriks to 5
80 ' ** Title screen **
90 LOCATE 16,1
100 PRINT"Stardodger"
110 LOCATE 1,5
120 PRINT"Avoid the killer Asterisqs, and seek the"
130 LOCATE 9,6
140 PRINT"wondrous Nextscreen Gap."
150 LOCATE 12,13
160 PRINT"Use SPACE to climb"
170 GOSUB 700
180 ' ** Draw game screen **
190 MODE 1
200 DRAWR 629,0
210 DRAWR 0,170
220 MOVER 0,60
230 DRAWR 0,169
240 DRAWR -629,0
250 DRAWR 0,-399
260 DRAWR 0,2
270 DRAWR 627,0
280 DRAWR 0,168
290 MOVER 0,60
300 DRAWR 0,167
310 DRAWR -625,0
320 DRAWR 0,-399
330 MOVE 636,0
340 DRAW 636,399,3
350 MOVE 638,0
360 DRAW 638,399
370 PLOT -1,-1,1
380 TAG
390 FOR s=1 TO q
400 MOVE 50+RND*561,20+RND*361
410 PRINT"*";
420 NEXT
430 TAGOFF
440 MOVE 0,200
450 dy=4 'set initial line dir to up
460 ' ** Main game loop **
470 DRAWR 4,dy
475 call &bd19
480 IF INKEY(47)<>-1 THEN dy=4 ELSE dy=-4 'move up if shift pressed
490 t=TESTR(2,dy/2)
500 IF t=1 GOTO 550 'hit summat nasty
510 IF t=3 GOTO 620 'completed the scr
520 MOVER -2,-dy/2
530 GOTO 470 'repeat main loop
540 ' ** End of game screen **
550 MODE 1
560 PRINT TAB(16);"YOU GOOFED"
570 LOCATE 5,13
580 PRINT"Number of Screens completed = "+STR$((q/5)-1)
590 GOSUB 700 'Press any key to cont..
600 RUN
610 ' ** Success screen **
620 MODE 1 
630 PRINT TAB(16);"WELL DONE"
640 LOCATE 10,13
650 PRINT"Stand by for Screen "+STR$((q/5)+1)
660 GOSUB 700
670 q=q+5
680 GOTO 190
700 LOCATE 8,25
710 PRINT"Press any key to continue"
720 WHILE INKEY$<>""
730 WEND
740 WHILE INKEY$=""
750 WEND
760 RETURN
*/ });
