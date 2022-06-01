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
    localStorage.setItem(hour, tasks);
})

//load tasks from local storage
$(document).ready(function() {
    var nine = localStorage.getItem("nine");
    var ten = localStorage.getItem("ten");
    var eleven = localStorage.getItem("eleven");
    var twelve = localStorage.getItem("twelve");
    var one = localStorage.getItem("one");
    var two = localStorage.getItem("two");
    var three = localStorage.getItem("three");
    var four = localStorage.getItem("four");
    var five = localStorage.getItem("five");
    $('#nine .description').val(nine);
    $('#ten .description').val(ten);
    $('#eleven .description').val(eleven);
    $('#twelve .description').val(twelve);
    $('#one .description').val(one);
    $('#two .description').val(two);
    $('#three .description').val(three);
    $('#four .description').val(four);
    $('#five .description').val(five);
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

