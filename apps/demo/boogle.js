/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem boogle - Boogle
2 rem
3 rem Modifications: delay
4 rem
10 MODE 0:BORDER 0
20 GRAPHICS PAPER 0
30 FOR D=165 TO 65000
40 FOR F=0 TO 15
50 INK F,FM
60 NEXT F
70 C=(D MOD 6)+1
80 A=(C MOD 3)*213:U=(C MOD 2)*200
90 ORIGIN A,U,A,A+208,U,U+196
100 ORIGIN A+106,U+100:CLG
110 FOR F=1 TO 100
120 DRAW F*COS(F*D),F*SIN(F*D),(F MOD 15)+1
130 NEXT F
140 FOR X=1 TO 1000/10
150 INK (X MOD 15)+1,(X MOD 4)+2
155 call &bd19
160 NEXT X
165 call &bd19
170 NEXT D
*/ });
