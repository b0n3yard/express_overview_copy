const express = require('express');
const funData = require('./fun.json');
// const path = require('path');

const app = express();

app.use(express.static('./browser_stuff'));


// app.get('/index.html', (clientRequestObj, serverResponseObj) => {
//   serverResponseObj.sendFile(path.join(__dirname, './browser_stuff/index.html'));
// });

// app.get('/css/style.css', (clientRequestObj, serverResponseObj) => {
//   serverResponseObj.sendFile(path.join(__dirname, './browser_stuff/css/style.css'));
// });


app.get('/api/user', (clientRequestObj, serverResponseObj) => {
  serverResponseObj.send({
    name: 'JD',
    age: 43
  });
});

// app.get('/api/fun/:funThing/something'

app.get('/api/fun/:funThing', (clientRequestObj, serverResponseObj) => {
  const funThing = clientRequestObj.params.funThing;
  // const obj = funData.find((funObj) => {
  //   return funObj.type === 'hiking';
  // });
  const obj = funData.find(funObj => funObj.type === funThing);

  if (obj) {
    return serverResponseObj.json(obj);
  }

  serverResponseObj.json({
    message: 'Type of that name was not found.'
  });

});

app.get('/api/fun', (clientRequestObj, serverResponseObj) => {
  serverResponseObj.json(funData);
});

app.listen(3333, () => console.log('Server started on port 3333'));