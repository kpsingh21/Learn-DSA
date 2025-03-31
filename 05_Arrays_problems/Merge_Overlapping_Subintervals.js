// Merge Overlapping Subintervals
// Problem Statement: Given an arra{
// y of intervals, merge all the overlapping intervals and return an array of non-overlapping intervals.

// function mergeOverlappingSubInt(arr) {
//     let listofSubintervals = [];
//     for (let i = 0; i < arr.length; i++) {
//         let interval = arr[i];
//         for (let j = 0; j < arr.length; j++) {
//            if(arr[j][0]< arr[i][1]){
//             arr[i][1]=arr[j][1]
//            }
//         }
//     }
// }


function mergeOverlappingIntervals(arr) {
    const n = arr.length; // size of the array
  
    //sort the given intervals:
    arr.sort((a, b) => a[0] - b[0]);
  
    const ans = [];
  
    for (let i = 0; i < n; i++) { // select an interval:
      let start = arr[i][0];
      let end = arr[i][1];
  
      //Skip all the merged intervals:
      if (ans.length && end <= ans[ans.length - 1][1]) {
        continue;
      }
  
      //check the rest of the intervals:
      for (let j = i + 1; j < n; j++) {
        if (arr[j][0] <= end) {
          end = Math.max(end, arr[j][1]);
        } else {
          break;
        }
      }
      ans.push([start, end]);
    }
    return ans;
  }