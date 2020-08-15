let bookAppointmentStatus = false
let userInfoStatus = false
let confirmPaymentInfo = false


let day = new Date();
let dayValue = day.getDay();
console.log(dayValue)

let hourValue = day.getHours();
console.log(hourValue)

let TimeGone = '<b style="color: red;">TIME UNAVAILABLE</b>';
let DayGone = '<b style="color: red;">DAY UNAVAILABLE</b>';


let btn = document.getElementById('form1-button');

// This week 9am

let morningTimeMonday = 'Appointment with Joseph <b>by 9:00am on Monday</b>';
let morningTimeWednesday = 'Appointment with Joseph <b>by 9:00am on Wednesday</b>';


// Next week 9am

let morningTimeMondayNext = 'Appointment with Joseph <b>by 9:00am on Monday, Next week</b>';
let morningTimeWednesdayNext = 'Appointment with Joseph <b>by 9:00am on Wednesday, Next week</b>';



// This week Friday 11am

let friday11am = 'Appointment with Joseph <b>by 11:00am on Friday</b>';

// Next week Friday 11am

let friday11amNext = 'Appointment with Joseph <b>by 11:00am on Friday, Next week</b>';




// This week 1pm

let afternoonTimeMonday = 'Appointment with Joseph <b>by 1:00pm on Monday</b>';
let afternoonTimeWednesday = 'Appointment with Joseph <b>by 1:00pm on Wednesday</b>';
let afternoonTimeFriday = 'Appointment with Joseph <b>by 1:00pm on Friday</b>';


// Next week 1pm

let afternoonTimeMondayNext = 'Appointment with Joseph <b>by 1:00pm on Monday, Next week</b>';
let afternoonTimeWednesdayNext = 'Appointment with Joseph <b>by 1:00pm on Wednesday, Next week</b>';
let afternoonTimeFridayNext = 'Appointment with Joseph <b>by 1:00pm on Friday, Next week</b>';



// This week 4pm
let EveningTimeMonday = 'Appointment with Joseph <b>by 4:00pm on Monday</b>';
let EveningTimeWednesday = 'Appointment with Joseph <b>by 4:00pm on Wednesday</b>';
let EveningTimeFriday = 'Appointment with Joseph <b>by 4:00pm on Friday</b>';

// Next week 4pm
let EveningTimeMondayNext = 'Appointment with Joseph <b>by 4:00pm on Monday, Next week</b>';
let EveningTimeWednesdayNext = 'Appointment with Joseph <b>by 4:00pm on Wednesday, Next week</b>';
let EveningTimeFridayNext = 'Appointment with Joseph <b>by 4:00pm on Friday, Next week</b>';

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


// Default toggle

let userInfoToggle = function () {
    if (userInfoStatus === false) {
        
        getBookStatus.style.display = "none";
        getUserInfoStatus.style.display = 'flex';
        getPaymentConfirmatonStatus.style.display = 'none';

    }
}
// This week 9am

let userInfoToggleAMon = function () {
    if (userInfoStatus === false) {
        
       
        if (dayValue === 2 && hourValue < 8) {
            document.body.querySelector("main #appointment-block #book-toggle-trigger div").innerHTML = morningTimeMonday;            
            getBookStatus.style.display = "none";
            getUserInfoStatus.style.display = 'flex';
            getPaymentConfirmatonStatus.style.display = 'none';
            document.body.querySelector("main #appointment-block #book-toggle-trigger div").innerHTML = morningTimeMonday;    
        }
        else if (dayValue === 2 && hourValue > 8) {
            document.body.querySelector("main #appointment-block #book-toggle-trigger div").innerHTML = TimeGone;

        }
        else {
            document.body.querySelector("main #appointment-block #book-toggle-trigger div").innerHTML = DayGone;

        }
  
    }
}

let userInfoToggleAWed = function () {
    if (userInfoStatus === false) {
        
        if (dayValue === 2 && hourValue < 8) {

            getBookStatus.style.display = "none";
            getUserInfoStatus.style.display = 'flex';
            getPaymentConfirmatonStatus.style.display = 'none';
            document.body.querySelector("main #appointment-block #book-toggle-trigger div").innerHTML = morningTimeWednesday;
        }
        else if (dayValue === 2 && hourValue > 8) {
            document.body.querySelector("main #appointment-block #book-toggle-trigger div").innerHTML = TimeGone;
        }
        else{
            document.body.querySelector("main #appointment-block #book-toggle-trigger div").innerHTML = DayGone;
        }
    }
}

// Next week 9am

let userInfoToggleAMonNext = function () {
    if (userInfoStatus === false) {
        
        getBookStatus.style.display = "none";
        getUserInfoStatus.style.display = 'flex';
        getPaymentConfirmatonStatus.style.display = 'none';
        document.body.querySelector("main #appointment-block #book-toggle-trigger div").innerHTML = morningTimeMondayNext;

    }
}

let userInfoToggleAWedNext = function () {
    if (userInfoStatus === false) {
        
        getBookStatus.style.display = "none";
        getUserInfoStatus.style.display = 'flex';
        getPaymentConfirmatonStatus.style.display = 'none';
        document.body.querySelector("main #appointment-block #book-toggle-trigger div").innerHTML = morningTimeWednesdayNext;

    }
}






// This week Firday 11am 

let userInfoToggleBFri = function () {
    if (userInfoStatus === false) {

        if (dayValue === 6 && hourValue < 9) {
        
        getBookStatus.style.display = "none";
        getUserInfoStatus.style.display = 'flex';
        getPaymentConfirmatonStatus.style.display = 'none';
        document.body.querySelector("main #appointment-block #book-toggle-trigger div").innerHTML = friday11am;
        }
        else if (dayValue === 6 && hourValue > 9) {
            document.body.querySelector("main #appointment-block #book-toggle-trigger div").innerHTML = TimeGone;
        }
        else{
            document.body.querySelector("main #appointment-block #book-toggle-trigger div").innerHTML = DayGone;
        }
    }
}

// Next week Firday 11am 

let userInfoToggleBFriNext = function () {
    if (userInfoStatus === false) {
        
        getBookStatus.style.display = "none";
        getUserInfoStatus.style.display = 'flex';
        getPaymentConfirmatonStatus.style.display = 'none';
        document.body.querySelector("main #appointment-block #book-toggle-trigger div").innerHTML = friday11amNext;

    }
}




// This week 1pm

let userInfoToggleCMon = function () {
    if (userInfoStatus === false) {
        
        if (dayValue === 2 && hourValue < 11) {

            getBookStatus.style.display = "none";
            getUserInfoStatus.style.display = 'flex';
            getPaymentConfirmatonStatus.style.display = 'none';
            document.body.querySelector("main #appointment-block #book-toggle-trigger div").innerHTML = afternoonTimeMonday;
        }
        else if (dayValue === 2 && hourValue > 11) {
            document.body.querySelector("main #appointment-block #book-toggle-trigger div").innerHTML = TimeGone;
        }
        else{
            document.body.querySelector("main #appointment-block #book-toggle-trigger div").innerHTML = DayGone;
        }
    }
}

let userInfoToggleCWed = function () {
    if (userInfoStatus === false) {
        
        if (dayValue === 4 && hourValue < 11) {
            getBookStatus.style.display = "none";
            getUserInfoStatus.style.display = 'flex';
            getPaymentConfirmatonStatus.style.display = 'none';
            document.body.querySelector("main #appointment-block #book-toggle-trigger div").innerHTML = afternoonTimeWednesday;
        }
        else if (dayValue === 4 && hourValue > 11) {
            document.body.querySelector("main #appointment-block #book-toggle-trigger div").innerHTML = TimeGone;
        }
        else{
            document.body.querySelector("main #appointment-block #book-toggle-trigger div").innerHTML = DayGone;
        }
    }
}

let userInfoToggleCFri = function () {
    if (userInfoStatus === false) {
        if (dayValue === 6 && hourValue < 11) {

            getBookStatus.style.display = "none";
            getUserInfoStatus.style.display = 'flex';
            getPaymentConfirmatonStatus.style.display = 'none';
            document.body.querySelector("main #appointment-block #book-toggle-trigger div").innerHTML = afternoonTimeFriday;
        }
        else if (dayValue === 6 && hourValue > 11) {
            document.body.querySelector("main #appointment-block #book-toggle-trigger div").innerHTML = TimeGone;
        }
        else{
            document.body.querySelector("main #appointment-block #book-toggle-trigger div").innerHTML = DayGone;
        }
    }
}

// Next week 1pm

let userInfoToggleCMonNext = function () {
    if (userInfoStatus === false) {
        
        getBookStatus.style.display = "none";
        getUserInfoStatus.style.display = 'flex';
        getPaymentConfirmatonStatus.style.display = 'none';
        document.body.querySelector("main #appointment-block #book-toggle-trigger div").innerHTML = afternoonTimeMondayNext;

    }
}

let userInfoToggleCWedNext = function () {
    if (userInfoStatus === false) {
        
        getBookStatus.style.display = "none";
        getUserInfoStatus.style.display = 'flex';
        getPaymentConfirmatonStatus.style.display = 'none';
        document.body.querySelector("main #appointment-block #book-toggle-trigger div").innerHTML = afternoonTimeWednesdayNext;

    }
}

let userInfoToggleCFriNext = function () {
    if (userInfoStatus === false) {
        
        getBookStatus.style.display = "none";
        getUserInfoStatus.style.display = 'flex';
        getPaymentConfirmatonStatus.style.display = 'none';
        document.body.querySelector("main #appointment-block #book-toggle-trigger div").innerHTML = afternoonTimeFridayNext;

    }
}










// This week 4pm

let userInfoToggleDMon = function () {
    if (userInfoStatus === false) {
        
        if (dayValue === 2 && hourValue < 13) {

            getBookStatus.style.display = "none";
            getUserInfoStatus.style.display = 'flex';
            getPaymentConfirmatonStatus.style.display = 'none';
            document.body.querySelector("main #appointment-block #book-toggle-trigger div").innerHTML = EveningTimeMonday;
        }
        else if (dayValue === 2 && hourValue > 13) {
            document.body.querySelector("main #appointment-block #book-toggle-trigger div").innerHTML = TimeGone;
        }
        else{
            document.body.querySelector("main #appointment-block #book-toggle-trigger div").innerHTML = DayGone;
        }

    }
}

let userInfoToggleDWed = function () {
    if (userInfoStatus === false) {
        
        if (dayValue === 4 && hourValue < 13) {
            getBookStatus.style.display = "none";
            getUserInfoStatus.style.display = 'flex';
            getPaymentConfirmatonStatus.style.display = 'none';
            document.body.querySelector("main #appointment-block #book-toggle-trigger div").innerHTML = EveningTimeWednesday;
        }
        else if (dayValue === 4 && hourValue > 13) {
            document.body.querySelector("main #appointment-block #book-toggle-trigger div").innerHTML = TimeGone;
        }
        else{
            document.body.querySelector("main #appointment-block #book-toggle-trigger div").innerHTML = DayGone;
        }

    }
}

let userInfoToggleDFri = function () {
    if (userInfoStatus === false) {
        
        if (dayValue === 6 && hourValue < 13) {

            getBookStatus.style.display = "none";
            getUserInfoStatus.style.display = 'flex';
            getPaymentConfirmatonStatus.style.display = 'none';
            document.body.querySelector("main #appointment-block #book-toggle-trigger div").innerHTML = EveningTimeFriday;
        }
        else if (dayValue === 6 && hourValue > 13) {
            document.body.querySelector("main #appointment-block #book-toggle-trigger div").innerHTML = TimeGone;
        }
        else{
            document.body.querySelector("main #appointment-block #book-toggle-trigger div").innerHTML = DayGone;
        }
    }
}

// Next week 4pm

let userInfoToggleDMonNext = function () {
    if (userInfoStatus === false) {
        
        getBookStatus.style.display = "none";
        getUserInfoStatus.style.display = 'flex';
        getPaymentConfirmatonStatus.style.display = 'none';
        document.body.querySelector("main #appointment-block #book-toggle-trigger div").innerHTML = EveningTimeMondayNext;

    }
}

let userInfoToggleDWedNext = function () {
    if (userInfoStatus === false) {
        
        getBookStatus.style.display = "none";
        getUserInfoStatus.style.display = 'flex';
        getPaymentConfirmatonStatus.style.display = 'none';
        document.body.querySelector("main #appointment-block #book-toggle-trigger div").innerHTML = EveningTimeWednesdayNext;

    }
}

let userInfoToggleDFriNext = function () {
    if (userInfoStatus === false) {
        
        getBookStatus.style.display = "none";
        getUserInfoStatus.style.display = 'flex';
        getPaymentConfirmatonStatus.style.display = 'none';
        document.body.querySelector("main #appointment-block #book-toggle-trigger div").innerHTML = EveningTimeFridayNext;


    }
}









let success = function () {
    let userName = document.body.querySelector('main #user-info #form1 div #f-name').value;

    if (userName.trim() == '') {
        btn.innerHTML = 'SUBMIT'
    }
    else{
        btn.innerHTML = '<b>SUCCESS<b>'
    }

}

let confirmPaymentToggle = function () {
    if (confirmPaymentInfo === false) {
    
       
        let userName = document.body.querySelector('main #user-info #form1 div #f-name').value;
        let GreetUser = 'Hello,  <b>' + userName + ' </b>';
        let greetingBlock = document.getElementById('greet-user-block');
        let greetingBlockText = document.getElementById('User-greeting');

        if (userName.trim() == '') {
            greetingBlockText.innerHTML = '<b style="color: red; text-transform: uppercase; font-size: 22px;">Pls fill form first</b>';
        }
        else{
            greetingBlock.style.display = 'block';
            greetingBlock.style.padding = '15px';
            greetingBlockText.innerHTML = GreetUser;
            getBookStatus.style.display = "none";
            getUserInfoStatus.style.display = 'none';
            getPaymentConfirmatonStatus.style.display = 'flex';            
        }

    }
}


toggle1.onclick = bookAppointmentToggle;

document.body.querySelector("main #user-info .toggle-main").onclick = userInfoToggle;
document.body.querySelector("main #user-info form p").onclick = confirmPaymentToggle;


// Monday continue
document.body.querySelector("main  #appointment-block #book-toggle #monday1 .continue p").onclick = userInfoToggleAMon;
document.body.querySelector("main  #appointment-block #book-toggle #monday2 .continue p").onclick = userInfoToggleCMon;
document.body.querySelector("main  #appointment-block #book-toggle #monday3 .continue p").onclick = userInfoToggleDMon;

// Wednesday continue
document.body.querySelector("main  #appointment-block #book-toggle #wednesday1 .continue p").onclick = userInfoToggleAWed;
document.body.querySelector("main  #appointment-block #book-toggle #wednesday2 .continue p").onclick = userInfoToggleCWed;
document.body.querySelector("main  #appointment-block #book-toggle #wednesday3 .continue p").onclick = userInfoToggleDWed;

// Friday continue
document.body.querySelector("main  #appointment-block #book-toggle #friday1 .continue p").onclick = userInfoToggleBFri;
document.body.querySelector("main  #appointment-block #book-toggle #friday2 .continue p").onclick = userInfoToggleCFri;
document.body.querySelector("main  #appointment-block #book-toggle #friday3 .continue p").onclick = userInfoToggleDFri
// MondayB continue
document.body.querySelector("main  #appointment-block #book-toggle #table2 #monday1 .continue p").onclick = userInfoToggleAMonNext;
document.body.querySelector("main  #appointment-block #book-toggle #table2 #monday2 .continue p").onclick = userInfoToggleCMonNext;
document.body.querySelector("main  #appointment-block #book-toggle #table2 #monday3 .continue p").onclick = userInfoToggleDMonNext;

// WednesdayB continue
document.body.querySelector("main  #appointment-block #book-toggle #table2 #wednesday1 .continue p").onclick = userInfoToggleAWedNext;
document.body.querySelector("main  #appointment-block #book-toggle #table2 #wednesday2 .continue p").onclick = userInfoToggleCWedNext;
document.body.querySelector("main  #appointment-block #book-toggle #table2 #wednesday3 .continue p").onclick = userInfoToggleDWedNext;

// FridayB continue
document.body.querySelector("main  #appointment-block #book-toggle #table2 #friday1 .continue p").onclick = userInfoToggleBFriNext;
document.body.querySelector("main  #appointment-block #book-toggle #table2 #friday2 .continue p").onclick = userInfoToggleCFriNext;
document.body.querySelector("main  #appointment-block #book-toggle #table2 #friday3 .continue p").onclick = userInfoToggleDFriNext;


btn.onclick = success;