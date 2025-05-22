const args = process.argv[2];


if (args.isInteger(num)) {
  console.log("Not a number");
} else {
    args=Number(args)
  console.log(`My number: ${args}`);
}