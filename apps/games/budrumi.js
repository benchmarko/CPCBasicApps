/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem budrumi - Budrumi - TODO
2 rem (c) Sakis Kaffesakis, 2021
3 rem https://amstradsakis.blogspot.com/2021/05/budrumi.html
4 rem
5 REM BUDRUMI COPYRIGHT BY SAKIS KAFFESAKIS 2021 - MUSIC BY MANOSSG 
6 CHECK=0
8 SONG$="MUSIC1.AKG":GOSUB 9500
9 GOSUB 250
10 MODE 1:CLS:MODE 1:BORDER 11:PEN 3:INK 3,20:INK 0,0
11 LOCATE 7,2:PRINT"Welcome to...":GOSUB 200
12 LOCATE 15,7:PEN 2:SPEED INK 40,40:INK 2,19,6:PRINT "BUDRUMI!!!!" 
13 PEN 1:INK 1,15:LOCATE 13,11:PRINT"1. START GAME":LOCATE 13,13:PRINT"2. INSTRUCTIONS/KEYS":LOCATE 13,15:PRINT"3. HISTORY":LOCATE 13,17:PRINT"4. SOLUTION/CHECKPOINT"
14 LOCATE 7,20:PEN 3:PRINT"by SAKIS KAFFESAKIS":LOCATE 27,20:PRINT CHR$(164):LOCATE 29,20:PRINT"2021":LOCATE 7,22:PRINT"Music by MANOSSG":LOCATE 7,24:PRINT"www.amstradsakis.blogspot.com":MOVE 90,15:DRAW 565,15 
15 A$=INKEY$
16 IF A$="1" THEN GOTO 30
17 IF A$="2" THEN GOSUB 400:GOTO 10
18 IF A$="3" THEN GOSUB 300:GOTO 10
19 IF A$="4" THEN GOSUB 210:GOTO 10 
20 GOTO 15
30 REM
35 GOTO 498
199 END
200 REM
205 RETURN
210 REM SOL
211 MODE 2:INK 1,26:PEN 1:LOCATE 33,12:INPUT"PASSWORD? ",PS$
212 IF PS$="OFI" THEN GOSUB 9720:GOSUB 960:GOTO 213 ELSE LOCATE 33,15:PRINT"WRONG PASSWORD!":GOSUB 9730:GOSUB 490:GOTO 10
213 MODE 2:INK 1,26:LOCATE 1,1:PRINT"SOLUTION"
216 LOCATE 1,3:PRINT"1. Go to BEDROOM and take the MATCHES.":PRINT"2. Go to LIBRARY and press 4 (use object) to READ THE BOOK."
217 GOSUB 9995:IF LP=1 THEN GOTO 219 ELSE RETURN
219 LOCATE 1,5:PRINT"3. Go to BEDROOM and take the CHEST KEY."
220 GOSUB 9995:IF LP=1 THEN GOTO 221 ELSE RETURN
221 LOCATE 1,6:PRINT"4. Go to DINING ROOM and DRINK THE WINE."
222 GOSUB 9995:IF LP=1 THEN GOTO 223 ELSE RETURN
223 LOCATE 1,7:PRINT"5. Go to LIVING ROOM and try to OPEN CHEST."
224 GOSUB 9995:IF LP=1 THEN GOTO 225 ELSE RETURN
225 LOCATE 1,8:PRINT"6. Go to DINING ROOM and take the AXE."
226 GOSUB 9995:IF LP=1 THEN GOTO 227 ELSE RETURN
227 LOCATE 1,9:PRINT"7. Go to LIVING ROOM and OPEN SECRET DOOR. You are undercover now."
228 GOSUB 9995:IF LP=1 THEN GOTO 229 ELSE RETURN 
229 LOCATE 1,10:PRINT"8. Go to BEDROOM and take the SHEETS. (Sheeps)"
230 GOSUB 9995:IF LP=1 THEN GOTO 232 ELSE RETURN
232 LOCATE 1,11:PRINT"9. Go to the DINING ROOM and press 4 (use object) to get out. (Widow)"
233 GOSUB 9995:IF LP=1 THEN GOTO 235 ELSE RETURN
235 LOCATE 1,12:PRINT"10. At the hill, you can pass through the guards, as you are undercover."
236 GOSUB 9995:IF LP=1 THEN GOTO 238 ELSE RETURN
238 LOCATE 1,13:PRINT"11. At the water well, go back to LIBRARY to get the FRAYED ROPE. Then choose to  CLIMB DOWN the water well. (But-Pero-Rope)"
239 GOSUB 9995:IF LP=1 THEN GOTO 240 ELSE RETURN
240 LOCATE 1,15:PRINT"12. For the final battle, go back to the LIVING ROOM and take the SWORD."
241 GOSUB 9995:IF LP=1 THEN GOTO 242 ELSE RETURN
242 LOCATE 1,16:PRINT"13. Then select <ATTACK THE GUARDS>."
243 LOCATE 1,24:PRINT SPC(20)
245 LOCATE 1,18:PRINT"That's all!Hope you enjoyed!"
248 GOSUB 490
249 RETURN 
250 REM INTRO
252 MODE 1:PEN 1:INK 1,6:INK 0,0:BORDER 0
253 FOR b=0 TO 9:PLOT 70+b,238:DRAW 70+b,258:PLOT 70+b,300:DRAW 70+b,320: NEXT b:FOR b=0 TO 9:PLOT 65+b,230:DRAW 70+b,240:PLOT 65+b,270:DRAW 70+b,260:NEXT b:FOR b=0 TO 9:PLOT 65+b,290:DRAW 70+b,300:PLOT 65+b,330:DRAW 70+b,320:NEXT b
254 FOR b=0 TO 9:PLOT 30,295-b:DRAW 64,295-b:NEXT b:FOR b=0 TO 9:PLOT 30,275-b:DRAW 64,275-b:NEXT b
255 OL$=CHR$(143)
256 FOR b=0 TO 9:PLOT 30,335-b:DRAW 64,335-b:NEXT b:FOR b=0 TO 9:PLOT 30,234-b:DRAW 64,234-b:NEXT b
260 FOR B=0 TO 6:LOCATE 2,5+B:PRINT OL$:NEXT B:FOR B=0 TO 6:LOCATE 7,5+B:PRINT OL$:NEXT B:FOR B=0 TO 6:LOCATE 10,5+B:PRINT OL$:NEXT B:FOR B=0 TO 6:LOCATE 12,5+B:PRINT OL$:NEXT B
262 FOR B=0 TO 6:LOCATE 17,5+B:PRINT OL$:NEXT B:FOR B=0 TO 6:LOCATE 22,5+B:PRINT OL$:NEXT B:FOR B=0 TO 6:LOCATE 25,5+B:PRINT OL$:NEXT B:FOR B=0 TO 6:LOCATE 27,5+B:PRINT OL$:NEXT B:
264 FOR B=0 TO 6:LOCATE 32,5+B:PRINT OL$:NEXT B:FOR B=0 TO 6:LOCATE 36,5+B:PRINT OL$:NEXT B
266 FOR B=0 TO 4:LOCATE 15,6+B:PRINT OL$:NEXT B:FOR B=0 TO 3:LOCATE 20,5+B:PRINT OL$:NEXT B
268 BL$=OL$+OL$:LOCATE 8,11:PRINT BL$:LOCATE 13,5:PRINT BL$:LOCATE 13,11:PRINT BL$:LOCATE 18,5:PRINT BL$:LOCATE 23,11:PRINT BL$:LOCATE 34,5:PRINT BL$:LOCATE 34,11:PRINT BL$:LOCATE 37,5:PRINT BL$:LOCATE 37,11:PRINT BL$
270 LOCATE 18,8:PRINT BL$:REM LOCATE 3,5:PRINT BL$:LOCATE 3,11:PRINT BL$:
272 LOCATE 15,5:PRINT CHR$(215):LOCATE 15,11:PRINT CHR$(212):REM FOR B=0 TO 1:LOCATE 5,5+B:PRINT OL$:NEXT B:FOR B=0 TO 1:LOCATE 5,11-B:PRINT OL$:NEXT B
278 FOR b=0 TO 16:PLOT 270,278-b:DRAW 318,235-b:NEXT b
279 FOR b=0 TO 16:PLOT 430,335-b:DRAW 462,290-b:NEXT b:FOR b=0 TO 16:PLOT 494,335-b:DRAW 462,290-b:NEXT b
285 PEN 2:INK 2,18:LOCATE 14,18:PRINT"PRESS ANY KEY"
286 FOR del=1 TO 1000:NEXT del:GOSUB 9720
288 PEN 3:INK 3,24:LOCATE 32,22:PRINT"by SAKIS":PLOT 495,45:DRAW 623,45:LOCATE 24,24:PRINT "Music by MANOSSG":PLOT 367,12:DRAW 623,12
298 GOSUB 490
299 RETURN
300 REM HIS
302 MODE 2:LOCATE 1,1:PRINT"HISTORY":PEN 1:INK 1,26:INK 0,0
305 LOCATE 1,3:PRINT"Medieval era.":LOCATE 1,5:PRINT"The bloodthirsty ruler of an isolated Island in the Mediterranean sea, Duke     Sebastian di Sergio, has put an end to whatever meager rights the farmers in his domain had." 
306 LOCATE 1,8:PRINT"He took all farmers' properties and he decreed they must work like slaves.      Several farmers who refused to obey were executed."
308 LOCATE 1,11:PRINT"You and four other farmers organized a revolution that would start on the 11th  of January during a big local celebration. As farmers were afraid of traitors,  they arranged that only one of the five leaders can give the signal."
310 LOCATE 1,15:PRINT"Unfortunately, all five leaders were arrested, including you. All were impriso- ned in BUDRUMI prison, the most difficult prison to escape, in damp dark cells, in the basement of an old haunted, according to rumours, house,"
311 LOCATE 65,17:PRINT"inside a castle":LOCATE 1,18:PRINT"on an isolated hill. All other four leaders were executed."
315 LOCATE 1,20:PRINT"Your execution day is tomorrow. But people hate Duke Sebastian, so you may have friends even among the guards. One of them, supporting the revolution, opened   your cell, while you were sleeping, but left, as he was scared."
317 LOCATE 1,24:PRINT"Your duty is now to escape from the castle, so that you will give the signal for the revolution...Be careful, this place is full of traps... "
348 GOSUB 490
349 RETURN
400 REM INST
402 MODE 2:PEN 1:INK 1,26:INK 0,0:LOCATE 1,1:PRINT"INSTRUCTIONS/KEYS"
405 LOCATE 1,4:PRINT"To play this game, you only have to use the numbers (0-5)."
410 LOCATE 1,6:PRINT"On the right bottom side,you see the object you carry and if you are            undercover."
415 LOCATE 1,9:PRINT"Sometimes, there is an extra option in order to use the object you are carrying.":LOCATE 1,11:PRINT"Some other times, you have to be carrying the right object when you make a      choice." 
417 LOCATE 1,14:PRINT"To read again the text, press <R> in the choice menu."
418 LOCATE 1,16:PRINT"When you choose another object to carry, the first object returns to its initialplace."
419 LOCATE 1,19:PRINT"This is caused by magic but also saves the programmer from having to properly   code item management! :-D"
420 LOCATE 1,23:PRINT"Good luck! You will surely need it..."
448 GOSUB 490
449 RETURN
490 CLEAR INPUT:
491 a$=INKEY$
492 IF a$<>"" THEN RETURN
493 GOTO 491
497 END
498 REM MUS
499 GOSUB 9700:SONG$="music2.akg":GOSUB 9500
500 REM START
505 ROOM1$="ROOM 1":ROOM2$="ROOM 2":ROOM3$="ROOM 3":ROOM4$="ROOM 4":UND$="NO":OBJ$="NOTHING":obj$="NOTHING":DR=0:chest=0:SO=0:RO=0:PASS=0:UND$="NO":SC1=0:SC2=0:SC3=0:SC4=0:SC5=0:SC6=0:SC7=0
506 IF CHECK=1 THEN PASS=1:UND$="YES":chest=1:ROOM1$="BEDROOM":ROOM2$="LIBRARY":ROOM3$="DINING R.":ROOM4$="LIVING R.":SC1=1:SC2=1:SC3=1:SC4=1:SC5=1:SC6=1:SC7=1
509 CLEAR INPUT
510 MODE 1: INK 1,26:INK 0,0:PEN 1:INK 2,3:INK 3,9:REM ROOM 0
520 LOCATE 2,2:PRINT ROOM1$:LOCATE 12,2:PRINT ROOM2$:LOCATE 22,2:PRINT ROOM3$:LOCATE 32,2:PRINT ROOM4$
525 GOSUB 900
530 GOSUB 9010
535 LOCATE 2,15:PRINT"WHICH DOOR WILL YOU OPEN?"
536 LOCATE 2,18:PRINT ROOM1$:LOCATE 2,20:PRINT ROOM2$:LOCATE 2,22:PRINT ROOM3$:LOCATE 2,24:PRINT ROOM4$ 
540 REM
541 LOCATE 5,5
550 R$=INKEY$
560 IF R$="1" THEN GOTO 1000
570 IF R$="2" THEN GOTO 2000
580 IF R$="3" THEN GOTO 3000
590 IF R$="4" THEN GOTO 4000
600 GOTO 550
899 END
900 REM DOOR
910 DO$=CHR$(232):PLOT 20,190:DRAW 20,350:DRAW 100,350:DRAW 100,190:DRAW 20,190:LOCATE 3,9:PRINT DO$:MOVE 30,200:FILL 2
920 PLOT 180,190:DRAW 180,350:DRAW 260,350:DRAW 260,190:DRAW 180,190:LOCATE 13,9:PRINT DO$:MOVE 190,200:FILL 3
930 PLOT 340,190:DRAW 340,350:DRAW 420,350:DRAW 420,190:DRAW 340,190:LOCATE 23,9:PRINT DO$:MOVE 350,200:FILL 0
940 PLOT 500,190:DRAW 500,350:DRAW 580,350:DRAW 580,190:DRAW 500,190:LOCATE 33,9:PRINT DO$:MOVE 510,200:FILL 2
949 RETURN
950 REM CP
952 CHECK=1:MODE 2:INK 1,26:PEN 1
953 GOSUB 9720
955 LOCATE 1,15:PRINT"Checkpoint enabled: You are undercover and have already gotten out of the window"
957 GOSUB 490:
959 RETURN
960 MODE 2:INK 1,26:PEN 1
965 LOCATE 1,3:PRINT"ACTIVATE CHECKPOINT? (Y/N)"
966 F$=INKEY$
967 IF F$="N" OR F$="n" THEN CHECK=0 :RETURN
968 IF F$="Y" OR F$="y" THEN GOSUB 950:RETURN 
970 GOTO 966
999 RETURN
1000 REM ROOM 1
1010 MODE 1:INK 0,0:INK 1,13:INK 2,16:INK 3,12:LOAD"1.SCR":
1020 ROOM1$="BEDROOM"
1025 SC1=SC1+1
1026 IF SC1<>1 THEN GOTO 1100
1030 LOCATE 1,16:PRINT"The bedroom is a dark place... Although full of dust, the sheets seem to be laidcarefully, but they are soddened with a strange liquid...You look under them andyou see some matches..."
1040 LOCATE 1,22:PRINT"You go onto the bed and decide to look  under the pillow. You see a blood stain and a chest key..."
1089 GOSUB 1995
1090 GOSUB 1900
1100 LOCATE 2,16:PRINT"What will you do?":LOCATE 2,18:PRINT"1. Take the matches":LOCATE 2,19:PRINT"2. Take the chest key":LOCATE 2,20:PRINT"3. Take the sheets":LOCATE 2,21:PRINT"4. Use object carried":LOCATE 2,22:PRINT"0. Exit room"
1108 GOSUB 9010
1109 CLEAR INPUT 
1110 T$=INKEY$
1120 IF T$="1" THEN OBJ$="MATCHES":GOSUB 9030:GOTO 1100
1130 IF T$="2" THEN OBJ$="CHEST KEY":GOSUB 9030:GOTO 1100
1140 IF T$="3" THEN OBJ$="SHEETS":GOSUB 9030:GOTO 1100 
1150 IF T$="4" AND OBJ$="CANDLE" THEN GOTO 9200
1155 IF T$="4" AND OBJ$<>"CANDLE" THEN LOCATE 2,25:PRINT"Nothing happens":GOSUB 9730:FOR d=1 TO 1000:NEXT d:LOCATE 2,25:PRINT SPC(16):GOTO 1100
1158 IF T$="r" OR T$="R" THEN SC1=0:GOTO 1000
1160 IF T$="0" THEN GOTO 510
1200 GOTO 1110
1900 FOR q=0 TO 8:LOCATE 1,16+q:PRINT SPC(39):LOCATE 40,16+q:PRINT " ":NEXT q:RETURN
1995 a$=INKEY$
1996 IF a$<>"" THEN RETURN
1997 GOTO 1995
1999 INK 1,26:END
2000 REM ROOM 2
2010 MODE 1:INK 0,0:INK 1,13:INK 2,16:INK 3,14:LOAD"2.SCR"
2020 ROOM2$="LIBRARY"
2025 SC2=SC2+1
2026 IF SC2<>1 THEN GOTO 2100
2030 LOCATE 1,15:PRINT"This room is a library...It seems most  books include histories and methods of  torture...Some of them describe how     public torture and executions teach obe-dience to the people."
2040 LOCATE 1,21:PRINT"On the floor you see a black empty book...Only the first page has some handwri- ting, maybe someone tried to leave a me-ssage for you..."
2050 GOSUB 1995:GOSUB 2500
2060 LOCATE 1,15:PRINT"In front of the dusty mirror you can seea used candle...There is also a chair   close to the corner, with names engravedon it." 
2070 LOCATE 1,20:PRINT"Next to it you see a frayed rope, and a big nail in the wall.":LOCATE 1,23:PRINT"It appears like this was a place for    hanging people..."
2089 GOSUB 1995
2090 GOSUB 2500
2100 LOCATE 2,16:PRINT"What will you do?":LOCATE 2,18:PRINT"1. Read the book":LOCATE 2,19:PRINT"2. Take the frayed rope":LOCATE 2,20:PRINT"3. Take the candle":LOCATE 2,21:PRINT"4. Use object carried":LOCATE 2,22:PRINT"0. Exit room"
2108 GOSUB 9010
2109 CLEAR INPUT
2110 T$=INKEY$ 
2120 IF T$="1" THEN LOCATE 2,25:PRINT"Can't read-its dark":GOSUB 9730:FOR d=1 TO 1000:NEXT d:LOCATE 2,25:PRINT SPC(19):GOTO 2100
2130 IF T$="2" THEN OBJ$="BALD ROPE":GOSUB 9030:GOTO 2100
2140 IF T$="3" THEN OBJ$="CANDLE":GOSUB 9030:GOTO 2100
2150 IF T$="4" AND OBJ$<>"MATCHES" THEN LOCATE 2,25:PRINT"Nothing happens":GOSUB 9730:FOR d=1 TO 1000:NEXT d:LOCATE 2,25:PRINT SPC(16):GOTO 2100
2155 IF T$="4" AND OBJ$="MATCHES" THEN GOSUB 2900:GOSUB 9710:GOSUB 490:CLS:GOTO 2000
2158 IF T$="R" OR T$="r" THEN SC2=0:GOTO 2000
2160 IF T$="0" THEN GOTO 510
2200 GOTO 2110
2500 FOR q=0 TO 9:LOCATE 1,15+q:PRINT SPC(39):LOCATE 40,15+q:PRINT " ":NEXT q:RETURN
2900 MODE 2:PEN 1:INK 1,26:LOCATE 1,1 :PRINT"BOOK NOTES"
2910 LOCATE 1,3:PRINT"To get out of a haunted house, you need two basic things":LOCATE 1,5:PRINT"(very close but not exact)"
2915 LOCATE 1,7:PRINT"1) Animals that produce milk"
2916 LOCATE 1,9:PRINT"2) A woman whose husband is dead"
2918 LOCATE 1,12:PRINT"Too much eating and drinking can cause harm but also relief sometimes..."
2920 LOCATE 1,14:PRINT"An anagrammed spanish <but> can help you with the well water..."
2950 RETURN
2999 END
3000 REM ROOM 3
3010 MODE 1:INK 0,0:INK 1,13:INK 2,12:INK 3,16:LOAD"3.SCR"
3020 ROOM3$="DINING R."
3025 SC3=SC3+1
3026 IF SC3<>1 THEN GOTO 3100
3030 LOCATE 1,16:PRINT"Everything looks in order in the dining room...There is a clean wooden dining   table and also a small table on your    right. On the small table you see a     plate of food and a glass of wine..."
3040 LOCATE 1,21:PRINT"But on your right there is an axe, that seems out of place. "
3045 LOCATE 21,22:PRINT"The sunlight enters"
3050 LOCATE 7,22:PRINT"through the window, so the room is not  so dark. The only unpleasant thing in   this room is the terrible smell..."
3090 GOSUB 1995:GOSUB 3500
3100 LOCATE 2,16:PRINT"What will you do?":LOCATE 2,18:PRINT"1. Take the axe":LOCATE 2,19:PRINT"2. Eat the food":LOCATE 2,20:PRINT"3. Drink the wine bottle":LOCATE 2,21:PRINT"4. Use object carried":LOCATE 2,22:PRINT"0. Exit room"
3101 IF PASS=1 THEN LOCATE 2,23:PRINT"5. Get out of the window"
3108 GOSUB 9010
3109 CLEAR INPUT
3110 T$=INKEY$
3120 IF T$="1" THEN OBJ$="AXE":GOSUB 9030:GOTO 3100
3130 IF T$="2" THEN GOTO 9210
3140 IF T$="3" THEN DR=1:GOSUB 9290:GOSUB 9710:GOSUB 490:CLS:GOTO 3000
3144 IF T$="4" AND OBJ$="BALD ROPE" THEN GOTO 9240
3145 IF T$="4" AND OBJ$="SHEETS" THEN PASS=1:GOSUB 9300:GOSUB 9710:GOSUB 490:CLS:GOTO 5000
3150 IF T$="4" THEN LOCATE 2,25:PRINT"Nothing happens":GOSUB 9730:FOR d=1 TO 1000:NEXT d:LOCATE 2,25:PRINT SPC(16):GOTO 3100 
3158 IF T$="R" OR T$="r" THEN SC3=0:GOTO 3000
3160 IF T$="0" THEN GOTO 510
3170 IF PASS=1 AND T$="5" THEN CLS:GOTO 5000
3200 GOTO 3110
3500 FOR q=0 TO 9:LOCATE 1,15+q:PRINT SPC(39):LOCATE 40,15+q:PRINT " ":NEXT q:LOCATE 1,25:PRINT SPC(39):RETURN
3999 END
4000 REM ROOM 4
4010 MODE 1:INK 0,0:INK 1,13:INK 2,16:INK 3,26:LOAD"4.SCR"
4020 ROOM4$="LIVING R."
4025 SC4=SC4+1 
4026 IF SC4<>1 THEN GOTO 4100
4030 LOCATE 2,15:PRINT"You are entering the living room...Thereis a big fireplace and beyond it you cansee a golden ring on the wall, in the   centre of a huge painting."
4040 LOCATE 2,20:PRINT"On the other side of the room you can   see a big sharp sword...In the corner   there is a big heavy chest...There is a wooden label on it, <DO NOT OPEN>... "
4045 GOSUB 1995:GOSUB 4500
4050 LOCATE 2,15:PRINT"Everything in the room seems normal, al-though covered with some dust...Except  the chest that seems very dusty, old,   and untouched for decades..."
4060 LOCATE 1,21:PRINT"A strange noise from the roof gives you the creeps..."
4090 GOSUB 1995:GOSUB 4500
4100 LOCATE 2,16:PRINT"What will you do?":LOCATE 2,18:PRINT"1. Take the golden ring"
4101 IF CHEST=0 THEN LOCATE 2,19:PRINT"2. Try to open chest" ELSE LOCATE 2,19:PRINT"2. Take the door key"
4102 LOCATE 2,20:PRINT"3. Take the sword":LOCATE 2,21:PRINT"4. Use object carried":LOCATE 2,22:PRINT"0. Exit room"
4103 IF chest=1 THEN LOCATE 2,23:PRINT"5. Open secret door"
4108 GOSUB 9010 
4109 CLEAR INPUT
4110 T$=INKEY$
4120 IF T$="1" THEN GOTO 9220
4130 IF T$="2" AND chest=1 THEN OBJ$="DOOR KEY":GOSUB 9030:GOTO 4100
4135 IF T$="2" AND chest=0 AND OBJ$<>"CHEST KEY" THEN LOCATE 2,25:PRINT"Chest is locked":GOSUB 9730:FOR d=1 TO 1000:NEXT d:LOCATE 2,25:PRINT SPC(16):GOTO 4100
4140 IF T$="2" AND chest=0 AND OBJ$="CHEST KEY" AND DR=0 THEN GOTO 9230
4145 IF T$="4" THEN LOCATE 2,25:PRINT"Nothing happens":GOSUB 9730:FOR d=1 TO 1000:NEXT d:LOCATE 2,25:PRINT SPC(16):GOTO 4100  
4150 IF T$="2" AND chest=0 AND OBJ$="CHEST KEY" AND DR=1 THEN chest=1:GOSUB 9320:GOSUB 9710:GOSUB 490:CLS:GOTO 4000
4154 IF T$="5" AND chest=1 AND obj$="DOOR KEY" THEN GOSUB 4600:GOSUB 9730:GOSUB 490:GOTO 4000 
4155 IF T$="5" AND chest=1 AND obj$="AXE" THEN UND$="YES":GOSUB 9330:GOSUB 9710:GOSUB 490::CLS:GOTO 4000
4156 IF T$="3" THEN OBJ$="SWORD":GOSUB 9030:GOTO 4100
4157 IF T$="5" AND chest=1 AND (obj$<>"DOOR KEY" OR OBJ$<>"AXE") THEN LOCATE 2,25:PRINT"Door is locked":GOSUB 9730:FOR d=1 TO 1000:NEXT d:LOCATE 2,25:PRINT SPC(16):GOTO 4100
4158 IF T$="R" OR T$="r" THEN SC4=0:GOTO 4000
4160 IF T$="0" THEN GOTO 510
4200 GOTO 4110
4500 FOR q=0 TO 9:LOCATE 1,15+q:PRINT SPC(39):LOCATE 40,15+q:PRINT " ":NEXT q:RETURN
4600 MODE 2:INK 1,26:PEN 1:
4605 LOCATE 25,15:PRINT"The key is damaged beyond repair.":LOCATE 12,17:PRINT"Hmmm, maybe you should find another way to open the door."
4610 RETURN
4999 END
5000 REM ROOM5
5005 SO=SO+1
5006 IF SO=1 THEN GOSUB 9700
5010 MODE 1:INK 0,0:INK 1,13:INK 2,14:INK 3,25:LOAD"5.SCR":
5015 IF SO=1 THEN SONG$="MUSIC3.AKG":GOSUB 9500
5017 SC5=SC5+1
5018 IF SC5<>1 THEN GOTO 5100
5020 LOCATE 1,16:PRINT"You are at the top of a hill, close to  the ruins of an ancient temple. The sun is shining but it is very windy up here,and you are too thirsty..."
5030 LOCATE 1,21:PRINT"The only path is secured by many guards."
5040 LOCATE 1,23:PRINT"Behind you, there is a very dangerous   cliff that probably leads to the sea..."
5090 GOSUB 1995:GOSUB 5900
5100 LOCATE 2,16:PRINT"What will you do?":LOCATE 2,18:PRINT"1. Climb down the cliff":LOCATE 2,19:PRINT"2. Pass through the guards":LOCATE 2,20:PRINT"3. Attack the guards":LOCATE 2,21:PRINT"0. Go back"
5108 GOSUB 9010
5109 CLEAR INPUT
5110 T$=INKEY$
5120 IF T$="1" AND OBJ$<>"BALD ROPE" THEN GOTO 9250
5130 IF T$="1" AND OBJ$="BALD ROPE" THEN GOTO 9260
5135 IF T$="2" AND UND$<>"YES" THEN GOTO 9270
5140 IF T$="3" AND (OBJ$="SWORD" OR OBJ$="AXE") THEN GOTO 9285
5145 IF T$="3" THEN GOTO 9280
5150 IF T$="2" AND UND$="YES" THEN GOSUB 9360:GOSUB 9710:GOSUB 490:GOTO 6000
5155 IF T$="0" THEN CLS:GOTO 3000
5158 IF T$="R" OR T$="r" THEN SC5=0:GOTO 5000
5160 GOTO 5110
5900 FOR q=0 TO 8:LOCATE 1,16+q:PRINT SPC(39):LOCATE 40,16+q:PRINT " ":NEXT q:RETURN
5999 END
6000 REM ROOM6
6006 SC6=SC6+1
6007 IF CHECK=0 AND SC6=1 THEN GOSUB 8700
6010 MODE 1:INK 0,0:INK 1,13:INK 2,16:INK 3,14:LOAD"6.SCR"
6018 IF SC6<>1 THEN GOTO 6100
6020 LOCATE 1,15:PRINT"You are very close to a water well. The ancient myth mentions that its water    could give magical powers to the man whodrinks it..."
6030 LOCATE 1,19:PRINT"Also, the area is rumoured to have many catacombs, maybe the water well leads toone of them..."
6040 LOCATE 1,22:PRINT"After the water well, the path is blo-  cked by four heavily equipped knights..."
6090 GOSUB 1995:GOSUB 6900
6100 LOCATE 2,16:PRINT"What will you do?"
6101 IF RO=1 THEN LOCATE 2,18:PRINT"1. Climb down the mounted rope"
6102 IF RO=0 THEN LOCATE 2,18:PRINT"1. Climb down the water well"
6104 LOCATE 2,19:PRINT"2. Drink water for magical powers":LOCATE 2,20:PRINT"3. Attack the knights"
6105 LOCATE 2,21:PRINT"4. Pass through the knights":LOCATE 2,22:PRINT"0. Go back"
6108 GOSUB 9010
6109 CLEAR INPUT
6110 T$=INKEY$
6120 IF T$="2" THEN GOTO 9400
6127 IF (T$="1" AND OBJ$="BALD ROPE") OR (T$="1" AND RO=1) THEN RO=1:GOSUB 9340:GOSUB 9710:GOSUB 490::GOTO 7000 
6128 IF T$="1" AND OBJ$<>"BALD ROPE" THEN GOTO 9410
6130 IF T$="3" AND (OBJ$<>"SWORD" AND OBJ$<>"AXE") THEN GOTO 9420 
6140 IF T$="3" AND OBJ$="SWORD" THEN GOTO 9430
6145 IF T$="3" AND OBJ$="AXE" THEN GOTO 9440
6150 IF T$="3" AND UND$<>"YES" THEN GOTO 9450
6153 IF T$="4" THEN GOTO 9450
6155 IF T$="0" THEN CLS:GOTO 5000
6158 IF T$="R" OR T$="r" THEN SC6=0:GOTO 6000
6160 GOTO 6110
6900 FOR q=0 TO 8:LOCATE 1,15+q:PRINT SPC(39):LOCATE 40,16+q:PRINT " ":NEXT q:RETURN
6999 END
7000 REM ROOM7
7010 MODE 1:INK 0,0:INK 1,13:INK 2,25:INK 3,16:LOAD"7.SCR"
7017 SC7=SC7+1
7018 IF SC7<>1 THEN GOTO 7100
7020 LOCATE 1,15:PRINT"You have reached the final gate, so clo-se to escaping."
7021 LOCATE 1,18:PRINT"You heard the guards talking about some gold they just secured in a locked room,some meters behind you."
7025 LOCATE 1,22:PRINT"Also, you have kept some poisoned water from the water well..."
7045 GOSUB 1995:GOSUB 7900
7050 LOCATE 1,15:PRINT"Melet di Zouat, Duke Sebastian's tru-   sted general and evil knight, is usua-  lly present at the gate. But you cannot see him now. It would be difficult to   defeat him if you fight him, as he ha-" 
7051 LOCATE 1,20:PRINT"ndles his sword with excellence."
7052 LOCATE 1,22:PRINT"He has killed many farmers with cruelty in the last month. But the priority now is your escape, not his death..."  
7090 GOSUB 1995:GOSUB 7900
7100 LOCATE 2,16:PRINT"What will you do?":LOCATE 2,18:PRINT"1. Go back to look for the gold":LOCATE 2,19:PRINT"2. Offer guards poisoned water":LOCATE 2,20:PRINT"3. Pass silently through the guards"
7101 LOCATE 2,21:PRINT"4. Attack the guards":LOCATE 2,22:PRINT"0. Go back"
7108 GOSUB 9010
7109 CLEAR INPUT
7110 T$=INKEY$
7120 IF T$="1" THEN GOTO 9470
7130 IF T$="2" THEN GOTO 9650
7140 IF T$="3" THEN GOTO 9480
7150 IF T$="4" AND OBJ$="SWORD" THEN GOSUB 8800:GOSUB 9700:GOTO 5
7151 IF T$="4" AND OBJ$="AXE" THEN GOTO 9660
7152 IF T$="4" AND (OBJ$<>"AXE" AND OBJ$<>"SWORD") THEN GOTO 9670 
7155 IF T$="0" THEN CLS:GOTO 6000
7158 IF T$="R" OR T$="r" THEN SC7=0:GOTO 7000
7160 GOTO 7110
7900 FOR q=0 TO 9:LOCATE 1,15+q:PRINT SPC(39):LOCATE 40,15+q:PRINT " ":NEXT q:RETURN
7999 END
8000 REM
8700 REM PASS
8710 MODE 2:INK 1,26:PEN 1:LOCATE 32,15:PRINT"CHECKPOINT REACHED":LOCATE 33,17:PRINT"PASSWORD: <OFI>"
8720 GOSUB 490
8799 RETURN
8800 REM END
8801 MODE 2:GOSUB 9710:INK 1,26:PEN 1:LOCATE 2,15:PRINT"Well done! You killed the guards and Melet di Zouat with your sword and bravery!"  
8802 GOSUB 490
8804 GOSUB 9700
8805 MODE 1:INK 0,0:INK 1,13:INK 2,20:INK 3,25:LOAD"8.SCR" 
8806 SONG$="MUSIC4.AKG":GOSUB 9500
8810 REM
8820 PEN 2:LOCATE 1,16:PRINT"You finally escaped from BUDRUMI!":PRINT"The revolution started with your signal and succeeded, as it was supported by   everyone in the island..." 
8830 LOCATE 1,20:PRINT"Duke Sebastian di Sergio was imprisoned for his crimes."
8840 LOCATE 1,23:PRINT"The people now have a better life thanksto you!"
8850 FOR DEL=1 TO 2000:NEXT DEL:LOCATE 16,25:PRINT"GAME OVER"
8997 GOSUB 490
8998 GOSUB 9900:RETURN
8999 END
9000 REM DIE
9010 IF OBJ$="BALD ROPE" THEN LOCATE 22,24:PRINT"OBJECT: ";"FRAYED ROPE":GOTO 9015
9011 LOCATE 22,24:PRINT"OBJECT: ";OBJ$
9015 LOCATE 22,25:PRINT"UNDERCOVER: ";UND$
9016 RETURN
9020 LOCATE 2,25:PRINT SPC(38):RETURN
9030 GOSUB 9720:LOCATE 22,24:PRINT SPC(19):LOCATE 22,25:PRINT SPC(18):RETURN 
9200 REM 
9201 GOSUB 9700:MODE 2:PEN 1:INK 1,26:SOUND 1,500,15,15,,,15
9202 LOCATE 20,15:PRINT"The sheets caught fire - you are dead"
9208 GOSUB 490
9209 GOTO 30
9210 REM DEAD 2
9211 GOSUB 9700:MODE 2:PEN 1:INK 1,26:SOUND 1,500,15,15,,,15:
9212 LOCATE 23,15:PRINT"The food was poisoned - you are dead"
9218 GOSUB 490
9219 GOTO 30
9220 REM DEAD 3
9221 GOSUB 9700:MODE 2:PEN 1:INK 1,26:SOUND 1,500,15,15,,,15:LOCATE 5,15:PRINT"Taking the ring activates a mechanism and your hand is stuck with nails.":LOCATE  27,17:PRINT"You are arrested and killed"
9228 GOSUB 490
9229 GOTO 30
9230 REM DEAD
9231 GOSUB 9700:MODE 2:PEN 1:INK 1,26:SOUND 1,500,15,15,,,15:
9232 LOCATE 19,15:PRINT"Unlocking the chest releases a poisonous gas":LOCATE 22,17:PRINT"You don't have an antidote and you die"
9238 GOSUB 490
9239 GOTO 30 
9240 REM 
9241 GOSUB 9700:MODE 2:PEN 1:INK 1,26:SOUND 1,500,15,15,,,15:
9242 LOCATE 11,15:PRINT"You tried to escape from the window, but frayed rope broke":LOCATE 21,17:PRINT"You fall from a great height and you die"
9248 GOSUB 490
9249 GOTO 30 
9250 REM 
9251 GOSUB 9700:MODE 2:PEN 1:INK 1,26:SOUND 1,500,15,15,,,15:
9252 LOCATE 16,15:PRINT"You couldn't climb the cliff - you fall and you die"
9258 GOSUB 490 
9259 GOTO 30 
9260 REM
9261 GOSUB 9700:MODE 2:PEN 1:INK 1,26:SOUND 1,500,15,15,,,15:
9262 LOCATE 12,15:PRINT"The frayed rope broke when you were climbing down - you die"
9268 GOSUB 490 
9269 GOTO 30
9270 REM 
9271 GOSUB 9700:MODE 2:PEN 1:INK 1,26:SOUND 1,500,15,15,,,15:
9272 LOCATE 31,15:PRINT"The guards kill you"
9278 GOSUB 490
9279 GOTO 30 
9280 REM 
9281 GOSUB 9700:MODE 2:PEN 1:INK 1,26:SOUND 1,500,15,15,,,15:
9282 LOCATE 7,15:PRINT"You attacked them unarmed using only your hands - the guards kill you"
9283 GOSUB 490
9284 GOTO 30
9285 GOSUB 9700:MODE 2:PEN 1:INK 1,26:SOUND 1,500,15,15,,,15:
9286 LOCATE 7,15:PRINT"You killed many, but finally they killed you. Bravery is not enough"
9288 GOSUB 490 
9289 GOTO 30
9290 REM dr
9291 MODE 2:PEN 1:INK 1,26:LOCATE 26,15:PRINT"You get drunk, but you survive"
9299 RETURN
9300 REM 
9302 MODE 2:PEN 1:INK 1,26:LOCATE 19,15:PRINT"You escaped from the window using the sheets"
9309 RETURN
9320 MODE 2:PEN 1:INK 1,26:LOCATE 1,15:PRINT"Wine acted like an antidote and you survived- you found a door key in the chest.": LOCATE 32,17:PRINT"Secret door revealed"
9329 RETURN
9330 MODE 2:PEN 1:INK 1,26:LOCATE 15,15:PRINT"You broke the door using the axe- you found an armor":LOCATE 9,17:PRINT"Now you won't be recognized as an enemy by the lower ranked guards"
9339 RETURN
9340 MODE 2:PEN 1:INK 1,26:LOCATE 8,15:PRINT"You successfully climbed down the water well using the frayed rope":LOCATE 20,17:PRINT"You found a tunnel that leads to the gate" 
9349 RETURN
9350 REM
9359 RETURN
9360 MODE 2:PEN 1:INK 1,26:LOCATE 16,15:PRINT "You successfully passed quietly through the guards"
9369 RETURN
9379 RETURN
9389 RETURN
9400 GOSUB 9490
9401 LOCATE 8,15:PRINT"Don't believe in magical powers - the water is poisoned - you die"
9408 GOSUB 490
9409 GOTO 30
9410 GOSUB 9490
9411 LOCATE 19,15:PRINT"Water well was too high - you fall and you die"
9418 GOSUB 490
9419 GOTO 30
9420 GOSUB 9490
9421 LOCATE 18,15:PRINT"You attacked the knights unarmed - they kill you"
9428 GOSUB 490
9429 GOTO 30
9430 GOSUB 9490 
9431 LOCATE 3,15:PRINT"Your sword was not enough, the knights have better equipment - they kill you"
9438 GOSUB 490
9439 GOTO 30
9440 GOSUB 9490
9441 LOCATE 4,15:PRINT"Your axe was not enough, the knights have better equipment - they kill you"
9448 GOSUB 490 
9449 GOTO 30
9450 GOSUB 9490
9451 LOCATE 21,15:PRINT"The knights recognize you and kill you"
9458 GOSUB 490 
9459 GOTO 30
9461 GOSUB 9700:MODE 2:PEN 1:INK 1,26:SOUND 1,500,15,15,,,15:
9462 LOCATE 16,15:PRINT"You killed many guards, but they kill you finally":LOCATE 26,17:PRINT"Bravery is not enough to escape"
9468 GOSUB 490
9469 GOTO 30 
9470 GOSUB 9490
9471 LOCATE 1,15:PRINT"You tried to look for gold, but greed is punished - you are killed by the guards"
9478 GOSUB 490
9479 GOTO 30
9480 GOSUB 9490:
9481 LOCATE 6,15:PRINT"Melet di Zouat was hidden among the guards and recognizes you - you die"
9488 GOSUB 490
9489 GOTO 30
9490 GOSUB 9700:MODE 2:PEN 1:INK 1,26:SOUND 1,500,15,15,,,15:RETURN
9499 REM MUSIC
9500 MEMORY &6FFF
9510 music=&7000
9520 sfx=&9000
9530 player=&9500
9540 LOAD song$,music
9550 LOAD"sfx.akx",sfx
9560 LOAD"player.bin",player
9570 CALL player,music,0   
9580 CALL player+6,sfx  
9620 RETURN
9650 GOSUB 9490:
9651 LOCATE 8,15:PRINT"The guards are not so stupid to accept water from an unknown person":LOCATE 26,17:PRINT"They arrest you and kill you"
9658 GOSUB 490
9659 GOTO 30
9660 GOSUB 9490:
9661 LOCATE 8,15:PRINT"You fought bravely but you cannot use the axe well. You are killed"
9668 GOSUB 490
9669 GOTO 30 
9670 GOSUB 9490:
9671 LOCATE 13,15:PRINT"You attacked unarmed in the final battle? You are killed"
9678 GOSUB 490 
9679 GOTO 30
9680 GOSUB 9490:
9688 GOSUB 490 
9689 GOTO 30 
9700 CALL PLAYER+3:RETURN
9710 CALL player+9,2,1,5:RETURN
9720 CALL player+9,4,1,5:RETURN
9730 CALL player+9,3,1,5:RETURN
9900 MODE 2:PEN 1:INK 1,26
9902 LOCATE 1,1:PRINT"CREDITS":LOCATE 1,3:PRINT"SPECIAL THX TO:":PRINT" ":PRINT"MANOSSG FOR MUSIC, EDITING, TESTING, PROOFREADING, IDEAS!":PRINT" ":PRINT"SKULLEATER AND ANIMALGRIL987 FOR TESTING":PRINT" ":PRINT"SKULLEATER FOR 464 VERSION"
9903 PRINT" ":PRINT"PHANEE FOR EDITING ENGLISH TEXT"
9905 GOSUB 490
9909 RETURN
9990 A$=INKEY$
9991 IF A$<>"" THEN RETURN
9992 GOTO 9990
9995 LOCATE 1,24:PRINT SPC(20):LOCATE 1,24:PRINT"SHOW MORE? (Y/N)"
9996 R$=INKEY$
9997 IF R$="Y" OR R$="y" THEN LP=1 :RETURN
9998 IF R$="N" OR R$="n" THEN LP=0:RETURN
9999 GOTO 9996
*/ });
