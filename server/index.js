const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

app.get('/', (request, response) => {
    response.status(200);
    response.send('YAYYY!!!!');
});

app.get('/hello/:name', (req, res) => {
    const name = req.params.name
    res.status(200);
    res.send(`Hello ${name}`);
});


app.listen(port, () => {
    console.log(`Now listening on port: ${port}`);
})