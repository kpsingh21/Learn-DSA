function printAllPermutations(arr, start = 0) {
    if (start === arr.length - 1) {
        console.log(arr.slice()); // Print a copy of the array
        return;
    }

    for (let i = start; i < arr.length; i++) {
        swap(arr, start, i);              // Swap current element with start
        printAllPermutations(arr, start + 1); // Recur for next index
        swap(arr, start, i);              // Backtrack (restore original array)
    }
}

// Helper function to swap elements in the array
function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

// Example usage
let arr = [1, 2, 3];
printAllPermutations(arr);


function printAllPermutations(arr) {
    let used = new Map(); // Track used indices
    let result = [];      // Current permutation
    let permutations = []; // Store all permutations

    function backtrack() {
        if (result.length === arr.length) {
            permutations.push([...result]); // Store a copy of the current permutation
            return;
        }

        for (let i = 0; i < arr.length; i++) {
            if (!used.has(i)) { // If arr[i] is not used
                used.set(i, true);  // Mark it as used
                result.push(arr[i]); // Add to permutation

                backtrack(); // Recursive call

                // Backtrack step (Undo last choice)
                result.pop();
                used.delete(i);
            }
        }
    }

    backtrack();
    console.log(permutations);
}

printAllPermutations([1, 2, 3]);
