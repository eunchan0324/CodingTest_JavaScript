function solution(arr, queries) {
    for (let i=0; i<queries.length; i++) {
        const from = queries[i][0]
        const to = queries[i][1]
        
        const temp = arr[from]
        arr[from] = arr[to]
        arr[to] = temp
    }
    return arr
}

