/*
Goal: creat a game that records the reaction time (between the timestamp when shape is created and the timestamp when shape is clicked)

Hints: 
1. Simplify the game
2. How to record the two timestamps? - start, end
3. What happens when the button is clicked? What happens when the shape is clicked? Are these two the same or different?
4. to display a shape - set style.display = "block"; make it disappear - style.display = "none";
5. minor things: how to set random position/color/size/shape

Create a global variable, start, to store the starting time for each new shape

1. create a function - makeShape() - generate a random shape, display it on the screen, record the start

    1. create a new shape
        1. set random position
        2. random color
        3. random shape
        4. random size
    2. display the shape -  set style.display = "block";
    3. record the time - create a new Date object, assign it to the global variable start

Clicking on the button triggers makeShape() - creating shape with something random and record the start time


2. create a function displayReaction() - record the end time, calculate the duration, display the duration, create a new shape after random waiting time

    1. get the end time - create a new Date object (new Date()), and assign it to a variable end
    2. calculate the duration in seconds: duration = (end - start)/1000
    3. display the duration - use innerHTML/innerText
    4. create a variable, randomWaitingTime which is a random number in range (1000, 5000), call function makeShape
    setTimeout(makeShape, randomWaitingTime)

Clicking on the shape triggers  - record the end time, calculate the duration, display the duration, create new shape after random waiting time

*/

const shape = document.getElementById("shape");
let start; // Store the start time when the shape is appears

function makeShape() {
  // 1. Modify shape
  //     1. set random position
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;

  const top = Math.random() * (windowHeight - 150);
  const left = Math.random() * (windowWidth - 150);
  shape.style.top = top + "px";
  shape.style.left = left + "px";
  //     2. random color
  shape.style.backgroundColor = createRandomColor();
  //     3. random shape - 50% square, 50% circle
  if (Math.random() < 0.5) {
    shape.style.borderRadius = "50%";
  } else {
    shape.style.borderRadius = "0";
  }
  //     4. random size - w(50,150) h (50,150)
  const randomLength = Math.random() * 100 + 50;
  shape.style.width = randomLength + "px";
  shape.style.height = randomLength + "px";
  // 2. display the shape -  set style.display = "block";
  shape.style.display = "block";
  // 3. record the time - create a new Date object, assign it to the global variable start
  start = new Date().getTime();
}

function createRandomColor() {
  // return random color
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const color = "rgb(" + red + "," + green + "," + blue + ")";
  return color;
}

document.getElementById("start").onclick = function () {
  makeShape();
};

function displayReaction() {
  // 1. get the end time - create a new Date object (new Date()), and assign it to a variable end
  const end = new Date().getTime();
  // 2. calculate the duration in seconds: duration = (end - start)/1000
  const duration = (end - start) / 1000;
  // 3. display the duration - use innerHTML/innerText
  document.getElementById("timeTaken").innerHTML = duration + "s";
  // 4. make the shape disappear
  shape.style.display = "none";
  // 5. create a variable, randomWaitingTime which is a random number in range (1000, 5000), call function makeShape
  // setTimeout(makeShape, randomWaitingTime)
  const randomWaitingTime = Math.random() * 4000 + 1000;
  setTimeout(makeShape, randomWaitingTime);
}

shape.onclick = function () {
  displayReaction();
};
