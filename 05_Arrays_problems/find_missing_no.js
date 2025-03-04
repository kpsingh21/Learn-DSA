// Find the missing number in an array
// Problem Statement: Given an integer N and an array of size N-1 containing N-1 numbers between 1 to N. Find the number(between 1 to N), that is not present in the given array.

// Naive Approach(Brute-force approach)
let arr = [1, 2, 4, 5];
let N = 5
for (let i = 1; i <= 5; i++) {
  let flag = 0;
  for (j = 0; j < arr.length; j++) {
    if (arr[j] == i) {
      flag = 1;
      break;
    }
  }
  if (flag == 0) {
    console.log("no that is not present is", i)
  }
}
//worst time complexity n^2


// Better Approach (using Hashing):
//Time complexity : o(N)+o(N)
//Space Complexity: o(N) as we are using hashArray of order N

function missingNumber(a, N) {
  const hash = new Array(N + 1).fill(0); // hash array

  // storing the frequencies:
  for (let i = 0; i < N - 1; i++) {
    hash[a[i]]++;
    console.log("hash", hash)
  }

  // checking the frequencies for numbers 1 to N:
  for (let i = 1; i <= N; i++) {
    if (hash[i] === 0) {
      return i;
    }
  }

  // The following line will never execute.
  // It is just to avoid warnings.
  return -1;
}

function main() {
  const N = 5;
  const a = [1,1, 2, 4, 5];
  const ans = missingNumber(a, N);
  console.log("The missing number is:", ans);
}

main(); 


//Summation Approach:
// We know that the summation of the first N numbers is (N*(N+1))/2. We can say this S1. Now, in the given array, every number between 1 to N except one number is present. So, if we add the numbers of the array (say S2), the difference between S1 and S2 will be the missing number. Because, while adding all the numbers of the array, we did not add that particular number that is missing.
function missingNumber3(a, N) {
  // Summation of first N numbers:
  const summation = (N * (N + 1)) / 2;

  // Summation of all array elements:
  let s2 = 0;
  for (let i = 0; i < N - 1; i++) {
    s2 += a[i];
  }

  const missingNum = summation - s2;
  return missingNum;
}





function missingNumber4(a, N) {
  let xor1 = 0;
  let xor2 = 0;

  for (let i = 0; i < N - 1; i++) {
    xor2 = xor2 ^ a[i]; // XOR of array elements
    xor1 = xor1 ^ (i + 1); // XOR up to [1...N-1]
    console.log(xor1,xor2)
  }
  xor1 = xor1 ^ N; // XOR up to [1...N]
  console.log("x011",xor1)


  return xor1 ^ xor2; // the missing number
}

function main4() {
  const N = 5;
  const a = [1, 2, 4, 5];
  const ans = missingNumber4(a, N);
  console.log("The missing number is:", ans);
}

main4();


