const args = process.argv[2];
const num = Number(args);



    if (Number.isInteger(num)) {
        let i=0
        while (i<num){
            console.log("X".repeat(num))
            i++
        }
        } else {
    console.log("Missing size");
    }
        