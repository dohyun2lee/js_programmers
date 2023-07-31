function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    let numerator = (numer1*denom2) + (numer2*denom1);
    let denominator = denom1 * denom2;
    
    let gcd = (denominator, numerator) => (denominator % numerator === 0 ? numerator : gcd(numerator, denominator % numerator));

    console.log(gcd);
  
    answer.push(numerator/gcd(denominator, numerator));
    answer.push(denominator/gcd(denominator, numerator));
    
    return answer;
}
