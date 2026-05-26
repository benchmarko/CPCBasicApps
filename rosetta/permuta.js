/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 REM permuta - Permutation test
5 REM https://rosettacode.org/wiki/Permutation_test#Locomotive_Basic
6 REM GNU FDL 1.2 (https://www.gnu.org/licenses/fdl-1.2.html)
100 DEFINT i,n,r,s,t
110 ntreated=9
120 nplacebo=10
130 n=ntreated+nplacebo
140 DIM results(n-1),sel(ntreated-1)
150 DATA 85,88,75,66,25,29,83,39,97
160 DATA 68,41,10,49,16,65,32,92,28,98
170 FOR i=0 TO n-1
180   READ results(i)
190 NEXT
200 ' initial combination: 0,1,2,...,8
210 FOR i=0 TO ntreated-1
220   sel(i)=i
230 NEXT
240 GOSUB 310
250 percent=100*greater/groups
260 PRINT "Percentage groupings: actual experiment"
270 PRINT "<= :";100-percent
280 PRINT ">  :";percent
290 END
300 '
310 greater=0
320 groups=0
330 total=0
340 FOR i=0 TO n-1
350   total=total+results(i)
360 NEXT
370 GOSUB 560
380 actual=meandiff
390 WHILE 1
400   GOSUB 560
410   groups=groups+1
420   IF meandiff>actual THEN greater=greater+1
430   i=ntreated-1
440   WHILE sel(i)=n-ntreated+i
450     i=i-1
460     IF i<0 THEN RETURN
470   WEND
480   sel(i)=sel(i)+1
490   FOR i=i+1 TO ntreated-1
500     sel(i)=sel(i-1)+1
510   NEXT
520 WEND
530 RETURN
540 '
550 ' evaluate selected group
560 tsum=0
570 FOR i=0 TO ntreated-1
580   tsum=tsum+results(sel(i))
590 NEXT
600 psum=total-tsum
610 meandiff=tsum/ntreated-psum/nplacebo
620 RETURN
*/ });
