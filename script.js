// creating an object to store an loop into the day planner
var dayHours = [
    {
        id: "0",
        hour: "09:00 am",
        time: "09",
        task: ""
    },
    {
        id: "1",
        hour: "10:00 am",
        time: "10",
        task: ""
    },
    {
        id: "2",
        hour: "11:00 am",
        time: "11",
        task: ""
    },
    {
        id: "3",
        hour: "12:00 pm",
        time: "12",
        task: ""
    },
    {
        id: "4",
        hour: "01:00 pm",
        time: "13",
        task: ""
    },
    {
        id: "5",
        hour: "02:00 pm",
        time: "14",
        task: ""
    },
    {
        id: "6",
        hour: "03:00 pm",
        time: "15",
        task: ""
    },
    {
        id: "7",
        hour: "04:00 pm",
        time: "16",
        task: ""
    },
    {
        id: "8",
        hour: "05:00 pm",
        time: "17",
        task: ""
    },

]

// creating a function to display the current date of the day
function CurrentDay() {
    var currentDate = moment().format('dddd, MMMM Do YYYY, h:mm: a');
    $("#currentDay").text(currentDate);
};
// calling the function
CurrentDay();

// creating a loop into the dayHours object to create the timeblocks
$.each(dayHours, function (i, Hours) {

    // creating a row inside the div container to hold the planner  
    var row = $("<div>");
    row.attr({ "class": "row" });
    $(".container").append(row);

    // creating a new div to hold the first column that displays the hours
    // appending this new div to row div
    var hoursCol = $("<div>");
    hoursCol.attr({ "class": "col-md-2 col-2 hour time-block" });
    hoursCol.text(Hours.hour);
    (row).append(hoursCol);

    // creating a textarea to hold the second column that displays the editable tasks
    // appending this textarea to the row div
    var taskCol = $("<textarea>");
    taskCol.attr({ "class": "col-md-8 col-8 description" });
    taskCol.attr("id", Hours.id);
    (row).append(taskCol);

    // creating a button to hold the last column that displays the button to save tasks
    // appending this button to the row div
    var saveBtnCol = $("<button>");
    var saveBtn = $("<i class='far fa-save fa-2x'></i>")
    saveBtnCol.attr({ "class": "col-md-1 col-2 saveBtn" });
    (saveBtnCol).append(saveBtn);
    (row).append(saveBtnCol);

    // creating a color-code for the textarea to indicate whether it is in the past, present, or future 
    if (Hours.time < moment().format("HH")) {
        taskCol.attr({
            "class": " col-md-8 col-8 description past",
        })
    } else if (Hours.time === moment().format("HH")) {
        taskCol.attr({
            "class": "col-md-8 col-8 description present"
        })
    } else if (Hours.time > moment().format("HH")) {
        taskCol.attr({
            "class": "col-md-8 col-8  description future"
        })
    };


});

// creating a function that populates the property "task" of the object "dayHours"
// by the value of the textarea
// and recalling the textarea by its id
function displayTask() {
    $.each(dayHours, function (i, futureHours) {
        $(`#${futureHours.id}`).val(futureHours.task);

    });
};

// creating a function to store the object dayHours 
// after converting it to a string in the local storage
function saveTask() {
    localStorage.setItem("MyDay", JSON.stringify(dayHours));
};

// creating a function that gets the saved task property from the local storage
// and displays it in the textarea after converting it into an object
// so the saved task persists after refreshing the page
function displaystorage() {
    // saving the saved object in the local storage into a new variable 
    var newDayHours = JSON.parse(localStorage.getItem("MyDay"));
    // if there is an object saved in the local storage , this obect replace the 'dayHours' object
    if (newDayHours) {
        dayHours = newDayHours;
    };
    // calling the functions
    displayTask();
    saveTask();
};

// calling the function
displaystorage();

// creating an event listener in the saveBtn 
// to save the task written in the text area in the local storage after a click
$(document).on("click", ".saveBtn", function (event) {
    event.preventDefault();

    // saving the new task into the property 'task' of the object 'dayHours'
    var index = $(this).siblings(".future").attr("id");
     dayHours[index].task = $(this).siblings(".future").val();

    // calling the functions
    displayTask();
    saveTask();

});


