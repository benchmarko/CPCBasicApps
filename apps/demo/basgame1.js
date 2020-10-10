/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem basgame1 - BASIC Game 1 / BASIC World (unfinished)
2 rem (c) Roald (Mr.Lou) Strauss
3 rem https://www.cpcwiki.eu/forum/programming/abandoned-basic-game-project/
4 rem
10 spr$(1)="d ":spr$(2)="e ":spr$(3)="hf":spr$(4)=" g"
20 'spr$(1)=" g":spr$(2)="ij":spr$(3)=" k":spr$(4)=" l"
30 KEY 0,"paper 0:symbol after 32:mode 2:ink 0,1:border 1:ink 1,24:pen 1:list"+chr$(13)+""
40 PAPER 0:MODE 2:INK 0,0:BORDER 0:INK 1,9:INK 2,18:INK 3,16:CALL &BD1C,1:PEN 1:IF PEEK(&BB5B)=0 THEN p=45711 ELSE p=46895
50 SYMBOL AFTER 32:z$=CHR$(0)+CHR$(0):x$=CHR$(0):q$=CHR$(34)
60 PRINT "!"z$ q$ q$ q$ x$ q$ x$""q$ z$"UU"z$ z$ x$"#"z$"UwUwU"x$"$"z$"3f"q$"3f"x$"%"z$"D"q$"D"x$"&"z$ q$"U"q$"U3"x$"'"z$ q$ q$ z$ z$"("z$""q$ q$ q$""x$
70 PRINT ")"z$"D"q$ q$ q$"D"x$"*"z$""x$"+"z$ x$""z$","z$ z$ z$""
80 PRINT "-"z$ z$"w"z$ x$"."z$ z$ z$ q$ x$"/"z$ x$""q$"D"z$"0"z$"wUUUw"x$"1"z$"f"q$ q$ q$"w"x$"2"z$"f"q$"Dw"x$"3"z$"f"q$"f"x$"4"z$"UUw"x$"5"z$"wDff"x$"6"z$ q$"DfUf"x$"7"z$"w"q$ q$ q$ x$
90 PRINT "8"z$ q$"U"q$"U"q$ x$"9"z$ q$"U3f"x$
100 PRINT ":"z$ x$"D"x$"D"z$";"z$ x$ q$ x$ q$"D"x$"<"z$""q$"D"q$""x$"="z$ x$"w"x$"w"z$">"z$"D"q$""q$"D"x$"?"z$"f"q$ x$ q$ x$
110 PRINT "A"z$ q$"UwUU"x$"B"z$"fUfUf"x$"C"z$"3DDD3"x$"D"z$"fUUUf"x$"E"z$"wDfDw"x$"F"z$"wDfDD"x$"G"z$"3DDU3"x$"H"z$"UUwUU"x$"I"z$"w"q$ q$ q$"w"x$"J"z$"wf"x$"K"z$"UUfUU"x$"L"z$"DDDDw"x$
120 PRINT "M"z$"UwUUU"x$"N"z$"UwwUU"x$"O"z$ q$"UUU"q$ x$"P"z$"fUfDD"x$"Q"z$ q$"UUU3"x$"R"z$"fUfUU"x$"S"z$"3D"q$"f"x$"T"z$"w"q$ q$ q$ q$ x$"U"z$"UUUU"q$ x$"V"z$"UUU"q$ q$ x$"
130 PRINT "W"z$"UUUwU"x$"X"z$"UU"q$"UU"x$"Y"z$"UU"q$ q$ q$ x$"Z"z$"w"q$"Dw"x$
140 SYMBOL 97,16,4,0,2,128,1,0,8:SYMBOL 98,2,128,16,4,0,64,2,128
150 SYMBOL 99,0,64,224,225,224,224,225,224
160 SYMBOL 100,0,34,66,66,66,2,33,65
170 SYMBOL 101,0,17,33,33,33,1,1,33
180 SYMBOL 102,0,136,8,8,8,8,72,64
190 SYMBOL 103,0,68,132,132,132,4,4,4
200 SYMBOL 104,0,0,16,16,16,0,0,1
210 SYMBOL 105,0,16,16,16,0,16,32,0:SYMBOL 106,136,8,8,8,8,4,4,0:SYMBOL 107,0,17,33,33,33,1,1,1:SYMBOL 108,34,66,66,66,2,20,24,0
220 POKE p,240:LOCATE 30,6:PRINT "LUBLU  ENTERTAINMENT":POKE p,15:LOCATE 36,9:PRINT "PRESENTS":POKE p,255:LOCATE 33,12:PRINT CHR$(34)"BASIC  WORLD"CHR$(34)
230 LOCATE 1,25:PRINT "abababababababababababababababababababababababababababababababababababababababab";
240 LOCATE 1,1:PRINT "abababababababababababababababababababababababababababababababababababababababab";
250 FOR n=2 TO 24:LOCATE 1,n:PRINT "ab";:LOCATE 79,n:PRINT "ab";:NEXT
260 ENV 1,15,-1,30:ENV 2,0,-4,1,10,-1,30:ENV 3,0,-6,1,7,-1,30:ENV 4,0,-7,1,6,-1,30:ENT -15,0,-8,6,0,16,6,0,-8,6
270 ENV 5,0,-8,1,2,1,4,4,-1,15,5,-1,25:ENV 6,0,-9,1,1,0,50:ENV 7,0,-10,1,1,0,50:ENV 8,0,-11,1,1,0,50
280 ENT -1,0,0,3,0,-49,3,0,-31,3,0,31,3,0,49,5:ENT -2,0,0,3,0,-45,3,0,-49,3,0,49,3,0,45,5:ENT -3,0,0,3,0,-74,3,0,-45,3,0,45,3,0,74,5:ENT -4,0,0,3,0,45,3,0,95,3,0,-95,3,0,-45,5:ENT -5,0,0,3,0,95,3,0,99,3,0,-99,3,0,-95,5
290 ENV 15,0,-5,1,2,1,1,8,-1,2:ENV 14,0,-8,1,2,1,1,6,-1,2:ENV 13,0,-9,1,2,1,1,5,-1,3:ENV 12,0,-10,1,2,1,1,4,-1,3:ENV 11,0,-11,1,2,1,1,3,-1,3:ENV 10,0,-12,1,2,1,1,2,-1,3:ENV 9,0,-13,1,2,1,1,2,-1,3
300 k$="ZSXDCVGBHNJM<L>[?+*     zsxdcvgbhnjm,l.{/;:     
"+chr$(13)+"                "
310 t$="            Q"+CHR$(34)+"W#ER%T&Y'UI)O_P]£`    q2w3er5t6y7ui9o0p}^@    ~    	  "
320 a%=1911:DIM tone%(255):FOR n%=1 TO LEN(k$):IF ASC(MID$(k$,n%,1))<>32 THEN tone%(ASC(MID$(k$,n%,1)))=a%
330 IF ASC(MID$(t$,n%,1))<>32 THEN tone%(ASC(MID$(t$,n%,1)))=a%
340 a%=a%*2^(-1/12):NEXT:tone%(32)=0
350 size%=13:DIM seq1$(size%),seq2$(size%),seq4$(size%),ent1$(size%),env1$(size%),env2$(size%),env4$(size%)
360 FOR q=1 TO 7:READ seq1$(q):NEXT
370 FOR q=1 TO 7:READ ent1$(q):NEXT
380 FOR q=1 TO 7:READ env1$(q):NEXT
390 FOR q=1 TO 13:READ seq4$(q),env4$(q):NEXT: ' Melody
400 FOR q=1 TO 11:READ seq2$(q):NEXT: ' Bass
410 FOR q=1 TO 11:READ env2$(q):NEXT: ' Bass
420 tempo%=18:itt1%=1:itt4%=1:pitt%=1
430 noise$="123456789abcdcba98765432"
440 p1$="": ' Chords
450 p2$="	
": ' Bass
460 p4$="	
"+chr$(13)+"": ' Melody
470 sp=1:vent=5:xx=3:now=TIME:steps=50
480 last=now:now=TIME:looptime=looptime+now-last:ON SQ(4) GOSUB 540
490 WHILE looptime>steps:LOCATE xx,24:PRINT spr$(sp):sp=sp+1:looptime=looptime-steps:IF sp=5 THEN sp=1:xx=xx+1
500 WEND
510 GOTO 480
520 a$=INKEY$:IF a$="" THEN 520
530 SOUND 1,tone%(ASC(a$)),0,15,9,4:GOTO 520
540 ' Sound
550 t1%=tone%(ASC(MID$(seq1$(ASC(MID$(p1$,pitt%,1))),itt1%,1))):ev1%=VAL("&"+MID$(env1$(ASC(MID$(p1$,pitt%,1))),itt1%,1)):e1%=VAL("&"+MID$(ent1$(ASC(MID$(p1$,pitt%,1))),itt1%,1)):IF e1%>0 THEN v1%=15 ELSE v1%=0
560 t2%=tone%(ASC(MID$(seq2$(ASC(MID$(p2$,pitt%,1))),itt1%,1))):e2%=VAL("&"+MID$(env2$(ASC(MID$(p2$,pitt%,1))),itt1%,1)):IF e2%>0 THEN v2%=15 ELSE v2%=0
570 t4%=tone%(ASC(MID$(seq4$(ASC(MID$(p4$,pitt%,1))),itt4%,1))):e4%=VAL("&"+MID$(env4$(ASC(MID$(p4$,pitt%,1))),itt4%,1)):IF e4%>0 AND t4%>0 THEN v4%=15 ELSE v4%=0
580 w%=VAL("&"+MID$(noise$,itt4%,1))
590 IF e4%=15 THEN SOUND 4,t4%,3,v4%,14,0,1:SOUND 4,t4%,tempo%-3,v4%,e4% ELSE IF e4%>12 THEN SOUND 4,t4%,2,v4%,e4%-1,0,1:SOUND 4,t4%,tempo%-2,v4%,e4% ELSE SOUND 4,t4%,3,v4%,10,0,w%:SOUND 4,t4%,tempo%-3,v4%,e4%
600 IF itt4% MOD 6 = 1 THEN SOUND 1,t1%,tempo%*6,v1%,ev1%,e1%:SOUND 2,t2%,tempo%*6,v2,e2%,15:itt1%=itt1%+1:IF itt1%>LEN(seq1$(1)) THEN itt1%=1
610 itt4%=itt4%+1:IF itt4%>LEN(seq4$(1)) THEN itt4%=1:pitt%=pitt%+1:IF pitt%>LEN(p4$) THEN pitt%=1
620 RETURN
630 DATA "qnqn","nvnv","qnqn","nnnn","nnnn","qqqq","vvvv"
640 DATA "1212","2323","4545","2222","2222","1111","3333"
650 DATA "5555","5555","5555","8877","6767","6767","6767"
660 DATA "                        "
670 DATA "000000000000000000000000"
680 DATA "eyeyeyyeueieeyeyeywyeyty"
690 DATA "ffeeddfffefdffeeddfffefd"
700 DATA "eyeyeyeyeyeyeyeyeyeyeyey"
710 DATA "ffeeddccccbbbbaaaa999999"
720 DATA "eyeyeyyeueiepepepepeoeie"
730 DATA "ffeeddfffefdffeeddfffefd"
740 DATA "ynynynynynynynynynynynyn"
750 DATA "ffeeddccccbbbbaaaa999999"
760 DATA "iyieypouotuoiyieypouotuo"
770 DATA "eeceeeeeceeeeeceeeeeceee"
780 DATA "itietpotoetoitietpotoeto"
790 DATA "eeceeeeeceeeeeceeeeeceee"
800 DATA "iyirypouotuoiyirypouotuo"
810 DATA "eeceeeeeceeeeeceeeeeceee"
820 DATA "iyieyiyeyeyeeqeqeqnqnqnq"
830 DATA "eeceeeeeceeeeeceeeeccbba"
840 DATA "iyieypouotuoiyieypouotuo"
850 DATA "ffefffffefffffefffffefff"
860 DATA "itietpotoetoitietpotoeto"
870 DATA "ffefffffefffffefffffefff"
880 DATA "iyirypouotuoiyirypouoeyi"
890 DATA "ffefffffefffffefffffefff"
900 DATA "yiyiyiyiyiyiyiyiyiyiyiyi"
910 DATA "feeddccccbbbbaaaa9999999"
920 DATA "    ","RRRQ","WWWB","NNNN","NNNN","NNNN","QQQQ","VVVV","NNNN","QQQQ","VVVV"
930 DATA "0000","1231","1231","1234","4433","2222","2222","2222","1111","1111","1111"
*/ });
