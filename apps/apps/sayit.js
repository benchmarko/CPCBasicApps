/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
10 '
20 '           SAGS
30 '      Copyright 1986 by
40 '      Wolfgang Rauneker
50 '
60 SYMBOL AFTER 90 ' Deutsche Sonderzeichen
70 SYMBOL 123,&48,&0,&78,&C,&7C,&CC,&76,&0: REM ae
80 SYMBOL 124,&24,&0,&3C,&66,&66,&66,&3C,&0: REM oe
90 SYMBOL 125,&44,&0,&66,&66,&66,&66,&3E,&0: REM ue
100 '
110 '    ZAHLWOERTER
120 '
130 DATA " ","dausend","millio","milliard","billio"
140 DATA " ","tausend","emillion","emilliarde","ebillion"
150 DATA " ","thousand","million","billion","trillion"
160 DATA " ","dausend","milliona","milliardn","billiona"
170 DATA " ","tausend","millionen","milliarden","billionen"
180 DATA " ","thousand","millions","billions","trillions"
190 DATA "null","oa","zwoa","drei","viar","fimf","sex","siem"
200 DATA "ocht","nein","zehn","oif","zwelf","dreizehn","viazehn"
210 DATA "fimfzehn","sechzehn","siebzehn","ochtzehn","neinzehn"
220 DATA "null","ein","zwei","drei","vier","f}nf","sechs","sieben"
230 DATA "acht","neun","zehn","elf","zw|lf","dreizehn","vierzehn"
240 DATA "f}nfzehn","sechzehn","siebzehn","achtzehn","neunzehn"
250 DATA "zero","one","two","three","four","five","six","seven"
260 DATA "eight","nine","ten","eleven","twelve","thirteen","fourteen"
270 DATA "fifteen","sixteen","seventeen","eighteen","nineteen"
280 DATA "zehn","zwonzg","dreissg","viazg","fuffzg"
290 DATA "sechzg","siebzg","ochtzg","neinzg"
300 DATA "zehn","zwanzig","dreissig","vierzig","f}nfzig"
310 DATA "sechzig","siebzig","achtzig","neunzig"
320 DATA "ten","twenty","thirty","forty","fifty"
330 DATA "sixty","seventy","eighty","ninety"
340 DATA "oana","zwoara","dreia","viera","fimfa"
350 DATA "sexa","siema","ochta","neina"
360 DATA "ein_und","zwei_und","drei_und","vier_und","f}nf_und"
370 DATA "sechs_und","sieben_und","acht_und","neun_und"
380 DATA "","","","","","","","",""
390 DATA "moi_zehn_hoch","mal_zehn_hoch","to_the_power_of"
400 DATA "komma","komma","point"
410 DATA "oans","eins","one"
420 DATA "hundat","hundert","hundred"
500 REM
510 REM   STRINGS VEREINBAREN UND EINLESEN
520 REM
530 language = 3: REM Zur Zeit sind 3 Sprachen installiert
540 DIM Gruppe$(language,5),Plural$(language,5),Einer$(language,19)
550 DIM Zehner$(language,9),und$(language,9),Potenz$(language)
560 DIM Punkt$(language),eins$(language),hundert$(language)
570 FOR l = 1 TO language: FOR i = 1 TO  5: READ Gruppe$(l,i): NEXT: NEXT
580 FOR l = 1 TO language: FOR i = 1 TO  5: READ Plural$(l,i): NEXT: NEXT
590 FOR l = 1 TO language: FOR i = 0 TO 19: READ Einer$(l,i):  NEXT: NEXT
600 FOR l = 1 TO language: FOR i = 1 TO  9: READ Zehner$(l,i): NEXT: NEXT
610 FOR l = 1 TO language: FOR i = 1 TO  9: READ und$(l,i):    NEXT: NEXT
620 FOR l = 1 TO language: READ Potenz$(l): NEXT
630 FOR l = 1 TO language: READ Punkt$(l):  NEXT
640 FOR l = 1 TO language: READ eins$(l):   NEXT
650 FOR l = 1 TO language: READ hundert$(l):NEXT
700 REM
710 REM      H A U P T P R O G R A M M
720 REM
730    GOSUB 1000 ' ANFANGSDIALOG
740    fertig = 0 ' FALSE
750    WHILE NOT fertig
760       PRINT: PRINT "   Gib eine beliebige Zahl, z.B. "
770       PRINT "   4711  -0815,007  +123.456E-789  oder RETURN ": PRINT
780       LINE INPUT "",Zeile$
790       cnt = 0: col = 0: ch$ = " "
800       WHILE cnt < LEN(Zeile$) AND ch$ = " "
810          cnt = cnt + 1: ch$ = MID$(Zeile$,cnt,1)
820       WEND
830       fertig = ch$ = " ": REM Leereingabe (RETURN-Taste)
840       IF fertig GOTO 930
850          GOSUB 3000 ' GIB GANZE ZAHL AUS
860          GOSUB 4000 ' GIB DEZIMALBRUCH AUS
870          IF UPPER$(ch$) <> "E" GOTO 910 ' Exponent fehlt
880             cnt = cnt + 1
890             wort$ = Potenz$(Sprache): GOSUB 2000
900             GOSUB 3000 ' GIB GANZE ZAHL AUS
910 '        END IF
920          PRINT
930 '     END IF
940    WEND
950 PRINT " Ende von SAGS": PRINT
960 END
1000 '
1010 '   ANFANGSDIALOG
1020 '
1030 MODE 2: PRINT
1040 PRINT "SAGS  'buchstabiert' eine beliebige Zahl in :": PRINT
1050 PRINT "         Bayrisch  (B)"
1060 PRINT "         Deutsch   (D)"
1070 PRINT "         Englisch  (E)": PRINT: ch$=""
1080 WHILE NOT (ch$="B" OR ch$="D" OR ch$="E")
1090    PRINT "Gib  B, D oder E": ch$=""
1100    WHILE ch$="": ch$=INKEY$: WEND: ch$=UPPER$(ch$)
1110 WEND
1120 IF ch$="B" THEN Sprache = 1
1130 IF ch$="D" THEN Sprache = 2
1140 IF ch$="E" THEN Sprache = 3
1150 RETURN  ' ANFANGSDIALOG
2000 '
2010 '   ZAHLWORT WEGSCHREIBEN
2020 '
2030 IF col > 64 THEN PRINT "-": col = 0
2040 IF col >  0 THEN PRINT "_";
2050 PRINT wort$;: col = col + LEN(wort$) + 1
2060 RETURN ' SCHREIBE ZAHLWORT
3000 '
3010 '   GIB GANZE ZAHL AUS
3020 '
3030 ch$ = MID$(Zeile$,cnt,1)
3040 IF ch$ = "+" THEN wort$ = "plus": GOSUB 2000: cnt = cnt + 1
3050 IF ch$ = "-" THEN wort$ = "minus":GOSUB 2000: cnt = cnt + 1
3060 i = 0: ipos = cnt: ch$ = MID$(Zeile$,cnt,1): zero = -1 ' TRUE
3070 WHILE INSTR(1,"0123456789",ch$) <> 0 AND cnt <= LEN(Zeile$)
3080    i = i + 1: cnt = cnt + 1
3090    IF cnt > LEN(Zeile$) THEN ch$ = " " ELSE ch$ = MID$(Zeile$,cnt,1)
3100 WEND
3110 REM i : Anzahl der Stellen, g: Anzahl der Dreiergruppen
3120 g = (i + 2) \ 3: num = i MOD 3: IF num = 0 THEN num = 3
3130 IF i > 15 THEN ON Sprache GOTO 3140,3150,3160 ELSE GOTO 3200
3140 PRINT "Zahln wos groessa san ois 999 Billiona, san verboten!":GOTO 3170
3150 PRINT "Zahlen gr|sser als 999 Billionen sind nicht erlaubt!": GOTO 3170
3160 PRINT "Numbers greater than 999 trillions are not allowed!"
3170 RETURN ' Fehlerausgang LIES INTEGER ZAHL
3180 '
3200 FOR h = g TO 1 STEP -1
3210    Wert = VAL(MID$(Zeile$,ipos,num)): zero = zero AND (Wert = 0)
3220    w    = Wert \ 100 ' w : Hunderter
3230    IF w > 1 THEN wort$ = Einer$(Sprache,w): GOSUB 2000
3240    IF w > 0 THEN wort$ = hundert$(Sprache): GOSUB 2000
3250    w    = Wert MOD 100 ' w : Zehner
3260    IF w > 1 THEN GOTO 3270 ELSE GOTO 3350
3270       IF w < 20 THEN wort$ = Einer$(Sprache,w): GOSUB 2000: GOTO 3340
3280          z = w \ 10: e = w MOD 10
3290          IF e = 0 THEN wort$ = Zehner$(Sprache,z): GOSUB 2000: GOTO 3330
3300             IF Sprache <= 2 THEN wort$=und$(Sprache,e): GOSUB 2000
3310             wort$ = Zehner$(Sprache,z): GOSUB 2000
3320             IF Sprache =  3 THEN wort$ = Einer$(Sprache,e): GOSUB 2000
3330 '        END IF
3340 '     END IF
3350 '  END IF
3360    IF w <> 1 THEN GOTO 3390
3370       IF h = 1 THEN wort$ = eins$(Sprache) ELSE wort$ = Einer$(Sprache,1)
3380       GOSUB 2000
3390 '  END IF
3400    IF h <= 1 THEN GOTO 3430
3410       IF Wert > 1 THEN wort$ = Plural$(Sprache,h): GOSUB 2000
3420       IF Wert = 1 THEN wort$ = Gruppe$(Sprache,h): GOSUB 2000
3430 '  END IF
3440    ipos = ipos + num: num = 3 ' Bearbeite n{chste Dreiergruppe
3450 NEXT h
3460 IF zero THEN wort$ = Einer$(Sprache,0): GOSUB 2000
3470 RETURN ' LIES INTEGER ZAHL
4000 '
4010 '   GIB DEZIMALBRUCH AUS
4020 '
4030 ch$ = MID$(Zeile$,cnt,1)
4040 IF NOT (ch$ = "." OR ch$ = ",") THEN RETURN ' Weder Punkt noch Komma da
4050 wort$ = Punkt$(Sprache): GOSUB 2000
4060 cnt = cnt + 1: ch$ = MID$(Zeile$,cnt,1)
4070 WHILE INSTR(1,"0123456789",ch$) <> 0
4080    Index = VAL(ch$)
4090    IF Index = 1 THEN wort$=eins$(Sprache) ELSE wort$=Einer$(Sprache,Index)
4100    GOSUB 2000: cnt = cnt + 1
4110    IF cnt > LEN(Zeile$) THEN ch$ = " " ELSE ch$ = MID$(Zeile$,cnt,1)
4120 WEND
4130 RETURN ' LIES DEZIMALBRUCH
*/ });
