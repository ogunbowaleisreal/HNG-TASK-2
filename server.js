const express = require('express')
const app = express()
const PORT = process.env.PORT || 3500
const cors = require('cors')
const {is_armstrong, perfect, even, digit_sum, is_prime } = require('./App functions/functions')

app.use(cors())

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

app.get('/api/classify-number:number', async(req,res)=>{
    try{
    const number = parseFloat(req.params.number)
    if(number){
    const response = await fetch(`http://numbersapi.com/${number}/math?json`)
    const data = await response.json()
    jsonText = data.text
    console.log(jsonText)
    const result =is_prime(41)
    const armstrong = is_armstrong(51)
    console.log(result)
    console.log(armstrong)
    const resData = {"is_prime" : result, "properties": properties(number), "is_perfect": perfect(number), "digit_sum": digit_sum(number), "funfact": jsonText }

    res.status(200).json(resData)
    }else{
        res.status(403).json({"message":"BADREQUEST", "err": 403})
    }
    }catch(err){
        console.log(err)
    }

})

app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`)
})