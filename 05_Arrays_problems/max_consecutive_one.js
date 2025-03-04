// Count Maximum Consecutive One's in the array
// Problem Statement: Given an array that contains only 1 and 0 return the count of maximum consecutive ones in the array.
let arr = [1, 1, 0, 1, 1, 1]

function countone(arr) {
    let maxcount = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 1) {
            count++;
            if (count > maxcount) {
                maxcount = count;
            }
        } else {
            count = 0;
        }
    }
    return maxcount;
}
console.log(countone([1, 1, 0, 1, 1, 1]));
console.log(countone([1, 0, 1, 1, 0]));
console.log(countone([1, 1, 0, 1, 1, 1, 0, 1, 1]));
//Time complexity : o(N)




