/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
9500 REM filesel - File Select v0.1
9510 REM Marco Vieth, 2023
9520 PRINT "File Select":GOSUB 9540:STOP
9530 '
9540 f.st=6:f.t$="":f.f$="":f.msk$=f.msk$+""
9550 IF f.col=0 THEN f.col=26
9560 IF f.row=0 THEN f.row=1
9570 WINDOW #f.st,f.col,f.col+14,f.row,25
9580 WINDOW SWAP f.st,0
9590 |DIR,@f.msk$
9600 WINDOW SWAP f.st,0
9610 f.r=f.row:f.rmax=f.r
9620 WHILE f.r<=25
9630 LOCATE #f.st,9,f.r-f.row+1:ch$=COPYCHR$(#f.st)
9640 IF ch$="." THEN f.rmax=f.r:LOCATE f.col-2,f.r:PRINT CHR$(45+f.r-f.row);
9650 f.r=f.r+1
9660 WEND
9670 LOCATE f.col-2,f.rmax+2:PRINT "Select:    ";
9680 f.t$=INKEY$:IF f.t$="" THEN 9680
9690 IF f.t$=CHR$(13) THEN LOCATE f.col-2,f.rmax+2:INPUT "Name ";f.f$:GOTO 9730
9700 f.t$=UPPER$(f.t$):f.r=ASC(f.t$)-45:IF f.r<1 OR f.r>=f.rmax THEN 9680
9710 ?f.t$;
9720 f.f$="":FOR f.c=1 TO 12:LOCATE #f.st,f.c,f.r+1:f.f$=f.f$+COPYCHR$(#f.st):NEXT
9730 RETURN
9740 REM example: f.col=4:f.row=4:f.msk$="*.AND":GOSUB 9540:t$=f.f$
9750 REM
*/ });
