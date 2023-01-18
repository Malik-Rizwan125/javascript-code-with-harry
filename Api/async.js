
// async function harry() {
//     return 5
// }
// harry().then((x) => {
//     alert(x)
// })


async function weather() {
    let faisalabadWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("14 degree")
        })
    }, 2000)
    let lahoreWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("12 degree")
        }, 4000)
    })
    //    faisalabadWeather.then(alert)
    //    lahoreWeather.then(alert)

    let fsdW = await faisalabadWeather
    let lohW = await lahoreWeather
    return [fsdW, lohW]
}
// weather()
let a = weather()
console.log(a)
