// display current date and time at tope of page
var currentTime = moment().format("dddd, MMMM Do YYYY, h:mm a");
$("#currentDay").append(currentTime); 

// make task description editable on click
$(".description").click(function() {
    $(this).attr("contenteditable","true");
})

// save task description to local storage on click
$(".saveBtn").click(function() {
    console.log("save");
    localStorage.setItem("task", this);
})

// load tasks from local storage

// if current time after, add class future
$(this).addClass("future")
// if current time, add class present
$(this).addClass("present")
// if current time before, add class past 
$(this).addClass("past")


