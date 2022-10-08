function solution(array) {
    const countedNum = {}
    array.forEach((el) => {
        countedNum[el] = (countedNum[el] || 0) + 1
    })
    let arr = Object.values(countedNum)
    let max = Math.max(...arr)
    let dup = Object.keys(countedNum).filter(key => countedNum[key] === max)
    return dup.length === 1 ? +dup[0] : -1
}