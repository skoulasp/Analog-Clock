function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequirebd18"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequirebd18"] = parcelRequire;
}
parcelRequire.register("aKzDW", function(module, exports) {

$parcel$export(module.exports, "register", () => $7d39d93f9098a310$export$6503ec6e8aabbaf, (v) => $7d39d93f9098a310$export$6503ec6e8aabbaf = v);
$parcel$export(module.exports, "resolve", () => $7d39d93f9098a310$export$f7ad0328861e2f03, (v) => $7d39d93f9098a310$export$f7ad0328861e2f03 = v);
var $7d39d93f9098a310$export$6503ec6e8aabbaf;
var $7d39d93f9098a310$export$f7ad0328861e2f03;
"use strict";
var $7d39d93f9098a310$var$mapping = {};
function $7d39d93f9098a310$var$register(pairs) {
    var keys = Object.keys(pairs);
    for(var i = 0; i < keys.length; i++)$7d39d93f9098a310$var$mapping[keys[i]] = pairs[keys[i]];
}
function $7d39d93f9098a310$var$resolve(id) {
    var resolved = $7d39d93f9098a310$var$mapping[id];
    if (resolved == null) throw new Error("Could not resolve bundle with id " + id);
    return resolved;
}
$7d39d93f9098a310$export$6503ec6e8aabbaf = $7d39d93f9098a310$var$register;
$7d39d93f9098a310$export$f7ad0328861e2f03 = $7d39d93f9098a310$var$resolve;

});

var $9f2f44717bb62468$exports = {};

(parcelRequire("aKzDW")).register(JSON.parse('{"2poqF":"index.99c9322f.js","lMVs0":"switzerland.d1c3a3ac.png","lgXUl":"china.bd0eb07e.png"}'));

var $306fa94654acf423$exports = {};

$306fa94654acf423$exports = new URL((parcelRequire("aKzDW")).resolve("lMVs0"), import.meta.url).toString();


var $9e6b3c82c4ed1b56$exports = {};

$9e6b3c82c4ed1b56$exports = new URL((parcelRequire("aKzDW")).resolve("lgXUl"), import.meta.url).toString();


const $4963ed4219911083$var$container = document.querySelector(".container");
const $4963ed4219911083$var$clock = document.querySelector(".analog-clock");
const $4963ed4219911083$var$digitalClock = document.querySelector(".digital-clock");
const $4963ed4219911083$var$needleHours = document.querySelector(".needle-hours i");
const $4963ed4219911083$var$needleMinutes = document.querySelector(".needle-minutes i");
const $4963ed4219911083$var$needleSeconds = document.querySelector(".needle-seconds i");
const $4963ed4219911083$var$checkbox = document.querySelector("#switch");
const $4963ed4219911083$var$checkboxTitle = document.querySelector(".switch-title");
const $4963ed4219911083$var$title = document.querySelector(".title");
const $4963ed4219911083$var$image = document.querySelector(".img");
const $4963ed4219911083$var$numbers = document.querySelectorAll(".num i");
const $4963ed4219911083$var$i = document.querySelector(".information");
const $4963ed4219911083$var$latinNumbers = [
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
    "X",
    "XI",
    "XII"
];
let $4963ed4219911083$var$intervalId;
let $4963ed4219911083$var$isChecked;
let $4963ed4219911083$var$modalActive = false;
function $4963ed4219911083$var$DOMclock(isChecked1 = true) {
    const now = new Date();
    const seconds = now.getSeconds();
    const milliseconds = now.getMilliseconds();
    const secondsDegree = 6 * seconds + 90;
    const time = {
        seconds: `${seconds}`.padStart(2, 0),
        secondsAnalog: `${seconds * 6}`,
        secondsAnalogMechanical: `${seconds * 6 + milliseconds / 1000 * 6}`,
        minutes: `${now.getMinutes()}`.padStart(2, 0),
        minutesAnalog: `${now.getMinutes() * 6 + seconds / 60 * 6 + milliseconds / 60000 * 6}`,
        hour: `${now.getHours()}`.padStart(2, 0),
        hourAnalog: `${now.getHours() % 12 * 30 + now.getMinutes() / 60 * 30 + seconds / 3600 * 30 + milliseconds / 3600000 * 30}`,
        day: `${now.getDay()}`.padStart(2, 0),
        month: `${now.getMonth() + 1}`.padStart(2, 0),
        year: now.getFullYear()
    };
    $4963ed4219911083$var$digitalClock.firstElementChild.children[0].innerHTML = `${time.hour}`;
    $4963ed4219911083$var$digitalClock.firstElementChild.children[2].innerHTML = `${time.minutes}`;
    $4963ed4219911083$var$digitalClock.firstElementChild.children[4].innerHTML = `${time.seconds}`;
    $4963ed4219911083$var$needleSeconds.style.transition = "";
    if (!isChecked1) {
        $4963ed4219911083$var$loadChineseClock();
        $4963ed4219911083$var$needleHours.style.transform = `translateX(-50%) rotateZ(${+time.hourAnalog + time.minutesAnalog / 12 / 4}deg)`;
        $4963ed4219911083$var$needleMinutes.style.transform = `translateX(-50%) rotateZ(${time.minutesAnalog}deg)`;
        $4963ed4219911083$var$needleSeconds.style.transform = `translateX(-50%) rotateZ(${time.secondsAnalog}deg)`;
        $4963ed4219911083$var$needleSeconds.style.transition = secondsDegree === 90 ? "all 0s" : "all 0.05s";
        $4963ed4219911083$var$needleSeconds.style["transition-timing-function"] = "cubic-bezier(0.1, 2.7, 0.58, 1)";
    } else {
        $4963ed4219911083$var$needleHours.style.transform = `translateX(-50%) rotateZ(${+time.hourAnalog + time.minutesAnalog / 12 / 4}deg)`;
        $4963ed4219911083$var$needleMinutes.style.transform = `translateX(-50%) rotateZ(${time.minutesAnalog}deg)`;
        $4963ed4219911083$var$needleSeconds.style.transform = `translateX(-50%) rotateZ(${time.secondsAnalogMechanical}deg)`;
    }
}
$4963ed4219911083$var$checkbox.addEventListener("change", function(e) {
    if (e.target.checked) {
        localStorage.setItem("checkbox", JSON.stringify(e.target.checked));
        clearInterval($4963ed4219911083$var$intervalId);
        $4963ed4219911083$var$changeClock("swiss");
        $4963ed4219911083$var$intervalId = setInterval($4963ed4219911083$var$DOMclock, 1);
        $4963ed4219911083$var$checkboxTitle.classList.add("fadeOut");
        $4963ed4219911083$var$image.classList.add("scaleOut");
        setTimeout(()=>{
            $4963ed4219911083$var$checkboxTitle.style.fontFamily = '"Edwardian Script ITC", sans-serif';
            $4963ed4219911083$var$checkboxTitle.style.letterSpacing = "0.3rem";
            $4963ed4219911083$var$checkboxTitle.style.fontSize = "3.5rem";
            $4963ed4219911083$var$checkboxTitle.textContent = "Premium handmade automatic Swiss clock";
            $4963ed4219911083$var$image.src = (0, (/*@__PURE__*/$parcel$interopDefault($306fa94654acf423$exports)));
            $4963ed4219911083$var$image.classList.add("scaleIn");
            $4963ed4219911083$var$checkboxTitle.classList.add("fadeIn");
        }, 400);
    } else {
        localStorage.setItem("checkbox", JSON.stringify(e.target.checked));
        clearInterval($4963ed4219911083$var$intervalId);
        $4963ed4219911083$var$checkboxTitle.classList.add("fadeOut");
        $4963ed4219911083$var$image.classList.add("scaleOut");
        $4963ed4219911083$var$changeClock("chinese");
        setTimeout(()=>{
            $4963ed4219911083$var$intervalId = setInterval(()=>{
                $4963ed4219911083$var$DOMclock(e.target.checked);
            }, 1);
        }, 400);
        setTimeout(()=>{
            $4963ed4219911083$var$checkboxTitle.classList.remove("fadeOut");
            $4963ed4219911083$var$image.classList.remove("scaleOut");
            $4963ed4219911083$var$checkboxTitle.style.fontFamily = '"Montserrat", sans-serif';
            $4963ed4219911083$var$checkboxTitle.style.letterSpacing = "normal";
            $4963ed4219911083$var$checkboxTitle.style.fontSize = "2.2rem";
            $4963ed4219911083$var$checkboxTitle.textContent = 'Affordable "Made in China" clock';
            $4963ed4219911083$var$image.src = (0, (/*@__PURE__*/$parcel$interopDefault($9e6b3c82c4ed1b56$exports)));
            $4963ed4219911083$var$checkboxTitle.classList.add("fadeIn");
            $4963ed4219911083$var$image.classList.add("scaleIn");
        }, 400);
    }
});
function $4963ed4219911083$var$timezone() {
    const d = new Date();
    const timezoneOffset = d.getTimezoneOffset();
    const hours = Math.floor(Math.abs(timezoneOffset) / 60);
    const minutes = Math.abs(timezoneOffset) % 60;
    const timezone1 = (timezoneOffset >= 0 ? "-" : "+") + hours.toString().padStart(2, 0) + ":" + minutes.toString().padStart(2, 0);
    return "Your timezone is UTC " + timezone1;
}
$4963ed4219911083$var$title.textContent = $4963ed4219911083$var$timezone();
function $4963ed4219911083$var$changeClock(type) {
    $4963ed4219911083$var$clock.classList.add("fadeOut");
    document.body.classList.add("fadeOut");
    if (type === "chinese") setTimeout(()=>{
        $4963ed4219911083$var$clock.classList.add("fadeIn");
        document.body.classList.add("fadeInBlur");
        $4963ed4219911083$var$clock.classList.add("normal");
        $4963ed4219911083$var$loadChineseClock();
    }, 400);
    else setTimeout(()=>{
        $4963ed4219911083$var$clock.classList.add("fadeIn");
        document.body.classList.add("fadeInBlur");
        $4963ed4219911083$var$clock.classList.remove("normal");
        document.body.classList.remove("bgcn");
        $4963ed4219911083$var$numbers.forEach((n, i1)=>{
            n.textContent = $4963ed4219911083$var$latinNumbers[i1];
        });
    }, 400);
}
function $4963ed4219911083$var$loadChineseClock() {
    document.body.classList.add("bgcn");
    $4963ed4219911083$var$clock.classList.add("normal");
    $4963ed4219911083$var$checkboxTitle.textContent = 'Affordable "Made in China" clock';
    $4963ed4219911083$var$image.src = (0, (/*@__PURE__*/$parcel$interopDefault($9e6b3c82c4ed1b56$exports)));
    $4963ed4219911083$var$numbers.forEach((n, i2)=>{
        n.textContent = i2 + 1;
    });
}
document.addEventListener("animationend", (e)=>{
    if (e.animationName) e.target.classList.remove(e.animationName);
});
document.addEventListener("animationstart", (e)=>{});
document.addEventListener("keydown", function(e) {
    if (e.code === "Space") {
        const changeEvent = new Event("change");
        $4963ed4219911083$var$checkbox.checked = !$4963ed4219911083$var$checkbox.checked;
        $4963ed4219911083$var$checkbox.dispatchEvent(changeEvent);
    }
    if (e.code === "Escape" && $4963ed4219911083$var$modalActive) {
        $4963ed4219911083$var$container.classList.remove("modal-open");
        document.querySelector(".modal-background").remove();
        document.body.classList.remove("blur");
        $4963ed4219911083$var$modalActive = false;
    }
});
window.onload = function() {
    $4963ed4219911083$var$isChecked = localStorage.getItem("checkbox");
    if ($4963ed4219911083$var$isChecked !== null) {
        $4963ed4219911083$var$isChecked = JSON.parse(localStorage.getItem("checkbox"));
        $4963ed4219911083$var$checkbox.checked = $4963ed4219911083$var$isChecked;
        $4963ed4219911083$var$intervalId = setInterval(function() {
            $4963ed4219911083$var$DOMclock($4963ed4219911083$var$isChecked);
        }, 1);
    } else $4963ed4219911083$var$intervalId = setInterval($4963ed4219911083$var$DOMclock, 1);
};
document.addEventListener("click", (e)=>{
    if (e.target === $4963ed4219911083$var$i && $4963ed4219911083$var$modalActive === false) {
        $4963ed4219911083$var$modalActive = true;
        $4963ed4219911083$var$container.classList.add("modal-open");
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
        $4963ed4219911083$var$container.appendChild(modal);
        modalClose.addEventListener("click", ()=>{
            $4963ed4219911083$var$container.classList.remove("modal-open");
            modal.remove();
            document.body.classList.remove("blur");
            $4963ed4219911083$var$modalActive = false;
        });
    } else if (e.target === $4963ed4219911083$var$i && $4963ed4219911083$var$modalActive) {
        $4963ed4219911083$var$container.classList.remove("modal-open");
        document.querySelector(".modal-background").remove();
        document.body.classList.remove("blur");
        $4963ed4219911083$var$modalActive = false;
    }
});


//# sourceMappingURL=index.99c9322f.js.map
