let bookAppointmentStatus = false
let userInfoStatus = false
let confirmPaymentInfo = false



let toggle1 = document.body.querySelector("main #appointment-block #book-toggle-trigger");
let getBookStatus = document.body.querySelector("main #appointment-block #book-toggle");
let getUserInfoStatus = document.body.querySelector("main #user-info #user-info-toggle");
let getPaymentConfirmatonStatus = document.body.querySelector("main #confirmation #confirm-toggle");

let bookAppointmentToggle = function () {
    
    if (bookAppointmentStatus === false) {
        
        getBookStatus.style.display = "flex";
        getUserInfoStatus.style.display = 'none';
        getPaymentConfirmatonStatus.style.display = 'none';
    }
}

let userInfoToggle = function () {
    if (userInfoStatus === false) {
        
        getBookStatus.style.display = "none";
        getUserInfoStatus.style.display = 'flex';
        getPaymentConfirmatonStatus.style.display = 'none';
        document.body.querySelector("main #appointment-block #book-toggle-trigger div").innerHTML = 'Appointment with Joseph <b>by 9:00am</b>';

    }
}

let userInfoToggleB = function () {
    if (userInfoStatus === false) {
        
        getBookStatus.style.display = "none";
        getUserInfoStatus.style.display = 'flex';
        getPaymentConfirmatonStatus.style.display = 'none';
        document.body.querySelector("main #appointment-block #book-toggle-trigger div").innerHTML = 'Appointment with Joseph <b>by 11:00am</b>';

    }
}

let userInfoToggleC = function () {
    if (userInfoStatus === false) {
        
        getBookStatus.style.display = "none";
        getUserInfoStatus.style.display = 'flex';
        getPaymentConfirmatonStatus.style.display = 'none';
        document.body.querySelector("main #appointment-block #book-toggle-trigger div").innerHTML = 'Appointment with Joseph <b>by 1:00pm</b>';

    }
}

let userInfoToggleD = function () {
    if (userInfoStatus === false) {
        
        getBookStatus.style.display = "none";
        getUserInfoStatus.style.display = 'flex';
        getPaymentConfirmatonStatus.style.display = 'none';
        document.body.querySelector("main #appointment-block #book-toggle-trigger div").innerHTML = 'Appointment with Joseph <b>by 4:00pm</b>';

    }
}

let confirmPaymentToggle = function () {
    if (confirmPaymentInfo === false) {
    
        getBookStatus.style.display = "none";
        getUserInfoStatus.style.display = 'none';
        getPaymentConfirmatonStatus.style.display = 'flex';

    }
}


toggle1.onclick = bookAppointmentToggle;

document.body.querySelector("main #user-info .toggle-main").onclick = userInfoToggle;
document.body.querySelector("main #user-info form p").onclick = confirmPaymentToggle;


// Monday continue
document.body.querySelector("main  #appointment-block #book-toggle #monday1 .continue p").onclick = userInfoToggle;
document.body.querySelector("main  #appointment-block #book-toggle #monday2 .continue p").onclick = userInfoToggleC;
document.body.querySelector("main  #appointment-block #book-toggle #monday3 .continue p").onclick = userInfoToggleD;

// Wednesday continue
document.body.querySelector("main  #appointment-block #book-toggle #wednesday1 .continue p").onclick = userInfoToggle;
document.body.querySelector("main  #appointment-block #book-toggle #wednesday2 .continue p").onclick = userInfoToggleC;
document.body.querySelector("main  #appointment-block #book-toggle #wednesday3 .continue p").onclick = userInfoToggleD;

// Friday continue
document.body.querySelector("main  #appointment-block #book-toggle #friday1 .continue p").onclick = userInfoToggleB;
document.body.querySelector("main  #appointment-block #book-toggle #friday2 .continue p").onclick = userInfoToggleC;
document.body.querySelector("main  #appointment-block #book-toggle #friday3 .continue p").onclick = userInfoToggleD;

// MondayB continue
document.body.querySelector("main  #appointment-block #book-toggle #table2 #monday1 .continue p").onclick = userInfoToggle;
document.body.querySelector("main  #appointment-block #book-toggle #table2 #monday2 .continue p").onclick = userInfoToggleC;
document.body.querySelector("main  #appointment-block #book-toggle #table2 #monday3 .continue p").onclick = userInfoToggleD;

// WednesdayB continue
document.body.querySelector("main  #appointment-block #book-toggle #table2 #wednesday1 .continue p").onclick = userInfoToggle;
document.body.querySelector("main  #appointment-block #book-toggle #table2 #wednesday2 .continue p").onclick = userInfoToggleC;
document.body.querySelector("main  #appointment-block #book-toggle #table2 #wednesday3 .continue p").onclick = userInfoToggleD;

// FridayB continue
document.body.querySelector("main  #appointment-block #book-toggle #table2 #friday1 .continue p").onclick = userInfoToggleB;
document.body.querySelector("main  #appointment-block #book-toggle #table2 #friday2 .continue p").onclick = userInfoToggleC;
document.body.querySelector("main  #appointment-block #book-toggle #table2 #friday3 .continue p").onclick = userInfoToggleD;