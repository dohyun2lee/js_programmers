function solution(sides) {
    var answer = 0;
    let long = 0;
    let short = 0;
    
    if (sides[0] >= sides[1]) {
        long = sides[0];
        short = sides[1];
    } else {
        long = sides[1];
        short = sides[0];
    }
    
    for (let i=(long-short+1);i<(long+short);i++) {
        answer++
    }
    
    return answer;
}
