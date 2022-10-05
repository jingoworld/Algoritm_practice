function solution(n) {
    //reduce 활용 값 누적 후 출력
    //각 값은 split('')로 배열형태로 분해
    let arr = n.toString().split('').map(x => parseInt(x))
    return arr.reduce((acc, cur) => acc + cur)
}