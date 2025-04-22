function solution(a, d, included) {        
    let arr = []
    let n = included.length;
    
    arr[0] = a
    
    for (i=1; i<n; i++){
     arr[i] = arr[i-1] + d
    }
    
    let sum = 0
    
    for (i=0; i<n; i++) {
        if (included[i] == true) {
            sum += arr[i]
        }
    }
    
    return sum

}