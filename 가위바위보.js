function solution(rsp) {
    var answer = '';
    
    var RSP = [...rsp];
    var answer_array = [];
    
    for(var i = 0; i < RSP.length; i++) {
        if (RSP[i] == 2) {
            answer_array.push(0);
        } else if (RSP[i] == 0) {
            answer_array.push(5);
        } else {
            answer_array.push(2);
        }
    }
    
    answer = answer_array.join('');
    
    return answer;
}
