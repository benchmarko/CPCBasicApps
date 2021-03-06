/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem maze - Maze
2 rem (c) Joerg Heise
3 rem Modifications: delay, key test
6 rem
10 REM   <  Copyright by     Joerg Heise          >
20 REM 
30 REM   <                   Auf der Linde 8      >
40 REM   <                   5226 Reichshof       >
50 REM   <                   Tel. 02296/1705      >
60 REM
70 REM   Gerne Programmtausch gegen selbstge-
80 REM   schriebene Programme. Ausfuehrliche
90 REM   Liste auf Anfrage.
100 REM
110 REM
120 ENV 1,2,6,1,1,0,70,2,-6,1
130 ENV 2,2,6,1,1,0,35,2,-6,1 
140 ENV 3,2,6,1,1,0,18,2,-6,1 
150 ENV 4,2,6,1,1,0,53,2,-6,1 
160 ENV 5,2,6,1,1,0,105,2,-6,1 
170 ENT -1,1,1,8,1,-1,8
180 heise$="H e i s e   S o f t"
190 BORDER 5:PAPER 0:INK 0,0:PEN 1:MODE 0
200 INK 1,20,16:LOCATE 4,6:PRINT"Heise Software"
210 PEN 2:INK 2,10:LOCATE 7,9:PRINT"presents"
220 PEN 1:LOCATE 7,15:PRINT"M A Z E"
230 PEN 3:INK 3,6:LOCATE 2,21:PRINT CHR$(164)" 11/1984"
240 GOSUB 1070
250 MODE 1:PAPER 0:INK 0,0:BORDER 10:PEN 1:INK 1,26:PEN 2:INK 2,14:PEN 3:INK 3,22
251 PEN 1:PRINT"STEUERUNG MIT CURSORTASTEN"
252 PRINT:PRINT"[CAPS LOCK] GESAMTANSICHT"
253 PRINT
260 PEN 1:INPUT"Groesse in x-Richtung";wx
270 IF wx<4 OR wx>38 THEN PRINT"zwischen 4 und 38":PRINT:GOTO 260
280 PRINT:PRINT
290 FOR k=1 TO wx:q=RND(1)*9:NEXT
300 INPUT"Groesse in y-Richtung";wy
310 IF wy<4 OR wy>23 THEN PRINT"Zwischen 4 und 23!":PRINT:GOTO 300
320 IF INT(wx/2)<>wx/2 THEN wx=wx+1
330 IF INT(wy/2)<>wy/2 THEN wy=wy+1
340 PRINT:INPUT"Schwierigkeitsstufe 1-4";s:IF s<1 OR s>4 THEN 340
350 DIM a(wx,wy)
360 PRINT"Moment bitte!":x=INT(wx/2):y=INT(wy/2):a(x,y)=1
370 IF RND(1)*2 >1.1 THEN xs=SGN(RND(1)*2-1.1):ys=0:GOTO 390
380 xs=0:ys=SGN(RND(1)*2-1.1)
390 FOR i=0 TO 1:x=x+xs:y=y+ys:a(x,y)=1
400 IF f THEN IF x=1 OR x=wx-1 OR y=1 OR y=wy-1 THEN 430
410 IF x=0 OR x=wx OR y=0 OR y=wy THEN 430
420 NEXT:GOTO 370
430 f=f+1:IF f<s THEN 360
440 REM
450 x=INT(wx/2):y=INT(wy/2):x1=x:y1=y:r=0
460 x(0)=1:y(0)=0:x(1)=0:y(1)=-1:x(2)=-1:y(2)=0:x(3)=0:y(3)=1
470 rr=r+1:IF rr>3 THEN rr=0
480 xr=x(rr):yr=y(rr)
490 x1=x:y1=y:i=1.5:MODE 1:GOSUB 700 
500 MOVE 40,345:DRAW 595,345,1:MOVE 40,45:DRAW 595,45,1
510 MOVE 40,45:DRAW 40,345,1:MOVE 595,345:DRAW 595,45,1
520 i=i+0.5:x1=x1+x(r):y1=y1+y(r)
530 IF x1<0 OR x1>wx OR y1<0 OR y1>wy THEN GOSUB 890:GOTO 570
540 IF a(x1,y1)=0 THEN 570
550 GOSUB 700
560 GOTO 520
570 GOSUB 920
580 eingabe$=INKEY$
590 IF INKEY(70)=0 THEN GOSUB 950:while inkey(70)=0:call &bd19:wend:GOTO 490
595 IF eingabe$=""THEN 580
600 IF ASC(eingabe$)=242 THEN r=r-1:GOTO 670
610 IF ASC(eingabe$)=243 THEN r=r+1:GOTO 670
620 IF ASC(eingabe$)=240 THEN 640
630 GOTO 580
640 x1=x+x(r):y1=y+y(r):IF x1<0 OR x1>wx OR y1<0 OR y1>wy THEN 1030
650 IF A(x1,y1)=0 THEN 580
660 x=x1:y=y1:GOTO 470
670 IF r<0 THEN r=3:GOTO 470
680 IF r>3 THEN r=0
690 GOTO 470
700 a1=60+59/i:b1=25+24/i:b2=60-b1:a3=127-a1
710 b3=b1:b4=b2
720 c1=60+59/(i-0.5):d1=25+24/(i-0.5):d2=60-d1:c3=127-c1
730 d3=d1:d4=d2
740 xt=x1+xr:yt=y1+yr:IF xt<0 OR xt>wx OR yt<0 OR yt>wy THEN 790
750 IF a(xt,yt)=1 THEN 790
760 ba=b1:bb=b2:FOR k%=a1 TO c1 STEP 1.5 
770 MOVE k%*5,bb*6:DRAW k%*5,ba*6,2:bb=bb-1:ba=ba+1:NEXT  
780 GOTO 800
790 FOR k=a1 TO c1:MOVE k*5,b2*6:DRAW k*5,b1*6,2:NEXT  
800   FOR q=b2 TO b1 STEP 4:MOVE a1*5,b2*6:DRAW a1*5,b1*6,2:NEXT     
810 xt=x1-xr:yt=y1-yr:IF xt<0 OR xt>wx OR yt<0 OR yt>wy THEN 860
820 IF a(xt,yt)=1 THEN 860
830 bb=b4:ba=b3:FOR k=a3 TO c3 STEP -2
840 MOVE k*5,bb*6:DRAW k*5,ba*6,2:bb=bb-1:ba=ba+1:NEXT 
850 GOTO 870   
860 FOR k=a3 TO c3 STEP -1:MOVE k*5,b4*6:DRAW k*5,b3*6,2:NEXT 
870 MOVE a3*5,b4*6:DRAW a3*5,b3*6,2
880 RETURN
890 REM color
900 MOVE 62*5,b2*6:DRAW 62*5,b1*6,3:MOVE a3*5,30*6:DRAW a1*5,30*6,3:PRINT CHR$(22)+CHR$(0)  
910 RETURN
920 REM color
930 FOR k%=a3 TO a1 STEP 2:MOVE k%*5,b2*6:DRAW k%*5,b1*6,2:NEXT 
940 RETURN
950 CLS:FOR z=0 TO wy:FOR q=wx TO 0 STEP -1
960 IF q=x THEN IF z=y THEN PRINT CHR$(249);:GOTO 1010     
970 IF a(q,z) = 0 THEN 1000
980 IF a(q,z) =1 THEN PRINT" ";:GOTO 1010
990 IF q=x AND z=y THEN PRINT "*";:GOTO 1010
1000 PRINT CHR$(143);
1010 NEXT:PRINT:NEXT
1015 while inkey(70)=0:call &bd19:wend
1020 call &bd19:IF INKEY(70)=0 THEN RETURN ELSE 1020
1030 MODE 0:LOCATE 6,10:PEN 1:INK 1,13,18:PRINT"Herzlichen":LOCATE 4,12:PRINT"Glueckwunsch!!"   
1040 GOSUB 1070
1050 PEN 3:LOCATE 1,20:PRINT:INPUT"Nocheinmal";z$:IF LEFT$(lower$(z$),1)="j"THEN RUN     
1060 MODE 1:GOSUB 1070:END
1070 RESTORE:FOR ton = 0 TO 29
1080 READ h,k
1090 SOUND 1,h,0,0,k,0,0
1100 SOUND 4,h/4,0,0,k,0,0
1105 if inkey$<>"" then 1120
1110 NEXT
1120 RETURN
1130 DATA 253,2,253,2,253,2,253,2,253,2,253,3,284,4,319,1   
1140 DATA 319,3,319,3,319,3,319,3,284,2,284,2,253,5
1150 DATA 253,2,253,2,253,2,253,2,253,2,253,3,284,4,319,1
1160 DATA 319,3,319,3,319,3,319,3,253,2,284,2,319,5,0,3
1170 STOP
*/ });
