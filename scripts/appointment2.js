let toggleTimeStatusB = false

let displayB1 = document.body.querySelector("main .stages .toggle #table2 #monday1")
let displayB1b = document.body.querySelector("main .stages .toggle #table2 #monday2")
let displayB1c = document.body.querySelector("main .stages .toggle #table2 #monday3")
let displayB2 = document.body.querySelector("main .stages .toggle #table2 #wednesday1")
let displayB2b = document.body.querySelector("main .stages .toggle #table2 #wednesday2")
let displayB2c = document.body.querySelector("main .stages .toggle #table2 #wednesday3")
let displayB3 = document.body.querySelector("main .stages .toggle #table2 #friday1")
let displayB3b = document.body.querySelector("main .stages .toggle #table2 #friday2")
let displayB3c = document.body.querySelector("main .stages .toggle #table2 #friday3")


// Monday

let toggleTimeB1 = function () {

    let getContinue = document.body.querySelector("main .stages .toggle #table2 #monday1 .continue")

    if(toggleTimeStatusB === false) {

        getContinue.style.display = "block";

        toggleTimeStatusB = true
    } 
    else if(toggleTimeStatusB === true) {
        
        getContinue.style.display = "none";

        toggleTimeStatusB = false
    }
}

// Monday2

let toggleTimeB1b = function () {

    let getContinue = document.body.querySelector("main .stages .toggle #table2 #monday2 .continue")

    if(toggleTimeStatusB === false) {

        getContinue.style.display = "block";

        toggleTimeStatusB = true
    } 
    else if(toggleTimeStatusB === true) {
        
        getContinue.style.display = "none";

        toggleTimeStatusB = false
    }
}

// Monday3

let toggleTimeB1c = function () {

    let getContinue = document.body.querySelector("main .stages .toggle #table2 #monday3 .continue")

    if(toggleTimeStatusB === false) {

        getContinue.style.display = "block";

        toggleTimeStatusB = true
    } 
    else if(toggleTimeStatusB === true) {
        
        getContinue.style.display = "none";

        toggleTimeStatusB = false
    }
}



// Wednesday

let toggleTimeB2 = function () {

    let getContinue = document.body.querySelector("main .stages .toggle #table2 #wednesday1 .continue")

    if(toggleTimeStatusB === false) {

        getContinue.style.display = "block";

        toggleTimeStatusB = true
    } 
    else if(toggleTimeStatusB === true) {
        
        getContinue.style.display = "none";

        toggleTimeStatusB = false
    }
}

// Wednesday2

let toggleTimeB2b = function () {

    let getContinue = document.body.querySelector("main .stages .toggle #table2 #wednesday2 .continue")

    if(toggleTimeStatusB === false) {

        getContinue.style.display = "block";

        toggleTimeStatusB = true
    } 
    else if(toggleTimeStatusB === true) {
        
        getContinue.style.display = "none";

        toggleTimeStatusB = false
    }
}

// Wednesday3

let toggleTimeB2c = function () {

    let getContinue = document.body.querySelector("main .stages .toggle #table2 #wednesday3 .continue")

    if(toggleTimeStatusB === false) {

        getContinue.style.display = "block";

        toggleTimeStatusB = true
    } 
    else if(toggleTimeStatusB === true) {
        
        getContinue.style.display = "none";

        toggleTimeStatusB = false
    }
}



// Friday

let toggleTimeB3 = function () {

    let getContinue = document.body.querySelector("main .stages .toggle #table2 #friday1 .continue")

    if(toggleTimeStatusB === false) {

        getContinue.style.display = "block";

        toggleTimeStatusB = true
    } 
    else if(toggleTimeStatusB === true) {
        
        getContinue.style.display = "none";

        toggleTimeStatusB = false
    }
}

// Friday2

let toggleTimeB3b = function () {

    let getContinue = document.body.querySelector("main .stages .toggle #table2 #friday2 .continue")

    if(toggleTimeStatusB === false) {

        getContinue.style.display = "block";

        toggleTimeStatusB = true
    } 
    else if(toggleTimeStatusB === true) {
        
        getContinue.style.display = "none";

        toggleTimeStatusB = false
    }
}

// Friday3

let toggleTimeB3c = function () {

    let getContinue = document.body.querySelector("main .stages .toggle #table2 #friday3 .continue")

    if(toggleTimeStatusB === false) {

        getContinue.style.display = "block";

        toggleTimeStatusB = true
    } 
    else if(toggleTimeStatusB === true) {
        
        getContinue.style.display = "none";

        toggleTimeStatusB = false
    }
}




// Monday
displayB1.onclick = toggleTimeB1;
displayB1b.onclick = toggleTimeB1b;
displayB1c.onclick = toggleTimeB1c;

// Wednesday
displayB2.onclick = toggleTimeB2;
displayB2b.onclick = toggleTimeB2b;
displayB2c.onclick = toggleTimeB2c;


// Friday
displayB3.onclick = toggleTimeB3;
displayB3b.onclick = toggleTimeB3b;
displayB3c.onclick = toggleTimeB3c;