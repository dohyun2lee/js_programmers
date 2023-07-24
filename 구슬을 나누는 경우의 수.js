function solution(balls, share) {    
    return factorial(balls) / (factorial(balls - share) * factorial(share));
}

function factorial(number) {
    let Factorial = BigInt(1);
    
    for (let i=1;i<=number;i++) {
        Factorial = Factorial * BigInt(i);
    }
    return Factorial
}
