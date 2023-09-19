let lowercase = document.querySelector("#lowercase");
let uppercase = document.querySelector("#uppercase");
let number = document.querySelector("#number");
let symbol = document.querySelector("#symbol");
let range = document.querySelector("#range");
let passwordholder = document.querySelector("#password");
let copy = document.querySelector("#copy-btn");
let len =document.querySelector(".length");
let val = 6;
let passwordGenerator = "";
let password="";


function rangeUpdate(){
   val = range.value;
   len.innerHTML = val;
}

function generatePassword(){
    passwordGenerator="";
    password="";
    copy.innerHTML="Copy"
    if(lowercase.checked == true){
        passwordGenerator += 'abcdefghijklmnopqrstuvwxyz';
    }
    if(uppercase.checked == true){
        passwordGenerator += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if(number.checked == true){
        passwordGenerator += '0123456789';
    }
    if(symbol.checked == true){
        passwordGenerator += '!@#$%^&*';
    }
    if(passwordGenerator==""){
        passwordholder.value = "Please select something" ;
        return;
    }

    for(let i = 0 ;i<val;i++){
      password += passwordGenerator.charAt(Math.floor(Math.random() * passwordGenerator.length));    
    }

    passwordholder.value = password;
}

function copyContent() {
    // Select the text field
    passwordholder.select();
    passwordholder.setSelectionRange(0, 99999); // For mobile devices
     // Copy the text inside the text field
    navigator.clipboard.writeText(passwordholder.value);
    copy.innerHTML="Copied!";
  }
