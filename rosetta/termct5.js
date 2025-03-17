/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 REM termct5 - Terminal control: Hiding the cursor
5 REM https://rosettacode.org/wiki/Terminal_control/Hiding_the_cursor#Locomotive_Basic
6 REM GNU FDL 1.2 (https://www.gnu.org/licenses/fdl-1.2.html)
7 REM modifications: inserted FRAME; modified delay
8 PRINT "Hide Cursor"
10 CURSOR 0: REM hide cursor
20 FOR l = 1 TO 2000/20: REM delay
25 frame
30 NEXT l
35 PRINT "Show cursor"
40 CURSOR 1: REM show cursor
50 FOR l=1 to 100:frame:next
*/ });
