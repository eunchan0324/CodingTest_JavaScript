function solution(arr, queries) {
    let result = [];
    
    for (let i=0; i<queries.length; i++) {
        let cnt = [];
        for (let j=queries[i][0]; j<=queries[i][1]; j++) {
            if (arr[j] > queries[i][2]) {
                cnt.push(arr[j])
            }
            
        }
        if (cnt.length > 0) {
            result.push(Math.min(...cnt))
        } else {
            result.push(-1)
        }
        
    }
    return result
}