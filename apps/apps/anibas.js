/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
10 REM anibas - Animator BASIC Viewer
20 REM (c) Marco Vieth, 1991
30 rem
40 rem Modifications: File select
50 rem
100 'Animator (v3.2) - Basic
110 '25.11.1991  (8.3.1991 11.11.1989  5.,6.11.89)
120 '
130 MODE 1
140 CLEAR:DEFINT a-z
150 xm!=2.5:ym!=2.5:xv!=0:yv!=-114:'Korrekturfaktoren (m=Mult.,v=Verschiebung)
160 aniblk=&8000
170 PRINT"Animator (v3.2) - Basic"
180 PRINT"Show animation phases in Basic"
200 PRINT
205 '|DIR,"*.AND"
210 'INPUT"Filename (ohne .AND): ";t$
212 f.col=4:f.row=4:f.msk$="*.AND":gosub 10000:t$=f.f$
214 IF t$="" then 220
216 if upper$(right$(t$,4))<>".AND" then t$=t$+".AND" 
218 MEMORY &7FFF:LOAD t$,aniblk
219 '
220 PRINT:PRINT"Border blinkt : S=Screen speichern":PRINT
230 'INPUT"Modus (0..2): ";m:MODE m
232 PRINT "Mode (0..2): ";:m=1
234 t$="":WHILE t$="":t$=INKEY$:WEND
235 m=asc(t$)-48:if m<0 or m>3 then 234
238 MODE m
240 ph=aniblk:'Phasenadr
250 anidatadr=ph+UNT(PEEK(ph)+PEEK(ph+1)*256):'Animationsdatenadr
260 anz=PEEK(ph+2):'Anzahl Phasen
270 ph=ph+3:'Adr 1.Phasennummer
280 FOR i2=1 TO anz
290 phase=PEEK(ph):'Phasennummer
300 farbe=PEEK(ph+1):'Farbzahl
310 ph=ph+2:'auf naechste Phase
320 GOSUB 430:'Animationsphase zeigen
330 '
340 t$="*":WHILE t$<>"":t$=INKEY$:WEND:BORDER 5,7
350 i=0:WHILE (i<500) AND (t$=""):t$=UPPER$(INKEY$):i=i+1:WEND
360 IF t$="S" THEN SAVE"ANISCR.BIN",b,&C000,&4000
370 BORDER 1
380 CLS
390 NEXT i2
400 PRINT"Bye"
405 STOP
410 '
420 REM Animationsphase zeigen
430 'x=UNT(PEEK(a)+PEEK(a+1)*256)
440 i=anidatadr+phase*2:'da 2 Bytes pro Datenoffset
450 a=UNT(anidatadr+(PEEK(i)+PEEK(i+1)*256))
460 REM
470 panz=PEEK(a):'Anz Punkte
480 IF panz=0 THEN RETURN
490 x=PEEK(a+1):y=PEEK(a+2):a=a+3
500 PLOT x*xm!+xv!,(255-y)*ym!+yv!:panz=panz-1:IF panz=0 THEN 470
510 FOR i=1 TO panz
520 x=PEEK(a):y=PEEK(a+1):a=a+2
530 DRAW x*xm!+xv!,(255-y)*ym!+yv!
540 NEXT i
550 GOTO 470
560 REM
9990 'file select
10000 f.st=6:f.t$="":f.f$=""
10010 if f.col=0 then f.col=26
10020 if f.row=0 then f.row=1
10030 window #f.st,f.col,f.col+14,f.row,25
10040 window swap f.st,0
10050 |dir,f.msk$
10060 window swap f.st,0
10070 f.r=f.row:f.rmax=f.r
10080 while f.r<=25
10090 locate #f.st,9,f.r-f.row+1:ch$=copychr$(#f.st)
10100 if ch$="." then f.rmax=f.r:locate f.col-2,f.r:print chr$(45+f.r-f.row);
10110 f.r=f.r+1
10120 wend
10130 locate f.col-2,f.rmax+4:print "Select: ";
10140 f.t$=inkey$:if f.t$="" then 10140
10150 if f.t$=chr$(13) then locate f.col-2,f.rmax+5:input "Name";f.f$:goto 10190
10160 f.t$=upper$(f.t$):f.r=asc(f.t$)-45:if f.r<1 or f.r>=f.rmax then 10140
10170 ?f.t$;
10180 f.f$="":for f.c=1 to 12:locate #f.st,f.c,f.r+1:f.f$=f.f$+copychr$(#f.st):next
10190 return
10200 rem
*/ });
