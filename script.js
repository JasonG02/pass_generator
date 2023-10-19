const passwordBox = document.getElementById("password");
let lenght = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%&_-";
const allChars = upperCase + lowerCase + number + symbol;

function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];


    while (lenght > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];

    }
    passwordBox.value = password;
}

function fourNumPin(){
    let lenght = 4;
    let password = "";
    password += number[Math.floor(Math.random() * number.length)];

    while (lenght > password.length){
        password += number[Math.floor(Math.random() * number.length)];

    }
    passwordBox.value = password;
}

function sixNumPin(){
    let lenght = 6;
    let password = "";
    password += number[Math.floor(Math.random() * number.length)];

    while (lenght > password.length){
        password += number[Math.floor(Math.random() * number.length)];

    }
    passwordBox.value = password;
}







function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}


