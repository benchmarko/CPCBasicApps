/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem logicals - Logicals
2 rem (c) marcm200
3 rem https://cpcwiki.de/forum/index.php?topic=1285.0
4 rem Automatisches Lösen von PM Logicals: Logik-Puzzle
5 rem Modifications: Put all in one file; colon before END in 1588 and 1650; time measurement
6 rem
10 MODE 1:CLS:DEFINT A-Z:loops=0
20 COLUNDEF=2:INK COLUNDEF,13
30 COLTRENN=3:INK COLTRENN,26
40 COLBLOCK=1:INK COLBLOCK,0:PEN COLTRENN
45 COLOK=4
100 anzregeln=12:DIM rules(anzregeln)
103 gosub 62500:cls:t!=time
105 LOCATE 1,1:PRINT " Initialisierung ..."
107 IF zoom<3 THEN zoom=3: 'zoom=12:IF zoom<3 THEN zoom=3
108 'PM$="Fraktal: "
110 'zeanz=23:spanz=34:bmaxanz=5
120 DIM feldZS(zeanz,spanz)
130 FOR z=1 TO zeanz:FOR s=1 TO spanz:feldZS(z,s)=COLUNDEF:NEXT:NEXT
165 DIM zblanzZ(zeanz),zbllenZN(zeanz,bmaxanz)
170 DIM zblmgl0ZN(zeanz,bmaxanz),zblmgl1ZN(zeanz,bmaxanz)
175 DIM zbldef0ZN(zeanz,bmaxanz),zbldef1ZN(zeanz,bmaxanz)
180 'RESTORE 311
181 z=1:b=1
185 READ a:IF a<0 THEN GOTO 210
195 IF a=0 THEN zblanzZ(z)=b-1:b=1:z=z+1:GOTO 185
200 zbllenZN(z,b)=a:IF b>bmaxanz THEN PRINT"Fehler1":END ELSE b=b+1
205 GOTO 185
210 REM
211 IF z<>(zeanz+1) THEN PRINT"Fehler2":END
212 FOR z=1 TO zeanz:FOR b=1 TO zblanzZ(z):zbldef0ZN(z,b)=0:zbldef1ZN(z,b)=0:NEXT:NEXT
215 DIM sblanzS(spanz),sbllenSN(spanz,bmaxanz)
220 DIM sblmgl0SN(spanz,bmaxanz),sblmgl1SN(spanz,bmaxanz)
225 DIM sbldef0SN(spanz,bmaxanz),sbldef1SN(spanz,bmaxanz)
230 'RESTORE 411
231 s=1:b=1
235 READ a:IF a<0 THEN GOTO 290
240 IF a=0 THEN sblanzS(s)=b-1:b=1:s=s+1:GOTO 235
245 sbllenSN(s,b)=a:IF b>bmaxanz THEN PRINT"Fehler4":END ELSE b=b+1
250 GOTO 235
290 REM
291 IF s<>(spanz+1) THEN PRINT"Fehler3":END
292 FOR s=1 TO spanz:FOR b=1 TO sblanzS(s):sbldef0SN(s,b)=0:sbldef1SN(s,b)=0:NEXT:NEXT
299 GOTO 500
300 '
500 REM mgl-Initialisierung
505 FOR z=1 TO zeanz:FOR b=1 TO zblanzZ(z)
510 L=0:FOR b2=1 TO (b-1):L=L+1+zbllenZN(z,b2):NEXT b2
515 R=0:FOR b2=(b+1) TO zblanzZ(z):R=R+1+zbllenZN(z,b2):NEXT b2
520 zblmgl0ZN(z,b)=L+1:zblmgl1ZN(z,b)=spanz-R:zbldef0ZN(z,b)=0:zbldef1ZN(z,b)=0:NEXT b:NEXT z
555 FOR s=1 TO spanz:FOR b=1 TO sblanzS(s)
560 O=0:FOR b2=1 TO (b-1):O=O+1+sbllenSN(s,b2):NEXT b2
565 U=0:FOR b2=(b+1) TO sblanzS(s):U=U+1+sbllenSN(s,b2):NEXT b2
570 sblmgl0SN(s,b)=O+1:sblmgl1SN(s,b)=zeanz-U:sbldef0SN(s,b)=0:sbldef1SN(s,b)=0:
580 NEXT b:NEXT s
850 'Hauptschleife: Programmzeilen 900-999.
860 'Die Regeln werden repetitiv angewendet, bis keine Änderung mehr erfolgt
870 '(weder in feldZS oder den Block-Metadaten). Dann ist Variable VER auf 0
880 'und in Programmzeile 59999 erfolgt kein Rücksprung zur Hauptschleife.
900 REM Hauptschleife
910 ver=0:loops=loops+1
911 LOCATE 1,3:PRINT"                        "
912 LOCATE 1,4:PRINT"                        "
913 LOCATE 1,5:PRINT"                        "
920 FOR z=1 TO zeanz:
925 FOR s=1 TO spanz:
930 x=zoom*s:y=zoom*(zeanz+1-z)
940 FOR dy=0 TO zoom-3:MOVE x,y+dy:DRAWR zoom-3,0,feldZS(z,s):NEXT dy
950 NEXT s
960 NEXT z
965 FOR r=1 TO anzregeln:LOCATE r+7,2:IF rules(r)<=0 THEN PRINT"_" ELSE IF rules(r)=1 THEN PRINT"X" ELSE PRINT"o"
966 NEXT r:LOCATE 1,2:PRINT"Regeln"
969 FOR r=1 TO anzregeln:rules(r)=0:NEXT
989 '
990 'Regel 1: Programmzeilen 1000-1499
991 'Wenn ein MGL-Bereich kleiner als 2 mal die Laenge des Blockes ist, dann überlappen die Enden, wenn der Block ganz links beginnt (MGL0) oder ganz rechts endet (MGL1). Der überlappende Bereich MUSS daher definiert COLBLOCK sein und DEF0,DEF1 werden entsprechend gesetzt.
1000 REM Regel 1: Wenn mgl-Bereich < 2*Laenge Block => es ueberlappt sich
1010 LOCATE 1,1:PRINT PM$;loops;") Regel 1 ...     "
1015 FOR z=1 TO zeanz
1020 FOR b=1 TO zblanzZ(z)
1025 R=zblmgl0ZN(z,b)+zbllenZN(z,b)-1:L=zblmgl1ZN(z,b)-(zbllenZN(z,b)-1)
1027 IF L<1 THEN L=1
1029 IF R>spanz THEN R=spanz
1035 IF L>R THEN GOTO 1080
1040 IF zbldef0ZN(z,b)>L OR zbldef0ZN(z,b)=0 THEN zbldef0ZN(z,b)=L
1041 IF zbldef1ZN(z,b)<R THEN zbldef1ZN(z,b)=R
1050 FOR x=L TO R
1055 IF feldZS(z,x)=COLTRENN THEN PRINT"Inkons1 zd:";z;L;R:END
1060 IF feldZS(z,x)=COLBLOCK THEN GOTO 1070
1065 ver=1:rules(1)=1:feldZS(z,x)=COLBLOCK
1070 NEXT x
1080 NEXT b
1090 NEXT z
1115 FOR s=1 TO spanz
1120 FOR b=1 TO sblanzS(s)
1125 U=sblmgl0SN(s,b)+sbllenSN(s,b)-1:O=sblmgl1SN(s,b)-(sbllenSN(s,b)-1)
1128 IF O<1 THEN O=1
1130 IF U>zeanz THEN U=zeanz
1135 IF O>U THEN GOTO 1180
1140 IF sbldef0SN(s,b)=0 OR sbldef0SN(s,b)>O THEN sbldef0SN(s,b)=O
1141 IF sbldef1SN(s,b)<U THEN sbldef1SN(s,b)=U
1150 FOR y=O TO U
1155 IF feldZS(y,s)=COLTRENN THEN PRINT"Inkonsistent2":END
1160 IF feldZS(y,s)=COLBLOCK THEN GOTO 1170
1165 ver=1:rules(1)=1:feldZS(y,s)=COLBLOCK
1170 NEXT y
1180 NEXT b
1190 NEXT s
1440 '
1450 'Regel 2: Programmzeilen 1500-1999
1460 'Wenn ein COLBLOCK-Feld in KEINEM DEF-Breich vorkommt und nur in genau EINEM MGL-Bereich (sei dies Block b), dann begründet es einen neuen DEF-Bereich für diesen Block b.
1500 REM Regel 2
1505 LOCATE 1,1:PRINT PM$;loops;") Regel 2 ...     "
1510 FOR z=1 TO zeanz
1512 FOR s=1 TO spanz
1520 IF feldZS(z,s)<>COLBLOCK THEN GOTO 1750
1530 blz=0:FOR b=1 TO zblanzZ(z)
1540 IF zblmgl0ZN(z,b)<=s AND s<=zblmgl1ZN(z,b) THEN IF blz>0 THEN blz=-1:b=zblanzZ(z)+1:GOTO 1550 ELSE blz=b
1550 NEXT b
1560 IF blz<=0 THEN GOTO 1600
1567 IF zbldef0ZN(z,blz)<=0 THEN zbldef0ZN(z,blz)=s:zbldef1ZN(z,blz)=s
1570 IF s<zbldef0ZN(z,blz) THEN L=s ELSE L=zbldef0ZN(z,blz)
1580 IF s>zbldef1ZN(z,blz) THEN R=s ELSE R=zbldef1ZN(z,blz)
1582 IF zbldef0ZN(z,blz)>L OR zbldef0ZN(z,blz)=0 THEN zbldef0ZN(z,blz)=L
1583 IF zbldef1ZN(z,blz)<R THEN zbldef1ZN(z,blz)=R
1584 FOR x=L TO R
1588 IF feldZS(z,x)=COLTRENN THEN PRINT "Fehler6b";:END
1590 IF feldZS(z,x)=COLUNDEF THEN feldZS(z,x)=COLBLOCK:ver=1:rules(2)=1
1595 NEXT x
1600 bls=0:FOR b=1 TO sblanzS(s)
1610 IF sblmgl0SN(s,b)<=z AND z<=sblmgl1SN(s,b) THEN IF bls>0 THEN bls=-1:b=sblanzS(s)+1:GOTO 1620 ELSE bls=b
1620 NEXT b
1625 IF bls<=0 THEN GOTO 1700
1627 IF sbldef0SN(s,bls)<=0 THEN sbldef0SN(s,bls)=z:sbldef1SN(s,bls)=z
1630 IF z<sbldef0SN(s,bls) THEN O=z ELSE O=sbldef0SN(s,bls)
1635 IF z>sbldef1SN(s,bls) THEN U=z ELSE U=sbldef1SN(s,bls)
1640 IF sbldef0SN(s,bls)>O OR sbldef0SN(s,bls)=0 THEN sbldef0SN(s,bls)=O
1641 IF sbldef1SN(s,bls)<U THEN sbldef1SN(s,bls)=U
1645 FOR y=O TO U
1650 IF feldZS(y,s)=COLTRENN THEN PRINT "Fehler6c";:END
1655 IF feldZS(y,s)=COLUNDEF THEN feldZS(y,s)=COLBLOCK:ver=1:rules(2)=1
1660 NEXT y
1700 :
1750 NEXT s
1790 NEXT z
1900 '
1910 'Regel 3: Programmzeilen 2000-2999
1920 'Quasi die Invers-Regel zu 1. Wenn DEF gesetzt ist, kann MGL angepasst werden, da nur noch eine bestimmte Anzahl (LEN-(DEF1-DEF0+1)) an COLBLOCK-Feldern gesetzt werden müssen.
2000 REM Regel 3
2005 LOCATE 1,1:PRINT PM$;loops;") Regel 3 ...     "
2010 FOR z=1 TO zeanz
2020 FOR b=1 TO zblanzZ(z):IF zbldef0ZN(z,b)<=0 THEN GOTO 2070
2025 REST=zbllenZN(z,b)-(zbldef1ZN(z,b)-zbldef0ZN(z,b)+1)
2030 L=zbldef0ZN(z,b)-REST:R=zbldef1ZN(z,b)+REST
2037 IF L<1 THEN L=1
2038 IF R>spanz THEN R=spanz
2040 IF L<=zblmgl0ZN(z,b) THEN GOTO 2050
2042 ver=1:rules(3)=2:zblmgl0ZN(z,b)=L
2050 IF R>=zblmgl1ZN(z,b) THEN GOTO 2060
2052 ver=1:rules(3)=2:zblmgl1ZN(z,b)=R
2060 :
2070 NEXT b
2080 NEXT z
2110 FOR s=1 TO spanz
2120 FOR b=1 TO sblanzS(s):IF sbldef0SN(s,b)<=0 THEN GOTO 2170
2125 REST=sbllenSN(s,b)-(sbldef1SN(s,b)-sbldef0SN(s,b)+1)
2130 O=sbldef0SN(s,b)-REST:U=sbldef1SN(s,b)+REST
2137 IF O<1 THEN O=1
2138 IF U>zeanz THEN U=zeanz
2140 IF O<=sblmgl0SN(s,b) THEN GOTO 2150
2142 ver=1:rules(3)=2:sblmgl0SN(s,b)=O
2150 IF U>=sblmgl1SN(s,b) THEN GOTO 2160
2152 ver=1:rules(3)=2:sblmgl1SN(s,b)=U
2160 :
2170 NEXT b
2180 NEXT s
2900 '
2910 'Regel 4: Programmzeilen 3000-3499
2920 'Wenn MGL=DEF, dann ist der gesamte Block bereits identifiziert. Die Felder links/rechts (oben/unten bei Spalten) sind damit Trennfelder (wenn nicht außerhalb des Feldbereichs).
3000 REM Regel 4
3002 LOCATE 1,1:PRINT PM$;loops;") Regel 4 ...     "
3005 FOR z=1 TO zeanz
3010 FOR b=1 TO zblanzZ(z):IF zblmgl0ZN(z,b)<>zbldef0ZN(z,b) OR zblmgl1ZN(z,b)<>zbldef1ZN(z,b) THEN GOTO 3140
3015 IF zblmgl0ZN(z,b)<=0 OR zbldef0ZN(z,b)<=0 THEN GOTO 3140
3020 w=zbldef0ZN(z,b):IF w<=1 THEN GOTO 3050
3025 IF feldZS(z,w-1)=COLBLOCK THEN PRINT"FehlerInk2d":END
3030 IF feldZS(z,w-1)=COLTRENN THEN GOTO 3050
3040 feldZS(z,w-1)=COLTRENN:ver=1:rules(4)=1
3050 w=zbldef1ZN(z,b):IF w>=spanz THEN GOTO 3100
3055 IF feldZS(z,w+1)=COLBLOCK THEN PRINT"FehlerInk2e":END
3060 IF feldZS(z,w+1)=COLTRENN THEN GOTO 3100
3070 feldZS(z,w+1)=COLTRENN:ver=1:rules(4)=1
3100 :
3140 NEXT b
3190 NEXT z
3205 FOR s=1 TO spanz
3210 FOR b=1 TO sblanzS(s):IF sblmgl0SN(s,b)<>sbldef0SN(s,b) OR sblmgl1SN(s,b)<>sbldef1SN(s,b) THEN GOTO 3340
3215 IF sblmgl0SN(s,b)<=0 OR sbldef0SN(s,b)<=0 THEN GOTO 3340
3220 w=sbldef0SN(s,b):IF w<=1 THEN GOTO 3250
3225 IF feldZS(w-1,s)=COLBLOCK THEN PRINT"FehlerInk2e":END
3230 IF feldZS(w-1,s)=COLTRENN THEN GOTO 3250
3240 feldZS(w-1,s)=COLTRENN:ver=1:rules(4)=1
3250 w=sbldef1SN(s,b):IF w>=zeanz THEN GOTO 3300
3255 IF feldZS(w+1,s)=COLBLOCK THEN PRINT"FehlerInk2f":END
3260 IF feldZS(w+1,s)=COLTRENN THEN GOTO 3300
3270 feldZS(w+1,s)=COLTRENN:ver=1:rules(4)=1
3300 :
3340 NEXT b
3390 NEXT s
3400 '
3410 'Regel 5: Programmzeilen 3500-3999
3420 'Wenn das Feld direkt links neben einem DEF0..DEF1-Bereich ein COLBLOCK-Feld ist, kann DEF erweitert werden. Analog auch für rechts sowie oben/unten bei Spalten.
3500 REM Regel 5
3502 LOCATE 1,1:PRINT PM$;loops;") Regel 5 ...     "
3510 FOR z=1 TO zeanz
3515 FOR b=1 TO zblanzZ(z):IF zbldef0ZN(z,b)<=0 THEN GOTO 3570
3520 w=zbldef0ZN(z,b):IF w<=1 THEN GOTO 3550
3530 IF feldZS(z,w-1)<>COLBLOCK THEN GOTO 3550
3535 IF zbldef0ZN(z,b)>0 AND zbldef0ZN(z,b)<=(w-1) THEN GOTO 3550
3545 zbldef0ZN(z,b)=w-1:ver=1:rules(5)=2
3550 w=zbldef1ZN(z,b):IF w>=spanz THEN GOTO 3565
3556 IF feldZS(z,w+1)<>COLBLOCK THEN GOTO 3565
3559 IF zbldef1ZN(z,b)>=(w+1) THEN GOTO 3565
3560 zbldef1ZN(z,b)=w+1:ver=1:rules(5)=2
3565 :
3570 NEXT b
3590 NEXT z
3610 FOR s=1 TO spanz
3615 FOR b=1 TO sblanzS(s):IF sbldef0SN(s,b)<=0 THEN GOTO 3670
3620 w=sbldef0SN(s,b):IF w<=1 THEN GOTO 3650
3630 IF feldZS(w-1,s)<>COLBLOCK THEN GOTO 3650
3635 IF sbldef0SN(s,b)>0 AND sbldef0SN(s,b)<=(w-1) THEN GOTO 3650
3645 sbldef0SN(s,b)=w-1:ver=1:rules(5)=2
3650 w=sbldef1SN(s,b):IF w>=zeanz THEN GOTO 3665
3656 IF feldZS(w+1,s)<>COLBLOCK THEN GOTO 3665
3659 IF sbldef1SN(s,b)>=(w+1) THEN GOTO 3665
3660 sbldef1SN(s,b)=w+1:ver=1:rules(5)=2
3665 :
3670 NEXT b
3690 NEXT s
3900 '
3910 'Regel 6: Programmzeilen 4000-4999
3920 'Wenn |DEF1-DEF0+1|=LEN des Blockes, ist der Block identifiziert und MGL kann gesetzt werden sowie Trennfelder.
4000 REM Regel 6
4002 LOCATE 1,1:PRINT PM$;loops;") Regel 6 ...     "
4010 FOR z=1 TO zeanz
4015 FOR b=1 TO zblanzZ(z):IF zbldef0ZN(z,b)<=0 THEN GOTO 4070
4020 IF zbllenZN(z,b)<>(zbldef1ZN(z,b)-zbldef0ZN(z,b)+1) THEN GOTO 4050
4025 IF zblmgl0ZN(z,b)<>zbldef0ZN(z,b) OR zblmgl0ZN(z,b)<>zbldef0ZN(z,b) THEN ver=1:rules(6)=2
4030 zblmgl0ZN(z,b)=zbldef0ZN(z,b):zblmgl1ZN(z,b)=zbldef1ZN(z,b)
4050 :
4070 NEXT b
4090 NEXT z
4110 FOR s=1 TO spanz
4115 FOR b=1 TO sblanzS(s):IF sbldef0SN(s,b)<=0 THEN GOTO 4170
4120 IF sbllenSN(s,b)<>(sbldef1SN(s,b)-sbldef0SN(s,b)+1) THEN GOTO 4150
4125 IF sblmgl0SN(s,b)<>sbldef0SN(s,b) OR sblmgl1SN(s,b)<>sbldef1SN(s,b) THEN ver=1:rules(6)=2
4130 sblmgl0SN(s,b)=sbldef0SN(s,b):sblmgl1SN(s,b)=sbldef1SN(s,b)
4150 :
4170 NEXT b
4190 NEXT s
4900 '
4910 'Regel 7: Programmzeilen 5000-5999
4920 'Wenn der MGL-Bereich durch ein Trennfeld in 2 Teile aufgespalten wird, und einer der beiden KLEINER ist als das Blockfeld LEN, kann dieser Bereich exkludiert werden und MGL wird angepasst.
5000 REM Regel 7
5002 LOCATE 1,1:PRINT PM$;loops;") Regel 7 ...     "
5010 FOR z=1 TO zeanz
5015 FOR b=1 TO zblanzZ(z)
5020 tr=0:FOR x=zblmgl0ZN(z,b) TO zblmgl1ZN(z,b)
5025 IF feldZS(z,x)=COLTRENN THEN tr=x:x=zblmgl1ZN(z,b)+1
5030 NEXT x
5035 IF tr<=0 THEN GOTO 5071
5040 SL=(tr-1)-zblmgl0ZN(z,b)+1
5045 IF SL>=zbllenZN(z,b) THEN GOTO 5071
5050 neu=tr+1:IF neu>spanz THEN neu=spanz
5055 IF neu>zblmgl1ZN(z,b) THEN neu=zblmgl1ZN(z,b)
5060 IF neu<=zblmgl0ZN(z,b) THEN GOTO 5071
5065 zblmgl0ZN(z,b)=neu:ver=1:rules(7)=2
5071 :
5100 tr=0:FOR x=zblmgl1ZN(z,b) TO zblmgl0ZN(z,b) STEP -1
5105 IF feldZS(z,x)=COLTRENN THEN tr=x:x=zblmgl0ZN(z,b)-1
5110 NEXT x
5115 IF tr<=0 THEN GOTO 5170
5120 SR=zblmgl1ZN(z,b)-(tr+1)+1
5125 IF SR>=zbllenZN(z,b) THEN GOTO 5160
5130 neu=tr-1:IF neu<1 THEN neu=1
5135 IF neu<zblmgl0ZN(z,b) THEN GOTO 5160
5140 IF neu>=zblmgl1ZN(z,b) THEN GOTO 5160
5145 zblmgl1ZN(z,b)=neu:ver=1:rules(7)=2
5160 :
5170 NEXT b
5190 NEXT z
5210 FOR s=1 TO spanz
5215 FOR b=1 TO sblanzS(s)
5220 tr=0:FOR y=sblmgl0SN(s,b) TO sblmgl1SN(s,b)
5225 IF feldZS(y,s)=COLTRENN THEN tr=y:y=sblmgl1SN(s,b)+1
5230 NEXT y
5235 IF tr<=0 THEN GOTO 5271
5240 SL=(tr-1)-sblmgl0SN(s,b)+1
5245 IF SL>=sbllenSN(s,b) THEN GOTO 5271
5250 neu=tr+1:IF neu>zeanz THEN neu=zeanz
5255 IF neu>sblmgl1SN(s,b) THEN neu=sblmgl1SN(s,b)
5260 IF neu<=sblmgl0SN(s,b) THEN GOTO 5271
5265 sblmgl0SN(s,b)=neu:ver=1:rules(7)=2
5271 :
5300 tr=0:FOR y=sblmgl1SN(s,b) TO sblmgl0SN(s,b) STEP -1
5305 IF feldZS(y,s)=COLTRENN THEN tr=y:y=sblmgl0SN(s,b)-1
5310 NEXT y
5315 IF tr<=0 THEN GOTO 5370
5320 SR=sblmgl1SN(s,b)-(tr+1)+1
5325 IF SR>=sbllenSN(s,b) THEN GOTO 5360
5330 neu=tr-1:IF neu<1 THEN neu=1
5335 IF neu<sblmgl0SN(s,b) THEN GOTO 5360
5340 IF neu>=sblmgl1SN(s,b) THEN GOTO 5360
5345 sblmgl1SN(s,b)=neu:ver=1:rules(7)=2
5360 :
5370 NEXT b
5390 NEXT s
5900 '
5910 'Regel 8: Programmzeilen 6000-6499
5920 'Wenn ein COLUNDEF-Feld in KEINEM MGL-Bereich einer Zeile (oder Spalte) ist, dann muss es ein Trennfeld sein.
6000 REM Regel 8
6002 LOCATE 1,1:PRINT PM$;loops;") Regel 8 ...     "
6010 FOR z=1 TO zeanz
6013 FOR s=1 TO spanz
6015 IF feldZS(z,s)<>COLUNDEF THEN GOTO 6070
6017 blz=0:FOR b=1 TO zblanzZ(z)
6020 IF zblmgl0ZN(z,b)<=s AND s<=zblmgl1ZN(z,b) THEN blz=b:b=zblanzZ(z)+1
6023 NEXT b
6025 IF blz>0 THEN GOTO 6035
6030 feldZS(z,s)=COLTRENN:ver=1:rules(8)=1
6033 GOTO 6070
6035 :
6040 bls=0:FOR b=1 TO sblanzS(s)
6043 IF sblmgl0SN(s,b)<=z AND z<=sblmgl1SN(s,b) THEN bls=b:b=sblanzS(s)+1
6045 NEXT b
6050 IF bls>0 THEN GOTO 6060
6055 feldZS(z,s)=COLTRENN:ver=1:rules(8)=1
6060 :
6070 NEXT s
6090 NEXT z
6400 '
6410 'Regel 9: Programmzeilen 6500-6999
6420 'Wenn DEF links oder rechts durch COLTRENN begrenzt (oder oben/unten bei Spalten), dann ist der Block voll identifiziert, DEF1=DEF0+LEN-1 MGL wird auf DEF gesetzt.
6500 REM Regel 9
6502 LOCATE 1,1:PRINT PM$;loops;") Regel 9 ...     "
6525 FOR z=1 TO zeanz:FOR b=1 TO zblanzZ(z)
6527 IF zbldef0ZN(z,b)<=0 THEN GOTO 6570
6530 L=zbldef0ZN(z,b)-1
6533 IF L>0 THEN IF feldZS(z,L)<>COLTRENN THEN GOTO 6545
6535 w=zbldef0ZN(z,b)+zbllenZN(z,b)-1
6537 IF zbldef1ZN(z,b)>=w THEN GOTO 6545
6540 ver=1:rules(9)=2:zbldef1ZN(z,b)=w:zblmgl0ZN(z,b)=zbldef0ZN(z,b):zblmgl1ZN(z,b)=zbldef1ZN(z,b)
6545 :
6550 R=zbldef1ZN(z,b)+1
6553 IF R<=spanz THEN IF feldZS(z,R)<>COLTRENN THEN GOTO 6567
6557 w=zbldef1ZN(z,b)-(zbllenZN(z,b)-1)
6560 IF zbldef0ZN(z,b)>0 AND zbldef0ZN(z,b)<=w THEN GOTO 6567
6565 ver=1:rules(9)=2:zbldef0ZN(z,b)=w:zblmgl0ZN(z,b)=zbldef0ZN(z,b):zblmgl1ZN(z,b)=zbldef1ZN(z,b)
6567 :
6570 NEXT b
6590 NEXT z
6900 '
6910 'Regel 10: Programmzeilen 7000-7999
6920 'wenn ein COLBLOCK-Feld-Streak in KEINEM DEF-Bereich ist, identifiziere alle MGL-Bereich, in dem es liegt. Alle Blöcke b, in deren MGL es liegt, können, wenn LEN(b)<|DEF| ist, entfernt werden. Wenn dann nur
6930 'einer übrigbleibt, gehört der COLBLOCK-Bereich zu diesem Block b und begründet eine DEF-Region.
7000 REM Regel 10
7002 LOCATE 1,1:PRINT PM$;loops;") Regel 10 ...     "
7010 FOR z=1 TO zeanz:s=0
7011 s=s+1:IF s>spanz THEN GOTO 7190
7020 IF feldZS(z,s)<>COLBLOCK THEN GOTO 7170
7030 x0=s:x1=s:FOR x=s+1 TO spanz
7040 IF feldZS(z,x)<>COLBLOCK THEN x=spanz+1 ELSE x1=x
7050 NEXT x
7060 orphan=1:FOR b=1 TO zblanzZ(z)
7070 IF zbldef0ZN(z,b)>0 THEN IF zbldef0ZN(z,b)<=x0 AND x1<=zbldef1ZN(z,b) THEN orphan=0:b=zblanzZ(z)+1
7080 NEXT b
7090 IF orphan<=0 THEN GOTO 7160
7095 oneposs=0:FOR b=1 TO zblanzZ(z)
7100 IF NOT (zblmgl0ZN(z,b)<=x0 AND x1<=zblmgl1ZN(z,b)) THEN GOTO 7120
7110 IF (x1-x0+1)<=zbllenZN(z,b) THEN IF oneposs=0 THEN oneposs=b ELSE oneposs=-1:b=zblanzZ(z)
7120 NEXT b
7125 IF oneposs<=0 THEN GOTO 7160
7130 IF zbldef0ZN(z,oneposs)>x0 OR zbldef0ZN(z,oneposs)=0 THEN zbldef0ZN(z,oneposs)=x0:ver=1:rules(10)=2
7132 IF zbldef1ZN(z,oneposs)<x1 OR zbldef1ZN(z,oneposs)=0 THEN zbldef1ZN(z,oneposs)=x1:ver=1:rules(10)=2
7160 s=x1
7170 GOTO 7011
7190 NEXT z
7210 FOR s=1 TO spanz:z=0
7211 z=z+1:IF z>zeanz THEN GOTO 7390
7220 IF feldZS(z,s)<>COLBLOCK THEN GOTO 7370
7230 y0=z:y1=z:FOR y=z+1 TO zeanz
7240 IF feldZS(y,s)<>COLBLOCK THEN y=zeanz+1 ELSE y1=y
7250 NEXT y
7260 orphan=1:FOR b=1 TO sblanzS(s)
7270 IF sbldef0SN(s,b)>0 THEN IF sbldef0SN(s,b)<=y0 AND y1<=sbldef1SN(s,b) THEN orphan=0:b=sblanzS(s)+1
7280 NEXT b
7290 IF orphan<=0 THEN GOTO 7360
7295 oneposs=0:FOR b=1 TO sblanzS(s)
7300 IF NOT (sblmgl0SN(s,b)<=y0 AND y1<=sblmgl1SN(s,b)) THEN GOTO 7320
7310 IF (y1-y0+1)<=sbllenSN(s,b) THEN IF oneposs=0 THEN oneposs=b ELSE oneposs=-1:b=sblanzS(s)
7320 NEXT b
7325 IF oneposs<=0 THEN GOTO 7360
7327 IF sbldef0SN(s,oneposs)=y0 AND sbldef1SN(s,oneposs)=y1 THEN GOTO 7360
7330 IF sbldef0SN(s,oneposs)>y0 OR sbldef0SN(s,oneposs)=0 THEN sbldef0SN(s,oneposs)=y0:ver=1:rules(10)=2
7332 IF sbldef1SN(s,oneposs)<y1 OR sbldef1SN(s,oneposs)=0 THEN sbldef1SN(s,oneposs)=y1:ver=1:rules(10)=2
7360 z=y1
7370 GOTO 7211
7390 NEXT s
7400 '
7410 'Regel 11: Programmzeilen 7500-7999
7420 'Wenn MGL(b) mit DEF(b+1) oder DEF(b-1) überlappt, dann kann man MGL(b) anpassen, denn der DEF(b+1) oder DEF(b-1) gehört nicht mehr dazu.
7500 REM Regel 11
7502 LOCATE 1,1:PRINT PM$;loops;") Regel 11 ...     "
7510 FOR z=1 TO zeanz:IF zblanzZ(z)<=1 THEN GOTO 7690
7515 FOR b=2 TO zblanzZ(z):IF zbldef0ZN(z,b-1)<=0 THEN GOTO 7540
7520 IF NOT (zblmgl0ZN(z,b)<=zbldef1ZN(z,b-1) AND zbldef1ZN(z,b-1)<=zblmgl1ZN(z,b)) THEN GOTO 7540
7525 w=zbldef1ZN(z,b-1)+2:IF w>spanz THEN w=spanz
7530 IF w<=zblmgl0ZN(z,b) THEN GOTO 7540
7535 zblmgl0ZN(z,b)=w:ver=1:rules(11)=2
7540 NEXT b
7615 FOR b=1 TO zblanzZ(z)-1:IF zbldef0ZN(z,b+1)<=0 THEN GOTO 7640
7620 IF NOT (zblmgl0ZN(z,b)<=zbldef0ZN(z,b+1) AND zbldef1ZN(z,b+1)<=zblmgl1ZN(z,b)) THEN GOTO 7640
7625 w=zbldef0ZN(z,b+1)-2:IF w<1 THEN w=1
7630 IF w>=zblmgl1ZN(z,b) THEN GOTO 7640
7635 zblmgl1ZN(z,b)=w:ver=1:rules(11)=2
7640 NEXT b
7690 NEXT z
7710 FOR s=1 TO spanz:IF sblanzS(s)<=1 THEN GOTO 7890
7715 FOR b=2 TO sblanzS(s):IF sbldef0SN(s,b-1)<=0 THEN GOTO 7740
7720 IF NOT (sblmgl0SN(s,b)<=sbldef1SN(s,b-1) AND sbldef1SN(s,b-1)<=sblmgl1SN(s,b)) THEN GOTO 7740
7725 w=sbldef1SN(s,b-1)+2:IF w>zeanz THEN w=zeanz
7730 IF w<=sblmgl0SN(s,b) THEN GOTO 7740
7735 sblmgl0SN(s,b)=w:ver=1:rules(11)=2
7740 NEXT b
7815 FOR b=1 TO sblanzS(s)-1:IF sbldef0SN(s,b+1)<=0 THEN GOTO 7840
7820 IF NOT (sblmgl0SN(s,b)<=sbldef0SN(s,b+1) AND sbldef1SN(s,b+1)<=sblmgl1SN(s,b)) THEN GOTO 7840
7825 w=sbldef0SN(s,b+1)-2:IF w<1 THEN w=1
7830 IF w>=sblmgl1SN(s,b) THEN GOTO 7840
7835 sblmgl1SN(s,b)=w:ver=1:rules(11)=2
7840 NEXT b
7890 NEXT s
7900 '
7910 'Regel 12: Programmzeilen 8000-8999
7920 'Wenn ein COLBLOCK-Feld x in bspw. einer Zeile links davon nur Felder hat, die COLTRENN oder COLBLOCK sind, dann muss identifiziert werden, welcher Block b an dieser Position x beginnt. Damit ist dessen Laenge bekannt, und der gesamte Block b kann gesetzt werden.
8000 REM Regel 12
8002 LOCATE 1,1:PRINT PM$;loops;") Regel 12 ...     "
8010 FOR z=1 TO zeanz:FOR b=1 TO zblanzZ(z)
8013 IF zbldef0ZN(z,b)>0 OR zblmgl0ZN(z,b)<=0 THEN GOTO 8170
8016 IF feldZS(z,zblmgl0ZN(z,b))<>COLBLOCK THEN GOTO 8060
8020 alle=1
8021 IF zblmgl0ZN(z,b)>1 THEN IF feldZS(z,zblmgl0ZN(z,b)-1)<>COLTRENN THEN GOTO 8060
8022 last=COLTRENN:idx=0:FOR x=1 TO zblmgl0ZN(z,b)
8023 IF feldZS(z,x)=COLUNDEF THEN alle=0:x=zblmgl0ZN(z,b)+1:GOTO 8029
8024 IF feldZS(z,x)=COLBLOCK AND last=COLTRENN THEN idx=idx+1
8025 last=feldZS(z,x)
8029 NEXT x
8030 IF idx<>b THEN alle=0
8032 IF alle<=0 THEN GOTO 8060
8033 ende=b-1:IF b<1 THEN GOTO 8060
8034 FOR b1=1 TO (b-1)
8036 IF zbldef0ZN(z,b1)<>zblmgl0ZN(z,b1) OR zbldef1ZN(z,b1)<>zblmgl1ZN(z,b1) THEN alle=0:b1=b
8040 NEXT b1
8043 IF alle<=0 THEN GOTO 8060
8050 IF zbldef0ZN(z,b)<>zblmgl0ZN(z,b) THEN zbldef0ZN(z,b)=zblmgl0ZN(z,b):ver=1:rules(12)=2
8052 IF zbldef1ZN(z,b)<>zbldef0ZN(z,b) THEN zbldef1ZN(z,b)=zbldef0ZN(z,b):ver=1:rules(12)=2
8060 :
8116 IF feldZS(z,zblmgl1ZN(z,b))<>COLBLOCK THEN GOTO 8160
8120 alle=1
8121 IF zblmgl1ZN(z,b)<spanz THEN IF feldZS(z,zblmgl1ZN(z,b)+1)<>COLTRENN THEN GOTO 8160
8122 last=COLTRENN:idx=zblanzZ(z)+1:FOR x=spanz TO zblmgl1ZN(z,b) STEP -1
8123 IF feldZS(z,x)=COLUNDEF THEN alle=0:x=zblmgl1ZN(z,b)-1:GOTO 8129
8124 IF feldZS(z,x)=COLBLOCK AND last=COLTRENN THEN idx=idx-1
8125 last=feldZS(z,x)
8129 NEXT x
8130 IF idx<>b THEN alle=0
8132 IF alle<=0 THEN GOTO 8160
8133 anf=b+1:IF anf>zblanzZ(z) THEN GOTO 8160
8134 FOR b1=anf TO zblanzZ(z)
8136 IF zbldef0ZN(z,b1)<>zblmgl0ZN(z,b1) OR zbldef1ZN(z,b1)<>zblmgl1ZN(z,b1) THEN alle=0:b1=zblanzZ(z)+1
8140 NEXT b1
8143 IF alle<=0 THEN GOTO 8160
8150 IF zbldef1ZN(z,b)<>zblmgl1ZN(z,b) THEN zbldef1ZN(z,b)=zblmgl1ZN(z,b):ver=1:rules(12)=2
8152 IF zbldef0ZN(z,b)<>zbldef1ZN(z,b) THEN zbldef0ZN(z,b)=zbldef1ZN(z,b):ver=1:rules(12)=2
8160 :
8170 NEXT b
8190 NEXT z
8210 FOR s=1 TO spanz:FOR b=1 TO sblanzS(s)
8213 IF sbldef0SN(s,b)>0 OR sblmgl0SN(s,b)<=0 THEN GOTO 8370
8216 IF feldZS(sblmgl0SN(s,b),s)<>COLBLOCK THEN GOTO 8260
8220 alle=1
8221 IF sblmgl0SN(s,b)>1 THEN IF feldZS(sblmgl0SN(s,b)-1,s)<>COLTRENN THEN GOTO 8260
8222 last=COLTRENN:idx=0:FOR y=1 TO sblmgl0SN(s,b)
8223 IF feldZS(y,s)=COLUNDEF THEN alle=0:y=sblmgl0SN(s,b)+1:GOTO 8229
8224 IF feldZS(y,s)=COLBLOCK AND last=COLTRENN THEN idx=idx+1
8225 last=feldZS(y,s)
8229 NEXT y
8230 IF idx<>b THEN alle=0
8232 IF alle<=0 THEN GOTO 8260
8233 ende=b-1:IF b<1 THEN GOTO 8260
8234 FOR b1=1 TO (b-1)
8236 IF sbldef0SN(s,b1)<>sblmgl0SN(s,b1) OR sbldef1SN(s,b1)<>sblmgl1SN(s,b1) THEN alle=0:b1=b
8240 NEXT b1
8243 IF alle<=0 THEN GOTO 8260
8250 IF sbldef0SN(s,b)<>sblmgl0SN(s,b) THEN sbldef0SN(s,b)=sblmgl0SN(s,b):ver=1:rules(12)=2
8252 IF sbldef1SN(s,b)<>sbldef0SN(s,b) THEN sbldef1SN(s,b)=sbldef0SN(s,b):ver=1:rules(12)=2
8260 :
8316 IF feldZS(sblmgl1SN(s,b),s)<>COLBLOCK THEN GOTO 8360
8320 alle=1
8321 IF sblmgl1SN(s,b)<zeanz THEN IF feldZS(sblmgl1SN(s,b)+1,s)<>COLTRENN THEN GOTO 8360
8322 last=COLTRENN:idx=sblanzS(s)+1:FOR y=zeanz TO sblmgl1SN(s,b) STEP -1
8323 IF feldZS(y,s)=COLUNDEF THEN alle=0:y=sblmgl1SN(s,b)-1:GOTO 8329
8324 IF feldZS(y,s)=COLBLOCK AND last=COLTRENN THEN idx=idx-1
8325 last=feldZS(y,s)
8329 NEXT y
8330 IF idx<>b THEN alle=0
8332 IF alle<=0 THEN GOTO 8360
8333 anf=b+1:IF anf>sblanzS(s) THEN GOTO 8360
8334 FOR b1=anf TO sblanzS(s)
8336 IF sbldef0SN(s,b1)<>sblmgl0SN(s,b1) OR sbldef1SN(s,b1)<>sblmgl1SN(s,b1) THEN alle=0:b1=sblanzS(s)+1
8340 NEXT b1
8343 IF alle<=0 THEN GOTO 8360
8350 IF sbldef1SN(s,b)<>sblmgl1SN(s,b) THEN sbldef1SN(s,b)=sblmgl1SN(s,b):ver=1:rules(12)=2
8352 IF sbldef0SN(s,b)<>sbldef1SN(s,b) THEN sbldef0SN(s,b)=sbldef1SN(s,b):ver=1:rules(12)=2
8360 :
8370 NEXT b
8390 NEXT s
59999 IF ver>0 THEN GOTO 900:REM erneute Regelanwendung
60000 fertig=1
60005 REM kein UNDEF-Feld mehr
60010 FOR z=1 TO zeanz:IF fertig<=0 THEN GOTO 60090
60020 FOR s=1 TO spanz
60030 IF feldZS(z,s)=COLUNDEF THEN fertig=0:s=spanz+1
60070 NEXT s
60090 NEXT z
60100 IF fertig<=0 THEN PRINT"ungeloest beendet.                ":GOTO 61000
60105 konsistent=1
60107 FOR z=1 TO zeanz
60110 IF konsistent<=0 THEN z=zeanz+1:GOTO 60190
60113 FOR b=1 TO zblanzZ(z)
60115 IF konsistent<=0 THEN b=zblanzZ(z)+1:GOTO 60170
60117 IF zbldef0ZN(z,b)<=0 THEN konsistent=0:b=zblanzZ(z)+1:GOTO 60170
60120 REM links/rechts von DEF muss TRENN-Feld oder Rand sein
60123 w=zbldef0ZN(z,b)-1:IF w>0 THEN IF feldZS(z,w)<>COLTRENN THEN konsistent=0
60126 w=zbldef1ZN(z,b)+1:IF w<=spanz THEN IF feldZS(z,w)<>COLTRENN THEN konsistent=0
60148 REM DEF-Bereich nur BLOCK/OK-Feld
60150 FOR x=zbldef0ZN(z,b) TO zbldef1ZN(z,b)
60153 IF feldZS(z,x)=COLUNDEF OR feldZS(z,x)=COLTRENN THEN konsistent=0:x=zbldef1ZN(z,b)+1:GOTO 60160
60156 feldZS(z,x)=COLOK
60160 NEXT x
60170 NEXT b
60190 NEXT z
60195 IF konsistent<=0 THEN GOTO 60600
60405 konsistent=1
60407 FOR s=1 TO spanz
60410 IF konsistent<=0 THEN s=spanz+1:GOTO 60490
60413 FOR b=1 TO sblanzS(s)
60415 IF konsistent<=0 THEN b=sblanzS(s)+1:GOTO 60470
60417 IF sbldef0SN(s,b)<=0 THEN konsistent=0:b=sblanzS(s)+1:GOTO 60470
60423 w=sbldef0SN(s,b)-1:IF w>0 THEN IF feldZS(w,s)<>COLTRENN THEN konsistent=0
60426 w=sbldef1SN(s,b)+1:IF w<=zeanz THEN IF feldZS(w,s)<>COLTRENN THEN konsistent=0
60450 FOR y=sbldef0SN(s,b) TO sbldef1SN(s,b)
60453 IF feldZS(y,s)=COLUNDEF OR feldZS(y,s)=COLTRENN THEN konsistent=0:y=sbldef1SN(s,b)+1:GOTO 60460
60456 feldZS(y,s)=COLOK
60460 NEXT y
60470 NEXT b
60490 NEXT s
60495 IF konsistent<=0 THEN GOTO 60600
60600 FOR z=1 TO zeanz:FOR s=1 TO spanz
60605 IF feldZS(z,s)=COLBLOCK OR feldZS(z,s)=COLUNDEF THEN konsistent=0
60610 NEXT s:NEXT z
60615 IF konsistent>0 THEN PRINT"geloest und konsistent.               " ELSE PRINT"INKONSISTENT                   "
61000 :
61010 print round((time-t!)/300,3);"Sekunden"
61999 END
62470 '
62480 '
62490 'Menu
62500 print "Logicals":print
62510 print "1) Fraktal"
62520 print "2) Kamera"
62530 print "3) Labyrinth"
62540 print "4) Telefon"
62550 print
62560 print "Please select: ";
62570 t$=inkey$:if t$="" then 62570
62580 ?t$
62590 t=val(t$)
62600 if t>4 then 62560
62610 on t gosub 63000,63300,63600,63900
62620 return
62720 '
62998 '
62999 'Fraktal
63000 zoom=12
63010 PM$="Fraktal: "
63020 zeanz=23:spanz=34:bmaxanz=5
63030 restore 63060
63040 return
63050 REM Zeilen
63060 DATA 2,2,0,6,0,1,11,0,4,1,9,0,2,1,5,6,0
63070 DATA 5,1,15,0,5,1,1,15,0,25,0,11,11,1,0,2,6,10,6,0
63080 DATA 10,17,0,9,9,9,0,17,6,2,0,1,15,9,0,15,10,1,0
63090 DATA 26,0,14,2,2,4,0,13,1,4,0,6,2,3,2,2,0,9,2,0
63100 DATA 6,3,1,0,3,3,0,2,1,0
63110 DATA -1
63120 REM Spalten
63130 DATA 6,0,6,1,0,2,7,0,9,0,4,4,1,0
63140 DATA 6,2,0,9,3,1,0,8,7,0,17,0,15,0
63150 DATA 13,0,2,10,0,13,4,0,14,3,0,16,0
63160 DATA 15,0,14,0,15,0,1,14,0,1,2,14,0
63170 DATA 4,12,0,10,1,0,8,7,0,7,8,0,8,7,1,0
63180 DATA 7,8,0,4,9,0,2,7,0,1,3,6,0,9,0
63190 DATA 7,2,0,5,0,1,1,0,2,0
63200 DATA -1
63210 '
63220 '
63290 'Kamera
63300 zoom=12
63310 PM$="Kamera: PML 03/2011,23: "
63320 zeanz=20:spanz=30:bmaxanz=7
63330 restore 63360
63340 return
63350 REM Zeilen
63360 DATA 7,0,3,2,4,5,0,6,5,3,0,7,3,1,8,0,1,1,1,1,2,0
63370 DATA 1,1,5,2,0,25,0,6,7,3,0,11,7,3,0,2,2,1,2,7,3,0
63380 DATA 2,2,2,1,3,7,3,0,1,4,2,2,2,7,3,0,1,4,2,2,2,7,3,0,1,4,2,2,2,7,3,0,1,4,2,2,2,7,3,0
63390 DATA 1,4,2,1,3,7,3,0,2,2,2,1,2,7,3,0,2,2,4,6,1,2,0,8,11,1,0,10,3,0
63400 DATA -1
63410 REM Spalten
63420 DATA 7,0,2,2,0,2,5,2,0,1,7,1,0,6,7,1,0
63430 DATA 1,4,5,2,0,2,5,3,0,3,3,7,1,0,3,3,5,2,0,9,4,0
63440 DATA 2,1,1,6,1,1,0,2,1,1,4,1,1,0,2,2,1,3,3,1,0,1,1,1,8,1,0,1,1,1,6,1,0
63450 DATA 1,1,1,0,2,1,2,0,20,0,3,14,0,2,14,0
63460 DATA 1,14,0,3,14,0,1,1,13,0,3,11,1,0,3,1,2,0
63470 DATA 3,11,1,0,1,13,0,15,1,0,4,1,0,2,0
63480 DATA -1
63490 '
63500 '
63590 'Labyrinth
63600 zoom=8
63610 PM$="Labyrinth: PML 03/2013,08: "
63620 zeanz=30:spanz=30:bmaxanz=8
63630 restore 63660
63640 return
63650 REM Zeilen
63660 DATA 8,2,6,4,0,1,3,2,6,3,2,0,2,3,5,4,3,0,1,10,4,2,0,4,7,7,3,1,0
63670 DATA 2,3,3,2,2,1,0,1,2,12,4,2,2,0,1,3,3,2,2,3,2,0,1,7,4,2,5,2,0,2,4,6,1,0
63680 DATA 3,3,4,2,2,2,1,0,5,1,6,7,0,8,1,1,11,0,7,6,4,2,2,0,1,2,5,3,2,2,0
63690 DATA 3,4,2,2,2,3,0,3,2,2,5,2,5,1,0,2,1,2,7,1,5,0,5,2,3,4,3,0,5,2,3,2,2,3,1,0
63700 DATA 3,4,3,2,1,3,3,0,5,1,1,4,2,1,3,0,1,5,1,4,1,2,0,4,10,2,3,3,2,0,4,5,3,4,3,1,0
63710 DATA 3,1,3,2,7,4,1,0,3,2,2,3,1,0,8,2,3,9,1,0,1,2,5,1,6,0,4,6,2,2,0
63720 DATA -1
63730 REM Spalten
63740 DATA 4,20,3,0,1,1,5,7,3,1,1,0,1,4,4,2,4,3,1,1,0,1,7,3,2,1,2,1,1,0,1,2,3,4,4,1,2,0
63750 DATA 1,2,1,3,3,1,6,0,1,1,2,3,2,4,2,3,0,2,1,2,3,1,6,2,1,0,2,1,1,1,4,1,4,1,0,2,2,1,1,6,2,8,0
63760 DATA 2,1,1,3,3,2,5,0,2,2,3,2,2,3,3,2,0,2,2,3,2,2,3,5,2,0,5,1,1,2,1,4,2,0,2,3,2,3,3,6,0
63770 DATA 3,3,1,1,3,3,3,0,3,2,1,1,1,2,1,5,0,3,1,2,1,2,3,5,1,0,3,1,2,9,2,1,0,2,1,5,5,1,2,2,1,0
63780 DATA 1,2,3,1,1,4,1,2,0,3,1,5,1,1,2,1,2,0,6,1,5,1,2,2,1,2,0,5,1,2,2,2,2,0,2,3,2,4,7,2,0
63790 DATA 5,2,4,3,2,0,9,3,2,2,5,0,5,4,1,2,2,1,1,1,0,1,1,3,2,1,6,1,0,1,5,1,2,4,1,0
63800 DATA -1
63810 '
63820 '
63890 'Telefon
63900 zoom=12
63910 PM$="Telefon: PML 04/2011,09: "
63920 zeanz=20:spanz=25:bmaxanz=7
63930 restore 63960
63940 return
63950 REM Zeilen
63960 DATA 6,0,16,0,7,3,7,0,5,1,1,5,0,4,2,2,5,0
63970 DATA 6,8,0,12,5,0,1,4,6,0,2,3,1,2,3,0,1,3,1,2,3,3,0
63980 DATA 1,3,1,2,1,1,4,0,1,3,1,2,3,1,3,0,1,3,1,2,2,2,0,1,3,1,5,4,0,7,1,3,1,0
63990 DATA 2,6,5,2,0,2,4,5,0,6,1,5,0,14,0,7,0
64000 DATA -1
64010 REM Spalten
64020 DATA 10,0,3,4,0,2,2,1,0,4,3,1,0,5,4,2,0
64030 DATA 5,3,1,2,0,6,4,2,1,0,3,2,3,1,1,0,2,4,1,2,0,2,4,1,2,0
64040 DATA 16,2,0,2,3,5,0,3,2,3,1,2,0,3,1,5,1,2,0,3,4,2,2,2,0
64050 DATA 2,4,3,1,1,1,0,7,1,1,1,1,2,0,2,2,3,1,1,2,0,2,3,2,1,1,0,4,6,1,2,0
64060 DATA 4,3,1,2,0,4,3,2,1,0,3,2,1,1,0,2,3,2,0,4,0
64070 DATA -1
64080 '
*/ });
