(()=>{"use strict";const e=(e,t={},n="")=>{const c=document.createElement(e);return Object.keys(t).forEach((e=>{c.setAttribute(e,t[e])})),c.textContent=n,c},t=document.getElementById("result");document.getElementById("submit").addEventListener("click",(()=>{!function(n,c){const a=function(e,t){return`https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=786b74dc8fce162462303a21c3e890c0&units=${t}`}(n,c);fetch(a,{mode:"cors"}).then((e=>e.json())).then((a=>{console.log(a),window.data=a;const i=a.main.temp,o=a.weather[0].icon,s=a.weather[0].description;!function(n,c,a,i,o){t.innerHTML="";const s=`http://openweathermap.org/img/wn/${a}@4x.png`,p=e("p",{class:"location"},c.toUpperCase()),r=e("img",{src:s,alt:"weather icon",class:"weather-icon"}),d=e("p",{class:"weather-desc"},i),l=e("p",{class:"temp"},n),h=e("sup",{class:"unit"},"metric"==o?"°C":"°F");t.appendChild(p),t.appendChild(r),t.appendChild(d),l.appendChild(h),t.appendChild(l)}(i,n,o,s,c)})).catch((e=>{}))}(document.getElementById("city").value,document.querySelector(".switch input").checked?"imperial":"metric")}))})();
//# sourceMappingURL=main.js.map