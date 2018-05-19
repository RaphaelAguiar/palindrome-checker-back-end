const express = require('express');
const bodyParser = require('body-parser');
const consign = require('consign');

module.exports = () => {
    var app = express();
    app.use(bodyParser.json());
    consign()
        .include("server/controller")
        .into(app)
    return app;
};