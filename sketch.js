var dog,sadDog,happyDog;
var foodObj;
var feed,add;
var database;
var foodS;


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  foodObj = new Food();

  feed=createButton("Feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog)

  add=createButton("Add Food");
  add.position(800,95);
  add.mousePressed(addFood);

}

function draw() {
  database = firebase.database();
 // console.log(database);
  background(46,139,87);

  foodObj.display();

  drawSprites();
}

//function to read food Stock


//function to update food stock and last fed time


//function to add food in stock
function addFood(){
foodS++
database.ref('/').update({food:foodS})
}

function feedDog(){
dog.addImage(happyDog);

if(foodObj.getFoodStock()<= 0){
  foodObj.updateFoodStock(foodObj.getFoodStock()*0);
} else{
  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
}


}