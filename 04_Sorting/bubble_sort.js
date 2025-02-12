// Bubble Sort Algorithm
// push the max to the last by adjacent swap (pair of two ,three ..)

// Problem Statement: Given an array of N integers, write a program to implement the Bubble Sorting algorithm.
let array = [13, 46, 24, 52, 20, 9]; // Expected output: [9, 13, 20, 24, 46, 52]
let N = array.length; // Get the length of the array

for (let i = N - 1; i > 0; i--) { // Loop through the array from end to start
    for (let j = 0; j < i; j++) { // Compare adjacent elements
        if (array[j] > array[j + 1]) { 
            // Swap elements if they are in the wrong order
            [array[j], array[j + 1]] = [array[j + 1], array[j]];
        }
    } 
    // console.log(array); // Log the array after each pass
}

console.log("Sorted Array:", array); // Final sorted array output

// Time complexity n^2