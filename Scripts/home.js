
let content;
(function(content){

    //let AboutButton;
    //Two ways to do functions (Named way + )
    // function HomeContent(){ } // HomeContent function. HomeContent -> Identifier
    // let HomeContent = function(){ }  // Anonymas function refer to name HomeContent
    //Two types of EVENT (event handler + event listener)
    //About Button Click event handler
    function AboutButtonClick() {
        console.log("About Button clicked");
    }
    //another way of function calling (we will not do it though it faster)
    /*
    let AboutButtonClick = function(){
        console.log("About Button Clicker");
    }
    */
   
    function AboutButtonOver(event) {
        //AboutButton.style.opacity = 0.3 // If we declare AboutButton top.
        event.currentTarget.style.opacity = 0.3;
    }

    function AbooutButtonOut(event) {
        event.currentTarget.style.opacity = 1.0;
    } 

    /**
     *This function displays the home content
     *
     */
    function HomeContent() {

        console.log("Home Content Accessed ...");
        console.log("%c Home Content Accessed ...", "font-weight:bold; font-size: 20px;");
        let AboutButton = document.getElementById("AboutButton");

        //Some browser do not like innerText but others do. textContent is standard. User textContent
        //AboutButton.innerText = "About";
        AboutButton.textContent = "About"

        //About Button event listener (Call back function)
        // addEventListener = built in js function 2 part = event type (click) + event handler(AboutButtonClick) enent handler called call back function
        AboutButton.addEventListener("click", AboutButtonClick); //
        AboutButton.addEventListener("mouseover", AboutButtonOver);
        AboutButton.addEventListener("mouseout", AbooutButtonOut);

    }

    // content.HomeContent;
    //returning a ref to function homeContent & it passed back out from this content object backout and into the buffer that is my index that HRML 
    //content.home = HomeContent;
    //attach HomeContent function to the "content" namespace
    content.HomeContent = HomeContent;

})(content || (content = {})); // it returns content or content = {....}