/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 REM onedimca - One-dimensional cellular automata
5 REM https://rosettacode.org/wiki/One-dimensional_cellular_automata#Locomotive_Basic
6 REM GNU FDL 1.2 (https://www.gnu.org/licenses/fdl-1.2.html)
10 MODE 1:n=10:READ w:DIM x(w+1),x2(w+1):FOR i=1 to w:READ x(i):NEXT
20 FOR k=1 TO n
30 FOR j=1 TO w
40 IF x(j) THEN PRINT "#"; ELSE PRINT "_";
50 IF x(j-1)+x(j)+x(j+1)=2 THEN x2(j)=1 ELSE x2(j)=0
60 NEXT:PRINT
70 FOR j=1 TO w:x(j)=x2(j):NEXT
80 NEXT
90 DATA 20,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0
*/ });
