function reversString(s){
    try{
        if(typeof s === "string"){
            return s.split("").reverse().join("")
        } else{
            throw new TypeError("Data type is not a string")
         }
    } catch(error){
        console.log(error)
    } 

    return `input:: ${s}`
    
}

console.log(reversString(1234));