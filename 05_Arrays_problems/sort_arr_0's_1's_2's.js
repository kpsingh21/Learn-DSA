// Sort an array of 0s, 1s and 2s
let arr = [2, 0, 2, 1, 1, 0]

//Better Sol : time complexity o(2n)
function sort(arr) {
    let count0 = 0;
    let count1 = 0;
    let count2 = 0;
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        if (num == 0) {
            count0 += 1
        } else if (num == 1) {
            count1 += 1
        } else {
            count2 += 1
        }
    }
    for (let i = 0; i < count0; i++) {
        arr[i] = 0;
    }
    for (let i = count0; i < count0 + count1; i++) {
        arr[i] = 1;
    }
    for (let i = count0 + count1; i < arr.length; i++) {
        arr[i] = 2;
    }
    return arr;
}
console.log("SortedArr" , sort(arr));