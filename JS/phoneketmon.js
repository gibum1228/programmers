function solution(nums) {
    var answer = 0;
    let max = nums.length / 2;
    let dic = {};
    
    for(let i = 0; i < nums.length; i++){
        dic[nums[i]] = ++dic[nums[i]] || 1
    }
    
    let count = Object.keys(dic).reduce((count, key) => {
        return ++count;
    }, 0);
    
    return count > max ? max : count;
}

// START
n1 = [3, 1, 2, 3];
n2 = [3, 3, 3, 2, 2, 4];
n3 = [3, 3, 3, 2, 2, 2];

console.log(solution(n1));
console.log(solution(n2));
console.log(solution(n3));