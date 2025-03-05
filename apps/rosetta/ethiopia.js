/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 REM ethiopia - Ethiopian multiplication
5 REM https://rosettacode.org/wiki/Ethiopian_multiplication#Locomotive_Basic
10 DEF FNiseven(a)=(a+1) MOD 2
20 DEF FNhalf(a)=INT(a/2)
30 DEF FNdouble(a)=2*a
40 x=17:y=34:tot=0
50 WHILE x>=1
60 PRINT x,
70 IF FNiseven(x)=0 THEN tot=tot+y:PRINT y ELSE PRINT
80 x=FNhalf(x):y=FNdouble(y)
90 WEND
100 PRINT "=", tot
*/ });
