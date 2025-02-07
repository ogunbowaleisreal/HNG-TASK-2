const functions = require('../App functions/functions')
const properties = require('./properties')

function hasDecimalPoint(str) {
  const num = parseFloat(str);
  return !isNaN(num) && num % 1 !== 0;
}


const main =  async (req, res) => {
    try {
      const { number } = req.query;
      if (!number || isNaN(parseInt(number)) || hasDecimalPoint(number) ) {
        return res.status(400).json({ "number": number,error: true});
      }
      const num = parseInt(number);
      const response = await fetch(`http://numbersapi.com/${num}/math?json`);
      const data = await response.json();
      const jsontext = data.text
      const resData = {
        number: num,
        is_prime: functions.is_prime(num),
        is_perfect: functions.perfect(num),
        properties: properties(num),
        digit_sum: functions.digit_sum(num),
        fun_fact: jsontext,
      };
      res.status(200).json(resData);
    } catch (err) {
      res.status(400).json({ error: 'true', "number": number });
    }
  }

  module.exports = {main}