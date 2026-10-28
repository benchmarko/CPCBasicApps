/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 REM nthwday - Nth Particular Weekday of the Month
5 REM https://rosettacode.org/wiki/Nth_Particular_Weekday_of_the_Month#Locomotive_Basic
6 REM GNU FDL 1.2 (https://www.gnu.org/licenses/fdl-1.2.html)
100 DEF FNYM(N) = Y - N * INT(Y / N)
110 DEF FNLY(Y) = (FNYM(400)=0) OR ((FNYM(4)=0) AND (FNYM(100)>0))
120 PRINT "      THANKSGIVING DAY"
130 PRINT "YEAR","CANADA","USA"
140 FOR Y=2020 TO 2029
150 : M=10: N=2: K=1: GOSUB 300
160 : PRINT Y, "OCT " D,
170 : M=11: N=4: K=4: GOSUB 300
180 : PRINT "NOV " D
190 NEXT Y
200 END
300 EY = Y - 1
310 D = EY * 365 + INT(EY / 4) - INT(EY / 100) + INT(EY / 400)
320 IF M = 1 THEN 380
330 FOR I = 1 TO M - 1
340 : IF I=2 THEN D = D + 28 + ABS(FNLY(Y)): GOTO 370
350 : D1 = I + INT(I/8): D1 = D1 - 2 * INT(D1 / 2) 
360 : D = D + 30 + D1
370 NEXT I
380 D = D + 1
390 S = D - 7 * INT(D / 7)
400 D = K - S
410 D = D - 7 * INT(D / 7)
420 D = D + 1 + 7 * (N - 1)
430 RETURN
*/ });
