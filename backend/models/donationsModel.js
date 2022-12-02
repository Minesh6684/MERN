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