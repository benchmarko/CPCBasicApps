/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
10 REM rot13 - ROT13 Caesar Cipher
20 REM (c) Marco Vieth, 2023
30 REM
40 MODE 2
50 PRINT "ROT13 Caesar Cipher"
60 i$="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
70 GOSUB 140
80 i$="NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm"
90 GOSUB 140
100 PRINT:INPUT "Input ";i$
110 GOSUB 150
120 GOTO 100
130 '
140 PRINT:PRINT "Input:  ";i$
150 GOSUB 190
160 PRINT "Output: ";i$
170 RETURN
180 '
190 FOR i=1 TO LEN(i$)
200 c=ASC(MID$(i$,i,1))
210 IF c>=65 AND c<=90 THEN base=65 ELSE IF c>=65 AND c<=122 THEN base=97 ELSE 230
220 MID$(i$,i,1)=CHR$(((c-base+13) MOD 26)+base)
230 NEXT
240 RETURN
*/ });
