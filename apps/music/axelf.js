/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem axelf - Axel F (Harold Faltermeyer)
2 rem
3 rem youtube: https://youtu.be/dASqLXiuomY
4 rem Modifications: some delay; NEXT n without u
5 rem
300 'Axel:
310 MODE 1:LOCATE 10,10:PRINT"                Axel-F                                                                  by Harold Faltermeyer"
320 DEFINT A-Z:DIM B(7):RESTORE 350
330 DIM v1(1,23),v2(1,29),v3(1,23),vv1(1,50),vv2(1,50),vv3(1,50)
340 FOR m=0 TO 1:FOR n=1 TO 23:READ v1(m,n):NEXT n,m:FOR m=0 TO 1:FOR n=1 TO 29:READ v2(m,n):NEXT n,m:FOR n=1 TO 23:READ v3(0,n):NEXT
350 DATA 179,150,179,179,134,179,201,179,119,179,179,113,119,150,179,119,89,179,201,201,239,159,179,56,40,24,12,24,24,24,56,40,24,12,24,24,24,24,24,24,12,24,12,24,24,72,716,716,804,716,804,956,804,716,716,0,716,956,804,716,902,0,902,804,0,804,956,804,716
360 DATA 716,478,536,602,638,716,56,40,24,12,24,24,24,56,40,24,24,12,24,24,24,24,24,24,12,24,12,24,24,72 90,12,24,24,24,24,358,301,358,358,268,358,402,358,239,358,358,225,239,301,358,239,179,358,402,402,478,319,358
370 EVERY 50 GOSUB 840
380 ENV 1,8,1,1,6,-1,3:ENV 2,8,-1,7
390 ENV 3,6,-1,2:ENT 2,4,-1,6,8,1,6,8,-1,6,8,1,6,4,-1,6
400 GOSUB 750
410 k=0
420 FOR n=1 TO 23
430 SOUND 4,v3(0,n),v1(1,n),4:SOUND 1,v1(0,n),v1(1,n),7,1
440 WHILE SQ(4)>127:call &bd19:WEND  
450 NEXT
460 GOSUB 770
470 GOSUB 640
480 FOR l=1 TO 3:FOR n=1 TO 23
490 IF v2(0,n)=0 THEN e1=0 AND e2=0:GOTO 510    
500 e1=2:e2=2   
510 WHILE SQ(4)>127:call &bd19:WEND   
520 SOUND 4,v3(0,n),v1(1,n),4:SOUND 1,v1(0,n),v1(1,n),7,1:SOUND 2,v2(0,n),v2(1,n),0,e1,e2
530 NEXT
540 IF k=200 THEN GOTO 590  
550 GOSUB 770
560 GOSUB 640
570 IF k=300 THEN GOTO 590  
580 NEXT
590 ENV 15,8,-1,6
600 t!=time+166:while time<t!:call &bd19:wend: 'FOR n=1 TO 1250:NEXT
610 SOUND 2,1,48,15,15,0,5:SOUND 1,0,48,0:SOUND 4,0,48,0
620 FOR n=1 TO 5:SOUND 2,vv2(0,n),vv2(1,n),0,2,2:NEXT
630 GOTO 370
640 z=25    
650 k=k+100  
660 SOUND 2,v2(0,25),v2(1,25),0,2,2
670 FOR n=7 TO 1 STEP -1
680 z=z+1   
690 IF n=1 THEN GOTO 740
700 SOUND 2,v2(0,z),v2(1,z),0,2,2:SOUND 4,10,5,n,0,0,5
710 t!=time+28:while time<t!:call &bd19:wend: 'FOR u=1 TO 200:NEXT
720 SOUND 1,10,5,n,0,0,5:n=n-1
730 t!=time+28:while time<t!:call &bd19:wend: 'FOR u=1 TO 200:NEXT
740 NEXT:RETURN
750 FOR n=478 TO 179 STEP -13
760 SOUND 1,n,5,6:SOUND 2,n+5,5,6:SOUND 4,n+10,5,5:NEXT
770 RETURN
780 z=50  
790 FOR n=31 TO 1 STEP -3     
800 SOUND 1,1,4,u,0,0,n   
810 t!=time+z/6:while time<t!:call &bd19:wend: 'FOR x=1 TO z:NEXT
820 z=z-10    
830 NEXT n:return:',u:RETURN  
840 call &bd19:q$=INKEY$:IF q$="" THEN RETURN ELSE RUN
850 '
*/ });
