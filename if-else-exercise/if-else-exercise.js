///////////Q1:Write a js program to find maximum between two numbers.
let num1 = prompt("Enter any number")
let num2 = prompt("Enter any number")
let num3 = prompt("Enter any number")

if (num1 > num2) {
    document.getElementById("maxNumber").innerHTML = `${num1} num1 is greater then num2`;
} else {
    document.getElementById("maxNumber").innerHTML = `${num2} num2 is greater then num1`;
}

///////////Q2:Write a js program to find maximum between three numbers.
if (num1 > num2) {
    if (num1 > num3) {
        document.getElementById("findMaxNumber").innerHTML = `${num1} num1 is greater then num2 and num3`;
    } else {
        document.getElementById("findMaxNumber").innerHTML = `${num3} num3 is greater then num1 and num1`;
    }
} else if (num2 > num1) {
    if (num2 > num3) {
        document.getElementById("findMaxNumber").innerHTML = `${num2} b is greater then a and c`;
    } else {
        document.getElementById("findMaxNumber").innerHTML = `${num3} c is greater then a and b`;
    }
} else if (num3 > num1) {
    if (num3 > num2) {
        document.getElementById("findMaxNumber").innerHTML = `${num3} c is greater then a and b`;
    } else {
        document.getElementById("findMaxNumber").innerHTML = `${num2} b is greater then a and c`;
    }
}

///////////Q3:Write a js program to check whether a number is negative, positive or zero.

let number = prompt("Enter any number")
if (number > 0) {
    document.getElementById("checkNumber").innerHTML = `${number}: number is positive`
} else if (number < 0) {
    document.getElementById("checkNumber").innerHTML = `${number}: number is negative`
} else if (number == 0) {
    document.getElementById("checkNumber").innerHTML = `${number}: number is equal to`
}

///////////Q4:Write a js program to check whether a number is divisible by 5 and 11 or not.

let number1= prompt("Enter any number")

if(number1 % 5 == 0){
    document.getElementById("divisibleNumber").innerHTML=`${number1} is divisible by 5 `
}else if(number1 % 11==0){
    document.getElementById("divisibleNumber").innerHTML=`${number1} is divisible by 11`
}else{
    document.getElementById("divisibleNumber").innerHTML=`${number1} is not divisible by 5 and 11`
}

///////////Q5:Write a js program to check whether a number is even or odd.

if(number1%2==0){
    document.getElementById("numberEvenOrOdd").innerHTML=`${number1} is even number`
}else if(number1%2==1){
    document.getElementById("numberEvenOrOdd").innerHTML=`${number1} is odd number`
}else {
    document.getElementById("numberEvenOrOdd").innerHTML=`${number1}its not a number`
}

/////////Q6:Write a js program to check whether a year is leap year or not.

let leapYear=prompt("Enter leap year number value")

if(leapYear % 4 == 0 && leapYear%100 != 0 || leapYear % 400 == 0){
    document.getElementById("leapYear").innerHTML=`${leapYear} is a leap year`
}else {
    document.getElementById("leapYear").innerHTML=`${leapYear} is not a leap year`
}

/////////Q7:Write a js program to check whether a character is alphabet or not.

let alpha = prompt("Enter any alphabetic")

if(alpha >= 'a' && alpha <= 'z' || alpha >= 'A' && alpha <= 'Z'){
    document.getElementById("alphabetCharacter").innerHTML=`${alpha} is a alphabetic`
}else{
    document.getElementById("alphabetCharacter").innerHTML=`${alpha} is not a alphabetic`
}

///////////Q8:Write a js program to input any alphabet and check whether it is vowel or consonant.

let findCharacter = prompt("Enter any alphabetic")
if(findCharacter == 'a'|| findCharacter == 'e' || findCharacter == 'i' ||findCharacter == 'o' || findCharacter == 'u'){
    document.getElementById("vowelAndConsonant").innerHTML=`${findCharacter} is vowel alphabet `
}else {
    document.getElementById("vowelAndConsonant").innerHTML=`${findCharacter} is consonant alphabet` 
}

/////////Q9:Write a js program to input any character and check whether it is alphabet, digit or special character.

let alphaDigitSpecial = prompt("check input is alphabatic digit and special character")

if (alphaDigitSpecial >= 'a' && alphaDigitSpecial <= 'z' || alphaDigitSpecial >= 'A' && alphaDigitSpecial <= 'Z') {
    document.getElementById("alphaDigitSpeacial").innerHTML=`${alphaDigitSpecial} is a alphabetic`
}else if (parseInt(alphaDigitSpecial) != NaN) {
    document.getElementById("alphaDigitSpeacial").innerHTML=`${alphaDigitSpecial} is a digit`
}else {
    document.getElementById("alphaDigitSpeacial").innerHTML=`${alphaDigitSpecial} is a special character`
}

/////////Q10:Write a js program to check whether a character is uppercase or lowercase alphabet.

let alphaChar = prompt("enter any alphabet character.")

if (alphaChar >= 'a' && alphaChar <='z'){
    document.getElementById("lowerCaseAndUpperCase").innerHTML=` ${alphaChar} is lowerCase character` 
}else if(alphaChar >= 'A' && alphaChar <='Z'){
    document.getElementById("lowerCaseAndUpperCase").innerHTML=` ${alphaChar} is uppercase character` 
}

/////////Q11:Write a js program to input week number and print week day.

let weekDay = prompt("Enter any number 1 to 7")

if(weekDay == 
    1){
    document.getElementById("weekDay").innerHTML=` Today is monday`
}else if(weekDay == 2){
    document.getElementById("weekDay").innerHTML=` Today is Tuesday`
}else if(weekDay == 3){
    document.getElementById("weekDay").innerHTML=` Today is Wednesday`
}
else if(weekDay == 4){
    document.getElementById("weekDay").innerHTML=` Today is Thursday`
}
else if(weekDay == 5){
    document.getElementById("weekDay").innerHTML=` Today is Friday`
}
else if(weekDay == 6){
    document.getElementById("weekDay").innerHTML=` Today is Saturday`
}
else if(weekDay == 7){
    document.getElementById("weekDay").innerHTML=` Today is Sunday`
}else{
    document.getElementById("weekDay").innerHTML=` enter corrent number 1 to 7`
}

/////////Q12:Write a js program to input month number and print number of days in that month.
let monthNumber = prompt("Enter any number 1 to 12")
if(monthNumber == 1){
    document.getElementById("monthNumber").innerHTML=`31 day in Junuary`
}else if(monthNumber == 2){
    document.getElementById("monthNumber").innerHTML=`28 day in Febrary`
}else if(monthNumber == 3){
    document.getElementById("monthNumber").innerHTML=`31 day in March`
}else if(monthNumber == 4){
    document.getElementById("monthNumber").innerHTML=`30 day in April`
}else if(monthNumber == 5){
    document.getElementById("monthNumber").innerHTML=`31 day in May`
}else if(monthNumber == 6){
    document.getElementById("monthNumber").innerHTML=`30 day in June`
}else if(monthNumber == 7){
    document.getElementById("monthNumber").innerHTML=`31 day in July`
}else if(monthNumber == 8){
    document.getElementById("monthNumber").innerHTML=`31 day in August`
}else if(monthNumber == 9){
    document.getElementById("monthNumber").innerHTML=`30 day in September`
}else if(monthNumber == 10){
    document.getElementById("monthNumber").innerHTML=`31 day in October`
}else if(monthNumber == 11){
    document.getElementById("monthNumber").innerHTML=`30 day in November`
}else if(monthNumber == 12){
    document.getElementById("monthNumber").innerHTML=`31 day in December`
}else{
    document.getElementById("monthNumber").innerHTML=`Enter correct number 1 to 12`
}

/////////Q14:Write a js program to input angles of a triangle and check whether triangle is valid or not.

let angle1 = prompt("Enter the value of angle1")
let angle2 = prompt("Enter the value of angle2")
let angle3 = prompt("Enter the value of angle3")

let sum_of_Tangles = parseInt(angle1) + parseInt(angle2) + parseInt(angle3);
console.log(sum_of_Tangles)
if(sum_of_Tangles == 180){
    document.getElementById("triAngle").innerHTML=`${sum_of_Tangles} This is a valid triangle`
}else {
    document.getElementById("triAngle").innerHTML=`${sum_of_Tangles} This is not a valid triangle`
}

/////////Q15:Write a js program to input all sides of a triangle and check whether triangle is valid or not.

let side1 = prompt("Enter the value of side1")
let side2 = prompt("Enter the value of side2")
let side3 = prompt("Enter the value of side3")

let sum_of_allSide = parseInt(side1)+parseInt(side2)+parseInt(side3)

if(sum_of_allSide == 180){
    document.getElementById("inputAllSide_Triangle").innerHTML=`${sum_of_allSide} This is not a valid side triangle`
}else {
    document.getElementById("inputAllSide_Triangle").innerHTML=`${sum_of_allSide} This is not a valid side triangle`
}

/////////Q16:Write a js program to check whether the triangle is equilateral, isosceles or scalene triangle.

let equilateral = prompt("Enter the value of equilateral triangle")
let isosceles = prompt("Enter the value of isosceles triangle")
let scalene = prompt("Enter the value of scalene triangle")

// let Tangles_sum = parseInt(equilateral) + parseInt(isosceles) + parseInt(scalene);

if(equilateral == isosceles && isosceles == scalene){
    document.getElementById("equilateral_isosceles_scalene").innerHTML=`This is equilateral triangle`
}else if(equilateral == isosceles || isosceles == scalene || scalene == equilateral){
    document.getElementById("equilateral_isosceles_scalene").innerHTML=`This is isosceles triangle`
}else {
    document.getElementById("equilateral_isosceles_scalene").innerHTML=`This is scalene triangle`
}
/////////Q19:Write a js program to calculate profit or loss.

let totalCost = prompt("Enter the total cost price")
let totalSell = prompt("Enter the total sell price")

if(totalSell >totalCost){
    let profit = totalSell - totalCost
    console.log(`${profit} this a total profile`)
}else{
    console.log(`${profit} this a total lose`)
}

/////////Q19:Write a js program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F

let compSubject = prompt("Enter the mark of computer subject")
let urduSubject = prompt("Enter the mark of urdu subject")
let EngSubject = prompt("Enter the mark of english subject")
let phySubject = prompt("Enter the mark of physis subject")
let MthSubject = prompt("Enter the mark of math subject")
let totalMark = 500;
let sum_of_marks = parseInt(compSubject)+parseInt(urduSubject)+parseInt(EngSubject)+parseInt(phySubject)+parseInt(MthSubject)
// console.log(sum_of_marks)
let percentage= (sum_of_marks /totalMark)*100
// console.log(percentage)

if(percentage>=90){
    document.getElementById("calculate_grade").innerHTML=`your total mark is ${sum_of_marks} and your percentage  ${percentage}% and you get A grade`
}else if(percentage>=80){
    document.getElementById("calculate_grade").innerHTML=`your total mark is ${sum_of_marks} and your percentage ${percentage}% and you get B grade`
}else if(percentage>=70){
    document.getElementById("calculate_grade").innerHTML=`your total mark is ${sum_of_marks} and your percentage ${percentage}% and you get C grade`
}else if(percentage>=60){
    document.getElementById("calculate_grade").innerHTML=`your total mark is ${sum_of_marks} and your percentage ${percentage}% and you get D grade`
}else if(percentage>=40){
    document.getElementById("calculate_grade").innerHTML=`your total mark is ${sum_of_marks} and your percentage ${percentage}% and you get E grade`
}else if(percentage<40){
    document.getElementById("calculate_grade").innerHTML=`your total mark is ${sum_of_marks} and your percentage ${percentage}% and you are fail`
}


/////////Q20:Write a js program to input basic salary of an employee and calculate its Gross salary according to following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%

let Basic_salary = prompt("Enter your basic salary")

let hra=prompt("Enter your house rent")
let da=prompt("Enter your dearness allowance")
house_rent=(Basic_salary*hra)/100
console.log("house rent",house_rent)

dearness_allowance= (Basic_salary*da)/100
console.log("dearness allowance",dearness_allowance)

if(Basic_salary<=10000){
   let gross_salary = parseInt(Basic_salary)  + parseInt(house_rent)  + parseInt(dearness_allowance) 
   console.log(gross_salary)
}else if(Basic_salary<=20000){
    let gross_salary = parseInt(Basic_salary)  + parseInt(house_rent)  + parseInt(dearness_allowance) 
    console.log(gross_salary)
 }else if(Basic_salary>20000){
    let gross_salary = parseInt(Basic_salary)  + parseInt(house_rent)  + parseInt(dearness_allowance) 
    console.log(gross_salary)
 }

/////////Q21:Write a js program to input electricity unit charges and calculate total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill

let unit = prompt("Enter a total unit")

if(unit<=50){
    let totalBill= unit * 0.50
    console.log(`${totalBill} Your total bill`);
}else if(unit<=150){
    let totalBill= unit * 0.75
    console.log(`${totalBill} Your total bill`);
}else if(unit<=200){
    let totalBill= unit * 1.20
    console.log(`${totalBill} Your total bill`);
}else if(unit<=250){
    let totalBill= unit * 1.50
    console.log(`${totalBill} Your total bill`);
}
