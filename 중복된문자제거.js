function solution(my_string) {
    var answer = '';
    
    const array = my_string.split("");
    
    const answer_array = Array.from(new Set(array));
    
    answer = answer_array.join("");
    
    return answer;
}
