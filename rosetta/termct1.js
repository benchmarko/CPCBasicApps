/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 REM termct1 - Terminal control: Coloured text
5 REM https://rosettacode.org/wiki/Terminal_control/Coloured_text#Locomotive_Basic
6 REM GNU FDL 1.2 (https://www.gnu.org/licenses/fdl-1.2.html)
10 mode 1:defint a-z
20 print "Mode 1 (4 colors):"
30 for y=0 to 3
40 for x=0 to 3
50 pen x:paper y:print "Test";
60 next
70 print
80 next
90 pen 1:paper 0
100 locate 1,25:print "<Press any key>";:call &bb06
110 ink 1,8,26
120 ink 2,21,17
130 locate 1,25:print "Flashing inks --- <Press any key>";:call &bb06
140 speed ink 8,3
150 locate 1,25:print "Different flashing --- <Press any key>";:call &bb06
160 ink 1,24:ink 2,20  ' back to defaults -- see chapter 1, page 50 in CPC manual
170 pen 1:paper 0:mode 0:speed ink 50,50
180 print "Mode 0 (16 colors):"
190 for i=0 to 15
200 pen i
210 if i=0 then paper 1 else paper 0
220 print using "##";i;
230 for j=1 to 18
240 print chr$(143);
250 next
260 next
270 pen 1:paper 0
280 print "Paper/pen 14 and 15"
290 print "are set to";
300 pen 14:print " flashing":pen 1
310 print "by default."
320 print
330 print "*End of color demo*"
340 locate 1,25:print "<Press any key>";:call &bb06
350 mode 1
*/ });
