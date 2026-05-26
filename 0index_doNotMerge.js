/* 0index.js - database file for BASIC examples TODO */
/* globals cpcBasic */

"use strict";

cpcBasic.addDatabase("apps", "./apps/0index.js");
cpcBasic.addDatabase("rosetta", "./rosetta/0index.js");


cpcBasic.addIndex("rosetta", function () { /*
    [
        {
            "key": "24game",
            "title": "The 24 Game"
        },
        {
            "key": "abelian",
            "title": "Abelian sandpile model"
        },
        ]
*/ });

// why not this way? Or real JSON with a key?
cpcBasic.addIndex2("rosetta", function () {
    [
        {
            "key": "24game",
            "title": "The 24 Game"
        },
        {
            "key": "abelian",
            "title": "Abelian sandpile model"
        }
    ]
});
