function solution(before, after) {
    var answer = 0;
    
    Before = before.split("");
    After = after.split("");
    
    B = Before.sort();
    A = After.sort();
    
    const equals = (A, B) => JSON.stringify(A) === JSON.stringify(B);
    
    if (equals(A,B)) {
        answer = 1;
    } else {
        answer = 0;
    }
    
    return answer;
}
