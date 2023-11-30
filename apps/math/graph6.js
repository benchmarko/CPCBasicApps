/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem graph6 - 3D Hidden Line Removal Graph
2 rem (c) John Valentine, 06/1988
3 rem
70 ' 3D HIDDEN LINE REMOVAL GRAPH
80 ' By John Valentine
90 ' Amstrad Action June 88
100 MODE 1:BORDER 13:INK 0,13:DEG
110 INK 1,26:INK 2,9:INK 3,9
120 DEFINT a-j,l-z:DIM g(21,21)
130 FOR x=0 TO 21:FOR y=0 TO 21
140 n=20-x:m=20-y
145 ' ## EQUATION LINE
150 'kh=1.6:k=(x-11)^2+(y-11)^2:g(x,y)=(COS(k*8)/(0.01*(k+2))*3+40)*kh-54
155 kh=36:g(x,y)=INT(SIN(x*13)*COS(y*10.5)*2)*kh+40
160 NEXT:NEXT
170 FOR x=20 TO 1 STEP -1
180 FOR y=20 TO 1 STEP -1
190 xx=-x*16+y*16:yy=x*8+y*8
200 ORIGIN xx+320,yy-16
210 x(1)=-16:x(2)=0:x(3)=16:x(4)=0
220 y(1)=g(x+1,y):y(3)=g(x,y+1)
230 y(2)=8+g(x+1,y+1):y(4)=g(x,y)-8
240 GOSUB 270
250 NEXT:NEXT
260 call &bd19:call &bb18:stop:'GOTO 260
265 ' ## DRAW SOLID QUADRILATERAL
270 f=0:ax=0:ay=0:g=20:h=20
280 FOR a=1 TO 5:n=a:IF n=5 THEN n=1
290 IF f=0 THEN f=1:MOVE x(n),y(n),2 ELSE DRAW x(n),y(n):ax=ax+x(n):ay=ay+y(n)
300 NEXT:ay=ay/4:ax=ax/4
310 n=0:f1=0:MOVE ax,ay:ay1=ROUND(y(2)+y(4))/2:MOVE 0,ay1:FILL 0:FILL 1:FILL 0:FILL 1
320 f=0:FOR a=1 TO 5:n=a:IF n=5 THEN n=1
330 IF f=0 THEN f=1:MOVE x(n),y(n),3 ELSE DRAW x(n),y(n)
340 NEXT:RETURN
380 ' ## EXAMPLE REPLACEMENT FOR LINE 150
400 ' kh=36:g(x,y)=INT(SIN(x*13)*COS(y*10.5)*2)*kh+40
*/ });
