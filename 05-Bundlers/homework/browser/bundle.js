(()=>{var e,t={394:e=>{function t(){this.subscribers={}}t.prototype.on=function(e,t){this.subscribers[e]||(this.subscribers[e]=[]),this.subscribers[e].push(t)},t.prototype.emit=function(e){if(this.subscribers[e]){var t=[].slice.call(arguments,1);this.subscribers[e].forEach((function(e){e.apply(null,t)}))}},e.exports=t},672:(e,t,o)=>{var n,i=new(o(394));[].slice.call(document.querySelectorAll(".marker")).forEach((function(e){e.style.backgroundColor=e.id,e.addEventListener("click",(function(){n=this.id,document.querySelector(".selected").classList.remove("selected"),this.classList.add("selected")}))}));var s=document.getElementById("paint"),r=s.getContext("2d");function c(){r.setTransform(1,0,0,1,0,0);var e=window.devicePixelRatio||1,t=s.clientWidth*e,o=s.clientHeight*e;if(t!==s.width||o!==s.height){var n=r.getImageData(0,0,s.width,s.height);s.width=t,s.height=o,r.putImageData(n,0,0)}r.scale(e,e),r.lineWidth=5,r.lineJoin="round",r.lineCap="round"}c(),window.addEventListener("resize",c);var a={x:0,y:0},d={x:0,y:0},u=!1;s.addEventListener("mousedown",(function(e){u=!0,a.x=e.pageX-this.offsetLeft,a.y=e.pageY-this.offsetTop})),s.addEventListener("mouseup",(function(){u=!1})),s.addEventListener("mousemove",(function(e){u&&(d.x=a.x,d.y=a.y,a.x=e.pageX-this.offsetLeft,a.y=e.pageY-this.offsetTop,i.draw(d,a,n,!0))})),i.draw=function(e,t,o,n){r.beginPath(),r.strokeStyle=o||"black",r.moveTo(e.x,e.y),r.lineTo(t.x,t.y),r.closePath(),r.stroke(),n&&i.emit("draw",e,t,o)}}},o={};e=function e(n){var i=o[n];if(void 0!==i)return i.exports;var s=o[n]={exports:{}};return t[n](s,s.exports,e),s.exports}(672),socket.on("connect",(function(){console.log("Connected!")})),socket.on("load",(function(t){t.forEach((function(t){var o=t.start,n=t.end,i=t.color;e.draw(o,n,i,!1)}))})),socket.on("draw",(function(t,o,n){e.draw(t,o,n,!1)})),e.on("draw",(function(e,t,o){socket.emit("draw",e,t,o)}))})();