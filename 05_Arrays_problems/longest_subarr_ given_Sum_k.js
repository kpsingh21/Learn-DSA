// Longest Subarray with given Sum K
//Array is called sub array when it is contagious part of the array means we can not take random index no and say it s sub array
// Problem Statement: Given an array and a sum k, we need to print the length of the longest subarray that sums to k.

// let array = [2, 3, 5, 1, 9]
// let longestarrsize = 0;
// let sum = 0;
// function longsubarray(array, givensum) {
//     for (let i = 0; i < array.length; i++) {
//         for (let j = i; j < array.length; j++) {
//             for (let k = i; k <= j; k++) {
//                 sum += array[k]
//                 if(sum == givensum ){
//                    return Math.max(longestarrsize,j-i+1)
//                 }
//             }
//         }
//     }
// }

// console.log(longsubarray(array,5));


function getLongestSubarray(a, k) {
    let n = a.length; // size of the array

    let len = 0;
    for (let i = 0; i < n; i++) { // starting index
        for (let j = i; j < n; j++) { // ending index
            // add all the elements of subarray = a[i...j]
            let s = 0;
            for (let K = i; K <= j; K++) {
                s += a[K];
            }

            if (s === k)
                len = Math.max(len, j - i + 1);
        }
    }
    return len;
}

let a = [2, 3, 5, 1, 9];
let k = 10;
let len = getLongestSubarray(a, k);
console.log("The length of the longest subarray is:", len);



function longsubarray(array, givensum) {
    let longestarrsize = 0;

    for (let i = 0; i < array.length; i++) {
        let sum = 0; // Reset sum for each starting index

        for (let j = i; j < array.length; j++) {
            sum += array[j]; // Accumulate sum

            if (sum == givensum) {
                longestarrsize = Math.max(longestarrsize, j - i + 1);
            }
        }
    }

    return longestarrsize; // Return longest length found
}

let array = [2, 3, 5, 1, 9];
console.log(longsubarray(array, 5)); // Output: 2 (subarray [2,3])


//hands on,
function longestsubarray3(arr, givensum) {
    let presummap = new Map();
    let longestarrsize = 0;
    let presum = 0;
    for (let i = 0; i < arr.length; i++) {
        presum += arr[i];
        presummap.set(presum, i); //If a sum appears multiple times in the prefix sum map, storing only the first occurrence ensures that we get the longest subarray rather than a shorter one.
        if (presum == givensum) {
            longestarrsize = Math.max(longestarrsize, (i + 1))
        }
        // if (presummap.get((presum - givensum))) {
        if (presummap.has((presum - givensum))) {
            // let k = presummap[(presum - givensum)]
            let len = i - presummap.get((presum - givensum));
            longestarrsize = Math.max(longestarrsize, len)
        }
    }
    return longestarrsize;
}

console.log("usinghashmap", longestsubarray3([2, 3, 5, 1, 9], 10)); // Output: 3 (subarray [2,3,5])

//rephrase logic using hasmap
//this code can not be further optimize for array that have postive neg and zeroes but for the array consist only postive we can optimize it
function getLongestSubarray(a, k) {
    let n = a.length; // size of the array

    let preSumMap = new Map();
    let sum = 0;
    let maxLen = 0;
    for (let i = 0; i < n; i++) {
        // calculate the prefix sum till index i
        sum += a[i];

        // if the sum = k, update the maxLen
        if (sum === k) {
            maxLen = Math.max(maxLen, i + 1);
        }

        // calculate the sum of remaining part i.e. x - k
        let rem = sum - k;

        // calculate the length and update maxLen
        if (preSumMap.has(rem)) {
            let len = i - preSumMap.get(rem);
            maxLen = Math.max(maxLen, len);
        }

        // update the map checking the conditions
        if (!preSumMap.has(sum)) {
            preSumMap.set(sum, i);
        }
    }

    return maxLen;
}



console.log("getLongestSubarray", getLongestSubarray([2, 0, 0, 0, 3], 3)); // Output: 4 [0,0,0,3]
console.log("getLongestSubarrayfor neg", getLongestSubarray([-1, 1, 0, 1], 1)); // Output: 5


//as this function we are not checking is it present or not the sum and setting it so in case of zero we are not able to get the longest array
console.log("longestsubarray3", longestsubarray3([2, 0, 0, 0, 3], 3)); // Output: 4 [0,0,0,3]


//Optimal Sol using two pointer

//hands on :
function getLongestSubarrayUsingTwoPointer(arr, givensum) {

    let sum = 0;
    let i = 0;
    let j = 0;
    let len = 0;
    while (i < arr.length && j < arr.length) {
        sum += arr[i];
        if (sum == givensum) {
            len = Math.max(len, i - j + 1);
        }
        if (sum < givensum) {
            i++;
        }
        while (sum > givensum) {
            sum = sum - arr[j];
            j++
        }
    }
    return len;
}

// console.log("getLongestSubarrayUsingTwoPointer", getLongestSubarrayUsingTwoPointer([2, 3, 5, 1, 9 ,1], 11));


function getLongestSubarrayUsingTwoPointer2(arr, givensum) {
    let sum = 0;
    let j = 0; // Left pointer
    let len = 0;

    for (let i = 0; i < arr.length; i++) {  // Expanding window (right pointer)
        sum += arr[i];

        while (sum > givensum) {  // Shrinking window (left pointer)
            sum -= arr[j];
            j++;
        }

        if (sum === givensum) {
            len = Math.max(len, i - j + 1);
        }
    }
    return len;
}

console.log("getLongestSubarrayUsingTwoPointer2", getLongestSubarrayUsingTwoPointer2([2, 3, 5, 1, 9 ,1], 11));




//Time complexity :o(2n)
//Space complexity: o(1)
function getLongestSubarray(a, k) {
    let n = a.length; // size of the array

    let left = 0, right = 0; // 2 pointers
    let sum = a[0];
    let maxLen = 0;
    while (right < n) {
        // if sum > k, reduce the subarray from left
        // until sum becomes less or equal to k
        while (left <= right && sum > k) {
            sum -= a[left];
            left++;
        }

        // if sum = k, update the maxLen i.e. answer
        if (sum === k) {
            maxLen = Math.max(maxLen, right - left + 1);
        }

        // Move forward the right pointer
        right++;
        if (right < n) sum += a[right];
    }

    return maxLen;
}