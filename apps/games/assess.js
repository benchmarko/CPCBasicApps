/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem assess - Assessment (Idiotentest)
2 rem (c) Marco Vieth, 198x
3 rem
4 rem
5 REM Idiotentest
10 GOSUB 1000
20 GOSUB 800
25 FOR za=1 TO 8:z$=n$:y=za:x=1
26 PEN 3:GOSUB 940
27 ti=INT(m/3)+2:EVERY 50 GOSUB 500
30 GOSUB 700
32 while INKEY$<>"":wend: 'FOR i=1 TO 100:t$=INKEY$:NEXT i
35 NEXT za
40 GOTO 1500
500 ti=ti-1:LOCATE 6,25:PRINT ti
505 SOUND 2,ti*30+100,30,3 
510 IF ti<=0 THEN a=REMAIN(0)
520 RETURN
700 while time<t!:call &bd19:wend:j=JOY(0):IF ti=0 THEN GOSUB 980:RETURN
701 IF j=0 THEN 700
702 ' while INKEY$<>"":wend: 'FOR i=1 TO 50:t$=INKEY$:NEXT
705 IF j AND 16 THEN gosub 760
710 IF j AND 4 THEN GOSUB 980:x=x-1
720 IF j AND 8 THEN GOSUB 980:x=x+1
730 IF x<1 THEN x=1 ELSE IF x>m THEN x=m
740 z$=n$:PEN 3:GOSUB 950
750 t!=time+30:GOTO 700
760 IF LEN(p$(x,y))>2 THEN return:' 700
765 IF RIGHT$(p$(x,y),1)="J" THEN ri=ri+1 ELSE fa=fa+1
770 p$(x,y)=p$(x,y)+"£":GOSUB 980:x=x+1
780 while JOY(0) and 16:call &bd19:wend:return: 'j=1:GOTO 702
800 INK 1,1:PEN 2:LOCATE 1,25:PRINT"(Bitte warten...)";:PEN 1
810 FOR y=1 TO 8
820 FOR x=1 TO m
830 r=98+RND*1:IF r<>98 THEN r=113
835 z$=CHR$(r):r=INT(RND*3)+1
840 GOSUB 950
860 IF r=1 THEN a=32 ELSE IF r=2 THEN a=255 ELSE a=44
870 a$=CHR$(a):r=INT(RND*3)+1
880 LOCATE x,y*3-2:PRINT a$
890 IF r=1 THEN b=32 ELSE IF r=2 THEN b=39 ELSE b=34
900 b$=CHR$(b):GOSUB 950
905 LOCATE x,y*3:PRINT b$
906 h$="N":IF z$<>"b" THEN 915
907 z=0:IF a=44 THEN z=z+1
908 IF b=39 THEN z=z+1
909 IF a=255 THEN z=z+2
910 IF b=34 THEN z=z+2
912 IF z=2 THEN h$="J":ja=ja+1
915 p$(x,y)=z$+h$:NEXT x,y
920 PEN 2:LOCATE 1,25:PRINT"(Taste druecken...)";
921 WHILE INKEY$="":WEND
922 INK 1,24:PEN 1:LOCATE 1,25
923 PRINT"Time:"ti;SPC(8);:RETURN
940 DI:IF RIGHT$(p$(x,y),1)="£" THEN IF lev<>2 THEN PEN 2 ELSE PRINT"";:GOSUB 950:PAPER 0:RETURN
950 DI:LOCATE x,y*3-1:PRINT z$:PEN 1:EI:RETURN
980 z$=LEFT$(p$(x,y),1):GOTO 940
1000 MODE 1
1010 INK 1,24:INK 0,1:INK 2,10:INK 3,26,6
1020 PEN 1:PAPER 0:BORDER 1
1040 RANDOMIZE TIME
1050 SYMBOL AFTER 255
1070 SYMBOL 255,0,0,0,0,&6C,&6C,&6C
1080 DEFINT a-z
1081 print "Assessment"
1082 print:print"Mark all b's with exactly 2 marks ''"
1083 print
1085 INPUT"Level (0-2):";lev
1086 IF lev>2 OR lev<0 THEN 1085
1087 IF lev=1 THEN m=40 ELSE IF lev=0 THEN m=20 ELSE m=80
1088 MODE lev
1090 DIM p$(m,8)
1095 n$="*":ja=0:ri=0:fa=0
1100 RETURN
1500 MODE 1:PEN 1:PAPER 0
1510 PRINT "


"ja"richtige Loesungen:

"
1520 PRINT fa+ri"Aufgaben angekreuzt,
"
1530 PRINT ri"richtig und
"
1540 PRINT fa"falsch.

"
1550 p%=CINT(ri/ja*100)
1560 PRINT " das sind"p%"% richtige, und
"
1570 pr%=CINT(fa/(ja+ri)*100)
1580 PRINT pr%"% falsche (Aufg.+Richt.) !!

"
1590 PRINT " ALSO"p%-pr%"% !!!!"
1600 WHILE INKEY$="":WEND
*/ });
