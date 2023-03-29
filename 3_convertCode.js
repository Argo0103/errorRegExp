// function mapArray(arr) {
//     return Array.isArray(arr)
//     ? arr.map((item) => item * 2)
//     : "map is not a function";
//     }

function mapArray(arr){
    try{
        if(Array.isArray(arr)){
           arr.map((item) => item * 2) 
        } else {
            throw new TypeError("map is not a function")
        }
    } catch(error){
        return error
    }
}

