function solution(n) {
    result = 0;
    for (let i = 0; i < n+1; i+=2) {
        result = result + i;
    }
    return result;
}