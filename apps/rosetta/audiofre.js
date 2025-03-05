/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 REM audiofre - Audio frequency generator
5 REM https://rosettacode.org/wiki/Audio_frequency_generator#Locomotive_Basic
10 mode 1:input "Enter initial frequency in Hz";f:cls
20 if sq(2)<128 then sound 2,62500/f,100
30 a$=inkey$
40 if a$="h" then f=f+10
50 if a$="l" then f=f-10
60 if a$="q" then end
70 locate 1,1:print f"Hz   "
80 print:print " Use h and l to adjust frequency;":print "  q to quit."
90 goto 20
*/ });
