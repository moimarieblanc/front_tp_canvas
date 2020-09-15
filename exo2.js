const myCanvas = document.getElementById('myCanvas');
const ctx = myCanvas.getContext('2d');

//creation du damien, cases blanches et bleues (50x50), 500 x 500

function createDamier() {
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
}
createDamier();

let posPionX = 300;
let posPionY = 150;
let rayon = 25;

//creation du pion rouge
function createPion(posPionX, posPionY){
    ctx.beginPath();
    ctx.fillStyle = '#dd5555';
    ctx.strokeStyle = '#773333';
    ctx.lineWidth = 2; 

    ctx.arc(posPionX, posPionY, rayon, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
}
createPion(posPionX, posPionY, rayon);

document.addEventListener('keydown', (event) => {
    const nomTouche = event.key;
  
    if (nomTouche === 'ArrowUp' && posPionY > 25) {
    posPionY= posPionY - 25;
    } else if (nomTouche === 'ArrowDown' && posPionY < 475) {
        posPionY= posPionY + 25;
    } else if (nomTouche === 'ArrowLeft' && posPionX > 25) {
        posPionX= posPionX - 25;
    } else if (nomTouche === 'ArrowRight'  && posPionX < 475) {
        posPionX= posPionX + 25;
    } else if (nomTouche === '=') {
        rayon++;
    } else if (nomTouche === '-') {
        rayon--;
    }

    ctx.clearRect(0,0,500,500);
    createDamier();
    createPion(posPionX, posPionY, rayon); 
  
  }, false);