const mongoose = require('mongoose')

const donationSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'Users',
    },
    name: {
        type: String,
        required: [true, "Please add Doner's name"]
    },
    phone: {
        type: String,
        required: [true, "Please add Doner's Phonr number"]
    },
    address: {
        type: String,
        required: [true, 'Please add Address']
    },
    description: {
        type: String,
        required: [true, 'Please Describe your donation']
    },
    isDonated: {
        type: Boolean,
        default: false
    },
    isReserved: {
        type: Boolean,
        default: false
    },
    reservedFor: {
        type: String,
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('Donations', donationSchema);