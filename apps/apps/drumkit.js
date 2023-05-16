/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem drumkit - Amstrad Drumkit
2 rem (c) J. Keneally, 1985
3 rem
10 REM Amstrad Drumkit
20 REM Copyright J. Keneally 1985
30 MODE 2:GOSUB 210:GOSUB 640
40 EVERY itime GOSUB 760
50 imd=0
60 a$="":LOCATE 35,3:PRINT"Beat:";ix:WHILE a$="":a$=INKEY$
70 LOCATE 13+ix,16-irythm(ix,ichan)
80 PRINT CHR$(143+imd);:imd=(imd+1) AND 1
90 WEND
100 a$=UPPER$(a$):IF a$="S" OR a$="F" THEN GOSUB 810:GOTO 60
110 IF a$="C" THEN GOSUB 830:GOTO 60
120 IF a$="L" THEN GOSUB 850:GOTO 60
130 IF a$="W" THEN GOSUB 920:GOTO 60
140 LOCATE 13+ix,16-irythm(ix,ichan)
150 i=ASC(a$):PRINT CHR$(159+16*(i=243 OR (i=242)));:
160 i1=irythm(ix,ichan)
170 irythm(ix,ichan)=i1-(i=241)*(i1>0)+(i=240)*(i1<11)
180 ix=ix+(i=243)*(ix<47)-(i=242)*(ix>0)
190 GOTO 60
200 REM
210 REM Initialise
220 DEFINT i:DIM irythm(47,3),itone(11),ienv(11),ient(11),noise(11),name$(11)
230 RESTORE 240
240 DATA 0,1,0,15,Wood Block
250 DATA 18,5,3,13,Guiro
260 DATA 80,3,0,0,Cowbell
270 DATA 0,4,0,2,Hi Hat
280 DATA 150,6,4,1,Cymbal
290 DATA 200,3,1,13,Snare
300 DATA 480,1,2,10,Tom 4
310 DATA 375,1,2,15,Tom 3
320 DATA 325,1,2,6,Tom 2
330 DATA 240,1,2,3,Tom 1
340 DATA 870,3,1,31,Bass Drum
350 FOR i=1 TO 11
360 READ itone(i),ienv(i),ient(i),noise(i),name$(i)
370 NEXT i
380 FOR i=0 TO 47:READ irythm(i,0):NEXT
390 DATA 10,10,6,6,11,0,11,0,5,0,6,5,11,0,11,4
400 DATA 10,10,6,6,11,0,11,0,5,0,6,5,11,0,11,4
410 DATA 10,10,6,6,11,0,11,0,5,0,6,5,11,0,11,4
420 irythm(5,1)=1:irythm(16,1)=2:irythm(34,1)=3:irythm(36,1)=3
430 irythm(0,1)=3:FOR i=44 TO 47:irythm(i,1)=3:NEXT
440 irythm(2,2)=1:irythm(19,2)=1:irythm(20,2)=1
450 itime=6:ichan=0:ix=0
460 ind=0
470 ENT 1,1,-100,1,5,25,3
480 ENT -2,1,-75,1,4,25,3
490 ENT -3,1,4,2,1,-8,2,1,4,2
500 ENT -4,4,4,1,4,-4,1
510 ENV 1,1,15,2,5,-3,4
520 ENV 2,1,15,1,15,-1,2
530 ENV 3,1,15,1,4,-2,2,7,-1,4
540 ENV 4,7,2,1,14,-1,4
550 ENV 5,1,15,1,15,-1,8
560 ENV 6,2,7,1,1,0,20,14,-1,10
570 LOCATE 13,18:PRINT"S,F = Slow/Fast. C = Channel. L=Load. W=save"
580 LOCATE 23,21:PRINT STRING$(21,143)
590 LOCATE 23,25:PRINT STRING$(21,143)
600 FOR i=1 TO 3:LOCATE 22,21+i:PRINT CHR$(143);TAB(44);CHR$(143):NEXT i
610 LOCATE 26,23:PRINT"AMSTRAD DRUMKIT"
620 RETURN
630 REM
640 REM Write frame
650 ifs=16:name$(0)="Silence"
660 FOR i=0 TO 11:LOCATE 2,ifs-i
670 PRINT name$(i);TAB(13);STRING$(48,159)
680 NEXT i
690 FOR i=0 TO 47:LOCATE 13+i,ifs-irythm(i,ichan)
700 PRINT CHR$(143);:NEXT i
710 PLOT 95,398-16*ifs:DRAWR 386,0
720 DRAWR 0,194:DRAWR -386,0:DRAWR 0,-194
730 LOCATE 20,3:PRINT"Channel No.";ichan
740 RETURN
750 REM
760 REM Play rythm
770 FOR iz1=0 TO 2
780 iz=irythm(ind,iz1):IF iz<>0 THEN SOUND 129+iz1,itone(iz),1000,0,ienv(iz),ient(iz),noise(iz)
790 NEXT
800 ind=(ind+1) MOD 48:RETURN
810 IF a$="S"  THEN itime=itime+1 ELSE itime=itime+(itime>1)
820 EVERY itime GOSUB 760:RETURN
830 ichan=(ichan+1) MOD 3:GOSUB 640:ix=0:RETURN
840 REM
850 REM Load
860 GOSUB 970
870 CLS#1:PRINT#1,"Loading."
880 OPENIN"!rythm"
890 FOR i=0 TO 47:INPUT #9,irythm(i,0),irythm(i,1),irythm(i,2)
900 NEXT i:CLOSEIN:EVERY itime GOSUB 760
910 CLS#1:GOSUB 640:ix=0:RETURN
920 REM Save
930 GOSUB 970:OPENOUT"!rythm"
940 CLS#1:PRINT#1,"Saving."
950 FOR i=0 TO 47:FOR i1=0 TO 2:PRINT #9,irythm(i,i1):NEXT i1:NEXT i
960 CLOSEOUT:CLS#1:EVERY itime GOSUB 760:RETURN
970 i=REMAIN(0):WINDOW#1,65,80,10,15
980 PRINT#1,"Load tape,":PRINT#1,"press a key."
990 WHILE INKEY$<>"":WEND:WHILE INKEY$="":WEND
1000 RETURN
*/ });
