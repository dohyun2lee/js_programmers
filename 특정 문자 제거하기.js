function solution(my_string, letter) {
    var answer = '';
    
    var my_array = [...my_string];
    
    var answer_array = []; 
    
    for (var i = 0; i < my_array.length; i++) {
        if (my_array[i] != letter) {
            answer_array.push(my_array[i]);
        }
    }
    
    answer = answer_array.join('');
    
    return answer;
}
