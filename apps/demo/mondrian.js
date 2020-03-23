/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
10 rem mondrian - Mondrian
20 rem
30 rem https://www.cpcwiki.eu/forum/programming/mondrian-next-try-to-get-a-topic/
40 rem https://www.youtube.com/watch?v=FUp3SffxPzw
50 rem
100 MODE 0:DEFINT a-z:BORDER 26:INK 0,26:INK 1,0:INK 2,24:INK 3,1:INK 4,3
110 PLOT 0,398,1:DRAW 638,398:DRAW 638,0:DRAW 0,0:DRAW 0,398
120 c=0:x=0:y=398:RANDOMIZE TIME:RANDOMIZE RND
130 GOSUB 1010
140 x=sx : c=c+1
150 IF c<=5 THEN GOTO 130
160 FOR p=1 TO 8
170   h=INT(RND*640):v=INT(RND*398):IF TEST(h,v)=0 THEN c=2:GOSUB 1110
180   h=INT(RND*640):v=INT(RND*398):IF TEST(h,v)=0 THEN c=3:GOSUB 1110
190   h=INT(RND*640):v=INT(RND*398):IF TEST(h,v)=0 THEN c=4:GOSUB 1110
200 NEXT p
210 t!=time+1000:while time<t! and inkey$="":call &bd19:wend: 'CALL &BB18:END
220 goto 100
250 '
1000 ' Draw Square Shapes & Draw Lines off Square to Remove L Shapes
1010 xp=INT(RND*20)+1 ' Width
1020 yp=xp/1.25 ' Height
1030 MOVE x,y:DRAW xp*32,y,1:sx=XPOS:DRAW xp*32,398-(yp*16):sy=YPOS:DRAW x,398-(yp*16):sy1=YPOS:DRAW x,y:sx2=XPOS
1040 sy5=sy+2:sy6=sy+2:WHILE (TEST(sx,sy6)=0) AND (sy6<398):sy6=sy6+2:WEND:sy6=sy6-2:MOVE sx,sy5:DRAW sx,sy6
1050 sy4=sy1-2:sy3=sy1-2:WHILE (TEST(sx,sy3)=0) AND (sy3>0):sy3=sy3-2:WEND:sy3=sy3+2:MOVE sx,sy4:DRAW sx,sy3
1060 sx3=sx2-4:WHILE (TEST(sx3,sy1)=0) AND (sx3>0):sx3=sx3-4:WEND:sx3=sx3+4:MOVE sx2,sy1:DRAW sx3,sy1
1070 RETURN
1100 ' Fill Square Routine
1110 tb=v
1120 WHILE TEST(h,tb)=0
1130   tb=tb-2
1140 WEND
1150 tb=tb+2
1160 tl=h
1170 WHILE TEST(tl,tb)=0
1180   tl=tl-4
1190 WEND
1200 tl=tl+4
1210 tr=h
1220 WHILE TEST(tr,tb)=0
1230   tr=tr+4
1240 WEND
1250 tr=tr-4
1260 tt=tb
1270 WHILE TEST(h,tt)=0
1280   tt=tt+2
1290 WEND
1300 tt=tt-2
1310 WHILE tb<=tt
1320   MOVE tl,tb:DRAW tr,tb,c
1330   tb=tb+2
1340 WEND
1350 RETURN
*/ });
