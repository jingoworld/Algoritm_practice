function solution(age) {
    const str = 'abcdefghij'
    const arr = Array.from(String(age))
    return arr.map((el) => `${str[el]}`).join('')
}

// ** reference **
//
// function solution(age) {
//     let char = 'abcdefghij'
//     return Array.from(age.toString()).map(t => char[+t]).join('');
// }