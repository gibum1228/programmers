function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    let ing = [], now_weight = 0, time = []; // 지나가고 있는 트럭, 현재 무게의 총합, 다리에 오르기 시작한 시간 저장
    let truck, i; // 가장 먼저 대기중인 트럭, 시간 비교
    
    while(true){
        if(ing.length == 0 && truck_weights == 0) break; // 대기중인 트럭과 지나가고 있는 트럭이 없을 경우
        answer++; // 시간++

        i = time.shift();
        if(answer == i){ // 도착할 시간이라면
            now_weight -= ing.shift(); // 현재 무게에서 뺌
        }else{
            !i || time.unshift(i); // 아니면 다시 저장
        }

        if (truck_weights.length != 0) { // 대기중인 트럭이 있으면
            truck = truck_weights.shift();
            now_weight += truck;

            if (now_weight <= weight) { // 예상 무게를 버틸 수 있다면
                ing.push(truck); // 트럭 진행
                time.push((answer + bridge_length)); // 들어온 시간 저장
            } else { // 원상복귀
                now_weight -= truck;
                truck_weights.unshift(truck);
            }
        }
    }
    
    return answer;
}

// START
t1 = [7, 4, 5, 6];
t2 = [10];
t3 = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10];

console.log(solution(2, 10, t1));
console.log(solution(100, 100, t2));
console.log(solution(100, 100, t3));