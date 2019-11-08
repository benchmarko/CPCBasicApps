/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem scpc6128 - Schneider CPC 6128 Demo
2 rem (c) Schneider/Amstrad
3 rem
4 rem Modifications: put in one file, inserted some delays with call &bd19
7 rem (TODO: line 570: RESTORE 1130 not data line; initial "Schneider"; fill; note movement) 
8 rem
10 ON ERROR GOTO 100
20 SYMBOL AFTER 256:mcentry=HIMEM-54:schpoke=&6A47-2435:MEMORY schpoke-1
22 SYMBOL AFTER 130:GOSUB 10000
25 IF mcentry<40977 THEN MODE 1:LOCATE 7,18:PRINT"Not Enough Memory Available":END
30 FOR p=mcentry TO mcentry+54
40 READ p$:POKE p,VAL("&"+p$)
50 NEXT
60 a%=0:CALL mcentry+39,@a%
70 MODE 1:LOCATE 7,18
80 version=(a%\256)+256*(a%MOD 256)
85 goto 110
90 IF version<&102 THEN GOTO 100 ELSE PRINT"  Dråcken Sie gleichzeitig                   CTRL SHIFT und ESC                  um das Programm zu stoppen":GOTO 110
100 MODE 1:LOCATE 4,18:PRINT"Inkompatibles BASIC installiert":END
110 ON BREAK CONT
115 DATA 21,0,C0,11,0,40,42,4B,AF,DD,BE,1,20,1,EB,DD,7E,0,C6,2,CD,5B,BD,ED,B0,C3,5B,BD
120 DATA CD,B,BC,11,80,2,19,CD,5,BC,C9,E,FF,CD,15,B9,EB,DD,66,1,DD,6E,0,73,23,72,C9
125 'LOAD"ritdemo"
130 OPENIN "scpcdata":p=schpoke
131 WHILE NOT EOF
132 INPUT#9,i$
133 FOR x=1 TO LEN(i$)/2
134 POKE P,ASC(MID$(i$,x*2-1,1))-33
135 P=P+1:POKE P,ASC(MID$(i$,x*2,1))-33
136 P=P+1
137 NEXT x
138 POKE P,0:POKE P+1,0:P=P+2
139 WEND
140 POKE p,0:POKE P+1,255
141 CLOSEIN
145 DEG
150 DIM sp(10),ctot(6),ltot(18),s(9),c(9),cx(5),cy(5),r(5),lc(5),period(12)
160 cx(1)=320:cy(1)=140
170 r(1)=75:r(2)=40:r(3)=20:r(4)=12:r(5)=8
180 firstime=(1=1)
270 MODE 1:INK 0,1:BORDER 1:INK 1,24
281 LOCATE 12,19:PRINT"CTM644 / GT65 ?";
300 CURSOR 1
310 delay=TIME:CLEAR INPUT
320 a$=INKEY$:IF UPPER$(a$)="G"THEN roldem=1:GOTO 340 ELSE IF UPPER$(a$)="C"THEN roldem=0:GOTO 340
330 IF TIME-delay<3000 THEN 320 ELSE roldem=0
340 CURSOR 0
344 'if you want to start here, uncomment next line
345 'DEG:150 DIM sp(10),ctot(6),ltot(18),s(9),c(9),cx(5),cy(5),r(5),lc(5),period(12):cx(1)=320:cy(1)=140:r(1)=75:r(2)=40:r(3)=20:r(4)=12:r(5)=8:firstime=1:schpoke=&7000:poke schpoke+1,255
348 'CHAIN "d2"
349 '
350 ' AMSTRAD LOGO
360 DEG:SYMBOL AFTER 130:GOSUB 10000
370 backgrnd=26:col1=0:col2=16:col3=6
380 MODE 1:ORIGIN 200,0
390 BORDER backgrnd:INK 0,backgrnd:INK 1,col1:INK 2,col2:INK 3,col2
400 P=schpoke:Y=398
401 START%=PEEK(P):FINISH%=PEEK(P+1):P=P+2
402 IF FINISH%=0 THEN Y=Y-2:GOTO 401 ELSE IF FINISH%=255 THEN 404 ELSE MOVE START%*2,Y:DRAW FINISH%*2,Y,1
403 GOTO 401
404 ORIGIN 0,0
405 RESTORE 422
406 READ x,y:MOVE x,y
407 READ x,y:IF x=999 THEN 409
408 DRAW x,y,1:GOTO 407
409 RESTORE 422
410 ORIGIN 100,-34
411 READ x,y:MOVE 88-x,y
412 READ x,y:IF x=999 THEN 414
413 DRAW 88-x,y,3:GOTO 412
414 MOVE 66,342
416 FILL 3
417 ORIGIN 0,0
418 MOVE 18,342
419 FILL 1
420 LOCATE 1,20:PRINT" ";
421 GOTO 425
422 DATA 0,361,0,374,1,376,1,379,3,379,3,380,4,382,4,383,12,391,13,391,15,392,16,392,18,394,19,394,21,395,88,395,88,374,28,374,27,373,25,373,22,370,22,365,25,362,27,362,28,361,88,361,88,340
423 DATA 21,340,19,341,18,341,16,343,15,343,13,344,12,344,4,352,4,353,3,355,3,356,1,358,1,359,0,361,999,0
424 REM fill in
425 SYMBOL 255,0,0,0,0,0,&X1100110,&X1100110,0
426 PEN 1:LOCATE 9,15:PRINT"B E G R U S S T    S I E":LOCATE 13,17:PRINT"Z U    I H R E M "
427 LOCATE 17,14:PRINT CHR$(255)
570 ORIGIN 240,60:RESTORE 1140:'TTT
580 READ A,B,C,D:IF a=999 THEN GOTO 1530
590 MOVE a,b:DRAW c,d,3
600 GOTO 580
1130 'cpc664 starts here
1140 DATA 20,34,20,40,20,40,2,40
1150 DATA 0,38,0,2,2,0,20,0,20,0,20,6
1160 DATA 24,40,46,40,48,38,48,22
1170 DATA 46,20,28,20,28,40,28,0
1180 DATA 24,0,32,0
1190 DATA 72,34,72,40,72,40,54,40
1200 DATA 52,38,52,2,54,0,72,0,72,0,72,6
1210 DATA 104,34,104,38,102,40,86,40
1220 DATA 84,38,84,2,86,0,102,0
1230 DATA 104,2,104,18,102,20,86,20
1232 DATA 110,0,118,0,114,0,114,40
1233 DATA 114,40,110,34
1234 DATA 122,34,122,38,124,40,140,40
1236 DATA 142,38,142,22,140,20,124,20
1238 DATA 122,18,122,2,124,0,140,0
1240 DATA 142,2,142,6
1242 DATA 148,2,148,18,148,22,148,38
1244 DATA 150,40,166,40,168,38,168,22
1246 DATA 168,18,168,2,166,0,150,0
1248 DATA 150,20,166,20
1290 DATA 999,0,0,0
1530 t=TIME:WHILE TIME-t<1200 and inkey$="":call &bd19:WEND
1540 MODE 0:LOCATE 3,12:BORDER 1:INK 1,24:INK 0,1:PRINT"EIN BEISPIEL FUR":LOCATE 8,14:PRINT"GRAPHIK"
1541 LOCATE 17,11:PRINT CHR$(255):T=TIME
1550 IF TIME-t<900 and inkey$="" THEN call &bd19:goto 1550 ELSE 1560
1560 MODE 1:INK 0,0:BORDER 0:INK 1,24:INK 2,6:INK 3,2
1570 i=1:RAD
1580 ORIGIN 320,200
1590 FOR a=0 TO 4*PI STEP PI/60
1600 MOVE 320*SIN(a/2),198*COS(a)
1610 DRAW 200*COS(a/2),198*SIN(a),i
1620 i=i+1:IF i=4 THEN i=1
1630 NEXT
1640 EVERY 5 GOSUB 1680
1650 T=TIME
1660 IF TIME-T<2100 and inkey$="" THEN call &bd19:goto 1660
1670 R=REMAIN(0):GOTO 1710
1680 IF i=1 THEN FRAME:INK 1,24:INK 2,6:INK 3,2:i=2:RETURN
1690 IF I=2 THEN FRAME:INK 1,6:INK 2,2:INK 3,24:I=3:RETURN
1700 IF I=3 THEN FRAME:INK 1,2:INK 2,24:INK 3,6:I=1:RETURN
1710 'this program draws patterns
1720 MODE 0:DEG
1730 sa=120
1740 BORDER 26:INK 0,26:INK 1,0:PEN 1:LOCATE 3,12:PRINT"EIN BEISPIEL FUR":LOCATE 8,14:PRINT"FARBEN"
1745 LOCATE 17,11:PRINT CHR$(255)
1750 PEN 1
1760 st=1
1770 t=TIME
1780 IF TIME-t<900 and inkey$="" THEN call &bd19:goto 1780
1790 INK 0,13:INK 1,2:INK 2,6:INK 3,18:BORDER 13:MODE 1
1800 st=1
1810 IF firstime THEN firstime=(1=0):GOSUB 1890:CALL mcentry,&105 ELSE INK 1,13:INK 2,13:INK 3,13:FRAME:CALL mcentry,5:INK 1,2:INK 2,6:INK 3,18
1820 LOCATE 1,1
1830 EVERY 25,1 GOSUB 2070
1840 EVERY 15,2 GOSUB 2110
1850 EVERY 5,3 GOSUB 2150
1860 f=0
1870 AFTER 500 GOSUB 2190
1880 if inkey$<>"" then f=1
1881 IF f=0 THEN call &bd19:goto 1880 ELSE 1882
1882 GOSUB 6060' blocky demo
1884 GOTO 2220
1890 'draw circle plus 3,4 or 6 around it
1900 cx%=cx(st):cy%=cy(st):lc(st)=0
1910 FOR x%=1 TO r(st)
1920 ORIGIN cx%,cy%,0,640,0,400
1930 MOVE 0,0
1940 DRAWR r(st)*SIN(x%*360/r(st)),r(st)*COS(x%*360/r(st)),1+(st MOD 3)
1950 DRAW r(st)*SIN((x%+1)*360/r(st)),r(st)*COS((x%+1)*360/r(st))
1960 NEXT x%
1970 IF st=5 THEN RETURN
1980 lc(st)=0
1990 cx(st+1)=cx(st)+1.7*r(st)*SIN(sa+lc(st))
2000 cy(st+1)=cy(st)+1.7*r(st)*COS(sa+lc(st))
2010 st=st+1
2020 GOSUB 1890
2030 st=st-1
2040 lc(st)=lc(st)+2*sa
2050 IF(lc(st)MOD 360)<>0 THEN 1990
2060 RETURN
2070 ik1=INT(RND*27)
2080 IF ABS(ik1-ik2)<3 OR ABS(ik1-ik3)<3 THEN 2070
2090 INK 1,ik1
2100 RETURN
2110 ik2=INT(RND*27)
2120 IF ABS(ik2-ik1)<3 OR ABS(ik2-ik3)<3 THEN 2110
2130 INK 2,ik2
2140 RETURN
2150 ik3=INT(RND*27)
2160 IF ABS(ik3-ik1)<3 OR ABS(ik3-ik2)<3 THEN 2150
2170 INK 3,ik3
2180 RETURN
2190 r=REMAIN(1)+REMAIN(2)+REMAIN(3)
2200 f=1
2210 RETURN
2220 'sound demo
2230 BORDER 24:INK 0,24:INK 1,0:MODE 0:LOCATE 3,12:PEN 1:PRINT"EIN BEISPIEL FUR":LOCATE 9,14:PRINT"MUSIK"
2235 LOCATE 17,11:PRINT CHR$(255):t=TIME
2240 IF TIME-t<900 and inkey$="" THEN call &bd19:goto 2240
2250 INK 0,26:INK 1,0:BORDER 26:MODE 0
2260 colnote=2:colstave=8:backgrnd=26
2270 stavecol=7:notecol=8
2280 stavecole=1:notecole=2:stavecole2=3:notecole2=4
2290 crtca=&BC00:crtcd=&BD00:crtci=&BF00
2300 BORDER backgrnd:INK 0,backgrnd
2310 INK 1,colstave:INK 3,colstave:INK 5,colstave:INK 7,colstave
2320 INK 2,colnote:INK 4,colnote:INK 6,colnote:INK 8,colnote
2330 i1=0:i2=0:i3=0:i4=0:i5=0:i6=0
2340 mx=20:MODE 0:locx=mx:offset=128:locst=2
2350 SYMBOL 250,0,0,0,0,0,0,0,255:SYMBOL 251,0,0,0,255,0,0,0,255:SYMBOL 252,1,1,1,255,1,1,1,255
2360 SYMBOL 255,4,4,4,4,4,28,28,24
2370 SYMBOL 244,0,0,0,0,0,0,&18,&FF
2380 SYMBOL 245,&14,&14,&14,&FF,&14,&18,&30,&FF
2390 SYMBOL 246,&50,&5C,&92,&FF,&92,&54,&38,&FF
2400 SYMBOL 247,&10,&10,&10,&70,&60,0,0,&FF
2410 SYMBOL 248,0,&72,&88,&FF,&88,&4A,&8,&FF
2420 SYMBOL 249,&8,&10,&10,&FF,&20,&40,&80,&FF
2430 sp$="  "
2440 stv$(0,0)=STRING$(2,250):stv$(1,0)=STRING$(2,251):stv$(2,0)=STRING$(2,251)
2450 stv$(0,1)=STRING$(2,250):stv$(1,1)=CHR$(251)+CHR$(252):stv$(2,1)=stv$(1,1)
2460 FOR i=0 TO 5:clef$(i)=CHR$(i+244):NEXT
2470 GOSUB 3440
2480 unit=4
2490 ENV 4,unit,3,1,1,0,6*unit,unit,-3,1
2500 ENV 6,unit,3,1,1,0,14*unit,unit,-3,1
2510 period(1)=3822:period(2)=3608:period(3)=3405:period(4)=3214
2520 period(5)=3034:period(6)=2863:period(7)=2703:period(8)=2551
2530 period(9)=2408:period(10)=2273:period(11)=2145:period(12)=2025
2540 notes$="  c c+d d+e f f+g g+a a+b "
2550 RESTORE 2900
2560 READ a$
2570 'interpret a line
2580 spoint=1:count=0
2590 WHILE spoint<LEN(a$)
2600 chan$=MID$(a$,spoint,3):spoint=spoint+3
2610 TAG:GRAPHICS PEN notecol,1
2620 IF VAL(LEFT$(chan$,1))THEN note$=MID$(a$,spoint,4):spoint=spoint+4:GOSUB 2820:SOUND 65,period,0,0,envel
2630 IF VAL(MID$(chan$,2,1))THEN note$=MID$(a$,spoint,4):spoint=spoint+4:GOSUB 2820:SOUND 66,period,0,0,envel
2640 note$=MID$(a$,spoint,4):spoint=spoint+4:GOSUB 2820:SOUND 68,period,0,0,envel
2650 IF SQ(4)>127 THEN call &bd19:goto 2650
2660 RELEASE 7
2670 locx=locx+26:count=count+1:GOSUB 3500
2680 WEND
2690 READ a$:IF ASC(a$)=42 THEN GOTO 3640
2700 IF count=4 THEN locx=locx+24 ELSE locx=locx+48
2710 count=0:IF locx<600 THEN 2810
2720 locx=mx:locst=2
2730 i5=stavecole:stavecole=(stavecole+2)MOD 8:i1=stavecole
2740 i6=notecole:notecole=notecole MOD 8+2:i3=notecole
2750 notecole2=notecole2 MOD 8+2:i4=notecole2
2760 stavecole2=(stavecole2+2)MOD 8:i2=stavecole2
2770 notecol=notecol MOD 8+2:stavecol=(stavecol+2)MOD 8
2780 INK i1,backgrnd:INK i2,backgrnd:INK i3,backgrnd:INK i4,backgrnd
2790 FRAME:CALL mcentry+28
2800 INK i5,colstave:INK i6,colnote
2810 GOTO 2570
2820 'calculate note parms
2830 note=INSTR(notes$,LEFT$(note$,2))
2840 octave=VAL(MID$(note$,3,1))
2850 envel=VAL(RIGHT$(note$,1))
2860 base=period(note\2)
2870 period=base/(2^octave)
2880 GOSUB 3390
2890 RETURN
2900 DATA 101g 44g 24111d 54f 34b 24111d 54f 34b 24111e 54f 34b 24
2910 DATA 101d 54c 34111c 54g 34e 34111c 54g 34e 34111e 54g 34e 34
2920 DATA 101f 54c 34111a 54a 34f 34111c 64a 34f 34111a 54a 34f 34
2930 DATA 101a 54c 34111g 54g 34e 34111g 56g 34e 34011g 34e 34
2940 DATA 101a 54g 24111b 44f 34b 24111b 44f 34b 24111a 54f 34b 24
2950 DATA 101g 54c 34111c 54g 34e 34111c 54g 34e 34111e 54g 34e 34
2960 DATA 101e 54d 34111d 54c 44f+34111e 54c 44f+34111d 54c 44f+34
2970 DATA 101e 54g 24111d 54f+44b 24111b 44f+34b 24111g 44f+34b 24
2980 DATA 101g 44g 24111d 54f 34b 24111d 54f 34b 24111e 54f 34b 24
2990 DATA 101d 54c 34111c 54g 34e 34111c 54g 34e 34111e 54g 34e 34
3000 DATA 101f 54c 34111a 54a 34f 34111c 64a 34f 34111a 54a 34f 34
3010 DATA 101a 54c 34111g 54g 34e 34111g 56g 34e 34011g 34e 34
3020 DATA 101a 54g 24111b 44f 34b 24111b 44f 34b 24111a 54f 34b 24
3030 DATA 101g 54c 34111c 54g 34e 34111c 54g 34e 34111e 54g 34e 34
3040 DATA 101e 54g 24111d 54f 34b 24111e 54f 34b 24111d 54f 34b 24
3050 DATA 101e 54c 34111c 54g 34e 34111g 36e 36c 56
3060 DATA 101e 56c 34011a 34f 34111c 56a 34f 34011a 34f 34
3070 DATA 101a 46c 34011g 34e 34111g 46g 34e 34011g 34e 34
3080 DATA 101g 54g 24111d 54f 34b 24111e 54f 34b 24111f 54f 34b 24
3090 DATA 101e 54g 24111d 54g 34e 34111c 56g 34e 34011g 34e 34
3100 DATA 101e 56c 34011g 34e 34111c 56g 34e 34011g 34e 34
3110 DATA 101a 46c 34011g 34e 34111g 46g 34e 34011g 34e 34
3120 DATA 101f+44g 24111g 44f 34b 24111a 44f 34b 24111b 44f 34b 24
3130 DATA 101d 54c 34111c 54g 34e 34111c 56g 34e 34011g 34e 34
3140 DATA 101e 56c 34011g 34e 34111c 56g 34e 34011g 34e 34
3150 DATA 101a 46c 34011g 34e 34111g 46g 34e 34011g 34e 34
3160 DATA 101g 54g 24111d 54f 34b 24111e 54f 34b 24111f 54f 34b 24
3170 DATA 101e 54g 24111d 54g 34e 34111c 56g 34e 34011g 34e 34
3180 DATA 101e 56c 34011g 34e 34111c 56g 34e 34011g 34e 34
3190 DATA 101a 46c 34011g 34e 34111g 46g 34e 34011g 34e 34
3200 DATA 101f+44g 24111g 44f 34b 24111a 44f 34b 24111b 44f 34b 24
3210 DATA 101d 54c 34111c 54g 34e 34111c 56g 36e 36
3220 DATA 101f 46f 34011c 44a 34111f 46c 44a 34011c 44a 34
3230 DATA 101g 44e 34111a+44c 44a+34111a 44c 44a+34111g 44c 44a+34
3240 DATA 101c 56f 34011c 44a 34111c 56c 44a 34011c 44a 34
3250 DATA 101c 54f 34111d 54c 44a 34111a 44c 44a 34111a+44c 44a 34
3260 DATA 101g 46e 34011c 44a+34111g 46c 44a+34011c 44a+34
3270 DATA 101g 44e 34111a+44c 44a+34111a 44c 44a+34111g 44c 44a+34
3280 DATA 101f 44f 34111f 54c 44a 34111e 54c 44a 34111d 54c 44a 34
3290 DATA 101c 54e 34111a+44c 44a+34111a 44c 44a+34111g 44c 44a+34
3300 DATA 101f 46f 34011c 44a 34111f 46c 44a 34011c 44a 34
3310 DATA 101g 44e 34111a+44c 44a+34111a 44c 44a+34111g 44c 44a+34
3320 DATA 101c 56f 34011c 44a 34111c 56c 44a 34011c 44a 34
3330 DATA 101c 54f 34111d 54c 44a 34111a 44c 44a 34111a+44c 44a 34
3340 DATA 101g 46e 34011c 44a+34111g 46c 44a+34011c 44a+34
3350 DATA 101g 44e 34111a+44c 44a+34111a 44c 44a+34111g 44c 44a+34
3360 DATA 101f 44f 34111c 54c 44a 34101g 44e 34111a 44c 44a+34
3370 DATA 101f 46f 34011c 44a 34111f 46a 36f 36
3380 DATA *
3390 oct=(octave-2)*28
3400 notes=(ASC(LEFT$(note$,1))-96)*4:notes=ABS(notes<=8)*28+notes
3410 locy=oct+notes+offset
3420 MOVE locx,locy:PRINT CHR$(255);
3430 RETURN
3440 PEN stavecol:LOCATE 1,11
3450 INK stavecol,backgrnd
3460 FOR staves=1 TO 2:PRINT STRING$(20,250);:FOR i=1 TO 10:PRINT STRING$(3,251)CHR$(252);:NEXT i,staves
3470 FOR i=11 TO 16:LOCATE 1,i:PRINT clef$(i-11);:NEXT
3480 INK stavecol,colstave
3490 RETURN
3500 IF locst>=20 THEN locst=2.5
3510 PEN stavecole:INK stavecole,backgrnd
3520 TAGOFF:PRINT CHR$(22)CHR$(0);
3530 st12=(locst/2)MOD 2
3540 LOCATE locst,19:PRINT stv$(0,st12);
3550 LOCATE locst,20:PRINT stv$(1,st12);
3560 LOCATE locst,21:PRINT stv$(2,st12);
3570 LOCATE locst,22:PRINT stv$(0,st12);
3580 LOCATE locst,23:PRINT stv$(1,st12);
3590 LOCATE locst,24:PRINT stv$(2,st12);
3600 LOCATE 1,clf+19:PRINT clef$(clf);:clf=(clf+1)MOD 6
3610 LOCATE locst,18:PRINT sp$;:LOCATE locst,25:PRINT sp$;:LOCATE 1,18:PRINT sp$;:LOCATE 1,25:PRINT sp$;
3620 locst=locst+2
3630 RETURN
3640 T=TIME
3650 IF TIME-T<1000 and inkey$="" THEN call &bd19:goto 3650
3660 'spreadsheet
3665 GOSUB 10000
3670 MODE 0:BORDER 13:INK 0,13:INK 1,0:PEN 1:LOCATE 3,11:PRINT"EIN BEISPIEL FUR":LOCATE 5,13:PRINT"KOMMERZIELLE":LOCATE 5,15:PRINT"ANWENDUNGEN"
3675 LOCATE 17,10:PRINT CHR$(255)
3680 T=TIME
3690 IF TIME-T<900 and inkey$="" THEN call &bd19:goto 3690
3700 LOCATE 1,10:PRINT CHR$(18):LOCATE 1,11:PRINT CHR$(18):LOCATE 1,13:PRINT CHR$(18):LOCATE 1,15:PRINT CHR$(18):LOCATE 1,12:BORDER 15:INK 0,15:INK 1,2:PRINT"TABELLENKALKULATION"
3710 gt=0:FOR x=1 TO 6:ctot(x)=0:NEXT:FOR x=1 TO 18:ltot(x)=0:NEXT
3720 T=TIME
3730 IF TIME-t<900 and inkey$="" THEN call &bd19:goto 3730
3740 MODE 2
3750 c$="Januar\Februar\Mârz\April\Mai\Juni\"
3760 MOVE 0,380:DRAWR 640,0,1
3770 MOVE 60,0:DRAWR 0,400
3780 FOR x=1 TO 6
3790 cc$=LEFT$(c$,INSTR(c$,"\")-1)
3800 LOCATE 8+X*10-LEN(cc$),1:PRINT cc$
3810 c$=MID$(c$,LEN(cc$)+2)
3820 NEXT x
3830 LOCATE 72,1:PRINT"SUMME"
3840 C$="DDR\England\USA\Frankr.\Spanien\Italien\Schweiz\ãsterr.\Holland\Schwed.\Belgien\Norweg.\Dânem.\Japan\Korea\RSA\China\Griech.\
3850 FOR x=1 TO 18
3860 cc$=LEFT$(c$,INSTR(c$,"\")-1)
3870 LOCATE 8-LEN(cc$),x+2:PRINT cc$
3880 c$=MID$(c$,LEN(cc$)+2)
3890 NEXT x
3900 MOVE 0,75:DRAWR 640,0
3910 LOCATE 1,22:PRINT"SUMME"
3920 t=TIME:RANDOMIZE t
3930 FOR y=1 TO 18
3940 FOR x=1 TO 6
3950 cv=ROUND(RND*10000,2)
3960 LOCATE x*10,Y+2:PRINT USING"#####.##";cv
3970 NEXT:NEXT
3980 FOR x=1 TO 6
3990 RANDOMIZE t:ctot=0
4000 FOR y=1 TO 18
4010 FOR rn=1 TO 6
4020 cv=ROUND(RND*10000,2)
4030 IF x=rn THEN ctot(x)=ctot(x)+cv:tv=cv
4040 NEXT rn
4050 LOCATE x*10,Y+2
4060 PRINT CHR$(24);USING"#####.##";tv
4070 LOCATE x*10,Y+2:PRINT CHR$(24);USING"#####.##";tv
4080 NEXT y
4090 LOCATE x*10-1,22:PRINT USING"######.##";ctot(x)
4100 NEXT x
4110 RANDOMIZE t
4120 FOR y=1 TO 18
4130 FOR x=1 TO 6
4140 cv=ROUND(RND*10000,2)
4150 LOCATE x*10,Y+2:PRINT CHR$(24);USING"#####.##";cv
4160 LOCATE x*10,Y+2:PRINT CHR$(24);USING"#####.##";cv
4170 ltot(y)=ltot(y)+cv
4180 NEXT x
4190 LOCATE 70,y+2:PRINT USING"######.##";ltot(y)
4200 NEXT y
4210 x=0
4220 FOR y=1 TO 18
4230 IF(y MOD 3)=1 THEN x=x+1:LOCATE x*10-1,22:PRINT CHR$(24);USING"######.##";ctot(x):PRINT CHR$(24);
4240 LOCATE 70,y+2:PRINT CHR$(24);USING"######.##";ltot(y)
4250 LOCATE 70,y+2:PRINT CHR$(24);USING"######.##";ltot(y)
4260 gt=gt+ltot(y)
4270 IF(y MOD 3)=0 THEN LOCATE x*10-1,22:PRINT USING"######.##";ctot(x)
4280 NEXT y
4290 LOCATE 70,22:PRINT USING"######.##";gt
4300 T=TIME
4310 IF TIME-T<1200 and inkey$="" THEN call &bd19:goto 4310
4320 'print a bar chart
4330 MODE 0:BORDER 4:INK 0,4:INK 1,26:LOCATE 4,12:PRINT"BALKENDIAGRAMME":t=TIME
4340 IF TIME-t<900 and inkey$="" THEN call &bd19:goto 4340
4350 DEG:t60=TAN(60):s30=SIN(30):c30=COS(30)
4360 MODE 1:BORDER 13:INK 0,13:INK 1,17:INK 2,8:INK 3,4:TAG
4370 wdth=35:dpth=20:off=202-INT(dpth*s30/2)
4380 MOVE 62,400:DRAW 62,0,3
4390 FOR y=360 TO 40 STEP-40
4400 MOVE 58,y:DRAW 66,y:MOVE 0,y+6
4410 PRINT USING"###";ABS(y-200)/4*5;
4420 NEXT y
4430 MOVE 58,200:DRAW 640,200
4440 FOR xst=75 TO 600 STEP 45
4450 h1=INT(RND*380)-190
4460 IF h1<=0 THEN 4550
4470 FOR y=0 TO h1 STEP 2
4480 MOVE xst,off+y
4490 DRAWR wdth,0,1
4500 DRAWR dpth*c30,dpth*s30,2
4510 NEXT y
4520 y=y-2:GOSUB 4650
4530 NEXT xst
4540 GRAPHICS PEN 3,1:MOVE 412,22:PRINT"Monatsumsatz";:TAGOFF:GOTO 4630
4550 y=-2:GOSUB 4650
4560 FOR y=-2 TO h1 STEP-2
4570 MOVE xst,off+y
4580 DRAWR wdth,0,1
4590 DRAWR dpth*C30,dpth*S30,2
4600 NEXT y
4610 MOVE xst,200:DRAW 640,200,3
4620 GOTO 4530
4630 T=TIME
4640 IF TIME-T<1500 and inkey$="" THEN call &bd19:goto 4640 ELSE 4700
4650 FOR y1=y+2 TO y+dpth*s30 STEP 2
4660 MOVE xst+(y1-y)*T60,off+y1
4670 DRAWR wdth,0,3
4680 NEXT y1
4690 RETURN
4700 'word processor
4710 MODE 0:BORDER 21:INK 0,21:INK 1,6:LOCATE 3,12:PRINT"TEXTVERARBEITUNG":t=TIME
4720 IF TIME-t<900 and inkey$="" THEN call &bd19:goto 4720
4740 INK 1,0:INK 0,18:BORDER 18
4750 MODE 2:xflag=0
4760 MOVE 640,376:DRAW 8,376,1
4770 MOVE 8,376:DRAW 8,0
4780 t$="Eingegebener Text":GOSUB 5490
4790 RESTORE 5510:i$=""
4800 FOR y=3 TO 25
4810 GOSUB 5360
4820 LOCATE 3,y:PRINT l$
4830 NEXT y
4840 FOR y=3 TO 25
4850 GOSUB 5360
4860 LOCATE 45,y:PRINT l$
4870 NEXT y
4880 t$="Ausrichten":GOSUB 5490
4890 RESTORE 5510:i$=""
4900 FOR y=3 TO 25
4910 LOCATE 3,y:GOSUB 5200
4920 NEXT y
4930 FOR y=3 TO 25
4940 LOCATE 45,y:GOSUB 5200
4950 NEXT
4960 t$="Jetzt ersetzen wir das Wort 'minimale' durch das Wort 'geringe'":GOSUB 5490
4970 t=TIME
4980 t1=TIME-t
4990 LOCATE 69,8
5000 IF T1>1000 or inkey$<>"" THEN 5030
5010 IF(t1 MOD 20)<10 THEN PRINT CHR$(24)+"minimale"+CHR$(24)ELSE PRINT"minimale"
5020 call &bd19:GOTO 4980
5030 t=TIME
5040 t1=TIME-t
5050 LOCATE 69,8
5060 IF T1>1000 or inkey$<>"" THEN 5090
5070 IF(t1 MOD 20)<10 THEN PRINT" "+CHR$(24)+"geringe"+CHR$(24)ELSE PRINT" geringe"
5080 call &bd19:GOTO 5040
5090 i$="":RESTORE 5580
5100 xflag=1
5110 y=8
5120 GOSUB 5360
5130 LOCATE 45,y:PRINT l$;SPC(32-LEN(l$))
5140 t$="Erneutes ausrichten":GOSUB 5490:Xflag=1
5150 i$="":RESTORE 5580
5160 LOCATE 45,y
5170 GOSUB 5200
5180 T=TIME
5190 IF TIME-T<300 and inkey$="" THEN call &bd19:goto 5190 ELSE 5650
5200 GOSUB 5360:ns=0
5210 IF INSTR(l$,CHR$(1))<>0 THEN PRINT LEFT$(l$,INSTR(l$,CHR$(1))-1);SPC(33-LEN(l$));:RETURN
5220 IF LEN(l$)=32 THEN PRINT l$:RETURN
5230 FOR x=1 TO LEN(l$)
5240 IF MID$(l$,x,1)=" "THEN ns=ns+1
5250 NEXT x
5260 fillsp=32-LEN(l$)
5270 FOR spfill=1 TO ns:sp(spfill)=fillsp\ns:NEXT
5280 IF(y MOD 2)=0 THEN FOR spfill=1 TO fillsp-ns*(fillsp\ns):sp(spfill)=sp(spfill)+1:NEXT
5290 IF(y MOD 2)=1 THEN FOR spfill=ns TO ns-(fillsp-ns*(fillsp\ns))+1 STEP-1:sp(spfill)=sp(spfill)+1:NEXT
5300 spfill=1
5310 FOR x=1 TO LEN(l$)
5320 PRINT MID$(l$,x,1);:IF MID$(l$,x,1)<>" "THEN 5340
5330 PRINT SPACE$(sp(spfill));:spfill=spfill+1
5340 NEXT x
5350 RETURN
5360 REM
5370 l$=""
5380 IF i$=""THEN READ i$
5390 s1=INSTR(i$," ")
5400 IF s1=0 THEN wlen=LEN(i$)ELSE wlen=s1-1
5410 w$=LEFT$(i$,wlen):IF xflag=0 THEN 5430
5420 IF w$="minimale"THEN w$="geringe"
5430 IF LEN(l$)+LEN(w$)>=32 THEN RETURN
5440 IF LEN(l$)>0 THEN l$=l$+" "+w$ELSE l$=w$
5450 i$=MID$(i$,wlen+2,LEN(i$)-wlen)
5460 IF INSTR(w$,"@")=0 THEN 5380
5470 l$=LEFT$(l$,INSTR(l$,"@")-1)+CHR$(1)+CHR$(13)
5480 RETURN
5490 LOCATE 1,1:PRINT CHR$(18):LOCATE(80-LEN(t$))/2,1:PRINT CHR$(24)+t$+CHR$(24):RETURN
5510 DATA "Dem Namen Schneider begegnen Sie in Deutschland und Europa auf unzâhligen Hi-Fi-Stereo-Anlagen."
5520 DATA "Und dies hat seinen guten Grund: Als deutscher Hersteller bieten wir Qualitât >Made in Germany< zu Preisen,"
5530 DATA "die sich genauso gut hären lassen wie Musik aus unseren Gerâten.@"   
5540 DATA "Mit den neuen Stereo - Farbfernsehgerâten demonstrieren wir nun, daæ får Schneider der Empfang des Fernseh - Stereotons mehr bedeutet,"
5550 DATA "als nur Einbau eines zusâtzlichen Lautsprechers. Konsequent wurde die Entwicklung dieser beiden Stereo - TV - Gerâte von Anfang an auf die Fernseh - Zukunft ausgerichtet."  
5560 DATA "Eine Reihe konstruktiver Maænahmen, der konsequente Einsatz von Microprozessoren und die Trennung der wârmeentwickelnden Leistungsstufen"   
5570 DATA "von den empfindlichen Signalstufen sorgt neben anderen Kriterien får hächste Betriebssicherheit,"
5580 DATA "Zuverlâssigkeit und minimale Stromaufnahme.@"
5590 DATA "Ihnen Gerâte zu bieten, mit denen Sie wärtlich genommen >Zukunftsmusik< empfangen,"
5600 DATA "anschliessen oder einbauen kännen, ist das Grundkonzept, mit dem wir uns hier vorstellen.@"   
5610 DATA "Sowohl das Gerât >STV 6000< mit 56-cm Bildrähre, wie auch >STV 7000< mit 67-cm Rähre" 
5620 DATA "sind mit den modernsten zur Zeit verfågbaren Prâzisions - Inline Farbbildrähren ausgestattet.@"  
5630 DATA "Die Infrarot - Fernbedienung verfågt åber alle gângigen Funktionen.@" 
5640 '
5650 MODE 0:INK 1,18,6:INK 0,6,18:BORDER 18,6:LOCATE 5,12:PRINT"VIDEO SPIELE"
5660 T=TIME
5670 I=TIME-T
5680 SPEED INK 25-(I\100),25-(I\100)
5690 IF I<2000 and inkey$="" THEN call &bd19:goto 5670
5700 IF roldem=1 THEN CALL &6A82 ELSE CALL &6A7F
5710 GOTO 350
6060 RAD:MODE 0
6070 FOR i=0 TO 13:INK i,i*2:NEXT
6080 FOR point=1 TO 4
6090 CLS
6100 FOR big=260 TO 70 STEP-10
6110 ORIGIN INT(RND*640),INT(RND*400):oi=i:i=INT(RND*13)+1
6120 IF TEST(0,0)=i OR oi=i THEN 6110
6130 ON point GOSUB 6260,6330,6310,6500
6135 MOVE 0,0:FILL i
6140 NEXT big
6150 IF point<>4 THEN CALL mcentry,point+257
6160 NEXT point
6170 '
6180 t=TIME:WHILE t+200>TIME and inkey$="":call &bd19:WEND
6190 FOR s=4 TO 2 STEP-1
6192 FOR i=0 TO 13:INK i,0:NEXT:FRAME:CALL mcentry,s
6194 FOR i=0 TO 13:INK i,i*2:NEXT
6200 t=TIME:WHILE t+400>TIME and inkey$="":call &bd19:WEND
6210 NEXT s
6220 t=TIME:WHILE t+400>TIME and inkey$="":call &bd19:WEND
6230 RETURN
6240 '
6260 MOVE 0,big\2,i
6270 FOR n=0 TO 2*PI STEP PI/8:DRAW SIN(n)*big\2,COS(n)*big\2:NEXT n
6300 RETURN
6310 MOVE big\2,big\2,i:DRAWR 0,-big:DRAWR-big,0:DRAWR 0,big:DRAWR big,0
6320 RETURN
6330 MOVE 0,big\3,i:DRAW big\2,-big\2:DRAW-big\2,-big\2:DRAW 0,big\3
6340 RETURN
6500 MOVE 0,big\2:ip=0
6510 FOR n=-4*PI TO 4*PI STEP PI/1.25
6520 px(ip)=SIN(n)*big\2:py(ip)=COS(n)*big\2
6530 DRAW px(ip),py(ip),i:IF py(ip)<0 THEN PLOTR-4*SGN(px(ip)),6:MOVE px(ip),py(ip)
6540 ip=ip+1
6550 NEXT
6560 FOR n=0 TO 4
6570 MOVE 0,0:DRAW px(n)\3,py(n)\3,-(i=0)
6580 MOVE 4,0:DRAW px(n)\3+4,py(n)\3,-(i=0)
6590 MOVE-4,0:DRAW px(n)\3-4,py(n)\3,-(i=0)
6600 NEXT:MOVE 0,0:GRAPHICS PEN i
6620 RETURN
10000 SYMBOL 255,0,0,0,0,0,&X1100110,&X1100110,0
10010 SYMBOL &E2,102,0,120,12,124,204,118,0
10020 SYMBOL &E3,198,56,108,198,198,108,56,0
10030 SYMBOL &E4,102,0,60,102,102,102,60,0
10040 SYMBOL &E5,102,0,102,102,102,102,60,0
10050 SYMBOL &E6,60,102,102,124,102,102,252,192
10060 RETURN
*/ });
