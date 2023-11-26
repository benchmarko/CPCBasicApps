/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem pixelscr - Pixel Scroll
2 rem
3 rem
10 REM pixel scroll
20 ' Aufrufen der Routine mit call &8000
90 'hier evtl. SYMBOL einsetzen (vor dem MEMORY-Befehl)
100 MEMORY &7FFF:a=&8000
110 READ x:IF x=-1 THEN 500
120 POKE a,x:a=a+1:GOTO 110
130 DATA
140 DATA &f3,&11,&00,&c0,&21,&00,&c8,&3e,&19,&e5,&01,&50,&00,&ed,&b0,&e1,&54
150 DATA &5d,&01,&00,&08,&09,&30,&f1,&01,&b0,&3f,&a7,&ed,&42,&3d,&20,&e8
160 DATA &21,&80,&ff,&06,&50,&36,&00,&23,&10,&fb,&fb,&c9,-1
500 INPUT i:FOR p=1 TO i:
510 gosub 800: 'CALL &8000
520 CALL &BD19:NEXT p
530 stop
540 '
790 '
800 de=&C000+65536:hl=&c800+65536:a=&19
810 hl2=hl:bc=&50
820 while bc>0
830 poke de,peek(hl):de=de+1:hl=hl+1:bc=bc-1
840 wend
850 hl=hl2:de=hl:bc=&800
860 hl=hl+bc:if hl<65536 then 810
870 bc=&3fb0:hl=hl-bc
880 a=a-1: if a>0 then 810
890 hl=&ff80+65536:b=&50
900 while b>0:poke hl,0:hl=hl+1:b=b-1:wend
910 return
990 '
1000 'DI
1010 'LD DE,&C000
1020 'LD HL,&C800
1030 'LD A,&19
1040 'L800A: PUSH HL
1050 'LD BC,&0050
1060 'LDIR
1070 'POP HL
1080 'LD D,H
1090 'LD E,L
1100 'LD BC,&0800
1110 'ADD HL,BC
1120 'JR NC,L800A
1130 'LD BC,&3FB0
1140 'AND A
1150 'SBC HL,BC
1160 'DEC A
1170 'JR NZ,L800A
1180 'LD HL,&FF80
1190 'LD B,&50
1200 'L8027: LD (HL),&00
1210 'INC HL
1220 'DJNZ L8027
1230 'EI
1240 'RET
1250 '
*/ });
