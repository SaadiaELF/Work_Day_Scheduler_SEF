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
    var currentDate = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").text(currentDate);
};

CurrentDay();

$.each(dayHours, function (i, Hours) {

    var row = $("<tr>");
    row.attr({ "class": "row" });
    $(".container").append(row);

    var hoursCol = $("<td>");
    hoursCol.attr({ "class": "col-md-2 hour" });
    hoursCol.text(Hours.hour);
    (row).append(hoursCol);

    var eventCol = $("<textarea>");
    eventCol.attr({ "class": "col-md-8" });
    (row).append(eventCol);

    var saveBtnCol = $("<button>");
    var saveBtn = $("<i class='far fa-save fa-lg'></i>")
    saveBtnCol.attr({ "class": "col-md-1 saveBtn" });
    (saveBtnCol).append(saveBtn);
    (row).append(saveBtnCol);

});
