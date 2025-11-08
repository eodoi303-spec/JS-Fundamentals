// 10-factorial.js

// Function to compute factorial recursively
function factorial(n) {
  if (isNaN(n) || n <= 1) return 1; // Factorial of NaN or 0 or 1 is 1
  return n * factorial(n - 1);
}

// Get the first argument and cast it to integer
const num = parseInt(process.argv[2]);

// Print the factorial
console.log(factorial(num));
