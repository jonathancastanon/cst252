//Author: Jonathan
//Date: 3/4
//Copyright: Public Domain

var headEl = document.getElementById("photo");


headEl.addEventListener("click", function(){
  console.log("clicked.");
  alert("I have been clicked bozo");
});


$("#javascript").append("<button id=my-button> Press Me ")

$("#my-button").click(function(){
  alert("Good Job You Did It!");
})
