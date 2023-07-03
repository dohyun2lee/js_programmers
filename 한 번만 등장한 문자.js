function solution(s) {
    let answer = [];
    let array = s.split('');
    
    for (let i=0;i<array.length;i++) {
        if (array.indexOf(array[i]) == array.lastIndexOf(array[i])) {
            answer.push(array[i]);
        }
    }
    
    return answer.sort().join('');
}
