function solution(n) {
    // 최소 공배수
    // 최소 피자 판 수는 = 최소 공배수 / 6
    let lcm = 6
    while (true) {
        if (lcm % n === 0) break;  
    lcm += 6
    }
    return lcm / 6
}