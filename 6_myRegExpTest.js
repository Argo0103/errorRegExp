function myRegExpr(str = ""){
    if((str.length === 4 || str.length === 6)){
       const reg = /(\d)$/g 
       return reg.test(str)
    }
    
    return false
}

console.log(myRegExpr("1254"));