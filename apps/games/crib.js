/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem crib - Cribbage
2 rem
3 rem https://www.cpcwiki.eu/forum/programming/basic-files/ (BASIC01.DSK)
4 rem https://www.cpcwiki.eu/forum/programming/basic-cribbage-bas/
5 rem https://en.wikipedia.org/wiki/Cribbage
6 rem (doc: https://en.wikipedia.org/wiki/Cribbage  https://de.wikipedia.org/wiki/Cribbage)
7 rem Modifications: TODO
8 rem
10 MODE 1:INK 0,13:INK 1,26:INK 2,6:INK 3,0:BORDER 13:GOSUB 3990 
20 MOVE 0,280,1:DRAWR 0,119:DRAWR 639,0:DRAWR 0,-119:DRAWR -639,0
30 player$(1)="YOU":player$(2)="COMPUTER":DIM play(15):DIM splay(15)
40 SYMBOL 240,40,20,40,20,40,20,40,20:SYMBOL 241,0,0,170,85,170,85,0,0
50 SYMBOL 244,76,210,82,82,82,82,76,0
60 DIM card$(4,13)
70 bk$=CHR$(10)+CHR$(8)+CHR$(8)+CHR$(8)
80 FOR s=1 TO 4:FOR c=1 TO 13
90 IF s=1 OR s=4 THEN col=3 ELSE col=2
100 col$=CHR$(14)+CHR$(1)+CHR$(15)+CHR$(col)
110 IF c=1 THEN card=65
120 IF c=10 THEN card=244
130 IF c>1 AND c<10 THEN card=c+48
140 IF c=11 THEN card=74
150 IF c=12 THEN card=81
160 IF c=13 THEN card=75
170 cs$=CHR$(240)+CHR$(32)+CHR$(240):tb$=col$+CHR$(card)+CHR$(241)+CHR$(card):cn$=CHR$(240)+CHR$(s+225)+CHR$(240)
180 card$(s,c)=tb$+bk$+cs$+bk$+cn$+bk$+cs$+bk$+tb$
190 NEXT c:NEXT s
200 LOCATE 16,2:PAPER 3:PEN 1:PRINT" CRIBBAGE ":PAPER 0:
210 LOCATE 2,2:PEN 3:PRINT"COMPUTER":LOCATE 34,2:PEN 2:PRINT"PLAYER":PEN 1
220 FOR y=4 TO 7:IF y=4 OR y=5 THEN cl=2 ELSE cl=3
230 FOR n=1 TO 31:LOCATE n+4,y:PAPER cl:PEN 0:PRINT CHR$(144)
240 NEXT n
250 NEXT y
260 PAPER 0:PEN 1
270 cx=5:cy=4:px=5:py=7:qy=cy:zy=py:cdr=1:pdr=1
280 PAPER 2:PEN 1,1:LOCATE px,py:PRINT CHR$(230):PAPER 3:LOCATE cx,cy:PRINT CHR$(230):PEN 1,0:PAPER 0:
290 REM LOCATE cx,cy:PAPER 0:PEN 1:PRINT CHR$(230):LOCATE px,py:PRINT CHR$(230)
300 SYMBOL 244,76,210,82,82,82,82,76,0:SYMBOL 245,24,24,24,255,126,60,24,0
310 SYMBOL 246,0,127,64,95,85,90,85,90:SYMBOL 247,0,254,2,250,90,170,90,170:SYMBOL 248,90,85,90,85,95,64,127,0:SYMBOL 249,170,90,170,90,250,2,254,0:SYMBOL 250,85,90,85,90,85,90,85,90:SYMBOL 251,170,90,170,90,170,90,170,90
320 SYMBOL 252,0,255,0,255,170,85,170,85:SYMBOL 253,170,85,170,85,255,0,255,0
330 REM MAKE PACK AND BACK OF CARD
340 DIM pack(53):ct=1:tp$=CHR$(246)+CHR$(252)+CHR$(247):bk$=CHR$(10):FOR n=1 TO 3:bk$=bk$+CHR$(8):NEXT:col$=CHR$(15)+CHR$(1)+CHR$(14)+CHR$(3):m$=CHR$(250)+CHR$(207)+CHR$(251):bt$=CHR$(248)+CHR$(253)+CHR$(249)
350 blank$=col$+tp$+bk$+m$+bk$+m$+bk$+m$+bk$+bt$
360 FOR suits=1 TO 4:FOR cards=1 TO 13
370 pack(ct)=(suits*20)+cards:ct=ct+1
380 NEXT cards:NEXT suits
390 GOSUB 670:REM SHUFFLE
400 PEN 1,0:pct=52:IF game=0 THEN GOSUB 540:REM CUT FOR DEAL
410 game=0:RANDOMIZE TIME:REM DEAL CARDS
420 FOR x=11 TO 27 STEP 4:LOCATE x,9:SOUND 7,700,5,15:PAPER 1:PEN 2:PRINT blank$:FOR w=1 TO 35:NEXT w:LOCATE x,21:SOUND 7,950,5,15:PRINT blank$:FOR w=1 TO 100:NEXT:NEXT x:PAPER 0:PEN 1
430 FOR deal=1 TO 5:GOSUB 490:NEXT deal
440 FOR n=1 TO 5:cc(n)=cd(n):NEXT
450 FOR deal=1 TO 5:GOSUB 490:NEXT deal
460 FOR n=1 TO 5:pc(n)=cd(n):NEXT
470 deal=1:GOSUB 490:fc=cd(deal):tvl=INT(cd(deal)/20):vl=cd(deal) MOD 20:SOUND 7,400,15,15:PAPER 0:PEN 1
480 GOTO 910
490 r=INT(RND(1)*pct)+1
500 cd(deal)=pack(r)
510 FOR w=r TO pct:pack(w)=pack(w+1):NEXT w:pct=pct-1
520 IF pct<1 THEN game=1
530 RETURN
540 PAPER 0:PEN 1:LOCATE 14,10:PRINT"CUT FOR DEAL":sp$="":sp$=CHR$(32)+CHR$(32)+CHR$(32)+bk$:ers$="":FOR n=1 TO 4:ers$=ers$+sp$:NEXT:ers$=ers$+CHR$(32)+CHR$(32)+CHR$(32):SOUND 7,350,10,15:FOR n=1 TO 950:NEXT
550 comp=INT(RND(1)*52)+1:you=INT(RND(1)*52)+1
560 comp=pack(comp):you=pack(you)
570 ca=INT(comp/20):cb=comp MOD 20:ya=INT(you/20):yb=you MOD 20
580 LOCATE 5,10:PAPER 1:PRINT card$(ca,cb):SOUND 7,200,10,15:FOR w=1 TO 1000:NEXT:LOCATE 35,10:PRINT card$(ya,yb):PAPER 0:PEN 1:SOUND 7,300,10,15:FOR w=1 TO 1000:NEXT
590 IF yb=cb THEN LOCATE 14,10:PRINT"CUT AGAIN     ":FOR n=1 TO 2500:NEXT:GOTO 540
600 IF cb>yb THEN LOCATE 14,10:PRINT"COMPUTER DEALS  ":dlr=2:turn=1
610 IF yb>cb THEN LOCATE 14,10:PRINT"YOU ARE DEALER ":dlr=1:turn=2
620 SOUND 7,250,10,15
630 FOR n=1 TO 2500:NEXT:LOCATE 14,10:PRINT SPACE$(17):LOCATE 5,10:PRINT ers$:LOCATE 35,10:PRINT ers$
640 IF dlr=2 THEN tscr(1)=3:total(1)=total(1)+tscr(1):GOSUB 710:PEN 1,0:PAPER 0
650 IF dlr=1 THEN tscr(2)=3:total(2)=total(2)+tscr(2):GOSUB 810:PEN 1,0:PAPER 0
660 RETURN
670 FOR w=1 TO 3:FOR n=1 TO 52:REM SHUFFLE
680 qq=INT(RND(1)*52)+1:pp=INT(RND(1)*52)+1
690 spare=pack(qq):pack(qq)=pack(pp):pack(pp)=spare
700 NEXT n:NEXT w:RETURN
710 IF tscr(1)=0 THEN RETURN
720 cnt=0:s=cx
730 t=s:nd=tscr(1)
740 IF cdr=-1 AND t=35 THEN qy=5 
750 s=t:t=t+cdr
760 IF t>35 THEN cdr=-1:cy=cy+1:t=s
770 PAPER 2:PEN 0,0:LOCATE s,qy:PRINT CHR$(144):LOCATE t,cy:PEN 1,1:PRINT CHR$(230):SOUND 7,700,5,15 
780 FOR w=1 TO 120:NEXT
790 cnt=cnt+1:IF cnt=nd THEN cx=t:PAPER 0:PEN 1,0:RETURN
800 PAPER 0:PEN 1,0:GOTO 740
810 IF tscr(2)=0 THEN RETURN
820 cnt=0:s=px
830 t=s:nd=tscr(2)
840 IF cdr=-1 AND t=35 THEN zy=5 
850 s=t:t=t+pdr:zy=py
860 IF t>35 THEN pdr=-1:py=py-1:t=s
870 PAPER 3:PEN 0,0:LOCATE s,zy:PRINT CHR$(144):LOCATE t,py:PEN 1,1:PRINT CHR$(230):SOUND 7,700,5,15 
880 FOR w=1 TO 120:NEXT
890 cnt=cnt+1:IF cnt=nd THEN px=t:PAPER 0:PEN 1:RETURN
900 PAPER 0:PEN 1,0:GOTO 840
910 z$="":FOR n=1 TO 6:z$=z$+CHR$(154):NEXT:tl$=CHR$(150)+z$+CHR$(156):bl$=CHR$(147)+z$+CHR$(153):ml$=CHR$(149)+SPACE$(6)+CHR$(149):bkl$=CHR$(10):FOR n=1 TO 8:bkl$=bkl$+CHR$(8):NEXT
920 IF dlr=1 THEN crx=32:drx=27:prx=2:ELSE crx=2:drx=11:prx=32
930 box$=tl$+bkl$+ml$+bkl$+ml$+bkl$+ml$+bkl$+ml$+bkl$++ml$+bkl$+bl$
940 gh$="":FOR n=1 TO 8:gh$=gh$+CHR$(32):NEXT:gk$=gh$+bkl$:unbox$="":FOR n=1 TO 9:unbox$=unbox$+gk$:NEXT
950 LOCATE crx,14:PEN 3:PRINT box$:LOCATE crx+2,13:PRINT"CRIB"
960 FOR n=1 TO 5:LOCATE 7+(n*4),21:p=pc(n) MOD 20:q=INT(pc(n)/20):PRINT card$(q,p):NEXT
970 LOCATE drx,15:PAPER 1:PEN 2:PRINT blank$:SOUND 7,200,10,15:PAPER 0:PEN 1
980 ct=1:ptr=1:LOCATE 8+(ptr*4),20:PRINT CHR$(245)
990 FOR n=1 TO 4:crib(n)=0:NEXT
1000 FOR n=1 TO 3:phand(n)=0:chand(n)=0:NEXT
1010 a$=INKEY$:IF a$="" THEN 1010
1020 IF ASC(a$)=243 THEN lptr=ptr:ptr=ptr+1:IF ptr>5 THEN ptr=1
1030 IF ASC(a$)=242 THEN lptr=ptr:ptr=ptr-1:IF ptr<1 THEN ptr=5
1040 IF ASC(a$)=224 THEN lptr=ptr:GOSUB 1410
1050 LOCATE (lptr*4)+8,20:PRINT" ":LOCATE (ptr*4)+8,20:PRINT CHR$(245)
1060 IF ct<3 THEN GOTO 1010
1070 GOSUB 1450:GOSUB 1520
1080 PAPER 0:PEN 1:LOCATE 11,9:PRINT ers$:LOCATE 27,9:PRINT ers$
1090 FOR n=crx+1 TO crx+4:LOCATE n,15:PRINT blank$:NEXT
1100 LOCATE drx,15:PRINT card$(tvl,vl)
1110 IF fc MOD 20=11 AND dlr=1 THEN tscr(1)=2:GOSUB 710:PAPER 0:PEN 3,0:PEN 2,0:PEN 1
1120 IF fc MOD 20=11 AND dlr=2 THEN tscr(2)=2:GOSUB 810:PAPER 0:PEN 3,0:PEN 2,0:PEN 1
1130 FOR w=1 TO 3:cdec(w)=chand(w):pdec(w)=phand(w):NEXT:poff=0:coff=0
1140 ptr=1:nmb=1:FOR n=1 TO 6:play(n)=0:NEXT
1150 count=0:cant(1)=0:cant(2)=0:wont(1)=0:wont(2)=0:PAPER 0:PEN 1,0:LOCATE 16,16:PRINT SPACE$(10):LOCATE 16,16:PRINT"COUNT ";count
1160 flag=0:PAPER 0:PEN 1:LOCATE prx,17:PRINT SPACE$(8):LOCATE prx,17:PRINT player$(turn):LOCATE prx,18:PRINT "TO PLAY"
1170 ON turn GOSUB 1970,2230
1180 GOSUB 2420
1190 IF wont(1)=1 AND wont(2)=1 THEN GOTO 1230
1200 turn=turn+1:IF turn>2 THEN turn=1
1210 IF flag=1 THEN FOR w=1 TO nmb:play(w)=0:splay(w)=0:NEXT:nmb=1:GOTO 1150
1220 PEN 3,0:PEN 2,0:PEN 1,0:GOTO 1160
1230 FOR w=1 TO 1500:NEXT
1240 PAPER 0:PEN 1,0:FOR y=9 TO 25:LOCATE prx,y:PRINT SPACE$(8):NEXT
1250 PAPER 0:PEN 1:LOCATE 16,16:PRINT SPACE$(11)
1260 IF dlr=2 THEN FOR n=1 TO 3:LOCATE 11+(n*4),21:p=pdec(n) MOD 20:q=INT(pdec(n)/20):PRINT card$(q,p):NEXT:GOSUB 2820
1270 IF dlr=1 THEN FOR n=1 TO 3:LOCATE 11+(n*4),9:p=cdec(n) MOD 20:q=INT(cdec(n)/20):PRINT card$(q,p):NEXT:GOSUB 2860
1280 IF dlr=1 THEN FOR n=1 TO 3:LOCATE 11+(n*4),21:p=pdec(n) MOD 20:q=INT(pdec(n)/20):PRINT card$(q,p):NEXT:GOSUB 2820
1290 IF dlr=2 THEN FOR n=1 TO 3:LOCATE 11+(n*4),9:p=cdec(n) MOD 20:q=INT(cdec(n)/20):PRINT card$(q,p):NEXT:GOSUB 2860
1300 crib(5)=fc
1310 IF dlr=1 THEN LOCATE crx,12:PRINT unbox$:FOR n=1 TO 5:LOCATE 11+(n*4),15:p=crib(n) MOD 20:q=INT(crib(n)/20):PRINT card$(q,p):NEXT:GOSUB 2900
1320 IF dlr=2 THEN LOCATE crx,12:PRINT unbox$:FOR n=1 TO 5:LOCATE 3+(n*4),15:p=crib(n) MOD 20:q=INT(crib(n)/20):PRINT card$(q,p):NEXT:GOSUB 2900
1330 dlr=dlr+1:IF dlr>2 THEN dlr=1
1340 turn=dlr+1:IF turn>2 THEN turn=1
1350 ct=1:FOR suits=1 TO 4:FOR cards=1 TO 13
1360 pack(ct)=(suits*20)+cards:ct=ct+1
1370 NEXT cards:NEXT suits
1380 GOSUB 670:REM SHUFFLE
1390 FOR w=279 TO 0 STEP -1:MOVE 0,w,0:DRAW 639,w:NEXT w:PAPER 0:PEN 1:
1400 pct=52:GOTO 420
1410 IF crib(1)=0 THEN crib(1)=pc(ptr):pc(ptr)=0
1420 IF crib(1)<>0 THEN crib(2)=pc(ptr):pc(ptr)=0
1430 LOCATE 7+(ptr*4),21:PRINT ers$
1440 ct=ct+1:RETURN
1450 REM HAND TO CRIB
1460 qz=1:FOR n=1 TO 5
1470 IF pc(n)<>0 THEN phand(qz)=pc(n):qz=qz+1
1480 NEXT n
1490 FOR n=1 TO 5:LOCATE 7+(n*4),21:PRINT ers$:NEXT:FOR n=1 TO 3:LOCATE 11+(n*4),21:p=phand(n) MOD 20:q=INT(phand(n)/20):PRINT card$(q,p):NEXT
1500 PAPER 0:PEN 1:LOCATE 8+(ptr*4),20:PRINT" "
1510 RETURN
1520 REM COMPUTER TO CRIB
1530 IF dlr=2 THEN GOTO 1720
1540 z=1:it=5:GOSUB 1920:IF z>3 THEN 1680
1550 IF z=1 THEN GOTO 1600
1560 it=13:GOSUB 1920:IF z>3 THEN 1680
1570 it=12:GOSUB 1920:IF z>3 THEN 1680
1580 it=11:GOSUB 1920:IF z>3 THEN 1680
1590 it=10:GOSUB 1920:IF z>3 THEN 1680
1600 it=9:GOSUB 1920:IF z>3 THEN 1680
1610 it=8:GOSUB 1920:IF z>3 THEN 1680
1620 it=6:GOSUB 1920:IF z>3 THEN 1680
1630 it=7:GOSUB 1920:IF z>3 THEN 1680
1640 it=4:GOSUB 1920:IF z>3 THEN 1680
1650 it=1:GOSUB 1920:IF z>3 THEN 1680
1660 it=3:GOSUB 1920:IF z>3 THEN 1680
1670 it=2:GOSUB 1920:IF z>3 THEN 1680
1680 IF z<4 THEN GOTO 1560
1690 zz=3:FOR n=1 TO 5:IF cc(n)<>0 THEN crib(zz)=cc(n):zz=zz+1
1700 NEXT
1710 RETURN
1720 REM COMPUTERS CRIB
1730 zz=1:n=zz+1
1740 q=cc(n) MOD 20:IF q>10 THEN q=10
1750 p=cc(zz) MOD 20:IF p>10 THEN p=10
1760 IF q+p=15 THEN crib(3)=cc(n):crib(4)=cc(zz):cc(n)=0:cc(zz)=0:GOTO 1890
1770 zz=zz+1:IF zz<6 THEN GOTO 1740
1780 zz=1:n=zz+1
1790 q=cc(n) MOD 20
1800 p=cc(zz) MOD 20
1810 IF q=p THEN crib(3)=cc(n):crib(4)=cc(zz):cc(n)=0:cc(zz)=0:GOTO 1890
1820 zz=zz+1:IF zz<6 THEN GOTO 1790
1830 zz=1:n=zz+1
1840 q=cc(n) MOD 20
1850 p=cc(zz) MOD 20
1860 IF q=7 AND p=9 OR q=9 AND p=7 OR q=6 AND p=8 OR q=8 AND p=6 THEN crib(3)=cc(n):crib(4)=cc(zz):cc(n)=0:GOTO 1890
1870 zz=zz+1:IF zz<6 THEN GOTO 1830
1880 GOTO 1540
1890 zz=1:FOR n=1 TO 5:IF cc(n)<>0 THEN chand(zz)=cc(n):zz=zz+1
1900 NEXT
1910 RETURN
1920 REM IS IT IT?!?
1930 n=1:q=cc(n) MOD 20
1940 IF q=it THEN chand(z)=cc(n):cc(n)=0:z=z+1:IF z>3 THEN GOTO 1960
1950 n=n+1:IF n<6 THEN GOTO 1940
1960 RETURN
1970 goflg=0:pyes=0:cyes=0:LOCATE 10,20:PRINT SPACE$(20)
1980 IF phand(1)+phand(2)+phand(3)=0 THEN cant(1)=1:wont(1)=1:GOTO 2220
1990 q=0:IF phand(ptr)=0 THEN ptr=ptr+1:IF ptr>3 THEN ptr=1
2000 IF phand(ptr)=0 THEN ptr=ptr+1:IF ptr>3 THEN ptr=1
2010 IF phand(ptr)=0 THEN ptr=ptr+1:IF ptr>3 THEN ptr=1
2020 LOCATE 12+(ptr*4),20:PRINT CHR$(245)
2030 CLEAR INPUT
2040 IF INKEY(1)<>-1 THEN lptr=ptr:ptr=ptr+1:IF ptr>3 THEN ptr=1
2050 IF INKEY(8)<>-1 THEN lptr=ptr:ptr=ptr-1:IF ptr<1 THEN ptr=3
2060 IF INKEY(9)<>-1 THEN lptr=ptr:GOTO 2140
2070 LOCATE (lptr*4)+12,20:PRINT" ":LOCATE (ptr*4)+12,20:PRINT CHR$(245)
2080 goflg=1:n=1
2090 IF phand(n)=0 THEN GOTO 2110
2100 IF phand(n) MOD 20+count<32 THEN goflg=0
2110 n=n+1:IF n<6 THEN GOTO 2090
2120 IF goflg=1 THEN cant(1)=1:SOUND 7,50,5,15:CLEAR INPUT:GOTO 2220
2130 GOTO 2030
2140 q=phand(lptr) MOD 20:p=INT(phand(lptr)/20)
2150 IF q=0 THEN GOTO 2030
2160 qq=q:IF qq>10 THEN qq=10
2170 IF count+qq>31 THEN GOTO 2030 
2180 LOCATE (lptr*4)+11,20:PRINT" ":phand(ptr)=0
2190 PAPER 0:PEN 1:LOCATE (lptr*4)+11,21:PRINT ers$
2200 LOCATE prx+2+poff,21:PRINT card$(p,q):poff=poff+1
2210 count=count+qq:pyes=1:nmb=nmb+1
2220 SOUND 7,800,15,15:FOR w=1 TO 1000:NEXT:CLEAR INPUT:RETURN
2230 cyes=0:pyes=0:SOUND 7,700,15,15:q=0:k=0:l=0:m=0:FOR w=1 TO 1000:NEXT w
2240 IF chand(1)+chand(2)+chand(3)=0 THEN cant(2)=1:wont(2)=1:GOTO 2410
2250 k=chand(1) MOD 20:l=chand(2) MOD 20:m=chand(3) MOD 20
2260 IF play(nmb-1)=k AND k<>0 THEN q=k:p=INT(chand(1)/20):wc=1
2270 IF play(nmb-1)=l AND l<>0 THEN q=l:p=INT(chand(2)/20):wc=2
2280 IF play(nmb-1)=m AND m<>0 THEN q=m:p=INT(chand(3)/20):wc=3
2290 IF q<>0 THEN GOTO 2340
2300 wc=1
2310 IF chand(wc)<>0 THEN q=chand(wc) MOD 20:p=INT(chand(wc)/20):GOTO 2340
2320 wc=wc+1:IF wc>3 THEN cant(2)=1:q=0:GOTO 2410
2330 GOTO 2310
2340 qq=q:IF qq>10 THEN qq=10
2350 IF count+qq>31 THEN cant(2)=1:GOTO 2410 
2360 chand(wc)=0
2370 LOCATE (wc*4)+11,9:PAPER 0:PEN 1:PRINT ers$
2380 LOCATE prx+2+coff,9:PRINT card$(p,q):coff=coff+1
2390 count=count+qq:cyes=1
2400 nmb=nmb+1
2410 RETURN
2420 tscr(1)=0:tscr(2)=0
2430 PAPER 0:PEN 1:LOCATE 16,16:PRINT"COUNT ";count
2440 IF count=15 AND pyes=1 THEN tscr(1)=tscr(1)+2:total(1)=total(1)+tscr(1):GOSUB 710
2450 IF count=15 AND cyes=1 THEN tscr(2)=tscr(2)+2:GOSUB 810:total(2)=total(2)+tscr(2)
2460 play(nmb)=q:qq=nmb-3:pp=nmb:GOSUB 2730
2470 IF nmb>1 AND play(nmb-1)=q AND cyes=1 THEN tscr(2)=tscr(2)+2:GOSUB 810:total(2)=total(2)+tscr(2)
2480 IF nmb>1 AND play(nmb-1)=q AND pyes=1 THEN tscr(1)=tscr(1)+2:GOSUB 710:total(1)=total(1)+tscr(1)
2490 IF count=31 AND turn=1 THEN tscr(1)=tscr(1)+2:flag=1:GOSUB 710:total(1)=total(1)+tscr(1)
2500 IF count=31 AND turn=2 THEN tscr(2)=tscr(2)+2:flag=1:GOSUB 810:total(2)=total(2)+tscr(2)
2510 IF cant(1)=1 AND cant(2)=1 AND turn=1 THEN flag=1:cant(1)=0:cant(2)=0:tscr(1)=tscr(1)+1:GOSUB 710:total(1)=total(1)+tscr(1)
2520 IF cant(1)=1 AND cant(2)=1 AND turn=2 THEN flag=1:cant(1)=0:cant(2)=0:tscr(2)=tscr(2)+1:GOSUB 810:total(2)=total(2)+tscr(2)
2530 spq4=1:spq3=1:pr3=1:pr4=1
2540 IF qq<1 THEN GOTO 2580
2550 FOR n=qq TO pp:IF splay(n)+1=splay(n+1) THEN spq4=spq4+1
2560 IF splay(n)=splay(n+1) THEN pr4=pr4+1
2570 NEXT n
2580 qq=nmb-2:pp=nmb:GOSUB 2730
2590 IF qq<1 THEN GOTO 2710
2600 FOR n=qq TO pp:IF splay(n)+1=splay(n+1) THEN spq3=spq3+1
2610 IF splay(n)=splay(n+1) THEN pr3=pr3+1
2620 NEXT n
2630 IF spq4=4 AND pyes=1 THEN tscr(1)=tscr(1)+4:total(1)=total(1)+tscr(1):GOSUB 710
2640 IF spq4=4 AND cyes=1 THEN tscr(2)=tscr(2)+4:total(2)=total(2)+tscr(2):GOSUB 810
2650 IF spq3=3 AND spq4<>4 AND pyes=1 THEN tscr(1)=tscr(1)+3:total(1)=total(1)+tscr(1):GOSUB 710
2660 IF spq3=3 AND spq4<>4 AND cyes=1 THEN tscr(2)=tscr(2)+3:total(2)=total(2)+tscr(2):GOSUB 810
2670 IF pr4=4 AND pyes=1 THEN tscr(1)=tscr(1)+10:total(1)=total(1)+tscr(1):GOSUB 710
2680 IF pr4=4 AND cyes=1 THEN tscr(2)=tscr(2)+10:total(2)=total(2)+tscr(2):GOSUB 810
2690 IF pr3=3 AND pr4<>4 AND pyes=1 THEN tscr(1)=tscr(1)+4:total(1)=total(1)+tscr(1):GOSUB 710
2700 IF pr3=3 AND pr4<>4 AND cyes=1 THEN tscr(2)=tscr(2)+4:total(2)=total(2)+tscr(2):GOSUB 810
2710 IF total(1)>=61 OR total(2)>=61 THEN GOTO 2950
2720 RETURN
2730 IF qq<1 THEN RETURN
2740 FOR n=qq TO pp:splay(n)=play(n):NEXT
2750 FOR n=qq TO pp
2760 FOR w=n+1 TO pp
2770 IF splay(n)=0 THEN splay(n)=20
2780 IF splay(w)<splay(n) THEN spare=splay(n):splay(n)=splay(w):splay(w)=spare 
2790 NEXT w:NEXT n
2800 FOR w=1 TO nmb:IF splay(n)=20 THEN splay(n)=0:NEXT
2810 RETURN
2820 FOR n=1 TO 4:declare(n)=pdec(n):NEXT:declare(5)=fc:cb=0
2830 GOSUB 3100
2840 tscr(1)=dadd:GOSUB 3040:GOSUB 710:PAPER 0:PEN 3,0:PEN 2,0:PEN 1,0
2850 RETURN
2860 FOR n=1 TO 4:declare(n)=cdec(n):NEXT:declare(5)=fc:cb=0
2870 GOSUB 3100
2880 tscr(2)=dadd:GOSUB 3070:GOSUB 810:PAPER 0:PEN 3,0:PEN 2,0:PEN 1,0
2890 RETURN
2900 FOR n=1 TO 5:declare(n)=crib(n):NEXT:cb=1
2910 GOSUB 3100
2920 IF dlr=1 THEN tscr(1)=dadd:GOSUB 3040:GOSUB 710:PAPER 0:PEN 3,0:PEN 2,0:PEN 1,0:GOTO 2940
2930 IF dlr=2 THEN tscr(2)=dadd:GOSUB 3070:GOSUB 810:PAPER 0:PEN 3,0:PEN 2,0:PEN 1,0
2940 RETURN
2950 CLS:FOR w=50 TO 800 STEP 50:SOUND 7,w,5,15:NEXT
2960 IF total(1)>total(2) THEN LOCATE 10,10:PAPER 2:PEN 1:PRINT " YOU ARE THE WINNER ":GOTO 2980
2970 IF total(2)>total(1) THEN LOCATE 10,10:PAPER 2:PEN 1:PRINT" THE COMPUTER WINS !?! "
2980 LOCATE 10,18:PRINT"ANOTHER GAME? (Y or N)"
2990 PAPER 0:PEN 1
3000 a$=INKEY$:IF a$="" THEN GOTO 3000
3010 a$=UPPER$(a$):IF a$="Y" THEN CLEAR:GOTO 10
3020 IF a$="N" THEN END
3030 GOTO 3000
3040 total(1)=total(1)+tscr(1)
3050 IF total(1)>=61 THEN GOTO 2950
3060 RETURN
3070 total(2)=total(2)+tscr(2)
3080 IF total(2)>=61 THEN GOTO 2950
3090 RETURN
3100 REM CHECK DECLARATIONS
3110 fifteens=0
3120 n=1
3130 FOR w=n+1 TO 6:q=declare(n) MOD 20:IF q>10 THEN q=10
3140 p=declare(w) MOD 20:IF p>10 THEN p=10
3150 IF q+p=15 THEN fifteens=fifteens+2 
3160 NEXT w
3170 n=n+1:IF n<6 THEN GOTO 3130
3180 n=1
3190 FOR w=n+1 TO 6:FOR z=w+1 TO 6:q=declare(n) MOD 20:IF q>10 THEN q=10
3200 p=declare(w) MOD 20:IF p>10 THEN p=10
3210 r=declare(z) MOD 20:IF r>10 THEN r=10
3220 IF q=0 OR p=0 OR r=0 THEN GOTO 3240
3230 IF p+q+r=15 THEN fifteens=fifteens+2
3240 NEXT z:NEXT w
3250 n=n+1:IF n<4 THEN GOTO 3190
3260 GOSUB 3710
3270 FOR n=1 TO 6:alt(n)=declare(n) MOD 20:NEXT
3280 n=1
3290 FOR w=n+1 TO 6:IF alt(w)<alt(n) AND alt(w)<>0 THEN sort=alt(n):alt(n)=alt(w):alt(w)=sort
3300 NEXT w
3310 n=n+1:IF n<6 THEN GOTO 3290
3320 n=1:sequence=0
3330 FOR w=n+1 TO 6:FOR z=w+1 TO 6
3340 q=alt(n):p=alt(w):r=alt(z)
3350 IF q=0 OR p=0 OR r=0 THEN GOTO 3370
3360 IF q+1=p AND p+1=r THEN sequence=sequence+3
3370 NEXT z:NEXT w
3380 n=n+1:IF n<5 THEN GOTO 3330
3390 GOSUB 3900:REM CHECK FOR SEQUENCE OF FOUR
3400 IF fc MOD 20 =11 THEN GOTO 3450
3410 ofhn=0
3420 FOR n=1 TO 5:q=declare(n) MOD 20:p=INT(fc/20):r=INT(declare(n)/20):s=declare(n)
3430 IF q=11 AND p=r AND s<>fc THEN ofhn=1
3440 NEXT n
3450 flush=0:FOR n=1 TO 4:flsh(n)=0:NEXT
3460 FOR zw=1 TO 4
3470 FOR w=1 TO 5:IF INT(declare(w)/20)=zw THEN flsh(zw)=flsh(zw)+1
3480 NEXT w:NEXT zw
3490 FOR n=1 TO 4:IF flsh(n)>2 THEN which=n
3500 NEXT
3510 IF cb=0 AND flsh(which)=4 THEN flush=4
3520 IF cb=0 AND flsh(which)=3 AND INT(fc/20)<>which THEN flush=3
3530 IF cb=1 AND flsh(which)=4 AND INT(fc/20)<>which THEN flush=4
3540 IF cb=1 AND flsh(which)=5 THEN flush=5
3550 pairs=0:n=1
3560 FOR w=n+1 TO 6:q=declare(n) MOD 20
3570 p=declare(w) MOD 20
3580 IF q=p AND q<>0 THEN pairs=pairs+2
3590 NEXT w
3600 n=n+1:IF n<6 THEN GOTO 3560
3610 REM PRINT DECLARATIONS AND UPDATE SCORE
3620 IF dlr=1 THEN dcx=1 ELSE dcx=27
3630 PAPER 0:PEN 1:FOR y=10 TO 18:LOCATE dcx,y:PRINT SPACE$(13):NEXT
3640 LOCATE dcx,10:PAPER 1:PEN 2:PRINT" DECLARE ":PAPER 0:PEN 1:
3650 PAPER 0:PEN 1:LOCATE dcx,12:PRINT "FIFTEENS  ";fifteens:LOCATE dcx,13:PRINT"PAIRS     ";pairs
3660 LOCATE dcx,14:PRINT"SEQUENCES ";sequence:LOCATE dcx,15:PRINT"FLUSHES   ";flush:LOCATE dcx,16:PRINT"HIS NOB   ";ofhn 
3670 PAPER 1:PEN 2:dadd=fifteens+pairs+sequence+flush+ofhn:LOCATE dcx,18:PRINT"TOTAL     ";dadd:PAPER 0:PEN 1
3680 a$=INKEY$:IF a$="" THEN 3680
3690 PAPER 0:PEN 1:FOR y=10 TO 18:LOCATE dcx,y:PRINT SPACE$(13):NEXT
3700 RETURN
3710 REM CHECK FOR 4 CARDS MAKING FIFTEEN
3720 FOR n=1 TO 6:alt(n)=declare(n) MOD 20:IF declare(n)=0 THEN alt(n)=20
3730 IF alt(n)>10 AND alt(n)<20 THEN alt(n)=10
3740 NEXT
3750 n=1
3760 FOR w=n+1 TO 6:IF alt(w)<alt(n) THEN sort=alt(n):alt(n)=alt(w):alt(w)=sort
3770 NEXT w
3780 n=n+1:IF n<6 THEN GOTO 3760
3790 tt=alt(1)+alt(2)+alt(3)+alt(4)
3800 IF tt=15 THEN fifteens=fifteens+2
3810 tt=alt(1)+alt(2)+alt(3)+alt(5)
3820 IF tt=15 THEN fifteens=fifteens+2
3830 tt=alt(1)+alt(2)+alt(4)+alt(5)
3840 IF tt=15 THEN fifteens=fifteens+2
3850 tt=alt(1)+alt(3)+alt(4)+alt(5)
3860 IF tt=15 THEN fifteens=fifteens+2
3870 tt=alt(2)+alt(3)+alt(4)+alt(5)
3880 IF tt=15 THEN fifteens=fifteens+2
3890 RETURN
3900 q=alt(1):p=alt(2):r=alt(3):s=alt(4):t=alt(5):seq4=0
3910 IF p+1=r AND r+1=s AND s+1=t THEN seq4=seq4+1
3920 IF q+1=p AND p+1=r AND r+1=t THEN seq4=seq4+1
3930 IF q+1=p AND p+1=r AND r+1=s THEN seq4=seq4+1
3940 IF q+1=r AND r+1=s AND s+1=t THEN seq4=seq4+1
3950 IF q+1=p AND p+1=s AND s+1=t THEN seq4=seq4+1
3960 IF seq4<>0 THEN sequence=(seq4*4)
3970 IF q+1=p AND p+1=r AND r+1=s AND s+1=t THEN sequence=5
3980 RETURN
3990 LOCATE 9,1:PAPER 2:PEN 1:PRINT" CRIBBAGE - INSTRUCTIONS ":PAPER 0:PEN 1
4000 LOCATE 3,3:PRINT"This version of the popular card game ":LOCATE 1,4:PRINT"for two is very simple to play.":LOCATE 3,6:PRINT"It is presumed that you know how to":LOCATE 1,7:PRINT"play the game and these instructions"
4010 LOCATE 1,8:PRINT"show the keys you should use.":LOCATE 3,10:PRINT"After the cut and deal you choose your":LOCATE 1,11:PRINT"discards by use of the ";CHR$(242);" or ";CHR$(243);" keys.":LOCATE 1,12:PRINT"and use the ENTER key to do the discard."
4020 LOCATE 3,14:PRINT"The same keys are used to play your ":LOCATE 1,15:PRINT"cards and totals and scores are then":LOCATE 1,16:PRINT"calculated by the computer.":LOCATE 3,18:PRINT"When the hand has been played then "
4030 LOCATE 1,19:PRINT"each hands declaration is shown followed":LOCATE 1,20:PRINT"by the 'CRIB' and the score updated.":LOCATE 1,21:PRINT"After each declaration press the ENTER":LOCATE 1,22:PRINT"key and the game will continue."
4040 LOCATE 1,23:PRINT"The winner is the first to reach 41 ":LOCATE 8,25:PAPER 3:PEN 1:PRINT" PRESS ANY KEY TO CONTINUE ":PAPER 0:PEN 1
4050 a$=INKEY$:IF a$="" THEN 4050
4060 MODE 1:RETURN
4070 GOTO 4070
*/ });
