function solution(n, k) {
    // lamb 12000 * n
    // drink 2000 * k
    // service Math.floor(n/10)
    
    return (n * 12000) + ((k - Math.floor(n/10)) * 2000)
}