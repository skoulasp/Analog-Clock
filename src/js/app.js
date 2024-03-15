const container = document.querySelector(".container");
const clock = document.querySelector(".analog-clock");
const digitalClock = document.querySelector(".digital-clock");
const needleHours = document.querySelector(".needle-hours i");
const needleMinutes = document.querySelector(".needle-minutes i");
const needleSeconds = document.querySelector(".needle-seconds i");
const checkbox = document.querySelector("#switch");
const checkboxTitle = document.querySelector(".switch-title");
const title = document.querySelector(".title");
const titleContent = document.querySelector(".title-content");
const image = document.querySelector(".img");
const numbers = document.querySelectorAll(".num i");
const i = document.querySelector(".information");
const latinNumbers = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];
let intervalId;
let isChecked;
let modalActive = false;
import switzerlandImage from "../img/switzerland.png"; // Adjust the path as needed
import chinaImage from "../img/china.png"; // Adjust the path as needed

function DOMclock(isChecked = true) {
    const now = new Date();
    const seconds = now.getSeconds();
    const milliseconds = now.getMilliseconds();
    const secondsDegree = (360 / 60) * seconds + 90;
    const time = {
        seconds: `${seconds}`.padStart(2, 0),
        secondsAnalog: `${seconds * 6}`,
        secondsAnalogMechanical: `${seconds * 6 + (milliseconds / 1000) * 6}`,
        minutes: `${now.getMinutes()}`.padStart(2, 0),
        minutesAnalog: `${now.getMinutes() * 6 + (seconds / 60) * 6 + (milliseconds / 60000) * 6}`,
        hour: `${now.getHours()}`.padStart(2, 0),
        hourAnalog: `${(now.getHours() % 12) * 30 + (now.getMinutes() / 60) * 30 + (seconds / 3600) * 30 + (milliseconds / 3600000) * 30}`,
        day: `${now.getDay()}`.padStart(2, 0),
        month: `${now.getMonth() + 1}`.padStart(2, 0),
        year: now.getFullYear(),
    };

    digitalClock.firstElementChild.children[0].innerHTML = `${time.hour}`;
    digitalClock.firstElementChild.children[2].innerHTML = `${time.minutes}`;
    digitalClock.firstElementChild.children[4].innerHTML = `${time.seconds}`;
    needleSeconds.style.transition = "";
    if (!isChecked) {
        loadChineseClock();
        needleHours.style.transform = `translateX(-50%) rotateZ(${+time.hourAnalog + time.minutesAnalog / 12 / 4}deg)`;
        needleMinutes.style.transform = `translateX(-50%) rotateZ(${time.minutesAnalog}deg)`;
        needleSeconds.style.transform = `translateX(-50%) rotateZ(${time.secondsAnalog}deg)`;
        needleSeconds.style.transition = secondsDegree === 90 ? "all 0s" : "all 0.05s";
        needleSeconds.style["transition-timing-function"] = "cubic-bezier(0.1, 2.7, 0.58, 1)";
    } else {
        needleHours.style.transform = `translateX(-50%) rotateZ(${+time.hourAnalog + time.minutesAnalog / 12 / 4}deg)`;
        needleMinutes.style.transform = `translateX(-50%) rotateZ(${time.minutesAnalog}deg)`;
        needleSeconds.style.transform = `translateX(-50%) rotateZ(${time.secondsAnalogMechanical}deg)`;
    }
}

checkbox.addEventListener("change", function (e) {
    if (e.target.checked) {
        localStorage.setItem("checkbox", JSON.stringify(e.target.checked));
        clearInterval(intervalId);
        changeClock("swiss");
        intervalId = setInterval(DOMclock, 1);
        checkboxTitle.classList.add("fadeOut");
        image.classList.add("scaleOut");
        setTimeout(() => {
            checkboxTitle.style.fontFamily = '"Edwardian Script ITC", sans-serif';
            checkboxTitle.style.letterSpacing = "0.3rem";
            checkboxTitle.style.fontSize = "3.5rem";
            checkboxTitle.textContent = "Premium handmade automatic Swiss clock";
            image.src = switzerlandImage;
            image.classList.add("scaleIn");
            checkboxTitle.classList.add("fadeIn");
        }, 400);
    } else {
        localStorage.setItem("checkbox", JSON.stringify(e.target.checked));
        clearInterval(intervalId);
        checkboxTitle.classList.add("fadeOut");
        image.classList.add("scaleOut");
        changeClock("chinese");
        setTimeout(() => {
            intervalId = setInterval(() => {
                DOMclock(e.target.checked);
            }, 1);
        }, 400);

        setTimeout(() => {
            checkboxTitle.classList.remove("fadeOut");
            image.classList.remove("scaleOut");
            checkboxTitle.style.fontFamily = '"Montserrat", sans-serif';
            checkboxTitle.style.letterSpacing = "normal";
            checkboxTitle.style.fontSize = "2.2rem";
            checkboxTitle.textContent = 'Affordable "Made in China" clock';
            image.src = chinaImage;
            checkboxTitle.classList.add("fadeIn");
            image.classList.add("scaleIn");
        }, 400);
    }
});

function timezone() {
    const d = new Date();
    const timezoneOffset = d.getTimezoneOffset();
    const hours = Math.floor(Math.abs(timezoneOffset) / 60);
    const minutes = Math.abs(timezoneOffset) % 60;
    const timezone = (timezoneOffset >= 0 ? "-" : "+") + hours.toString().padStart(2, 0) + ":" + minutes.toString().padStart(2, 0);

    return "Your timezone is UTC " + timezone;
}

title.textContent = timezone();

function changeClock(type) {
    clock.classList.add("fadeOut");
    document.body.classList.add("fadeOut");
    if (type === "chinese") {
        setTimeout(() => {
            clock.classList.add("fadeIn");
            document.body.classList.add("fadeInBlur");
            clock.classList.add("normal");
            loadChineseClock();
        }, 400);
    } else {
        setTimeout(() => {
            clock.classList.add("fadeIn");
            document.body.classList.add("fadeInBlur");
            clock.classList.remove("normal");
            document.body.classList.remove("bgcn");
            numbers.forEach((n, i) => {
                n.textContent = latinNumbers[i];
            });
        }, 400);
    }
}

function loadChineseClock() {
    document.body.classList.add("bgcn");
    clock.classList.add("normal");
    checkboxTitle.textContent = 'Affordable "Made in China" clock';
    image.src = chinaImage;
    numbers.forEach((n, i) => {
        n.textContent = i + 1;
    });
}

document.addEventListener("animationend", (e) => {
    console.log(e.animationName);
    if (e.animationName) {
        e.target.classList.remove(e.animationName);
    }
});
document.addEventListener("animationstart", (e) => {});

document.addEventListener("keydown", function (e) {
    if (e.code === "Space") {
        const changeEvent = new Event("change");
        checkbox.checked = !checkbox.checked;
        checkbox.dispatchEvent(changeEvent);
    }

    if (e.code === "Escape" && modalActive) {
        container.classList.remove("modal-open");
        document.querySelector(".modal-background").remove();
        document.body.classList.remove("blur");
        modalActive = false;
    }
});

window.onload = function () {
    isChecked = localStorage.getItem("checkbox");
    if (isChecked !== null) {
        isChecked = JSON.parse(localStorage.getItem("checkbox"));
        checkbox.checked = isChecked;
        intervalId = setInterval(function () {
            DOMclock(isChecked);
        }, 1);
    } else {
        intervalId = setInterval(DOMclock, 1);
    }
};

document.addEventListener("click", (e) => {
    if (e.target === i && modalActive === false) {
        modalActive = true;
        container.classList.add("modal-open");
        const modal = document.createElement("div");
        modal.classList.add("modal-background");
        document.body.classList.add("blur");
        const modalContent = document.createElement("div");
        modalContent.classList.add("modal-content");
        const modalTitle = document.createElement("h2");
        modalTitle.textContent = "The JavaScript digital & analog clock";
        const modalText = document.createElement("p");
        modalText.textContent = "Created by Petros Skoulas in 2023. This project was built using HTML, CSS and vanilla JavaScript.";
        const modalClose = document.createElement("button");
        modalClose.classList.add("modal-close");
        modalClose.innerHTML = "&#10006;";
        modalContent.appendChild(modalTitle);
        modalContent.appendChild(modalClose);
        modalContent.appendChild(modalText);
        modal.appendChild(modalContent);
        container.appendChild(modal);
        modalClose.addEventListener("click", () => {
            container.classList.remove("modal-open");
            modal.remove();
            document.body.classList.remove("blur");
            modalActive = false;
        });
    } else if (e.target === i && modalActive) {
        container.classList.remove("modal-open");
        document.querySelector(".modal-background").remove();
        document.body.classList.remove("blur");
        modalActive = false;
    }
});

// title.addEventListener("click", function (e) {
//     console.log(e);
//     if (e.target === this.querySelector("::after")) {
//         title.remove();
//     }
// });
