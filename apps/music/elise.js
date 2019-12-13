/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem elise - Fuer Elise (Ludwig van Beethoven)
2 rem taken from the game Citylander by Jujstronic Software
3 rem youtube: https://www.youtube.com/watch?v=qotloiNF-M4 (Line Rider - Für Elise - Ludwig Beethoven)
4 rem Modifications: sound playback and data rewritten (somehow shorter)
5 rem
1800 mode 1
1810 ?"Fuer Elise (Ludwig van Beethoven)"
1900 defint a-z:sp=25
1910 FOR a=1 TO 5:READ h:SOUND 1,h,sp:NEXT    
1920 DATA 95,100,95,100,95
1950 FOR a=1 TO 3:READ h:SOUND 1,h,sp:NEXT 
1960 DATA 127,106,119
1965 while sq(1)<>4:call &bd19:wend
1990 '
2000 if inkey$<>"" then 3600
2005 read n
2010 if n<=0 then restore 2765:goto 2000
2020 read p1,p2
2040 FOR a=1 TO n
2050 READ h
2060 if p1>0 then sound 12,p1,sp else sound 12,h,sp
2070 if p2>0 then sound 33,p2,sp else sound 33,h,sp
2080 next
2090 goto 2000
2600 '
2765 data 4,0,142
2770 DATA 284,379,284,239
2785 data 4,190,0
2790 DATA 142,190,142,119
2805 data 4,0,127
2810 DATA 301,379,301,253
2825 data 4,190,0
2830 DATA 127,190,150,127
2845 data 8,0,119
2850 DATA 284,379,284,239,190,239,284,402
2865 data 8,379,0
2870 DATA 95,100,95,100,95,127,106,119
2885 data 4,0,142
2890 DATA 284,379,284,239
2905 data 4,190,0
2910 DATA 142,190,142,119 
2925 data 4,0,127
2930 DATA 301,379,301,253  
2945 data 4,190,0
2950 DATA 127,190,119,127 
2965 data 4,0,142
2970 DATA 142,190,239,253
2985 data 4,284,0
2990 DATA 142,127,119,106
3005 data 4,0,95
3010 DATA 119,159,190,213
3025 data 4,239,0
3030 DATA 95,95,89,95
3045 data 4,0,106
3050 DATA 127,159,213,253
3065 data 4,319,0
3070 DATA 106,106,95,106
3085 data 4,0,119
3090 DATA 142,190,239,253
3105 data 4,284,0
3110 DATA 119,119,106,119
3125 data 12,0,127
3130 DATA 379,301,253,301,253,190
3140 DATA 253,190,150,190,150,253
3155 data 8,190,0
3160 DATA 95,100,95,100,95,127,106,119
3500 data -1
3510 '
3600 while sq(1)<>4:call &bd19:wend
3610 ?"end"
*/ });
