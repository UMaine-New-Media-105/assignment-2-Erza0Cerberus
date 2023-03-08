Gridded Initial with function

let startSquareX = 0;
let startSquareY = 0;
let squareSize = 80;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // gridded initial with function
  //column 1
  fill("aquamarine");
  rect(0, 0, 80); // A bounding box for our bear.

  rect(80, 0, 80); // A bounding box for our bear.

  rect(startSquareX + 80 * 2, startSquareY, squareSize);

  fill("dodgerblue");

  rect(startSquareX + 80 * 3, startSquareY, squareSize);

  fill("aquamarine");

  rect(startSquareX + 80 * 4, startSquareY, squareSize);

  //column2
  fill("aquamarine");

  rect(startSquareX + 0, startSquareY + 80, squareSize);

  rect(startSquareX + 80, startSquareY + 80, squareSize);

  fill("dodgerblue");

  rect(startSquareX + 160, startSquareY + 80, squareSize);

  fill("aquamarine");

  rect(startSquareX + 240, startSquareY + 80, squareSize);

  rect(startSquareX + 320, startSquareY + 80, squareSize);

  //column 3
  fill("aquamarine");

  rect(startSquareX + 0, startSquareY + 160, squareSize);

  fill("dodgerblue");

  rect(startSquareX + 80, startSquareY + 160, squareSize);

  fill("aquamarine");

  rect(startSquareX + 160, startSquareY + 160, squareSize);

  rect(startSquareX + 240, startSquareY + 160, squareSize);

  rect(startSquareX + 320, startSquareY + 160, squareSize);

  //column 4
  fill("aquamarine");

  rect(startSquareX + 0, startSquareY + 240, squareSize);

  rect(startSquareX + 80, startSquareY + 240, squareSize);

  fill("dodgerblue");

  rect(startSquareX + 160, startSquareY + 240, squareSize);

  fill("aquamarine");

  rect(startSquareX + 240, startSquareY + 240, squareSize);

  rect(startSquareX + 320, startSquareY + 240, squareSize);

  //column 5
  fill("aquamarine");

  rect(startSquareX + 0, startSquareY + 320, squareSize);

  rect(startSquareX + 80, startSquareY + 320, squareSize);

  rect(startSquareX + 160, startSquareY + 320, squareSize);

  fill("dodgerblue");

  rect(startSquareX + 240, startSquareY + 320, squareSize);

  fill("aquamarine");

  rect(startSquareX + 320, startSquareY + 320, squareSize);
}
