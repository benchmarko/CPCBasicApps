/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem bach - J. S. Bach (Wohl mir,dass ich Jesum habe)
2 rem (c) Wolfgang Volz
4 rem
5 rem Modifications: call &bd19
6 rem
10 '**********************************
20 '**Orgel im Strassburger Muenster** 
30 '**            und               **
40 '** Wohl mir,dass ich Jesum habe **
50 '**         (BWV 147)            **
60 '**                              **
70 '***           von              *** 
80 '****     Wolfgang Volz        ****
90 '****     Laemmerstieg 58      ****
100 '****     2400 Luebeck 1       ****
110 '********************************** 
120 CLS
130 INK 0,0:INK 1,26:INK 2,14:INK 3,6:BORDER 0:PAPER 0:MODE 1
140 LOCATE 10,1:PRINT"Johann Sebastian Bach" 
150 LOCATE 3,25:PRINT">> Wohl mir,dass ich Jesum habe <<" 
160 '
170 'Orgelkasten
180 '
190 RESTORE 210
200 FOR kz=1 TO 2:READ kc,kd:PLOT kc,kd,1:FOR kn=1 TO 35:READ ka,kb:DRAWR ka,kb,1:NEXT kn,kz
210 DATA 100,50,0,200,100,0,0,10,-86,0,-14,-10,100,0,0,-200,54,-10,104,0,54,10,100,0,0,200,-14,10,-86,0,0,-10,100,0,-100,0,0,30,-54,50,0,40,-104,0,0,-40,-54,-50,0,-100,54,10,104,0,54,-10,0,70,0,-200,-54,-10,0,330,-104,0,0,-330,-54,10,-100,0
220 DATA 98,48,0,204,104,0,0,10,-88,0,-16,-12,104,0,0,-202,54,-10,102,0,54,10,102,0,0,200,-16,10,-86,0,0,-6,98,0,-100,0,0,32,-54,50,0,36,-100,0,0,-36,-54,-50,0,-102,54,10,100,0,54,-10,0,70,0,-202,-54,-10,0,328,-100,0,0,-328,-54,8,-102,0
230 FOR ke=0 TO 10 STEP 2:PLOT 98+ke,252+ke,1:DRAW 200,252+ke,1:NEXT  
240 FOR kf=0 TO 10 STEP 2:PLOT 514-kf,250+kf,1:DRAW 410,250+kf,1:NEXT 
250 '
260 'Orgelpfeifen
270 '
280 FOR pf=1 TO 29:READ breite,px,py,hoehe,yfu
290 FOR a=px TO px+breite:PLOT a,py,2:DRAWR 0,hoehe:PLOT  px+breite/2,yfu:DRAW a,py,2:PLOT a,py,3:DRAWR 0,10,3:PLOT a,py+5,0:NEXT a,pf
300 DATA 8,104,80,90,54,8,118,75,110,54,8,132,70,130,54,8,146,65,150,54,8,160,70,130,54,8,174,75,110,54,8,188,80,90,54,6,208,70,190,54,6,220,65,210,52,6,232,61,230,50,6,244,59,248,48,8,260,70,250,44,8,274,65,270,44,8,288,60,290,44,8,302,55,310,44
310 DATA 8,316,60,290,44,8,330,65,270,44,8,344,70,250,44,6,362,59,248,48,6,374,61,230,50,6,386,65,210,52,6,398,70,190,54,8,416,80,90,54,8,430,75,110,54,8,444,70,130,54,8,458,65,150,54,8,472,70,130,54,8,486,75,110,54,8,500,80,90,54
320 '
330 'Kantate
340 '
350 s=2:h=2:'Schnelligkeit und Tonhoehe
360 RESTORE 700
370 GOSUB 620:'Takt 1 bis 7
380 GOSUB 620:GOSUB 800:'Takt 8 
390 FOR wdh=1 TO 2
400 RESTORE 960
410 GOSUB 860:'Takt 9-11 bzw. 24-26
420 GOSUB 990:'Takt 12 bzw. 27
430 GOSUB 620:GOSUB 800:'Takt 13 bzw. 28
440 GOSUB 860:'Takt 14-16 bzw. 29-31
450 GOSUB 990:'Takt 17 bzw. 32
460 RESTORE 720:GOSUB 620:'Takt 18-23 bzw. 33-38
470 NEXT
480 GOSUB 620:RESTORE 1160:GOSUB 800:'Takt 39
490 GOSUB 860:'Takt 40-42
500 GOSUB 990:'Takt 43
510 GOSUB 620:'Takt 44-45
520 GOSUB 860:'Takt 46-48
530 GOSUB 990:'Takt 49
540 GOSUB 620:'Takt 50
550 GOSUB 800:'Takt 51
560 GOSUB 860:'Takt 52-54
570 GOSUB 990:'Takt 55-56
580 GOSUB 860:'Takt 57-59
590 GOSUB 990:'Takt 60
600 GOSUB 620:'Takt 61-70
610 GOTO 1490:'Takt 71
620 ENV 1,10*s,-1,10         
630 READ a:IF a=-1 THEN RETURN
640 SOUND 1,a/h,30*s,9,1      
650 FOR z=1 TO 3:READ c
660 SOUND 2,c/h,10*s,10,1     
670 NEXT
680 GOTO 630
690 'Takt 1
700 DATA 1276,0,319,284,638,253,213,239,758,239,190,213
710 'Takt 2-7,18-23,33-38
720 DATA 1012,213,159,169,758,159,213,253,1517,319,284,253
730 DATA 1136,239,213,190,1012,213,239,253,956,284,253,319
740 DATA 851,338,319,284,676,426,338,284,851,239,253,284
750 DATA 638,253,319,284,758,253,213,239,956,239,190,213
760 DATA 1012,213,159,169,758,159,213,253,851,319,284,253
770 DATA 956,379,213,239,902,253,284,319,851,426,319,338,-1
780 'Takt 8,39(1-3)
790 DATA 1276,319,253,213,-1
800 READ a,c:IF a=-1 THEN RETURN
810 SOUND 1,a/h,10*s,9,1
820 SOUND 2,c/h,10*s,10,1   
830 GOTO 800
840 'Takt 8
850 DATA 0,159,0,213,638,253,851,319,851,253,1012,213,-1,1
860 WHILE SQ(1)>127:WEND     
870 READ a,b
880 IF a=-1 THEN RETURN
890 SOUND 1,a/h,b*s,7
900 READ c,d
910 SOUND 4,c/h,d*s,9
920 READ e,f
930 SOUND 2,e/h,f*s,9
940 GOTO 870
950 'Takt 9-11,24-26
960 DATA 1276,30,319,30,253,30,676,30,319,30,253,30,758,30,319,30,239,30
970 DATA 676,30,284,30,213,30,758,30,319,30,213,30,851,30,338,30,213,30
980 DATA 758,30,319,30,239,30,676,30,284,30,239,30,638,30,319,30,253,30,-1,1
990 READ a:b=10
1000 IF a=-1 THEN RETURN
1010 SOUND 1,a/h,b*s,9,1 
1020 READ c
1030 SOUND 2,c/h,10*s,10,1   
1040 READ e
1050 SOUND 4,e/h,10*s,8
1060 GOTO 990
1070 'Takt 12-17,27-32
1080 DATA 851,0,284,851,426,284,851,379,284,0,338,284,0,284,284,851,319,284,851,284,1,851,239,1,851,253,1,-1
1090 DATA 1703,239,284,338,-1
1100 DATA 0,426,0,338,851,284,851,239,851,253,851,284,-1,1 
1110 DATA 638,30,319,30,253,30,676,30,319,30,253,30,758,30,319,30,239,30
1120 DATA 506,30,319,30,213,30,1012,30,426,30,213,30,758,30,319,30,253,30
1130 DATA 956,14,379,14,284,14,956,8, 379,8, 253,8,956,8, 379,8, 239,8,851,30,338,30,253,30,1703,30,338,30,284,30,-1,1
1140 DATA 1276,319,319,1276,253,319,1276,284,319,638,253,319,638,213,319,638,239,319,758,239,1,758,190,1,758,213,1,-1
1150 'Takt 39(4-9)-71
1160 DATA 0,159,0,213,638,253,676,319,676,253,758,225,-1,1
1170 DATA 851,30,338,30,284,30,956,30,338,30,284,30,1012,30,301,30,253,30
1180 DATA 1136,30,284,30,239,30,568,15,284,15,239,15,638,15,284,15,239,15,716,15,284,15,239,15,758,15,284,15,239,15
1190 DATA 851,30,284,30,253,30,1012,14,284,14,253,14,1012,8,284,8,239,8,1012,8,284,8,213,8,758,30,301,30,253,30,-1,1
1200 DATA 1136,284,284,1136,239,284,1136,253,284,716,239,284,716,190,284,716,213,284,851,213,1,851,179,1,851,190,1,-1
1210 DATA 956,190,142,150,716,142,190,239,758,284,253,239
1220 DATA 851,179,190,213,804,239,253,284,758,379,284,301,-1
1230 DATA 1136,30,284,30,239,30,568,30,284,30,239,30,506,30,319,30,213,30
1240 DATA 478,30,319,30,190,30,568,30,239,30,190,30,758,30,319,30,190,30
1250 DATA 716,30,358,30,213,30,851,14,284,14,213,14,851,8,284,8,190,8,851,8,284,8,179,8,638,30,319,30,213,30,-1,1
1260 DATA 956,190,239,956,159,239,956,179,239,758,159,239,758,190,239,758,239,239,956,319,1,956,284,1,956,268,1,-1
1270 DATA 716,284,239,253,851,239,284,358,638,426,379,358,956,379,478,426,-1
1280 DATA 0,379,0,319,956,338,1012,319,1012,253,851,284,-1,1
1290 DATA 1276,30,319,30,253,30,638,30,319,30,253,30,758,30,319,30,239,30
1300 DATA 1012,30,319,30,213,30,758,30,319,30,213,30,1517,30,319,30,213,30
1310 DATA 1136,15,319,15,239,15,1136,15,338,15,239,15,1012,30,319,30,253,30,956,30,319,30,253,30,-1,1
1320 DATA 851,338,284,851,426,284,851,379,284,0,338,284,0,284,284,851,319,284,851,284,1,851,239,1,851,253,1
1330 DATA 1703,239,1,1703,284,1,1703,338,1,1,426,1,1,338,1,851,284,1,851,239,1,851,253,1,851,284,1,-1
1340 DATA 638,30,319,30,253,30,676,30,319,30,253,30,758,30,319,30,239,30
1350 DATA 506,30,319,30,213,30,1012,30,426,30,213,30,758,30,319,30,253,30
1360 DATA 956,14,379,14,284,14,956,8,379,8,253,8,956,8,379,8,239,8,851,15,338,15,284,15,851,15,379,15,284,15,1703,30,338,30,284,30,-1,1
1370 DATA 1276,319,319,1276,253,319,1276,213,319,1276,159,319,1276,213,319,1276,253,319,1276,319,319,1276,253,319,1276,213,319,-1
1380 DATA 1276,176,213,253,1276,319,253,213,1276,190,239,284
1390 DATA 1276,338,284,239,1276,213,253,319,1276,379,319,253
1400 DATA 1276,239,284,338,1276,426,338,284,1276,239,253,284
1410 DATA 1276,253,319,284,638,253,213,239,758,239,190,213
1420 DATA 1012,213,159,169,758,159,213,253,1517,319,284,253
1430 DATA 1136,239,213,190,1012,213,239,253,956,284,253,319
1440 DATA 851,338,319,284,676,426,338,284,851,239,253,284
1450 DATA 638,253,319,284,758,253,213,239,956,239,190,213
1460 DATA 1012,213,159,169,758,159,213,253,851,319,284,253
1470 DATA 956,379,213,239,902,253,284,319,851,426,319,338,-1
1480 DATA 1276,30,319,30
1490 READ a,b,c,d
1500 SOUND 1,a/h,b*s,9,1 
1510 SOUND 2,c/h,d*s,10,1
1520 call &bd19:GOTO 1520
*/ });