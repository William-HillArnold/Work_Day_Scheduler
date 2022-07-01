$(document).ready(function () {
  // add time
  $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

  // Saves input entered into text area for each hour

  $(".saveBtn").on("click", function () {
    var click = $(this).parent().attr("id");
    var eventInput = $(this).siblings(".description").val();

    localStorage.setItem(click, ".description", eventInput);

    console.log(click, eventInput);
  });

  // shades each time-block
  $(".description").each(function () {
    // gets value of data-time attr
    var time = $(this).data("time");
    var currentHour = moment().hour();

    //  evaluating if time is past, present, or future
    // then shades time according to past, present, or future
    if (time < currentHour) {
      console.log(time, "past");
      $(this).css({ backgroundColor: "grey" });
    } else if (time === currentHour) {
      console.log(time, "present");
      $(this).css({ backgroundColor: "green" });
    } else if (time > currentHour) {
      console.log(time, "future");
      $(this).css({ backgroundColor: "red" });
    }

    console.log(time);
  });
});
