/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem btilesim - British Council Tile / Bus Fabric Sim
2 rem
3 rem https://scruss.com/blog/2018/06/10/rob-manuels-british-council-tile-bus-fabric-sim/
4 rem
10 ' British Council Tile / Bus Fabric Sim
20 ' by Rob Manuel 2018
30 '
40 ' z/x - change char up/down (ascii)
50 ' space - random palette
60 ' c - show ascii val, inks & pause
70 ' v - random character (128+ ascii)
80 ' b - random char and cols
90 ' n - fill with same line & pause
100 'i - input ascii value
110 '
120 ON BREAK GOSUB 260:MODE 1:LOCATE 1,26
130 DEF FNs=INT(RND*255)
140 SYMBOL 255,FNs,FNs,FNs,FNs,FNs,FNs,FNs,FNs
150 DEF FNp=INT(RND*4)
160 DEF FNi=INT(RND*26)
170 GOSUB 470
180 GOSUB 270
190 call &bd19:o$="":i$=INKEY$
200 IF i$<>"" THEN GOSUB 380
210 FOR i=1 TO 40
220 w$=CHR$(14)+CHR$(FNp)+CHR$(15)+CHR$(FNp)
230 w$=w$+CHR$(c):o$=o$+w$:NEXT i
240 store$=o$
250 PRINT o$;:GOTO 190
260 CALL &BC02:PAPER 0:PEN 1:END
270 aa=FNi:bb=FNi:cc=FNi:dd=FNi
280 INK 0,aa:INK 1,bb:INK 2,cc:INK 3,dd
290 BORDER aa
300 GOSUB 320:RETURN
310 IF c>255 THEN c=32:IF c<32 THEN c=255
320 LOCATE 1,1:PAPER 0:PEN 1
330 PRINT "C:"c;
340 PRINT CHR$(c);
350 PRINT " ";
360 PRINT "I:"aa;bb;cc;dd;
370 LOCATE 1,26:RETURN
380 IF i$=" " THEN GOSUB 270:RETURN
390 IF i$="z" THEN c=c-1:GOSUB 310:RETURN
400 IF i$="x" THEN c=c+1:GOSUB 310:RETURN
410 IF i$="c" THEN GOSUB 310:CALL &BB18:RETURN
420 IF i$="i" THEN LOCATE 1,1:INPUT "ASCII?",c:GOSUB 310:RETURN
430 IF i$="v" THEN GOSUB 470:GOSUB 310:RETURN
440 IF i$="b" THEN GOSUB 270:GOSUB 470:GOSUB 310:RETURN
450 IF i$="n" THEN FOR i=1 TO 25:PRINT store$;:NEXT:CALL &BB18:RETURN
460 RETURN
470 c=INT(RND*128)+127:RETURN
*/ });
