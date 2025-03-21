// Count Subarray sum Equals K
// Problem Statement: Given an array of integers and an integer k, return the total number of subarrays whose sum equals k.

function countSubArrwithSumK(arr, givensum) {
    let noofSubArr = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            let sum = 0;
            for (let k = i; k <= j; k++) {
                sum += arr[k];
            }
            if (sum == givensum) {
                noofSubArr += 1;
            }
        }
    }
    return noofSubArr;
}
console.log(countSubArrwithSumK([3, 1, 2, 4], 6))//2


//optimal Approch:
function countSubArrwithSumK2(arr, givensum) {
    let noofSubArr = 0;
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i; j < arr.length; j++) {
            sum += arr[j];
            if (sum == givensum) {
                noofSubArr += 1;
            }
        }
    }
    return noofSubArr;
}
console.log(countSubArrwithSumK2([3, 1, 2, 4], 6))//2