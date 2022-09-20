require('dotenv').config({
  path: './.env'
});

const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const port = process.env.PORT;
const cowsay = require('cowsay');


// Syncing all the models at once.
conn.sync( {force: true}).then(() => {
  server.listen(port, () => {
    console.log(cowsay.say({
      text: 'Server runnung in localhost:' + port ,
      e: "oO",
      T: "U"
    }))
  })
})
/* conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
app.listen(port, () => {
  console.log(cowsay.say({
    text: '🔥🏍️ Server runnung in localhost:' + port + '🔥🏍️',
    e: "oO",
    T: "U"
  }));
}); */