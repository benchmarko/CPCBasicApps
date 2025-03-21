/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 REM nqueens - N-queens problem
5 REM https://rosettacode.org/wiki/N-queens_problem#Locomotive_Basic
6 REM GNU FDL 1.2 (https://www.gnu.org/licenses/fdl-1.2.html)
10 mode 1:defint a-z
20 while n<4:input "How many queens (N>=4)";n:wend
30 dim q(n),e(n),o(n)
40 r=n mod 6
50 if r<>2 and r<>3 then gosub 320:goto 220
60 for i=1 to int(n/2)
70 e(i)=2*i
80 next
90 for i=1 to round(n/2)
100 o(i)=2*i-1
110 next
120 if r=2 then gosub 410
130 if r=3 then gosub 460
140 s=1
150 for i=1 to n
160 if e(i)>0 then q(s)=e(i):s=s+1
170 next
180 for i=1 to n
190 if o(i)>0 then q(s)=o(i):s=s+1
200 next
210 ' print board
220 cls
230 for i=1 to n
240 locate i,26-q(i):print chr$(238);
250 locate i,24-n   :print chr$(96+i);
260 locate n+1,26-i :print i;
270 next
280 locate 1,1
290 call &bb06
300 end
310 ' the simple case
320 p=1
330 for i=1 to n
340 if i mod 2=0 then q(p)=i:p=p+1
350 next
360 for i=1 to n
370 if i mod 2 then q(p)=i:p=p+1
380 next
390 return
400 ' edit list when remainder is 2
410 for i=1 to n
420 if o(i)=3 then o(i)=1 else if o(i)=1 then o(i)=3
430 if o(i)=5 then o(i)=-1 else if o(i)=0 then o(i)=5:return
440 next
450 ' edit list when remainder is 3
460 for i=1 to n
470 if e(i)=2 then e(i)=-1 else if e(i)=0 then e(i)=2:goto 500
480 next
490 ' edit list some more
500 for i=1 to n
510 if o(i)=1 or o(i)=3 then o(i)=-1 else if o(i)=0 then o(i)=1:o(i+1)=3:return
520 next
*/ });
