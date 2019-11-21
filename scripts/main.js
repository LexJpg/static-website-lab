// Image switcher code

let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/Piplup.png') {
    myImage.setAttribute ('src','images/Piplup.png');
  } else {
    myImage.setAttribute ('src','images/Piplup.png');
  }
}

// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    document.getElementById("Bruh").innerHTML = 'Alexei wants to get to know you, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Alexei wants to get to know you, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
