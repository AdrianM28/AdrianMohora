const btnName = document.getElementById("btnName");

btnName.addEventListener("click", () => {
    if (btnName.innerText === "Click to Show") {
        btnName.innerText = "ADRIAN MOHORA";
    } else {
        btnName.innerText = "Click to Show";
    }
});

const btnL = document.getElementById("btnLabel");

btnL.addEventListener("click", () => {
    if (btnL.innerText === "Click to Show") {
        btnL.innerText = "Front End Developer";
    } else {
        btnL.innerText = "Click to Show";
    }
});

const btnPhone = document.getElementById("btnPhoneNumber");

btnPhone.addEventListener("click", () => {

    if (btnPhone.innerText === "Click for Phone Number") {
        btnPhone.innerText = "0777 777 777";
    } else {
        btnPhone.innerText = "Click for Phone Number";
    }
});

const btnEmail = document.getElementById("btnEmail");

btnEmail.addEventListener("click", () => {

    if (btnEmail.innerText === "Click for Email") {
        btnEmail.innerText = "kjkjk@gmail.com";
    } else {
        btnEmail.innerText = "Click for Email";
    }
});

function hideTimer() {
    var hideBtn = document.getElementById("hide");
    if (hideBtn.style.display === "none") {
        hideBtn.style.display = "block";
    } else {
        hideBtn.style.display = "none";
    }
}

//timer

var hourElement = document.getElementById("hour");
var minuteElement = document.getElementById("minutes");
var secondElement = document.getElementById("seconds");

var minutesCount = 0;
var secondsCount = 0;
var hoursCount = 0;
function updateSeconds() {
    secondsCount = secondsCount + 1;

    if (secondsCount === 60) {
        secondsCount = 0;
        minutesCount++;

        minuteElement.innerText = minutesCount < 10 ? "0" + minutesCount : minutesCount;

    }

    if (minutesCount === 60) {
        minutesCount = 0;
        hoursCount++;
    }

    if (secondsCount < 10) {
        secondElement.innerText = "0" + secondsCount;
    } else {
        secondElement.innerText = secondsCount;
    }

    minuteElement.innerText = minutesCount < 10 ? "0" + minutesCount : minutesCount;
    hourElement.innerText = hoursCount < 10 ? "0" + hoursCount : hoursCount;

}

var startBtn = document.getElementById("start");
var restartBtn = document.getElementById("restart");
var saveBtn = document.getElementById("save");
var stopBtn = document.getElementById("stop");
let interval;

var ok = 0;
startBtn.addEventListener("click", function () {
    if (ok < 1) { interval = setInterval(updateSeconds, 1000); }
    ok++
})

stopBtn.addEventListener("click", function () {
    clearInterval(interval);
    ok = 0;
})

restartBtn.addEventListener("click", function () {
    secondsCount = 0
    minutesCount = 0
    hoursCount = 0
})

saveBtn.addEventListener("click", function () {
    const container = document.querySelector('.containerTimer')
    const timeS = document.querySelector('.timeSaver')
    timeS.innerHTML = '<p>time save:</p>' + container.innerText
})