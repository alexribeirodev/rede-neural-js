function setup() {
  createCanvas(500, 500);
  background(0);

  let rn = new RedeNeural(1, 3, 5);

  let arr = [1, 2];
  rn.feedForward(arr);
}

function draw() {}
