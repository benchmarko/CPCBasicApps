/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem titan - Titan
2 rem (C) 1985 by MS-SOFTWARE
3 rem
4 rem Modifications: some delays
5 rem
10 REM ** TITAN ** (C) 1985 BY MS-SOFTWARE V3.0 9.6.
20 ENV 1,1,15,1,110,-1,10:ENT -1,50,1,1,25,-2,1
30 RANDOMIZE TIME
40 ON BREAK GOSUB 950
50 GOSUB 690
60 SYMBOL AFTER 96
70 SYMBOL 97,8,8,28,28,62,62,42,0
80 SYMBOL 98,0,14,60,254,60,14,0,0
90 SYMBOL 99,0,84,124,124,56,56,16,16
100 SYMBOL 100,0,0,112,60,127,60,112,0
110 SYMBOL 101,1,14,62,62,124,60,16,0
120 SYMBOL 102,128,112,124,124,62,60,8,0
130 SYMBOL 103,0,8,60,62,124,124,112,128
140 SYMBOL 104,0,16,60,124,62,62,14,1
150 SYMBOL 105,0,0,0,96,96,0,0,0
160 SYMBOL 106,0,0,36,24,24,36,0,0
170 SYMBOL 107,0,66,0,24,24,0,66,0
180 SYMBOL 108,0,66,32,8,16,4,66,0
190 SYMBOL 109,8,66,32,8,82,4,66,40
200 SYMBOL 110,8,66,160,0,66,128,66,40
210 DIM a(8),x(8),y(8):P=0:FUEL=639
220 DATA 97,102,98,103,99,104,100,101,0,1,-1,1,-1,0,-1,-1,0,-1,1,-1,1,0,1,1
230 RESTORE 220:FOR n=1 TO 8:READ a(n):NEXT:FOR n=1 TO 8:READ x(n),y(n):NEXT
240 zc=1:yp=390:xp=INT(RND*620)+10:xg=0:yg=0
250 BORDER 0,1:SPEED INK 20,3:INK 0,0:INK 1,13:INK 2,6:INK 3,24
260 CLS:x=160:LA=0
270 FOR n=1 TO 640 STEP 2:MOVE n,0
280 DRAW n,x,1
290 x=x+(RND*10)*SGN(RND-0.5):IF x<80 THEN x=80 ELSE IF x>330 THEN x=330
300 NEXT
330 z=INT(RND*620)+5:FOR n=z TO z+25 STEP 2:MOVE n,25:DRAW n,400,0:NEXT:IF z>320 THEN x=-1 ELSE x=1
340 z1=INT(RND*150)*x+50:IF z+z1>635 OR z+z1<5 THEN 340
350 FOR n=25 TO 65 STEP 2:MOVE z,n:DRAW z+z1,n,0:NEXT
360 FOR n=1 TO 30 STEP 2:MOVE z+z1-n,20:DRAW z+z1-n,25,2:DRAW z+z1-n,65,0:NEXT
380 LOCATE 1,24:PEN 0:PAPER 1:PRINT"FUEL":PEN 1:PAPER 0:FOR n=1 TO (150 AND fuel>150)+(fuel AND fuel<=150)STEP 2:MOVE n,0:DRAW n,10,2:NEXT:FOR n=152 TO fuel STEP 2:MOVE n,0:DRAW n,10,3:NEXT
390 TAG:PLOT 640,400,3
400 j=JOY(0)
410 MOVE xp,yp:PRINT CHR$(a(zc));
415 t!=time+30:while time<t!:call &bd19:wend
420 IF j=4 THEN zc=zc+1: IF zc>8 THEN zc=zc-8
430 IF j=8 THEN zc=zc-1:IF zc<1 THEN zc=zc+8
440 xg=xg+(0.5*x(zc) AND j=1):yg=yg+(0.5*y(zc) AND j=1)
450 IF yg>9 THEN yg=9 ELSE IF yg<-9 THEN yg=-9
460 IF xg>12 THEN xg=12 ELSE IF xg<-12 THEN xg=-12
470 SOUND 130,100,20,(ABS(xg)+ABS(yg))/3,,,10
480 xpp=xp:ypp=yp:xp=xp+xg:yp=yp+yg-0.8
490 IF xp>632 THEN xp=xp-632 ELSE IF xp<0 THEN xp=xp+632
500 IF yp>420 THEN fuel=0
510 t=TEST(xp+4+(16 AND SGN(xg)=1),yp-16):IF t=2 THEN 640 ELSE IF t=1 THEN 580 
520 MOVE xpp,ypp:PRINT" ";
530 FOR n=fuel TO fuel-(ABS(xg)+ABS(yg))*0.2 STEP -2:MOVE n,0:DRAW n,10,1:NEXT:fuel=fuel-(ABS(xg)+ABS(yg))*0.2:PLOT 640,400,3
540 IF FUEL<=0 THEN J=4:XG=XG-(0.25 AND XG>0):YG=YG-0.5:IF SQ(4)<5 THEN SOUND 4,200,200,15,,1:GOTO 410 ELSE 410
550 IF fuel<160 THEN IF SQ(1)<5 THEN  GOSUB 570
560 GOTO 400
570 SOUND 1,150,127,0,1:RETURN
580 MOVE xpp,ypp:PRINT" ";
590 FOR n=103 TO 110:MOVE xp,yp:PRINT CHR$(n);:SOUND 135,n*15,25,n MOD 7,,,n/10:FOR nn=1 TO 200:NEXT nn,n
600 MOVE xp,yp:PRINT" ";:FOR n=7 TO 0 STEP -0.1:SOUND 7,0,10,n,,,18:NEXT:TAGOFF
610 LOCATE 2,1:PRINT"SPIELENDE":LOCATE 2,3:PEN 2:PRINT"PUNKTE:"P:LOCATE 2,6:PEN 3:PRINT"NOCH EIN SPIEL? J/N"
620 IF INKEY(45)>=0 THEN CLEAR:GOTO 60 ELSE IF INKEY(46)=-1 THEN call &bd19:goto 620
630 SYMBOL AFTER 32:MODE 1:BORDER 0:CALL &BB03:END
640 IF YG<-2 THEN 580 ELSE FOR n=1 TO 5:FOR nn=1 TO 1000 STEP 30+10*n:SOUND 2,nn,1,7:NEXT nn,n
650 TAGOFF:LOCATE 2,2:PRINT"SEHR GUT GELANDET:";:PEN 2:PRINT INT(FUEL)"PUNKTE":P=P+INT(FUEL):PEN 3
660 LOCATE 2,4:PRINT"GESAMTPUNKTE:";P
670 LOCATE 2,6:PRINT"TASTE DRUECKEN!":CALL &BB03:CALL &BB18
680 GOTO 240
685 ' *** Titelbild ***
690 MODE 1:INK 0,0:BORDER 0:INK 1,0,24:INK 2,0:INK 3,0:RESTORE 700:SYMBOL AFTER 32:LOCATE 11,25:PEN 1:PRINT"Einen Moment bitte!":SPEED INK 15,30
700 DATA 70,250,70,370,5,370,135,370,150,250,150,370,235,250,235,370,170,370,305,370
710 DATA 270,250,365,370,365,370,365,250,290,280,365,280,400,250,400,370,400,370,480,250,482,250,402,370,480,250,480,370
720 DATA -1,1,1,1
730 FOR N=0 TO 1
740 READ A,B,C,D:IF A=-1 THEN 750 ELSE a=a+35:c=c+35:FOR Z=0 TO 10 STEP 2:PLOT A+Z-N*8,B+Z-n*4,n+3:DRAW C+Z-N*8,D+Z-n*4:NEXT:GOTO 740
750 RESTORE 700:NEXT
760 INK 1,6:INK 2,1:INK 3,21:PAPER 0:PEN 1:LOCATE 11,25:PRINT SPACE$(20)
770 A$=" "+CHR$(164):TAG:PLOT 640,400,3:FOR N=-10 TO 110 STEP 3:MOVE N,398:PRINT A$;:SOUND 130,ABS(N)*10,5,15:NEXT
780 A$="1985 by ":FOR N=640 TO 158 STEP -4:MOVE N,398:PRINT A$;:NEXT
790 A$="ms-Software":FOR n=420 TO 398 STEP -2:MOVE 290,n:PRINT a$;:NEXT
800 FOR n=0 TO 27 STEP 0.5:INK 3,n:SOUND 2,n*50+100,3,7:INK 0,27-n:NEXT:INK 3,21
810 TAGOFF:LOCATE 11,18:PEN 1:PRINT"Spielanleitung? J/N"
820 IF INKEY(46)>=0 THEN 900 ELSE IF INKEY(45)=-1 THEN call &bd19:goto 820
830 co=3:GOSUB 940
840 PEN 0:PAPER 3:LOCATE 1,11:PRINT"Versuche, Dein Raumschiff TITAN mit":PRINT:PRINT"moeglichst wenig Treibstoffverbrauch":PRINT:PRINT"auf dem Planeten zu landen."
850 PRINT:PRINT"Das nach der Landung uebriggebliebene":PRINT:PRINT"Benzin wird Dir dann als Punkte":PRINT:PRINT"gewertet. Das Spiel ist zuende, wenn ":PRINT:PRINT"das Benzin zuende ist oder wenn Du":PRINT:PRINT"Dein Raumschiff zerstoert hast.  Taste"
860 CALL &BB03:CALL &BB18
870 co=2:GOSUB 940:PAPER 2:PEN 1
880 LOCATE 1,11:PRINT"Der Landeplatz wird als roter Balken":PRINT:PRINT"signalisiert. Achte auf Deinen":PRINT:PRINT"Treibstoffvorrat, auf die Traegheit":PRINT:PRINT"Deines Raumschiffs und auf die":PRINT:PRINT"Raender des Landetunnels!"
890 PRINT:PRINT"Alles fertig? Dann bitte Taste druecken.":CALL &BB18
900 co=0:GOSUB 940:FOR n=1 TO 10:a$=INKEY$:NEXT
910 PEN 3:PAPER 0:LOCATE 13,18:PRINT"Viel Glueck!!"
920 t!=time+2000/3:while time<t! and inkey$="":call &bd19:wend: 'FOR n=1 TO 2000:NEXT
930 RETURN
940 FOR n=1 TO 320 STEP 2:MOVE n,0:DRAW n,242,co:MOVE 640-n,0:DRAW 640-n,242:NEXT:RETURN
945 ' *** Breakroutine ***
950 TAGOFF:SYMBOL AFTER 32:MODE 1:PEN 1:PAPER 0:BORDER 0:END
*/ });