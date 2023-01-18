// Q1:Take input and print square of front them.

let array1 = [2,4,7,8,9,12,15]
let square;

for(let i=0;i<array1.length; i++){
    square=array1[i] * array1[i]
    document.getElementById("ArraySquare").innerHTML += "&nbsp" + square
    // console.log(square)
}

//Q2:find a number maximum and minimum in aa array

let array2 = [22,32,11,6,43,38,98,65,45,35,76,9,3,27]

minValue=Math.min(...array2)
maxValue=Math.max(...array2)

document.getElementById("findMaxAndMin").innerHTML += `${minValue} is a max value in array and ${maxValue} is a min value in array`

//Q3:table print of array Value


//Q4:Take a value and sort it

let sortArray = [22,32,11,6,43,38,98,65,45,35,76,9,3,27]
sortArray.sort(function(a,b){return a-b})
document.getElementById("sortValue").innerHTML += `sort the array Value: ${sortArray}`


// Q5:Take number element and tell even and odd and their sum 

let ArrayValue= [22,32,11,6,43,38,98,65,45,35,76,9,3,27]

let newEvenArray=ArrayValue.filter((value)=>{
   return value%2==0
})
let newOddArray = ArrayValue.filter((value)=>{
    return value % 2==1;
})

document.getElementById("evenOddValue").innerHTML += `Even value is ${newEvenArray} and Odd value is ${newOddArray}`

// Q6:Find number if it is possible and find index

let findValue= [22,32,11,6,43,38,98,65,45,35,76,9,3,27]
let newValue= findValue.indexOf(38)
document.getElementById("findIndex").innerHTML += `Find index of search value is : ${newValue}`


// let findNumber = ["Apple","Orange", "Mango"]
// let newIndex=findNumber.indexOf("Orange")
// console.log(newIndex)

