// Problem : Reverse a given Array
//without Recursion;
function reverseArray(arr) {
    let newArray = [];
    for (let i = arr.length - 1; i >= 0; i--) { // Fix the loop condition
        newArray.push(arr[i]);
    }
    return newArray;
}
// const arr = [5, 4, 3, 2, 1];
// console.log(reverseArray(arr)); // Output: [1, 2, 3, 4, 5]

//With Recursion
function reverseArrayUsingRecursion(arr, i = arr.length - 1, newArray = []) {
    if (i < 0) return newArray; // Base case: Stop when index becomes negative

    newArray.push(arr[i]); // Add the current element from the end
    return reverseArrayUsingRecursion(arr, i - 1, newArray); // Recursive call with decremented index
}

const arr = [5, 4, 3, 2, 1];
console.log(reverseArrayUsingRecursion(arr)); // Output: [1, 2, 3, 4, 5]


function reverseArrayUsingRecursionSwap(arr2, start = 0, end = arr.length - 1) {
    if (start >= end) {
        return arr2; // Base case: Stop when start crosses end
    }

    // Swap elements at start and end indices
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    return reverseArrayUsingRecursionSwap(arr, start + 1, end - 1); // Recursive call
}

const arr2 = [5, 4, 3, 2, 1];
console.log(reverseArrayUsingRecursionSwap(arr)); // Output: [1, 2, 3, 4, 5]


function reverseArrayUsingOneVar(arr3, i = 0) {
    let n = arr3.length - 1 - i; // Calculate the opposite index dynamically

    if (i >= n) {
        return arr; // Base case: Stop when indices cross
    }

    // Swap elements
    [arr[i], arr[n]] = [arr[n], arr[i]];

    return reverseArrayUsingOneVar(arr3, i + 1); // Recursive call with incremented index
}

const arr3 = [5, 4, 3, 2, 1,0];
console.log(reverseArrayUsingOneVar(arr3)); // Output: [1, 2, 3, 4, 5]


//Problem: Check if the given String is Palindrome or not