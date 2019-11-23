/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
996 rem doctor - Doctor
997 rem Andreas Garten
998 chain merge "basicode"
1000 A=255:GOTO 20:REM --GESUNDHEIT--
1010 ZE=VE:SP=HO
1020 FOR X=0 TO SP
1030 XX$=XX$+"*"
1040 SP$=SP$+" "
1050 NEXT X
1060 PRINT" ";LEFT$(XX$,SP-2)
1070 FOR X=0 TO ZE-3
1080 PRINT" *";LEFT$(SP$,SP-4);"*"
1090 NEXT X
1100 PRINT" ";LEFT$(XX$,SP-2)
1110 SR$="DER KLEINE HAUSARZT"
1120 VE=3:HO=SP/2-12:GOSUB 110:GOSUB 150
1130 VE=5:HO=SP/2-14:GOSUB 110
1140 PRINT"(eine Hilfe bei Erkrankungen)"
1150 VE=8:HO=4:GOSUB 110
1160 PRINT"Leiden Sie unter:"
1170 PRINT
1180 PRINT" * Halsschmerzen................(1)"
1190 PRINT" * Zahnschmerzen................(2)"
1200 PRINT" * Hautausschlag mit Fieber.....(3)"
1210 PRINT" * Schwindel oder Drehschwindel.(4)"
1230 PRINT" * Nackenschmerzen..............(5)"
1240 PRINT" * schneller Ermuedbarkeit......(6)"
1250 PRINT
1260 PRINT" * ENDE.........................(E)"
1300 PRINT:PRINT" *    Kennziffer:";
1310 GOSUB 210
1320 IF IN=69 THEN 950
1330 HV=IN-48:IF (HV<1) OR (HV>7) THEN 1310
1340 PRINT HV;:SD=10:GOSUB 450:GOSUB 100
1350 ON HV GOSUB 2000,3000,4000,5000,6000,7000
1360 VE=ZE:HO=SP-15:GOSUB 110
1370 PRINT">ENTER/RETURN<";
1380 GOSUB 210:GOSUB 100:GOTO 1060
1390 REM ------------------------------
1400 VE=ZE:HO=0:GOSUB 110
1410 SR$="Bitte nur mit J oder N antworten!":GOSUB 150
1420 SD=50:GOSUB 450
1430 VE=ZE:HO=0:GOSUB 110
1440 PRINT LEFT$(SP$,39);
1450 RETURN
1490 REM ------------------------------
1500 PRINT
1510 GOSUB 210
1520 IF IN=74 THEN AN=1:RETURN
1530 IF IN=78 THEN AN=0:RETURN
1540 GOSUB 120:V1=VE:H1=HO
1550 GOSUB 1400
1560 VE=V1:HO=H1:GOSUB 110
1570 GOTO 1510
1580 REM ----------------------------
1600 SR$="Behandlung:":PRINT:PRINT:GOSUB 150:PRINT:PRINT
1610 RETURN
1690 REM ---------------------------
1700 GOSUB 120:V1=VE:H1=HO
1710 HO=SP-10:VE=ZE:GOSUB 110
1720 SR$=">>":GOSUB 150
1730 SD=200:GOSUB 450
1740 VE=V1:HO=H1:GOSUB 110
1750 RETURN
1760 REM -----------------------------
1800 GOSUB 100:VE=INT(ZE/2)-3:HO=1:GOSUB 110
1810 PRINT"Ihr Problem kann auf diese Art und"
1820 PRINT"leider nicht erfasst werden."
1830 PRINT"Eine Konsultation mit Ihrem Hausarzt"
1840 PRINT"wird sicher besser sein als diese"
1850 PRINT"Ferndiagnose.":RETURN
1990 REM ==============================
2000 PRINT:PRINT"Haben Sie neben Ihren Halsschmerzen"
2010 PRINT"auch Fieber?"
2020 GOSUB 1500:IF AN=0 THEN 2200
2030 PRINT:PRINT"Haben Sie zwei oder mehrere der fol-"
2040 PRINT"genden Symptome:"
2050 PRINT" - Kopfschmerzen":PRINT" - Gliederschmerzen"
2060 PRINT" - Husten":PRINT" - Schnupfen"
2070 GOSUB 1500:IF AN=0 THEN 2200
2080 GOSUB 100:SR$="grippalen Infekt,"
2090 PRINT"Sie haben einen ";:GOSUB 150:PRINT
2100 PRINT"verursacht durch eine von ueber"
2110 PRINT"200 Virus-Arten. Infekte sind in den"
2120 PRINT"letzten Jahren haeufiger geworden.":PRINT
2130 SR$="Was Sie tun koennen:":GOSUB 150:PRINT
2140 PRINT:PRINT"viel Fruchtsaft trinken, abwehr-"
2150 PRINT"steigernde pflanzl. Mittel einnehmen"
2160 PRINT"(Apotheker fragen!)"
2170 PRINT"Bei hohem Fieber, Atemnot oder Herz-"
2180 PRINT"jagen den Hausarzt rufen!"
2190 RETURN
2200 PRINT:PRINT"Spueren Sie Schwellungen im Hals-"
2210 PRINT"bereich?"
2220 GOSUB 1500:IF AN=0 THEN 2540
2230 PRINT:PRINT"Haben Sie Schwellungen zwischen Ohr"
2240 PRINT"und Kieferwinkel?"
2250 GOSUB 1500:IF AN=0 THEN 2420
2260 GOSUB 100:SR$="Mumps (Ziegenpeter)"
2270 GOSUB 150:PRINT"ist moeglich!":PRINT
2280 PRINT"Diese ansteckende Kinderkrankheit kann"
2290 PRINT"auch juengere Erwachsene befallen."
2300 PRINT"Beide Ohrspeicheldruesen sind ge-"
2310 PRINT"schwollen und entzuendet. Schwillt nur"
2320 PRINT"eine Druese an, und haben Sie kein"
2330 PRINT"Fieber, kann ein Speichelstein die"
2340 PRINT"Druese verstopfen oder eine Tumor-"
2350 PRINT"erkrankung der Druese vorliegen."
2360 PRINT"Mumps-Vieren koennen auch eine sehr"
2370 PRINT"schmerzhafte Hodenentzuendung verur-"
2380 PRINT"sachen. - Wenden Sie sich an Ihren Hausarzt!"
2390 GOSUB 1600
2400 PRINT"schmerzlindernde fiebersenkende Zaepf-"
2410 PRINT"chen, viel trinken, Hormonpraeperate":RETURN
2420 GOSUB 100
2430 SR$="Rachen- oder Mandelentzuendung":GOSUB 150:PRINT
2440 PRINT:PRINT"Die Hals-Lymphknoten sind geschwollen."
2450 SR$="Anzeichen:":PRINT:GOSUB 150:PRINT:PRINT
2460 PRINT"Schluckbeschwerden, Roetung von Gaumen"
2470 PRINT"und Rachen. Bei einer Mandelentzuen-"
2480 PRINT"dung sind diese roetlich geschwollen,"
2490 PRINT"oft auch mit weiss-gelblichen Flecken."
2500 GOSUB 1600
2510 PRINT"Kraeutertees, Mineralwasser bei Ra-"
2520 PRINT"chenentzuendung, Antibiotika bei Man-"
2530 PRINT"delentzuendung":RETURN
2540 PRINT:PRINT"Haben Sie Schnupfen?"
2550 GOSUB 1500:IF AN=0 THEN 2640
2560 GOSUB 100:SR$="Schnupfen"
2570 PRINT"Vieren koennen bei einem";:GOSUB 150:PRINT
2580 PRINT"auch zu einer Rachenentzuendung fueh-"
2590 PRINT"ren."
2600 GOSUB 1600
2610 PRINT"abschwellend wirkende Nasensalbe,"
2620 PRINT"abwehrsteigernde Mittel"
2630 RETURN
2640 PRINT:PRINT"Haben Sie viel geraucht und/oder viel"
2650 PRINT"Alkohol getrunken, oder sind Sie am"
2660 PRINT"Arbeitsplatz Rauch oder chemischen"
2670 PRINT"Daempfen ausgesetzt?"
2680 GOSUB 1500:IF AN=0 THEN 2780
2690 GOSUB 100:SR$="Reizung"
2700 PRINT"Eine";:GOSUB 150:PRINT"der Rachenschleim-"
2710 PRINT"haut scheint die Ursache zu sein.":PRINT:PRINT
2720 SR$="Was Sie tun koennen:":GOSUB 150:PRINT:PRINT
2730 PRINT"Rauchen und Alkohol meiden, viel"
2740 PRINT"Kraeutertees, Mineralwasser trinken!"
2750 PRINT"Sind die Beschwerden nach 2 Tagen"
2760 PRINT"nicht abgeklungen, dann zum Hausarzt!"
2770 RETURN
2780 PRINT:PRINT"Sind Sie heiser oder 'stimmlos'?"
2790 GOSUB 1500:IF AN=0 THEN 2870
2800 GOSUB 100:SR$="Stimmbaenderueberlastung"
2810 GOSUB 150:PRINT"oder":PRINT
2820 SR$="Kehlkopfentzuendung":GOSUB 150
2830 PRINT"sind moeglich.":PRINT:PRINT
2840 PRINT"Sie sollten unbedingt einen HNO-Arzt"
2850 PRINT"konsultieren!"
2860 RETURN
2870 GOSUB 100
2880 PRINT"Wenn die Halsschmerzen laenger als"
2890 PRINT"zwei Tage anhalten oder Ihre Beschwer-"
2900 PRINT"den hier nicht angesprochen wurden,"
2910 PRINT"sollten Sie auf jeden Fall einen Arzt"
2920 PRINT"konsultieren!":RETURN
2930 REM -----------------------------   
3000 PRINT:PRINT"Haben Sie eines oder mehrere der fol-"
3010 PRINT"genden Symtome?"
3020 PRINT"  - andauernde Zahnschmezen"
3030 PRINT"  - dicke Backen           "
3040 PRINT"  - Vereiterung im Zahnfleisch"
3050 GOSUB 1500:IF AN=0 THEN 3290
3060 GOSUB 100:SR$="Konsultieren Sie unverzueglich"
3070 GOSUB 150:PRINT:SR$="Ihren Zahnarzt!"
3080 GOSUB 150:PRINT:PRINT:SR$="Wurzelvereiterung"
3090 PRINT"Eine";:GOSUB 150:PRINT"(Eiterzahn)"
3100 PRINT"ist wahrscheinlich.":PRINT:SR$="Ursache"
3110 GOSUB 150:PRINT:PRINT
3120 PRINT"Ein Kariesloch reicht bis tief in die"
3130 PRINT"Zahnwurzel, die Wurzelhaut eitert, und"
3140 PRINT"der umgebende Kieferknochen ist eiterig"
3150 PRINT"eingeschmolzen.":GOSUB 1700:GOSUB 1600
3160 PRINT"Wurzelbehandlung mit Ausraeumung der"
3170 PRINT"eitrigen Einschmelzung und spaeterer"
3180 PRINT"Fuellung. Meist sind mehrere Behand-"
3190 PRINT"lungen noetig. Bei schwerer Zerstoerung"
3200 PRINT"der Krone wird der Zahnarzt eine"
3210 PRINT"kuenstliche Krone aufsetzen. Nur in"
3220 PRINT"weit fortgeschrittenen Faellen muss der"
3230 PRINT"Zahn gezogen werden. Danach kann eine"
3240 PRINT"dreigliedrige Bruecke notwendig werden,"
3250 PRINT"um das Lockerwerden der Zaehne links"
3260 PRINT"und rechts von der Luecke zu ver-"
3270 PRINT"hindern."
3280 RETURN
3290 PRINT:PRINT"Haben Sie immer wiederkehrende pochen-"
3300 PRINT"de Zahnschmerzen oder ist ein Zahn ex-"
3310 PRINT"trem kaelte- oder hitzeempfindlich und"
3320 PRINT"haelt der Temperaturschmerz einige Mi-"
3330 PRINT"nuten an?"
3340 GOSUB 1500:IF AN=0 THEN 3480
3350 GOSUB 100:SR$="Fortgeschrittene Karies,":GOSUB 150
3360 PRINT:PRINT"eventuell auch im Bereich einer alten"
3370 PRINT"Fuellung, hat das Zahnmark mit Nerv "
3380 PRINT"und den Blutgefaessen entzuendet.":PRINT
3390 GOSUB 1600
3400 PRINT"Der Zahnarzt wird den karioesen Bereich"
3410 PRINT"entfernen, ggf. auch die alte Fuellung."
3420 PRINT"Liegt der Nerv frei, ist eine Wurzel-"
3430 PRINT"behandlung notwendig. Wenn nicht, wird"
3440 PRINT"die Entzuendung mit einer provisori-"
3450 PRINT"schen Fuellung gestoppt - Dauerfuellung"
3460 PRINT"ein paar Wochen spaeter. Nur in extrem"
3470 PRINT"fortgeschrittenen Faellen wird gezogen.":RETURN
3480 PRINT:PRINT"Haben Sie in den letzten Wochen eine"
3490 PRINT"neue Zahnfuellung bekommen?"
3500 GOSUB 1500:IF AN=0 THEN 3650
3510 PRINT:PRINT"Schmerzt der Zahn nur, wenn Sie darauf"
3520 PRINT"beissen?"
3530 GOSUB 1500:IF AN=0 THEN 3580
3540 GOSUB 100:SR$="unebene"
3550 PRINT"Eine";:GOSUB 150:PRINT"Fuellung kann weh tun."
3560 PRINT"Der Zahnarzt wird die Fuellung noch"
3570 PRINT"etwas nachschleifen.":RETURN
3580 GOSUB 100:SR$="tiefen Fuellung"
3590 PRINT"Nach einer";:GOSUB 150:PRINT"ist der"
3600 PRINT"Zahn noch einige Tage oft sekundenlang"
3610 PRINT"gegen Kaelte empfindlich. Haelt der"
3620 PRINT"Schmerz an, oder wird der Zahn auch"
3630 PRINT"hitzeempfindlich - zum Zahnarzt!"
3640 PRINT"Die Fuellung muss untersucht werden.":RETURN
3650 PRINT:PRINT"Schmerzt der Zahn fuer wenige Sekunden,"
3660 PRINT"wenn Sie kalte oder suesse Sachen essen"
3670 PRINT"(z.B. Eis oder Schokolade)?"
3680 GOSUB 1500:IF AN=0 THEN 3780
3690 GOSUB 100:SR$="Karies unter einer alten Fuellung"
3700 GOSUB 150:PRINT
3710 PRINT"eine kaputte Fuellung, oft auch ein"
3720 PRINT"nach einer Zahnfleischentzuendung frei-"
3730 PRINT"liegender Zahnhals koennen die Ursachen"
3740 PRINT"sein. Zahnarzt aufsuchen!"
3750 GOSUB 1600
3760 PRINT"Neue Fuellung, bei freiliegendem Zahn-"
3770 PRINT"hals eine schuetzende Versiegelung":RETURN
3780 PRINT:PRINT"Schmerzt der Zahn, wenn Sie darauf bei-"
3790 PRINT"ssen oder kauen?"
3800 GOSUB 1500:IF AN=0 THEN 1800
3810 GOSUB 100
3820 PRINT"Moegliche Ursachen koennen eine kaputte"
3830 PRINT"Fuellung oder ein Sprung im Zahn sein."
3840 PRINT"Auf jeden Fall zum Zahnarzt!":PRINT:PRINT
3850 GOSUB 1600
3860 PRINT"Wenn eine neue Fuellung nicht moeglich"
3870 PRINT"ist - Wurzelbehandlung, evt. eine"
3880 PRINT"Krone. Bei einem tiefen Sprung muss der"
3890 PRINT"Zahn gezogen werden.":RETURN
3900 REM -----------------------------
4000 PRINT:PRINT"Haben Sie kleine rote Flecken und"
4010 PRINT"bilden sich truebe, juckende Blaeschen?"
4020 GOSUB 1500:IF AN=0 THEN 4190
4030 GOSUB 100:SR$="Windpocken"
4040 PRINT"Sie haben wahrscheinlich";:GOSUB 150
4050 PRINT"verursacht durch eine Infektion mit"
4060 PRINT"Varizellen-Viren. Bei Erwachsenen"
4070 PRINT"verlaeuft diese Kinderkrankheit meist"
4080 PRINT"staerker. Suchen Sie Ihren Hausarzt"
4090 PRINT"auf!":GOSUB 1600
4100 PRINT"juckstillende und abwehrsteigernde"
4110 PRINT"Mittel, bei Eiterungen Antibiotika."
4120 PRINT"Viel trinken.":PRINT:PRINT:SR$="Wichtig:"
4130 GOSUB 150:PRINT"nicht an den Blaeschen kratzen,sie"
4140 PRINT"koennten sich entzuenden,eitern und"
4150 PRINT"Narben bilden. Fieber haelt die Viren"
4160 PRINT"in Schach - daher Fieber erst ab 40"
4170 PRINT"grad Celcius mit Medikamenten senken."
4180 RETURN
4190 PRINT:PRINT"Fliessen hellrote Flecken bald"
4200 PRINT"braunrot zusammen?"
4210 GOSUB 1500:IF AN=0 THEN 4360
4220 PRINT:PRINT"Haben Sie zwei oder alle der folgenden"
4230 PRINT"Symptome?"
4240 PRINT"-Schnupfen"
4250 PRINT"-Husten"
4260 PRINT"-Geroetete Augen"
4270 GOSUB 1500:IF AN=0 THEN 4550
4280 GOSUB 100:SR$="Masern":GOSUB 150
4290 PRINT"sind moeglich."
4300 PRINT"Bei Erwachsenen kann diese Kinder-"
4310 PRINT"krankheit zu Komplikationen fuehren"
4320 PRINT"Lungen-, Gehirnentzuendung. Arzt rufen"
4330 PRINT"-besonders bei Kopfschmerzen, Nacken-"
4340 PRINT"steife!":GOSUB 1600
4350 PRINT"abwehrsteigernde Mittel.":RETURN
4360 PRINT:PRINT"Haben Sie kleine rosarote Flecken?"
4370 GOSUB 1500:IF AN=0 THEN 4550
4380 GOSUB 100:SR$="Roeteln":GOSUB 150
4390 PRINT"sind die wahrscheinliche"
4400 PRINT"Diagnose. Vor allem, wenn Sie schmerz-"
4410 PRINT"hafte Lymphknotenschwellungen zuerst"
4420 PRINT"hinter den Ohren, dann in den Kiefer-"
4430 PRINT"winkeln, in den Achselhoehlen und in"
4440 PRINT"der Leistengegend haben. Auch diese"
4450 PRINT"virusbedingte Kinderkrankheit ver-"
4460 PRINT"laeuft bei Erwachsenen schwerer:"
4470 PRINT"Fieber bis 41 Grad.":PRINT:PRINT:SR$="VORSICHT!"
4480 GOSUB 150:PRINT:PRINT
4490 PRINT"Kontakt mit Schwangeren unbedingt ver-"
4500 PRINT"meiden - Gefahr von Hirnschaeden beim"
4510 PRINT"Embryo durch Roetelvieren!"
4520 GOSUB 1600
4530 PRINT"viel trinken, abwehrsteigernde Mittel"
4540 PRINT"(Apotheker fragen)":RETURN
4550 PRINT:PRINT"Haben Sie einen punktfoermigen, pur-"
4560 PRINT"purnen Ausschlag?"
4570 GOSUB 1500:IF AN=0 THEN 1800
4580 PRINT:PRINT"Haben Sie zwei oder mehrere der fol-"
4590 PRINT"genden Symptome?":PRINT
4600 PRINT" * Erbrechen":PRINT" * Kopfschmerzen"
4610 PRINT" * Lichtscheu":PRINT" * Nackensteifigkeit"
4620 GOSUB 1500:IF AN=0 THEN 4730
4630 GOSUB 100:SR$="Rufen Sie sofort den Hausarzt!"
4640 GOSUB 150:PRINT:PRINT:SR$="Hirnhautentzuendung"
4650 PRINT"Sie haben eine";:GOSUB 150:PRINT
4660 PRINT"(Meningitis) moeglicherweise schwerer"
4670 PRINT"bakterieller Art."
4680 GOSUB 1600
4690 PRINT"Der Hausarzt wird Sie zur genauen Diag-"
4700 PRINT"nose und Behandlung in eine Klinik ein-"
4710 PRINT"weisen. Bei bakterieller Ursache hohe"
4720 PRINT"Dosen Antibiotika.":RETURN
4730 GOSUB 100:SR$="Unverzueglich zum Hausarzt!"
4740 GOSUB 150:PRINT:PRINT:PRINT
4750 PRINT"besonders bei hohem Fieber. Es handelt"
4760 SR$="Purpura,":PRINT"sich sicherlich um";:GOSUB 150
4770 PRINT:PRINT"das sind punktfoermige Blutungen unter"
4780 PRINT"der Haut. Zugrunde liegen Gefaess- "
4790 PRINT"bzw. Blutzellstoerungen, meist ver-"
4800 PRINT"ursacht durch allergische Reaktionen"
4810 PRINT"auf Medikamente oder Infektionen."
4820 GOSUB 1600
4830 PRINT"genaue Diagnose ist nur klinisch moeg-"
4840 PRINT"lich (u.a. Bluttest). Je nach Ursache"
4850 PRINT"und erforderlicher Behandlung ambu-"
4860 PRINT"lante oder stationaere Behandlung.":RETURN
4870 REM ------------------------------ 
5000 PRINT:PRINT"Bemerken Sie nach einem Schwindelanfall"
5010 PRINT"eines oder mehrere der folgenden Symp-"
5020 PRINT"tome?":PRINT
5030 PRINT"-Laehmung einer Koerperhaelfte"
5040 PRINT"-Sprachstoerung"
5050 PRINT"-Sehstoerung"
5060 PRINT"-Verwirrungszustaende"
5070 PRINT"-Taubheit, Kribbeln, Kaeltegefuehl in"
5080 PRINT" einer Gliedmasse"
5090 GOSUB 1500:IF AN=0 THEN 5490
5100 IF AN=0 THEN 5490
5110 GOSUB 1500:IF AN=0 THEN 5340
5120 GOSUB 100:SR$="Konsultieren Sie Ihren Hausarzt!"
5130 GOSUB 150:PRINT:PRINT:SR$="Vorbote eines Schlaganfalls"
5140 PRINT"Ein";:GOSUB 150:PRINT
5150 PRINT"scheint wahrscheinlich zu sein. Be-"
5160 PRINT"stimmte Hirnregionen sind infolge"
5170 PRINT"einer Verengung (Arteriosklerose)"
5180 PRINT"oder Verstopfung (Thrombose) einer"
5190 PRINT"Arterie mangelhaft mit Blut versorgt."
5200 PRINT"Zum Schlaganfall ist es nur deshalb"
5210 PRINT"nicht gekommen, weil eine andere"
5220 PRINT"Arterie durch eine Querverbindung das"
5230 PRINT"Hirngebiet versorgt hat.":PRINT
5240 SR$="Diagnose und Behandlung:":GOSUB 150:PRINT:PRINT
5250 PRINT"neurologische Untersuchung in einer"
5260 PRINT"spezialisierten Klinik. Vorbeugung"
5270 PRINT"eines Schlaganfalls mit blutgerinnungs-"
5280 PRINT"hemmenden Mitteln. Vorbeugung der"
5290 PRINT"fortschreitenden Arteriosklerose durch"
5300 PRINT"Ernaehrungsumstellung, Einstellung des"
5310 PRINT"Blutdrucks und Normalisierung der"
5320 PRINT"Blutfette"
5330 RETURN
5340 GOSUB 100:SR$="Sofort einen Arzt rufen!"
5350 GOSUB 150:PRINT:PRINT
5360 SR$="Schlaganfall":PRINT"Wahrscheinlich ein ";:GOSUB 150
5370 PRINT:PRINT:PRINT"Eine Hirnregion wird durch ein ver-"
5380 PRINT"stopftes Gefaess nicht mehr ausreichend"
5390 PRINT"mit Blut versorgt und funktioniert"
5400 PRINT"nicht mehr.":GOSUB 1600
5410 PRINT"Untersuchung der Hirngefaesse durch"
5420 PRINT"Computer-Tomographie oder Kontrast-"
5430 PRINT"mitteldarstellung in einer neurologi-"
5440 PRINT"schen Klinik. Medikamente, Krankengym-"
5450 PRINT"nastik. Oft bilden sich Funktions-"
5460 PRINT"stoerungen auch wieder zurueck oder"
5470 PRINT"bessern sich."
5480 RETURN
5490 PRINT:PRINT"Haben Sie erbrochen und koennen kaum"
5500 PRINT"das Gleichgewicht halten?"
5510 GOSUB 1500:IF AN=0 THEN 5650
5520 GOSUB 100:SR$="Labyrinthitis":GOSUB 150
5530 PRINT"eine Entzuendung des"
5540 PRINT"Labyrinths (Innenohr mit Bogengaengen"
5550 PRINT"und Schnecke) ist moeglich.":PRINT:PRINT
5560 SR$="Ursache:":GOSUB 150:PRINT:PRINT
5570 PRINT"Infektionen des Innenohres durch Bak-"
5580 PRINT"terien oder Viren, die ueber den Blut-"
5590 PRINT"weg oder das Mittelohr (bei Ent-"
5600 PRINT"zuendung) eingedrungen sind. Konsul-"
5610 PRINT"tieren Sie einen HNO-Arzt!":GOSUB 1600
5620 PRINT"lindernde Mittel, evt. Antibiotika."
5630 PRINT"Die meisten Faelle heilen in etwa drei"
5640 PRINT"Wochen aus":RETURN
5650 PRINT:PRINT"Bemerken Sie eine einseitige Schwer-"
5660 PRINT"hoerigkeit und Ohrensausen?":PRINT
5670 GOSUB 1500:IF AN=0 THEN 5840
5680 GOSUB 100:SR$="Meniere-Krankheit,"
5690 PRINT"Sie haben moeglicherweise die":GOSUB 150
5700 PRINT"vor allem,"
5710 PRINT"wenn die Drehschwindelanfaelle sehr"
5720 PRINT"stark und mit Uebelkeit verbunden sind."
5730 PRINT"Zugrunde liegt eine Stoerung der"
5740 PRINT"Fluessigkeitsregula@tion im Innenohr,"
5750 PRINT"die das Gleichgewichtsorgan in seiner"
5760 PRINT"Funktion beeintraechtigt. Die Anfaelle"
5770 PRINT"koennen stundenlang andauern und sich"
5780 PRINT"alle paar Tage wiederholen. Suchen Sie"
5790 PRINT"einen HNO-Arzt auf!"
5800 GOSUB 1600
5810 PRINT"entwaessernde Medikamente, salzarme"
5820 PRINT"Kost. In schweren Faellen kann eine"
5830 PRINT"Operation notwendig werden.":RETURN
5840 PRINT:PRINT"Haben Sie den Drehschwindel, wenn Sie"
5850 PRINT"den Kopf drehen oder nach oben blicken?"
5860 GOSUB 1500:IF AN=0 THEN 1800
5870 GOSUB 100:SR$="Bandscheibenschaden"
5880 PRINT"Ein";:GOSUB 150:PRINT"oder eine"
5890 PRINT"Wirbelentzuendung der Halswirbelsaeule"
5900 PRINT"(Zervikalsyndrom) ist moeglich, vor"
5910 PRINT"allem, wenn Sie auch Hinterhaupt-Kopf-"
5920 PRINT"schmerzen oder Schulter-Arm-Schmerzen"
5930 PRINT"haben. Suchen Sie Ihren Arzt auf, er"
5940 PRINT"wird Sie an einen Orthopaeden ueber-"
5950 PRINT"weisen.":GOSUB 1600
5960 PRINT"schmerzlindernde Spritze, Roentgen-"
5970 PRINT"aufnahme, milde Streckbehandlung zur"
5980 PRINT"Entlastung der Nervenwurzel.":RETURN
5990 REM ------------------------------
6000 PRINT:PRINT"Haben Sie eine schwere Schlag- oder "
6010 PRINT"Stossverletzung erlitten?"
6020 GOSUB 1500:IF AN=0 THEN 6410
6030 PRINT:PRINT"Haben Sie eines der folgenden Symptome?"
6040 PRINT:PRINT" - sehr starke Schmerzen im Schulter-"
6050 PRINT"   Arm-Bereich"
6060 PRINT" - Laehmungserscheinungen oder Taub-"
6070 PRINT"   heitsgefuehl bzw. Kribbeln in Armen"
6080 PRINT"   oder Beinen":GOSUB 1500:IF AN=0 THEN 6250
6090 FOR X=0 TO 5:GOSUB 250:SD=3:GOSUB 450:NEXT X
6100 GOSUB 100:SR$="     N O T F A L L    ":GOSUB 150
6110 PRINT:PRINT:SR$="Verletzung der Halswirbelsaeule"
6120 PRINT"Rettungswagen rufen! Es kann eine":GOSUB 150
6130 PRINT:PRINT"(Wirbelbruch, zerrissene Bandscheibe)"
6140 PRINT"Bei Quetschung oder Verletzung des"
6150 PRINT"Halsmarks: Querschnittslaehmung (Arme"
6160 PRINT"und Beine, auch Blase und Mastdarm)."
6170 PRINT"Bei leichterer Verletzung (inkompletter"
6180 PRINT"Querschnitt): Schwaeche in Armen und"
6190 PRINT"Beinen, Taubheitsgefuehl.":GOSUB 1600
6200 PRINT"Aufrichten der Wirbelsaeule, Ruhig-"
6210 PRINT"stellen in Gipsmider. Eventuell opera-"
6220 PRINT"tive Aufrichtung und Stabilisierung"
6230 PRINT"(auch bei manchen kompletten Quer-"
6240 PRINT"schnitten erfolgreich)":RETURN
6250 GOSUB 100:SR$="Schleudertrauma"
6260 PRINT"Ein";:GOSUB 150:PRINT"ist wahr-"
6270 PRINT"scheinlich, hervorgerufen durch"
6280 PRINT"schnelle Rueck- und anschliessende Vor-"
6290 PRINT"schleuderung des Kopfes (Peitschen-"
6300 PRINT"schlag-Verletzung bei einem Auffahr-"
6310 PRINT"unfall). Folgen: Muskelriss, Zerrung"
6320 PRINT"oder Riss von Baendern der Halswirbel-"
6330 PRINT"saeule, Wirbelverschiebung, Verrenkung"
6340 PRINT"der Wirbelgelenke."
6350 PRINT"Zur genauen Diagnose zum Orthopaeden!"
6360 GOSUB 1600
6370 PRINT"Ruhigstellung der Halswirbelsaeule"
6380 PRINT"(Gipskrawatte), in schweren Faellen"
6390 PRINT"Operation. Treten spaeter erneut Laeh-"
6400 PRINT"mungsgefuehle auf - sofort zum Arzt!":RETURN
6410 PRINT:PRINT"Haben Sie neben Nackensteifigkeit noch"
6420 PRINT"zwei oder mehrere der folgenden Symp-"
6430 PRINT"tome?":PRINT
6440 PRINT" - schwerste Kopfschmerzen":PRINT" - Fieber"
6450 PRINT" - Erbrechen":PRINT" - Lichtempfindlichkeit"
6460 PRINT" - Benommenheit":GOSUB 1500:IF AN=0 THEN 6620
6470 FOR X=0 TO 5:GOSUB 250:SD=3:GOSUB 450:NEXT X
6480 GOSUB 100:SR$="     N O T F A L L    ":GOSUB 150
6490 PRINT:PRINT:PRINT"Sofort einen Arzt rufen!"
6500 SR$="Meningitis":PRINT"Eine";:GOSUB 150:PRINT"ist wahr-"
6510 PRINT"scheinlich.":GOSUB 1600
6520 PRINT"Der Arzt wird Sie in eine Klinik ein-"
6530 PRINT"weisen. Eventuell ist fuer eine genaue"
6540 PRINT"Diagnose die Entnahme von Hirn-Ruecken-"
6550 PRINT"marks-Fluessigkeit im Lendenwirbel-"
6560 PRINT"bereich (Lumbal-Punktur) notwendig."
6570 PRINT"Bei einer bakteriellen Meningitis be-"
6580 PRINT"kommen Sie Antibiotika, bei einer"
6590 PRINT"virusbedingten abwehrsteigernde Medi-"
6600 PRINT"kamente, zusaetzlich Schmerz- und Herz-"
6610 PRINT"Kreislauf-Mittel.":RETURN
6620 PRINT:PRINT"Schiesst ein starker Nackenschmerz"
6630 PRINT"in einen Arm, ist der Arm schwach oder"
6640 PRINT"taub?"
6650 GOSUB 1500:IF AN=0 THEN 6800
6660 GOSUB 100:SR$="Bandscheibenvorfall"
6670 PRINT"Konsultieren Sie sofort Ihren Hausarzt!"
6680 PRINT"Ein";:GOSUB 150:PRINT"der Hals-"
6690 PRINT"wirbelsaeule ist die Ursache. Der vor-"
6700 PRINT"gefallene Teil einer Bandscheibe"
6710 PRINT"drueckt auf die Wurzel eines vom Hals-"
6720 PRINT"mark ausgehenden Nerves. Taubheits-"
6730 PRINT"gefuehl und Kribbeln im Arm; Ueberwei-"
6740 PRINT"sung an einen Orthopaeden.":GOSUB 1600
6750 PRINT"(nach einer Roentgenaufnahme):"
6760 PRINT"Schmerzstillende Spritze, milde Strek-"
6770 PRINT"kung zur Entlastung der Nervenwurzel,"
6780 PRINT"In schweren Faellen ist eine Operation"
6790 PRINT"notwendig.":RETURN
6800 PRINT:PRINT"Sind die Schmerzen und die Nacken-"
6810 PRINT"steifigkeit in den letzten Monaten"
6820 PRINT"immer staerker geworden?"
6830 GOSUB 1500:IF AN=0 THEN 1800
6840 GOSUB 100:SR$="Zervikalsyndrom"
6850 PRINT"Sie haben ein";:GOSUB 150:PRINT
6860 PRINT"d.h. die Beschwerden gehen von der"
6870 PRINT"Halswirbelsaeule aus.":PRINT:PRINT:SR$="Ursachen"
6880 GOSUB 150:PRINT:PRINT
6890 PRINT"Bandscheibenvorfall durch Abnutzung der"
6900 PRINT"Bandscheiben, entzuendliche oder ver-"
6910 PRINT"letzungsbedingte Wirbelschaeden."
6920 PRINT"Bei Quetschung einer Nervenwurzel:"
6930 PRINT"Armschmerzen, Taubheitsgefuehl, Krib-"
6940 PRINT"beln im Arm. Ist eine Arterie zusammen-"
6950 PRINT"gedrueckt: Hinterhaupt- und Schlaefen-"
6960 PRINT"schmerzen, Sehstoerungen.":GOSUB 1600
6970 PRINT"erfolgt beim Orthopaeden: Entlastung"
6980 PRINT"der Nervenwurzel durch mildes Strecken.":RETURN
6990 REM------------------------------
7000 PRINT"Schlafen Sie wenig oder haben Sie"
7010 PRINT"Schlafstoerungen?":GOSUB 1500:IF AN=0 THEN 7140
7020 GOSUB 100:SR$="Schlafmangel":GOSUB 150
7030 PRINT"oder Schlafstoerungen"
7040 PRINT"ueber mehrere Naechte hinweg sind an-"
7050 PRINT"scheinend die Ursache Ihrer Muedigkeit"
7060 PRINT"und Antriebsschwaeche."
7070 SR$="Was Sie dagegen tun koennen:"
7080 PRINT:PRINT:GOSUB 150:PRINT:PRINT
7090 PRINT"Ein bis zwei Naechte stoerungsfrei"
7100 PRINT"schlafen, Laermquellen ausschliessen!"
7110 PRINT"Bei Ein- und Durchschlafstoerungen"
7120 PRINT"(Aengste?) einen Psychotherapeuten um"
7130 PRINT"Rat fragen.":RETURN
7140 PRINT:PRINT"Haben Sie zwei oder mehrere der folgen-"
7150 PRINT"den Symptome?":PRINT
7160 PRINT" - ungewoehnliche Kaelteempfindlichkeit"
7170 PRINT" - trockene, kuehle Haut"
7180 PRINT" - aufgedunsenes Gesicht":PRINT" - Verstopfung"
7190 GOSUB 1500:IF AN=0 THEN 7280
7200 GOSUB 100:SR$="Schilddruesen-Unterfunktion"
7210 PRINT"Eine";:GOSUB 150:PRINT
7220 PRINT"ist die wahrscheinlichste Ursache. Vor"
7230 PRINT"allem bei Frauen im Klimakerium ist"
7240 PRINT"diese Hormonstoerung nicht selten."
7250 PRINT"Fragen Sie Ihren Arzt.":GOSUB 1600
7260 PRINT"Lebenslange Hormontherapie in Tablet-"
7270 PRINT"tenform.":RETURN
7280 PRINT:PRINT"Haben Sie zwei oder mehrere dieser"
7290 PRINT"Symptome?":PRINT:PRINT" - Blaesse"
7300 PRINT" - Ohnmacht":PRINT" - Kurzatmigkeit"
7310 PRINT" - Mundschleimhautentzuendung"
7320 GOSUB 1500:IF AN=0 THEN 7490
7330 GOSUB 100:SR$="Anaemie":GOSUB 150
7340 PRINT"(Blutarmut), Verminderung"
7350 PRINT"der roten Blutkoerperchen oder des"
7360 PRINT"Blutfarbstoffes Haemoglobin, ist die"
7370 PRINT"wahrscheinlichste Ursache. Die haeu-"
7380 PRINT"figste Form ist die Eisenmangel-"
7390 PRINT"Anaemie. Fehlt Eisen in der Nahrung"
7400 PRINT"oder geht viel Eisen verloren (z.B. bei"
7410 PRINT"starker Menstruation), ist die Bildung"
7420 PRINT"von Haemoglobin gestoert. Nicht selten"
7430 PRINT"ist auch die Vitamin B12-Mangel-Anae-"
7440 PRINT"mie. Fruehsymptom: Mundschleimhaut-"
7450 PRINT"entzuendung. Sofort zum Arzt!":GOSUB 1600
7460 PRINT"Bei Eisenmangel Fleisch und Vollkorn-"
7470 PRINT"produkte bevorzugen. Den Arzt nach Ta-"
7480 PRINT"bletten fragen":RETURN
7490 PRINT:PRINT"Trinken Sie taeglich mehr Alkohol als"
7500 PRINT"drei Biere, drei Glaeser Wein oder drei"
7510 PRINT"Schnaepse?":GOSUB 1500:IF AN=0 THEN 7650
7520 GOSUB 100:SR$="Alkohol,":GOSUB 150
7530 PRINT"in diesen Mengen taeglich"
7540 PRINT"getrunken, macht auf die Dauer muede"
7550 PRINT"und passiv.":SR$="Was sie tun koennen:"
7560 PRINT:PRINT:GOSUB 150:PRINT:PRINT
7570 PRINT"Schraenken Sie Ihren taeglichen Al-"
7580 PRINT"koholkonsum stark ein! Trinken Sie Al-"
7590 PRINT"kohol vor allem nicht vor 18 Uhr! Ver-"
7600 PRINT"suchen Sie konsequent, eine Woche mal"
7610 PRINT"ganz ohne Alkohol auszukommen. Lenken"
7620 PRINT"Sie durch sportliche Aktivitaeten (Ten-"
7630 PRINT"nis, Spaziergaenge, Joggen, Schwimmen,"
7640 PRINT"Radfahren) vom Alkohol ab.":RETURN
7650 PRINT:PRINT"Haben Sie zwei oder mehrere der folgen-"
7660 PRINT"den Symptome?":PRINT
7670 PRINT" - Konzentrationsschwaeche"
7680 PRINT" - Entscheidungsunfaehigkeit"
7690 PRINT" - kein Interesse am Sex":PRINT" - Kopfschmerzen"
7700 PRINT" - Niedergeschlagenheit, Aengste"
7710 GOSUB 1500:IF AN=0 THEN 7780
7720 GOSUB 100:SR$="Depressionen":GOSUB 150
7730 PRINT"machen Sie muede,"
7740 PRINT"antriebs- und energielos.":GOSUB 1600
7750 PRINT"durch Medikamente und einen Psycho-"
7760 PRINT"therapeuten oder mehrwoechige psycha-"
7770 PRINT"trische Behandlung in einer Klinik.":RETURN
7780 PRINT:PRINT"Haben Sie im Beruf oder zu Hause einige"
7790 PRINT"Wochen hart und ohne Erholungsphase"
7800 PRINT"durchgearbeitet?":GOSUB 1500:IF AN=0 THEN 7910
7810 GOSUB 100:SR$="Sie sind ueberarbeitet!":GOSUB 150
7820 PRINT"Seele und"
7830 PRINT"Koerper brauchen Erholung, zumal wenn"
7840 PRINT"die Ueberarbeitung mit psychosozialem"
7850 PRINT"Stress verbunden ist, den Sie nicht wie"
7860 PRINT"sonst gewohnt loesen koennen.":GOSUB 1600
7870 PRINT"Teilen Sie sich die Arbeit so ein, dass"
7880 PRINT"Zeit zur Entspannung uebrig bleibt."
7890 PRINT"Sonst riskieren Sie Nervenzusammen-"
7900 PRINT"brueche!":RETURN
7910 PRINT:PRINT"Haben Sie erst kuerzlich eine Infek-"
7920 PRINT"tionskrankheit (Grippe o.a.) ueberstan-"
7930 PRINT"den?":GOSUB 1500:IF AN=0 THEN 1800
7940 GOSUB 100:PRINT"Die Erholungsphase kann bis zu drei"
7950 PRINT"Wochen dauern, besonders nach einer Ta-"
7960 PRINT"bletten-Therapie. Gehen Sie jedoch zum"
7970 PRINT"Arzt, wenn nach vier Wochen noch keine"
7980 PRINT"Besserung eingetreten ist.":RETURN
7990 REM------------------------------
30000 REM=============================
30010 REM
30020 REM Quelle: Zeitschrift Hoerzu
30030 REM         (ab Sept. 90)
30040 REM
30050 REM=============================
32000 REM
32010 REM Bearbeitet von:
32020 REM
32030 REM     Andreas Garten
32040 REM     Friedersdorfer Siedl.2
32050 REM     PULSNITZ/Sa.
32060 REM     O-8514
32070 REM
32080 REM KC compact   24.02.91
32090 REM
32100 REM=============================
32110 REM Erstausstrahlung: Deutschlandsender Kultur
32120 REM-spezial 910320
*/ });
