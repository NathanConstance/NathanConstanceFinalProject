function validateItems() {
    var name = document.forms["ContactForm"]["name"];
    var email = document.forms["ContactForm"]["email"];
    var phone = document.forms["ContactForm"]["phone"];
    var reason = document.forms["ContactForm"]["reason"];

    var formCorrect=true;

    if (name == "") {
      var formCorrect=false;
    }


    if (email == "") {
      var formCorrect=false;
    }

    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(phone.value.match(phoneno))
     {

	  }
   else
     {
	   var formCorrect=false;
     }

    if (reason == "") {
      var formCorrect=false;
    }


    if (formCorrect == true) {
      alert("Information is valid");
    }
    if (formCorrect == false) {
      alert("Please fill in all the bolded sections with valid information");
    }
}
