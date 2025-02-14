// app.js file
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const expressValidator = require('express-validator')

module.exports = function () {
    let server = express(),
        create,
        start;

    create = (config, db) => {
        let routes = require('../routes');
        // set all the server things
        server.set('env', config.env);
        server.set('port', config.port);
        server.set('hostname', config.hostname);
        
        // add middleware to parse the json
        server.use(bodyParser.json());
        //server.use(expressValidator());
        server.use(bodyParser.urlencoded({
            extended: false
        }));

        //connect the database
        mongoose.connect(
            db.database,
            { 
                useNewUrlParser: true,
                useCreateIndex: true,
                useUnifiedTopology: true
            }
        );

        // Set up routes
        routes.init(server);
    };

    
    start = () => {
        let hostname = server.get('hostname'),
            port = server.get('port');
        server.listen(port, function () {
            console.log('Express server listening on - http://' + hostname + ':' + port);
        });
    };
    return {
        create: create,
        start: start
    };
};