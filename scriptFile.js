
// console.log(document.body.firstElementChild)
//  a = document.body.firstElementChild
// console.log(a.parentNode)
// console.log(a.Element)

// list
        const changeBgRed = () => {
            document.body.firstElementChild.style.background = "red"
        }

        let b = document.body
        console.log("First child of b is", b.firstChild);
        console.log("First element child of b is", b.firstElementChild);


        // let nestedAccess = document.body.firstElementChild.firstElementChild.firstElementChild
        let nestedAccess = document.body.firstElementChild.firstElementChild
        console.log(nestedAccess)
        console.log(nestedAccess.rows)  // print table rows(tr)  all tr come on the screen
        console.log(nestedAccess.caption) // print caption
        console.log(nestedAccess.tHead.firstElementChild)  //tHead first child element is tr
        console.log(nestedAccess.tBodies)  //print tBody in table
        console.log(nestedAccess.rows[0].rowIndex) // print row index 0
        console.log(nestedAccess.rows[2].rowIndex) // print row index 2


// card script

let cardTitle = document.getElementById("firstCardtitle"); // using id
cardTitle.style.color = "blue"
console.log(cardTitle)

// let cardDisc = document.getElementsByClassName("card-title");  // using class
// cardDisc[1].style.color = "red"
// cardDisc[2].style.color = "yellow"
// console.log(cardDisc)

let cTitle = document.querySelectorAll(".card-text")
cTitle[0].style.color = "red"
cTitle[1].style.color = "blue"
cTitle[2].style.color = "green"

document.querySelector(".btn").style.color = "gray"
document.querySelector(".btn-3rd").style.color = "yellow"

console.log(document.getElementsByTagName("a"))  // find how many (a) tag use in page
console.log(document.getElementsByTagName("h5"))  // find how many (h5 ) tag use in page
console.log(document.getElementsByName("Card-image"))