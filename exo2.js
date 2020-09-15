const myCanvas = document.getElementById('myCanvas');
const ctx = myCanvas.getContext('2d');

//creation du damien, cases blanches et bleues (50x50), 500 x 500
for(let i= 0; i<= 10; i++ ){
    for(let j= 0; j<= 10; j++ ){
        if ((i%2==0 && j%2 == 0) || (i%2!=0 && j%2 != 0)) {
            ctx.fillStyle = '#008B8B';
        } else {
            ctx.fillStyle = 'white';
        }
        ctx.fillRect(i*50, j*50, 50, 50);
    }
}

//creation du pion rouge
ctx.beginPath();
ctx.fillStyle = '#dd5555';
ctx.strokeStyle = '#773333';
ctx.lineWidth = 2; 

ctx.arc(411, 89, 24, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
