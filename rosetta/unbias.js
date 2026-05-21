/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 REM unbias - Unbias a random generator
5 REM https://rosettacode.org/wiki/Unbias_a_random_generator#Locomotive_Basic
6 REM GNU FDL 1.2 (https://www.gnu.org/licenses/fdl-1.2.html)
100 CLS
110 DEF FNrandN(n)=INT(RND*n)=0
120 FOR n=3 TO 6
130   bi=0
140   unbi=0
150   FOR i=1 TO 10000
160     IF FNrandN(n) THEN bi=bi+1
170     GOSUB 230: IF r THEN unbi=unbi+1
180   NEXT
190   PRINT USING "# : biased ##.##% unbiased ##.##%";n;bi/100;unbi/100
200 NEXT
210 END
220 REM unbiased () => r  
230 r=0:r2=0
240 WHILE r=r2
250   r=FNrandN(n)
260   r2=FNrandN(n)
270 WEND
280 RETURN
*/ });
