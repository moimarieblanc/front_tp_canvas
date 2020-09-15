const canvas = document.getElementById('monCanvas');
const ctx = canvas.getContext('2d');

//Definition des ombres ---------------------------------------------------
// Décalage de l'ombre selon X et Y
ctx.shadowOffsetX = 2;
ctx.shadowOffsetY = 2;
// Etendue du flou
ctx.shadowBlur = 4;
// Couleur de l'ombre
ctx.shadowColor = 'black';

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

//création d'un arc de cercle  ---------------------------------------------
ctx.beginPath();
ctx.arc(80, 320, 40, 1.5*Math.PI , Math.PI , false);
ctx.lineCap = 'square';
ctx.strokeStyle = 'purple';
ctx.stroke();

//création d'un élément textuel  ---------------------------------------------
// Contour des caractères seulement
// ctx.strokeText(msg, x, y, [largeurMax]);
// Caractères pleins
// ctx.fillText(msg, x, y, [largeurMax]);

const msg = '20°C';
// Uniquement pour stokeText()
// ctx.lineWidth = 2;
ctx.font = '48px sans-serif';
ctx.textAlign = 'left';
ctx.textBaseline = 'top';
const x = 250;
const y = 180;
ctx.fillText(msg, x, y, 600);

let msgLength = ctx.measureText(msg).width;
console.log(msgLength);
ctx.beginPath();
ctx.moveTo(x, y-10); //on indique le point de départ du tracé
ctx.lineTo(x + msgLength, y-10); //on indique le point d'arrivée/passage du tracé 
ctx.strokeStyle = 'green';
ctx.lineWidth = 5;

ctx.stroke();

//L'instruction suivante permet d'effacer une zone du canevas
// ctx.clearRect(100,100,300,300);

//insersion d'une image ---------------------------------------------
const image = new Image();
image.src = "sun.jpg";
image.onload = function() {
	ctx.drawImage(this, 480, 20, 100, 100);
};