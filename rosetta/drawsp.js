/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 REM drawsp - Draw a sphere (ASCII)
5 REM https://rosettacode.org/wiki/Draw_a_sphere#Locomotive_Basic
6 REM GNU FDL 1.2 (https://www.gnu.org/licenses/fdl-1.2.html)
10 MODE 2:s$=".:!*oe&#%@"
20 DIM v(2),vec(2)
30 v(0)=30:v(1)=30:v(2)=-50
40 lung=SQR(v(0)*v(0)+v(1)*v(1)+v(2)*v(2))
50 v(0)=v(0)/lung
60 v(1)=v(1)/lung
70 v(2)=v(2)/lung
80 r=10:k=2:ambient=0.4
90 FOR i=INT(-r) TO INT(r)
100 x=i+0.5
110 FOR j=INT(-2*r) TO INT(2*r)
120 y=j/2+0.5
130 IF (x*x+y*y<=r*r) THEN GOSUB 1000 ELSE PRINT" ";
140 NEXT j
150 PRINT
160 NEXT i
170 END
1000 vec(0)=x
1010 vec(1)=y
1020 vec(2)=SQR(r*r-x*x-y*y)
1030 GOSUB 2000
1040 GOSUB 3000
1050 b=d^k+ambient
1060 intensity%=(1-b)*(LEN(s$)-1)
1070 IF (intensity%<0) THEN intensity%=0
1080 IF (intensity%>LEN(s$)-1) THEN intensity%=LEN(s$)-2
1090 PRINT MID$(s$,intensity%+1,1);
1100 RETURN
2000 lung=SQR(vec(0)*vec(0)+vec(1)*vec(1)+vec(2)*vec(2))
2010 vec(0)=vec(0)/lung
2020 vec(1)=vec(1)/lung
2030 vec(2)=vec(2)/lung
2040 RETURN
3000 d=v(0)*vec(0)+v(1)*vec(1)+v(2)*vec(2)
3010 IF d<0 THEN d=-d ELSE d=0
3020 RETURN
*/ });
