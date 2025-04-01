// Find the repeating and missing numbers
// Problem Statement: You are given a read-only array of N integers with values also in the range [1, N] both inclusive. Each integer appears exactly once except A which appears twice and B which is missing. The task is to find the repeating and missing numbers A and B where A repeats twice and B is missing.


function findMissingRepeatingNumbers(arr) {
    let missingno = -1;
    let repeatingno = -1;
    for (let i = 1; i <= arr.length; i++) {
        let repeatingcount = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] == i) {
                repeatingcount++
            }
        }
        if (repeatingcount === 2) {
            repeatingno = i;
        } else if (repeatingcount === 0) {
            missingno = i
        }

        if (repeatingno != -1 && missingno != -1) break;
    }
    return [missingno, repeatingno];
}

console.log(findMissingRepeatingNumbers([3, 1, 2, 5, 4, 6, 7, 5]))


