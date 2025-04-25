function solution(num_list) {
    let num_h = '';
    let num_j = '';
    
    for (let i = 0; i<num_list.length; i++) {
        if (num_list[i] % 2 == 0) {
            num_j += num_list[i]
        } else {
            num_h += num_list[i]
        }
    }
    
    return (Number(num_h) + Number(num_j))
}