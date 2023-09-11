(()=>{"use strict";(e=>{const t=document.getElementById("timer-day"),a=document.getElementById("timer-hours"),r=document.getElementById("timer-minutes"),n=document.getElementById("timer-seconds");let o;const l=(e,t)=>{const a=(e=Math.abs(e)%100)%10;return e>10&&e<20?t[2]:a>1&&a<5?t[1]:1===a?t[0]:t[2]};o=setInterval((()=>{const{second:e,minute:c,hourse:s,day:i,timeRemain:u}=(()=>{let e=(new Date).getTime(),t=(new Date("28 August 2023 21:55:00").getTime()-e)/1e3;return{second:Math.floor(t%60),minute:Math.floor(t/60%60),hourse:Math.floor(t/60/60%24),day:Math.floor(t/60/60/24),timeRemain:t}})();n.textContent=String(e).padStart(2,"0"),r.textContent=String(c).padStart(2,"0"),a.textContent=String(s).padStart(2,"0"),t.textContent=String(i).padStart(2,"0"),u<=0&&(t.textContent="00",a.textContent="00",r.textContent="00",n.textContent="00",clearInterval(o)),n.nextElementSibling.textContent=l(e,["секунда","секунды","секунд"]),r.nextElementSibling.textContent=l(c,["минута","минуты","минут"]),a.nextElementSibling.textContent=l(s,["час","часа","часов"]),t.nextElementSibling.textContent=l(i,["день","дня","дней"])}),1e3)})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),a=t.querySelector(".close-btn"),r=t.querySelectorAll("ul>li>a"),n=()=>{t.classList.toggle("active-menu")};r.forEach((e=>{e.addEventListener("click",n)})),e.addEventListener("click",n),a.addEventListener("click",n)})(),(()=>{const e=document.querySelector(".popup");let t,a=-50;const r=()=>{a++,t=requestAnimationFrame(r),a<=0&&innerWidth>=768?e.style.transform=`translateX(${2*a}%)`:(cancelAnimationFrame(t),a=-50)};document.addEventListener("click",(t=>{"popup-btn"===t.target.classList[2]?r():"popup-close"!==t.target.className&&"popup"!==t.target.className||(e.style.transform="translateX(-100%)")}))})(),(()=>{const e=document.querySelectorAll("input"),t=e=>{const t=e.replace(/((^[ \s-]+|[ \s-]+$))/g,""),a=t.replace(/[ ]+/g," "),r=a.replace(/( |^)[а-я]/g,(e=>e.toUpperCase()));return{treatment:t,trim:a,upperCase:r}};e.forEach((e=>{e.addEventListener("blur",(e=>{"user_name"===e.target.name?e.target.value=t(e.target.value).upperCase.replace(/([^а-яА-Я\s-]+)/g,""):"user_message"===e.target.name?e.target.value=t(e.target.value).trim.replace(/[^-а-яА-Я0-9.,!?\s-]+/g,""):"user_phone"===e.target.name?e.target.value=t(e.target.value).trim.replace(/[^-0-9()]/g,""):"user_email"===e.target.name?e.target.value=t(e.target.value).trim.replace(/[^-a-zA-Z0-9@_.!~*']/g,""):"calc-item"===e.target.classList[0]&&(e.target.value=t(e.target.value).trim.replace(/\D+/g,""))}))}))})(),(()=>{const e=document.querySelector('a[href = "#service-block"]'),t=document.querySelector("menu");e.addEventListener("click",(e=>{e.preventDefault(),document.getElementById("service-block").scrollIntoView({behavior:"smooth",block:"start"})})),t.addEventListener("click",(e=>{e.preventDefault(),""===e.target.className&&(e=>{const t=e.slice(1);document.getElementById(t).scrollIntoView({behavior:"smooth",block:"start"})})(e.target.hash)}))})(),(()=>{const e=document.querySelectorAll(".service-tab"),t=document.querySelector(".service-header"),a=document.querySelectorAll(".service-header-tab");t.addEventListener("click",(t=>{t.target.closest(".service-header-tab")&&a.forEach(((a,r)=>{a===t.target.closest(".service-header-tab")?(a.classList.add("active"),e[r].classList.remove("d-none")):(a.classList.remove("active"),e[r].classList.add("d-none"))}))}))})(),((e,t,a="portfolio-item-active",r="dot-active",n="dot")=>{const o=document.querySelector(e),l=document.querySelectorAll(t);let c,s,i=0;const u=(e,t,a)=>{e[t].classList.remove(a)},d=(e,t,a)=>{e[t].classList.add(a)},m=()=>{u(l,i,a),u(s,i,r),i++,i>=l.length&&(i=0),d(l,i,a),d(s,i,r)},g=()=>{null!==document.querySelector(e,t)&&(c=setInterval(m,3e3))};o.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot , .portfolio-btn")&&(u(l,i,a),u(s,i,r),e.target.matches("#arrow-right")?i++:e.target.matches("#arrow-left")?i--:e.target.classList.contains(n)&&s.forEach(((t,a)=>{e.target===t&&(i=a)})),i>=l.length&&(i=0),i<0&&(i=l.length-1),d(l,i,a),d(s,i,r))})),o.addEventListener("mouseenter",(e=>{e.target.matches(".dot , .portfolio-btn")&&clearInterval(c)}),!0),o.addEventListener("mouseleave",(e=>{e.target.matches(".dot , .portfolio-btn")&&g()}),!0),(()=>{const e=document.querySelector(".portfolio-dots");for(let t=0;t<=l.length-1;t++){const t=document.createElement("li");e.append(t)}s=e.querySelectorAll("li"),s.forEach(((e,t)=>{0===t?e.classList.add(n,r):e.classList.add(n)}))})(),g()})(".portfolio-content",".portfolio-item","portfolio-item-active","dot-active","dot"),((e=100)=>{const t=document.querySelector(".calc-block"),a=document.querySelector(".calc-type"),r=document.querySelector(".calc-square"),n=document.querySelector(".calc-count"),o=document.querySelector(".calc-day"),l=document.getElementById("total");t.addEventListener("change",(()=>{const t=+a.options[a.selectedIndex].value,c=+r.value;let s=1,i=1,u=0;n.value>1&&(s+=n.value/10),o.value<5&&o.value?i=2:o.value<10&&o.value&&(i=1.5),u=a.value&&r.value?e*t*c*s*i:0,l.textContent=u}))})(890)})();