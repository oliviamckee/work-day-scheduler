//  var taskArray = ["", "", "", "", "", "", "", "", ""];

// display current date and time at tope of page
var currentDate = moment().format("dddd, MMMM Do YYYY, h:mm a");
$("#currentDay").append(currentDate); 

// make task description editable on click
$(".description").click(function() {
    $(this).attr("contenteditable","true");
})

// save task description to local storage on click
$(".saveBtn").click(function() {
    var tasks = $(this).siblings(".description").val();
    var hour = $(this).parent().attr("id");
    // console.log(tasks.data().timeSlot);
    // taskArray[tasks.data().timeSlot - 9] = tasks.text();
    // localStorage.setItem("tasks", JSON.stringify(taskArray));
    localStorage.setItem(hour, tasks);
})

//load tasks from local storage
$(document).ready(function() {
    // taskArray = JSON.parse(localStorage.getItem("tasks"));
    // console.log(taskArray);
    // for (let i = 0; i < taskArray.length; i++) {
    //     console.log(taskArray[i]);
    //     $(".description").text(taskArray[i]); //why doesnt this work????
    // };
    
    var ten = localStorage.getItem("ten");
    var eleven = localStorage.getItem("eleven");
    var twelve = localStorage.getItem("twelve");
    var one = localStorage.getItem("one");
    var two = localStorage.getItem("two");
    var three = localStorage.getItem("three");
    var four = localStorage.getItem("four");
    var five = localStorage.getItem("five");

    var nine = localStorage.getItem("nine");
    console.log(nine);
    console.log($("#nine").siblings(".description"));
    $("#nine").siblings(".description").val(localStorage.getItem("nine"));
})


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

