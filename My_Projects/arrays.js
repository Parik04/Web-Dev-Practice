//arrays are variables that can hold more than one value(can be different types)
//arrays are mutable(can be changed)
//in JS, arrays are treated as objects

let arr = [1,3,5,6,9];

arr[0] = 24 //mutability
console.log(arr , typeof arr)
console.log(arr.length)
console.log(arr.toString())  //converts array to string
console.log(arr.join(" and "))

arr.pop()            //removes last element
console.log(arr)

arr.push(36)       //adds 36 to the end
console.log(arr)

arr.push("parik")
console.log(arr)

arr.shift()        //removes first element
console.log(arr)

arr.unshift("Buddy")  //adds element to first position 
console.log(arr)

delete arr[2]        //deletes value but memory location remains
console.log(arr)
console.log(arr.length)

let a1 = [1,2,3]
let a2 = [4,5,6,7]
let a3 = [8,9] 
console.log(a1.concat(a2,a3))  //does not change existing arrays


let nums = [1,2,3,4,5]
nums.splice(2 , 1, 23 , 24)  //returns deleted items, modifies the array
        //(position to add , no of elements to remove, elements to be added)
console.log(nums)

let a = [1,93,5,6,88]
for(let i = 0 ; i<a.length; i++){
    console.log(a[i])
}

a.forEach((index,value) => {
    console.log(index,value)
});

for (const val of a) {
    console.log(val)
}

let Arr = [1,13,5,7,11]
let NewArr = []
for (let index = 0; index < Arr.length; index++) {
    const element = Arr[index]
    NewArr.push(element**2)
    
}
console.log(NewArr)

let newArr = Arr.map((e)=>{
    return e**2
})
console.log(newArr)

const GreaterThan25 = (e)=>{
    if(e>25){
        return true
    }
    return false
}

console.log(newArr.filter(GreaterThan25))

console.log(Array.from("Cricket"))