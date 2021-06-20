const express = require('express');
const db = require('./queries');
const bodyParser = require('body-parser');
const app = express();
const port =  process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    }),
);

app.get('/', (request: any, response: { json: (arg0: { info: string }) => void }) => {
    response.json({ info: 'Node.js, Express, and Postgres API' });
});
app.get('/modelanswers/', db.getModelAnswers);

app.get('/questions/', db.getQuestions);


app.listen(port, () => {
    console.log('App listening on port ' + port);
});



