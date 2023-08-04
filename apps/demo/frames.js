/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem frames - Frames Screen Saver
2 rem (c) ZbyniuR
3 rem https://www.cpcwiki.eu/forum/programming/basic-programming-tips/msg158838/#msg158838
4 rem Modifications: delay
5 rem
10 MODE 1:INK 0,0:BORDER 0:DEFINT a-z:a$=CHR$(150):b$=CHR$(156):c$=CHR$(147):d$=CHR$(153):e$=CHR$(154):f$=CHR$(149):g$=CHR$(9)
20 INK RND*2+1,RND*26:PEN RND*15 MOD 3+1:x=RND*29+1:y=RND*22+1:s=RND*10+2:w=RND*6+2:LOCATE x,y:PRINT a$STRING$(s,e$)b$:y=y+1:FOR a=1 TO w:LOCATE x,y:PRINT f$STRING$(s,g$)f$:y=y+1:NEXT:LOCATE x,y:PRINT c$STRING$(s,e$)d$;:gosub 30:GOTO 20
30 while time<t!:call &bd19:wend:t!=time+80:return
*/ });
