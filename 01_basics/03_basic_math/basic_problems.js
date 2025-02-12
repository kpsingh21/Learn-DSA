//1. Count digits in a number
// Problem Statement: Given an integer N, return the number of digits in N.

let N = 123456;
let count = 0;

// Brute force approach: Iteratively remove the last digit
while (N > 0) {
    count++;        // Increment count for each digit
    N = Math.floor(N / 10);  // Remove the last digit
}

console.log(count);

// Optimal Approach                   
// using logarithmic operation log10(n) + 1.
function countDigits(n) {
    // Initialize a variable 'cnt' to
    // store the count of digits.
    let cnt = Math.floor(Math.log10(n) + 1);

    // The expression Math.floor(Math.log10(n) + 1)
    // calculates the number of digits in 'n'
    // and rounds it down to the nearest whole number.

    // Adding 1 to the result accounts
    // for the case when 'n' is a power of 10,
    // ensuring that the count is correct.

    // Return the count of digits in 'n'.
    return cnt;
}

let N2 = 329823;
console.log("N: " + N2);
let digits = countDigits(N2);
console.log("Number of Digits in N: " + digits);

//with edge case:
function countDigits(n) {
    return n === 0 ? 1 : Math.floor(Math.log10(n) + 1);
}



//2 Reverse Digits of A Number
// Problem Statement: Given an integer N return the reverse of the given number.

let N3 = 7789
let revN3 = 0;
while(N3 > 0){
    let lastdigit = N3 % 10;
    revN3= (revN3 * 10) + lastdigit;
}


