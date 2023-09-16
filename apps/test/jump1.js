/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem jump1 - Jump Test 1
2 rem
3 rem https://www.cpcwiki.eu/forum/programming/locomotive-basic-routine-for-character-jump/
4 rem 
10 ON BREAK GOSUB 360
11 DEFINT a-z
12 MODE 0:BORDER 0
14 ?"Jump1 - Cursor ";chr$(242);chr$(240);chr$(243);
18 SYMBOL 248,32,40,16,16,60,80,56,16
40 x%=9:y%=5:LOCATE x%,y%
60 xt%=x%:yt%=y%:p%=248:GOSUB 160
70 REM rutina inicio ciclo movimiento personaje+enemigo+limites+marcador
71 call &bd19
75 if y%<3 then y%=3
78 y%=y%+1:if y%>24 then y%=24
80 IF INKEY(1)=0 and x%<24 THEN x%=x%+1:p%=251:GOSUB 170
90 IF INKEY(8)=0 and x%>2 THEN x%=x%-1:p%=251:GOSUB 170
100 IF INKEY(0)=0 and y%>2 THEN y%=y%-2:GOSUB 170
110 IF p%<>250 THEN p%=249:FRAME:GOSUB 170
120 GOTO 70
130 REM rutina fin juego
140 p%=238:CLEAR INPUT:FOR n%=0 TO 2000/10:call &bd19:NEXT:CLS:PEN 1:GOTO 10
150 CLS:PEN 1:INK 1,24:END
160 REM rutina animacion prota
170 LOCATE xt%,yt%:PRINT CHR$(32)
180 LOCATE x%,y%:PRINT CHR$(p%)
190 xt%=x%:yt%=y%
200 RETURN
360 end
*/ });
