// Leaders in an Array
// Problem Statement: Given an array, print all the elements which are leaders. A Leader is an element that is greater than all of the elements on its right side in the array.

let arr = [10, 22, 12, 3, 0, 6]

//wrong handson
// let leadersArr = [];
// function findleadersInArr(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] < arr[j]) {
//                 break;
//             } else {
//                 leadersArr.push(arr[j-1]);
//             }
//         }
//     }
//     return leadersArr;
// }

let leadersArr = [];
function findleadersInArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        let leaders = true; //it should initialize inside
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                leaders = false
                break;
            }
        }

        if (leaders == true) {
            leadersArr.push(arr[i]);
        }

    }
    return leadersArr;
}

console.log(findleadersInArr(arr));


//if array element is greater than max element in arr on right
//optimal Approch:
// let leadersArr2 = [];
// let max = 0
// let n = arr.length
// function findleadersInArr2(arr) {
//     for (let i = n - 1; i < 0; i--) {
//         if (arr[i] > max){
//             max =arr[i];
//         }
//         leadersArr2.push(arr[i]);
//     }
//     return leadersArr2
// }

// console.log(findleadersInArr(arr));

function findleadersInArr2(arr) {
    let leadersArr2 = []; 
    let max = -Infinity; // Initialize with a very small value
    let n = arr.length;

    for (let i = n - 1; i >= 0; i--) { // Fix the loop condition
        if (arr[i] > max) {
            max = arr[i]; // Update max
            leadersArr2.push(arr[i]); // Add only leaders
        }
    }

    return leadersArr2.reverse(); // Reverse to maintain the original order
}

// Example
console.log(findleadersInArr2([16, 17, 4, 3, 5, 2]));

