// Odd or Even

const data = 2
const number = (data) => {
    if (data % 2 === 0){
        return 'The number is even'
    } else {
        return 'The number is Odd'
    }
}

console.log(number(data))