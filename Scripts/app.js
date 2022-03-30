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




//task list app 
//features
//store in localstorage of browser
//delete list items


var addButton = document.getElementById('addButton');
var addInput = document.getElementById('itemInput');
var todoList = document.getElementById('todoList');
var listArray = [];
//declare addToList function

function listItemObj(content, status) {
    this.content = '';
    this.status = 'incomplete';
}
var changeToComp = function(){
    var parent = this.parentElement;
    console.log('Changed to complete');
    parent.className = 'uncompleted well';
    this.innerText = 'Incomplete';
    this.removeEventListener('click',changeToComp);
    this.addEventListener('click',changeToInComp);
    changeListArray(parent.firstChild.innerText,'complete');

}

var changeToInComp = function(){
    var parent = this.parentElement;
    console.log('Changed to incomplete');
    parent.className = 'completed well';
    this.innerText = 'Complete';
    this.removeEventListener('click',changeToInComp);
    this.addEventListener('click',changeToComp);

    changeListArray(parent.firstChild.innerText,'incomplete');

}

var removeItem = function(){
    var parent = this.parentElement.parentElement;
    parent.removeChild(this.parentElement);

    var data = this.parentElement.firstChild.innerText;
    for(var i=0; i < listArray.length; i++){

        if(listArray[i].content == data){
            listArray.splice(i,1);
            refreshLocal();
            break;
        }
    }


}

//function to change the todo list array
var changeListArray = function(data,status){

    for(var i=0; i < listArray.length; i++){

        if(listArray[i].content == data){
            listArray[i].status = status;
            refreshLocal();
            break;
        }
    }
}

//function to chage the dom of the list of todo list
var createItemDom = function(text,status){

    var listItem = document.createElement('li');

    var itemLabel = document.createElement('label');

    var itemCompBtn = document.createElement('button');

    var itemIncompBtn = document.createElement('button');

    listItem.className = (status == 'incomplete')?'completed well':'uncompleted well';

    itemLabel.innerText = text;
    itemCompBtn.className = 'btn btn-success';
    itemCompBtn.innerText = (status == 'incomplete')?'Complete':'Incomplete';
    if(status == 'incomplete'){
        itemCompBtn.addEventListener('click',changeToComp);
    }else{
        itemCompBtn.addEventListener('click',changeToInComp);
    }


    itemIncompBtn.className = 'btn btn-danger';
    itemIncompBtn.innerText = 'Delete';
    itemIncompBtn.addEventListener('click',removeItem);

    listItem.appendChild(itemLabel);
    listItem.appendChild(itemCompBtn);
    listItem.appendChild(itemIncompBtn);

    return listItem;
}

var refreshLocal = function(){
    var todos = listArray;
    localStorage.removeItem('todoList');
    localStorage.setItem('todoList', JSON.stringify(todos));
}

var addToList = function(){
    var newItem = new listItemObj();
    newItem.content = addInput.value;
    listArray.push(newItem);
    //add to the local storage
    refreshLocal();
    //change the dom
    var item = createItemDom(addInput.value,'incomplete');
    todoList.appendChild(item);
    addInput.value = '';
}

//function to clear todo list array
var clearList = function(){
    listArray = [];
    localStorage.removeItem('todoList');
    todoList.innerHTML = '';

}

window.onload = function(){
    var list = localStorage.getItem('todoList');

    if (list != null) {
        todos = JSON.parse(list);
        listArray = todos;

        for(var i=0; i<listArray.length;i++){
            var data = listArray[i].content;

            var item = createItemDom(data,listArray[i].status);
            todoList.appendChild(item);
        }

    }

};
//add an event binder to the button
addButton.addEventListener('click',addToList);
clearButton.addEventListener('click',clearList);

/* custom JavaScript goes here */

//IIFE - Immediately Invoked Function Expression
//AKA - Anonymous Self-Executing Function
//Closure - limits scope leak

"use strict";

((core) =>
{
    /**
     * Inject the Navigation bar into the Header element and highlight the active link based on the pageName parameter
     *
     * @param {string} pageName
     */
    function loadHeader(pageName)
    {
      // inject the Header
      $.get("./Views/components/header.html", function(data)
      {
        $("header").html(data); // load the navigation bar

        toggleLogin(); // add login / logout and secure links

        $(`#${pageName}`).addClass("active"); // highlight active link

        // loop through each anchor tag in the unordered list and 
        // add an event listener / handler to allow for 
        // content injection
        $("a").on("click", function()
        { 
          $(`#${router.ActiveLink}`).removeClass("active"); // removes highlighted link
          router.ActiveLink = $(this).attr("id");
          loadContent(router.ActiveLink, ActiveLinkCallBack(router.ActiveLink));
          $(`#${router.ActiveLink}`).addClass("active"); // applies highlighted link to new page
          history.pushState({},"", router.ActiveLink); // this replaces the url displayed in the browser
        });

        // make it look like each nav item is an active link
        $("a").on("mouseover", function()
        {
          $(this).css('cursor', 'pointer');
        });
      });
    }

    /**
     * Inject page content in the main element 
     *
     * @param {string} pageName
     * @param {function} callback
     * @returns {void}
     */
    function loadContent(pageName, callback)
    {
      // inject content
      $.get(`./Views/content/${pageName}.html`, function(data)
      {
        $("main").html(data);

        callback();
      });
      
    }

    function loadFooter()
    {
      // inject the Footer
      $.get("./Views/components/footer.html", function(data)
      {
        $("footer").html(data);
      });
    }

    function displayHome()
    {
        
    }

    function displayAbout()
    {

    }

    function displayProjects()
    {

    }

    function displayServices()
    {

    }

    function testFullName()
    {
      let messageArea = $("#messageArea").hide();
      let fullNamePattern = /([A-Z][a-z]{1,25})+(\s|,|-)([A-Z][a-z]{1,25})+(\s|,|-)*/;

        
        $("#fullName").on("blur", function()
        {
          if(!fullNamePattern.test($(this).val()))
          {
            $(this).trigger("focus").trigger("select");
            messageArea.show().addClass("alert alert-danger").text("Please enter a valid Full Name. This must include at least a Capitalized first name followed by a Capitlalized last name.");
          }
          else
          {
              messageArea.removeAttr("class").hide();
          }
        });
    }

    function testContactNumber()
    {
      let messageArea = $("#messageArea");
      let contactNumberPattern = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
        
        $("#contactNumber").on("blur", function()
        {
          if(!contactNumberPattern.test($(this).val()))
          {
            $(this).trigger("focus").trigger("select");
            messageArea.show().addClass("alert alert-danger").text("Please enter a valid Contact Number. Country code and area code are both optional");
          }
          else
          {
              messageArea.removeAttr("class").hide();
          }
        });
    }

    function testEmailAddress()
    {
      let messageArea = $("#messageArea");
      let emailAddressPattern = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
        
        $("#emailAddress").on("blur", function()
        {
          if(!emailAddressPattern.test($(this).val()))
          {
            $(this).trigger("focus").trigger("select");
            messageArea.show().addClass("alert alert-danger").text("Please enter a valid Email Address.");
          }
          else
          {
              messageArea.removeAttr("class").hide();
          }
        });
    }

    function formValidation()
    {
      testFullName();
      testContactNumber();
      testEmailAddress();
    }

    function displayContact()
    {
      // form validation
      formValidation();

        $("#sendButton").on("click", (event)=> 
        {
          if($("#subscribeCheckbox")[0].checked)
          {
            let contact = new core.Contact(fullName.value, contactNumber.value, emailAddress.value);

            if(contact.serialize())
            {
              let key = contact.FullName.substring(0, 1) + Date.now();

              localStorage.setItem(key, contact.serialize());
            }
          }
        });
    }

    function displayContactList() 
    {
      // don't allow visitors to go here
      authGuard();

      if (localStorage.length > 0) 
      {

        let contactList = document.getElementById("contactList");

        let data = "";

        let keys = Object.keys(localStorage);
         
        let index = 1;

        for (const key of keys) 
        {
          let contactData = localStorage.getItem(key);

          let contact = new core.Contact();
          contact.deserialize(contactData);

          data += `<tr>
          <th scope="row" class="text-center">${index}</th>
          <td>${contact.FullName}</td>
          <td>${contact.ContactNumber}</td>
          <td>${contact.EmailAddress}</td>
          <td class="text-center"><button value="${key}" class="btn btn-primary btn-sm edit"><i class="fas fa-edit fa-sm"></i> Edit</button></td>
          <td class="text-center"><button value="${key}" class="btn btn-danger btn-sm delete"><i class="fas fa-trash-alt fa-sm"></i> Delete</button></td>
          </tr>`;

          index++;
        }

        contactList.innerHTML = data;

        $("button.edit").on("click", function(){
          location.href = "/edit#" + $(this).val();
         });

         $("button.delete").on("click", function(){
           if(confirm("Are you sure?"))
           {
            localStorage.removeItem($(this).val());
           }
           location.href = "/contact-list"; // refresh the page
         });

         $("#addButton").on("click", function() 
         {
          location.href = "/edit";
         });
      }
    }

    function displayEdit()
    {
      let key = location.hash.substring(1);

      let contact = new core.Contact();

      // check to ensure that the key is not empty
      if(key != "")
      {
        // get contact info from localStorage
        contact.deserialize(localStorage.getItem(key));

        // display contact information in the form
        $("#fullName").val(contact.FullName);
        $("#contactNumber").val(contact.ContactNumber);
        $("#emailAddress").val(contact.EmailAddress);
      }
      else
      {
        // modify the page so that it shows "Add Contact" in the header 
        $("main>h1").text("Add Contact");
        // modify edit button so that it shows "Add" as well as the appropriate icon
        $("#editButton").html(`<i class="fas fa-plus-circle fa-lg"></i> Add`);
      }

      // form validation
      formValidation();
      
     $("#editButton").on("click", function() 
        {
            // check to see if key is empty
          if(key == "")
          {
            // create a new key
            key = contact.FullName.substring(0, 1) + Date.now();
          }

          // copy contact info from form to contact object
          contact.FullName = $("#fullName").val();
          contact.ContactNumber = $("#contactNumber").val();
          contact.EmailAddress = $("#emailAddress").val();

          // add the contact info to localStorage
          localStorage.setItem(key, contact.serialize());

          // return to the contact list
          location.href = "/contact-list";
          
        });

      $("#cancelButton").on("click", function()
      {
        // return to the contact list
        location.href = "/contact-list";
      });
    }

    /**
     * Processes the Login and performs validation
     */
    function performLogin()
    {
      let messageArea = $("#messageArea");
      messageArea.hide();

      let username = $("#username");
      let password = $("#password");
      let success = false;
      let newUser = new core.User();

      // use ajax to access the json file
      $.get("./Data/users.json", function(data)
      {
        // check each user in the users.json file  (linear search)
        for (const user of data.users) 
        {
          if(username.val() == user.Username && password.val() == user.Password)
          {
            newUser.fromJSON(user);
            success = true;
            break;
          }
        }

        // if username and password matches - success... then perform login
        if(success)
        {
          // add user to session storage
          sessionStorage.setItem("user", newUser.serialize());

          // hide any error message
          messageArea.removeAttr("class").hide();

          // redirect user to secure area - contact-list.html
          location.href = "/contact-list";
        }
        else
        {
          // display an error message
          username.trigger("focus").trigger("select");
          messageArea.show().addClass("alert alert-danger").text("Error: Invalid login information");
        }
      });
    }

    /**
     * Displays and Processes the Login page
     */
    function displayLogin()
    {

      $("#loginButton").on("click", function() 
      {
        performLogin();
      });

      $("#password").on("keypress", function(event)
      {
        if(event.key == "Enter")
        {
          performLogin();
        }
        });

      $("#cancelButton").on("click", function()
      {
        // clear the login form
        document.forms[0].reset();
        // return to the home page
        location.href = "/home";
      });
    }

    function displayRegister()
    {

    }

    function toggleLogin()
    {
      // if user is logged in
      if(sessionStorage.getItem("user"))
      {
        // swap out the login link for logout
        $("#loginListItem").html(
        `<a id="logout" class="nav-link" aria-current="page"><i class="fas fa-sign-out-alt"></i> Logout</a>`
        );

        $("#logout").on("click", function()
        {
          // perform logout
          sessionStorage.clear();

          // redirect back to login
          location.href = "/login";
        });

        // make it look like each nav item is an active link
        $("#logout").on("mouseover", function()
        {
          $(this).css('cursor', 'pointer');
        });
       
        $(`<li class="nav-item">
        <a id="contact-list" class="nav-link" aria-current="page"><i class="fas fa-users fa-lg"></i> Contact List</a>
      </li>`).insertBefore("#loginListItem");
      }
      else
      {
        // swap out the login link for logout
        $("#loginListItem").html(
          `<a id="login" class="nav-link" aria-current="page"><i class="fas fa-sign-in-alt"></i> Login</a>`
          );
      }
    }

    function authGuard()
    {
      if(!sessionStorage.getItem("user"))
      {
      // redirect back to login page
      location.href = "/login";
      }
    }

    function display404()
    {

    }

    function ActiveLinkCallBack(activeLink)
    {
      switch (activeLink) 
      {
        case "home": return displayHome;
        case "about": return displayAbout;
        case "projects": return displayProjects;
        case "services": return displayServices;
        case "contact": return displayContact;
        case "contact-list": return displayContactList;
        case "edit": return displayEdit;
        case "login": return displayLogin;
        case "register": return displayRegister;
        case "404": return display404;
        default:
          console.error("ERROR: callback does not exist: " + activeLink);
          break;
      }
    }

    /**
     * This function adds a new Task to the TaskList
     */
    function AddNewTask() 
    {
      let messageArea = $("#messageArea");
      messageArea.hide();
      let taskInput = $("#taskText");

      if (taskInput.val() != "" && taskInput.val().charAt(0) != " ") 
      {
        let newElement = `
              <li class="list-group-item" id="task">
              <span id="taskText">${taskInput.val()}</span>
              <span class="float-end">
                  <button class="btn btn-outline-primary btn-sm editButton"><i class="fas fa-edit"></i>
                  <button class="btn btn-outline-danger btn-sm deleteButton"><i class="fas fa-trash-alt"></i></button>
              </span>
              <input type="text" class="form-control edit-task editTextInput">
              </li>
              `;
        $("#taskList").append(newElement);
        messageArea.removeAttr("class").hide();
        taskInput.val("");
      } 
      else 
      {
        taskInput.trigger("focus").trigger("select");
        messageArea.show().addClass("alert alert-danger").text("Please enter a valid Task.");
      }
    }

    /**
     * This function is the Callback function for the TaskList
     *
     */
    function DisplayTaskList()
    {
        let messageArea = $("#messageArea");
        messageArea.hide();
        let taskInput = $("#taskTextInput");

        // add a new Task to the Task List
        $("#newTaskButton").on("click", function()
        {         
            AddNewTask();
        });

        taskInput.on("keypress", function(event)
        {
          if(event.key == "Enter")
          {
            AddNewTask();
          }
         });

        // Edit an Item in the Task List
        $("ul").on("click", ".editButton", function(){
           let editText = $(this).parent().parent().children(".editTextInput");
           let text = $(this).parent().parent().text();
           editText.val(text).show().trigger("select");
           editText.on("keypress", function(event)
           {
            if(event.key == "Enter")
            {
              if(editText.val() != "" && editText.val().charAt(0) != " ")
              {
                editText.hide();
                $(this).parent().children("#taskText").text(editText.val());
                messageArea.removeAttr("class").hide();
              }
              else
              {
                editText.trigger("focus").trigger("select");
                messageArea.show().addClass("alert alert-danger").text("Please enter a valid Task.");
              }
            }
           });
        });

        // Delete a Task from the Task List
        $("ul").on("click", ".deleteButton", function(){
            if(confirm("Are you sure?"))
            {
                $(this).closest("li").remove();
            }    
        });
    }

    function Start()
    {
        console.log("App Started...");

        loadHeader(router.ActiveLink);
      
        loadContent(router.ActiveLink, ActiveLinkCallBack(router.ActiveLink));

        loadFooter();
    }

    window.addEventListener("load", Start);

    core.Start = Start;

})(core || (core={}));