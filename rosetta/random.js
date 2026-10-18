/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 REM random - Random number generator (included)
5 REM https://rosettacode.org/wiki/Random_number_generator_(included)#Locomotive_Basic
6 REM GNU FDL 1.2 (https://www.gnu.org/licenses/fdl-1.2.html)
7 REM
100 REM cpcrng - CPC RNG simulation
110 REM same output as RND
120 MODE 2
130 RANDOMIZE 0
140 sh=27655:sl=35173: 'RNG state (for seed 0)
150 FOR i=1 TO 65536+6
160 ' generate next value
170 ha=(sh+1)*35173
180 sh=ha-INT(ha/65536)*65536
190 la=sl*62828+27655+INT(ha/65536)
200 sl=la-INT(la/65536)*65536
210 ' float output: swap words, divide by 2^32
220 r=(sl*65536+sh)/4294967296
230 d1=i/5000: IF d1=INT(d1) OR i = 6 THEN PRINT i,r
240 r2=RND:IF r2<>r THEN PRINT i;r2;"<>";r:STOP
250 NEXT
260 PRINT i,r
270 PRINT "ok"
*/ });
