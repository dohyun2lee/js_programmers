function solution(score) {
    var answer = [];
    let array = [];
    let aver = new Map();
    
    for (let i=0;i<score.length;i++) {
        array.push((score[i][0] + score[i][1]) / 2)
    }
    
    let arr = [...array];
    
    arr.sort(function(a,b){
        return b - a;
    }); 
    
    for (let i=0;i<arr.length;i++) {
            aver.set(arr[i], i+1);
    }
    
    for (let i=0;i<array.length;i++) {
            answer.push(aver.get(array[i]));
    }
    
    return answer;
}
