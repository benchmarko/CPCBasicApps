/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 REM primali - Primality by trial division
4 REM https://rosettacode.org/wiki/Primality_by_trial_division#Locomotive_Basic
5 REM https://rosettacode.org/wiki/Primality_by_trial_division#GW-BASIC
6 REM GNU FDL 1.2 (https://www.gnu.org/licenses/fdl-1.2.html)
100 FOR I = 1 TO 99
110  IF I < 2 THEN P = 0 : GOTO 180
120  IF I = 2 THEN P = 1 : GOTO 180
130  IF I MOD 2 = 0 THEN P = 0 : GOTO 180
140  P = 1
150  FOR J = 3 TO SQR(I) STEP 2
160   IF I MOD J = 0 THEN P = 0 : GOTO 180
170  NEXT J
180  IF P <> 0 THEN PRINT I;
190 NEXT I
200 END
*/ });
