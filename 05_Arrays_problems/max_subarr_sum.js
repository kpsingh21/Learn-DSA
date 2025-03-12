// Kadane's Algorithm : Maximum Subarray Sum in an Array
let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]


// function maxSubArr(arr) {
//     let maxsum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i; j < arr.length; j++) {
//             let sum = 0
//             for (let k = i; k < j; k++) {
//                 sum += arr[k];
//                 if (maxsum < sum) {
//                     maxsum = sum;
//                 }
//             }
//         }
//     }
//     return maxsum;
// }


function maxSubarraySum(arr, n) {
    let maxi = Number.MIN_SAFE_INTEGER; // maximum sum

    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            // subarray = arr[i.....j]
            let sum = 0;

            //add all the elements of subarray:
            for (let k = i; k <= j; k++) {
                sum += arr[k];
            }

            maxi = Math.max(maxi, sum);
        }
    }

    return maxi;
}

const n = arr.length;
const maxSum = maxSubarraySum(arr, n);
console.log(`The maximum subarray sum is: ${maxSum}`);


function maxSubArr2(arr) {
    let maxsum = 0;
    for (let i = 0; i < arr.length; i++) {
        let currsum = 0;
        for (let j = i; j < arr.length; j++) {
            currsum += arr[j];
            if (maxsum < currsum) {
                maxsum = currsum;
            }
        }
    }
    return maxsum;
}

console.log(maxSubArr2(arr));


// Better Approach
function maxSubarraySum(arr, n) {
    let maxi = Number.MIN_SAFE_INTEGER; // maximum sum

    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = i; j < n; j++) {
            // current subarray = arr[i.....j]

            //add the current element arr[j]
            // to the sum i.e. sum of arr[i...j-1]
            sum += arr[j];

            maxi = Math.max(maxi, sum); // getting the maximum
        }
    }

    return maxi;
}


let maxSum2 = maxSubarraySum(arr, n);
console.log("The maximum subarray sum is: " + maxSum2);


// Kadane's Algorithm : Maximum Subarray Sum in an Array
//only +ve sum array
arr = [-2, -3, 4, -1, -2, 1, 5, -3]
function maxSubArrSumKadane(arr) {
    let maxi = Number.MIN_SAFE_INTEGER; // maximum sum
    sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum +=arr[i]
        if(sum<0){
            sum=0;
        }
        maxi = Math.max(maxi,sum)
    }
    return maxi;
}
let maxSum3 = maxSubArrSumKadane(arr);
console.log("The maximum subarray sum using Kadanes: " + maxSum3);
