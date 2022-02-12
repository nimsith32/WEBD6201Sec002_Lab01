//Nimsith Fernandopulle
//100806868
//11/02/2022


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

/** Creating Human Resources */

var link = document.getElementById("humanresources");


link.setAttribute("link","humanresources.html")

//This function redirects to the home page after 3 seconds once the user clicks the button
// setTimeout(function redirect()
// {
//     window.location.href = 'index.php';

// }, 3000);

function submit() 
{
  var text = document.getElementById("fname").value();
  console.log("fname")
}