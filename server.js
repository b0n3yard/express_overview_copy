const express = require('express');
const dbtools = require('./browser_stuff/db')

const app = express();

app.use(express.static('./browser_stuff'));
app.use(express.json())

// Returns one fun object by type
app.get('/api/fun/:funThing', (clientRequestObj, serverResponseObj) => {
  const funData = dbtools.getdata()
  const funThing = clientRequestObj.params.funThing;
  // const obj = funData.find((funObj) => {
  //   return funObj.type === 'hiking';
  // });
  const obj = funData.find(funObj => funObj.type === funThing);

  // if (obj) {
  //   return serverResponseObj.json(obj);
  // }

  // serverResponseObj.json({
  //   message: 'Type of that name was not found.'
  // });
  serverResponseObj.send(obj || {message: 'Type of that name was not found'})

});

// Returns all fun data
app.get('/api/fun', (clientRequestObj, serverResponseObj) => {
  const funData = dbtools.getdata()
  serverResponseObj.json(funData);
});

app.post('/api/fun', (req,res) =>{
  const funData = dbtools.getdata()
  funData.push(req.body)
  dbtools.writedata(funData)
  res.json({
    message: "update success"
  })
})

app.listen(3333, () => console.log('Server started on port 3333'));