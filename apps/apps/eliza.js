/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem eliza - Eliza (Boss)
2 rem (c) Olaf Hartwig, 1985
3 REM Kuenstliche Intelligenz auf dem CPC
4 REM Titel: Eliza Vorgesetzter
5 : 'Modifications: line 3045: avoid endless loop when only one answer to choose
6 MODE 2
7 WIDTH 60
10 :
30 PAPER 3
40 PEN 0
50 CLS
70 :
100 GOSUB 30000
110 REM Initialisation
150 GOSUB 20000
160 REM Titel
170 :
200 GOSUB 1000
210 REM Dialog Satzeingabe
300 GOSUB 2000
310 REM Suchroutine
400 GOSUB 3000
410 REM Konjugation
500 GOSUB 4000
510 REM Antwortsatz
610 GOTO 200
989 STOP
990 :
1000 REM Dialog Satzeingabe
1100 PRINT
1110 INPUT "_ _ _> ";i$
1120 IF i$="" THEN 1110
1125 IF i$="stop" THEN STOP
1130 IF LEN(i$)<2 OR LEN(i$)>200 THEN PRINT"Ungueltige Eingabe...":GOTO 1110
1800 RETURN
1990 :
2000 REM Suchschleife
2010 :
2020 REM Schluesselwort waehlen
2090 ma=0
2100 FOR i=1 TO 46
2110 zk$=k$(i)
2120 GOSUB 2500
2125 IF ma=9 THEN 2150
2130 NEXT i
2140 :
2150 RETURN
2160 :
2500 REM scanning
2510 FOR p=1 TO LEN(i$)
2520 w$=MID$(i$,p,LEN(zk$))
2530 IF w$=k$(i) THEN ma=9:k=i:RETURN
2540 NEXT p
2550 k=46:REM kein Keywort
2560 RETURN
2590 :
3000 REM Konjugation
3010 REM Antwortsatz vorwaehlen
3020 zw=n(k)-r(k)
3030 zr=INT(RND(1)*zw)
3040 aw=r(k)+zr
3045 IF aw=aalt and zw>1 THEN 3000: 'IF aw=aalt THEN 3000
3047 aalt=aw
3050 :
3060 mk=0
3070 REM Restsatzmarker reset
3080 :
3100 REM Restsatz anfuegen?
3120 FOR i=1 TO LEN(a$(aw))
3130 IF MID$(a$(aw),i,1)="*" THEN 3200
3140 NEXT i
3150 RETURN
3160 REM kein Restsatz
3170 REM und keine Konjugation
3200 :
3300 REM Restsatz isolieren
3310 re$=MID$(i$,p+LEN(zk$),LEN(i$))
3350 mk=99
3360 REM Restsatz in Antwort anfuegen
3510 :
3980 RETURN
3990 :
4000 REM Satzausgabe
4010 :
4100 PRINT " --> "
4120 IF mk=99 THEN GOTO 4200
4130 IF mk=0 THEN GOTO 4300
4140 :
4200 PRINT LEFT$(a$(aw),LEN(a$(aw))-1);re$
4250 RETURN
4260 :
4300 PRINT a$(aw)
4350 RETURN
5000 :
20000 REM Titel
20010 CLS
20015 PRINT
20020 PRINT TAB(12)" E L I Z A   V O R G." 
20030 PRINT
20040 PRINT TAB(17)"(c) Olaf Hartwig  1985"
20060 WINDOW 6,79,6,25 
20070 PAPER 2
20080 PEN 3
20090 CLS
20100 RETURN
28000 :
30000 REM Initialisation
30010 DIM r(46):   REM Codezahl 1 
30020 DIM n(46):   REM Codezahl 2
30030 DIM k$(46):  REM Keywoerter
30040 DIM a$(121): REM Antworten
30100 :
31000 REM Codezahlen lesen
31005 FOR i=1 TO 46
31010 READ r(i)
31020 READ n(i)
31030 NEXT i
31060 :
31100 REM data r(i), n(i)
31110 DATA 1,3
31120 DATA 4,6
31130 DATA 7,10
31140 DATA 11,15
31150 DATA 11,15
31160 DATA 16,20
31170 DATA 21,24
31180 DATA 25,27
31190 DATA 28,35
31200 DATA 28,35
31210 DATA 28,35
31220 DATA 28,35
31230 DATA 28,35
31240 DATA 28,35
31250 DATA 36,40
31260 DATA 36,40
31270 DATA 36,40
31280 DATA 41,45
31290 DATA 41,45
31300 DATA 41,45
31310 DATA 41,45
31320 DATA 41,45
31330 DATA 46,48
31340 DATA 49,53
31350 DATA 54,57
31360 DATA 58,63
31370 DATA 64,69
31380 DATA 64,69
31390 DATA 70,74
31400 DATA 70,74
31410 DATA 75,77
31420 DATA 75,77
31430 DATA 78,85
31440 DATA 86,89
31450 DATA 90,94
31460 DATA 90,94
31470 DATA 95,98
31480 DATA 95,98
31490 DATA 99,101
31500 DATA 102,106
31510 DATA 107,108
31520 DATA 109,111
31530 DATA 112,113
31540 DATA 112,113
31550 DATA 114,121
31560 DATA 114,121
31590 :
32000 REM Keywoerter einlesen
32010 FOR i=1 TO 46
32020 READ k$(i)
32030 NEXT i
32040 :
32100 REM data Keywoerter
32110 DATA ich bin
32120 DATA ich kann
32130 DATA will
32140 DATA wuensche
32150 DATA wunsch
32160 DATA du
32170 DATA sie
32180 DATA immer
32190 DATA warum
32200 DATA wie
32210 DATA wer
32220 DATA was
32230 DATA wo
32240 DATA wann
32250 DATA nein
32260 DATA nicht
32270 DATA nie
32280 DATA ja
32290 DATA stimmt
32300 DATA immer
32310 DATA genau
32320 DATA richtig
32330 DATA grund
32340 DATA traum
32350 DATA hallo
32360 DATA denke
32370 DATA geld
32380 DATA gehalt
32390 DATA gleich
32400 DATA sofort
32410 DATA ende
32420 DATA freizeit
32430 DATA freund
32440 DATA computer
32450 DATA arbeit
32460 DATA beruf
32470 DATA idiot
32480 DATA trottel
32490 DATA streik
32500 DATA moegen
32510 DATA spielen
32520 DATA alt
32530 DATA chef
32540 DATA boss
32550 DATA kein keywort
32555 DATA
32590 :
33000 REM Antworten einlesen
33010 FOR i=1 TO 121
33020 READ a$(i)
33030 NEXT i
33070 :
33100 REM Data Antworten
33110 DATA sind sie sich da auch ganz sicher dass sie das wirklich sind und zwar*
33120 DATA vielleicht wuerden sie das ja gerne sein naehmlich*
33130 DATA ich glaube ihnen kein wort das sie das sind-*
33140 DATA schoen wenn sie das koennen!
33150 DATA reden sie nicht so viel-fangen sie an!
33160 DATA dann setzen sie ihr koennen sinnvol ein und belaestigen sie mich nicht
33170 DATA was ist das fuer ein tonfall.sie wollen nicht sondern moechten.
33180 DATA was wollen sie?!!
33190 DATA ihnen geht es wohl zu gut!
33200 DATA abgelehnt! sprechen sie nicht weiter!
33210 DATA was wuenschen sie? *
33220 DATA habe ich mich da verhoert?sie wuenschen*
33230 DATA jeder wunsch muss hier hart erarbeitet werden!
33240 DATA sie wuenschen sich da vielleicht etwas zu viel!
33250 DATA ich habe ihre wuensche allmaehlich gestrichen satt!
33260 DATA gewoehnen sie sich allmaehlich einen anderen tonfall an!
33270 DATA siezen sie mich gefaelligst!
33280 DATA wenn sie mich nicht augenblicklich mit 'sie' anreden fliegen sie raus
33290 DATA hoeren sie sofort mit ihrer duzerei auf!
33300 DATA wagen sie es nicht noch einmal 'du' zu mir zu sagen!
33310 DATA reden sie schon wieder von mir?
33320 DATA beziehen sie das auf mich?
33330 DATA ihr siezen gefaellt mir.
33340 DATA warum wenden sie sich immer an mich?
33350 DATA wirklich immer?
33360 DATA immer noch?
33370 DATA warum?
33380 DATA weshalb fragen sie?
33390 DATA sie haben meine geduld bereits ueberstrapaziert! keine fragen mehr!
33400 DATA noch eine weitere frage und sie fliegen raus!
33410 DATA ihre ewige fragerei ist ja nicht zum aushalten!
33420 DATA stellen keine so idiotischen fragen!
33430 DATA schluss mit der fragerei!
33440 DATA hier wird nicht gefragt sondern gespurt.
33450 DATA hier stelle ich die fragen.
33460 DATA sagen sie nicht immer nein!
33470 DATA noch ein 'nein' und...
33480 DATA hier wird positiv gedacht!
33490 DATA wirklich nicht?
33500 DATA was soll das heissen?
33510 DATA prima!
33520 DATA jawohl! denken sie positiv!
33530 DATA heisst das sie sind mit mir einer meinung?
33540 DATA sie denken also positiv darueber?
33550 DATA es gefaellt mir wenn sie positiv denken.
33560 DATA suchen sie nicht nach gruenden sondern arbeiten sie!
33570 DATA ihre gruende interessieren mich nicht!
33580 DATA behalten sie ihre gruende besser fuer sich!
33590 DATA haben sie etwa bei ihrer arbeit getraeumt?
33600 DATA sie haben doch wohl von mir getraeumt?
33610 DATA ihre traeume interessieren mich nicht!
33620 DATA kommen sie mir nicht mit solchen dingen!
33630 DATA traeumen koennen sie zu hause aber nicht bei der arbeit!
33640 DATA guten tag heisst das!
33650 DATA was erlauben sie sich?
33660 DATA sagen sie nicht noch einmal hallo zu mir!
33670 DATA wie sprechen sie mit ihrem vorgesetzten?
33680 DATA sie denken zu viel.
33690 DATA verschwenden sie ihre energie nicht mit zu vielem denken!
33700 DATA denken sie nicht - arbeiten sie!
33710 DATA wenn sie das noch einmal denken fliegen sie raus!
33720 DATA genug gedacht fuer heute!
33730 DATA sie werden nicht fuers denken bezahlt sondern fuers arbeiten!
33740 DATA sie wollen etwa schon wieder mehr geld?
33750 DATA erwaehnen sie noch einmal das wort geld und ich kuerze ihr gehalt!
33760 DATA warum kommen sie auf geld?
33770 DATA geld geht mich nichts an.
33780 DATA geld erhaelt nur der der arbeitet ... sie nicht!
33790 DATA aergern sie mich nicht mit ihren ewigen gedanken an geld!
33800 DATA sagen sie das nicht sondern handeln sie!
33810 DATA lassen sie dem satz taten folgen!
33820 DATA handeln sie endlich!
33830 DATA ihre ausfluechte reichen mir...tun sie etwas!
33840 DATA nicht gleich oder sofort sondern jetzt!keine ausfluechte!
33850 DATA wie koennen sie jetzt an ihre freizeit denken?
33860 DATA sie muessen heute ueberstunden machen...keine freizeit!
33870 DATA sie haben doch erst gerade ferien gehabt!
33880 DATA ihr einziger freund bin ich!
33890 DATA warum denken sie an freunde?
33900 DATA uebrigens ihre freunde gehen mir langsam auf die nerven!
33910 DATA wie koennen sie jetzt an freunde denken...sie muessen arbeiten!
33920 DATA belaestigen sie mich nicht immer mit ihren freunden!
33930 DATA sie haben jetzt keine zeit fuer freunde!
33940 DATA denken sie an etwas sinnvolleres!
33950 DATA haben sie ueberhaupt freunde?
33960 DATA was halten sie von computern?
33970 DATA haben sie etwas gegen computer?
33980 DATA computer sind sinnvoll. oder was finden sie?
33990 DATA wie bitte computer sind *
34000 DATA wie ist denn ihre arbeitseinstellung?
34010 DATA was? arbeit ist *
34020 DATA wie gefaellt ihnen denn ihre arbeit?
34030 DATA haben sie zu wenig arbeit?
34040 DATA sie moechten wohl mehr in ihrem beruf arbeiten?
34050 DATA reden sie etwa von mir?
34060 DATA was haben sie da eben gesagt?
34070 DATA meinen sie etwa mich?
34080 DATA ein weiteres wort und ich feuere sie...fristlos!
34090 DATA streik ??
34100 DATA schon wieder ein streik ?
34110 DATA bei streiks hilft nur aussperrung oder entlassungen!
34120 DATA was moegen sie? ...*
34130 DATA warum moegen sie*
34140 DATA moegen sie auch ihre arbeit?
34150 DATA sie moegen doch sicher ganz besonders mich nicht wahr?
34160 DATA sie moegen mir entschieden zu viel!
34170 DATA warum spielen sie das gerne und zwar*
34180 DATA bei mir wird nicht gespielt!
34190 DATA wer ist hier alt?
34200 DATA sie werden auch allmaehlich alt.
34210 DATA finden sie mich etwa auch alt?
34220 DATA wie reden sie mit mir?
34230 DATA was bilden sie sich ein mich so zu nennen?
34240 DATA was wollen sie eigentlich?
34250 DATA halten sie gefaelligst ihren mund!
34260 DATA nuscheln sie nicht so!
34270 DATA gewoehnen sie sich einen anderen tonfall an!
34280 DATA ist das alles was sie mir zu sagen haben?
34290 DATA ich muss noch etwas erledigen. warten sie einige minuten!
34300 DATA entschuldigen sie mich fuer einige minuten. ich muss kurz telephonieren.
34310 DATA starren sie mich nicht so aufdringlich an!
34320 DATA
34330 DATA
34340 :
34350 RETURN
*/ });
