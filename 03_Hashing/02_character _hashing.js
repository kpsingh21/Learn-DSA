// Character Hashing Using ASCII Values
// The ASCII value of 'a' is 97 and 'z' is 122.

// To map a character to an index in an array:
// index = character -a
// Example: 'f' - 'a' = 102 - 97 = 5 (so 'f' is stored at index 5).

// += 1	Increment by 1	Keeps the existing value and adds 1.
// =+ 1	Assign positive 1	Just assigns 1 (does NOT add to previous value).

// Initialize an array of size 26 with all values set to 0
let arr = new Array(26).fill(0);
let s = "abacaba";
for (let i = 0; i < s.length; i++) {
    arr[s.charCodeAt(i) - 97] += 1; // 'a' has ASCII 97
}

console.log(arr);
