/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 REM babbage - Babbage problem
5 REM https://rosettacode.org/wiki/Babbage_problem#Locomotive_Basic
6 REM GNU FDL 1.2 (https://www.gnu.org/licenses/fdl-1.2.html)
100 REM A square ending in 6 must come from a number ending in 4 or 6
110 target=269696
120 FOR x=4 TO 999996 STEP 2
130   xmod10=x-INT(x/10)*10
140   IF xmod10<>4 AND xmod10<>6 THEN 180
150   s=x*x
160   s=s-INT(s/1000000)*1000000
170   IF s=target THEN PRINT "answer:";x:PRINT "square:";x*x:END
180 NEXT x
*/ });
