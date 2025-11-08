// 7-multi_c.js

// Get the first argument and try to convert it to an integer
const x = parseInt(process.argv[2]);

// Check if the argument is a valid number
if (isNaN(x)) {
  console.log("Missing number of occurrences");
} else {
  let count = 0;
  while (count < x) {
    console.log("C is fun");
    count++;
  }
}
