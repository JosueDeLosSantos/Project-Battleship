export function isEmpty(arr) {
  let answer = null;

  if (arr.length !== 0) {
    answer = true;
  } else {
    answer = false;
  }

  return answer;
}

function matrixDown(v, matrix) {
  const result = [];
  let found = false;
  if (v === 3) {
    while (found === false) {
      const I = Math.floor(Math.random() * 10);
      const J = Math.floor(Math.random() * 8);

      if (I > 0 && I < 9 && J > 0 && J < 7) {
        if (
          isEmpty(matrix[I - 1][J - 1]) &&
          isEmpty(matrix[I][J - 1]) &&
          isEmpty(matrix[I + 1][J - 1]) &&
          isEmpty(matrix[I - 1][J]) &&
          isEmpty(matrix[I][J]) &&
          isEmpty(matrix[I + 1][J]) &&
          isEmpty(matrix[I - 1][J + 1]) &&
          isEmpty(matrix[I][J + 1]) &&
          isEmpty(matrix[I + 1][J + 1]) &&
          isEmpty(matrix[I - 1][J + 2]) &&
          isEmpty(matrix[I][J + 2]) &&
          isEmpty(matrix[I + 1][J + 2]) &&
          isEmpty(matrix[I - 1][J + 3]) &&
          isEmpty(matrix[I][J + 3]) &&
          isEmpty(matrix[I + 1][J + 3])
        ) {
          result.push(matrix[I][J]);
          let record = result[0][1];
          for (let i = 0; i < 2; i += 1) {
            record += 1;
            result.push(matrix[result[0][0]][record]);
          }
          found = true;
        }
      }
      if (I === 0 && J > 0 && J < 7) {
        if (
          isEmpty(matrix[I][J - 1]) &&
          isEmpty(matrix[I][J]) &&
          isEmpty(matrix[I][J + 1]) &&
          isEmpty(matrix[I][J + 2]) &&
          isEmpty(matrix[I + 1][J - 1]) &&
          isEmpty(matrix[I + 1][J]) &&
          isEmpty(matrix[I + 1][J + 1]) &&
          isEmpty(matrix[I + 1][J + 2])
        ) {
          result.push(matrix[I][J]);
          let record = result[0][1];
          for (let i = 0; i < 2; i += 1) {
            record += 1;
            result.push(matrix[result[0][0]][record]);
          }
          found = true;
        }
      }
      if (I === 9 && J > 0 && J < 7) {
        if (
          isEmpty(matrix[I][J - 1]) &&
          isEmpty(matrix[I][J]) &&
          isEmpty(matrix[I][J + 1]) &&
          isEmpty(matrix[I][J + 2]) &&
          isEmpty(matrix[I - 1][J - 1]) &&
          isEmpty(matrix[I - 1][J]) &&
          isEmpty(matrix[I - 1][J + 1]) &&
          isEmpty(matrix[I - 1][J + 2])
        ) {
          result.push(matrix[I][J]);
          let record = result[0][1];
          for (let i = 0; i < 2; i += 1) {
            record += 1;
            result.push(matrix[result[0][0]][record]);
          }
          found = true;
        }
      }
      if (J === 7 && I > 0 && I < 9) {
        if (
          isEmpty(matrix[I][J - 1]) &&
          isEmpty(matrix[I][J]) &&
          isEmpty(matrix[I][J + 1]) &&
          isEmpty(matrix[I][J + 2]) &&
          isEmpty(matrix[I - 1][J - 1]) &&
          isEmpty(matrix[I - 1][J]) &&
          isEmpty(matrix[I - 1][J + 1]) &&
          isEmpty(matrix[I - 1][J + 2]) &&
          isEmpty(matrix[I + 1][J - 1]) &&
          isEmpty(matrix[I + 1][J]) &&
          isEmpty(matrix[I + 1][J + 1]) &&
          isEmpty(matrix[I + 1][J + 2])
        ) {
          result.push(matrix[I][J]);
          let record = result[0][1];
          for (let i = 0; i < 2; i += 1) {
            record += 1;
            result.push(matrix[result[0][0]][record]);
          }
          found = true;
        }
      }

      if (J === 0 && I > 0 && I < 9) {
        if (
          isEmpty(matrix[I][J]) &&
          isEmpty(matrix[I][J + 1]) &&
          isEmpty(matrix[I][J + 2]) &&
          isEmpty(matrix[I][J + 3]) &&
          isEmpty(matrix[I - 1][J]) &&
          isEmpty(matrix[I - 1][J + 1]) &&
          isEmpty(matrix[I - 1][J + 2]) &&
          isEmpty(matrix[I - 1][J + 3]) &&
          isEmpty(matrix[I + 1][J]) &&
          isEmpty(matrix[I + 1][J + 1]) &&
          isEmpty(matrix[I + 1][J + 2]) &&
          isEmpty(matrix[I + 1][J + 3])
        ) {
          result.push(matrix[I][J]);
          let record = result[0][1];
          for (let i = 0; i < 2; i += 1) {
            record += 1;
            result.push(matrix[result[0][0]][record]);
          }
          found = true;
        }
      }

      if (I === 0 && J === 0) {
        if (
          isEmpty(matrix[I][J]) &&
          isEmpty(matrix[I][J + 1]) &&
          isEmpty(matrix[I][J + 2]) &&
          isEmpty(matrix[I][J + 3]) &&
          isEmpty(matrix[I + 1][J]) &&
          isEmpty(matrix[I + 1][J + 1]) &&
          isEmpty(matrix[I + 1][J + 2]) &&
          isEmpty(matrix[I + 1][J + 3])
        ) {
          result.push(matrix[I][J]);
          let record = result[0][1];
          for (let i = 0; i < 2; i += 1) {
            record += 1;
            result.push(matrix[result[0][0]][record]);
          }
          found = true;
        }
      }

      if (I === 0 && J === 7) {
        if (
          isEmpty(matrix[I][J - 1]) &&
          isEmpty(matrix[I][J]) &&
          isEmpty(matrix[I][J + 1]) &&
          isEmpty(matrix[I][J + 2]) &&
          isEmpty(matrix[I + 1][J - 1]) &&
          isEmpty(matrix[I + 1][J]) &&
          isEmpty(matrix[I + 1][J + 1]) &&
          isEmpty(matrix[I + 1][J + 2])
        ) {
          result.push(matrix[I][J]);
          let record = result[0][1];
          for (let i = 0; i < 2; i += 1) {
            record += 1;
            result.push(matrix[result[0][0]][record]);
          }
          found = true;
        }
      }

      if (I === 9 && J === 0) {
        if (
          isEmpty(matrix[I][J]) &&
          isEmpty(matrix[I][J + 1]) &&
          isEmpty(matrix[I][J + 2]) &&
          isEmpty(matrix[I][J + 3]) &&
          isEmpty(matrix[I - 1][J]) &&
          isEmpty(matrix[I - 1][J + 1]) &&
          isEmpty(matrix[I - 1][J + 2]) &&
          isEmpty(matrix[I - 1][J + 3])
        ) {
          result.push(matrix[I][J]);
          let record = result[0][1];
          for (let i = 0; i < 2; i += 1) {
            record += 1;
            result.push(matrix[result[0][0]][record]);
          }
          found = true;
        }
      }

      if (I === 9 && J === 7) {
        if (
          isEmpty(matrix[I][J - 1]) &&
          isEmpty(matrix[I][J]) &&
          isEmpty(matrix[I][J + 1]) &&
          isEmpty(matrix[I][J + 2]) &&
          isEmpty(matrix[I - 1][J - 1]) &&
          isEmpty(matrix[I - 1][J]) &&
          isEmpty(matrix[I - 1][J + 1]) &&
          isEmpty(matrix[I - 1][J + 2])
        ) {
          result.push(matrix[I][J]);
          let record = result[0][1];
          for (let i = 0; i < 2; i += 1) {
            record += 1;
            result.push(matrix[result[0][0]][record]);
          }
          found = true;
        }
      }
    }
  }
  return result;
}

export function big3(matrix) {
  const side = Math.floor(Math.random() * 2);
  let result = null;
  if (side === 0) {
    result = matrixDown(3, matrix);
  } else {
    result = matrixUp(3, matrix);
  }
  return result;
}
