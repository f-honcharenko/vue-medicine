const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const e = require('express');
const mongoose = require('mongoose');
const config = require('config');
// 
const User = require('./models/User');

// 

mongoose.connect(config.mongoose.link, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//routes

app.post('/api/auth/register', (req, res, next) => {
    // console.log(req.body);
    let candidate = new User({
        login: req.body.login,
        password: req.body.password,
    });

    candidate.save((err, saveRes) => {
        if (err) {
            return res.status(400).json({
                title: 'error',
                message: err
            });
        } else {
            if (saveRes) {
                return res.status(200).json({
                    title: 'register success',
                    message: '',
                    saveRes
                });
            } else {
                return res.status(404).json({
                    title: 'register error',
                    message: 'result is not dound'
                });
            }

        }
    });
});

app.post('/api/auth/login', (req, res, next) => {
    console.log(req.body.login);
    User.findOne({ login: req.body.login }, {}, (err, findRes) => {
        if (err) {
            return res.status(400).json({
                title: 'error',
                message: err
            });
        } else {
            if (findRes) {
                return res.status(200).json({
                    title: 'login succses',
                    message: '',
                    findRes
                });
            } else {
                return res.status(404).json({
                    title: 'login eror',
                    message: 'not found'
                });

            }
        }
        console.log(err, findRes);
    });
    // console.log(candidate);
    // res.status(600).json({ 'ping': 'pong' });
});



const port = process.env.PORT || 5000;
app.listen(port, (err) => {
    if (err) return console.log(err);
    console.log('Servver running on port ' + port);
}); 
