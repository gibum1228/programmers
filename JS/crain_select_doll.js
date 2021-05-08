function solution(board, moves) {
    var answer = 0;
    let arr = [];
    let result = [];
    let i = 0;
    
    for(let i = 0; i < board.length; i++){
        arr[i] = [];
        
        for(let j = 0; j < board.length; j++){
            arr[i].push(board[j].shift());
        }
    }

    moves.forEach(m => {
        for(let i = 0; i < arr.length; i++){
            if(arr[m-1][i] != 0){
                let a = result.pop();
                let b = arr[m-1][i];

                if(!a){
                    result.push(b);
                }else if(a === b){
                    answer += 2;
                }else{
                    result.push(a);
                    result.push(b);
                }

                arr[m-1][i] = 0;
                break;
            }
        }
    });
    
    return answer;
}

// START
b = [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]]
m = [1,5,3,5,1,2,1,4]
// result = [4, 3, 1, 1, 3, 2, 0, 4]
console.log(solution(b, m)); // return 4