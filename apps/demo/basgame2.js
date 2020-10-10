/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem basgame2 - BASIC Game 2 (unfinished)
2 rem (c) Roald (Mr.Lou) Strauss
3 rem https://www.cpcwiki.eu/forum/programming/another-unfinished-basic-game-project/
4 rem Note: Poking in string s$ is not supported in CPCBasic, so you cannot move the ship
5 rem
10 KEY 0,"ink 0,1:border 1:ink 1,24:pen 1:paper 0:mode 2:list"+chr$(13)+""
20 ENV 1,15,-1,1:ENV 2,15,-1,5:ENT 2,40,2,1:ENV 3,15,-1,10:ENT 3,100,2,2:ENV 4,15,1,1:ENT 4,100,-5,1
30 SYMBOL 249,0,0,0,0,0,0,56,0
40 SYMBOL 250,16,16,56,108,108,254,198,130:SYMBOL 251,16,32,32,16,8,8,16,16:SYMBOL 252,170,0,0,0,0,0,0,0:SYMBOL 253,173,154,170,164,84,72,40,16:SYMBOL 254,8,4,4,8,16,16,8,8:SYMBOL 255,16,16,16,16,16,16,16,16
50 PAPER 0:INK 0,1:BORDER 0:INK 1,22,18:INK 2,25,24:INK 3,15,24:SPEED INK 3,3:MODE 1:DIM enemypos%(32):FOR n%=0 TO 32:enemypos%(n%)=1:NEXT:x%=16:y%=23:c%=1:f%=1:s$="2ú3ù 3":a=@s$:adr=PEEK(a+1)+PEEK(a+2)*256:level%=12:levelchange%=2
60 PEN 1:FOR n%=1 TO 32:SOUND 1,1000-n%*10,1,15,1:LOCATE n%,enemypos%(n%):PRINT "1ý";:LOCATE n%,21:PRINT "2ü";:NEXT:r%=INT(RND*32)+1:pupx=adr+21:bullets%=29:GOSUB 350
70 curx=adr+1:oldx=adr+15:loops%=2000:t=TIME:WHILE 1:c%=(c%+1) AND 16383:PRINT s$;:j%=(JOY(0) AND 31):ON J% GOSUB 130,130,130,140,140,140,130,150,150,150,130,130,130,130,130,160,160,160,130,200,200,200,130,210,210,210
80 IF (JOY(0) AND 32) OR INKEY(47)=0 THEN GOSUB 260 ELSE f%=1:IF (JOY(0) AND 16)=0 THEN LOCATE 34,5:PRINT c%
90 IF (c% MOD level%)=0 THEN GOSUB 220
100 IF (c% MOD levelchange%)=0 THEN levelchange%=levelchange%*2:level%=level%-1:IF level%=0 THEN level%=1
110 IF px%=x% THEN GOSUB 350
120 WEND:tid=(TIME-t)/300:fps%=loops%/tid:CLS:PRINT tid"sekunder":PRINT fps%"FPS":END
130 RETURN ' Do nothing
140 POKE oldx,x%:x%=((x%-2) AND 31)+1:POKE curx,x%:RETURN ' Left
150 POKE oldx,x%:x%=(x% AND 31)+1:POKE curx,x%:RETURN ' Right
160 IF bullets%=0 THEN RETURN ELSE SOUND 2,10,10,15,2,2,1 ' Fire
170 rangeto%=enemypos%(x%)-INT(bullets%/50):IF rangeto%<2 THEN rangeto%=2
180 LOCATE x%,enemypos%(x%)+1:PRINT " ";:PEN 3:FOR n%=rangeto% TO enemypos%(x%):PRINT "û";:NEXT:GOSUB 220:LOCATE x%,enemypos%(x%):FOR n%=rangeto%+1 TO enemypos%(x%):PRINT " ";:NEXT:enemypos%(x%)=rangeto%-1
190 bullets%=bullets%-1:LOCATE 34,1:PRINT bullets%:RETURN
200 GOSUB 160:GOSUB 140:RETURN ' Fire + left
210 GOSUB 160:GOSUB 150:RETURN ' Fire + right
220 r%=INT(RND*32)+1:enemypos%(r%)=enemypos%(r%)+1:LOCATE r%,enemypos%(r%):PRINT "1þ";:IF enemypos%(r%)=20 THEN GOSUB 330
230 r%=INT(RND*32)+1:enemypos%(r%)=enemypos%(r%)+1:LOCATE r%,enemypos%(r%):PRINT "1þ";:IF enemypos%(r%)=20 THEN GOSUB 330
240 SOUND 4,INT(RND*500)+200,10,15,1
250 RETURN
260 IF f% THEN f%=0 ELSE RETURN ' Bomb
270 IF bullets%<10 THEN RETURN
280 SOUND 2,10,50,15,3,3,15:PEN 3:LOCATE x%,enemypos%(x%)+1:FOR n%=1 TO enemypos%(x%):PRINT "û";:NEXT:z%=((x%-2) AND 31)+1:LOCATE z%,enemypos%(z%)+1:FOR n%=1 TO enemypos%(z%)-1:PRINT "û";:NEXT:z%=(x% AND 31)+1:LOCATE z%,enemypos%(z%)+1
290 FOR n%=1 TO enemypos%(z%)-1:PRINT "û";:NEXT:LOCATE x%,enemypos%(x%)+1:FOR n%=2 TO enemypos%(x%):PRINT " ";:NEXT:enemypos%(x%)=1:z%=((x%-3) AND 31)+1:LOCATE z%,enemypos%(z%)+1:FOR n%=1 TO enemypos%(z%)-2:PRINT "û";:NEXT:z%=((x%+1) AND 31)+1
300 LOCATE z%,enemypos%(z%)+1:FOR n%=1 TO enemypos%(z%)-2:PRINT "û";:NEXT:z%=((x%-2) AND 31)+1:LOCATE z%,enemypos%(z%)+1:FOR n%=3 TO enemypos%(z%):PRINT " ";:NEXT:enemypos%(z%)=1:z%=(x% AND 31)+1:LOCATE z%,enemypos%(z%)+1:FOR n%=3 TO enemypos%(z%)
310 PRINT " ";:NEXT:enemypos%(z%)=1:z%=((x%-3) AND 31)+1:LOCATE z%,enemypos%(z%)+1:FOR n%=4 TO enemypos%(z%):PRINT " ";:NEXT:enemypos%(z%)=1:z%=((x%+1) AND 31)+1:LOCATE z%,enemypos%(z%)+1:FOR n%=4 TO enemypos%(z%):PRINT " ";:NEXT:enemypos%(z%)=1
320 bullets%=bullets%-10:LOCATE 34,1:PRINT bullets%:RETURN
330 PRINT "Dead"
340 END
350 SOUND 1,478,50,5,4,4:px%=INT(RND*32)+1:POKE pupx,px%:bullets%=bullets%+5:LOCATE 34,1:PRINT bullets%:RETURN ' New powerup position
*/ });
