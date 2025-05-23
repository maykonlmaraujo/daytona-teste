const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from Daytona container!');
});

app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
