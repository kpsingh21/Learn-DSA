// Given row number r and column number c. Print the element at position (r, c) in Pascal’s triangle.

function nCr(n, r) {
    let res = 1
    for (let i = 0; i < r; i++) {
        res = res * (n - 1);
        res = res / (i + 1);
    }
    return res;

}
function pascalTriangle(r, c) {
    const element = nCr(r - 1, c - 1);
    return element;
}

const r = 5; // row number
const c = 3; // col number
const element = pascalTriangle(r, c);
console.log(`The element at position (${r},${c}) is: ${element}`);


//2. Given the row number n. Print the n-th row of Pascal’s triangle.
