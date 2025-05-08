function solution(l, r) {
    let result = [];
    for (let i = l; i <= r; i++) {
        if ([...String(i)].every((num) => num === "5" || num === "0")) {
            result.push(i)
        }
    }
    
    return result.length > 0 ? result : [-1]
}