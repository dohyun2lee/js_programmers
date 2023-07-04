function solution(emergency) {
    var answer = [];
    let array = [...emergency];
    let emer = new Map();
        
    array.sort(function(a,b){
        return b - a;
    }); 
  
    for (let i=0;i<array.length;i++) {
            emer.set(array[i], i+1);
    }
  
     for (let i=0;i<emergency.length;i++) {
            answer.push(emer.get(emergency[i]));
    }
      
    return answer;
}
