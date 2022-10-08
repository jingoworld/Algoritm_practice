function solution(denum1, num1, denum2, num2) {
    // let A = [denum1 * num2, num1 * num2]
    // let B = [denum2 * num1, num1 * num2]
    let num = (denum1 * num2) + (denum2 * num1)
    let den = (num1 * num2)
    // let result = [num, den] // 약분이 안된 상태
    // 유클리드 호제법으로 최소공약수 찾기
    const gsm = (num, den) => {
        if (den === 0) return num;
        return gsm(den, num % den);
    }
    return [num / gsm(num, den), den / gsm(num, den)]
}