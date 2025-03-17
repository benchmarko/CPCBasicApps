/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 REM rainbow - Rainbow
5 REM https://rosettacode.org/wiki/Rainbow#Locomotive_Basic
6 REM GNU FDL 1.2 (https://www.gnu.org/licenses/fdl-1.2.html)
7 REM modification: no endless loop
10 mode 0:ink 0,10:locate 7,10:s$="RAINBOW"
20 for i=1 to 7
30 read col:ink i,col:pen i
40 print mid$(s$,i,1);
50 next
60 while inkey$="":wend:'goto 60
70 data 6,15,24,18,2,5,8
*/ });
