function solution(letter) {
    var answer = '';
    let array = [];
    
    const morse = new Map ([
        ['.-','a'],
        ['-...','b'],
        ['-.-.','c'],
        ['-..','d'],
        ['.','e'],
        ['..-.','f'],
        ['--.','g'],
        ['....','h'],
        ['..','i'],
        ['.---','j'],
        ['-.-','k'],
        ['.-..','l'],
        ['--','m'],
        ['-.','n'],
        ['---','o'],
        ['.--.','p'],
        ['--.-','q'],
        ['.-.','r'],
        ['...','s'],
        ['-','t'],
        ['..-','u'],
        ['...-','v'],
        ['.--','w'],
        ['-..-','x'],
        ['-.--','y'],
        ['--..','z'],
    ])
    
    array = letter.split(' ');
    
    for(let i=0;i<array.length;i++) {
        let x = array[i];
        answer = answer + morse.get(x);
    }
   
    return answer;
}
