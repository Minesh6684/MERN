const mongoose = require('mongoose')

const donationSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'Users',
    },
    address: {
        type: String,
        required: [true, 'Please add Address']
    },
    description: {
        type: String,
        required: [true, 'Please Describe your donation']
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('Donations', donationSchema);