const args = process.argv[2];
const num = Number(args);

if (Number.isInteger(num)) {
  console.log(`My number: ${num}`);
} else {
  console.log("Not a number");
}
