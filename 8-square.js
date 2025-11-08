// 8-square.js

const args = process.argv.slice(2);
const size = parseInt(args[0], 10);

if (isNaN(size) || size <= 0) {
  console.log("Missing size");
} else {
  let i = 0;
  const row = "X".repeat(size); // create a row of Xs
  while (i < size) {
    console.log(row);
    i++;
  }
}
