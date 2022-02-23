//Author: Jonathan Castanon
//Date:2/10/2022


//Define Variables

//sortUserName -a function user input and sorts the letters
// of their name

  function sortUserName(){
    var userName = window.prompt("Hi. Please tell me your name so I can fix it.");
    console.log("userName =", userName);
    //split string to array
    var nameArray = userName.split ('');
    console.log("nameArray =", nameArray);
    //sort the array
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);
    //join array back to a string
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);
    return nameSorted;
  }

//Output
document.writeln("I fixed you name you fool: ",
    sortUserName(), "</br>");
