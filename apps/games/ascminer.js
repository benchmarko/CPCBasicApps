/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 REM ascminer - ASCII Miner
2 REM (c) IndyUK, 2022
3 REM https://www.cpcwiki.eu/forum/programming/my-2d-platformer-in-basic/
4 REM Modifications: wait with FRAME in line 400
5 REM Z (or Y): Left, X: Right, / (or -): Jump, R: Restart, F: Show FPS
6 REM
10 REM *************************
20 REM ***** ASCII + Miner *****
30 REM *************************
100 MODE 1:DEFINT a-z:BORDER 5:INK 0,0:INK 2,15:INK 3,14:SYMBOL AFTER 128
113 charhw=16:pmaxlives=3:plives=pmaxlives:player$=CHR$(248)
115 GOSUB 8800:REM Run all the initial game setup/configs
154 stime!=0:fps=0:showfps=-1:frmskip=-1:l=426:lh=112:DI
155 DIM player(6):playerstartfrmidx=0:playerfrmoffsetidx=0:playerfrm=0
157 player(0)=248:player(1)=249:player(2)=250:player(3)=253:player(4)=251:player(5)=252:player(6)=254
175 mapwidth=26:mapheight=11:screencharwidthmax=40:screencharheightmax=25:map=1:colstartidx=0:t=1
190 mapxstart=(((screencharwidthmax-mapwidth)\2)*charhw)
205 mapystart=ABS((((screencharheightmax-mapheight)\2)*charhw)-(screencharheightmax*charhw))
220 mapystart=mapystart-8
265 RESTORE 10000:GOSUB 9000:GOSUB 407:GOSUB 440:REM load first map
280 TAGOFF:PRINT CHR$(23);CHR$(1);:TAG:REM Enable XOR printing mode
300 WHILE 1
310 IF playerfalling=1 THEN GOSUB 4900:GOTO 353:REM if player is falling, skip directional key checks
315 IF pjumpidx>=0 OR pxblock=1 THEN GOTO 360:REM if player is jumping or has been x-blocked, skip directional key checks otherwise it interferes with the process
330 IF INKEY(71)=0 THEN pdir=-1:lastpdir=pdir:GOSUB 410:REM Z key - Left
340 IF INKEY(63)=0 THEN pdir=1:lastpdir=pdir:GOSUB 410:REM X key - Right
350 IF INKEY(30)=0 THEN IF pjumpidx=-1 THEN pjumpidx=0:GOTO 370: REM GOSUB 450:REM / key - Jump
353 IF INKEY(50)=0 THEN pdead=1:REM R key for restart
356 IF INKEY(53)=0 THEN showfps=showfps*-1
360 pdir=0:REM reset the player directional flag
365 IF playeronground=1 THEN playerfalling=0:pjumpidx=-1:pjumpdir=0:REM is player on solid ground
370 IF pjumpidx>=0 THEN GOSUB 450:REM if in the middle of jumping, continue the sequence
375 IF playeronground=0 THEN IF pjumpidx=-1 THEN playerfalling=1:pjumpdir=0:REM if player not on ground and not jumping, then he's falling
376 IF playerfalling=1 THEN IF lastpdir<>0 THEN IF pfalltotal=0 THEN GOSUB 440:px=px+(phvel*lastpdir):GOSUB 440
380 IF pdead=1 THEN GOSUB 431
386 GOSUB 5000:REM frmskip=frmskip*-1:IF frmskip=1 THEN GOSUB 5000:REM collision detection check
388 REM IF map=1 THEN GOSUB 5100:REM conveyor ledge
390 REM TAGOFF:PRINT CHR$(23);CHR$(0);:TAG:MOVE 1,390:PRINT pfalltotal;:TAGOFF:PRINT CHR$(23);CHR$(1);:TAG:REM px;py;pjumpdir;pdir;pjumpidx;
395 REM TAGOFF:LOCATE 1,2:PRINT px;:TAG
396 IF showfps=-1 GOTO 398 ELSE fps=fps+1:IF (TIME-stime!)>=300 THEN TAGOFF:LOCATE 23,1:PEN 3:PRINT fps;:TAG:fps=0:stime!=TIME
398 REM FRAME
399 IF t=10 THEN t=0 ELSE t=t+1:REM just a generic counter. useful if wanting to skip frames
400 while TIME<ti!:frame:wend:ti!=TIME+20: WEND
405 ::::::REM **** Game loop end ****
406 :
407 REM **** (Re)Set player properties ****
408 px=pstartx:py=pstarty:pxblock=-1:pyblock=-1:pbounceback=-1:pdir=0:lastpdir=0:phvel=4:pjumpidx=-1:pjumpdir=0:pdead=0:playerfalling=0:playeronground=1:pcol=0:fallvel=4:pmaxfall=48:pfalltotal=0:pcell=0:player$=CHR$(player(0))
409 RETURN
410 REM player sprite left/right logic
412 GOSUB 440:REM Blank player char
413 IF pxblock=1 THEN px=pbounceback:GOSUB 650:GOTO 425:REM bounce player by value passed
414 IF pdir>0 THEN playerstartfrmidx=1 ELSE playerstartfrmidx=4:REM Set player animation start frame depending on their direction
415 IF playerfrmoffsetidx=0 THEN playerfrmoffsetidx=playerfrmoffsetidx+1 ELSE playerfrmoffsetidx=0:
416 playerfrm=playerstartfrmidx+playerfrmoffsetidx 
417 player$=CHR$(player(playerfrm))
418 px=px+(phvel*pdir)
425 GOSUB 440:REM print player
430 RETURN
431 REM ***** Player Died ****
432 BORDER 6:GOSUB 440:REM Blank player char
433 plives=plives-1:BORDER 5 
434 IF plives>=0 THEN GOSUB 407
435 IF plives<0 THEN plives=pmaxlives:map=1:colstartidx=0:GOSUB 9000:GOSUB 407
437 GOSUB 440:REM print player
438 RETURN
440 REM **** Print/Blank player sprite ****
443 GRAPHICS PEN 2
445 MOVE px,py:PRINT player$;
446 GOSUB 4400:REM check if player is on solid ground
447 IF (t MOD 4)=0 THEN GOSUB 900:REM update player quadrant
449 RETURN
450 REM player jump logic
455 IF playeronground=1 THEN pjumpdir=pdir:lastpjumpdir=pdir:REM set the player jump direction
457 GOSUB 440:REM Blank player char
458 IF pjumpdir=0 THEN player$=CHR$(player(0)) ELSE IF pjumpdir>0 THEN player$=CHR$(player(3)) ELSE player$=CHR$(player(6))
460 IF pxblock=1 THEN px=pbounceback:pjumpidx=pjumpoffsets:playeronground=0:pxblock=-1:GOSUB 650:GOTO 473:REM if player jumps into a wall
465 pjumpidx=pjumpidx+1:REM get next jump x/y offsets
470 px=px+pjump(pjumpidx,1)*pjumpdir:REM increment/decrement next xpos
473 py=py+pjump(pjumpidx,2):REM next ypos
475 GOSUB 440:REM print player
480 IF pjumpidx=pjumpoffsets THEN pjumpidx=-1:pjumpdir=0:GOSUB 440:player$=CHR$(player(0)):GOSUB 440:REM we've reached end of jump offsets
600 RETURN
650 REM Align player x/y pos. Necessary to keep player x/y aligned to 4 pixels
651 IF lastpdir<>0 THEN actiondir=lastpdir ELSE actiondir=pjumpdir
652 actiondir=actiondir*-1
653 IF (px MOD phvel)=0 THEN GOTO 654 ELSE px=px+actiondir:GOTO 653
654 IF (py MOD phvel)=0 THEN GOTO 660 ELSE py=py-1:GOTO 654
660 RETURN
900 REM Locate which map cell player is currently in so we only scan for objects in the same cell
920 pcell=0
921 IF pdir>0 THEN tpx=px+charhw ELSE tpx=px:REM this is to see which side of the player should be tested based on the direction of movement
922 IF playerfalling=1 THEN tpy=py-charhw ELSE tpy=py:REM check which map cell is player falling through
925 IF tpx>=112 THEN IF tpx<=175 THEN IF tpy>=184 THEN pcell=1:RETURN
930 IF tpx>=176 THEN IF tpx<=223 THEN IF tpy>=184 THEN pcell=2:RETURN
935 IF tpx>=224 THEN IF tpx<=271 THEN IF tpy>=184 THEN pcell=3:RETURN
940 IF tpx>=272 THEN IF tpx<=319 THEN IF tpy>=184 THEN pcell=4:RETURN
945 IF tpx>=320 THEN IF tpx<=367 THEN IF tpy>=184 THEN pcell=5:RETURN
950 IF tpx>=368 THEN IF tpx<=415 THEN IF tpy>=184 THEN pcell=6:RETURN
955 IF tpx>=416 THEN IF tpx<=463 THEN IF tpy>=184 THEN pcell=7:RETURN
960 IF tpx>=464 THEN IF tpx<=526 THEN IF tpy>=184 THEN pcell=8:RETURN
965 IF tpx>=112 THEN IF tpx<=175 THEN IF tpy<=183 THEN pcell=9:RETURN
970 IF tpx>=176 THEN IF tpx<=223 THEN IF tpy<=183 THEN pcell=10:RETURN
975 IF tpx>=224 THEN IF tpx<=271 THEN IF tpy<=183 THEN pcell=11:RETURN
980 IF tpx>=272 THEN IF tpx<=319 THEN IF tpy<=183 THEN pcell=12:RETURN
985 IF tpx>=320 THEN IF tpx<=367 THEN IF tpy<=183 THEN pcell=13:RETURN
990 IF tpx>=368 THEN IF tpx<=415 THEN IF tpy<=183 THEN pcell=14:RETURN
995 IF tpx>=416 THEN IF tpx<=463 THEN IF tpy<=183 THEN pcell=15:RETURN
1000 IF tpx>=464 THEN IF tpx<=526 THEN IF tpy<=183 THEN pcell=16:RETURN
2000 RETURN
4400 REM Check if player is on solid ground
4405 IF playeronground=0 THEN IF pjumpidx>=0 THEN IF pjumpidx<=11 THEN RETURN:REM This is to stop the jump from sticking immediately when pixels of ground colour are detected
4406 IF pjumpidx=-1 THEN GOTO 4410:REM check if the player is jumping
4407 plcheck=TEST(px+2,py-charhw):prcheck=TEST(px+10,py-charhw):GOTO 4415:REM this version tests when the player is jumping and needs slightly different x/y offsets
4408 IF plcheck=0 OR prcheck=0 THEN playeronground=0 ELSE playeronground=1:GOTO 4450
4410 plcheck=TEST(px+6,py-charhw):prcheck=TEST(px+10,py-charhw):REM test which player sprite leg is on solid ground
4415 IF plcheck=0 AND prcheck=0 THEN playeronground=0 ELSE playeronground=1:REM the check returns 0 (space) player is not on solid ground
4450 IF playeronground=1 THEN IF pfalltotal>pmaxfall THEN pdead=1 ELSE pfalltotal=0
4800 RETURN
4900 REM player free fall code
4920 GOSUB 440:REM Blank player char
4925 IF ASC(player$)<>248 THEN player$=CHR$(player(0)):REM set the default player frame
4930 py=py-fallvel
4935 pfalltotal=pfalltotal+fallvel
4940 GOSUB 440:REM print player
4945 IF py-charhw<=my THEN pdead=1:REM We've hit bottom of screen
4950 RETURN
5000 REM ***** Collision detection logic *****
5033 pxblock=-1:pbounceback=-1
5035 FOR i=1 TO mcell(pcell,1)
5036 col=0
5037 IF object(pcell,i,9)=0 THEN GOTO 5050:REM if object is not active, skip to next
5040 IF px<object(pcell,i,6) THEN IF py>object(pcell,i,7) THEN IF (px+14)>object(pcell,i,4) THEN IF (py-18)<object(pcell,i,5) THEN col=-1 ELSE GOTO 5050:REM GOTO 5044
5044 IF col=-1 AND object(pcell,i,8)=1 THEN pdead=1:RETURN:REM if deadly object, immediate death
5045 IF col=-1 AND object(pcell,i,8)=9 THEN GOSUB 5200:GOTO 5050:REM handle collectable item 
5046 IF col=-1 AND object(pcell,i,8)=0 THEN pxblock=1:REM RETURN:rem if harmless object, no death but, block player path
5047 IF pxblock=1 THEN IF lastpdir=1 THEN IF (px+charhw)>=object(pcell,i,4) THEN pbounceback=object(pcell,i,4)-charhw:GOSUB 410:GOTO 5055 
5048 IF pxblock=1 THEN IF lastpdir=-1 THEN IF px<=object(pcell,i,6) THEN pbounceback=object(pcell,i,6):GOSUB 410:GOTO 5055
5050 NEXT
5055 RETURN
5058 :
5100 REM Conveyor belt - Not used
5104 MOVE mapxstart-6,lh:GRAPHICS PEN 3:MASK maskval:DRAWR l,0 
5105 linex=linex+1
5110 maskval=(2^linex)*7
5120 IF maskval>=192 THEN linex=1
5150 MOVE mapxstart-6,lh:GRAPHICS PEN 3:MASK maskval:DRAWR l,0 
5160 RETURN
5200 REM Collectable item
5205 GOSUB 440:REM Blank player char
5210 TAGOFF:PRINT CHR$(23);CHR$(0);:TAG
5220 MOVE object(pcell,i,1),object(pcell,i,2):PRINT " ";:object(pcell,i,9)=0
5230 TAGOFF:PRINT CHR$(23);CHR$(1);:TAG
5240 GOSUB 440:REM print player char
5300 RETURN
8790 :
8792 :
8794 :
8800 REM *************************
8810 REM ***** Setup/Config  *****
8820 REM ************************* 
8850 GOSUB 8900:GOSUB 9800
8890 RETURN
8898 :
8899 :
8900 REM ***** Setup jump offsets *****
8905 pjumpoffsets=17:REM max must be half of total count of data values as we're reading in a pair of vals
8906 DIM pjump(pjumpoffsets,2):REM first element=row, second element=xpos,ypos
8907 RESTORE 8960
8910 FOR x=1 TO pjumpoffsets
8920 READ jxpos,jypos
8930 pjump(x,1)=jxpos:pjump(x,2)=jypos
8940 NEXT x
8950 RETURN
8960 DATA 2,4, 2,4, 2,4, 2,4, 2,4, 2,2, 2,2
8970 DATA 4,0, 4,0, 4,0
8980 DATA 2,-2, 2,-2, 2,-4, 2,-4, 2,-4, 2,-4, 2,-4
8981 REM DATA 3,4,3,4,3,4,3,4,3,4,3,4
8982 REM DATA 3,0,3,,3,0,3,0,3,0
8983 REM DATA 3,-4,3,-4,3,-4,3,-4,3,-4,3,-4
9000 REM ***** Load map data *****
9025 TAGOFF:PEN 1:PRINT CHR$(23);CHR$(1):CLS:TAG
9028 IF mcellidx>0 THEN ERASE mcell:ERASE object
9030 DIM mcell(16,1):DIM object(16,10,9)
9050 mx=mapxstart:my=mapystart:mcellidx=0:objidx=0:REM MOVE mx,my
9100 IF map=1 THEN RESTORE 10000:GOTO 9150
9125 IF map=2 THEN RESTORE 10300
9150 FOR y=1 TO mapheight
9175 FOR x=1 TO mapwidth
9200 READ a:MOVE mx,my:GRAPHICS PEN 1:REM IF mx>=175 then if mx mod 48 = 0 then plotr 0,0
9225 IF a<10 THEN GOTO 9445:REM skip map cell population if non-interactive object
9275 REM determine which map cell we're working in
9305 IF mx>=112 THEN IF mx<=175 THEN IF my>=184 THEN mcellidx=1:GOTO 9405
9310 IF mx>=176 THEN IF mx<=223 THEN IF my>=184 THEN mcellidx=2:GOTO 9405
9315 IF mx>=224 THEN IF mx<=271 THEN IF my>=184 THEN mcellidx=3:GOTO 9405
9320 IF mx>=272 THEN IF mx<=319 THEN IF my>=184 THEN mcellidx=4:GOTO 9405
9325 IF mx>=320 THEN IF mx<=367 THEN IF my>=184 THEN mcellidx=5:GOTO 9405
9330 IF mx>=368 THEN IF mx<=415 THEN IF my>=184 THEN mcellidx=6:GOTO 9405
9335 IF mx>=416 THEN IF mx<=463 THEN IF my>=184 THEN mcellidx=7:GOTO 9405
9340 IF mx>=464 THEN IF mx<=526 THEN IF my>=184 THEN mcellidx=8:GOTO 9405
9345 IF mx>=112 THEN IF mx<=175 THEN IF my<=183 THEN mcellidx=9:GOTO 9405
9350 IF mx>=176 THEN IF mx<=223 THEN IF my<=183 THEN mcellidx=10:GOTO 9405
9355 IF mx>=224 THEN IF mx<=271 THEN IF my<=183 THEN mcellidx=11:GOTO 9405
9360 IF mx>=272 THEN IF mx<=319 THEN IF my<=183 THEN mcellidx=12:GOTO 9405
9365 IF mx>=320 THEN IF mx<=367 THEN IF my<=183 THEN mcellidx=13:GOTO 9405
9370 IF mx>=368 THEN IF mx<=415 THEN IF my<=183 THEN mcellidx=14:GOTO 9405
9375 IF mx>=416 THEN IF mx<=463 THEN IF my<=183 THEN mcellidx=15:GOTO 9405
9380 IF mx>=464 THEN IF mx<=526 THEN IF my<=183 THEN mcellidx=16:GOTO 9405
9403 REM add object to relevant map cell array object
9404 REM first element=row, subsequent elements = xpos(1),ypos(2),pennumber(3),rectleft(4),recttop(5),rectright(6),rectbottom(7),deadly(8),active(9)
9405 mcell(mcellidx,1)=mcell(mcellidx,1)+1:REM Increment quadrant array index
9406 object(mcellidx,mcell(mcellidx,1),1)=mx:object(mcellidx,mcell(mcellidx,1),2)=my:object(mcellidx,mcell(mcellidx,1),3)=0
9407 object(mcellidx,mcell(mcellidx,1),4)=mx:object(mcellidx,mcell(mcellidx,1),5)=my
9408 object(mcellidx,mcell(mcellidx,1),6)=(mx+charhw):object(mcellidx,mcell(mcellidx,1),7)=(my-charhw)
9409 object(mcellidx,mcell(mcellidx,1),8)=0:object(mcellidx,mcell(mcellidx,1),9)=1:REM deadly(1) or not deadly(0)
9410 IF a=10 OR a=11 THEN object(mcellidx,mcell(mcellidx,1),8)=1
9411 IF a=99 THEN object(mcellidx,mcell(mcellidx,1),8)=9
9420 IF a=13 THEN object(mcellidx,mcell(mcellidx,1),4)=(mx+2):object(mcellidx,mcell(mcellidx,1),5)=my-2
9421 IF a=13 THEN object(mcellidx,mcell(mcellidx,1),6)=(mx+(charhw-4)):object(mcellidx,mcell(mcellidx,1),7)=(my-charhw)+6
9422 IF a=10 THEN object(mcellidx,mcell(mcellidx,1),4)=(mx+3):object(mcellidx,mcell(mcellidx,1),5)=(my-5):object(mcellidx,mcell(mcellidx,1),6)=(mx+6):object(mcellidx,mcell(mcellidx,1),7)=(my-charhw)
9423 IF a=14 OR a=2 THEN object(mcellidx,mcell(mcellidx,1),4)=(mx+2):object(mcellidx,mcell(mcellidx,1),5)=(my-charhw)+(charhw*2):object(mcellidx,mcell(mcellidx,1),6)=(mx+(charhw-1)):object(mcellidx,mcell(mcellidx,1),7)=(my-charhw)
9424 IF a=15 THEN object(mcellidx,mcell(mcellidx,1),4)=(mx):object(mcellidx,mcell(mcellidx,1),5)=(my-2)
9425 IF a=15 THEN object(mcellidx,mcell(mcellidx,1),6)=(mx+(charhw-4)):object(mcellidx,mcell(mcellidx,1),7)=(my-charhw/2)
9426 IF a=99 THEN object(mcellidx,mcell(mcellidx,1),4)=(mx+1):object(mcellidx,mcell(mcellidx,1),5)=(my-1)
9427 IF a=99 THEN object(mcellidx,mcell(mcellidx,1),6)=(mx+(charhw-1)):object(mcellidx,mcell(mcellidx,1),7)=(my-charhw)-1
9428 IF a=11 THEN object(mcellidx,mcell(mcellidx,1),4)=(mx+3):object(mcellidx,mcell(mcellidx,1),5)=(my-6)
9429 IF a=11 THEN object(mcellidx,mcell(mcellidx,1),6)=(mx+6):object(mcellidx,mcell(mcellidx,1),7)=(my-charhw)-3
9445 IF a=-1 THEN pstartx=mx:pstarty=my+8:GOTO 9550:REM this is the player initial start position in the map
9450 IF a=0 THEN GOTO 9550:REM Blank background
9475 IF a=1 THEN PRINT CHR$(128);:GOTO 9550:REM Ledge
9477 IF a=2 OR a=15 THEN GRAPHICS PEN 2:PRINT CHR$(131);:MOVE mx,my:GRAPHICS PEN 3:PRINT CHR$(129);:GOTO 9550:REM Brick ledge(H)
9478 IF a=13 THEN GRAPHICS PEN 2:PRINT CHR$(174);:MOVE mx,my:GRAPHICS PEN 3:PRINT CHR$(175);:GOTO 9550:REM Brick wall (V) 
9479 IF a=14 THEN GRAPHICS PEN 2:PRINT CHR$(174);:MOVE mx,my:GRAPHICS PEN 3:PRINT CHR$(175);:MOVE mx,my+charhw:GRAPHICS PEN 2:PRINT CHR$(174);:MOVE mx,my+charhw:GRAPHICS PEN 3:PRINT CHR$(175);:GOTO 9550:REM Brick wall (V)x2 high
9500 IF a=10 THEN GRAPHICS PEN 3:PRINT CHR$(133);:GOTO 9550:REM Bush
9525 IF a=11 THEN GRAPHICS PEN 2:PRINT CHR$(132);:GOTO 9550:REM Plant
9526 IF a=3 THEN GRAPHICS PEN 3:PRINT CHR$(176);
9527 IF a=99 THEN GRAPHICS PEN 2:PRINT CHR$(177);:MOVE mx,my:GRAPHICS PEN 3:PRINT CHR$(178);:GOTO 9550:REM Collectable item
9550 mx=mx+charhw:REM move to next char position
9575 NEXT x
9600 mx=mapxstart:my=my-charhw:REM move to next map line and start x pos
9625 NEXT y
9650 REM GRAPHICS PEN 3:MOVE 320-200,184:DRAWR 400,0:MOVE 320,184-150:DRAWR 0,300:REM Screen centre crosshair
9655 REM IF map=1 THEN MOVE mapxstart-6,lh-2:GRAPHICS PEN 2:MASK 255:DRAWR l,0:MOVE mapxstart-6,lh:GRAPHICS PEN 2:MASK 255:DRAWR l,0
9700 RETURN
9796 :
9800 REM Setup border and character graphics
9802 PEN 3
9805 FOR x=1 TO 40:LOCATE x,1:PRINT CHR$(207):LOCATE (40-x)+1,25:PRINT CHR$(207);:NEXT x
9810 FOR x=1 TO 25:LOCATE 1,x:PRINT CHR$(207):LOCATE 40,(25-x)+1:PRINT CHR$(207);:NEXT x
9815 SYMBOL 185,0,59,42,59,40,40,43,0:SYMBOL 186,0,187,33,161,161,161,187,0:SYMBOL 187,0,184,16,22,22,16,184,0
9820 SYMBOL 188,0,251,169,169,137,137,139,0:SYMBOL 189,0,165,53,45,37,37,165,0:SYMBOL 190,0,220,20,156,24,20,212,0
9825 FOR t=185 TO 190:title$=title$+CHR$(t):NEXT t
9830 TAGOFF:PRINT CHR$(23);CHR$(1):TAG:MOVE 284,399:GRAPHICS PEN 2:PRINT title$;:TAGOFF
9835 PEN 3:LOCATE 7,7:PRINT CHR$(150):FOR x=8 TO 33:LOCATE x,7:PRINT CHR$(154);:NEXT x:LOCATE 34,7:PRINT CHR$(156):REM Top of frame
9836 LOCATE 7,19:PRINT CHR$(147):FOR x=8 TO 33:LOCATE x,19:PRINT CHR$(154);:NEXT x:LOCATE 34,19:PRINT CHR$(153):REM Bottom of frame
9837 FOR x=8 TO 18:LOCATE 7,x:PRINT CHR$(149);:NEXT x:FOR x=8 TO 18:LOCATE 34,x:PRINT CHR$(149);:NEXT x:REM Sides of frame
9838 LOCATE 5,21:PRINT "Z = Left    X = Right   / = Jump"
9840 WINDOW 8,33,8,18:PAPER 0:ORIGIN 0,8
9861 SYMBOL 128,255,85,42,20,0,0,0,0:SYMBOL 129,34,255,136,255,0,0,0,0:SYMBOL 133,0,0,0,0,24,60,102,24:SYMBOL 132,0,0,0,0,8,44,24,8:REM SYMBOL 131,255,63,0,0,0,0,0,0:SYMBOL 132,255,252,0,0,0,0,0,0
9862 SYMBOL 248,56,56,16,124,146,40,40,40
9863 SYMBOL 249,56,56,18,124,144,40,196,134:SYMBOL 250,56,56,18,124,144,16,16,24:REM SYMBOL 250,56,56,18,124,144,40,72,108:REM walk right
9864 SYMBOL 253,56,56,18,124,144,40,72,144:REM jump right
9865 SYMBOL 251,28,28,72,62,9,20,35,97:SYMBOL 252,28,28,72,62,9,8,8,24:REM SYMBOL 252,28,28,72,62,9,20,18,54 :REM walk left
9866 SYMBOL 254,28,28,72,62,9,20,18,9:REM jump left
9867 SYMBOL 174,60,60,60,60,60,60,60,60:SYMBOL 175,60,8,60,16,60,8,60,16:REM Brick wall (vertical stack)
9868 SYMBOL 176,68,124,68,68,68,124,68,68:REM SYMBOL 176,66,66,126,66,66,66,126,66:REM Ladder
9869 REM SYMBOL 177,0,16,56,108,56,16,0,0:SYMBOL 178,0,40,68,16,68,40,0,0:REM Collectable item
9870 SYMBOL 177,0,0,0,8,16,0,0,0:SYMBOL 178,0,0,0,16,8,0,0,0:REM Collectable item
9900 RETURN
10000 REM ***** Screen 1 *****
10010 DATA 00,00,00,00,00,00,00,00,00,00,00,99,00,00,00,00,00,00,00,00,00,00,00,00,00,00
10020 DATA 00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00
10030 DATA 00,00,00,00,00,00,00,00,00,00,00,03,00,00,00,00,00,00,00,00,00,00,00,00,00,00
10040 DATA 00,00,00,00,00,00,00,00,99,14,99,03,-1,00,00,13,99,00,00,00,00,00,00,00,00,00
10050 DATA 00,00,00,00,00,00,00,01,01,01,01,01,01,01,01,01,01,01,00,00,00,00,00,00,00,00
10060 DATA 00,00,00,00,01,00,00,00,11,99,00,00,99,99,10,00,00,00,01,00,00,00,00,00,00,00
10070 DATA 00,00,00,00,00,00,00,01,01,01,00,00,01,01,01,01,01,00,01,00,99,00,00,00,00,00
10080 DATA 00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,99,01,00,00,00,00,00
10090 DATA 00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,99,00,15,02,02,00,00,00,00,00,00
10100 DATA 00,00,00,00,00,00,00,00,00,00,00,00,99,00,00,01,01,00,00,00,00,00,00,00,00,00
10110 DATA 01,00,00,00,00,00,00,00,00,00,00,00,01,00,00,00,00,00,00,00,00,00,00,00,00,01
10120 DATA 00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00:REM Height 12
10300 REM ***** Screen 2 *****
10310 DATA 00,00,00,00,00,00,00,00,00,00,00,00,01,00,00,00,00,00,00,00,00,00,00,00,00,00
10320 DATA 00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00
10330 DATA 00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00
10340 DATA 00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00
10350 DATA 00,00,00,00,00,00,00,00,00,00,00,00,-1,00,00,00,00,00,00,00,00,00,00,00,00,00
10360 DATA 00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00
10370 DATA 00,00,00,00,00,00,00,00,00,00,00,01,01,01,00,00,00,00,00,00,00,00,00,00,00,00
10380 DATA 00,00,00,00,00,00,00,00,00,11,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00
10390 DATA 00,00,00,00,00,00,00,00,00,01,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00
10400 DATA 00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00
10410 DATA 00,00,00,00,00,01,01,01,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00
10420 DATA 00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00:REM Height 12
*/ });
