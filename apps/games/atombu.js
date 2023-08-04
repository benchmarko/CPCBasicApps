/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem atombu - Atombunker
2 rem (c) Marco Vieth, 1986
3 rem 
5 rem Modification: replaced RSX by BASIC
6 rem
100 REM Atombunker.Basic (v6.1)
110 IF PEEK(&A500)<>1 THEN MODE 1:SYMBOL AFTER 256:PRINT"ATOMBUNKER.BIN laden ...":MEMORY &88FB:poke &a500,1:GOTO 1520: 'LOAD"ATOMBU6.BIN",&A500:CALL &A500:GOTO 1520
120 CLEAR:GOTO 1390
130 MODE 1:LOCATE 8,11:PRINT"{Bitte warten...}"
140 LOCATE 1,25:PRINT" ATOMBUNKER - (c) Marco Vieth, Mai 1986 ";
150 WINDOW #1,33,40,1,23:PRINT#1," Bild:  
 Etage: 
"
160 PRINT#1,"Spieler  1: 000 Geraete.
Spieler  2: 000 Geraete.
 Level:";
170 IF PEEK(&A6B0)=255 THEN PRINT#1,USING"#";PEEK(&A6B1) ELSE PRINT#1,"-"
180 PRINT#1,"






Meldung:";
190 WINDOW #2,33,40,24,24:PAPER #2,1:PEN #2,3:CLS#2
200 PRINT CHR$(23)+CHR$(1);:PLOT 512,399,1:DRAW 512,16:PRINT CHR$(23)+CHR$(0);
210 GOSUB 1710:PRINT CHR$(30);
220 '|TESTE,ad,120,255
225 c.s=ad:c.lg=120:c.by=255:gosub 10650: 'TODO
227 z=PEEK(1)*256+PEEK(0):IF z<>0 THEN PRINT"Bild an Adr";z-8;" voll !!":PRINT"Diamanten koennen nicht
":PRINT"verteilt werden.":CLEAR:CALL &BB18:GOTO 1390
230 j=ad-1:FOR i=1 TO 120
240 d1(0)=RND*7:d2(0)=RND*6:IF MID$(BIN$(PEEK(j+d2(0)+1),8),d1(0)+1,1)="1" THEN 240
250 d1(i)=d1(0)*8:d2(i)=d2(0)*24:j=j+8:NEXT i:j=0:i=PEEK(&93C6):if i<= 120 then d1(i)=255 else print "kein Reaktor!":call &bb18
260 t$=" ":IF he=1 THEN t$="SEIT.":GOTO 300
280 IF y(1)=ym-7-yb THEN y(1)=0:GOSUB 710 ELSE IF y(1)=0 THEN y(1)=ym-7-yb:GOSUB 710 ELSE IF x(1)=xm-xb-1 THEN x(1)=0:GOSUB 710 ELSE IF x(1)=0 THEN x(1)=xm-xb-1:GOSUB 710
290 GOTO 310
300 IF x(1)=xm-xb-1 THEN x(1)=0:GOSUB 710 ELSE IF x(1)=0 THEN x(1)=xm-xb-1 ELSE IF y(1)=ym-7-yb THEN y(1)=0:GOSUB 710 ELSE IF y(1)=0 THEN y(1)=ym-7-yb:GOSUB 710
310 IF fl=1 THEN fl=0:ad=ha:fa=hfa:x(1)=hx:y(1)=hy:GOSUB 730:t$=t$+" ZU":GOSUB 780:GOTO 430
320 x(2)=x(1):y(2)=y(1):GOSUB 1920
330 GOSUB 730
333 '|BILD,&C000,ad,f,0,8,24
335 c.x=0:c.y=0:c.s=ad:c.pe=f:c.pa=0:c.w=8:c.h=24:gosub 10000
340 bi=(ad-&9440)/8+1:LOCATE #1,2,2:PRINT#1,USING"###";bi
350 SOUND 2,bi+50,90,5,0,1
360 LOCATE #1,3,4:PRINT#1,USING"##";12-(bi-1)\10
370 IF d1(bi)<>255 THEN c.x=d1(bi):c.y=d2(bi)+8:c.s=&A6C0+8*CINT(RND*2):c.pe=255:c.pa=0:c.w=1:c.h=2:gosub 10000: '|BILD,d1(bi),d2(bi)+8,&A6C0+8*CINT(RND*2),255,0,1,2
380 j=1:j(j)=2:GOSUB 620:s=0
390 IF PEEK(&93C6)=bi THEN an=1:x(3)=-1:x(4)=-1:EVERY 50,3 GOSUB 1260:GOTO 430  
400 FOR i=3 TO 4
410 x(i)=RND*7:y(i)=RND*6+1:IF MID$(h$(y(i)),x(i)+2,1)="1" THEN 410
420 x(i)=x(i)*8:y(i)=y(i)*24:w=i:GOSUB 850:NEXT i
430 CALL &BB03:while time<t!:call &bd19:wend:j(1)=0:j(2)=0:WHILE j(1)=0 AND j(2)=0:call &bd19:j(1)=JOY(0):j(2)=JOY(1)
440 IF PEEK(&A6B0)<>255 THEN 470
450 IF x(2)=x(w) THEN IF y(2)+24=y(w)THEN j(1)=0:GOSUB 1010:GOTO 470
460 IF RND*10<PEEK(&A6B1) OR j(1)=0 THEN GOSUB 1010
470 WEND
475 t!=time+50
480 IF j(1)<>0 AND j(2)<>0 THEN j=CINT(RND*1+(PEEK(&A6B1)/80))+1: ELSE IF j(1)<>0 THEN j=1 ELSE j=2
490 IF f(j)=1 THEN IF j(j)<>1 THEN 430 ELSE f(j)=0:y(j)=y(j)-8:GOSUB 620:GOTO 430
500 IF j(j)>15 THEN IF j(j)=18 THEN j(j)=2:GOTO 610 ELSE GOTO 870
510 j(j)=INT(LOG(j(j))/LOG(2))+1:IF j(j)>5 THEN 430
520 GOSUB 740:GOSUB 760:IF MID$(h$(p1),p2,1)="1" THEN 430
530 GOSUB 660:ON j(j) GOSUB 540,550,570,580:GOTO 430
540 y(j)=y1+yb/2:GOTO 560
550 y(j)=y1-yb/2
560 GOSUB 620:GOSUB 660:y(j)=y1:GOTO 620
570 x(j)=x1+4:GOTO 590
580 x(j)=x1-4
590 w(j)=w(j)+1:IF w(j)>1 THEN w(j)=0:j(j)=j(j)+3
600 GOSUB 620:GOSUB 660:x(j)=x1:GOTO 620
610 GOSUB 660:j(j)=5:y(j)=y(j)+8:f(j)=1:GOSUB 620:GOTO 430
620 '|PFIGUR,x(j),y(j),c(j,j(j))
625 c.x=x(j):c.y=y(j):c.s=c(j,j(j)):gosub 10510
626 IF d1(bi)=x(j)THEN IF d2(bi)=y(j)THEN 670
630 IF x(3)=x(j)THEN IF y(3)-24=y(j)THEN w=3:AFTER 20,1 GOSUB 800
640 IF x(4)=x(j)THEN IF y(4)-24=y(j)THEN w=4:AFTER 20 GOSUB 800
650 RETURN
660 '|CFIGUR,x(j),y(j),c(j,j(j))
662 c.x=x(j):c.y=y(j):c.s=c(j,j(j)):gosub 10360
666 RETURN
670 SOUND 1,60,15,4:d1(bi)=255:hi(j)=hi(j)+1
680 IF j=1 THEN LOCATE #1,5,7 ELSE LOCATE #1,5,11
690 IF hi(j)<0 THEN hi(j)=0
700 PRINT#1,USING"###";hi(j):RETURN
710 x1=0:y1=0:GOSUB 760:GOSUB 730:IF MID$(h$(p1),p2,1)="1" THEN fl=1 ELSE fl=0
720 RETURN
730 h$(0)="111111111":h$(9)=h$(0):p=1:FOR i=ad TO ad+7:h$(p)="1"+BIN$(PEEK(i),8)+"1":p=p+1:NEXT:RETURN
740 y1=0:x1=0:IF j(j)=1 THEN y1=-1 ELSE IF j(j)=2 THEN y1=1 ELSE IF j(j)=3 THEN x1=-1 ELSE IF j(j)=4 THEN x1=1
750 RETURN
760 p1=y1:p2=x1:y1=y1*yb+y(j):x1=x1*8+x(j)
770 p1=p1/4+y1/24+1:p2=p2/4+x1/8+2:RETURN
780 SOUND 4,30*LEN(t$),LEN(t$)*6,4:PRINT#2,t$;
790 WHILE SQ(4)<>4:WEND:CLS#2:RETURN
800 GOSUB 850:FOR i=10 TO 30 STEP 10:t2!=time+30:y(w)=y(w)-7:GOSUB 850:SOUND 4,110-i,5,5
810 while time<t2!:call &bd19:wend:GOSUB 840:NEXT:y(w)=y(w)-3:DI:hj=j
820 FOR j=1 TO 2:IF x(w)=x(j)THEN IF y(w)=y(j)THEN hi(j)=hi(j)-1:GOSUB 680:j(j)=5:GOSUB 620
830 NEXT j:j=hj:y(w)=y(w)+24:EI:RETURN
840 '|CFIGUR,x(w),y(w),&A21B
845 c.x=x(w):c.y=y(w):c.s=&A21B:gosub 10360
848 RETURN
850 '|PFIGUR,x(w),y(w),&A21B
855 c.x=x(w):c.y=y(w):c.s=&A21B:gosub 10510
858 RETURN
860 REM Feuer
870 IF x(1)<>x(2) OR y(1)<>y(2) OR f(1)<>0 THEN t$="POSITION":GOSUB 780:GOTO 430
880 IF an=0 THEN 940
890 IF(x(1)<>32 AND x(1)=40)OR(y(1)=96 AND y(1)=120)THEN t$="Reaktor!":GOSUB 780:GOTO 430
900 hi(1)=hi(1)-1:hi(2)=hi(2)-1:IF hi(1)<=0 THEN IF hi(2)<=0 THEN 1310
910 IF z2>1 THEN z2=z2-1 ELSE IF z1>1 THEN z1=z1-1 ELSE 1350
920 j=1:SOUND 4,99+hi(j)*3,hi(j)*3,4:GOSUB 680:j=2
930 SOUND 4,99+hi(j)*3,hi(j)*3,4:GOSUB 680:GOTO 430
940 hfa=fa:ha=ad:hx=x(1):hy=y(1):he=0:IF j(j)>18 THEN he=1:GOTO 970
950 IF y(1)=ym-7-yb THEN fa=fa+10:ad=ad+80:GOTO 260
960 IF y(1)=0 THEN fa=fa-10:ad=ad-80:GOTO 260
970 IF x(1)=xm-xb-1 THEN fa=fa+1:ad=ad+8:GOTO 260
980 IF x(1)=0 THEN fa=fa-1:ad=ad-8:GOTO 260
990 CALL &BB03:END
1000 REM computer
1010 IF f(2)<>0 THEN 1240 ELSE j=2:x1=0:y1=0:GOSUB 760:a1=x(1):b1=y(1)
1020 IF j(1)=16 THEN IF x(1)=x(2)THEN IF y(1)=y(2)THEN RETURN
1030 IF d1(bi)<>255 AND s<16+PEEK(&A6B1)THEN s=s+1:a1=d1(bi):b1=d2(bi)ELSE IF j(1)=0 THEN IF x(1)=x(2)THEN IF y(1)=y(2)THEN RETURN
1040 IF RND*100>PEEK(&A6B1)+90 THEN j(2)=18:j(1)=0:RETURN
1050 IF yr<>0 THEN 1100
1060 yrp=SGN(b1-y(2)):IF yrp=0 THEN 1140
1070 IF MID$(h$(p1+yrp),p2,1)<>"1" THEN yr=yrp:xr=0:GOTO 1220
1080 IF MID$(h$(p1),p2+xr,1)<>"1" THEN 1220
1090 yr=-yrp:xr=0:GOTO 1220
1100 xrp=SGN(a1-x(2)):IF xrp=0 THEN 1180
1110 IF MID$(h$(p1),p2+xrp,1)<>"1" THEN xr=xrp:yr=0:GOTO 1220
1120 IF MID$(h$(p1+yr),p2,1)<>"1" THEN 1220
1130 xr=-xrp:yr=0:GOTO 1220
1140 IF MID$(h$(p1),p2+xr,1)<>"1" THEN 1220
1150 yr=SGN(INT(2*RND(1))-0.5):xr=0
1160 IF MID$(h$(p1+yr),p2,1)<>"1" THEN 1220
1170 yr=-yr:GOTO 1220
1180 IF MID$(h$(p1+yr),p2,1)<>"1" THEN 1220
1190 xr=SGN(INT(2*RND(1))-0.5):yr=0
1200 IF MID$(h$(p1),p2+xr,1)<>"1" THEN 1220
1210 xr=-xr
1220 IF xr=1 THEN j(2)=8 ELSE IF xr=-1 THEN j(2)=4 ELSE IF yr=1 THEN j(2)=2 ELSE IF yr=-1 THEN j(2)=1
1230 j=0:RETURN
1240 s1=s1+1:IF d1(bi)=255 AND s1=20 THEN s1=0:j(2)=1 ELSE IF s1=10-PEEK(&A6B1) THEN s1=0:j(2)=1
1250 RETURN
1260 he=0:x(0)=32-z1*8:y(0)=96-z2*8:FOR ss=0 TO 1:FOR s=0 TO 1
1270 '|BILD,x(0)+s*z1*8,y(0)+ss*z2*8,&A6D8+he,f1,0,z1,z2
1275 c.x=x(0)+s*z1*8:c.y=y(0)+ss*z2*8:c.s=&A6D8+he:c.pe=f1:c.pa=0:c.w=z1:c.h=z2:gosub 10000
1280 he=he+8:NEXT s,ss:f1=f1+4:IF f1 MOD 12<>0 THEN 1300
1290 IF z2<12 THEN z2=z2+2 ELSE IF z1<4 THEN z1=z1+1 ELSE 1310
1300 RETURN
1310 i=REMAIN(3):CALL &BCA7:INK 3,6,12:FOR ii=1 TO 5:FOR i=1 TO 15
1320 SOUND 4,0,5,ii,0,0,i:MOVE 250,210:DRAW RND*639,RND*399,1:NEXT i,ii
1330 INK 3,6:LOCATE 13,10:PRINT"Reaktor":LOCATE 12,11:PRINT"explodiert"
1340 GOTO 1370
1350 i=REMAIN(3):CALL &BCA7
1353 '|BILD,0,0,&A6D0,15,0,8,24
1355 c.x=0:c.y=0:c.s=&A6D0:c.pe=15:c.pa=0:c.w=8:c.h=24:gosub 10000
1360 LOCATE 13,10:PRINT"Reaktor":LOCATE 13,11:PRINT"gerettet"
1370 CALL &BB03:CALL &BB18:STOP
1380 REM menue
1390 MODE 1:PEN 1:PAPER 0:INK 1,24:INK 2,12:INK 3,6
1400 PRINT TAB(7);"A T O M B U N K E R


"
1410 PRINT TAB(7)"[1]  Spielen
":PRINT TAB(7)"[2]  Spielfeld laden
"
1420 PRINT TAB(7)"[3]  Mitspieler
":PRINT TAB(7)"[4]  E N D E

"
1430 PRINT"   {Bitte gewuenschtes waehlen}

"
1440 PRINT TAB(12);"D E M O :"
1450 WINDOW #1,13,18,23,23:LOCATE 1,23:PRINT"Geraete :"
1460 z=1:GOSUB 1710:GOSUB 1920:j=1:d1(bi)=56:d2(bi)=144:j(1)=4:j(2)=3
1470 GOSUB 620:j=2:GOSUB 620: '|BILD,56,152,&A6C0+8*CINT(RND*2),255,0,1,2
1475 c.x=56:c.y=152:c.s=&A6C0+8*CINT(RND*2):c.pe=255:c.pa=0:c.w=1:c.h=2:gosub 10000
1480 t$="":t!=time+50:t$=INKEY$:IF t$="" THEN GOSUB 1640: while time<t! and t$="":t$=inkey$:wend
1490 IF t$>"4" OR t$<"1" THEN 1480
1500 POKE 0,VAL(t$):CLEAR
1510 ON PEEK(0) GOTO 130,1520,1570,1560
1520 MODE 1:PRINT" Spielfeld laden:

"
1525 |dir,"ATOMBU?.DAT"
1530 PRINT"Kennziffer (0-9):";:t$=""
1540 GOSUB 1630:PRINT VAL(t$)
1550 LOAD"ATOMBU"+t$+".DAT",&93C6:GOTO 1390
1560 MODE 2:PRINT"Bye.":END
1570 PRINT"   Mitspieler:

":PRINT"Computer  oder
"
1580 PRINT"Spieler 2

":PRINT"{Bitte waehlen...}"
1590 GOSUB 1630:IF t$<>"C" AND t$<>"S" THEN 1590
1600 POKE &A6B0,255:IF t$="S" THEN POKE &A6B0,0:GOTO 1390
1610 PRINT"   LEVEL (0-9):";:GOSUB 1630:PRINT VAL(t$):POKE &A6B1,VAL(t$)
1620 GOTO 1390
1630 t$=INKEY$:IF t$="" THEN 1630 ELSE t$=UPPER$(t$):RETURN
1640 REM DEMO
1650 GOSUB 660:GOSUB 740:x1=x1*8+x(j):ON j(j) GOSUB 540,550,570,580
1660 IF j(j)>4 THEN j(j)=j(j)-3
1670 IF x(j)>=72 THEN j(j)=3 ELSE IF x(j)<=0 THEN j(j)=4
1680 IF d1(bi)=255 THEN d1(bi)=RND*7+1:d1(bi)=d1(bi)*8-8: c.x=d1(bi):c.y=d2(bi)+8:c.s=&A6C0+8*CINT(RND*2):c.pe=255:c.pa=0:c.w=1:c.h=2:gosub 10000:   '|BILD,d1(bi),d2(bi)+8,&A6C0+8*CINT(RND*2),255,0,1,2
1690 IF j=1 THEN j=2 ELSE j=1
1700 RETURN
1710 DEFINT a-y:RANDOMIZE TIME:ENT 1,30,-5,20
1720 DIM x(4),y(4),w(2),c(2,7),f(2),h$(9),d1(120),hi(2),d2(120)
1730 IF PEEK(&A6B0)<>255 THEN POKE &A6B1,0
1740 xm=65:ym=199:xb=8:yb=24:f(1)=0:f(2)=0:ad=&9440:fa=&93C7:f1=64:z1=2:z2=4
1750 IF z<>0 THEN y(1)=144:y(2)=y(1):x(2)=72:x(1)=0 ELSE x(1)=8:y(1)=24
1760 IF PEEK(&9F00)=8 THEN RETURN
1770 hx=&A6C0:hy=&9F00:RESTORE 1950
1780 READ ha:IF ha=0 THEN 1820
1790 FOR i=0 TO 7:READ t$:POKE hx+i,VAL("&"+t$):NEXT
1800 FOR j=1 TO ha:FOR i=8 TO 15:READ t$:POKE hx+i,VAL("&"+t$):NEXT i:GOSUB 1860:NEXT j
1810 GOTO 1780
1820 FOR i=0 TO 7:READ t$:POKE hx+i,VAL("&"+t$):NEXT
1830 '|BILD,56,144,hx,15,0,1,1:|GFIGUR,8,7,56,144,&A21B
1835 c.x=56:c.y=144:c.s=hx:c.pe=15:c.pa=0:c.w=1:c.h=1:gosub 10000: c.w=8:c.h=7:c.x=56:c.y=144:c.d=&A21B:gosub 10220
1840 FOR i=0 TO 55:READ t$:POKE hx+i,VAL("&"+t$):NEXT
1850 RETURN
1860 z=2:IF hy=&A18B THEN z=1:  c.x=x(1):c.y=y(1):c.s=hy-217:gosub 10360: c.x=x(2):c.y=y(2):c.s=hy-217:gosub 10360: '|CFIGUR,x(1),y(1),hy-217:|CFIGUR,x(2),y(2),hy-217
1870 '|BILD,x(1),y(1),hx,255,0,1,1:|BILD,x(1),y(1)+8,hx+8,240,0,1,z
1875 c.x=x(1):c.y=y(1):c.s=hx:c.pe=255:c.pa=0:c.w=1:c.h=1:gosub 10000: c.x=x(1):c.y=y(1)+8:c.s=hx+8:c.pe=240:c.pa=0:c.w=1:c.h=z:gosub 10000
1880 '|BILD,x(2),y(2),hx,15,0,1,1:|BILD,x(2),y(2)+8,hx+8,240,0,1,z
1885 c.x=x(2):c.y=y(2):c.s=hx:c.pe=15:c.pa=0:c.w=1:c.h=1:gosub 10000: c.x=x(2):c.y=y(2)+8:c.s=hx+8:c.pe=240:c.pa=0:c.w=1:c.h=z:gosub 10000
1890 IF z=1 THEN z=16 ELSE z=24
1900 '|GFIGUR,8,z,x(1),y(1),hy:|GFIGUR,8,z,x(2),y(2),hy-1540
1905 c.w=8:c.h=z:c.x=x(1):c.y=y(1):c.d=hy:gosub 10220: c.w=8:c.h=z:c.x=x(2):c.y=y(2):c.d=hy-1540:gosub 10220: 
1910 hy=hy+217:RETURN
1920 RESTORE 2100:FOR i=1 TO 7:READ c(1,i):c(2,i)=c(1,i)-1540:NEXT
1930 f=PEEK(fa):RETURN
1940 REM Maennchen
1950 DATA 01 ,00,3C,5A,7E,7E,3C,24,24,18,18,3C,3C,5A,18,24,42
1960 DATA 03 ,00,00,04,0E,1A,3E,06,1E,0C,1E,6D,0D,0C,14,24,6C
1970 DATA 0C,1E,6D,0D,0C,0A,09,1B, 1C,0C,6E,9F,39,79,4A,D8
1980 DATA 02 ,00,00,20,70,58,7C,60,78, 30,78,B6,B0,30,28,24,36
1990 DATA 30,78,B6,30,30,50,90,D8
2000 DATA 01 ,00,18,3C,7E,7E,3C,3C,1B, 59,99,7E,3C,3C,24,14,04
2010 DATA 0, 18,3C,66,99,18,3C,66,5A
2030 DATA 82,C2,FF,C2,82,06,0F,1F
2040 DATA 1E,3E,7E,18,18,18,18,18
2050 DATA 66,18,3C,66,99,18,3C,5A
2060 DATA 00,01,0E,11,2E,2D,2A,55
2070 DATA 00,80,70,88,74,B4,54,AA
2080 DATA 55,2A,2D,2E,11,0E,01,00
2090 DATA AA,54,B4,74,88,70,80,00
2100 DATA &A416,&9F00,&9FD9,&A264,&A18B,&A0B2,&A33D
2970 '
9980 'example: 1870: c.x=x(1):c.y=y(1):c.s=hx:c.pe=255:c.pa=0:c.w=1:c.h=1
9990 'BILD: c.x=column, c.y=line, c.s=source, c.pe=pen, c.pa=paper c.w=width, c.h=height
10000 c.d=&c000 + c.x + (c.y\8)*&50 + (c.y mod 8)*&800
10010 for c.by1=0 to 7
10020 c.by=peek(c.s):c.s=c.s+1
10030 for c.bx1=0 to 7
10040 c.d2=c.d
10050 c.d=c.d+c.bx1*c.w
10060 if (c.by and 2^(7-c.bx1))>=1 then c.v=c.pe else c.v=c.pa
10070 for c.h1=0 to c.h-1
10080 for c.w1=0 to c.w-1
10090 poke c.d,c.v
10100 c.d=c.d+1
10110 next c.w1
10120 c.d=c.d-c.w
10130 c.d=c.d+&800
10140 if (c.d and &3800) = 0 then c.d=c.d-&4000+&50
10150 next c.h1
10160 if c.bx1<7 then c.d=c.d2 else c.d=c.d-c.w*7
10170 next c.bx1
10180 next c.by1
10190 return
10200 '
10210 'GFIGUR: c.w=width, c.h=height, c.x=column, c.y=line, c.d=destination
10220 c.s=&c000 + c.x + (c.y\8)*&50 + (c.y mod 8)*&800
10230 poke c.d,c.w: poke c.d+1,c.h: c.d=c.d+2
10240 for c.h1=0 to c.h-1
10250 for c.w1=0 to c.w-1
10260 poke c.d,peek(c.s)
10270 c.d=c.d+1: c.s=c.s+1
10280 next c.w1
10290 c.s=c.s-c.w
10300 c.s=c.s+&800
10310 if (c.s and &3800) = 0 then c.s=c.s-&4000+&50
10320 next c.h1
10330 return
10340 '
10350 'CFIGUR: c.x=column, c.y=line, c.s=source
10360 c.d=&c000 + c.x + (c.y\8)*&50 + (c.y mod 8)*&800
10370 c.by=0
10380 c.w=peek(c.s): c.h=peek(c.s+1): c.s=c.s+2
10390 for c.h1=0 to c.h-1
10400 for c.w1=0 to c.w-1
10410 poke c.d,c.by
10420 c.d=c.d+1
10430 next c.w1
10440 c.d=c.d-c.w
10450 c.d=c.d+&800
10460 if (c.d and &3800) = 0 then c.d=c.d-&4000+&50
10470 next c.h1
10480 return
10490 '
10500 'PFIGUR: c.x=column, c.y=line, c.s=source
10510 c.d=&c000 + c.x + (c.y\8)*&50 + (c.y mod 8)*&800
10520 c.w=peek(c.s): c.h=peek(c.s+1): c.s=c.s+2
10530 for c.h1=0 to c.h-1
10540 for c.w1=0 to c.w-1
10550 poke c.d,peek(c.s)
10560 c.d=c.d+1: c.s=c.s+1
10570 next c.w1
10580 c.d=c.d-c.w
10590 c.d=c.d+&800
10600 if (c.d and &3800) = 0 then c.d=c.d-&4000+&50
10610 next c.h1
10620 return
10630 '
10640 'TESTE
10650 poke 0,0:poke 1,0
10660 'TODO
10670 return
10680 '
*/ });
