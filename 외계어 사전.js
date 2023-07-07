function solution(spell, dic) {
    let array = [];
    let answer = 0;
    
    spell = spell.sort().join('');
    
    for (let i=0;i<dic.length;i++) {
        array.push(dic[i].split('').sort().join(''));
    }
    
    for (let j=0;j<array.length;j++) {
        if (spell === array[j]) {
            answer = 1;
            break;
        } else {
            answer = 2;
        }
     }
