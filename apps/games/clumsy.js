/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 REM clumsy - Clumsy Control
2 rem (c)
3 rem 
4 rem clumsy control
5 'SYMBOL AFTER 240:MEMORY HIMEM-1:FOR i=1 TO 9
6 'READ x:POKE HIMEM+i,x:NEXT i
7 'CALL HIMEM+1 :'CAS SET SPEED not needed
8 'DATA &21,&5d,&00,&3e,&0a,&cd,&68,&bc,&c9
9       GOTO 500
10  '
11  '          Variablen 
12  '
20 DIM start(strahlmax),ziel(strahlmax),posx(strahlmax),posy(strahlmax),fakt(strahlmax)
25  DIM wospalte(5):DIM wozeile(5): DIM  wotime(5)
30  DIM stadt(4)
50      stadt(1)=20
55      stadt(2)=160
60      stadt(3)=420
65      stadt(4)=560
75  INK 1,24: INK 2,10,20: INK 3,9
80  SPEED INK 5,5
85 'SPEED KEY 3,3
90  spalte=19: zeile=18
95  RETURN
100 '
101 '          Var fuer neues Spiel loeschen
102 '
110 ERASE stadt
120 ERASE start
130 ERASE ziel
140 ERASE posx
150 ERASE posy
160 ERASE fakt
170 ERASE wospalte
180 ERASE wozeile
190 ERASE wotime
195 treffer=0
200 anz=0
300 RETURN
500 '
501 '          Hauptprogramm
502 '
510 MODE 1
520 GOSUB 60000                                :'UDG'   
530 GOSUB 9000                                 :'Begruessung'
535 i$=INKEY$                                  :'Beispiel J/N ?'
540 IF i$="n" THEN RUN 575
545 IF i$="j" THEN GOTO 550
547 GOTO 535
550 GOSUB 10000                                :'Beispiel'
560 i$=INKEY$
562 IF i$="n" THEN CLEAR: GOTO 550             :'nochmal Beispiel J/N ?'
564 IF i$="j" THEN RUN 575
566 GOTO 560
575 strahlmax=0
577 punkte=0
580 FOR runde=1 TO 3
585 MODE 1:LOCATE 10,10:PRINT"gleich gehts weiter"
587 GOSUB 62000:GOSUB 10
590 mun=100                                    :'Munition'
600 strahlmax=strahlmax+5                      :'Anzahl der Strahlen'
605 GOSUB 100:GOSUB 10                         :'Var neu dimensionieren'
608 LOCATE 10,10:PRINT"                    "    
610 strahl=9+runde                             :'Vorschub der Srahlen'
620 GOSUB 900                                  :'Spielsteuerung'
625 IF treffer=4 OR runde=3 THEN GOTO 660     :'Spielabbruch'
630 GOSUB 12000                                :'Rundenende'
635 GOSUB 100
640 NEXT
660 GOSUB 13000                                :'Spielende'
700 RUN 575
900 '
901 '          SPIEL-STEUERUNG
902 '
910 FOR d=1 TO strahlmax: GOSUB 5000: NEXT
920 start=TIME                                 :'Startzeit setzen'
925 GOSUB 4000                                 :'Anzeigen'
930 t!=time+150:GOSUB 1000                                 :'Corsor'
940 GOSUB 6000                                 :'Strahlen zeichnen'
950 GOSUB 1000                                 :'Corsor'
960 GOSUB 3000                                 :'Wolke loeschen'
970 GOSUB 1000                                 :'Corsor'
980 GOSUB 4000                                 :'Anzeigen'
985 while time<t!:call &bd19:gosub 1000:wend
990 IF INT((TIME-start)/300)<100                                                       AND treffer<4 THEN GOTO 930             :'spielende pruefen'
995 RETURN
1000 '
1010 '          Cursor-Steuerung
1020 '
1030 i$=INKEY$:if i$="" then 1150
1040 IF i$<>"" THEN PLOT spalte*16-8,(25-zeile)*16+8,0
1050 IF i$=CHR$(224) THEN GOSUB 1200                     :'Feuer'
1060 IF i$=CHR$(241) THEN zeile=zeile+1:   IF zeile>=20 THEN zeile=20 :'ab'
1070 IF i$=CHR$(240) THEN zeile=zeile-1:   IF zeile<=4  THEN zeile=4  :'auf'
1080 IF i$=CHR$(242) THEN spalte=spalte-1:IF spalte<=2 THEN spalte=2 :'links'
1090 IF i$=CHR$(243) THEN spalte=spalte+1:IF spalte>=38 THEN spalte=38:'rechts'
1140 PLOT spalte*16-8,(25-zeile)*16+8,1
1150 RETURN
1200 '
1201 '         Feuer
1202 '
1210 LET mun=mun-1: IF mun<=0 THEN mun=0: GOTO 1300
1225 SOUND 1,50,20,5,,,5
1230 PLOT 38*8-1,8*8,1
1240 DRAW spalte*16-8,(25-zeile)*16+8,1
1245 PLOT 38*8-1,8*8,0
1247 DRAW spalte*16-8,(25-zeile)*16+8,0
1250 GOSUB 2000
1300 RETURN
2000 '
2001 '      Wolke zeichnen
2002 '
2010 FOR wo%=1 TO 5
2015 IF wozeile(wo%)=0 THEN GOTO 2020
2017 NEXT
2018 RETURN
2020 LOCATE spalte-1, zeile-1: PEN 2:PRINT CHR$(240);CHR$(241);CHR$(242)
2030 LOCATE spalte-1, zeile  : PEN 2:PRINT CHR$(243);CHR$(244);CHR$(245)
2040 LOCATE spalte-1, zeile+1: PEN 2:PRINT CHR$(246);CHR$(247);CHR$(248)
2050 wospalte(wo%)=spalte: wozeile(wo%)=zeile: wotime(wo%)=TIME
2100 RETURN
3000 '
3001 '         Wolke loeschen
3002 '
3010 FOR wo%=1 TO 5
3020 IF wozeile(wo%)>0 AND wotime(wo%)+700<TIME THEN GOTO 3030
3022 NEXT
3025 RETURN
3030 LOCATE wospalte(wo%)-1,wozeile(wo%)-1:PRINT CHR$(32);CHR$(32);CHR$(32)
3040 LOCATE wospalte(wo%)-1,wozeile(wo%)  :PRINT CHR$(32);CHR$(32);CHR$(32)
3050 LOCATE wospalte(wo%)-1,wozeile(wo%)+1:PRINT CHR$(32);CHR$(32);CHR$(32)
3055 wozeile(wo%)=0
3100 RETURN
4000 '
4001 '       Anzeigen
4002 '
4010 LOCATE 1,25: PEN 1: PRINT "MUN :";,un
4020 LOCATE 25,25: PEN 1: PRINT "Punkte :";punkte
4030 LOCATE 12,25:PRINT"ZEIT :";INT((TIME-start)/300)
4100 RETURN
5000 '
5001 '       Srahlen definieren
5002 '
5015 IF d>strahlmax THEN RETURN
5020 LET start(d)=(INT(RND*(500-100+1)+100))
5040 LET z=INT(RND*(4-1+1)+1)
5050  IF z=1 THEN LET ziel(d)=stadt(1)
5060  IF z=2 THEN LET ziel(d)=stadt(2)
5070  IF z=3 THEN LET ziel(d)=stadt(3)
5080  IF z=4 THEN LET ziel(d)=stadt(4)
5090 LET fakt(d)=(ziel(d)-start(d))/380
5100 LET posy(d)=400
5200 RETURN
6000 '
6010 '        STRAHLEN ZEICHNEN
6020 '
6030 LET anz=anz+0.2: IF anz>strahlmax THEN anz=strahlmax
6040 FOR x%=1 TO anz
6045 posx(x%)=(start(x%)+(ABS(posy(x%)-400)*fakt(x%)))
6050 PLOT posx(x%),posy(x%),3
6060 posy(x%)=posy(x%)-strahl
6065 posx(x%)=(start(x%)+(ABS(posy(x%)-400)*fakt(x%)))
6070 DRAW posx(x%),posy(x%),3
6075 IF posy(x%)<=40   THEN GOSUB 8000:GOSUB 7000:GOTO 6080
6076 IF TESTR(0,-1) =2 THEN GOSUB 7000:GOTO 6080
6080 NEXT
6200 RETURN
7000 '
7001 '        Strahl loeschen
7002 '
7005 SOUND 1,300,30,10,,,5
7010 WHILE posy(x%)<400
7020 posx(x%)=(start(x%)+(ABS(posy(x%)-400)*fakt(x%)))
7030 PLOT posx(x%),posy(x%),0
7040 posy(x%)=posy(x%)+strahl
7050 posx(x%)=(start(x%)+(ABS(posy(x%)-400)*fakt(x%)))
7060 DRAW posx(x%),posy(x%),0
7070 WEND
7080 LET d=x%
7090 GOSUB 5000
7100 LET punkte=punkte+50*runde 
7110 RETURN
8000 '
8001 '        Treffer
8002 '
8030 IF posx(x%)<90                   AND stadt(1)=20  THEN stadt(1)=stadt(2):       LOCATE  2,23:PRINT "    ": treffer=treffer+1:SOUND 1,450,100,6,,,7     
8040 IF posx(x%)>90  AND posx(x%)<290 AND stadt(2)=160 THEN stadt(2)=STADT(3):       LOCATE 10,23:PRINT "    ": treffer=treffer+1:SOUND 1,450,100,6,,,7
8050 IF posx(x%)>290 AND posx(x%)<490 AND stadt(3)=420 THEN stadt(3)=stadt(4):       LOCATE 26,23: PRINT "   ": treffer=treffer+1:SOUND 1,450,100,6,,,7
8060 IF posx(x%)>500                  AND stadt(4)=560 THEN stadt(4)=stadt(1):       LOCATE 35,23: PRINT "   ": treffer=treffer+1:SOUND 1,450,100,6,,,7
8080 IF treffer=4 THEN LET runde=3:RETURN
8100 RETURN
9000 '
9001 '        Begruessung
9002 '
9005 MODE 1:GOSUB 62000: LOCATE 1,1
9010 PRINT"        W I L L K O M M E N"
9015 PRINT:PRINT
9020 PRINT"Sie sind der Retter dieses  Landes. Von"
9030 PRINT"Ihrem Bunker  in der  Mitte  des  Bild-"
9040 PRINT"schirmes muessen Sie die Staedte  gegen"
9050 PRINT"herabfallende Bomben verteidigen."
9055 PRINT
9060 PRINT"Bewegen Sie dazu den  hellen Lichtpunkt"
9070 PRINT"Mit den Pfeiltasten  oder dem Joystick."
9075 PRINT"Die [COPY] oder  Feuerknopf loest einen"
9080 PRINT"Schuss zum Lichtpunkt aus.  Faellt eine"
9090 PRINT"Bombe in die entstandene Wolke,wird sie"
9100 PRINT"vernichtet."
9105 PRINT
9110 PRINT"Wenn Sie die Taste [J] druecken, werden"
9120 PRINT"Sie einen kleinen Ausschnitt vom Kampf"
9130 PRINT"einer Ihrer Vorgaenger sehen . Moechten"
9140 PRINT"Sie nicht,druecken Sie Taste [N]"
9200 RETURN
10000 '
10001 '           Beispiel
10002 '
10004 MODE 1
10005 GOSUB 62000
10009 strahlmax=5:GOSUB 10
10010 punkte=0
10015 mun=100
10025 runde=1
10030 strahl=10
10035 anz=0
10040 RESTORE 11050
10050 FOR d=1 TO 5                                :'Strahlen def.'
10055 READ start(d),z                             :
10057 GOSUB 5050
10060 NEXT d                                      :
10065 start=TIME
10070 GOSUB 4000
10072 RESTORE 11100
10075 FOR beispiel=1 TO 31
10078 while time<t! and inkey$="":call &bd19:wend:t!=time+50
10080 READ i:i$=CHR$(i): GOSUB 1040               :'Cursor'
10090 GOSUB 6000
10100 READ i:i$=CHR$(i): GOSUB 1040               :'Cursor'
10110 GOSUB 3000
10120 READ i:i$=CHR$(i): GOSUB 1040               :'Cursor'
10130 GOSUB 4000
10140 NEXT beispiel
10150 LOCATE 5,15: PEN 1: PRINT"so, alles klar ?   TASTE [J]"
10160 LOCATE 5,17: PEN 1: PRINT"oder nochmal ?     TASTE [N]"
10170 RETURN:i$=INKEY$
10180 IF i$="j" THEN RUN 100
10190 IF i$="n" THEN GOTO 10300
10200 GOTO 10170
10300 MODE 1
10310 GOSUB 50
10320 GOSUB 62000
10340 start=TIME
10350 GOTO 10010
11000 '       Datas fuer Spielablauf Beispiel
11050 DATA 100,1,390,1,150,1,450,1,220,1
11100 DATA 243,243,243,243,240,240,240,243,243,243,243,243,243,243,243,241,243,243,243,241,224
11130 DATA 242,242,242,242,242,242,242,242,242,242,242,241,242,224
11140 DATA 241,243,243,243,243,243,243,243,243,243,243,243,243,                            243,243,243,242,240,224
11160 DATA 242,242,242,242,240,242,242,242,242,242,242,242,224
11170 DATA 241,241,241,241,243,243,243,243,243,224
11180 DATA 241,241,243,243,243,243,243,243,243,243,243,224
11190 DATA 241,240,240,240
12000 '
12001 '        Rundenende
12002 '
12020 LET punkte=punkte+(4-treffer)*(500*runde)
12030 LOCATE 5,12:PRINT"   neuer Punktestand :"punkte
12050 LOCATE 1,14:PRINT"      druecken Sie die ENTER-Taste, "
12060 LOCATE 1,15:PRINT"wenn Sie zur naechsten Runde bereit sind"
12080 i$=INKEY$: IF i$<>CHR$(13) THEN GOTO 12080 
12100 GOSUB 62000
12110 RETURN
13000 '
13001 '         Spielende
13002 '
13020 IF treffer<4 THEN LOCATE 5,10:PEN 2: PRINT "Sie haben alle drei Runden ueberstanden"
13025 IF treffer>=4 THEN LOCATE 2,10:PEN 2:PRINT "Alle vier Staedte sind zerstoert"
13030 LOCATE 5,13:PEN 2: PRINT "Punkte :"punkte
13050 LOCATE 5,17:PEN 1: PRINT "NOCHMAL ?    [ENTER]"
13060 i$=INKEY$: IF i$<>CHR$(13) THEN GOTO 12080
13070 RETURN
60000 '
60010 '        UDG
60020 '
60030 'SYMBOL AFTER 240
60040 SYMBOL 250, 3,3,35,115,250,171,255,250     :'dorf 1'
60050 SYMBOL 251, 0,0,1,243,171,249,255,255      :'dorf 2'
60060 SYMBOL 252, 4,14,27,159,149,31,255,255     :'dorf 3'
60070 SYMBOL 253, 3,15,31,63,127,127,234,255     :'kuppe L'
60080 SYMBOL 254, 128,224,240,248,252,252,174,254:'kuppe R'
60090 SYMBOL 240, 0,7,31,63,127,127,127,126      :'wolke 1.1'
60100 SYMBOL 241, 7,31,191,255,249,246,30,255    :'wolke 1.2'
60110 SYMBOL 242, 128,224,248,252,252,254,254,252:'wolke 1.3'
60120 SYMBOL 243, 61,61,63,127,255,239,239,239   :'wolke 2.1'
60130 SYMBOL 244, 255,255,239,199,239,255,255,187:'wolke 2.2'
60140 SYMBOL 245, 252,120,188,188,190,190,127,255:'wolke 2.3'
60150 SYMBOL 246, 241,255,255,127,63,31,15,0     :'wolke 3,1'
60160 SYMBOL 247, 199,255,255,255,255,248,240,0  :'wolke 3.2'
60170 SYMBOL 248, 254,254,252,252,240,224,0,0    :'wolke 3.3'
61030 KEY DEF 72,1,240
61040 KEY DEF 73,1,241
61050 KEY DEF 74,1,242
61060 KEY DEF 75,1,243
61070 KEY DEF 76,1,224
61080 RETURN
62000 '
62001 '          Bild
62003 '
62010 PEN 1
62030 LOCATE 1,24: PRINT STRING$(&27,CHR$(207))
62040 LOCATE 18,23:PRINT CHR$(222);CHR$(207);CHR$(207);CHR$(223)
62050 LOCATE 19,22: PRINT CHR$(253);CHR$(254)
62060 LOCATE 2,23: PRINT CHR$(250);CHR$(251);CHR$(252)
62070 LOCATE 10,23: PRINT CHR$(250);CHR$(251);CHR$(252)
62080 LOCATE 26,23:PRINT CHR$(250);CHR$(251);CHR$(252)
62090 LOCATE 35,23:PRINT CHR$(250);CHR$(251);CHR$(252)
62100 RETURN
*/ });
