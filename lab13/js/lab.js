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


$("#big").click(function(){
$("p").css({"font-size": "30px"});
})

$("#normal").click(function(){
$("p").css({"font-size": "15px"});
})


// Return Gryfindor, Ravenclaw, Slytheryn, and Hufflepuff
// Depending on length mod 4
function sortingHat(str){
  len = str.length;
  mod = len % 4;
  if (mod == 0){
    return "Gryffindor"
  }
  else if (mod == 1){
    return "Ravenclaw"
  }
  else if (mod == 2){
    return "Slytherin"
  }
  else if (mod == 3){
    return "Hufflepuff"
  }
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function(){
  var name = document.getElementById("input").value;
  var house = sortingHat(name);
  newText = "<p>The Sorting Hat has sorted you into " + house + "</p>";
  document.getElementById("output").innerHTML = newText;$
})
