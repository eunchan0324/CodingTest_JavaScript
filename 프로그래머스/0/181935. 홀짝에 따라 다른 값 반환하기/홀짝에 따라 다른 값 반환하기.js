function solution(n) {
    
    if (n % 2 == 0) {
        let answer = 0
        for (let i = n; i > 0; i--) {
            if (i % 2 == 0) {
                answer += (i * i)
            }
        }
        return answer;
    } else {
        let result = 0
        for (let i = n; i > 0; i--) {
            if (i % 2 != 0) {
                result += i
            }
        }
        return result;
    }

}