// Task-2:
// You are given an array of numbers. Count how many times the a number is repeated in the array.

function coutNumber(arrays) {
    let count = 0;
    const numAdd = [];
    for(const array of arrays) {
        if(numAdd.includes(array) === false) {
            numAdd.push(array)
            
        } else {
            count++
        }
    }
    
    console.log(count)
    return numAdd
}
let number = [1, 5, 12, 4,4,4,4];
let result = coutNumber(number);
console.log(result)