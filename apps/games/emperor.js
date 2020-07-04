/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem emperor: Emperor (Kaiser)
2 rem
3 rem Modifications: replaced CR by chr$(13) during de-tokenization (line 60 too long for real CPC now); 1910: DEC$(( => DEC$(
4 rem
10 '****** KAISER *****
20 CLEAR:SYMBOL AFTER 120
30 SYMBOL 123,108,0,120,12,124,204,118,0:SYMBOL 124,102,0,60,102,102,102,60,0:SYMBOL 125,102,0,102,102,102,102,62,0:SYMBOL 126,60,99,99,108,99,99,124,96
40 SYMBOL 128,0,32,112,248,168,232,232,0:SYMBOL 129,68,40,16,84,56,124,124:SYMBOL 131,32,80,136,248,168,248,168,248:SYMBOL 132,0,0,0,248,168,248,168,248
50 SYMBOL 133,16,56,16,40,68,68,68,124:SYMBOL 134,0,0,16,40,68,68,68,124
60 KEY 138,"":KEY 139,"":KEY 140,"":GOTO 90:KEY 138,"ink 0,0:speed key 20,1:?"+CHR$(34)+"   "+CHR$(34)+""+chr$(13)+"":KEY 139,"run"+chr$(13)+"":KEY 140,"na"+chr$(13)+"mb"+chr$(13)+"wc"+chr$(13)+"md"+chr$(13)+"we"+chr$(13)+"mf"+chr$(13)+"wg"+chr$(13)+"mh"+chr$(13)+"wi"+chr$(13)+"m":GOTO 90 
70 PRINT HEX$(PEEK(&A32B))" ";:GOTO 70
80 PRINT"";:FOR i=0 TO &FF:PRINT CHR$(1)CHR$(i);:NEXT:RETURN
90 DEF FN tl$(a$,n)=MID$(a$,INSTR(a$,CHR$(n+1))+1,INSTR(a$,CHR$(n+2))-INSTR(a$,CHR$(n+1))-1):DEF FN z$(a$)=STRING$(20-LEN(a$)/2,"	")+a$:DEF FN bau(c)=a(c)-MAX(-13000*(g(c)>0),-25000*(h(c)>0),1000*e(c),1000*f(c)):GOTO 1860
100 nq=0
110 PRINT USING RIGHT$(use$,c3+1);nq;:PRINT STRING$(c3+1,"");
120 GOSUB 1850:IF INSTR("r",b$)THEN nq=INT(nq/10):GOTO 110 ELSE IF INSTR("fgxz"+chr$(13)+"",b$)THEN PRINT SPACE$(c3+1);:RETURN ELSE w=NOT(b$<""OR b$>""):IF(w OR INSTR("	t",b$))AND nq*10<10^c3 THEN nq=nq*10-(ASC(b$)-128)*w:GOTO 110
130 IF INSTR("6",b$)AND nq<10^c3-1 THEN nq=nq+1:GOTO 110 ELSE IF INSTR(""+chr$(10)+"5",b$)AND nq>0 THEN nq=nq-1:GOTO 110 ELSE 120
140 BORDER ASC(LEFT$(g$,1))-65:i%=-1:p%=1:WHILE p%<=LEN(g$):i%=i%+1:s%=-(MID$(g$,p%,1)>="a"):INK i%,(ASC(MID$(g$,p%,1))AND &1F)-1,ASC(MID$(g$,p%+s%,1))-65:p%=p%+1+s%:WEND:RETURN
150 th=TIME:WHILE th+w>TIME:WEND:RETURN
160 PRINT ""STRING$(40,&F0+c);:PRINT FNz$(FNn$(c)):PRINT STRING$(40,&F0+c)"":RETURN
170 PRINT""FNz$("Weiter?")"";:GOSUB 1850:PRINT""+chr$(13)+""FNz$("       ");:RETURN
180 dy=0.5:ddy=1.1:ORIGIN 16*POS(#0)-16,416-16*VPOS(#0):x%=0:y=16*(q-1):PLOT 0,500,3:GOSUB 190:MOVE x%,-y:PRINT" ";:RETURN
190 dy=MIN(dy,6):MOVE x%,-y:PRINT"	";:MOVER-16,16:PRINT" ";:MOVER-16,-32:PRINT" ";:b$=LOWER$(INKEY$):jys=JOY(0)OR JOY(1):IF jys AND 1 THEN y=MAX(y-dy,0):dy=dy*ddy:GOTO 190 ELSE IF jys AND 2 THEN y=MIN(y+dy,g*16-16):dy=dy*ddy:GOTO 190
200 dy=0.5:q=ASC(b$+" ")-128:IF q>0 AND q<=g THEN RETURN ELSE IF INSTR("fgxz	t",b$)AND b$>""THEN q=INT((y+8)/16)+1:RETURN ELSE 190
210 PRINT TAB(22)USING"######,### ";a;:RETURN
220 RAD:GOSUB 170:MODE 1:g$="BY[uG":GOSUB 140:RANDOMIZE 100000000*rnm:GOTO 160
230 ang=RND*35.99:i%=FIX(ang):rd=MIN(map(i%),map(i%+1))*f-20:rd=rd*(1-RND^6):MOVE SIN(ang*10)*rd-8,COS(ang*10)*rd+8:RETURN
240 b$="zu wenig Bauland!"
250 PRINT ""CHR$(20-LEN(b$)/2)""b$;:w=300:GOSUB 150:PRINT CHR$(13)"";:RETURN
260 WHILE c<n AND K((c+1)MOD(n+1))=1:c=c+1:ZE=ZE-(c=0):WEND:C=(C+1)MOD(n+1):ZE=ZE-(c=0)
270 S=A4*(1+(INT(C/2)=C/2)):IF K(C)<1700 OR B8(C)>ZE THEN 260
280 GOSUB 1780:E$=FN tl$(f$,c)
290 C5=INT(RND*5+1):C6=0:D=A(C):B=(C(C)-F(C)*100)*5:IF B<0 THEN B=0  
300 IF B<D THEN D=B 
310 B=P(C)*2:IF B<D THEN D=B  
320 B=C5-0.5:J=D*B:P(C)=INT(P(C)+J):C7=(3*C5+12+RND*12)/10:TI=TIME
330 GOSUB 1310:FA=INT(RND*50+1):P(C)=INT(P(C)*(1-FA/100)) 
340 C8=INT((20-3*C5+RND*10)*8*B):IF C8<1 THEN 310 
350 WHILE INKEY$<>"":WEND:GOTO 410
360 ZONE 14:GOSUB 160:PRINT FNz$(STR$(fa)+"% Eurer Kornreserven sind verfault")
370 PRINT "	"FNtl$("D}rre, Hungersnot droht!Regen, schlechte ErnteGew|hnliche ErnteGutes Wetter, Reiche ErnteTolles Wetter, Rekordernte",c5-1)
380 ORIGIN 0,0,16,95,158,280:CLG 0:a=p(c)*486/(no*5):a=a+(a-122)*(a>122):ORIGIN 0,0,16,95,158,158+a:CLG 1:ORIGIN 0,0,0,0,0,0:CLG 0:ORIGIN 0,0,0,640,0,400
390 PRINT"		Kornreserve";:a=p(c):GOSUB 210:PRINT"Ma~":PRINT"	
N|tiges Korn";:A=NO:GOSUB 210:PRINT"Ma~":PRINT"	1000 Ma~=";:A=C8:GOSUB 210:PRINT T$:PRINT"	Landbesitz";:A=A(C)
400 GOSUB 210:PRINT"Hektar":PRINT"	"+chr$(13)+"Bauland";:a=FNbau(c):GOSUB 210:PRINT"Hektar":PRINT"	1000 Hektar=";:A=C7*1000:GOSUB 210:PRINT T$:PRINT"	Bargeld";:A=B(C):GOSUB 210:PRINT T$:RETURN
410 CLS:g$="JY[uG":GOSUB 140:ORIGIN 0,0,10,100,150,288:CLG 2:ORIGIN 0,0,0,400,0,640:FOR i%=10 TO 100 STEP 2:PLOT i%,290,2:DRAW 56+(i%>55),312,2:NEXT:q=5:GOSUB 1480:GOTO 430
420 GOSUB 360
430 PRINT"W{hlt nun:","1) Korn kaufen":PRINT,"2) Korn verkaufen":PRINT,"3) Land kaufen
440 IF Da THEN K(C)=ZE+5:Da=0
450 PRINT,"4) Land verkaufen":PRINT,"5) Weiter
460 g=5:PRINT"";:GOSUB 180:PRINT"";
470 ON q GOTO 480,490,500,510,520:GOTO 460
480 PRINT"Wieviel Korn kaufen? ";:c3=5:GOSUB 100:PRINT"":D=NO*3:IF C6+nQ>D THEN b$="ZU VIEL!":GOSUB 250:GOTO 460 ELSE C6=C6+nQ:P(C)=P(C)+nQ:B(C)=B(C)-nQ*C8/1000:GOTO 420
490 PRINT"Wieviel Korn verkaufen? ";:c3=5:GOSUB 100:PRINT"":IF nQ>P(C)THEN b$="Vorr{te ersch|pft!":GOSUB 250:GOTO 460 ELSE C6=C6-nQ:P(C)=P(C)-nQ:B(C)=B(C)+nQ*C8/1111:GOTO 420
500 PRINT"Wieviel Land kaufen? ";:c3=5:GOSUB 100:PRINT"":A(C)=INT(A(C)+nQ):B(C)=B(C)-nQ*C7:GOTO 420
510 PRINT"Wieviel Land verkaufen? ";:c3=5:GOSUB 100:PRINT"":IF nq>=a(c) THEN b$="ZU VIEL!":GOSUB 250:GOTO 460 ELSE A(C)=A(C)-nq:B(C)=B(C)+nQ*C7*0.9:WHILE FNbau(c)<0:GOSUB 1480:WEND:q=4:GOTO 420
520 g$="D":GOSUB 140:PRINT"";:ZONE 13:PRINT" Ihr m}~t zwischen 20% und 80% Eurer"+chr$(13)+"
 Reserven an Euer Volk ausgeben."+chr$(13)+"

  W{hlt:     1) das Maximum,"+chr$(13)+"
","2) das Minimum,"+chr$(13)+"
","3) das Ben|tigte,"+chr$(13)+"
","4) eine Menge zwischen
530 PRINT,USING use$;INT(P(C)/5);:PRINT" und "USING use$;INT(P(C)*0.8);:PRINT" Ma~":q=3
540 PRINT""+CHR$(13)+"";:g=4:GOSUB 180
550 ON Q GOTO 570,580,590,560:GOTO 540
560 PRINT"";:C3=6:GOSUB 100:Z=nQ:GOTO 600
570 Z=P(C)*0.8:GOTO 600 
580 Z=P(C)/5:GOTO 600
590 Z=NO 
600 b$="das ist zu":IF P(C)*0.8<Z THEN b$=b$+"viel!":GOSUB 250:GOTO 540 ELSE IF P(C)/5>Z THEN b$=b$+"wenig":GOSUB 250:GOTO 540
610 P(C)=P(C)-Z:B=Z/NO-1:IF Z<(NO-1) THEN 740 
620 VA=7:GOSUB 1360:VA=3:GOSUB 1380  
630 IF (RND*20+1)>R(C) THEN V(C)=V(C)+INT(RND*2)
640 IF (RND*20+1)>L(C) THEN M(C)=M(C)+INT(RND*3) 
650 IF (NO*(1.1+RND*0.4))>Z THEN 720 
660 B=C(C)/1000:D=(Z-NO)/NO*10 
670 D=D*B*(RND*65+2):IF D>C(C)/10 THEN D=INT(C(C)/10)
680 D=INT((RND*D+2)*(1.1-R(C)/100)*(1.1-ZO(C)/100)*(1.1-L(C)/100)/2) 
690 MOVE 12,164:PRINT d"Einwanderer kamen heuer";
700 C(C)=C(C)+D:D=MIN(RND*D/5+1,50)
710 WS(C)=WS(C)+D:V(C)=V(C)+1:M(C)=M(C)+2
720 IF D(C)>2 OR (90-ZO(C)-R(C)-L(C))<0 THEN GOSUB 1410
730 GOTO 770
740 J=(NO-Z)/NO*100-9:I=J:IF J>65 THEN J=65
750 IF J<0 THEN J=0:I=0 
760 VA=3:GOSUB 1360:VA=I+8:GOSUB 1380:GOSUB 1410
770 B=E(C)*INT(127+RND*127):B(C)=B(C)+B:IF B<1 THEN 790   
780 MOVE 50,242:PRINT"An Euren M{rkten verdientet Ihr";:MOVE 30,226:PRINT b;Tgr$;
790 B=F(C)*INT(250+RND*250):B(C)=B(C)+B:IF B<1 THEN 810  
800 MOVE 42,210:PRINT"Eure M}hlen erwirtschafteten";:MOVE 20,194:PRINT b;tgr$" Gewinn";
810 B=I(C)*3+W(C)*12:MOVE 58,288:PRINT"Eure Armee erhielt Sold";:MOVE 54,272:PRINT"in H|he von"b;Tgr$"n";:B(C)=B(C)-B:TAGOFF:PAPER 1:GOSUB 170:PAPER 0
820 B=C(C)/100:F3=B/(RND*3000+2500):F4=B/(RND*4000+2000)      
830 F5=B/(RND*2000+3000):F6=B/(RND*3000+2500)*100:F7=INT(70+RND*82)
840 CLG 0:g$="EY[":GOSUB 140:q=5:GOTO 910
850 GOSUB 1420:ZONE 20:GOSUB 160:PRINT"Staatseinnahmen",f+d+i+j;t$
860 PRINT"
Zoll",ZO(C)"% ":PRINT d;tgr$"           "
870 PRINT"Mehrwertsteuer",R(C)"% ":PRINT j;t$
880 PRINT"Einkommensteuer",L(C)"% ":PRINT i;t$
890 PRINT"Justiz"," "FNtl$(jus$,d(c)):PRINT f;t$
900 PRINT"
";:ORIGIN 0,0:RETURN
910 GOSUB 850:ZONE 12:PRINT "W{hlt:","1) Zoll {ndern"+chr$(13)+"
","2) Mehrwertsteuer {ndern"+chr$(13)+"
","3) Einkommensteuer {ndern"+chr$(13)+"
","4) Justiz {ndern"+chr$(13)+"
","5) Weiter
920 PRINT"";:g=5:GOSUB 180:IF q=4 THEN 970 ELSE IF q=5 THEN 1000
930 LOCATE 26,5+2*q:c3=2:GOSUB 100:IF q=1 THEN ZO(C)=nq
940 IF q=2 THEN R(C)=nq
950 IF q=3 THEN L(C)=nq
960 GOTO 910
970 PRINT"Justiz:";:q=d(c):FOR i%=1 TO 4:PRINT,""i%") "CHR$(1-(i%=q))FNtl$(jus$,i%)"":NEXT
980 g=4:PRINT"";:GOSUB 180
990 D(C)=q:q=4:GOTO 910
1000 B(C)=B(C)+D+J+I+F:GOSUB 1470:IF A(C)<C(C) OR C(C)<500 THEN GOSUB 1830:GOTO 1270 
1010 KP=3680+INT(511*RND):AP=2300+INT(511*RND):IP=1500+INT(256*RND):PRINT""
1020 q=9
1030 g$="B":GOSUB 140:ZONE 3:PRINT""FNz$("*** Staatseink{ufe ***")
1040 b$="000 "+T$:PRINT,"


-------------",,"   1) Marktplatz__________  1"b$,,"2) Kornm}hle___________  2"b$,,"3) Palast (Teil)___  5"b$,,"4) Kathedrale (Teil)_  9"b$,,"-------------"+chr$(13)+"
","5) Spielstand"+chr$(13)+"
","-------------
1050 PRINT,"7) Ende des Zuges 
1060 GOSUB 1460:IF ifs THEN 1640
1070 g=9:PRINT"	";:GOSUB 180
1080 IF Q=9 THEN GOTO 1180
1090 ifs=0:IF Q>5 THEN ON Q-5 GOSUB 1180,1290,1180:IF ifs THEN 1640 ELSE GOTO 1030
1100 IF q=1 THEN q=9:b0=1:MODE 1:GOSUB 160:GOTO 1030       
1110 ON Q-1 GOSUB 1120,1130,1140,1150:w=150:GOSUB 150:GOTO 1060
1120 IF A(C)/1000-1<E(C) THEN GOSUB 240:RETURN ELSE E(C)=E(C)+1:B(C)=B(C)-1000:N(C)=N(C)+1:GOSUB 1780:RETURN
1130 IF A(C)/1000-1<F(C) THEN GOSUB 240:RETURN ELSE F(C)=F(C)+1:B(C)=B(C)-2000:N(C)=N(C)/4:GOSUB 1780:RETURN
1140 IF A(C)<13000 OR G(C)>15 THEN b$="fertig!":ON 2+(g(c)>15)GOTO 250,240 ELSE G(C)=G(C)+1:B(C)=B(C)-5000:N(C)=N(C)+0.5:RETURN
1150 IF A(C)<25000 OR H(C)>13 THEN b$="fertig!":ON 2+(h(c)>13)GOTO 250,240 ELSE H(C)=H(C)+1:B(C)=B(C)-9000:N(C)=N(C)+1:M(C)=M(C)+1+INT(RND*6):RETURN
1160 IF B>17 THEN B=17 
1170 D=D+INT(B):RETURN  
1180 D=0:B=E(C):GOSUB 1160:B=G(C):GOSUB 1160:B=H(C):GOSUB 1160:B=F(C):GOSUB 1160  
1190 B=B(C)/5000:GOSUB 1160:B=A(C)/6000:GOSUB 1160:B=WS(C)/50:GOSUB 1160:B=V(C)/5
1200 GOSUB 1160:B=I(C)/50:GOSUB 1160:B=M(C)/10:GOSUB 1160:B=C(C)/2000:GOSUB 1160 
1210 B=N(C)/5:GOSUB 1160:B=INT(D/9):IF B>9 THEN B=9 
1220 IF T(C)<B THEN GOSUB 1700 
1230 GOSUB 1240:GOTO 1270 
1240 D=VAL(TI$):IF D<120 THEN RETURN  
1250 K(C)=K(C)-INT(RND*3)-1:IF K(C)<ZE+1 THEN K(C)=ZE+1   
1260 RETURN  
1270 IF ZE>=K(C) THEN 1570  
1280 B(C)=INT(B(C)*1.1):O(C)=MAX(O(C)*0.9,5):GOTO 1600
1290 CLS:g$="NY[":GOSUB 140:PRINT TAB(15)"Spielstand:"+chr$(13)+"
"STRING$(40,"-")" Verm|gen     Land Soldaten Einwohner Pt"STRING$(40,"-");
1300 ZONE 9:me$=E$:J=C:FOR C=0 TO N:PRINT FNz$(FNn$(c)):PRINT""USING"#,###,###";b(c);a(c);i(c);c(c);:PRINT" "USING"###";v(c);:PRINT"";:NEXT:PRINT STRING$(40,"-");:c=j:e$=me$:GOSUB 170:CLS:GOTO 160
1310 NO=V(C)*100+M(C)*40+WS(C)*30+C(C)*5:NO=ABS(INT(NO+I(C)*10)) 
1320 IF J<1 THEN B=2:GOTO 1340  
1330 B=NO/J:IF B>2 THEN B=2   
1340 IF B<0.8 THEN B=0.8   
1350 C7=INT(10*C7*B)/10:RETURN  
1360 ORIGIN 0,0:PRINT" ";:g$="AN[":GOSUB 140:TAG:ORIGIN 0,0,50,50,10,10:CLG 1:ORIGIN 0,0,0,640,0,400:PLOT -10,0,2:MOVE 28,396:b$=STRING$(37,c+&F0):PRINT b$;
1370 MOVE 34,380:PRINT SPACE$(17-LEN(FNn$(c))/2)FNn$(c);:MOVE 38,364:PRINT b$;:PLOT -10,0,0:F=INT((RND*VA+1)*C(C)/100):MOVE 40,334:PRINT ROUND(F)"Einwohner wurden heuer geboren";:ZONE 2:C(C)=C(C)+F:RETURN
1380 F=INT((RND*VA+1)*C(C)/100):IF Z/NO<0.5 THEN F=INT((1-Z/NO)*C(C))     
1390 IF C(C)-F<382 THEN F=C(C)-382   
1400 MOVE 42,318:PRINT F"Einwohner starben heuer";:C(C)=C(C)-F:RETURN 
1410 F=INT((2+RND)*(C(C)/100*(D(C)-2)*(D(C)-2))):C(C)=C(C)-F:IF F<2 THEN RETURN ELSE MOVE 8,144:PRINT F"Opfer des Staatshaushaltes";:MOVE 22,128:PRINT"verlie~en das Land";:RETURN
1420 B=F7-ZO(C)-R(C)-L(C):D=INT((V(C)*180+T(C)*75+WS(C)*20)*(B/100)+N(C)*100):J=INT((V(C)*50+WS(C)*75+N(C)*10)*B*(5-D(C))/200)
1430 I=INT(V(C)*250+N(C)*20+(10*D(C)*V(C))*(B/100)):D=INT(D*ZO(C)*F3):J=INT(J*R(C)*F4):I=INT(I*L(C)*F5):F=INT((D(C)*300-500)*T(C)*F6):IF T(C)=8 THEN D=D*3:I=I*2
1440 RETURN
1450 b$="wozu?":GOSUB 250:RETURN             
1460 PRINT"Staatsverm|gen: "USING use$;b(c);:PRINT" "T$
1470 ifs=(-10000*T(C))*(INT(8+RND*6)/10)>B(C):RETURN:'=>728
1480 GOSUB 1490:GOSUB 360:WHILE b4:GOSUB 170:b4=0:WEND:PRINT"":RETURN
1490 b0=e(c)*1000-a(c):b1=f(c)*1000-a(c):b2=a(c)<13000 AND g(c)>0:b3=a(c)<25000 AND h(c)>0:b4=b0>0 OR b1>0 OR b2 OR b3:IF NOT b4 THEN RETURN ELSE PRINT""FNz$("Wegen Landmangels habt Ihr folgende"):PRINT FNz$("Geb{ude verloren:")"
"
1500 WHILE SQ(1)+SQ(2)<>8:WEND:POKE &A329,&1A:POKE &A32A,&8A:IF b0>0 THEN b0=b0/1000:b0=FIX(b0)+SGN(b0-FIX(b0)):PRINT"M{rkte: "STRING$(b0,""):e(c)=e(c)-b0
1510 IF b1>0 THEN b1=b1/1000:b1=FIX(b1)+SGN(b1-FIX(b1)):PRINT"M}hlen: "STRING$(b1,""):f(c)=f(c)-b1
1520 IF b2 THEN PRINT"Palast: ";:i=0:WHILE g(c)/3.9>i:PRINT CHR$(&83+(i AND 1));:i=i+1:WEND:PRINT:g(c)=0
1530 IF b3 THEN PRINT"Kathedrale: ";:i=0::WHILE h(c)/6.9>i:PRINT CHR$(&85+(i AND 1));:i=i+1:WEND:h(c)=0
1540 PRINT"";:RETURN
1550 PRINT"":GOSUB 1490:IF b4 THEN GOSUB 170
1560 PRINT"":RETURN
1570 IF INT(RND*2)=0 THEN K(C)=K(C)+1:GOTO 260    
1580 PRINT""FNz$("Sehr schlechte Nachricht!")""+chr$(13)+"

"FNz$(FNtl$(tit$,a7(c)*9+t(c)-1)+" "+E$+" von "+FNtl$(lan$,c))""+chr$(13)+"

"FNz$("ist leider verstorben!")
1590 GOSUB 170:K(C)=1
1600 J=0:FOR I=0 TO N:j=j-(K(I)>1700):NEXT
1610 IF J>1 THEN 260
1620 IF n=0 AND j=1 THEN Da=1:GOTO 260
1630 PRINT""FNz$("Spielende!"):FOR hrui=0 TO 1000:NEXT:RUN
1640 B(C)=B(C)+H(C)*2500:H(C)=0:B(C)=B(C)+G(C)*1500:G(C)=0  
1650 B(C)=B(C)+F(C)*1000:F(C)=0:B(C)=B(C)+E(C)*500:E(C)=0  
1660 W(C)=INT(W(C)/2):O(C)=O(C)/2:IF A(C)>3000 THEN A(C)=A(C)-3000:B(C)=INT(B(C)+A(C)*C7*0.8):A(C)=3000 ELSE IF B(C)>0 THEN A(C)=A(C)+INT(B(C)/C7):B(C)=0
1670 K(C)=K(C)-2:IF K(C)<ZE+1 THEN 1570  
1680 PRINT ""FNz$(FNn$(c))""+chr$(13)+"

"FNz$("Ihr seid leider bankrott!")""+chr$(13)+"

"FNz$("Gl{ubiger haben gro~e Teile Eures")""+chr$(13)+"

"FNz$("Besitzes gepf{ndet!")
1690 GOSUB 170:GOTO 260
1700 IF B(C)<0 THEN RETURN 
1710 IF T(C)>6 AND G(C)<16 THEN RETURN  
1720 IF T(C)>7 AND (H(C)<14 OR F(C)<15 OR E(C)<25) THEN RETURN 
1730 IF T(C)=8 AND B(C)<100000 THEN RETURN
1740 T(C)=T(C)+1
1750 PRINT""FNz$("Euch wird ein neuer Titel verliehen")""+chr$(13)+"

"FNz$("Ihr seid nun "+FNtl$(tit$,a7(c)*9+t(c)-1)+"!"):IF t(c)<9 THEN GOSUB 170:RETURN ELSE RUN
1760 b$=CHR$(&CD)+CHR$(&F0)+CHR$(&A1)+""+FNz$("es lebe")+""+FNz$(UPPER$(FNtl$(f$,c)+" von "+FNtl$(lan$,c)))+""+FNz$(FNtl$(tit$,a7(c)*9+t(c)-1)+" von Gottes Gnaden")+CHR$(0)+CHR$(&C9):FOR i=1 TO LEN(b$):NEXT
1770 g$="AYAA":GOSUB 140:PRINT""FNz$("AUFZEICHNUNG GEFUNDEN")""+chr$(13)+""FNz$("LESEFEHLER!")
1780 Q(C)=INT(E(C)/5)*2:IF INT(F(C)/3)*2<Q(C) THEN Q(C)=INT(F(C)/3)*2 
1790 Q(C)=Q(C)+INT((G(C)+H(C))/2):I(C)=(U(C)+S(C)+J(C)+Q(C))*20  
1800 IF W(C)>I(C) THEN W(C)=I(C)-Q(C)*20  
1810 IF W(C)<0 THEN W(C)=0  
1820 RETURN   
1830 B=1:B8(C)=ZE+B+1:G=17:b$="Wegen schlechter ":IF A(C)<C(C)THEN b$=b$+"Land"ELSE b$=b$+"Einwohner":C(C)=500 
1840 PRINT"
"FNz$(b$+"politik")""+chr$(13)+"

"FNz$("Seid Ihr f}r ein Jahr Eures Amtes")""+chr$(13)+"

"FNz$("enthoben worden!"):M=901:K=715:L=716:P=945:GOTO 170
1850 b$=LOWER$(INKEY$):IF B$="" THEN 1850 ELSE RETURN
1860 lan$="Preu~enHessenBayernB|hmenSachsenM{hrenTirolDer Pfalz	Flandern
":tit$="HerrBaronLandgrafMarkgrafF}rstHerzogKurf}rstK|nig	Kaiser
FrauBaroninLandgr{fin"+chr$(13)+"Markgr{finF}rstinHerzoginKurf}rstinK|niginKaiserin
1870 FOR i=0 TO 9:KEY 128+i,CHR$(i+128):NEXT:SPEED KEY 20,8:MODE 1:SPEED INK 22,15:PAPER 0:g$="A[RsA":GOSUB 140:PRINT "Wieviele Spieler (1-9)? _";:n=-1:WHILE n<0 OR n>8:n=ASC(INKEY$+" ")-129:WEND:PRINT""n+1""        
1880 DIM ZO(N),R(N),L(N),D(N),K(N),E(N),F(N),G(N),H(N),I(N),M(N),V(N),WS(N),N(N)
1890 DIM Q(N),S(N),J(N),U(N),B8(N),O(N),W(N),A7(N),A(N),B(N),T(N),P(N),C(N)
1900 DIM map(36):use$="########,":jus$="Gn{digFairHartGierig"
1910 DEF FNn$(i)=FNtl$(tit$,a7(i)*9+t(i)-1)+" "+FNtl$(f$,i)+" von "+FNtl$(lan$,i)+LEFT$(" û",-2*(k(i)=1)):DEF FNcst(i)=PEEK(&A341+i):DEF FNp$(n)=FNtl$(""+DEC$(n,use$)+"        ",1-SGN(n)^2)
1920 DEF FNb(a)=PEEK(b0+a):DEF FNw(a)=PEEK(b0+a)+&100*PEEK(b0+a+1)
1930 DIM SL(5),T1(75),T2(75):T$="Taler":tgr$="Taler":ZE=1700:PRINT:f$=CHR$(1):FOR c=0 TO n:PRINT"A"C+1". Spieler Name: ";:GOSUB 1980
1940 PRINT "	Ist "e$" von "FNtl$(lan$,c)""+chr$(13)+"	m{nnlich oder weiblich (M/W)? _"
1950 b$=" ":WHILE INSTR("mw",b$)=0:GOSUB 1850:WEND:PRINT"":A7(C)=1+(B$="m"):f$=f$+e$+CHR$(c+2):a(c)=10000:b(c)=10000:T(C)=1:C(C)=2000:P(C)=10000:ZO(C)=25:R(C)=10
1960 L(C)=5:D(C)=2:K(C)=1760:V(C)=4:M(C)=5:WS(C)=25:N(C)=1:B8(C)=1700:O(C)=100:s(c)=0:J(C)=1:u(c)=0:Q(C)=1:e(c)=0:f(c)=0:g(c)=0:h(c)=0:GOSUB 1780:NEXT
1970 c=n:IF n>30 THEN FOR c=0 TO n:s(c)=1:j(c)=0:u(c)=0:e(c)=30:f(c)=20:g(c)=16:h(c)=14:GOSUB 1780:NEXT:c=n:b(0)=1000000:t(0)=8:k(4)=1:GOTO 260 ELSE 260
1980 e$="":WHILE e$=""OR b$<>CHR$(13)
1990 PRINT"_";:GOSUB 1850:IF b$=CHR$(127)AND e$>""THEN e$=LEFT$(e$,LEN(e$)-1):PRINT" ";ELSE ifs=(INSTR(" [\]^",b$)>0):IF((b$>="a"AND b$<="z")OR ifs)AND LEN(e$)<10 THEN b$=CHR$(ASC(b$)XOR-32*(b$>" "AND((e$="")XOR ifs))):e$=e$+b$:PRINT b$;
2000 WEND:PRINT" ":RETURN
2010 Q(C)=INT(E(C)/5)*2:GOTO 260      
2020 PRINT"
"FNz$("Angreifer:")""+chr$(13)+"
"FNz$(FNn$(c)):b4=c:b0$=CHR$(&88):GOSUB 2080:p=b4:PRINT"
"FNz$("Verteidiger:")""+chr$(13)+"
"FNz$(FNn$(k)):b4=k:b0$="":GOSUB 2080:m=b4*1.2
2030 PRINT"
":b0$="":b2=VPOS(#0):b4=0:GOSUB 2080:IF VPOS(#0)<>b2 THEN b3=VPOS(#0):LOCATE 1,b2-1:PRINT""FNz$("Alle Wege sind versperrt f}r:")""CHR$(b3+2)
2040 b2=VPOS(#0):b0$=CHR$(0)+"":b4=0:GOSUB 2080:IF VPOS(#0)<>b2 THEN b3=VPOS(#0):LOCATE 1,b2-1:PRINT""FNz$("Nicht am Kampf beteiligte Truppen:")
2050 GOSUB 170:z(c)=MAX(c(c)/500,1):z(k)=MAX(c(k)/500,1)
2060 SPEED INK 1,1:g$="AY[RPMNJSWDL":GOSUB 140
2070 END
2080 b5=i(b4):b4=i(b4)*o(b4):FOR b1=0 TO n:IF INSTR(b0$,CHR$(FNcst(b1)))THEN PRINT FNz$(FNn$(b1)):b4=b4+i(b1)*o(b1):b5=b5+i(b1)
2090 NEXT:IF b5 THEN b4=b4/b5
2100 RETURN
2110 REM
2120 REM
2130 PRINT""b7+1:PRINT b1,b2,b3,b4,b5,b6:FOR index=0 TO n:PRINT index+1,u(index),s(index),j(index):NEXT:GOTO 1850
2140 REM MODE 0:CALL &BE90:SPEED WRITE 1:CALL &8B20:CLS:RUN
*/ });
