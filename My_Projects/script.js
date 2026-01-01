console.log('code is running')

var a = 5;
var b = 7;
var c = "parik";

console.log(a + b + 13)
console.log(typeof a, typeof b, typeof c)

//var is globally scoped while let and const are block scoped  

let o = {
    "name": "Parik",
    "salary in cr": 5600
}
o.ID = 7
console.log(o)

// ** operator is exponentiation

let my_name = "parik"
let friend = "rohan"

console.log("my name is " + my_name + " and my friend's name is " + friend) //method 1 to print
console.log(`my name is ${my_name} and my friend's name is ${friend}`) //method 2 to print

let word = " is the ceo of"
let str = "Parikshit"
console.log(str.toUpperCase())
console.log(str.length)
console.log(str.slice(2,7))
console.log(str.slice(3))
console.log(str.replace("Pa" , "pa"))
console.log(str.concat(word , " Google" , " and is at the forefront of AI"))  //we can even use + operator
console.log(str.startsWith("Pa"))
console.log(str.endsWith("an"))

let line = "you rock"
let newline = line.replace("rock" , "suck")

//IMPORTANT- STRINGS ARE IMMUTABLE(cannot be changed)


//BUSINESS NAME GENERATOR
let rand =  Math.random()
let first,second,third;
// Lets generate the first word
if(rand<0.33){
    first = "Crazy"
}
else if(rand<0.66 && rand>=0.33){
    first = "Amazing"
}
else{
    first = "Fire"
}

// Lets generate the second word
rand = Math.random()
if(rand<0.33){
    second = "Engine"
}
else if(rand<0.66 && rand>=0.33){
    second = "Foods"
}
else{
    second = "Garments"
}

// Lets generate the third word
rand = Math.random()
if(rand<0.33){
    third = "Bros"
}
else if(rand<0.66 && rand>=0.33){
    third = "Limited"
}
else{
    third = "Hub"
}

console.log(`${first} ${second} ${third}`)

