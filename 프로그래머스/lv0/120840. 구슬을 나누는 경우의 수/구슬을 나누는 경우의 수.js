function solution(balls, share) {
    if (balls === share) {return 1;}
    const multy = ((el) => {
        let num = BigInt(1)
        for (let i = 1; i <= el; i++) {
             num = num * BigInt(i)
        }
        return num
    })
    return Number(multy(balls) / (multy(balls - share) * multy(share)))
}