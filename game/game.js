//Functions: Random location, color, shape-size, and shape

function color() {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;
  return rgb(r, g, b);
}

function shapeSize(){

}

// Create a global variable to record the start of each shape(time)

// Display shape = set style.display = "block"

// Main Function: game()
// Function is triggered by start button onclick or repeated every time a shape is clicked.
// The shape is displayed using different functions that assign random location, color, shape-size and shape.
// The time it takes to click the shape is measured t1-t2. From moment it starts to end(click on shape)
// Once the shape is clicked, the time will be displayed. This is changed once is clicked again. 

function game() {
  const t1 = new Date();

  const t2 = new Date();
  const time = t1 - t2;
}
