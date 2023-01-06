const express = require('express');
require('./db-config');
const product = require('./schema');
const app = express();
const port = 4500;

app.use(express.json());

app.get('/api/v1/english/all', async (req, res) => {
    let data = await product.find();
    // console.log(data);
    res.send(data);
});

app.post('/insert', async (req, res) => {
    console.log(req.body)
    let data = new product(req.body);
    let result = await data.save();
    res.send(result);
});

app.listen(port, () => console.log(`Port open at ${port}!!`));