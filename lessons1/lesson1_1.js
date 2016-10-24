"use strict";
function getRandom(min, max) {
		return Math.floor(min + (max - min) * Math.random());
	}
console.log(getRandom(0,5));