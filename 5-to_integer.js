const args = process.argv[2];


if (args.isInteger(args)) {
  console.log("Not a number");
} else {
    args=Number(args)
  console.log(`My number: ${args}`);
}