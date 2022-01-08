//Variables for each textblock
var text1 = $('.text1');
var text2 = $('.text2');
var text3 = $('.text3');
var text4 = $('.text4');
var text5 = $('.text5');
var text6 = $('.text6');
var text7 = $('.text7');
var text8 = $('.text8');
var text9 = $('.text9');

//Displays current day at the top of calendar
var currDay = $('#currentDay');
currDay.text(moment().format('dddd, MMMM Do'));

//Saves the texts in everytime block
function eventText(event) {
    event.preventDefault();

    saveEvent('text1', text1.val());
    saveEvent('text2', text2.val());
    saveEvent('text3', text3.val());
    saveEvent('text4', text4.val());
    saveEvent('text5', text5.val());
    saveEvent('text6', text6.val());
    saveEvent('text7', text7.val());
    saveEvent('text8', text8.val());
    saveEvent('text9', text9.val());
}

//stores each text event in local storage
function saveEvent(e, s) {
    localStorage.setItem(e, s);
}

//grabs all text from local storage and displays them in each timeblock
function getEvent() {
    text1.text(localStorage.getItem('text1'));
    text2.text(localStorage.getItem('text2'));
    text3.text(localStorage.getItem('text3'));
    text4.text(localStorage.getItem('text4'));
    text5.text(localStorage.getItem('text5'));
    text6.text(localStorage.getItem('text6'));
    text7.text(localStorage.getItem('text7'));
    text8.text(localStorage.getItem('text8'));
    text9.text(localStorage.getItem('text9'));
}
//this button triggers the save for the events in each timeblock
$('.saveBtn').click(eventText);

//grabs each text from local storage on page refresh
getEvent();
