const is_prime = (number)=>{
    const range = []
    if(number * -1 >0){
        return false
    }
    if(number == 1){
        return false
    }
    if (number == 2){
        return true
    }
    for(let i = 2 ; i< number ; i++){
        range.push(i)
    }
    for(i=0; i<range.length; i++){
        if(number %  range[i] == 0){
            return false
        }else{
            continue
        }
    }
    return true
}

const even = (number)=>{
    if (number % 2 == 0){
        return true
    }else{
        return false
    }
}

    function is_armstrong(num) {
        const numStr = Math.abs(num).toString();
        const numDigits = numStr.length;
        let sum = 0;
      
        for (let i = 0; i < numDigits; i++) {
          const digit = parseInt(numStr[i]);
          sum += Math.pow(digit, numDigits);
        }
      
        return sum === Math.abs(num);
      
}

function digit_sum(num) {
    const absNum = Math.abs(num);
    const sum = absNum.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    return num < 0 ? -sum : sum;
  }
  

const perfect = (number)=>{
    const factors = []
    let sum = 0
    for(let i = 1 ; i<number ; i++){
        if (number % i == 0){
            factors.push(i)
        }
    }
    for(let i =0 ; i< factors.length ; i++){
        sum += factors[i]
    }
    return sum == number
    
}

module.exports = {is_prime, is_armstrong, even, perfect, digit_sum}