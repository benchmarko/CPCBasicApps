/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 REM timefunc - Time a function
5 REM https://rosettacode.org/wiki/Time_a_function#Locomotive_Basic
6 REM GNU FDL 1.2 (https://www.gnu.org/licenses/fdl-1.2.html)
100 n=10000
110 t=TIME
120 GOSUB 190
130 t=TIME-t
140 sec=t/300
150 PRINT "Sum of 1 ..";n;":";sum
160 PRINT "Computed in";sec;"sec"
170 END
180 '
190 sum=0
200 FOR i=1 TO n:sum=sum+i:NEXT i
210 RETURN
*/ });
