/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 REM termct3 - Terminal control: Dimensions
5 REM https://rosettacode.org/wiki/Terminal_control/Dimensions#Locomotive_Basic
6 REM GNU FDL 1.2 (https://www.gnu.org/licenses/fdl-1.2.html)
10 '4000 d5          push de
20 '4001 e5          push hl
30 '4002 cd 69 bb    call &bb69
40 '4005 ed 53 20 40 ld (&4020),de
50 '4009 22 22 40    ld (&4022),hl
60 '400c e1          pop hl
70 '400d d1          pop de
80 '400e c9          ret
90 '
110 s=&4000:SYMBOL AFTER 256:MEMORY s-1
120 FOR i=0 to 14:READ a:POKE s+i,a:NEXT
130 DATA &d5,&e5,&cd,&69,&bb,&ed,&53,&20,&40,&22,&22,&40,&e1,&d1,&c9
140 CALL s
150 h=PEEK(&4020)-PEEK(&4022)+1
160 w=PEEK(&4021)-PEEK(&4023)+1
170 PRINT "window width:"; w; ", height:"; h
180 '
410 w%=0:h%=0      ' initialize and force integer type
420 'TODO: |getwh,@w%,@h% ' call RSX and pass variables as pointers
430 PRINT "window width:"; w%; ", height:"; h%
440 '
510 PRINT "window width:"PEEK(&B72C)+1", height:"PEEK(&B72B)+1
520 '
*/ });
