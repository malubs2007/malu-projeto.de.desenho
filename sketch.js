function setup() {
    createCanvas(400, 400);
    background(100);
  }
  
  function draw() {
  
    stroke("white");
    fill("pink");
  
    // console.log(mouseIsPressed);
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 25, 15);
    }
  }
  