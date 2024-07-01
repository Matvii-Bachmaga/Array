const rows = 10;
const cols = 10;

const randomArray = [];

for (let i = 0; i < rows; i++) {
  randomArray[i] = [];
  for (let j = 0; j < cols; j++) {
    randomArray[i][j] = Math.floor(Math.random() * 10) + 1;
  }
}

console.log(randomArray);
console.table(randomArray);

let total = 0;
for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
    total += randomArray[i][j];
  }
}
const average = total / (rows * cols);
console.log("Середнє значення:", average);

const rowMins = [];
const rowMaxs = [];
const colMins = [];
const colMaxs = [];

for (let i = 0; i < rows; i++) {
  rowMins[i] = randomArray[i][0];
  rowMaxs[i] = randomArray[i][0];
}

for (let j = 0; j < cols; j++) {
  colMins[j] = randomArray[0][j];
  colMaxs[j] = randomArray[0][j];
}

for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
    rowMins[i] = Math.min(rowMins[i], randomArray[i][j]);
    rowMaxs[i] = Math.max(rowMaxs[i], randomArray[i][j]);
    colMins[j] = Math.min(colMins[j], randomArray[i][j]);
    colMaxs[j] = Math.max(colMaxs[j], randomArray[i][j]);
  }
}

console.log("Мінімальні значення в рядках:", rowMins);
console.log("Максимальні значення в рядках:", rowMaxs);
console.log("Мінімальні значення в стовпцях:", colMins);
console.log("Максимальні значення в стовпцях:", colMaxs);