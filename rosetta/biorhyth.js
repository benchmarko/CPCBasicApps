/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 REM biorhyth - Biorhythms
5 REM https://rosettacode.org/wiki/Biorhythms#Locomotive_Basic
6 REM GNU FDL 1.2 (https://www.gnu.org/licenses/fdl-1.2.html)
10 input "Birthday (y,m,d) ",y,m,d:gosub 3000
20 gosub 1000
30 bday = day
40 input "Today's date (y,m,d) ",y,m,d:gosub 3000
50 gosub 1000
60 diff = day - bday
70 print:print "Age in days:" tab(22) diff
80 t$ = "physical":l = 23:gosub 2000
90 t$ = "emotional":l = 28:gosub 2000
100 t$ = "intellectual":l = 33:gosub 2000
999 end
1000 ' Get the days to J2000
1010 ' FNday only works between 1901 to 2099 - see Meeus chapter 7
1020 day = 367 * y - 7 * (y + (m + 9) \ 12) \ 4 + 275 * m \ 9 + d - 730530
1030 return
2000 p = 100 * sin(2*pi*diff/l)
2010 print t$; " cycle: " tab(22)
2020 print using "+###"; int(p);
2030 print "%";
2040 if abs(p) < 15 then print " (critical)" else print
2050 return
3000 if y < 1901 or y > 2099 then print "Year must be between 1901 and 2099!":run
3010 return
*/ });
