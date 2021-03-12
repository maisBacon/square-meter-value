const app = require('./main');

console.log(process.env.URL);
app.listen(process.env.PORT || 3333);
