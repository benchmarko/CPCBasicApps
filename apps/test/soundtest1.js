/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
100 REM Sound Test 1
110 MODE 2:CLEAR:DEFINT a-z
120 ?"Sound Test 1":?
130 ?"1) Richard Wagner: Brautchor aus 'Lohengrin'"
140 ?"2) Franz Schubert: Die Forelle"
142 ?"3) Marc-Antoine Charpentiers: Te Deum"
143 ?"4) August Heinrich Hoffmann von Fallersleben: Winter ade"
150 ?
160 ?"Your choice ";
170 x=pos(#0):y=vpos(#0)
172 ?:?:?"(Or wait for random sound...)"
175 pMax=4:p=0
176 gosub 505
177 every 50*2 gosub 500
180 t$=inkey$:if t$="" and p<pMax then 180
182 r=remain(0)
185 if t$<>"" then t=asc(t$) else t=0
190 if t$=chr$(13) or t$=" " or t$="X" or t=224 or p>=pMax*2 then t$=hex$((p mod pMax)+1):goto 200
193 if (t=240 or t=242 or t=8 or t=11) and p>0 then p=p-1:goto 176
194 if (t=241 or t=243 or t=9 or t=10) and p<pMax-1 then p=p+1:goto 176
200 t=val(t$):if t<1 or t>pMax then 176
210 p=t-1:gosub 510:?t$;
220 on t gosub 1000,1100,1800,3030
222 ink 0,1,1:speed ink 10,10
225 ?" stopping...";
227 WHILE SQ(4)<>4:call &bd19:WEND
230 ?chr$(17);chr$(13);:goto 160
490 '
500 p=p+1
505 if p>=pMax then p=p+int(rnd*pMax)
510 locate x,y:?"[";(p mod pMax)+1;"]: ";:return
970 '
980 '
990 REM Richard Wagner: Brautchor aus 'Lohengrin'
1000 RESTORE 1060
1005 ink 0,0,3:speed ink 20,5
1010 ENV 3,10,-1,10:laut=12
1020 READ ton,dauer
1030 IF ton=-1 or inkey$<>"" THEN return
1040 SOUND 1,ton/2,dauer,laut,3:SOUND 2,ton*2,dauer,laut,3:SOUND 4,ton,dauer,laut,3
1050 GOTO 1020
1060 DATA 358,60,268,45,0,2,268,15,0,2,268,120,358,60,239,45,284,15,268,120,358,60,268,45,201,15,0,2,201,60,213,45,239,15,268,60,239,2,268,2,284,45,268,15,239,120
1070 DATA 358,60,268,45,0,2,268,15,0,2,268,120,358,60,239,45,284,15,268,120,358,60,268,45,201,15,0,2,201,60,213,45,239,15,268,60,239,2,268,2,284,45,268,15,239,120
1080 DATA 358,60,268,45,0,2,268,15,0,2,268,120,358,60,239,45,284,15,268,120,358,60,268,45,213,15,179,60,213,45,268,15,319,60,239,45,213,15,268,120,-1,-1
1085 '
1087 '
1090 REM Franz Schubert: Die Forelle
1100 ENV 2,10,-1,10
1105 call &bd19:ink 0,0,3:speed ink 25,5
1110 RESTORE 1150:laut1=12:laut2=10
1120 READ ton,dauer:IF ton=-1 or inkey$<>"" THEN return
1130 IF ton=0 THEN SOUND 1,ton,dauer:SOUND 2,ton,dauer:SOUND 4,ton,dauer:GOTO 1120
1140 dauer=dauer*1.5:SOUND 1,ton*2,dauer/2,laut1,2:SOUND 1,ton,dauer/2,laut1,2:SOUND 2,ton,dauer,laut2,2:SOUND 4,ton*0.25,dauer,laut1,2:GOTO 1120
1150 DATA 426,25,319,25,0,2,319,25,253,25,0,2,253,25,319,50,426,25,0,2,426,25,0,2,426,25,0,2,426,25,284,12,319,12,338,12,379,12,426,75,0,2
1160 DATA 426,25,319,25,0,2,319,25,253,25,0,2,253,25,319,50,426,25,319,25,338,25,379,12,338,12,319,25,451,25,426,75,0,2
1170 DATA 426,25,338,25,0,2,338,25,319,12,338,25,379,12,338,12,319,50,426,25,319,25,338,25,0,2,338,25,0,2,338,12,239,12,284,12,338,12,319,75,0,2
1180 DATA 319,25,379,25,0,2,379,25,0,2,379,25,319,25,0,2,319,50,426,25,0,2,426,25,0,2,426,25,0,2,426,25,284,25,338,25,319,75,0,2
1190 DATA 319,25,379,25,0,2,379,25,0,2,379,25,319,25,0,2,319,50,426,25,0,2,426,25,0,2,426,25,0,2,426,25,284,25,338,25,319,75,-1,-1
1770 '
1780 '
1790 REM Marc-Antoine Charpentiers: Te Deum
1800 RESTORE 2000:la=40:la1=la
1805 call &bd19:ink 0,0,3:speed ink 40,5
1810 READ note:if note<0 then 1816
1812 SOUND 1,note,la1-2,10:SOUND 2,note,la1,8:SOUND 4,note,la1,6
1814 goto 1810
1816 IF note=-1 or inkey$<>"" THEN return
1820 IF note=-4 THEN la1=la*2:GOTO 1810:'1/2 Note
1830 IF note=-3 THEN la1=la*1.5:GOTO 1810:'3/8 Note
1840 IF note=-2 THEN la1=la/2:GOTO 1810:'1/8 Note
1860 goto 1810
1990 '
2000 DATA 426,319,319,284,253,319
2010 DATA -4,213,-3,253,-2,253,239,-2,213,-2,239
2020 DATA -2,253,-2,239,213,-2,284,-2,319,-2,284
2030 DATA -2,253,284,426,319,-2,319,-2,284,253,319
2040 DATA -4,213,-3,253,-2,253,-2,239,-2,213
2050 DATA -2,253,-2,239,-3,284,319,-4,319
2060 DATA -1
2070 '
3020 REM Winter Ade - Lied
3030 restore 3130:g=50
3035 call &bd19:ink 0,0,3:speed ink 55,5
3040 READ note:d=g:IF note=-1 or inkey$<>"" THEN return
3050 IF note=-2 THEN d=g/2:READ note:GOTO 3080
3060 IF note=2 THEN d=g*2:READ note:GOTO 3080
3070 IF note=0 THEN FOR i=1 TO d*2:NEXT i:GOTO 3090
3080 SOUND 1,note,d,10
3090 'PRINT note,d
3100 IF (SQ(1) AND 128)=128 THEN call &bd19:goto 3100
3110 GOTO 3040
3130 DATA 253,253,284,2,319,0
3140 DATA 253,253,284,2,319,0
3150 DATA 253,239,213,213,-2,239,-2,253,239,0
3160 DATA 284,253,239,239,-2,253,-2,284,253,0
3170 DATA 253,253,239,2,213,0,253,253,284,2,319,-1
3180 '
*/ });
