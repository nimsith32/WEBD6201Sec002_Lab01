//Nimsith Fernandopulle & Siddharth Choudhury
//100806868 / 100807291
//11/02/2022

/**
 * Start function that calls All the other functions in the file
 */
 function start()
 {
     changeNavbar();
     inserthumanresource();
 }

// call start after the window loads
window.addEventListener("load", start, false);

function changeNavbar()
{
    // Find element of navigation link using Id and then set the HTML to the required text
    var product = document.getElementById("navProduct");
    product.innerHTML = 'Projects';
}

 

/**Variable to store string values of the about html page */
var about;
var nresume;
var abouth;
abouth = "About Us"
about = "Hi, My Name is Nimsith Fernandopulle , I am currently enrolled in the program Computer Programming and Analysis. The reason why I chose the IT field as a career path was because I always loved how technology was used in automotive industry. Specially how IT is used in F1 facinated me where before during after each race they process over 20GB of data every weeked which also makes it the most advanced motoracing sport in the world";
nresume = "My Resume"

/**Variable to store string values of the Index html page */
var mheader;
var mclass;
var mhome;
var mcontact;
var mproducts;
var mabout;

mheader = "Welcome";
mclass = "WEBD6201 - Lesson 1";
mhome = " Home";
mproducts = " Projects"
mservice = " Services";
mcontact = " Contact Us";
mabout = " About Us";

/**Variable to store string values of the Service html page */
var spara;
var sjava;
var sweb;
var stesting;
var sjavap;
var sjavap1;
var swebp;
var swebp1;
var stestp;

stestp = "Application Testing is defined as a software testing type, conducted through scripts with the motive of finding errors in software. It deals with tests for the entire application.It helps to enhance the quality of your applications while reducing costs, maximizing ROI, and saving development time.In Software Engineering, Application testing can be done in various categories like GUI, functionality, database (backend), load test, etc.For Application Testing, the testing lifecycles involve various phases which include requirement analysis, test planning, test analysis, test design, test execution & bug reporting, etc. Software applications and products have a number of variations in terms of features they support as well as processes they implement. So application Testing ensures that a particular program or application functions properly.A lifecycle for Application Testing involves four stages. Design test plans based on application requirementsDevelop manual test cases and automated test scriptsExecute functional tests to validate application requirementsExecute load tests and tune application performance";
swebp = "Web design encompasses many different skills and disciplines in the production and maintenance of websites. The different areas of web design include web graphic design; user interface design (UI design); authoring, including standardised code and proprietary software; user experience design (UX design); and search engine optimization. Often many individuals will work in teams covering different aspects of the design process, although some designers will cover them all.[1] The term web design is normally used to describe the design process relating to the front-end (client side) design of a website including writing markup. Web design partially overlaps web engineering in the broader scope of web development. Web designers are expected to have an awareness of usability and if their role involves creating markup then they are also expected to be up to date with web accessibility guidelines.";
swebp1 = "User understanding of the content of a website often depends on user understanding of how the website works. This is part of the user experience design. User experience is related to layout, clear instructions and labeling on a website. How well a user understands how they can interact on a site may also depend on the interactive design of the site. If a user perceives the usefulness of the website, they are more likely to continue using it. Users who are skilled and well versed with website use may find a more distinctive, yet less intuitive or less user-friendly website interface useful nonetheless. However, users with less experience are less likely to see the advantages or usefulness of a less intuitive website interface. This drives the trend for a more universal user experience and ease of access to accommodate as many users as possible regardless of user skill.[11] Much of the user experience design and interactive design are considered in the user interface design.";
sjavap1 = "This year, 2020, marks the 25th anniversary of the Java programming language. One of the most widely used programming languages, Java is used as the server-side language for most back-end development projects, including those involving big data and Android development. Java is also commonly used for desktop computing, other mobile computing, games, and numerical computing. The popularity of Java is further evidenced with 90% of all Fortune 500 companies using Java.The portability of Java contributes to its wide use and popularity, but there are other reasons why software developers continue to choose Java. Since it is an object-oriented language; it’s robust, secure and relatively simpler and easier to learn than languages such as C and C++.Object-oriented languages make complex problems easier to solve and provide greater modularity. This is a natural and pragmatic approach for software design. Java objects encapsulate data and behavior so that code can be reused, which makes testing and troubleshooting easier.With Java, objects are created using classes that define the attributes (data) and behaviors (defined by methods coded in the class). Java features such as inheritance further contribute to simplified code. With inheritance, similar but different types of objects are simplified by inheriting common attributes and behaviors from the parent class. This allows reuse of the common code while allowing for differences.New @Java Collections Cheat Sheet! Print it out and never use the wrong collection again:.";
sjava = "Java Programming";
sjavap = "One of the most widely used programming languages, Java is used as the server-side language for most back-end development projects, including those involving big data and Android development. Java is also commonly used for desktop computing, other mobile computing, games, and numerical computing.";
sweb = "Web Developing"
stesting = "Testing Applications"
spara = "After 2 years of studies in the field of Computer Science I would say my top 3 skills that I offer are."


/**Variable to store string values of the Projects html page */
var pheadr;
var projectsp;
var projectsp1;

pheadr = "HTML & DOM Manipulation";
projectsp = "For Lab 1 of WEBD6201 we have used a little bit of html, css and javascript which is what this course is mainly based on, We have used javascript to return strings, Changing a single word, adding links etc.  ";
projectsp1 = "When writing web pages and apps, one of the most common things you'll want to do is manipulate the document structure in some way. This is usually done by using the Document Object Model (DOM), a set of APIs for controlling HTML and styling information that makes heavy use of the Document object. In this article we'll look at how to use the DOM in detail, along with some other interesting APIs that can alter your environment in interesting ways.";




/**
 * Contact us Page Form Redirection and Console
 */
//This function redirects to the home page after 3 seconds once the user clicks the button
function redirect()
{
  setTimeout(function() 
  {
    window.location.href = "index.html";
  }, 3000);

}

/**
 * Start function listens for a click on the form submit button
 */
 function start()
 {
     document.getElementById("submitButton").addEventListener("click", redirect, false);
 }
 

 
 /**
  * Logs user input into form into the inspect element console
  */
 function submit()
 {
     //Created a variable for each input field and I set the value so it will print in the console
     var name = document.getElementById("inputName");
     console.log(name.value);
     var email = document.getElementById("inputEmail");
     console.log(email.value);
     var number = document.getElementById("inputNumber");
     console.log(number.value);
     var message = document.getElementById("inputMessage");
     console.log(message.value);
 }

 // Document is ready

/*
 Full Name:
 StudentID:
 Date Completed: 

*/

class User {

   
  constructor() {
  let firstnameError = true;
  let lastnameError = true;
  let emailError = true;
  let passwordError = true;
  let confirmPasswordError = true;
}


 validateFirstName() {
       let firstnameError = true;
  let firstnameValue = $('#first_name').val();
  if (firstnameValue.length == '') {
      $('#ErrorMessage').html('Please enter first name');
    this.firstnameError = false;
    return false;
  }
  else if((firstnameValue.length < 2)) {
    $('#ErrorMessage').html("**length of first name must be greater than 2");
    firstnameError = false;
    return false;
  }
  else {
     firstnameError = true;
     $('#ErrorMessage').html("");
     return true;
  }
}
 

  validateLastName() {
     let lastnameError = true;
  let lastnameValue = $('#last_name').val();
  if (lastnameValue.length == '') {
      $('#ErrorMessage').html('Please enter last name');
    lastnameError = false;
    return false;
  }
  else if((lastnameValue.length < 2)) {
    $('#ErrorMessage').html("**length of last name must be greater than 2");
    lastnameError = false;
    return false;
  }
  else {
     lastnameError = true;
     $('#ErrorMessage').html("");
     return true;
  }
}


 validateEmail() {
   let emailError = true;
  let emailValue =
    $('#email').val();
  if (emailValue.length == '') {
    $('#ErrorMessage').html("Please enter email");
    emailError = false;
    return false;
  }else if ((emailValue.length < 8)) {
    $('#ErrorMessage').html("**length of email must be  8");
    emailError = false;
    return false;
  } else {

    $('#ErrorMessage').html("");
    emailError = true;
    return true;
  }
}

 validatePassword() {
   let passwordError = true;
  let passwordValue =
    $('#password').val();
  if (passwordValue.length == '') {
    $('#ErrorMessage').html("Please enter password");
    passwordError = false;
    return false;
  }
  if ((passwordValue.length < 6)||
    (passwordValue.length > 10)) {
    $('#passcheck').show();
    $('#ErrorMessage').html("**length of your password must be between 6 and 10");
    $('#passcheck').css("color", "red");
    passwordError = false;
    return false;
  } else {

    $('#ErrorMessage').html("");
    passwordError = true;
    return true;
  }
}

 validateConfirmPassword() {
   let confirmPasswordError = true;
  let confirmPasswordValue =
    $('#conpassword').val();
  let passwordValue =
    $('#password').val();
  if (passwordValue != confirmPasswordValue) {
    $('#ErrorMessage').html(
      "**Password didn't Match");
    $('#conpasscheck').css(
      "color", "red");
    confirmPasswordError = false;
    return false;
  } else {
    $('#ErrorMessage').html("");
    confirmPasswordError = true;
    return true;
  }
}


}
$(document).ready(function () {

let user = new User();

// Validate first name
let firstnameError = true;
$('#first_name').keyup(function () {
  user.validateFirstName();
});



// Validate last name
let lastnameError = true;
$('#last_name').keyup(function () {
  user.validateLastName();
});


// Validate Email
let emailError = true;
const email =
  document.getElementById('email');
email.addEventListener('blur', ()=>{
let regex =
/^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
let s = email.value;
if(regex.test(s)){
  email.classList.remove(
      'is-invalid');
      $('#ErrorMessage').html('');
  emailError = true;
  return true;
  }
  if ((s.length < 8)) {
    $('#passcheck').show();
    $('#ErrorMessage').html("**length of email must be  8");
    $('#passcheck').css("color", "red");
    emailError = false;
    return false;
  } 
  else{
    email.classList.add(
      'is-invalid');
    emailError = false;
    $('#ErrorMessage').html('Please enter valid email');
    return false;
  }
})




// Validate Password

let passwordError = true;
$('#password').keyup(function () {
  user.validatePassword();
});

  
// Validate Confirm Password
let confirmPasswordError = true;
$('#conpassword').keyup(function () {
  user.validateConfirmPassword();
});


// Submit button
$('#register').submit(function (e) {
  e.preventDefault();

  if(user.validateFirstName()===true){
     if(user.validateLastName()===true){
             if(user.validateEmail()===true){
             if(user.validatePassword()===true){
                  if(user.validateConfirmPassword()===true){

                      console.log('First Name='+$('#first_name').val());
                      console.log('Last Name='+$('#last_name').val());
                      console.log('Email='+$('#email').val());
                      console.log('Psasword='+$('#password').val());
                      console.log('Confirm Password='+$('#conpassword').val());

                    document.getElementById("register").reset();
                 }else{
                   return false;
                 }
              }else{
                return false;
              }
        }else{
          return false;
        }
     }else{
       return false;
     }
   }else{
     return false;
   }
  
});
});

