function solution(ineq, eq, n, m) {    
    if (eq == '=') {
        return Number(eval(`n ${ineq}${eq} m`))
    } else {
        return Number(eval(`n ${ineq} m`))
    }
}