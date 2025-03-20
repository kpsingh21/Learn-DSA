let arr = [100, 200, 1, 3, 2, 4]
let arr1 = [100, 200, 101, 1033, 102, 104]
let arr2 = [100, 200, 201, 333, 209, 2044]

//wrong attempt
// function longestSequencInArr(arr) {
//     let longest = 1; //as atleast one no is also consider as a seq
//     for (let i = 0; i < arr.length; i++) {
//         let x = arr[i];
//         let cnt = 1
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[j] == x) {
//                 x += 1
//                 cnt += 1;
//             } 
//             longest = Math.max(longest, cnt);
//         }
//     }
//     return longest
// }


function longestSequenceInArr(arr) {
    let longest = 1; // At least one number is a sequence

    for (let i = 0; i < arr.length; i++) {
        let x = arr[i];
        let count = 1;

        // Check if the sequence can be started from arr[i]
        for (let j = 0; j < arr.length; j++) {
            if (arr.includes(x + 1)) {
                x += 1;
                count++;
            } else {
                break;
            }
        }

        longest = Math.max(longest, count);
    }

    return longest;
}


function linearSearch(arr, num) {
    let n = arr.length; // size of array
    for (let i = 0; i < n; i++) {
        if (arr[i] === num)
            return true;
    }
    return false;
}

function longestSuccessiveElements(arr) {
    let n = arr.length; // size of array
    let longest = 1;
    // pick an element and search for its
    // consecutive numbers:
    for (let i = 0; i < n; i++) {
        let x = arr[i];
        let cnt = 1;
        // search for consecutive numbers
        // using linear search:
        while (linearSearch(arr, x + 1) === true) {
            x += 1;
            cnt += 1;
        }

        longest = Math.max(longest, cnt);
    }
    return longest;
}

let ans = longestSuccessiveElements(arr);
console.log("The longest consecutive sequence is", ans);
console.log(longestSuccessiveElements(arr));//4
console.log(longestSuccessiveElements(arr1));//3
console.log(longestSuccessiveElements(arr2));//2



//wrong attemept
// function longestSuccessiveElements2(arr) {
//     let longest = 1;
//     let lastsmaller = arr[0];
//     let currentcount = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (lastsmaller < arr[i]) { //does not check for consecutive numbers If the numbers increase but are not consecutive, they are still counted.
//             lastsmaller = arr[i];
//             currentcount += 1;
//         } else {
//             lastsmaller = arr[i];
//             currentcount = 0 //currentcount = 0 resets completely instead of starting a new sequence with 1.
//         }
//     }

//     longest = Math.max(longest, currentcount);
//     return longest;

// }

function longestSuccessiveElements2(arr) {
    if (arr.length === 0) return 0;

    arr.sort((a, b) => a - b);

    let longest = 1;
    let currentCount = 1;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1] + 1) {
            currentCount += 1;
        } else if (arr[i] !== arr[i - 1]) {
            currentCount = 1;
        }
        longest = Math.max(longest, currentCount);
    }

    return longest;
}

function longestSuccessiveElements(arr) {
    let n = arr.length;
    if (n === 0) return 0;

    // sort the array:
    arr.sort((a, b) => a - b);
    let lastSmaller = -Infinity;
    let cnt = 0;
    let longest = 1;

    // find longest sequence:
    for (let i = 0; i < n; i++) {
        if (arr[i] - 1 === lastSmaller) {
            // arr[i] is the next element of the
            // current sequence.
            cnt += 1;
            lastSmaller = arr[i];
        } else if (arr[i] !== lastSmaller) {
            cnt = 1;
            lastSmaller = arr[i];
        }
        longest = Math.max(longest, cnt);
    }
    return longest;
}

//optimal solution:
function longestSuccessiveElements(a) {
    let n = a.length;
    if (n === 0)
        return 0;

    let longest = 1;
    let st = new Set();
    
    // put all the array elements into set
    for (let i = 0; i < n; i++) {
        st.add(a[i]);
    }

    // Find the longest sequence
    for (let it of st) {
        // if 'it' is a starting number
        if (!st.has(it - 1)) {
            // find consecutive numbers
            let cnt = 1;
            let x = it;
            while (st.has(x + 1)) {
                x = x + 1;
                cnt = cnt + 1;
            }
            longest = Math.max(longest, cnt);
        }
    }
    return longest;
}

let a = [100, 200, 1, 2, 3, 4];



