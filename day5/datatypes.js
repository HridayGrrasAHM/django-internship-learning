/**
 * There are 2 types of datatypes:
 *  1. primitive (one variable one value)
 *      a. Number (int & float),
 *      b. string (characters ['', ""])
 *      c. boolean (true or false)
 *  2. non-primitive (one variable multiple value)
 *      a. array
 *      b. object
 * 
 * Typecasting:
 *  going from one datatype to another
 */

// let a = 10
// console.log(a, typeof(a))

// a = 10.5
// console.log(a, typeof(a))

// a = "10"
// console.log(a, typeof(a))

// a = true
// console.log(a, typeof(a))

// a = undefined
// console.log(a, typeof(a))

// a = null
// console.log(a, typeof(a))


// let a = 0 
// console.log(a, typeof(a))

// a = String(a)
// console.log(a, typeof(a))

// a = Boolean(0)
// console.log(a, typeof(a))

// let a = '0'
// console.log(a, typeof(a))

// a = Number(a)
// console.log(a, typeof(a))


// Non-primitive datatypes:


// Array
// let a = [1,2,3,4,5,6, "Hriday", true, null, undefined]
// console.log(a, typeof(a))
// console.log(Object.values(a))
// console.log(a.length)
// console.log(a[0])
// a[-1] = 'Hello'
// console.log(a[-1])
// console.log(Object.keys(a))
// let b = [10, 9, 8]

// console.log(a.concat(b))
// console.log([...a, ...b]) // rest & spread


// Objects
// let obj = {
//     // "key":"value"
//     "fname":"Hriday",
//     "lname":"Goswami",
//     "married":false,
//     "houses":['India', 'Australia', 'Canada', 'Europe', 'USA'],
//     "age":500,
//     "height":5.11,
// }

// console.log(obj.fname, obj.lname)
// console.log(obj.houses[0])

// let arrObj = [
//     {
//         "fname":"Hriday",
//         "lname":"Goswami"
//     },
//     {
//         "fname":"Rajesh",
//         "lname":"Shah"
//     },
//     {
//         "fname":"Karan",
//         "lname":"Gohil"
//     },
//     {
//         "fname":"Harsha",
//         "lname":"Soni"
//     }
// ]

// console.log(arrObj[0].fname, arrObj[0].lname)
// arrObj.map((a)=>{
//     console.log(a.fname, a.lname)
// })

// function weather() {
//     let countries = ['India', 'London', 'Dubai', 'Maldives', 'Thailand', 'Nepal']

//     countries.map(async(c)=>{
//         // console.log(c)
//         let url = `https://api.weatherapi.com/v1/current.json?key=75f11d524d2749e4beb110806231909&q=${c}`

//         let response = await fetch(url)
//         let data = await response.json()
//         console.log(data.current.temp_c, c)
//     })
// }

// weather()

let marks = [
    {
        "name":"Karan",
        "marks":{
            "english":Number(50),
            "maths":Number(10),
            "science":Number(false)
        }
    }, 
    {
        "name": "Kevin",
        "marks": {
            "english": Number(0),
            "maths": Number(0),
            "science": Number(false)
        }
    }, 
    {
        "name": "Rajesh",
        "marks": {
            "english": Number(100),
            "maths": Number(40),
            "science": Number(50)
        }
    },
]

marks.map((m)=>{
    console.log("---------------------------")
    console.log(m.name, "\tEnglish :", m.marks.english, "\t | \n\t\tMaths: ", m.marks.maths, "\t\t | \n\t\tScience: ", Number(m.marks.science), "\t |")
    console.log("---------------------------")
    // console.log("--------------")
})