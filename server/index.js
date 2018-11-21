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

app.get('/pizzas', (req, res) => {
    const name = req.params.name
    res.status(200);
    res.send({
        pizzas : [
            {
                name: 'pepperoni',
                price: 12.99 
            },
            {
                name: "hawaiian",
                price: 15.99
            }
        ]
    });
});

app.get('/cookies', (req, res) => {
    const name = req.params.name
    res.status(200);
    res.send({
        cookies: ['chocolate chip' , 'peanut butter' ,'heath bar']
    });
});

app.listen(port, () => {
    console.log(`Now listening on port: ${port}`);
})