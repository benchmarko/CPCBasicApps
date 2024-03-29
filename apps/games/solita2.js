/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem solita2 - Solitaire
2 rem (c) Philip Jimenez, 1984
3 rem https://www.cpcwiki.eu/forum/programming/basic-solitaire/
4 rem
10 '
13 ' Author Philip Jimenez 1984
14 ' Listed By ComSoft6128
15 ' Type By Amsdos
16 ' Debugged By mr.freeze
17 ' https://www.cpcwiki.eu/forum/programming/basic-solitaire/
18 '
19 REM ---------------------------------
20 REM             SOLITAIRE
30 REM ---------------------------------
40 MODE 1:BORDER 16:INK 0,16:INK 1,26:INK 2,0:INK 3,6
50 GOSUB 920
60 REM ---------- PRINT BOARD ----------
70 WINDOW 1,23,1,23
80 PAPER 0:CLS:PAPER 2:PEN 1
90 FOR i=1 TO 23 STEP 22:FOR j=1 TO 23
100 LOCATE j,i:IF (j+3)/3=(j+3)\3 THEN PRINT CHR$(96+j\3) ELSE PRINT" ";
110 LOCATE i,j:IF (j+3)/3=(j+3)\3 THEN PRINT USING "#";8-j\3; ELSE PRINT" ";
120 NEXT:NEXT
130 FOR i=2 TO 20 STEP 3:FOR j=2 TO 20 STEP 3
140 WINDOW j,j+2,i,i+2
150 IF (i<8 OR i>14) AND (j<8 OR j>14) THEN PAPER 2:CLS ELSE PAPER 1:PEN 2:PRINT CHR$(&87)CHR$(&83)CHR$(&8B)CHR$(&85)CHR$(&CA)CHR$(&8A)CHR$(&8D)CHR$(&8C)CHR$(&8E);
160 NEXT:NEXT
170 WINDOW p,p,q,q:PAPER 3:PRINT" "
180 EVERY 20 GOSUB 870
190 WINDOW 26,40,1,23:PAPER 2:CLS:PEN 1:PRINT r$"   SOLITAIRE",R$:WINDOW 26,40,5,23:LOCATE 1,18
200 g=g+1
210 REM --------- PLAYER OPTION --------
220 PRINT "DO YOU WANT THE  COMPUTER TO  MAKE THE MOVES?","KEY  [Y] OR [N]"CHR$(7);
230 I$=INKEY$:I$=UPPER$(I$):IF I$<>"N" AND I$<>"Y" THEN 230
240 CLS:PRINT"   M O V E S":LOCATE 1,14:PRINT R$"  GAME"SPC(5)CHR$(&18);:PRINT USING "##";g;:PRINT CHR$(&18)R$"  PEGS","  REMOVED  "CHR$(&18);:PRINT USING "##";t;:PRINT CHR$(&18)R$CHR$(&18);
250 c=1-(I$="N"):ON c GOSUB 360,480
260 REM
270 REM ----- END OF GAME SEQUENCE -----
280 v=1:WINDOW 1,40,25,25:PAPER 0:EI:IF e THEN 310
290 IF I$="N" THEN PEN 3:IF t<31 THEN PRINT CHR$(&EE);" NO LEGAL MOVES LEFT ";CHR$(&EE) ELSE PRINT CHR$(&EE);" W E L L   D O N E ! ";CHR$(&EE)
300 FOR i=1 TO 6:FOR j=1 TO 6:SOUND 1,s(j),7,5:NEXT:NEXT
310 CLS:PEN 2:PRINT"WOULD YOU LIKE ANOTHER GAME?  [Y] OR [N]"CHR$(7);
320 I$=INKEY$:I$=UPPER$(I$):IF I$<>"Y" AND I$<>"N" THEN 320
330 IF I$="N" THEN MODE 2:INK 0,0:INK 1,25:BORDER 0:PAPER 0:PEN 1:END
340 MODE 1:INK 3,6:GOSUB 950
350 GOTO 60
360 REM ------- COMPUTER'S MOVES -------
370 RANDOMIZE TIME:d=INT(RND*4)
380 FOR t=0 TO 30
390 WINDOW p,p,q,q:PAPER 1:PEN 2:PRINT P$;:v=0
400 n1=n:p1=p:q1=q
410 p=(ASC(MID$(d$(d),t*4+1,1)))-66:q=(ASC(MID$(d$(d),t*4+2,1)))-66
420 p2=(ASC(MID$(d$(d),t*4+3,1)))-66:q2=(ASC(MID$(d$(d),t*4+4,1)))-66
430 n=a(q/3,p/3):P1$=CHR$(128-74*(n1=1)-15*(n1=0)):P$=CHR$(128-74*(n=1)-15*(n=0))
440 WINDOW p1,p1,q1,q1:PAPER 1:PEN 2:PRINT P1$;:WINDOW p,p,q,q:PRINT CHR$(&18)P$CHR$(&18);
450 FOR i=0 TO 500:NEXT
460 GOSUB 620
470 NEXT:RETURN
480 REM -------- PLAYER'S MOVES --------
490 WHILE INKEY(63)=-1 AND e
500 DI:WINDOW p,p,q,q:PAPER 1:PEN 2:PRINT P$;:EI
510 n1=n:p1=p:q1=q:v=0
520 IF INKEY$="" THEN 520
530 p=p-3*(INKEY(1)=0)+3*(INKEY(8)=0):q=q-3*(INKEY(2)=0)+3*(INKEY(0)=0)
540 p2=(INKEY(8)=32)-(INKEY(1)=32):q2=(INKEY(0)=32)-(INKEY(2)=32)
550 IF p<3 OR p<9 AND (q<9 OR q>15) OR p>15 AND (q<9 OR q>15) OR p>21 OR q<3 OR q<9 AND (p<9 OR p>15) OR q>15 AND (p<9 OR p>15) OR q>21 THEN p=p1:q=q1:GOTO 520
560 IF p=3 AND p2=-1 OR p=21 AND p2=1 OR q=3 AND q2=-1 OR q=21 AND q2=1 THEN 520
570 n=a(q/3,p/3):P1$=CHR$(128-74*(n1=1)-15*(n1=0)):P$=CHR$(128-74*(n=1)-15*(n=0))
580 DI:WINDOW p1,p1,q1,q1:PAPER 1:PEN 2:PRINT P1$;:WINDOW p,p,q,q:PRINT P$;:EI
590 IF ABS(p2)=1 XOR ABS(q2)=1 THEN GOSUB 620
600 WEND
610 RETURN
620 REM ---- CHECK VALIDITY OF MOVE ----
630 n2=a((q/3+2*q2),(p/3+2*p2)):n3=a((q/3+q2),(p/3+p2))
640 IF n=1 AND n2=-1 AND n3=1 THEN 680
650 v=1:WINDOW 26,40,25,25:PAPER 0:PEN 3:PRINT"!NOT PERMITTED!";
660 FOR i=0 TO 4:SOUND 1,s(i),7,5:NEXT:FOR i=0 TO 500:NEXT:DI:CLS
670 RETURN
680 REM --------- EXECUTE MOVE ---------
690 a(q/3,p/3)=-1:a((q/3+q2),(p/3+p2))=-1:a((q/3+2*q2),(p/3+2*p2))=1
700 p3=p+3*p2:q3=q+3*q2:px=p2:qx=q2:IF I$="N" THEN t=t+1
710 p2=p+6*p2:q2=q+6*q2
720 DI:WINDOW p,p,q,q:PAPER 1:PEN 2:PRINT" ";:WINDOW p3,p3,q3,q3:PRINT" ";:WINDOW p2,p2,q2,q2:PRINT CHR$(&CA);
730 REM
740 REM ---------- PRINT MOVE ----------
750 WINDOW x,x+2,y,y:PAPER 2:PEN 1:PRINT CHR$(96+p/3);:PRINT USING "#";8-q/3;:PRINT CHR$(240-(qx<>-1)-(ABS(px)=1)-(px=1));:WINDOW 37,38,22,22:PRINT CHR$(&18);:PRINT USING "##";t-(I$="Y");
760 s(t)=INT(125000/(440*(2^(oct+(10-nt)/12)))+0.5):SOUND 1,s(t),7,5
770 nt=nt-1:IF nt=0 THEN oct=oct+1:nt=12
780 p=p2:q=q2:y=y+1:IF y=17-(x=36) THEN x=x+4:y=7
790 REM
800 REM -- DO MORE LEGAL MOVES EXIST? --
810 e=0
820 FOR i=1 TO 7:FOR j=1 TO 7
830 IF a(i,j)<>1 OR e=1 THEN 850
840 IF a(i-1,j)+a(i,j)+a(i+1,j)=1 OR a(i,j-1)+a(i,j)+a(i,j+1)=1 THEN e=1
850 NEXT:NEXT
860 RETURN
870 REM ---- FLASHING CURSOR & TEXT ----
880 IF I$="Y" THEN RETURN
890 n=a(q/3,p/3):P$=CHR$(128-74*(n=1)-15*(n=0))
900 IF v THEN z=NOT z:INK 3,6-20*(NOT z) ELSE PRINT CHR$(&18)P$;
910 RETURN
920 REM ---------- INITIALISE ----------
930 DIM a(8,8),s(31),D$(3):s(0)=237
940 FOR i=0 TO 3:READ D$(i):NEXT
950 e=1:n=-1:nt=6:oct=0:p=12:q=12:t=0:v=1:x=28:y=7:z=0
960 P$=" ":R$=STRING$(&F,CHR$(&9A))
970 FOR i=1 TO 7:FOR j=3 TO 5:a(i,j)=1:NEXT:NEXT
980 FOR i=3 TO 5:FOR j=1 TO 7:a(i,j)=1:NEXT:NEXT:a(4,4)=-1
990 RETURN
1000 DATA NHBCTKABQEBCQNBAKECBQEBCQTBAWQABNQCBWKBCWQABHQCBKWBAKNBCQWABKWBAKHBCEKCBNKABEQBAEKCBNQBANKABHKBCHQCBNQCBTNABKNCBQKBCTQABNTBA
1010 DATA NTBAHQCBKWBAKNBCQWABKHBCEKCBNKABEQBAEKCBTKABQEBCQNBAKECBQEBCQTBAWQABNQCBWKBCWQABNKBCNQCBTQBATKABNKABHNCBQNABKWBAKQBAHKCBNHBC
1020 DATA TNABQTBAWQABNQCBWKBCHQCBKWBAKNBCQWABKWBAKHBCEKCBNKABEQBAEKCBTKABQEBCQNBAKECBQEBCKNCBQNBAQHABKHBCKNBCNTBANKBCWQABQQABKTBAHNCB
1030 DATA HNCBKHBCEKCBNKABEQBATKABQEBCQNBAKECBQEBCQTBAWQABNQCBWKBCWQABHQCBKWBAKNBCQWABKWBAQNABKNBCKTCBQTBAQNBANHBCNQBAEKCBKKCBQHBCTNAB
1040 ' (C) 1984 Philip Jimenez
*/ });
