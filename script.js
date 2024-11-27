'use strict';

let count = 30;

const counterElement = document.getElementById("timer");

const countDown = setInterval(()=>{
    counterElement.textContent = count; 
    count--;
    if(count < 0){
        clearInterval(countDown);
        counterElement.textContent = "Countdown complete!";
    }

},1000);