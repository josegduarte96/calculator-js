(()=>{"use strict";var e,t,n,c=document.querySelector(".keys"),r=document.querySelector(".cifra"),o=document.querySelector(".operator"),s=document.querySelector(".screen"),a=document.querySelector(".reset"),i=document.querySelector(".total"),d=document.querySelector(".del"),u=document.querySelector("#on"),l=document.querySelector("#off"),m=function(e){var t;switch(e){case"+":t="+";break;case"-":t="-";break;case"x":t="x";break;case"/":t="/";break;default:return}return t};c.addEventListener("click",(function(c){if(!(r.clientWidth>300)){e=m(c.target.textContent);var s="number"==c.target.classList[0];t=function(e,t){return t&&r.append(e),Number(r.textContent)}(c.target.textContent,s),e&&(o.textContent=e,setTimeout((function(){o.classList.add("top")}),300),r.textContent="",n=function(e,t){if(/\W/.test(e)||"x"==o.textContent)return t}(e,t))}})),i.addEventListener("click",(function(c){var s="+"==(e=m(o.textContent))?n+t:"-"==e?n-t:"x"==e?n*t:"/"==e?n/t:"";o.textContent="",r.textContent=s.toLocaleString("en")})),a.addEventListener("click",(function(){return r.textContent=""})),d.addEventListener("click",(function(e){if(""!=r.textContent){var t=r.textContent.split("");return t.pop(),r.textContent=t.join("")}})),u.addEventListener("click",(function(e){u.checked&&(document.body.classList.remove("theme2"),document.querySelector(".calculator-theme").classList.remove("theme2"),s.classList.remove("theme2"),c.classList.remove("theme2"),i.classList.remove("theme2"),a.classList.remove(theme2))})),l.addEventListener("click",(function(e){l.checked&&(document.body.classList.add("theme2"),document.querySelector(".calculator-theme").classList.add("theme2"),s.classList.add("theme2"),c.classList.add("theme2"),i.classList.add("theme2"),a.classList.add(theme2))}))})();