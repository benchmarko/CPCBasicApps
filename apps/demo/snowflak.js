/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
10 REM snowflak - Snowflake
20 REM The following character sequence will be used by version 9 ...... ăLƕćČu3Tąă
30 REM
40 REM https://logiker.com/Vintage-Computing-Christmas-Challenge-2025
50 REM https://demozoo.org/parties/5456/
60 '
70 ' To get the size of a program, use PRINT 42251-FRE(0) or prepend the following line (works for CPC, CPCBasicTS):
80 ' 1 PRINT 42251-FRE(0)-24:STOP
90 '
100 DEF FNquote$(s$)=chr$(34)+s$+chr$(34)
110 MODE 1
120 WINDOW #1,21,40,2,20
130 FOR ver=1 TO 9
140   CLS:CLS#1
150   ON ver GOSUB 390,490,590,660,750,820,900,980,1120
160   PRINT:PRINT "Version"; ver;": ";
170   i=1
180   WHILE i<=LEN(msg$):j=INSTR(i,msg$," - ")
190     IF j>0 THEN PRINT MID$(msg$,i,j-i):i=j+3 ELSE PRINT MID$(msg$,i):i=LEN(msg$)+1
200   WEND
210   FOR i=1 TO len(code$):a$=MID$(code$,i,1)
220     IF ASC(a$)<32 THEN a$=chr$(1)+a$
230     PRINT #1,a$;
240   NEXT
250   PRINT #1:PRINT #1:PRINT #1,"source:";LEN(code$)
260   t=TIME+1200:WHILE TIME<t AND INKEY$="":WEND
270 NEXT
280 END
290 '
300 '
310 ' Version by ?
320 ' https://youtu.be/9aazdLrXah8?si=OB5ODreNJa3aof3G&t=163
330 ' ...
340 '
350 ' 1. Version by DrSnuggles (203 / 228+2)
360 ' https://youtu.be/9aazdLrXah8?si=W3C_zIIGQGTPREe5&t=756
370 ' DrSnuggles_CPC_BASIC_203b_vc3-2025.zip
380 '
390FOR i=1TO 19:READ a:b$=BIN$(a,9):s$="":r$="":FOR n=1 TO 9:c$=MID$(b$,n,1):IF c$="0"THEN c$=" "ELSE c$="*"
400 s$=s$+c$:r$=c$+r$:NEXT:?s$"*"r$:NEXT:DATA 0,2,81,48,114,9,4,146,73,511,73,146,4,9,114,48,81,2,0
410 '
420 code$="1FOR i=1TO 19:READ a:b$=BIN$(a,9):s$="+FNquote$("")+":r$="+FNquote$("")+":FOR n=1 TO 9:c$=MID$(b$,n,1):IF c$="+FNquote$("0")+"THEN c$="+FNquote$(" ")+"ELSE c$="+FNquote$("*")+chr$(13)+"s$=s$+c$:r$=c$+r$:NEXT:?s$"+FNquote$("*")+"+r$:NEXT:DATA 0,2,81,48,114,9,4,146,73,511,73,146,4,9,114,48,81,2,0"
430 msg$="by DrSnuggles - Data bits for one half - mirrored horizontally - source: 203 code: 230"
440 RETURN
450 '
460 ' 2. Version by DrSnuggles (optimized)
470 ' https://youtu.be/9aazdLrXah8?si=W3C_zIIGQGTPREe5&t=756
480 '
490FOR i=1TO 19:READ a:r$="":FOR n=1TO 9:c$=CHR$(42+10*(MID$(BIN$(a,9),n,1)="0")):?c$;:r$=c$+r$:NEXT:?"*"r$:NEXT:DATA 0,2,81,48,114,9,4,146,73,511,73,146,4,9,114,48,81,2,0
500 '
510 code$="1FOR i=1TO 19:READ a:r$="+FNquote$("")+":FOR n=1TO 9:c$=CHR$(42+10*(MID$(BIN$(a,9),n,1)="+FNquote$("0")+")):?c$;:r$=c$+r$:NEXT:?"+FNquote$("*")+"r$:NEXT:DATA 0,2,81,48,114,9,4,146,73,511,73,146,4,9,114,48,81,2,0"
520 msg$="by DrSnuggles - optimized - avoid variables, replaced IF - source: 169 code: 179"
530 RETURN
540 '
550 ' 3. Version by issalig, 169 / 187 / 168
560 ' https://youtu.be/9aazdLrXah8?si=cx3_SWDFDpMauKqY&t=931
570 ' issalig_amstradcpc_locomotivebasic_168b_vc3-2025.zip
580 '
590DIM D(9):FOR I=1TO 9:READ D(I):NEXT:DATA 73,146,4,9,114,48,81,2,0:FOR Y=-9TO 9:A=ABS(Y):FOR X=-9TO 9:B=ABS(X):?CHR$(42+10*(((A*B=0)OR(D(A)AND 2^(B-1)))=0));:NEXT:?:NEXT
600 '
610 code$="1DIM D(9):FOR I=1TO 9:READ D(I):NEXT:DATA 73,146,4,9,114,48,81,2,0:FOR Y=-9TO 9:A=ABS(Y):FOR X=-9TO 9:B=ABS(X):?CHR$(42+10*(((A*B=0)OR(D(A)AND 2^(B-1)))=0));:NEXT:?:NEXT"
620 msg$="by issalig - Data bits for one quadrant - mirrored horizontally and vertically - source: 169 code: 187"
630 RETURN
640 '
650 ' 4. Version by issalig (optimized): DIM not necessary, unnecessary parens removed; read 8 bytes, removed variables A,B
660FOR I=1TO 8:READ D(I):NEXT:DATA 73,146,4,9,114,48,81,2:FOR Y=-9TO 9:FOR X=-9TO 9:?CHR$(42+10*((Y*X=0OR D(ABS(Y))AND 2^(ABS(X)-1))=0));:NEXT:?:NEXT
670 '
680 code$="1FOR I=1TO 8:READ D(I):NEXT:DATA 73,146,4,9,114,48,81,2:FOR Y=-9TO 9:FOR X=-9TO 9:?CHR$(42+10*((Y*X=0OR D(ABS(Y))AND 2^(ABS(X)-1))=0));:NEXT:?:NEXT"
690 msg$="by issalig - optimized - removed DIM, parens, A,B; read 8 bytes - source: 147 code: 152"
700 RETURN
710 '
720 ' 5. Version by Arnolds of Leosoft (137, 126)
730 ' https://youtu.be/9aazdLrXah8?si=2iD00mHdxY1blBf4&t=1446
740 ' leosoft_cpc_basic_126b_vc3-2025.zip
750FOR y=-9 TO 9:FOR x=-9 TO 9:PRINT CHR$(9-33*(((ABS(x)=ABS(y))AND ABS(x)<8)OR(INSTR("ăćĊčē!&",CHR$(ABS(x*y)+3))>0)));:NEXT:PRINT:NEXT
760 '
770 code$="1 FOR y=-9 TO 9:FOR x=-9 TO 9:PRINT CHR$(9-33*(((ABS(x)=ABS(y))AND ABS(x)<8)OR(INSTR("+FNquote$("ăćĊčē!&")+",CHR$(ABS(x*y)+3))>0)));:NEXT:PRINT:NEXT"
780 msg$="by Arnolds of Leosoft - 4 symmetries - ... - source: 134 code: 126"
790 RETURN
800 '
810 ' 6. Version by Arnolds of Leosoft (optimized); remove unnecessary parens and spaces
820FOR y=-9TO 9:FOR x=-9TO 9:?CHR$(9-33*(ABS(x)=ABS(y) AND ABS(x)<8OR INSTR("ăćĊčē!&",CHR$(ABS(x*y)+3))>0));:NEXT:?:NEXT
830 '
840 code$="1FOR y=-9TO 9:FOR x=-9TO 9:?CHR$(9-33*(ABS(x)=ABS(y) AND ABS(x)<8OR INSTR("+FNquote$("ăćĊčē!&")+",CHR$(ABS(x*y)+3))>0));:NEXT:?:NEXT"
850 msg$="by Arnolds of Leosoft - optimized - removed parens, spaces - source: 118 code: 119"
860 RETURN
870 '
880 ' 7. Version by David Payne (BBC BASIC) (70 Bytes), converted to Locomotive BASIC
890 ' https://youtu.be/9aazdLrXah8?si=jST6PqBjt6DqooVR&t=1666
900FOR y=-9TO 9:FOR x=-9TO 9:?CHR$(32OR 10AND INSTR(" $'*0>C",CHR$(ABS(x)*ABS(y)+32))>(ABS(x)MOD 9MOD 8=ABS(y)));:NEXT:?:NEXT
910 '
920 '1FOR y=-9TO 9:FOR x=-9TO 9:?CHR$(32OR 10AND INSTR(" $'*0>C",CHR$(ABS(x)*ABS(y)+32))>(ABS(x)MOD 9MOD 8=ABS(y)));:NEXT:?:NEXT
930 code$="1FOR y=-9TO 9:FOR x=-9TO 9:?CHR$(32OR 10AND INSTR("+FNquote$(" $'*0>C")+",CHR$(ABS(x)*ABS(y)+32))>(ABS(x)MOD 9MOD 8=ABS(y)));:NEXT:?:NEXT"
940 msg$="by David Payne (BBC BASIC) - converted to Locomotive BASIC - 4 symmetries - source: 123 code: 117"
950 RETURN
960 '
970 ' 8. Version by David Payne (BBC BASIC): (optimized): combined ABS(x)*ABS(y)
980FOR y=-9TO 9:FOR x=-9TO 9:?CHR$(32OR 10AND INSTR(" $'*0>C",CHR$(ABS(x*y)+32))>(ABS(x)MOD 9MOD 8=ABS(y)));:NEXT:?:NEXT
990 '
1000 code$="1FOR y=-9TO 9:FOR x=-9TO 9:?CHR$(32OR 10AND INSTR("+FNquote$(" $'*0>C")+",CHR$(ABS(x*y)+32))>(ABS(x)MOD 9MOD 8=ABS(y)));:NEXT:?:NEXT"
1010 msg$="by David Payne (BBC BASIC) - optimized - combined ABS(x)*ABS(y) - source: 118 code: 113"
1020 RETURN
1030 '
1040 ' 9. Version by Serato / Finnish Gold (C64 BASIC) (79 Bytes), converted to Locomotive BASIC
1050 ' serato_C64_basic_79b_vc3-2025.zip
1060 ' C64:
1070 '1 fory=-9to9:forx=-9to9:printchr$(32orx*y=0<(peek(2116+abs(y))and2^abs(x)/2)and42);:next:print:next:REMi{R}{d}{i}R0q{b}
1080 '
1090 ' This version needs 8+2 bytes starting at address 467, prepare data after REM:
1100 'FOR I=0 TO 9:READ d:POKE 467+i,d+3:NEXT:DATA 0,73,146,4,9,114,48,81,2,0
1110 '
1120FOR y=-9TO 9:FOR x=-9TO 9:?CHR$(32OR x*y=0<(PEEK(467+ABS(y))-3AND 2^ABS(x)/2)AND 42);:NEXT:?:NEXT:REM ăLƕćČu3Tąă
1130 '
1140 code$="1FOR y=-9TO 9:FOR x=-9TO 9:?CHR$(32OR x*y=0<(PEEK(467+ABS(y))-3AND 2^ABS(x)/2)AND 42);:NEXT:?:NEXT:REM ăLƕćČu3Tąă"
1150 msg$="by Serato / Finnish Gold (C64 BASIC) - converted to Locomotive BASIC - source: 113 code: 112"
1160 RETURN
*/ });
