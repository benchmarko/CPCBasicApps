/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem swamp
2 rem (c) David Muir
3 rem Modifications: delay in 210
4 rem
10 REM 
20 REM SWAMP
30 REM 
40 REM BY DAVID MUIR
50 REM (C) COMPUTING WITH
60 REM (C) THE AMSTRAD
70 REM 
80 DEFINT l,m,n,o,p:DIM l(21,21),m(21,21),nx(1),ny(1),ox(1),oy(1),nc(1),oc(1): hs=0:GOTO 990
90 REM update window displays
100 CLS #2:PRINT #2,sc:RETURN
110 CLS #3:PRINT #3,72-eg:RETURN 
120 CLS #1:PRINT #1,LEFT$(t$,li+1):RETURN
130 CLS #4:PRINT #4,bo:RETURN 
140 REM check new square
150 IF m(px+dx,py+dy)=254 THEN m(px+dx,py+dy)=255:eg=eg+1:sc=sc+10:GOSUB 100:GOSUB 110:IF eg=72 THEN eg=0:sc=sc+100:bo=bo+1:bf=-1:CLS:li=li+1+1*(li>4):PRINT "WELL DONE!":PRINT:PRINT "YOU MOVE TO ANOTHER":PRINT "PART OF THE SWAMP":GOSUB 190:GOTO 180
160 IF (px=nx(0) AND py=ny(0)) OR (px=nx(1) AND py=ny(1)) THEN li=li-1:bf=-1:CLS:LOCATE 1,1:PRINT "THE FROGS GOT YOU!";:eg=0:FOR i=1 TO 4:SOUND 7,600,30,5-i,0,0,7-i:NEXT:IF li>0 THEN 180 ELSE 940  
170 GOTO 460
180 CLS #1:CLS #2:CLS #3:CLS #4:GOTO 870
190 FOR i=1 TO 4:SOUND 5,100-i*20,30,i+2:FOR j=1 TO 100:NEXT:NEXT:RETURN
200 REM frogs
210 t!=time+70:while time<t!:call &bd19:wend:n=INT(RND*2)
220 lx=SGN(px-nx(n)):ly=SGN(py-ny(n))
230 ds=INT(RND*2+1):ON ds GOTO 300,350
240 nj(n)=nj(n)+1:IF nj(n)=7 THEN nj(n)=0:lx=2*SGN(px-nx(n)):ly=2*SGN(py-ny(y)):GOTO 230
250 GOTO 410
260 nh=-250*(lx>0)-251*(lx<0):IF nh=0 THEN nh=-253*(ly>0)-252*(ly<0)
270 IF nh<>0 THEN nc=nh
280 IF nx(n)+lx=px THEN IF ny(n)+ly=py THEN li=li-1:CLS:LOCATE 1,1:PRINT "THE FROGS GOT YOU!";:eg=0:FOR i=1 TO 4:SOUND 7,600,30,5-i,0,0,7-i:NEXT:IF li>0 THEN 180 ELSE 940 
290 SOUND 7,600,5,2,0,0,1:LOCATE nx(n),ny(n):PEN 2:PRINT CHR$(m(nx(n),ny(n)));:nx(n)=nx(n)+lx:ny(n)=ny(n)+ly:LOCATE nx(n),ny(n):PEN 1:PRINT CHR$(nc);:nj(n)=0:GOTO 410
300 IF nx(n)+lx=nx(1-n) AND ny(n)=ny(1-n) THEN 320
310 IF m(nx(n)+lx,ny(n))<>206 AND lx<>0 THEN ly=0:GOTO 260 
320 IF nx(n)=nx(1-n) AND ny(n)+ly=ny(1-n) THEN 240
330 IF m(nx(n),ny(n)+ly)<>206 AND ly<>0 THEN lx=0:GOTO 260
340 GOTO 240
350 IF nx(n)=nx(1-n) AND ny(n)+ly=ny(1-n) THEN 370
360 IF m(nx(n),ny(n)+ly)<>206 AND ly<>0 THEN lx=0:GOTO 260
370 IF nx(n)+lx=nx(1-n) AND ny(n)=ny(1-n) THEN 240  
380 IF m(nx(n)+lx,ny(n))<>206 AND lx<>0 THEN ly=0:GOTO 260
390 GOTO 240
400 REM player move
410 IF INKEY(74)=0 OR INKEY(8)=0 THEN IF px>1 THEN dx=-1:dy=0:GOTO 150
420 IF INKEY(75)=0 OR INKEY(1)=0 THEN IF px<21 THEN dx=1:dy=0:GOTO 150
430 IF INKEY(72)=0 OR INKEY(0)=0 THEN IF py>1 THEN dy=-1:dx=0:GOTO 150
440 IF INKEY(73)=0 OR INKEY(2)=0 THEN IF py<21 THEN dy=1:dx=0:GOTO 150
450 GOTO 210
460 IF m(px+dx,py+dy)=206 THEN 210
470 LOCATE px,py:PEN 2:PRINT CHR$(m(px,py));:SOUND 7,500,6,2
480 px=px+dx:py=py+dy:LOCATE px,py:PEN 3:PRINT CHR$(248);:GOTO 210
490 REM graphics
500 REM broken egg
510 SYMBOL 255,0,60,102,66,66,102,60,0
520 REM whole egg
530 SYMBOL 254,0,60,126,126,126,126,60,0
540 REM frog down
550 SYMBOL 253,66,102,36,199,255,60,255,153
560 REM frog up
570 SYMBOL 252,153,255,60,255,199,36,102,66
580 REM frog left
590 SYMBOL 251,216,83,126,248,248,126,83,216
600 REM frog right 
610 SYMBOL 250,27,202,126,31,31,126,202,27
620 REM permanent set up
630 MODE 1:BORDER 24:INK 0,18:INK 1,6,12:INK 2,24:INK 3,2:CLS
640 WINDOW #1,1,40,22,25:PAPER #1,2:CLS #1
650 WINDOW #1,22,40,1,21:PAPER #1,3:PEN #1,0:CLS #1
660 sc=0:li=5:eg=0:bo=1:t$=" "+STRING$(5,235):ni=40
670 PRINT #1:PRINT #1:PRINT #1,"  LIVES:"
680 PRINT #1:PRINT #1:PRINT #1:PRINT #1:PRINT #1,"  SCORE:"
690 PRINT #1:PRINT #1:PRINT #1:PRINT #1:PRINT #1,"   EGGS:"
700 PRINT #1:PRINT #1:PRINT #1:PRINT #1:PRINT #1,"  BOARD:"
710 WINDOW #0,1,21,1,21
720 WINDOW #1,24,32,5,5:PAPER #1,0:PEN #1,1
730 WINDOW #2,24,32,10,10:PAPER #2,0
740 WINDOW #3,24,32,15,15:PAPER #3,0
750 WINDOW #4,24,32,20,20:PAPER #4,0
760 WINDOW #5,4,21,23,23:PEN #5,3
770 FOR i=1 TO 21:FOR j=1 TO 21:l(i,j)=32:NEXT:NEXT
780 FOR h=4 TO 16 STEP 12:FOR i=0 TO 2:FOR j=4 TO 16 STEP 6:FOR k=0 TO 2
790 l(h+i,j+k)=254:l(j+k,h+i)=254:NEXT:NEXT:NEXT:NEXT
800 FOR h=4 TO 16 STEP 6:FOR i=0 TO 2:FOR j=2 TO 20 STEP 6 
810 l(h+i,j)=206:l(j,h+i)=206:NEXT:NEXT:NEXT
820 FOR h=4 TO 16 STEP 12:FOR i=0 TO 2:FOR j=1 TO 21 STEP 20  
830 l(h+i,j)=206:l(j,h+i)=206:NEXT:NEXT:NEXT  
840 FOR h=1 TO 19 STEP 18:FOR i=0 TO 2:FOR j=1 TO 20 STEP 19:FOR k=0 TO 1
850 l(h+i,j+k)=206:l(j+k,h+i)=206:NEXT:NEXT:NEXT:NEXT
860 REM set up each screen afresh
870 GOSUB 120:GOSUB 100:GOSUB 110:GOSUB 130:CLS #5:PRINT #5,"HISCORE=";hs;
880 FOR j=1 TO 21:FOR i=1 TO 21:m(i,j)=l(i,j):PEN 3+1*(m(i,j)=254):LOCATE i,j:PRINT CHR$(m(i,j));:NEXT:NEXT
890 px=11:py=21:nx(0)=10:nx(1)=12:ny(0)=11:ny(1)=11:nc=253:nj(0)=0:nj(1)=0:n=0 
900 PEN 1:FOR i=0 TO 1:LOCATE nx(i),ny(i):PRINT CHR$(nc):NEXT
910 PEN 3:LOCATE px,py:PRINT CHR$(248)
920 SOUND 7,20,100,2:FOR i=1 TO 500:NEXT:GOTO 410 
930 REM end of game
940 MODE 0:FOR i=1 TO 4:SOUND 5,600+i*20,30,6-i:FOR j=1 TO 100:NEXT:NEXT:PRINT "    FINAL  SCORE":PRINT:PRINT "    ";sc:IF sc>hs THEN hs=sc:PRINT:PRINT "    NEW  HISCORE":FOR i=1 TO 6:SOUND 5,80-i*10,30,i+2:FOR j=1 TO 100:NEXT:NEXT
950 PRINT:PRINT "     GAME  OVER":PRINT:PRINT "    ANOTHER  GO?"
960 q$=INKEY$:IF q$="" THEN 960 ELSE IF UPPER$(q$)="Y" THEN 630 ELSE IF UPPER$(q$)<>"N" THEN 960 ELSE CLS:END 
970 END
980 REM titles
990 MODE 1:BORDER 12:INK 0,10:INK 1,21:CLS
1000 LOCATE 1,11:PRINT SPACE$(9)+STRING$(3,207)+" "+CHR$(207)+"  "+CHR$(207)+" "+STRING$(4,207)+" "+CHR$(207)+CHR$(223)+CHR$(222)+CHR$(207)+" "+STRING$(3,207)
1010 PRINT SPACE$(9)+CHR$(207)+"   "+CHR$(207)+"  "+CHR$(207)+" "+CHR$(207)+"  "+CHR$(207)+" "+CHR$(207)+CHR$(221)+CHR$(220)+CHR$(207)+" "+CHR$(207)+" "+CHR$(207)
1020 PRINT SPACE$(9)+STRING$(3,207)+" "+CHR$(207)+"  "+CHR$(207)+" "+STRING$(4,207)+" "+CHR$(207)+"  "+CHR$(207)+" "+STRING$(3,207)
1030 PRINT SPACE$(11)+CHR$(207)+" "+CHR$(207)+CHR$(222)+CHR$(223)+CHR$(207)+" "+CHR$(207)+"  "+CHR$(207)+" "+CHR$(207)+"  "+CHR$(207)+" "+CHR$(207)  
1040 PRINT SPACE$(9)+STRING$(3,207)+" "+CHR$(207)+CHR$(220)+CHR$(221)+CHR$(207)+" "+CHR$(207)+"  "+CHR$(207)+" "+CHR$(207)+"  "+CHR$(207)+" "+CHR$(207)
1050 LOCATE 2,24:PRINT "INSTRUCTIONS?";
1060 REM instructions
1070 q$=INKEY$:IF q$="" THEN 1070 ELSE IF UPPER$(q$)="N" THEN 500 ELSE IF UPPER$(q$)<>"Y" THEN 1070
1080 CLS:PRINT "SWAMP":PRINT:PRINT "YOUR JOB IS TO DESTROY THE EGGS OF GIANTFROGS IN THE SWAMP.YOU MOVE USING CURSORKEYS OR JOYSTICK.  YOU DESTROY THE SPAWNBY STANDING ON IT.
1090 PRINT:PRINT "YOU HAVE TO AVOID THE TWO FROGS. IF THEYCATCH YOU THEN YOU WILL LOSE ONE OF YOURFIVE LIVES."
1100 PRINT:PRINT "YOU SCORE 10 FOR EACH EGG DESTROYED. YOUGAIN A BONUS OF 100 AND 1 EXTRA LIFE FOREACH BOARD OF 72 EGGS YOU DESTROY, AFTERWHICH YOU ARE GIVEN A NEW SCREEN.
1110 PRINT:PRINT "(PRESS ANY KEY)"
1120 q$=INKEY$:IF q$="" THEN 1120 ELSE 500
1130 GOTO 500
*/ });
