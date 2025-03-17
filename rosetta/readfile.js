/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 REM readfile - Read a file line by line
5 REM https://rosettacode.org/wiki/Read_a_file_line_by_line#Locomotive_Basic
6 REM GNU FDL 1.2 (https://www.gnu.org/licenses/fdl-1.2.html)
7 REM modification: create the file before reading it
8 openout"foo.txt":print#9,"Hello, World!":print #9,"Goodbye.":closeout
10 OPENIN"foo.txt"
20 WHILE NOT EOF
30 LINE INPUT#9,i$
40 PRINT i$
50 WEND
*/ });
