// let element = document.head;
// let element = document.body;
// let element = document.links;
// let element = document.images;
// let element = document.url;
// let element = document.domains;
// let element = document.baseURL;
// let element = document.getElementById("idName.....")
// let element = document.getElementById("idName.....").innerText // inner sy hum sary ka sara text get kr sakty h 
// let element = document.getElementById("idName.....").innerHTML //  jo class hum dy gye us class ka inner ka sary tags ur text ye dy dy ga
// let element = document.getElementsByClassName("className.....") // same class name jaha jaha use hui hoge sab ko utha lay ga...
// let element = document.getElementsByClassName("className.....")[1] 1 index pr jo class name ati hoge ye bas usi ko utha k lay ga..
// let element = document.getElementsByTagName("tagName.....("ul")") ul tag target
// let element = document.getElementById("idName.....").getAttribute("className..., id...,headerName..., onclick") is sy hum idName ko className ko ur functionName ko find kr sakty h 

// innerHTML
// document.getElementById("header").innerHTML ="<h1> yahoo baba replace to Great lecture using innerHTML attribute</h1>"

// QuerySelector
element =document.querySelector("#header").innerHTML ="<h1> yahoo baba replace to Great lecture using innerHTML attribute</h1>"

// element = document.querySelectorAll(".abc") // ye all data ly ay ga
// element = document.querySelectorAll(".abc")[1]  // 1 index wala data ly ga -->ye pora p tag ur andr ka text ly ay ga 
// element = document.querySelectorAll(".abc")[1].innerText  // 1 index ka jsut text ly ay ga
// element = document.querySelectorAll("ul") // jitny page mai ul hogye sab ko target kry ga ye
// element = document.querySelectorAll("ul")[2] // 3rd index pr jo ul hoga ye usko target kry ga
// element = document.querySelectorAll("ul")[2].innerText // ye ul k ander jo text h wo show kry ga
// element = document.querySelectorAll("#header4 h1")  //header4 ki id mai jitny h1 tags hoge sab ko show krdy ga
// element = document.querySelectorAll("#header4 p")  // header4 ki id mai jitny p k tags hoge sab ko show krdy ga 
// element = document.querySelector("#header5").style.backgroundColor ="yellow"
// element = document.querySelector("#header5").style.color ="blue"
// element = document.querySelector("#header6").className ="className"  // is mai hum kisi tag k opar koi b class laga sakty h 
// element = document.querySelector("#header6").className ="className xyz"  // ur 1 sy zayda classes b laga sakty h
// document.querySelector("#header7").classList ="className xyz" // ye humy class k name string mai nai bal k array mai btata hai
// document.querySelector("#header7").classList.add("sunsolsClass" , "technologyClass") // add classes
document.querySelector("#header7").classList.remove("asf") // remove classes
element = document.querySelector("#header7").classList  // 
console.log(element)




// QuerySelector end

// //setAttribute 
// document.getElementById("header").setAttribute("class", "xyz")  //set Attribute
// document.getElementById("header").setAttribute("style", "border:10px dotted yellow")
// element =document.getElementById("header").getAttribute("class")  // get Attribute
// console.log(element);


// // Attibutes mai hum array mai km krty h
// document.getElementById("header-2").attributes[1].value = "wxyz"
// console.log(element);

// // remove Attribute

// // document.getElementById("header3").removeAttribute("style")  //remove Attribute  style
// document.getElementById("header3").removeAttribute("class")  //remove Attribute class


