function e(e,t,n,a){Object.defineProperty(e,t,{get:n,set:a,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},o={},s=n.parcelRequirebd18;null==s&&((s=function(e){if(e in a)return a[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return a[e]=n,t.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){o[e]=t},n.parcelRequirebd18=s),s.register("27Lyk",(function(t,n){var a,o;e(t.exports,"register",(()=>a),(e=>a=e)),e(t.exports,"resolve",(()=>o),(e=>o=e));var s={};a=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)s[t[n]]=e[t[n]]},o=function(e){var t=s[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),s("27Lyk").register(JSON.parse('{"jAywl":"index.39f46e14.js","kNNgZ":"switzerland.263f9187.png","dCZ8h":"china.67a92c48.png"}'));var r;r=new URL(s("27Lyk").resolve("kNNgZ"),import.meta.url).toString();var c;c=new URL(s("27Lyk").resolve("dCZ8h"),import.meta.url).toString();const d=document.querySelector(".container"),l=document.querySelector(".analog-clock"),i=document.querySelector(".digital-clock"),u=document.querySelector(".needle-hours i"),m=document.querySelector(".needle-minutes i"),f=document.querySelector(".needle-seconds i"),g=document.querySelector("#switch"),y=document.querySelector(".switch-title"),h=document.querySelector(".title"),p=(document.querySelector(".title-content"),document.querySelector(".img")),L=document.querySelectorAll(".num i"),S=document.querySelector(".information"),v=["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII"];let b,I,k=!1;function C(e=!0){const t=new Date,n=t.getSeconds(),a=t.getMilliseconds(),o=6*n+90,s=`${n}`.padStart(2,0),r=""+6*n,c=""+(6*n+a/1e3*6),d=`${t.getMinutes()}`.padStart(2,0),l=""+(6*t.getMinutes()+n/60*6+a/6e4*6),g=`${t.getHours()}`.padStart(2,0),y=""+(t.getHours()%12*30+t.getMinutes()/60*30+n/3600*30+a/36e5*30);`${t.getDay()}`.padStart(2,0),`${t.getMonth()+1}`.padStart(2,0),t.getFullYear();i.firstElementChild.children[0].innerHTML=`${g}`,i.firstElementChild.children[2].innerHTML=`${d}`,i.firstElementChild.children[4].innerHTML=`${s}`,f.style.transition="",e?(u.style.transform=`translateX(-50%) rotateZ(${+y+l/12/4}deg)`,m.style.transform=`translateX(-50%) rotateZ(${l}deg)`,f.style.transform=`translateX(-50%) rotateZ(${c}deg)`):(w(),u.style.transform=`translateX(-50%) rotateZ(${+y+l/12/4}deg)`,m.style.transform=`translateX(-50%) rotateZ(${l}deg)`,f.style.transform=`translateX(-50%) rotateZ(${r}deg)`,f.style.transition=90===o?"all 0s":"all 0.05s",f.style["transition-timing-function"]="cubic-bezier(0.1, 2.7, 0.58, 1)")}function E(e){l.classList.add("fadeOut"),document.body.classList.add("fadeOut"),"chinese"===e?setTimeout((()=>{l.classList.add("fadeIn"),document.body.classList.add("fadeInBlur"),l.classList.add("normal"),w()}),400):setTimeout((()=>{l.classList.add("fadeIn"),document.body.classList.add("fadeInBlur"),l.classList.remove("normal"),document.body.classList.remove("bgcn"),L.forEach(((e,t)=>{e.textContent=v[t]}))}),400)}function w(){document.body.classList.add("bgcn"),l.classList.add("normal"),y.textContent='Affordable "Made in China" clock',p.src=t(c),L.forEach(((e,t)=>{e.textContent=t+1}))}g.addEventListener("change",(function(e){e.target.checked?(localStorage.setItem("checkbox",JSON.stringify(e.target.checked)),clearInterval(b),E("swiss"),b=setInterval(C,1),y.classList.add("fadeOut"),p.classList.add("scaleOut"),setTimeout((()=>{y.style.fontFamily='"Edwardian Script ITC", sans-serif',y.style.letterSpacing="0.3rem",y.style.fontSize="3.5rem",y.textContent="Premium handmade automatic Swiss clock",p.src=t(r),p.classList.add("scaleIn"),y.classList.add("fadeIn")}),400)):(localStorage.setItem("checkbox",JSON.stringify(e.target.checked)),clearInterval(b),y.classList.add("fadeOut"),p.classList.add("scaleOut"),E("chinese"),setTimeout((()=>{b=setInterval((()=>{C(e.target.checked)}),1)}),400),setTimeout((()=>{y.classList.remove("fadeOut"),p.classList.remove("scaleOut"),y.style.fontFamily='"Montserrat", sans-serif',y.style.letterSpacing="normal",y.style.fontSize="2.2rem",y.textContent='Affordable "Made in China" clock',p.src=t(c),y.classList.add("fadeIn"),p.classList.add("scaleIn")}),400))})),h.textContent=function(){const e=(new Date).getTimezoneOffset(),t=Math.floor(Math.abs(e)/60),n=Math.abs(e)%60;return"Your timezone is UTC "+((e>=0?"-":"+")+t.toString().padStart(2,0)+":"+n.toString().padStart(2,0))}(),document.addEventListener("animationend",(e=>{console.log(e.animationName),e.animationName&&e.target.classList.remove(e.animationName)})),document.addEventListener("animationstart",(e=>{})),document.addEventListener("keydown",(function(e){if("Space"===e.code){const e=new Event("change");g.checked=!g.checked,g.dispatchEvent(e)}"Escape"===e.code&&k&&(d.classList.remove("modal-open"),document.querySelector(".modal-background").remove(),document.body.classList.remove("blur"),k=!1)})),window.onload=function(){I=localStorage.getItem("checkbox"),null!==I?(I=JSON.parse(localStorage.getItem("checkbox")),g.checked=I,b=setInterval((function(){C(I)}),1)):b=setInterval(C,1)},document.addEventListener("click",(e=>{if(e.target===S&&!1===k){k=!0,d.classList.add("modal-open");const e=document.createElement("div");e.classList.add("modal-background"),document.body.classList.add("blur");const t=document.createElement("div");t.classList.add("modal-content");const n=document.createElement("h2");n.textContent="The JavaScript digital & analog clock";const a=document.createElement("p");a.textContent="Created by Petros Skoulas in 2023. This project was built using HTML, CSS and vanilla JavaScript.";const o=document.createElement("button");o.classList.add("modal-close"),o.innerHTML="&#10006;",t.appendChild(n),t.appendChild(o),t.appendChild(a),e.appendChild(t),d.appendChild(e),o.addEventListener("click",(()=>{d.classList.remove("modal-open"),e.remove(),document.body.classList.remove("blur"),k=!1}))}else e.target===S&&k&&(d.classList.remove("modal-open"),document.querySelector(".modal-background").remove(),document.body.classList.remove("blur"),k=!1)}));
//# sourceMappingURL=index.39f46e14.js.map