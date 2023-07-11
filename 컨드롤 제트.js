function solution(s) {
    var answer = 0;
    let S = s.split(' ');
    
    for(var i=0;i<S.length;i++){
        if (S[i] =='Z') {
            answer= answer - parseInt(S[i-1]);
        } else {
            answer = answer + parseInt(S[i]);
        }
    }
    
    return answer;
}
