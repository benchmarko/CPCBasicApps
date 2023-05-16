/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
500 REM BM Bench - bmbench.bas (BASIC) mod1
510 REM https://github.com/benchmarko/BMbench
600 'PRINT "Press and release Space to start measurement"
610 'IF INKEY(47)<>0 THEN 610
620 'IF INKEY(47)<>-1 THEN 620
700 MODE 2
799 CALL &BD19
800 REM BM Bench - bmbench.bas (BASIC)
801 REM (c) Marco Vieth, 2002-2023
802 REM http://www.benchmarko.de
803 REM
804 REM 06.05.2002  0.01
805 REM 18.05.2002  0.02
806 REM 24.01.2003  0.05  output format changed
807 REM 01.04.2023  0.08  adapted for new version
808 REM
809 REM Usage (bwbasic):
810 REM bwbasic bmbench_bw.bas
811 REM
812 REM Documentation for bwbasic (Bywater BASIC Interpreter):
813 REM https://github.com/nerun/bwbasic/blob/main/DOCS/BYWATER.txt
814 REM
815 REM Notes
816 REM - commands are not case sensitive, variables are
817 REM - bwbasic does not require line numbers but we use them here
818 REM - bwbasic would also support subroutines
819 REM
820 REM Notes (bwbasic problems)
821 REM - Precision is irrelevant to bwbasic (all computations in double?)
822 REM - FOR and NEXT statements must be on single lines?
823 REM - RETURN should also on single line
824 REM - No comments starting with apostrophe available
825 REM - Function definitions: DEF NF<name> cannot be redefined (so do it before Locomotive Basic)
826 REM - No comment in line with SYSTEM
827 REM - integer division with "\" does rounding
828 REM
829 REM
830 CLEAR
831 DEFINT a-z
832 prgLanguage$ = "Basic"
833 prgVersion$ = "0.08"
834 startTs = 0
835 maxBench = 6
836 bwbasic = 0: REM 1 for bwbasic, 0 for Locomotive Basic
837 IF TIMER > 0 THEN bwbasic = 1: GOTO 1000: REM TIMER variable set -> assume bwbasic
838 REM Settings for Locomotive Basic
839 basicver$ = "Locomotive Basic 1.1"
840 DEF FNgetTs(fac!) = TIME - startTs
841 DEF FNconvMs!(ts) = ts * 10.0 / 3.0: REM time conversion factor for ms, usually 300 Hz
842 startTs = FNgetTs
843 GOTO 6000: REM main
844 REM Settings for bwbasic
1000 basicver$ = "bwbasic ?"
1001 DEF FNgetTs = TIMER - startTs
1002 DEF FNconvMs!(ts) = ts * 1000.0
1003 startTs = FNgetTs
1004 GOTO 6000: REM main
1005 REM
1006 REM
1007 REM bench00(n): x
1570 x = 0
1571 ndiv = INT(n / 65536)
1572 nmod = (n - ndiv * 65536)
1573 FOR i = ndiv TO 1 STEP -1
1574 FOR j = 32767 TO 1 STEP -1
1575 x = x + j
1576 NEXT j
1577 FOR j = -32768 TO -1
1578 x = x + j
1579 NEXT j
1580 NEXT i
1581 FOR j = nmod TO 1 STEP -1
1582 x = x + j
1583 NEXT j
1584 x = x MOD 65536
1585 RETURN
1586 REM
1587 REM
1588 REM bench01(n): x
1840 x = 0
1841 sum = 0
1842 FOR i = 1 TO n
1843 sum = sum + i
1844 IF sum >= n THEN sum = sum - n: x = x + 1
1845 NEXT i
1846 RETURN
1847 REM
1848 REM
1849 REM bench02(n): x (Floating Point)
2040 x = 0
2041 sum! = 0
2042 FOR i = 1 TO n
2043 sum! = sum! + i
2044 IF sum! >= n THEN sum! = sum! - n: x = x + 1
2045 NEXT i
2046 RETURN
2047 REM
2048 REM
2049 REM bench03(n): x
2060 nHalf = INT(n / 2)
2061 REM initialize sieve
2062 FOR i = 0 TO nHalf: sieve1(i) = 0: NEXT i
2063 REM compute primes
2064 i = 0
2065 m = 3
2066 x = 1
2067 WHILE m * m <= n
2068 IF sieve1(i) = 1 THEN 2070
2069 x = x + 1
2070 j = INT((m * m - 3) / 2)
2071 WHILE j < nHalf
2072 sieve1(j) = 1
2073 j = j + m
2074 WEND
2100   i = i + 1
2101 m = m + 2
2102 WEND
2103 REM count remaining primes
2104 WHILE m <= n
2105 IF sieve1(i) = 0 THEN x = x + 1
2106 i = i + 1
2107 m = m + 2
2108 WEND
2109 RETURN
2110 REM
2111 REM
2112 REM bench04(n): x
2150 m = 2147483647
2151 a = 16807
2152 q = 127773
2153 r = 2836
2154 x = 1
2155 FOR i = n TO 1 STEP - 1
2156 xDivQ = INT(x / q)
2157 xModQ = x - q * xDivQ
2158 x = a * xModQ - r * xDivQ
2159 IF x <= 0 THEN x = x + m
2160 NEXT i
2161 RETURN
2162 REM
2163 REM
2164 REM bench05(n): x
2200 b05nSave = n
2201 n = INT(n / 2)
2202 k = INT(n / 2)
2203 IF (n - k) < k THEN k = n - k
2204 REM initialize (not needed)
2205 FOR j = 0 TO k: line1(j) = 0: NEXT j
2206 line1(0) = 1
2207 IF k >= 1 THEN line1(1) = 2
2208 REM compute lines of Pascal's triangle
2209 FOR i = 3 TO n
2210 min1 = INT((i - 1) / 2)
2211 IF (i AND 1) = 0 THEN line1(min1 + 1) = 2 * line1(min1)
2212 prev1 = line1(1)
2213 FOR j = 2 TO min1
2214 num1 = line1(j)
2215 line1(j) = (line1(j) + prev1) AND 65535
2216 prev1 = num1
2217 NEXT j
2218 line1(1) = i
2219 NEXT i
2220 REM compute sum of ((n/2)Ck)^2 mod 65536 for k=0..n/2
2221 x = 0
2222 FOR j = 0 TO k - 1
2223 REM x = (x + 2 * line1(j) * line1(j)) MOD 65536
2224 xHelp = line1(j)
2225 xHelp = (2.0 * (xHelp * xHelp)) MOD 65536
2226 x = (x + xHelp) AND 65535
2227 NEXT j
2228 REM x = (x + line1(k) * line1(k)) AND 65535
2229 xHelp = line1(k)
2230 xHelp = (xHelp * xHelp) MOD 65536
2231 x = (x + xHelp) AND 65535
2232 n = b05nSave
2233 RETURN
2234 REM
2235 REM
2236 REM
2237 REM bench06(n): x
2240 sum! = 0.0
2241 flip! = -1.0
2242 FOR i = 1 TO n
2243 flip! = flip! * -1.0
2244 sum! = sum! + flip! / (2 * i - 1)
2245 NEXT i
2246 x = ((sum! * 4.0) * 100000000)
2247 RETURN
2248 REM
2249 REM
2250 REM run_bench(bench, loops, n, check): x
2260 x = 0
2261 IF bench > maxBench THEN PRINT "Error: Unknown benchmark:"; bench: RETURN
2262 l = loops
2263 WHILE l > 0 AND x = 0
2264 ON bench + 1 GOSUB 1570, 1840, 2040, 2060, 2150, 2200, 2240
2265 x = x - check
2266 l = l - 1
2267 WEND
2268 x = x + check
2269 IF x <> check THEN PRINT "Error(bench"; bench ;"): x=";x : x = -1
2270 RETURN
2271 REM
2272 REM
2273 REM bench03Check(n): x
2280 x = 1
2281 FOR j = 3 TO n STEP 2
2282 isPrime = 1
2283 i = 3
2284 WHILE (i * i <= j) AND (isPrime = 1)
2285 IF j MOD i = 0 THEN isPrime = 0
2286 i = i + 2
2287 WEND
2288 if isPrime = 1 Then x = x + 1
2289 Next j
2290 RETURN
2291 REM
2292 REM
2293 REM getCheck(bench, n): check
2300 check = -1
2301 IF bench = 0 THEN check = ((n / 2) * (n + 1)) MOD 65536
2302 IF bench = 1 OR bench = 2 THEN check = INT((n + 1) / 2)
2303 IF bench = 3 THEN IF n = 500000 THEN check = 41538 ELSE GOSUB 2280: check = x
2304 IF bench = 4 THEN IF n = 1000000 THEN check = 1227283347 ELSE GOSUB 2150: check = x
2305 IF bench = 5 THEN IF n = 5000 THEN check = 17376 ELSE GOSUB 2200: check = x
2306 IF bench = 6 THEN IF n = 1000000 THEN check = 314159165 ELSE GOSUB 2240: check = x
2307 IF check = -1 THEN PRINT "Error: Unknown benchmark:"; bench
2308 RETURN
2309 REM
2310 REM
2311 REM getPrecMs: t0, t1
2320 gtsMeasCnt = 0
2321 t1 = FNgetTs
2322 t0 = t1
2323 WHILE t1 = t0
2324 t1 = FNgetTs
2325 gtsMeasCnt = gtsMeasCnt + 1
2326 WEND
2327 RETURN
2328 REM
2329 REM
2330 REM correctTime(t0, t1, gtsMeasCnt, gtsPrecCnt): t1Ms!
2380 t1Ms! = FNconvMs!(t1)
2381 IF gtsMeasCnt < gtsPrecCnt THEN t0MsTmp! = FNconvMs!(t0) + gtsPrecMs! * ((gtsPrecCnt - gtsMeasCnt) * 1.0 / gtsPrecCnt) : IF t0MsTmp! < t1Ms! THEN t1Ms! = t0MsTmp!
2382 RETURN
2383 REM
2384 REM
2385 REM determineTsPrecision(): {global gtsPrecCnt, gtsPrecMs!}
2400 GOSUB 2320: REM getPrecMs
2401 t0tmp = t1
2402 GOSUB 2320: REM getPrecMs
2403 t1tmp = t1
2404 gtsPrecMs! = FNconvMs!(t1tmp) - FNconvMs!(t0tmp)
2405 gtsPrecCnt = gtsMeasCnt
2406 REM do it again
2407 t0tmp = t1tmp
2408 GOSUB 2320: REM getPrecMs
2409 t1tmp = t1
2410 IF gtsMeasCnt > gtsPrecCnt THEN gtsPrecCnt = gtsMeasCnt: gtsPrecMs! = FNconvMs!(t1tmp) - FNconvMs!(t0tmp)
2411 RETURN
2412 REM
2413 REM
2414 REM printInfo(): void
3400 PRINT "BM Bench v"; prgVersion$; " ("; prgLanguage$; ") -- (tsMs:"; gtsPrecMs!; "tsCnt:"; gtsPrecCnt; ") -- "; basicver$
3401 PRINT "(c) Marco Vieth, 2002-2023"
3402 RETURN
3403 REM
3404 REM
3405 REM printResult(): void
3500 PRINT: PRINT "Throughput for all benchmarks (loops per sec):"
3501 PRINT "BMR ("; prgLanguage$; ") :";
3502 FOR bench = bench1 TO bench2
3503 PRINT USING "#######.### "; benchres!(bench);
3504 NEXT bench
3505 PRINT
3506 RETURN
3507 REM
3508 REM
3509 REM printLine1(): void
3800 PRINT "Benchmark"; bench; "("; prgLanguage$; "):";
3801 PRINT ROUND(loopsPsec!, 3); : REM loops per sec
3802 PRINT "/s (time="; ROUND(tMeas!, 3); "ms, loops="; loops;
3803 PRINT ", delta="; ROUND(tDelta!, 3); "ms)"
3804 RETURN
3805 REM
3806 REM
3807 REM measureBench(bench1, bench2, n, check, caliMs, deltaMs): throughput!
4000 maxMs = 10000
4001 loops = 1
4002 tEsti! = 0
4003 throughput! = 0
4004 PRINT "Calibrating benchmark"; bench; "with loops ="; loops; ", n ="; n; ", check ="; check
4005 WHILE throughput! = 0
4006 GOSUB 2320: REM getPrecMs
4007 t0m = t1
4008 GOSUB 2260: REM run_bench
4009 GOSUB 2320: REM getPrecMs
4010 GOSUB 2380: REM correctTime
4011 tMeas! = t1Ms! - FNconvMs!(t0m)
4012 tDelta! = tEsti! - tMeas!
4013 if tDelta! < 0 THEN tDelta! = -tDelta!
4014 REM  xx IF tEsti! > tMeas! THEN tDelta! = tEsti! - tMeas! ELSE tDelta! = tMeas! - tEsti!
4015 loopsPsec! = 0
4016 IF tMeas! > 0 THEN loopsPsec! = (loops * 1000) / tMeas!
4017 PRINT USING "######.###";loopsPsec!;
4018 PRINT "/s (time="; USING "#####.###"; tMeas!;
4019 PRINT " ms, loops="; USING "#######"; loops;
4020 PRINT ", delta="; USING "#####.###"; tDelta!;: PRINT " ms)"
4021 IF x = -1 then throughput! = -1:goto 4100
4022 IF tMeas! > maxMs THEN PRINT "Benchmark"; bench; "("; prgLanguage$; "): Time already >"; maxMs; " ms. No measurement possible.": throughput! = -loopsPsec!: IF throughput! = 0 THEN throughput! = -1: goto 4100 ELSE 4100
4023 IF tEsti! > 0 AND tDelta! < deltaMs THEN throughput! = loopsPsec!: GOSUB 3800: GOTO 4100
4024 IF tMeas! = 0 THEN scaleFact = 50 ELSE if tMeas! < caliMs THEN scaleFact = int((caliMs + 100) / tMeas!) + 1 ELSE scaleFact = 2
4025 loops = loops * scaleFact
4026 tEsti! = tMeas! * scaleFact
4100 WEND
4101 RETURN
4102 REM
4103 REM
4104 REM startBench(bench1, bench2, n): void
5480 GOSUB 2400: REM determineTsPrecision
5481 GOSUB 3400: REM printInfo
5482 DIM benchres!(maxBench): REM benchmark timing results
5483 nSave = n
5484 FOR bench = bench1 TO bench2
5485 n = nSave
5486 IF bench = 3 THEN n = INT(n / 2): DIM sieve1(n / 2 + 1) ELSE IF bench = 5 THEN n = INT(n / 200): DIM line1(n / 4)
5487 GOSUB 2300: REM getCheck
5488 throughput! = -1
5489 IF check > 0 THEN GOSUB 4000: REM measureBench
5490 benchres!(bench) = throughput!
5491 NEXT bench
5492 GOSUB 3500: REM printResult
5493 RETURN
5494 REM
5495 REM
5496 REM main()
6000 bench1 = 0: REM first benchmark to test
6001 bench2 = 5: REM last benchmark to test
6002 n = 1000000: REM maximum number
6003 IF bwbasic = 0 THEN n = 10000: REM reduce n for Locomotive BASIC
6004 caliMs = 1001
6005 deltaMs = 100
6006 IF COMMAND$(1) <> "" THEN bench1 = VAL(COMMAND$(1))
6007 IF COMMAND$(2) <> "" THEN bench2 = VAL(COMMAND$(2))
6008 IF COMMAND$(3) <> "" THEN n = VAL(COMMAND$(3))
6009 IF COMMAND$(4) <> "" THEN caliMs = VAL(COMMAND$(4))
6010 IF COMMAND$(5) <> "" THEN deltaMs = VAL(COMMAND$(5))
6011 GOSUB 5480
6012 tMeas! = FNconvMs!(FNgetTs)
6013 PRINT "Total elapsed time:"; tMeas!; "ms"
6014 REM VARS
6015 REM SYSTEM
6016 REM system or quit to exit bwbasic
6017 END
6018 REM end
*/ });
