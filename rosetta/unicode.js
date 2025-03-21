/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 REM unicode - Unicode strings
5 REM https://rosettacode.org/wiki/Unicode_strings#Locomotive_Basic
6 REM GNU FDL 1.2 (https://www.gnu.org/licenses/fdl-1.2.html)
10 CLS:DEFINT a-z
20 ' define German umlauts as in Latin-1
30 SYMBOL AFTER 196
40 SYMBOL 196,&66,&18,&3C,&66,&7E,&66,&66,&0
50 SYMBOL 214,&C6,&0,&7C,&C6,&C6,&C6,&7C,&0
60 SYMBOL 220,&66,&0,&66,&66,&66,&66,&3C,&0
70 SYMBOL 228,&6C,&0,&78,&C,&7C,&CC,&76,&0
80 SYMBOL 246,&66,&0,&0,&3C,&66,&66,&3C,&0
90 SYMBOL 252,&66,&0,&0,&66,&66,&66,&3E,&0
100 SYMBOL 223,&38,&6C,&6C,&78,&6C,&78,&60,&0
110 ' print string
120 READ h
130 IF h=0 THEN 180
140 IF (h AND &X11100000)=&X11000000 THEN uc=(h AND &X11111)*2^6:GOTO 120
150 IF (h AND &X11000000)=&X10000000 THEN uc=uc+(h AND &X111111):h=uc
160 PRINT CHR$(h);
170 GOTO 120
180 PRINT
190 END
200 ' zero-terminated UTF-8 string
210 DATA &48,&C3,&A4,&6C,&6C,&C3,&B6,&20,&4C,&C3,&BC,&64,&77,&69,&67,&2E,&20,&C3,&84,&C3,&96,&C3,&9C
220 DATA &20,&C3,&A4,&C3,&B6,&C3,&BC,&20,&56,&69,&65,&6C,&65,&20,&47,&72,&C3,&BC,&C3,&9F,&65,&21,&00
*/ });
