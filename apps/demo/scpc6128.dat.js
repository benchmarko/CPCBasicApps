/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
""
"-6\b§­ÁÇ"
"+,78\\bb§§­­ÁÁÇÇ"
")*99\\bb§§­­ÁÁÇÇ"
"((::\\bb§§­­ÁÁÇÇ"
"'';;\\bb§§­­ÁÁÇÇ"
"&&<<\\bb§­ÁÁÇÇ"
"%%.4==\\bbÁÁÇÇ"
"$$,-55==\\bbÁÁÇÇ"
"$$++66>>\\bbÁÁÇÇ"
"##**77>>\\bbÁÁÇÇ"
"##**7>\\bbÁÁÇÇ"
"##**KP\\bbgktzƒ”š§­ÁÁÇÇÓÙæíò÷"
"##++IJQR\\bbeflmttzz}~„…’“›œ§§­­¸¼ÁÁÇÇÑÒÚÛææííðñ÷÷"
"##,/GHST\\bbddnnttzz||††‘ž§§­­¶·½¾ÁÁÇÇÏÐÜÝææííïï÷÷"
"$$03FFUU\\bcnnttz{††ŸŸ§§­­´µ¿¿ÁÁÇÇÎÎÞÞææíî÷÷"
"$$47EEVV\\oott‡‡ŽŽ  §§­­³³ÀÁÇÇÍÍßßææ÷÷"
"%%89EELOVV\\egoott}‡‡ŽŽ–˜  §§­­³³ÇÇÍÍÕ×ßßææ÷÷"
"&':;DDKKPPWW\\ddhhpptt||€€ˆˆ”•™š¡¡§§­­²²º¾ÇÇÌÌÓÔØÙààææð÷"
"(*<<DDJJPPWW\\cciipptt{{ˆˆ““››¡¡§§­­²²¹¹¿¿ÇÇÌÌÒÒÚÚààææîï"
"+.==CCJJQQWW\\cciipptt{{ˆˆŒŒ’’œœ¢¢§§­­±±¸¸ÀÀÇÇËËÑÑÛÛááææíí"
"/2>>CCIIQW\\bbjjppttzz‚‚ˆˆŒŒ’œ¢¢§§­­±±¸¸ÀÀÇÇËËÑÛááææíí"
"36>>CCII\\bbjjppttzz‚‚ˆˆŒŒ¢¢§§­­±±··ÁÁÇÇËËááææìì"
"77??CCII\\bbjjppttzz‚‚ˆˆŒŒ¢¢§§­­±±··ÁÁÇÇËËááææìì"
"88??CCII\\bbjjppttzz‚‚ˆˆŒŒ¢¢§§­­±±··ÁÁÇÇËËááææìì"
"#*88??CCII\\bbjjppttzz‚‚ˆˆŒŒ’¢§§­­±±··ÁÁÇÇËËÑáææìì"
"##**88??CCIIQW\\bbjjppttzz‚‚ˆˆŒŒ’’§§­­±±··ÁÁÇÇËËÑÑææìì"
"##++77??CCJJQQWW\\bbjjppttzz‚‚ˆˆŒŒ’’§§­­±±¸¸ÀÀÇÇËËÑÑææìì"
"$$,-56>>DDJJPPWW\\bbjjppttzz‚‚ˆˆ““›¢§§­­±±¸¸ÀÀÇÇÌÌÒÒÚáææìì"
"$$.4>>DDKKPPWW\\bbjjppttzz‚‚ˆˆ”•™š¢¢§§­­²²¹¹¿¿ÇÇÌÌÓÔØÙááææìì"
"%%==EELOVV\\bbjjppttzz‚‚ˆˆŽŽ–˜¡¡§§­­²²º¾ÇÇÍÍÕ×ààææìì"
"&&<<EEVV\\bbjjppttzz‚‚ˆˆŽŽ¡¡§§­­³³ÇÇÍÍààææìì"
"'(;;FFUU\\bbjjppttzz‚‚ˆˆ  §§­­³³ÇÇÎÎßßææìì"
")*9:GHST\\bbjjppttzz‚‚ˆˆ‘žŸ§§­­´µÀÁÇÇÏÐÝÞææìì"
"+,78IJQR\\bbjjppttzz‚‚ˆˆ’“œ§§­­¶·¿¿ÁÁÇÇÑÒÛÜææìì"
"-6KP\bjptz‚ˆ”›§­¸¾ÁÇÓÚæì"
""
""
""
""
""
""
""
""
""
""
""
""
"?D¥©"
"=>EF¥¥©©"
";<GH¥¥©©"
"::II¥¥©©"
"99JJ¥¥©©"
"99@CJJ¥¥©©"
"88??DDKK¥¥©©"
"88>>DDKKUYcgjmqu{ƒ†”™¡¥©­·»ÅÉÌÐ"
"77>>EEKKSTZ[ccggiinnppvv{{‚‡ˆ””™™¡¡­­µ¶¼½ÅÅÉÉËËÐÐ"
"77==EKRR\\ccghooww{{€‰‰””™™¡¡­­´´¾¾ÅÅÉÊÐÐ"
"77==QQ]]ccww{{ŠŠ””™™¡¡­­³³¿¿ÅÅÐÐ"
"77==PPVX^^cciiqqww{{ƒ…‹‹””™™¡¥©­²²¸ºÀÀÅÅÌÐ"
"77==PPUUYY^^cchhjjpprrww{{‚‚††‹‹””™™¥¥©©²²¶·»¼ÀÀÅÅËË"
"77==OOTTZZ__ccggkkoossww{{‡‡ŒŒ””™™¥¥©©±±µµ½½ÁÁÅÅÊÊ"
"77==EKOOSS[[__ccggkkoossww{{€€ˆˆŒŒ””™™¥¥©©±±µ½ÁÁÅÅÉÉ"
"77>>EEKKOOSS[[__ccggkkoossww{{€€ˆˆŒŒ””™™¥¥©©±±ÁÁÅÅÉÉ"
"88>>DDKKOOSS[[__ccggkkoossww{{€€ˆˆŒŒ””™™¥¥©©±±µÁÅÅÉÉ"
"88??DDKKOOTTZZ__ccggkkoossww{{‡‡ŒŒ””™™¥¥©©±±µµÅÅÉÉ"
"99@CJJPPUUYY^^ccggkkoossww{{‚‚††‹‹••˜˜¥¥©©²²¶¶¼ÁÅÅÉÉ"
"99JJPPVX^^ccggkkoossww{{ƒ…‹‹‘‘–—¥¥ªª²²·»ÀÀÅÅÉÉ"
"::IIQQ]]ccggkkoossww{{ŠŠ‘‘¥¥«¬³³¿¿ÅÅÉÉ"
";<GHRR\\ccggkkoossww{{€‰‰’’¦¦¬¬´´¾¾ÅÅÉÉ"
"=>EFSTZ[ccggkkoossww{{‚‡ˆ“”˜™§§¬¬µ¶¼½ÅÅÉÉ"
"?DUYcgkosw{{ƒ†•—™¨¬·»ÅÉ"
"{{"
"{{"
"{{"
"{{"
"{{"
"{"
""
""
""
""
""
""
""
""
""
""
""
""
""
""
""
""
""
""
""
""
""
""
*/ });