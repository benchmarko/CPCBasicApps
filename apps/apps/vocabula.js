/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem vocabula - Vocabulary Test (Vokabeltest)
2 rem (c) Prof.Dr.W.Voss, 1984  (Das Schulbuch zum CPC 464, p.196 ff)
3 rem Extended my Marco Vieth to have English and French; and some noise if answer is wrong (verison 3)
4 rem Modifications: 630: Syntax error in INPUT; delay in 1030; convert input to uppercase in 600,960; 615 check also for "N"
5 rem
6 rem
100 REM VOKABELTEST
110 MODE 2
120 PRINT"PROGRAMM ZUM ABFRAGEN VON VOKABELN."
130 PRINT:PRINT"HIER : DEUTSCH/FRANZOESISCH ODER UMGEKEHRT"
140 PRINT:PRINT:PRINT TAB(9)"PROF.DR.W.VOSS, 1984"
150 PRINT:PRINT:PRINT:PRINT
160 PRINT"IM DATEIBESTAND DIESES PROGRAMMS BEFINDEN SICH 48 VOKABELN"
170 PRINT:PRINT"SOLL DAS PROGRAMM AUSGEWEITERT WERDEN,"
180 PRINT"SO MUESSEN IN ZEILE 810 WEITERE DATA-"
190 PRINT"STATEMENTS ANGEFUEGT UND DER WERT FUER"
200 PRINT"N IN STATEMENT 280 GEAENDERT WERDEN.": PRINT 
210 PRINT "AUSSERDEM:30 ENGLISCH-VOKABELN"
220 PRINT "BIS ZEILE 1500"
230 PRINT "FUER ENGLISCH N IN ZEILE 1330"
260 PRINT
270 LOCATE 5,25:INPUT"BITTE ENTER DRUECKEN !";A$
280 N=48
290 CLS
300 ZZ=1
310  PRINT : PRINT: Q=43:GOSUB 1150
320 PRINT"ENGLISCH/DEUTSCH                        (1)"         
330 PRINT : PRINT : PRINT "ODER"     
340 PRINT: PRINT : PRINT "DEUTSCH/ENGLISCH                        (2)"
350 PRINT : PRINT : PRINT "ODER"     
360 PRINT: PRINT : PRINT "FRANZOESISCH                            (3)"
370 PRINT : PRINT : PRINT "BITTE 1 ODER 2 ODER 3 EINGEBEN (DANN ENTER)": PRINT 
380 GOSUB 1150
390  INPUT "                              ";Z
400 IF Z<>1 AND Z<>2 AND Z<>3 THEN Z=3
410 CLS:PRINT"MOMENT BITTE"  
420 IF Z=1 OR Z=2 THEN 1310
430 DIM D$(N,2)
440 FOR I=1 TO N:READ D$(I,1),D$(I,2):NEXT I
450 CLS
460 PRINT:PRINT:Q=35:GOSUB 1150
470 PRINT"DEUTSCH/FRANZOESISCH            (1)"
480 PRINT:PRINT:PRINT"ODER"
490 PRINT:PRINT:PRINT"FRANZOESISCH/DEUTSCH            (2)"
500 PRINT:PRINT:PRINT"BITTE 1 ODER 2 EINGEBEN (DANN ENTER)":PRINT
510 GOSUB 1150 
520 INPUT"                                ";Z                                
530 IF Z<>1 AND Z<> 2 THEN Z=1 
540 IF Z<>ZZ THEN GOSUB 1100:REM TAUSCH
550 CLS
560 PRINT:PRINT:PRINT"WIEVIEL VOKABELN SOLLEN GEPRUEFT WERDEN??--(DANN 'ENTER')"
570 INPUT"                        ";A
580 GOSUB 920
590 PRINT:PRINT"NOCHMAL ?  (J/N) ";TAB(23);"(DANN ENTER TASTE DRUECKEN)"
600 LOCATE 18,5:INPUT A$:a$=upper$(a$)
610 IF A$="J" THEN CLS:ZZ=Z :CLEAR:GOTO 280
615 if a$<>"N" then 600
620 PRINT:PRINT"ENDE DER AUSGABE":END
630 PRINT:PRINT:PRINT:PRINT TAB(22)"(DANN ENTER TASTE DRUECKEN)"; :?tab(18);:input "NOCHMAL ?  (J/N) ";A$ :'INPUT TAB(18); "NOCHMAL ?  (J/N) ";A$  
640 IF A$="J"THEN CLS:GOTO 470 
650 PRINT:PRINT"ENDE DER AUSGABE":END 
660 DATA DER ERSTE PARISBESUCH,LA PREMI'ERE VISITE 'A PARIS,ER BESUCHT,IL VISITE
670 DATA EINE GROSSE STADT,UNE GRANDE VILLE,EIN STADTPLAN,UNE PLAN DE LA VILLE
680 DATA ZUM EIFFELTURM,'A LA TOUR EIFFEL,EINE KARTE,UN TICKET,DAS IST WAR,C'EST VRAI,WOHIN GEHEN WIR,0'U EST-CE QUE NOUS ALLONS,ARC DE TRIOMPHE,L'ARC DE TRIOMPHE   
690 DATA EIN STERN,UNE E'TOILE,WOLLEN WIR HINGEHEN,ON Y VA,DA HINTEN,L'A-BAS
700 DATA DIE BAHN,LE TRAIN,ER FAEHRT,IL ROULE,VORSICHT,ATTENTION
710 DATA EIN FAHRKARTENHEFT,UN CARNET,WUNDERBAR,MAGNIFIQUE,NICHT HIER,PAS ICI
720 DATA EINE ROTE AMPEL,UN FEU ROUGE,DIE TERRASSE,LA TERRASSE,EIN FREIER TISCH,UNE TABLE LIBRE,DER SPRINGBRUNNEN,LA FONTAINE,STELLT EUCH DORT HIN,METTEZ-VOUS L'A
730 DATA SEHT IHR,VOUS VOYEZ,EINE KIRCHE,UNE E'GLISE,EIN GROSSER PARK,UN GRAND JARDIN
740 DATA GEHEN WIR DURCH,ON TRAVERSE LE,MUEDE,FATIGUE',DIE SEINE,LA SEINE
750 DATA HOFFT,ESP'ERE,EIN MUSEUM,UN MUSE'E,SETZT EUCH,ASSEYEZ-VOUS
760 DATA NATUERLICH,BIEN S'U'R,EINE BRUECKE,UN PONT,DIE UFER,LES QUAIS
770 DATA HUEBSCH,JOLIS,EINE BANK,UN BANC,EINE KATHEDRALE,UNE CATHE'DRALE
780 DATA ALLE TOURISTEN,TOUT LES TOURISTES,JETZT IST SCHLUSS,C'EST FINI
790 DATA ICH BIN ERLEDIGT,JE SUIS 'A PLAT,DIE JUGENDHERBERGE,L'AUBERGE DE LA JEUNESSE,UND WIE,ET COMMENT,SEID IHR NICHT,VOUS N''E'TES PAS
800 DATA DAS MUESSEN WIR JA WOHL,IL FAUT BIEN,PARISER BUCHHAENDLER,UN BOUQUINISTE,MACHT EINE AUFNAME,PREND UNE PHOTO,DIE CHAMPS-ELYSE'ES,LES CHAMPS-ELYSE'ES
900 PRINT:PRINT:Q=35:GOSUB 1150
910 GOSUB 1150
920 CLS
930 K=0
940 I=1
950 R=INT(RND(1)*N+1)
960 PRINT D$(R,1);:INPUT"      ANTWORT    :  ";W$:w$=upper$(w$)
970 IF W$=D$(R,2) THEN K=K+1:PRINT:PRINT:PRINT TAB(10)"SEHR GUT  ! ":GOTO 1010
980 PRINT:PRINT:PRINT"DAS WAR LEIDER FALSCH."
990 GOSUB 1210
1000 PRINT:PRINT"RICHTIG MUSS ES HEISSEN :  ";D$(R,2)
1010 PRINT:PRINT:PRINT:I=I+1
1020 IF I<=A THEN 950
1030 FOR M=1 TO 3000/30:call &bd19:NEXT M
1040 CLS
1050 KA=(K/A)*100:KA=INT(KA)
1060 Q=37:GOSUB 1150
1070 PRINT CHR$(219);"ANTEIL KORREKTER ANTWORTEN : ";KA;"%";TAB(37);CHR$(217)
1080 GOSUB 1150
1090 RETURN
1100 REM UP TAUSCH
1110 FOR I=1 TO N
1120 H$=D$(I,1):D$(I,1)=D$(I,2):D$(I,2)=H$
1130 NEXT I
1140 RETURN
1150 FOR M=1 TO Q
1160 PRINT CHR$(207);
1170 NEXT M
1180 PRINT
1190 RETURN
1200 Z=3
1210 FOR X=1 TO 7
1220 FOR Y=1 TO 30 
1230 Z=Z-1:IF Z=0 THEN Z=3
1240 SOUND 4,(40-Y),Z,X,0,0
1250 NEXT Y
1260 NEXT X
1270 FOR X=15 TO 1 STEP -1
1280 SOUND 1,0,10,X,0,0,15
1290 NEXT X
1300 RETURN
1310 REM
1320 FOR I=1 TO N:READ X$,Y$:NEXT I
1330 N=30
1340 DIM D$(N,2)
1350 FOR I=1 TO N:READ D$(I,1),D$(I,2):NEXT I
1370 ZZ=1     
1390 GOTO 540
1400 REM    **** ENGLISCHE VOKABELN ****
1410 DATA EMIGRATE,AUSWANDERN,AMONG,UNTER,SUPERSTITION,ABERGLAUBE,PIN,NADEL
1420 DATA COIN,MUENZE,SPIDER,SPINNE,CROW,KRAEHE,BRUSH,BUERSTE,SALT,SALZ
1430 DATA EITHER OR,ENTWEDER ODER
1440  DATA RECOGNIZE,ERKENNEN,KILL,UMBRINGEN,FINGERNAIL,FINGERNAGEL
1450 DATA ONESELF,SICH SELBST,HE IS PLEASED WITH IT,ES GEFAELLT IHM
1460 DATA COME TRUE,WIRKLICHKEIT WERDEN,PROMISE,VERSPRECHEN,FINE,GELDSTRAFE
1470 DATA WOODWORK,HOLZARBEITEN,TO GET INTO TROUBLE,IN SCHWIERIGKEITEN GERATEN
1480  DATA PUNISH,BESTRAFEN,CONSIDER,IN BETRACHT ZIEHEN,HELPFUL,HILFSBEREIT
1490 DATA WITNESS,ZEUGE,TIDY UP,AUFRAEUMEN,ADMIT,ZUGEBEN,GUILTY,SCHULDIG
1500 DATA HOPELESS,HOFFNUNGSLOSS,CHANGE,SICH UMZIEHEN,OFFENDER,STRAFFAELLIGER
1510  DATA 
*/ });
