/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem inka - Inka Sogra
2 rem (c) F. Meurer
3 rem Modifications: delay
4 rem Just part of the program? TODO: Convert ASM code if needed
5 rem
6 clear:gosub 10010
9 FOR x=43776 TO 43815:READ a:POKE x,a:NEXT x:DATA &f3,&21,0,&c0,&7e,&2f,&77,&23,&23,&23,&7c,&7a,&c2,4,171,&fb,201,&f3,33,0,&c0,17,0,64,&18,7,&f3,33,0,64,17,0,&c0,1,0,64,&ed,&b0,&fb,201
10 a$=" ":hisc=0:ti2=0:hi$="GONZO":EVERY 2 GOSUB 980
20 DI:me=3:lev=80
30 MODE 0:PEN 3:PRINT"     INKA-SORGA":PRINT
40 PEN 2:PRINT"  CREATED BY:            F.MEURER":PRINT:PRINT
50 PEN 1:LOCATE 1,15:PRINT"  HISCORE"hisc:PRINT"BY  "hi$
60 PEN 3:LOCATE 1,17:PRINT"  LAST SCORE"ti2:PEN 1
70 LOCATE 1,24:PRINT"PRESS BUTTON TO PLAY"
80 WHILE JOY(0)<16:IF UPPER$(INKEY$)<>"E" THEN WEND ELSE STOP
90 MODE 1
100 IF PEEK(&4000)=0 THEN CALL 43802:GOTO 130 ELSE DIM a$(24):GOSUB 720:CLS:FOR y=1 TO 24:LOCATE 1,y:FOR x=1 TO 40:b$=MID$(a$(y),x,1):IF b$="m" OR b$="$" THEN PEN 2
110 IF b$="b" OR b$="a" OR b$="n" THEN PEN 3 
120 PRINT b$;:PEN 1:NEXT:NEXT:CALL 43793
130 EI:x=39:y=24:ti=TIME:LOCATE 1,25:PRINT"LEVEL "(80-lev)/20+1:LOCATE 12,25:PRINT"MEN "me
140 FOR s=1 TO lev/10:call &bd19:NEXT:a=JOY(0):IF a=0 THEN LOCATE x,y:PRINT"i":GOTO 140
150 IF a=16 THEN 140
160 jmp=0:IF a>16 THEN a=a-16:jmp=1
170 SOUND 2,119,2,7,0,1
180 IF a<>1 THEN 230
200 IF y=1 THEN 140
210 IF MID$(a$(y-1),x,1)<>"k" THEN 140
220 y=y-1:LOCATE x,y+1:PRINT MID$(a$(y+1),x,1):LOCATE x,y:PRINT"j":GOTO 140
230 IF a<>2 THEN 280
250 IF y=24 THEN 140
260 IF MID$(a$(y+1),x,1)<>"k" THEN 140 
270 y=y+1:LOCATE x,y-1:PRINT MID$(a$(y-1),x,1):LOCATE x,y:PRINT"i":GOTO 140 
280 IF a<>4 THEN 460
300 IF x=1 THEN 140
310 IF jmp THEN LOCATE x,y:PRINT"c":LOCATE x,y:PRINT"f":IF y=1 OR x=1 THEN 650 ELSE IF MID$(a$(y-1),x-1,1)="m" THEN 140 ELSE LOCATE x,y:PRINT MID$(a$(y),x,1):y=y-1:IF MID$(a$(y-1),x-1,1)<>"k" THEN X=X-1
320 B$=MID$(A$(y),x-1,1): IF B$="m" THEN 140
330 IF b$="a" OR b$="b" THEN 650
340 X=X-1:LOCATE X,y:PRINT CHR$(INT(RND*2+101))MID$(a$(y),X+1,1):IF y=24 OR b$="k" THEN 140
350 b$=MID$(a$(y+1),x,1):IF b$=" " THEN 600
360 IF b$="a" OR b$="b" THEN 650
370 IF b$="m" OR b$="k" THEN 140
380 IF b$="n" THEN 300
390 IF b$<>"l" THEN 140  
410 LOCATE x,y:PRINT MID$(a$(y),x,1)
420 y=y+1:LOCATE x,y:PRINT "j":LOCATE x,y:PRINT"l":IF MID$(a$(y+1),x,1)="l" THEN 420
430 a=2
440 a=a-1:LOCATE x,y:PRINT"l":y=y+1:LOCATE x,y:PRINT"j":IF y<24 THEN IF MID$(a$(y+1),x,1)=" " THEN 610
450 GOTO 620
460 IF a<>8 THEN 140
480 IF x=40 THEN 140
490 IF jmp THEN LOCATE x,y:PRINT"d":LOCATE x,y:PRINT"h":IF y=1 OR x=40 THEN 650 ELSE IF MID$(a$(y-1),x+1,1)="m" THEN 140 ELSE LOCATE x,y:PRINT MID$(a$(y),x,1):y=y-1:IF MID$(a$(y-1),x+1,1)<>"k" THEN X=X+1
500 b$=MID$(a$(y),x+1,1):IF b$="m" THEN 140
510 IF b$="a" OR b$="b" THEN 650  
520 LOCATE x,y:PRINT MID$(a$(y),x,1)CHR$(INT(RND*2+103)):x=x+1:IF y=24 OR b$="k" THEN 140
530 b$=MID$(a$(y+1),x,1):IF b$=" " THEN 600
540 IF b$="a" OR b$="b" THEN 650
550 IF b$="m" OR b$="k" THEN 140 
560 IF b$="n" THEN 300
570 IF B$="l" THEN 410
580 GOTO 140
590 b$="l"
600 a=2
610 a=a-1:LOCATE x,y:PRINT" ":y=y+1:LOCATE x,y:PRINT"j":IF y<24 THEN IF MID$(a$(y+1),x,1)=" " THEN 610  
620 IF a<0 THEN 650
630 IF x<>2 THEN 140
640 IF lev<>0 THEN lev=lev-20:LOCATE 2,24:PRINT" ":LOCATE 3,2:PEN 2:PRINT"$":PEN 1:LOCATE 1,25:ti2=ti2+TIME-ti:IF lev>=0 THEN 130 ELSE GOTO 690
650 CALL &BCA7:SOUND 5,60,20,4,0,0,2:FOR x=1 TO 12:CALL 43776:NEXT:me=me-1:IF me<>0 THEN GOTO 100
660 CLS:GOSUB 700
670 IF ti2>hisc THEN CLS:PRINT"                                                                                              N E W   H I S C O R E                                             ":CALL &BB00:LINE INPUT "DEIN NAME:";hi$:hisc=ti2  
680 GOTO 20
690 CLS:PRINT"                                                        DU HAST DAS SPIEL GEWONNEN !!!":PRINT"DU BEKOMMST FUER JEDEN MANN EINEN BONUS.":GOSUB 700:TI2=ME*10000+TI2:GOTO 670
700 TI2=INT(((80-LEV)/20*30000-TI2)/10):IF TI2<10 THEN TI2=0
710 RETURN
720 A$(1)=" l     l                                "
730 A$(2)=" l$    l       k                        "
740 A$(3)=" l   k l mmmmmkk                        "
750 A$(4)=" l mmk l    k                           "  
760 A$(5)=" l   k l    kmm                         "
770 A$(6)=" l   k l    k                           "
780 A$(7)=" l   k       b                          "
790 A$(8)=" l          mmmm                     k  " 
800 A$(9)=" l   mmm       mmm mmmnnnmnnnnmmmmmmmk  "
810 A$(10)=" l   m                  mm      l    k  "
820 A$(11)=" l   m                  l       l    k  " 
830 A$(12)=" l   m            k     l   k   l    k  " 
840 A$(13)=" l   m            kmmmmml   kmm l    k  "
850 A$(14)=" l   m                      k   l    k  "
860 A$(15)=" l   m  k      mmm          k        k  "
870 A$(16)=" l   m  kmmmmm  mmmmm   mmmm         k  "
880 A$(17)=" l   m  k  l                    mmmmm   "
890 A$(18)=" l   m  k  l                            "
900 A$(19)=" l   m  k  l    m    a       a    k     "   
910 A$(20)=" l   m  k  la  mm mmmmmm mmmmmmmmmk     "
920 A$(21)=" l   m  k  lmmmm  m    m m       mk     "
930 A$(22)=" l   m  k  lm  m  m    m m       mk     "  
940 A$(23)="     m  k   m  m  m    m m       mk     "  
950 A$(24)="  bbbm aa   m  mbbm    mbm       mk     "
960 RETURN
980 IF SQ(1)>127 THEN RETURN
990 so=INT(RND*5):IF so=0 THEN so=478
1000 IF so=1 THEN so=426
1010 IF so=2 THEN so=379
1020 IF so=3 THEN so=319
1030 IF so=4 THEN so=284
1040 SOUND 1,so,20:RETURN
2000 call &bd19:T=JOY(0):IF T=0 THEN 2000 ELSE PRINT T:GOTO 2000
9990 '
10010 MODE 1:'CLEAR
10040 BORDER 0:m(1)=26:m(2)=24:m(3)=6:INK 0,0:INK 1,26:INK 2,24:INK 3,6
10041 IF PEEK(&4000)<>255 THEN SYMBOL AFTER 32
10070 MEMORY &3FFF:POKE &4000,255
10130 ENT 1,50,20,1:ENT 2,100,2,5:ENT 3,50,30,1:ENT 4,5,10,1
10145 'goto 10440
10210 SYMBOL 97,0,0,0,0,60,226,255,255
10220 SYMBOL 98,66,165,153,133,141,66,102,24
10230 SYMBOL 99,0,8,28,14,54,4,8,4
10240 SYMBOL 100,0,16,56,112,108,32,16,32
10250 SYMBOL 101,0,16,24,124,24,36,18,26
10260 SYMBOL 102,0,32,48,120,52,80,40,12
10270 SYMBOL 103,0,8,24,62,24,36,72,88
10280 SYMBOL 104,0,4,12,30,44,10,20,48
10290 SYMBOL 105,0,8,12,30,12,12,20,20
10300 SYMBOL 106,0,16,48,120,48,48,40,40
10310 SYMBOL 107,66,66,126,66,66,66,126,66
10320 SYMBOL 108,16,16,48,24,16,16,24,48
10330 SYMBOL 109,255,195,165,153,153,165,195,255
10340 SYMBOL 110,60,66,153,165,165,153,66,60
10350 SYMBOL 111,0,0,0,0,170,0,0,0
10360 SYMBOL 112,0,0,0,0,0,0,0,1
10370 SYMBOL 113,0,0,0,0,0,64,192,240
10380 SYMBOL 114,3,3,5,5,0,0,0,0
10390 SYMBOL 115,24,36,66,90,66,36,36,66
10400 SYMBOL 116,0,0,0,8,24,60,58,63
10440 PEN 2:m$="INKA-SOGRA":LOCATE 15,12:GOSUB 10510 
10450 PEN 3:m$="C R E A T E D   B Y   F . M E U R E R ":LOCATE 2,20:GOSUB 10510  
10460 FOR X%=12 TO 608 STEP 4:PLOT X%,228:DRAW 298,290,1+X% MOD 3:PLOT X%,190:DRAW 298,128,1+X% MOD 3:NEXT
10470 FOR X=1 TO 30:FOR A=1 TO 3:FOR Y=1 TO 80:NEXT y:FOR B=1 TO 3:INK B,M(1+(A+B)MOD 3):IF INKEY$="" THEN NEXT B,A,X
10480 LOCATE 14,24:PRINT"LOADING ...";
10490 INK 0,0:INK 1,26:INK 2,24:INK 3,6
10500 return: 'RUN"!INKA2"
10510 FOR n=1 TO LEN(m$)
10520 FOR t=0 TO 7
10525 'OHNE DISK:&A500 !!:
10530 p=PEEK(&9FFC+(ASC(MID$(m$,n,1))-32)*8+t) 
10540 a(t)=p:NEXT:SYMBOL 140,a(0),a(0),a(1),a(1),a(2),a(2),a(3),a(3):SYMBOL 141,a(4),a(4),a(5),a(5),a(6),a(6),a(7),a(7)
10550 PRINT CHR$(140);CHR$(10);CHR$(8);CHR$(141);CHR$(11);:SOUND 1,200,2
10560 NEXT
10570 RETURN
10580 '
19980 '
19990 'disassembly of &ab00-&ab27
20000 'org #ab00 (43776)
20001 'di
20002 'ld hl,#c000
20003 '.lab04
20004 'ld a,(hl)
20005 'cpl
20006 'ld (hl),a
20007 'inc hl
20008 'inc hl
20009 'inc hl
20010 'ld a,h
20011 'ld a,d
20012 'jp nz,lab04
20013 'ei
20014 'ret
20015 'di (.lab11 = 43793)
20016 'ld hl,#c000
20017 'ld de,#4000
20018 'jr lab21
20019 'di (.lab1a = 43802)
20020 'ld hl,#4000
20021 'ld de,#c000
20022 '.lab21
20023 'ld bc,#4000
20024 'ldir
20025 'ei
20026 'ret
20027 ';(.lab27)
20028 '
*/ });
