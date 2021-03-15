const app = require('./main');

app.listen(process.env.PORT || 3333, () => {
  console.log(`backend running env: ${process.env.NODE_ENV || 'dev'}`);
});
