/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem tower - Tower of Hanoi (Türme von Hanoi; Pagoden von Peking)
2 rem (c)
3 rem Modifications: delay
4 rem
10 '=== initialisierung === 
20 MODE 1:CLEAR:DEFINT a-z:CLS:ZONE 40
30 DIM z(8),d$(7),m$(7),sl$(1),f(8,3),fd1$(1),fd2$(1),jahr$(11)
40 GOSUB 7410:'=== zu einlesende zeichen
50 z=127:d$(0)=SPACE$(6)+CHR$(128)+SPACE$(6)
60 d$="":FOR a=2 TO 6:d$=d$+CHR$(a+Z):NEXT:d$(1)="    "+d$+"   "        
70 m$(1)="    "+CHR$(209)+"1"+CHR$(211)+"    "
80 rechts1$=CHR$(149)+CHR$(132)+CHR$(133):rechts2$=CHR$(146)+CHR$(147) 
90 links1$=CHR$(129)+CHR$(130)+CHR$(148):links2$=CHR$(144)+CHR$(145)
100 d$(2)="    "+links2$+CHR$(150)+rechts2$+"    ":m$(2)="    "+CHR$(151)+"2"+CHR$(152)+"    "
110 d$(3)="   "+links1$+CHR$(150)+rechts1$+"   ":m$(3)="    "+CHR$(150)+"3"+CHR$(150)+"    "
120 d$(4)="   "+links2$+STRING$(3,150)+rechts2$+"   ":m$(4)="    "+CHR$(151)+CHR$(150)+"4"+CHR$(150)+CHR$(152)+"   "
130 d$(5)="  "+links1$+STRING$(3,150)+rechts1$+"  ":m$(5)="    "+STRING$(2,150)+"5"+STRING$(2,150)+"    " 
140 d$(6)="  "+links2$+STRING$(5,150)+rechts2$+"  ":m$(6)="    "+CHR$(151)+STRING$(2,150)+"6"+STRING$(2,150)+CHR$(152)+"   "
150 d$(7)=" "+links1$+STRING$(5,150)+rechts1$+" ":m$(7)="   "+STRING$(3,150)+"   "
160 du$=SPACE$(11):sl$(0)=CHR$(134):sl$(1)=CHR$(138)
170 FOR a=0 TO 1:FOR b=1 TO 19:sl$(A)=sl$(A)+CHR$(135)+CHR$(136):NEXT:sl$(A)=sl$(A)+CHR$(137+2*a):NEXT
180 fd1$(0)=CHR$(214)+STRING$(7,150)+CHR$(215):fd2$=CHR$(222)+STRING$(7,207)+CHR$(223)
190 fd1$(1)=STRING$(11,207)
200 FOR a=0 TO 11:READ jahr$(a):NEXT:'=== einlesen jahresbezeichnungen 
210 BORDER 3:INK 0,1:INK 1,24:INK 2,6:INK 3,24,18:SPEED INK 5,8
220 WINDOW 1,40,4,22:WINDOW #1,1,40,23,25:WINDOW #2,1,40,1,3
230 GOSUB 6010:' === zu ueberschrift
240 aus=25:ENT 1:ton=400:FOR a=1 TO 3:GOSUB 4010 :NEXT
250 GOSUB 7010 :'=== zu anweisungen
1000 '===spielbegin ===
1010 a!=FRE(""):CLS:LOCATE 1,19:PEN 3:PRINT sl$(1);:aus=1:GOSUB 4060:'=== zu envelope tune
1020 FOR a=3 TO 27 STEP 12:PEN 2:LOCATE a,18:PRINT fd1$(1):NEXT  
1030 PRINT CHR$(22);CHR$(1);:FOR a=4 TO 28 STEP 12:PEN 3:LOCATE a,17:PRINT fd1$(0):PEN 2:LOCATE a,17:PRINT fd22(0):NEXT
1040 PRINT CHR$(22);CHR$(0);
1050 PEN 1:b=0:FOR a=8 TO 32 STEP 12:LOCATE a,18:PRINT CHR$(65+b);:b=b+1:NEXT
1060 x=2:f=3:FOR g=7 TO 1 STEP -1
1070 y=g*2+2:GOSUB 5010:NEXT:'===zu pagondenteilen
1080 PRINT#1,,"  wieviele pagodenteile ? (2-7)"
1090 a$=LOWER$(INKEY$):IF a$=""THEN 1090
1100 CLS#1:IF a$<"2" OR a$>"7"THEN PRINT#1,," Hoefliche Verzeihung,ist das nicht     versehen ?-Wiederholen bitte !";:t!=time+500:while time<t!:call &bd19:wend:CLS#1:GOTO 1080
1110 FOR a=2 TO 16:LOCATE 3,a:PRINT du$;:NEXT
1120 n=VAL(a$):schritte=2^n-1
1130 x=2:FOR g=n TO 1 STEP -1:y=(7-n+g)*2+2:GOSUB 5010:NEXT
1140 FOR p=1 TO 3:FOR g=1 TO 7:
1150 f(g,p)=0:NEXT g,p
1160 g=7:FOR i=n TO 1 STEP -1:f(i,1)=g:g=g-1:NEXT
1170 FOR i=1 TO 3:f(n+1,i)=8:NEXT
2000 '=== hauptschleife === 
2010 PRINT#1,"  Du hast";:IF schritte<2^n-1 THEN PRINT#1," noch";
2020 PRINT#1,schritte;"schritt";:IF schritte<>1 THEN PRINT#1,"e";
2030 PRINT#1,". Ich frage:"
2040 PRINT#1,"  Welche Etage habe ich die Ehre fuer     dich zu versetzen ? ( 1 -"n")"; 
2050 a$=INKEY$:IF a$="" THEN 2050 ELSE g=ASC(a$)-48
2060 CLS#1:IF g<1 OR g>n THEN PRINT#1,,"Grosse Trauer ! - Diese Etage ist nicht vorhanden,erbitte demuetig neue Wahl !";:t!=time+500:while time<t!:call &bd19:wend:CLS#1:GOTO 2010
2070 p1=1
2080 FOR e=7 TO 7-n STEP -1:pr=f(g,p1)
2090 IF pr<>e OR pr=0 THEN NEXT :p1=p1+1:GOTO 2080
2100 IF f(g-1,p1)>0 THEN PRINT#1,," Meisterlicher Denker, es befindet sich noch eine Etage darueber - neue Wahl..";:t!=time+500:while time<t!:call &bd19:wend:CLS#1:GOTO 2010
2110 x=(p1-1)*12+2:y1=e*2+1:f(g,p1)=0
2120 '=== Etage aufwaerts ===
2130 FOR y=y1 TO 3 STEP -1:LOCATE x,y+1:PRINT du$;:GOSUB 5010:NEXT
2140 PRINT#1,,"Welchen Platz hat dein meisterliches    Gehirn fuer die Etage ersonnrn ? (a - c)";
2150 a$=UPPER$(INKEY$):IF a$="" THEN 2150
2160 p2=ASC(a$)-64
2170 CLS#1:IF p2<1 OR p2>3 THEN PRINT#1," O konfuzius ! Dein verehrter Geist hat nur A oder B oder C zur Verfuegung !"," Ich bin sehr verwirrt...";:t!=time+700:while time<t!:call &bd19:wend:CLS#1:GOTO 2140 
2180 FOR i=1 TO n+1:IF f(i,p2)<>0 THEN e=i:i=n+1
2190 NEXT:IF e<g THEN PRINT#1," Jammer meiner Ahnen ! Deine Gedanken  bekuemmern mein Herz.Du kannst die  Etage nur auf eine groessere setzen !";:t!=time+700:while time<t!:call &bd19:wend:CLS#1:GOTO 2150
2200 '=== etage waagrecht ===
2210 q=f(e,p2)
2220 f(g,p2)=q-1:xend=(p2-p1)*12+x:xstart=x:y=3:xstep=SGN(p2-p1)
2230 IF p2=p1 THEN 2260
2240 FOR x=xstart TO xend STEP xstep:GOSUB 5010:NEXT
2250 '=== Etage abwaerts ===
2260 x=xend:pa!=1:FOR y=3 TO q*2:FOR a=1 TO pa!:NEXT:pa!=pa!*1.8:GOSUB 5010
2270 IF g=1 AND y>3 THEN LOCATE x,y-3:PRINT du$;ELSE LOCATE x,y-2:PRINT du$ 
2280 NEXT y
2290 ez=0:q=0:schritte=schritte-1
2300 '=== pruefung auf ende ===
2310 FOR g=1 TO n:IF f(g,3)>0 THEN ez=ez+1
2320 NEXT g:IF ez<n AND schritte>0 THEN 2010
2330 BORDER 8,3:t!=time+250:while time<t!:call &bd19:wend:CLS :GOSUB 7310:WINDOW 3,38,6,20:CLS:ZONE 36 
2340 IF ez<n THEN  3120:'=== zu verloren
3000 '=== spielende ===
3010 ' === gewonnen  ===
3020 PEN 3
3030 PRINT ,"  Goenne Dir einen Augenblick der",,,"  Ruhe und du begreifst,wie",,," naerrisch du herumgehastet bist."  
3040 PRINT ,,,TAB(21)"(Tschen Tschin)",,,TAB(32)"***"
3050 BORDER 3:h=1:wd=2:GOSUB 4090:'=== zu hymne
3070 PRINT "Das Licht deines Geistes ueber-","strahlt die Sonne bei Nacht !",,"du hast es geschafft,die pagode in":sr$=STR$(2^n-1):sr=LEN(sr$)-1 
3080 PRINT RIGHT$(sr$,sr)" Schritten zu versetzen !",,"Ich werde deinen Ruhm als groessten aller Pagodenbeweger wie Tautropfen verstreuen."
3090 PRINT ,"Das REICH DER MITTE wird sich dir zu Fuessen werfen,obgleich du eine LANGNASE bist.Im Jahr de"jahr$(INT(RND*12));:PRINT "wird die Zahl der Rauchkerzen, Dir huldigend,den Himmel verdunkeln !";
3100 GOTO 3200
3110 '=== verloren ==
3120 PEN 2:PRINT "   Uebe die",,TAB(8)"Reglosigkeit,",," beschaeftige dich mit",,TAB(11)"Untaetigkeit, finde im",,"  verzicht Genuss,und"  
3130 PRINT ,TAB(16)" du siehst das Grosse",,TAB(16)"im Kleinen,",,"das Viele im Wenigen.    (LAOTSE)";
3140 BORDER 3:H=5:WD=3:GOSUB 4090:'=== ZU HYMNE
3160 PRINT "Aus scham fuer dich waelze ich mich im Staub und erflehe die Vergebung meiner Ahnen.  Ihre seelen werden mich verfolgen in alle Ewigkeit,"
3170 PRINT ,"du hast alle"2^n-1"Schritte gebraucht","und es trotz allem nicht geschafft!",,"Du bist jedoch nur eine LANGNASE","aus dem Lande der BARBAREN und die ","Daemonen haben deinen Geist mit"
3180 PRINT "Blindheit geschlagen.",,"Ein neuer Versuch kann deine erbar-","mungswuerdige Schmach tilgen !"
3200 PRINT #1,,"Noch ein himmlisches Vergnuegen ? (j/n)"
3210 a$=LOWER$(INKEY$):IF a$<>"j" AND a$<>"n" THEN 3210
3220 CLS#1:IF a$="n" THEN END ELSE WINDOW 1,40,4,22:GOTO 1010
3230 END
4000 '=== toene ===
4010 ENV 1,15,-1,aus
4020 SOUND 1,ton,0,15,1,1
4030 SOUND 2,ton+50,0,15,1,1
4040 SOUND 4,ton+100, 0,15,1,1
4050 RETURN 
4060 ENT -1,10,-10,2
4070 RETURN 
4080 '=== nationalhymne ===
4090 RESTORE 12000:ENV 2,3,5,1,1,0,5,15,-1,4*wd
4100 READ ton,dauer:t=ton*h:d=wd*dauer*5
4110 IF t<0 THEN RETURN
4120 SOUND 1,t/2,d,0,2
4130 SOUND 2,t/4,d,0,2
4140 SOUND 4,t/8,d,0,2
4150 GOTO 4100
5000 '=== druck der pagoden teile ===
5010 PEN 2:IF INT(g/2)=g/2 THEN PEN 3
5020 LOCATE x,y:PRINT m$(g)
5030 ton=80*y:GOSUB 4010:'=== zu toenen 
5040 PEN 1:LOCATE x,y-1:PRINT d$(g)
5050 IF g=1 THEN LOCATE x,y-2:PRINT d$(0)
5060 RETURN 
6000 '=== aufbau ueberschrift ===
6010 WINDOW SWAP 0,2:PAPER 0:PEN 3:FOR a=1 TO 40:LOCATE 1,1:PRINT RIGHT$(sl$(1),a);:FOR b=1 TO 50/20:call &bd19:NEXT:LOCATE 41-a,3:PRINT LEFT$(sl$(0),a);:FOR b=1 TO 50/20:call &bd19:NEXT b,a 
6020 PEN 2:LOCATE 3,2:PRINT "die";:PEN 1:FOR a=182 TO 188:PRINT CHR$(a)+" ";:NEXT:PEN 2:PRINT " von  ";:PEN 1:PRINT CHR$(182)+" "+CHR$(187)+" "+CHR$(190)+" "+CHR$(189)+" "CHR$(188)+" "+CHR$(184);
6030 INK 3,21:WINDOW SWAP 0,2:PEN 1:RETURN 
7000 '=== ANWEISUNGEN ===
7010 RANDOMIZE TIME:FOR a=1 TO 40 STEP 2:FOR b=2 TO 18
7020 GOSUB 7210:'=== zu chinesischen zeichen ===
7030 NEXT b,a
7040 PEN#1,2:PAPER#1,0:PRINT #1,CHR$(24);:CLS#1:PRINT#1,,"Wird eine uebersetzung gewuenscht (j/n)?";
7050 a$=LOWER$(INKEY$):IF a$<>"j" AND a$<>"n" THEN 7050
7060 CLS#1:IF a$="n" THEN RETURN 
7070 CLS:GOSUB 7310:'=== zu umrandung
7075 WINDOW 3,38,6,20
7080 PRINT "ich niederer Wurm habe die Gnade,dir die, - gemessen an der groesse deines Geistes,wenigen spielregeln zu erklaeren":PRINT 
7100 PRINT "In dem gleich zu schauenden Bild wird dir eine pagode mit einer von dir zu waehlenden anzahl von teilen gezeigt.":PRINT 
7110 PRINT "Durch versetzen der teile baust du die Pagode auf dem rechts aussen liegenden Fundament auf.das mittlere dient nur zur zwischenlagerung der etagen." 
7120 GOSUB 7360 
7130 CLS:PRINT "nie grosse etagen auf kleine setzen!"
7160 PRINT "die pagodenteile sind mit nummern versehen,die fundamente mit buchstaben." 
7180 GOSUB 7360
7190 WINDOW 1,40,4,22:CLS:RETURN 
7200 '=== c-zeichen ===
7210 r1=INT(RND*3)+1:r2=INT(RND*6)+z+49:r3=INT(RND*5)+34+z
7220 LOCATE a,b:IF r1=1 THEN PRINT CHR$(r2);ELSE IF r1=2 THEN PRINT CHR$(r3); 
7230 RETURN 
7300 '=== umrandung ===
7310 b=1:FOR a=1 TO 40:GOSUB 7210:NEXT
7320 FOR b=2 TO 19:FOR c=0 TO 1:a=c*39+1:GOSUB 7210:NEXT c,b
7330 b=19:FOR a=2 TO 39:GOSUB 7210:NEXT 
7340 RETURN 
7350 '=== weiterblaettern ===
7360 PRINT#1,,"    weiter mit der leer-taste...";   
7370 IF INKEY$<>" "THEN 7370 ELSE CLS#1:RETURN 
7400 '=== sb-zeichen ===
7410 SYMBOL AFTER 128
7420 FOR z=0 TO 8
7430 READ z(z):NEXT 
7440 IF z(0)=-1 THEN RETURN 
7450 SYMBOL z(0),z(1),z(2),z(3),z(4),z(5),z(6),z(7),z(8)
7460 GOTO 7420
10000 '=== data fuer zeichen ===
10010 DATA 128,024,060,126,126,126,060,024,024
10020 DATA 129,000,000,000,008,007,003,000,000
10030 DATA 130,000,000,000,003,255,255,127,015 
10040 DATA 131,024,60,126,255,255,255,255,255
10050 DATA 132,000,000,000,192,255,255,245,240
10060 DATA 133,000,000,000,016,224,192,000,000
10070 DATA 134,063,103,167,063,076,144,128,128 
10080 DATA 135,000,224,248,255,255,031,007,000
10090 DATA 136,000,007,031,255,255,248,224,000
10100 DATA 137,000,128,224,240,248,028,006,001
10110 DATA 138,000,001,003,015,031,056,096,128
10120 DATA 139,252,206,205,252,050,009,001,001
10130 DATA 144,000,000,000,128,127,063,007,000
10140 DATA 145,001,003,007,063,255,255,255,255
10150 DATA 146,128,192,224,252,255,255,255,255
10160 DATA 147,000,000,000,001,254,252,224,000
10170 DATA 148,031,063,127,255,255,255,255,255
10180 DATA 149,248,252,254,255,255,255,255,255
10190 DATA 150,255,255,255,255,255,255,255,255
10200 DATA 151,015,015,015,015,015,015,015,015
10210 DATA 152,240,240,240,240,240,240,240,240
10220 DATA 160,016,016,060,100,196,006,003,000
10230 DATA 161,048,252,016,104,068,130,020,012
10240 DATA 162,000,032,032,048,048,025,007,000
10250 DATA 163,048,073,145,062,100,004,006,006
10260 DATA 164,226,066,071,226,146,135,009,049
10270 DATA 165,002,076,120,068,008,024,030,006
10280 DATA 176,016,016,035,036,084,136,004,028
10290 DATA 177,066,068,036,124,166,037,068,066
10300 DATA 178,048,072,142,017,002,004,008,008
10310 DATA 179,167,081,081,001,000,004,127,132
10320 DATA 180,001,002,103,146,146,098,004,008
10330 DATA 181,070,057,001,006,120,132,006,001
10340 DATA 182,140,082,033,033,062,032,064,128
10350 DATA 183,140,082,034,034,046,050,066,129
10360 DATA 184,015,016,032,064,152,134,073,056
10370 DATA 185,012,018,097,129,129,134,072,048
10380 DATA 186,140,082,033,033,033,033,082,140
10390 DATA 187,142,081,032,050,044,032,081,142
10400 DATA 188,129,097,081,082,074,138,134,129
10410 DATA 189,002,060,072,016,016,026,060,064
10420 DATA 190,135,073,040,056,036,034,066,129
10430 DATA -1,0,0,0,0,0,0,0,0
11000 '=== jahresbezeichnungen===
11010 DATA "r RATTE","s OCHSEN","s TIGERS","r KATZE","s PFERDES","r ZIEGE","s AFFEN","s HAHNES","s HUNDES","s SCHWEINES"
11020 '=== data's fuer n-hymne === 
12000 DATA 426,2,319,6,319,2,319,2,319,2,426,2,379,1,358,1
12010 DATA 319,4,319,4,0,4,253,2,319,2,284,1,253,1,213,3,213,1
12020 DATA 213,4,253,3,253,1,319,2,253,2,213,3,253,1,284,4
12030 DATA 284,8,190,4,213,4,284,4,253,4,213,2,253,2,0,2,213,2,253,2,284,1,253,1,319,4
12040 DATA 253,4,0,4,426,3,379,1,319,2,319,2,253,3,1,213,2,213,2
12050 DATA 284,2,284,1,284,1,379,4,284,6,426,2,319,6,319,2
12060 DATA 253,6,253,2,213,8,319,3,253,1,213,2,213,2,190,4,213,4
12070 DATA 253,3,319,1,213,2,213,2,213,2,253,2,0,2,319,2,0,2,426,4,319,16
12080 DATA -1,1
*/ });
