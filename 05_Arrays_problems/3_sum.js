// 3 Sum : Find triplets that add up to a zero
// Problem Statement: Given an array of N integers, your task is to find unique triplets that add up to give a sum of zero. In short, you need to return an array of all the unique triplets [arr[a], arr[b], arr[c]] such that i!=j, j!=k, k!=i, and their sum is equal to zero.

function tripletsSum(arr) {
    let tripletarr = [];
    for (let i = 0; i < arr.length; i++) {
        for (j = i + 1; j < arr.length; j++) {
            for (k = j + 1; k < arr.length; k++) {
                let tripletsSum = arr[i] + arr[j] + arr[k]
                if (tripletsSum == 0) {
                    let temp = [arr[i], arr[j], arr[k]]
                    temp.sort((a, b) => a - b);
                    tripletarr.push(temp);
                }
            }
        }
    }
    //store the set in the answer:
    let set = new Set(tripletarr.map(JSON.stringify));
    //for detail understanding
    // let set = new Set(tripletarr.map(element => JSON.stringify(element)));
    tripletarr = Array.from(set).map(JSON.parse);
    return tripletarr;
}
console.log("tripletsSum-Brute force", tripletsSum([-1, 0, 1, 2, -1, -4]))
//Time complexity :O(n^3) + log (no of uniue triples)
//Space complexity : (set and array ): 2*O( no of triplets)



//Better Soln: 
//concept: arr[i] + arr[j] + arr[k] =0
// arr[k]= - (arr[i] + arr[j])

//Time complexity :O(n^2) + log (size of set) 
//Space complexity : O( n) + O(no of unique triplets)

//hands on:
// function tripletsSum2(arr) {
//     let hashmap = new Map();
//     let tripletarr = [];
//     for (let i = 0; i < arr.length; i++) {
//         hashmap.set(arr[i], i);
//         for (j = i + 1; j < arr.length; j++) {
//             if (hashmap.has(-(arr[i] + arr[j])) && arr[i]!= -(arr[i] + arr[j])  && arr[j]!= -(arr[i] + arr[j]) ) {
//                 let temp = [arr[i], arr[j], -(arr[i] + arr[j])]
//                 temp.sort((a, b) => a - b);
//                 tripletarr.push(temp);
//             }
//         }
//     }
//     //store the set in the answer:
//     let set = new Set(tripletarr.map(JSON.stringify));
//         //for detail understanding
//         // let set = new Set(tripletarr.map(element => JSON.stringify(element)));
//     tripletarr = Array.from(set).map(JSON.parse);
//     return tripletarr;
// }
// console.log(tripletsSum2([-1, 0, 1, 2, -1, -4]))


function tripletsSum2(arr) {
    let hashmap = new Map();
    let tripletarr = [];
    for (let i = 0; i < arr.length; i++) {
        for (j = i + 1; j < arr.length; j++) {
            hashmap.set(arr[j], j); // we are setting in hasmap 
            // If all the elements were in the set data structure while searching for -2, we would again pick the element at index 3, that is currently pointed by i.
            // Hence, the triplet will be [arr[i], arr[j], arr[i]]. And this is an invalid triplet. That is why we cannot insert all the elements into the set data structure.
            if (hashmap.has(-(arr[i] + arr[j])) && arr[i] != -(arr[i] + arr[j]) && arr[j] != -(arr[i] + arr[j])) {
                let temp = [arr[i], arr[j], -(arr[i] + arr[j])]
                temp.sort((a, b) => a - b);
                tripletarr.push(temp);
            }
        }
    }
    //store the set in the answer:
    let set = new Set(tripletarr.map(JSON.stringify));
    //for detail understanding
    // let set = new Set(tripletarr.map(element => JSON.stringify(element)));
    tripletarr = Array.from(set).map(JSON.parse);
    return tripletarr;
}
console.log("Better Approch using map", tripletsSum2([-1, 0, 1, 2, -1, -4]))


function triplet(n, arr) {
    let st = new Set();
    let ans = [];
    for (let i = 0; i < n; i++) {
        let hashset = new Set();
        for (let j = i + 1; j < n; j++) {
            //Calculate the 3rd element:
            let third = -(arr[i] + arr[j]);

            //Find the element in the set:
            if (hashset.has(third)) {
                let temp = [arr[i], arr[j], third];
                temp.sort((a, b) => a - b);
                ans.push(temp);
            }
            hashset.add(arr[j]);
        }
    }

    //store the set in the answer:
    let set = new Set(ans.map(JSON.stringify));
    ans = Array.from(set).map(JSON.parse);
    return ans;
}

let arr = [-1, 0, 1, 2, -1, -4];
let n = arr.length;
let ans = triplet(n, arr);
for (let it of ans) {
    process.stdout.write("[");
    for (let i of it) {
        process.stdout.write(i + " ");
    }
    process.stdout.write("] ");
}
console.log();


// Two pointer Approch: where we see last element and move forward to check <0
//and we require sorted array as if we move backward from last index the values will decrease

// function tripletSumZero(arr) {

//     let i = 0;
//     let j = i + 1;
//     let k = arr.length - 1;
//     let tripletarr = [];

//     while (i < n && j < n) {

//         if (arr[i] + arr[j] + arr[k] == 0) {
//             let temp = [arr[i], arr[j], arr[k]];
//             tripletarr.push(temp);
//             if (arr[j] == arr[j + 1]) {
//                 j++
//             }
//             if (arr[k] == arr[k - 1]) {
//                 k--
//             }
//         }
//         if (arr[i] + arr[j] + arr[k] > 0) {
//             k--;
//         }
//         if (arr[i] + arr[j] + arr[k] < 0) {
//             j++;
//         }
//     }
// }

function triplet(arr) {
    let ans = [];
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        // remove duplicates:
        if (i !== 0 && arr[i] === arr[i - 1]) continue;
        let j = i + 1;
        let k = arr.length - 1;

        while (j < k) {
            let sum = arr[i] + arr[j] + arr[k];
            if (sum < 0) {
                j++;
            } else if (sum > 0) {
                k--;
            } else {
                let temp = [arr[i], arr[j], arr[k]];
                ans.push(temp);
                j++;
                k--;
                // skip the duplicates:
                while (j < k && arr[j] === arr[j - 1]) j++;
                while (j < k && arr[k] === arr[k + 1]) k--;
            }
        }
    }
}