/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 REM termct7 - Terminal control: Positional read
5 REM https://rosettacode.org/wiki/Terminal_control/Positional_read#Locomotive_Basic
6 REM GNU FDL 1.2 (https://www.gnu.org/licenses/fdl-1.2.html)
7 REM modifications: print char, read char and print
9 locate 3,6:?"a";
10 LOCATE 3,6
20 a$=COPYCHR$(#0)
25 locate 1,10:print"read char: ";
30 print a$
*/ });
