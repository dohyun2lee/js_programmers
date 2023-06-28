function solution(i, j, k) {
    var answer = 0;
    
    let str = "";
    let cnt = 0;
    
    for (i;i<=j;i++) {
        str = str + i.toString();
    }
    
    let array = str.split('');
    let K = k.toString();
    
    for (let a=0;a<array.length;a++) {
        if (array[a] == k) {
            answer++;
        }
    }
    
    
    
    return answer;
}
