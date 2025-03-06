/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 REM magic8 - Magic 8-ball
5 REM https://rosettacode.org/wiki/Magic_8-ball#Locomotive_Basic
6 REM GNU FDL 1.2 (https://www.gnu.org/licenses/fdl-1.2.html)
10 mode 2:defint a-z:randomize time
20 input "Your question (hit Return to quit)";i$
30 if i$="" then print "Goodbye!":end
40 q=1+19*rnd
50 on q gosub 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290
60 goto 20
100 print "It is certain":return
110 print "It is decidedly so":return
120 print "Without a doubt":return
130 print "Yes, definitely":return
140 print "You may rely on it":return
150 print "As I see it, yes":return
160 print "Most likely":return
170 print "Outlook good":return
180 print "Signs point to yes":return
190 print "Yes":return
200 print "Reply hazy, try again":return
210 print "Ask again later":return
220 print "Better not tell you now":return
230 print "Cannot predict now":return
240 print "Concentrate and ask again":return
250 print "Don't bet on it":return
260 print "My reply is no":return
270 print "My sources say no":return
280 print "Outlook not so good":return
290 print "Very doubtful":return
*/ });
