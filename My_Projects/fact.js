let num = prompt("enter a number")

// function factorial(x){
//     let fact = 1;
//     for(let i = x; i>0;i--){
//         fact = fact * i
//     }
//     return fact
// }
let arr = []
let j=0;
for(let i = num; i>0; i--){
    arr[j] = i;
    j++;
}
const factorial = (a ,b)=>{
    return a*b
}
let fact = arr.reduce(factorial)

alert(fact)