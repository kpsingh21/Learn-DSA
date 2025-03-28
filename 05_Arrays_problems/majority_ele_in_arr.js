// Majority Elements(&gt;N/3 times) | Find the elements that appears more than N/3 times in the array

function MajorityElements(arr) {
    let n = arr.length
    listofelem = [];
    for (let i = 0; i < n; i++) {
        let count = 0
        if (listofelem.length === 0 || listofelem[0] != arr[i]) {
            for (let j = 0; j < n; j++) {
                if (arr[i] == arr[j]) {
                    count += 1;
                }
            }
            if (count > Math.floor(n / 3)) {
                listofelem.push(arr[i])
            }
            if (listofelem.length == 2) {
                break;
            }
        }
    }
    return listofelem;
}
console.log(MajorityElements([1, 2, 2, 3, 3, 3, 2]));//2,3


//Better Approch using haspmap;
function MajorityElements2(arr) {
    let n = arr.length
    let hashmap = new Map();

    // least occurrence of the majority element:
    const mini = Math.floor(n / 3) + 1;

    listofelem = [];
    for (let i = 0; i < n; i++) {
        if (hashmap.has(arr[i])) {
            hashmap.set(arr[i], hashmap.get(arr[i]) + 1)
        } else {
            hashmap.set(arr[i], 1)
        }
        // checking if arr[i] is the majority element:
        if (hashmap.get(arr[i]) == mini) {
            listofelem.push(arr[i]);
        }
        if (listofelem.length == 2) {
            break;
        }
    }
    return listofelem;
}
console.log(MajorityElements2([1, 3, 3, 3, , 2, 2, 2]));//2