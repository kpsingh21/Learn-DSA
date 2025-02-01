// Rectangular Star Pattern 
for (let i = 0; i < 5; i++) {
    let row = ""
    for (let j = 0; j < 5; j++) {
        row += "* "
    }
    // console.log(row);
}

// function squarePattern(n){
//     for (let i = 0; i < n; i++) {
//         let row = ""
//         for (let j = 0; j < n; j++) {
//             row += "* "
//         }
//         console.log(row);
//     }
// }
// console.log(squarePattern(7)); 

function squarePattern(n) {
    let pattern = ""; // Store the pattern as a string
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j < n; j++) {
            row += "* ";
        }
        pattern += row.trim() + "\n"; // Add newline after each row
    }
    return pattern; // Return instead of console.log()
}

// Print the pattern with an extra line after
// console.log(squarePattern(7) + "\n"); 
// console.log(squarePattern(9) + "\n"); 


// Pattern - 2: Right-Angled Star Pyramid
for (let i = 1; i <= 5; i++ ){
    let row = ""
    for (let j = 1; j <=i; j++ ){
        row += "* "
    }
    // console.log(row);
}

function rightAngledStarPyramid(n) {
    for (let i = 1; i <= n; i++ ){
        let row = ""
        for (let j = 1; j <=i; j++ ){
            row += "* "
        }
        process.stdout.write(row.trim() + "\n"); // Print row and move to next line
    }
    process.stdout.write("\n"); // Extra newline after the pattern
}

// rightAngledStarPyramid(7);

// Pattern - 3: Right-Angled Number Pyramid
function rightAngledNumPyramid(n) {
    for (let i = 1; i <= n; i++ ){
        let row = ""
        for (let j = 1; j <=i; j++ ){
            row += `${j} `
        }
        process.stdout.write(row.trim() + "\n"); // Print row and move to next line
    }
    process.stdout.write("\n"); // Extra newline after the pattern
}

// rightAngledNumPyramid(7);

// Pattern - 4: Right-Angled Number Pyramid - II
function rightAngledNumPyramidII(n) {
    for (let i = 1; i <= n; i++ ){
        let row = ""
        for (let j = 1; j <=i; j++ ){
            row += `${i} `
        }
        process.stdout.write(row.trim() + "\n"); // Print row and move to next line
    }
    process.stdout.write("\n"); // Extra newline after the pattern
}
// rightAngledNumPyramidII(5)


// Pattern-5: Inverted Right Pyramid
function invertedRightPyramid(n) {
    for (let i = n; i > 0; i--) {  // Loop from n to 1
        let row = "";
        for (let j = 0; j < i; j++) { // Print `i` stars in each row
            row += "* ";
        }
        console.log(row.trim()); // Print the row and remove trailing space
    }
}
invertedRightPyramid(5);
