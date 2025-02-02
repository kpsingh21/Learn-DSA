// Problem-1: Print your Name N times using recursion

//without recursion:
// function printNameNTimes(n){
//     for (let i=0; i< n ; i++){
//         console.log("Krishna");
//     }
// }
// printNameNTimes(5)

//withRecursion
function printNameNTimes(i,n) {
    if (i > n) { //base condition
        return
    }
    process.stdout.write("krishna" + "\n");
    printNameNTimes(i+1,n)
}
//its Time complexity is O(N) and spcae complexity is also O(N)  
// printNameNTimes(1,5)

// Problem 2: Print 1 to N using Recursion

//without recursion
// function printOnetoN(n){
//     for (let i=1; i<=n ; i++){
//         console.log(i);
//     }
// }
// printOnetoN(6)

//With Recursion
function printOnetoN(i,n){
    if (i > n){
        return;
    }
    process.stdout.write(i + "\n");
    printOnetoN(i+1,n); 
}
// printOnetoN(1,6);
//its Time complexity is O(N) and spcae complexity is also O(N)  

// 🔹 Optimized Approach (Using Tail Recursion)
// In JavaScript, recursion may lead to a stack overflow for large values of N. A better approach is tail recursion, which can be optimized by JavaScript engines.
function printOnetoNtail(i, n) {
    if (i > n) return;
    console.log(i);
    return printOnetoN(i + 1, n);
}
// printOnetoNtail(1, 7);

// Using Backtracking: after base condition hit it start unwinding
// Print 1 to N
function print1toN(n){
    if (n<1) return;
    print1toN(n-1);
    console.log(n)
}
print1toN(10);

//Problem 3: Print N to 1 using Recursion

// without recursion
// function printNtoOne(n){
//     for (let i = n; i >= 1; i--){
//         console.log(i);
//     }
// }
// printNtoOne(6)

// with recursion
function printNtoOne(n){
    if(n < 1 ){
      return;
    }
    console.log(n);
    printNtoOne(n-1);
}
// printNtoOne(9)

//With Backtracking


