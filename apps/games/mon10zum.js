/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem mon10zum - MonTenZuma
2 rem (c) Francesco Fiorentini
3 rem
100 SYMBOL 254,6,249,166:SYMBOL 255,96,240,104,8,16,32,16,8:MODE 2:D=0:K=0:X=9:Y=9
110 CLS:LOCATE 10,1:PRINT "MONTENZUMA - "CHR$(254);" ";K:LOCATE X,Y:PRINT CHR$(249):K=K+1
120 KX=INT(RND(1)*75+3):KY=INT(RND(1)*22+2):LOCATE KX,KY:PRINT CHR$(254):PRINT CHR$(7)
130 while time<t!:call &bd19:wend:t!=time+22:OX=X:OY=Y:X=X+(INKEY(8)>-1)-(INKEY(1)>-1):Y=Y+(INKEY(0)>-1)-(INKEY(2)>-1)
140 A=INT(RND(1)*75+3):B=INT(RND(1)*22+2):IF X<2 THEN X=2 ELSE IF X>79 THEN X=79
150 LOCATE A,B:PRINT CHR$(255):IF Y<2 THEN Y=2 ELSE IF Y>24 THEN Y=24
160 LOCATE X,Y:R$=COPYCHR$(#0):IF ASC(R$)>=254 THEN GOTO 190
170 LOCATE X,Y:PRINT CHR$(249):IF X<>OX OR Y<>OY THEN LOCATE OX,OY:PRINT " "
180 GOTO 130:IF A=KX AND B=KY THEN LOCATE A,B: PRINT CHR$(254)
190 IF R$=CHR$(254) THEN GOTO 110 ELSE PRINT "KILLED BY A SNAKE!":SOUND 1,300,100,15
200 '
210 'MonTENzuma - alias MON10ZUMA (MN10ZUMA)
220 'Author: Francesco Fiorentini (Italy)
230 'Category: PUR80
240 'Game instructions: 
250 '- collect the key to pass to next level
260 '- avoid the snakes
270 '- move the main character with the arrow keys
280 '
290 'Code Explanation:
300 'row 100: redefines key and snakes chars; sets the video mode to 80 columns (MODE 2) and initializes variables
310 'row 110: clears the screen and writes the first row (title and number of collected keys)
320 'row 120: manages appearance of the key (randomly) and generates a sound CHR$(7)
330 'row 130: stores the previous position of the main character (var. OX & OY) and manages his movement with the arrow keys
340 'row 140: stores the random position of the snakes (var. A & B) and limit the horizontal movement of the main character
350 'row 150: displays the snake in the screen (using var. A & B) and limit the vertical movement of the main character
360 'row 160: manages collisions (using COPYCHR$()); if collides with a snake jump to line 10
370 'row 170: displays the main character (pos. X & Y) and clears its previous position (var. OX & OY)
380 'row 180: repeats the cycle from row 4 and checks that the key has not been covered by a snake
390 'row 190: ends the game with the message KILLEDBY A SNAKE! and generates a brief sound
400 '
*/ });
