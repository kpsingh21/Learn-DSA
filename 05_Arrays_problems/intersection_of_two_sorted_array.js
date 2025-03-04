//Intersection of two sorted arrays:
//Reapation is allowe if present in both
arr1 = [1, 2, 2, 3, 3, 4, 5, 6]
arr2 = [2, 3, 3, 5, 6, 6, 7]
let intersectedArr = [];
let vistedArr = new Array(arr2.length).fill(0);
function IntersectionofArrays(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            // console.log(arr1[i],j)
            if (arr1[i] == arr2[j]) {
                if (vistedArr[j] == 0) {
                    intersectedArr.push(arr1[i]);
                    vistedArr[j] = 1;
                    break; //When we add break;, as soon as a match is found for arr1[i], we exit the inner loop. This ensures that each element in arr1 is only matched once per occurrence in arr2, preventing extra matches.
                    // Thus, without break, the algorithm continues checking the rest of arr2 even after finding a match, leading to duplicate values in intersectedArr
                }
            }

            //this will prevent unnecessary loop as array is sorted so no need after we found greater no
            if (arr2[j] > arr1[i]) {
                break;
            }

        }
    }
    return intersectedArr;
}
console.log(IntersectionofArrays(arr1, arr2)); //[2,3,3,5,6]


//refactored;

// function IntersectionofArrays2(arr1, arr2) {
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if (arr1[i] == arr2[j] && visitedArr[j] == 0) {
//                 intersectedArr.push(arr1[i]);
//                 visitedArr[j] = 1;
//                 break;
//             }
//         }
//     }
//     return intersectedArr;
// }

//Time complexity o(n1*n2)


//using two pointer

// let intersectedArr2 = [];
// function intersectionusingtwopointer(arr1, arr2) {
//     let i = 0;
//     let j = 0;
//     while (i < arr1.length && j < arr2.length) {
//         if (arr1[i] == arr2[j]) {
//             intersectedArr2.push(arr1[i]);
//             i++;
//             j++
//         } else {
//             i++
//         }
//     }
//     return intersectedArr2;
// }
// console.log("twopointer",intersectionusingtwopointer(arr1, arr2)); //[2,3,3,5,6]

function intersectionUsingTwoPointer(arr1, arr2) {
    let i = 0;
    let j = 0;
    let intersectedArr = []; // Declare inside the function to avoid retaining old values

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] === arr2[j]) {
            intersectedArr.push(arr1[i]);
            i++;
            j++; // Move both pointers when elements match
        } else if (arr1[i] < arr2[j]) {
            i++; // Move `i` if `arr1[i]` is smaller
        } else {
            j++; // Move `j` if `arr2[j]` is smaller
        }
    }
    return intersectedArr;
}

let arr1 = [1, 2, 2, 3, 3, 4, 5, 6];
let arr2 = [2, 3, 3, 5, 6, 6, 7];

console.log("twopointer", intersectionUsingTwoPointer(arr1, arr2)); 
// Output: [2, 3, 3, 5, 6]
