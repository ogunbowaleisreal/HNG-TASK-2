
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3500;
const cors = require('cors');
const compression = require('compression');
const { is_armstrong, perfect, even, digit_sum, is_prime, properties } = require('./App functions/functions');

app.use(cors());
app.use(compression());
app.use(express.json());

app.get('/api/classify-number', async (req, res) => {
  try {
    const { number } = req.query;
    if (!number || isNaN(parseInt(number))) {
      return res.status(400).json({ "number": number,error: true});
    }
    const num = parseInt(number);
    const response = await fetch(`http://numbersapi.com/${num}/math?json`);
    const data = await response.json();
    const jsontext = data.text
    const resData = {
      number: num,
      is_prime: is_prime(num),
      is_perfect: perfect(num),
      properties: properties(num),
      digit_sum: digit_sum(num),
      fun_fact: jsontext,
    };
    res.status(200).json(resData);
  } catch (err) {
    res.status(400).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
