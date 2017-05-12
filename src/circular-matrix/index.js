// matrix = [[row], [row],.......,[row]];
let spiral = (matrix) => {
  let rows = matrix.length;
  let cols = matrix[0].length;
  let result = [];
  while(matrix.length > 0) {
    let top = matrix.shift();
    top.map(i => result.push(i));
    matrix = rotate(matrix);
  }
  return result;
}

let rotate = (matrix) => {
  
  let result = [];
  if(matrix.length) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let c = 0;
    while(c < cols) {
      result[c] = [];
      for(let i = 0; i < rows; i++) {
        result[c].push(matrix[i][(cols-c) -1]);
      }
      c++;
    }
  }
  
  return result;
}

export default spiral;