/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 REM metronom - Metronome
5 REM https://rosettacode.org/wiki/Metronome#Locomotive_Basic
6 REM modifications: inserted FRAME
10 bpm=120:bpb=4
20 sleep=50*60/bpm
30 counter=0
40 every sleep gosub 100
50 frame:goto 50
100 print counter+1;" ";
110 if counter=0 then print ">TICK<":sound 1,60,10,15 else print " tick ":sound 1,119,10
120 counter=counter+1
130 if counter=bpb then counter=0
140 return
*/ });
