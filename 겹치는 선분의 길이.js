function solution(lines) {
  let answer = 0;
  let arr = new Array(201).fill(0);

  for (let i=0;i<3;i++) {
    for (let j=lines[i][0];j<lines[i][1];j++) {
      arr[j]++;
    }
  }

  for (let i in arr) {
    if (arr[i] > 1) {
      answer += 1;
    }
  }
  
  if (lines[0][1]==lines[1][1]&&lines[1][1]==lines[2][1]) {
      answer += 2;
  }  
  if (lines[0][1]==lines[1][1]||lines[1][1]==lines[2][1]||lines[0][1]==lines[2][1]) {
      answer += 1;
  }
    
  return answer;
}
