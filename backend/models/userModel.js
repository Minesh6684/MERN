const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please Enter your name']
    },
    phone: {
        type: String,
        required: [true, 'Please Enter your Phone Number']
    },
    email: {
        type: String,
        required: [true, 'Please Enter your email']
    },
    password: {
        type: String,
        required: [true, 'Please Enter Password']
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('Users', userSchema)