const is_prime = (number)=>{
    const range = []
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

const is_armstrong = (number)=>{
    const num = String(number);
    let sum = 0
    for(let i = 0; i< num.length ; i++){
        sum = sum + (parseInt(num[i])**3)
    }
    return sum == num 
}

const digit_sum = (number)=>{
    let sum = 0
    const num_string = String(number)
    for(let i =0 ; i< num_string.length; i++){
        sum += parseInt(num_string[i])
    }
    return sum 
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