"use strict";

var objectHash = require("objhash");

module.exports = hash;
function hash(value) {
    if (value && typeof value.hash === "function") {
        return value.hash();
    } else {
        return objectHash(value);
    }
}

