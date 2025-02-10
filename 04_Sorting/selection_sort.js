// Selection Sort Algorithm

// concept: Select minimum and Swap 
//it will complete in (n-1) steps

// steps:
// Swap at index 0 and minimum index ( 0 to n-1 )
// till  ( n-2 ) it will happen

let array = [13, 46, 24, 52, 20, 9];

let n = array.length;

for (let i = 0; i < n - 1; i++) {
    let minIndex = i; // Assume the current element is the smallest

    for (let j = i + 1; j < n; j++) {
        if (array[j] < array[minIndex]) {
            minIndex = j; // Update index of the smallest element
        }
    }

    // Swap the smallest element found with the first element of the unsorted part
    if (minIndex !== i) {
        [array[i], array[minIndex]] = [array[minIndex], array[i]];
        console.log(i,minIndex)
        console.log(array);
    }
}

console.log(array); // Output: [9, 13, 20, 24, 46, 52]
