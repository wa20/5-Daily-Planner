
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



  //Time
  var timeDisplayEl = document.getElementById('time-display');

  // handle displaying the time
  function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  }