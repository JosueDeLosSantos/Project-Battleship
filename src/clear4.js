function vertical (arr, matrix){
    const newMatrix = matrix;
    const newArr = [];
    const noEmptyArr = [];
    if ((arr[0][0] > 0) &&
    (arr[0][0] < 6) &&
    (arr[0][1] > 0) &&
    (arr[0][1] < 9)){
        newArr.push(matrix.board[arr[0][0] - 1][arr[0][1] - 1]);
        newArr.push(matrix.board[arr[0][0] - 1][arr[0][1]]);
        newArr.push(matrix.board[arr[0][0] - 1][arr[0][1] + 1]);

        newArr.push(matrix.board[arr[0][0]][arr[0][1] - 1]);
        newArr.push(matrix.board[arr[0][0]][arr[0][1] + 1]);
        newArr.push(matrix.board[arr[0][0] + 1][arr[0][1] - 1]);
        newArr.push(matrix.board[arr[0][0] + 1][arr[0][1] + 1]);
        newArr.push(matrix.board[arr[0][0] + 2][arr[0][1] - 1]);
        newArr.push(matrix.board[arr[0][0] + 2][arr[0][1] + 1]);
        newArr.push(matrix.board[arr[0][0] + 3][arr[0][1] - 1]);
        newArr.push(matrix.board[arr[0][0] + 3][arr[0][1] + 1]);

        newArr.push(matrix.board[arr[0][0] + 4][arr[0][1] - 1]);
        newArr.push(matrix.board[arr[0][0] + 4][arr[0][1]]);
        newArr.push(matrix.board[arr[0][0] + 4][arr[0][1] + 1]);
    }

    if ((arr[0][0] > 0) &&
    (arr[0][0] < 6) &&
    (arr[0][1] === 0)){
        newArr.push(matrix.board[arr[0][0] - 1][arr[0][1]]);

        newArr.push(matrix.board[arr[0][0] - 1][arr[0][1] + 1]);
        newArr.push(matrix.board[arr[0][0]][arr[0][1] + 1]);
        newArr.push(matrix.board[arr[0][0] + 1][arr[0][1] + 1]);
        newArr.push(matrix.board[arr[0][0] + 2][arr[0][1] + 1]);
        newArr.push(matrix.board[arr[0][0] + 3][arr[0][1] + 1]);
        newArr.push(matrix.board[arr[0][0] + 4][arr[0][1] + 1]);

        newArr.push(matrix.board[arr[0][0] + 4][arr[0][1]]);
    }

    if ((arr[0][0] > 0) &&
    (arr[0][0] < 6) &&
    (arr[0][1] === 9)){
        newArr.push(matrix.board[arr[0][0] - 1][arr[0][1]]);

        newArr.push(matrix.board[arr[0][0] - 1][arr[0][1] - 1]);
        newArr.push(matrix.board[arr[0][0]][arr[0][1] - 1]);
        newArr.push(matrix.board[arr[0][0] + 1][arr[0][1] - 1]);
        newArr.push(matrix.board[arr[0][0] + 2][arr[0][1] - 1]);
        newArr.push(matrix.board[arr[0][0] + 3][arr[0][1] - 1]);
        newArr.push(matrix.board[arr[0][0] + 4][arr[0][1] - 1]);

        newArr.push(matrix.board[arr[0][0] + 4][arr[0][1]]);
    }

    if ((arr[0][0] === 0) &&
    (arr[0][1] > 0) &&
    (arr[0][1] < 9)){
        newArr.push(matrix.board[arr[0][0]][arr[0][1] - 1]);
        newArr.push(matrix.board[arr[0][0]][arr[0][1] + 1]);
        newArr.push(matrix.board[arr[0][0] + 1][arr[0][1] - 1]);
        newArr.push(matrix.board[arr[0][0] + 1][arr[0][1] + 1]);
        newArr.push(matrix.board[arr[0][0] + 2][arr[0][1] - 1]);
        newArr.push(matrix.board[arr[0][0] + 2][arr[0][1] + 1]);
        newArr.push(matrix.board[arr[0][0] + 3][arr[0][1] - 1]);
        newArr.push(matrix.board[arr[0][0] + 3][arr[0][1] + 1]);
        newArr.push(matrix.board[arr[0][0] + 4][arr[0][1] + 1]);
        newArr.push(matrix.board[arr[0][0] + 4][arr[0][1]]);
        newArr.push(matrix.board[arr[0][0] + 4][arr[0][1] - 1]);
    }

    if ((arr[0][0] === 6) &&
    (arr[0][1] > 0) &&
    (arr[0][1] < 9)){
        newArr.push(matrix.board[arr[0][0]][arr[0][1] - 1]);
        newArr.push(matrix.board[arr[0][0]][arr[0][1] + 1]);
        newArr.push(matrix.board[arr[0][0] - 1][arr[0][1] - 1]);
        newArr.push(matrix.board[arr[0][0] - 1][arr[0][1] + 1]);
        newArr.push(matrix.board[arr[0][0] - 1][arr[0][1]]);
        newArr.push(matrix.board[arr[0][0] + 1][arr[0][1] - 1]);
        newArr.push(matrix.board[arr[0][0] + 1][arr[0][1] + 1]);
        newArr.push(matrix.board[arr[0][0] + 2][arr[0][1] - 1]);
        newArr.push(matrix.board[arr[0][0] + 2][arr[0][1] + 1]);
        newArr.push(matrix.board[arr[0][0] + 3][arr[0][1] - 1]);
        newArr.push(matrix.board[arr[0][0] + 3][arr[0][1] + 1]);
    }

    if ((arr[0][0] === 0) && (arr[0][1] === 0)){
        newArr.push(matrix.board[arr[0][0]][arr[0][1] + 1]);
        newArr.push(matrix.board[arr[0][0] + 1][arr[0][1] + 1]);
        newArr.push(matrix.board[arr[0][0] + 2][arr[0][1] + 1]);
        newArr.push(matrix.board[arr[0][0] + 3][arr[0][1] + 1]);
        newArr.push(matrix.board[arr[0][0] + 4][arr[0][1] + 1]);
        newArr.push(matrix.board[arr[0][0] + 4][arr[0][1]]);
    }

    if ((arr[0][0] === 0) && (arr[0][1] === 9)){
        newArr.push(matrix.board[arr[0][0]][arr[0][1] - 1]);
        newArr.push(matrix.board[arr[0][0] + 1][arr[0][1] - 1]);
        newArr.push(matrix.board[arr[0][0] + 2][arr[0][1] - 1]);
        newArr.push(matrix.board[arr[0][0] + 3][arr[0][1] - 1]);
        newArr.push(matrix.board[arr[0][0] + 4][arr[0][1] - 1]);
        newArr.push(matrix.board[arr[0][0] + 4][arr[0][1]]);
    }

    if ((arr[0][0] === 6) && (arr[0][1] === 9)){
        newArr.push(matrix.board[arr[0][0] - 1][arr[0][1] - 1]);
        newArr.push(matrix.board[arr[0][0] - 1][arr[0][1]]);
        newArr.push(matrix.board[arr[0][0]][arr[0][1] - 1]);
        newArr.push(matrix.board[arr[0][0] + 1][arr[0][1] - 1]);
        newArr.push(matrix.board[arr[0][0] + 2][arr[0][1] - 1]);
        newArr.push(matrix.board[arr[0][0] + 3][arr[0][1] - 1]);
    }
    
    if ((arr[0][0] === 6) && (arr[0][1] === 0)){
        newArr.push(matrix.board[arr[0][0] - 1][arr[0][1] + 1]);
        newArr.push(matrix.board[arr[0][0] - 1][arr[0][1]]);
        newArr.push(matrix.board[arr[0][0]][arr[0][1] + 1]);
        newArr.push(matrix.board[arr[0][0] + 1][arr[0][1] + 1]);
        newArr.push(matrix.board[arr[0][0] + 2][arr[0][1] + 1]);
        newArr.push(matrix.board[arr[0][0] + 3][arr[0][1] + 1]);
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

function horizontal(arr, matrix){
    const newMatrix = matrix;
    const newArr = [];
    const noEmptyArr = [];
    if ((arr[0][0] > 0) &&
    (arr[0][0] < 9) &&
    (arr[0][1] > 0) &&
    (arr[0][1] < 6)){
        newArr.push(matrix.board[arr[0][0] - 1][arr[0][1] - 1]);
        newArr.push(matrix.board[arr[0][0] - 1][arr[0][1]]);
        newArr.push(matrix.board[arr[0][0] - 1][arr[0][1] + 1]);
        newArr.push(matrix.board[arr[0][0] - 1][arr[0][1] + 2]);
        newArr.push(matrix.board[arr[0][0] - 1][arr[0][1] + 3]);
        newArr.push(matrix.board[arr[0][0] - 1][arr[0][1] + 4]);

        newArr.push(matrix.board[arr[0][0]][arr[0][1] - 1]);
        newArr.push(matrix.board[arr[0][0]][arr[0][1] + 4]);

        newArr.push(matrix.board[arr[0][0] + 1][arr[0][1] - 1]);
        newArr.push(matrix.board[arr[0][0] + 1][arr[0][1]]);
        newArr.push(matrix.board[arr[0][0] + 1][arr[0][1] + 1]);
        newArr.push(matrix.board[arr[0][0] + 1][arr[0][1] + 2]);
        newArr.push(matrix.board[arr[0][0] + 1][arr[0][1] + 3]);
        newArr.push(matrix.board[arr[0][0] + 1][arr[0][1] + 4]);
    }

    if ((arr[0][0] > 0) &&
    (arr[0][0] < 9) &&
    (arr[0][1] === 0)) {
        newArr.push(matrix.board[arr[0][0] - 1][arr[0][1]]);
        newArr.push(matrix.board[arr[0][0] - 1][arr[0][1] + 1]);
        newArr.push(matrix.board[arr[0][0] - 1][arr[0][1] + 2]);
        newArr.push(matrix.board[arr[0][0] - 1][arr[0][1] + 3]);
        newArr.push(matrix.board[arr[0][0] - 1][arr[0][1] + 4]);
        newArr.push(matrix.board[arr[0][0]][arr[0][1] + 4]);
        newArr.push(matrix.board[arr[0][0] + 1][arr[0][1]]);
        newArr.push(matrix.board[arr[0][0] + 1][arr[0][1] + 1]);
        newArr.push(matrix.board[arr[0][0] + 1][arr[0][1] + 2]);
        newArr.push(matrix.board[arr[0][0] + 1][arr[0][1] + 3]);
        newArr.push(matrix.board[arr[0][0] + 1][arr[0][1] + 4]);
    }

    if ((arr[0][0] > 0) &&
    (arr[0][0] < 9) &&
    (arr[0][1] === 6)) {
        newArr.push(matrix.board[arr[0][0]][arr[0][1] - 1]);
        newArr.push(matrix.board[arr[0][0] - 1][arr[0][1] - 1]);
        newArr.push(matrix.board[arr[0][0] - 1][arr[0][1]]);
        newArr.push(matrix.board[arr[0][0] - 1][arr[0][1] + 1]);
        newArr.push(matrix.board[arr[0][0] - 1][arr[0][1] + 2]);
        newArr.push(matrix.board[arr[0][0] - 1][arr[0][1] + 3]);
        newArr.push(matrix.board[arr[0][0] + 1][arr[0][1] - 1]);
        newArr.push(matrix.board[arr[0][0] + 1][arr[0][1]]);
        newArr.push(matrix.board[arr[0][0] + 1][arr[0][1] + 1]);
        newArr.push(matrix.board[arr[0][0] + 1][arr[0][1] + 2]);
        newArr.push(matrix.board[arr[0][0] + 1][arr[0][1] + 3]);
    }

    if ((arr[0][0] === 0) && 
    (arr[0][1] > 0) &&
    (arr[0][1] < 6)){
      newArr.push(matrix.board[arr[0][0]][arr[0][1] - 1]);
      newArr.push(matrix.board[arr[0][0] + 1][arr[0][1] - 1]);
      newArr.push(matrix.board[arr[0][0] + 1][arr[0][1]]);
      newArr.push(matrix.board[arr[0][0] + 1][arr[0][1] + 1]);
      newArr.push(matrix.board[arr[0][0] + 1][arr[0][1] + 2]);
      newArr.push(matrix.board[arr[0][0] + 1][arr[0][1] + 3]);
      newArr.push(matrix.board[arr[0][0] + 1][arr[0][1] + 4]);
      newArr.push(matrix.board[arr[0][0]][arr[0][1] + 4]);
    }

    if ((arr[0][0] === 9) && 
    (arr[0][1] > 0) &&
    (arr[0][1] < 6)){
      newArr.push(matrix.board[arr[0][0]][arr[0][1] - 1]);
      newArr.push(matrix.board[arr[0][0] - 1][arr[0][1] - 1]);
      newArr.push(matrix.board[arr[0][0] - 1][arr[0][1]]);
      newArr.push(matrix.board[arr[0][0] - 1][arr[0][1] + 1]);
      newArr.push(matrix.board[arr[0][0] - 1][arr[0][1] + 2]);
      newArr.push(matrix.board[arr[0][0] - 1][arr[0][1] + 3]);
      newArr.push(matrix.board[arr[0][0] - 1][arr[0][1] + 4]);
      newArr.push(matrix.board[arr[0][0]][arr[0][1] + 4]);
    }

    if ((arr[0][0] === 0) && (arr[0][1] === 0)){
        newArr.push(matrix.board[arr[0][0]][arr[0][1] + 4]);
        newArr.push(matrix.board[arr[0][0] + 1][arr[0][1]]);
        newArr.push(matrix.board[arr[0][0] + 1][arr[0][1] + 1]);
        newArr.push(matrix.board[arr[0][0] + 1][arr[0][1] + 2]);
        newArr.push(matrix.board[arr[0][0] + 1][arr[0][1] + 3]);
        newArr.push(matrix.board[arr[0][0] + 1][arr[0][1] + 4]);
    }

    if ((arr[0][0] === 0) && (arr[0][1] === 6)){
        newArr.push(matrix.board[arr[0][0]][arr[0][1] - 1]);
        newArr.push(matrix.board[arr[0][0] + 1][arr[0][1] - 1]);
        newArr.push(matrix.board[arr[0][0] + 1][arr[0][1]]);
        newArr.push(matrix.board[arr[0][0] + 1][arr[0][1] + 1]);
        newArr.push(matrix.board[arr[0][0] + 1][arr[0][1] + 2]);
        newArr.push(matrix.board[arr[0][0] + 1][arr[0][1] + 3]);
    }

    if ((arr[0][0] === 9) && (arr[0][1] === 0)){
        newArr.push(matrix.board[arr[0][0] - 1][arr[0][1]]);
        newArr.push(matrix.board[arr[0][0] - 1][arr[0][1] + 1]);
        newArr.push(matrix.board[arr[0][0] - 1][arr[0][1] + 2]);
        newArr.push(matrix.board[arr[0][0] - 1][arr[0][1] + 3]);
        newArr.push(matrix.board[arr[0][0] - 1][arr[0][1] + 4]);
        newArr.push(matrix.board[arr[0][0]][arr[0][1] + 4]);
    }

    if ((arr[0][0] === 9) && (arr[0][1] === 6)){
        newArr.push(matrix.board[arr[0][0]][arr[0][1] - 1]);
        newArr.push(matrix.board[arr[0][0] - 1][arr[0][1] - 1]);
        newArr.push(matrix.board[arr[0][0] - 1][arr[0][1]]);
        newArr.push(matrix.board[arr[0][0] - 1][arr[0][1] + 1]);
        newArr.push(matrix.board[arr[0][0] - 1][arr[0][1] + 2]);
        newArr.push(matrix.board[arr[0][0] - 1][arr[0][1] + 3]);
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

export default function clear4(arr, matrix) {
    let answer = null;
    if ((arr[0][0] && arr[1][0] && arr[2][0]) === arr[3][0]) {
        answer = horizontal(arr, matrix);
    }

    if ((arr[0][1] && arr[1][1] && arr[2][1]) === arr[3][1]) {
        answer = vertical(arr, matrix);
    }

    return answer
}