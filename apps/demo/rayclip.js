/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem rayclip - Ray Eclipse
2 rem (c) Alan Scully
3 rem https://www.cpcwiki.eu/forum/programming/basic-files/ (BASIC02.DSK)
4 rem Modifications: delay in 130
6 rem
7 ' RAY ECLIPSE
8 ' ALAN SCULLY for
9 ' SCULL PD LIBRARY    119 Laurel Drive    East Kilbride       G75 9JG
10 INK 14,0:INK 0,0:BORDER 0
20 DEG
30 GOSUB 70
40 ORIGIN 320,50: FOR m=60 TO 300 STEP 0.5:a=SIN(m):b=-COS(m):MOVE 100*a,100*b:x=XPOS:y=YPOS:c=m MOD 13+1:DRAW 600*a,600*b,c:x2=XPOS:y2=YPOS:MOVER 4,0:DRAW x+4,y:MOVE x,y-2:DRAW x2,y2-2:NEXT m
50 GOTO 130
60 CALL &BB18:END
70 ' SET UP FOR COLOUR SWITCHING
80 MODE 0
90 DIM col(14):FOR a=0 TO 14:READ col(a):INK a+1,col(a):NEXT
100 RETURN
110 DATA 3,9,11,15,21,24,23,22,19,12,10,4,1,7,8      
120 ' COLOUR SWITCH
130 WHILE 1:D=d MOD 13+1:FOR E=1 TO 13:INK E,COL((D+E)MOD 13):NEXT:t!=time+12:while time<t!:call &bd19:wend:WEND
*/ });
