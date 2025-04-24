function solution(num_list) {
    
    let numA = 1;
    let numB = 0;
    
    for (let i = 0; i < num_list.length; i++) {
        numA *= num_list[i]
    }
    
    for (let i = 0; i < num_list.length; i++) {
        numB += num_list[i]
    }
    
    if (numA < numB ** 2) {
        return 1
    } else {
        return 0
    }
}