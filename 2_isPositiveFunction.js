function isPositive(a){
    try{
        if(isNaN(a) === false){
            if(a > 0){
                return "Yes"
            } else if(a === 0){
                throw new Error("Zero Error")
            } else{
                throw new Error("Negative Error")
            }
        } else{
            throw new Error("Argument is not a number")
        }
    } catch(error){
        return error
    }
}
console.log(isPositive("1"));