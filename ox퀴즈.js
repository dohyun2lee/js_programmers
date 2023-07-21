function solution(quiz) {
    var answer = [];
    let A = [];
    let length = quiz.length;
    
    for (let i=0;i<length;i++) {
        A.push(quiz[i].split(' '));
    }
  
    for (let i=0;i<length;i++) {
      let Ans = 0;
        if (A[i][1] == "+") {
            Ans = Number(A[i][0]) + Number(A[i][2]);
        } else {
            Ans = Number(A[i][0]) - Number(A[i][2]);
        }
      
      if (Number(A[i][4]) == Ans) {
        answer.push("O");
      } else {
        answer.push("X");
      }
    }

    return answer;
}
