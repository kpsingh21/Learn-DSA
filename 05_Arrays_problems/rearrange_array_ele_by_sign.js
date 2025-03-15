// Rearrange Array Elements by Sign
// There’s an array ‘A’ of size ‘N’ with an equal number of positive and negative elements. Without altering the relative order of positive and negative elements, you must return an array of alternately positive and negative values.
let arr = [1, 2, -4, -5]
function rearrangeBySign(arr) {
    let posArr = [];
    let negArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            posArr.push(arr[i]);
        } else {
            negArr.push(arr[i]);
        }
    }
    for (let i = 0; i < arr.length / 2; i++) {
        arr[2 * i] = posArr[i];
        arr[2 * i + 1] = negArr[i];
    }
    return arr;
}
console.log(rearrangeBySign(arr));

function rearrangeBySign2(arr) {

    let ansArr = [];
    let posIndex = 0;
    let negIndex = 1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            ansArr[negIndex] = arr[i];
            negIndex += 2
        } else {
            ansArr[posIndex] = arr[i];
            posIndex += 2;
        }
    }
    return ansArr;
}
console.log(rearrangeBySign2(arr));


//variety 2: no of postive and  neg element are not same
let arr2 = [1, 2, -4, -5, 3, 6]
// function rearrangeBySign3(arr) {
//     let posArr = [];
//     let negArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             posArr.push(arr[i]);
//         } else {
//             negArr.push(arr[i]);
//         }
//     }
//     let poslen = posArr.length;
//     let neglen = negArr.length;
//     for (let i = 0; i < (poslen + neglen) / 2; i++) {
//         arr[2 * i] = posArr[i];
//         arr[2 * i + 1] = negArr[i];
//     }
//     if (poslen > neglen) {
//         for (i = neglen; i < poslen; i++) {
//             arr[i + 2] = posArr[i];
//         }
//     } else {
//         for (i = poslen; i < neglen; i++) {
//             arr[i + 2] = negArr[i];
//         }
//     }
//     return arr;
// }
// console.log(rearrangeBySign3(arr2));
// console.log(rearrangeBySign3([1, 2, -4, -5, -3, -6]));

// Time complexity: O(n)+O(min(pos,neg))+O(leftovers)
function rearrangeBySign3(arr) {
    let posArr = [];
    let negArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            posArr.push(arr[i]);
        } else {
            negArr.push(arr[i]);
        }
    }
    let poslen = posArr.length;
    let neglen = negArr.length;
    if (poslen > neglen) {
        for (let i = 0; i < neglen; i++) {
            arr[2 * i] = posArr[i];
            arr[2 * i + 1] = negArr[i];
        }
        let index = neglen * 2
        for (let i = neglen; i < poslen; i++) {
            arr[index] = posArr[i]
            index++
        }
    } else {
        for (let i = 0; i < poslen; i++) {
            arr[2 * i] = posArr[i];
            arr[2 * i + 1] = negArr[i];
        }
        let index = poslen * 2
        for (let i = poslen; i < neglen; i++) {
            arr[index] = negArr[i]
            index++
        }

    }

    return arr;
}
console.log(rearrangeBySign3(arr2));
console.log(rearrangeBySign3([1, 2, -4, -5, -3, -6]));