/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 REM rockpap - Rock-paper-scissors
5 REM https://rosettacode.org/wiki/Rock-paper-scissorse#Locomotive_Basic
6 REM GNU FDL 1.2 (https://www.gnu.org/licenses/fdl-1.2.html)
10 mode 1:defint a-z:randomize time
20 rps$="rps"
30 msg$(1)="Rock breaks scissors"
40 msg$(2)="Paper covers rock"
50 msg$(3)="Scissors cut paper"
60 print "Rock Paper Scissors":print
70 print "Enter r, p, or s as your play."
80 print "Running score shown as <your wins>:<my wins>"
90 achoice=rnd*2.99+.5 ' get integer between 1 and 3 from real between .5 and <3.5
100 ' get key
110 pin$=inkey$
120 if pin$="" then 110
130 pchoice=instr(rps$,pin$)
140 if pchoice=0 then print "Sorry?":goto 110
150 pcf(pchoice)=pcf(pchoice)+1
160 plays=plays+1
170 print "My play: "mid$(rps$,achoice,1)
180 sw=(achoice-pchoice+3) mod 3
190 if sw=0 then print "Tie." else if sw=1 then print msg$(achoice);". My point.":ascore=ascore+1 else print msg$(pchoice);". Your point.":pscore=pscore+1
200 print pscore":"ascore
210 rn=rnd*plays
220 if rn<pcf(1) then achoice=2 else if rn<pcf(1)+pcf(2) then achoice=3 else achoice=1
230 goto 110
*/ });
