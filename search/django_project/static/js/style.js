
let watch = document.getElementById('watch');

   watch.innerText = (new Date()).toLocaleTimeString('en-GB');

   setInterval(function() {
   watch.innerText = (new Date()).toLocaleTimeString('en-GB');
   },1000);

let text = document.getElementById('text');
let btn = document.getElementById('btn');
let header = document.getElementById('header')
function color_orange(){
      text.style = `color:  #FFD280; transition: 0.5s`;
      btn.style = `background-color:  #FFD280; transition: 0.5s`;
      header.style = `background-color:  #FFD280; transition: 0.5s`;
};
function color_purple(){
      text.style = `color:  #9BA0FC; transition: 0.5s`;
      btn.style = `background-color:  #9BA0FC; transition: 0.5s`;
      header.style = `background-color:  #9BA0FC; transition: 0.5s`;
};
function color_cyan(){
      text.style = `color:  #8FC7FF; transition: 0.5s`;
      btn.style = `background-color: #8FC7FF; transition: 0.5s`;
      header.style = `background-color:  #8FC7FF; transition: 0.5s`;
};