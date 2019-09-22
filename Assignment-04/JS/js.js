/*
Student Name: Tamana Seddiqi
Student ID : 991528861
Date: 2019/02/16
*/

function validateTheForm(){
  var valid=true;

  if(!Username())
    valid=false;

  if(!Password())
    valid=false;

  if(!ConfirmPassword())
    valid=false;

  if(!Email())
    valid=false;

  if(!Contact())
    valid=false;

  if(!Gender())
    valid=false;

  return valid;
}


function Username(){
  var username = document.getElementById("username").value;
  var username_error = document.getElementById("username_error");
  var emoji = document.querySelector("#emoji1");

  if(username == ""){
    username_error.innerHTML = " Username field can't be blank";
    username_error.style.color = "red";
    emoji.innerHTML = String.fromCodePoint(0x274C);
    return false;
  }

  if(/[^\w]/.test(username)){
    username_error.innerHTML = " Username has to be only characters";
    username_error.style.color = "red";
    emoji.innerHTML = String.fromCodePoint(0x274C);
    return false;
  }

  if(username.length < 5){
    username_error.innerHTML = " Username can't be less than 5 character";
    username_error.style.color = "red";
    emoji.innerHTML = String.fromCodePoint(0x274C);
    return false;
  }

  emoji.innerHTML = String.fromCodePoint(0x2714);
  username_error.innerHTML="";
  return true;
}


function Password(){
  var password = document.getElementById("password").value;
  var password_error = document.getElementById("password_error");
  var emoji = document.querySelector("#emoji2");

  if(password == ""){
    password_error.innerHTML = "Password field can't be blank";
    password_error.style.color = "red";
    emoji.innerHTML = String.fromCodePoint(0x274C);
    return false;
  }

  if(password.length < 5){
    password_error.innerHTML = "Password can't be less than 5 Characters";
    password_error.style.color = "red";
    emoji.innerHTML = String.fromCodePoint(0x274C);
    return false;
  }

  emoji.innerHTML = String.fromCodePoint(0x2714);
  password_error.innerHTML="";
  return true;
}


function ConfirmPassword(){
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  var confirmPassword_error = document.getElementById("confirmPassword_error");
  var emoji = document.querySelector("#emoji3");

  if(confirmPassword == ""){
    confirmPassword_error.innerHTML = "Confirm Password field can't be blank";
    confirmPassword_error.style.color = "red";
    emoji.innerHTML = String.fromCodePoint(0x274C);
    return false;
  }

  if(password !== confirmPassword){
    confirmPassword_error.innerHTML = " Password does not match";
    confirmPassword_error.style.color = "red";
    emoji.innerHTML = String.fromCodePoint(0x274C);
    return false;
  }

  emoji.innerHTML = String.fromCodePoint(0x2714);
  confirmPassword_error.innerHTML= "";
  return true;
}


function Gender(){
  var genderMale = document.getElementById("genderMale").checked;
  var genderFemale = document.getElementById("genderFemale").checked;
  var genderOther = document.getElementById("genderOther").checked;
  var gender_error = document.getElementById("gender_error");
  var emoji = document.querySelector("#emoji4");

  if((genderMale==false)&&(genderFemale==false)&&(genderOther==false)){
    gender_error.innerHTML = "Gender Can't be unchecked";
    gender_error.style.color = "red";
    emoji.innerHTML = String.fromCodePoint(0x274C);
    return false;
  }

  emoji.innerHTML = String.fromCodePoint(0x2714);
  gender_error.innerHTML= "";
  return true;
}


function Email(){
  var email = document.getElementById("email").value;
  var email_error = document.getElementById("email_error");
  var emoji = document.querySelector("#emoji5");

  if(email == ""){
    email_error.innerHTML = "Email field can't be blank";
    email_error.style.color = "red";
    emoji.innerHTML = String.fromCodePoint(0x274C);
    return false;
  }

  if(!/([\w-._]+[@][a-z]+[.][a-z]+)/.test(email)){
    email_error.innerHTML = "Email Entered is incorrect";
    email_error.style.color = "red";
    emoji.innerHTML = String.fromCodePoint(0x274C);
    return false;
  }

  emoji.innerHTML = String.fromCodePoint(0x2714);
  email_error.innerHTML= "";
  return true;
  }


function Contact(){
  var emoji = document.querySelector("#emoji6");
  var contactNumber = document.getElementById("contactNumber").value;
  var contactNumber_error = document.getElementById("contactNumber_error");

  if(contactNumber == ""){
    contactNumber_error.innerHTML = "Contact Number field can't be blank";
    contactNumber_error.style.color = "red";
    emoji.innerHTML = String.fromCodePoint(0x274C);
    return false;
  }

  if(isNaN(contactNumber)){
    contactNumber_error.innerHTML = " Contact Number should be only digitd";
    contactNumber_error.style.color = "red";
    emoji.innerHTML = String.fromCodePoint(0x274C);
    return false;
  }

  if(contactNumber.length <10){
    contactNumber_error.innerHTML = "Contact Number can't be less than 10 digits";
    contactNumber_error.style.color = "red";
    emoji.innerHTML = String.fromCodePoint(0x274C);
    return false;
  }

  if(contactNumber.length >10){
    contactNumber_error.innerHTML = "Contact Number can't be more than 10 digits";
    contactNumber_error.style.color = "red";
    emoji.innerHTML = String.fromCodePoint(0x274C);
    return false;
  }

  emoji.innerHTML = String.fromCodePoint(0x2714);
  contactNumber_error.innerHTML= "";
  return true;
}


function ProgressBar(){
  var status = document.getElementById("status");
  var progress= document.getElementById("progress");
  var password = document.getElementById("password").value;
  var count = 0;

  if(/[a-z]+/.test(password))
    count += 1;

 if(/[A-Z]+/.test(password))
    count += 1;

 if(/[0-9]+/.test(password))
    count += 1;

 if(password.length > 10)
    count += 1;

 switch (count) {
   case 0:  status.innerHTML="weak";
            status.style.color="red";
            progress.value = "20";
            break;

   case 1:  status.innerHTML="medium";
            status.style.color="gold";
            progress.value = "40";
            break;

   case 2:  status.innerHTML="good";
            status.style.color="emerald";
            progress.value = "60";
            break;

   case 3:  status.innerHTML="strong";
            status.style.color="applegreen"
            progress.value = "80";
            break;

  case 4:   status.innerHTML="very strong";
            status.style.color="forestgreen";
            progress.value = "100";
            break;
  }
}


function onReset(){
  document.querySelector("#emoji1").innerHTML = "";
  document.querySelector("#emoji2").innerHTML = "";
  document.querySelector("#emoji3").innerHTML = "";
  document.querySelector("#emoji4").innerHTML = "";
  document.querySelector("#emoji5").innerHTML = "";
  document.querySelector("#emoji6").innerHTML = "";

  document.getElementById("username_error").innerHTML = "";
  document.getElementById("password_error").innerHTML = "";
  document.getElementById("confirmPassword_error").innerHTML = "";
  document.getElementById("gender_error").innerHTML = "";
  document.getElementById("email_error").innerHTML = "";
  document.getElementById("contactNumber_error").innerHTML = "";

  document.getElementById("progress").value= "0";
  document.getElementById("status").innerHTML= "";
}
