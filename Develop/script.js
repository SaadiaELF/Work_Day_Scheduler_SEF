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

function CurrentDay() {
    var currentDate = moment().format('dddd, MMMM Do YYYY, h:mm: a');
    $("#currentDay").text(currentDate);
};

CurrentDay();

$.each(dayHours, function (i, Hours) {

    var row = $("<div>");
    row.attr({ "class": "row" });
    $(".container").append(row);

    var hoursCol = $("<div>");
    hoursCol.attr({ "class": "col-md-2 hour time-block" });
    hoursCol.text(Hours.hour);
    (row).append(hoursCol);

    var eventCol = $("<textarea>");
    eventCol.attr({ "class": "col-md-8 description" });
    (row).append(eventCol);

    var saveBtnCol = $("<button>");
    var saveBtn = $("<i class='far fa-save fa-lg'></i>")
    saveBtnCol.attr({ "class": "col-md-1 saveBtn" });
    (saveBtnCol).append(saveBtn);
    (row).append(saveBtnCol);

    eventCol.attr("id", Hours.id);
    if (Hours.time < moment().format("HH")) {
        eventCol.attr({
            "class": " col-md-8 description past",
        })
    } else if (Hours.time === moment().format("HH")) {
        eventCol.attr({
            "class": "col-md-8 description present"
        })
    } else if (Hours.time > moment().format("HH")) {
        eventCol.attr({
            "class": "col-md-8 description future"
        })
    };
});


function saveTask() {
    localStorage.setItem("MyDay ", JSON.stringify(dayHours));
};

function displayTask() {
    $.each(dayHours, function (i, futureHours) {
        $(`#${futureHours.id}`).val(futureHours.task);

    });
};

$(document).on("click", ".saveBtn", function (event) {
    event.preventDefault();

    var index = $(this).siblings(".future").attr("id");

    dayHours[index].task = $(this).siblings(".future").val();

    displayTask();
    saveTask();


});


