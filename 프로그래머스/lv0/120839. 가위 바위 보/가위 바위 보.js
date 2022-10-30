function solution(rsp) {
    let arr = { 0: 5, 2: 0, 5: 2 }
    return [...rsp].map(el => arr[el]).join('')
}