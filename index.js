import express from 'express';

const app = express();

const PORT = 3000;

const start = async () => {
  await app.listen(PORT);
  console.log(`Listening on port ${PORT}`);
};

start();
