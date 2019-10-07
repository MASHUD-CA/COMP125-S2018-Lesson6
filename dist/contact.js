"use strict";

//(function (content) { // OR
(function (content) {
    //=> called fat arrow function
    function OutputFormDataToConsole() {
        var FullName = document.getElementById("FullName");
        var ContactNumber = document.getElementById("ContactNumber");
        var EmailAddress = document.getElementById("EmailAddress");
        var Message = document.getElementById("Message");

        console.log("%c------------------------------------------", "color: red;");
        console.log("%c Form Data", "font-weight:bold; font-size: 16px; color: red;");
        console.log("%c------------------------------------------", "color: red;");
        // console.log("Full Name: "+FullName.value); //OR
        console.log("Full Name       : " + FullName.value); // New ecmascript // ~= tolda, `` = Backtec
        console.log("Contact Number  : " + ContactNumber.value);
        console.log("%cEmail Address : " + EmailAddress.value, "color: green;");
        console.log("%cMessage       : " + Message.value, "color: blue;");
        console.log("%c------------------------------------------", "color:red;");

        console.log("%c------------------------------------------", "color: red;");
        console.log('%c Form Properties', "font-weight:bold; font-size: 16px; color: red;");
        console.log("%c------------------------------------------", "color: red;");
        console.log("%c Form Length  : " + document.forms[0].length, "color: red;");
        console.log("%c0th Form Elements: " + document.forms[0].elements[0].value, "color: red;");

        for (var index = 0; index < document.forms[0].length; index++) {

            console.log("%c Form Elements " + index + ": " + document.forms[0].elements[index].value, "color: red;");
        }
    }

    function ContactContent() {
        // document.forms[0].noValidate = true; //OR
        document.forms[0].autocomplete = true; // better not to use it coz security purpose

        //  console.log("Contact Content Accessed ..."); 
        // configure content
        console.log("%c Contact Content Accessed ...", "font-weight:bold; font-size: 20px;");

        //changed the name of the page
        document.getElementsByClassName("card-title")[0].textContent = "Contact You!";

        //Create a new HTML element
        var cancelButton = document.createElement("button");

        //configure the HTML Element
        cancelButton.setAttribute("class", "btn btn-warning btn-lg");
        cancelButton.classList.add("brn-lg");
        cancelButton.textContent = "Cancel";
        cancelButton.addEventListener("click", function (event) {
            event.preventDefault();
            window.open("index.html", "_parent"); // URL loaded into parent frame
        });
        //add the HTML Element to the page somewhere
        //This case I attacing a button to the first form1 element.
        document.forms[0].appendChild(cancelButton);

        var SendButton = document.getElementById("SendButton");
        // SendButton.addEventListener("click", function(){  // OR
        SendButton.addEventListener("click", function (event) {
            event.preventDefault();
            OutputFormDataToConsole();
        });
    }

    content.ContactContent = ContactContent;
})(content || (content = {}));