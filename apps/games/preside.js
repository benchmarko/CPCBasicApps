/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem preside - President (Praesident)
2 rem (c)
3 rem
8 REM Praesident
10 CLEAR:DEFINT a-z:GOSUB 2000:d=0:d1=0:p1=0:z=0
15 GOSUB 2210:RANDOMIZE TIME
20 MODE 1:c=INT(15*RND(1)):y=c+12
30 WINDOW #1,10,30,5,10:PAPER #1,2:PEN #1,1:CLS#1  
40 WINDOW #2,17,23,13,13:PAPER #2,1:PEN #2,0  
42 WINDOW #3,5,35,18,23:PAPER #3,0:PEN #3,3
43 LOCATE 2,5:PRINT"Land:":LOCATE 2,8:PRINT"Korn:":LOCATE 1,11:PRINT"Leute:"
45 LOCATE 2,1:PRINT"Land wird heuer fuer";y;" Scheffeln Korn"
46 PRINT TAB(10);"pro Morge gehandelt.":GOSUB 800
50 PRINT#1,"
 Wieviel Morgen Land sollen gekauft werden  Herr Praesident ??" 
60 CLS #2:INPUT #2,Q:CLS #3:IF q<0 THEN 1350 ELSE IF q=0 THEN 90  
70 IF y*q>s THEN GOSUB 900:PRINT #3,s;"Scheffeln Korn auf Lager !":GOTO 60 
80 a=a+q:s=s-y*q:c=0:GOSUB 800:GOTO 130 
90 CLS #1:PRINT#1,"
 Wieviel Morgen Land sollen verkauft wer- den, Herr Praesident      ??  ??  ??" 
100 CLS #2:INPUT #2,Q:IF q<0 THEN 1350 ELSE IF q=0 THEN 130
110 IF q>a THEN GOSUB 900:PRINT #3,a;"Morgen Land !!":GOTO 100 
120 CLS #3:a=a-q:s=s+y*q:c=0:GOSUB 800
130 LOCATE 2,1:PRINT SPACE$(39):LOCATE 10,3:PRINT SPACE$(20)
135 CLS #1:PRINT#1,"
 Wieviel Scheffeln    Korn sollen die Un-  tertanen zu essen    bekommen,Herr Prae-  sident ??"  
140 CLS #2:INPUT #2,Q$:IF q$="" THEN 140 ELSE q=VAL(q$):IF q<0 THEN 1350 
150 IF q>s THEN GOSUB 900:PRINT#3,s;"Scheffeln Korn auf Lager !":GOTO 140 
155 s=s-q:c=1:CLS #3:GOSUB 800:GOSUB 1000
160 CLS #1:PRINT#1,"
 Wieviel Morgen Land  sollen zur Aussat    verwendet werden,    Herr Praesident ??" 
170 CLS #2:INPUT #2,d$:IF d$="" THEN 170 ELSE IF UPPER$(d$)="MAX" THEN 175 ELSE d=VAL(d$):GOTO 180 
175 REM Bedingungen: d<=a:d<s*2:d<10*p         
176 d=10*p:IF d>s*2 THEN d=s*2
177 IF d>=a THEN d=a
180 IF d=0 THEN 230 ELSE IF d<0 THEN 1350 ELSE IF d>a THEN GOSUB 900:PRINT #3,a;"Morgen Land !!":GOTO 170 
190 IF d/2>s THEN GOSUB 900:PRINT #3,s;"Scheffeln Korn im Lager !!":GOTO 170 
200 IF d<=10*p THEN 220
210 GOSUB 900:PRINT#3,p;"Untertanen, um die Felder zu bearbeiten !":GOTO 170
220 PRINT#3,"Aussat auf";d;" Morgen Land.":FOR w=1 TO 3000:NEXT
230 CLS #3:s=s-INT(d/2):GOSUB 1330
240 y=c:h=d*y:e=0:GOSUB 1330:IF INT(2*RND+1)=2 THEN e=s/c 
250 s=s-e+h:GOSUB 1330
260 i=c*(20*a+s)/p/100+1:c=q/20
270 q=10*(2*RND(1)-0.3):IF p<c THEN d=0:GOTO 15
280 d=p-c:IF d>0.45*p THEN 1210
290 p1=((z-1)*p1+d*100/p)/z:p=c:d1=d1+d:GOTO 15
800 LOCATE 1,6:PRINT a:LOCATE 1,9:PRINT s:LOCATE 1,12:PRINT p
810 RETURN
900 CLS #3:PRINT#3,"Aber Herr Praesident, denken Sie doch nach. Sie haben doch nur ";:RETURN
1000 GOSUB 1330:CLS #3:ON c GOTO 1050,1020,1030,1010,1040
1010 IF s<10000 THEN GOSUB 1330:PRINT#3,"Hurra !! Sie bekommen eine Kriegsbeute von";c*500;"Scheffeln Korn, Herr Praesident, um ihr Kornlager aufzufuellen":s=s+c*500:GOTO 1100 ELSE RETURN    
1020 IF a<2000 THEN GOSUB 1330:PRINT#3,"Hurra !! Sie bekommen eine Kriegsbeute von";c*40;"Morgen Land, Herr Praesident ! !":a=a+c*40:GOTO 1100 ELSE RETURN   
1030 IF s>2500 THEN GOSUB 1330:PRINT#3,"Ich muss ihnen leider mitteilen, dass sie in dem Krieg";c*500;"Scheffeln Korn bezahlen mussten.":s=s-c*500:GOTO 1100 ELSE RETURN  
1040 IF l>500 THEN GOSUB 1330:PRINT#3,"Ich muss ihnen leider mitteilen, dass sie in dem Krieg";c*45;Morgen Land abgeben mussten."a=a-c*45:goto 1100 else return
1050 PRINT#3,"Alles in Ordnung, Herr Praesident.":GOTO 1100
1100 PRINT#3,"1TASTE 2??3":GOSUB 800:FOR w=1 TO 5000:IF INKEY$="" THEN NEXT w
1110 CLS #3:RETURN
1210 CLS:REM zu viele verhungert
1220 PRINT"  Durch Sie sind ueber 45% Ihrer Unter-"
1221 PRINT"  taten verhungert."
1222 PRINT"  Wenn Sie Ihr Amt nicht aufgeben,"
1223 PRINT"  werden Sie oeffentlich hingerichtet."
1224 PRINT"  Ich verhelfe Ihnen zur Flucht."
1230 GOTO 2470:'Ende
1330 c=INT(RND(1)*5)+1:RETURN
1350 MODE 1:PRINT"
  Herr Praesident,sie verlangen un-" 
1360 PRINT"  moegliches von mir.Ich bin weder ein"
1370 PRINT"  Zauberer noch ein Handlanger fuer "
1380 PRINT"  ihre menschenunwuerdigen Machenschaf-"
1390 PRINT"  ten.Suchen sie sich gefaelligst einen"
1400 PRINT"  anderen Minister !!!":p1=50:GOTO 2440
2000 MODE 1:INK 1,24:INK 2,7:INK 3,6,13:PEN 1:PAPER 0:BORDER 1
2010 PRINT TAB(10);"3Das Praesidentenspiel1":RESTORE 2050
2020 c=1.5:GOSUB 2170 
2030 IF k=20 THEN FOR w=1 TO 1000:NEXT 
2040 IF k<>23 THEN 2020 ELSE 2150   
2050 DATA 10,2,"2====================="
2060 DATA 2,5,"2Gratuliere, 1Sie 2wurden soeben fuer die"
2070 DATA 2,7,"nachsten 1102 Jahre als Praesident von"
2080 DATA 2,9,"3COMPUTERLAND2 gewaehlt."
2090 DATA 2,11,"Wir hoffen, dass 1Sie2 dieses Amt wuerde-"
2100 DATA 2,13,"voll und umsichtig durchfuehren und"
2110 DATA 2,15,"sich nicht etwa als 1Diktator2 auf-"
2120 DATA 2,17,"spielen werden ."
2130 DATA 8,20,"3Viel Glueck 2! 1! 3! 2! 1!"
2140 DATA 3,23,"(Bitte druecken Sie eine Taste)"
2150 CALL &BB18:p=95:s=2800:h=3000:e=h-s:y=3:a=h/y:i=5:q=1 
2160 RETURN
2170 READ j,k,anw$:LOCATE j,k:FOR w=1 TO LEN(anw$):a$=MID$(anw$,w,1):PRINT a$;:IF a$=" " THEN c1=5 ELSE c1=c
2180 SOUND 2,31,c1,5:SOUND 2,0,c1/2,0
2190 IF (SQ(2) AND 128)=128 THEN 2190 ELSE NEXT w 
2200 FOR w=1 TO 200:NEXT:RETURN 
2210 MODE 1:RESTORE 2290:LOCATE 1,1
2220 READ j,k,anw$:LOCATE j,k:PRINT anw$;
2230 PRINT:IF k<>23 THEN 2220 
2240 z=z+1:LOCATE 6,7:PEN 2:PRINT z:LOCATE 10,8:PRINT d 
2250 LOCATE 29,8:PRINT i
2260 IF q=0 THEN LOCATE 2,9:PRINT"Eine grausame Epidemie hat 3COMPUTERLAND 2heimgesucht. Die Haelfte der Befoelker- ung ist dahingerafft.":p=p/2
2270 p=p+i:LOCATE 1,14:PRINT p:LOCATE 1,15:PRINT a:LOCATE 1,16:PRINT y:LOCATE 1,17:PRINT e:CALL &BB03
2280 LOCATE 1,18:PRINT s:PEN 1:CALL &BB18:IF z=11 THEN 2410 ELSE RETURN
2290 DATA 4,3,"1Herr Praesident! Ich als der 2Mi-"  
2300 DATA 4,4,"nister 1des 3 COMPUTERLANDES 1ha-" 
2310 DATA 4,5,"be folgendes zu berichten : "   
2320 DATA 4,7,"Im   -ten Jahr ihres Amtes verhun-"
2330 DATA 4,8,"gerten     Untertanen und    kamen"
2340 DATA 4,9,"neu hinzu."
2350 DATA 7,14,"Untertanen  sind im 3C.LAND1."  
2360 DATA 7,15,"Morgen Land hat das 3C.LAND1." 
2370 DATA 7,16,"Ernte pro Morge 2'1." 
2380 DATA 7,17,"von Ratten gefressen 2'1"
2390 DATA 7,18,"in der Lagerhalle 2'1."
2395 DATA 5,20,"2'1=(in 2Scheffeln 3Korn1)" 
2400 DATA 3,23,"1(Bitte druecken Sie eine Taste)" 
2410 MODE 1:RESTORE 2480
2420 c=2:GOSUB 2170 
2430 IF k<>12 THEN 2420 ELSE LOCATE 31,5:PRINT p1:LOCATE 7,7:PRINT d1:l=a/p:LOCATE 29,11:PRINT l 
2440 IF p1>33 OR l<7 THEN RESTORE 2580:GOTO 2460 ELSE IF p1>10 OR l<9 THEN RESTORE 2630:GOTO 2460
2450 IF p1>3 OR l<10 THEN RESTORE 2660 ELSE RESTORE 2720 
2460 IF k<>20 THEN c=2:GOSUB 2170:GOTO 2460
2470 PRINT:PRINT"Taste druecken ...":CALL &BB18
2471 PRINT"Wollen Sie noch einmal Praesident sein  (Ja/Nein)?"
2472 d$=UPPER$(INKEY$):IF d$<>"J" AND d$<>"N" THEN 2472
2473 IF d$="N" THEN MODE 2:STOP
2474 RUN
2480 DATA 6,1,"Was Sie geschafft haben:"
2490 DATA 6,2,"2========================"
2500 DATA 2,4,"1Waehrend 2Ihrer 110-jaehrigen Regierungs-"
2510 DATA 2,5,"zeit starben im Durchschnitt     % der"
2520 DATA 2,6,"Befoelkerung.den 2Hunger1tod.Insgesamt"
2530 DATA 2,7,"kamen     Ihrer Untertanen durch 2Ihre1" 
2540 DATA 2,8,"Entscheidungen um."
2550 DATA 2,10,"2Sie fingen mit 1102 Morgen Land pro"
2560 DATA 2,11,"Untertan an und endeten mit     Morgen" 
2570 DATA 2,12,"Land pro Untertan." 
2580 DATA 2,15,"2Wegen dieser extremen Regierungs-" 
2590 DATA 2,16,"unfaehigkeit,die 1Sie2 zeigten," 
2600 DATA 2,17,"wurden 1Sie2 nicht nur oeffentlich"
2610 DATA 2,19,"angeklagt, sondern auch fuer 3im-" 
2620 DATA 2,20,"mer2 in die Verbannung geschickt." 
2630 DATA 2,15,"1Ihr Regierungsgehabe erinnert stark"  
2640 DATA 2,17,"an 1NERO,Ivan den Schrecklichen und"
2650 DATA 2,20,"H I T L E R ! ! !"
2660 DATA 2,15,"1Ihre Regierungsgeschaefte haetten"
2670 DATA 2,16,"schon besser sein koennen, aber ins-"
2680 DATA 2,17,"gesamt gesehen war es gar nicht so"
2690 DATA 2,18,"schlecht.Manche Leute wuerden gerne"
2700 DATA 2,19,"sehen, dass Sie einem Attentat zum"
2710 DATA 2,20,"Opfer fallen."
2720 DATA 2,15,"1Ein phantastisches Ergebnis ! !"
2730 DATA 2,17,"KARL DER GROSSE, KOENIGIN ELISA-"
2740 DATA 2,19,"BETH und ADENAUER zusammen haetten"
2750 DATA 2,20,"es nicht besser machen koennen."
*/ });
