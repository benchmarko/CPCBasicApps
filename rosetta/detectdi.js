/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 REM detectdi - Detect division by zero
5 REM https://rosettacode.org/wiki/Detect_division_by_zero#Locomotive_Basic
6 REM GNU FDL 1.2 (https://www.gnu.org/licenses/fdl-1.2.html)
7 'not detected in CPCBasic
10 ON ERROR GOTO 60
20 PRINT 2/3
30 PRINT 3/5
40 PRINT 4/0
50 END
60 IF ERR=11 THEN PRINT "Division by zero in line"ERL:RESUME 50
*/ });
