/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 rem eramtst - Expansion RAM Test
2 rem TFM
3 rem http://cpc-live.com/forum/index.php/topic,217.msg1199.html#msg1199
4 rem
900 '  ________________________
909 ' /                        \
918 '| Testprogram for all ERAM |
927 '|--------------------------|
936 '| Compatible with:         |
945 '| - 64 - 512 KB dk'tronics |
954 '| - 64 - 512 KB Dobbertin  |
963 '| - 512 KB Inicron S-RAM   |
972 '| - 512 KB SYMBiFACE II    |
981 '| - 2 MB E-RAM of RAM7     |
990 '| - 4 MB E-RAM of Jarek A. |
999 '|--------------------------|
1008 '| 4 MB ERAM Check Software |
1017 '| by TFM / FutureSoft 2014 |
1026 ' \________________________/
1035 '
1044 OUT &7FC0,&C0
1053 MODE 2:BORDER 0:INK 0,0:INK 1,26
1062 FOR ah=&78 TO &7F
1071 FOR sm=&F0 TO &C0 STEP-&10
1080 OUT ah*256+sm+&F,sm+&F:POKE &4000,ah:POKE &4001,+sm+&F:PRINT"o ";
1089 OUT ah*256+sm+&E,sm+&E:POKE &4000,ah:POKE &4001,+sm+&E:PRINT"o ";
1098 OUT ah*256+sm+&D,sm+&D:POKE &4000,ah:POKE &4001,+sm+&D:PRINT"o ";
1107 OUT ah*256+sm+&C,sm+&C:POKE &4000,ah:POKE &4001,+sm+&C:PRINT"o ";
1116 OUT ah*256+sm+&7,sm+&7:POKE &4000,ah:POKE &4001,+sm+&7:PRINT"o ";
1125 OUT ah*256+sm+&6,sm+&6:POKE &4000,ah:POKE &4001,+sm+&6:PRINT"o ";
1134 OUT ah*256+sm+&5,sm+&5:POKE &4000,ah:POKE &4001,+sm+&5:PRINT"o ";
1143 OUT ah*256+sm+&4,sm+&4:POKE &4000,ah:POKE &4001,+sm+&4:PRINT"o  ";
1152 NEXT sm
1161 PRINT
1170 NEXT ah
1179 PRINT:PRINT
1188 OUT &7FC0,&C0:POKE &4000,&7F:POKE &4001,&C0
1197 eram=0
1206 FOR ah=&78 TO &7F
1215 FOR sm=&F0 TO &C0 STEP-&10
1224 OUT ah*256+sm+&F,sm+&F:PRINT HEX$(ah*256+sm+&F);" ";:IF ah*256+sm+&F=PEEK(&4000)*256+PEEK(&4001)THEN PRINT"connected!  ";:GOSUB 1350:ELSE PRINT"missing!    ";
1233 OUT ah*256+sm+&E,sm+&E:PRINT HEX$(ah*256+sm+&E);" ";:IF ah*256+sm+&E=PEEK(&4000)*256+PEEK(&4001)THEN PRINT"connected!  ";:GOSUB 1350:ELSE PRINT"missing!    ";
1242 OUT ah*256+sm+&D,sm+&D:PRINT HEX$(ah*256+sm+&D);" ";:IF ah*256+sm+&D=PEEK(&4000)*256+PEEK(&4001)THEN PRINT"connected!  ";:GOSUB 1350:ELSE PRINT"missing!    ";
1251 OUT ah*256+sm+&C,sm+&C:PRINT HEX$(ah*256+sm+&C);" ";:IF ah*256+sm+&C=PEEK(&4000)*256+PEEK(&4001)THEN PRINT"connected!":GOSUB 1350:ELSE PRINT"missing!"
1260 OUT ah*256+sm+&7,sm+&7:PRINT HEX$(ah*256+sm+&7);" ";:IF ah*256+sm+&7=PEEK(&4000)*256+PEEK(&4001)THEN PRINT"connected!  ";:GOSUB 1350:ELSE PRINT"missing!    ";
1269 OUT ah*256+sm+&6,sm+&6:PRINT HEX$(ah*256+sm+&6);" ";:IF ah*256+sm+&6=PEEK(&4000)*256+PEEK(&4001)THEN PRINT"connected!  ";:GOSUB 1350:ELSE PRINT"missing!    ";
1278 OUT ah*256+sm+&5,sm+&5:PRINT HEX$(ah*256+sm+&5);" ";:IF ah*256+sm+&5=PEEK(&4000)*256+PEEK(&4001)THEN PRINT"connected!  ";:GOSUB 1350:ELSE PRINT"missing!    ";
1287 OUT ah*256+sm+&4,sm+&4:PRINT HEX$(ah*256+sm+&4);" ";:IF ah*256+sm+&4=PEEK(&4000)*256+PEEK(&4001)THEN PRINT"connected!":GOSUB 1350:ELSE PRINT"missing!"
1296 PRINT
1305 NEXT sm
1314 PRINT:PRINT"Press any key...":PRINT:WHILE INKEY$="":WEND
1323 NEXT ah
1332 PRINT"Aside of 64 KB main memory this computer has: ";eram;" KB Expansion RAM.":PRINT
1341 END
1350 eram=eram+16
1359 RETURN
*/ });
