function solution(id_pw, db) {
    var answer = '';
    let cnt = 0;
    
    for (let i=0;i<db.length;i++) {
        if (db[i][0] == id_pw[0]) {
            answer = 'wrong pw';
            cnt++;
            if (db[i][1] == id_pw[1]) {
                answer = 'login';
                break;
            }
        } else {
            if (cnt == 0) {
                answer = 'fail';
            }
        }
    }
    
    return answer;
}
