const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user: {type: String, required: true},
    password: {type: String, required: true, unique: true},
    admin: {type: Boolean, required: true},
   dateCreated: Date
});

module.exports = mongoose.model('User', userSchema);