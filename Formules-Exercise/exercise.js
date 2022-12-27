
let l = 3;
let b = 3;
let sum = 2*(l+b)
document.getElementById("Q1").innerHTML = sum;
document.getElementById("Q2").innerHTML = l * b;
document.getElementById("Q3").innerHTML = l * l;
document.getElementById("Q4").innerHTML = l * 4;
document.getElementById("Q5").innerHTML = 1/2*(l * b);

let b1 = 3;
let b2 = 2;
let r = 5;
let h = 4;
let pi = 3.14
let sqrt = (h*h)+(r*r)
let getSqrt = Math.sqrt(sqrt);
console.log(getSqrt)

var trapisium_area = 1/2*(b1 * b2)*h;
document.getElementById("Q6").innerHTML = trapisium_area;
document.getElementById("Q7").innerHTML = 22/7 *(b1 * b1);
document.getElementById("Q8").innerHTML = 2 * pi* b1;
document.getElementById("Q9").innerHTML = 6 * b1 * 2;
document.getElementById("Q10").innerHTML = 2 * (pi*r*h) ;
document.getElementById("Q11").innerHTML = 2 * pi * r *(r+h) ;
document.getElementById("Q12").innerHTML = pi * (r * r)*2 *h ;
document.getElementById("Q13").innerHTML = pi*r*l ;

document.getElementById("Q14").innerHTML = `"Value of first" ${pi*r*(r+l)}  =  "Value of scoend" ${pi*r*(r + getSqrt)}`;

// Total surface area of cone = πr(r + l) = πr[r + √(h2 + r2)]
document.getElementById("Q15").innerHTML = 1/3*(pi*r*2*h) ;
document.getElementById("Q16").innerHTML = 4*(pi*r*2) ;
document.getElementById("Q17").innerHTML = 4/3*(pi*r*3) ;

// pi*r*(r+l)||