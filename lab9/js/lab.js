//Author: Jonathan
//Date: 3/1
//Copyright: Public Domain

var targetEl = document.getElementById("javascript");

var newEl = document.createElement("button");

targetEl.appendChild(newEl);

newEl.innerhtml = "Click Me";
newEl.style.backgroundColor = "red";
newEl.style.color = "red";
newEl.style.fontSize = "100px";
