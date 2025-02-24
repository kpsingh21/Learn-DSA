// Check if an Array is Sorted
// Brute Force Approach

function isSorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) { // Fix: Loop runs till arr.length - 1
        if (arr[i] <= arr[i + 1]) { 
            console.log("i:", i);
            console.log("arr[i]:", arr[i]);
        } else {
            return false; // If any element is greater than the next one, return false
        }
    }
    return true; // If loop completes without returning false, the array is sorted
}

let arr = [1, 2, 3, 4, 5];
// console.log(isSorted(arr)); // true

let arr2 = [1, 3, 2, 4, 5];
console.log(isSorted(arr2)); // false
