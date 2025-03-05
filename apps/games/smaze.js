/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 REM smaze - Super Maze
2 ' 1989 by MB Computrex Software Limited                                         ' CPC Amstrad international 4/90, Bonusprogramm
3 ' https://cpcrulez.fr/GamesTest/super_maze.htm
4 IF PEEK(&BD71)=&E8 THEN MODE 1:PRINT"Sie haben einen CPC 464 und muessen den EMULATOR vorher laden!!! Taste druecken.":CALL &BB06
10 CALL &BBFF:CALL &BB4E:INK 0,0:BORDER 0:DEFINT a-z
20 ENV 1,15,-1,10:ENV 2,15,-1,20:ENT 1,20,-2,1,1,30,1,20,-2,1,50,1,1:ENT 2,25,4,1,200,-1,1:ENT-3,10,1,1,10,-1,1:ENT-4,50,-10,1,70,5,1
30 DEF FNcon$(num)=MID$(STR$(num),2):DEF FNfrm$(zl,anz)=STRING$(anz-LEN(FNcon$(zl)),"0")+FNcon$(zl)
40 DEF FNexit(x,y)=x=0 OR x>w OR y=0 OR y>h:DEF FNrnlet=(fls=1+(rst\3)*2)AND expl=0 AND rst>0
50 all$=CHR$(243)+CHR$(9)+CHR$(241)+CHR$(10)+CHR$(242)+CHR$(8)+CHR$(240)+CHR$(11)
60 dull!=0.4:fairy!=0.2
70 OPENIN"SMAZE.DAT":INPUT#9,numb,numcol
80 DIM f(numcol,2),word$(numb),expl$(numb)
90 FOR cnt=1 TO numb:LINE INPUT#9,word$(cnt):LINE INPUT#9,expl$(cnt):NEXT
100 FOR cnt=1 TO numcol:INPUT#9,f(cnt,0),f(cnt,1),f(cnt,2):NEXT:CLOSEIN
110 MODE 1:farbe=2:GOSUB 1590
120 LOCATE 9,1:PEN 2:PRINT"----- SUPER MAZE -----":LOCATE 1,2:PEN 1:PRINT " 1989 by MB Computrex Software Limited."
130 PEN 3:LOCATE 1,6:PRINT"Please select option..."
140 PEN 1:LOCATE 1,8:PRINT"[P] ==> Play game":PRINT"[T] ==> Terminate programme":PRINT"[D] ==> Display a maze"
150 LOCATE 1,12:PEN 2:PRINT"Option selected: _";
160 a$=UPPER$(INKEY$):IF a$<>"T"AND a$<>"P"AND a$<>"D"THEN 160
170 PRINT a$:IF a$="T"THEN CALL &BBFF:CALL &BB4E:END
180 PEN 1:LOCATE 6,15:PRINT"Please enter:"
190 LOCATE 1,17:INPUT"The width of the maze, in cells : ",w:IF w<3 OR w>50 THEN 190
200 LOCATE 1,18:INPUT"The depth of the maze, in cells : ",h:IF h<3 OR h>50 THEN 200
210 RANDOMIZE TIME
220 WINDOW 1,40,3,25:FOR anz=1 TO 10:LOCATE 1,26:PRINT:NEXT:WINDOW 1,40,1,25:FOR cnt=1 TO 760:NEXT:sum=w*h:IF a$="D"THEN 260
230 pe=3:tx=6:ty=11:txt$="Please answer this question.":GOSUB 1570:FOR anz=1 TO RND*30+2:p=RND:NEXT
240 word=INT(RND*numb+1):word$=word$(word):le=LEN(word$):IF sum<=le THEN 240
250 pe=1:tx=7:ty=13:txt$="You will need "+FNfrm$(le,2)+" letters.":GOSUB 1570:pe=2:tx=1:ty=15:txt$=">"+CHR$(34)+expl$(word)+CHR$(34):GOSUB 1570
260 pe=1:tx=8:ty=18:txt$="000.0% of the maze built.":GOSUB 1570
270 'CREATE MAZE
280 DIM grid(w+1,h+1),pm(5),lett$(w,h)
290 rnx=INT(RND*w+1):rny=INT(RND*h+1):ex=INT(RND*4)
300 IF ex=0 THEN trgx=1:trgy=rny
310 IF ex=1 THEN trgx=w:trgy=rny
320 IF ex=2 THEN trgx=rnx:trgy=1
330 IF ex=3 THEN trgx=rnx:trgy=h
340 x=trgx:y=trgy:grid(x,y)=2^ex
350 FOR n=2 TO sum:LOCATE 8,18:PRINT USING"###.#";n*100/sum:p=0
360 IF x>1 AND grid(x-1,y)=0 THEN p=p+1:pm(p)=1
370 IF x<w AND grid(x+1,y)=0 THEN p=p+1:pm(p)=2
380 IF y>1 AND grid(x,y-1)=0 THEN p=p+1:pm(p)=3
390 IF y<h AND grid(x,y+1)=0 THEN p=p+1:pm(p)=4
400 IF p<>0 THEN 440
410 x=x+1:IF x>w THEN x=1:y=y+1:IF y>h THEN y=1
420 IF grid(x,y)=0 THEN 410
430 GOTO 360
440 r=pm(INT(RND*p+1)):grid(x,y)=grid(x,y)+(2^(r-1))
450 IF r=1 THEN x=x-1:grid(x,y)=2
460 IF r=2 THEN x=x+1:grid(x,y)=1
470 IF r=3 THEN y=y-1:grid(x,y)=8
480 IF r=4 THEN y=y+1:grid(x,y)=4
490 NEXT:IF a$="D"THEN MODE 1:GOSUB 1440:GOSUB 1820:GOTO 110
500 pe=2:tx=5:ty=21:txt$="*** Going to hide letters ***":GOSUB 1570
510 FOR cnt=1 TO le:w$=MID$(word$,cnt,1)
520 xx=INT(RND*w+1):yy=INT(RND*h+1):IF lett$(xx,yy)<>""THEN 520
530 lett$(xx,yy)=w$:NEXT cnt:rst=(sum+1)-le:IF rst<6 THEN rst=0:GOTO 580 ELSE rst=INT(rst/3)
540 FOR cnt=1 TO rst
550 lt$=CHR$(INT(RND*57+65)):IF INSTR(word$,lt$)<>0 OR(ASC(lt$)>90 AND ASC(lt$)<97)THEN 550
560 xx=INT(RND*w+1):yy=INT(RND*h+1):IF lett$(xx,yy)<>""THEN 560 ELSE lett$(xx,yy)=lt$
570 NEXT cnt
580 ssqr=SQR(sum):day=CINT(ssqr*6.5)*50:hits=ssqr\2:guess=CINT(le/2):exhlp=1+(ssqr\6):lehlp=INT(le/2.7):ohit=hits:ogues=guess
590 pe=1:ty=23:txt$="Time scale:  1 day = "+FNfrm$(day/50,3)+" sec.":GOSUB 1570:pe=3:ty=25:txt$="Press any key to start game !":GOSUB 1570:PEN 1:CALL &BB18
600 LOCATE 1,3:PRINT CHR$(20):farbe=1:stcol=1
610 MOVE 158,48:DRAW 158,352,1:DRAW 488,352:DRAW 488,48:DRAW 158,48:ORIGIN 160,50,160,480,50,350:CLG 2
620 PEN 2:PRINT CHR$(22);CHR$(1):LOCATE 1,5:PRINT"Hit-points";CHR$(22);CHR$(0):LOCATE 3,10:PRINT"Guess-":LOCATE 3,11:PRINT"points":LOCATE 34,5:PRINT"Steps"
630 LOCATE 33,10:PRINT"Letters":LOCATE 34,15:PRINT"Letter":LOCATE 35,16:PRINT"help":LOCATE 32,21:PRINT"Exit-help"
640 LOCATE 3,16:PRINT"Exits":LOCATE 5,18:PRINT CHR$(240):LOCATE 3,20:PRINT CHR$(242);CHR$(32);:PEN 3:PRINT CHR$(231);:PEN 2:PRINT CHR$(32);CHR$(243):LOCATE 5,22:PRINT CHR$(241)
650 PEN 1:LOCATE 35,6:PRINT"0000":WINDOW#1,1,40,23,24:LOCATE 35,11:PRINT"000%"
660 GOSUB 1730:GOSUB 1750:GOSUB 1770:GOSUB 1790:lcor=CINT((40-(15+le))/2):LOCATE lcor,25:PRINT"Letters found :";:PEN 2:PRINT STRING$(le,46)
670 EVERY day GOSUB 1610
680 'PLAY GAME
690 pnx=INT(RND*w+1):pny=INT(RND*h+1)
700 g=grid(pnx,pny):ll$=lett$(pnx,pny):GOSUB 1210:GOSUB 1280:IF ll$<>""THEN 950
710 IF guess=1 AND lehlp=0 AND RND<=dull! THEN CLS#1:pe=1:tx=5:ty=23:txt$="You can hear someone laughing:":GOSUB 1570:tx=1:ty=24:txt$="You aren't very wily.Take another letter":GOSUB 1570:lehlp=lelp+1:GOSUB 1770:GOTO 740
720 IF FNrnlet THEN CLS#1:GOSUB 1850:FOR cnt=200 TO 75 STEP-25:SOUND 1,cnt,50,15,2,3:SOUND 4,cnt+2,50,15,2,3:NEXT:GOSUB 1830
730 IF FNrnlet THEN pe=1:tx=1:ty=23:txt$="You have removed almost all Rnd.letters!":GOSUB 1570:tx=3:ty=24:txt$="Therefore you'll get an exit-help!":GOSUB 1570:expl=-1:exhlp=exhlp+1:GOSUB 1790
740 CLEAR INPUT
750 z$=UPPER$(INKEY$):IF z$=""THEN 750
760 IF z$="T"THEN escap=-1:GOTO 1060
770 IF z$="L"AND lehlp>0 THEN CLS#1:pe=1:tx=3:ty=23:txt$="-- T E L E P O R T --  Find letter":GOSUB 1570:tx=10:ty=24:GOSUB 1650:GOSUB 1770:GOTO 700
780 IF z$="E"AND exhlp>0 THEN CLS#1:pe=1:tx=3:ty=23:txt$="-- M A G I C --  Where's the exit?":GOSUB 1570:ty=24:GOSUB 1690:GOSUB 1790:GOTO 700
790 IF z$="C"THEN DI:GOSUB 1620:EI:GOTO 740
800 ip=CINT(INSTR(all$,z$)/2):IF ip=0 THEN 750
810 CLS#1:fair!=RND:IF fair!>fairy! THEN 870
820 type!=RND:IF(type!<=0.5 AND guess=ogues)OR(type!>0.5 AND hits=ohit)THEN 870
830 pe=1:CLS#1:GOSUB 1850:FOR cnt=1 TO 4:SOUND 1,20,80,15,1:SOUND 4,40,80,15,1:NEXT:GOSUB 1830:IF type!<=0.5 THEN 850
840 txt$="You can hear a soft voice singing  :":tx=2:ty=23:GOSUB 1570:tx=1:ty=24:txt$="Oh lover of mazes, I'll give you Hits.":GOSUB 1570:hits=hits+1:GOSUB 1730:SOUND 1,20,200,15,2,3:GOSUB 1830:GOTO 860
850 tx=4:ty=23:txt$="You can hear a voice of a fairy :":GOSUB 1570:tx=1:ty=24:txt$="I'm LuckyGuess.Do you want Guess-points?":GOSUB 1570:guess=guess+1:GOSUB 1750:SOUND 4,50,200,15,2,3:GOSUB 1830
860 FOR cnt=1 TO 900:NEXT cnt
870 IF NOT((ip=1 AND rg=0)OR(ip=2 AND dn=0)OR(ip=3 AND lf=0)OR(ip=4 AND up=0))THEN 910
880 BORDER 6,18:SOUND 133,0,100,15,1,0,30:GOSUB 1830:CLS#1:pe=1:tx=13:ty=23:txt$="OW! That hurt!":GOSUB 1570:pe=2:tx=6:ty=24:txt$="Please be careful next time!":GOSUB 1570:hits=hits-1
890 BORDER 0:GOSUB 1730:IF hits=0 THEN 1060
900 GOTO 740
910 ox=pnx:oy=pny:IF ip=1 THEN pnx=pnx+1 ELSE IF ip=2 THEN pny=pny+1 ELSE IF ip=3 THEN pnx=pnx-1 ELSE IF ip=4 THEN pny=pny-1
920 steps=steps+1:PEN 1:LOCATE 35,6:PRINT FNfrm$(steps,4)
930 IF FNexit(pnx,pny)THEN IF gss=le THEN 1110 ELSE CLS#1:pe=2:tx=15:ty=23:txt$="Not now !!":GOSUB 1570:pe=1:tx=2:ty=24:txt$="You must collect ALL letters first !":GOSUB 1570:pnx=ox:pny=oy:GOTO 740
940 GOTO 700
950 SOUND 129,200,225,15,0,2:SOUND 132,206,225,15,0,2
960 CLS#1:PEN 2:LOCATE 2,23:PRINT"You have found a letter! It is a '";ll$;"' !":LOCATE 5,24:PEN 1:PRINT"Do you want to keep it (y/n) ?"
970 des$=UPPER$(INKEY$):IF des$<>"Y"AND des$<>"N"THEN 970
980 CLS#1:ltpos=INSTR(word$,ll$):IF des$="N"AND ltpos=0 THEN LOCATE 13,23:PEN 2:PRINT"Good choice !":GOSUB 1850:SOUND 4,70,70,15,2,1:LOCATE 5,24:PRINT"I'll delete this cell for you!":lett$(pnx,pny)="":fls=fls+1:GOTO 700
990 IF des$="N"AND ltpos<>0 THEN LOCATE 11,23:PEN 2:PRINT"That wasn't good!":LOCATE 7,24:PEN 3:PRINT"This letter was correct !":GOSUB 1850:SOUND 1,2000,80,15,1:guess=guess-1:GOSUB 1750:IF guess=0 THEN 1060 ELSE 710
1000 IF ltpos<>0 THEN 1030
1010 GOSUB 1850:FOR cnt=1 TO 3:SOUND 1,2000,80,15,1:NEXT:PEN 1:LOCATE 2,23:PRINT"Sorry! That wasn't the correct letter!":LOCATE 6,24:PEN 3:PRINT"This cell won't be deleted!":guess=guess-1
1020 GOSUB 1750:IF guess=0 THEN 1060 ELSE 710
1030 GOSUB 1850:FOR s=100 TO 70 STEP-15:SOUND 4,s,70,15,2,1:NEXT:PEN 2:LOCATE 2,23:PRINT"Very good! This letter was correct!":PEN 1:LOCATE lcor+14+ltpos,25:PRINT ll$:lett$(pnx,pny)="":gss=gss+1:MID$(word$,ltpos)="@"
1040 LOCATE 35,11:PRINT FNfrm$(INT(gss*100/le),3)
1050 GOTO 700
1060 'GAME OVER
1070 CLS#1:aa=REMAIN(0):farbe=2:GOSUB 1590:FOR cnt=1 TO 2000:NEXT
1080 ORIGIN 0,0,0,640,0,400:FOR y=0 TO 199:MOVE 0,y*2:DRAWR 639,0,0:NEXT:CLS:tx=1:ty=12:pe=2:IF hits=0 THEN tx=2:txt$="Sorry! You've run out of Hit-Points!"ELSE IF guess=0 THEN txt$="Sorry! You've run out of Guess-Points!"
1090 IF escap THEN pe=3:txt$="** P R O G R A M M E  A B O R T E D  **"
1100 GOSUB 1570:pe=1:tx=3:ty=14:txt$="--- Press a key to see the maze ---":GOSUB 1570:CALL &BB18:MODE 1:GOSUB 1440:GOSUB 1810:GOTO 110
1110 'ALL LETTERS COLLECTED + EXIT
1120 CLS#1:aa=REMAIN(0):FOR cnt=1 TO 2000:NEXT:FOR anz=1 TO 150:GOSUB 1610:NEXT:farbe=2:GOSUB 1590
1130 LOCATE 1,25:PRINT CHR$(18);:pe=1:tx=1:ty=23:txt$="You see a bright light in this dark     maze. Going through a small exit you    realize that you are free now.":GOSUB 1570:FOR cnt=1 TO 5000:NEXT
1140 ORIGIN 0,0,0,640,0,400:FOR x=0 TO 320 STEP 2:x2=640-x:MOVE x,0:DRAWR 0,400,0:MOVE x2,0:DRAWR 0,400:NEXT:CLS:pe=3:tx=4:ty=1:txt$="C O N G R A T U L A T I O N S  !":GOSUB 1570
1150 pe=2:tx=7:ty=3:txt$="You have solved this maze.":GOSUB 1570:pe=1:tx=1:ty=5::txt$="You have collected all the letters      hidden in the maze.":GOSUB 1570
1160 ty=7:txt$="There were "+FNfrm$(le,2)+" correct and "+FNfrm$(rst,2)+" random     letters.":GOSUB 1570
1170 tx=11:ty=11:txt$="The question was :":GOSUB 1570:pe=2:tx=1:ty=13:txt$=">"+CHR$(34)+expl$(word)+CHR$(34):GOSUB 1570:pe=1:tx=8:ty=16:txt$="The correct answer is :":GOSUB 1570:pe=2:tx=1:ty=18:txt$=">"+CHR$(34)+word$(word)+CHR$(34)
1180 GOSUB 1570:pe=1:ty=21:txt$="Hit-points left   : "+FNfrm$(INT(hits*100/ohit),3)+"%":GOSUB 1570:ty=22:txt$="Guess-points left : "+FNfrm$(INT(guess*100/ogues),3)+"%":GOSUB 1570
1190 ty=23:txt$="Number of steps   : "+FNfrm$(steps,4):GOSUB 1570:pe=3:ty=25:txt$="Press any key to see maze and restart":GOSUB 1570
1200 CALL &BB18:MODE 1:GOSUB 1440:GOSUB 1810:GOTO 110
1210 'Check exits
1220 lf=0:rg=0:up=0:dn=0:IF(g AND 8)<>0 THEN dn=1
1230 IF(g AND 4)<>0 THEN up=1
1240 IF(g AND 2)<>0 THEN rg=1
1250 IF(g AND 1)<>0 THEN lf=1
1260 LOCATE 5,22:PEN dn:PRINT CHR$(241):LOCATE 5,18:PEN up:PRINT CHR$(240):LOCATE 7,20:PEN rg:PRINT CHR$(243):LOCATE 3,20:PEN lf:PRINT CHR$(242)
1270 RETURN
1280 'PAINT VIEW
1290 CLG 2:MOVE 120,160,1:DRAWR 80,0:DRAWR 0,75:DRAWR-80,0:DRAWR 0,-75
1300 MOVE 0,0:DRAW 120,160:MOVE 326,0:DRAW 200,160
1310 MOVE 125,165:FILL 1:MOVE 2,0:FILL 3
1320 MOVE 0,300:DRAW 120,235,0:MOVE 326,300:DRAW 200,235
1330 IF up THEN MOVE 147,162:DRAWR 0,55,3:DRAWR 25,0:DRAWR 0,-55:DRAWR-25,0:MOVE 150,170:FILL 0
1340 IF lf THEN MOVE 35,44:DRAWR 0,130,1:DRAWR 40,32:DRAWR 0,-108:MOVE 37,50:FILL 0
1350 IF rg THEN MOVE 291,44:DRAWR 0,130,1:DRAWR-40,32:DRAWR 0,-108:MOVE 288,55:FILL 0
1360 IF ll$=""THEN 1390
1370 PRINT CHR$(22);CHR$(1):PEN 2:FOR y=14 TO 20 STEP 3:LOCATE 2*(41-y)/3,y:PRINT STRING$(4*((y+1)/3)+(y=14)-13,ll$)
1380 NEXT:PRINT CHR$(22);CHR$(0)
1390 IF(up AND FNexit(pnx,pny-1))THEN TAG:PLOT 152,212,0:PRINT"O";:MOVE 152,196:PRINT"U";:MOVE 152,180:PRINT"T";:TAGOFF:LOCATE 5,18:PEN 3:PRINT CHR$(240)
1400 IF(rg AND FNexit(pnx+1,pny))THEN MOVE 288,55:FILL 1:PEN 3:LOCATE 27,13:PRINT"E
X
I
T":LOCATE 7,20:PEN 3:PRINT CHR$(243)
1410 IF(lf AND FNexit(pnx-1,pny))THEN MOVE 37,50:FILL 1:PEN 3:LOCATE 14,13:PRINT"E
X
I
T":LOCATE 3,20:PEN 3:PRINT CHR$(242)
1420 IF(dn AND FNexit(pnx,pny+1))THEN CLS#1:pe=2:tx=1:ty=23:txt$="There is a bright beam of light behind  you.":GOSUB 1570:LOCATE 5,22:PEN 3:PRINT CHR$(241)
1430 RETURN
1440 'DISPLAY MAZE
1450 IF h>w/1.603 THEN ssq=INT(398/h):sf=398:h1=398:w1=ssq*w ELSE ssq=INT(638/w):sf=398:h1=ssq*h:w1=638
1460 PLOT-2,-2,1:px=sf*0.80151-w1/2:py=sf/2-h1/2
1470 FOR y=1 TO h:FOR x=1 TO w
1480 g=grid(x,y):l=(x-1)*ssq+px:r=l+ssq:t=h1-(y-1)*ssq+py:b=t-ssq
1490 IF(g AND 8)=0 THEN PLOT l,b:DRAW r,b
1500 IF(g AND 4)=0 AND y=1 THEN PLOT l,t:DRAW r,t
1510 IF(g AND 2)=0 AND x=w THEN PLOT r,b:DRAW r,t
1520 IF(g AND 1)=0 THEN PLOT l,t:DRAW l,b
1530 NEXT x,y:BORDER 3
1540 zz$=INKEY$:IF zz$=""THEN 1540
1550 zz$=UPPER$(zz$):IF zz$="S"THEN SAVE"MAZE.PIC",b,&C000,&4000
1560 BORDER 0:RETURN
1570 'PRINT txt$
1580 PEN pe:LOCATE tx,ty:CURSOR 1:SOUND 130,0,1,0:FOR n=1 TO LEN(txt$):PRINT MID$(txt$,n,1);:SOUND 2,50,2,15:FOR cnt=1 TO 25:NEXT cnt,n:FOR cnt=1 TO 1000:NEXT:CURSOR 0:RETURN
1590 'Change inks
1600 FOR co=1 TO 3:INK co,f(farbe,co-1):NEXT:RETURN
1610 'Change colours
1620 SOUND 130,100,100,0,1:farbe=farbe+1+numcol*(farbe=numcol)
1630 GOSUB 1590
1640 RETURN
1650 'LETTER-HELP
1660 IF gss=le THEN txt$="That's ridiculous !":GOSUB 1570:RETURN
1670 lex=INT(RND*w+1):ley=INT(RND*h+1):IF lett$(lex,ley)=""OR INSTR(word$,lett$(lex,ley))=0 THEN 1670
1680 GOSUB 1850:SOUND 4,200,200,15,2,2:GOSUB 1830:lehlp=lehlp-1:pnx=lex:pny=ley:txt$="Best place for you !":GOSUB 1570:RETURN
1690 'EXIT-HELP
1700 IF hits<2 OR guess<2 THEN pe=1:tx=2:txt$="Well, I think you won't survive that!":GOSUB 1570:RETURN
1710 GOSUB 1850:SOUND 1,1000,300,15,0,4:GOSUB 1830:pnx=trgx:pny=trgy:pe=2:tx=6:txt$="That's cheating, isn't it ?!":GOSUB 1570
1720 exhlp=exhlp-1:hits=hits-1:guess=guess-1:GOSUB 1730:GOSUB 1750:RETURN
1730 'PRINT HITS
1740 PEN 1:LOCATE 5,6:PRINT FNfrm$(hits,2):RETURN
1750 'PRINT GUESS
1760 PEN 1:LOCATE 5,12:PRINT FNfrm$(guess,2):RETURN
1770 'PRINT LETTER-HLP
1780 PEN 1:LOCATE 36,17:PRINT FNfrm$(lehlp,2):RETURN
1790 'PRINT EXIT-HLP
1800 PEN 1:LOCATE 36,22:PRINT FNfrm$(exhlp,2):RETURN
1810 'ERASE VAR.
1820 ERASE grid,pm,lett$:expl=0:fls=0:steps=0:gss=0:escap=0:RETURN
1830 'SQ
1840 WHILE SQ(1)<>4 OR SQ(4)<>4:WEND:RETURN
1850 'SOUND
1860 SOUND 133,0,1,0:RETURN
*/ });
