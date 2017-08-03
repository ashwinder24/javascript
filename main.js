// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1 () {
let total = 0;
for (let i = 0; i < data.length; i++){

  sum = total += data[i].price / data.length;
  }

  console.log(sum);

}
//  Return aver;





// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {

  for (let i = 0; i < data.length; i++){
    cost = data[i].price;
      items = data[i].title;
    if (cost >= 14 && cost <=18){
    // cost >= 14 && cost <=18);
    console.log(items);
  }
}  //  if
//      return data.title[]
  //  }
  // }

  // Answer:
}



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  for (let i = 0; i < data.length; i++){
    cost = data[i].price;
    items = data[i].title;
    currencyType = data[i].currency_code;
    if (currencyType === "GBP"){

    console.log(items,cost);}
  }// Answer:
}


// 4: Display a list of all items who are made of wood.
function question4 () {
  // Answer:for (let i = 0; i < data.length; i++){
  for (let i = 0; i < data.length; i++){
    items = data[i].title;
    for (let j = 0; j < data[i].materials.length; j++) {  
      materialType = data[i].materials[j];
    
    //type = materialType[j];
    if (materialType === "wood"){

    console.log(items + " is made of wood.");}
    }
  }
}


// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
    for (let i = 0; i < data.length; i++){
         items = data[i].title;
         itemsNumber = data[i].state;
        
    for (let j = 0; j < data[i].materials.length; j++) {  
        items = data[i].title;
      materialType = data[i].materials[j].length;
    
    //type = materialType[j];
    if (materialType >= 8){

    console.log(items);}
    }
  }
  // Answer:
}


// 6: How many items were made by their sellers?
// Answer:
function question6 () {
  for (let i = 0; i < data.length; i++){

    composer = data[i].who_made;
    if (composer === "i_did"){
sellerItems = composer.length;
      console.log(sellerItems);}
  }
}
