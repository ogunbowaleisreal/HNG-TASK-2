
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3500;
const cors = require('cors');
const compression = require('compression');

app.use(cors());
app.use(compression());
app.use(express.json());

app.use('/api/classify-number', require('./routes/api_route'));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
