const names = ["Aarav", "Sanya", "Vikram", "Neha", "Rohan", "Priya", "Amit", "Meera", "Rajiv", "Ananya"];
let nameIndex = 0;
function displayCurrentName() {
  let nameDisplay = document.getElementById('names');
  nameDisplay.innerText = names[nameIndex];
}

function previousName() {
  nameIndex--;
  if (nameIndex < 0) {
    nameIndex = names.length - 1;
  }
  displayCurrentName();
}

function nextName() {
  nameIndex++;
  if (nameIndex >= names.length) {
    nameIndex = 0;
  }
  displayCurrentName();
}

