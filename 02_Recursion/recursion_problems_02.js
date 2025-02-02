//1.  Sum of first N Natural Numbers

//without Recursion
// function sumofNNum(n){
//     let sum =0;
//     for (i =1; i<=n; i++){
//         sum += i;
//     }
//     // console.log(sum)
//     return sum;
// }
// console.log(sumofNNum(3))

//With Recursion
//Parameterized Way
function sumofNNum(i, sum) {
    if (i === 0) {
        console.log("Final Sum:", sum);
        return;
    };
    sumofNNum(i - 1, sum + i)
}
sumofNNum(3, 0)

//Functional Way
function sumofNNumII(n) {
    if (n === 0) {
        return 0;
    };
    return n + sumofNNumII(n - 1);
}
console.log(sumofNNumII(3))

//Problem 2:  Factorial of a Number : Iterative and Recursive

// 1.Recursive way
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n*factorial(n-1);
}
console.log(factorial(5))
//Time and space complexity is O(N)
// we will not count fun that is fully executed

//2. Iterative Way
function factorialIterativeWay(n) {
    let product =1
    for ( let i=1; i<=n ; i++){
         product *= i
    }
    return product;
}
console.log(factorialIterativeWay(5))

