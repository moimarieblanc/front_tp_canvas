const canvas = document.getElementById('monCanvas');
const ctx = canvas.getContext('2d');

//tracé du rectangle rouge -----------------------------------------------------
ctx.fillStyle = 'red';
ctx.fillRect(10, 10, 200, 100);

//création d'un tracé | la cuvette ---------------------------------------------
ctx.beginPath(); //cette commande marque le débt du tracé

ctx.moveTo(100, 150); //on indique le point de départ du tracé
ctx.lineTo(200, 250); //on indique le point d'arrivée/passage du tracé 
ctx.lineTo(400, 250); //on indique le point d'arrivée/passage du tracé 
ctx.lineTo(400, 250); //on indique le point d'arrivée/passage du tracé 
ctx.lineTo(500, 150); //on indique le point d'arrivée/passage du tracé 

ctx.lineWidth = 10; 
ctx.lineCap = 'round';
ctx.strokeStyle = 'blue';
ctx.fillStyle = 'cyan';
ctx.fill();

ctx.stroke(); //le tracé a un contour, cette commande marque la fin du tracé

//création d'un double carré ---------------------------------------------
ctx.beginPath();
ctx.strokeStyle = 'black';
ctx.fillStyle = 'green';
ctx.rect(500, 300, 90, 90);
ctx.rect(450, 250, 90, 90); //les deux rectangles fusionnent et n'ont qu'un contour commun
ctx.lineWidth = 10;
ctx.stroke();
ctx.fill()


