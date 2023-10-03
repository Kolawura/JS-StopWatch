// set the initial value of the timer and store it in a variable
let hrs = (min = sec = ms = "0" + 0),
  setTimer,
  startTime,
  endTime;
let checkCode = false;

// just to shorten the DOM
let stopBtn = document.querySelector(".stop-button"),
  startBtn = document.querySelector(".start-button"),
  resetBtn = document.querySelector(".reset-button");

// add event listener to the buttons
startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);

// Start function
function start() {
  // DeActivate the start button and ReActivate the
  // stop button
  startBtn.classList.add("active");
  stopBtn.classList.remove("stopActive");
  startBtn.classList.remove("strBtn");
  stopBtn.classList.add("stpBtn");

  // Test my Code
  startTime = performance.now();

  // Using setInterval increase the timer
  if (!checkCode) {
    setTimer = setInterval(() => {
      ms++;
      ms = ms < 10 ? "0" + ms : ms;
      if (ms == 100) {
        sec++;
        sec = sec < 10 ? "0" + sec : sec;
        ms = "0" + 0;
      }
      if (sec == 60) {
        min++;
        min = min < 10 ? "0" + min : min;
        sec = "0" + 0;
      }
      if (min == 60) {
        hrs++;
        hrs = hrs < 10 ? "0" + hrs : hrs;
        min = "0" + 0;
      }
      // display time as it is increasing
      checkCode = true;
      showTime();
    }, 10);
  }
}
// Stop function
function stop() {
  // DeActivate the stop button and ReActivate the
  // start button
  startBtn.classList.remove("active");
  stopBtn.classList.add("stopActive");
  startBtn.classList.add("strBtn");
  stopBtn.classList.remove("stpBtn");

  // Test my Code
  endTime = performance.now();
  const elapsedTime = endTime - startTime;
  console.log("Elapesed time: " + elapsedTime + "milliseconds");

  if (checkCode) {
    // stop(pause) the timer by clearing the insterval
    clearInterval(setTimer);
    checkCode = false;
    showTime();
  }
}

// Reset function
function reset() {
  // ReActivate the Button
  startBtn.classList.remove("active");
  stopBtn.classList.remove("stopActive");
  startBtn.classList.add("strBtn");
  stopBtn.classList.add("stpBtn");

  // stop the Count-down
  clearInterval(setTimer);

  // set all time to Zero
  hrs = min = sec = ms = "0" + 0;

  checkCode = false;
  showTime();
}

function showTime() {
  // show the time as its increasing in the element
  document.querySelector(".ms").innerText = ms;
  document.querySelector(".sec").innerText = sec;
  document.querySelector(".min").innerText = min;
  document.querySelector(".hrs").innerText = hrs;
}
