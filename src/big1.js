function isEmpty(arr) {
  let answer = null;

  if (arr.length !== 0) {
    answer = true;
  } else {
    answer = false;
  }

  return answer;
}

export default function big1(matrix) {
  const result = [];
  let found = false;

  while (found === false) {
    const I = Math.floor(Math.random() * 10);
    const J = Math.floor(Math.random() * 10);

    if (I > 0 && I < 9 && J > 0 && J < 9) {
      if (
        isEmpty(matrix[I - 1][J - 1]) &&
        isEmpty(matrix[I][J - 1]) &&
        isEmpty(matrix[I + 1][J - 1]) &&
        isEmpty(matrix[I - 1][J]) &&
        isEmpty(matrix[I][J]) &&
        isEmpty(matrix[I + 1][J]) &&
        isEmpty(matrix[I - 1][J + 1]) &&
        isEmpty(matrix[I][J + 1]) &&
        isEmpty(matrix[I + 1][J + 1])
      ) {
        result.push(matrix[I][J]);
        found = true;
      }
    }

    if (I === 0 && J > 0 && J < 9) {
      if (
        isEmpty(matrix[I][J - 1]) &&
        isEmpty(matrix[I][J]) &&
        isEmpty(matrix[I][J + 1]) &&
        isEmpty(matrix[I + 1][J - 1]) &&
        isEmpty(matrix[I + 1][J]) &&
        isEmpty(matrix[I + 1][J + 1])
      ) {
        result.push(matrix[I][J]);
        found = true;
      }
    }

    if (I === 9 && J > 0 && J < 9) {
      if (
        isEmpty(matrix[I][J - 1]) &&
        isEmpty(matrix[I][J]) &&
        isEmpty(matrix[I][J + 1]) &&
        isEmpty(matrix[I - 1][J - 1]) &&
        isEmpty(matrix[I - 1][J]) &&
        isEmpty(matrix[I - 1][J + 1])
      ) {
        result.push(matrix[I][J]);
        found = true;
      }
    }
    if (J === 9 && I > 0 && I < 9) {
      if (
        isEmpty(matrix[I][J - 1]) &&
        isEmpty(matrix[I][J]) &&
        isEmpty(matrix[I - 1][J - 1]) &&
        isEmpty(matrix[I - 1][J]) &&
        isEmpty(matrix[I + 1][J - 1]) &&
        isEmpty(matrix[I + 1][J])
      ) {
        result.push(matrix[I][J]);
        found = true;
      }
    }

    if (J === 0 && I > 0 && I < 9) {
      if (
        isEmpty(matrix[I][J]) &&
        isEmpty(matrix[I][J + 1]) &&
        isEmpty(matrix[I - 1][J]) &&
        isEmpty(matrix[I - 1][J + 1]) &&
        isEmpty(matrix[I + 1][J]) &&
        isEmpty(matrix[I + 1][J + 1])
      ) {
        result.push(matrix[I][J]);
        found = true;
      }
    }

    if (I === 0 && J === 0) {
      if (
        isEmpty(matrix[I][J]) &&
        isEmpty(matrix[I][J + 1]) &&
        isEmpty(matrix[I + 1][J]) &&
        isEmpty(matrix[I + 1][J + 1])
      ) {
        result.push(matrix[I][J]);
        found = true;
      }
    }

    if (I === 0 && J === 9) {
      if (
        isEmpty(matrix[I][J - 1]) &&
        isEmpty(matrix[I][J]) &&
        isEmpty(matrix[I + 1][J - 1]) &&
        isEmpty(matrix[I + 1][J])
      ) {
        result.push(matrix[I][J]);
        found = true;
      }
    }

    if (I === 9 && J === 0) {
      if (
        isEmpty(matrix[I][J]) &&
        isEmpty(matrix[I][J + 1]) &&
        isEmpty(matrix[I - 1][J]) &&
        isEmpty(matrix[I - 1][J + 1])
      ) {
        result.push(matrix[I][J]);
        found = true;
      }
    }

    if (I === 9 && J === 9) {
      if (
        isEmpty(matrix[I][J - 1]) &&
        isEmpty(matrix[I][J]) &&
        isEmpty(matrix[I - 1][J - 1]) &&
        isEmpty(matrix[I - 1][J])
      ) {
        result.push(matrix[I][J]);
        found = true;
      }
    }
  }
  return result;
}
