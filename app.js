const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello, Minisha mohan from kannur..  you are under investigation for farting silently in office. Be careful we will be watching!hehehe'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
