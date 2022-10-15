function solution(num_list) {
    let odd = 0
    let eve = 0
    for (i of num_list) {
        if (i % 2 === 0) odd++
        else eve++
    }
    return [odd, eve]
}