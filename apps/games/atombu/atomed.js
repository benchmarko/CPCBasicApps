/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem atomed - Atombunker Editor
2 rem (c) Marco Vieth, 1986
3 rem 
5 rem Modification: replaced RSX by BASIC
6 rem
5000 REM EDITOR (v6.1)
5010 CLEAR:DEFINT a-y:GOTO 6020
5020 REM Uebersicht
5030 fa=&93C7:x=0:y=0:FOR ad=&9440 TO &97F8 STEP 8
5040 f=PEEK(fa):f1=0:GOSUB 5100:IF f1=15 THEN PRINT CHR$(7);
5050 '|BILD,x,y,ad,f,f1,1,2
5055 c.x=x:c.y=y:c.s=ad:c.pe=f:c.pa=f1:c.w=1:c.h=2:gosub 10000
5060 x=x+8:IF x>79 THEN x=0:y=y+16
5070 fa=fa+1:NEXT:LOCATE 1,25:PRINT" [ENTER]=Menue / [FEUER]=";
5080 IF an=0 THEN t$="Bild aendern"ELSE t$="Reaktor"
5090 PRINT t$:RETURN
5100 f1=0:IF PEEK(&93C6)=(ad-&9440)/8+1 THEN f1=15
5110 RETURN
5120 REM Aendern
5130 IF ad<&9440 THEN 5740
5140 MODE 1:GOSUB 5100
5150 h=1:FOR i=2 TO 24 STEP 3:LOCATE 33,i:PRINT h:h=h+1:NEXT
5160 h=49:FOR i=2 TO 30 STEP 4:LOCATE i,25:PRINT "0"+CHR$(h):h=h+1:NEXT
5170 GOSUB 5380:GOSUB 5560:WINDOW #1,36,40,3,25
5180 PRINT#1,"Bild:
Etage

UP   
DOWN 
LEFT 
RIGHT
FIRE 
ENTER
{ F }"
5190 PRINT#1," (C) MarcoVieth,1986";
5200 LOCATE 1,1:PLOT 544,0,3:DRAW 544,399
5210 xs=8:ys=24:hig=188:xh=62:xg=1:yg=3:xm=0:ym=0:GOSUB 5480
5215 t!=time
5220 GOSUB 5370: 'IF MID$(h$,x/8+1,1)="1"THEN ab=&9F00 ELSE ab=&9F08
5230 '|BILD,x,y,ab,255,255,xg,yg
5235 c.x=x:c.y=y:c.s=ab:c.pe=255:c.pa=255:c.w=xg:c.h=yg:gosub 10000
5240 while time<t!:call &bd19:wend
5245 GOSUB 5900: t!=time+60:IF j>16 THEN gosub 5430:goto 5220
5250 IF j=16 THEN gosub 5400:goto 5280
5260 IF t$=CHR$(13) THEN RETURN ELSE IF t$="F" THEN 5570 ELSE IF j=0 THEN 5240
5270 IF LOG(j)/LOG(2)>3 THEN 5240
5280 hx=x:hy=y:hab=ab
5290 IF j=1 THEN IF y>ym THEN y=y-ys:ad=ad-1:GOSUB 5370
5300 IF j=2 THEN IF y<hig-ys THEN y=y+ys:ad=ad+1:GOSUB 5370
5310 IF j=4 THEN IF x>xm THEN x=x-xs
5320 IF j=8 THEN IF x<xh-xs THEN x=x+xs
5330 'IF MID$(h$,x/8+1,1)="1"THEN ab=&9F00 ELSE ab=&9F08
5340 '|BILD,hx,hy,hab,f,f1,xg,yg
5345 c.x=hx:c.y=hy:c.s=hab:c.pe=f:c.pa=f1:c.w=xg:c.h=yg:gosub 10000
5350 '|BILD,x,y,ab,255,255,xg,yg :'not needed
5355 'c.x=x:c.y=y:c.s=ab:c.pe=255:c.pa=255:c.w=xg:c.h=yg:gosub 10000
5360 GOTO 5220
5369 '
5370 h$=BIN$(PEEK(ad),8)
5373 IF MID$(h$,x/8+1,1)="1"THEN ab=&9F00 ELSE ab=&9F08
5375 RETURN
5379 '
5380 f=PEEK(fa):f$=STR$(f):f$=RIGHT$(f$,LEN(f$)-1):f$=STRING$(3-LEN(f$),"0")+f$
5390 RETURN
5399 '
5400 IF ab=&9F00 THEN h1$="0"ELSE h1$="1"
5410 MID$(h$,x/8+1,1)=h1$:POKE ad,VAL("&X"+h$)
5412 gosub 5370
5413 '|BILD,x,y,ab,f,f1,xg,yg
5416 c.x=x:c.y=y:c.s=ab:c.pe=f:c.pa=f1:c.w=xg:c.h=yg:gosub 10000
5420 FOR i=1 TO 200/8:call &bd19:NEXT
5425 RETURN
5429 '
5430 j=j-16:IF j=1 THEN IF a-80>=&9440 THEN ad=a-80:fa=fa-10:GOSUB 5480
5440 IF j=2 THEN IF a+80<=&97F8 THEN ad=a+80:fa=fa+10:GOSUB 5480
5450 IF j=4 THEN IF a-8>=&9440 THEN ad=a-8:fa=fa-1:GOSUB 5480
5460 IF j=8 THEN IF a+8<=&97F8 THEN ad=a+8:fa=fa+1:GOSUB 5480 
5470 return
5480 x=0:y=0:xm=0:ym=0:xh=62:hig=188
5490 hi=ad-&9440
5500 IF hi MOD 80=0 THEN xm=xs:x=xs ELSE IF(hi+8)MOD 80=0 THEN xh=54
5510 IF hi<79 THEN ym=ys:y=ys ELSE IF hi>872 THEN hig=hig-ys
5520 a=ad:GOSUB 5380:GOSUB 5100: '|BILD,0,0,ad,f,f1,8,24
5525 c.x=0:c.y=0:c.s=ad:c.pe=f:c.pa=f1:c.w=8:c.h=24:gosub 10000
5530 hi=hi/8:LOCATE #1,2,2:PRINT#1,USING"###";hi+1
5540 LOCATE #1,3,4:PRINT#1,USING"##";12-hi\10
5550 ad=ad+y/24:GOSUB 5560
5555 RETURN
5560 LOCATE 36,1:PRINT"F=";f$;
5565 RETURN 
5570 PRINT"";:GOSUB 5560:GOSUB 5900:f$=t$:PRINT"";:GOSUB 5560
5580 FOR i=0 TO 1:GOSUB 5900:f$=f$+t$:GOSUB 5560:NEXT:f=VAL(f$):IF f>255 THEN 5570 ELSE POKE fa,f
5590 '|BILD,0,0,a,f,0,8,24
5595 c.x=0:c.y=0:c.s=a:c.pe=f:c.pa=f1:c.w=8:c.h=24:gosub 10000
5598 GOTO 5220
5600 REM Laden
5610 MODE 1:PRINT" Spielfeld laden:

"
5620 PRINT"Kennziffer (0-9):";:GOSUB 5900:PRINT VAL(t$)
5630 LOAD"ATOMBU"+t$+".DAT",&93C6
5640 GOSUB 6100:RETURN
5650 REM Saven
5660 MODE 1:PRINT" Spielfeld saven:

":ad=&9440
5670 '|TESTE,ad,120,255
5675 gosub 10650
5676 z=PEEK(1)*256+PEEK(0):IF z<>0 THEN z=z-8:PRINT"Bild an Adr";z;" voll !!":ad=z:fa=&93C7+(ad-&9440)/8:CALL &BB18:GOTO 5130
5680 IF PEEK(&93C6)=0 THEN PRINT"

 Reaktor definieren !!":CALL &BB18:RETURN
5690 PRINT"Kennziffer (0-9):";:GOSUB 5900:PRINT VAL(t$)
5700 SPEED WRITE 1
5710 SAVE"ATOMBU"+t$+".DAT",B,&93C6,1074
5720 RETURN
5730 REM Auswahl
5740 MODE 1:GOSUB 5030:x=0:y=0:xg=1:yg=2
5750 xs=8:ys=16:hig=188:ad=&9440:fa=&93C7
5760 '|BILD,x,y,ad,PEEK(fa),255,xg,yg
5765 c.x=x:c.y=y:c.s=ad:c.pe=PEEK(fa):c.pa=255:c.w=xg:c.h=yg:gosub 10000
5770 while time<t!:call &bd19:wend
5775 GOSUB 5900:t!=time+50:IF j=16 THEN IF an=0 THEN 5130 ELSE 5940
5780 IF t$=CHR$(13)THEN f=PEEK(fa):an=0:RETURN ELSE IF j=0 THEN 5770
5790 IF LOG(j)/LOG(2)>3 THEN 5770
5800 hx=x:hy=y:ha=ad:hf=fa
5810 IF j=1 THEN IF y>0 THEN y=y-ys:ad=ad-80:fa=fa-10
5820 IF j=2 THEN IF y<hig-ys THEN y=y+ys:ad=ad+80:fa=fa+10
5830 IF j=4 THEN IF x>0 THEN x=x-xs:ad=ad-8:fa=fa-1
5840 IF j=8 THEN IF x<79-xs THEN x=x+xs:ad=ad+8:fa=fa+1
5850 f1=0:IF PEEK(&93C6)=(ha-&9440)/8+1 THEN f1=15
5860 '|BILD,hx,hy,ha,PEEK(hf),f1,xg,yg
5865 c.x=hx:c.y=hy:c.s=ha:c.pe=PEEK(hf):c.pa=f1:c.w=xg:c.h=yg:gosub 10000
5870 '|BILD,x,y,ad,PEEK(fa),255,xg,yg
5875 c.x=x:c.y=y:c.s=ad:c.pe=PEEK(fa):c.pa=255:c.w=xg:c.h=yg:gosub 10000
5880 GOTO 5770
5890 REM Tastatur
5900 j=0:t$=""
5910 j=JOY(0):t$=INKEY$:IF j=0 AND t$="" THEN 5910
5920 IF j<>0 THEN RETURN ELSE t$=UPPER$(t$):IF t$="S" THEN STOP
5930 RETURN
5940 MODE 1:LOCATE 5,5:PRINT"Reaktorbild definiert.

"
5950 PRINT SPC(4)"4 Felder in der Mitte muessen"
5960 PRINT SPC(4)"unbesetzt bleiben.
":PRINT:an=0
5970 POKE ad+3,PEEK(ad+3)AND 231:POKE ad+4,PEEK(ad+4)AND 231
5980 POKE &93C6,(ad-&9440)/8+1
5990 PRINT SPC(4)"Ein Eingang dorthin muss"
6000 PRINT SPC(4)"freigelassen werden.":PRINT:PRINT
6010 PRINT SPC(4)"Taste druecken...":CALL &BB18:RETURN
6020 IF PEEK(&A500)=1 THEN 6070
6030 MODE 1:PRINT"
ATOMBUNKER.BIN laden..."
6040 SYMBOL AFTER 256:MEMORY &88FB: poke &9440,0:poke &a500,1:'LOAD"ATOMBU6.BIN",&A500:CALL &A500:POKE &9440,0
6060 FOR i=&93C7 TO &943F:POKE i,240:NEXT
6070 IF PEEK(&9440)<>255 THEN GOSUB 6090
6080 GOTO 6140
6090 FOR i=&9F00 TO &9F07:POKE i,255:POKE i+8,0:NEXT
6100 FOR i=&9440 TO &9488 STEP 8:POKE i,255:POKE i+887,255:NEXT:ha=&9488
6110 FOR i=ha TO ha+7:POKE i,PEEK(i)OR 1:POKE i-72,PEEK(i-72)OR 128:NEXT:ha=ha+80:IF ha<&97F9 THEN 6110
6120 RETURN
6130 REM MENUE
6140 MODE 0:PRINT"    M E N U E :

"
6150 PRINT"[1] Uebersicht
"
6160 PRINT"[2] Bild aendern
"
6170 PRINT"[3] Reaktor defin.

"
6180 PRINT"[4] Spielfeld laden
"
6190 PRINT"[5] Spielfeld saven

"
6200 PRINT"[6] Initialisieren

"
6210 PRINT"[7] ENDE


"
6220 PRINT"{ Bitte waehlen... }"
6230 GOSUB 5900:IF VAL(t$)>7 OR VAL(t$)<1 THEN 6230
6240 ON VAL(t$)GOSUB 5740,5130,6260,5610,5660,6090,6280
6250 GOTO 6140
6260 an=1:GOTO 5740
6270 REM ENDE
6280 MODE 2:PRINT"Ende...":END
9980 '
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
10630 '
10640 'TESTE
10650 poke 0,0:poke 1,0
10660 'TODO
10670 return
10680 '
*/ });
