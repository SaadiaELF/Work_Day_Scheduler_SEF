var dayHours = [
    {
        id: "0",
        hour: "09:00 am",
        time: "09",
        event: ""
    },
    {
        id: "1",
        hour: "10:00 am",
        time: "10",
        event: ""
    },
    {
        id: "2",
        hour: "11:00 am",
        time: "11",
        event: ""
    },
    {
        id: "3",
        hour: "12:00 pm",
        time: "12",
        event: ""
    },
    {
        id: "4",
        hour: "01:00 pm",
        time: "13",
        event: ""
    },
    {
        id: "5",
        hour: "02:00 pm",
        time: "14",
        event: ""
    },
    {
        id: "6",
        hour: "03:00 pm",
        time: "15",
        event: ""
    },
    {
        id: "7",
        hour: "04:00 pm",
        time: "16",
        event: ""
    },
    {
        id: "8",
        hour: "05:00 pm",
        time: "17",
        event: ""
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

    $(document).on("click", ".saveBtn",  function (event) {
        event.preventDefault();
        var index = $(this).siblings(".future")
        console.log(index);
        localStorage.setItem("Task "+ index[0].id, index[0].value);
    });





