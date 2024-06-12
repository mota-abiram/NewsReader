const start = document.querySelector("#start");
const stop = document.querySelector("#stop");

let inter;

function fire() {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

start.addEventListener('click', function() {
    inter = setInterval(function() {
        const body = document.querySelector("body");
        body.style.background = fire();
    }, 1000);
});

stop.addEventListener('click', function() {
    clearInterval(inter);
});
