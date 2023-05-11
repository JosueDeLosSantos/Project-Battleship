export function isEmpty(arr) {
  let answer = null;

  if (arr.length !== 0) {
    answer = true;
  } else {
    answer = false;
  }

  return answer;
}

export function big3(matrix) {
  const result = [];
  const side = () => Math.floor(Math.random() * 2);

  if (side() === 0) {
    const I = Math.floor(Math.random() * 10);
    const J = Math.floor(Math.random() * 8);

    if (I === 0 || I === 9) {
      if (I === 0) {
        if (J === 7) {
          if (
            isEmpty(matrix[I][J]) &&
            isEmpty(matrix[I][J + 1]) &&
            isEmpty(matrix[I][J + 2]) &&
            isEmpty(matrix[I + 1][J]) &&
            isEmpty(matrix[I + 1][J + 1]) &&
            isEmpty(matrix[I + 1][J + 2]) &&
            isEmpty(matrix[I][J - 1]) &&
            isEmpty(matrix[I + 1][J - 1])
          ) {
            result.push(matrix[I][J]);
            let record = result[0][1];
            for (let i = 0; i < 2; i += 1) {
              record += 1;
              result.push(matrix[result[0][0]][record]);
            }
            return result;
          } else {
            big3(matrix);
          }
        } else {
          if (J !== 0) {
            if (
              isEmpty(matrix[I][J]) &&
              isEmpty(matrix[I][J + 1]) &&
              isEmpty(matrix[I][J + 2]) &&
              isEmpty(matrix[I + 1][J]) &&
              isEmpty(matrix[I + 1][J + 1]) &&
              isEmpty(matrix[I + 1][J + 2]) &&
              isEmpty(matrix[I][J - 1]) &&
              isEmpty(matrix[I + 1][J - 1]) &&
              isEmpty(matrix[I][J + 1]) &&
              isEmpty(matrix[I + 1][J + 1])
            ) {
              result.push(matrix[I][J]);
              let record = result[0][1];
              for (let i = 0; i < 2; i += 1) {
                record += 1;
                result.push(matrix[result[0][0]][record]);
              }
              return result;
            } else {
              big3(matrix);
            }
          } else {
            if (
              isEmpty(matrix[I][J]) &&
              isEmpty(matrix[I][J + 1]) &&
              isEmpty(matrix[I][J + 2]) &&
              isEmpty(matrix[I + 1][J]) &&
              isEmpty(matrix[I + 1][J + 1]) &&
              isEmpty(matrix[I + 1][J + 2]) &&
              isEmpty(matrix[I][J + 3]) &&
              isEmpty(matrix[I + 1][J + 3])
            ) {
              result.push(matrix[I][J]);
              let record = result[0][1];
              for (let i = 0; i < 2; i += 1) {
                record += 1;
                result.push(matrix[result[0][0]][record]);
              }
              return result;
            } else {
              big3(matrix);
            }
          }
        }
      }

      if (I === 9) {
        if (J === 7) {
          if (
            isEmpty(matrix[I][J]) &&
            isEmpty(matrix[I][J + 1]) &&
            isEmpty(matrix[I][J + 2]) &&
            isEmpty(matrix[I - 1][J]) &&
            isEmpty(matrix[I - 1][J + 1]) &&
            isEmpty(matrix[I - 1][J + 2]) &&
            isEmpty(matrix[I][J - 1]) &&
            isEmpty(matrix[I - 1][J - 1])
          ) {
            result.push(matrix[I][J]);
            let record = result[0][1];
            for (let i = 0; i < 2; i += 1) {
              record += 1;
              result.push(matrix[result[0][0]][record]);
            }
            return result;
          } else {
            big3(matrix);
          }
        } else {
          if (J === 0) {
            if (
              isEmpty(matrix[I][J]) &&
              isEmpty(matrix[I][J + 1]) &&
              isEmpty(matrix[I][J + 2]) &&
              isEmpty(matrix[I - 1][J]) &&
              isEmpty(matrix[I - 1][J + 1]) &&
              isEmpty(matrix[I - 1][J + 2]) &&
              isEmpty(matrix[I][J + 3]) &&
              isEmpty(matrix[I - 1][J + 3])
            ) {
              result.push(matrix[I][J]);
              let record = result[0][1];
              for (let i = 0; i < 2; i += 1) {
                record += 1;
                result.push(matrix[result[0][0]][record]);
              }
              return result;
            } else {
              big3(matrix);
            }
          } else {
            if (
              isEmpty(matrix[I][J - 1]) &&
              isEmpty(matrix[I][J]) &&
              isEmpty(matrix[I][J + 1]) &&
              isEmpty(matrix[I][J + 2]) &&
              isEmpty(matrix[I][J + 3]) &&
              isEmpty(matrix[I - 1][J - 1]) &&
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
              return result;
            } else {
              big3(matrix);
            }
          }
        }
      }
    } else {
      if (J === 7) {
        if (
          isEmpty(matrix[I][J]) &&
          isEmpty(matrix[I][J + 1]) &&
          isEmpty(matrix[I][J + 2]) &&
          isEmpty(matrix[I - 1][J]) &&
          isEmpty(matrix[I - 1][J + 1]) &&
          isEmpty(matrix[I - 1][J + 2]) &&
          isEmpty(matrix[I + 1][J]) &&
          isEmpty(matrix[I + 1][J + 1]) &&
          isEmpty(matrix[I + 1][J + 2]) &&
          isEmpty(matrix[I - 1][J - 1]) &&
          isEmpty(matrix[I][J - 1]) &&
          isEmpty(matrix[I + 1][J - 1])
        ) {
          result.push(matrix[I][J]);
          let record = result[0][1];
          for (let i = 0; i < 2; i += 1) {
            record += 1;
            result.push(matrix[result[0][0]][record]);
          }
          return result;
        } else {
          big3(matrix);
        }
      } else {
        if (J !== 0) {
          if (
            isEmpty(matrix[I][J]) &&
            isEmpty(matrix[I][J + 1]) &&
            isEmpty(matrix[I][J + 2]) &&
            isEmpty(matrix[I - 1][J]) &&
            isEmpty(matrix[I - 1][J + 1]) &&
            isEmpty(matrix[I - 1][J + 2]) &&
            isEmpty(matrix[I + 1][J]) &&
            isEmpty(matrix[I + 1][J + 1]) &&
            isEmpty(matrix[I + 1][J + 2]) &&
            isEmpty(matrix[I - 1][J - 1]) &&
            isEmpty(matrix[I][J - 1]) &&
            isEmpty(matrix[I + 1][J - 1]) &&
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
            return result;
          } else {
            big3(matrix);
          }
        } else {
          if (
            isEmpty(matrix[I][J]) &&
            isEmpty(matrix[I][J + 1]) &&
            isEmpty(matrix[I][J + 2]) &&
            isEmpty(matrix[I - 1][J]) &&
            isEmpty(matrix[I - 1][J + 1]) &&
            isEmpty(matrix[I - 1][J + 2]) &&
            isEmpty(matrix[I + 1][J]) &&
            isEmpty(matrix[I + 1][J + 1]) &&
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
            return result;
          } else {
            big3(matrix);
          }
        }
      }
    }
  } else {
    let I = Math.floor(Math.random() * 8);
    let J = Math.floor(Math.random() * 10);
    I = 7;
    J = 9;

    if (I === 0 || I === 7) {
      if (I === 0) {
        if (J === 9) {
          if (
            isEmpty(matrix[I][J]) &&
            isEmpty(matrix[I + 1][J]) &&
            isEmpty(matrix[I + 2][J]) &&
            isEmpty(matrix[I + 3][J]) &&
            isEmpty(matrix[I][J - 1]) &&
            isEmpty(matrix[I + 1][J - 1]) &&
            isEmpty(matrix[I + 2][J - 1]) &&
            isEmpty(matrix[I + 3][J - 1])
          ) {
            result.push(matrix[I][J]);
            let record = result[0][0];
            for (let i = 0; i < 2; i += 1) {
              record += 1;
              result.push(matrix[record][result[0][1]]);
            }
            return result;
          } else {
            big3(matrix);
          }
        } else {
          if (J === 0) {
            if (
              isEmpty(matrix[I][J]) &&
              isEmpty(matrix[I + 1][J]) &&
              isEmpty(matrix[I + 2][J]) &&
              isEmpty(matrix[I + 3][J]) &&
              isEmpty(matrix[I][J + 1]) &&
              isEmpty(matrix[I + 1][J + 1]) &&
              isEmpty(matrix[I + 2][J + 1]) &&
              isEmpty(matrix[I + 3][J + 1])
            ) {
              result.push(matrix[I][J]);
              let record = result[0][0];
              for (let i = 0; i < 2; i += 1) {
                record += 1;
                result.push(matrix[record][result[0][1]]);
              }
              return result;
            } else {
              big3(matrix);
            }
          } else {
            if (
              isEmpty(matrix[I][J]) &&
              isEmpty(matrix[I + 1][J]) &&
              isEmpty(matrix[I + 2][J]) &&
              isEmpty(matrix[I + 3][J]) &&
              isEmpty(matrix[I][J + 1]) &&
              isEmpty(matrix[I + 1][J + 1]) &&
              isEmpty(matrix[I + 2][J + 1]) &&
              isEmpty(matrix[I + 3][J + 1]) &&
              isEmpty(matrix[I][J - 1]) &&
              isEmpty(matrix[I + 1][J - 1]) &&
              isEmpty(matrix[I + 2][J - 1]) &&
              isEmpty(matrix[I + 3][J - 1])
            ) {
              result.push(matrix[I][J]);
              let record = result[0][0];
              for (let i = 0; i < 2; i += 1) {
                record += 1;
                result.push(matrix[record][result[0][1]]);
              }
              return result;
            } else {
              big3(matrix);
            }
          }
        }
      }

      if (I === 7) {
        if (J === 9) {
          console.log("I === 7");
        } else {
          console.log("I === 7");
        }
      }
    } else {
      if (J === 7) {
        console.log("yup");
      }

      if (J === 0) {
        console.log("something");
      } else {
        console.log("nop");
      }
    }
  }
}
