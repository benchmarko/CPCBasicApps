/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 REM gdemo3 - Graphics Demo
2 REM (c) David Wild, Alan Scully
3 REM Modifications: some delays
4 REM Rem currently not supported by CPCBasic: CRTC reg 6,7 
5 ' PD by David Wild's DW Software
6 ' Enhanced by Alan Scully
7 SYMBOL AFTER 240
8 SYMBOL 240,1,&X11,&X111,&X1111,&X1111,&X111,&X11,1:SYMBOL 241,128,&X11000000,&X11100000,&X11110000,&X11110000,&X11100000,&X11000000,128:SYMBOL 242,0,0,0,0,&X11000,&X111100,&X1111110,255
9 SYMBOL 243,255,&X1111110,&X111100,&X11000,0
10 MODE 1:CALL &BC02:INK 0,0:BORDER 0:ik=1:PLOT 1000,1000,1
15 FOR f=1 TO 2.8 STEP 0.6
20 d=5:w=60
30 FOR i=0 TO 400 STEP 2
40 MOVE 320-d,i:DRAWR -w,0:MOVE 320+d,i:DRAWR w,0
50 d=d+(i/200)*f:w=w+0.5
60 NEXT
65 ik=ik+1:PLOT 1000,1000,ik
70 NEXT
80 PLOT 1000,1000,1
85 FOR j=0 TO 2:INK j,0
86 OUT &BC00,6:OUT &BD00,1:OUT &BC00,7:CALL &BD19:OUT &BD00,0
90 FOR i=0 TO 30
100 OUT &BC00,7:OUT &BD00,i:IF i<26 THEN OUT &BC00,6:OUT &BD00,i ELSE OUT &BC00,6:OUT &BD00,25 
101 CALL &BD19
110 NEXT i
115 FOR m=1 TO 250/10:call &bd19:NEXT
120 NEXT j:OUT &BC00,6:OUT &BD00,25
130 CALL &BC02:INK 0,0:BORDER 0
140 FOR l=1 TO 50:INK RND*2+1,RND*26:call &bd19:NEXT l:PLOT 1000,0,0
150 FOR i=0 TO 200 STEP 2
160 MOVE 0,i:DRAW 640,i:MOVE 0,400-i:DRAW 640,400-i
170 call &bd19:NEXT
180 MODE 1:PRINT CHR$(23);CHR$(1);:PLOT 1000,1000,1
190 FOR b=0 TO 100 STEP 4
200 FOR c=0 TO 1 AND b<100:MOVE 120,200-b:DRAW 120,200+b,2:DRAW 520,200+b:DRAW 520,200-b:DRAW 120,200-b:if c=0 then call &bd19
205 NEXT c
210 NEXT b
215 PRINT CHR$(23);CHR$(0);
220 WINDOW #1,13,29,9,17:INK 1,0
230 PRINT#1,"  ò   ðƏƏƏƏƏñ"
240 PRINT#1,"  Ə   ò     ò"
250 PRINT#1,"  Ə   Ə     Ə"
260 PRINT#1,"  ó   ó     ó"
270 PRINT#1,"  ò   ò     ò"
280 PRINT#1,"  Ə   Ə     Ə"
290 PRINT#1,"  Ə   ó     ó"
300 PRINT#1,"  ó   ðƏƏƏƏƏñ"
310 INK 1,26:FOR m=0 TO 200/10:call &bd19:NEXT:CLS #1:FOR m=0 TO 600/20:call &bd19:NEXT:INK 1,0
320 PRINT#1,"      ðƏƏƏƏƏñ"
330 PRINT#1,"      ò     ò"
340 PRINT#1,"      Ə     Ə"
350 PRINT#1,"      ó     ó"
360 PRINT#1,"       ðƏƏƏñò"
370 PRINT#1,"            Ə"
380 PRINT#1,"            ó"
390 PRINT#1,"      ðƏƏƏƏƏñ" 
400 INK 1,26:FOR m=0 TO 200/10:call &bd19:NEXT:CLS #1:FOR m=0 TO 600/20:call &bd19:NEXT:INK 1,0
410 PRINT#1,"      ðƏƏƏƏƏñ"
420 PRINT#1,"      ò     ò"
430 PRINT#1,"      Ə     Ə"
440 PRINT#1,"      ó     ó"
450 PRINT#1,"      òðƏƏƏñò"
460 PRINT#1,"      Ə     Ə"
470 PRINT#1,"      ó     ó"
480 PRINT#1,"      ðƏƏƏƏƏñ"
490 INK 1,26:FOR m=0 TO 200/10:call &bd19:NEXT:CLS #1:FOR m=0 TO 600/20:call &bd19:NEXT:INK 1,0
500 PRINT#1,"      ðƏƏƏƏƏñ"
510 PRINT#1,"            ò"
520 PRINT#1,"            Ə"
530 PRINT#1,"            ó"
540 PRINT#1,"            ò"
550 PRINT#1,"            Ə"
560 PRINT#1,"            ó"
570 INK 1,26:FOR m=0 TO 200/10:call &bd19:NEXT:CLS #1:FOR m=0 TO 600/20:call &bd19:NEXT:INK 1,0
580 PRINT#1,"      ðƏƏƏƏƏñ"
590 PRINT#1,"      ò      "
600 PRINT#1,"      Ə      "
610 PRINT#1,"      óðƏƏƏñ "
620 PRINT#1,"      ò     ò"
630 PRINT#1,"      Ə     Ə"
640 PRINT#1,"      ó     ó"
650 PRINT#1,"      ðƏƏƏƏƏñ"
660 INK 1,26:FOR m=0 TO 200/10:call &bd19:NEXT:CLS #1:FOR m=0 TO 600/20:call &bd19:NEXT:INK 1,0
670 PRINT#1,"      ðƏƏƏƏƏñ"
680 PRINT#1,"      ò      "
690 PRINT#1,"      Ə      "
700 PRINT#1,"      óðƏƏƏñ "
710 PRINT#1,"            ò"
720 PRINT#1,"            Ə"
730 PRINT#1,"            ó"
740 PRINT#1,"      ðƏƏƏƏƏñ"
750 INK 1,26:FOR m=0 TO 200/10:call &bd19:NEXT:CLS #1:FOR m=0 TO 600/20:call &bd19:NEXT:INK 1,0
760 PRINT#1
770 PRINT#1,"      ò     ò"
780 PRINT#1,"      Ə     Ə"
790 PRINT#1,"      ó     ó
800 PRINT#1,"       ðƏƏƏñò"
810 PRINT#1,"            Ə"
820 PRINT#1,"            ó"
830 PRINT#1
840 INK 1,26:FOR m=0 TO 200/10:call &bd19:NEXT:CLS #1:FOR m=0 TO 600/20:call &bd19:NEXT:INK 1,0
850 PRINT#1,"      ðƏƏƏƏƏñ"
860 PRINT#1,"            ò"
870 PRINT#1,"            Ə"
880 PRINT#1,"       ðƏƏƏñó"
890 PRINT#1,"            ò"
900 PRINT#1,"            Ə"
910 PRINT#1,"            ó"
915 PRINT#1,"      ðƏƏƏƏƏñ"
920 INK 1,26:FOR m=0 TO 200/10:call &bd19:NEXT:CLS #1:FOR m=0 TO 600/20:call &bd19:NEXT:INK 1,0
930 PRINT#1,"      ðƏƏƏƏƏñ"
940 PRINT#1,"            ò"
950 PRINT#1,"            Ə"
960 PRINT#1,"      ðƏƏƏƏñó"
970 PRINT#1,"      ò      "
980 PRINT#1,"      Ə      "
990 PRINT#1,"      ó      "
1000 PRINT#1,"      ðƏƏƏƏƏñ"
1010 INK 1,26:FOR m=0 TO 200/10:call &bd19:NEXT:CLS #1:FOR m=0 TO 600/20:call &bd19:NEXT:INK 1,0
1020 PRINT#1,"            ò"
1030 PRINT#1,"            Ə"
1040 PRINT#1,"            ó"
1050 PRINT#1,"            ò"
1060 PRINT#1,"            Ə"
1070 PRINT#1,"            ó 
1080 INK 1,26:FOR m=0 TO 200/10:call &bd19:NEXT:CLS #1:FOR m=0 TO 600/20:call &bd19:NEXT:INK 1,0
1090 PRINT#1,"      ðƏƏƏƏƏñ"
1100 PRINT#1,"      ò     ò
1110 PRINT#1,"      Ə     Ə"
1120 PRINT#1,"      ó     ó"
1130 PRINT#1,"      ò     ò"
1140 PRINT#1,"      Ə     Ə"
1150 PRINT#1,"      ó     ó" 
1160 PRINT#1,"      ðƏƏƏƏƏñ"
1170 INK 1,26:FOR m=0 TO 200/10:call &bd19:NEXT:CLS #1:FOR m=0 TO 600/20:call &bd19:NEXT
2000 RUN
*/ });
