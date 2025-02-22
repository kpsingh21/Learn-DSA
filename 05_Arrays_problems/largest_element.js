// Find the Largest element in an array
// Using a max variable

const arr = [3, 2, 5, 7, 8, 1];

let largest_no = arr[0]; // Initialize with the first element

for (let i = 0; i < arr.length; i++) { // Start loop from index 1
  if (arr[i] > largest_no) {
    largest_no = arr[i]; // Update largest_no if a larger value is found
  }
}

console.log("Largest number:", largest_no);


//Using Sorting

