import "./style.css";

const element = document.createElement("div");
element.classList.add("hello");
element.textContent = "hello people!";
const body = document.querySelector("body");
body.appendChild(element);
