/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
100 REM Big Factorials (Berechnung grosser Fakultaeten)
110 MODE 2:CLEAR
120 PRINT"Big Factorials"
130 PRINT:INPUT"Which number:";n
140 PRINT:PRINT n"!="
160 'Calculate number of 5-digit blocks
170 l=1
180 FOR i=2 TO n:l=l+LOG(i):NEXT
190 l=l*0.434295:r%=round(l/5+1) 'could also use LOG10 here
195 DIM r(r%)
196 r(1)=1
200 'multi loop
210 l=1:FOR i=n TO 2 STEP -1
220 l=l+LOG(i)*0.434294575:l%=l/5+1:u=0
230 FOR j=1 TO l%
240 h=r(j)*i+u
250 IF h<-100000 THEN u=0:GOTO 270
260 u=INT(h/100000):h=h-u*100000
270 r(j)=h:NEXT j,i
280 'output
290 IF r(r%)=0 THEN r%=r%-1:GOTO 290
300 FOR i=r% TO 1 STEP -1
310 r$=STR$(r(i)):r$=RIGHT$(r$,LEN(r$)-1)
320 PRINT RIGHT$("0000"+r$,5);" ";
330 IF (r%-i+1) MOD 10=0 THEN PRINT
340 NEXT
350 call &bb18
360 run
*/ });
