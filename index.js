const express = require('express');
const path = require('path');

const app = express();
app.set('port', process.env.PORT || 3000);
app.set('front', process.env.FRONT || path.join(__dirname, '../frontend')); // TODO: env 파일 설정
app.use('/', express.static(path.join(app.get('front'), '/public')));

app.listen(app.get('port'), () => {
  console.log(app.get('port'), 'is listening...');
});
