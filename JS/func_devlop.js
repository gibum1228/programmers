function solution(progresses, speeds) {
    var answer = []; // 정답
    var arr = []; // 필요한 작업일 배열
    let count = 1; // 배포되는 기능 갯수

    // 필요한 작업일 구하기
    for(let i = 0; i < progresses.length; i++){
        let result = (100 - progresses[i]) / speeds[i]
        let remainder = (100 - progresses[i]) % speeds[i]

        remainder == 0 ? arr.push(result) : arr.push(Math.floor(result) + 1) // 나머지가 있을 경우 {소요일+1}로 저장
    }
    // 일별 배포되는 기능 갯수 구하기
    let firstProcess = arr[0]; // 배포 기준 날짜
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > firstProcess){ // 배포 후 새로운 배포 기준 날짜 결정
            firstProcess = arr[i]
            answer.push(count)
            count = 1
        }else{ // 배포 전에 기능 구현한 프로그램 갯수++
            count++
        } 
        // 마지막 값 담아주기
        if(i == arr.length-1){
            answer.push(count)
        }
    }

    return answer;
}

//START
// case 1
p1 = [93, 30, 55] // [7, 3, 9]
s1 = [1, 30, 5]
// case 2
p2 = [95, 90, 99, 99, 80, 99] // [5, 10, 1, 1, 20, 1]
s2 = [1, 1, 1, 1, 1, 1]

console.log(solution(p1, s1))
console.log(solution(p2, s2))