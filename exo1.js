const myCanvas = document.getElementById('myCanvas');
const ctx = myCanvas.getContext('2d');
console.log(myCanvas);

//fonction générant une couleur aléatoire en hexadécimal
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }  
  
myCanvas.addEventListener('click', function(event) {
    posX = event.clientX;
    posY = event.clientY;
    max = 20;
    min = 200;

    const myRandom = Math.random() * (max - min) + min;

    //création d'un arc de cercle  ---------------------------------------------
    ctx.beginPath();
    ctx.arc(posX, posY, myRandom, 0, 2 * Math.PI);
    ctx.strokeStyle = getRandomColor();
    ctx.lineWidth = 2; 
    ctx.stroke();

})