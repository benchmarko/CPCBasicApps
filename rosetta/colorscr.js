/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 REM colorscr - Color of a screen pixel
5 REM https://rosettacode.org/wiki/Color_of_a_screen_pixel#Locomotive_Basic
6 REM GNU FDL 1.2 (https://www.gnu.org/licenses/fdl-1.2.html)
10 x=320:y=200
15 mode 1:plot x,y,3
20 color=TEST(x,y)
30 PRINT "Pen color at"; x; y; "is"; color
100 '
170 'extended
180 x0=0:y0=0
200 MOVE x0,y0
220 x0=XPOS:y0=YPOS
230 LOCATE 1,10:PRINT "Mouse click: Pen color at"; x; y; "is"; TEST(x,y)
240 MOVE 1000,1000 'activate move on mouse click (CPCBasic only)
250 '
260 FRAME
270 t$=INKEY$:x=XPOS:y=YPOS
280 IF t$="" AND x=1000 AND y=1000 THEN 260
380 IF x=1000 AND y=1000 THEN 260
440 GOTO 220
*/ });
