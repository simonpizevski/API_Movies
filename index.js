import express from "express";

const app = express();
const port = 5080;

app.get('/', (req, res) => {
  res.send('WELCOME');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});