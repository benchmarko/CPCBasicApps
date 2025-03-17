/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 REM sieveera - Sieve of Eratosthenes
5 REM https://rosettacode.org/wiki/Sieve_of_Eratosthenes#Locomotive_Basic
6 REM GNU FDL 1.2 (https://www.gnu.org/licenses/fdl-1.2.html)
10 DEFINT a-z
20 INPUT "Limit";limit
30 DIM f(limit)
40 FOR n=2 TO SQR(limit)
50 IF f(n)=1 THEN 90
60 FOR k=n*n TO limit STEP n
70 f(k)=1
80 NEXT k
90 NEXT n
100 FOR n=2 TO limit
110 IF f(n)=0 THEN PRINT n;",";
120 NEXT
*/ });
