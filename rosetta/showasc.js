/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 REM showasc - Show ASCII table
5 REM https://rosettacode.org/wiki/Show_ASCII_table#Locomotive_Basic
6 REM GNU FDL 1.2 (https://www.gnu.org/licenses/fdl-1.2.html)
10 mode 1:defint a-z
20 for x=1 to 6
30 for y=1 to 16
40 n=16*(x-1)+y+31
50 locate 6*(x-1)+1,y
60 print using "###";n;
70 print " ";chr$(n);
80 next
90 next
*/ });
