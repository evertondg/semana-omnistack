const express = require('express');

const routes = express.Router();

// GET , POST , PUT , DELETE
routes.get('/', (req, res) => {

    return res.json({
        message: `Olá ${req.query.name} !`
    });
});



routes.post('/devs', (req, res) => {
    console.log(req.body);

    return res.json({
        ok: true
    });
});

module.exports = routes;