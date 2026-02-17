// counter variable
let counter = 0;

// updates counter display
function updateCounter() {
  document.getElementById("counter").textContent = counter;
}

// increase counter
function tickUp() {
  counter++;
  updateCounter();
}

// decrease counter
function tickDown() {
  counter--;
  updateCounter();
}

// simple for loop
function runForLoop() {
  let result = "";

  for (let i = 0; i <= counter; i++) {
    result += i + " ";
  }

  document.getElementById("forLoopResult").textContent = result;
}

// repetition with condition, odd #s
function showOddNumbers() {
  let result = "";

  for (let i = 1; i <= counter; i++) {
    if (i % 2 !== 0) {
      result += i + " ";
    }
  }

  document.getElementById("oddNumberResult").textContent = result;
}

// array to console
function addMultiplesToArray() {
  let arr = [];

  for (let i = counter; i >= 5; i--) {
    if (i % 5 === 0) {
      arr.push(i);
    }
  }

  console.log(arr);
}

// print car object form
function printCarObject() {
  let type = document.getElementById("carType").value;
  let mpg = document.getElementById("carMPG").value;
  let color = document.getElementById("carColor").value;

  let car = {
    cType: type,
    cMPG: mpg,
    cColor: color
  };

  console.log(car);
}

// load car objects
function loadCar(num) {
  let car;

  if (num === 1) car = carObject1;
  if (num === 2) car = carObject2;
  if (num === 3) car = carObject3;

  document.getElementById("carType").value = car.cType;
  document.getElementById("carMPG").value = car.cMPG;
  document.getElementById("carColor").value = car.cColor;
}

// paragraph color change
function changeColor(num) {
  let paragraph = document.getElementById("styleParagraph");

  if (num === 1) paragraph.style.color = "red";
  if (num === 2) paragraph.style.color = "green";
  if (num === 3) paragraph.style.color = "blue";
}
