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
        if(num * -1> 0){
            return false
        }
        const numStr = Math.abs(num).toString();
        const numDigits = numStr.length;
        let sum = 0;
      
        for (let i = 0; i < numDigits; i++) {
          const digit = parseInt(numStr[i]);
          sum += Math.pow(digit, numDigits);
        }
      
        return sum === Math.abs(num);
      
}

const digit_sum = (num)=>{
    num = Math.abs(num);
    let sum = 0;
  
    while (num > 0) {
      sum += num % 10; 
      num = Math.floor(num / 10); 
    }
  
    return sum;
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