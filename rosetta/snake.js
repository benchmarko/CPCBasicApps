/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 REM snake - Snake
5 REM https://rosettacode.org/wiki/Snake#Locomotive_Basic
6 REM GNU FDL 1.2 (https://www.gnu.org/licenses/fdl-1.2.html)
10 mode 1:randomize time
15 ink 0,0:ink 1,6:ink 2,18:ink 3,11
20 sx=20:sy=5:dx=1:dy=0:ml=20:dim ox(ml),oy(ml):oi=1:ll=4:skill=8
30 f$=chr$(228):w$=chr$(127):b$=chr$(231)
40 pen 3:print string$(40,w$);
50 for i=2 to 20:print w$;space$(38);w$;:next
60 print string$(40,w$);
70 locate 11, 11:print string$(20,w$);
80 gosub 260
140 locate sx,sy:pen 2:print chr$(224);:ox(oi)=sx:oy(oi)=sy
150 oi=oi+1:if oi>ml then oi=1
160 nx=sx+dx:ny=sy+dy
170 locate nx,ny:a$=copychr$(#0)
180 if a$=w$ or a$=b$ then sound 2,62500/20,100:locate 13,6:print "You have died!":end
190 if a$=f$ then sound 2,62500/500,10: sound 2,62500/1000,10: sound 2,62500/2000,10:p=p+100:print " ";:gosub 260:if ll<ml then ll=ll+1
200 locate 1,24:print "SCORE:"p
210 for i=1 to skill:frame
211 if inkey(1)>-1 then dx=1:dy=0
212 if inkey(8)>-1 then dx=-1:dy=0
213 if inkey(0)>-1 then dx=0:dy=-1
214 if inkey(2)>-1 then dx=0:dy=1
215 next
220 locate sx,sy:pen 2:print b$;
230 nn=1+((oi+ml-ll) mod ml)
240 if ox(nn)>0 then locate ox(nn),oy(nn):print " ";
250 sx=nx:sy=ny:goto 140
260 fx=rnd*39+1:fy=rnd*19+1
270 locate fx,fy:a$=copychr$(#0)
280 if a$<>" " then 260
290 pen 1:print f$;
300 return
*/ });
