(function (content) { // OR
    //((content) => { 
    let FullName = document.getElementById("FullName");
    let ContactNumber = document.getElementById("ContactNumber");
    let EmailAddress = document.getElementById("EmailAddress");
    let Message = document.getElementById("Message");

    //=> called fat arrow function
    function OutputFormDataToConsole() {
        console.log(`%c------------------------------------------`, "color: red;");
        console.log(`%c Form Data`, "font-weight:bold; font-size: 16px; color: red;");
        console.log(`%c------------------------------------------`, "color: red;");
        // console.log("Full Name: "+FullName.value); //OR
        console.log(`%c Full Name       : ${FullName.value}`); // New ecmascript // ~= tolda, `` = Backtec
        console.log(`%c Contact Number  : ${ContactNumber.value}`);
        console.log(`%c Email Address   : ${EmailAddress.value}`, "color: green;");
        console.log(`%c Message         : ${Message.value}`, "color: blue;");
        console.log(`%c------------------------------------------`, "color:red;");

        console.log(`%c------------------------------------------`, "color: red;");
        console.log('%c Form Properties', "font-weight:bold; font-size: 16px; color: red;");
        console.log(`%c------------------------------------------`, "color: red;");
        console.log(`%c Form Length  : ${document.forms[0].length}`, "color: red;");
        console.log(`%c0th Form Elements: ${document.forms[0].elements[0].value}`, "color: red;");

        for (let index = 0; index < document.forms[0].length; index++) {
            console.log(`%c Form Elements ${index}: ${document.forms[0].elements[index].value}`, "color: red;");
        } 
    }

    function clearValidationMessges() {
        FullName.setCustomValidity("");
        ContactNumber.setCustomValidity("");
        EmailAddress.setCustomValidity("");
        Message.setCustomValidity("");
    }

    function setEventHandlersForFormElements() {
        // For of loop
        for (const element of document.forms[0].elements) {
            if ((element.tagName === "INPUT") || (element.tagName === "TEXTAREA")) {
                //when user is inputting correct data
                element.addEventListener("input", function () { // annonymous inline function
                    element.setCustomValidity("");
                });
                //when user is inputting non correct data
                element.addEventListener("invalid", function () {
                    switch (element.id) {
                        case "FullName":
                            element.setCustomValidity("Enter Full Name");
                            break;
                        case "ContactNumber":
                            element.setCustomValidity("Enter Contact Number pattern (###) ###-####");
                            break;
                        case "EmailAddress":
                            element.setCustomValidity("Enter valid email address");
                            break;
                        case "Message":
                            element.setCustomValidity("Enter a Message");
                            break;
                        default:
                            element.setCustomValidity("This Field is Required");
                            break;
                    }
                });
            }
        }
    }
    function ValidateForm() {
        setEventHandlersForFormElements();
    }
    function ContactContent() {
        clearValidationMessges();

        // document.forms[0].noValidate = true; //OR
        // document.forms[0].autocomplete = true; // better not to use it coz security purpose

        // configure content
        console.log("%c Contact Content Accessed ...", "font-weight:bold; font-size: 20px;");

        //changed the name of the page
        document.getElementsByClassName("card-title")[0].textContent = "Contact You!";

        //Create a new HTML element
        let cancelButton = document.createElement("button");

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

        let SendButton = document.getElementById("SendButton");
        // SendButton.addEventListener("click", function(){  // OR
        SendButton.addEventListener("click", (event) => {
            // event.preventDefault();
            if (!document.forms[0].checkValidity()) {
                OutputFormDataToConsole();

                ValidateForm();
            }

        });
    }

    //Public functions exposed to the content namespace
    content.ContactContent = ContactContent;

})(content || (content = {}));



