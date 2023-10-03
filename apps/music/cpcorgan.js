/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem cpcorgan - CPC organ (CPC-Orgel)
2 rem (c) Oliver Heggelbacher, 1985
4 rem Modifications: make comments out of lines which are not reached; delays
5 rem
10 :
20 REM  ~ = CTRL + "
30 :
40 GOTO 260
50 :
60  '#########################
70  '#                       #
80  '#      CPC-Orgel        #
90  '#                       #
100 '#     (C) 1985 by       #
110 '#                       #    
120 '#    Andromeda Soft     #  
130 '#                       #
140 '#    geschrieben von:   #
150 '#                       #
160 '#  Oliver Heggelbacher  #
170 '#                       #  
180 '#     Steibensteg 8     #
190 '#                       #
200 '#     7778 Markdorf     #
210 '#                       #
220 '#########################   
230 ':
240 ':      Eingabe der Uhrzeit
250 ':
260 INK 0,19 : INK 1,0 : PAPER 0 : PEN 1 : MODE 2
262 print "Uhrzeit eingeben (J/N) ? ";
263 t$="":while t$<>"J" and t$<>"N":t$=upper$(inkey$):wend:print t$
265 if t$="J" then INPUT "Uhrzeit (Stunden,Minuten,Sekunden) ";st,mi,se    
270 IF st>23 OR MI>59 OR se>59 OR st<0 OR mi<0 OR se<0 THEN 260   
280 EVERY 50 GOSUB 2270
290 GOTO 350
300 ':
310 ':     einlesen der Datas   
320 ':
330 ': und definieren der Sonderzeichen
340 ':
350 DIM n(12,7) : FOR t = 0 TO 11 : pf=0 : FOR i = 0 TO 7 : READ a : pf=pf+a : n(t,i)=a   
360 NEXT i : READ s : IF pf=s THEN NEXT t  ELSE BORDER 0 : MODE 1 : PRINT "Zeile ";310+t*10;" wurde falsch eingegeben" : PRINT : END    
370 DATA 3822,1911,956,478,239,119,60,30,7615
380 DATA 3608,1804,902,451,225,113,56,28,7187
390 DATA 3405,1703,851,426,213,106,53,27,6784
400 DATA 3214,1607,804,402,201,100,50,25,6403
410 DATA 3034,1517,758,379,190,95,47,24,6044
420 DATA 2863,1432,716,358,179,89,45,22,5704
430 DATA 2703,1351,676,338,169,84,42,21,5384
440 DATA 2551,1276,638,319,159,80,40,20,5083
450 DATA 2408,1204,602,301,150,75,38,19,4797
460 DATA 2273,1136,568,284,142,71,36,18,4528
470 DATA 2145,1073,536,268,134,67,34,17,4274
480 DATA 2025,1012,506,253,127,63,32,16,4034
490 DIM k(50,1) : FOR t = 0 TO 50 : k(t,0)=12 : NEXT t
500  FOR t= 0 TO 2 : FOR i = 0 TO 11 : READ b$ : b=ASC(UPPER$(b$))-44 : k(b,0)=i : k(b,1) = t : NEXT i : NEXT t    
510 k(3,0)=0 : k(3,1)=3      
520 DATA q,2,w,3,e,r,5,t,6,y,7,u,i
530 DATA 9,o,0,p,@,^,[,a,z,s,x,c
540 DATA f,v,g,b,n,h,m,j,",",k,"."
550 :
560 SYMBOL AFTER 48
570 SYMBOL 48,126,66,66,66,66,66,126,0
580 SYMBOL 49,2,2,2,2,2,2,2,0
590 SYMBOL 50,126,2,2,126,64,64,126,0
600 SYMBOL 51,126,2,2,126,2,2,126,0
610 SYMBOL 52,66,66,66,126,2,2,2,0
620 SYMBOL 53,126,64,64,126,2,2,126,0
630 SYMBOL 54,126,64,64,126,66,66,126,0
640 SYMBOL 55,126,2,2,2,2,2,2,0
650 SYMBOL 56,126,66,66,126,66,66,126,0
660 SYMBOL 57,126,66,66,126,2,2,126,0
670 SYMBOL 123,4,10,10,10,12,8,24,30
680 SYMBOL 124,41,41,41,30,8,8,56,56
690 SYMBOL 126,255,255,255,255,255,255,255,255      
700 REM
710 REM      Titelbild
720 REM
730 ENV 1,15,1,1,3,-1,1,1,0,10,12,-1,8 : ENV 3,6,2,1,6,-1,1
740 MODE 0 : INK 0,0 : INK 1,6 : INK 2,19 : INK 3,11 : BORDER 0 : PAPER 0 : CLS        
750 PEN 1 : LOCATE 6,3 : PRINT "CPC-Orgel"    
760 PEN 2 : LOCATE 6,6 : PRINT CHR$(164);" 1985 by"
770 PEN 1 : LOCATE 4,8 : PRINT "Andromeda Soft"         
780  PEN 2 : LOCATE 1,8 : PRINT "{" : LOCATE 1,9 : PRINT "|"   
790 PEN 3 : LOCATE 2,12 : PRINT"geschrieben von"     
800 LOCATE 1,14 : PRINT "Oliver Heggelbacher"      
810 PEN 1 : LOCATE 4,20 : PRINT "Taste druecken"     
820 x=6 : i=1     
830 IF x<6 THEN i=1 : x=6 ELSE IF x>25 THEN i=-1 : SOUND 1,119,0,0,1
840 x=x+i : INK 1,x
850 FOR t = 1 TO 40 : NEXT t :call &bd19   
860 IF INKEY$="" THEN 830 ELSE INK 1,22 : GOTO 950   
870 ':
880 ':
890 ':    Hauptprogramm
900 ':
910 ':
920 '###
930 '###   Zeichnen des Keyboards
940 '###
950 CLS : MODE 2
960 WINDOW #1,1,80,1,16 : WINDOW #2,1,20,17,25 : WINDOW #3,21,40,17,25 : WINDOW  #4,41,80,17,25   
970 WINDOW #5,71,78,2,2 : uhr=1    
980 INK 0,0 : INK 1,13 : PAPER #1,0 : PEN #1,1 : CLS #1 : PAPER #2,1 : PEN #2,0 : CLS #2 : PAPER #3,0 : PEN #3,1 : CLS #3 : PAPER #4,1 : PEN #4,0 : CLS #4
990 PAPER #5,1 : PEN #5,0 : CLS #5
1000 LOCATE #1,18,1 : PRINT #1,"C P C - O R G E L   -    KEYBOARD"   
1010 LOCATE #1,2,3 : PRINT #1,"~~~ 2 ~~ 3 ~~~ ~~~ 5 ~~ 6 ~~ 7 ~~~ ~~~ 9 ~~ 0 ~~~ ~~~ ^ ~~~"    
1020 FOR t = 1 TO 3   
1030 LOCATE #1,2,3+t : PRINT #1,"~~~   ~~   ~~~ ~~~   ~~   ~~   ~~~ ~~~   ~~   ~~~ ~~~   ~~~" : NEXT t
1040 LOCATE #1,2,7 : PRINT #1,"~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~"
1050 LOCATE #1,2,8 : PRINT #1,"~~q~ ~~w~ ~~e~ ~~r~ ~~t~ ~~y~ ~~u~ ~~i~ ~~o~ ~~p~ ~~@~ ~~[~"
1060 LOCATE #1,10,11 : PRINT #1, "{" : LOCATE #1,10,12 : PRINT #1,"|"
1070 LOCATE #1,20,10 : PRINT #1," a ~~ s ~~~ ~~~ f ~~ g ~~~ ~~~ h ~~ j ~~ k ~~~ ~~~"
1080 FOR t = 1 TO 3
1090 LOCATE #1,20,10+t : PRINT #1,"   ~~   ~~~ ~~~   ~~   ~~~ ~~~   ~~   ~~   ~~~ ~~~" : NEXT t
1100 LOCATE #1,20,14 : PRINT #1,"  ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~"
1110 LOCATE #1,20,15 : PRINT #1,"  ~~z~ ~~x~ ~~c~ ~~v~ ~~b~ ~~n~ ~~m~ ~~,~ ~~.~ ~~/~"      
1120 REM
1130 REM  Anfangswerte der Huellkurven
1140 REM
1150 w=0 : o=3 : ra=0
1160 FOR t = 1 TO 4 : FOR i = 1 TO 3 : READ a : hk(t,i)=a : NEXT i : NEXT t  
1170 DATA 15,1,1,3,-1,1,1,0,13,12,-1,15
1180 REM
1190 REM   Einstellen der Huellkurven
1200 REM
1210 ENV 2,hk(1,1),hk(1,2),hk(1,3),hk(2,1),hk(2,2),hk(2,3),hk(3,1),hk(3,2),hk(3,3),hk(4,1),hk(4,2),hk(4,3)
1220 ENT 2-w,tk(1,1),tk(1,2),tk(1,3),tk(2,1),tk(2,2),tk(2,3),tk(3,1),tk(3,2),tk(3,3),tk(4,1),tk(4,2),tk(4,3)
1230 REM
1240 REM  Zeichnen der Huellkurven
1250 REM
1260 REM  und des Menues    
1270 REM
1280 PRINT #2," Lautst.-Huellk." : PRINT #3," Ton-Huellkurve" : LOCATE #4,1,2 : PRINT #4," ; = Lautst.-Huellkurve aendern"
1290 PRINT #4," \ = Ton-Huellkurve aendern" : PRINT #4," ] = Oktave aendern" : PRINT #4," } = Geraeusch-Periode aendern" 
1300 LOCATE #4,2,7 : PRINT #4,"Ton-Huellk. Wiederh. =  ";CHR$(24); : IF w=4 THEN PRINT #4,"EIN" ELSE PRINT #4,"AUS"   
1310 PRINT #4,CHR$(24)
1320 LOCATE #4,16,8 : PRINT #4, "Oktave = ";o : PRINT #4,"    Geraeusch-Periode = ";ra 
1330 m=0 : FOR t = 1 TO 4 : m=m+hk(t,3) : NEXT t : IF m>0 THEN k=120/m ELSE k=1
1340 MOVE 10,0 : FOR t = 1 TO 4 : DRAWR hk(t,3)*k,hk(t,2)*hk(t,1)*6,0 : NEXT t    
1350 FOR t = 1 TO 4 : vw(t)=ABS(tk(t,2))*tk(t,1) : NEXT t : n=MAX(vw(1),vw(2),vw(3),vw(4)) : IF n>0 THEN p=50/n ELSE p=1    
1360 MOVE 169,64 : FOR t = 1 TO 4 : DRAWR 30,tk(t,2)*tk(t,1)*p,1 : NEXT t 
1370 PLOT 0,146 : DRAW 639,146      
1380 SOUND 1,284,0,0,1
1390 REM 
1400 REM     Hauptschleife
1410 REM
1420 j=1
1430 SPEED KEY 255,255 
1440 a$=INKEY$ : IF a$="" OR a$<CHR$(44) OR a$=CHR$(127) THEN 1440 ELSE IF a$=";" THEN 1540 ELSE IF a$="\" THEN 1700 ELSE IF a$="]"THEN 1840 ELSE IF a$="}" THEN 1930  
1450 a=ASC(UPPER$(a$))-44 : if a>50 then 1440 else b=k(a,0) : c=k(a,1)+o
1455 locate #1,2,15:?#1,b;",";c;" ";
1460 IF n(b,c)<>0 THEN SOUND 128+j,n(b,c),0,0,2,2,ra      
1470 j=j*2 : IF j>4 THEN j=1 
1480 GOTO 1440
1490 '+++
1500 '+++      veraendern der   
1510 '+++
1520 '+++   Lautstaerken-Huellkurve  
1530 '+++
1540 FOR t = 1 TO 10
1550 LOCATE #2,1,10 : PRINT #2
1560 NEXT t
1570 CLS #4 : PRINT #4,"Lautst.-Huellkurve"
1580 FOR t = 1 TO 4 
1590 GOSUB 2020 : IF sa*sg>15 OR sa*sg<-15 OR pl<0 OR pl>125 THEN 1590 
1600 hk(t,1)=sa : hk(t,2)=sg : hk(t,3)=pl 
1610 NEXT t
1620 p=0 : FOR t = 1 TO 4 : p=p+hk(t,2)*hk(t,1) : NEXT t 
1630 IF p>15 OR p<0 THEN GOSUB 2160 : GOTO 1580
1640 GOTO 2230
1650 '%%%
1660 '%%%      veraendern der  
1670 '%%%
1680 '%%%      Ton-Huellkurve   
1690 '%%%
1700 FOR t = 1 TO 10
1710 LOCATE #3,1,10 : PRINT #3
1720 NEXT t
1730 CLS #4 : PRINT #4,"Ton-Huellkurve"
1740 FOR t = 1 TO 4
1750 GOSUB 2020 : IF sa<0 OR sa>127 OR sg<-128 OR sg>127 OR pl<0 OR pl>125 THEN 1750
1760 tk(t,1)=sa : tk(t,2)=sg : tk(t,3)=pl
1770 NEXT t
1780 LOCATE #4,2,8 : PRINT #4,"Wiederholung (J/N) "  
1790 a$=INKEY$ : IF UPPER$(a$)="J" THEN w=4 ELSE IF UPPER$(a$)="N" THEN w=0 ELSE GOTO 1790
1800 GOTO 2230
1810 '###
1820 '###    veraendern der Oktave 
1830 '###
1840 CLS #4 : PRINT #4,"Oktave veraendern"   
1850 LOCATE #4,1,3 : PRINT #4,"Oktave (0-4) "; : GOSUB 2330 : o=eing
1860 IF o<0 OR o>4 THEN GOSUB 2160 : GOTO 1840   
1870 GOTO 2230
1880 '\\\
1890 '\\\    veraendern der
1900 '\\\
1910 '\\\  Geraeusch-Periode
1920 '\\\
1930 CLS #4 : PRINT #4," Geraeusch-Periode veraendern"
1940 LOCATE #4,2,3 : PRINT #4," Geraeusch-Periode (0-31) "; : GOSUB 2330 : ra=eing     
1950 IF ra<0 OR ra>31 THEN GOSUB 2160 : GOTO 1930
1960 GOTO 2230
1970 '***
1980 '***   Unterprogramm zur Eingabe
1990 '***
2000 '***      der Parameter    
2010 '***                     
2020 LOCATE #4,1,3 : PRINT #4,t;". Abschnitt" 
2030 FOR i = 4 TO 6   
2040 LOCATE #4,19,i : PRINT #4,"            " : NEXT i
2050 LOCATE #4,2,4 : PRINT #4,"Schrittanzahl  : ? "; : GOSUB 2330 : sa=eing
2060 IF sa<0 THEN 2030
2070 LOCATE #4,19,4 : PRINT #4," "   
2080 LOCATE #4,2,5 : PRINT #4,"Schrittgroesse : ? "; : GOSUB 2330 : sg=eing
2090 LOCATE #4,19,5 : PRINT #4," "   
2100 LOCATE #4,2,6 : PRINT #4,"Pausenlaenge   : ? "; : GOSUB 2330 : pl=eing
2110 LOCATE #4,19,6 : PRINT #4," "
2120 RETURN
2130 REM
2140 REM  falsche Parametereingabe
2150 REM
2160 LOCATE #4,2,8 : PRINT #4,"geht nicht!!" 
2170 FOR t = 1 TO 1000/10 : call &bd19 : NEXT t
2180 LOCATE #4,2,8 : PRINT #4,"            "
2190 RETURN
2200 '^^^    
2210 '^^^  Zurueck zum Hauptprogramm  
2220 '^^^
2230 FOR t = 2 TO 4 : CLS #t : NEXT t : GOTO 1210
2240 '#
2250 '#   Uhrzeit anzeigen
2260 '#
2270 se=se+1 : IF se>59 THEN se=0 : mi=mi+1 : IF mi>59 THEN mi=0 : st=st+1 : IF st>23 THEN st=0
2280 IF uhr=1 THEN LOCATE #5,1,1 : PRINT #5,USING "##:##:##";st;mi;se;
2290 RETURN
2300 '@@@
2310 '@@@  INPUT-Routine
2320 '@@@
2330 eing$="" : x=0 : PRINT #4,"_";CHR$(8);
2340 a$=INKEY$ : IF a$="" THEN 2340
2350 IF a$=CHR$(127) THEN IF x>0 THEN x=x-1 : eing$=LEFT$(eing$,x) : PRINT #4,CHR$(8);"_ ";CHR$(8);CHR$(8); : GOTO 2340 ELSE GOTO 2340
2360 IF a$=CHR$(13) THEN eing=VAL(eing$) : PRINT #4," " : RETURN
2370 IF (ASC(a$)<48 OR ASC(a$)>(57)) AND a$<>"-" THEN 2340
2380 x=x+1 : SOUND 130,284,0,0,3 : PRINT #4,a$;"_";CHR$(8); : eing$=eing$+a$ : GOTO 2340
*/ });
