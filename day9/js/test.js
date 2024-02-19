function forLoop() {
    // let str = ""
    let arr = []
    for (let i = 0; i < 5; i++) {
        // return i
        // str = str + String(i)
        arr[i] = i
    }
    return arr
}

console.log(forLoop())