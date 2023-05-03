import "./style.css";
import * as testMod from "./logic.js";

console.log(testMod.sum(5, 5));
const element = document.createElement("div");
element.classList.add("hello");
element.textContent = "hello people!";
const body = document.querySelector("body");
body.appendChild(element);
