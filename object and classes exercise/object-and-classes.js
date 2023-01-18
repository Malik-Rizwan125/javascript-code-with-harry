// Write a JavaScript program to list the properties of a JavaScript object
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
//         Sample Output: name,sclass,rollno

var student = {
        name: "Muahmmad Rizwan",
        sclass: "6",
        rollno: 12
};

document.getElementById("list-properties").innerHTML += student.name + " " + student.sclass + " " + student.rollno
console.log(student)

//      Write a JavaScript program to delete the rollno property from the following object. Also print the object
//      before or after deleting the property.
//         Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };


var student = {
        name: "Rizwan Malik",
        sclass: "6",
        rollno: 12
};

delete student.rollno

document.getElementById("delete-property").innerHTML += student.name + " " + student.sclass
console.log(student)

// Write a JavaScript program to get the length of a JavaScript object.   
//         Sample object :
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };


var student = {
        name: "David Rayy",
        sclass: "6",
        rollno: 12
};
let length = Object.keys(student).length
document.getElementById("length-of-object").innerHTML += length
console.log(length)


// Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.   

// var library = [ 
//    {
//        author: 'Bill Gates',
//        title: 'The Road Ahead',
//        readingStatus: true
//    },
//    {
//        author: 'Steve Jobs',
//        title: 'Walter Isaacson',
//        readingStatus: true
//    },
//    {
//        author: 'Suzanne Collins',
//        title:  'Mockingjay: The Final Book of The Hunger Games', 
//        readingStatus: false
//    }];

let Obj

var library = [
        {
                author: 'Bill Gates',
                title: 'The Road Ahead',
                readingStatus: true
        },
        {
                author: 'Steve Jobs',
                title: 'Walter Isaacson',
                readingStatus: true
        },
        {
                author: 'Suzanne Collins',
                title: 'Mockingjay: The Final Book of The Hunger Games',
                readingStatus: false
        }];



                var mapFunc = library.map((item, index) =>{
                        console.log(item.author)
                           return `${index +1}:${item.author} ${item.title} ${item.readingStatus} </br>`
                        })
              document.getElementById("display-reading-status").innerHTML += mapFunc

        //       for (let i = 0; i < library.length; i++) {
        //         Obj = library[i]
        //         console.log(library)
        // }
        
        // document.getElementById("display-reading-status").innerHTML += +"Auther Name is" + Obj.author