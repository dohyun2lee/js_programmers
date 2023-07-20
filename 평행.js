function solution(dots) {
    var answer = 0;
    
    if (gradient(dots[0],dots[1]) === gradient(dots[2],dots[3])) {
        answer++;
    } 
    if (gradient(dots[0],dots[2]) === gradient(dots[1],dots[3])) {
        answer++;
    } 
    if (gradient(dots[0],dots[3]) === gradient(dots[1],dots[2])) {
        answer++;
    }    
    
    return answer>0?1:0;
}

function gradient(a,b) {
    return ((a[1]-b[1])/(a[0]-b[0]));
}
