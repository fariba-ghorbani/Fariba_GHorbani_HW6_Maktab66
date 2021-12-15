function check(num) {
    return num != -1;
}
function solution(arr) {
    let temp = (arr.filter(check)).sort();
    let j = 0;
    for (let i of temp) {
        while (arr[j] === -1) {
            j++;
        }
        arr[j] = i;
        j++;
    }
    return arr
}

console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180]))