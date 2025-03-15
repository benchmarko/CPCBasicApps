/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 REM callfor - Call a foreign-language function
5 REM https://rosettacode.org/wiki/Call_a_foreign-language_function#Locomotive_Basic
6 REM GNU FDL 1.2 (https://www.gnu.org/licenses/fdl-1.2.html)
10 'org &1000
20 'ld a,'A'
30 'call &bb5a
40 'ret
100 '
110 'we use this:
120 'ld a,1
130 'call &bb5a
140 CALL &BB5A,1
150 'ld a,10
160 'call &bb5a
170 CALL &BB5A,1,1,1,1,1,1,1,1,1,1
180 'ret
*/ });
