var taskArray = ["", "", "", "", "", "", "", "", ""];

// display current date and time at tope of page
var currentDate = moment().format("dddd, MMMM Do YYYY, h:mm a");
$("#currentDay").append(currentDate); 

// make task description editable on click
$(".description").click(function() {
    $(this).attr("contenteditable","true");
})

// save task description to local storage on click
$(".saveBtn").click(function() {
    var tasks = $(this).siblings(".description");
    // console.log(tasks.data().timeSlot);
    taskArray[tasks.data().timeSlot - 9] = tasks.text();
    localStorage.setItem("tasks", JSON.stringify(taskArray));
})

// load tasks from local storage
$(document).ready(function() {
    taskArray = JSON.parse(localStorage.getItem("tasks"));
    console.log(taskArray);
    for (let i = 0; i < taskArray.length; i++) {
        console.log(taskArray[i]);
        $(".description").text(taskArray[i]); //why doesnt this work????
    };
})
    //copy start loop for or for each loop 


// change color relate to current time 
function getHour() {
    return parseInt(moment().format("k"));
}

function start() {
    var taskDescription = $(".description").toArray();
    taskDescription.forEach(setColor);
}
    
function setColor(el, index) {
    var hour = index + 9;
    if (getHour() < hour) {
        el.classList.add("future");
    };
    if (getHour() > hour) {
        el.classList.add("past");
    };
    if (getHour() === hour) {
        el.classList.add("present");
    };
}

start();

