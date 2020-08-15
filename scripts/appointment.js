let toggleTimeStatus = false

let display1 = document.body.querySelector("main .stages .toggle #monday1")
let display1b = document.body.querySelector("main .stages .toggle #monday2")
let display1c = document.body.querySelector("main .stages .toggle #monday3")
let display2 = document.body.querySelector("main .stages .toggle #wednesday1")
let display2b = document.body.querySelector("main .stages .toggle #wednesday2")
let display2c = document.body.querySelector("main .stages .toggle #wednesday3")
let display3 = document.body.querySelector("main .stages .toggle #friday1")
let display3b = document.body.querySelector("main .stages .toggle #friday2")
let display3c = document.body.querySelector("main .stages .toggle #friday3")


// Monday

let toggleTime1 = function () {

    let getContinue = document.body.querySelector("main .stages .toggle #monday1 .continue")

    if(toggleTimeStatus === false) {

        getContinue.style.display = "block";

        toggleTimeStatus = true
    } 
    else if(toggleTimeStatus === true) {
        
        getContinue.style.display = "none";

        toggleTimeStatus = false
    }
}

// Monday2

let toggleTime1b = function () {

    let getContinue = document.body.querySelector("main .stages .toggle #monday2 .continue")

    if(toggleTimeStatus === false) {

        getContinue.style.display = "block";

        toggleTimeStatus = true
    } 
    else if(toggleTimeStatus === true) {
        
        getContinue.style.display = "none";

        toggleTimeStatus = false
    }
}

// Monday3

let toggleTime1c = function () {

    let getContinue = document.body.querySelector("main .stages .toggle #monday3 .continue")

    if(toggleTimeStatus === false) {

        getContinue.style.display = "block";

        toggleTimeStatus = true
    } 
    else if(toggleTimeStatus === true) {
        
        getContinue.style.display = "none";

        toggleTimeStatus = false
    }
}



// Wednesday

let toggleTime2 = function () {

    let getContinue = document.body.querySelector("main .stages .toggle #wednesday1 .continue")

    if(toggleTimeStatus === false) {

        getContinue.style.display = "block";

        toggleTimeStatus = true
    } 
    else if(toggleTimeStatus === true) {
        
        getContinue.style.display = "none";

        toggleTimeStatus = false
    }
}

// Wednesday2

let toggleTime2b = function () {

    let getContinue = document.body.querySelector("main .stages .toggle #wednesday2 .continue")

    if(toggleTimeStatus === false) {

        getContinue.style.display = "block";

        toggleTimeStatus = true
    } 
    else if(toggleTimeStatus === true) {
        
        getContinue.style.display = "none";

        toggleTimeStatus = false
    }
}

// Wednesday3

let toggleTime2c = function () {

    let getContinue = document.body.querySelector("main .stages .toggle #wednesday3 .continue")

    if(toggleTimeStatus === false) {

        getContinue.style.display = "block";

        toggleTimeStatus = true
    } 
    else if(toggleTimeStatus === true) {
        
        getContinue.style.display = "none";

        toggleTimeStatus = false
    }
}



// Friday

let toggleTime3 = function () {

    let getContinue = document.body.querySelector("main .stages .toggle #friday1 .continue")

    if(toggleTimeStatus === false) {

        getContinue.style.display = "block";

        toggleTimeStatus = true
    } 
    else if(toggleTimeStatus === true) {
        
        getContinue.style.display = "none";

        toggleTimeStatus = false
    }
}

// Friday2

let toggleTime3b = function () {

    let getContinue = document.body.querySelector("main .stages .toggle #friday2 .continue")

    if(toggleTimeStatus === false) {

        getContinue.style.display = "block";

        toggleTimeStatus = true
    } 
    else if(toggleTimeStatus === true) {
        
        getContinue.style.display = "none";

        toggleTimeStatus = false
    }
}

// Friday3

let toggleTime3c = function () {

    let getContinue = document.body.querySelector("main .stages .toggle #friday3 .continue")

    if(toggleTimeStatus === false) {

        getContinue.style.display = "block";

        toggleTimeStatus = true
    } 
    else if(toggleTimeStatus === true) {
        
        getContinue.style.display = "none";

        toggleTimeStatus = false
    }
}




// Monday
display1.onclick = toggleTime1;
display1b.onclick = toggleTime1b;
display1c.onclick = toggleTime1c;

// Wednesday
display2.onclick = toggleTime2;
display2b.onclick = toggleTime2b;
display2c.onclick = toggleTime2c;


// Friday
display3.onclick = toggleTime3;
display3b.onclick = toggleTime3b;
display3c.onclick = toggleTime3c;