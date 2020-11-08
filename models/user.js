const { Schema, model } = require('mongoose');


const userSchema = new Schema({
    login: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },

}, {
    collection: 'med-users'
}, {
    timestamps: true
},
);

module.exports = model('User', userSchema); 