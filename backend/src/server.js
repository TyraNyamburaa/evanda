import app from './index.js';

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});
