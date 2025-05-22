const args = process.argv[2];
const num = Number(args);



    if (Number.isInteger(num)) {
        let i=0
        while (i<num){
            console.log("C is fun")
            i++
        }
        } else {
    console.log("Missing number of occurrences");
    }
        