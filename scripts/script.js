// JavaScript Document
var button = document.querySelector("nav button");

button.addEventListener("click", hamburgertjeMenu);

function hamburgertjeMenu(event) {
var deNav = event.target.parentNode;
deNav.classList.toggle("toonMenu");
}