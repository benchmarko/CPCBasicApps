/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 REM tetris - Tetris
2 REM https://rosettacode.org/wiki/Tetris#Locomotive_Basic
3 REM GNU FDL 1.2 (https://www.gnu.org/licenses/fdl-1.2.html)
100 REM arrows or A/D/W/S; Space drops; Q quits
101 DEFINT a-z
102 RANDOMIZE TIME
103 MODE 0:INK 0,0:INK 1,26:INK 2,20:INK 3,24:INK 4,18:INK 5,6:INK 6,2:INK 7,15
104 DIM b(503),p(6,3),ds$(6,3),es$(6,3),fx(6,3),fy(6,3)
105 DIM offsets(111),rowoff(111),filled(19),bag(6)
106 keys$="a"+CHR$(242)+"d"+CHR$(243)+"w"+CHR$(240)+"s"+CHR$(241)+" "
107 PRINT "Shapes";
108 FOR s=0 TO 6:FOR r=0 TO 3:READ p(s,r):NEXT r:NEXT s
109 GOSUB 9700
110 PRINT "Board"
111 ' Logical cell (x,y) is b(x+76+18*y); each padded row has 18 cells.
112 FOR x=0 TO 71:b(x)=1:b(x+432)=1:NEXT x
113 FOR y=4 TO 23:rowbase=18*y:FOR x=0 TO 3
114 b(rowbase+x)=1:b(rowbase+x+14)=1
115 NEXT x,y
1000 FOR y=0 TO 19
1001 filled(y)=0
1002 FOR x=0 TO 9:b(x+76+18*y)=0:NEXT x
1003 NEXT y
1004 CLS:GOSUB 9000
1005 bagleft=0:GOSUB 8000:s=pick:GOSUB 8000:ns=pick:r=0:px=3:py=0:l=0
1006 score!=0:level=1:delay=150
1007 er=0:GOSUB 9600
1008 GOSUB 9200
1009 GOSUB 9400
1010 k$=""
1011 dt!=TIME+delay
1012 WHILE k$<>"q"
1013 IF TIME>=dt! THEN dt!=TIME+delay:k$="s" ELSE k$=LOWER$(INKEY$)
1014 i=0:IF k$<>"" THEN i=INSTR(keys$,k$)
1015 IF i>0 AND i<9 THEN ON CINT(i/2) GOSUB 4000,4100,4200,4300:GOSUB 5000:IF ok THEN GOSUB 9500
1016 IF (i=7 OR i=8) AND ok=0 THEN GOSUB 6000
1017 IF i=9 THEN GOSUB 7000
1018 WEND
1019 PEN 1:LOCATE 1,23:PRINT "GAME OVER";SPACE$(8)
1020 PRINT "Again (Y/N)?";SPACE$(6);
1021 k$="":WHILE k$<>"y" AND k$<>"n":k$=LOWER$(INKEY$):WEND
1022 IF k$="y" THEN GOTO 1000
1023 END
1024 '
4000 nx=px-1:ny=py:nr=r
4001 RETURN
4100 nx=px+1:ny=py:nr=r
4101 RETURN
4200 nx=px:ny=py:nr=(r+1) MOD 4
4201 RETURN
4300 nx=px:ny=py+1:nr=r
4301 RETURN
4302 '
4303 ' test candidate NX,NY,NR against walls, floor, and settled board cells
5000 ok=1:cell=0:base1=nx+76+18*ny:first=s*16+nr*4
5001 WHILE cell<4 AND ok
5002 IF b(base1+offsets(first+cell))<>0 THEN ok=0
5003 cell=cell+1
5004 WEND
5005 RETURN
5006 '
5007 ' lock the active piece, clear full rows
6000 cleared=0:rowlo=19:rowhi=0:base1=px+76+18*py:first=s*16+r*4
6001 FOR cell=0 TO 3
6002 by=py+rowoff(first+cell)
6003 b(base1+offsets(first+cell))=s+1:filled(by)=filled(by)+1
6004 IF by<rowlo THEN rowlo=by
6005 IF by>rowhi THEN rowhi=by
6006 NEXT cell
6007 y=rowhi
6008 WHILE y>=rowlo
6009 IF filled(y)=10 THEN GOSUB 6100 ELSE y=y-1
6010 WEND
6011 IF cleared=1 THEN score!=score!+100*level
6012 IF cleared=2 THEN score!=score!+300*level
6013 IF cleared=3 THEN score!=score!+500*level
6014 IF cleared=4 THEN score!=score!+800*level
6015 level=1+l\10:delay=MAX(15,150-10*(level-1))
6016 IF cleared THEN GOSUB 9400
6017 s=ns:GOSUB 8000:ns=pick:GOSUB 9200
6018 r=0:px=3:py=0
6019 nx=px:ny=py:nr=r:GOSUB 5000:IF ok=0 THEN k$="q"
6020 IF ok THEN er=0:GOSUB 9600:dt!=TIME+delay
6021 RETURN
6022 '
6023 ' recheck same row(s) after shifting
6100 WINDOW #1,2,11,2,y+2
6101 ' Cursor-up scrolls down; clear-under-cursor also flushes deferred scrolling.
6102 PRINT #1,CHR$(11);CHR$(16);
6103 FOR yy=y TO 1 STEP -1:filled(yy)=filled(yy-1):NEXT yy
6104 FOR x=89+18*y TO 90 STEP -1:b(x)=b(x-18):NEXT x
6105 FOR x=0 TO 9:b(x+76)=0:NEXT x
6106 filled(0)=0:l=l+1:cleared=cleared+1
6107 RETURN
6108 '
6109 ' hard-drop
7000 er=1:GOSUB 9600:ok=1
7001 WHILE ok=1
7002 nx=px:ny=py+1:nr=r:GOSUB 5000
7003 IF ok THEN py=ny
7004 WEND
7005 er=0:GOSUB 9600
7006 GOSUB 6000
7007 RETURN
7008 '
7009 ' draw pieces without replacement
8000 IF bagleft=0 THEN FOR bagindex=0 TO 6:bag(bagindex)=bagindex:NEXT bagindex:bagleft=7
8001 bagindex=INT(RND*bagleft):pick=bag(bagindex):bagleft=bagleft-1:bag(bagindex)=bag(bagleft)
8002 RETURN
8003 '
8004 ' draw empty startup board
9000 PRINT CHR$(150);STRING$(10,154);CHR$(156)
9001 FOR y=0 TO 19:PRINT CHR$(149);TAB(12);CHR$(149):NEXT y
9002 PRINT CHR$(147);STRING$(10,154);CHR$(153)
9003 PRINT "A/D move W rotate"
9004 PRINT "SPACE drop S down"
9005 RETURN
9006 '
9007 ' draw preview piece
9200 FOR yy=0 TO 3
9201 LOCATE 14,yy+2:PRINT "    ";
9202 NEXT yy
9203 LOCATE 14+fx(ns,0),2+fy(ns,0):PRINT ds$(ns,0);
9204 RETURN
9205 '
9400 LOCATE 14,8:PRINT "Lines";
9401 LOCATE 13,9:PRINT USING "######";l;
9402 LOCATE 14,11:PRINT "Level";
9403 LOCATE 13,12:PRINT USING "######";level;
9404 LOCATE 14,14:PRINT "Score";
9405 LOCATE 13,15:PRINT USING "######";score!;
9406 RETURN
9407 '
9500 PRINT CHR$(31);CHR$(2+px+fx(s,r));CHR$(2+py+fy(s,r));es$(s,r);CHR$(31);CHR$(2+nx+fx(s,nr));CHR$(2+ny+fy(s,nr));ds$(s,nr);
9501 px=nx:py=ny:r=nr
9502 RETURN
9503 '
9600 LOCATE 2+px+fx(s,r),2+py+fy(s,r)
9601 IF er THEN PRINT es$(s,r); ELSE PRINT ds$(s,r);
9602 RETURN
9603 '
9604 ' decode masks once into occupied-cell coordinates and draw/erase strings
9700 FOR s=0 TO 6
9701 FOR r=0 TO 3
9702 first=s*16+r*4
9703 mu!=p(s,r):IF mu!<0 THEN mu!=mu!+65536
9704 count=0:weight!=32768:ds$(s,r)=CHR$(15)+CHR$(s+1):es$(s,r)=""
9705 FOR yy=0 TO 3:FOR xx=0 TO 3
9706 IF mu!>=weight! THEN mu!=mu!-weight!:GOSUB 9800:IF count=4 THEN xx=3:yy=3
9707 weight!=weight!/2
9708 NEXT xx,yy
9709 ds$(s,r)=ds$(s,r)+CHR$(15)+CHR$(1)
9710 NEXT r
9711 PRINT STR$(s+1);"/7";STRING$(4,8);
9712 NEXT s
9713 RETURN
9714 '
9800 IF count=0 THEN fx(s,r)=xx:fy(s,r)=yy:cx=xx:cy=yy
9801 offsets(first+count)=xx+18*yy:rowoff(first+count)=yy
9802 step1$=STRING$(yy-cy,10)
9803 IF xx<cx THEN step1$=step1$+STRING$(cx-xx,8)
9804 IF xx>cx THEN step1$=step1$+STRING$(xx-cx,9)
9805 ds$(s,r)=ds$(s,r)+step1$+CHR$(232)
9806 es$(s,r)=es$(s,r)+step1$+" "
9807 cx=xx+1:cy=yy:count=count+1
9808 RETURN
9809 '
9810 ' four 16-bit 4x4 masks per piece, ordered I,T,O,S,Z,J,L
9811 DATA &0F00,&2222,&00F0,&4444
9812 DATA &0E40,&4C40,&4E00,&4640
9813 DATA &0660,&0660,&0660,&0660
9814 DATA &06C0,&8C40,&6C00,&4620
9815 DATA &0C60,&4C80,&C600,&2640
9816 DATA &44C0,&8E00,&6440,&0E20
9817 DATA &4460,&0E80,&C440,&2E00
*/ });
