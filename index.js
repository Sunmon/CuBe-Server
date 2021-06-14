const express = require('express');
const path = require('path');

const app = express();
app.set('port', process.env.PORT || 3000);
app.set('front', process.env.FRONT || path.join(__dirname, '../frontend')); // TODO: env 파일 설정
/* its MIME type ('text/html') is not a supported ~ 에러 발생 
app.get('/', (req, res) =>
  res.sendFile(path.join(app.get('front'), '/index.html')),
); */
app.use(
  '/',
  express.static(path.join(app.get('front'), '/')),
); /* 에러 발생하지 않으나 모든 파일에 접근 가능 */

app.listen(app.get('port'), () => {
  console.log(app.get('port'), 'is listening...');
});
