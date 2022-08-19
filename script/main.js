let myImage = document.querySelector('img');
myImage.onclick = function (){
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/firefox-icon.png'){
    myImage.setAttribute('src', 'images/new.jpg');
  }else{
    myImage.setAttribute('src','images/firefox-icon.png')
  }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function sutUserName (){
  let myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool' + myName;

  if(!localStorage.getItem('name')){
    sutUserName();
  }else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, '+ storedName;
  }
}
myButton.onclick = function(){
  sutUserName();
}