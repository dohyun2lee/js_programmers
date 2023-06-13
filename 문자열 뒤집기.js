function solution(my_string) {

    var answer = '';

    

    var my_array = [...my_string];

    

    var answer_array = []; 

    

    for (var i = my_array.length-1; i >= 0; i--) {

        answer_array.push(my_array[i]);

    }

    

    answer = answer_array.join('');

    

    return answer;

}
