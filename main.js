
document.querySelector('html').className = 'js';

const anchorOne = {name:"4 Pronged Glory", price:45.99, weight:87, image:"assets/4Prong.jpg"};
const anchorTwo = {name:"Built for a Battleship", price:1699.99, weight:762, image:"assets/battleShip.jpg"};
const anchorThree = {name:"Black Pearl", price:75.99, weight:45, image:"assets/blackPearl.jpg"};
const anchorFour = {name:"Oceans Gem", price:450.99, weight:120, image:"assets/blueOcean.jpg"};
const anchorFive = {name:"Modern", price:49.99, weight:35, image:"assets/modern.jpg"};
const anchorSix = {name:"Pirates Treasure", price:12000.99, weight:12, image:"assets/PiratesBounty.jpeg"};
const anchorSeven = {name:"Rusted Beauty", price:9.99, weight:63, image:"assets/rustedBeauty.jpg"};
const anchorEight = {name:"The Grappler", price:29.99, weight:55, image:"assets/theGrapplingHook.jpg"};
const anchorNine = {name:"The Spoon", price:43.99, weight:88, image:"assets/theSpoon.jpg"};
const anchorTen = {name:"Wooden Master", price:7.99, weight:5, image:"assets/woodenMaster.jpg"};


const inventory = [anchorOne, anchorTwo, anchorThree, anchorFour, anchorFive, anchorSix, anchorSeven, anchorEight, anchorNine, anchorTen];

var numOne = Math.floor(Math.random() * (10 - 0) + 0);
var numTwo = Math.floor(Math.random() * (10 - 0) + 0);
var numThree = Math.floor(Math.random() * (10 - 0) + 0);
var numFour = Math.floor(Math.random() * (10 - 0) + 0);

var itemOne = inventory[numOne];
var itemTwo = inventory[numTwo];
var itemThree = inventory[numThree];
var itemFour = inventory[numFour];




function cart(){


  try{
  var num = Math.floor(Math.random() * (10 - 0) + 0);

  document.getElementById('nameOne').innerText = "Name: " + inventory[numOne].name;
  document.getElementById('priceOne').innerText = "Price: " + inventory[numOne].price;
  document.getElementById('weightOne').innerText = "Weight: " + inventory[numOne].weight;
  document.getElementById('imageOne').src = inventory[numOne].image;
  var itemOne = inventory[numOne];

  var num = Math.floor(Math.random() * (10 - 0) + 0);

  document.getElementById('nameTwo').innerText = "Name: " + inventory[numTwo].name;
  document.getElementById('priceTwo').innerText = "Price: " + inventory[numTwo].price;
  document.getElementById('weightTwo').innerText = "Weight: " + inventory[numTwo].weight;
  document.getElementById('imageTwo').src = inventory[numTwo].image;
  var itemTwo = inventory[numTwo];



  var num = Math.floor(Math.random() * (10 - 0) + 0);

  document.getElementById('nameThree').innerText = "Name: " + inventory[numThree].name;
  document.getElementById('priceThree').innerText = "Price: " + inventory[numThree].price;
  document.getElementById('weightThree').innerText = "Weight: " + inventory[numThree].weight;
  document.getElementById('imageThree').src = inventory[numThree].image;
  var itemThree = inventory[numThree];



  var num = Math.floor(Math.random() * (10 - 0) + 0);

  document.getElementById('nameFour').innerText = "Name: " + inventory[numFour].name;
  document.getElementById('priceFour').innerText = "Price: " + inventory[numFour].price;
  document.getElementById('weightFour').innerText = "Weight: " + inventory[numFour].weight;
  document.getElementById('imageFour').src = inventory[numFour].image;
  var itemFour = inventory[numFour];
}
catch(err){

}

}


document.addEventListener("load", cart());



try{






var contOneButton = document.getElementById('cont_one');

contOneButton.addEventListener('click', function(){

  location.href = "../payment/";


});
}
catch(err){
}








try{
var contTwoButton = document.getElementById('cont_two');

contTwoButton.addEventListener('click', function(){

  console.log("Worked")
  location.href = "../shipping/";


});

var backOneButton = document.getElementById('back_one');

backOneButton.addEventListener('click', function(){

  console.log("Worked")
  location.href = "../";


});
}
catch(err){
}











try{
var contThreeButton = document.getElementById('cont_three');

contThreeButton.addEventListener('click', function(){

  location.href = "../review/";







});



var backTwoButton = document.getElementById('back_two');

backTwoButton.addEventListener('click', function(){

  console.log("Worked")
  location.href = "../payment/";


});
}
catch(err){
}

try{
var backThreeButton = document.getElementById('back_three');

backThreeButton.addEventListener('click', function(){

  console.log("Worked")
  location.href = "../shipping/";


});

var viewOrderButton = document.getElementById('view_order');

viewOrderButton.addEventListener('click', function(){

  console.log("Final Button")
  document.getElementById('item_one_final').innerText = itemOne.name;
  document.getElementById('item_two_final').innerText = itemTwo.name;
  document.getElementById('item_three_final').innerText = itemThree.name;
  document.getElementById('item_four_final').innerText = itemFour.name;






});





}
catch(err){
}




function run(){


  console.log("On load Worked")
  document.getElementById('item_one_final').innerText = itemOne.name + "       " + itemOne.price;
  document.getElementById('item_two_final').innerText = itemTwo.name + "       " + itemTwo.price
  document.getElementById('item_three_final').innerText = itemThree.name + "       " + itemThree.price
  document.getElementById('item_four_final').innerText = itemFour.name + "       " + itemFour.price




}

document.addEventListener("load", run());














console.log('TeSTING2')
