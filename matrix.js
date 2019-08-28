class Matrix {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;

    this.data = [];
    for (let i = 0; i < rows; i++) {
      let arr = [];
      for (let j = 0; j < cols; j++) {
        arr.push(0);
      }
      this.data.push(arr);
    }
  }

  static arrayToMatrix(arr) {
    let matrix = new Matrix(arr.length, 1);

    matrix.map((elm, i, j) => {
      return arr[i];
    });

    return matrix;
  }

  print() {
    console.table(this.data);
  }

  randomize() {
    this.map((el, i, j) => {
      return Math.random() * 2 - 1;
    });
  }

  static map(A, func) {
    let matrix = new Matrix(A.rows, A.cols);
    matrix.data = matrix.data.map((el, i, arr) => {
      return el.map((num, j) => {
        return func(num, i, j);
      });
    });

    return matrix;
  }

  map(func) {
    this.data = this.data.map((el, i, arr) => {
      return el.map((num, j) => {
        return func(num, i, j);
      });
    });

    return this;
  }

  static add(A, B) {
    let matrix = new Matrix(A.rows, A.cols);
    matrix.map((el, i, j) => {
      return A.data[i][j] + B.data[i][j];
    });

    return matrix;
  }

  static multiply(A, B) {
    let matrix = new Matrix(A.rows, B.cols);

    matrix.map((num, i, j) => {
      let sum = 0;
      for (let k = 0; k < A.cols; k++) {
        let el1 = A.data[i][k];
        let el2 = B.data[k][j];
        sum += el1 * el2;
      }
      return sum;
    });

    return matrix;
  }
}
