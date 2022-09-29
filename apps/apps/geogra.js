/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem gegra - Geographics (Erkunde)
2 rem (c) Prof.Dr.W.Voss, 1984
3 rem Modifications: uppercase input in 360,550,2550; delay in 430
4 rem
10 REM  ERDKUNDE
20 MODE 1
30  PRINT "PROGRAMM ZUR LERNKONTROLLE IM ERDKUNDE-":PRINT
40  PRINT TAB(14)"UNTERRICHT."
50 PRINT:PRINT TAB(9)"PROF.DR.W.VOSS, 1984"
60  PRINT : PRINT : PRINT : PRINT 
70  PRINT "  DIESES PROGRAMM FORDERT NACH ANGABE ": PRINT 
80  PRINT "  EINES LANDES DESSEN HAUPTSTADT AN": PRINT 
90 PRINT  "           UND UMGEKEHRT .": PRINT : PRINT 
100  PRINT "BEI ANDEREN VORGABEN VON DATEN IN DEN": PRINT 
110  PRINT "STATEMENTS 500 FF.UND ANWENDUNG VON N": PRINT 
120  PRINT "IN SATZ 160 KANN DAS PROGRAMM AUCH FUER":PRINT
130  PRINT "ANDERE ZWECKE VERWENDET WERDEN."
140 LOCATE 5,25: PRINT "(BITTE EINE TASTE DRUECKEN)!"
150 CALL &BB18
160 CLS
170 LOCATE 14,2: PRINT "M E N U :"
180 PLOT 0,360:DRAW 639,360
190 LOCATE 5,6: PRINT "(1)     A F R I K A"
200 LOCATE 5,8: PRINT "(2)     E U R O P A"
210 LOCATE 5,10:PRINT "(3)      A S I E N"
220 LOCATE 5,12:PRINT "(4)     SUEDAMERIKA"
230 LOCATE 5,14:PRINT "(5)     NORD-MITTELAMERIKA"  
240 LOCATE 5,16:PRINT "(6)     I N S E L N"
250 PLOT 0,50:DRAW 639,50
260 LOCATE 5,24: PRINT "(BITTE GEWUENSCHTES WAEHLEN) !"
270 W$=INKEY$:IF W$="" THEN 270
280 W=VAL(W$)
290 IF W>6 OR W<1 THEN 270
300 ON W GOSUB 3000,3100,3200,3300,3400,3500
310 DIM L$(N),S$(N)
320 FOR I=1 TO N:READ L$(I),S$(I): NEXT I
330 CLS
340  PRINT "SOLLEN LAENDER ODER HAUPTSTAEDTE VORGE-": PRINT 
350 PRINT  "GEBEN WERDEN (L/S) "
360 A$=upper$(INKEY$):IF A$<>"L" AND A$<>"S" THEN 360
370 C$="HAUPTSTADT"
380 IF A$="S" THEN C$="LAND": GOTO 410
390 GOSUB 2500:REM TEST
400  GOTO 430
410 FOR I=1 TO N:H$=L$(I):L$(I)=S$(I):S$(I)=H$: NEXT I
420 GOSUB 2500:REM TEST
430 FOR L=1 TO 1000/10: call &bd19: NEXT L
440 MODE 0
450 CLS: PRINT STRING$(20,"*")
460  PRINT "   PUNKTETABELLE"
470 PRINT STRING$(20,"*")     
480 PRINT "AUFGABEN :";TAB(15)Z: PRINT 
490 PRINT "GELOEST :"TAB(15)K: PRINT 
500 PRINT "UNGELOEST :"TAB(15)Z-K: PRINT 
510 PRINT : PRINT "PROZENTSATZ :";:PEN 14: PRINT TAB(15);INT((K/Z)*100);"%"
520 PEN 1:PRINT STRING$(20,"*")  
530 PRINT : PRINT 
540  PRINT : PRINT : PRINT "NOCHMAL (J ODER N)";
550 T$=upper$(INKEY$):IF T$<>"J" AND T$<>"N" THEN 550
560 IF T$="J" THEN CLEAR:MODE 1:RESTORE: GOTO 160
570 MODE 2
580 PRINT : PRINT "ENDE":END
1000 REM     *****     D A T E N     *****
1010 REM      ***     A F R I K A     ***
1020  DATA TUNESIEN,TUNIS , MAROKKO,RABAT , ALGERIEN,ALGIER
1030  DATA LIBYEN,TRIPOLIS , AEGYPTEN,KAIRO , WESTSAHARA,AAIUN
1040  DATA MAURETANIEN,NOUAKCHOTT , MALI,BAMAKO , NIGER,NIAMEY
1050  DATA TSCHAD,N'DJAMENA , SUDAN,EL-KHARTUM , AETHIOPIEN,ADDIS ABEBA
1060  DATA SENEGAL,DAKAR , OBERVOLTA,OUAGADOUGOU , GAMBIA,BANJUL
1070  DATA NIGERIA,LAGOS , GUINEA-BISSAU,BISSAU , GUINEA,CONAKRY
1080  DATA DJIBOUTI,DJIBOUTI , KAMERUN,YAOUNDE , BENIN,PORTO NOVO
1090  DATA SOMALIA,MOGADISCHO , ZENTRALAFRIKANISCHE REPUBLICK,BANGUI , GHANA,ACCRA
1100  DATA TOGO,LOME , ELFENBEINKUESTE,ABIDJAN , SIERRA LEONE,FREETOWN
1110  DATA LIBERIA,MONROVIA , ZAIRE,KINSHASA , KENIA,NAIROBI , UGANDA,KAMPALA
1120  DATA KONGO,BRAZZAVILLE , GABUN,LIBREVILLE , AEQUATORIAL GUINEA,MALABO
1130  DATA TANSANIA,DODOMA , RWANDA,KIGALI ,BURUNDI,BUJUMBURA 
1140  DATA ANGOLA,LUANDA , SAMBIA,LUSAKA , MALAWI,LILONGWE
1150  DATA MOCAMBIQUE,MAPUTO , MADAGASKAR,TANANARIVE , RHODESIEN,SALISBURY
1160  DATA SUEDWESTAFRIKA,WINDHUK , BOTSWANA,GABORONE , SUEDAFRIKA,KAPSTADT
1170  DATA SWAZILAND,MBABANE , LESOTHO,MASERU
1180 REM   ***   48  LAENDER IN AFRIKA ! !   ***
1300 REM      ***     E U R O P A     ***    
1310  DATA NORWEGEN,OSLO , FINNLAND,HELSINKI , UDSSR,MOSKAU
1320  DATA SCHWEDEN,STOCKHOLM , ISLAND,REYKJAVIK , GROSSBRITANNIEN,LONDON
1330  DATA DAENEMARK,KOPENHAGEN , DEUTSCHLAND,BONN , POLEN,WARSCHAU
1340  DATA DDR,OSTBERLIN , NIEDERLANDE,AMSTERDAM , BELGIEN,BRUESSEL
1350  DATA CSSR,PRAG , FRANKREICH,PARIS , OESTERREICH,WIEN 
1360  DATA UNGARN,BUDAPEST , RUMAENIEN,BUKAREST , SCHWEIZ,BERN
1370  DATA ITALIEN,ROM , JUGOSLAWIEN,BELGRAD , BULGARIEN,SOFIA
1380  DATA SPANIEN,MADRID , PORTUGAL,LISSABON , ALBANIEN,TIRANA
1390  DATA GRIECHENLAND,ATHEN
1400 REM   ***   25  LAENDER GEHOEREN ZU EUROPA   ***
1500 REM      ***      A S I E N      ***     
1510 DATA UDSSR,MOSKAU , CHINA,PEKING , MONGOLEI,ULAN BATOR
1520  DATA JAPAN,TOKIO , KOREA,SOUL , TUERKEI,ANKARA
1530  DATA IRAN,THERAN , AFGANISTAN,KABUL , PAKISTAN,ISLAMABAD
1540  DATA IRAK,BAGDAD , SYRIEN,DAMASKUS , ZYPERN,NICOSIA 
1550  DATA INDIEN,NEU DELHI , LIBANON,BEIRUT , ISRAEL,JERUSALEM  
1560  DATA JORDANIEN,AMMAN , SAUDIARABIEN,RIAD , NEPAL,KATMANDU
1570  DATA KUWAIT,KUWAIT , BIRMA,RANGUN , BHUTAN,THIMBU
1580  DATA BANGLADESCH,DAKKA , VEREIN.ARAB.EMIRATE,DUBAI , OMAN,MASKAT
1590  DATA VIETNAM,HANOI , LAOS,VIENTIANE , THAILAND,BANKOK
1600  DATA SUEDJEMEN,ADEN , PHILIPPINEN,MANILA , JEMEN,SAN'A
1610  DATA KAMBODSCHA,PHNOM PENH , SRI LANKA,COLOMBO , MALAYSIA,KUALA LUMPUR
1620 REM  ***   33  LAENDER GEHOEREN ZU ASIEN   ***    
1650 REM  ***   INSGESAMT  BIS JETZT 106 !!  ***
1700 REM      ***     SUEDAMERIKA      ***    
1710  DATA KOLUMBIEN,BOGOTA , VENEZUELA,CARACAS , GUAYANA,GEORGETOWN
1720  DATA SURINAM(GUAYANA),PARAMARIBO , BRASILIEN,BRASILIA , ECUADOR,QUITO
1730  DATA PERU,LIMA , BOLIVIEN,LA PAZ , CHILE,SANTIAGO
1740  DATA PARAGUAY,ASUNCION , ARGENTINIEN,BUENOS AIRES , URUGUAY,MONTEVIDEO
1750 REM  ***   12  LAENDER GEHOEREN ZU SUEDAMERIKA   ***     
1760 REM      ***     NORD-MITTELAMERIKA      ***   
1770  DATA GROENLAND,GODTHAB , KANADA,OTTAWA , USA,WASHINGTON
1780  DATA MEXIKO,MEXIKO , KUBA,HAVANNA , JAMAIKA,KINGSTON
1790  DATA BELIZE,BELMOPAN , GUATEMALA,GUATEMALA , HONDURAS,TEGUCIGALPA
1800  DATA EL SALVADOR,SAN SALVADOR , NICARAGUA,MANAGUA , COSTA RICA,S.JOSE
1810  DATA PANAMA,PANAMA , BAHAMAS,NASSAU
1820 REM  ***   14  LAENDER GEHOEREN ZU NORD-MITTELAMERIKA    ***  
1900 REM      ***     INSELN      *** 
1910 REM     **    MITTELMEERRAUM   **
1920  DATA KORSIKA,PARIS , SARDINIEN,ROM , MALLORCA,MADRID
1930  DATA SIZILIEN,ROM , MALTA,VALLETTA , KRETA,ATHEN 
1940  DATA ZYPERN,NICOSIA
1950 REM  *  7  INSELN IM MITTELMEERRAUM  
1960 REM     **    AMERIKA    **
1970  DATA BAHAMAS,NASSAU , KUBA,HAVANNA , JAMAIKA,KINGSTON
1980  DATA HAITI,PORT-AU-PRINCE , DOMINIKAN.REP.,SANTO DOMINGO , SUEDGEORGIEN,LONDON
1990  DATA BERMUDA INSELN,LONDON , GALAPAGOS INSELN,QUITO , FALKLANDINSELN,LONDON
2000 REM  *  9  INSELN BEI AMERIKA  *
2010 REM   *   DER REST   *
2020  DATA ISLAND,REYKJAVIK , KANARISCHE INSELN,MADRID , AZOREN,LISSABON
2030  DATA SRI LANKA,COLOMBO , MADAGASKAR,TANANARIVE , NEUSEELAND,WELLINGTON
2040  DATA PHILIPPINEN,MANILA , INDONESIEN,JAKARTA , MALAISIA,SINGAPUR
2050  DATA HAWAII,HONOLULU , TAIWAN,PEKING , BORNHOLM,KOPENHAGEN
2060  DATA RUEGEN,BONN , FEHMARN,BONN
2070 REM  * 14 INSELN ALS REST *
2080 REM  INSGESAMT  30 INSELN
2500 REM UP TEST
2510 CLS
2520  PRINT : INPUT "WIEVIELE ABFRAGEN : ";Z
2530 FOR I=1 TO Z
2540 R=INT(N*RND(1)+1)
2550  PRINT : PRINT L$(R):PRINT:PRINT:PRINT C$;" : ";: PRINT : PRINT : INPUT X$: x$=upper$(x$)
2560 IF X$=S$(R) THEN K=K+1:PRINT : PRINT TAB(10)"K O R R E C K T": PRINT : GOTO 2600
2570 PRINT:PRINT TAB(10)"FEHLER !": PRINT 
2580 PRINT:PRINT"DIE RICHTIGE ANTWORT LAUTET : "
2590 PRINT:PRINT TAB(10) S$(R): PRINT 
2600  NEXT I
2610  RETURN
3000 REM    ***    VORBEREITUNG FUER AFRIKA    ***
3010 N=48    :  REM   ANZAHL DER LAENDER (STAATEN) IN AFRIKA
3020 RETURN
3100 REM   ***    VORBEREITUNG FUER EUROPA    ***
3110 N=48
3120 DIM L$(N),S$(N)      
3130 FOR I=1 TO N:READ L$(I),S$(I): NEXT I  
3140 ERASE L$,S$
3150 N=25    :  REM   ANZAHL DER LAENDER IN EUROPA
3160 RETURN
3200 REM   ***    VORBEREITUNG FUER ASIEN    ***
3210 N=48+25  :REM AFRIKA UND EUROPA WERDEN EINGELESEN
3220 DIM L$(N),S$(N) 
3230 FOR I=1 TO N:READ L$(I),S$(I): NEXT I   
3240 ERASE L$,S$   
3250 N=33    :  REM   ANZAHL DER LAENDER (STAATEN) IN ASIEN
3260 RETURN
3300 REM   ***    VORBEREITUNG FUER SUEDAMERIKA    ***
3310 N=48+25+33  :REM AFRIKA,EUROPA UND ASIEN WERDEN EINGELESEN 
3320 DIM L$(N),S$(N)  
3330 FOR I=1 TO N:READ L$(I),S$(I): NEXT I 
3340 ERASE L$,S$ 
3350 N=12    :  REM   ANZAHL DER LAENDER (STAATEN) IN SUEDAMERIKA
3360 RETURN
3400 REM   ***    VORBEREITUNG FUER MITTEL-NORDAMERIKA   ***
3410 N=48+25+33+12  :REM AFRIKA,EUROPA,ASIEN UND SUEDAMERIKA
3420 DIM L$(N),S$(N)    
3430 FOR I=1 TO N:READ L$(I),S$(I): NEXT I   
3440 ERASE L$,S$   
3450 N=14    :  REM   ANZAHL DER LAENDER (STAATEN) IN NORD-MITTELAMERIKA
3460  RETURN
3500 REM   ***    VORBEREITUNG FUER (WICHTIGE) INSELN   ***    
3510 N=48+25+33+12+14  :REM AFRIKA,EUROPA,ASIEN,SUED-,NORD-,MITTELAMERIKA
3520 DIM L$(N),S$(N)   
3530 FOR I=1 TO N:READ L$(I),S$(I): NEXT I   
3540 ERASE L$,S$ 
3550 N=30    :  REM   ANZAHL DER (WICHTIGEN) INSELN
3560  RETURN
*/ });
