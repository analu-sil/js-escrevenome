function setup() {
  createCanvas(600, 600);
  background("gray");
}

function draw() {
  stroke("red")
  fill("pink");

  // console.log(mouseIsPressed)

  if (mouseIsPressed) {
    rect(mouseX, mouseY, 20, 35);
  }
}
