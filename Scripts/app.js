/* Custom JS goes here */
// This is a closure; IIFE = Immediately Invoked Function Expression
//Anonymous self executing function
let app;
(function (app) {
    "use strict"
    //function scope

    function Start() {
        //local variable
        // var title = document.title;
        let title = document.title; // we need to use "use strict" above
        console.log("App Started!");
        console.log("%c App Started!", "font-weight:bold; font-size: 20px;");
        console.log("%c --------------------------------","font-weight:bold;");
        console.log("Title: " + title);


        try {
            switch (title) {
                case "COMP125 - Home":
                      
                    content.HomeContent();
                    break;

                case "COMP125 - About":
                    content.AboutContent();
                    break;

                case "COMP125 - Contact":
                      content.ContactContent();
                    break;

                default:
                    throw ("Title Not Defined");
                    break;
            }
        }
        catch (err) {
            // console.log("Handling my error");
            console.log(err);
            console.warn("Something went wrong when switching pages");
        }

    }

    /* Learning different way of calling functions
    function outer(){
        let myOuterVariable = 30;
        function inner(){
            function deepInner(){
                let deepInnerVariable = true;
                function reallyDeepInside(){
                    function OKThisIsReallyDeep(){
                       // let myInnerVariable = 10;
                        let myOuterVariable = "Hello"; // save variable but different value
                    }
                }
            }
        }
    }
    */
    //Start(); // or below
    // window.onload = Start; anonymous function
    window.addEventListener("load", Start); //asyncronous. fire their own time. I m returning my title before my listener trigger.

    // these are all app properties
    app.Title = document.title;

   // app.BrandImg = document.querySelector(".navbar-brand").innerHTML;
   // app.BrandImg = document.querySelector(".navbar-brand").firstChild;
   // app.BrandImg = document.getElementsByTagName("img")[0];
    

})(app || (app = {})); //namespace or module now app itself 