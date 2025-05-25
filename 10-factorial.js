
function fact(num){
    i=1
    while (i<=num){
        let total =0
        total *= i
    }
    console.log(`The factorial is ${total}`)
}

const args = process.argv[2];
const nums = Number(args);
fact(nums)