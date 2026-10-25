/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 REM tetris - Tetris
2 REM https://rosettacode.org/wiki/Tetris#Locomotive_Basic
3 REM GNU FDL 1.2 (https://www.gnu.org/licenses/fdl-1.2.html)
100 REM arrows or numpad or A/D/Q/W/S; Space drops; X Exit
110 DEFINT a-z
120 RANDOMIZE TIME
130 MODE 0:INK 0,0:INK 1,26:INK 2,20:INK 3,24:INK 4,18:INK 5,6:INK 6,2:INK 7,15
140 WINDOW #1,2,11,2,21:WINDOW #2,1,20,23,25:WINDOW #3,14,18,2,6
150 GOSUB 1240
160 DIM b(503),p(6,3),ds$(6,3),es$(6,3),fx(6,3),fy(6,3)
170 DIM offsets(111),rowoff(111),filled(19),bag(6)
180 ' key groups: 1=move left, 2=move right, 3=rotate left, 4=rotate right, 5=down, 6=drop
190 keys$="a4"+CHR$(242)+"d6"+CHR$(243)+"q7,"+"w8"+CHR$(240)+"s2"+CHR$(241)+" 5"+CHR$(13)
200 PRINT #1,"Shapes";
210 FOR s=0 TO 6:FOR r=0 TO 3:READ p(s,r):NEXT r:NEXT s
220 GOSUB 1520
230 PRINT #1,chr$(10);"Board"
240 ' logical cell (x,y) is b(x+76+18*y); each padded row has 18 cells
250 FOR x=0 TO 71:b(x)=1:b(x+432)=1:NEXT x
260 FOR y=4 TO 23:rowbase=18*y:FOR x=0 TO 3
270 b(rowbase+x)=1:b(rowbase+x+14)=1
280 NEXT x,y
290 '
300 CLS #1
310 FOR y=0 TO 19
320 filled(y)=0
330 FOR x=0 TO 9:b(x+76+18*y)=0:NEXT x
340 NEXT y
350 CLS #2:PRINT #2,"A/D move Q/W rotate";"SPACE drop S down";"X Exit"
360 bagleft=0:GOSUB 1190:s=pick:GOSUB 1190:ns=pick:r=0:px=3:py=0:l=0
370 score!=0:level=1:delay=150
380 er=0:GOSUB 1470
390 GOSUB 1330
400 GOSUB 1360
410 k$=""
420 dt!=TIME+delay
430 WHILE k$<>"x"
440 IF TIME>=dt! THEN dt!=TIME+delay:k$="s" ELSE k$=LOWER$(INKEY$)
450 i=0:IF k$<>"" THEN i=INSTR(keys$,k$)
460 IF i THEN i=INT((i-1)/3)+1:IF i<6 THEN ON i GOSUB 570,590,610,630,650:GOSUB 690:IF ok THEN GOSUB 1410
470 IF i=5 AND ok=0 THEN GOSUB 770 ELSE IF i=6 THEN GOSUB 1090
480 WEND
490 CLS #2
500 PRINT #2,"GAME OVER"
510 PRINT #2,"Again (Y/N)?";
520 k$="":WHILE k$<>"y" AND k$<>"n":k$=LOWER$(INKEY$):WEND
530 PRINT #2,k$;:IF k$="y" THEN GOTO 300
540 LOCATE 1,25
550 END
560 '
570 nx=px-1:ny=py:nr=r
580 RETURN
590 nx=px+1:ny=py:nr=r
600 RETURN
610 nx=px:ny=py:nr=(r+3) MOD 4
620 RETURN
630 nx=px:ny=py:nr=(r+1) MOD 4
640 RETURN
650 nx=px:ny=py+1:nr=r
660 RETURN
670 '
680 ' test candidate NX,NY,NR against walls, floor, and settled board cells
690 ok=1:cell=0:base1=nx+76+18*ny:first=s*16+nr*4
700 WHILE cell<4 AND ok
710 IF b(base1+offsets(first+cell))<>0 THEN ok=0
720 cell=cell+1
730 WEND
740 RETURN
750 '
760 ' lock the active piece, clear full rows
770 cleared=0:rowlo=19:rowhi=0:base1=px+76+18*py:first=s*16+r*4
780 FOR cell=0 TO 3
790 by=py+rowoff(first+cell)
800 b(base1+offsets(first+cell))=s+1:filled(by)=filled(by)+1
810 IF by<rowlo THEN rowlo=by
820 IF by>rowhi THEN rowhi=by
830 NEXT cell
840 y=rowhi
850 WHILE y>=rowlo
860 IF filled(y)=10 THEN GOSUB 990 ELSE y=y-1
870 WEND
880 sf=0:IF cleared=1 THEN sf=100 ELSE IF cleared=2 THEN sf=300 ELSE IF cleared=3 THEN sf=500 ELSE IF cleared=4 THEN sf=800
890 IF sf>0 THEN score!=score!+sf*level
900 level=1+l\10:delay=MAX(15,150-10*(level-1))
910 IF cleared THEN GOSUB 1360
920 s=ns:GOSUB 1190:ns=pick:GOSUB 1330
930 r=0:px=3:py=0
940 nx=px:ny=py:nr=r:GOSUB 690:IF ok=0 THEN k$="x"
950 IF ok THEN er=0:GOSUB 1470:dt!=TIME+delay
960 RETURN
970 '
980 ' recheck same row(s) after shifting
990 WINDOW #5,2,11,2,y+2
1000 ' cursor-up scrolls down; clear-under-cursor to flush
1010 PRINT #5,CHR$(11);CHR$(16);
1020 FOR yy=y TO 1 STEP -1:filled(yy)=filled(yy-1):NEXT yy
1030 FOR x=89+18*y TO 90 STEP -1:b(x)=b(x-18):NEXT x
1040 FOR x=0 TO 9:b(x+76)=0:NEXT x
1050 filled(0)=0:l=l+1:cleared=cleared+1
1060 RETURN
1070 '
1080 ' hard-drop
1090 er=1:GOSUB 1470:ok=1
1100 WHILE ok=1
1110 nx=px:ny=py+1:nr=r:GOSUB 690
1120 IF ok THEN py=ny
1130 WEND
1140 er=0:GOSUB 1470
1150 GOSUB 770
1160 RETURN
1170 '
1180 ' draw pieces without replacement
1190 IF bagleft=0 THEN FOR bagindex=0 TO 6:bag(bagindex)=bagindex:NEXT bagindex:bagleft=7
1200 bagindex=INT(RND*bagleft):pick=bag(bagindex):bagleft=bagleft-1:bag(bagindex)=bag(bagleft)
1210 RETURN
1220 '
1230 ' draw empty startup board
1240 PRINT CHR$(150);STRING$(10,154);CHR$(156)
1250 FOR y=0 TO 19:PRINT CHR$(149);TAB(12);CHR$(149):NEXT y
1260 PRINT CHR$(147);STRING$(10,154);CHR$(153)
1270 LOCATE 14,8:PRINT "Lines";
1280 LOCATE 14,11:PRINT "Level";
1290 LOCATE 14,14:PRINT "Score";
1300 RETURN
1310 '
1320 ' draw preview piece
1330 CLS #3:LOCATE #3,fx(ns,0)+1,fy(ns,0)+1:PRINT #3,ds$(ns,0);
1340 RETURN
1350 '
1360 LOCATE 13,9:PRINT USING "######";l;
1370 LOCATE 13,12:PRINT USING "######";level;
1380 LOCATE 13,15:PRINT USING "######";score!;
1390 RETURN
1400 '
1410 LOCATE 2+px+fx(s,r),2+py+fy(s,r)
1420 x1=2+nx+fx(s,nr):y1=2+ny+fy(s,nr)
1430 PRINT es$(s,r);CHR$(31);CHR$(x1);CHR$(y1);ds$(s,nr);
1440 px=nx:py=ny:r=nr
1450 RETURN
1460 '
1470 LOCATE 2+px+fx(s,r),2+py+fy(s,r)
1480 IF er THEN PRINT es$(s,r); ELSE PRINT ds$(s,r);
1490 RETURN
1500 '
1510 ' decode masks once into occupied-cell coordinates and draw/erase strings
1520 FOR s=0 TO 6
1530 FOR r=0 TO 3
1540 first=s*16+r*4
1550 mu!=p(s,r):IF mu!<0 THEN mu!=mu!+65536
1560 count=0:weight!=32768:ds$(s,r)=CHR$(15)+CHR$(s+1):es$(s,r)=""
1570 FOR yy=0 TO 3:FOR xx=0 TO 3
1580 IF mu!>=weight! THEN mu!=mu!-weight!:GOSUB 1670:IF count=4 THEN xx=3:yy=3
1590 weight!=weight!/2
1600 NEXT xx,yy
1610 ds$(s,r)=ds$(s,r)+CHR$(15)+CHR$(1)
1620 NEXT r
1630 PRINT #1,STR$(s+1);"/7";STRING$(4,8);
1640 NEXT s
1650 RETURN
1660 '
1670 IF count=0 THEN fx(s,r)=xx:fy(s,r)=yy:cx=xx:cy=yy
1680 offsets(first+count)=xx+18*yy:rowoff(first+count)=yy
1690 stp$=STRING$(yy-cy,10)
1700 IF xx<cx THEN stp$=stp$+STRING$(cx-xx,8)
1710 IF xx>cx THEN stp$=stp$+STRING$(xx-cx,9)
1720 ds$(s,r)=ds$(s,r)+stp$+CHR$(232)
1730 es$(s,r)=es$(s,r)+stp$+" "
1740 cx=xx+1:cy=yy:count=count+1
1750 RETURN
1760 '
1770 ' four 16-bit 4x4 masks per piece, ordered I,T,O,S,Z,J,L
1780 DATA &0F00,&2222,&00F0,&4444
1790 DATA &0E40,&4C40,&4E00,&4640
1800 DATA &0660,&0660,&0660,&0660
1810 DATA &06C0,&8C40,&6C00,&4620
1820 DATA &0C60,&4C80,&C600,&2640
1830 DATA &44C0,&8E00,&6440,&0E20
1840 DATA &4460,&0E80,&C440,&2E00
*/ });
