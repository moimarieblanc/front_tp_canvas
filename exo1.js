const myCanvas = document.getElementById('myCanvas');
const ctx = myCanvas.getContext('2d');
// console.log(myCanvas);

const tab = [];
console.log(localStorage.getItem("tab"));

//fonction générant une couleur aléatoire en hexadécimal
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }  

//get bounding client rect pour la position Dans le canevas ?

//écoute de l'évênement click sur le canevas   
myCanvas.addEventListener('click', function(event) {
    posX = event.clientX;
    posY = event.clientY;
    max = 20;
    min = 200;

    const myRandom = Math.random() * (max - min) + min;
    const myColor = getRandomColor();

    //création d'un arc de cercle  
    ctx.beginPath();
    ctx.arc(posX, posY, myRandom, 0, 2 * Math.PI);
    ctx.strokeStyle = myColor;
    ctx.lineWidth = 2; 
    ctx.stroke();

    
    const circle = { centreX: posX, centreY: posY, rayon: myRandom, couleur: myColor }; 
    tab.push(circle);
    // console.log(tab);

    let s = JSON.stringify(tab);
    localStorage.setItem("tab", s);

    // console.log(localStorage.getItem("tab"));

})

//récupération des données sauvergardées au rechargement de la page
if(localStorage.getItem("tab")) {
    const savedCircles = JSON.parse(localStorage.getItem("tab"));
    
    for(let circle of savedCircles) {
        //création d'un arc de cercle  
        ctx.beginPath();
        ctx.arc(circle.centreX, circle.centreY, circle.rayon, 0, 2 * Math.PI);
        ctx.strokeStyle = circle.couleur;
        ctx.lineWidth = 2; 
        ctx.stroke();
    } 

}



//bouton reset 
const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', function(){
    localStorage.clear();
    ctx.clearRect(0,0,800,650);

})

