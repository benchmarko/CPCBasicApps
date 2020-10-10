/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem cribbage - Cribbage
2 rem (c) Nick Herrick 1986
3 rem https://www.cpc-power.com/index.php?page=detail&num=16579
5 rem (doc: https://en.wikipedia.org/wiki/Cribbage  https://de.wikipedia.org/wiki/Cribbage)
6 rem
10 ' CRIBBAGE ¤ Nick Herrick 1986
20 ' The Amstrad User Jul/Aug 87
30 ' This program has been RENUMbered   for ease of entering.
40 ' Therefore keep strictly to line    numbers or it won't work
50 '
60 ' ******* MAIN CONTROL LOOP ********
70 GOSUB 240 ' initialize
80 GOSUB 7830 ' title
90 GOSUB 8170 ' rules of crib
100 GOSUB 5940 ' instructions
110 GOSUB 1140 ' initial choice of deal
120 GOSUB 900 ' shuffle & deal
130 GOSUB 1340 ' number cards (deal)
140 GOSUB 1430 'your box and random computer box (level 1)
150 IF level>1 THEN GOSUB 1710 ' calculated computer box
160 GOSUB 2460 ' Redeal hand for play
170 GOSUB 1340 ' number cards again (play)
180 GOSUB 2580 ' select and print lift
190 GOSUB 3310 ' play (GOSUBs from here for all play manouvres)
200 IF cscore>=121 OR yscore>=121 THEN GOSUB 5760:GOTO 230 ' for win during play
210 GOSUB 6090 'calculate hands & box
220 IF cscore>=121 OR yscore>=121 THEN GOSUB 5760 ' for win on hand/box score
230 RESTORE 8570:GOTO 120 ' repeats main loop
240 ' ********* INITIALIZE ***********
250 MODE 1:BORDER 0:INK 0,0:INK 1,1:INK 2,6:INK 3,16:CLS
260 DIM cardno(52),card$(52),suit$(52),c1(52),c$(12),n(12)
270 club$=CHR$(226):diam$=CHR$(227):heart$=CHR$(228):spade$=CHR$(229)
280 back$=STRING$(5,186)
290 WINDOW #1,1,40,20,25:PAPER#1,0:PEN#1,3
300 cscore=0:yscore=0
310 ywin=0:cwin=0
320 SYMBOL AFTER 129
330 SYMBOL 129,0,0,0,0,0,1,3,3
340 SYMBOL 130,24,24,60,126,255,255,255,255
350 SYMBOL 131,0,0,0,0,0,128,192,192
360 SYMBOL 132,7,7,7,7,3,0,0,0
370 SYMBOL 133,255,255,255,255,219,24,24,60
380 SYMBOL 134,224,224,224,224,192,0,0,0
390 st$=CHR$(129)+CHR$(130)+CHR$(131):sb$=CHR$(132)+CHR$(133)+CHR$(134)
400 SYMBOL 135,1,3,3,7,7,7,7,7
410 SYMBOL 136,195,231,255,255,255,255,255,255
420 SYMBOL 137,128,192,192,224,224,224,224,224
430 SYMBOL 138,3,3,1,0,0,0,0,0
440 SYMBOL 139,255,255,255,255,126,60,24
450 SYMBOL 140,192,192,128,0,0,0,0,0
460 ht$=CHR$(135)+CHR$(136)+CHR$(137):hb$=CHR$(138)+CHR$(139)+CHR$(140)
470 SYMBOL 141,0,0,0,0,0,0,1,3
480 SYMBOL 142,24,24,60,126,126,255,255,255
490 SYMBOL 143,0,0,0,0,0,0,128,192
500 SYMBOL 144,3,1,0,0,0,0,0,0
510 SYMBOL 145,255,255,255,126,126,60,24,24
520 SYMBOL 146,192,128,0,0,0,0,0,0
530 dt$=CHR$(141)+CHR$(142)+CHR$(143):db$=CHR$(144)+CHR$(145)+CHR$(146)
540 SYMBOL 147,0,0,0,0,0,0,3,7
550 SYMBOL 148,60,126,255,255,255,126,189,255
560 SYMBOL 149,0,0,0,0,0,0,192,224
570 SYMBOL 150,15,15,15,15,7,3,0,0
580 SYMBOL 151,255,255,255,255,219,153,24,60
590 SYMBOL 152,240,240,240,240,224,192,0,0
600 ct$=CHR$(147)+CHR$(148)+CHR$(149):cb$=CHR$(150)+CHR$(151)+CHR$(152)
610 SYMBOL 153,27,27,8,15,5,5,5,5
620 SYMBOL 154,90,90,66,255,72,72,72,72
630 SYMBOL 155,216,216,16,240,16,16,208,16
640 SYMBOL 156,5,5,2,5,5,5,5,10
650 SYMBOL 157,72,72,164,80,80,80,80,163
660 SYMBOL 158,8,8,8,12,16,112,16,224
670 jt$=CHR$(153)+CHR$(154)+CHR$(155):jb$=CHR$(156)+CHR$(157)+CHR$(158)
680 SYMBOL 159,1,1,1,1,2,4,4,8
690 SYMBOL 160,255,239,143,7,3,153,65,65
700 SYMBOL 161,16,136,164,210,218,232,232,224
710 SYMBOL 162,8,8,28,28,28,62,63,127
720 SYMBOL 163,97,3,231,15,31,63,127,255
730 SYMBOL 165,240,248,120,188,156,208,230,143
740 qt$=CHR$(159)+CHR$(160)+CHR$(161):qb$=CHR$(162)+CHR$(163)+CHR$(165)
750 SYMBOL 166,29,16,10,15,16,22,16,16
760 SYMBOL 167,231,66,231,255,2,50,130,130
770 SYMBOL 168,184,8,80,240,168,168,168,168
780 SYMBOL 169,16,16,40,9,16,16,18,10
790 SYMBOL 170,130,194,2,226,2,2,169,168
800 SYMBOL 171,168,168,168,168,168,168,84,0
810 kt$=CHR$(166)+CHR$(167)+CHR$(168):kb$=CHR$(169)+CHR$(170)+CHR$(171)
820 SYMBOL 172,0,0,0,0,16,56,124,254
830 SYMBOL 173,254,16,56,0,0,0,0,0
840 SYMBOL 174,0,0,0,0,108,254,254,254
850 SYMBOL 175,124,56,16,0,0,0,0,0
860 SYMBOL 176,0,0,0,0,56,56,254,254
870 SYMBOL 177,254,16,56,0,0,0,0,0
880 spt$=CHR$(172):ddt$=CHR$(172):spb$=CHR$(173):htt$=CHR$(174):htb$=CHR$(175):ddb$=CHR$(175):clt$=CHR$(176):clb$=CHR$(177)
890 RETURN
900 ' ********** SHUFFLE *************
910 FOR z=1 TO 52:cardno(z)=0:NEXT z
920 BORDER 16:PAPER 3:PEN 1
930 CLS:LOCATE 6,10:PRINT "Please wait: shuffling...."
940 RANDOMIZE TIME
950 FOR z=1 TO 52
960 d=INT(RND*52+1)
970 IF cardno(d)<>0 THEN 960
980 cardno(d)=z
990 NEXT z
1000 FOR z=1 TO 52
1010 IF cardno(z)<=13 THEN suit$(z)=spade$
1020 IF cardno(z)<=26 AND cardno(z)>13 THEN suit$(z)=heart$
1030 IF cardno(z)<=39 AND cardno(z)>26 THEN suit$(z)=diam$
1040 IF cardno(z)>=40 THEN suit$(z)=club$
1050 c1(z)=cardno(z)
1060 WHILE c1(z)>13
1070 c1(z)=c1(z)-13
1080 WEND
1090 IF c1(z)=1 THEN cd$=" A" ELSE IF c1(z)=11 THEN cd$=" J" ELSE IF c1(z)=12 THEN cd$=" Q" ELSE IF c1(z)=13 THEN cd$=" K" ELSE cd$=STR$(c1(z))
1100 card$(z)=cd$+" "+suit$(z)
1110 NEXT z
1120 GOSUB 1200
1130 RETURN
1140 ' **** INITIAL CHOICE OF DEAL ****
1150 BORDER 16:PAPER 3:PEN 1:CLS
1160 LOCATE 7,12:PRINT "Do you wish to deal? (Y/N)
1170 i$=UPPER$(INKEY$):IF i$<>"N" AND i$<>"Y" THEN 1170
1180 IF I$="N" THEN deal=0 ELSE deal=1
1190 RETURN
1200 ' ************ DEAL ***************
1210 BORDER 0:PAPER 0
1220 CLS:PAPER 3
1230 FOR z=1+deal TO 11+deal STEP 2
1240 c$(z)=card$(z):n(z)=c1(z):h$=suit$(z)
1250 IF suit$(z)=heart$ OR suit$(z)=diam$ THEN p=2 ELSE p=0
1260 READ x,y
1270 IF deal=0 THEN GOSUB 5110 ELSE GOSUB 5230
1280 READ x,y
1290 IF deal=0 THEN GOSUB 5230 ELSE GOSUB 5110
1300 NEXT z
1310 box=deal:num=6
1320 IF deal=1 THEN deal=0 ELSE deal=1
1330 RETURN
1340 ' ********** NUMBER **************
1350 x=2:y=9:y1=18
1360 PAPER 0:PEN 3
1370 FOR z=1 TO num
1380 LOCATE x,y:PRINT STR$(z)
1390 LOCATE x,y1: PRINT STR$(z)
1400 x=x+6
1410 NEXT z
1420 RETURN
1430 ' ********** YOUR BOX ************
1440 IF box=1 THEN PRINT #1,"Your box" ELSE PRINT #1, "My box"
1450 INPUT #1,"Please enter, by number and separated   by a comma, your two cards for the box. ",yb1,yb2
1460 IF yb1=yb2 THEN PRINT #1,"You can't have the same card twice!":GOTO 1450
1470 IF yb1<1 OR yb1>6 OR yb2<1 OR yb2>6 THEN PRINT #1,"You've made a mistake: try again":GOTO 1450
1480 IF box=1 THEN yb1=yb1*2:yb2=yb2*2
1490 IF box=0 THEN yb1=yb1*2-1:yb2=yb2*2-1
1500 a=1
1510 FOR z=box+1 TO box+11 STEP 2
1520 IF z=yb1 OR z=yb2 THEN 1550
1530 yhnd(a)=c1(z):yhand$(a)=card$(z):ys$(a)=suit$(z)
1540 a=a+1
1550 NEXT z
1560 ybx1=c1(yb1):ybx2=c1(yb2):ybox1$=card$(yb1):ybox2$=card$(yb2):ys1$=suit$(yb1):ys2$=suit$(yb2)
1570 IF level>1 THEN RETURN
1580 ' ***** RANDOM COMPUTER BOX ******
1590 cb1=INT(RND*6+1):cb2=INT(RND*6+1)
1600 IF cb1=cb2 THEN cb2=cb2+1:IF cb2=7 THEN cb2=1
1610 IF box=1 THEN cb1=cb1*2-1:cb2=cb2*2-1
1620 IF box=0 THEN cb1=cb1*2:cb2=cb2*2
1630 a=1
1640 FOR z=2-box TO 12-box STEP 2
1650 IF z=cb1 OR z=cb2 THEN 1680
1660 chnd(a)=c1(z):chand$(a)=card$(z):cs$(a)=suit$(z)
1670 a=a+1
1680 NEXT z
1690 cbx1=c1(cb1):cbox1$=card$(cb1):cbx2=c1(cb2):cbox2$=card$(cb2):cs1$=suit$(cb1):cs2$=suit$(cb2)
1700 RETURN
1710 ' ********* COMPUTER BOX *********
1720 CLS #1:IF box=0 THEN PRINT #1,"Please wait: I'm choosing cards for my  box." ELSE PRINT #1,"Please wait: I'm selecting my rejects   for your box."
1730 a=1
1740 FOR z=2-box TO 12-box STEP 2
1750 xhnd(a)=c1(z):xhand$(a)=card$(z):xs$(a)=suit$(z)
1760 IF xhnd(a)=11 OR xhnd(a)=12 OR xhnd(a)=13 THEN xhn(a)=10 ELSE xhn(a)=xhnd(a)
1770 a=a+1
1780 NEXT z
1790 FOR z=1 TO 6:s(z)=0:NEXT z
1800 FOR z=1 TO 5
1810 FOR a=z+1 TO 6
1820 IF xhnd(a)>xhnd(z) THEN 1860
1830 t=xhnd(a):t1=xhn(a):t2$=xhand$(a):t3$=xs$(a)
1840 xhnd(a)=xhnd(z):xhn(a)=xhn(z):xhand$(a)=xhand$(z):xs$(a)=xs$(z)
1850 xhnd(z)=t:xhn(z)=t1:xhand$(z)=t2$:xs$(z)=t3$
1860 NEXT a
1870 NEXT z
1880 IF level=3 THEN 2760
1890 FOR z=1 TO 6
1900 IF xhn(z)=5 THEN s(z)=s(z)+1
1910 IF box=1 AND xhn(z)=5 THEN s(z)=s(z)+2
1920 NEXT z
1930 FOR z=1 TO 3
1940 FOR a=z+1 TO 4
1950 FOR t=a+1 TO 5
1960 FOR z1=t+1 TO 6
1970 IF xhn(z)+xhn(a)+xhn(t)+xhn(z1)=15 THEN s(z)=s(z)+1:s(a)=s(a)+1:s(t)=s(t)+1:s(z1)=s(z1)+1
1980 NEXT z1
1990 NEXT t
2000 NEXT a
2010 NEXT z
2020 FOR z=1 TO 4
2030 FOR a=z+1 TO 5
2040 FOR t=a+1 TO 6
2050 IF xhn(z)+xhn(a)+xhn(t)=15 THEN s(z)=s(z)+1:s(a)=s(a)+1:s(t)=s(t)+1
2060 NEXT t
2070 NEXT a
2080 NEXT z
2090 FOR z=1 TO 5
2100 FOR a=z+1 TO 6
2110 IF xhn(z)+xhn(a)=15 THEN s(z)=s(z)+1:s(a)=s(a)+1
2120 NEXT a
2130 NEXT z
2140 FOR z=1 TO 4
2150 FOR a=z+1 TO 5
2160 FOR t=a+1 TO 6
2170 IF xhnd(z)=xhnd(a)-1 AND xhnd(z)=xhnd(t)-2 THEN s(z)=s(z)+1:s(a)=s(a)+1:s(t)=s(t)+1
2180 NEXT t
2190 NEXT a
2200 NEXT z
2210 FOR z=1 TO 5
2220 FOR t=z+1 TO 6
2230 IF xhnd(z)=xhnd(t) THEN s(z)=s(z)+1:s(t)=s(t)+1
2240 NEXT t
2250 NEXT z
2260 cb1=0:cb2=0:z=0:a=0
2270 WHILE cb2=0
2280 FOR t=1 TO 6
2290 IF s(t)=z THEN a=t
2300 IF cb1=0 THEN cb1=a ELSE cb2=a
2310 IF cb2=cb1 THEN cb2=0
2320 NEXT t
2330 IF cb2>0 THEN 2350
2340 z=z+1
2350 WEND
2360 IF box=1 AND level=3 AND xhn(cb1)+xhn(cb2)=15 THEN s(cb1)=s(cb1)+1:s(cb2)=s(cb2)+1:GOTO 2260
2370 IF box=1 AND level=3 AND xhnd(cb1)=xhnd(cb2) THEN s(cb1)=s(cb1)+1:s(cb2)=s(cb2)+1:GOTO 2260
2380 a=1
2390 FOR z=1 TO 6
2400 IF z=cb1 OR z=cb2 THEN 2430
2410 chnd(a)=xhnd(z):cs$(a)=xs$(z):chand$(a)=xhand$(z)
2420 a=a+1
2430 NEXT z
2440 cbx1=xhnd(cb1):cbox1$=xhand$(cb1):cs1$=xs$(cb1):cbx2=xhnd(cb2):cbox2$=xhand$(cb2):cs2$=xs$(cb2)
2450 RETURN
2460 ' ****** DEAL PLAYING HANDS ******
2470 CLS:PAPER 3
2480 FOR z=1 TO 4
2490 IF ys$(z)=heart$ OR ys$(z)=diam$ THEN p=2 ELSE p=0
2500 c$(z)=yhand$(z):n(z)=yhnd(z):h$=ys$(z)
2510 READ x,y
2520 IF box=0 THEN GOSUB 5110 ELSE GOSUB 5230
2530 READ x,y
2540 IF box=0 THEN GOSUB 5230 ELSE GOSUB 5110
2550 NEXT z
2560 num=4
2570 RETURN
2580 ' ************ LIFT **************
2590 IF box=1 THEN 2660
2600 x=36:y=5:PAPER 3
2610 GOSUB 5230
2620 PRINT #1,"Your lift up of pack to select card for scoring."
2630 INPUT #1,"Choose a number (1 to 39)",ch
2640 IF ch<1 OR ch>39 THEN PRINT #1,"Wrong choice.":GOTO 2630
2650 ch=ch+12:GOTO 2680
2660 PRINT #1,"My lift."
2670 ch=INT(RND*39+1)+12
2680 lift$=card$(ch+1):lft=c1(ch+1):ls$=suit$(ch+1):h$=suit$(ch+1)
2690 IF ls$=heart$ OR ls$=diam$ THEN p=2 ELSE p=0
2700 z=1:c$(z)=lift$:n(z)=lft
2710 PAPER 3:x=36:y=5
2720 GOSUB 5110
2730 IF lft=11 AND box=1 THEN yscore=yscore+2
2740 IF lft=11 AND box=0 THEN cscore=cscore+2
2750 RETURN
2760 ' ***** EXPERT COMPUTER BOX ******
2770 FOR z=1 TO 6
2780 IF xhnd(z)=1 OR xhnd(z)=5 OR xhnd(z)=11 THEN s(z)=s(z)+1
2790 IF box=1 AND xhnd(z)=5 THEN s(z)=s(z)+6
2800 NEXT z
2810 FOR z=1 TO 3
2820 FOR a=z+1 TO 4
2830 FOR t=a+1 TO 5
2840 FOR z1=t+1 TO 6
2850 IF xhn(z)+xhn(a)+xhn(t)+xhn(z1)=15 THEN s(z)=s(z)+2:s(a)=s(a)+2:s(t)=s(t)+2:s(z1)=s(z1)+2
2860 NEXT z1
2870 NEXT t
2880 NEXT a
2890 NEXT z
2900 FOR z=1 TO 4
2910 FOR a=z+1 TO 5
2920 FOR t=a+1 TO 6
2930 IF xhn(z)+xhn(a)+xhn(t)=15 THEN s(z)=s(z)+3:s(a)=s(a)+3:s(t)=s(t)+3
2940 NEXT t
2950 NEXT a
2960 NEXT z
2970 FOR z=1 TO 5
2980 FOR a=z+1 TO 6
2990 IF box=1 AND xhn(z)+xhn(a)=15 THEN s(z)=s(z)+5:s(a)=s(a)+5
3000 IF box=0 AND xhn(z)+xhn(a)=15 THEN s(z)=s(z)+3:s(a)=s(a)+3
3010 NEXT a
3020 NEXT z
3030 FOR z=1 TO 4
3040 FOR a=z+1 TO 5
3050 FOR t=a+1 TO 6
3060 IF xhnd(z)=xhnd(a)-1 AND xhnd(z)=xhnd(t)-2 THEN s(z)=s(z)+6:s(a)=s(a)+5:s(t)=s(t)+6
3070 NEXT t
3080 NEXT a
3090 NEXT z
3100 FOR z=1 TO 3
3110 FOR a=z+1 TO 4
3120 FOR t=a+1 TO 5
3130 FOR z1=t+1 TO 6
3140 IF xhnd(z)=xhnd(a)-1 AND xhnd(z)=xhnd(t)-2 AND xhnd(z)=xhnd(z1)-3 THEN s(z)=s(z)+3:s(a)=s(a)+3:s(t)=s(t)+3:s(z1)=s(z1)+3
3150 NEXT z1
3160 NEXT t
3170 NEXT a
3180 NEXT z
3190 FOR z=1 TO 5
3200 FOR a=z+1 TO 6
3210 IF xhnd(z)=xhnd(a)-1 THEN s(z)=s(z)+1:s(a)=s(a)+1
3220 NEXT a
3230 NEXT z
3240 FOR z=1 TO 5
3250 FOR a=z+1 TO 6
3260 IF box=1 AND xhnd(z)=xhnd(a) THEN s(z)=s(z)+5:s(a)=s(a)+5
3270 IF box=0 AND xhnd(z)=xhnd(a) THEN s(z)=s(z)+3:s(a)=s(a)+3
3280 NEXT a
3290 NEXT z
3300 GOTO 2260
3310 ' ********* MAIN PLAY LOOP *******
3320 IF cscore>=121 OR yscore>=121 THEN CLS #1:GOSUB 5670:FOR t=1 TO 999:NEXT t:RETURN
3330 k=0:cplay=0:yplay=0:f1=0:f2=0:f3=0:f4=0:g1=0:g2=0:g3=0:g4=0:ff=0:gg=0:v=0
3340 FOR z=1 TO 4
3350 IF chnd(z)=11 OR chnd(z)=12 OR chnd(z)=13 THEN chn(z)=10 ELSE chn(z)=chnd(z)
3360 IF yhnd(z)=11 OR yhnd(z)=12 OR yhnd(z)=13 THEN yhn(z)=10 ELSE yhn(z)=yhnd(z)
3370 NEXT z
3380 FOR z=0 TO 8:xhnd(z)=0:NEXT z
3390 GOSUB 5650:FOR t=1 TO 999:NEXT t
3400 IF box=0 THEN GOSUB 4000 ELSE GOSUB 4290
3410 IF yscore>=121 OR cscore>=121 THEN RETURN
3420 IF k=0 THEN 3520
3430 IF box=1 THEN GOSUB 4000 ELSE GOSUB 4290
3440 IF yscore>=121 OR cscore>=121 THEN RETURN
3450 IF g4>0 AND f4>0 THEN 3950
3460 IF cplay=0 AND yplay=0 THEN 3400
3470 IF cplay>0 AND yplay=0 THEN GOSUB 4000:GOTO 3470
3480 IF yscore>=121 OR cscore>=121 THEN RETURN
3490 IF cplay=0 AND yplay>0 THEN GOSUB 4290:GOTO 3490
3500 IF yscore>=121 OR cscore>=121 THEN RETURN
3510 IF f4>0 AND g4>0 THEN 3950
3520 IF cplay>1 THEN cplay=1
3530 IF yplay>1 THEN yplay=1
3540 GOSUB 5070
3550 IF k>0 AND q=0 THEN yscore=yscore+1
3560 IF k>0 AND q=1 THEN cscore=cscore+1
3570 k=0:GOSUB 5650:FOR t=1 TO 999:NEXT t
3580 v=0
3590 FOR z=0 TO 8:xhnd(z)=0:NEXT z
3600 IF g4>0 THEN q=1
3610 IF f4>0 THEN q=0
3620 IF q=1 THEN GOSUB 4290 ELSE GOSUB 4000
3630 IF yscore>=121 OR cscore>=121 THEN RETURN
3640 IF f4>0 AND g4>0 THEN 3950
3650 IF q=0 THEN GOSUB 4290 ELSE GOSUB 4000
3660 IF yscore>=121 OR cscore>=121 THEN RETURN
3670 IF f4>0 AND g4>0 THEN 3950
3680 IF k=0 THEN 3760
3690 IF cplay=1 AND yplay=1 THEN 3650
3700 IF cplay>1 AND yplay=1 THEN GOSUB 4000:GOTO 3700
3710 IF yscore>=121 OR cscore>=121 THEN RETURN
3720 IF f4>0 AND g4>0 THEN 3950
3730 IF yplay>1 AND cplay=1 THEN GOSUB 4290:GOTO 3730
3740 IF yscore>=121 OR cscore>=121 THEN RETURN
3750 IF f4>0 AND g4>0 THEN 3950
3760 IF cplay>1 AND yplay>1 THEN GOSUB 5070
3770 IF k>0 AND q=0 THEN yscore=yscore+1
3780 IF k>0 AND q=1 THEN cscore=cscore+1
3790 k=0:GOSUB 5650:FOR t=1 TO 999:NEXT t
3800 v=0
3810 FOR z=0 TO 8:xhnd(z)=0:NEXT z
3820 IF f4>0 THEN GOSUB 4000
3830 IF yscore>=121 OR cscore>=121 THEN RETURN
3840 IF f4>0 AND g4>0 THEN 3950
3850 IF f4>0 THEN 3820
3860 IF g4>0 THEN GOSUB 4290
3870 IF yscore>=121 OR cscore>=121 THEN RETURN
3880 IF f4>0 AND g4>0 THEN 3950
3890 IF g4>0 THEN 3860
3900 IF q=0 THEN GOSUB 4000 ELSE GOSUB 4290
3910 IF yscore>=121 OR cscore>=121 THEN RETURN
3920 IF f4>0 AND g4>0 THEN 3950
3930 IF q=1 THEN GOSUB 4000 ELSE GOSUB 4290
3940 IF yscore>=121 OR cscore>=121 THEN RETURN
3950 IF k=0 THEN RETURN
3960 IF q=0 THEN yscore=yscore+1
3970 IF q=1 THEN cscore=cscore+1
3980 GOSUB 5650:FOR t=1 TO 999:NEXT t
3990 RETURN
4000 ' *********** YOUR PLAY **********
4010 IF g4>0 THEN q=0:yplay=yplay+1:RETURN
4020 v=v+1
4030 v1=v-1:v2=v-2:v3=v-3:v4=v-4
4040 IF v=1 THEN v2=0:v3=0:v4=0
4050 IF v=2 THEN v3=0:v4=0
4060 IF v=3 THEN v4=0
4070 IF k<=21 THEN 4110
4080 PRINT #1,"Can you go? (Y/N)"
4090 i$=UPPER$(INKEY$):IF i$<>"Y" AND i$<>"N" THEN 4090
4100 IF i$="N" THEN yplay=yplay+1:q=0:RETURN
4110 INPUT #1,"Please enter the number of the card you wish to play ",gg
4120 IF gg=g1 OR gg=g2 OR gg=g3 THEN PRINT #1,"You've already played it! Don't cheat":GOTO 4110
4130 IF gg<1 OR gg>4 THEN PRINT #1,"You haven't got that card: try again":GOTO 4110
4140 IF k+yhn(gg)>31 THEN PRINT #1,"You can't count":GOTO 4080
4150 GOSUB 5000
4160 IF g1=0 THEN g1=gg ELSE IF g2=0 THEN g2=gg ELSE IF g3=0 THEN g3=gg ELSE g4=gg
4170 r1=yhnd(gg):r2=xhnd(v1):r3=xhnd(v2):r4=xhnd(v3):r5=xhnd(v4)
4180 xhnd(v)=yhnd(gg)
4190 IF r1=r2 AND r1=r3 AND r1=r4 THEN yscore=yscore+12:GOTO 4240
4200 IF r1=r2 AND r1=r3 THEN yscore=yscore+6:GOTO 4240
4210 IF r1=r2 THEN yscore=yscore+2:GOTO 4240
4220 GOSUB 5300
4230 yscore=yscore+rscore
4240 k=k+yhn(gg):IF k=31 OR k=15 THEN yscore=yscore+2
4250 IF k=31 THEN yplay=yplay+1:cplay=cplay+1
4260 GOSUB 5650:FOR t=1 TO 999:NEXT t
4270 IF k=31 THEN k=0
4280 q=0:RETURN
4290 ' ******** COMPUTER PLAY *********
4300 IF f4>0 THEN q=1:cplay=cplay+1:RETURN
4310 v=v+1
4320 v1=v-1:v2=v-2:v3=v-3:v4=v-4
4330 IF v=1 THEN v2=0:v3=0:v4=0
4340 IF v=2 THEN v3=0:v4=0
4350 IF v=3 THEN v4=0
4360 f=0:ff=0:WHILE f=0 AND ff<4
4370 ff=ff+1:IF ff>4 THEN 4390
4380 IF ff=f1 OR ff=f2 OR ff=f3 OR k+chn(ff)>31 THEN 4370 ELSE f=1
4390 WEND
4400 IF f=0 THEN PRINT #1,"I can't go":cplay=cplay+1:FOR t=1 TO 600:NEXT t:q=1:RETURN
4410 r2=xhnd(v1):r3=xhnd(v2):r4=xhnd(v3):r5=xhnd(v4)
4420 f=0:ff=0:WHILE ff<4 AND f=0
4430 ff=ff+1:IF ff>4 THEN 4500
4440 IF ff=f1 OR ff=f2 OR ff=f3 OR k+chn(ff)>31 THEN 4430
4450 r1=chnd(ff)
4460 IF r1=r2 AND r1=r3 AND r1=r4 THEN cscore=cscore+12:f=1:GOTO 4500
4470 IF r1=r2 AND r1=r3 THEN cscore=cscore+6:f=1:GOTO 4500
4480 GOSUB 5300
4490 IF rscore>0 THEN cscore=cscore+rscore:f=1
4500 WEND
4510 IF f=1 THEN 4670
4520 f=0:ff=0:WHILE ff<4 AND f=0
4530 ff=ff+1:IF ff>4 THEN 4580
4540 IF ff=f1 OR ff=f2 OR ff=f3 OR k+chn(ff)>31 THEN 4530
4550 IF k+chn(ff)=15 THEN cscore=cscore+2:f=1
4560 r1=chnd(ff):IF r1=r2 THEN cscore=cscore+2:f=1
4570 IF k+chn(ff)=31 THEN cscore=cscore+2:f=1
4580 WEND
4590 IF f=1 THEN 4670
4600 IF f3>0 AND ff<5 THEN 4670
4610 IF level=3 THEN 4720
4620 t=0
4630 ff=INT(RND*4+1)
4640 t=t+1
4650 IF k=0 AND chnd(ff)=5 AND t<6 THEN 4630
4660 IF ff=f1 OR ff=f2 OR ff=f3 OR chn(ff)+k>31 THEN 4630
4670 IF f1=0 THEN f1=ff ELSE IF f2=0 THEN f2=ff ELSE IF f3=0 THEN f3=ff ELSE f4=ff
4680 xhnd(v)=chnd(ff):k=k+chn(ff)
4690 GOSUB 4930:GOSUB 5650:FOR t=1 TO 999:NEXT t
4700 IF k=31 THEN k=0:yplay=yplay+1:cplay=cplay+1
4710 q=1:RETURN
4720 ' ***** LEVEL 3 COMPUTER PLAY ****
4730 FOR z=0 TO 6:s(z)=0:NEXT z
4740 FOR z=1 TO 4
4750 IF z=f1 OR z=f2 OR z=f3 OR k+chn(z)>31 THEN s(z)=100:GOTO 4840
4760 r1=chnd(z)
4770 IF r1=r2+1 OR r1=r2+2 OR r1=r3+1 OR r1=r3+2 OR r1=r2-1 OR r1=r2-2 OR r1=r3-1 OR r1=r3-2 THEN s(z)=s(z)+4
4780 IF r1=5 THEN s(z)=s(z)+5
4790 IF k+chn(z)*2=15 THEN s(z)=s(z)+6
4800 IF k=0 AND r1>5 THEN s(z)=s(z)+2
4810 IF k+chn(z)<15 THEN s(z)=s(z)+2
4820 IF k+chn(z)=21 THEN s(z)=s(z)+3
4830 IF r1=1 THEN s(z)=s(z)+1
4840 NEXT z
4850 ff=0:a=0
4860 WHILE ff=0
4870 FOR t=1 TO 4
4880 IF s(t)=a THEN ff=t:GOTO 4910
4890 NEXT t
4900 a=a+1
4910 WEND
4920 GOTO 4670
4930 ' *** COMPUTER HAND CARD PRINT ***
4940 IF box=1 THEN y=1 ELSE y=10
4950 IF ff=1 THEN x=1 ELSE IF ff=2 THEN x=7 ELSE IF ff=3 THEN x=13 ELSE x=19
4960 GOSUB 5530
4970 IF box=1 THEN y=1 ELSE y=10
4980 x=28:z=ff:GOSUB 5600
4990 RETURN
5000 ' ***** YOUR HAND CARD PRINT *****
5010 IF box=0 THEN y=1 ELSE y=10
5020 IF gg=1 THEN x=1 ELSE IF gg=2 THEN x=7 ELSE IF gg=3 THEN x=13 ELSE x=19
5030 GOSUB 5530
5040 IF box=0 THEN y=1 ELSE y=10
5050 x=28:z=gg:GOSUB 5700
5060 RETURN
5070 ' ** PRINT BACKS FOR NEXT PLAY **
5080 x=28:y=1:GOSUB 5230
5090 y=10:GOSUB 5230
5100 RETURN
5110 ' ********** PRINT CARD *********
5120 PEN p
5130 IF n(z)<>10 THEN 5150
5140 LOCATE x,y:PRINT c$(z):GOTO 5160
5150 LOCATE x,y:PRINT c$(z);" "
5160 LOCATE x,y+1:PRINT "     "
5170 GOSUB 7110
5180 LOCATE x,y+6:PRINT "     "
5190 IF n(z)<>10 THEN 5210
5200 LOCATE x,y+7:PRINT c$(z):GOTO 5220
5210 LOCATE x,y+7:PRINT c$(z);" "
5220 RETURN
5230 ' ******** PRINT BACKS **********
5240 PEN 1
5250 FOR t=1 TO 8
5260 LOCATE x,y:PRINT back$
5270 y=y+1
5280 NEXT t
5290 RETURN
5300 ' ******** CALCULATE RUNS *******
5310 FOR z=0 TO 8:xhn(z)=0:NEXT z
5320 rscore=0:IF r3=0 THEN RETURN
5330 IF r2=0 THEN RETURN
5340 xhn(1)=r1:xhn(2)=r2:xhn(3)=r3:xhn(4)=r4:xhn(5)=r5
5350 FOR z=1 TO 4
5360 FOR a=z+1 TO 5
5370 IF xhn(a)=xhn(z) THEN xhn(a)=-5
5380 IF xhn(a)<xhn(z) THEN 5420
5390 t=xhn(a)
5400 xhn(a)=xhn(z)
5410 xhn(z)=t
5420 NEXT a
5430 NEXT z
5440 IF r5=0 THEN 5460
5450 IF xhn(1)=xhn(2)+1 AND xhn(1)=xhn(3)+2 AND xhn(1)=xhn(4)+3 AND xhn(1)=xhn(4)+3 THEN rscore=rscore+5:RETURN
5460 IF r4=0 THEN 5490
5470 IF xhn(1)=xhn(2)+1 AND xhn(1)=xhn(3)+2 AND xhn(1)=xhn(4)+3 AND r1+r2+r3+r4=xhn(1)+xhn(2)+xhn(3)+xhn(4) THEN rscore=rscore+4:RETURN
5480 IF xhn(2)=xhn(3)+1 AND xhn(2)=xhn(4)+2 AND xhn(2)=xhn(5)+3 AND r1+r2+r3+r4=xhn(2)+xhn(3)+xhn(4)+xhn(5) THEN rscore=rscore+4:RETURN
5490 IF xhn(1)=xhn(2)+1 AND xhn(1)=xhn(3)+2 AND r1+r2+r3=xhn(1)+xhn(2)+xhn(3) THEN rscore=rscore+3:RETURN
5500 IF xhn(2)=xhn(3)+1 AND xhn(2)=xhn(4)+2 AND r1+r2+r3=xhn(2)+xhn(3)+xhn(4) THEN rscore=rscore+3:RETURN
5510 IF xhn(3)=xhn(4)+1 AND xhn(3)=xhn(5)+2 AND r1+r2+r3=xhn(3)+xhn(4)+xhn(5) THEN rscore=rscore+3
5520 RETURN
5530 ' ******** DELETE CARD **********
5540 PAPER 0
5550 FOR t=1 TO 8
5560 LOCATE x,y:PRINT "     "
5570 y=y+1
5580 NEXT t
5590 RETURN
5600 ' **** PRINT COMPUTER'S PLAY ****
5610 IF cs$(z)=heart$ OR cs$(z)=diam$ THEN p=2 ELSE p=0
5620 PAPER 3:c$(z)=chand$(z):n(z)=chnd(z):h$=cs$(z)
5630 GOSUB 5110
5640 RETURN
5650 ' **** PRINT RESULTS SO FAR *****
5660 CLS #1:PRINT #1,"count=";k
5670 PRINT #1,"Your score=";yscore
5680 PRINT #1,"My score=";cscore
5690 RETURN
5700 ' ******* PRINT YOUR PLAY *******
5710 PAPER 3
5720 IF ys$(z)=heart$ OR ys$(z)=diam$ THEN p=2 ELSE p=0
5730 c$(z)=yhand$(z):n(z)=yhnd(z):h$=ys$(z)
5740 GOSUB 5110
5750 RETURN
5760 ' ************ WIN **************
5770 IF cscore>=121 THEN cwin=cwin+1
5780 IF yscore>=121 THEN ywin=ywin+1
5790 BORDER 0:PAPER 0:PEN 3:CLS
5800 PRINT:PRINT:PRINT
5810 IF cscore>=121 THEN PRINT "          HOORAY!!!  I win!"
5820 IF yscore>=121 THEN PRINT "      Congratulations, you win."
5830 PRINT:PRINT:PRINT "         You have won";ywin;"games"
5840 PRINT:PRINT "          I have won";cwin;"games"
5850 PRINT:PRINT:PRINT "    Do you want another game? (Y/N)"
5860 cscore=0:yscore=0
5870 i$=UPPER$(INKEY$):IF i$<>"N" AND i$<>"Y" THEN 5870
5880 IF i$="Y" THEN RETURN
5890 PRINT:PRINT "Thank you for a very enjoyable game.":PRINT
5900 IF cwin>ywin THEN PRINT "I am delighted to beat you. Better luck next time."
5910 IF ywin>cwin THEN PRINT "Well played. I will try harder next timewe meet."
5920 IF cwin=ywin THEN PRINT "Evens! We must meet again to see who's  better."
5930 PRINT:END
5940 ' ******* INSTRUCTIONS **********
5950 BORDER 0:PAPER 0:PEN 2
5960 CLS:PRINT:PRINT
5970 PRINT "              CRIBBAGE":PRINT:PRINT
5980 PRINT " This game follows standard six card    cribbage rules and scoring."
5990 PRINT "You have the option of the initial deal;after this the deal alternates.":PRINT
6000 PRINT " The computer shuffles and deals for youor itself. The shuffle is complete, fairand random."
6010 PRINT:PRINT " The scores and count of cards during   play are automatically tallied."
6020 PRINT:PRINT " The computer will play at three skill  levels:"
6030 PRINT "1. Beginner"
6040 PRINT "2. Experienced"
6050 PRINT "3. Expert"
6060 PRINT:INPUT "Which level, 1, 2 or 3, do you want";level
6070 IF level<1 OR level>3 THEN PRINT "You can't have that!":GOTO 6060
6080 RETURN
6090 ' ******* CALCULATE HANDS *******
6100 q=0:IF box=1 THEN GOSUB 6160 ELSE GOSUB 6220
6110 IF yscore>=121 OR cscore>=121 THEN RETURN
6120 q=1:IF box=0 THEN GOSUB 6160 ELSE GOSUB 6220
6130 IF yscore>=121 OR cscore>=121 THEN RETURN
6140 q=2:GOSUB 6280
6150 RETURN
6160 ' ******** COMPUTER HAND ********
6170 FOR z=1 TO 4
6180 xhand$(z)=chand$(z):xhnd(z)=chnd(z):xhn(z)=chn(z):xs$(z)=cs$(z)
6190 NEXT z
6200 GOSUB 6390
6210 RETURN
6220 ' ********** YOUR HAND **********
6230 FOR z=1 TO 4
6240 xhand$(z)=yhand$(z):xhnd(z)=yhnd(z):xhn(z)=yhn(z):xs$(z)=ys$(z)
6250 NEXT z
6260 GOSUB 6390
6270 RETURN
6280 ' ************* BOX *************
6290 xhand$(1)=ybox1$:xhnd(1)=ybx1:xs$(1)=ys1$
6300 IF ybx1=11 OR ybx1=12 OR ybx1=13 THEN xhn(1)=10 ELSE xhn(1)=ybx1
6310 xhand$(2)=ybox2$:xhnd(2)=ybx2:xs$(2)=ys2$
6320 IF ybx2=11 OR ybx2=12 OR ybx2=13 THEN xhn(2)=10 ELSE xhn(2)=ybx2
6330 xhand$(3)=cbox1$:xhnd(3)=cbx1:xs$(3)=cs1$
6340 IF cbx1=11 OR cbx1=12 OR cbx1=13 THEN xhn(3)=10 ELSE xhn(3)=cbx1
6350 xhand$(4)=cbox2$:xhnd(4)=cbx2:xs$(4)=cs2$
6360 IF cbx2=11 OR cbx2=12 OR cbx2=13 THEN xhn(4)=10 ELSE xhn(4)=cbx2
6370 GOSUB 6390
6380 RETURN
6390 ' ******* BOX & HAND SCORE ******
6400 rscore=0
6410 PAPER 0:CLS
6420 PAPER 3
6430 FOR z=1 TO 4
6440 c$(z)=xhand$(z):n(z)=xhnd(z):h$=xs$(z)
6450 IF xs$(z)=heart$ OR xs$(z)=diam$ THEN p=2 ELSE p=0
6460 y=5:READ x
6470 GOSUB 5110
6480 NEXT z
6490 c$(z)=lift$:n(z)=lft:x=36:y=5:h$=ls$
6500 IF ls$=heart$ OR ls$=diam$ THEN p=2 ELSE p=0
6510 RESTORE 8590:GOSUB 5110
6520 IF xs$(1)=xs$(2) AND xs$(1)=xs$(3)AND xs$(1)=xs$(4) AND xs$(1)=ls$ THEN rscore=rscore+5
6530 IF q=2 OR rscore=5 THEN 6550
6540 IF xs$(1)=xs$(2) AND xs$(1)=xs$(3)AND xs$(1)=xs$(4) THEN rscore=rscore+4
6550 xhand$(5)=lift$:xhnd(5)=lft
6560 IF lft=11 OR lft=12 OR lft=13 THEN xhn(5)=10 ELSE xhn(5)=lft
6570 FOR z=1 TO 4
6580 IF xhnd(z)=11 AND xs$(z)=ls$ THEN rscore=rscore+1
6590 NEXT z
6600 FOR z=1 TO 4
6610 FOR a=z+1 TO 5
6620 IF xhnd(a)>xhnd(z) THEN 6660
6630 t=xhnd(a)
6640 xhnd(a)=xhnd(z)
6650 xhnd(z)=t
6660 NEXT a
6670 NEXT z
6680 FOR z=1 TO 4
6690 FOR a=z+1 TO 5
6700 IF xhn(z)+xhn(a)=15 THEN rscore=rscore+2
6710 IF xhnd(z)=xhnd(a) THEN rscore=rscore+2
6720 NEXT a
6730 NEXT z
6740 k=xhn(1)+xhn(2)+xhn(3)+xhn(4)+xhn(5)
6750 IF k=15 THEN rscore=rscore+2
6760 FOR z=1 TO 5
6770 IF k-xhn(z)=15 THEN rscore=rscore+2
6780 NEXT z
6790 FOR z=1 TO 3
6800 FOR a=z+1 TO 4
6810 FOR t=a+1 TO 5
6820 IF xhn(z)+xhn(a)+xhn(t)=15 THEN rscore=rscore+2
6830 NEXT t
6840 NEXT a
6850 NEXT z
6860 IF xhnd(1)=xhnd(2)-1 AND xhnd(1)=xhnd(3)-2 AND xhnd(1)=xhnd(4)-3 AND xhnd(1)=xhnd(5)-4 THEN rscore=rscore+5:GOTO 7040
6870 f=0:FOR z=1 TO 2
6880 FOR a=z+1 TO 3
6890 FOR t=a+1 TO 4
6900 FOR z1=t+1 TO 5
6910 IF xhnd(z)=xhnd(a)-1 AND xhnd(z)=xhnd(t)-2 AND xhnd(z)=xhnd(z1)-3 THEN rscore=rscore+4:f=1
6920 NEXT z1
6930 NEXT t
6940 NEXT a
6950 NEXT z
6960 IF f=1 THEN 7040
6970 FOR z=1 TO 3
6980 FOR a=z+1 TO 4
6990 FOR t=a+1 TO 5
7000 IF xhnd(z)=xhnd(a)-1 AND xhnd(z)=xhnd(t)-2 THEN rscore=rscore+3
7010 NEXT t
7020 NEXT a
7030 NEXT z
7040 IF (q=0 AND box=0) OR (q=1 AND box=1) THEN yscore=yscore+rscore:CLS #1:PRINT #1,"Your hand score=";rscore
7050 IF (q=0 AND box=1) OR (q=1 AND box=0) THEN cscore=cscore+rscore:CLS #1:PRINT #1,"My hand score=";rscore
7060 IF q=2 AND box=0 THEN cscore=cscore+rscore:CLS #1:PRINT #1,"My box score=";rscore
7070 IF q=2 AND box=1 THEN yscore=yscore+rscore:CLS #1:PRINT #1,"Your box score=";rscore
7080 GOSUB 5670
7090 FOR t=1 TO 8000:NEXT t
7100 RETURN
7110 ' **** PRINT INDIVIDUAL CARDS ****
7120 IF n(z)=1 OR n(z)=11 OR n(z)=12 OR n(z)=13 THEN 7710
7130 IF h$=spade$ THEN pipt$=spt$:pipb$=spb$
7140 IF h$=heart$ THEN pipt$=htt$:pipb$=htb$
7150 IF h$=diam$ THEN pipt$=ddt$:pipb$=ddb$
7160 IF h$=club$ THEN pipt$=clt$:pipb$=clb$
7170 IF n(z)=2 THEN 7260
7180 IF n(z)=3 THEN 7310
7190 IF n(z)=4 THEN 7360
7200 IF n(z)=5 THEN 7410
7210 IF n(z)=6 THEN 7460
7220 IF n(z)=7 THEN 7510
7230 IF n(z)=8 THEN 7560
7240 IF n(z)=9 THEN 7610
7250 IF n(z)=10 THEN 7660
7260 LOCATE x,y+2:PRINT "  ";h$;"  "
7270 LOCATE x,y+3:PRINT "     "
7280 LOCATE x,y+4:PRINT "     "
7290 LOCATE x,y+5:PRINT "  ";h$;"  "
7300 RETURN
7310 LOCATE x,y+2:PRINT "  ";h$;"  "
7320 LOCATE x,y+3:PRINT "  ";pipt$;"  "
7330 LOCATE x,y+4:PRINT "  ";pipb$;"  "
7340 LOCATE x,y+5:PRINT "  ";h$;"  "
7350 RETURN
7360 LOCATE x,y+2:PRINT " ";h$;" ";h$;" "
7370 LOCATE x,y+3:PRINT "     "
7380 LOCATE x,y+4:PRINT "     "
7390 LOCATE x,y+5:PRINT " ";h$;" ";h$;" "
7400 RETURN
7410 LOCATE x,y+2:PRINT " ";h$;" ";h$;" "
7420 LOCATE x,y+3:PRINT "  ";pipt$;"  "
7430 LOCATE x,y+4:PRINT "  ";pipb$;"  "
7440 LOCATE x,y+5:PRINT " ";h$;" ";h$;" "
7450 RETURN
7460 LOCATE x,y+2:PRINT " ";h$;" ";h$;" "
7470 LOCATE x,y+3:PRINT " ";pipt$;" ";pipt$;" "
7480 LOCATE x,y+4:PRINT " ";pipb$;" ";pipb$;" "
7490 LOCATE x,y+5:PRINT " ";h$;" ";h$;" "
7500 RETURN
7510 LOCATE x,y+2:PRINT " ";h$;pipt$;h$;" "
7520 LOCATE x,y+3:PRINT " ";pipt$;pipb$;pipt$;" "
7530 LOCATE x,y+4:PRINT " ";pipb$;" ";pipb$;" "
7540 LOCATE x,y+5:PRINT " ";h$;" ";h$;" "
7550 RETURN
7560 LOCATE x,y+2:PRINT " ";h$;pipt$;h$;" "
7570 LOCATE x,y+3:PRINT " ";pipt$;pipb$;pipt$;" "
7580 LOCATE x,y+4:PRINT " ";pipb$;pipt$;pipb$;" "
7590 LOCATE x,y+5:PRINT " ";h$;pipb$;h$;" "
7600 RETURN
7610 LOCATE x,y+2:PRINT " ";h$;" ";h$;" "
7620 LOCATE x,y+3:PRINT " ";h$;pipt$;h$;" "
7630 LOCATE x,y+4:PRINT " ";h$;pipb$;h$;" "
7640 LOCATE x,y+5:PRINT " ";h$;" ";h$;" "
7650 RETURN
7660 LOCATE x,y+2:PRINT " ";h$;pipt$;h$;" "
7670 LOCATE x,y+3:PRINT " ";h$;pipb$;h$;" "
7680 LOCATE x,y+4:PRINT " ";h$;pipt$;h$;" "
7690 LOCATE x,y+5:PRINT " ";h$;pipb$;h$;" "
7700 RETURN
7710 IF n(z)=1 AND h$=spade$ THEN xt$=st$:xb$=sb$
7720 IF n(z)=1 AND h$=heart$ THEN xt$=ht$:xb$=hb$
7730 IF n(z)=1 AND h$=diam$ THEN xt$=dt$:xb$=db$
7740 IF n(z)=1 AND h$=club$ THEN xt$=ct$:xb$=cb$
7750 IF n(z)=11 THEN xt$=jt$:xb$=jb$
7760 IF n(z)=12 THEN xt$=qt$:xb$=qb$
7770 IF n(z)=13 THEN xt$=kt$:xb$=kb$
7780 LOCATE x,y+2:PRINT "     "
7790 LOCATE x,y+3:PRINT " ";xt$;" "
7800 LOCATE x,y+4:PRINT " ";xb$;" "
7810 LOCATE x,y+5:PRINT "     "
7820 RETURN
7830 ' *********** TITLE *************
7840 BORDER 0:PAPER 0:CLS
7850 PAPER 3
7860 PEN 2:PRINT " "+heart$+heart$+"  ";:PEN 0:PRINT spade$+spade$+spade$+"  ";:PEN 2:PRINT diam$+diam$+diam$+"  ";:PEN 0:PRINT club$+club$+club$+"  ";'1 L
7870 PEN 2:PRINT heart$+heart$+heart$+"    ";:PEN 0:PRINT spade$+"    ";:PEN 2:PRINT diam$+diam$+"  ";:PEN 0:PRINT club$+club$+club$+club$;'1 R
7880 PEN 2:PRINT heart$+"  "+heart$+" ";:PEN 0:PRINT spade$+"  "+spade$+"  ";:PEN 2:PRINT diam$+"   ";:PEN 0:PRINT club$+"  "+club$+" ";' 2 L
7890 PEN 2:PRINT heart$+"  "+heart$+"  ";:PEN 0:PRINT spade$+" "+spade$+"  ";:PEN 2: PRINT diam$+"  "+diam$+" ";:PEN 0:PRINT club$+"   ";'2 R
7900 PEN 2:PRINT heart$+"    ";:PEN 0:PRINT spade$+"  "+spade$+"  ";:PEN 2:PRINT diam$+"   ";:PEN 0:PRINT club$+"  "+club$+" ";' 3 L
7910 PEN 2:PRINT heart$+"  "+heart$+" ";:PEN 0:PRINT spade$+"   "+spade$+" ";:PEN 2: PRINT diam$+"    ";:PEN 0:PRINT club$+"   "; '3 R
7920 PEN 2:PRINT heart$+"    ";:PEN 0:PRINT spade$+spade$+spade$+"   ";:PEN 2:PRINT diam$+"   ";:PEN 0:PRINT club$+club$+club$+"  "; ' 4 L
7930 PEN 2:PRINT heart$+heart$+heart$+"  ";:PEN 0:PRINT spade$+spade$+spade$+spade$+spade$+" ";:PEN 2:PRINT diam$+"    ";:PEN 0:PRINT club$+club$+club$+club$;' 4 R
7940 PEN 2:PRINT heart$+"    ";:PEN 0:PRINT spade$+spade$+"    ";:PEN 2:PRINT diam$+"   ";:PEN 0:PRINT club$+"  "+club$+" ";' 5 L
7950 PEN 2:PRINT heart$+"  "+heart$+" ";:PEN 0:PRINT spade$+"   "+spade$+" ";:PEN 2:PRINT diam$+" "+diam$+diam$+" ";:PEN 0:PRINT club$+"   ";' 5 R
7960 PEN 2:PRINT heart$+"  "+heart$+" ";:PEN 0:PRINT spade$+" "+spade$+"   ";:PEN 2:PRINT diam$+"   ";:PEN 0:PRINT club$+"  "+club$+" ";' 6 L
7970 PEN 2:PRINT heart$+"  "+heart$+" ";:PEN 0:PRINT spade$+"   "+spade$+" ";:PEN 2:PRINT diam$+"  "+diam$+" ";:PEN 0:PRINT club$+"   ";' 6 R
7980 PEN 2:PRINT " "+heart$+heart$+"  ";:PEN 0:PRINT spade$+"  "+spade$+" ";:PEN 2:PRINT diam$+diam$+diam$+"  ";:PEN 0:PRINT club$+club$+club$+"  ";' 7 L
7990 PEN 2:PRINT heart$+heart$+heart$+"  ";:PEN 0:PRINT spade$+"   "+spade$+"  ";:PEN 2:PRINT diam$+diam$+"  ";:PEN 0:PRINT club$+club$+club$+club$ '7 R
8000 PAPER 0:PEN 2
8010 PRINT "         By Nick Herrick ¤ 1986"
8020 c$(1)=" A "+spade$:n(1)=1:xs$(1)=spade$
8030 c$(2)=" J "+club$:n(2)=11:xs$(2)=club$
8040 c$(3)=" 4 "+diam$:n(3)=4:xs$(3)=diam$
8050 c$(4)=" K "+spade$:n(4)=13:xs$(4)=spade$
8060 c$(5)=" A "+club$:n(5)=1:xs$(5)=club$
8070 c$(6)=" Q "+heart$:n(6)=12:xs$(6)=heart$
8080 PAPER 3
8090 FOR z=1 TO 6
8100 IF xs$(z)=diam$ OR xs$(z)=heart$ THEN p=2 ELSE p=0
8110 h$=xs$(z):y=11:READ x
8120 GOSUB 5110
8130 NEXT z
8140 PAPER 0:PRINT:PRINT:PRINT:PRINT "         PRESS ANY KEY TO PLAY"
8150 WHILE INKEY$="":WEND
8160 RETURN
8170 ' ********** RULES **************
8180 CLS:LOCATE 1,12:PRINT "Do you want instructions on how to play cribbage? (Y/N)"
8190 i$=UPPER$(INKEY$):IF i$<>"Y" AND i$<>"N" THEN 8190
8200 IF i$="N" THEN RETURN
8210 CLS:PRINT:PRINT:PRINT "        RULES OF CRIBBAGE":PRINT
8220 PRINT " 1. The pack is shuffled and six cards  are dealt to each player."
8230 PRINT:PRINT " 2. Each player has to choose two cards to put into the crib or 'box', which at the end of play counts as an extra      scoring hand for the dealer. Much of theskill of playing cribbage lies in       selecting the box."
8240 PRINT:PRINT" 3. The non-dealer then lifts part of   the remaining pack. The dealer then     turns over the top card of the remainderThis is NOT used in play, but counts    towards the hand score."
8250 PRINT:PRINT:PRINT "     Press any key to continue"
8260 WHILE INKEY$="":WEND
8270 CLS:PRINT " 4. The hands are then played: each     hand is kept separate for later scoring.Non dealer leads. During play scoring   combinations are scored and a running   total of the count of the cards is kept.";
8280 PRINT " This count must not exceed 31 and, if  you can play, you must. If you get      exactly 31 you score two points; if you play 'last card' under 31 you score one point."
8290 PRINT " If the player cannot go in turn the    other player goes if he/she can and goeson playing until 31 is reached or she/heruns out of cards."
8300 PRINT " After 31 (or nearest) is reached the   last to play leads again (or the player with cards left) until all cards are    played. After 31 the cards are turned   over and the count starts from 0 again."
8310 PRINT:PRINT "5. Scoring: press any key to continue."
8320 WHILE INKEY$="":WEND
8330 CLS:PRINT"            SCORE"
8340 PRINT "1. Ace always counts as one. Cards countpip value; Jack, Queen and King count   10 in scoring 'fifteens' otherwise as   11, 12 and 13."
8350 PRINT:PRINT "2. Score 'fifteens': ALL combinations ofcards adding up to 15 score 2 points,   e.g. 10, J and 5 count 4 points: two    points for 10 and 5, 2 points for J and 5. Another 5 would score again twice    totalling 8 for 'fifteens'."
8360 PRINT " Any number of cards may be used to     score 'fifteen'."
8370 PRINT:PRINT "3. Likewise all combinations of pairs   score 2 points. This means three of a   kind scores 6 and 4 of a kind scores 12.Court cards DO NOT equal 10 for this."
8380 PRINT:PRINT "4. Runs: any three or more cards in     sequence score one for each card. Yet   again all combinations count."
8390 PRINT:PRINT "    Press any key to continue"
8400 WHILE INKEY$="":WEND
8410 CLS:PRINT "5. Bonus of 'One for his nob' is scored by any hand containing the Jack of the  same suit as the card exposed by the    lift of pack; 'Two for his heels' is    scored by dealer if Jack exposed."
8420 PRINT:PRINT "6. During play the score counts on cardsplayed. Thus if the computer plays 8 andyou play 7 you score 2 for 'fifteen'."
8430 PRINT " Runs count, but the order of play does not; e.g. cards as follows count as run for last player: 2,4,A,3 who scores 4   points."
8440 PRINT:PRINT "7. After play the hands are scored in   the same manner ('One for his nob' is   scored now). The turned up card is now  used to add to the score."
8450 PRINT:PRINT "8. The game is won by the first player  to reach 121 points."
8460 PRINT:PRINT"    Press any key to continue"
8470 WHILE INKEY$="":WEND
8480 CLS:PRINT " Non dealers hand is scored first: if   this gives him game in a closely fought battle she/he wins! The dealer then     scores his/her hand and then the 'box'  as an extra hand."
8490 PRINT:PRINT " If all 4 cards in hand are the same    suit then score 4 points. If the turn upis also the same suit 5 points are      scored. In the box all 5 cards must be  the same suit to score a flush."
8500 PRINT:PRINT " The computer handles all dealing,      counting and scoring in this game. It   also plays its hand. It does not cheat  or 'know' what cards you have."
8510 PRINT " When non dealer you will be asked to   lift the pack by selecting a number: thecomputer exposes the next card in the   pack in the correct way."
8520 PRINT:PRINT "  Phew! That's a lot to take in. Do you want to read it again? (Y/N)"
8530 i$=UPPER$(INKEY$):IF i$<>"N" AND i$<>"Y" THEN 8530
8540 IF i$="Y" THEN 8210
8550 RETURN
8560 DATA 3,9,15,21,27,33
8570 DATA 1,1,1,10,7,1,7,10,13,1,13,10,19,1,19,10,25,1,25,10,31,1,31,10
8580 DATA 1,1,1,10,7,1,7,10,13,1,13,10,19,1,19,10
8590 DATA 1,7,13,19
*/ });
