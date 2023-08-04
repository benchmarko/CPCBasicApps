/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 REM balloon - Balloon (Luft)
2 rem (c)
3 rem 
4 rem Modifications: delay
10 SYMBOL AFTER 250:SYMBOL 250,1,7,15,15,31,31,15,15:SYMBOL 251,192,240,240,240,248,248,240,240:SYMBOL 252,7,7,5,2,2,1,1,1:SYMBOL 253,224,224,160,64,64,128,128,128:a=RND*10:b=0.4+0.6*RND:m=300:f=7500:z=0.97
20 DEF FNh(x)=(120+2*a)*SIN((x+440)/(90+a))+130+a+(20+a)*SIN(x/30/b)+10*SIN((x-20)/(5+a*b))
25 MODE 1:LOCATE 5,25:PRINT"Tasten 1, 2, Shift, Space";:LOCATE 1,1
26 DRAWR 30,0,3:FOR i=50 TO 580 STEP 5:y=FNh(i):y=-y*(y>0):DRAW i,y:NEXT:DRAW 600,0:DRAWR 39,0,2
30 while time<t1!:call &bd19:wend:t1!=time+40
35 IF INKEY(64)<>-1 THEN d=d-(d<9)
40 IF INKEY(65)<>-1 THEN d=d+(d>0)
50 IF INKEY(47)<>-1 THEN z=z*0.93
60 IF INKEY(21)<>-1 THEN m=m+30*(m>0)
70 f=z*(f+d*200):x=x+h^2.3*(TIME-t)/5000000:h=h+(f-10*m-6000)*((TIME-t)*0.001)^2:t=TIME:IF h<=0 THEN h=0
80 TAG:MOVE x1,h1+34:PRINT "  ";:MOVE x1,h1+18:PRINT "  ";:MOVE x,h+34:PRINT CHR$(250);CHR$(251);:MOVE x,h+18:PRINT CHR$(252);CHR$(253);:TAGOFF:x1=x:h1=h:IF x>589 AND x<630 AND h=0 THEN 110
90 IF x>30 AND x<590 AND h+14<=FNh(x+11) THEN SOUND 129,2800:GOTO 110
100 IF x<660 THEN 30
110 CLEAR INPUT:LOCATE 7,10:INPUT"NOCH EINMAL?  [J]a";A$:IF UPPER$(A$)="J" THEN RUN
*/ });
