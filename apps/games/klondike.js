/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem klondike - Klondike
2 rem (c)
4 rem Modifications: delays
5 rem
7 GOSUB 105 
9 DEFINT a-z
10 DIM a(23,23)
11 r=7:u=2 
12 FOR m=0 TO 22
13 FOR n=0 TO 22 
14 READ a:a(n,m)=a
15 NEXT n,m
16 LOCATE 3,25:PRINT"WEITER MIT EINER TASTE ":CALL 47878
18 INK 0,18:INK 1,8,20:INK 2,0:INK 3,26:BORDER 18:CLS
19 FOR M=1 TO 23:FOR N=0 TO 23
20 IF a(n,m)>0 THEN GOSUB 34
21 NEXT n,m
22 n=11:m=11:n1=n:m1=m
23 PAPER 3:PEN 2:LOCATE 2,2:PRINT"Zeit":LOCATE 30,2:PRINT"Schritte"
24 EVERY 50 GOSUB 38
25 '*** Setzen ***
26 DI:PEN 1:LOCATE n+r,m+u:PRINT MID$(STR$(a(n,m)),2,1):EI
27 b$=INKEY$:IF b$="" OR b$<"1" OR b$>"9" THEN 27
28 b=VAL(b$) 
29 GOSUB 34
30 a=a(n,m)
31 ON b GOSUB 48,49,50,51,52,55,56,57,58
32 GOTO 26
33 '*** Felder ***
34 DI:IF (n+m)/2=INT((n+m)/2) THEN PEN 2:PAPER 3 ELSE PEN 3:PAPER 2 
35 LOCATE n+r,m+u:PRINT MID$(STR$(a(n,m)),2,1):EI 
36 RETURN
37 '*** Zeitanzeige ***
38 s=s+1:IF s-60 THEN s=0:mi=mi+1
39 DI:PEN 2:PAPER 3:LOCATE 2,4:PRINT"        ":LOCATE 2,4:PRINT mi;":";s:EI
40 RETURN
41 ' *** Anzeige der Zuege ***
42 IF n1>22 OR n1<0 OR m1<0 OR m1>22 THEN GOSUB 59
43 IF a(n1,m1)<1 THEN IF (-a(n1,m1) AND 2^(b-1))=0 THEN GOSUB 59 ELSE GOTO 67
44 DI:z=z+1:LOCATE 30,4:PAPER 3:PEN 2:PRINT"       ":LOCATE 30,4:PRINT z:EI
45 n=n1:m=m1
46 RETURN
47 ' *** Subr. fuer Richtungen ***
48 n1=n-a:m1=m+a:GOSUB 42:RETURN
49 m1=m+a:GOSUB 42:RETURN 
50 m1=m+a:n1=n+a:GOSUB 42:RETURN 
51 n1=n-a:GOSUB 42:RETURN 
52 n=11:m=11:z=0:m1=m:n1=n
53 DI:LOCATE 30,4:PAPER 3:PEN 2:PRINT"       ":LOCATE 30,4:PRINT z:EI  
54 RETURN
55 n1=n+a:GOSUB 42:RETURN 
56 n1=n-a:m1=m-a:GOSUB 42:RETURN 
57 m1=m-a:GOSUB 42:RETURN 
58 m1=m-a:n1=n+a:GOSUB 42:RETURN 
59 n1=n:m1=m
60 REM *** Subr. unmoeglicher Zug ***
61 DI:LOCATE 2,24:PEN 2:PAPER 3:PRINT"nicht moeglich":EI
62 FOR n=1 TO 500/10:call &bd19:NEXT
63 DI:LOCATE 2,24:PAPER 0:PRINT"              ";:EI 
64 IF (n+m)/2=INT((n+m)/2) THEN PEN 2:PAPER 3 ELSE PAPER 3:PEN 2 
65 RETURN
66 '*** Gewonnen ***
67 n=REMAIN(0):PAPER 0:MODE 0
68 RESTORE 102
69 FOR n=1 TO 22:PEN n/2:PRINT STRING$(n/2," ");"gewonnen":NEXT
70 FOR k=1 TO 2:FOR n=1 TO 26 STEP 2:FOR m=1 TO 15:INK m,n:NEXT m,n,k 
71 INK 15,6,22:INK 0,18,12
72 FOR n=1 TO 50
73 READ a,b
74 SOUND 1,a,b,4:SOUND 2,a/2,b,2:NEXT
76 FOR n=1 TO 2000/10:call &bd19:NEXT:RUN
77 REM *** Datas fuer Spielfeld ***
78 DATA 0,0,0,0,0,0,0,0,0,-64,-96,-112,-48,-16,0,0,0,0,0,0,0,0,0
79 DATA 0,0,0,0,0,0,-64,-96,-112,-240,4,7,7,-120,-112,-48,-16,0,0,0,0,0,0,
80 DATA 0,0,0,0,-64,-92,-240,5,4,4,8,3,3,4,6,3,-120,-48,-16,0,0,0,0
81 DATA 0,0,0,-64,-224,1,4,5,1,1,1,4,5,1,7,1,3,5,-56,-16,0,0,0
82 DATA 0,0,-64,-224,4,9,4,9,6,7,5,5,5,8,7,6,6,8,5,-56,-16,0,0
83 DATA 0,0,-192,3,7,2,9,8,3,5,6,7,3,9,1,8,7,5,8,5,-24,0,0
84 DATA 0,-64,-224,1,4,7,8,4,2,9,2,7,1,1,8,2,2,7,6,3,-56,-16,0
85 DATA 0,-192,7,2,1,8,5,5,3,1,1,3,1,3,3,4,2,8,6,1,3,-24,0
86 DATA 0,-193,4,2,6,7,2,5,2,4,2,2,5,4,3,2,8,1,7,7,3,-28,0
87 DATA -64,-225,4,1,6,5,1,1,1,9,1,4,3,4,4,3,1,9,8,2,7,-60,-16
88 DATA -192,4,3,5,2,3,2,2,3,2,4,2,5,3,5,1,1,3,5,5,3,7,-24
89 DATA -193,2,7,1,5,1,1,3,1,5,3,3,2,4,2,3,7,7,5,4,2,7,-28
90 DATA -129,2,5,2,2,6,1,2,4,4,6,3,4,1,2,1,2,6,5,1,8,8,-12
91 DATA -1,-195,4,3,7,5,1,9,3,4,4,5,2,9,4,1,9,5,7,4,8,-30,-4
92 DATA 0,-193,4,1,6,7,8,3,4,3,4,1,3,1,2,3,2,3,6,2,4,-28,0
93 DATA 0,-129,7,3,2,6,1,5,3,9,2,3,2,1,5,7,5,8,9,5,4,-12,0
94 DATA 0,-1,-195,1,6,7,3,4,8,1,2,1,2,1,2,2,8,9,4,1,-30,-4,0
95 DATA 0,0,-129,2,5,4,7,8,7,5,6,1,3,5,7,8,7,2,9,3,-12,0,0
96 DATA 0,0,-1,-131,6,5,6,4,6,7,2,5,2,2,6,3,4,7,4,-14,-4,0,0
97 DATA 0,0,0,-1,-131,2,3,1,2,3,3,3,2,1,3,2,1,1,-14,-4,0,0,0
98 DATA 0,0,0,0,-1,-3,-131,7,4,4,5,7,3,4,4,7,-14,-6,-4,0,0,0,0
99 DATA 0,0,0,0,0,0,-1,-3,-7,-135,3,3,4,-15,-7,-6,-4,0,0,0,0,0,0
100 DATA 0,0,0,0,0,0,0,0,0,-1,-3,-7,-6,-4,0,0,0,0,0,0,0,0,0
101 '*** Datas fuer Sound ***
102 DATA 638,25,478,25,426,25,379,25,358,25,319,50,284,25,358,25,379,50,426,50,478,75,638,25 ,638,25,478,25,426,25,379,25,358,25,319,50,284,25,358,25,379,50,426,50,478,75,0,25,319,37,358,13,379,25,319,25,358,25,378,25,426,50,319,37,358,13,379,25,319,25
103 DATA 358,25,379,25,426,50,478,25,426,25,379,25,358,25,319,25,239,25,284,25,358,25,379,50,426,50,426,75,500,100
104 '*** Titelbild ***
105 MODE 1:INK 0,22:INK 1,0:INK 2,18:PEN 1:PAPER 2:BORDER 22
106 LOCATE 5,2:PRINT CHR$(135);STRING$(22,CHR$(131));CHR$(139)
107 LOCATE 5,3:PRINT CHR$(133);" ZURUECK VON KLONDIKE ";CHR$(138)
108 LOCATE 5,4:PRINT CHR$(141);STRING$(22,CHR$(140));CHR$(142)
109 PAPER 0
110 LOCATE 1,6:PRINT"  Sie sind im blinkenden Feld in der      Mitte des Feldes. Von dort aus sollen   Sie einen Weg aus dem 'Wald von         Klondike ' finden."
111 PRINT:PRINT"  Dies koennen Sie, indem Sie von dem     Feld aus , auf dem Sie stehen, soviele  Schritte gehen, wie es anzeigt."
112 PRINT"  Die Richtung waehlen sie mit dem        Zahlenblock:Mit der '1' nach SW, mit    der '2' nach S ,mit der '3' nach SO,    ...und mit der '4' nach W."
113 PRINT:PRINT"  Die '5' bringt sie wieder an den        Ausgangspunkt zurueck."
114 LOCATE 3,23:PRINT"VIEL SPASS !!!"
115 RETURN
*/ });
