let arr = [1, 3, 2, 3, 4, 1, 2, 1, 5, 3];
let hashMap = {}; // Use an object as a hash map

arr.forEach(element => {
    if (!hashMap[element]) {
        hashMap[element] = 1;
    } else {
        hashMap[element] += 1;
    }
});

console.log(hashMap);
//if we use array
// Sparse Array Issue:
// hasharray = [] initializes an empty array, but you're using it as a hash map.
// JavaScript arrays are intended for ordered, indexed data. When you use hasharray[element], it creates a sparse array with indices corresponding to the numbers in arr.
// While this works, it is not the best practice because the array might contain undefined values for missing indices


let arr2 = [1, 3, 2, 3, 4, 1, 2, 1, 5, 3];
let hashArray = new Array(Math.max(...arr) + 1).fill(0); // Initialize with zeros
console.log(hashArray);
for (let i = 0; i < arr2.length; i++) {
    console.log("i",i)
    console.log("arr",arr[i])
    console.log("hasharr",hashArray[arr[i]])
    hashArray[arr[i]] += 1;
    console.log(hashArray);

}
console.log(hashArray);

