//Rotate Array by K elements
function rotateArray(arr, k) {
    let n = arr.length;
    let tempArray = [];

    // Store first k elements in tempArray
    for (let i = 0; i < k; i++) {
        tempArray[i] = arr[i];
    }

    // Shift remaining elements to the left
    for (let i = k; i < n; i++) {
        arr[i - k] = arr[i];
    }

    // Copy tempArray elements to the end
    for (let i = n - k; i < n; i++) {
        arr[i] = tempArray[i - (n - k)];
    }

    return arr;
}
// Example usage
let array = [3, 7, 8, 9, 10, 11];
let k = 3;
console.log(rotateArray(array, k)); // Output: [9, 10, 11, 3, 7, 8]

// for k > n we need to rotate for n%k times only


// optimal Approch
// For Rotating Elements to left
// Step 1: Reverse the first k elements of the array
// Step 2: Reverse the last n-k elements of the array.
// Step 3: Reverse the whole array.


//first try
// function rotateLeft(arr){
//     //first k elements
//     let n =arr.length;
//     reverse(0,k ,arr);
//     reverse(k,n,arr);
//     reverse (0,n,arr)
// };

// function reverse(start , end ,arr){
//     for (let i = start; i <=end ; i++){
//          arr[i] = arr[end-i];
//     }
//     return arr;
// }

// console.log(rotateLeft([3, 7, 8, 9, 10, 11]))


function rotateLeft(arr, k) {
    let n = arr.length;
    
    // Step 1: Reverse the first k elements
    reverse(arr, 0, k - 1);
    
    // Step 2: Reverse the last n-k elements
    reverse(arr, k, n - 1);
    
    // Step 3: Reverse the entire array
    reverse(arr, 0, n - 1);
    
    return arr;
}

// Corrected reverse function
function reverse(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]]; // Swap elements
        start++;
        end--;
    }
}

// Test
console.log(rotateLeft([3, 7, 8, 9, 10, 11], 3));  
// Output: [9, 10, 11, 3, 7, 8]
