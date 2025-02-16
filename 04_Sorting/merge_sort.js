// Merge Sort Algorithm: Divide and Conquor
// Merge Sort is a divide and conquers algorithm, it divides the given array into equal parts and then merges the 2 sorted parts. 


function mergeSort(arr, low, high) {
    if (low >= high) {
        return;
    }

    console.log("arr10",arr);
    let mid = Math.floor((low + high) / 2);

    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);
    console.log("arr15",arr);


    merge(arr, low, mid, high);
}

function merge(arr, low, mid, high) {
    let left = arr.slice(low, mid + 1);
    let right = arr.slice(mid + 1, high + 1);
    
    console.log("le",left);
    console.log("ri",right);

    let i = 0, j = 0, k = low;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            arr[k] = left[i];
            i++;
        } else {
            arr[k] = right[j];
            j++;
        }
        k++;
    }

    while (i < left.length) {
        arr[k] = left[i];
        i++;
        k++;
    }

    while (j < right.length) {
        arr[k] = right[j];
        j++;
        k++;
    }
}

let arr = [4, 2, 1, 6, 7];
let N = arr.length;

mergeSort(arr, 0, N - 1);
console.log(arr); // Output: [1, 2, 4, 6, 7]
