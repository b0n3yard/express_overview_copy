const express = require('express');
const funData = require('./fun.json');

const app = express();

app.use(express.static('./browser_stuff'));

// Returns one fun object by type
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

// Returns all fun data
app.get('/api/fun', (clientRequestObj, serverResponseObj) => {
  serverResponseObj.json(funData);
});


app.listen(3333, () => console.log('Server started on port 3333'));