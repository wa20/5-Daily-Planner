
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
var  timeBlock = $(id)

if (currentHour > 9) {
    $(".description .hour").addClass("pastTime");
} else if (now >= 9 && now < 10) {
    $(".description .hour").addClass("presentTime");
} else if (now < 9) {
    $(".description .hour").addClass("futureTime");
}







