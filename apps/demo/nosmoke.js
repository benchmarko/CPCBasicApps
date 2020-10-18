/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem nosmoke - No Smoking (Screen)
2 rem (c)
3 rem https://www.cpcwiki.eu/forum/programming/basic-files/ (BASIC02.DSK)
4 rem
5 ' NO SMOKING SIGN
6 ' SCULL PD LIBRARY
7 ' 119 LAUREL DR,EAST KILBRIDE,G75 9JG
10 INK 0,0:BORDER 0
15 DEFINT A-Z
20 'FOR m=1 TO 3:INK m,0:NEXT
30 SYMBOL AFTER 32:SYMBOL ASC("|"),204,204,204,204,204,204,204,204
40 MODE 1
50 DEG
51 c=3
60 ORIGIN 320,208
70 FOR r=190 TO 160 STEP -30
80 FOR m=0 TO 90 STEP 1:a=SIN(m)*R:b=COS(m)*R
90 MOVE a,b:DRAW -a,b,c
91 MOVE a,b-2:DRAW -a,b-2
100 MOVE a,-b:DRAW -a,-b
101 MOVE a,-b-2:DRAW -a,-b-2
110 NEXT m:c=c-2
120 NEXT
170 PAPER 1:PEN 0
180 LOCATE 1,9
190 PRINT"													//																																						\\																																						//																																						||Ó																										||Ó";
200 ORIGIN 0,0:FOR m=0 TO 246 STEP 2:MOVE 200+m,100+m:DRAWR 0,-40,3:NEXT M:FOR m=10 TO 250 STEP 2:MOVE 200+m,60+m:DRAWR 0,-10,3:NEXT M
230 INK 2,14:INK 3,6:INK 1,26
240 SPEED INK 50,20
250 CALL &BB18
*/ });
