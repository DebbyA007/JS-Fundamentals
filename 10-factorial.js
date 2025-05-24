// Get the first argument passed to the script
const arg = parseInt(process.argv[2]);

// Define a recursive function to calculate factorial
function factorial(n) {
  if (isNaN(n)) return 1;
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

// Call the function and print the result
console.log(factorial(arg));
