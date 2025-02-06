const express = require('express')
const app = express()
const PORT = process.env.PORT || 3500
const cors = require('cors')
const {is_armstrong, perfect, even, digit_sum, is_prime } = require('./App functions/functions')

app.use(cors())

const armstrong = is_armstrong(123)
console.log(armstrong)

const properties =(number)=>{
    const evenorOdd = even(number) ? true : false
    const armstrong = is_armstrong(number)
    if(armstrong && evenorOdd){
        return ['armstrong', 'even']
    }
    if(armstrong){
      return ['armstrong','odd']       
    }else{
        return evenorOdd ? ['even'] : ['odd']
    }
}

app.get('/api/classify-number', async(req,res)=>{

    try{
    const string = req.query.number
    if(string){
        number = parseInt(string) 
        if(number){
    const response = await fetch(`http://numbersapi.com/${number}/math?json`)
    const data = await response.json()
    jsonText = data.text
    const resData = {"number": number,"is_prime" : is_prime(number), "is_perfect": perfect(number), "properties": properties(number),"digit_sum": digit_sum(number), "fun_fact": jsonText }
    res.status(200).json(resData)
    }else{
        res.status(400).json({"number": string, "error": true})
    }}
    }catch(err){
        console.log(err)
    }
})

app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`)
})