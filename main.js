
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

var generateCartBT = document.getElementById('GCBT');

generateCartBT.addEventListener('click', function(){

  var num = Math.floor(Math.random() * (10 - 0) + 0);

  document.getElementById('nameOne').innerText = "Name: " + inventory[num].name;
  document.getElementById('priceOne').innerText = "Price: " + inventory[num].price;
  document.getElementById('weightOne').innerText = "Weight: " + inventory[num].weight;
  document.getElementById('imageOne').src = inventory[num].image;
  var itemOne = inventory[num];

  var num = Math.floor(Math.random() * (10 - 0) + 0);

  document.getElementById('nameTwo').innerText = "Name: " + inventory[num].name;
  document.getElementById('priceTwo').innerText = "Price: " + inventory[num].price;
  document.getElementById('weightTwo').innerText = "Weight: " + inventory[num].weight;
  document.getElementById('imageTwo').src = inventory[num].image;
  var itemTwo = inventory[num];



  var num = Math.floor(Math.random() * (10 - 0) + 0);

  document.getElementById('nameThree').innerText = "Name: " + inventory[num].name;
  document.getElementById('priceThree').innerText = "Price: " + inventory[num].price;
  document.getElementById('weightThree').innerText = "Weight: " + inventory[num].weight;
  document.getElementById('imageThree').src = inventory[num].image;
  var itemThree = inventory[num];



  var num = Math.floor(Math.random() * (10 - 0) + 0);

  document.getElementById('nameFour').innerText = "Name: " + inventory[num].name;
  document.getElementById('priceFour').innerText = "Price: " + inventory[num].price;
  document.getElementById('weightFour').innerText = "Weight: " + inventory[num].weight;
  document.getElementById('imageFour').src = inventory[num].image;
  var itemFour = inventory[num];




  console.log('TeSTING')
  console.log(num);


});

console.log('TeSTING2')
