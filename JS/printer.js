function solution(priorities, location) {
    var answer = 0

    while(true){
        if(priorities[0] < Math.max(...priorities)){
            priorities.push(priorities.shift())
            if(location == 0){
                location = priorities.length-1
            }else{
                location--
            }
        }else{
            answer++
            if(location == 0){
                break
            }else{
                priorities.shift()
                location--
            }
        }
    }

    return answer
}

// START
// case 1
p1 = [2, 1, 3, 2];
l1 = 2;
// case 2
p2 = [1, 1, 9, 1, 1, 1];
l2 = 0;
// case 3
p3 = [1, 2, 3, 4];
l3 = 1;

console.log(solution(p1, l1));
console.log(solution(p2, l2));
console.log(solution(p3, l3));