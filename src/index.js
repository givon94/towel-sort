
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let newArray = [];
  
  if (matrix) {
    for (let i = 0; i < matrix.length; i++) {
      if (i % 2 !== 0) {
        newArray.push(matrix[i].reverse());
      } else {
        newArray.push(matrix[i]);
      }
    }
  }

  return newArray.flat();
}
