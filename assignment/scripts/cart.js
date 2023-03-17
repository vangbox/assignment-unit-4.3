console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!


//start of cart system

//basket variable / array
let basket = [];

//Create a function called addItem. It should:
//take an input parameter for a string item
//add the new item to the global array basket.
//return true indicating the item was added

function addItem(grocery){
    //console.log("in addItem", grocery);
    //push grocery into basket
    basket.push(grocery);
    return true; 
}

//add items into basket
addItem('Salad');
addItem('Milk');
addItem('Meat');
addItem('Cheese');
addItem('apples');
addItem('pears');

//log
console.log(basket);
console.log(addItem('Bread'));
console.log(basket);

//Create a function called listItems. It should:
//loop over the items in the basket array
//console.log each individual item on a new line
function listItems(){
    for(let i = 0; i < basket.length; i++) {
            console.log(basket[i]);
    }
}

listItems();

//Create a function called empty. It should:
//reset the basket to an empty array

function empty(){
    console.log('in empty test');
    for(let i = basket.length + 1; i > basket.length; i--){
        basket.pop(basket[i]);
    }
}

empty();
console.log(basket);