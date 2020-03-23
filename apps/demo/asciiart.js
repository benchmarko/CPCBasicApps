/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem asciiart - ASCII Art
2 rem
3 rem https://www.asciiart.eu/animals/cats
4 rem
10 mode 2:ink 0,26:ink 1,10
20 for i=1 to 10
30 window i,i+28,10,21:cls
40 if (i and 1)=0 then gosub 100 else gosub 290
50 t!=time+150:while time<t!:call &bd19:wend
60 next
80 t!=time+1000:while time<t! and inkey$="":call &bd19:wend
85 run
90 '
100 ?" _
110 ?"( \
120 ?" \ \
130 ?" / /                |\\
140 ?"/ /     .-`````-.   / ^`-.
150 ?"\ \    /         \_/  {|} `o
160 ?" \ \  /   .---.   \\ _  ,--'
170 ?"  \ \/   /     \,  \( `^^^
180 ?"   \   \/\      (\  )
190 ?"    \   ) \     ) \ \
200 ?"jgs  ) /__ \__  ) (\ \___
210 ?"    (___)))__))(__))(__)))
220 return
250 '
290 if i>1 then window #1,i-1,i-1,10,21:cls#1
300 ?"     _ 
310 ?"    / ) 
320 ?"   / /  
330 ?"  / /               /\ 
340 ?" / /     .-```-.   / ^`-.  
350 ?" \ \    /       \_/  (|) `o 
360 ?"  \ \  /   .-.   \\ _  ,--' 
370 ?"   \ \/   /   )   \( `^^^  
380 ?"    \   \/    (    )  
390 ?"     \   )     )  /     
400 ?" jgs  ) /__    | (__  
410 ?"     (___)))   (__)))
420 return
*/ });
