/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem clarinet - Clarinet (Klarinettenmuck'l, Jaroslav Skabrada)
2 rem (c) Juergen Werner
4 rem
5 rem Modifications: sync notes with graph; graph flipped, graph continued when reaching border; autostart
6 rem
7 rem On youtube: https://www.youtube.com/watch?v=2ho-nZ5x_mo (Klarinetten Muckl -Klarinettenmuckl)
8 rem Or: https://youtu.be/aQfh9IBRSnQ?t=24 (Klarinettenmuckl, Clarinet and Piano)
9 defint a-z
10 GOTO 400:REM *** Programmstart ***
20 REM  *****************************
30 REM  * Dieses Programm darf ver- *
40 REM  * vielfaeltigt, kopiert     *
50 REM  * und/oder an Dritte weiter *
60 REM  * gegeben werden!           *
70 REM  * Jedoch d}rfen die Copy-   *
80 REM  * right-Angaben nicht ent-  *
90 REM  * fernt werden!             *
100 REM *                           *
110 REM *                           * 
120 REM *     Klarinettenmuck'l     *
130 REM *                           *
140 REM *        TB-Software        * 
150 REM *                           *
160 REM *        26.01.1987         *
170 REM *                           *
180 REM *     programmiert von      *
190 REM *                           *
200 REM *      Juergen Werner       *  
210 REM *      Grabenaecker 7       *
220 REM *    7454 Bodelshausen      *
230 REM *****************************
240 '
250 '
260 REM *** Unterprogramme ***
270 '
280 ' Warte auf Taste   wenn c=1 then Cursor einschalten
290 IF c=1 THEN CURSOR 1
300 t!=time+1500:t$="":WHILE t$="" and time<t!:t$=INKEY$:WEND
310 IF c=1 THEN CURSOR 0:c=0
320 RETURN
330 '
340 ' Warte auf Taste mit Bildschirmabfrage
350 '
360 LOCATE 17,z:PRINT "--> Dr}cken Sie bitte eine beliebige Taste <--"
370 GOSUB 280
380 RETURN
390 '
400 REM *** Programmstart ***
410 '
420 INK 0,0:INK 1,24:PAPER 0:PEN 1
430 MODE 2
440 PRINT TAB(30)"Der Klarinettenmuk'l"
450 LOCATE 1,7
460 PRINT TAB(33)"Freie Software"
470 LOCATE 1,11
480 PRINT TAB(32)"geschrieben 1987"
490 PRINT
500 PRINT TAB(30)"(C) by J}rgen Werner"
510 PRINT
520 PRINT TAB(35)"TB-Software"
530 z=22:GOSUB 340
540 LOCATE 1,2:PRINT"":LOCATE 1,2
550 REM *** Lied Der Klarinettenmuk'l ***
560 DATA 159,40,0,40,159,40,0,40
570 DATA 159,40,0,80,213,20,239,20
580 DATA 253,20,213,20,159,20,127,20,213,20,159,20,127,20,106,20
590 DATA 127,40,0,3,127,40,0,3,127,40,0,3,127,20,106,20
600 DATA 127,40,0,3,127,20,106,20,127,40,0,3,127,20,106,20,0,3
610 DATA 106,20,119,20,142,20,169,20,213,80
620 DATA 190,20,213,20,169,20,142,20,106,20,169,20,142,20,106,20
630 DATA 84,40,0,3,84,40,0,3,84,40,95,20,106,20
640 DATA 84,40,95,20,106,20,84,40,95,20,106,20
650 DATA 95,20,106,20,127,20,159,20,213,40,0,3,213,20,239,20 
660 REM *** Wiederholung ***
670 DATA 253,20,213,20,159,20,127,20,213,20,159,20,127,20,106,20
680 DATA 127,40,0,3,127,40,0,3,127,40,0,3,127,20,106,20
690 DATA 127,40,0,3,127,20,106,20,127,40,0,3,127,20,106,20,0,3
700 DATA 106,20,119,20,142,20,169,20,213,80
710 DATA 190,20,213,20,169,20,142,20,106,20,169,20,142,20,106,20 
720 DATA 84,40,0,3,84,40,0,3,84,40,95,20,106,20
730 REM *** naechste Klammer ***
740 DATA 84,40,0,3,84,20,95,20,106,20,119,20,127,20,142,20
750 DATA 159,40,0,3,159,40,0,3,159,40,0,40
760 REM *** Fortsetung ***
770 DATA 142,20,150,20,142,20,127,20,142,20,127,20,113,20
780 DATA 106,20,113,20,106,20,95,20,95,20,84,80
790 DATA 142,20,80,20,0,3,80,20,84,20,94,80
800 DATA 142,20,84,20,0,3,84,20,0,3,95,20,106,80
810 DATA 142,40,150,20,142,20,127,20,142,20,127,20,113,20
820 DATA 106,20,113,20,106,20,95,20,84,80
830 DATA 142,20,80,20,0,3,80,20,0,3,84,20,95,20,80,20,84,20,95,20
840 DATA 106,40,84,40,106,40,213,20,239,20
850 REM *** Wiederholung 1 Teil ***
860 DATA 253,20,213,20,159,20,127,20,213,20,159,20,127,20,106,20
870 DATA 127,40,0,3,127,40,0,3,127,40,0,3,127,20,106,20
880 DATA 127,40,0,3,127,20,106,20,127,40,0,3,127,20,106,20,0,3
890 DATA 106,20,119,20,142,20,169,20,213,80
900 DATA 190,20,213,20,169,20,142,20,106,20,169,20,142,20,106,20
910 DATA 84,40,0,3,84,40,0,3,84,40,95,20,106,20
920 DATA 84,40,95,20,106,20,84,40,95,20,106,20
930 DATA 95,20,106,20,127,20,159,20,213,40,0,3,213,20,239,20
940 REM *** Wiederholung 2.Klammer ***
950 DATA 253,20,213,20,159,20,127,20,213,20,159,20,127,20,106,20
960 DATA 127,40,0,3,127,40,0,3,127,40,0,3,127,20,106,20
970 DATA 127,40,0,3,127,20,106,20,127,40,0,3,127,20,106,20,0,3
980 DATA 106,20,119,20,142,20,169,20,213,80 
990 DATA 190,20,213,20,169,20,142,20,106,20,169,20,142,20,106,20
1000 DATA 84,40,0,3,84,40,0,3,84,40,95,20,106,20
1010 DATA 84,40,0,3,84,20,95,20,106,20,119,20,127,20,142,20 
1020 DATA 159,40,0,3,159,40,0,3,159,40,80,40,0,3
1030 REM *** Fortsetzung ***
1040 DATA 80,100,95,20,119,20,95,20
1050 DATA 159,120,0,3,159,20,190,20
1060 DATA 190,20,159,20,119,20,159,20,190,20,159,20,119,20,159,20
1070 DATA 190,20,159,20,127,20,159,20,190,40,80,20,0,3
1080 DATA 80,100,106,20,127,20,106,20
1090 DATA 159,120,142,20,159,20
1100 REM *** 1. Klammer ***
1110 DATA 142,20,159,20,127,20,159,20,142,20,159,20,127,20,159,20
1120 DATA 190,20,159,20,119,20,159,20,190,40,80,40
1130 REM *** Wiederholung 2. Klammer ***
1140 DATA 80,100,95,20,119,20,95,20
1150 DATA 159,120,0,3,159,20,190,20
1160 DATA 190,20,159,20,119,20,159,20,190,20,159,20,119,20,159,20
1170 DATA 190,20,159,20,127,20,159,20,190,40,80,20,0,3 
1180 DATA 80,100,106,20,127,20,106,20
1190 DATA 159,120,142,20,159,20
1200 REM *** ende ***
1210 DATA 142,20,159,20,127,20,159,20,142,20,127,20
1220 DATA 119,40,0,3,119,40,0,3,119,40,0,40
1230 move 0,0:'READ p,l:PLOT 0,p*1.5:SOUND 1,p,l
1240 DATA -1,0
1250 READ p,l
1260 IF p=-1 THEN 1310
1270 'IF p=0 THEN 1290
1280 x=x+l/10:if x>639 then x=0:move 0,0:LOCATE 1,2:PRINT"":LOCATE 1,2
1285 if p>0 then DRAW x,380-p*1.5
1287 while sq(1) and 128:call &bd19:wend
1290 SOUND 1,p,l
1300 GOTO 1250
1310 END
1510 '
1540 ' test playback with hold
1550 'READ p,l
1560 'IF p=-1 THEN 1610
1570 'SOUND 1+64,p,l:IF p=0 THEN 1590
1580 'x=x+l/10:if x>639 then x=0:move 0,0:LOCATE 1,2:PRINT"":LOCATE 1,2
1585 'DRAW x,380-p*1.5
1590 'while sq(1) and 128:call &bd19:wend
1595 'release 1
1600 'GOTO 1550
1610 'end
*/ });
