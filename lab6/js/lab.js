//Author: Jonathan Castanon
//Date:2/10/2022


//Define Variables

myTransport = ["Chevy Impala", "Scooter", "Rip Stick"];

myMainRide = {
  make: "Chevy",
  model: "Impala",
  color: "White",
  year: 2003,
  age: function (){
    return 2022 - age;
  }
}

// Output

document.writeln("The kinds of transportation I use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'),"</pre>")
