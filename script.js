//Theme switcher
const bodyEl = document.querySelector("body");
const headerEl = document.getElementById("sidebar");
const themeSwitcher = document.querySelector("#theme-switcher");

let mode = "light";

themeSwitcher.addEventListener("click", function () {
  if (mode === "light") {
    mode = "dark";
    bodyEl.setAttribute("class", "dark");
    headerEl.setAttribute("class", "sidebarDark");
  } else {
    mode = "light";
    bodyEl.setAttribute("class", "light");
    headerEl.setAttribute("class", "sidebar");
  }
});

// time and date elements
var date = moment().format("Do MMMM YYYY");
$(".date").text(date);

var day = moment().format("dddd");
$(".day").text(day);

var time = moment().format("HH:MM A");
$(".time").text(time);

//Jquery - submit button
$(".saveBtn").on("click", function () {
  var activity = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");

  console.log(activity);
  console.log(time);

  localStorage.setItem(time, activity);
});

$("");
$("#8 .description").val(localStorage.getItem("8"));
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));
$("#18 .description").val(localStorage.getItem("18"));

//clear button

$(".clear").text("CLEAR ALL");

$(".clear").on("click", function () {
  var clear = window.confirm("WARNING: THIS WILL CLEAR ALL DATA?");

  if (!clear) {
    return;
  } else {
    var activities = $(this).siblings(".description").val();
    var timer = $(this).parent().attr("id");

    localStorage.clear(timer, activities);
    location.reload();
  }
});

// timeblock colour settings.

var currentHour = moment().hour();

if (currentHour > 8) {
  $(".time8").addClass("pastTime");
} else if (currentHour == 8) {
  $(".time8").addClass("presentTime");
} else if (currentHour < 8) {
  $(".time8").addClass("futureTime");
}

if (currentHour > 9) {
  $(".time9").addClass("pastTime");
} else if (currentHour == 9) {
  $(".time9").addClass("presentTime");
} else if (currentHour < 9) {
  $(".time9").addClass("futureTime");
}

if (currentHour > 10) {
  $(".time10").addClass("pastTime");
} else if (currentHour == 10) {
  $(".time10").addClass("presentTime");
} else if (currentHour < 10) {
  $(".time10").addClass("futureTime");
}

if (currentHour > 11) {
  $(".time11").addClass("pastTime");
} else if (currentHour == 11) {
  $(".time11").addClass("presentTime");
} else if (currentHour < 11) {
  $(".time11").addClass("futureTime");
}

if (currentHour > 12) {
  $(".time12").addClass("pastTime");
} else if (currentHour == 12) {
  $(".time12").addClass("presentTime");
} else if (currentHour < 12) {
  $(".time12").addClass("futureTime");
}

if (currentHour > 13) {
  $(".time13").addClass("pastTime");
} else if (currentHour == 13) {
  $(".time13").addClass("presentTime");
} else if (currentHour < 13) {
  $(".time13").addClass("futureTime");
}

if (currentHour > 14) {
  $(".time14").addClass("pastTime");
} else if (currentHour == 14) {
  $(".time14").addClass("presentTime");
} else if (currentHour < 14) {
  $(".time14").addClass("futureTime");
}

if (currentHour > 14) {
  $(".time14").addClass("pastTime");
} else if (currentHour == 14) {
  $(".time14").addClass("presentTime");
} else if (currentHour < 14) {
  $(".time14").addClass("futureTime");
}

if (currentHour > 15) {
  $(".time15").addClass("pastTime");
} else if (currentHour == 15) {
  $(".time15").addClass("presentTime");
} else if (currentHour < 15) {
  $(".time15").addClass("futureTime");
}

if (currentHour > 16) {
  $(".time16").addClass("pastTime");
} else if (currentHour == 16) {
  $(".time16").addClass("presentTime");
} else if (currentHour < 16) {
  $(".time16").addClass("futureTime");
}

if (currentHour > 17) {
  $(".time17").addClass("pastTime");
} else if (currentHour == 17) {
  $(".time17").addClass("presentTime");
} else if (currentHour < 17) {
  $(".time17").addClass("futureTime");
}

if (currentHour > 18) {
  $(".time18").addClass("pastTime");
} else if (currentHour == 18) {
  $(".time18").addClass("presentTime");
} else if (currentHour < 18) {
  $(".time18").addClass("futureTime");
}
