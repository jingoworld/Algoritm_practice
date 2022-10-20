function solution(age) {
    const str = 'abcdefghij'
    const arr = Array.from(String(age))
    return arr.map((el) => `${str[el]}`).join('')
}