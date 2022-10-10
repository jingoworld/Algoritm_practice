function solution(slice, n) {
    let pizza = 1
    while (true) {
        if (slice * pizza >= n) break
        pizza++
    }
    return pizza
}