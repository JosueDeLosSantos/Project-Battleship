
export default function clear1(arr, matrix) {
    const newMatrix = matrix;
    const newArr = [];
    const noEmptyArr = [];
    if ((arr[0][0] > 0) &&
    (arr[0][0] < 9) &&
    (arr[0][1] > 0) &&
    (arr[0][1] < 9)){
        newArr.push(matrix.board[arr[0][0] - 1][arr[0][1] - 1]);
        newArr.push(matrix.board[arr[0][0] - 1][arr[0][1]]);
        newArr.push(matrix.board[arr[0][0] - 1][arr[0][1] + 1]);
  
        newArr.push(matrix.board[arr[0][0]][arr[0][1] - 1]);
        newArr.push(matrix.board[arr[0][0]][arr[0][1] + 1]);
  
        newArr.push(matrix.board[arr[0][0] + 1][arr[0][1] - 1]);
        newArr.push(matrix.board[arr[0][0] + 1][arr[0][1]]);
        newArr.push(matrix.board[arr[0][0] + 1][arr[0][1] + 1]);
    }
  
    if ((arr[0][0] === 0) && (arr[0][1] === 0)){
      newArr.push(matrix.board[arr[0][0]][arr[0][1] + 1]);
      newArr.push(matrix.board[arr[0][0] + 1][arr[0][1]]);
      newArr.push(matrix.board[arr[0][0] + 1][arr[0][1] + 1]);
    }
  
    if ((arr[0][0] === 0) && (arr[0][1] === 9)){
      newArr.push(matrix.board[arr[0][0]][arr[0][1] - 1]);
      newArr.push(matrix.board[arr[0][0] + 1][arr[0][1]]);
      newArr.push(matrix.board[arr[0][0] + 1][arr[0][1] - 1]);
    }
  
    if ((arr[0][0] === 9) && (arr[0][1] === 0)){
      newArr.push(matrix.board[arr[0][0] - 1][arr[0][1]]);
      newArr.push(matrix.board[arr[0][0] - 1][arr[0][1] + 1]);
      newArr.push(matrix.board[arr[0][0]][arr[0][1] + 1]);
    }
  
    if ((arr[0][0] === 9) && (arr[0][1] === 9)){
      newArr.push(matrix.board[arr[0][0] - 1][arr[0][1]]);
      newArr.push(matrix.board[arr[0][0] - 1][arr[0][1] - 1]);
      newArr.push(matrix.board[arr[0][0]][arr[0][1] - 1]);
    }
  
    if ((arr[0][0] === 0) && 
    (arr[0][1] > 0) &&
    (arr[0][1] < 9)){
      newArr.push(matrix.board[arr[0][0]][arr[0][1] - 1]);
      newArr.push(matrix.board[arr[0][0] + 1][arr[0][1] - 1]);
      newArr.push(matrix.board[arr[0][0] + 1][arr[0][1]]);
      newArr.push(matrix.board[arr[0][0] + 1][arr[0][1] + 1]);
      newArr.push(matrix.board[arr[0][0]][arr[0][1] + 1]);
    }
  
    if ((arr[0][0] === 9) && 
    (arr[0][1] > 0) &&
    (arr[0][1] < 9)){
      newArr.push(matrix.board[arr[0][0]][arr[0][1] - 1]);
      newArr.push(matrix.board[arr[0][0] - 1][arr[0][1] - 1]);
      newArr.push(matrix.board[arr[0][0] - 1][arr[0][1]]);
      newArr.push(matrix.board[arr[0][0] - 1][arr[0][1] + 1]);
      newArr.push(matrix.board[arr[0][0]][arr[0][1] + 1]);
    }
  
    if ((arr[0][1] === 0) && 
    (arr[0][0] > 0) &&
    (arr[0][0] < 9)){
      newArr.push(matrix.board[arr[0][0] - 1][arr[0][1]]);
      newArr.push(matrix.board[arr[0][0] - 1][arr[0][1] + 1]);
      newArr.push(matrix.board[arr[0][0]][arr[0][1] + 1]);
      newArr.push(matrix.board[arr[0][0] + 1][arr[0][1]]);
      newArr.push(matrix.board[arr[0][0] + 1][arr[0][1] + 1]);
    }
  
    if ((arr[0][1] === 9) && 
    (arr[0][0] > 0) &&
    (arr[0][0] < 9)){
      newArr.push(matrix.board[arr[0][0] - 1][arr[0][1]]);
      newArr.push(matrix.board[arr[0][0] - 1][arr[0][1] - 1]);
      newArr.push(matrix.board[arr[0][0]][arr[0][1] - 1]);
      newArr.push(matrix.board[arr[0][0] + 1][arr[0][1]]);
      newArr.push(matrix.board[arr[0][0] + 1][arr[0][1] - 1]);
    }
  
    newArr.forEach((el) => {
      if (el.length > 0) {
        noEmptyArr.push(el);
      }
    })
  
    for (let i = 0; i < newMatrix.board.length; i++) {
      for (let j = 0; j < newMatrix.board[i].length; j++) {
        noEmptyArr.forEach(el => {
          if (JSON.stringify(el) === JSON.stringify(newMatrix.board[i][j])){
            newMatrix.missedShot.push(el);
            newMatrix.board[i][j] = [];
          }
        });
      }
    }
    return newMatrix;
  }