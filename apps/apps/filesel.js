/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
9500 rem filesel - File Select v0.1
9510 rem Marco Vieth, 2023
9520 f.st=6:f.t$="":f.f$=""
9530 if f.col=0 then f.col=26
9540 if f.row=0 then f.row=1
9550 window #f.st,f.col,f.col+14,f.row,25
9560 window swap f.st,0
9570 |dir,f.msk$
9580 window swap f.st,0
9590 f.r=f.row:f.rmax=f.r
9600 while f.r<=25
9610 locate #f.st,9,f.r-f.row+1:ch$=copychr$(#f.st)
9620 if ch$="." then f.rmax=f.r:locate f.col-2,f.r:print chr$(45+f.r-f.row);
9630 f.r=f.r+1
9640 wend
9650 locate f.col-2,f.rmax+4:print "Select: ";
9660 f.t$=inkey$:if f.t$="" then 9660
9670 if f.t$=chr$(13) then locate f.col-2,f.rmax+5:input "Name";f.f$:goto 9710
9680 f.t$=upper$(f.t$):f.r=asc(f.t$)-45:if f.r<1 or f.r>=f.rmax then 9660
9690 ?f.t$;
9700 f.f$="":for f.c=1 to 12:locate #f.st,f.c,f.r+1:f.f$=f.f$+copychr$(#f.st):next
9710 return
9720 rem example: f.col=4:f.row=4:f.msk$="*.AND":gosub 9510:t$=f.f$
9730 rem
*/ });
