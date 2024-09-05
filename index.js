import express from 'express';
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Storage API Demo');
});

app.get('/user/login', (req, res) => {
  res.send('Hello World!');
});

app.get('/user/logout', (req, res) => {
  res.send('Hello World!');
});

app.get('/students/me', (req, res) => {
  res.send('Hello World!');
});

app.get('/students/data', (req, res) => {
  res.send('Hello World!');
});

app.post('/students/data', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Storage Demo live on http://localhost:${port}`);
});
