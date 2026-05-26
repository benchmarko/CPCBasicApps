/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 REM primali - Primality by trial division
4 REM https://rosettacode.org/wiki/Primality_by_trial_division#Locomotive_Basic
6 REM GNU FDL 1.2 (https://www.gnu.org/licenses/fdl-1.2.html)
100 DEFINT a-z
110 FOR n=1 TO 99
120   GOSUB 170
130   IF p THEN PRINT n;
140 NEXT
150 END
160 ' isPrime(n) -> p
170 IF n<2 THEN p=0:RETURN
180 IF n MOD 2=0 THEN p=n=2:RETURN
190 p=1:i=3
200 WHILE i*i<=n
210   IF n MOD i=0 THEN p=0:RETURN
220   i=i+2
230 WEND
240 RETURN
*/ });
