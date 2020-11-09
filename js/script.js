function validate(){
  const email = document.getElementById("email").value; // This variable will get he id from the element email value
  let error = "";// A blank varaible that can be changed throughout the script depending on the if statment 
  const emailPattern =/\w+@\w+\.\w+/;// This is a regular expression that is a vaild email address
  password1=document.querySelector('#pass');
  password2=document.querySelector('#pass2');
  // Password one and 2 from the selector in the html
  checkbox = document.querySelector('#terms');// variable for the check box

  
    if (email === "") {
      error = "You entered a blank email address. \n";
      alert(error);
      return false;
      // This statement is for if a user enters a blank email address. Will alert the user that the email is blank
  } else if (email != email.match(emailPattern)){
    error = "You have entered an invalid email address!";
    alert(error);
    return false;
    // if the email does not match the expression emailPattern then an alert will be displayed 
  }
  if(password1.value === '' || password2.value === ''){
    error =('You entered a blank password');
    alert(error);
    return false;
    // If the user enters a blank password for both they will be alerted 
  }else if(password1.value !== password2.value){
    error = 'Passwords do not match';
    alert(error);
    return false;
    // If the passwords do not match then it will alert the user
  }

  if(checkbox.checked == false){
    error=('Please check the Terms and Conditions')
    alert(error);
    return false;
    // If the check box is false and not check an alert will be displayed 
  }
  if(email.match(emailPattern) && password1.value === password2.value){
  console.log('All info is vaild');
    return true;
  }
}