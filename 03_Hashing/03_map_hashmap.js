//In Number hasing we have problem of max array size = 10^7

//Count frequency of each element in the array
let arr = [10,5,10,15,10,5]
let vistedArray = new Array(arr.length).fill(false);
for( i =0; i < arr.length; i++ ){
    if(vistedArray[i]) continue;  
    let count = 1;
    for(let j=i+1 ; j< arr.length; j++){
        if(arr[i]==arr[j]){
            count++;
            vistedArray[j]=true;
        }
    }
    console.log(`${arr[i]} appears ${count} times`);

}

function countFrequencies(arr2) {
    let visitedArray = new Array(arr.length).fill(false);
    let result = [];

    for (let i = 0; i < arr2.length; i++) {
        if (visitedArray[i]) continue; // Skip already counted elements

        let count = 1;
        for (let j = i + 1; j < arr2.length; j++) {
            if (arr[i] === arr[j]) {
                count++;
                visitedArray[j] = true; // Mark duplicates as visited
            }
        }

        result.push({ no: arr[i], fre: count });
    }

    return result;
}

// Example usage
let arr2 = [10, 5, 10, 15, 10, 5];
console.log(countFrequencies(arr));


//Find the highest/lowest frequency element

let arr3 = [2,2,3,4,4,2]
function highlowfreqno(arr3){

    let hashmap = {}
    for( let i = 0; i < arr3.length;  i ++ ){
        if(!hashmap[arr3[i]]){
            hashmap[arr3[i]]=1;
        }else{
            hashmap[arr3[i]]+=1;
        }
    }
    let maxFreq = Math.max(...Object.values(hashmap));
    let minFreq = Math.min(...Object.values(hashmap));

    let highestFreqElement = Object.keys(hashmap).find(key => hashmap[key] === maxFreq);
    let lowestFreqElement = Object.keys(hashmap).find(key => hashmap[key] === minFreq);

    return {
        highest: Number(highestFreqElement),
        lowest: Number(lowestFreqElement)
    };
}
console.log(highlowfreqno(arr3));

