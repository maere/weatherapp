const express = require('express');
const app = express();

const DEFAULT_PORT = 3000;


app.get('/api', function(request, response){
  response.send('Hello World!\n');
  });

app.get('/api/greeting', function(request, response){
    const greeting = request.query.name !== undefined ? `Hello ${request.query.name}!` :`Hello stranger...`;
    response.send({ greeting });
    });

const server = app.listen(process.env.port || DEFAULT_PORT, function(){
  const port = server.address().port;
  console.log(`Server listening on port ${port}!`);
});
