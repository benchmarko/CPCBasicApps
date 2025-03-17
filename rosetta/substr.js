/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 REM substr - Substring: Top and tail
5 REM https://rosettacode.org/wiki/Substring/Top_and_tail#Locomotive_Basic
6 REM GNU FDL 1.2 (https://www.gnu.org/licenses/fdl-1.2.html)
10 a$="knight":b$="socks":c$="brooms"
20 PRINT MID$(a$,2)
30 PRINT LEFT$(b$,LEN(b$)-1)
40 PRINT MID$(c$,2,LEN(c$)-2)
*/ });
