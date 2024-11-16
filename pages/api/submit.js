const express = require('express');
const app = express();

app.use(express.json());

app.post('/api/submit', (req, res) => {
  const { code, language } = req.body;

  // You can add validation and processing logic here
  console.log('Received code:', code);
  console.log('Language:', language);

  res.json({ message: 'Code submitted successfully!' });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
