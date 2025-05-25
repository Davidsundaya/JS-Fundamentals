
function fact(num){
    let i=1
    let total =1
    while (i<=num){
        total *= i
        i++
    }
    console.log(total)
}

const args = process.argv[2];
const nums = Number(args);
fact(nums)