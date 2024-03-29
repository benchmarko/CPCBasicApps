/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem blitter - Blitter
2 rem (c) Paul Bond
3 rem https://www.cpcwiki.eu/index.php/Amstrad_Action_July_1986_Type-Ins
4 rem https://www.cpc-power.com/index.php?page=detail&num=9154
5 rem
10 a=0.2
20 x=120
30 DEG
40 c%=3
50 c1%=9
60 MODE 0
70 FOR x%=&C000 TO &F7FF STEP 2:POKE x%,128:NEXT
80 FOR x%=&F800 TO &FFFF:POKE x%,192:NEXT
90 GOSUB 310:ORIGIN 0,0,0,640,0,400
100 col=1
110 FOR kkk=1 TO 100
120 FOR kk=1 TO col
130 x=x-4
140 IF x=0 THEN a=-0.2
150 IF x=-120 THEN GOTO 290
160 d=0
170 PLOT 320,300,1
180 FOR t%= 90 TO 270 STEP 4
190 chk=INT(200+100*SIN(t%))
200 IF chk=293 OR chk=243 OR chk=156 OR chk=106 THEN d=1
210 IF chk=276 OR chk=203 OR chk=128 THEN d=0
220 IF d=1 THEN DRAW 320+x*COS(t%),200+100*SIN(t%),c% ELSE DRAW 320+x*COS(t%),200+100*SIN(t%),c1%
230 NEXT t%
240 NEXT kk
250 col=col+a:c%=c%+1:c1%=c1%+1
260 IF c%=15 THEN c%=3
270 IF c1%=15 THEN c1%=3
280 NEXT kkk
290 GOTO 420
300 END
310 c=15
320 x%=0:y%=100:ORIGIN 380,200:PLOT -2,-2,c
330 d%=3-2*r
340 WHILE x%<y%+2
350 PLOT x%,y%:DRAW -x%,y%:PLOT y%,x%:DRAW -y%,x%:PLOT -x%,-y%:DRAW x%,-y%:PLOT -y%,-x%:DRAW y%,-x%
360 IF d%<0 THEN d%=d%+4*x%+6: GOTO 390
370 d%=d%+4*(x%-y%)+10
380 y%=y%-2
390 x%=x%+2
400 WEND
410 RETURN
420 d=2:'Change variable D for speed
430 KEY 1,"call&bc02:mode 2:list"+CHR$(13)
440 ENV 1,14,-1,2:'Set up envelopes and variables
450 ENT 1,100,5,1
460 dr=1:cl=3:cl2=9:fr=1: xd%=-1:yd=-0.5:x%=30:y=15
470 FOR x=2 TO 14 STEP 2:INK x,6:INK x+1,26:NEXT:'Set inks to correct colours
480 INK 15,1:INK 1,2:INK 0,11:BORDER 11
490 WHILE mainloop=0
500 INK cl,6:INK cl2,26
510 OUT &BC00,12:OUT &BD00,48+INT(t%/256):OUT &BC00,13:OUT &BD00,t% MOD 256:'Uses CRTC register 12 & 13 to set OFFSET for hardware scroll
520 IF x%>35 OR x%<15 THEN IF xd%=-1 THEN SOUND 1,1500,0,1,1,1 ELSE SOUND 4,1500,0,1,1,1 ELSE a=a
530 yd=yd-0.5:x%=x%+xd%
540 IF x%>35 OR x%<15 THEN xd%=-xd%:dr=-dr
550 t%=x%+(80*y):FOR a=1 TO d:CALL &BD19:NEXT:'Use FRAME instead of CALL&BD19 on 664 & 6128
560 y=y+yd:IF y<11 THEN yd=2.5
570 IF yd=2 THEN SOUND 2,1000,0,1,1,1
580 cl=cl+dr:IF cl=15 THEN cl=3 ELSE IF cl=2 THEN cl=14:'Keeps control of INK values to give illusion of rotation
590 cl2=cl2+dr:IF cl2=15 THEN cl2=3 ELSE IF cl2=2 THEN cl2=14
600 WEND
*/ });
