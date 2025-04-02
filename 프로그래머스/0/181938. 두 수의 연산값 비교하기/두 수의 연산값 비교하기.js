function solution(a, b) {
    var answer = 0;
    
    let num1 = Number(`${a}${b}`)
    let num2 = Number(2*a*b)
    
    {
        num1 > num2 ? answer = num1 : answer = num2
    }
    
    return answer;
}