// 7-multi_c.js

const args = process.argv.slice(2);
const x = parseInt(args[0], 10);

if (isNaN(x) || x <= 0) {
  console.log("Missing number of occurrences");
} else {
  let i = 0;
  let output = "";
  while (i < x) {
    output += "C is fun\n";
    i++;
  }
  console.log(output.trim());
}
