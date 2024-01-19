/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem points - Points
2 rem (c)
4 rem
10 MODE 1:BORDER 0
20 DIM a$(14)
30 FOR n=1 TO 14:a$(n)=" 6":NEXT n
40 a$(7)=" 0":a$(14)=" 0"
50 GOSUB 6000
55 INK 0,14:INK 1,24:INK 2,0:PAPER 2  
60 CLS:LOCATE 30,2:PRINT"Ende => ^"
80 ob$=CHR$(194)+CHR$(154)+CHR$(154)+CHR$(195)
82 un$=CHR$(193)+CHR$(154)+CHR$(154)+CHR$(192) 
84 mi$=CHR$(149)+"  "+CHR$(149) 
86 ob1$=CHR$(194)+CHR$(154)+CHR$(154)+CHR$(154)+CHR$(154)+CHR$(195)
88 un1$=CHR$(193)+CHR$(154)+CHR$(154)+CHR$(154)+CHR$(154)+CHR$(192)  
90 mi1$=CHR$(149)+"    "+CHR$(149)
100 LOCATE 3,7:PEN 0:PRINT"POINTS  1   2   3   4   5   6"
105 PRINT"  ";ob1$;ob$;ob$;ob$;ob$;ob$;ob$
110 FOR n=1 TO 3:PRINT"  ";mi1$;mi$;mi$;mi$;mi$;mi$;mi$:NEXT n
130 PRINT"  ";mi1$;un$;un$;un$;un$;un$;un$;:PEN 1:PRINT ob1$
140 PEN 0:PRINT"  ";mi1$ SPC(24);:PEN 1:PRINT mi1$
150 PEN 0:PRINT"  ";un1$;:PEN 1:PRINT ob$;ob$;ob$;ob$;ob$;ob$;mi1$
160 FOR n=1 TO 3:PRINT TAB(9);mi$;mi$;mi$;mi$;mi$;mi$;mi1$:NEXT n
180 PRINT TAB(9);un$;un$;un$;un$;un$;un$;un1$
190 PRINT TAB(11)"6   5   4   3   2   1 POINTS"
200 FOR i=1 TO 14:GOSUB 2100:NEXT
500 zz=22:PEN 1:p$="1":k=14:l=7 
510 GOSUB 3000
550 IF i=k THEN GOTO 510
560 IF VAL(a$(i))>1 OR i<8 OR VAL(a$(14-i))=0 THEN GOTO 600
570 GOSUB 5000
600 zz=2:PEN 0:p$="2":k=7:l=14 
610 GOSUB 3000
650 IF i=k THEN GOTO 610
660 IF VAL(a$(i))>1 OR i>6 OR VAL(a$(14-i))=0 THEN GOTO 500
670 GOSUB 5000
700 GOTO 500
2000 i=s+n
2010 IF i>14 THEN i=i-14*INT(i/14):IF i>=k-6 THEN i=i+1
2020 IF i=l THEN i=k-6
2030 a$(i)=STR$(VAL(a$(i))+1)
2100 FOR d=1 TO 250:NEXT d
2110 IF i<7 THEN LOCATE 10+(6-i)*4,10:PRINT RIGHT$(" "+a$(i),2)  
2120 IF i=7 THEN LOCATE 5,11:PRINT RIGHT$(" "+a$(i),2)
2130 IF i=14 THEN LOCATE 35,15:PRINT RIGHT$(" "+a$(i),2):GOTO 2150 
2140 IF i>7 THEN LOCATE 10+(i-8)*4,16:PRINT RIGHT$(" "+a$(i),2)
2150 RETURN
3000 REM Feldeingabe
3010 LOCATE 1,zz
3020 PRINT"Spieler  ";p$;CHR$(10):INPUT"Feldnummer ";b$
3025 IF b$="^" THEN 30
3030 IF b$>"6" OR b$<"1" THEN GOTO 3010
3040 b=VAL(b$):s=k-b:IF VAL(a$(s))=0 THEN GOTO 3010
3050 PRINT CHR$(11)+CHR$(11)+CHR$(11)"          "CHR$(10)
3060 PRINT"               ";
3070 z=VAL(a$(s))
3080 a$(s)="-1"
3090 FOR n=0 TO z
3100 GOSUB 2000
3110 NEXT n
3200 RETURN
5000 a$(k)=STR$(VAL(a$(k))+1+VAL(a$(14-i))):a$(i)=" 0":a$(14-i)=" 0"
5010 GOSUB 2100
5020 i=14-i:GOSUB 2100
5030 i=k:GOSUB 2100
5040 RETURN
6000 CLS:PEN 1:PRINT"   S P I E L R E G E L N":PRINT      
6010 PRINT"1. Ein Spieler entnimmt aus einem seiner";
6020 PRINT"   Felder alle Steine und verteilt sie,"
6030 PRINT"   indem er gegen den Uhrzeigersinn"
6040 PRINT"   jedem Feld einen Stein hinzufuegt,"
6050 PRINT"   bis alle Steine verbraucht sind."
6060 PRINT"   Hierbei wird aber in das 'POINTS'-"
6070 PRINT"   feld des Gegners nichts abgelegt."
6080 PRINT:PRINT"2. Faellt hierbei der letzte Stein in"
6090 PRINT"   das eigene 'POINTS'-Feld, darf"
6100 PRINT"   derselbe Spieler erneut ziehen."
6110 PRINT:PRINT"3. Faellt der letzte Stein in ein eige-"   
6120 PRINT"   nes leeres Feld und befinden sich im"
6130 PRINT"   gegenueberliegenden gegnerischen"
6140 PRINT"   Feld Steine, kommen diese Steine und"
6150 PRINT"   der letzte eigene Stein in das eige-"
6160 PRINT"   ne 'POINTS'-Feld.
6170 PRINT:PRINT"4. War bei 3. das Gegenfeld leer, dann"
6180 PRINT"   werden keine Steine hinzugewonnen."
6190 IF INKEY$="" THEN 6190
6200 RETURN
*/ });
