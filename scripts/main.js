let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/photo1') {
        myImage.setAttribute('src', 'images/photo2');
    } else {
        myImage.setAttribute('src', 'images/photo1')
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name');
    if (!myName || myName === '') setUserName();
    else {
        localStorage.setItem('name', myName);
        myHeading.textContent = '기린, ' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '기린, ' + storedName;
}

myButton.onclick = function () {
    setUserName();
}