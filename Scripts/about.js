
(function(content){
/*
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
   /*
    function AboutButtonOver(event) {
        //AboutButton.style.opacity = 0.3 // If we declare AboutButton top.
        event.currentTarget.style.opacity = 0.3;
    }

    function AbooutButtonOut(event) {
        event.currentTarget.style.opacity = 1.0;
    }
*/
    function ReturnPI() {
        return Math.PI;
    }
    function AboutContent() {
        console.log("About Content Accessed ...");
        console.log("%c About Content Accessed ...", "font-weight:bold; font-size: 20px;");
        let myNumber = ReturnPI();
        console.log("My Funky Number: " + myNumber);

        let paragraph = document.getElementById("paragraph");

        //Some browser do not like innerText but others do. textContent is standard. User textContent
        //paragraph.innerText = "We will be changing the content of this paragraph one day";
        //paragraph.textContent = "We will be changing the content of this paragraph one day";

        let mySentence = "";
        paragraph.textContent = mySentence;

        /*// How to create array
        let myArray = []; // means create an empty array container / how to create empty array
        myArray[0] = "Hello World! ";
        myArray[1] = 5;
        myArray[2] = true;
        myArray.push("Here is another element: ")
        */
        /*
        let myArray = new Array(); // equevalent to let myArray = [];
        */

        let myArray = [

            /*  "My First String",
              "My Second String",
              "My Third String",
              "My Fourth String"
              */
            // OR Array of an objects
            { name: "Mashud_1", age: 25 },
            { name: "Mashud_2", age: 35 },
            { name: "Mashud_3", age: 45 },
            { name: "Mashud_4", age: 55 },
            { name: "Mashud_5", age: 65 },

        ];
        // myArray.push(5);
        // myArray[20] = "okay this is weird"; // length turned to 6 to 20 that not possible in C# or C++
        myArray.push({ name: "Mashud_6", age: 75 });
        myArray.unshift({ name: "Ahmed_1", age: 20 }); // we will get Ahmed_1 as first line

        for (const index in myArray) {
            console.log(myArray[index]);
        }

        //Print more than one paragraph
        let content = document.getElementsByClassName("content"); // array of elements not string
        //  console.log(content); //html collection coz more than one element/content available/ display
        //  console.log(content[0]); //return elements but not string ( return array of element)
        //  console.log(content[0].textContent);// to get the string / array of string 
        //   console.log(content[1].textContent);
        console.log(myArray);
        console.log("myArray length: " + myArray.length);

        /*   loop type # 1 - Classic for loop
        for(let index = 0; index < myArray.length; index++){
            console.log(myArray[index].name);
        }
        */
        /* loop type # 2 - foreach (modern)
         myArray.forEach(person => {
             console.log(person.name);
         });
         */
        /*loop type # 3 - foreach (classic) Annonymous function inside
        myArray.forEach(function(person){
         console.log(person.name);
        });
        */
        /* loop type # 4 - for in  (modern)
         for (const index in myArray) {
          console.log(myArray[index].name);
         }
         */
        /* loop type # 5 - for of  (modern)
        for (const person of myArray) {
         console.log(person.name);
        }
        */
        /* loop type # 6 - while (classic)
        let index = 0;
        while(index < myArray.length){
          console.log(myArray[index].name);
          index++;
        }
        */

        // let arrayEmpty = true;
        let arrayEmpty;
        /*  if - else toggle 
       if(myArray.length > 0 ){
          arrayEmpty = false;
       }
       else{
           arrayEmpty = true;
       }
       */
        // ternary operator  - alternate toggle condition statement 
        arrayEmpty = (myArray.length > 0) ? false : true;

        if (myArray[1].name == "Mashud_1") {
            console.log("Second Element is Mashud_1");
        }

        // console.log(myArray[0].age); better not to use alert. coz it pop up again and again. Can do for debugging and then delete. use confirm.
        // window.alert("first element name: "  + myArray[0].name);
        //Use below instead of window alert
        //let decision = confirm("Are you sure ?");
        //console.log(decision);



        //=== checks both value and type where == only checks value
        if (myArray[0].age === 20) {

            //   console.log(myArray)
            console.log("My Age is 20"); // unshift used before so index 0 will show unshift method.
        }

        //associateive arrays vreate this key /  value pair associatation but hiere is no iteration
        // which menas you cannot loop thorugh them
        let myAssociateArray = [];
        myAssociateArray["Name"] = "Mashud_11";
        myAssociateArray["Age"] = 255;
        myAssociateArray["StudentNum"] = "ABC000000";

        console.log(myAssociateArray);
        console.log(myAssociateArray.Name);
        console.log(myAssociateArray["Name"]);
        // myAssociateArray cannot useable in loop like for/for of/for in/...

        let myFarouriteThingsList = [
            "Video Games",
            "Movies",
            "Cars",
            "Space Flight"

        ];

        //"Hook into" a ul that is empty that has an id of myFarouriteThings;
        let myFavouritesList = document.getElementById("myFavouriteThings");
        //foreach loop used here.

        myFarouriteThingsList.forEach(thing => {
            let newItem = document.createElement("li");
            // console.log(newItem); //Debugging only - remove this line when working
            newItem.textContent = thing;
            myFavouritesList.appendChild(newItem);
        });


        //let newItem = document.createElement("li");
        //newItem.textContent = "hello";
        //myFavouritesList.appendChild(newItem);
        console.log(myFavouritesList);
    }
    //properties
    content.AboutContent = AboutContent;

})(content || (content = {}));
