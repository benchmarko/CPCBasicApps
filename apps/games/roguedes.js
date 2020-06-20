/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
10 REM roguedes - Rogue Descender (10-Line CPC RogueLike)
20 REM (c) Graham Briggs
30 REM QWE-AD-ZXC Moves, N skips to next level
40 REM Walk into enemies to attack
50 REM Enemies attack, but at a slower rate
60 REM Get the gold, kill as many enemies as possible, escape the dungeon alive
65 rem Modifications: delay in line 885
70 DEFINT a-z
80 DEF FN r(x)=RND*x+1 ' Random function 1dN
90 DEF FN d(s)=FN r(s)+FN r(s) ' 2dN die roll
100 INK 0,0
110 INK 3,7
120 BORDER 0
130 DIM m(40,24) ' Map
140 DIM qx(99),qy(99),qh(99),b(99) ' Monster X, Y, HP, Alive/Dead
150 d$="rdkoiZaONTMgV&LwHJADq%#*QKEG"
160 SYMBOL 255,223,223,223,0,251,251,251,0
170 SYMBOL 254,0,4,0,0,0,64,0,0
180 MODE 1
190 l=0 ' Current Level
200 g=0 ' Gold Acquired
210 a=1 ' Alive (true)
220 v=0 ' Victories in Fights
230 DEF FN i(a,b,c)=(INKEY(a)+INKEY(b)+INKEY(c))>-3 ' Lets us read three keys at once which was overkill in hindsight
240 r=FN d(17)
250 REM *** Outer Game Loop ***
260 WHILE l<24 AND a=1
270   l=l+1 ' Increment level - this is why l was set to 0 earlier
280   CLS
290   INK 2,25-l
300   INK 1,l MOD 8+13
310   PRINT"Descending"
320   REM *** Generate Map ***
330   FOR i=0 TO 39 ' Fill Map with Walls
340     FOR j=0 TO 23
350       m[i,j]=1
360   NEXT j,i
370   FOR k=0 TO 6 ' Add rooms of varying width, rely on overlaps to make caverns
380     FOR n=0 TO 6
390       x=FN r(38)
400       y=FN r(22)
410       w=FN r(n*2)
420       h=FN r(6-n)
430       FOR i=x-w TO x+w-2
440         xx=MAX(MIN(i,38),1)
450         FOR j=y-h TO y+h-2
460           yy=MAX(MIN(j,22),1)
470           m[xx,yy]=2
480       NEXT j,i
490       PRINT ".";
500   NEXT n,k
510   x=0
520   y=0
530   mn=19+l ' Monsters on current level
540   pt=1 ' Animation toggle for character sprite
550   e$=CHR$(255)+CHR$(254)+"$/\" ' Map tileset, note unused stairs
560   FOR i=0 TO mn
570     WHILE m[x,y]<>2 ' Find a floorspace, note outside of map is always wall
580       x=FN r(38)
590       y=FN r(22)
600     WEND
610     qx[i]=x
620     qy[i]=y
630     b[i]=1
640     e$=e$+MID$(d$,l+RND*4,1) ' Add a random enemy sprite to the tileset, level dictates choice
650     qh[i]=FN d(3+l) ' Give them some HP, more powerful on later levels
660     m[x,y]=i+6 ' Stick them on the map
670   NEXT
680   c$=CHR$(248) ' Player sprite
690   MID$(e$,6,1)=c$ ' So the player is displayed on-screen during the rendering
700   FOR i=0 TO 18+l ' Place gold
710     WHILE m[x,y]<>2
720       x=FN r(38)
730       y=FN r(22)
740     WEND
750     m[x,y]=3
760   NEXT
770   REM *** Display Map ***
780   CLS
790   FOR j=0 TO 23
800     FOR i=0 TO 39
810       k=m[i,j]
820       PEN k MOD 3+1
830       PRINT MID$(e$,k,1);
840   NEXT i,j
850   z=1 ' Monster Iterator - we move 1 monster per game cycle
860   s=-1 ' Flag if player wants to skip to next level
870   REM *** Inner Game Loop ***
880   WHILE a=1 AND s=-1
885     while time<t!:call &bd19:wend: t!=time+75
890     up=FN i(58,59,67) ' QWE
900     dn=FN i(71,63,62) ' ZXC
910     rt=FN i(58,61,62) ' EDC
920     lt=FN i(67,69,71) ' QAZ
930     ox=qx[0] ' Record player's current location
940     oy=qy[0]
950     nx=ox-rt+lt ' Player's new location
960     ny=oy+up-dn
970     e=m[nx,ny] ' What is at the new location?
980     g=g-(e=3) ' Gold!
990     ' Can move to new space, so erase old location in map and display, update player location, draw player
1000     IF e=2 OR e=3 THEN m[ox,oy]=2:LOCATE ox+1,oy+1:PEN 3:PRINT CHR$(254):qx[0]=nx:qy[0]=ny:m[nx,ny]=6:PEN 2:LOCATE nx+1,ny+1:PRINT c$
1010     k=2 ' Reset k, fixed a bug where dead enemies remained in the map data
1020     x=qx[z] ' Move a monster towards the player
1030     y=qy[z]
1040     ' If alive, record our monster type, move towards player. If hit player set flag f. If can move, move.
1050     IF b[z] THEN k=m[x,y]:nx=x+(x>ox)-(ox>x):ny=y+(y>oy)-(oy>y):t=m[nx,ny]:f=(t<>6)+1:IF t=2 THEN m[x,y]=2:PEN 3:LOCATE x+1,y+1:PRINT CHR$(254):x=nx:y=ny
1060     qx[z]=x ' Update monster location
1070     qy[z]=y
1080     m[x,y]=k
1090     p=b[z] ' p indicates mob dead/alive, 10-liner forced this as we have to put IFs at the end of lines
1100     z=z MOD (mn-1)+1 ' Increment mob counter, wrap when we hit the end
1110     s=INKEY(46) ' Record if player has hit N
1120     IF p THEN LOCATE x+1,y+1:PEN k MOD 3+1:PRINT MID$(e$,k,1)
1130     REM *** Print Status Bar ***
1140     PEN 1
1150     LOCATE 1,25
1160     PRINT "L: ";l;" G: ";g;" E: ";r
1170     c$=CHR$(248+pt) ' Animate player
1180     pt=1-pt
1190     ' Player has hit a monster during their move - decrease monster HP, kill them if 0, increment victories, erase
1200     IF e>6 THEN c=e-6:qh[c]=qh[c]-1:e=0:IF qh[c]=0 THEN b[c]=0:m[qx[c],qy[c]]=2:v=v+1:LOCATE qx[c]+1,qy[c]+1:PEN 3:PRINT CHR$(254)
1210     LOCATE 30,25 ' Print HP of last enemy you hit (or yourself at beginning of game, bug)
1220     PRINT "M: ";qh[c]
1230     r=r+(f=1) ' Decrease player HP if hit
1240     f=0
1250     a=(r<1)+1 ' Are we alive still?
1260   WEND
1270   REM *** Finished Level (or died) ***
1280   r=r+FN d(l*2) ' Some attempt at a finished level award (more HP)
1290   CALL &BB18 ' Wait for keyboard
1300 WEND
1310 REM *** End of Game ***
1320 CLS
1330 INK 1,26
1340 PRINT "Game Over! Level:";l;" Kills:";v;" Gold:";g
1350 IF a>0 THEN PRINT "You Survived!" ELSE PRINT "You died."
1360 REM We could GOTO 130 here I guess, but it's BASIC so the player can just RUN it again
2000 '
2010 '
2090 rem And here comes the 10-lines version:
2100 '
2110 DEFINT a-z:DEF FN r(x)=RND*x+1:DEF FN d(s)=FN r(s)+FN r(s):INK 0,0:INK 3,7:BORDER 0:DIM m(40,24):DIM qx(99),qy(99),qh(99),b(99):d$="rdkoiZaONTMgV&LwHJADq%#*QKEG":SYMBOL 255,223,223,223,0,251,251,251,0:SYMBOL 254,0,4,0,0,0,64,0,0:MODE 1:l=0:g=0:a=1:v=0
2120 DEF FN i(a,b,c)=(INKEY(a)+INKEY(b)+INKEY(c))>-3:r=FN d(17):WHILE l<24 AND a=1:l=l+1:CLS:INK 2,25-l:INK 1,l MOD 8+13:PRINT"Descending":FOR i=0 TO 39:FOR j=0 TO 23:m[i,j]=1:NEXT j,i:FOR k=0 TO 6:FOR n=0 TO 6:x=FN r(38):y=FN r(22):w=FN r(n*2):h=FN r(6-n)
2130 FOR i=x-w TO x+w-2:xx=MAX(MIN(i,38),1):FOR j=y-h TO y+h-2:yy=MAX(MIN(j,22),1):m[xx,yy]=2:NEXT j,i:PRINT ".";:NEXT n,k:x=0:y=0:mn=19+l:pt=1:e$=CHR$(255)+CHR$(254)+"$/\":FOR i=0 TO mn
2140 WHILE m[x,y]<>2:x=FN r(38):y=FN r(22):WEND:qx[i]=x:qy[i]=y:b[i]=1:e$=e$+MID$(d$,l+RND*4,1):qh[i]=FN d(3+l):m[x,y]=i+6:NEXT:c$=CHR$(248):MID$(e$,6,1)=c$:FOR i=0 TO 18+l:WHILE m[x,y]<>2:x=FN r(38):y=FN r(22):WEND
2150 m[x,y]=3:NEXT:CLS:FOR j=0 TO 23:FOR i=0 TO 39:k=m[i,j]:PEN k MOD 3+1:PRINT MID$(e$,k,1);:NEXT i,j:z=1:s=-1:WHILE a=1 AND s=-1:up=FN i(58,59,67):dn=FN i(71,63,62):rt=FN i(58,61,62)
2160 lt=FN i(67,69,71):ox=qx[0]:oy=qy[0]:nx=ox-rt+lt:ny=oy+up-dn:e=m[nx,ny]:g=g-(e=3):IF e=2 OR e=3 THEN m[ox,oy]=2:LOCATE ox+1,oy+1:PEN 3:PRINT CHR$(254):qx[0]=nx:qy[0]=ny:m[nx,ny]=6:PEN 2:LOCATE nx+1,ny+1:PRINT c$
2170 k=2:x=qx[z]:y=qy[z]:IF b[z] THEN k=m[x,y]:nx=x+(x>ox)-(ox>x):ny=y+(y>oy)-(oy>y):t=m[nx,ny]:f=(t<>6)+1:IF t=2 THEN m[x,y]=2:PEN 3:LOCATE x+1,y+1:PRINT CHR$(254):x=nx:y=ny
2180 qx[z]=x:qy[z]=y:m[x,y]=k:p=b[z]:z=z MOD (mn-1)+1:s=INKEY(46):IF p THEN LOCATE x+1,y+1:PEN k MOD 3+1:PRINT MID$(e$,k,1)
2190 PEN 1:LOCATE 1,25:PRINT "L: ";l;" G: ";g;" E: ";r:c$=CHR$(248+pt):pt=1-pt:IF e>6 THEN c=e-6:qh[c]=qh[c]-1:e=0:IF qh[c]=0 THEN b[c]=0:m[qx[c],qy[c]]=2:v=v+1:LOCATE qx[c]+1,qy[c]+1:PEN 3:PRINT CHR$(254)
2200 LOCATE 30,25:PRINT "M: ";qh[c]:r=r+(f=1):f=0:a=(r<1)+1:WEND:r=r+FN d(l*2):CALL &BB18:WEND:CLS:INK 1,26:PRINT "Game Over! Level:";l;" Kills:";v;" Gold:";g:IF a>0 THEN PRINT "You Survived!" ELSE PRINT "You died."
2300 '
*/ });
