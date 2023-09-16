/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
CPCBasic;B;16384;5396;0;base64,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
*/ });