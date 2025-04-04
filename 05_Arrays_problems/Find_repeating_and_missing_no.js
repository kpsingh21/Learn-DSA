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


//Optimal Approach 1 (Using Maths): 


function findMissingRepeatingNumbers2(arr) {


    let n = arr.length;
    // Find Sn and S2n:
    const SN = (n * (n + 1)) / 2;
    const S2N = (n * (n + 1) * (2 * n + 1)) / 6;
    let S = 0, S2 = 0;

    for (let i = 0; i < arr.length; i++) {
        S += arr[i];
        S2 += arr[i] * arr[i];
    }

    //S-Sn = X-Y:
    const val1 = S - SN;

    // S2-S2n = X^2-Y^2:
    let val2 = S2 - S2N;

    //Find X+Y = (X^2-Y^2)/(X-Y):
    val2 = val2 / val1;

    //Find X and Y: X = ((X+Y)+(X-Y))/2 and Y = X-(X-Y),
    // Here, X-Y = val1 and X+Y = val2:
    const x = (val1 + val2) / 2;
    const y = x - val1;

    return [x, y];

}

console.log(findMissingRepeatingNumbers2([3, 1, 2, 5, 4, 6, 7, 5]))
