/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 REM introspe - Introspection
5 REM https://rosettacode.org/wiki/Introspection#Locomotive_Basic
6 REM GNU FDL 1.2 (https://www.gnu.org/licenses/fdl-1.2.html)
7 REM not with CPCBasic
10 s=&4000:SYMBOL AFTER 256:MEMORY s-1
20 FOR i=0 to 34:READ a:POKE s+i,a:NEXT
30 DATA &c5,&d5,&e5,&f5,&01,&00,&df,&ed,&49,&01,&86,&7f,&ed,&49
40 DATA &21,&01,&c0,&11,&40,&40,&01,&03,&00,&ed,&b0
50 DATA &01,&8e,&7f,&ed,&49,&f1,&e1,&d1,&c1,&c9
60 CALL s
70 PRINT "BASIC ROM version is ";PEEK(&4040);".";PEEK(&4041);".";PEEK(&4042)
80 IF PEEK(&4041)=0 THEN PRINT "Uh oh, you are still using BASIC 1.0": goto 100: 'END
90 PRINT "You are using BASIC 1.1 or later, program can continue"
100 '
101 '  Z80 machine code
102 'org &4000   ; program start address
103 '
104 'push bc
105 'push de
106 'push hl
107 'push af
108 'ld bc,&df00 ; select BASIC ROM
109 'out (c),c   ;   (ROM 0)
110 ' 
111 'ld bc,&7f86 ; make ROM accessible at &c000
112 'out (c),c             ;   (RAM block 3)
113 '
114 'ld hl,&c001 ; copy ROM version number to RAM 
115 'ld de,&4040
116 'ld bc,3
117 'ldir
118 '
119 'ld bc,&7f8e ; turn off ROM
120 'out (c),c
121 'pop af
122 'pop hl
123 'pop de
124 'pop bc
125 'ret
999 '
1000 ' decide randomly whether to define the variable:
1010 IF RND>.5 THEN bloop=-100*RND
1020 ON ERROR GOTO 1070
1030 a=@bloop  ' try to get a pointer
1040 PRINT "Variable bloop exists and its value is",bloop
1050 PRINT "ABS of bloop is",ABS(bloop)
1060 goto 2000: 'END
1070 IF ERL=30 THEN PRINT "Variable bloop not defined":RESUME 1060
1080 '
2000 ' The program should find and add those three integers (%), ignoring reals:
2010 foo%=-4:bar%=7:baz%=9:somereal=3.141
2020 varstart=&ae68   ' for CPC 664 and 6128
2030 ' varstart=&ae85 ' (use this line instead on the CPC 464)
2040 start=PEEK(varstart)+256*PEEK(varstart+1)
2050 WHILE start<HIMEM
2060 j=2:WHILE j<43 ' skip variable name
2070 IF PEEK(start+j)=0 GOTO 2160
2080 IF PEEK(start+j)>127 THEN ptr=start+j+1:j=100
2090 j=j+1:WEND
2100 vartype=PEEK(ptr) ' integer=1, string=2, real=4
2110 IF vartype=1 THEN sum=sum+UNT(PEEK(ptr+1)+256*PEEK(ptr+2)):num=num+1:nvar=ptr+3
2120 IF vartype=2 THEN nvar=ptr+4
2130 IF vartype=4 THEN nvar=ptr+6
2140 start=nvar
2150 WEND
2160 PRINT "There are"num"integer variables."
2170 PRINT "Their sum is"sum
2180 END
*/ });
