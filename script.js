import { test } from "./functions.js";

window.onload = function () {
	let nav = 0;
	let clicked = null;
	let events = localStorage.getItem("events")
		? JSON.parse(localStorage.getItem("events"))
		: [];
};
