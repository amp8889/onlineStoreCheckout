
document.querySelector('html').className = 'js';

const anchorOne = {name:"Blue Devil1", price:45.99, weight:50, image:"blue"};
const anchorTwo = {name:"Blue Devil2", price:"Doe", weight:50, image:"blue"};
const anchorThree = {name:"Blue Devil3", price:"Doe", weight:50, image:"blue"};
const anchorFour = {name:"Blue Devil4", price:"Doe", weight:50, image:"blue"};
const anchorFive = {name:"Blue Devil5", price:"Doe", weight:50, image:"blue"};
const anchorSix = {name:"Blue Devil6", price:"Doe", weight:50, image:"blue"};
const anchorSeven = {name:"Blue Dev7il", price:"Doe", weight:50, image:"blue"};
const anchorEight = {name:"Blue Devil8", price:"Doe", weight:50, image:"blue"};
const anchorNine = {name:"Blue Devil9", price:"Doe", weight:50, image:"blue"};
const anchorTen = {name:"Blue Devil10", price:"Doe", weight:50, image:"blue"};


const inventory = [anchorOne, anchorTwo, anchorThree, anchorFour, anchorFive, anchorSix, anchorSeven, anchorEight, anchorNine, anchorTen];

var generateCartBT = document.getElementById('GCBT');

generateCartBT.addEventListener('click', function(){

  var num = Math.floor(Math.random() * (10 - 0) + 0);

  document.getElementById('nameOne').innerText = "Name: " + inventory[num].name;
  document.getElementById('priceOne').innerText = "Price: " + inventory[num].price;
  document.getElementById('weightOne').innerText = "Weight: " + inventory[num].weight;

  var num = Math.floor(Math.random() * (10 - 0) + 0);

  document.getElementById('nameTwo').innerText = "Name: " + inventory[num].name;
  document.getElementById('priceTwo').innerText = "Price: " + inventory[num].price;
  document.getElementById('weightTwo').innerText = "Weight: " + inventory[num].weight;

  var num = Math.floor(Math.random() * (10 - 0) + 0);

  document.getElementById('nameThree').innerText = "Name: " + inventory[num].name;
  document.getElementById('priceThree').innerText = "Price: " + inventory[num].price;
  document.getElementById('weightThree').innerText = "Weight: " + inventory[num].weight;

  var num = Math.floor(Math.random() * (10 - 0) + 0);

  document.getElementById('nameFour').innerText = "Name: " + inventory[num].name;
  document.getElementById('priceFour').innerText = "Price: " + inventory[num].price;
  document.getElementById('weightFour').innerText = "Weight: " + inventory[num].weight;


  console.log('TeSTING')
  console.log(num);


});

console.log('TeSTING2')
