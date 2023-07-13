function solution(polynomial) {
    let arr = polynomial.split(' ');
    let arrX = [];
    let a = 0;
    let b = 0;
    let arrConstant = [];

    for (let i=0;i<arr.length;i++) {
        if (arr[i].toString().includes('x')) {
            arrX.push(arr[i]);   
        } else if (arr[i].toString().includes('+')) {
            continue;
        } else {
            arrConstant.push(arr[i]);
        }
    }
  
    for (let i=0;i<arrX.length;i++) {
        if (arrX[i] == 'x') {
            a = a + Number(arrX[i].replace('x', '1'));
        } else {
            a = a + Number(arrX[i].replace('x', ''));
        }
    }

    for (let i=0;i<arrConstant.length;i++) {
        b = b + parseInt(arrConstant[i]);
    }
    
    if (a == 0 && b == 0) {
        return(0);
    } else if (a == 0 && b != 0) {
        return(b);
    } else if (a != 0 && b == 0) {
        if (a == 1) {
            return("x");
        }
        return(a+"x");
    } else {
        if (a == 1) {
            return("x + "+b);
        }
        return(a+"x + "+b);
    } 
}
