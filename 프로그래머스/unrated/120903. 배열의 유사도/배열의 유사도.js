function solution(s1, s2) {
    let result = []
    for (let i of s1) {
        for (let j of s2) {
            if (i === j) {
                result.push(i)    
            }            
        }
    }
    return result.length
}