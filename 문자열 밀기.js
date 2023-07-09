function solution(A, B) {
    let a = A.split('');
    let answer = 0;
  
    console.log(a);
    
    for (let i=0;i<a.length;i++) {
        console.log(i);
        console.log(a);
        if (a.join('') == B) {
            answer = i;
            break;
        } else {
            a.unshift(a[a.length-1]);
            a.pop();
        }
    }
    
    if (a.join('') !== B) {
        answer = -1;
    } 
      
    return answer;
}
