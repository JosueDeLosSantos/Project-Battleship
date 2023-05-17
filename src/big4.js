export default function big4(matrix) {
  const result = [];
  const side = () => Math.floor(Math.random() * 2);

  if (side() === 0) {
    const I = Math.floor(Math.random() * 10);
    const J = Math.floor(Math.random() * 7);
    result.push(matrix[I][J]);
    let record = result[0][1];
    for (let i = 0; i < 3; i += 1) {
      record += 1;
      result.push(matrix[result[0][0]][record]);
    }
  } else {
    const I = Math.floor(Math.random() * 7);
    const J = Math.floor(Math.random() * 10);
    result.push(matrix[I][J]);
    let record = result[0][0];
    for (let i = 0; i < 3; i += 1) {
      record += 1;
      result.push(matrix[record][result[0][1]]);
    }
  }
  return result;
}
