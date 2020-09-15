const myCanvas = document.getElementById('myCanvas');
const ctx = myCanvas.getContext('2d');

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