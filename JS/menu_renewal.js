function solution(orders, course) {
    var answer = [];

    // 만들고 싶은 코스 요리 생성
    course.forEach(size => {
        let word = {};
        let max = 2; // 최소 2개 이상

        // 코스 추가하기
        orders.forEach(order => {
            let combi = getCombinations(order.split(""), size);

            for(let i = 0; i < combi.length; i++){
                max = addCourse(word, combi[i].join(''), max);
            }
        });

        answer.push(Object.keys(word).reduce((result, key) => { // 최대 주문 메뉴를 결과에 넣기
            if (max == word[key]) { // 최대 주문수가 같을 경우
                result.push(key)
            }

            return result;
        }, []));
    });

    return answer.flat().sort(); // 다차원배열을 1차원 배열로 핀 다음에 정렬
}

// 코스 추가
function addCourse(word, str, max){
    // 순서대로 정렬
    str = str.split("").sort().join('');

    word[str] = ++word[str] || 1

    if(max < word[str]){ // 인기 많은 코스 구하기
        max = word[str];
    }

    return max;
}

// 조합
function getCombinations(arr, n) {
    const results = [];
    if (n === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return

    arr.forEach((fixed, index, origin) => {
        const rest = origin.slice(index + 1); // 해당하는 fixed를 제외한 나머지 뒤
        const combinations = getCombinations(rest, n - 1); // 나머지에 대해서 조합을 구한다.
        const attached = combinations.map((combination) => [fixed, ...combination]); //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
        results.push(...attached); // 배열에 모두다 push
    });

    return results; // 결과 return
}

//START
// case 1
o1 = ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"];
c1 = [2,3,4];
// case 2
o2 = ["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"];
c2 = [2,3,5];
// case 3
o3 = ["XYZ", "XWY", "WXA"];
c3 = [2,3,4];

console.log(solution(o1, c1)); // ["AC", "ACDE", "BCFG", "CDE"]
console.log(solution(o2, c2)); // ["ACD", "AD", "ADE", "CD", "XYZ"]
console.log(solution(o3, c3)); // ["WX", "XY"]