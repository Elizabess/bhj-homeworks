let timer
let x = 60

function countdown() {
    document.getElementById('timer').innerHTML = x;
    x--;
  
    if (x < 0) {
        clearInterval(timer);
        alert("Вы победили в конкурсе!");
    } else {
        timer = setTimeout(countdown, 1000)
    }
}
countdown()