//liner Search
function linerSearch(arr, num) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == num) {
            return i;
        }
    }
    return -1;
}

console.log(linerSearch([1,2,3,4,5],6));
console.log(linerSearch([1,2,3,4,5],4));