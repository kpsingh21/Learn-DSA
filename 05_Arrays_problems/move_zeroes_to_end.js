let array = [1, 0, 2, 3, 0, 4, 0, 1];

function movezeroestoend(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            array.push(array.splice(i, 1)[0]);
        }
    }
    return array;

}

// console.log(movezeroestoend(array)); // 1 ,2 ,3 ,4 ,1 ,0 ,0 ,0

function movezeroestoend2(array) {
    let tempArray = [];
    let countzeroes = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            countzeroes += 1
            continue;
        } else {
            tempArray.push(array[i]);
        }
    }
    for (let i =0; i <= countzeroes; i++){
        tempArray.push(0);
    }
    return tempArray;
}
// console.log("approch2",movezeroestoend2(array)); // 1 ,2 ,3 ,4 ,1 ,0 ,0 ,0



function movezeroestoend3(array) {
    let tempArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== 0) {
            tempArray.push(array[i]);
        } 
    }
    let nz = tempArray.length
    let n= array.length
    console.log(nz,n);
    for (let i = 0; i < nz; i++){
        array[i]= tempArray[i];
        
    }

    // Instead of modifying the existing array in place, this adds new elements to the end of the array.
    // for (let i = nz; i < n; i++){
    //     console.log(i);
    //     array.push(0);
    // }

    // Fill the rest of the cells with 0
    for (let i = nz; i < n; i++) {
        array[i] = 0;
    }
    return array;
}
// console.log("approch3",movezeroestoend3(array)); // 1 ,2 ,3 ,4 ,1 ,0 ,0 ,0


//optimal solution
//wrong attempt
// function movezeroestoend4(arr){
//     let j = -1;
//     for(i=0;i<arr.length;i++){
//         if(arr[i] == 0 && arr[i+1] !== 0){
//             j = i;
//             [arr[j],arr[i+1]]= [ arr[i+1], arr[j]]
//         }
//     }
//     return arr;
// }
// console.log("approch4",movezeroestoend4(array));




function moveZeros(n, a) {
    let j = -1;
    
    // Place the pointer j
    for (let i = 0; i < n; i++) {
        if (a[i] === 0) {
            j = i;
            break;
        }
    }
    
    // No non-zero elements
    if (j === -1) return a;
    
    // Move the pointers i and j and swap accordingly
    for (let i = j + 1; i < n; i++) {
        console.log("jj",j)
        console.log("ii",i);


        if (a[i] !== 0) {
            [a[i], a[j]] = [a[j], a[i]];
            j++;
            console.log("i",i);
            console.log("j",j)
            console.log("inside",a);
        }
    }
    
    return a;
}

let arr = [1, 0, 2, 3, 2, 0, 0, 4, 5, 1];
let n = 10;
let ans = moveZeros(n, arr);
console.log(ans.join(' '));


