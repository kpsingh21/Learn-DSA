// Remove Duplicates in-place from Sorted Array

let arr = [1, 1, 2, 2, 2, 3, 3];

for (let i = arr.length - 1; i > 0; i--) { // Iterate backwards
  if (arr[i] === arr[i - 1]) {
    arr.splice(i, 1); // Remove duplicate
  }
}

console.log(arr); // Output: [1, 2, 3]


// When you remove an element using splice(i, 1), the next element shifts left, but i still increments.
// This causes some duplicate values to be skipped.
// for (let i = 1; i <= arr.length -1 ; i++) { // Iterate backwards
//     if (arr[i] === arr[i - 1]) {
//       arr.splice(i, 1); // Remove duplicate
//       console.log("arr",arr);
//     }
//   }
  
//   console.log(arr); // Output: [ 1, 2, 2, 3 ]