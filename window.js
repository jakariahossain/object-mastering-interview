var name = 'Someone';
function add(num1, num2){
    result = num1 + num2;
    console.log('Result Inside', name);
    function double(num){
        return num * 2;
    }
    var total = double(result);
    return total;
    
}
console.log('Result Outside', name);
const sum = add(13, 21);
console.log(sum);
console.log('Result outside',result);