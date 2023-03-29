function regExpCheck(str){
    try{
        const reg = /[A-Z][a-z][0-9]$/g
        const result = reg.test(str)
        
        if(result === false){
            throw new Error("error")
        } else {
            return result
        }
    } catch(error){
        return error
    }
}
console.log(regExpCheck("AaAa1"));