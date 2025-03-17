/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 REM rot13 - Rot-13
5 REM https://rosettacode.org/wiki/Rot-13#Locomotive_Basic
6 REM GNU FDL 1.2 (https://www.gnu.org/licenses/fdl-1.2.html)
10 INPUT "Enter a string: ",a$
20 GOSUB 50
30 PRINT b$
40 END
50 FOR i=1 TO LEN(a$)
60 n=ASC(MID$(a$,i,1))
70 e=255
80 IF n>64 AND n<91 THEN e=90   ' uppercase
90 IF n>96 AND n<123 THEN e=122 ' lowercase
100 IF e<255 THEN n=n+13
110 IF n>e THEN n=n-26
120 b$=b$+CHR$(n)
130 NEXT
140 RETURN
*/ });
