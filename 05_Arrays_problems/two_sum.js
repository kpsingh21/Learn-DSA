// Two Sum : Check if a pair with given sum exists in Array


let arr = [2, 6, 5, 8, 11]
let target = 14
function twosum1(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        let j = 1;
        calculatedTar = arr[i] + arr[j];
        if (calculatedTar == target) {
            arr = [arr[i], arr[j]]
            indexarr = [i, j]
            return {
                true: true,
                arr: arr,
                indexarr: indexarr
            }
        } else {
            j++
        }
    }
}



console.log(twosum1([2, 6, 5, 8, 11], 14))
console.log(twosum1([2, 6, 5, 8, 11], 7))


function twosum2(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let calculatedTar = arr[i] + arr[j];
            if (calculatedTar == target) {
                arr = [arr[i], arr[j]]
                indexarr = [i, j]
                return {
                    true: true,
                    arr: arr,
                    indexarr: indexarr
                }
            }
        }
    }
    return {
        found: false,
    }
}

console.log(twosum2([2, 6, 5, 8, 11], 14))
console.log(twosum2([2, 6, 5, 8, 11], 4))



//Better approch using Hashmap
function twoSumArrUsingHashMap(arr, target) {

    let hashmap = new Map();
    for (let i = 0; i < arr.length; i++) {
        hashmap.set(arr[i], i);
        reqele = target - arr[i];
        if (hashmap.has(reqele)) {
            return {
                found: "yes",
                index: [i, arr.indexOf(reqele)]
            }
        }
    }
    return "No"
}
console.log("twoSumArrUsingHashMap", twoSumArrUsingHashMap([2, 6, 5, 8, 11], 4))

//rephrase
function twoSumUsingHashMap2(arr, target) {
    let hashmap = new Map();

    for (let i = 0; i < arr.length; i++) {
        let reqele = target - arr[i];

        if (hashmap.has(reqele)) {
            return {
                answer: "Yes",
                pair: [reqele, arr[i]],
                indices: [hashmap.get(reqele), i]
            };
        }

        hashmap.set(arr[i], i); // Store element and its index
    }

    return { answer: "No" }; // No pair found
}
console.log("twoSumUsingHashMap2", twoSumUsingHashMap2([1, 3, 4, 7], 10)); // { answer: "Yes", pair: [3, 7], indices: [1, 3] }



//Array should be sorted
function twoSumArrUsingTwoPointer(arr, target) {
    let i = 0;
    let j = arr.length - 1;
    while (i < j) {
        let sum = arr[i] + arr[j];
        if (sum === target) {
            return "Yes"
        }

        if (sum < target) {
            i++;
        }
        else {
            j--
        }
    }
    return "No"
}
console.log("twoSumArrUsingTwoPointer", twoSumArrUsingTwoPointer([2, 5, 6, 8, 11], 14))
