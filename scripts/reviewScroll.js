

const button1 = document.getElementById('background2');

button1.onclick = function () {
  document.getElementById('overflow-guide').scrollLeft += 500;
};

const button2 = document.getElementById('background1');

button2.onclick = function () {
  document.getElementById('overflow-guide').scrollLeft -= 500;
};

setInterval(() => {
  if (  document.getElementById('overflow-guide').scrollLeft <= 1200 ) {
    document.getElementById('overflow-guide').scrollLeft += 500;
    document.getElementById('overflow-guide').style.scrollBehavior = "smooth";

  }
  if (  document.getElementById('overflow-guide').scrollLeft >= 1200 ) {

    document.getElementById('overflow-guide').scrollLeft = 0;
    document.getElementById('overflow-guide').style.scrollBehavior = "auto"; 
  
  }

  
}, 5000);
