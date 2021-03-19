
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


  var time = moment().format('MMMM Do YYYY, h:mm:ss a');
  $(".time").text(time)



  //Time
  var timeDisplayEl = document.getElementById('time-display');

  // handle displaying the time
//   function displayTime() {
//     var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
//     timeDisplayEl.text(rightNow);
//   }


  //Jquery - submit button
  $(".saveBtn").on("click", function (){
      
    var activity = $(this).siblings(".description").val()
    var time = $(this).parent().attr("id")

    console.log(activity);
    console.log(time);

    localStorage.setItem(time, activity)

  });

  $("#9 .description").val(localStorage.getItem("9"));
  $("#10 .description").val(localStorage.getItem("10"));