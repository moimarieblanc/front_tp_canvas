const myCanvas = document.getElementById('myCanvas');
const ctx = myCanvas.getContext('2d');
console.log(myCanvas);

myCanvas.addEventListener('click', function(event) {
    posX = event.clientX;
    posY = event.clientY;

    //création d'un arc de cercle  ---------------------------------------------
ctx.beginPath();
ctx.arc(posX, posY, 40, 0, 2 * Math.PI);
ctx.strokeStyle = 'purple';
ctx.stroke();

})