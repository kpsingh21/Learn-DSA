// Second Largest Element in an Array without sorting

const arr = [1, 2, 4, 7, 7, 5];

let largest_no = arr[0];
let second_largest = -1;

for (let i = 1; i < arr.length; i++) {  // Start from index 1
  if (arr[i] > largest_no) {
    second_largest = largest_no;  // Previous largest becomes second largest
    largest_no = arr[i];  // Update largest
  }
 else if (arr[i] > second_largest && arr[i] !== largest_no) {
    console.log(arr[i]);
    second_largest = arr[i];  // Update second largest if a smaller number is found
  }
}

console.log("Largest number:", largest_no);
console.log("Second largest number:", second_largest);
