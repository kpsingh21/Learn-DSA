// Set Matrix Zero:
// Problem Statement: Given a matrix if an element in the matrix is 0 then you will have to set its entire column and row to 0 and then return the matrix.


function markRow(matrix, n, m, i) {
    // set all non-zero elements as -1 in the row i:
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] !== 0) {
        matrix[i][j] = -1;
      }
    }
  }
  
  function markCol(matrix, n, m, j) {
    // set all non-zero elements as -1 in the col j:
    for (let i = 0; i < n; i++) {
      if (matrix[i][j] !== 0) {
        matrix[i][j] = -1;
      }
    }
  }
  
  function zeroMatrix(matrix, n, m) {
    // Set -1 for rows and cols that contains 0. Don't mark any 0 as -1:
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (matrix[i][j] === 0) {
          markRow(matrix, n, m, i);
          markCol(matrix, n, m, j);
        }
      }
    }
    // Finally, mark all -1 as 0:
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (matrix[i][j] === -1) {
          matrix[i][j] = 0;
        }
      }
    }
    return matrix;
  }
  
  const matrix = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];
  
  const n = matrix.length;
  const m = matrix[0].length;
  
  const ans = zeroMatrix(matrix, n, m);
  
  console.log("The Final matrix is: ");
  for (let i = 0; i < n; i++) {
    console.log(ans[i].join(" "));
  }



//Better Approch

function zeroMatrix(matrix) {
    const n = matrix.length;
    const m = matrix[0].length;
    const row = new Array(n).fill(0); // row array
    const col = new Array(m).fill(0); // col array

    // Traverse the matrix:
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (matrix[i][j] === 0) {
                // mark ith index of row with 1:
                row[i] = 1;

                // mark jth index of col with 1:
                col[j] = 1;
            }
        }
    }

    // Finally, mark all (i, j) as 0
    // if row[i] or col[j] is marked with 1.
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (row[i] || col[j]) {
                matrix[i][j] = 0;
            }
        }
    }

    return matrix;
}

// const matrix = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];
// const ans = zeroMatrix(matrix);

console.log("The Final matrix is:");
for (const row of ans) {
    console.log(row.join(" "));
}    

