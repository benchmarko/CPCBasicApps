/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 REM towers2 - Towers of Hanoi (Binary method)
5 REM https://rosettacode.org/wiki/Towers_of_Hanoi#Using_binary_method
6 REM GNU FDL 1.2 (https://www.gnu.org/licenses/fdl-1.2.html)
 10 DEF FNM3(X)=X-INT(X/3)*3:REM MODULO 3
 20 N=4:GOSUB 100
 30 END
 99 REM HANOI
100 :FOR M=1 TO 2^N-1
110 ::PRINT MID$(STR$(M),2);":",FNM3(M AND M-1)+1;"TO";FNM3((M OR M-1)+1)+1
130 :NEXT M
140 RETURN
*/ });
