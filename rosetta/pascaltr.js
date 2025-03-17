/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 REM pascaltr - Pascal's triangle
5 REM https://rosettacode.org/wiki/Pascal%27s_triangle#Locomotive_Basic
6 REM GNU FDL 1.2 (https://www.gnu.org/licenses/fdl-1.2.html)
10 CLS
20 INPUT "Number of rows? ", rows:GOSUB 40
30 END
40 FOR i=0 TO rows-1
50 c=1
60 FOR k=0 TO i
70 PRINT USING "####";c;
80 c=c*(i-k)/(k+1)
90 NEXT
100 PRINT
110 NEXT
120 RETURN
*/ });
