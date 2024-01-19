/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem behavior - Behavior Profiles (Verhaltensprofile)
2 rem (c) Reinhard Bitter
3 rem
10 MODE 0:LOCATE 2,12:PRINT"Verhaltensprofile":LOCATE 2,13:PRINT STRING$(17,45)
20 FOR i=1 TO 2000:NEXT i
30 MODE 1:LOCATE 12,2:PRINT"Verhaltensprofile":LOCATE 12,3:PRINT STRING$(17,45)
40 PRINT:PRINT
50 PRINT"In diesem Programm werden Sie mit 190   Aussagen konfrontiert. Sie muessen sich bei jeder Aussage entscheiden:"
60 PRINT:PRINT"  1=Zustimmung    2=Ablehnung"
70 PRINT:PRINT"Nach Beendigung aller Aussagen errechnetder Computer Ihr persoenliches Ver-     haltensprofil und stellt dies an Hand"
80 PRINT"einer Grafik dar. Danach erhalten Sie   die Erklaerung zu Ihrem Profil. Diese   koennen Sie sich auch auf einen Drucker ausgeben lassen."
90 LOCATE 1,23:PRINT"    Programmiert von Reinhard Bitter"
100 PRINT:LOCATE 10,25:PRINT"Weiter bitte eine Taste"
110 a$=INKEY$:IF a$="" THEN 110
120 MODE 1:LOCATE 1,12:PRINT"Ich lese die Daten ein, bitte warten...."
130 DIM v$(190),an(50),p(50),a(50),c(50),pp(50),ab(50),cc(50),na$(50)
140 RESTORE 2210
150 FOR i=1 TO 190
160 READ v$(i)
170 NEXT i
180 MODE 1:LOCATE 8,10:PRINT"1 - Start der Aussagen":LOCATE 8,12:PRINT"2 - drucken der Aussagen"
190 LOCATE 8,15:PRINT"Bitte waehlen Sie"
200 a$=INKEY$:IF a$="" THEN 200
210 IF a$="1" THEN 240
220 IF a$="2" THEN 4110
230 GOTO 200
240 MODE 1:LOCATE 3,12:PRINT"Wieviel Personen wollen teilnehmen ?"
250 LOCATE 20,14:INPUT an
260 FOR i=1 TO an
270 MODE 1:LOCATE 5,12:PRINT"Bitte den Namen der";i;". Person"
280 LOCATE 5,14:INPUT na$(i)
290 NEXT i
300 MODE 1::aa=1
310 FOR aa=1 TO an
320 FOR i=1 TO 190
330 MODE 1
340 LOCATE 11,6:PRINT na$(aa):LOCATE 11,8:PRINT"Aussage Nr.";i
350 LOCATE 1,10:PRINT v$(i)
360 LOCATE 3,24:PRINT"1 - Zustimmung       2 - Ablehnung"
370 a$=INKEY$:IF a$="" THEN 370
380 IF a$="1" THEN 440
390 IF a$="2" THEN 410
400 GOTO 370
410 NEXT i
420 NEXT aa
425 CLEAR INPUT
430 GOTO 540
440 IF i=1 OR i=5 OR i=7 OR i=11 OR i=12 OR i=16 OR i=20 OR i=22 OR i=25 OR i=25 OR i=31 OR i=32 OR i=33 OR i=35 OR i=36 OR i=37 OR i=39 OR i=40 OR i=45 OR i=47 OR i=49 OR i=51 THEN p(aa)=p(aa)+1:GOTO 410
450 IF i=53 OR i=54 OR i=56 OR i=57 OR i=59 OR i=64 OR i=65 OR i=67 OR i=68 OR i=72 OR i=73 OR i=74 OR i=75 OR i=77 OR i=85 OR i=88 OR i=95 OR i=97 OR i=101 OR i=102 OR i=104 OR i=106 OR i=108 THEN p(aa)=p(aa)+1:GOTO 410
460 IF i=117 OR i=119 OR i=120 OR i=121 OR i=125 OR i=128 OR i=132 OR i=134 OR i=137 OR i=139 OR i=141 OR i=144 OR i=145 OR i=149 OR i=155 OR i=165 OR i=179 OR i=183 OR i=188 THEN p(aa)=p(aa)+1:GOTO 410
470 IF i=3 OR i=8 OR i=9 OR i=13 OR i=15 OR i=17 OR i=18 OR i=19 OR i=21 OR i=23 OR i=29 OR i=41 OR i=42 OR i=43 OR i=46 OR i=50 OR i=55 OR i=58 OR i=62 OR i=66 OR i=70 OR i=79 OR i=83 OR i=89 THEN a(aa)=a(aa)+1:GOTO 410
480 IF i=93 OR i=100 OR i=105 OR i=110 OR i=111 OR i=113 OR i=123 OR i=130 OR i=133 OR i=136 OR i=138 OR i=140 OR i=142 OR i=146 OR i=152 OR i=159 OR i=161 OR i=164 OR i=166 OR i=167 THEN a(aa)=a(aa)+1:GOTO 410
490 IF i=168 OR i=169 OR i=171 OR i=174 OR i=175 OR i=176 OR i=184 OR i=185 OR i=189 OR i=190 THEN a(aa)=a(aa)+1:GOTO 410
500 IF i=27 OR i=52 OR i=92 OR i=126 OR i=153 OR i=156 OR i=162 THEN p(aa)=p(aa)+0.5:GOTO 410
510 IF i=4 OR i=87 OR i=107 OR i=116 OR i=154 OR i=170 THEN a(aa)=a(aa)+0.5:GOTO 410
520 IF i=71 OR i=118 OR i=131 OR i=135 OR i=180 THEN c(aa)=c(aa)+0.5:GOTO 410
530 c(aa)=c(aa)+1:GOTO 410
540 MODE 1:LOCATE 7,12:PRINT"Ich rechne,bitte warten.....":f=0
550 FOR aa=1 TO an
560 FOR i=1 TO 66.5 STEP 0.5
570 IF i<=17 THEN f=f+0.29:GOTO 650
580 IF i>17 AND i<=19 THEN f=f+2.5:GOTO 650
590 IF i>19 AND i<=28 THEN f=f+1.67:GOTO 650
600 IF i>28 AND i<=33 THEN f=f+1:GOTO 650
610 IF i>33 AND i<=35 THEN f=f+2.5:GOTO 650
620 IF i>35 AND i<=42 THEN f=f+0.71:GOTO 650
630 IF i>42 AND i<=54 THEN f=f+0.42:GOTO 650
640 IF i>54 THEN f=f+0.4
650 IF p(aa)=i THEN pp(aa)=f:GOTO 670
660 NEXT i
670 f=0
680 NEXT aa
690 FOR aa=1 TO an
700 FOR i=1 TO 57 STEP 0.5
710 IF i<=24 THEN f=f+0.21:GOTO 780
720 IF i>24 AND i<=28 THEN f=f+1.25:GOTO 780
730 IF i>28 AND i<=30 THEN f=f+2.5:GOTO 780
740 IF i>30 AND i<=42 THEN f=f+1.67:GOTO 780
750 IF i>42 AND i<=44 THEN f=f+2.5:GOTO 780
760 IF i>44 AND i<=51 THEN f=f+0.71:GOTO 780
770 IF i>51 THEN f=f+0.83 
780 IF a(aa)=i THEN ab(aa)=f:GOTO 800
790 NEXT i
800 f=0
810 NEXT aa
820 FOR aa=1 TO an
830 FOR i=1 TO 57.5 STEP 0.5
840 IF i<=18 THEN f=f+0.28:GOTO 920
850 IF i>18 AND i<=22 THEN f=f+1.25:GOTO 920
860 IF i>22 AND i<=26 THEN f=f+2.5:GOTO 920
870 IF i>26 AND i<=27 THEN f=f+5:GOTO 920
880 IF i>27 AND i<=29 THEN f=f+2.5:GOTO 920
890 IF i>29 AND i<=33 THEN f=f+1.25:GOTO 920
900 IF i>33 AND i<=39 THEN f=f+1.67:GOTO 920
910 IF i>39 THEN f=f+0.27
920 IF c(aa)=i THEN cc(aa)=f:GOTO 940
930 NEXT i
940 f=0
950 NEXT aa
960 FOR aa=1 TO an
970 p(aa)=0:a(aa)=0:c(aa)=0
980 NEXT aa
990 FOR aa=1 TO an
1000 p(aa)=INT((pp(aa)+0.05)*2/10):a(aa)=INT((ab(aa)+0.05)*2/10):c(aa)=INT((cc(aa)+0.05)*2/10)
1010 NEXT aa
1020 MODE 2:WINDOW #1,31,80,4,25:PAPER #1,1:PEN #1,0
1030 B$="Eltern-Ich":c$="Erwachsenen-Ich":d$="Kindheits-Ich"
1040 LOCATE 31,1:PRINT"Ihr Verhaltensprofil":LOCATE 31,2:PRINT STRING$(20,45)
1050 LOCATE 3,4:PRINT"P-Ich     A-Ich     C-Ich"
1060 ii=1
1070 FOR i=6 TO 21
1080 LOCATE 1,i:PRINT MID$(b$,ii,1):LOCATE 11,i:PRINT MID$(c$,ii,1):LOCATE 21,i:PRINT MID$(d$,ii,1)
1090 ii=ii+1
1100 NEXT i
1110 FOR aa=1 TO an
1120 pt=25-p(aa):at=25-a(aa):ct=25-c(aa)
1130 WINDOW #2,4,6,pt,25:PAPER #2,1
1140 WINDOW #3,14,16,at,25:PAPER #3,1
1150 WINDOW #4,24,26,ct,25:PAPER #4,1
1160 CLS #2:CLS #3:CLS #4:CLS #1
1170 PRINT #1,na$(aa):PRINT #1
1180 GOSUB 1320
1190 PRINT #1:PRINT #1,"Weiter bitter eine Taste"
1200 a$=INKEY$:IF a$="" THEN 1200
1210 CLEAR INPUT
1220 MODE 2:LOCATE 10,10:PRINT"1 - Verhaltensprofil drucken"
1230 LOCATE 10,12:PRINT"2 - weiter":LOCATE 10,15:PRINT"Bitte waehlen Sie"
1240 a$=INKEY$:IF a$="" THEN 1240
1250 IF a$="1" THEN t=8:GOSUB 1330
1260 IF a$="2" THEN 1280
1270 GOTO 1240
1280 NEXT aa
1290 MODE 0:LOCATE 7,12:PRINT"E N D E"
1300 FOR i=1 TO 2000:NEXT i
1310 END
1320 t=1
1330 IF ab(aa)>pp(aa) AND cc(aa)>pp(aa) THEN 1390
1340 IF pp(aa)>cc(aa) AND ab(aa)>cc(aa) THEN 1540
1350 IF ab(aa)>pp(aa) AND ab(aa)>cc(aa) THEN 1670
1360 IF pp(aa)>ab(aa) AND cc(aa)>ab(aa) THEN 1790
1370 IF cc(aa)>pp(aa) AND cc(aa)>ab(aa) THEN 1910
1380 IF pp(aa)>ab(aa) AND pp(aa)>cc(aa) THEN 2050
1390 PRINT #t,"     Geringes P-Ich  Hohes A-Ich  Hohes C-Ich     "
1400 PRINT #t,"     ----------------------------------------"
1410 PRINT #t,"Wohl die produktivste Kombination. Der Charme des"
1420 PRINT #t,"O.K.-C-Ichs bringt Herzlichkeit, Intuition, und"
1430 PRINT #t,"Kreativitaet ein und verbindet sich mit einem"
1440 PRINT #t,"starken A-Ich. Wenn strafendes P-Ich kaum vorkommt"
1450 PRINT #t,"und Wertvorstellungen im A-Ich gruenden ist der"
1460 PRINT #t,"Weg frei fuer Vernunft."
1470 PRINT #t:PRINT #t
1480 PRINT #t,"Ihr P-Wert:";CINT(pp(aa));"% (Eltern-Ich-Zustand)"
1490 PRINT #t
1500 PRINT #t,"Ihr A-Wert:";CINT(ab(aa));"% (Erwachsenen-Ich-Zustand)"
1510 PRINT #t
1520 PRINT #t,"Ihr C-Wert:";CINT(cc(aa));"% (Kindheits-Ich-Zustand)"
1530 RETURN
1540 PRINT #t,"     Hohes P-Ich  Hohes a-Ich  Geringes C-Ich     "
1550 PRINT #t,"     ----------------------------------------     "
1560 PRINT #t,"Leichter Wechsel zwischen P und A-Ich moeglich."
1570 PRINT #t,"Stark Leistungsorientiert. Der Verstand wird von"
1580 PRINT #t,"Forderungen des P-Ich beherrscht. Erfahrungen und"
1590 PRINT #t,"Erziehung sind Grundlagen fuer den Erfolg. Ent-"
1600 PRINT #t,"scheidend ist haeufig, ob zwischen der eigenen"
1610 PRINT #t,"Meinung und Tatsachen unterschieden werden kann."
1620 PRINT #t:PRINT #t
1630 PRINT #t,"Ihr P-Wert:";CINT(pp(aa));"% (Eltern-Ich-Zustand)":PRINT #t
1640 PRINT #t,"Ihr A-Wert:";CINT(ab(aa));"% (Erwachsenen-Ich-Zustand)":PRINT #t
1650 PRINT #t,"Ihr C-Wert:";CINT(cc(aa));"% (Kindheits-Ich-Zustand)"
1660 RETURN
1670 PRINT #t,"  Geringes P-Ich  Hohes A-Ich  Geringes C-Ich    "
1680 PRINT #t,"  -------------------------------------------    "
1690 PRINT #t,"Diesen Menschen begegnet man nicht haeufig. Er"
1700 PRINT #t,"ist sach- und tatsachenorientiert. Sein Verhalten"
1710 PRINT #t,"duerfte sich haeufig wiederholen und langweilig"
1720 PRINT #t,"sein. Seine Beziehungen sind steril und lang-"
1730 PRINT #t,"weilig und ohne Gefuehl. Er hat Schwierigkeiten"
1740 PRINT #t,"bei der Zusammenarbeit mit anderen.":PRINT #t:PRINT #t
1750 PRINT #t,"Ihr P-Wert:";CINT(pp(aa));"% (Eltern-Ich-Zustand)":PRINT #t
1760 PRINT #t,"Ihr A-Wert:";CINT(ab(aa));"% (Erwachsenen-Ich-Zustand)":PRINT #t
1770 PRINT #t,"Ihr C-Wert:";CINT(cc(aa));"% (Kindheits-Ich-Zustand)"
1780 RETURN
1790 PRINT #t,"    Hohes P-Ich  Geringes A-Ich  Hohes C-Ich     "
1800 PRINT #t,"    ----------------------------------------     "
1810 PRINT #t,"Mit diesen Menschen laesst sich schwer zusammen-"
1820 PRINT #t,"abeiten. Er ist fleissig. Er ist heute mora-"
1830 PRINT #t,"listisch, wertend und autoritaer und moechte mor-"
1840 PRINT #t,"gen geliebt, beklatscht und umhegt werden. Wegen"
1850 PRINT #t,"seiner Hass-Liebe ist es schwer, mit ihm zusam-"
1860 PRINT #t,"menzuarbeiten.":PRINT #t:PRINT #t
1870 PRINT #t,"Ihr P-Wert:";CINT(pp(aa));"% (Eltern-Ich-Zustand)":PRINT #t
1880 PRINT #t,"Ihr A-Wert:";CINT(ab(aa));"% (Erwachsenen-Ich-Zustand)":PRINT #t
1890 PRINT #t,"Ihr C-Wert:";CINT(cc(aa));"% (Kindheits-Ich-Zustand)"
1900 RETURN
1910 PRINT #t,"   Geringes P-Ich  Geringes A-Ich  Hohes C-Ich   "
1920 PRINT #t,"   -------------------------------------------   "
1930 PRINT #t,"Eine vom C-Ich bestimmte Person kann ausser-"
1940 PRINT #t,"ordentlich anziehend sein. Solche Menschen blue-"
1950 PRINT #t,"hen in verkaeufertaetigkeiten oder in Organisa-"
1960 PRINT #t,"tionen, in denen es auf persoenlichen Charme und"
1970 PRINT #t,"auf Intuition ankommt. Nicht gut geeignet fuers"
1980 PRINT #t,"Management. Er trifft seine Entscheidungen im "
1990 PRINT #t,"C-Ich und sie sind oft von der Phantasie ver-"
2000 PRINT #t,"zerrt.":PRINT #t:PRINT #t
2010 PRINT #t,"Ihr P-Wert:";CINT(pp(aa));"% (Eltern-Ich-Zustand)":PRINT #t
2020 PRINT #t,"Ihr A-Wert:";CINT(ab(aa));"% (Erwachsenen-Ich-Zustand)":PRINT #t
2030 PRINT #t,"Ihr C-Wert:";CINT(cc(aa));"% (Kindheits-Ich-Zustand)"
2040 RETURN
2050 PRINT #t,"   Hohes P-Ich  Geringes A-Ich  Geringes C-Ich    "
2060 PRINT #t,"   -------------------------------------------    "
2070 PRINT #t,"Dieses Profil kommt haeufig in Organisationen vor,"
2080 PRINT #t,"die nach dem Motto verfahren: 'Das haben wir schon"
2090 PRINT #t,"immer so gemacht.' Der Vorgesetzte foerdert Un-"
2100 PRINT #t,"selbstaendigkeit, weil er seine Mitarbeiter wie"
2110 PRINT #t,"Kinder behandelt. Er ist autoritaer und glaubt das"
2120 PRINT #t,"die 'Menschen keine Verantwortung wollen' und dass"
2130 PRINT #t,"sie 'nur arbeiten, um fuer ihre Freizeit Geld zur"
2140 PRINT #t,"Verfuegung zu haben'. Heute ist dieses Profil"
2150 PRINT #t,"hoffnungslos veraltet."
2160 PRINT #t:PRINT #t
2170 PRINT #t,"Ihr P-Wert:";CINT(pp(aa));"% (Eltern-Ich-Zustand)":PRINT #t
2180 PRINT #t,"Ihr A-Wert:";CINT(ab(aa));"% (Erwachsenen-Ich-Zustand)":PRINT #t
2190 PRINT #t,"Ihr C-Wert:";CINT(cc(aa));"% (Kindheits-Ich-Zustand)":PRINT #t
2200 RETURN
2210 DATA "In der Industrie muss man konkurrenz-   faehig sein, wenn man Erfolg haben will."
2220 DATA "Ich kann nicht gut Witze erzaehlen."
2230 DATA "Ich habe gelernt,aufgeschlossen zu sein,mich mit meinem Koerper und Geschlecht  wohlzufuehlen und keine Angst vor In-   timitaet zu haben."
2240 DATA "Manchmal fuehle ich mich einsam und weitweg von allen anderen Menschen." 
2250 DATA "Ich kritisiere gern und schiebe die     Schuld oft auf andere."
2260 DATA "Es faellt mir schwer,meine Diaet zu hal-ten,mir das Rauchen abzugewoehnen usw.."
2270 DATA "Streitkraefte lassen sich nur mit       strengster Disziplin fuehren.Wenn es    hart auf hart geht,wird man an der Dis- ziplin die erwachsenen Maenner von den  weichen Knaben unterscheiden koennen."
2280 DATA "Wenn religioese Glaubenssaetze meiner   Vernunft zuwiderlaufen,folge ich lieber meinen eigenen Ideen."
2290 DATA "Ich habe wohl mehr Interessen und Hob-  bies als die meisten meiner Mitmenschen."
2300 DATA "Ich scheine mehr Freunde zu haben als   andere."
2310 DATA "Es gibt zwei Arten von Menschen - die   einen machen das Problem noch groesser, die anderen tragen zu seiner Loesung bei"
2320 DATA "Die Gesellschaft waere sicherlich besserbedient,wenn die Menschen nach der Regelder 'Goldenen Mitte' leben wuerden."
2330 DATA "Meine Eltern gingen regelmaessig zur    Kirche,haben mir aber keine Vorwuerfe   gemacht,als ich meine Entscheidung traf."
2340 DATA "Mir wird oft gesagt,dass ich zu viel    Fremdwoerter benutze."
2350 DATA "Meine Eltern haben mich dazu ermuntert  ein 'kritisches Urteilsvermoegen' zu    entwickeln."
2360 DATA "Ich fahre oefter aus der Haut als mir   lieb ist. Hinterher tut es mir immer    leid."
2370 DATA "Ich erprobe gern neue Ansaetze."
2380 DATA "Meine Eltern haben dem Vaterland ge-    dient. Ich finde das in mancher Hinsichtgut,in anderer Hinsicht nicht."
2390 DATA "Haeufig wenden sich andere an mich um   Rat und Beratung."
2400 DATA "Ich kann andere gut herabsetzen,besser  als mir lieb ist."
2410 DATA "Meine Eltern haben mich gelehrt,die     Ideen anderer zu akzeptieren,auch dann, wenn ich anderer Meinung bin."
2420 DATA "Es ist Unsinn,wenn man behauptet,dass   meine Persoenlichkeit schon geformt war,als ich sechs Jahre alt wurde."
2430 DATA "Meine Eltern haben mich immer dazu er-  muntert,meine Gedanken offen auszu-     sprechen. Ich brauche keine Angst zu ha-ben,laecherlich gemacht zu werden."
2440 DATA "Meiner Meinung nach sind Gefuehle sehr  viel wichtiger,als die meisten Menschen annehmen."
2450 DATA "Manchmal macht es mir Spass,jemanden beieiner Unkorrektheit zu erwischen."
2460 DATA "Ich habe es nicht gern,wenn man mich    liebt,aber manchmal geschieht es doch."
2470 DATA "Offen gesagt,ich fahre gern schnell,    schneller als die anderen."
2480 DATA "Rassenvorurteile haben auch etwas Gutes.Sie verhueten Mischehen."
2490 DATA "Manchmal kann ich mich sehr aufregen    oder auch riesig freuen."
2500 DATA "Es gibt Dinge,denen ich einfach nicht   widerstehen kann."
2510 DATA "Den meisten tut es nur gut,wenn sie zur Bundeswehr muessen."
2520 DATA "Ich glaube,allen wuerde es besser gehen,wenn es keinen Alkohol mehr gaebe."
2530 DATA "Es kommt vor,dass die Menschen unange-  nehme Dinge tun muessen,weil es zu ihremBesten ist."
2540 DATA "Meine Eltern haben mir mehr Lebensangst eingeimpft,als andere von ihren Eltern  mitbekommen haben."
2550 DATA "Wir koennten den moralischen Verfall un-serer Gesellschaft rueckgaengig machen, wenn die Menschen wieder in die Kirche  gingen."
2560 DATA "Mein Vater bzw. meine Mutter verlor mir gegenueber oefter die Beherrschung als  mir lieb war."
2570 DATA "Ich fuehle mich einfach sicherer,wenn   ich fuer einen Chef arbeite,der mir ein-deutige Anweisungen gibt."
2580 DATA "Der 'Laermpegel' bei uns zu Hause ist   meistens hoeher als mir lieb ist."
2590 DATA "Reicht man den Kommunisten den kleinen  Finger,nehmen sie gleich die ganze Hand."
2600 DATA "Mir wurde schon frueh beigebracht,dass  es sich niemals lohnt,das System selbst anzugreifen."
2610 DATA "Die Menschen scheinen keine Hemmungen zuhaben,mit ihren Problemen zu mir zu kom-men."
2620 DATA "Meine Eltern haben den Verstand mehr be-tont als das Gefuehl."
2630 DATA "Bei den meisten Problemen stellt ein    Kompromiss die beste Loesung dar."
2640 DATA "Ich gehoere zu den Menschen,denen es    schwer faellt,vom Tisch aufzustehen."
2650 DATA "Familien,die miteinander beten koennen, bleiben auch zusammen."
2660 DATA "Ich stehe der Welt mit Gleichmut gegen- ueber,nicht mit Angst,Furcht oder Zynis-mus."
2670 DATA "Auf lange Sicht gesehen,gibt es nur eineMoeglichkeit: Ein Mann kann nur eine    Frau haben."
2680 DATA "Die Macht der Liebe dreht die Welt."
2690 DATA "Dies ist mein Land,ob im Recht oder im  Unrecht. Was die Wissenschaftler sagen, ist mir egal. Das ist die einzig ver-   nuenftige Position,die ein guter Patrioteinnehmen kann."
2700 DATA "Selbst wenn ich durch ein unbekanntes   Land reise,fuehle ich mich nur selten   unbehaglich oder frend."
2710 DATA "Ich verabscheue unterwuerfige 'Ja-Sager'."
2720 DATA "Ich traeume gerne in den Tag hinein,mehrals andere."
2730 DATA "Wenn die Gewinne nachlassen,braucht man einen starken und eisern durchgreifendenMann,um die Organisation wieder in die  richtige Richtung zu drehen."
2740 DATA "In einer schwierigen Lage ist eine      falsche Entscheidung besser als gar     keine."
2750 DATA "Ich gehoere mehr Verbaenden und Vereinenan als andere,die ich kenne."
2760 DATA "Eltern zeigen ihre Liebe zu ihren Kinderam besten,wenn sie auf strenge,konse-   quenten Verhaltensnormen bestehen."
2770 DATA "Irren ist menschlich,Vergeben ist goett-lich."
2780 DATA "Fuer mich sind Traenen kein Zeichen von Schwaeche."
2790 DATA "Meine Eltern hatten recht: Die Welt ist grausam. Je schneller man das begreift, desto besser."
2800 DATA "Die meisten Menschen scheinen das Leben nicht so leicht zu nehmen wie ich."
2810 DATA "Ich bin selbstbewusster als die meisten Menschen."
2820 DATA "Meine Eltern waren aufgeschlossen. Sie  konnten die Aenderungen akzeptieren,die sie in ihrer Umwelt wahrnahmen."
2830 DATA "Ich gebrauche gerne Modewoerter wie     'Image-Pflege','Das ist in oder out',   'Das ist echt gut!' etc."
2840 DATA "Meine Eltern haben sich nicht viel um   mich gekuemmert. Ich werde es mit meinenKindern besser machen."
2850 DATA "Einiges von dem,was die Kirche heute    sagt,halte ich einfach fuer laecherlich."
2860 DATA "Manchmal weine ich,ohne mich dessen zu  schaemen."
2870 DATA "Meine Eltern haben mich die Liebe zur   Heimat gelehrt. Ich wuenschte,ich       koennte auch allen anderen einimpfen,   wie wichtig das ist."
2880 DATA "Meine Eltern legten grossen Wert auf denGlauben an Gott und sonntaeglichen      Kirchgang."
2890 DATA "Ich eigne mich besser zum Gefolgsmann   als zum Fuehrer."
2900 DATA "Aus Erfahrung habe ich gelernt,dass man nicht effektiv fuehrt,wenn man die Men- schen nur kontrolliert. Effektiv fuehrenheisst anderen ermoeglichen,ihre eigenenStaerken zu maximieren."
2910 DATA "Ich kleide mich sehr sorgfaeltig,meis-  tens konservativ."
2920 DATA "Ich bin gerne Chef."
2930 DATA "Unser Land sollte ein starkes und       schlagkraeftiges Verteidigungssystem be-sitzen. Schliesslich will das jedes     andere Land auch."
2940 DATA "Ich bin Menschen gegenueber immer miss- trauisch."
2950 DATA "In meiner Familie ist es nicht ueblich, Gefuehle zur Schau zu stellen."
2960 DATA "Ich lache um eine angespannte Situation zu ueberwinden."
2970 DATA "Eines kann ich mit Bestimmheit von      meinen Eltern sagen,sie hatten sehr     festgefuegte Vorstellungen von richtig  und falsch."
2980 DATA "Ich freue mich das ganze Jahr ueber auf meinen Urlaub."
2990 DATA "Normalerweise denke ich erst ueber ein  Problem nach und plane ein Loesung, ehe ich Massnahmen ergreife."
3000 DATA "Es gibt Dinge,die ich einfach tun muss, auch wenn ich genau weiss,dass es       eigentlich nicht richtig ist."
3010 DATA "Meine Eltern haben das Leben wohl nie   begriffen."
3020 DATA "Ich fuehle mich oft so beschwingt,dass  ich huepfen und springen moechte."
3030 DATA "Ich glaube,dass es fuer die Gesundheit  des Einzelnen und der Organisation      wichtig ist,seine Gefuehle ausdruecken  zu koennen."
3040 DATA "Ich denke oft: 'Mir kann so etwas nicht passieren!'"
3050 DATA "Ich rege mich gern ueber Fuehrungs-     kraefte auf,die nicht versuchen neue    Problemloesungen zu finden oder sie zu  erproben."
3060 DATA "Wenn sich andere wohlfuehlen,fuehle auchich mich wohl."
3070 DATA "Es ist ausserordentlich wichtig immer   und ueberall ehrlich zu sein."
3080 DATA "Ganz sicher kann man nie sein. Viel-    leicht sind die USA tatsaechlich das    maechtigste Land der Welt,vielleicht    auch nicht."
3090 DATA "Ich weiss,dass die Faehigkeit zur Wahr- scheinlichkeitsabschaetzung fuer eine   gute Entscheidungsbildung grundlegend   ist."
3100 DATA "Manchmal fuehle ich mich tagelang       niedergeschlagen."
3110 DATA "Ich fahre gerne schnell."
3120 DATA "Wenn ich mich unterlegen fuehle,denke   ich stets daran,welch kleines Raedchen  ich im Weltgetriebe bin."
3130 DATA "Meine Ideen zugunsten von Uebereinstim- mung mit dem Chef zu opfern,ist nicht   gerade meine Vorstellung von gutem      Management."
3140 DATA "Ich bin sehr anfaellig fuer Impulsiv-   kaeufe."
3150 DATA "Schwache Menschen machen mich wuetend."
3160 DATA "Ich scheine mich mehr als andere von Ge-fuehlen beeinflussen zu lassen."
3170 DATA "Ich moechte gerne vorwaerts kommen.     Dieser Wunsch ist bei mir deutlicher    ausgepraegt als bei anderen."
3180 DATA "Meine Eltern haben mich immer mit meinenFreunden (Freundinnen) 'aufgezogen'."
3190 DATA "Ich fuehle mich in ungeordneten Situ-   ationen nicht wohl und versuche,ihnen   aus dem Wege zu gehen."
3200 DATA "Ich bleibe meistens ruhig,wenn andere   aggressiv werden oder ihre Aengste zei- gen."
3210 DATA "Wenn Sie sich von einem anderen alles   gefallen lassen,wird er sie nicht ach-  ten."
3220 DATA "Ich werde leicht ungeduldig,wenn ich mitunschluessigen Menschen zu tun haben,diekeine Entscheidungen treffen koennen."
3230 DATA "Ich besuche gerne Parties. Sie machen   mich beschwingt."
3240 DATA "Bei der Arbeit und in der Ehe verlasse  ich mich lieber auf die erprobten Me-   thoden."
3250 DATA "Einige Menschen schliessen ungern Kom-  promisse. Ich finde aber,dass sie die   beste Grundlage fuer eine gesunde Loe-  sung bieten."
3260 DATA "Wenn ich in die Ecke gedraengt werde,   kann man sich darauf verlassen,dass ich mich erbittert zur Wehr setze."
3270 DATA "Manchmal bin ich einfach nicht in der   Lage,mich mit Problemen zu befassen."
3280 DATA "In Ausschussitzungen uebernehme ich     gerne die Fuehrung."
3290 DATA "Wenn andere boese werden,regt mich das  sehr auf."
3300 DATA "Ich glaube,dass die Menschen oefters    ihre Gefuehle sprechen lassen sollten."
3310 DATA "Ich druecke gerne wieder die Schulbank."
3320 DATA "In meinem Arbeitsteam herrscht gegen-   seitiges Vertrauen. Das kommt aus ge-   teiltem Leid und geteilter Freud."
3330 DATA "Ich akzeptiere gerne Ungewoehnliches undAussergewoehnliches,mehr als die meistenMitmenschen."
3340 DATA "Ich habe auch schon gesagt: 'Ich habe   die Regeln nicht gemacht. Ich muss mich nur daran halten'."
3350 DATA "Ich habe immer mehr Rechnungen als ich  bezahlen kann."
3360 DATA "Den Menschen wuerde es besser gehen,wennsie die Notwendigkeit der Disziplin er- kennen wuerden,anstatt sich immer nach  dem leichteren Weg umzusehen."
3370 DATA "Der Schluessel zu einem guten Managementliegt in sorgfaeltiger Planung."
3380 DATA "Selbstmord ist immer einfach."
3390 DATA "Gefaengnisse werden wir immer brauchen. Der Mensch laesst sich nun einmal nicht aendern."
3400 DATA "Viel haeufiger als andere sage ich: 'Du sollst nie....''Du musst....','Es ist wichtig,dass...'."
3410 DATA "Kreative Menschen sind in den Organi-   sationen von heute Mangelware."
3420 DATA "Ich fuehle mich oft NICHT O.K.,ohne     einen besonderen Grund dafuer zu haben."
3430 DATA "Die erfolgreichen Manager von morgen    sind die,die gelernt haben,im Team zu   arbeiten."
3440 DATA "Ich bemuehe mich zuviel um Anerkennung  bei anderen."
3450 DATA "Politiker denken an das Wichtigste immerzuerst."
3460 DATA "Ich habe es gern,wenn Menschen mit ihrenProblemen zu mir kommen."
3470 DATA "Meine Eltern haben wohl mehr Lebensangstgehabt als andere."
3480 DATA "Menschen,die sich wie die Herren ueber  alles und jedes verhalten,mangelt es in-nerlich an Selbstvertrauen."
3490 DATA "Ich ziehe mich gerne zurueck,wenn ich inSchwierigkeiten gerate."
3500 DATA "Meine Kollegen haben keine Hemmungen,   meine Ideen anzufechten."
3510 DATA "Ich vergleiche Preis und Leistung sehr  sorgfaeltig,ehe ich ein Auto kaufe."
3520 DATA "Meine Eltern waren strenger als andere. Sie wurden von ihren Grosseltern genau- so erzogen,wie sie mich erzogen."
3530 DATA "Ich versuche meistens,ein ausgewogenes  Urteil abzugeben."
3540 DATA "Man wendet sich um Rat eher an mich als an andere."
3550 DATA "Ich bekomme anscheinend immer das       kleinste Stueck vom Kuchen."
3560 DATA "Ich kann mich daran erinnern,dass meine Eltern meine Ideen und Wuensche fast nielaecherlich gemacht oder darueber ge-   spottet haben."
3570 DATA "Eigentlich halte ich eine Zensur fuer   schlecht. Dem Fernsehen taete sie aber  gut. Es werden zu viele Gewalttaetigkei-ten gezeigt."
3580 DATA "Ich suche gern nach kreativen Loesungs- moeglichkeiten,nicht so sehr nach kon-  ventionellen."
3590 DATA "Ich gebe gern schnelle automatische Ur- teile ab,mehr als meine Mitmenschen."
3600 DATA "Ich lese wohl mehr als die meisten Men- schen in meinem Bekanntenkreis."
3610 DATA "Es ist vielleicht nicht der sachliche   Weg,wuetend zu werden,aber es hilf. Es  bringt Ergebnisse."
3620 DATA "Als Kind habe ich gerne gelesen. Es     machte mir Spass,Dinge selbststaendig   herauszufinden."
3630 DATA "Es aergert mich,wenn ich wuetend und    streitsuechtig werde."
3640 DATA "Mir scheint,dass in dieser Welt jeder   das bekommt,was er verdient."
3650 DATA "Es ist ausserordentlich wichtig,dass dieFuehrenden nie den Ueberblick ueber die Situation verlieren."
3660 DATA "Ich habe eindeutige Vorstellungen von   richtig und falsch. Ich bleibe jedoch   neuen Ideen gegenueber aufgeschlossen."
3670 DATA "Ich scheine haeufig zu versagen."
3680 DATA "Ich habe sehr viel fuer Tiere uebrig."
3690 DATA "Um sich im Berufs- und Geschaeftsleben  durchsetzen zu koennen,braucht man      Ellenbogen."
3700 DATA "Es gibt Augenblicke,in denen ich mich   dabei ertappe,dass ich zu laut oder zu  schnell spreche."
3710 DATA "Manchmal moechte ich gerne alleine sein,ohne Menschen um mich herum."
3720 DATA "Ich kann sachlich und aufmerksam blei-  ben,wenn alle anderen sich von ihren    Emotionen steuern lassen."
3730 DATA "Wenn meine Eltern strenger gewesen wae- ren,waere ich im Leben weitergekommen."
3740 DATA "Manchmal werde ich von meinen Gefuehlen fuer meine Familie ueberwaeltigt."
3750 DATA "Ehrlichkeit wird immer belohnt."
3760 DATA "Wenn mein Vorgesetzter mich tadelt,ver- spuere ich NICHT O.K.-Gefuehle und ziehemich meistens in mich zurueck."
3770 DATA "Ich bemitleide mich oft selbst."
3780 DATA "Meine Gefuehle beeinflussen mein Ver-   halten staerker,als mir lieb ist."
3790 DATA "Obwohl Kompromissstrategien wie Handeln und Verhandeln durchaus ihren Nutzen    haben koennen,kuemmere ich mich lieber  um die zugrundeliegenden Ursachen und   verspreche,eine Loesung zu finden."
3800 DATA "Im Urlaub wuensche ich mir immer,nie    mehr nach Hause zurueck zu muessen."
3810 DATA "Selbst bei grosser Wut bleibe ich       aeusserlich ruhig."
3820 DATA "Manchmal brauche ich zu lange,ehe ich   mich zu etwas entschliessen kann. Es istschwer in unserer Zeit optimistisch zu  sein."
3830 DATA "Es ist mir lieber hinter einem Fuehren- den zu stehen,als selbst zu fuehren."
3840 DATA "Da sich negative Ergebnisse manchmal alswichtiger erweisen koennen als positive,versuche ich dem Versagen auf den Grund zu gehen."
3850 DATA "Einiges was wir im Buero tun muessen,isteinfach laecherlich."
3860 DATA "Ich bin meistens in der Lage,meine Auf- geschlossenheit gegenueber den Ideen an-derer zu wahren,auch wenn sie mit den   meinigen nich uebereinstimmen."
3870 DATA "Ich sehe die Welt wohl gelassener und   zuversichtlicher als die meisten Men-   schen."
3880 DATA "Ich finde es interessant,festzustellen, was hinter den Worten der Menschen      liegt."
3890 DATA "Ich bemuehe mich um meine Selbstentfal- tung und Weiterbildung. Ich begruesse   neue Seminare,Kurse etc."
3900 DATA "Unkooperative Menschen machen mich      wuetend."
3910 DATA "Es ist oft schwierig,eine unabhaengige  Denkweise beizubehalten,wenn man sich   damit im Widerspruch zur Mehrheit befin-det."
3920 DATA "Ich bekomme meinen Willen nicht so oft, wie ich es gerne haette."
3930 DATA "Ich glaube,dass Gefuehle die Grundlage  fuer die meisten Entscheidungen im Lebenbilden,auch wenn ich damit anderer An-  sicht bin als die meisten Menschen."
3940 DATA "Ich bin davon ueberzeugt,dass die Ge-   fuehle und Wertvorstellungen eines Men- schen sehr wichtig sind."
3950 DATA "Wenn ich mich mit einem Problem be-     schaeftige,versuche ich zuerst,alle not-wendigen Fakten zu sammeln."
3960 DATA "Meine Eltern haben dafuer gesorgt,dass  wir als Kinder gerne gelesen haben und  uns eine klare Denkweise angewoehnten."
3970 DATA "Meine Eltern waren herzliche und freud- liche Menschen."
3980 DATA "Ich neige mehr als andere dazu,mich     selbst zu bemitleiden."
3990 DATA "Sollen die anderen doch von Blume zu    Blume flattern - ich bin mehr fuer die  konservative Seite."
4000 DATA "So etwas wie einen gerechten oder heili-gen Krieg gibt es nicht."
4010 DATA "Oft finde ich mich mitten in einem Prob-lem wieder und - frage mich,wie ich 'da bloss hineingeraten bin'."
4020 DATA "Was ich will,das will ich."
4030 DATA "In unserer Organisation haben wir uner  anderem folgendes Problem: Die Menschen haben nicht den Mut zu ihren Ueberzeu-  gungen zu stehen."
4040 DATA "Eine gute Fragetechnik ist grundlegend  fuer ein gesundes Management."
4050 DATA "Mehr als andere Menschen schaue ich michnach neuen Forschungsergebnissen,neuen  Ideen,neuen Richtungen um."
4060 DATA "Es faellt mir schwer,mein Konto hoch zu ueberziehen."
4070 DATA "Ich bin vertrauenseliger als der Si-    tuation angebracht waere."
4080 DATA "Eine ueberragende Fuehrungspersoenlich- keit ist besser als zehn Ausschuesse."
4090 DATA "Ich habe oft eine andere Meinung als    meine Mitmenschen. Ich denke wohl       selbststaendiger als die meisten."
4100 DATA "Die Ziele des Einzelnen und die Ziele   der Organisation muessen nicht unbedingtin Widerspruch zueinander stehen."
4110 MODE 0:LOCATE 4,12:PRINT"D R U C K E R"
4120 FOR i=1 TO 190
4130 PRINT #8,"Aussage Nr.";i:PRINT #8,"---------------"
4140 WIDTH 40:PRINT #8,v$(i)
4150 PRINT #8:PRINT #8,"   + Zustimmung       - Ablehnung"
4160 PRINT #8:PRINT #8:PRINT #8
4170 NEXT i
4180 GOTO 180
*/ });
