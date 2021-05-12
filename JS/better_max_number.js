function solution(numbers) {
    var answer = '';

    numbers = numbers.map(v => v + '').sort((a, b) => (b+a) - (a+b)); // 내림차순
    numbers[0] === '0' ? answer = '0' : answer = numbers.join(''); // 내림차순인데 0번째 인덱스가 0이면 0만 있는 것

    return answer;
}

console.log(solution([6, 10, 2]))
console.log(solution([3, 30, 34, 5, 9]))