/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem gdemo2 - Graphics Demo 2 (Grafik Demo)
2 rem
3 rem Modifications: some delays; press key to go back to menu (or ESC); split gdemo in 2 demos to have enough memory on a real CPC
4 rem
100 REM Grafik Demo
110 CALL &BBFF:CALL &BB4E:PRINT"Moment ...":CLEAR
120 ON BREAK GOSUB 110
130 CLS
140 PRINT TAB(12)"Grafik - Demo 2"
150 PRINT:PRINT"A ... Message
160 PRINT:PRINT"B ... Diamant
210 PRINT:PRINT"C ... Blinker
220 PRINT:PRINT"D ... Herz
230 PRINT:PRINT"E ... Wirbel
250 PRINT:PRINT"F ... R2D2
260 PRINT:print"G ... Ende
270 t$=INKEY$:t$=UPPER$(t$):IF t$<"A" OR t$>"G" THEN 270
280 IF t$="G" THEN MODE 2:PRINT"Bye.":END
290 ON ASC(t$)-64 GOTO 330,410,940,1000,1050,1180
300 stop
320 '
329 'Message
330 MODE 1:DEG:TAG:ORIGIN 200,200
340 INK 0,0:INK 1,0:INK 2,0:INK 3,0:PAPER 0:BORDER 0
350 FOR lp=1 TO 360 STEP 10:col=col+1:IF col>3 THEN col=1   
360 MOVE 100*COS(lp),100*SIN(lp),col
370 PRINT"MESSAGE";:NEXT lp
380 INK 1,26:gosub 395:INK 1,0:INK 2,26:gosub 395:INK 2,0
390 INK 3,26:gosub 395:INK 3,0:if inkey$="" then GOTO 380 else run
395 t!=time+25:while time<t!:call &bd19:wend:return
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
1080 FOR b=0 TO 50:if inkey$<>"" then run
1081 FOR a=1 TO 13:INK a,26:CALL &BD19:INK a,0:NEXT a,b
1082 FOR b=0 TO 50:if inkey$<>"" then run
1083 FOR a=13 TO 1 STEP -1:INK a,26:CALL &BD19:INK a,0:NEXT a,b
1084 if inkey$="" then GOTO 1080 else run
1089 '
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
1280 if inkey$="" then GOTO 1280 else clg 0:run
1290 '
*/ });
