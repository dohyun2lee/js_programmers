function solution(array, n) {
    var answer = 100;
    let answer_array = [];
    let cnt = 100;
    let tmp = 0;
    
    for (let i=0;i<array.length;i++) {
        if (Math.abs(array[i] - n) < cnt) {
            cnt = Math.abs(array[i] - n);
            answer = array[i];
        } else if (Math.abs(array[i] - n) == cnt) {
          if (array[i] < answer) {
            answer = array[i];
          }
        }
    }
    
    return answer;
}
