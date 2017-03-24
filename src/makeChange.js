//  export default function makeChange(price, amountGiven) {
//    var change;   
//    if (price > amountGiven)
//  {
//  	change = 0;
//  	console.log(change)
//  }
//  else
//  {
//  	change = amountGiven - price;
 
//  }
//  return change;
// }
// makeChange(1000, 9999, callback);

// // function returnCurrencies(baseCoins)
// // {
// //   //Number of bigCoins can be found by subtracting the remainder of % 10000 then dividing by 10000
// //   var bigCoins = (baseCoins - (baseCoins % 10000))/10000;
// //   //Now take off the bigCoins from the input
// //   baseCoins %= 10000;
// //   //Same for medCoins, but with 100
// //   var medCoins = (baseCoins - (baseCoins % 100))/100;
// //   //Now take off the medCoins from the input
// //   baseCoins %= 100;
// //   var smallCoins = (baseCoins - (baseCoins % 25))/25;
// //   //Now take off the medCoins from the input
// //   baseCoins %= 100;
// //   //Whatever is left is the small coins
// //   return [bigCoins, medCoins, smallCoins, baseCoins];
// // }
// // returnCurrencies(100);

// I didn't write this code; I pivoted into JS fundamentals; I'll retry soon.
export default function makeChange({price, amountGiven}) {
      // your code here
let coins = {quarters: 25, dimes: 10, nickels: 5, pennies: 1 }
let changeDue = amountGiven - price

    for(let key in coins) {
        let numberOfCoins = Math.floor(changeDue / coins[key]) 
        /*takes the changeDue divides it by coin section of quarters (25) resulting in a 
        decimal of 1.64, then Math.floor round down to the nearest integer which is 
        1 (<= the given number) and assigns it to the variable numberOfCoins.
          */
        changeDue -= coins[keys] * numberOfCoins

        coins[key] = numberOfCoins
  
    }
    return coins
}
```

