
//Theme switcher
const bodyEl = document.querySelector("body");
const headerEl = document.getElementById("sidebar");
const saveButton = document.getElementById("save")
const themeSwitcher = document.querySelector("#theme-switcher");

let mode = "light";

  themeSwitcher.addEventListener("click", function () {
    if (mode === "light") {
      mode = "dark";
      bodyEl.setAttribute("class", "dark");
      headerEl.setAttribute("class", "sidebarDark");
      saveButton.setAttribute("class", "saveDark");
    } else {
      mode = "light";
      bodyEl.setAttribute("class", "light");
      headerEl.setAttribute("class", "sidebar");
      saveButton.setAttribute("class", "save");
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








//current time tracker
function currentTime () {
 
    var  currentHour = moment().hour(); 

    $(".time-block").each(function () {
        
        var timeBlock = parseInt($(this).attr("id"));
        console.log( blockHour, currentHour)
   
    if(currentHour === timeBlock) {
        $(this).addClass("presentTime");
        $(this).removeClass("pastTime");
        $(this).removeClass("futureTime");

    } else 
        if (currentHour > timeBlock) {
            $(this).removeClass("presentTime");
            $(this).addClass("pastTime");
            $(this).removeClass("futureTime");
        
    } else 
        if (currentHour < timeBlock) {
            $(this).removeClass("presentTime");
            $(this).removeClass("pastTime");
            $(this).addClass("futureTime");
        }

    })


currentHour();

}


// if (now > 9) {
//     $("#time-0").addClass("past");
// } else if (now >= 9 && now < 10) {
//     $("#time-0").addClass("present");
// } else if (now < 9) {
//     $("#time-0").addClass("future");
// }