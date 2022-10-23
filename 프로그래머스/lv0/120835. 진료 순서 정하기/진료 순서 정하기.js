function solution(emergency) {
    const sorted = [...emergency].sort((a, b) => b - a); // 배열 안 요소의 크기를 비교
    return emergency.map(e => sorted.findIndex(s => s === e) + 1); // 인덱스 출력
}