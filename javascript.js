var userName = prompt("User Name:");
alert("Hello " + userName);

// Challenge 1: Your Age in Days
function ageInDays () {
    var birthYear = prompt("Which year were you born in..Friend?");
    var ageInDayss = (2020 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageInDayss + ' days old');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);/*
    The appendChild() is a method of the Node interface.
    The appendChild() method allows you to add a node to the end of the list of child nodes of a specified parent node.*/
    document.getElementById('flex-box-result').appendChild(h1);
    /*console.log(ageInDayss)*/
}

function reset(){
    document.getElementById('ageInDays').remove();//attribute 'ageInDays' is invoked in Javascript to display its text
}

// Challenge 2: Cat Generator
function generateCat(){
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "https://upload.wikimedia.org/wikipedia/commons/1/1a/PocketCube_%28small%29.gif";
    div.appendChild(image);    
}