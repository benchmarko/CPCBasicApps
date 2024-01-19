/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem 3times1 - 3 Times 1 (3 mal 1)
2 rem (c) Jens Uwe Timm, 1985
5 rem
10 GOTO 3000 ' dreimal eins  Copyright 1985 by Jens Uwe Timm Hannover
1000 '****** Compzug SETZEN 
1010 IF zug=0 THEN x=2:z=2:GOTO 1620
1020 PEN fc:IF zug<>1 THEN 1050 
1030 IF fe(2,2)=0 THEN x=2:z=2:GOTO 1620
1040 x=ROUND(RND)*2+1:z=ROUND(RND)*2+1:IF fe(x,z)<>0 THEN 1040 ELSE 1620
1050 IF zug>7 THEN 1320  
1060 '***    Comp 3er moegl ?
1070 FOR s1=1 TO 3:FOR s2=1 TO 3:IF fe(s1,s2)<>0 THEN 1100
1080 fe(s1,s2)=10:si=2:GOSUB 3800:fe(s1,s2)=0
1090 IF si=0 THEN x=s1:z=s2:GOTO 1620
1100 NEXT s2:NEXT s1
1110 '***    Spieler 2er ? (w,s,lo,ro)
1120 IF fe(1,lzz)+fe(2,lzz)+fe(3,lzz)<>2 THEN 1140
1130 FOR s=1 TO 3:IF fe(s,lzz)=0 THEN x=s:z=lzz:GOTO 1620 ELSE NEXT s
1140 IF fe(lzs,1)+fe(lzs,2)+fe(lzs,3)<>2 THEN 1160
1150 FOR s=1 TO 3:IF fe(lzs,s)=0 THEN x=lzs:z=s:GOTO 1620 ELSE NEXT s
1160 IF lzs<>lzz AND fe(1,1)+fe(2,2)+fe(3,3)<>2 THEN 1180
1170 FOR s=1 TO 3:IF fe(s,s)=0 THEN x=s:z=s:GOTO 1620 ELSE NEXT s
1180 IF lzs<>4-lzz AND fe(1,3)+fe(2,2)+fe(3,1)<>2 THEN 1210 
1190 FOR s=1 TO 3:IF fe(s,4-s)=0 THEN x=s:z=4-s:GOTO 1620 ELSE NEXT s
1200 '***    Spielersiegstellung verhindern
1210 verg=3:GOSUB 4500:IF ja THEN 1620
1220 '***    Computersiegstellung moeglich ?
1230 verg=30:GOSUB 4500:IF ja THEN 1620
1240 '***    neben eigenes und Spielerfeld setzen
1250 FOR s1=-1 TO 1:FOR s2=-1 TO 1:a1=s1+czs:a2=s2+czz
1260 IF a1<1 OR a1>3 OR a2<1 OR a2>3 THEN 1310
1270 IF fe(a1,a2)<>0 THEN 1310 ELSE FOR t1=-1 TO 1:FOR t2=-1 TO 1
1280 IF t1+a1<0 OR t1+a1>3 OR t2+a2<1 OR t2+a2>3 THEN 1300
1290 IF fe(t1+a1,t2+a2)=1 THEN x=a1:z=a2:GOTO 1620
1300 NEXT t2:NEXT t1
1310 NEXT s2:NEXT s1
1320 '****** ZIEHEN   1.freies Feld suchen
1330 FOR s1=1 TO 3:FOR s2=1 TO 3:IF fe(s1,s2)=0 THEN fx=s1:fz=s2:GOTO 1360
1340 NEXT s2:NEXT s1
1350 '***    Compzuege neben freiem Feld (zfs+z)
1360 FOR s=1 TO 8:zfs(s)=0:zfz(s)=0:NEXT s
1370 n=1:FOR s1=-1 TO 1:FOR s2=-1 TO 1:a1=s1+fx:a2=s2+fz
1380 IF a1<1 OR a1>3 OR a2<1 OR a2>3 THEN 1410
1390 IF fe(a1,a2)=10 THEN zfs(n)=a1:zfz(n)=a2:n=n+1
1400 '***    Nur 1 Zugstein - ziehen
1410 NEXT s2:NEXT s1:IF n=2 THEN x=zfs(1):z=zfz(1):GOTO 1610
1420 '***    Spieler mit freiem Feld 3er ?
1430 l=1:FOR t=1 TO n-1:si=2:fe(zfs(t),zfz(t))=1:GOSUB 3800
1440 fe(zfs(t),zfz(t))=10:IF si<>1 THEN zm(l)=t:l=l+1
1450 NEXT t:zfmax=l-1:IF l=1 THEN x=zfs(1):z=zfz(1):GOTO 1610
1460 '***    Comp 3er moegl ?
1470 FOR ls=1 TO zfmax:si=2:fe(fx,fz)=10:fe(zfs(ls),zfz(ls))=0:GOSUB 3800
1480 fe(fx,fz)=0:fe(zfs(ls),zfz(ls))=10
1490 IF si=0 THEN x=zfs(ls):z=zfz(ls):GOTO 1610
1500 '***    Comp Siegstellung ? 
1510 NEXT ls:verg=40:GOSUB 4500:IF v=0 THEN 1560
1520 FOR ls=1 TO zfmax:IF zfs(zm(ls))=2 OR zfz(zm(ls))=2 THEN 1540
1530 x=zfs(zm(ls)):z=zfz(zm(ls)):GOTO 1610 
1540 NEXT ls
1550 '***    Comp Siegstellung moegl ?
1560 fe(fx,fz)=10:GOSUB 4500:fe(fx,fz)=0:IF v=0 THEN is=1:GOTO 1590
1570 sv=v:verg=30:FOR is=1 TO zfmax:fe(zfs(zm(is)),zfz(zm(is)))=0:GOSUB 4500
1580 fe(zfs(zm(is)),zfz(zm(is)))=10:IF sv<>v THEN NEXT is
1590 x=zfs(zm(is)):z=zfz(zm(is))
1600 '***    Compzugausgabe  1.Feld loeschen 2.Feld besetzen
1610 fe(x,z)=0:PEN 0:GOSUB 3500:x=fx:z=fz 
1620 PEN fc:fe(x,z)=10:czs=x:czz=z:GOSUB 3500:si=2
1630 GOSUB 3800:IF si<>2 THEN 4010
2000 '****** SPIELERZUG
2010 PEN 1:LOCATE 1,23:PRINT CHR$(20);:LOCATE 5,23
2020 PRINT"Bitte Zug eingeben : ";
2030 IF zugs>3 THEN 2060 ELSE GOSUB 2510:IF fehl THEN 2560
2040 IF fe(xs,zs)<>0 THEN 2560
2050 x=xs:z=zs:fe(x,z)=1:lzs=x:lzz=z:PEN fs:GOSUB 3500:GOTO 2140
2060 GOSUB 2510:IF fehl THEN 2560
2070 IF fe(xs,zs)=1 THEN 2090
2080 LOCATE 5,23:PRINT"Welchen Stein ?";CHR$(20):GOSUB 7010:GOTO 2010
2090 FOR s1=1 TO 3:FOR s2=1 TO 3:IF fe(s1,s2)=0 THEN x=s1:z=s2:GOTO 2110
2100 NEXT s2:NEXT s1:STOP
2110 IF ABS(s1-xs)>1 OR ABS(s2-zs)>1 THEN 2560
2120 PEN fs:fe(x,z)=1:lzs=x:lzz=z:GOSUB 3500
2130 x=xs:z=zs:fe(x,z)=0:PEN 0:GOSUB 3500 
2140 zugs=zugs+1:si=2:GOSUB 3800:IF si<>2 THEN 4010 ELSE 1000
2500 '*****  UP  Spielereingabe
2510 PEN 1:fehl=0
2520 i$=INKEY$:IF i$="" THEN 2520 ELSE i$=UPPER$(i$):PRINT i$;
2530 IF i$="A" OR i$="B" OR i$="C" THEN xs=ASC(i$)-64 ELSE fehl=-1:RETURN
2540 i$=INKEY$:IF i$="" THEN 2540 ELSE PRINT i$;:zs=ASC(i$)-48
2550 IF zs>3 OR zs<1 THEN fehl=-1:RETURN ELSE RETURN
2560 PEN 1:LOCATE 5,23:PRINT"Falsche Eingabe !";CHR$(20):GOSUB 7010:GOTO 2010
3000 '*****  Programmbeginn
3005 MODE 1:BORDER 1:INK 0,0:INK 1,24:INK 2,9:INK 3,14
3010 DIM fe(3,3):random=TIME:sieg=ROUND(RND)
3020 SYMBOL 255,&3C,&66,&66,&6C,&66,&66,&6C,&60 
3030 SYMBOL 254,&CC,0,&78,&C,&7C,&CC,&76,0 
3040 SYMBOL 253,&66,0,&66,&66,&66,&66,&3E,0
3050 SPEED INK 20,20:DEFINT a-z:z$=STRING$(4,143):GOSUB 8000:GOSUB 6000
3060 PEN 1:zugs=0:zug=0:GOSUB 5010:LOCATE 5,23:IF sieg=0 THEN 3090
3070 PRINT"Ich habe wei";CHR$(255);" und fange an !"
3080 fs=2:fc=1:GOSUB 3200:GOSUB 7010:GOTO 1000
3090 PRINT"Du hast wei";CHR$(255);" und f";CHR$(254);"ngst an !"
3100 fs=1:fc=2:GOSUB 3200:GOSUB 7010:GOTO 2000
3200 '*****  UP Spieler- und Computerfarbausgabe
3210 PEN fs:LOCATE 31,4:PRINT"SPIELER":LOCATE 31,6:PRINT"hat ";
3220 IF fs=1 THEN PRINT"wei";CHR$(255);"!" ELSE PRINT"gr";CHR$(253)";n!"
3230 PEN fc:LOCATE 31,15:PRINT"CPC-464":LOCATE 31,17:PRINT"hat "; 
3240 IF fc=1 THEN PRINT"wei";CHR$(255);"!" ELSE PRINT"gr";CHR$(253);"n!"
3250 RETURN
3500 '*****  UP Stein zeichnen  Curs li ob eck
3510 x=x*5+9:z=-1+z*5:LOCATE x,z:PRINT CHR$(214);CHR$(143);CHR$(143);CHR$(215)
3520 LOCATE x,z+1:PRINT z$:LOCATE x,z+2:PRINT z$:LOCATE x,z+3:PRINT CHR$(213);
3530 PRINT CHR$(143);CHR$(143);CHR$(212):zug=zug+1:RETURN
3800 '***** UP dreier ?
3810 FOR s=1 TO 3
3820 IF fe(s,1)+fe(s,2)+fe(s,3)=30 OR fe(1,s)+fe(2,s)+fe(3,s)=30 THEN si=0
3830 IF fe(s,1)+fe(s,2)+fe(s,3)=3 OR fe(1,s)+fe(2,s)+fe(3,s)=3 THEN si=1
3840 NEXT s:IF fe(1,1)+fe(2,2)+fe(3,3)=3 OR fe(3,1)+fe(2,2)+fe(1,3)=3 THEN si=1
3850 IF fe(1,1)+fe(2,2)+fe(3,3)=30 OR fe(3,1)+fe(2,2)+fe(1,3)=30 THEN si=0 
3860 RETURN
4000 '*****  Gewonnen Ausgabe
4010 PEN 1:LOCATE 5,23:IF si=0 THEN PRINT"Ich habe gewonnen !";:com=com+1
4020 IF si=1 THEN PRINT"Du hast gewonnen !";:spi=spi+1
4030 PRINT CHR$(20):LOCATE 5,25:PRINT"Es steht";spi;"zu";com;"f";CHR$(253);
4040 PRINT"r Dich !":sieg=si:GOSUB 7010:LOCATE 5,23:PEN 3
4050 PRINT"Weiter mit jeder Taste ...":WHILE INKEY$="":WEND:GOTO 3060
4500 '***** UP Angriff Siegstellung (setzen)
4510 v=0:ja=0
4520 IF fe(2,1)+fe(2,2)+fe(1,3)+fe(3,3)=verg THEN v=1
4530 IF fe(2,3)+fe(2,2)+fe(1,1)+fe(3,1)=verg THEN v=2
4540 IF fe(1,2)+fe(2,2)+fe(3,1)+fe(3,3)=verg THEN v=3
4550 IF fe(3,2)+fe(2,2)+fe(1,1)+fe(1,3)=verg THEN v=4
4560 IF v=0 THEN RETURN
4570 IF fe(1,1)=0 AND (v=2 OR v=4) THEN x=1:z=1:ja=-1
4580 IF fe(1,2)=0 AND v=3 THEN x=1:z=2:ja=-1
4590 IF fe(1,3)=0 AND (v=1 OR v=4) THEN x=1:z=3:ja=-1
4600 IF fe(2,1)=0 AND v=1 THEN x=2:z=1:ja=-1
4610 IF fe(2,2)=0 THEN x=2:z=2:ja=-1
4620 IF fe(2,3)=0 AND v=2 THEN x=2:z=3:ja=-1
4630 IF fe(3,1)=0 AND (v=2 OR v=3) THEN x=3:z=1:ja=-1
4640 IF fe(3,2)=0 AND v=4 THEN x=3:z=2:ja=-1
4650 IF fe(3,3)=0 AND(v=1 OR v=3) THEN x=3:z=3:ja=-1
4660 RETURN
5000 '*****  Spielfeld zeichnen
5010 MODE 1:FOR x=1 TO 3:fe(x,1)=0:fe(x,2)=0:fe(x,3)=0:NEXT x
5020 ORIGIN 1,1:FOR z=360 TO 120 STEP-80:MOVE 198,z:DRAWR 242,0,3:MOVER 0,-2
5030 DRAWR -242,0:NEXT z:FOR x=198 TO 450 STEP 80:MOVE x,360:DRAWR 0,-240
5040 MOVER 2,0:DRAWR 0,240:NEXT x
5050 '***    Zahlen drawen
5060 ORIGIN 142,344:RESTORE 5210:FOR s=1 TO 8:READ x1,z1,x2:MOVER x1,z1
5070 DRAWR x2,0,1:NEXT s:MOVER 8,-2:FOR s=1 TO 14:DRAWR 12,0:MOVER -12,-2
5080 NEXT s:MOVER -10,0:FOR s=1 TO 4:DRAWR 32,0:MOVER -32,-2:NEXT s
5090 ORIGIN 150,264:FOR s=1 TO 35:READ x1,z1,x2:MOVER x1,z1
5100 DRAWR x2,0,1:NEXT s:ORIGIN 150,184:RESTORE 5220:FOR s=1 TO 17
5110 READ x1,z1,x2:MOVER x1,z1:DRAWR x2,0:NEXT s:RESTORE 5280:FOR s=1 TO 16
5120 READ x1,z1,x2:MOVER x1,z1:DRAWR x2,0:NEXT s
5130 '***    Buchst drawen
5140 ORIGIN 220,60:FOR s=1 TO 16:DRAWR 10,0:MOVER 16,0:DRAWR 10,0:MOVER -36,2
5150 NEXT s:MOVER 10,-14:FOR s=1 TO 4:DRAWR 14,0:MOVER -14,-2:NEXT s
5160 RESTORE 5320:FOR s=1 TO 17:READ x1,z1,x2:MOVER x1,z1:DRAWR x2,0:NEXT s
5170 ORIGIN 300,60:FOR s=1 TO 24:DRAWR 10,0:MOVER -10,2:NEXT s
5180 FOR s=1 TO 24:READ x1,z1,x2:MOVER x1,z1:DRAWR x2,0:NEXT s
5190 ORIGIN 380,100:FOR s=1 TO 26:READ x1,y1,x2
5200 MOVER x1,y1:DRAWR x2,0:NEXT s:RETURN
5210 DATA 18,0,10,0,-2,-12,-2,-2,14,0,-2,-16,-2,-2,18,0,-2,-20,0,-2,20,0,-2,-20
5220 DATA 2,0,22, 4,-2,-30, -2,-2,34, 2,-2,-38, 0,-2,12, -2,-2,-10
5230 DATA 0,-2,8, 16,4,14, 0,-2,-12, 2,-2,10, 0,-2,-10, 0,-2,10, 0,-2,-12
5240 DATA -10,-2,22, -2,-2,-20, 0,-2,18, -4,-2,-14
5250 DATA 0,4,-6, -4,-2,8, 0,-2,-10, -2,-2,14, -2,-2,-14, 0,-2,12, 0,-2,-12
5260 DATA 0,-2,12, 0,-2,-12, 0,-2,12, 0,-2,-12, 0,-2,38, 0,-2,-38, 0,-2,38
5270 DATA 0,-2,-38, 38,8,-10, 0,2,10, 0,2,-10
5280 DATA 0,0,20, 2,-2,-12, 2,-2,12, 0,-2,-10, 0,-2,10, 0,-2,-10, 0,-2,10 
5290 DATA -12,-2,12, 0,-2,-16, -24,-2,38, -2,-2,-34, 2,-2,30, -4,-2,-22
5300 DATA 2,8,-12, 0,2,10, 0,2,-10, -10,20,10, 0,2,-10, 2,2,10, 0,2,-10
5310 DATA 0,2,-10, 2,2,10, 0,2,-10
5320 DATA -10,20,10, 0,2,-10, 2,2,10, 2,2,-10, 2,2,10, 2,2,-10, 2,2,10, -8,2,12
5330 DATA -2,2,-8, 12,-4,-16, 6,-2,12, 2,-2,-10, 2,-2,10, 2,-2,-10, 2,-2,10
5340 DATA 0,-2,-10, 0,-2,10
5350 DATA 10,-2,14, 4,-2,-18, 0,-2,22, 2,-2,-24, 14,-2,12, 0,-2,-10, 0,-2,10
5360 DATA -10,-2,10, 0,-2,-10, -2,-2,10, -2,-2,-22, 0,-2,20, 0,-2,-20, 0,-2,22
5370 DATA 2,-2,-10, 2,-2,10, 0,-2,-10, 0,-2,10, 0,-2,-10, -2,-2,12
5380 DATA -2,-2,-24, 0,-2,22, -4,-2,-18, 0,-2,14
5390 DATA 26,-2,10, -12,8,-12, -4,-2,20, 4,-2,-28, -2,-2,32, -24,-2,-10
5400 DATA -2,-2,10, 0,-2,-10, 0,-2,10, 0,-2,-10, 0,-2,10, 0,-2,-10, 0,-2,10
5410 DATA 0,-2,-10, 0,-2,10, 0,-2,-10, 0,-2,10, 0,-2,-10, 0,-2,10, 0,-2,-10
5420 DATA 2,-2,10, 24,-2,-32, 2,-2,28, -4,-2,-20, 4,-2,12, 2,8,10 
6000 '*****  Spielanleitung
6010 MODE 1:PEN 3:LOCATE 14,2:INK 2,20,10
6020 PRINT"DREIMAL EINS":PEN 1:LOCATE 5,5:PRINT"Jeder  Spieler  hat vier ";
6030 PRINT"Spiel-",,,"    steine  und mu";CHR$(255);" versuchen, drei"
6040 PRINT:PRINT"    Steine  in  eine   waagerechte,",,,"    senkrechte oder";
6050 PRINT" diagonale Reihe",,"    zu bekommen. Wenn  alle  Steine":PRINT
6060 PRINT"    gelegt sind, wird je ein  Stein",,,"    um ein  Feld  gezog";
6070 PRINT"en, bis eine",,,"    Partei gewinnt.":PRINT:PEN 3:PRINT"   ";
6080 PRINT CHR$(164);"1985 by Jens Uwe Timm , Hannover":GOSUB 7010:LOCATE 8,25
6090 PEN 2:PRINT"Weiter mit jeder Taste ...":CALL &BB18:INK 2,9:RETURN
7000 '*****  UP Warteschleife
7010 call &bb18:return: 'FOR w=1 TO 2000:i$=INKEY$:NEXT w:RETURN 
8000 '*****  Titelbild
8010 MODE 1:BORDER 2:INK 3,15:PEN 1
8020 LOCATE 4,23:PRINT CHR$(164);" 1985 by Jens Uwe Timm ,";
8030 PRINT" HANNOVER":LOCATE 14,25:PRINT"Tel. 79 53 96":PEN 3
8040 ax=4:az=3:RESTORE 8070:FOR y=1 TO 151:READ x,z:LOCATE x+ax,z+az
8050 PRINT CHR$(231):FOR w=1 TO 30:NEXT w:NEXT y
8060 GOSUB 7010:GOSUB 7010:BORDER 1:INK 3,14:RETURN 
8070 DATA 1,3,2,4,2,3,2,2,3,3,3,2,3,1,4,2,4,1,5,1,5,2,6,1,6,2,7,1,7,2,8,1,8,2
8080 DATA 9,2,8,3,9,3,10,3,9,4,10,4,9,5,10,5,9,6,10,6,9,7,8,7,7,7,7,8,8,8,9,8
8090 DATA 9,9,10,9,9,10,10,10,9,11,10,11,9,12,10,12,8,12,9,13,8,13,7,13,8,14,7
8100 DATA 14,6,13,6,14,5,13,5,14,4,13,4,14,3,14,3,13,2,13,3,12,2,12,1,12,2,11
8110 DATA 13,4,14,3,14,4,14,5,15,4,15,5,15,6,16,5,16,6,17,6,16,7,17,7,18,7,17,8
8120 DATA 18,8,19,8,18,9,19,9,20,9,19,10,20,10,21,10,20,11,21,11,22,11,21,12,21
8130 DATA 3,22,4,21,4,20,4,21,5,20,5,19,5,20,6,19,6,18,6,19,7,18,7,17,8,16,8,17
8140 DATA 9,16,9,15,9,16,10,15,10,14,10,15,11,14,11,13,11,14,12,25,5,26,6,26,5
8150 DATA 26,4,27,5,27,4,27,3,28,4,28,3,28,2,29,3,29,2,29,1,30,1,31,1,30,2,31,2
8160 DATA 30,3,31,3,30,4,31,4,30,5,31,5,30,6,31,6,30,7,31,7,30,8,31,8,30,9,31,9
8170 DATA 30,10,31,10,30,11,31,11,30,12,31,12,30,13,31,13,30,14,31,14
*/ });
