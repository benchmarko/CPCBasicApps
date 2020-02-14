/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
10 ' Tanks Alot! Extended Version
20 ' ----- ----- -------- -------
30 ' Setup Screen Mode, Border, Inks and Playing Screen
40 MODE 0
50 BORDER 24
60 INK 0,25
70 INK 1,15
80 INK 2,18
90 INK 3,9
100 INK 4,13
110 WINDOW#1,5,15,5,19
120 WINDOW#2,5,15,20,20
130 PAPER#1,1
140 CLS#1
150 PAPER#2,1
160 CLS#2
170 PEN 3
180 LOCATE 5,1
190 PRINT"Tanks Alot!"
200 LOCATE 6,3
210 PEN 1
220 ' Define Variables, Print Stage Number and Randomize RND function
230 DEFINT a-m,o-z
240 q=1 ' Stage Number
250 PRINT"Stage ";q
260 RANDOMIZE TIME
270 RANDOMIZE RND
280 ' Define Graphics
290 SYMBOL 240,60,129,36,129,36,129,24,24
300 SYMBOL 241,0,126,219,102,219,126,0,0
310 SYMBOL 242,24,24,60,102,195,195,102,60
320 ' Set initial values for variables
330 t=1 ' Initial time counter for Rolling Screen
340 x=5 ' Initial Position for Lazer Cannon
350 d=0 ' Main Game Loop and Death (d=1) or Game Complete (d=2)
360 l=6 ' Intial value for level counter which decreases when 10 Tanks are destroyed
370 s=0 ' Initial Score counter to count Tanks Destroyed 
380 ' Main Game Loop
390 WHILE d=0
400   n=RND(1) ' Select a number between 0.0 and 1.0
410   WHILE (t MOD l=0) ' Check if t equals level counter
420     t=1 ' if so return time counter to 1
430     WHILE n<0.4 ' if random number is less than 0.4
440       GOSUB 940 ' Draw another Tank
450       n=0.5     ' This is used to exit the Loop
460     WEND
470     LOCATE#1,1,1:PRINT#1,CHR$(11) ' This positions cursor and Character 11 causes a roll, but only to WINDOW#1 (where the Tanks are placed)
480   WEND
490   t=t+1 ' Increment the Time counter
500   ' Check Keypresses
510   IF INKEY(8)=0 AND x>1 THEN CALL &BB03:LOCATE#2,x,1:PRINT#2," ";:x=x-1 ' Apply if Left Cursor has been pressed
520   IF INKEY(1)=0 AND x<11 THEN CALL &BB03:LOCATE#2,x,1:PRINT#2," ";:x=x+1 ' Apply if Right Cursor has been pressed
530   ' Has Space Bar Been Pressed to fire Lazer?
540   ' If True v = Graphical Position adacent to Lazer Cannon
550   '         b = Graphical Position above Lazer Cannon
560   '         p = loop position until another Colour is found, decrement p until that happens
570   '         Sound Lazer
580   '         Loop C for Lazer Flash, Plot Position adacent & above Lazer Cannon
590   '         y = point where another colour is found, used to draw to target
600   '         Loop A is used to delay Lazer
610   '         Final Plot if Lazer has missed target
620   IF INKEY(47)=0 THEN v=(x+3)*32+14:b=96:p=17:WHILE (TEST(v,398-(p*16+2))=1):p=p-1:WEND:SOUND 2,20,6,7,,,10:FOR c=0 TO 1:PLOT v,b,c:y=398-((p+1)*16)+2:DRAW v,y:FOR a=1 TO 3:CALL &BD19:NEXT a:NEXT c:PLOT v,y,0
630   ' Draw Lazer Cannon
640   CALL &BD19
650   LOCATE#2,x,1
660   PEN#2,4
670   PRINT#2,CHR$(242);
680   ' Has Lazer Found a Target?
690   IF p>3 THEN s=s+1:SOUND 2,3995,10,7,,,31:LOCATE#1,x,p-3:PRINT#1,CHR$(22);CHR$(0);" ";CHR$(22);CHR$(1);:p=0
700   ' Have 10 Enemy Tanks being Destroyed?
710   WHILE s=10
720     l=l-1 ' Lower number for next stage
730     q=q+1 ' increase Stage Number
740     LOCATE 12,3
750     PEN 1
760     PRINT q;
770     s=0
780     CLS#1 ' Used to clear the board for the next stage
790     WHILE l=1 ' Used to determine if the end of the game is found
800       d=2
810       l=0
820       LOCATE 6,3:PRINT SPACE$(8) ' Clear the Stage Line
830     WEND
840   WEND
850   ' Check if Tanks have reached the bottom of the board
860   FOR z=144 TO 464 STEP 32
870     IF TEST(z,96)=2 THEN d=1
880   NEXT z
890 WEND ' End of Main Game Loop
900 ' Check if Game is Won or Lost
910 IF d=2 THEN LOCATE 4,21:PRINT"You Have Won!":WHILE INKEY(18)=-1:WEND:RUN
920 IF d=1 THEN SOUND 1,0,10,15,,,31:LOCATE#2,x,1:PEN#2,0:PRINT#2,CHR$(238);:LOCATE 5,21:PRINT"Game  Over!":WHILE INKEY(18)=-1:WEND:RUN
930 ' Routine to Select New Position and Print the Tanks
940 PRINT#1,CHR$(22);CHR$(1); ' Transparent Mode On (Allows for Multicoloured Graphics)
950 w=(RND*10)+1 ' Select a new Random Position
960 LOCATE#1,w,1
970 PEN#1,2
980 PRINT#1,CHR$(240);
990 PEN#1,3
1000 LOCATE#1,w,1
1010 PRINT#1,CHR$(241);
1020 PRINT CHR$(22);CHR$(0); ' Transparent Mode Off
1030 RETURN
1999 '
2000 'and the same in 10 lines...
2001 MODE 0:BORDER 24:INK 0,25:INK 1,15:INK 2,18:INK 3,9:INK 4,13:WINDOW#1,5,15,5,19:WINDOW#2,5,15,20,20:PAPER#1,1:CLS#1
2002 PAPER#2,1:CLS#2:DEFINT a-m,o-z:PEN 3:LOCATE 5,1:PRINT"Tanks Alot!":LOCATE 6,3:PEN 1:q=1:PRINT"Stage ";q:RANDOMIZE TIME:RANDOMIZE RND
2003 SYMBOL 240,60,129,36,129,36,129,24,24:SYMBOL 241,0,126,219,102,219,126,0,0:SYMBOL 242,24,24,60,102,195,195,102,60
2004 t=1:x=5:d=0:l=6:s=0:WHILE d=0:n=RND(1):WHILE (t MOD l=0):t=1:WHILE n<0.4:GOSUB 2010:n=0.5:WEND:LOCATE#1,1,1:PRINT#1,CHR$(11):WEND:t=t+1
2005 IF INKEY(8)=0 AND x>1 THEN CALL &BB03:LOCATE#2,x,1:PRINT#2," ";:x=x-1 ELSE IF INKEY(1)=0 AND x<11 THEN CALL &BB03:LOCATE#2,x,1:PRINT#2," ";:x=x+1
2006 IF INKEY(47)=0 THEN v=(x+3)*32+14:b=96:p=17:WHILE (TEST(v,398-(p*16+2))=1):p=p-1:WEND:SOUND 2,20,6,7,,,10:FOR c=0 TO 1:PLOT v,b,c:y=398-((p+1)*16)+2:DRAW v,y:FOR a=1 TO 3:CALL &BD19:NEXT a:NEXT c:PLOT v,y,0
2007 CALL &BD19:LOCATE#2,x,1:PEN#2,4:PRINT#2,CHR$(242);:IF p>3 THEN s=s+1:SOUND 2,3995,10,7,,,31:LOCATE#1,x,p-3:PRINT#1,CHR$(22);CHR$(0);" ";CHR$(22);CHR$(1);:p=0
2008 WHILE s=10:l=l-1:q=q+1:LOCATE 12,3:PEN 1:PRINT q;:s=0:CLS#1:WHILE l=1:d=2:l=0:LOCATE 6,3:PRINT SPACE$(8):WEND:WEND:FOR z=144 TO 464 STEP 32:IF TEST(z,96)=2 THEN d=1
2009 NEXT z:WEND:IF d=2 THEN LOCATE 4,21:PRINT"You Have Won!":WHILE INKEY(18)=-1:WEND:RUN ELSE IF d=1 THEN SOUND 1,0,10,15,,,31:LOCATE#2,x,1:PEN#2,0:PRINT#2,CHR$(238);:LOCATE 5,21:PRINT"Game  Over!":WHILE INKEY(18)=-1:WEND:RUN
2010 PRINT#1,CHR$(22);CHR$(1);:w=(RND*10)+1:LOCATE#1,w,1:PEN#1,2:PRINT#1,CHR$(240);:PEN#1,3:LOCATE#1,w,1:PRINT#1,CHR$(241);:PRINT CHR$(22);CHR$(0);:RETURN
*/ });
