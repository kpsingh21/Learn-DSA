// Count Reverse Pairs
//Problem Statement: Given an array of numbers, you need to return the count of reverse pairs. Reverse Pairs are those pairs where i<j and arr[i]>2*arr[j].

// Brute Force Approach
function countReversePairs(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (j = i + 1; j < arr.length; j++) {
            if (arr[i] > 2*arr[j]) {
                count++;
            }
        }
    }
    return count;
}
console.log(countReversePairs([1,3,2,3,1]));