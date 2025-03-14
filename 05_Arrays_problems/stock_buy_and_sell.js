// Stock Buy And Sell
// Problem Statement: You are given an array of prices where prices[i] is the price of a given stock on an ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

let prices = [7, 1, 5, 3, 6, 4]

//wrong handons
// function BuySellStock(prices) {
//     let buyprice = Number.MIN_SAFE_INTEGER;
//     let buyday = 0;
//     let sellprice = Number.MAX_SAFE_INTEGER;
//     let maxProfit =0;
//     for (let i = 0; i < prices.length; i++) {
//         if (prices[i] < buyprice) {
//            buyprice = prices[i];
//            buyday= i;
//         }
//     }
//     for(let i=buyday ; i<prices.length ;i++){
//           if(prices[i]>sellprice){
//             sellprice = prices[i];
//           }
//     }
//     maxProfit = Math.max(maxProfit, (sellprice-buyprice)); // getting the maximum
//     return maxProfit

// }

// console.log(BuySellStock(prices));


function BuySellStock(prices) {
    let minPrice = Number.MAX_SAFE_INTEGER; // Initialize with a very large number
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        // Update minPrice if current price is lower
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        }
        // Calculate profit if we sell at current price
        else {
            maxProfit = Math.max(maxProfit, prices[i] - minPrice);
        }
    }
    return maxProfit;
}

console.log(BuySellStock(prices)); // Output: 5


function BuySellStock2(prices) {
    let minprice = prices[0];
    let maxProfit = 0;
    for (i = 1; i < prices.length; i++) {
        let cost = prices[i]-minprice;
        maxProfit = Math.max(maxProfit,cost);
        minprice = Math.min(minprice,prices[i]);
    }
    return maxProfit;
}
console.log(BuySellStock2(prices)); // Output: 5

