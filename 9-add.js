
function add(a,b){
    let total = a+b
    console.log(total)
}
const args = process.argv[2];
const args1 = process.argv[3];
const num = Number(args);
const num1 = Number(args1);


add(num,num1)