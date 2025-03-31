// let arr1 = [1, 4, 8, 10];
// let arr2 = [2, 3, 9];
// let arr = [];
// let i = 0;
// let j = 0;
// while (i < arr1.length && j < arr2.length) {
//          if(arr1[i] > arr2[j]){
//             arr.push(arr2[j]);
//             j++
//          }else{
//             arr.push(arr1[i]);
//             i++
//          }
// }
// while (i< arr1.length){
//     arr.push(arr1[i]);

// }
// while (j < arr2.length){
//     arr.push(arr2[j]);

// }

// console.log(arr);
//Time complexity :O(n+m) + O(n+m)


// Merge two Sorted Arrays Without Extra Space
//Time complexity :O(min (n,m) + o(nlogn) + o(mlogm);
function merge(arr1, arr2, n, m) {

    //Declare a 3rd array and 2 pointers:
    let arr3 = new Array(n + m);
    let left = 0;
    let right = 0;

    let index = 0;

    //Insert the elements from the 2 arrays
    // into the 3rd array using left and right
    // pointers:

    while (left < n && right < m) {
        if (arr1[left] <= arr2[right]) {
            arr3[index] = arr1[left];
            left++, index++;
        }
        else {
            arr3[index] = arr2[right];
            right++, index++;
        }
    }

    // If right pointer reaches the end:
    while (left < n) {
        arr3[index++] = arr1[left++];
    }

    // If left pointer reaches the end:
    while (right < m) {
        arr3[index++] = arr2[right++];
    }

    // Fill back the elements from arr3[]
    // to arr1[] and arr2[]:
    for (let i = 0; i < n + m; i++) {
        if (i < n) arr1[i] = arr3[i];
        else arr2[i - n] = arr3[i];
    }
}

let arr1 = [1, 4, 8, 10];
let arr2 = [2, 3, 9];
let n = 4, m = 3;
merge(arr1, arr2, n, m);
console.log("The merged arrays are: ");
console.log("arr1[] = " + arr1.join(" "));
console.log("arr2[] = " + arr2.join(" "));



//optimal approch without extra space
function merge2(arr1, arr2, n, m) {

    //Declare 2 pointers:
    let left = n - 1;
    let right = 0;

    //Swap the elements until arr1[left] is
    // smaller than arr2[right]:
    while (left >= 0 && right < m) {
        if (arr1[left] > arr2[right]) {
            [arr1[left], arr2[right]] = [arr2[right], arr1[left]];
            left--, right++;
        }
        else {
            break;
        }
    }

    // Sort arr1[] and arr2[] individually:
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);
}

merge2(arr1, arr2, n, m);
console.log("The merged arrays are: ");
console.log("arr1[] = " + arr1.join(' '));
console.log("arr2[] = " + arr2.join(' '));

//Gap Method Shell Sort
// function merge3(arr1, arr2) {
//     let n = arr1.length;
//     let m = arr2.length;
//     let gap = Math.ceil((n + m) / 2);
//     left = 0;
//     right =  gap- (n-2);

//     while (left < n && right < m){
//         if(arr1[left] < arr2[right]){
//             [arr1[left], arr2[right]] = [arr2[right], arr1[left]];
//         }
//     }

// }