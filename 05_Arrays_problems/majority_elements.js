// Find the Majority Element that occurs more than N/2 times
let arr = [2, 2, 1, 1, 1, 2, 2]

// Brute Force Approach 
//Time complexity: O(N^2)
function countMajorityEle(arr) {
    let N = arr.length
    for (let i = 0; i < N; i++) {
        let count = 0
        for (let j = 0; j < N; j++) {
            if (arr[i] == arr[j]) {
                count++
            }
        }
        if (count > Math.floor(N / 2)) {
            return arr[i];
        }
    }
}
console.log(countMajorityEle(arr));
console.log(countMajorityEle([3, 2, 3]));

//Hashing
//Time Complexity : O(NlogN)+O(N)
//Space Complexity: O(N)
function countMajorityEleHashing(arr) {
    let hasmap = new Map(); //Ordered map O(N)
    let N = arr.length
    for (let i = 0; i < N; i++) {
        if (hasmap.has(arr[i])) {
            // hasmap.set(arr[i],count++)
            hasmap.set(arr[i], hasmap.get(arr[i]) + 1)
        } else {
            hasmap.set(arr[i], 1)
        }
    }

    for (const [num, count] of hasmap) {
        if (count > Math.floor(N / 2)) {
            return num;
        }
    }
}

console.log(countMajorityEleHashing(arr));
console.log(countMajorityEleHashing([3, 2, 3]));

// Optimal Approach: Moore’s Voting Algorithm:
let arr3 = [7, 7, 5, 7, 5, 1, 5, 7, 5, 5, 7, 7, 5, 5, 5, 5]

// function countMajorityElementUsingAlgo(arr3) {
//     let element = arr3[0]
//     let count = 0;
//     for (let i = 0; i < arr3.length; i++) {
//         if(element==arr3[i]){
//             count++
//         }else if(element !== arr3[i]){
//             count--
//         }else{
//             element = arr3[i]
//         }
//     }
//     return element;
// }

function majorityElement(arr) {
    // Size of the given array
    let n = arr.length;
    let cnt = 0; // Count
    let el; // Element

    // Applying the algorithm
    for (let i = 0; i < n; i++) {
        if (cnt === 0) {
            cnt = 1;
            el = arr[i];
        } else if (el === arr[i]) {
            cnt++;
        } else {
            cnt--;
        }
    }

    // Checking if the stored element is the majority element
    let cnt1 = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] === el) {
            cnt1++;
        }
    }

    if (cnt1 > Math.floor(n / 2)) {
        return el;
    }
    return -1;
}

let ans = majorityElement([2, 2, 1, 1, 1, 2, 2]);
console.log("The majority element is:", ans);

