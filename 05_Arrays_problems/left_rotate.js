// Left Rotate the Array by One

function leftrotate(arr, n) {
    let temparray = new Array(n);
    let lastelem = arr[0];
    for (let i = 0; i < n - 1; i++) {
        temparray[i] = arr[i + 1];
    }
    temparray[n - 1] = lastelem;
    return temparray;
}

let arr = [1, 2, 3, 4, 5];
console.log(leftrotate(arr, 5)); // Output: [2, 3, 4, 5, 1]

//Brute Force Approach 
function solve(arr, n) {
    let temp = new Array(n);
    for (let i = 1; i < n; i++) {
        temp[i - 1] = arr[i]; // Shift elements left
    }
    temp[n - 1] = arr[0]; // Move first element to the last index

   return temp;
}
console.log(solve(arr, 5)); // Output: [2, 3, 4, 5, 1]

function leftroate(arr,n){
    temp = arr[0];
    for (let i =0; i < n-1 ; i++){
        arr[i] = arr[i+1]
    }
    arr[n-1]=temp;
   return arr
}

console.log(leftroate(arr, 5)); // Output: [2, 3, 4, 5, 1]
