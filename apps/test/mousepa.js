/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
10 rem mousepa - Mouse Painting
20 rem CPCBasic only
25 m=1
30 mode m
35 xd=2^(2-min(m,2)):yd=((m=3)+2)
36 'xd8=xd*8:yd8=yd*8
40 window #1,2,16,50/yd,50/yd
50 d$(0)="plot":d$(1)="draw":d$(2)="fill":d=0
60 '
70 move x0,x0:locate #1,1,1:print#1,chr$(242);d$(d);chr$(243); 'drawing mode
80 '
90 x0=xpos:y0=ypos
100 locate #1,8,1:print#1,using"### ";x0;y0; 'show coordinates
110 move 1000,1000 'activate move on mouse click
120 '
130 call &bd19
131 t$=inkey$:if t$="" then 140
132 'there is also a side effect when clicking on a character
133 'check for drawing mode select
134 i=instr("PDF"+ chr$(242)+chr$(243),upper$(t$))
135 if i>=1 and i<=3 then d=i-1:goto 70: 'direct select: plot draw fill
136 if i=4 then d=d+2:d=d mod 3:goto 70: 'left arrow
137 if i=5 then d=d+1:d=d mod 3:goto 70: 'right arrow
138 if t$<>" " then print t$; 'click on character
140 if xpos=1000 and ypos=1000 then 130
150 x=xpos:y=ypos
160 'if y>=0 and y<yd8 then if x>=xd and x<xd8*2 then move x0,y0:d=d+2:d=d mod 3:goto 70 else if x>=xd8*6 and x<xd8*7 then move x0,y0:d=d+1:d=d mod 3:goto 70: click left or right arrow
170 if d=0 then plot x,y
180 if d=1 then move x0,y0:draw x,y
190 if d=2 then if test(x,y)=2 then fill 3 else fill 2
200 goto 90
210 '

*/ });
