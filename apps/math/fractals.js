/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
10 ' Rekursiver Baum m. L-System-Fraktalen
20 ' (c) 1992 A. Mueller & CPC Internat.
30 GOSUB 430:'Default-Werte
40 GOSUB 440:'Werteeingabe
50 CLS:ORIGIN 280,0:DEG
60 t=0:s=0:x=0:y=0:w=90
70 GOSUB 100:'Grafikaufbau
80 GOSUB 350:'Speichern?
90 GOTO 40
100 IF t=m THEN x=x+COS(w)*l:y=y+SIN(w)*l:DRAW x,y:RETURN
110 t=t+1
120 GOSUB 100 ' F
130 GOSUB 100 ' F
140 w=w-a     ' +
150 GOSUB 330 ' [
160 w=w-a     ' +
170 GOSUB 100 ' F
180 w=w+a     ' -
190 GOSUB 100 ' F
200 w=w+a     ' -
210 GOSUB 100 ' F
220 GOSUB 340 ' ]
230 w=w+a     ' -
240 GOSUB 330 ' [
250 w=w+a     ' -
260 GOSUB 100 ' F
270 w=w-a     ' +
280 GOSUB 100 ' F
290 w=w-a     ' +
300 GOSUB 100 ' F
310 GOSUB 340 ' ]
320 t=t-1:RETURN
330 x(s)=x:y(s)=y:w(s)=w:s=s+1:RETURN:'Neuer Zweig 
340 s=s-1:x=x(s):y=y(s):w=w(s):MOVE x,y:RETURN:'Abschluss eines Zweiges  
350 SOUND 1,3822,40,15,1,2
360 SOUND 2,1517,50,15,1,2
370 SOUND 4,638,54,15,1,2
380 eing$=INKEY$:IF eing$<>"" THEN 400
390 SOUND 7,0,100,0:GOTO 350
400 SOUND 7+128,0
410 IF UPPER$(eing$)="S" THEN GOSUB 520:'Speichern
420 RETURN
430 ENV 1,24,-1,10:ENT 2,1,-3,16,1,3,16,1,3,16,1,-3,16:MODE 2:bildnr=0:a=22.5:l=7:m=4:DIM x(m),y(m),w(m):RETURN:'Vorbereitung     
440 CLS:PRINT "Winkel der einzelnen Glieder eines Zweiges zueinander: (Voreinstellung =";a;CHR$(8);")":LINE INPUT eing$
450 IF VAL(eing$)<>0 THEN a=VAL(eing$)
460 PRINT:PRINT "Laenge der Gliedstrecken: (Voreinstellung =";l;CHR$(8);")":LINE INPUT eing$    
470 IF VAL(eing$)<>0 THEN l=VAL(eing$) 
480 PRINT:PRINT "Rekursionstiefe: (Voreinstellung =";m;CHR$(8);")":LINE INPUT eing$     
490 IF VAL(eing$)<>0 THEN m=VAL(eing$)   
500 ERASE x,y,w:DIM x(m),y(m),w(m)
510 RETURN
520 bildnr=bildnr+1
530 datname$="bild"+MID$(STR$(bildnr),2)+".bin"
540 SAVE datname$,b,&C000,&4000
550 RETURN
*/ });
