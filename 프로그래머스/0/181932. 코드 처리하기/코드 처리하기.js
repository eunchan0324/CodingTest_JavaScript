function solution(code) {
    
    let mode = 0;
    let ret = "";
    
    for (let idx=0; idx<code.length; idx++) {
         if (mode==0) {
             if (code[idx] !=1) {
                 if (idx % 2 == 0) {
                     ret += code[idx]
                 }
             } else if (code[idx] == 1) {
                 mode = 1
             }
         } else {
             if (code[idx] !=1) {
                 if (idx % 2 == 1) {
                     ret += code[idx]
                 }
             } else if (code[idx] == 1) {
                 mode = 0
             }
         }
    }
    
    if (ret == "") {
        return "EMPTY"
    } else {
        return ret
    }
    
    
//     문자열 code
//     code 읽으면서 1이면 mode를 바꾼다.
//     mode에 따라 code를 읽어가면서 문자열 ret를 만든다
    
//     mode는 0과1이 있으며, idx를 0부터 code.length-1 까지 1씩 키워나가면서
//     code[idx] 의 값에 따라 다음과 같이 행동한다
    
//     mode가 0일 때
//         code[idx]가 1이 아니면 idx가 짝수일 때만 ret의 맨 뒤에 code[idx] 를 추가
//         code[idx]가 1이면 mode를 0에서 1로 변경
        
//     mode가 1일 때
//         code[idx]가 1이 아니면 idx가 홀수일 때만 ret의 맨 뒤에 code[idx]를 추가
//         code[idx]가 1이면 mode를 1에서 0으로 변경
        
//     문자열 code를 통해 만들어진 문자열 ret를 return 하는 solution함수를 완성해라
    
//     단, 시작할 때 mode는 0이며, return 하려면 ret이 만약 빈 문자열이라면 대신 
//     "EMPTY"를 return 한다.
    

}