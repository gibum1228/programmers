function solution(citations) {
    let h = 0, len = citations.length;
    citations.sort((a, b) => b - a); 

    while(h <= len){
        if(h + 1 <= citations[h]) h++; // h번 이하 인용됨 -> 갯수 제한 없음
        else break;
    }

    return h;
}

// START
console.log(solution([3, 0, 6, 1, 5]));