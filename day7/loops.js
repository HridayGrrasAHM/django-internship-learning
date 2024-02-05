/**
 * for, while, do...while, for...of, for...each
 * 
 * 
 * 
 */

/**
 * 
 * for(start, end, increment) (post-increment & pre-increment) {
 *  code 
 * }
 * 
 * 
 */

// i++ (post increment)
// ++i (pre increment)

// i = 1
// i++ + i = ?
// 1 + 2 = 3 

// ++i + i 
// 2+2

// for(let i=1; i<=5; i++) {
//     console.log(i)
// }

// start
// while(end) {
//     code
//     increment
// }

// let i=0
// while(i==5) {
//     console.log(i)
//     i++
// }

// let i = 0
// do {
//     console.log(i)
//     i++
// }while (i<=5)

// let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]
// let inp = Number(prompt("Enter the day number"))


// for(let i=0; i<days.length; i++) {
//     if(inp == i+1) {
//         console.log(days[i])
//     }
// }

// for(let i=0; i<=10; i=i+2) {
//     // if(i%2 == 0) {
//     //     console.log(i)
//     // }
//     console.log(i)
// }


// for(let i=10; i>0; i--) {
//     console.log(i)
// }

let num = [0,1,2,3,4,[5,6,7,8,9]]

// num.map((n)=>{
//     if(typeof(n)=="number") {
//         console.log(n)
//     } else if(typeof(n) == "object") {
//         n.map((a)=>{
//             console.log(a)
//         })
//         // console.log(n)
//     }
// })

// for(let i=0; i<num.length; i++) {
//     if(typeof(num[i]) == "number") {
//         console.log(num[i])
//     } else if(typeof(num[i]) == "object") {
//         for(let j=0; j<num[i].length; j++) {
//             console.log(num[i][j])
//         }
//     }
// }

// let isPrime = Number(prompt("Enter your number"))
// let flag = true
// for(let i=2; i<isPrime; i++) {
//     if(isPrime%i == 0) {
//         // console.log("Not prime")
//         flag = false
//         continue
//     }
//     // console.log("Prime")
//     // flag = true
// }

// if(flag) {
//     console.log("Prime")
// } else {
//     console.log("Not prime")
// }

// setTimeout(()=>{
//     // window.location.reload()
//     window.location.href = "https://google.com"
// }, 5000)

// let mainStr = prompt("Enter the string")
// // let mainStr = "Hriday"
// let reverseStr = mainStr.split("")
// let finalStr = "" 
// for(let i=reverseStr.length-1; i>=0; i--) {
//     // console.log(reverseStr[i])
//     finalStr = finalStr+reverseStr[i]
// }
// console.log(finalStr)


