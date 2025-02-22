const arr = [1, 2, 4, 7, 7, 5];

let smallest_no = arr[0]; // Initialize with the first element
let second_smallest = Number.MAX_VALUE

for (let i = 0; i < arr.length; i++) { // Start loop from index 1
  if (arr[i] <  smallest_no) {
       second_smallest = smallest_no
       smallest_no = arr[i]; 
  }
  else if ( arr[i] != smallest_no && arr[i] < second_smallest){
        second_smallest = arr[i];
  }
}


console.log("smallest_no:", smallest_no);
console.log("sec smallest no:", second_smallest);