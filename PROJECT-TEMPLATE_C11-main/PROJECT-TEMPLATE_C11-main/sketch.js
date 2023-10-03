var navio, movimentonavio;
var mar;
var canvas;

//Carregar imagens/sons/animações
function preload() {
  agua = loadImage('data/sea.png');
  movimentonavio = loadAnimation('data/ship-1.png', 'data/ship-2.png', 'data/ship-3.png', 'data/ship-4.png');
  
}


//configurações do jogo
function setup() {
  
  canvas = createCanvas(800, 400);
  canvas.center();

  mar= createSprite(40,80,800,20);
  mar.addImage(agua);
  mar.scale=0.4

  navio = createSprite(350, 160, 20, 50);
  navio.addAnimation("movendo", movimentonavio);
  navio.scale = 0.2

  
  //image(mar,300,330,600,20);
  // mar.scale= 1
}

//executa o tempo todo
function draw() {
  background("blue");

  if(mar.x  < 0){
    mar.x = mar.width/2;
  }

  drawSprites();
}