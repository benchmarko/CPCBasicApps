/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem hello1 - Hello World (1 line)
2 rem (c) ZbyniuR
3 rem https://www.cpcwiki.eu/forum/programming/basic-programming-tips/msg206871/#msg206871
4 rem Modifications: delay
5 rem
10 MODE 0:BORDER 0:FOR i=0 TO 15:INK i,ASC(MID$("@YXOFCDHQTKBAIRV",i+1,1))-64:NEXT:WHILE-1:FOR p=1 TO 15 STEP 0.5:gosub 20:PEN p:s=(s+1)MOD 18:LOCATE VAL(MID$("112345678998765432",s+1,1)),1:PRINT"Hello World!"CHR$(30)CHR$(11):NEXT:WEND
20 while time<t!:call &bd19:wend:t!=time+27:return
*/ });
