const email = "syakirah@abc.com";
const password = "Syakirah123";

function validation(e){
	var input_text = document.getElementById("email");
	var input_password = document.getElementById("password");
	var error_msg = document.querySelector(".error_msg");
	// var letter = document.getElementById("letter");
	// var capital = document.getElementById("capital");
	// var number = document.getElementById("number");
	// var length = document.getElementById("length");
	// var pswheader = document.getElementById("pswheader");

	if(input_text.value == email && input_password.value == password ){
		window.location.href = "covidcase.html";
	}
	else{
		error_msg.style.display = "inline-block";
		// pswheader.style.display = "inline-block";
		// letter.style.display = "inline-block";
		// capital.style.display = "inline-block";
		// number.style.display = "inline-block";
		// length.style.display = "inline-block";
		// input_text.style.border = "1px solid #f74040";
		// input_password.style.border = "1px solid #f74040";
	}
	
}

var myInput = document.getElementById("password");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
	document.getElementById("message").style.display = "block";
  }
  
  // When the user clicks outside of the password field, hide the message box
  myInput.onblur = function() {
	document.getElementById("message").style.display = "block";
  }

 // When the user starts to type something inside the password field
myInput.onkeyup = function() {
	// Validate lowercase letters
	var lowerCaseLetters = /[a-z]/g;
	if(myInput.value.match(lowerCaseLetters)) {  
	  letter.classList.remove("invalid");
	  letter.classList.add("valid");
	} else {
	  letter.classList.remove("valid");
	  letter.classList.add("invalid");
	}
	
	// Validate capital letters
	var upperCaseLetters = /[A-Z]/g;
	if(myInput.value.match(upperCaseLetters)) {  
	  capital.classList.remove("invalid");
	  capital.classList.add("valid");
	} else {
	  capital.classList.remove("valid");
	  capital.classList.add("invalid");
	}
  
	// Validate numbers
	var numbers = /[0-9]/g;
	if(myInput.value.match(numbers)) {  
	  number.classList.remove("invalid");
	  number.classList.add("valid");
	} else {
	  number.classList.remove("valid");
	  number.classList.add("invalid");
	}
	
	// Validate length
	if(myInput.value.length >= 8) {
	  length.classList.remove("invalid");
	  length.classList.add("valid");
	} else {
	  length.classList.remove("valid");
	  length.classList.add("invalid");
	}
  }