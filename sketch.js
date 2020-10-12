var dog, happyDog,foodObj;
var database;
var foodS, foodStock;
var fedTime, lastFed
var foodStock= 24;
function preload()
{
dog = loadImage("Dog.png");
happyDog = loadImage("happyDog.png");
}

function setup() {
  
  database = firebase.database();
  console.log(database);
  createCanvas(800, 700);
  dog = createSprite(400,300);
foodObj= new Food();
}


function draw() {  
  background("green")
if(keywentDown(DOWN_ARROW)){
 writeStock(foodS);
dog.addImage(happyDog);
}
else if(keyDown(UP_ARROW)){
  addFood();
  hour();
}
  drawSprites();
  text("Food Stock"+foodS,width-300,50);
  noStroke();
  textSize(35);
  fill("white")

}
function readStock(data){
foodS=data.val();
}

function writeStock(x){

database.ref('/').update({
Food:x
})
}

function addFood(){
  foodS+1;
  }
  function hour(){
    foodS=data.val();
    }

