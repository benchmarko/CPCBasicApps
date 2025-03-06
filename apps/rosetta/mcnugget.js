/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 REM mcnugget - McNuggets problem
5 REM https://rosettacode.org/wiki/McNuggets_problem#Locomotive_Basic
6 REM GNU FDL 1.2 (https://www.gnu.org/licenses/fdl-1.2.html)
100 CLEAR
110 DIM a(100)
120 FOR a=0 TO 100/6
130   FOR b=0 TO 100/9
140     FOR c=0 TO 100/20
150       n=a*6+b*9+c*20
160       IF n<=100 THEN a(n)=1
170     NEXT c
180   NEXT b
190 NEXT a
200 FOR n=0 TO 100
210   IF a(n)=0 THEN l=n
220 NEXT n
230 PRINT"The Largest non McNugget number is:";l
240 END
*/ });
