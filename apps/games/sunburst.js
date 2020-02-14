/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
1 REM sunbirst - Sunburst Contamination
2 print"              Welcome to^": print"              Att Scoddams"
3 print"^     Sophisticated Basic Adventure:"
4 rem poke53280,0:poke53281,12
5 print"^^^         Sunburst Contamination":gosub551:a$="               "
6 printa$"^^^Instructions"
7 printa$"^Load game."
8 printa$"^Start game."
9 printa$"^Reset computer."
10 geta$:ifa$=""then10
11 ifa$="i"then16
1200 ifa$="l"then InformRestoreGame:goto34
12 rem ifa$="l"then533
13 ifa$="s"then31
14 ifa$="r"thenprint"^ As good as reset...":end
15 goto10
16 rem instructions
17 print"^^You are George Raft, an employee at a";
18 print" small space trading company on earth.";
19 print" You have borrowed a small";
20 print" trading space craft to visit your";
21 print" girlfriend on Geeron in the Geisti";
22 print" system. The weekend has now come to an";
23 print" end, and it's time for you to get";
24 print" back to earth again."
25 gosub610
26 print"^Your loan of the ship is quite";
27 print" inofficial, and you know that if you";
28 print" don't get it back in time, your";
29 print" employment is history."
30 gosub610
31 print"^Sunburst Contamination."
32 print"Copyright Att Scoddams 1982^(Type 'about' for help)^"
33 gosub37:rem show room
34 if rnd(ti)<.05 thengosub408
775 InformSaveUndo
35 gosub43:rem parser
36 goto60
37 gosub613:ifp=25and(p(1)<>-1andp(1)<>p)thenreturn
38 f=0:fori=1toaf
39 ifp(i)<>p or d(i)then42
40 iff=0thenf=1:print"You see:"
41 print"  "f$(i)
42 nexti:return
43 mo=1
44 print"^>";:in$="":rem parser
45 get a$:ifa$=chr$(13)then52
46 if(a$>="a" and a$<="z")or(a$>="0" and a$<="9") or a$=" "and len(a$)<39 then49
47 ifa$=chr$(20) and len(in$) then print a$;:in$=left$(in$,len(in$)-1):goto45
48 goto45
49 ifin$=""anda$=" "then45
50 ifright$(in$,1)=a$ and a$=" "then45
51 printa$;:in$=in$+a$:goto45
52 ifright$(in$,1)=" "thenin$=left$(in$,len(in$)-1)
53 v$="":s$=v$:n$=s$:print".^":rem tolk
54 if mo and in$=""thenprint"Avoiding conversation accomplishes nothing!":goto44
55 mo=0
56 fori=1tolen(in$)
57 ifmid$(in$,i,1)=" "then v1$=left$(in$,i-1):n1$=mid$(in$,i+1):v$=left$(v1$,3):n$=left$(n1$,3):return
58 next:s1$=in$:s$=left$(in$,3):v1$=s1$:v$=s$:return
59 end
60 rem ** ** ** ** ** ** ** ** ** **
61 rem *** *** *** *** *** *** ***
62 rem **** **** **** **** **** ****
63 rem   main
64 gosub547:if w then277
770 ifv$="abo"orv$="hel"orv$="ver"then800
771 ifv$="und"then InformRestoreUndo:goto34
65 ifv$="go"orv$="wal"orv$="run"then282
66 ifv$="loo"orv$="l"then87
67 ifv$="x"orv$="exa"orv$="rea"then90
68 ifv$="kil"orv$="bre"orv$="cut"orv$="str"orv$="des"orv$="hit"then122
69 ifv$="i"orv$="inv"then124
70 ifv$="tak"orv$="get"then128
71 ifv$="dro"then147
72 ifv$="q"orv$="qui"then175
73 ifv$="ope"then296
74 ifv$="tal"orv$="say"then185
75 ifv$="clo"orv$="shu"then331
76 ifv$="con"orv$="att"then194
77 ifv$="giv"orv$="han"then220
78 ifv$="pus"orv$="pre"orv$="mov"orv$="rem"orv$="pul"then229
79 ifv$="tur"then248
80 ifv$="typ"then258
81 ifv$="fuc"orn$="dic"orn$="coc"then418
82 ifv$="put"orv$="ins"then267
83 remifv$="men"orv$="sav"orv$="loa"then533
772 ifv$="sav"then InformSaveGame:goto34
773 ifv$="loa"orv$="res"then InformRestoreGame:goto34
84 print"I don't understand!":goto34
85 ifn$=""thenprint"Now really, shouldn't there be a noun in that sentence?":goto34
86 print"What in space do you mean by "n1$"?":goto34
87 rem look
88 ifv$<>s$then90
89 v(p)=0:goto33
90 rem examine
91 ifn$=""thenprint"You'd better tell me what to examine first!":goto34
92 gosub160:if((n$="pan"orf=107)andp=6)or(p=15andn$="pan")then753
93 iff=0then85
94 iff>99then96
95 if p(f)<>-1 and p(f)<>p then376
96 iff=100andp=3then388
97 iff=101and(p=12orp=26orp=25orp=28orp=7orp=27)then390
98 iff=101andp>3andp<6thenprint"There's a microphone next to it.":goto34
99 iff=102andp>1thenprint"He isn't around here.":goto34
100 iff=102andkd=0thenprint"He really looks like a tough bloke!":goto34
101 iff=102thenprint"He's happy as a child with a new toy!":goto34
102 iff=2andka=0thenprint"The flashlight is currently off.":goto34
103 iff=2thenprint"The flashlight is providing light.":goto34
104 iff=4then393
105 iff=3then397
106 ifp=4andf=103thenprint"The craft is covered by heat resistant tiles.":goto34
107 ifp=4andf=104thenprint"One plate seems to be a bit loose.":goto34
108 iff=1thenprint"It seems to be somewhat flourescent.":goto34
109 if(f=105orf=106)and(p<>9ork4)then376
110 iff=105thenprint"It has a switch on top of it.":goto34
111 iff=106thenprint"The switch is set to 'off'.":goto34
112 if(f=107orf=108)andp<>19then376
113 iff=107thenprint"The console is dominated by a sturdy lever.":goto34
114 iff=108then419
115 iff=20then443
116 iff=22thenprint"It's the brand new docking computer ($10.000.000).":goto34
117 iff=21then475
118 goto390
119 print"In the middle of the control panel, there is a small, ";
120 print"insignificant button.":goto34
121 goto390
122 rem brutalo
123 print"Violence will probably only get you into deep trouble.":goto34
124 rem inventory
125 f=0:print"You are carrying:":fori=1toaf:ifp(i)=-1thenprint"  "f$(i):f=1
126 next
1260 iff=0thenprint"No tea"
127 goto34
128 rem take
129 if p=25 and p(1)<>-1 and p(1)<>p then print "I can't see a thing!":goto34
130 ifn$="all"then142
131 gosub160:iff=0then85
132 iff>99orf=22thenprint"Let's be serious, shall we?":goto34
133 ifp(f)=-1thenprint"Do you really think you need another ";n1$;"?":goto34
134 if p(f)<>p then print"I can't see any "n1$" here, can you?":goto34
135 if rnd(ti)<.02 thenprint"Why should I take orders from you?":goto34
136 ifkc>5thenprint"Hey, cool out. You aint no superman!":goto34
137 gosub751
138 iff=17andp(18)+p(19)=-2then34
139 iff=17and(p(18)=-1orp(19)=-1)then437
140 iff=17thenprint"The snow is much too cold. It burns your hands away.":goto178
141 goto34
142 f=0:for i=1 to af-1:if p(i)<>p or d(i)=1 or i=17 then145
143 ifkc>5then136
144 kc=kc+1:printf$(i)" - Taken.":p(i)=-1:f=1
145 next
1450 if f=0 thenprint"There is nothing to take!"
146 goto34
147 rem drop
148 ifn$="all"then156
149 ifn$=""thenprint"No tea - Dropped.":goto34
150 gosub160:iff=0then85
151 iff>99then153
152 ifp(f)=-1then154
153 print"You don't seem to have the "n1$".":goto34
154 kc=kc-1:print f$(f)" - dropped.":p(f)=p:if f<18 or f>19 or p(17)<>-1 then 34
155 goto437
156 ifkc=0thenn$="":goto147
157 fori=1toaf:ifp(i)<>-1then159
158 printf$(i)" - dropped.":p(i)=p:kc=kc-1
159 next:goto34
160 rem test noun
161 f=(1 and n$="sta")+(2 and (n$="fla" or n$="lig"))
162 f=f+(3 and n$="gam")+(4 and (n$="wri" or n$="wat"orn$="laz" or n$="sup"))
163 f=f+(5 and n$="pla")+(6 and n$="red")+(7 and n$="ora")+(8 and n$="yel")
164 f=f+(9 and n$="gre")+(10 and n$="blu")+(11 and n$="ind")+(12 and n$="vio")
165 f=f+(13 and n$="tun")+(14 and n$="amp")+(15 and n$="lef")+(16 and n$="rig")
166 f=f+(17 and n$="sno")+(18 and n$="mit")+(19 and n$="glo")+(20 and n$="rem")
167 f=f+(21 and (n$="nov" or n$="boo"))+(22andn$="box")
168 f=f+(100 and n$="ben")+(101 and n$="hat")+(102 and n$="gua")
169 f=f+(103 and (n$="spa" or n$="cra"))+(104 and n$="til")+(105 and n$="rob")
170 f=f+(106 and n$="swi")+(107 and n$="con")+(108 and n$="lev")
171 f=f+(109 and n$="hig")+(110 and n$="low")+(111 and n$="twi")
172 f=f+(112 and n$="str")+(113 and n$="cir")+(114 and (n$="sma" or n$="ins"))
173 iff>99thenreturn
174 pr=(1and(p(f)=-1orp(f)=p)):return
175 rem quit
176 print"Are you really sure? ";:gosub44:ifleft$(v$,1)="y"then180
177 print"Thought so...":goto34
178 rem dead
179 print"^^ The game seems to have come to an end."
1790 print "^Command (undo/quit)?";:gosub44:v$=left$(v$,1)
1792 ifv$="q"thenend
1793 InformRestoreUndo:end
180 rem
181 end: rem print"^^^   Press return to play again!":gosub611:run
182 gosub610:print"^^You haven't got a chance to get the ship back ";
183 print"into shape again. You get fired when you come back to earth."
184 goto178
185 rem talk
186 ifn$=""thenprint"Talking to yourself, eh?":goto34
187 ifn$="gua"andp=1then192
188 ifn$<>"hat"andn$<>"mic"thenprint"Okay, you two have a nice little chat.":goto34
189 ifp<4orp>5thenprint"You and the hatch get along pretty well.";:goto34
190 ifk0=0thenk0=1:goto382
191 k0=0:print"With a discreet sound the hatch swings shut.":goto34
192 ifkd=0then383
193 print"The guard doesn't notice you.":goto34
194 rem connect
195 ifn$=""thenprint"You have to tell me what to connect first!":goto34
196 gosub160:iff=0then85
197 ifpr=0thenprint"I can't see it around here!":goto34
198 iff>12andf<17then206
199 iff<>3andf<>4thenprint"It can't be connected!":goto34
200 print"To what?";:gosub44:ifv$=""then200
201 print:f0=f:n$=v$:gosub160:if f=f0 thenprint"It can't be connected to itself!":goto34
202 ifpr=0thenprint"I can't see it around here!":goto34
203 iff<>3andf<>4thenprint"It's useless effort.":goto34
204 print"You make the connection, and after a second, when the game is fully ";
205 print"restored, you disconnect them again.":ke=1:goto34
206 f0=f:print"To what ?";:gosub44:ifv$=""then206
207 n$=v$:gosub160:if f=f0 thenprint"It can't be connected to itself!":goto34
208 if pr=0 thenprint"I can't see it around here!":goto34
209 if f0>f then i=f:f=f0:f0=i
210 if f<>14 and f0<>14 then199
211 if f0=13 thenf=1:goto215
212 if f=16 thenf=2:goto215
213 if f=15 thenf=4:goto215
214 goto199
215 print"You make the connection.";:kh=kh or f:if kh<7 thenprint:goto34
216 print"The stereo comes to life with a bang. You hear some beautiful ";
217 print"Bach from the left loudspeaker, but something more like ";
218 print"speed-metal from the right one. As suddenly as it ";
219 print"woke up, the stereo goes silent.":goto34
220 rem give
221 ifp<>1thenprint"There's noone around!":goto34
222 ifn$<>"gam"thenprint"He doesn't want it!":goto34
223 ifp(3)<>-1thenprint"You haven't got it!":goto34
224 ifke=0thenprint"The guard looks at the game and yawns.":goto34
225 print"He grabs it and examines it closely. 'What's this', he says.";
226 print" He sits down on the ground and starts playing wildly. His mind ";
227 print"starts to explore the world of Donkey Kong, instead of doing his duty."
228 kd=1:p(3)=-2:goto34
229 rem push
230 ifv$=s$then85
231 gosub160:iff=0then376
232 iff>108andf<114andp(20)<>-1thenprint"You don't have the remote control.":goto34
233 iff>108then239
234 iff=22andpr=1thenprint"It's too big to be pushed around.":goto34
235 iff=5andp=4then402
236 iff=108andp=19then422
237 iff=106andp=9andk4=0then424
238 goto247
239 iff=114then484
240 if p<>7 or kj thenprint"You press the button, but nothing seems to happen.":goto34
241 ifkg=0then501
242 iff=113then445
243 iff=109then451
244 iff=110 then457
245 iff=111then459
246 iff=112then467
247 print"Moving it around has no effect.":goto34
248 rem turn
249 ifn$=""thenprint"Shouldn't you add what you want to turn?";:goto34
250 ifn$="swi"andp=9andk4=0then424
251 ifn$<>"pag"thenprint"What's the use of turning that?":goto34
252 ifp(21)<>-1thenprint"You don't seem to have the novel.":goto34
253 ifkf=0then255
254 print"There's nothing of interest on the other pages.":goto34
255 print"You turn to page two in the novel. In the upper left corner there";
256 rem kf$=mid$(str$(RND*100),2):kf=1
2560 kf$="17":kf=1
257 print" is some handwriting: "kf$:goto34
258 rem type
259 ifp<>20thenprint"There is nothing you can type on here.":goto34
260 ifk8=1thenprint"You don't need to open the door now:":goto377
261 ifn$=""then265
262 ifn1$<>kf$thenprint"Nothing happens.":goto34
263 print"The keypad turns silent for a moment, then the door goes up ";
264 print"with a mighty roar.":k8=1:goto34
265 print"Enter code number: ";:gosub44:ifv$=""then265
266 n1$=v1$:goto262
267 rem put
268 gosub160:iff=0then85
269 ifp(f)<>-1thenprint"You haven't got it!":goto34
270 print" Where (i.e. in hole.) ?";:gosub44:ifv$<>"in"thenprint"Useless!":goto34
271 iff<>17thenprint"Why would I ever do that?":goto34
272 ifp<>17thenprint"Not here!":goto34
273 ifn$="hol"then438
274 ifn$<>"ove"thenprint"I don't get where to put it!":goto34
275 ifk7=0thenprint"It's closed!":goto34
276 print"Okay, you put it in the oven.":p(17)=100:kc=kc-1:goto34
277 rem *** walk0
278 g=0:for i=1 to len(u$(p))-2 step 3:if asc(mid$(u$(p),i))=asc(mid$(ri$,w))then280
279 next:print"How can I go in that direction?":goto34
280 gosub285:iff=1then34
281 p=val(mid$(u$(p),i+1,3)):goto33
282 rem *** walk
283 s$=n$:gosub547:if w then277
284 print"You just can't go there, that's all!":goto34
285 rem walk check
286 ifw=4andp=17then368
287 f=0:ifw>2andw<5or(w=1andp>1)or(w=2andp<>15andp<>20andp<>9)thenreturn
288 f=1:ifw=1andkd=0then358
289 ifw=1thenf=0:goto362
290 if(((p=4andw>2)or(p=5andw>5))andk0=0)or(p=7andk3=0and(w=6orw=8))then365
291 if(((p=12andw>4)or(p=26andw>2))andk5=0)or(p=28andw>5andkb=0)then365
292 ifw=2andp=15andk6=0then366
293 ifw=2andp=9andk4=0then370
294 ifw=2andp=20andk8=0then367
295 f=0:return
296 rem open
297 ifn$=""thenprint"You try to open thin air, but don't succeed!":goto34
298 ifn$="gat"thenprint"It's open, but there's a guard at it.":goto34
299 ifn$<>"hat"then306
300 ifp=12orp=26thenf1=k5:k5=1:f=1:goto371
301 ifp=25orp=28thenf1=kb:kb=1:f=1:goto371
302 ifp=7andkj=0and(kl=0ork1)then474
303 ifp=7thenf1=k3:k3=1:f=1:goto371
304 ifp=4orp=5then375
305 goto374
306 ifn$<>"doo"then310
307 ifp=20thenprint"Use the keypad!":goto34
308 ifp=23thenprint"The door is already open!":goto34
309 goto376
310 ifn$<>"ove"andn$<>"mic"then315
311 ifp<>17then376
312 ifk7=1then377
313 k7=1:ifp(p)=101thenp(p)=0:p(11)=p:goto442
314 goto378
315 ifn$<>"pan"then319
316 ifp<>15then376
317 ifk6=1then377
318 k6=1:goto379
319 ifn$<>"cup"then324
320 ifp<>23then376
321 ifk9=1then377
322 k9=1:ifp(9)=0thenp(9)=23:goto406
323 goto378
324 ifkh<>7andn$="rig"orn$="lef"thenprint"You'd probably just ruin it!":goto34
325 ifn$="lef"thenprint"Why, that speaker sounded great!":goto34
326 ifn$<>"rig"thenprint"How can you open a "n1$"?":goto34
327 print"You open the speaker, and a violett package falls out."
328 p(12)=p:print"A cleaning robot enters the room, collects the remains of the ";
329 ifp(16)=-1thenkc=kc-1
330 print"broken loudspeaker, and disappears, idly whistling.":p(16)=0:goto34
331 rem close
332 ifn$=""thenprint"You'll have to tell me what to close!":goto34
333 ifn$<>"hat"then339
334 ifp=12orp=26thenf1=k5:k5=0:f=0:goto384
335 ifp=28thenf1=kb:kb=0:f=0:goto384
336 ifp=27orp=25then387
337 ifp=4orp=5then375
338 goto374
339 ifn$<>"doo"then344
340 ifp=20andk8=0then385
341 ifp=20thenk8=0:goto386
342 ifp=23thenprint"You don't know how to close it from the inside!":goto34
343 goto376
344 ifn$<>"ove"andn$<>"mic"then349
345 ifp<>17then376
346 ifk7=0then385
347 ifp(17)=100thenp(17)=101:k7=0:goto440
348 k7=0:goto386
349 ifn$<>"pan"then353
350 ifp<>15then376
351 ifk6=0then385
352 k6=0:goto386
353 ifn$<>"cup"thenprint"How can you close a "n1$"?":goto34
354 ifp<>23then376
355 ifk9=0then385
356 k9=0:goto386
357 stop
358 print"The guard blocks your path. 'I have been ordered not to let anyone ";
359 print"pass. The area has been invaded by slimetoads. We can't risk ";
360 print"having them spread out all over the galaxy. You'll have to wait ";
361 print"for at least a week!'.":goto476
362 kd=kd+1:ifkd>2thenreturn
363 print"The guard doesn't seem to notice your trespassing, he has just ";
364 print"killed his first Donkey Kong.":return
365 print"You just bump into a closed hatch!":return
366 print"How can I go in that direction?":return
367 print"The door is securely locked.":return
368 print"Oooops! That hole seems to have been a garbage disposer. ";
369 print"You are fastly chopped to death of razor-sharp blades...":goto178
370 print"The little robot blocks the narrow passage.":return
371 if f<>f1 then373
372 print"This kind of hatch cannont be re-opened when it is already open.":goto34
373 print"O.K. The hatch is now open.":goto34
374 print"If there is a hatch to be seen, I must be blind!":goto34
375 print"The hatch hasn't got a handle on it.":goto34
376 print"What "n1$" are you refering to?":goto34
377 print"It's open already.":goto34
378 print"O.K. It's open alright!":goto34
379 print"The panel slides aside and reveals a small room in the ";
380 print"southern wall. It is obviously only known by the inner circle of ";
381 print"the Electricians.":goto34
382 print"The hatch swings open with a silent whistle.":goto34
383 print"'There is no use trying to talk your way in.', the guard replies.":goto34
384 if f<>f1 then386
385 print"It's pretty closed already.":goto34
386 print"O.K. It's closed now.":goto34
387 print"It can't be closed from this side.":goto34
388 if p(3)<>3 and p(3)<>0 then390
389 p(3)=3:print"Lying on one of the benches is a Game & Watch-game.":goto34
390 if rnd(ti)<.5 then392
391 print"There's nothing special about the "n1$".":goto34
392 print"It's just an ordinary "n1$".":goto34
393 print"It's a brand new Giga watch, with radar,sonar, thermometer, ";
394 print"earth's current distance to the sun, saturn and 12 other";
395 print"selectable planets, seismograph, radio, tv-set, video, ";
396 print"3V power output, and it even shows time.":goto34
397 print"The Game & Watch-game is 'Donkey Kong and the Vampire Penguins'. ";
398 print"There's a small hole in the side, with the text '3V DC'. ";
399 if ke then401
400 print"The game is slow and boring.":goto34
401 print"The game is fast as light, and offers a thrilling experience.":goto34
402 if p(6) thenprint"You push it, but nothing happens.":goto34
403 print"You push the loose plate, and it pops out, revealing a red ";
404 print"package, that falls to the ground. The plate closes";
405 p(6)=4:print" immediately.":goto34
406 print"As you open the cupboard, a green package falls out and ";
407 print"hits the floor.":goto34
408 i=int(rnd(ti)*5):if p<5 or (p>24 and p<>27)thenreturn
409 print:on i+1 goto410,412,414,415,416
410 print"You think you see something blue on the floor beside you, ";
411 print"but when you turn to  look, there's nothing there.":return
412 print"You hear the sound of a mud ball falling to the floor behind you, ";
413 print"but as you turn around, you see nothing of interest.":return
414 print"Something blue just scurried by behind agrating in the air shaft.":return
415 print"You hear a hatch open and close somewhere in the ship.":return
416 print"Suddenly, there's a thud, as if something just fell to ";
417 print"the floor in another part of the craft.":return
418 print"Sorry, you're in the wrong game for that kind of language!":goto34
419 print"The lever has two positions, marked 'INT' and 'EXT'.";
420 print" It is currently set to '";:ifkg=0then print"EXT'.":goto34
421 print"INT'.":goto34
422 print"You move the lever to '";:kg=(1 and kg=0):if kg thenprint"INT'.":goto34
423 print"EXT'.":goto34
424 print"You turn on the robot's transportation mechanism.";
425 if kg then435
426 print" At first, the robot emitts a cloud of sparks. Then it's ";
427 print"small wheels enter hyperspace  with a loud shriek and a ";
428 print"heavy smoke of burning rubber. After a second or so, the wheels";
429 print"get a grip, and the robot flashes up thecorridor leaving ";
430 print"a trail of smoke":print"behind, due to heavy overload. The journey ";
431 print"comes to an end as the robot reaches the fore end of the ship ";
432 print"at about 90 m.p.h. You stand still and watch the robot shaped ";
433 print"hole in the wall of the ship, as you hear a slowly ";
434 print"decaying whirring sound from the runway outside...":goto182
435 print" With a faint buzz, the robot rolls away to the hatch, ";
436 print"goes down, and disappears.":k4=1:goto34
437 print"The snow is a bit too cold. It destroys your hands.":goto178
438 print"As you put your hands in the hole, they are instantly chopped off."
439 goto178
440 print"As you close the oven, a low sound is heard, and some water ";
441 print"forms a stream out of the oven and down to the floor.":goto34
442 print"An indigo package falls out!":goto34
443 print"It is a small circular plate with five  different buttons; One high, ";
444 print"one low, one twisted, one straight, and one circular.":goto34
445 if km=0 then468
446 print"A loud 'Click' is heard from the crane.":ki=(1andki=0)
447 if ki or k1 or kl=0 then34
448 print"The large box falls to the floor with an enormous bang.";
449 if k2 thenprint:goto182
450 print"Sadly enough, you were under it...":goto178
451 if k1=0 then468
452 k1=0:print"With a whirring sound the crane rises to the ceiling.";
453 if kl=0 thenprint:goto34
454 print" The box hangs under it.":if ki then34
455 print"Suddenly, it drops to the floor, and ":if k2 thenprint"through it.":goto182
456 print"that's where you are.":goto178
457 if k1 then468
458 k1=1:print"The crane slowly descends to the floor.":goto471
459 if k1 then468
460 k2=(1 and k2=0):print"The crane moves to its ";:if k2 thenprint"eastern";:goto462
461 print"western";
462 print" position.";:goto34
463 km=(1 and km=0):print"The crane's claws ";:if km thenprint"close.":goto465
464 print"open.":ifklandk1=0then448
465 if km=0 or k1=0 or k2 then469
466 print"The box is now held in a firm grip.":kl=1:goto34
467 if ki=0 then463
468 print"A buzz is heard from the crane, but nothing happens.":goto34
469 if kl=1 thenprint"It releases the box.":kl=0
470 goto34
471 if k2=0 or kl=0 then34
472 print"The box lands, and then the crane goes absolutely silent.":kj=1:goto34
473 if ki then469
474 print"The box stands right on the hatch.":goto34
475 print"The first page says:'Johnny Tough meets the Killer Joysticks'.":goto34
476 kn=kn+1:if kn>1 thenreturn
477 print"^You just remember that slimetoads have a huge appetite, and that every ";
478 print"member of the crew of your ship, 'Sunburst', have been ";
479 print"given an emergency package of food and other supplies. ";
480 print"You don't know how many packages there are, but you do know";
481 print"that one single package would be enough for a slimetoad ";
482 print"to grow to terrifying dimensions. However, if they don't get ";
483 print"any paste, they will die before you reach earth.":return
484 if p<>6 thenprint"Where is it?":goto34
485 print"You press the small, insignificant button, and the craft ";
486 print"is launched...":ifkg=0then493
487 if k0+k5<>0 then497
488 if kb then499
489 remfori=6to12:if p(i)=6 or p(i)=-1 thennext:goto506
4890 for i=6 to 12:if p(i)<>6 and p(i)<>-1 then490
4891 next:goto506
490 print"When you have almost reached your home  planet, you hear a ";
491 print"gasp behind you. As you turn around,a huge blue toad attacks you..."
492 goto178
493 print"After just 200 meters, the ship stops, and falls to the ground.";
494 print"Remember to engage the internal power supply next time,";
495 print" so that you wont have any ";
496 print"connections to the harbour when you leave.":goto182
497 print"When you leave the atmosphere, the air leaves the ship, and you ";
498 print"die. How about trying to keep the air inside the craft next time?":goto178
499 print"After a while, the fuel tank explodes, and sends your remains ";
500 print "to Earth, Venus, Andromeda, and a lot of other places.":goto178
501 print"The crane stops all activity for a moment. Then it begins ";
502 print"to rotate. First slowly, but instantly increasing the speed. ";
503 print"After 10 seconds or so, it gets  loose, and flies like a ";
504 print"helicopter through the room. Finally, it hits you, and parts ";
505 print"your body from your legs.":goto178
506 print"You successfully return to earth, where no one have noticed your ";
507 print"loan of the ship...":gosub610
508 print"^^       Congratulations!"
509 print"^      You have completed the game!"
510 gosub610:print"":goto181:rem fori=1to255:poke53280,i:next:gosub610:print"":goto181
511 rem load
512 remopen 1,d,0,v$:get#1,a$,a$:if st<>0 thenprint"I/O error.":close1:goto34
513 rem   ifd>1thenopen2,8,15:input#2,a$:close2
514 rem ifd>1andright$(a$,2)<>"00"thenprint"I/O error.":close1:goto34
515 remfori=1 to af:input#1,p(i):next
516 reminput#1,k0,k1,k2,k3,k4,k5,k6,k7,k8,k9,ka,kb,kc,kd,ke,kf,kg,kh,ki,kj,kk,kl,km
517 reminput#1,kn,ko,kp,p:close1:goto34
518 rem save
519 remif d>1 thenopen1,d,15,"s0:"+v$:close1
520 remopen 1,d,1,v$+",p,w":print#1,chr$(peek(56549))chr$(peek(56548));:c$=chr$(13)
521 remfori=1toaf:print#1,p(i):next
522 remprint#1,k0;c$;k1;c$;k2;c$;k3;c$;k4;c$;k5;c$;k6;c$;k7;c$;k8;c$;k9;c$;
523 remprint#1,ka;c$;kb;c$;kc;c$;kd;c$;ke;c$;kf;c$;kg;c$;kh;c$;ki;c$;kj;c$;
524 remprint#1,kk;c$;kl;c$;km;c$;kn;c$;ko;c$;kp;c$;p
525 remclose1:goto34
526 rem dir
527 remf=0:open1,d,0,"$":n$=chr$(0):get#1,a$,a$
528 remget#1,a$,a$,a$,b$:if st>0 or f thenclose1:goto532
529 rema$=mid$(str$(asc(a$+n$)+256*asc(b$+n$)),2):printchr$(13)a$" ";:c=val(a$)
530 remget#1,a$:if a$ thenprinta$;:goto530
531 remgeta$:f=(1 and a$<>""):goto528
532 remprint"^":gosub610:print"":goto34
533 rem menu
534 remprint"^Command (load/save/dir/exit)?";:gosub44:v$=left$(v$,1)
535 remf=(1andv$="l")+(2andv$="s")+(3andv$="d")+(4andv$="e"):iff=0then534
536 remiff=4then34
537 rem print"Device #(0=exit/";:iff<3thenprint"1/";
538 rem print"8/9)?";:gosub44:v$=left$(v$,1):i=(1andv$="0")+(2andv$="1")+(3andv$="8")
539 rem i=i+(4andv$="9"):ifi=0then537
540 rem ifi=1then34
541 rem ifi=2andf<3thend=1:goto545
542 rem ifi=2thenprint"Can't be fixed.":goto34
543 rem d=i+5
544 rem iff<3thenprint"Enter name (length < 14 chrs):";:gosub44:v$="0:sb/"+v1$
545 rem on f goto511,518,526
546 rem save
547 w=(1 and (s$="n" or s$="nor"))+(2 and(s$="s" or s$="sou"))
548 w=w+(3 and (s$="e" or s$="eas"))+(4 and(s$="w" or s$="wes"))
549 w=w+(5 and(s$="u" or s$="up"))+(6 and(s$="d" or s$="dow"))
550 w=w+(7 and(s$="o" or s$="out"))+(8 and s$="in"):return
551 rem * init *
552 dimr$(30),u$(30),v(30),f$(50),p(50),d(50)
553 ri$="nsewudoi":ar=1:af=1:p=1:kc=1:k1=1:k2=1
554 readr$(ar),u$(ar):ifr$(ar)<>"*"then ar=ar+1:goto554
555 readf$(af),p(af),d(af):if f$(af)<>"*" then af=af+1:goto555
556 af=af-1:ar=ar-1:return
557 data"Entrance to space harbor","e02n04i04"
558 data"Park","w01s03"
559 data"Fountain","n02"
560 data"Outside ship","s01i05u05"
561 data"Main corridor","n06s09e07w08u11o04d04"
562 data"Bridge","s05o05"
563 data"Black cargo bay","d27w05o05i27"
564 data"Grey cargo bay","e05o05"
565 data"Narrow passage","n05s10"
566 data"Small closet","n09o09"
567 data"Central chamber","n12s20e24w21d05"
568 data"Walkway","n13s11o26u26"
569 data"Corridor split","s12e15w14"
570 data"Blue section","n17s16e13"
571 data"Red section","n18w13s19"
572 data"Fridge room","n14o14"
573 data"Kitchen","s14o14w01"
574 data"Store room","s15o15"
575 data"Electric room","o15n15"
576 data"Green section","n11s23w22"
577 data"Crew's quarters","e11o11"
578 data"Crew's sanfac","e20o20"
579 data"Commander's quarters","o20n20"
580 data"Communication room","w11o11"
581 data"Fuel tank","o28u28"
582 data"Top of spacecraft","i12d12s28"
583 data"Small compartment","u07o07"
584 data"Aft end","d25i25n26"
585 data"*","*"
586 rem things
587 data"a small glass staff",18,0
588 data"a flashlight",8,0
589 data"a Game & Watch-game",0,0
590 data"a Giga Superlazer wristwatch",-1,0
591 data"a fucking plate",4,1
592 data"a red package",0,0
593 data"an orange package",25,0
594 data"a yellow package",27,0
595 data"a green package",0,0
596 data"a blue package",10,0
597 data"an indigo package",0,0
598 data"an violett package",0,0
599 data"a Hi-fi Tuner",6,0
600 data"a Hi-tech amplifier",24,0
601 data"a Left-angled loudspeaker",21,0
602 data"a Right-angled loudspeaker",8,0
603 data"a bit of Carbon Dioxide Snow",16,0
604 data"a pair of mitts",7,0
605 data"a pair of gloves",21,0
606 data"a Remote Control Unit",21,0
607 data"a thin hard-cover novel",6,0
608 data"a large wooden box",7,0
609 data"*",0,0
610 rem print"(home)^^^^^^^^^^^^^^^^^^^^^^^^(left)(left)(left)(left)(left)(left)(left)(left)(left)(return)";
611 rem poke198,0:wait198,1:geta$:if a$=chr$(13) thenreturn
612 return: rem goto611
613 rem rumsbeskrivningar
614 ifp=25andp(1)<>-1then616
615 print"^"r$(p)".^":ifv(p)orbr=1thenreturn
616 v(p)=1:on p goto619,622,626,629,633,638,646,653,655
617 on p-9 goto661,663,666,672,674,677,684,686,692,694
618 on p-19 goto697,702,704,706,711,713,717,723,730
619 print"You stand right outside the entrance to Geeron Space harbor. ";
620 print"To the east there is a green park, and through the guarded gate ";
621 print"to the north you can see your ship.":return
622 print"This is the Geeron space park, with the biggest collection of ";
623 print"space orchids in this galaxy. To the south a fountain can be ";
624 print"seen, and to the west the entrance to the space harbor ";
625 print"is barely visible.":return
626 print"This is an idyllic piece of nature, witha big fountain rising ";
627 print"in the middle of a beautiful pond. Benches are strategically ";
628 print"placed all around the fountain. A narrow path stretches north.";:return
629 print"You stand right outside your spacecraft, its only entrance ";
630 print"is a large hatch far above your head. You can also go south. ";
631 print"The hatch is ";:if k0 thenprint"open.":return
632 print"closed.":return
633 print"This is the main corridor of Sunburst. Walkways lead off in ";
634 print"all directions. A ladder leads up, and a large hatch in the ";
635 print"floor forms the only exit of the craft. ";
636 print"The hatch is ";:if k0 thenprint"open.":goto746
637 print"closed.":return
638 print"You stand in the middle of the bridge. You are completely ";
639 print"surrounded by ";
640 print"advanced navigational and entertainment equipment.";
641 print"The huge control panel is covered by hundreds of flickering ";
642 print"lamps,pulsating LED's, and tiny levers and buttons. ";
643 print"You have thought of trying to  understand at least some of the ";
644 print"controls, but you never seem to find the time. ";
645 print"There seems to be an opening in the panels to the south.":goto742
646 print"You are in a largish cargo bay. All the walls are painted ";
647 print"black, and a complex  system of mono-rails is mounted in the ";
648 print"ceiling. An overhead crane hangs from one of them.";
649 print" A small hatch is mounted in the floor. ";
650 print"You stand in the western part of  the room, the only ";
651 print"section accessible to humans.";
652 goto733
653 print"You are standing in a pretty large cargobay. It is now totally ";
654 print"relieved from cargo. The only visible exit is to the  east.":return
655 print"This is an extremely unsignificant piece of corridor. Some would ";
656 print"might call it narrow, at least for humans. A small closet ";
657 print"can be entered to the south, and another doorway leads north. ";
658 if k4 thenprint:return
659 print"A pathetic looking robot blocks your way south. ";
660 print"It just stands there and flickers with its lamps irregulary.":return
661 print"You are in a rather small closet, with no special features. ";
662 print"The only exit is out to the corridor, to the north.":return
663 print"You're standing in the most central chamber of the ship.";
664 print" Passages lead off in all directions you can think of. ";
665 print"A manhole leads down.":return
666 print"This is a short, tube shaped walkway, connecting the supply ";
667 print"sections with the living quarters. A hatch is placed in the ";
668 print"highest part of the tube, only ";
669 print"accessible by a built-in ladder embedded in the tube wall.";
670 print" This hatch is, at this very moment, ";:if k5 thenprint"open.":return
671 print"closed.":return
672 print"You're standing where the tube from the south splits into two ";
673 print"separate corridors, leading east and west.":return
674 print"This is a heptagonal shaped corridor, sloping downward ";
675 print"to the east. The blue walls seem to be pushing you to the ";
676 print"north. There is also a potential exit to the south.":return
677 print"You have entered a devilish red part of the craft.";
678 print" Everything here is red, even the panelling on the walls. ";
679 print"Doorways lead both north and west, but the threatening ";
680 print"colour makes you wish you had never went here in the first place."
681 if k6=0 thenprint:return
682 print"The panel on the wall is open, and"
683 print"reveals a passage to the south.":return
684 print"You are in warm fridge (warm to be a fridge, that is). ";
685 print"There is only one exit, and that is north.":return
686 print"You are in a fully automatized kitchen with the usual ";
687 print"computer controlled kitchen tools and machines. ";
688 print"You also notice the hyper-modern microwave oven. A hole in the ";
689 print"western wall is, except for the"
690 print"doorway to the south, the only exit.";:if k7=0 thenprint:return
691 print"The oven is open.":return
692 print"This is a useful store room, but right now empty. ";
693 print"The exit is to the south.":return
694 print"This room is filled of electronical equipment of all kinds. ";
695 print"There is a dangerous looking console set in the ";
696 print"southern wall. You can only go north from here.":return
697 print"You are in the green section of the craft. To the north ";
698 print"a doorway leads into the central chamber, and a passage goes west. ";
699 print"To the south a door frame is set deeply into the wall and, beside";
700 print" it, a numeric keypad.";:ifk8=0thenprint:return
701 print"The door is wide open.":return
702 print"You are standing in the crews' sleeping quarters. A number of ";
703 print"beds line the walls. You can only go east from here.":return
704 print"You have entered the crew's sanitary facilities. ";
705 print"There is only one way out of here, and that is to the east.":return
706 print"You have by some unknown reason bolted into the commander's ";
707 print"private room. The only furniture is a bed, a bookshelf anda ";
708 print"cupboard. There is a door to the north, which is open.";
709 if k9=0 thenprint:return
710 print" The cupboard door is open.":return
711 print"This is the Sunburst's communication room. The controls are far too ";
712 print"complicated for you to understand. The only exit is to the  west.":return
713 if p(2)=-1 and ka=1 then740
714 if p(1)<>-1 thenprint"It's too dark to see.":v(p)=0:return
715 print"You are wallowing in hydrogen peroxide up to your waist. ";
716 print"The only way out of here is up through the hatch.":return
717 print"The top of your spacecraft forms an excellent viewpoint ";
718 print"for surveying your surroundings. Pity that all you can see is a dirty space port.You can go south cross the ";
719 print"surface to the fuel tanks.";
720 print" The hatch that leads back into the space craft is ";
721 if k5 thenprint"open.";:return
722 print:print"closed.":return
723 print"This is the smallest compartment of the ship. ";
724 print"You can get up through the hatch.":if kj=1 thenreturn
725 if k2 then728
726 print"The box hanging in the crane falls down and crashes against the ";
727 print"hatch. Since no one knows you're here, you starve to death...":goto178
728 print" The crane begins to move, and suddenly it drops the box on the ";
729 goto727
730 print"You're standing at the aft end of the spacecraft's surface. ";
731 print"The hatch down to the fuel tank is currently ";:if kb thenprint"open.":return
732 print"closed.":return
733 print" The crane is now in its ";:if k1 thenprint"low";:goto735
734 print"high";
735 print" position, in the ";:if k2 thenprint"eastern";:goto737
736 print"western";
737 print" part of the room. ";:ifkl=1thenprint"The crane holds the box. "
738 print"The hatch is ";:if k3 thenprint"open.":return
739 print"closed.":return
740 print"A spark from the flashlight lights the fuel and sends you and";
741 print" your spacecraft straight into eternity...":goto178
742 ko=ko+1:if ko<>1 thenreturn
743 print"^You suddenly realise that this must be a very safe place for";
744 print" the packages; a tiny slimetoad would never dare to enter a ";
745 print"place with so many lamps and stuff.":return
746 kp=kp+1:if kp<>1 thenreturn
747 print"^When you first enter the ship, you notice that the light ";
748 print"is somewhat flickering sometimes, and too strong all the time. ";
749 print"'Probably it's just that bad, irregular power supply they ";
750 print"have around here', you think to yourself.":return
751 if d(f) thenprint"Not bloody likely!":return
752 kc=kc+1:print f$(f)" - Taken.":p(f)=-1:return
753 if p=6 then119
754 print"The panel seems to move slightly as you touch it...":goto34
800 print "This is Sunburst Contamination, written by Fredrik Ramsberg and Johan Berntsson in 1988. ";
801 print "The game was ported to the Z-machine by Johan in 2007. Sunburst was intentionally designed ";
802 print "to resemble an old Scott Adams text adventure with its limitated parsing capabilities. ";
803 print "Use only verb+noun inputs and these verbs: n, s, w, e, u, d, inventory (or i), examine (or x), save, load, ";
804 print "quit (or q), take (or get), drop, open, talk (or say), open/close, connect, give, push, turn, and type. ";
805 print "Verbs that take multiple objects, such as connect, will prompt for more information when needed.^"
806 print "We want to keep the game as in its original form, and hope that you will enjoy it despite "
807 print "the occasional spelling mistake and guess-the-verb problem. Feel free to contact ";
808 print "johan@@64microheaven.com if you need a hint."
820 goto34
*/ });
