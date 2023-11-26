/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem tester - Tester
2 rem (c)
3 rem
8 REM Tester
9 if f.needsel=1 then gosub 4013:goto 5180
10 on error goto 11:openin "tester1.zip":closein:goto 12:'cpcBasic: extract files from archive
11 resume 12
12 on error goto 0
70 '
80 GOSUB 5500
90 GOTO 5000
1000 GOSUB 1050:t=VAL(t$)
1010 IF t<mi OR t>ma THEN 1000
1020 RETURN
1050 t$="":WHILE t$=""
1060 t$=UPPER$(INKEY$):WEND:RETURN
1080 PRINT TAB(8);t$
1090 GOTO 1050
1099 REM j/n
1100 GOSUB 1050
1110 IF t$<>"J" AND t$<>"N" AND ASC(t$)<>13 THEN 1100
1120 RETURN
1650 w=4:GOSUB 1700
1660 GOSUB 1050:CLS#4:RETURN
1700 CLS #w:PRINT#w,t$;
1710 RETURN
1750 FOR i=1 TO 4:CLS #i:NEXT:RETURN 
1799 REM Aufbau
1800 MODE 1
1810 WINDOW #1,5,35,5,5:PAPER#1,3:PEN#1,2
1820 WINDOW #2,17,23,7,7:PAPER#2,0:PEN#2,3
1840 WINDOW #3,5,35,10,15:PAPER#3,1:PEN#3,3
1850 WINDOW #4,5,35,20,20:PAPER#4,1:PEN#4,0 
1855 GOSUB 1750 
1860 t$="Hier erscheinen die Anweisungen"
1865 w=1:GOSUB 1700
1870 t$="Zahlen":w=2:GOSUB 1700
1880 t$=SPACE$(9)+"Texteingabe"
1885 w=3:GOSUB 1700
1890 t$="Hier erscheinen die Meldungen"
1895 w=4:GOSUB 1700
1900 CALL &BB18:GOSUB 1750
1910 RETURN
1999 REM eingabe
2000 IF anz=0 THEN GOSUB 1800:GOTO 2020
2010 IF anz>de-2 THEN t$="     Datenfeld voll":GOTO 1080
2015 GOSUB 1800:a=anz+1:GOTO 2045
2020 PRINT#1,"max. Anzahl der Fragen:"
2030 INPUT #2,de
2035 IF de<2 THEN t$="minimal 2 Fragen":GOSUB 1650:GOTO 2030
2040 DIM frg$(de),ant$(de)
2042 a=1
2045 g=1
2050 PRINT#1,g".Gruppe:Wieviele Fragen ?"
2080 CLS#2:INPUT #2,t$:t=VAL(t$)
2090 IF t>9 OR t<2 THEN 2080
2095 IF t+a-1<=de THEN 2100
2096 ab=de-t-1+a:IF ab<2 THEN RETURN
2097 PRINT#4,"Bloss";ab;"Fragen moeglich":GOSUB 1660:GOTO 2080
2100 frg$(a)=t$
2110 GOSUB 2200
2120 g=g+1:GOSUB 1750
2130 t$="noch eine Gruppe (J/N)?"
2140 w=4:GOSUB 1700
2150 anz=a-1:GOSUB 1100
2170 IF t$="N" OR a>de THEN RETURN
2180 CLS #4:GOTO 2050
2200 FOR s=1 TO VAL(t$)
2210 GOSUB 1750
2220 PRINT#1,s;".Frage:"
2230 CLS #3:INPUT #3,t$
2235 IF VAL(t$)>0 THEN t$="Keine Zahlen am Fragenanfang!":GOSUB 1650:GOTO 2230
2240 frg$(a)=frg$(a)+t$ 
2250 PRINT#1,s;". Antwort dazu:"
2260 CLS #3:INPUT #3,t$
2270 ant$(a)=t$
2280 a=a+1
2290 NEXT s
2300 RETURN
2999 REM spielen (testen)
3000 IF anz=0 THEN t$="keine Daten vorhanden":GOTO 1080
3010 MODE 1:kl=2:gr=33
3020 WINDOW #1,5,35,4,6:PAPER#1,0:PEN#1,1
3030 WINDOW #2,kl,gr+4,8,22:PAPER#2,1:PEN#2,2
3035 WINDOW #3,10,27,24,24:PAPER#3,1:PEN#3,0
3036 ERASE a:DIM a(anz):za=1
3037 FOR i=1 TO anz:a(i)=0:NEXT
3038 RANDOMIZE TIME
3040 CLS#1:CLS#2:CLS#3
3045 FOR i=1 TO 9:an(i)=0:NEXT
3050 fr=INT(RND*anz)+1:IF a(fr)<>0 THEN 3050
3060 g=0:f=fr
3070 g=VAL(frg$(f)):IF g<2 THEN f=f-1:GOTO 3070
3080 f$=frg$(fr):IF f=fr THEN f$=RIGHT$(f$,LEN(f$)-1)
3090 PRINT#1,f$
3100 FOR i=1 TO g
3110 r=INT(RND*g)+1:IF an(r)<>0 THEN 3110
3112 IF r=fr-f+1 THEN ri=i
3115 an(r)=1:PRINT#2,CHR$(48+i);") ";
3116 a$=ant$(r-1+f):PRINT#2,LEFT$(a$,gr)
3117 IF LEN(a$)>gr THEN PRINT#2,""+RIGHT$(a$,LEN(a$)-gr)
3120 NEXT i
3150 CLS#3:INPUT#3,"Deine Wahl:";w$:IF w$="" THEN 3150
3155 IF ASC(w$)<49 OR ASC(w$)>g+48 THEN 3150
3160 w=VAL(w$)
3180 CLS #1:PRINT#1,"
"TAB(8);
3190 IF w=ri THEN GOSUB 3500 ELSE GOSUB 3600
3200 CLS #3:PRINT#3,"Weiter (J/N)"
3210 GOSUB 1100
3220 IF t$="N" THEN RETURN
3230 IF za<=anz THEN 3040 ELSE 3036
3500 PRINT#1,"R I C H T I G !"
3510 a(fr)=1:za=za+1:RETURN
3600 PRINT#1,"LEIDER FALSCH !":RETURN
4000 MODE 1:WINDOW #1,5,35,10-5,15+5
4010 PAPER #1,3:PEN #1,0:CLS #1
4012 f.col=12:f.row=5:f.msk$="*.DAT"
4013 f.needsel=1: gosub 9540:d$=f.f$: f.needsel=0:'file select done
4020 'LOCATE 14,7:PRINT"Dateiname:" 
4030 'INPUT #1,d$:IF d$<>"" THEN d$=LEFT$(d$,11)+".dat"
4031 if upper$(right$(d$,4))<>".DAT" then d$=d$+".DAT"
4040 CLS #1:LOCATE 14,7-4
4050 SPEED WRITE 1:RETURN
4099 ';saven
4100 IF anz=0 THEN t$="keine Daten vorhanden"
4105 GOSUB 4000 
4110 PRINT"S A V E N :":WINDOW SWAP 1,0
4120 OPENOUT d$
4125 PRINT #9,anz
4130 FOR i=1 TO anz
4140 PRINT#9,frg$(i)
4145 PRINT#9,ant$(i)
4150 NEXT i
4390 CLOSEOUT
4400 WINDOW SWAP 1,0:RETURN
4500 anz=0:d$=""
4510 GOSUB 4000
4520 PRINT"L A D E N :":WINDOW SWAP 1,0
4521 IF de<>0 THEN de=0:ERASE frg$,ant$
4522 PRINT "Wieviele Fragen sollen dazu-"
4523 INPUT"gemach werden";ab
4524 CLS
4525 DIM f$(1000),a$(1000)
4530 OPENIN d$
4540 INPUT #9,anz
4545 i=1
4550 WHILE NOT EOF
4560 LINE INPUT #9,f$(i)
4565 LINE INPUT #9,a$(i)
4566 i=i+1
4570 WEND
4590 CLOSEIN
4591 de=anz+ab 
4592 DIM frg$(de),ant$(de)
4593 FOR i=1 TO anz:frg$(i)=f$(i)
4594 ant$(i)=a$(i):NEXT
4595 ERASE f$,a$
4600 WINDOW SWAP 1,0:RETURN
5000 MODE 1:PAPER 0:PEN 1
5005 PRINT TAB(10)"
Allgemeiner Tester"
5010 INK 1,24:INK 2,6:INK 3,13:INK 0,0
5020 BORDER 0:PEN #1,1:PAPER #1,2
5030 WINDOW #1,5,35,6,19
5040 CLS #1:WINDOW #1,8,32,8,17
5050 PRINT#1,TAB(8)"** MENUE **
"
5060 PRINT#1,"1) durchspielen"
5070 PRINT#1,"2) Fragen erstellen" 
5080 PRINT#1,"3) Fragen speichern" 
5090 PRINT#1,"4) Fragen laden"  
5100 PRINT#1,"5)                 " 
5110 PRINT#1,"6) Ende"
5150 LOCATE 9,23:PRINT"( Bitte waehlen )"
5160 mi=1:ma=6:GOSUB 1000
5170 IF t=6 THEN MODE 1:PRINT"Ende.":STOP
5180 ON t GOSUB 3000,2000,4100,4500
5190 GOTO 5000
5499 REM Variablen
5500 CLOSEOUT:CLOSEIN
5510 DEFINT a-z
5520 anz=0:mi=0:ma=0
5530 DIM an(9),a(15)
5550 RETURN
9500 'filesel will be merged...
9540 chain merge "filesel"
9550 return
*/ });
