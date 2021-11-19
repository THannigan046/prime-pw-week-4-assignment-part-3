console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

function addItem(item){
  basket.push(item);
  return true;
}
console.log(`Basket is ${basket}`);
addItem('Garlic')
console.log('testing addItem, should say Garlic', basket);
console.log(`Basket is now ${basket}`);
addItem('Tomatoes');
addItem('explosives');
console.log('testing addItem again, should say Garlic, Tomatoes, expolsives', basket);

function listItems(array){
  for (let i=0; i < array.length; i++)
  console.log(array[i]);
}
console.log('testing listItems, should say Garlic, Tomatoes, explosives, each on a seperate line');
listItems(basket);

function empty(array){
  array.length = 0
}

empty(basket)
console.log('testing empty, should be an empty array ', basket);
