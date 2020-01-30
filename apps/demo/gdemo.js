/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem gdemo - Graphics Demo (Grafik Demo)
2 rem
3 rem Modifications: some delays; press key to go back to menu (or ESC); converted MC code to BASIC for demo B-F,J
4 rem
100 REM Grafik Demo
110 CALL &BBFF:CALL &BB4E:PRINT"Moment ...":CLEAR
120 ON BREAK GOSUB 110
130 CLS
140 PRINT TAB(12)"Grafik - Demo"
150 PRINT:PRINT"A ... Message
160 PRINT:PRINT"B ... Diamant
170 PRINT:PRINT"C ... Windows
180 PRINT:PRINT"D ... Ball
190 PRINT:PRINT"E ... Transformation
200 PRINT:PRINT"F ... Men
210 PRINT:PRINT"G ... Blinker
220 PRINT:PRINT"H ... Herz
230 PRINT:PRINT"I ... Wirbel
240 PRINT:PRINT"J ... Pac-Man
250 PRINT:PRINT"K ... R2D2
260 PRINT"L ... Ende
270 t$=INKEY$:t$=UPPER$(t$):IF t$<"A" OR t$>"L" THEN 270
280 IF t$="L" THEN MODE 2:PRINT"Bye.":END
290 ON ASC(t$)-64 GOTO 330,410,610,690,770,860,940,1000,1050,1100,1180
300 'Spritedaten:
310 DATA 33,0,192,1,0,64,17,124,102,237,176,201,254,2,192,221,102,1,221,110,0,221,86,3,221,94,2,6,8,197,62,5,229,213,1,10,0,237,176,1,70,0,9,235,9,235,61,32,241,225,209,1,0,8,9,235,9,193,16,225,201
320 '
329 'Message
330 MODE 1:DEG:TAG:ORIGIN 200,200
340 INK 0,0:INK 1,0:INK 2,0:INK 3,0:PAPER 0:BORDER 0
350 FOR lp=1 TO 360 STEP 10:col=col+1:IF col>3 THEN col=1   
360 MOVE 100*COS(lp),100*SIN(lp),col
370 PRINT"MESSAGE";:NEXT lp
380 INK 1,26:call &bd19:INK 1,0:INK 2,26:call &bd19:INK 2,0
390 INK 3,26:call &bd19:INK 3,0:if inkey$="" then GOTO 380 else run
400 '
409 'Diamant
410 INK 11,26:FOR t=0 TO 15:INK t,t:NEXT:INK 11,26
420 '
430 MODE 0:FOR r=1 TO 20:FOR e=10 TO 5 STEP -2
440 FOR w=1 TO 3:MOVE -100+RND*640,1+RND*400
450 FOR q=1 TO 10:PLOTR e*w,0,q:NEXT q,w,e,r
460 '
470 coltri=1:FOR r=0 TO 90 STEP 9
480 FOR t=0 TO 360 STEP 90:DEG
490 MOVE 320+200*COS(t+r),200+100*SIN(t+r)
500 DRAW 320+200*COS(t+90+r),200+100*SIN(t+90+r),coltri
510 DRAW 320,0:MOVE 320+200*COS(t+r),200+100*SIN(t+r)
520 DRAW 320+150*COS(t+r),300+75*SIN(t+r)
530 DRAW 320+150*COS(t+r+90),300+75*SIN(t+r+90):NEXT
540 '
550 coltri=coltri+1
560 IF coltri>10 THEN coltri=1
570 NEXT:coltri=26
580 FOR t=1 TO 10:INK t,coltri:INK t-1,0
590 t2!=time+10:while time<t2!:CALL &BD19:wend:INK 10,0:NEXT t:if inkey$="" then GOTO 580 else run
600 '
609 'Windows
610 c.h=5:c.w=10:'MEMORY 8999:RESTORE 620:FOR a=9000 TO 9060:READ b:POKE a,b:NEXT
620 DATA 33,0,192,1,0,64,17,28,37,237,176,201,254,2,192,221,102,1,221,110,0,221,86,3,221,94,2,6,8,197,62,5,229,213,1,10,0,237,176,1,70,0,9,235,9,235,61,32,241,225,209,1,0,8,9,235,9,193,16,225,201  
630 MODE 1:INK 0,0:BORDER 0:INK 1,6:FOR a=0 TO 640 STEP 20:PLOT a,0:DRAW 0,320-a:PLOT a,400:DRAW 0,a:PLOT 640-a,0:DRAW 640,320-a:PLOT 640-a,400:DRAW 640,a:PLOT 0,a:DRAW 320,200:DRAW 640,a:PLOT a,0:DRAW 320,200:DRAW a,400:NEXT
635 c.d=9500:c.s=49152:gosub 1700: 'CALL 9000:POKE 9008,101
638 CLS
639 call &bd19
640 INK 2,2:FOR a=0 TO 640 STEP 12:PLOT a,0,2:DRAWR 0,400:DRAW 640 -a,0:PLOT 0,a:DRAWR 640,0:DRAW 0,400-a:NEXT
645 c.d=25884:c.s=49152:gosub 1700: 'CALL 9000
650 DIM d(39):FOR a=0 TO 7:FOR b=0 TO 4:d(a*5+b)=9500+a*10+B*400:NEXT B,A
660 FOR P=0 TO 1:FOR A=39 TO 1 STEP -1:FOR B=0 TO 39
662 c.d=D(B)+39652:c.s=D(B)+P*16384:gosub 2200:call &bd19: 'CALL 9012,D(B)+39652,D(B)+P*16384
664 NEXT
665 call &bd19
666 FOR B=0 TO 39 STEP A
667 IF B>0 OR A<10 THEN c.d=D(B)+39652:c.s=D(B)-(P-1)*16384:gosub 2200:call &bd19: 'CALL 9012,D(B)+39652,D(B)-(P-1)*16384
670 NEXT B,A,P:INK 1,RND*26+1:INK 2,RND*26+1
672 call &bd19
675 if inkey$="" then GOTO 660 else run
679 '
680 'Ball (Grafik 3)
690 c.h=5:c.w=10:MEMORY 26174:RESTORE 310:FOR a=26175 TO 26235:READ b:POKE a,b:NEXT:INK 0,2:BORDER 1
700 MODE 1:INK 1,6:INK 2,15:INK 3,1:d=0:FOR a=0 TO 560 STEP 80:FOR b=320 TO 0 STEP -80:ORIGIN a,b,a,a+79,b,b+79:FOR c=0 TO PI/2 STEP 0.05:x=SIN(c)*d:y=COS(c)*d:PLOT x+40,y+40,1:DRAWR -2*x,0:DRAWR x*(PI/2-c),0,2:PLOT x+40,40-y,1:DRAWR -2*x,0:NEXT:d=d+1
710 NEXT b,a
715 c.d=26236:c.s=49152:gosub 1700: 'CALL 26175
717 PAPER 3:CLS
720 LOCATE 1,9:PRINT"Sicht von  oben     /    unten":DIM d(39):FOR a=0 TO 7:FOR b=0 TO 4:d(a*5+b)=26236+a*10+b*400:NEXT b,a
730 FOR c=0 TO 39 STEP 4:FOR a=0 TO 39-c:GOSUB 740:NEXT
732 if inkey$<>"" then run
733 FOR a=39-c TO 0 STEP -1:GOSUB 740:NEXT a,c: t!=time+2000/3:while time<t! and inkey$="":wend:'FOR b=0 TO 2000:NEXT
735 if inkey$="" then GOTO 730 else run
737 '
740 CALL &BD19
742 c.d=49972:c.s=d(a):gosub 2200:c.d=50002:c.s=d(39-a):gosub 2200: 'CALL 26187,49972,d(a):CALL 26187,50002,d(39-a)
744 t!=time+10/3:while time<t! and inkey$="":wend:'FOR b=0 TO 10:NEXT
746 RETURN
750 '
760 'Transformation (Grafik 4)
770 c.h=5:c.w=10:MEMORY 26174:RESTORE 310:FOR a=26175 TO 26235:READ b:POKE a,b:NEXT
780 MODE 1:CALL &BC02:FOR a=1 TO 70 STEP 2:PLOT 34-a/2,400-a,1:DRAWR a,0:DRAWR a/8,a/6,2:NEXT
790 FOR a=0 TO PI/2 STEP 0.05:x=SIN(a)*38:y=COS(a)*38:PLOT x+120,y+360,2:DRAWR -2*x,0:DRAWR x*(PI/2-a),0,3:PLOT x+120,360-y,2:DRAWR -2*x,0:NEXT
800 DIM d(31):FOR a=0 TO 7:FOR b=1 TO 4:d(a*4+b-1)=26236+a*10+b*400:NEXT b,a
810 c.d=49552:c.s=49152:gosub 2200: 'CALL 26187,49552,49152
815 p=0:FOR a=0 TO 580 STEP 80:FOR b=240 TO 0 STEP -80:FOR c=0 TO 49
820 IF b>0 OR a<560 THEN x=INT(RND*80)+1:y=INT(RND*80)+1:IF TEST(x+160,y+320)=1 THEN 820 ELSE PLOT x+160,y+320,1:PLOT a+x,b+y,TEST(x+80,y+320):NEXT: c.d=d(p+1)+22916:c.s=d(p)+22916:gosub 2200: p=p+1 'CALL 26187,d(p+1)+22916,d(p)+22916
830 NEXT b,a
835 c.d=26236:c.s=49152:gosub 1700: 'CALL 26175
836 CLS
840 c.d=49982:c.s=26236:gosub 2200:c.d=49992:c.s=26246:gosub 2200: 'CALL 26187,49982,26236:CALL 26187,49992,26246
842 t!=time+620:while time<t! and inkey$="":wend: 'FOR b=0 TO 2000:NEXT
843 FOR a=0 TO 31:CALL &BD19
844 c.d=49982:c.s=d(a):gosub 2200:c.d=49992:c.s=d(31-a):gosub 2200: 'CALL 26187,49982,d(a):CALL 26187,49992,d(31-a)
846 NEXT a
847 c.d=49982:c.s=26246:gosub 2200:c.d=49992:c.s=26236:gosub 2200: 'CALL 26187,49982,26246:CALL 26187,49992,26236
848 t!=time+620:while time<t! and inkey$="":wend: 'FOR b=0 TO 2000:NEXT
849 if inkey$="" then GOTO 840 else run
850 '
851 'Men
860 c.h=5:c.w=10:MEMORY 26174:RESTORE 310:FOR a=26175 TO 26235:READ b:POKE a,b:NEXT:INK 0,26:BORDER 26
870 MODE 1:INK 1,0:INK 2,6:DIM d(39):FOR a=0 TO 7:FOR b=0 TO 4:d(a*5+b)=26236+a*10+b*400:NEXT b,a:z=0:ORIGIN 560,0,560,640,80,0:DEG:FOR a=90 TO 270 STEP 4.51
880 b=360-a:c=(a-90)*1.5:d=270-c:CLG:PLOT 38,40,1:DRAWR SIN(a)*14,COS(a)*14:DRAWR SIN(c)*18,COS(c)*18:DRAWR SIN(c+90)*10,COS(c+90)*10:PLOT 38,40,2:DRAWR SIN(b)*14,COS(b)*14:DRAWR SIN(d)*18,COS(d)*18:DRAWR SIN(d+90)*10,COS(d+90)*10
890 PLOT 38,40:DRAWR 0,32:TAG:PLOT 34,78:PRINT CHR$(225);:TAGOFF:PLOT 38,60,1:DRAWR SIN(a)*16,COS(a)*16:DRAWR SIN(c+180)*16,COS(c+180)*16:PLOT 38,60,2:DRAWR SIN(b*16),COS(b*16):DRAWR SIN(d+180)*16,COS(d+180)*16
895 c.d=d(z)+22916:c.s=d(39)+22916:gosub 2200: 'CALL 26187,d(z)+22916,d(39)+22916
900 z=z+1:NEXT
905 c.d=26236:c.s=49152:gosub 1700: 'CALL 26175
908 CLS
909 'c.h=5:c.w=10
910 FOR a=0 TO 39:GOSUB 920:NEXT:FOR a=39 TO 0 STEP -1:GOSUB 920:NEXT:if inkey$="" then GOTO 910 else run
920 FOR b=0 TO 20 STEP 10:
925 c.d=50782+b-z:c.s=d(a):gosub 2200: 'CALL 26187,50782+b-z,d(a)
926 call &bd19
928 NEXT:z=z+0.4+1630*(z>1630):RETURN
929 '
930 'Blinker
940 MODE 0:FOR a=0 TO 15:INK a,a:NEXT:BORDER 0
950 FOR a=0 TO 640 STEP 8:PLOT 0,a,p:DRAWR 640,0:PLOT a,0:DRAWR 0,400:p=p+1+15*(p=15):NEXT
960 DEG:FOR a=0 TO 360:x=COS(a)*140:y=SIN(a)*140:PLOT y+320,x+200,0:DRAWR x,y:PLOT 320-x,y+200:DRAWR -y,x:NEXT
970 FOR a=0 TO 360 STEP 5:x=COS(a)*140:y=SIN(a)*140:PLOT y+320,x+200,p:DRAWR x,y:PLOT 320-x,y+200:DRAWR -y,x:p=p+1+15*(p=15):NEXT
980 x=INT(RND*26)+1:FOR a=1 TO 15:INK a,x:CALL &BD19:INK a,27-x:NEXT:if inkey$="" then GOTO 980 else run
989 '
990 'Herz
1000 MODE 0:INK 0,0:BORDER 0:FOR a=1 TO 14:INK a,a:NEXT:INK a,6
1010 FOR c=1 TO 15:FOR a=0 TO PI/1.7 STEP PI/140:x=SIN(a)*(80-c*4):y=COS(a)*(80-c*4)+236-c*4:PLOT x+240+c*4,y,c:DRAWR -2*x,0:PLOT x+400-c*4,y:DRAWR -2*x,0:NEXT
1020 FOR a=0 TO 158-c*8 STEP 2:PLOT a+162+c*8,218-c*3,c:DRAWR 0,-a*1.3:PLOT 478-c*8-a,218-c*3:DRAWR 0,-a*1.3:NEXT a,c
1030 FOR a=1 TO 14:INK a,6:CALL &BD19:INK a,0:NEXT:FOR a=14 TO 1 STEP -1:INK a,0:CALL &BD19:INK a,6:NEXT:if inkey$="" then GOTO 1030 else run
1039 '
1040 'Wirbel
1050 FOR a=0 TO 15:INK a,a:NEXT
1060 RANDOMIZE 10:MODE 0:INK 0,0:BORDER 0:INK 15,13:INK 14,26
1070 FOR a=1 TO 200:PLOT RND*640,RND*400,14:NEXT:p=1:FOR c=0 TO 2:FOR a=c*0.05 TO 2*PI+c*0.05 STEP 0.2:x=SIN(a):y=COS(a):PLOT 320,200:FOR b=1 TO 18+c*8 STEP 0.5:DRAWR x*b/(c+1),y*b/(c+1),p:p=p+1+13*(p=13):NEXT b,a,c
1080 FOR b=0 TO 50:FOR a=1 TO 13:INK a,26:CALL &BD19:INK a,0:NEXT a,b
1081 if inkey$<>"" then run
1082 FOR b=0 TO 50:FOR a=13 TO 1 STEP -1:INK a,26:CALL &BD19:INK a,0:NEXT a,b
1084 if inkey$="" then GOTO 1080 else run
1089 '
1090 'Pac-Man
1100 MEMORY 26174:RESTORE 1110:FOR a=26175 TO 26235:READ b:POKE a,b:NEXT
1110 DATA 33,0,192,1,0,64,17,124,102,237,176,201,254,2,192,221,102,1,221,110,0,221,86,3,221,94,2,6,8,197,62,10,229,213,1,20,0,237,176,1,60,0,9,235,9,235,61,32,241,225,209,1,0,8,9,235,9,193,16,225,201
1120 d=0:MODE 1:INK 0,0:INK 1,24:BORDER 0:FOR b=240 TO 80 STEP -160:FOR a=0 TO 480 STEP 160:p=0:ORIGIN a,b,a,a+159,b,b+159:FOR c=0 TO PI STEP 0.03:x=SIN(c)*60:PLOT x+80,COS(c)*60+80,1:DRAWR -2*x,0
1130 NEXT:FOR c=0 TO PI STEP 0.1:x=SIN(c)*8:PLOT x+60,COS(c)*12+100,0:DRAWR -2*x,0:NEXT:d=d+0.15:FOR e=0.6+d TO 3-d STEP 0.012:PLOT 80,80:DRAWR SIN(e)*60,COS(e)*60:NEXT:NEXT a,b
1135 c.d=26236:c.s=49152:gosub 1700:'CALL 26175
1138 CLS
1139 c.h=10:c.w=20
1140 DIM d(7):FOR a=0 TO 1:FOR b=0 TO 3:d(a*4+b)=26236+a*800+b*20:NEXT b,a:z=0
1150 FOR a=0 TO 7:GOSUB 1160:NEXT:FOR a=7 TO 0 STEP -1:GOSUB 1160:NEXT:if inkey$="" then GOTO 1150 else run
1160 c.d=49152+z:c.s=d(a):gosub 2200 :'CALL 26187,49152+z,d(a)
1165 CALL &BD19:CALL &BD19:z=z+1+1000*(z=999):RETURN
1169 '
1170 ' r2-d2
1180 MODE 1:BORDER 0:INK 0,0:INK 2,2:INK 3,26
1190 FOR a=0 TO PI/2 STEP 0.02:x=SIN(a)*90:PLOT x+312,COS(a)*90+300,1:DRAWR -2*x,0:NEXT
1200 ORIGIN 0,0,226,398,298,130:CLG 3:ORIGIN 0,0,0,640,400,0
1210 FOR a=-1 TO 1 STEP 2:WINDOW 20+a*8,20+a*7,8,23:PAPER 3:CLS:WINDOW 20+a*6,20+a*6,19,22:CLS:WINDOW 1,40,1,25:LOCATE 20+a*6,9:PRINT" ";CHR$(10);CHR$(8);" ":PAPER 1+a:PEN 1-a:FOR b=12 TO 16:LOCATE 20+a*8,b:PRINT CHR$(138):NEXT
1220 PLOT 310+a*102,56,1:DRAWR 0,50:DRAWR -a*12,0:DRAWR 0,-50:DRAWR a*12,0:DRAWR a*20,-10,2:PLOT 310+a*80,180:DRAWR 0,100:DRAWR -a*20,0:DRAWR 0,-100:DRAWR a*20,0
1230 FOR b=-1 TO 1 STEP 2:FOR c=0 TO -b*16 STEP -b*2:PLOT 310+120*a-b*16+c,32,3:DRAW 310+120*a-b*16,80:NEXT c,b,a
1240 FOR a=0 TO 1:PAPER 1:LOCATE 12+a*15,20:PRINT CHR$(133);CHR$(138):FOR b=0 TO 1:LOCATE 20,12+a+b*2:PRINT CHR$(206+b);CHR$(206+b):NEXT:PAPER 3:LOCATE 16+a,18+a:PRINT CHR$(215);SPACE$(7-2*a);CHR$(214):NEXT
1250 PAPER 1:PEN 2:LOCATE 18,6:PRINT CHR$(231);" ";STRING$(6,CHR$(133)):LOCATE 18,2:PRINT CHR$(214);" ";CHR$(143);" ";CHR$(215)
1260 PAPER 0:LOCATE 16,4:PRINT"  ":LOCATE 16,5:PRINT"  ":LOCATE 20,17:PRINT CHR$(238):PAPER 3:LOCATE 17,8:PRINT STRING$(7,CHR$(154)):a$=CHR$(140)+CHR$(140):b$=" ":PEN 2:LOCATE 17,9:PRINT a$;b$;a$;b$;b$:LOCATE 17,10:PRINT b$;b$;a$;b$;a$   
1270 PLOT 248,342,0:TAG:PRINT CHR$(238);:TAGOFF
1280 if inkey$="" then call &bd19:GOTO 1280 else run
1290 '
1690 'copy screen: c.d=destination; c.s=source
1700 for c.i=0 to &3fff:poke c.d,peek(c.s):c.d=c.d+1:c.s=c.s+1:next c.i
1710 return
1720 '
1990 'copy sprite (old test): c.d=destination; c.s=source;c.w=width;c.h=height
2000 'for c.r=0 to c.h-1
2010 'for c.c=0 to c.w-1
2020 'poke c.d,peek(c.s)
2030 'c.d=c.d+1
2040 'c.s=c.s+1
2050 'next c.c
2060 'if (c.d and &3800)=&3800 then c.d=c.d-&3800+c.w else c.d=c.d+&800-c.w
2070 'if (c.s and &3800)=&3800 then c.s=c.s-&3800+c.w else c.s=c.s+&800-c.w
2080 'next c.r
2090 'return
2180 '
2190 'copy sprite: c.d=destination; c.s=source;c.w=width;c.h=height/8
2200 for c.b=0 to 7
2205 c.d2=c.d:c.s2=c.s
2210 for c.a=0 to c.h-1
2220 for c.i=0 to c.w-1
2230 poke c.d,peek(c.s)
2240 c.d=c.d+1
2250 c.s=c.s+1
2260 next c.i
2270 c.d=c.d+&50-c.w
2280 c.s=c.s+&50-c.w
2290 next c.a
2300 c.d=c.d2+&800
2310 c.s=c.s2+&800
2320 next c.b
2330 return
*/ });
