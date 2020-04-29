/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem rocking - Rocking CPC
2 rem (c) Manfred Lipowski, 02/1987
3 rem (In der Wanne 165, 4620 Castrop-Rauxel 4)
4 rem Schneider Magazin 7/87, page 94ff; (http://www.cpcwiki.eu/imgs/6/67/CPC_Magazin_1987-07_%28missing_pages_115-116%29.pdf)
5 rem
30 '
40 '      Vorbereitung  !
50 '
60 MODE 1:BORDER 0:INK 0,0:INK 2,2:RANDOMIZE TIME:k=2:l=22
70 DIM ml(14),lm(14):ENV 1,15,-1,4:ENT -2,15,-5,8:ENV 2,15,-1,15:RESTORE 540:FOR a=1 TO 14:READ b,c:ml(a)=b:lm(a)=c:NEXT a:ENT 3,2,-3,2,2,3,2
80 ENV 5,15,-1,2,15,1,2:ENV 4,15,-1,2,15,-1,2
90 ENV 6,15,-1,12:ENV 5,1,0,10,5,-1,2
100 LOCATE 1,22:PEN 3:PRINT CHR$(243);:LOCATE 40,22:PRINT CHR$(242);
110 GOSUB 630:a$="' Rocking C P C '":b=4:c=1:e=3:GOSUB 120:a$=""+CHR$(164)+" by Manfred Lipowski":b=16:c=3:e=2:GOSUB 120:a$="Februar 1987":b=18:c=3:e=1:GOSUB 120:PEN 2:GOTO 130
120 d=20-INT(LEN(a$)/2):TAG:PLOT d*17.2-28,416-b*16,c:PRINT a$;:TAGOFF:PEN e:LOCATE d,b:PRINT CHR$(22);CHR$(1);a$;CHR$(22);CHR$(0):RETURN
130 atuk=0:eff=0:fog=0:vader=0
140 '
150 '       Hauptprogramm  !
160 '
170 lan=5:man=20:FOR a=1 TO 32:vader=vader+1:GOSUB 370:SOUND 1,0,man:SOUND 4,0,man:NEXT a
180 EVERY 8,1 GOSUB 700
190 RESTORE 430:de=0:atuk=atuk+1:man=20:vader=0:rop=0
200 call &bd19:READ a:IF a=15 THEN GOSUB 580:GOTO 200 ELSE IF a=16 THEN GOSUB 590:GOTO 200 ELSE IF atuk=4 AND a=17 THEN 570 ELSE IF a=17 THEN 190
210 IF atuk=4 THEN man=man-0.05:IF man<=15 THEN man=15
220 IF a=18 THEN rop=1:GOTO 200
230 vader=vader+1:fog=fog+1:IF fog=9 THEN fog=1
240 IF fog<4 THEN ty=1:yt=4 ELSE IF fog>4 THEN ty=4:yt=1
250 IF atuk>=3 THEN 280
260 IF atuk>=2 AND eff=1 THEN 280
270 SOUND ty,ml(a),man,15,1,1:SOUND yt,lm(a),man,15,1,1:GOSUB 370:GOTO 200
280 SOUND ty,ml(a),man,15,1,1:SOUND yt,lm(a),man,15,1,1:de=de+1:IF de<=3 THEN be=ml(a) ELSE IF de>=4 THEN be=lm(a):IF de>=8 THEN de=0
290 'if atuk=2 and rop=1 then 280
300 IF atuk>=3 AND rop=1 OR eff=0 OR eff=1 THEN 330
310 ON atuk-1 GOTO 320,330
320 SOUND 2,be+2,man,15,1:GOTO 200
330 SOUND 2,be/4,man,15,5,5:GOTO 200
340 '
350 '        Schlagzeug...  !
360 '
370 IF vader=2 THEN 380 ELSE SOUND 2,0,man,0,4,,lan:RETURN
380 vader=0:luke=luke+1:IF luke=1 THEN han=1:lan=5 ELSE IF luke=2 THEN han=9:lan=13 ELSE IF luke=3 THEN han=17:lan=1 ELSE IF luke=4 THEN han=25:lan=31:luke=0
390 SOUND 2,0,man,0,4,,han:RETURN
400 '
410 '        Basslaeufe...  !
420 '
430 DATA 14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,1,1,1,1,1,1,1,1,4,4,4,4,7,7,7,7,1,1,1,1,1,1,1,1,4,4,4,4,7,7,7,7,1,1,1,1,1,1,1,1,4,4,4,4,7,7,7,7,4,4,4,4,7,7,7,7
440 DATA 1,1,2,1,3,1,2,1,1,1,2,1,3,1,2,1,4,4,5,4,6,4,5,4,7,7,8,7,9,7,8,7,1,1,2,1,3,1,2,1,1,1,2,1,3,1,2,1,4,4,5,4,6,4,5,4,7,7,8,7,9,7,8,7,4,4,5,4,6,4,5,4,7,7,8,7,9,7,8,7
450 DATA 1,1,2,1,3,1,2,1,1,1,2,1,3,1,2,1,1,1,2,1,3,1,2,1,10,10,10,10,10,10,10,10,10,10,10,10,15
460 DATA 1,1,2,1,3,1,2,1,1,1,2,1,3,1,2,1,7,7,8,7,9,7,8,7,7,7,8,7,9,7,8,7,1,1,2,1,3,1,2,1,1,1,2,1,3,1,2,1,10,10,11,10,12,10,11,10,10,10,11,10,12,10,11,10
470 DATA 7,7,8,7,9,7,8,7,7,7,8,7,9,7,8,7,10,10,11,10,12,10,11,10,10,10,11,10,12,10,11,10,7,7,8,7,9,7,8,7,7,7,8,7,9,7,8,7
480 DATA 1,1,2,1,3,1,2,1,1,1,2,1,3,1,2,1,1,1,2,1,3,1,2,1,10,10,10,10,10,10,10,10,10,10,10,10,16,18
490 DATA 13,13,13,13,13,13,13,13,7,7,7,7,7,7,7,7,13,13,13,13,13,13,13,13,10,10,10,10,10,10,10,10,13,13,13,13,13,13,13,13,7,7,7,7,7,7,7,7
500 DATA 10,10,10,10,4,4,4,4,1,1,1,1,1,1,1,1,17
510 '
520 '        Sounddaten...  !
530 '
540 DATA 758,506,758,451,758,426,638,426,638,379,638,358,586,379,568,338,568,319,506,338,506,301,506,284,379,253,758,760
550 '
560 '        Effekte...  !
570 DI:SOUND ty,758,150,15,6,6:SOUND yt,506,150,15,6,6:SOUND 2,126.5,150,15,6,6:EI:GOTO 130
580 DI:SOUND 1,379,80,15,2,2:SOUND 4,253,80,15,2,2:SOUND 2,255,80,15,2,2:eff=1:luke=0:EI:RETURN
590 DI:SOUND 1,379,80,15,2,3:SOUND 4,253,80,15,2,3:SOUND 2,255,80,15,2,3:eff=0:luke=0:vader=0:EI:RETURN
600 '
610 '        Orgel...  !
620 '
630 FOR a=175 TO 275:PLOT 126,a,1:DRAW 500,a:NEXT a:DRAWR 0,-100,2:DRAWR -374,0:DRAWR 0,100:DRAWR 374,0 :PLOT 502,279,3:DRAWR 0,-106:DRAWR -380,0:DRAWR 0,106:DRAWR 378,0
640 FOR a=126 TO 500 STEP 16.3:PLOT a,275,2:DRAWR 0,-100:NEXT a
650 FOR a=142 TO 500 STEP 16.3:FOR b=-4 TO 4 STEP 1 :PLOT a+b,266,3:DRAWR 0,-50:NEXT b,a
660 RETURN
670 '
680 '        Note...  !
690 '
700 PEN 2:no=237:LOCATE k,l:PRINT CHR$(32);:mogwai=INT(RND*2):IF mogwai=1 THEN l=l+1 ELSE l=l-1
710 IF l>=25 THEN l=25 ELSE IF l<=19 THEN l=19
720 IF k=39 THEN pio=1:no=242:PEN 1
730 IF pio=1 THEN k=k-1
740 IF pio=0 THEN k=k+1
750 IF k=2 THEN pio=0:no=243:PEN 1
760 LOCATE k,l:PRINT CHR$(no);:CALL &BD19:RETURN
770 '
780 '        Ende...  !
790 '
*/ });
