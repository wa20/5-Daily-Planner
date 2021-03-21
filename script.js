
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
  var date = moment().format('Do MMMM YYYY');
  $(".date").text(date)

  var day = moment().format('dddd');
  $(".day").text(day)

  var time = moment().format('HH:MM A');
  $(".time").text(time)





  //Time displ
//   var timeDisplayEl = document.getElementById('time-display');



  //Jquery - submit button
  $(".saveBtn").on("click", function (){
    var activity = $(this).siblings(".description").val()
    var time = $(this).parent().attr("id")

    console.log(activity);
    console.log(time);

    localStorage.setItem(time, activity)
  });

  $("")
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



$(".clear").text("CLEAR ALL")

$(".clear").on("click", function (){

    var clear = window.confirm("WARNING: THIS WILL CLEAR ALL DATA?")

    if(!clear) {
        return
    } else {

    var activities = $(this).siblings(".description").val()
    var timer = $(this).parent().attr("id")

    localStorage.clear(timer, activities);  
    location.reload();   
    
    }
});


var  currentHour = moment().hour(); 
// var  timeBlock = $parseInt($(this).attr("id"));

// var timeBlock = $(this).parent().attr("id");

var hour8 = $(this).parent().attr("id");
var hour9 = $("#9");
var hour10 = $("#10");
var hour11 = $("#11");
var hour12 = $("#12");
var hour13 = $("#13");
var hour14 = $("#14");
var hour15 = $("#15");
var hour16 = $("#16");
var hour17 = $("#17");
var hour18 = $("#18");



console.log(hour8)
console.log(hour12)

// for(i = 0; i < timeBlock.length; i++) {

// function hour8() {

//     if (currentHour > 8) {
//         $(".description").addClass("pastTime");
//     } else if (currentHour === 8) {
//         $(".description").addClass("presentTime");
//     } else if (currentHour < 8) {
//         $(".description").addClass("futureTime");
//     }
// }

// }


if (currentHour > 9) {
    $(".description").addClass("pastTime");
} else if (currentHour == 9) {
    $(".description").addClass("presentTime");
} else if (currentHour < 9) {
    $(".description").addClass("futureTime");
}








