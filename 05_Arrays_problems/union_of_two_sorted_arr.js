//Union of Two Sorted Arrays
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = [2, 3, 4, 4, 5, 11, 12];

function unionofArr(arr1, arr2) {
    let unionarray = [];
    for (let i = 0; i < arr1.length; i++) {
        if (!unionarray.includes(arr1[i])) {
            unionarray.push(arr1[i]);
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        if (!unionarray.includes(arr2[i])) {
            unionarray.push(arr2[i]);
        }
    }
    return unionarray;
}

console.log(unionofArr(arr1, arr2));// [1 2 3 4 5 6 7 8 9 10 11 12]



//Using set
function findUnion(arr1, arr2) {
    const set = new Set();
    const union = [];

    for (let num of arr1) {
        set.add(num);
    }

    for (let num of arr2) {
        set.add(num);
    }

    for (let num of set) {
        union.push(num);
    }

    return union;
}



const union = findUnion(arr1, arr2);

console.log("Union of arr1 and arr2 is:");
console.log(...union);

//using two Pointer

// function unionofArr3(arr1, arr2) {
//     let unionarray = [];
//     let i = 0;
//     let j = 0;
//     while (i < arr1.length && j < arr2.length) {
//         if (arr1[i] <= arr2[j]) {
//             if (!unionarray.includes(arr1[i])) {
//                 unionarray.push(arr1[i]);
//                 i++
//             } else {
//                 i++
//             }
//         } else {
//             if (!unionarray.includes(arr2[j])) {
//                 unionarray.push(arr2[j]);
//                 j++
//             } else {
//                 j++
//             }
//         }
//     }
//     return unionarray;
// }


//using two Pointer: 
function unionOfArr3(arr1, arr2) {
    let unionArray = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            if (unionArray.length === 0 || unionArray[unionArray.length - 1] !== arr1[i]) {
                unionArray.push(arr1[i]);
            }
            i++;
        } else if (arr1[i] > arr2[j]) {
            if (unionArray.length === 0 || unionArray[unionArray.length - 1] !== arr2[j]) {
                unionArray.push(arr2[j]);
            }
            j++;
        } else { // If both are equal
            if (unionArray.length === 0 || unionArray[unionArray.length - 1] !== arr1[i]) {
                unionArray.push(arr1[i]);
            }
            i++;
            j++;
        }
    }

    // Add remaining elements from arr1
    while (i < arr1.length) {
        if (unionArray[unionArray.length - 1] !== arr1[i]) {
            unionArray.push(arr1[i]);
        }
        i++;
    }

    // Add remaining elements from arr2
    while (j < arr2.length) {
        if (unionArray[unionArray.length - 1] !== arr2[j]) {
            unionArray.push(arr2[j]);
        }
        j++;
    }

    return unionArray;
}


console.log("unionofArr3",unionOfArr3(arr1, arr2));// [1 2 3 4 5 6 7 8 9 10 11 12]
