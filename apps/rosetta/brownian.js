/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 REM brownian - Brownian tree
5 REM https://rosettacode.org/wiki/Brownian_tree#Locomotive_Basic
10 MODE 1:DEFINT a-z:RANDOMIZE TIME:np=10000
20 INK 0,0:INK 1,26:BORDER 0
30 PLOT 320,200
40 FOR i=1 TO np
50 GOSUB 1000
60 IF TEST(x+1,y+1)+TEST(x,y+1)+TEST(x+1,y)+TEST(x-1,y-1)+TEST(x-1,y)+TEST(x,y-1)<>0 THEN 100
70 x=x+RND*2-1: y=y+RND*2-1
80 IF x<1 OR x>640 OR y<1 OR y>400 THEN GOSUB 1000
90 GOTO 60
100 PLOT x,y
110 NEXT
120 END 
1000 ' Calculate new position
1010 x=RND*640
1020 y=RND*400
1030 RETURN
*/ });
