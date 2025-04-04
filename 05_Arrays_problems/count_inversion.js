// Count inversions in an array
// What is an inversion of an array? Definition: for all i & j < size of array, if i < j then you have to find pair (A[i],A[j]) such that A[j] < A[i].


// Brute Force Approach
function countInversions(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                count++;
            }
        }
    }
    return count;
}
console.log(countInversions([5,4,3,2,1]));