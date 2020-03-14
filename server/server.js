const express = require('express');

const app = express();
const PORT = 3000;
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cookieParser());
app.listen(PORT, () => console.log(`Listening on Port: ${PORT}`));
