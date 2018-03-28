const express = require('express');
const app = express();

app.use(express.static('static'));

app.listen(1427, () => console.log('Example app listening on port 1427!'));


