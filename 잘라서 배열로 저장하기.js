function solution(my_str, n) {
    var answer = [];
    
    let array = my_str.split('');
    
    while(array.length > 0){
        answer.push(array.splice(0,n).join(''));
    }
    
    return answer;
}
