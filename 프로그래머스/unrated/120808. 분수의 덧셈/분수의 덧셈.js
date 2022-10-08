function solution(denum1, num1, denum2, num2) {
    let num = (denum1 * num2) + (denum2 * num1)  // 분자
    let den = (num1 * num2)                      // 분모
    const gsm = (num, den) => {                  // 최대공약수
        if (den === 0) return num;
        return gsm(den, num % den);
    }
    return [num / gsm(num, den), den / gsm(num, den)]
}