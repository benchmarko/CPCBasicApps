/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem nicholas - House of St Nicholas
2 rem
3 rem
100 REM NIKOLAUS
110 ON BREAK GOSUB 500
120 MODE 0
130 REM
140 E=E+1:IF E=16 THEN CLS:E=1         
150 FOR I=1 TO 24
160 READ A,B
170 IF A=0 AND B=0 THEN 220
180 DRAW A,B,E
190 NEXT I
200 FOR M=1 TO 1000/20:call &bd19:NEXT M
210 RESTORE:GOTO 130
220 READ A,B
230 PLOT A,B,E
240 GOTO 190
300 DATA 0,0 , 440,16
310 DATA 440,208,400,260,400,384,360,384,360,315
320 DATA 320,368,200,208,200,16 
330 DATA 440,208,200,208,440,16,200,16
340 DATA 100,16,100,112,200,144,80,192,100,144,140,168
350 DATA 0,0,100,320
360 DATA 160,320,160,368,100,368,100,320
500 MODE 2:PEN 1:STOP
*/ });
