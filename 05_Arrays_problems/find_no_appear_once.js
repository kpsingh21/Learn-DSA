// Find the number that appears once, and the other numbers twice
// Problem Statement: Given a non-empty array of integers arr, every element appears twice except for one. Find that single one.

let arr = [4, 1, 2, 1, 2]
for (let i = 0; i < arr.length; i++) {
    let freq = 0;
    let element = arr[i];
    for (let j = 0; j < arr.length; j++) {
        if (arr[j]==element &&  i !== j){
            freq++;
        }
    }
    if(freq == 0){ // ignoring that element
        // return a[i];
        console.log("no",arr[i]);
    }
}


//same brute force approch with freq =1;
//Time complexity: O(N^2)
function getSingleElement(arr) {
    // Size of the array:
    const n = arr.length;
  
    // Run a loop for selecting elements:
    for (let i = 0; i < n; i++) {
      const num = arr[i]; // selected element
      let cnt = 0;
  
      // Find the occurrence using linear search:
      for (let j = 0; j < n; j++) {
        if (arr[j] === num) {
          cnt++;
        }
      }
  
      // If the occurrence is 1, return the number:
      if (cnt === 1) {
        return num;
      }
    }
  
    // This line will never execute
    // if the array contains a single element.
    return -1;
  }
  
  function main() {
    const arr = [4,4,5, 1, 2, 1, 2];
    const ans = getSingleElement(arr);
    console.log("The single element is:", ans);
  }
  
  main();
  
  
  




