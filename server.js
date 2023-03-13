const express = require('express');
const app = express();
app.use(express.urlencoded({extended: true})) 

app.listen(8080, function () {
  console.log('listening on 8080');
});

app.get('/beuty', function (request, response) {
  response.send('뷰티용품 쇼핑 페이지임');
});

app.get('/', function (request, response) {
  response.sendFile(__dirname + '/index.html');
});

app.get('/write', function (request, response) {
  response.sendFile(__dirname + '/write.html');
});


app.post('/add', (request, response)=>{
  response.send('전송완료');
  console.log(request.body)
})