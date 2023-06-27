function solution(n) {
    var answer = 0;
    let cnt = 1;
    
    for (let i=1;i<=n;i++) {
        cnt = cnt * i;

        if (cnt>n) {
            answer = i-1;
            break;
        }
        if (cnt == n) {
            answer = i;
            break;
        }
    }
    
    return answer;
}
