function addTwo(num:number):number{
    return num +2
    // return"hi"
}

function getUpper(val:string){
    return val.toUpperCase()
}

function signUpUser(name:string,email:string,isPaid:boolean){


}

let loginUser=(name:string,email:string,isPaid:boolean=false)=>{

}


addTwo(5)
getUpper("ef4")

signUpUser("dhruv","d@gmail.com",false)
loginUser("d","d")


const heros = ["thor","me"]
heros.map((h:string):string=>{
    return "comma juta pell"
})

//never type represents values which are never observed.function throws an exception or terminates execution of the program
function handleError(errmsg:string):never{
    throw new Error(errmsg)
}

export {}