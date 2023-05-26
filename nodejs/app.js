const express = require('express');
require('./connection/connection');
const app = express();
const bodyParser = require('body-parser');
const { userRouter } = require('./router/userRouter');

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(userRouter);

app.listen(8080, () => {
    console.log('server devloyed');
});
