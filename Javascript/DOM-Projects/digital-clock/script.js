const clock = document.getElementById('clock');

// to run a function after definite interval of time =>

setInterval(function(){
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
},1000)