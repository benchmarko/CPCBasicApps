/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
996 rem typen - Typen
997 rem Rene Derkx
998 chain merge "basicode"
1000 A=50:GOTO 20:REM TYPEN
1010 REM
1020 REM ** FALCON INTRO **
1030 REM
1040 A=2:B=27:SR$="  FALCON":EF=5:S=0:VT=VE:FR=0:GOSUB 280
1050 IF (A=15) AND (B=14) THEN GOTO 1110
1060 HO=A-1
1070 VE=10:GOSUB 110:PRINT " THE FALCON"
1080 HO=B:VE=12:GOSUB 110:PRINT "PRESENTS "
1090 GOSUB 200
1100 A=A+1:B=B-1:GOTO 1050
1110 GOSUB 210:IF IN=13 THEN GOSUB 5300:GOTO 1130
1120 PW=0:IF IN=70 THEN PW=1
1130 GOSUB 100
1500 REM
1510 REM ** PULL DOWN MENU'S **
1520 REM
1530 RESTORE :GOSUB 600:CN=0:PW=0:RD=99
1540 HO=0:VE=.085:GOSUB 620
1550 READ HO,VE:IF HO=9 THEN GOTO 1600
1560 IF HO=8 THEN READ HO,VE:VE=VE+.035:GOSUB 620:GOTO 1550
1570 VE=VE+.035
1580 GOSUB 630
1590 GOTO 1550
1600 SR$="WRITTEN BY: RENE DERKX"
1610 HO=.153:VE=.4:GOSUB 650
1620 SR$="FSB - 002"
1630 HO=.35:VE=0:GOSUB 650
1640 HO=0:VE=.55:GOSUB 620:HO=.9999:GOSUB 630
1650 SR$="- KEUZE MENU -":HO=.27:VE=.6:GOSUB 650
1660 SR$="START TYPEN":HO=.31:VE=.75:GOSUB 650
1670 SR$="INSTRUCTIES":VE=.85:GOSUB 650
1680 HO=.25:SR$=">":VE=.75
1690 CN=0:GOSUB 650
1700 GOSUB 210:CN=1:GOSUB 650:IF IN=13 THEN GOTO 1740
1710 IF IN=31 THEN VE=.75
1720 IF IN=30 THEN VE=.85
1730 GOTO 1690
1740 S=0:IF VE=.75 THEN GOTO 1810
1750 GOSUB 100:VE=VT
1760 READ A$:IF A$="*" THEN GOTO 1780
1770 GOSUB 110:PRINT A$:GOSUB 5500:PRINT :GOSUB 5500:GOTO 1760
1780 PRINT :PRINT "Press <return>";
1790 GOSUB 210:IF IN<> 13 THEN GOTO 1790
1800 GOTO 1530
1810 GOSUB 5030
2000 REM
2010 REM ** SCREEN BUILD UP **
2020 REM
2030 GOSUB 100:HO=9:VE=0:GOSUB 110:PRINT "FSB - 002    TYPEN"
2040 HO=8:VE=21:GOSUB 110:PRINT "PROGRAMMED BY FALCON"
2050 HO=0:VE=6:GOSUB 110:FOR K=1 TO 40:PRINT "-";:NEXT K
2060 HO=0:VE=15:GOSUB 110:FOR K=1 TO 40:PRINT "-";:NEXT K
2070 HO=0:VE=17:GOSUB 110:FOR K=1 TO 40:PRINT "-";:NEXT K
2080 HO=5:FOR K=7 TO 13 STEP 2:VE=K:GOSUB 110:PRINT "!:"
2090 VE=K+1:GOSUB 110:PRINT ":!":NEXT K:MU=8:VW=0:SC=0
2100 IF PW=1 THEN LE=1:PO=999:GOSUB 4210:GOTO 2120
2110 LE=1:PO=10:GOSUB 4210
2120 RESTORE 
2130 READ A$:IF A$<> "*" THEN GOTO 2130
2140 HO=14:VE=10:GOSUB 110:PRINT "READY !!!":HO=14:VE=10
2150 SD=50:GOSUB 450:GOSUB 110:PRINT "         "
2160 READ NM$:HO=MU-3:VE=10:GOSUB 110:PRINT ":!"
3000 REM
3010 REM ** FIRST SCROLL WORD **
3020 REM
3030 QQ$="":WL=LEN (NM$):PC=1:TE=0:GOSUB 4600:SP=0:SV=0
3040 FOR P=39 TO 39-LEN (NM$) STEP -1:TE=TE+1
3050 HO=P:VE=10:GOSUB 110:IF TE=1 THEN PRINT "  ":GOTO 3070
3060 PRINT " ";LEFT$(NM$,TE-1);" "
3070 GOSUB 200:GOSUB 4500:IF IN$=MID$(NM$,PC,1) THEN GOSUB 4030
3080 IF NM$=QQ$ THEN P=0:GOTO 3100
3090 SD=SR:GOSUB 400
3100 NEXT P:IF NM$=QQ$ THEN GOTO 2160
3110 M=P+PC
3120 REM
3130 REM ** SECOND SCROLL WORD **
3140 REM
3150 HO=M:VE=10:GOSUB 110:PRINT RIGHT$(NM$,WL-PC+1);:PRINT " "
3160 GOSUB 200:GOSUB 4500:IF IN$<> MID$(NM$,PC,1) THEN GOTO 3190
3170 GOSUB 4030:IF NM$=QQ$ THEN GOTO 2160
3180 M=M+1
3190 SP=0:SV=0:SD=SR:GOSUB 400
3200 M=M-1:IF M>= MU-2 THEN GOTO 3150
3500 REM
3510 REM ** FAILED OR SUCCEED **
3520 REM
3530 PO=PO-WL+PC-1:VE=10:IF PO<0 THEN PO=0
3540 FOR S=1 TO 7:HO=6+MU-8:GOSUB 110:FOR Q=1 TO S
3550 PRINT "*";:NEXT Q:GOSUB 4400:PRINT "      ":NEXT S
3560 FOR S=7 TO 1 STEP -1:HO=6+MU-8:GOSUB 110
3570 FOR Q=1 TO S:PRINT "*";:NEXT Q
3580 GOSUB 4400:PRINT "      ":NEXT S
3590 HO=MU-2:GOSUB 110:PRINT "!":GOSUB 4210
3600 IF PO>= 1 THEN SD=20:GOSUB 450:GOTO 2160
3610 HO=14:VE=10:GOSUB 110:PRINT "GAME OVER"
3620 GOSUB 4330:SD=30:GOSUB 450:GOSUB 5300:GOTO 1000
4000 REM
4010 REM ** SUBROUTINE LETTER CHECK **
4020 REM
4030 QQ$=LEFT$("                    ",PC)
4040 IF WL=PC THEN GOTO 4060
4050 NM$=QQ$+RIGHT$(NM$,WL-PC):PC=PC+1:GOTO 4110
4060 NM$=QQ$
4070 VE=10:FOR HO=M TO 40:GOSUB 110:PRINT " ":NEXT HO
4080 HO=MU-2:GOSUB 110:PRINT "!"
4090 HO=39-WL:GOSUB 110:PRINT "          "
4100 SC=SC+WL:GOSUB 4210:SD=20:GOSUB 450
4110 RETURN 
4200 REM
4210 HO=0:VE=16:GOSUB 110:PRINT "SCORE : ";SC
4220 HO=14:GOSUB 110:PRINT "POWER : ";PO
4230 HO=30:GOSUB 110:PRINT "LEVEL : ";LE
4240 RETURN 
4300 REM
4310 REM ** SOUND EFFECTS **
4320 REM
4330 SP=60:SD=.1
4340 FOR SS=15 TO 0 STEP -1:FOR SV=SS TO 1 STEP -1
4350 GOSUB 400:NEXT SV:NEXT SS
4360 RETURN 
4400 SP=127-S*4:SD=.1:SV=13:GOSUB 400:RETURN 
4500 SR$=IN$:GOSUB 330:IN$=SR$:RETURN 
4600 VW=VW+1:IF VW<> 5 THEN RETURN 
4610 IF LE=10 THEN GOTO 4830
4620 HO=MU-3:FOR K=7 TO 14:VE=K:GOSUB 110:PRINT "  ":NEXT K
4630 FOR S=20 TO 1 STEP -1:SP=127-S*4:SD=.1:SV=13:GOSUB 400
4640 NEXT S
4650 VW=0:HO=MU
4660 FOR K=7 TO 13 STEP 2:VE=K:GOSUB 110:PRINT "!:"
4670 VE=K+1:GOSUB 110:PRINT ":!":NEXT K
4680 MU=MU+3
4690 LE=LE+1:VE=16:HO=30:GOSUB 110:PRINT "LEVEL : ";LE
4700 RETURN 
4800 REM
4810 REM ** END PAGE **
4820 REM
4830 GOSUB 100
4840 FOR VE=1 TO 15:FOR HO=1 TO 16
4850 READ F:SR$=" ":IF F=1 THEN SR$="*"
4860 GOSUB 110:PRINT SR$
4870 NEXT HO:NEXT VE
4880 HO=18:VE=4:GOSUB 110:PRINT "WELL DONE !!!"
4890 VE=8:GOSUB 110:PRINT "YOU HAVE BEATEN ALL"
4900 VE=10:GOSUB 110:PRINT "THE LEVELS"
4910 VE=13:GOSUB 110:PRINT "YOU SCORED :"
4920 VE=15:GOSUB 110:PRINT SC;:PRINT " POINTS"
4930 VE=18:GOSUB 110:PRINT "SEE YOU NEXT ..."
4940 HO=4:VE=22:GOSUB 110:PRINT "THE FALCON    (C) 29/1/1990"
4950 GOSUB 200:IF IN=13 THEN GOSUB 5300:GOTO 1000
4960 GOTO 4950
5000 REM
5010 REM ** SOME OTHER SUBROUTINES **
5020 REM
5030 CN=1:HO=.31:VE=.75:SR$="START TYPEN":GOSUB 650
5040 VE=.85:SR$="INSTRUCTIES":GOSUB 650:CN=0
5050 SR$="NOVICE TYPERS":HO=.31:VE=.75:GOSUB 650
5060 SR$="ADVANCED TYPERS":VE=.85:GOSUB 650
5070 SR$="EXPERT TYPERS":VE=.95:GOSUB 650
5080 HO=.25:VE=.75:SR$=">"
5090 CN=0:GOSUB 650
5100 GOSUB 200:IF IN=13 THEN SR=6*(1.05-VE):RETURN 
5110 CN=1:GOSUB 650
5120 IF IN=31 THEN VE=VE-.1:IF VE<.74 THEN VE=.95
5130 IF IN=30 THEN VE=VE+.1:IF VE>.96 THEN VE=.75
5140 GOTO 5090
5300 HO=12:VE=19:GOSUB 110:PRINT "<Q> FOR QUIT ";
5310 GOSUB 210:IF IN=81 THEN GOTO 950
5320 RETURN 
5500 SD=S:S=S+.7:GOSUB 450:RETURN 
25000 DATA .2,.05,.2,.10,.125,.10,.125,.3,.075,.3,.075,.10
25010 DATA 0,.10,0,.05
25020 DATA .2,.05,.2,.175,.35,.175,.35,.25,.2,.25,.2,.3,.4
25030 DATA .3,.4,.05,.35,.05,.35,.125,.25,.125,.25,.05,.2
25040 DATA .05,8,8,.4,.05
25050 DATA .6,.05,.6,.175,.45,.175,.45,.3,.4,.3
25060 DATA 8,8,.45,.10,.55,.10,.55,.125,.45,.125,.45,.10
25070 DATA 8,8,.6,.05,.8,.05,.8,.10,.65,.10,.65,.15
25080 DATA .75,.15,.75,.2,.65,.2,.65,.25,.8,.25,.8
25090 DATA .3,.6,.3,.6,.05,8,8,.8,.05,.85,.05,.95,.20,.95
25100 DATA .05,.9999,.05,.9999,.3,.95,.3,.85,.15,.85,.3,.8
25110 DATA .3,.8,.05,9,9
25120 DATA "MET DIT PROGRAMMA KUNT U DE SNELHEID"
25130 DATA "VAN UW TYPEN OP DE PROEF STELLEN.   "
25140 DATA "DIT NU IN DE VORM VAN EEN SOORT 'EN-"
25150 DATA "TERTAINMENT GAME'.                  "
25160 DATA "HET PROGRAMMA BESTAAT UIT MEERDERE  "
25170 DATA "NIVEAUS EN IS DUS GESCHIKT VOOR DE  "
25180 DATA "TIEN-VINGER TYPERS EN VOOR DE MEN-  "
25190 DATA "SEN DIE MET 2 OF 1 VINGERS TYPEN.   "
25200 DATA "DE BEDOELING IS OM HET AFGEBEELDE   "
25210 DATA "WOORD OVER TE TYPEN, VOORDAT HET    "
25220 DATA "WOORD DE MUUR BEREIKT.              ","*"
25230 DATA "COMPUTER","FLOPPY DISK","JOYSTICK","DISKETTE"
25240 DATA "MICROSOFT","EXTENDED","HARDWARE","CASSETTE"
25250 DATA "BASICODE","STRUCTUUR","PRINTER","MONITOR"
25260 DATA "MONOCHROOM","MACHINETAAL","COBOL"
25270 DATA "INTERFACE","RESOLUTIE","RECORD","MODULE"
25280 DATA "VARIABELEN","KILOBYTE","ROUTINE"
25290 DATA "CAPACITEIT","INTERPRETER","DATABASE"
25300 DATA "CARTRIDGE","BINAIR","SUBROUTINE","PROGRAMMA"
25310 DATA "EDUCTATIEF","EDITOR","ASSEMBLY","INITIALISATIE"
25320 DATA "ALGORITME","PROCEDURE","MEDIUM","INSTRUCTIE"
25330 DATA "MEGABYTE","HARDDISK","BUFFER","DATA"
25340 DATA "ROBOT","MODEM","TUNER","BASIC","SPRITE"
25350 DATA "ROBOT","FALCON","EINDE","BEY"
25360 DATA 0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0
25370 DATA 1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1
25380 DATA 1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0
25390 DATA 1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1
25400 DATA 0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1
25410 DATA 1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1
25420 DATA 1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1
25430 DATA 0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0
25440 DATA 0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1
25450 DATA 0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0
30000 REM
30010 REM      FSB - 002
30020 REM
30030 REM Een programma om je
30040 REM typvaardigheid op de
30050 REM proef te stellen
30060 REM
32000 REM Geschreven door
32010 REM
32020 REM Rene Derkx,
32030 REM Deurneseweg 147,
32040 REM 5813 AA  YSSELSTEYN (L)
32050 REM
32060 REM op een MSX-2 computer
32070 REM
32080 REM dd 29/1/1990
32090 REM
32100 REM TROS-RADIO dd 900627
*/ });
