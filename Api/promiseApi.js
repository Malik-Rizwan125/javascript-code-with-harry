// let p1= new Promise((resolve, reject)=>{
//     console.log("promise is pending")

//     setTimeout(()=>{
//         console.log("I am a promise and i am resolved")
//         resolve(true)
//     },3000)
// })

// let p2= new Promise((resolve, reject)=>{
//     console.log("promise is pending")

//     setTimeout(()=>{
//         console.log("I am a promise and i am rejected")
//       reject(new Error("I am a error"))
//     },3000)
// })

// p1.then((value)=>{
//     console.log(value)
// })
// p2.catch((error)=>{
//     console.log("Some error occurred in p2")
// },(error)=>{
//     console.log(error);
// })


/////////////////////// promise resolve with all promise ///////////////////////

let all_p1= new Promise((resolve, reject)=>{
    // console.log("promise is pending")
    setTimeout(()=>{
        console.log("promise resolve1")
        resolve(true)
    },1000)
})

let all_p2= new Promise((resolve, reject)=>{
    // console.log("promise is pending")
    setTimeout(()=>{
        // console.log("promise resolve2")
        // resolve(true)
        reject(new Error("I am a error"))
    },2000)
})

let all_p3= new Promise((resolve, reject)=>{
    // console.log("promise is pending")
    setTimeout(()=>{
        console.log("promise resolve3")
        resolve(true)
    },3000)
})

// let promise_all=promise.all([all_p1,all_p2,all_p3])  // agr ek b promise na chali error ki waja sy tu baki b promise nai chaly gye 
// promise_all.then((value)=>{
//     console.log(value)
// })

let promise_all=promise.allSettled([all_p1,all_p2,all_p3])  // allSettled ki waja sy ye hum ko tamaam promise show kry ga reject wali b
promise_all.then((value)=>{  // allSettled sy hum ko promise ka status and value dy ga
    console.log(value)
})

// let promise_all=promise.race([all_p1,all_p2,all_p3]) //race jo jo pehly settled ho jaye wo usko print krdy ga // race mai ek b promise mai error ajye tu ye koi b promise nai chaly ga
// promise_all.then((value)=>{  
//     console.log(value)
// })

// let promise_all=promise.any([all_p1,all_p2,all_p3])  // any mai ek b promise fullfil hge tu wo uski value show krwa dy ga
// let promise_all=promise.resolve(6) // resolve kry ga likh 6value print
// let promise_all=promise.reject(new error("Hey")) //error through kry ga
// promise_all.then((value)=>{  
//     console.log(value)
// })