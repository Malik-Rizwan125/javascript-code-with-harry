let first = document.getElementById("first");
let a = first.hasAttribute("class")
console.log(a)
first.setAttribute("first", "true setAttributes" )  //  agr humny class add krni ho tu first ki jaga class ajye ga ur true, setAttributes  2 class add ho jaye ge
let attribute = document.getElementById("attribute");  //we are not use (-) inside the class
attribute.setAttribute("class","true setAttributes") 
remove.removeAttribute("class") //remove classes using removeAttribute

console.log(remove.attributes)
console.log(remove.dataset)
console.log(remove.dataset.game) // seperate print game name and player name
console.log(remove.dataset.player)
