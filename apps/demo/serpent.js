/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem serpent - Serpent
2 rem (c) T. Magee, 1987
3 rem Modifications: delay; line 40: a>-0.1 => a>-0.09999 to allow rounding differences
4 rem
5 ' Serpent
6 ' by T Magee
7 ' Amstrad Action   June 87
10 MODE 1
20 ORIGIN 320,200
30 GOSUB 60:a=a-2
40 IF a>-0.09999 THEN GOSUB 60
45 call &bd19
50 a=a+2.1:GOTO 30
60 MOVE 220*SIN(a/2),98*COS(a),1,1
70 DRAW 200*COS(a/2),198*SIN(a)
80 RETURN
*/ });
