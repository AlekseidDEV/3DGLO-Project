(()=>{"use strict";(e=>{const t=document.getElementById("timer-day"),n=document.getElementById("timer-hours"),o=document.getElementById("timer-minutes"),m=document.getElementById("timer-seconds");let r;r=setInterval((()=>{const{second:e,minute:l,hourse:s,day:a,timeRemain:d}=(()=>{let e=(new Date).getTime(),t=(new Date("25 August 2023").getTime()-e)/1e3;return{second:Math.floor(t%60),minute:Math.floor(t/60%60),hourse:Math.floor(t/60/60%24),day:Math.floor(t/60/60/24),timeRemain:t}})();t.textContent=a,n.textContent=s,o.textContent=l,m.textContent=e,0===d&&clearInterval(r),console.log(1)}),1e3)})()})();