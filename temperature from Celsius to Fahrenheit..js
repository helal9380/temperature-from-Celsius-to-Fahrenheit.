function celsiusTfaren(celsius) {
    let harentai = celsius * 1.8 + 32;
    let rounded = Math.round(harentai)
    return rounded;
}

let celsius = 26;
let harnt = celsiusTfaren(celsius)
console.log('today haren is :', harnt)