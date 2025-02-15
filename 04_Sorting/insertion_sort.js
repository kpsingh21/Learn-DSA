//Insertion Sort Algorithm
// take an element & place it in its current order.
// start it by taking first element and consider the length also one of the array

let array = [13, 46, 24, 52, 20, 9];
let n = array.length;

for (let i = 0; i < n - 1; i++) { 
    let j = i+1 ;  // Pick the next element to place correctly

    while (j > 0 && array[j - 1] > array[j]) {
        [array[j - 1], array[j]] = [array[j], array[j - 1]]; // Swap the elements
        j--;  // Move left
    }

    console.log(`After iteration ${i + 1}:`, array); // To visualize sorting step-by-step
}

console.log("Final sorted array:", array);
