/* globals cpcBasic */

"use strict";

cpcBasic.addItem("", function () { /*
*/ });

cpcBasic.addRsx("", function () {
	return {
		getRsxCommands: function () {
            const fnGetParameterAsString = function (vm, stringOrAddress) {
                let str = ""; // for undefined
        
                if (typeof stringOrAddress === "number") { // assuming addressOf
                    str = String(vm.vmGetVariableByIndex(stringOrAddress) || "");
                } else if (typeof stringOrAddress === "string") {
                    str = stringOrAddress;
                }
                return str;
            }
            let pitch = 1;
			return {
                pitch: function (value) { // 0..20 => 0..2
                    pitch = value / 10;
                },
				say: function (text) { // define RSX name (use lower case)
                    const cpcVm = this;
                    text = fnGetParameterAsString(cpcVm, text);
                    const msg = new SpeechSynthesisUtterance(text);
                    //msg.volume = 1; // 0 to 1
                    //msg.rate = 1; // 0.1 to 10
                    msg.pitch = pitch; //0 to 2

                    msg.onend = function(e) {
                        cpcVm.keyboard.putKeyInBuffer(".", true); // TODO: can we wait for sound, key or need a new event type?
                    };
                    window.speechSynthesis.speak(msg);
                    this.vmStop("waitKey", 30);
				}
			};
		}
	};
});