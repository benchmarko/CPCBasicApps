/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem gdemo - Graphics Demo 1 (Grafik Demo)
2 rem
3 rem Modifications: some delays; press key to go back to menu (or ESC); converted MC code to BASIC; split gdemo in 2 demos to have enough memory on a real CPC
4 rem
100 REM Grafik Demo
110 CALL &BBFF:CALL &BB4E:PRINT"Moment ...":CLEAR
120 ON BREAK GOSUB 110
130 CLS
140 PRINT TAB(12)"Grafik - Demo 1"
170 PRINT:PRINT"A ... Windows
180 PRINT:PRINT"B ... Ball
190 PRINT:PRINT"C ... Transformation
200 PRINT:PRINT"D ... Men
240 PRINT:PRINT"E ... Pac-Man
260 PRINT:PRINT"F ... Ende
270 t$=INKEY$:t$=UPPER$(t$):IF t$<"A" OR t$>"F" THEN 270
280 IF t$="F" THEN MODE 2:PRINT"Bye.":END
290 ON ASC(t$)-64 GOTO 610,690,770,860,1100
300 'Spritedaten:
310 DATA 33,0,192,1,0,64,17,124,102,237,176,201,254,2,192,221,102,1,221,110,0,221,86,3,221,94,2,6,8,197,62,5,229,213,1,10,0,237,176,1,70,0,9,235,9,235,61,32,241,225,209,1,0,8,9,235,9,193,16,225,201
320 '
600 '
609 'Windows
610 c.h=5:c.w=10:MEMORY 8999:RESTORE 620:FOR a=9000 TO 9060:READ b:POKE a,b:NEXT
620 DATA 33,0,192,1,0,64,17,28,37,237,176,201,254,2,192,221,102,1,221,110,0,221,86,3,221,94,2,6,8,197,62,5,229,213,1,10,0,237,176,1,70,0,9,235,9,235,61,32,241,225,209,1,0,8,9,235,9,193,16,225,201  
630 MODE 1:INK 0,0:BORDER 0:INK 1,6:FOR a=0 TO 640 STEP 20:PLOT a,0:DRAW 0,320-a:PLOT a,400:DRAW 0,a:PLOT 640-a,0:DRAW 640,320-a:PLOT 640-a,400:DRAW 640,a:PLOT 0,a:DRAW 320,200:DRAW 640,a:PLOT a,0:DRAW 320,200:DRAW a,400:NEXT
635 c.d=9500:c.s=49152:gosub 1700: 'CALL 9000:POKE 9008,101
638 CLS
639 call &bd19
640 INK 2,2:FOR a=0 TO 640 STEP 12:PLOT a,0,2:DRAWR 0,400:DRAW 640 -a,0:PLOT 0,a:DRAWR 640,0:DRAW 0,400-a:NEXT
645 c.d=9500+&4000:c.s=49152:gosub 1700: 'CALL 9000
650 DIM d(39):FOR a=0 TO 7:FOR b=0 TO 4:d(a*5+b)=9500+a*10+B*400:NEXT B,A
660 FOR P=0 TO 1:FOR A=39 TO 1 STEP -1:if inkey$<>"" then run
661 FOR B=0 TO 39
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
744 t!=time+10/3:while time<t!:call &bd19:wend:'FOR b=0 TO 10:NEXT
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
842 t!=time+620:while time<t!:call &bd19:wend: 'FOR b=0 TO 2000:NEXT
843 FOR a=0 TO 31:CALL &BD19:if inkey$<>"" then run
844 c.d=49982:c.s=d(a):gosub 2200:c.d=49992:c.s=d(31-a):gosub 2200: 'CALL 26187,49982,d(a):CALL 26187,49992,d(31-a)
846 NEXT a
847 c.d=49982:c.s=26246:gosub 2200:c.d=49992:c.s=26236:gosub 2200: 'CALL 26187,49982,26246:CALL 26187,49992,26236
848 t!=time+620:while time<t!:call &bd19:wend: 'FOR b=0 TO 2000:NEXT
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
910 FOR a=0 TO 39:GOSUB 920:NEXT
912 if inkey$<>"" then run
915 FOR a=39 TO 0 STEP -1:GOSUB 920:NEXT
918 if inkey$="" then GOTO 910 else run
920 FOR b=0 TO 20 STEP 10:
925 c.d=50782+b-z:c.s=d(a):gosub 2200: 'CALL 26187,50782+b-z,d(a)
926 call &bd19
928 NEXT:z=z+0.4+1630*(z>1630):RETURN
929 '
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
1290 '
1690 'copy screen: c.d=destination; c.s=source
1700 for c.i=0 to &3fff:poke c.d,peek(c.s):c.d=c.d+1:c.s=c.s+1:next c.i
1710 return
1720 '
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
