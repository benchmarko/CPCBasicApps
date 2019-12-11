/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem mexicana - Dance Mexicana (Jarabe Tapatio, Mexican Hat Dance)
2 rem (c) Juergen Werner
4 rem Modifications: wait for final sound; sync notes with graph; graph flipped; autostart
5 rem
6 rem On youtube: https://www.youtube.com/watch?v=EePDqgffT1A (Jarabe Tapatio baile tradicional de México)
7 rem
8 defint a-z
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
120 REM *       Mexicana 1.0        * 
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
440 PRINT TAB(33)"Dance Mexicana"
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
550 REM
560 ENT -1,3,3,1,3,-3,1
570 REM *** Lied Dance Mexicana ***
580 DATA 159,20
590 DATA 119,40,159,20,119,40,159,20
600 DATA 119,80,0,20,159,20,0,5
610 DATA 159,20,142,20,159,20,179,20,190,20,213,20
620 DATA 239,60,0,20, 80,20,84,20
630 DATA 80,20,95,20,100,20,95,20,119,20,127,20
640 DATA 119,20,159,40,0,20,190,20,179,20
650 DATA 159,20,142,20,127,20,119,20,106,20,95,20
660 DATA 89,20,106,40,0,20,89,20,95,20
670 DATA 89,20,106,20,113,20,106,20,127,20,134,20
680 DATA 127,20,159,40,0,20,80,20,84,20
690 DATA 80,20,71,20,80,20,89,20,95,20,106,20
700 REM *** Wiederholung ***
710 DATA 119,60,0,20,80,20,84,20
720 DATA 80,20,95,20,100,20,95,20,119,20,127,20
730 DATA 119,20,159,40,0,20,190,20,179,20
740 DATA 159,20,142,20,127,20,119,20,106,20,95,20 
750 DATA 89,20,106,40,0,20,89,20,95,20
760 DATA 89,20,106,20,113,20,106,20,127,20,134,20
770 DATA 127,20,159,40,0,20,80,20,84,20
780 DATA 80,20,71,20,80,20,89,20,95,20,106,20
790 DATA 119,60,0,20,  106,20,0,3,106,20,0,3 
800 DATA 106,20,142,20,0,3,142,20,0,3,142,20,119,20,0,3,119,20,0,3
810 DATA 119,20,127,40,0,20,106,20,0,3,106,20,0,3
820 DATA 106,20,142,20,0,3,142,20,0,3,142,20,119,20,0,3,119,20
830 DATA 127,80,106,20,0,3,106,20,0,3
840 DATA 106,20,142,20,0,3,142,20,0,3,142,20,119,20,0,3,119,20,0,3
850 DATA 119,20,127,40,0,20,106,20,0,3,106,20,0,3
860 DATA 106,20,95,20,106,20,119,20,127,20,142,20
870 REM *** WIEDERHOLUNG ***
880 DATA 159,60,0,20, 80,20,84,20
890 DATA 80,20,95,20,100,20,95,20,119,20,127,20
900 DATA 119,20,159,40,0,20,190,20,179,20
910 DATA 159,20,142,20,127,20,119,20,106,20,95,20
920 DATA 89,20,106,40,0,20,89,20,95,20
930 DATA 89,20,106,20,113,20,106,20,127,20,134,20
940 DATA 127,20,159,40,0,20,80,20,84,20
950 DATA 80,20,71,20,80,20,89,20,95,20,106,20
960 DATA 119,60,0,20,80,20,84,20
970 DATA 80,20,95,20,100,20,95,20,119,20,127,20
980 DATA 119,20,159,40,0,20,190,20,179,20
990 DATA 159,20,142,20,127,20,119,20,106,20,95,20
1000 DATA 89,20,106,40,0,20,89,20,95,20
1010 DATA 89,20,106,20,113,20,106,20,127,20,134,20
1020 DATA 127,20,159,40,0,20,80,20,84,20
1030 REM *** SCHLUSS ***
1040 DATA 80,20,71,20,80,20,89,20,95,20,106,20
1050 DATA 159,20,142,20,159,20,179,20,190,20,213,20
1060 DATA 239,20,0,20,0,20
1070 DATA -1,0
1080 READ p,l
1090 IF p=-1 THEN 1130
1100 x=x+2:if p>0 then PLOT x,390-p
1105 while sq(1) and 128:call &bd19:wend
1110 SOUND 1,p,l
1120 GOTO 1080
1130 ENV 1,5,-1,1
1140 SOUND 1+16,159,20,0,1:SOUND 2+8,253,20,0,1
1150 SOUND 1,0,20:SOUND 1,0,20
1160 SOUND 1+16,119,20,0,1:SOUND 2+8,190,20,0,1
1165 while sq(1)<>4:call &bd19:wend
1166 end
*/ });
