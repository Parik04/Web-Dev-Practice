console.log("i am hsdind ineind")

//loops(5 types)
//for loop
//for in loop-loops through the keys of an object
//for of loop-loops through the values of an object
//while loop
//do-while loop

let obj = {
    name: "Parikshit",
    role: "CEO",
    company: "OpenAI"
}

for (const key in obj) {      //type forin and enter   
    console.log(key)    
}
for (const key in obj) {      //type forin and enter
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key,element)
    }
}

for (const char of "Buddy") {   //type forof and enter
    console.log(char) 
}

//Arrow Functions(also called lambda functions)
const func1 = (x)=>{
    console.log("I am an Arrow Function" , x)
}

func1(34);
func1(66);
func1(87);
