
document.querySelector('html').className = 'js';

const anchorOne = {name:"Blue Devil", price:45.99, weight:50, image:"blue"};
const anchorTwo = {name:"Blue Devil", price:"Doe", weight:50, image:"blue"};
const anchorThree = {name:"Blue Devil", price:"Doe", weight:50, image:"blue"};
const anchorFour = {name:"Blue Devil", price:"Doe", weight:50, image:"blue"};
const anchorFive = {name:"Blue Devil", price:"Doe", weight:50, image:"blue"};
const anchorSix = {name:"Blue Devil", price:"Doe", weight:50, image:"blue"};
const anchorSeven = {name:"Blue Devil", price:"Doe", weight:50, image:"blue"};
const anchorEight = {name:"Blue Devil", price:"Doe", weight:50, image:"blue"};
const anchorNine = {name:"Blue Devil", price:"Doe", weight:50, image:"blue"};
const anchorTen = {name:"Blue Devil", price:"Doe", weight:50, image:"blue"};


const inventory = [anchorOne, anchorTwo, anchorThree, anchorFour, anchorFive, anchorSix, anchorSeven, anchorEight, anchorNine, anchorTen];

var generateCartBT = document.getElementById('GCBT');

generateCartBT.addEventListener('click', function(){

  document.getElementById('nameOne').innerText = "Name: " + anchorOne.name;
  document.getElementById('priceOne').innerText = "Price: " + anchorOne.price;
  document.getElementById('weightOne').innerText = "Weight: " + anchorOne.weight;

  console.log('TeSTING')


});

console.log('TeSTING2')
