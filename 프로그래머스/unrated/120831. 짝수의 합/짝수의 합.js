function solution(n) {
    if (n === 1) {
        return 0;
    }
    if (n%2 === 1) {
        n = n - 1
    }
    if (n >= 4) {
        return (2+n) * (n/4)
    } return 2;
}