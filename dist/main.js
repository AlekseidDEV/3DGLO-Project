(()=>{"use strict";(t=>{const e=document.getElementById("timer-day"),n=document.getElementById("timer-hours"),o=document.getElementById("timer-minutes"),r=document.getElementById("timer-seconds");let i;const m=(t,e)=>{const n=(t=Math.abs(t)%100)%10;return t>10&&t<20?e[2]:n>1&&n<5?e[1]:1===n?e[0]:e[2]};i=setInterval((()=>{const{second:t,minute:a,hourse:l,day:d,timeRemain:s}=(()=>{let t=(new Date).getTime(),e=(new Date("28 August 2023 21:55:00").getTime()-t)/1e3;return{second:Math.floor(e%60),minute:Math.floor(e/60%60),hourse:Math.floor(e/60/60%24),day:Math.floor(e/60/60/24),timeRemain:e}})();r.textContent=String(t).padStart(2,"0"),o.textContent=String(a).padStart(2,"0"),n.textContent=String(l).padStart(2,"0"),e.textContent=String(d).padStart(2,"0"),s<=0&&(e.textContent="00",n.textContent="00",o.textContent="00",r.textContent="00",clearInterval(i)),r.nextElementSibling.textContent=m(t,["секунда","секунды","секунд"]),o.nextElementSibling.textContent=m(a,["минута","минуты","минут"]),n.nextElementSibling.textContent=m(l,["час","часа","часов"]),e.nextElementSibling.textContent=m(d,["день","дня","дней"])}),1e3)})()})();