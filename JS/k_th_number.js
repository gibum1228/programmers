function solution(array, commands) {
    var answer = [];

    commands.forEach(i => {
        answer.push(array.slice(i[0]-1,i[1]).sort((a, b) => a - b)[i[2]-1]);
    });

    return answer;
}

// START
arr = [1, 5, 2, 6, 3, 7, 4]
console.log(solution(arr, [[2, 5, 3], [4, 4, 1], [1, 7, 3]]));