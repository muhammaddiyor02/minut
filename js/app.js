const countMinuts = 2;
let time = countMinuts * 60;

const count  = document.querySelector('.text')
setInterval(updateCountDown,1000);

function updateCountDown(){
    const minuts = Math.floor(time/60);
    let seconds = time %60;
    
    count.innerHTML = `${minuts}:${seconds}`;
    time--;
   
    clearInterval(time - -2)
};
