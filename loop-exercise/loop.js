
////////// Q1:
let j;
let n = 5
let str = "";
// console.log(i);
for (let i = 1; i <= 5; i++) {

    for (j = 1; j <= i; j++) {
        document.getElementById("Q1").innerHTML += j;
    }
    document.getElementById("Q1").innerHTML += "<br>"
}
console.log(str)
// 

///////// Q2:

for (let i = 5; i >= 1; i--) {
    for (j = 1; j <= i; j++) {
        document.getElementById("Q2").innerHTML += j;
    }
    document.getElementById("Q2").innerHTML += "<br>"
}
///////// Q3: //////////////////////////////////////

for (let i = 1; i <= 5; i++) {
    for (j = 5; j >= i; j--) {
        document.getElementById("Q3").innerHTML += j;
    }
    document.getElementById("Q3").innerHTML += "<br>"
}

///////// Q4:

for (let i = 1; i <= 5; i++) {
    for (j = 5; j >= i; j--) {
        document.getElementById("Q4").innerHTML += j;
    }
    document.getElementById("Q4").innerHTML += "<br>"
}

///////// Q5:

// 1
// 2 3 
// 4 5 6 
// 7 8 9 10 
// 11 12 13 14 15 
for (let i = 1; i <= 1; i++) {
    // console.log("Value of i", i)
    for (j = 1; j <= i; ++j) {
        document.getElementById("Q5").innerHTML +="&nbsp"+ j;
    }
        document.getElementById("Q5").innerHTML += "<br>"
    for (k = 2; k <= 3 ; k++) {
        document.getElementById("Q5").innerHTML +="&nbsp"+ k;
    }
        document.getElementById("Q5").innerHTML += "<br>"

    for (l = 4; l <= 6; l++) {
        document.getElementById("Q5").innerHTML +="&nbsp"+ l;
    }
        document.getElementById("Q5").innerHTML += "<br>"
    for (m = 7; m <= 10; m++) {
            document.getElementById("Q5").innerHTML +="&nbsp"+ m;
        }
            document.getElementById("Q5").innerHTML += "<br>"
    for (o = 11; o <= 15; o++) {
                document.getElementById("Q5").innerHTML +="&nbsp"+ o;
        }
                document.getElementById("Q5").innerHTML += "<br>"
}

///////// Q6:

// for(let i=1;i<=5;i++){
//     console.log(i)

// }

///////// Q7:

// 1
// 22
// 333
// 4444
// 55555

for(let i=1; i<=n;i++){
    for(let j=1;j<=i; j++){
        document.getElementById("Q7").innerHTML +="&nbsp"+ i;
    }
        document.getElementById("Q7").innerHTML += "<br>";
}


///////// Q8: ////////////////////////////////////

   //         1
   //       1 2 
   //     1 2 3 
   //   1 2 3 4 
   // 1 2 3 4 5

   for(let i = 1; i<=n; i++){
      for(let k=1;k<=5-i;k++){
        document.getElementById("Q8").innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp"
      }
           for(let j = 1; j<=i; j++){
            document.getElementById("Q8").innerHTML +="&nbsp "+ j;
           }
           document.getElementById("Q8").innerHTML += "<br>";
   }

///////// Q9:

//    12345
//     1234
//      123
//       12
//        1

for(let i = 5; i>=1; i--){
    for(let j=1; j<=i; j++){
        document.getElementById("Q9").innerHTML +="&nbsp"+ j;
    }
    document.getElementById("Q9").innerHTML += "<br>";
}

///////// Q10: ///////////////////

//     1
//    121
//   12321
//  1234321
// 123454321

 for (let i = 1; i <= n; i++) {
   
   for(let k=1;k<=5-i;k++){
    document.getElementById("Q10").innerHTML +="&nbsp;&nbsp;&nbsp"
   } 
   for(let j = 1; j<=i; j++){
    document.getElementById("Q10").innerHTML +="&nbsp"+ j;
   }
   for(let l=2;l<=i;l++){
    document.getElementById("Q10").innerHTML +="&nbsp"+ l;
   }
   document.getElementById("Q10").innerHTML += "<br>";
 }


///////// Q11:
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

for(let i=1; i<=n; i++){
    for(let j=1;j<=i;j++){
        document.getElementById("Q11").innerHTML +="&nbsp"+j
    }
    document.getElementById("Q11").innerHTML += "<br>";
}

for (let i = 4; i >= 1; i--) {
        for (j = 1; j <= i; j++) {
            document.getElementById("Q11").innerHTML += "&nbsp"+j;
        }
        document.getElementById("Q11").innerHTML += "<br>"
}
//////// Q13
//           0
//         1 0 1
//       2 1 0 1 2
//     3 2 1 0 1 2 3
//   4 3 2 1 0 1 2 3 4
// 5 4 3 2 1 0 1 2 3 4 5

for(let i=0;i<=n;i++){
    for(let k=1;k<=5-i;k++){
        document.getElementById("Q13").innerHTML +="&nbsp;&nbsp;&nbsp"
       } 
  
    for(let l=1;l<=i;l++){
        document.getElementById("Q13").innerHTML +="&nbsp"+l
    }
    
    for(let j=0; j<=i; j++){
    document.getElementById("Q13").innerHTML +="&nbsp"+j
    }
    document.getElementById("Q13").innerHTML += "<br>"
}
//////// Q15

//      1
//     2 2
//   3 3 3
//  4 4 4 4
// 5 5 5 5 5

for(let i=1; i<=n;i++){
    for(let k=1;k<=5-i;k++){
        document.getElementById("Q15").innerHTML +="&nbsp;&nbsp"
       } 
    for(j=1;j<=i;j++){
        document.getElementById("Q15").innerHTML +="&nbsp"+i
    }
    document.getElementById("Q15").innerHTML += "<br>"
}

///////// Q16:

// * 
// * * 
// * * * 
// * * * *
// * * * * *

for(let i=1; i<=n; i++){
     
    for(let j=1;j<=i;j++){
        str = "*"
        document.getElementById("Q16").innerHTML +="&nbsp"+str
    }
    document.getElementById("Q16").innerHTML += "<br>"
}
///////// Q17:

for(let i=1; i<=n;i++){
    for(let k=1;k<=5-i;k++){
        document.getElementById("Q17").innerHTML +="&nbsp;&nbsp"
       } 
    for(j=1;j<=i;j++){
        str = "*"
        document.getElementById("Q17").innerHTML +="&nbsp" +str
    }
    document.getElementById("Q17").innerHTML += "<br>"
} 


///////// Q18:
// * * * * *
// * * * *
// * * * 
// * * 
// * 

for(let i=5; i>=1; i--){
    
    for(let j=1;j<=i;j++){
        str = "*"
        document.getElementById("Q18").innerHTML +="&nbsp"+str
    }
    document.getElementById("Q18").innerHTML += "<br>"
}

///////// Q20:

for(let i=5;i>=1;i--){
    
    for(let k=5;k>=i-1;k--){
        document.getElementById("Q20").innerHTML +="&nbsp"
       } 
       
    for(let j=1;j<=i;j++){
        str = "*"
        document.getElementById("Q20").innerHTML +="&nbsp"+str
    }
    document.getElementById("Q20").innerHTML += "<br>"
}

///////// Q21:
//   *
//  * *
// * * *
//  * *
//   *

for(let i=1;i<=3;i++){
   
    for(let k=1;k<=3-i;k++){
        document.getElementById("Q21").innerHTML +="&nbsp;&nbsp"
       } 
    for(let j=1;j<=i;j++){
        str = "*"
        document.getElementById("Q21").innerHTML +="&nbsp" +str
    }
    document.getElementById("Q21").innerHTML += "<br>"
}
for(let i=2;i>=1;i--){
    for(let l=2; l>=i-1;l--){
        document.getElementById("Q21").innerHTML +="&nbsp"
    }
    for(let j=1;j<=i;j++){
        str = "*"
        document.getElementById("Q21").innerHTML +="&nbsp" +str
    }
    document.getElementById("Q21").innerHTML += "<br>"

}


///////// Q22:

//          *
//        * * *
//      * * * * *
//    * * * * * * *
//  * * * * * * * * *


for(let i=1;i<=n;i++){
    for(let k=1;k<=5-i;k++){
        document.getElementById("Q22").innerHTML +="&nbsp&nbsp&nbsp"
    }
    for(let j=1;j<=i;j++){
        str = "*"
        document.getElementById("Q22").innerHTML +="&nbsp" +str
    }
    for(let l=2;l<=i;l++){
        str = "*"
        document.getElementById("Q22").innerHTML +="&nbsp" +str
    }
    document.getElementById("Q22").innerHTML += "<br>"
}

///////// Q23:
// * * * * *
//  * * * *
//   * * *
//    * *
//     *
//    * *
//   * * *
//  * * * *
// * * * * *

for(let i=5;i>=1;i--){
    for(let k=5;k>=i-1;k--){
        document.getElementById("Q23").innerHTML += "&nbsp"
    }
    for(let j=1;j<=i;j++){
        str = "*"
        document.getElementById("Q23").innerHTML += "&nbsp"+str
    }
    document.getElementById("Q23").innerHTML += "<br>"
}
for(let i=0; i<=n;i++){
    for(let k=1;k<=5-i;k++){
        document.getElementById("Q23").innerHTML +="&nbsp"
       } 
    for(j=1;j<=i;j++){
        str = "*"
        document.getElementById("Q23").innerHTML +="&nbsp" +str
    }
    document.getElementById("Q23").innerHTML += "<br>"
} 


///////// Q24:
// A
// B C
// D E F
// G H I J
// K L M N O
// P Q R S T U
// V W X Y Z A B
// C D E F G H I J

let count=0 ; 
for(let i=1;i<=8;i++){
    for(let j=1;j<i;j++){
        document.getElementById("Q24").innerHTML += "&nbsp"+ String.fromCharCode(count + 65);
        count++;
    }
    document.getElementById("Q24").innerHTML += "<br>"
}


///////// Q25:
// A B C D E
// A B C D
// A B C
// A B
// A

for (let i = 1; i <= n - 1; i++) {
    for (let k = 0; k <= n - i; k++) {
      document.getElementById("Q25").innerHTML+= "&nbsp" + String.fromCharCode(k + 65);
    }
    document.getElementById("Q25").innerHTML += "<br>"
  }


///////// Q26:
//    A 
//    A B  
//    A B C 
//    A B C D  
//    A B C D E

for(let i=1;i<=n;i++){
    for(let j=0;j<i;j++){
        document.getElementById("Q26").innerHTML += String.fromCharCode(j + 65)
    }
    document.getElementById("Q26").innerHTML += "<br>"
}

///////// Q27:
//     A
//    ABA
//   ABCBA
//  ABCDCBA
// ABCDEDCBA

for(let i=1;i<=n;i++){
    for(let k=1;k<5-i;k++){
        document.getElementById("Q27").innerHTML += "&nbsp&nbsp&nbsp"
    }

    for(let j=0; j<i;j++){
        document.getElementById("Q27").innerHTML += String.fromCharCode(j + 65)
    }
    document.getElementById("Q27").innerHTML += "<br>"
}